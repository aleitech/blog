---
title:  "Oracle DBA手记：无法使用AWR"
date:   2018-01-08 21:22:16
categories:
  - 数据库
tags:
  - Oracle
---

> 数据库调优，但是AWR无法正常使用

## 查看AWR

* 使用Oracle sql developer
* 打开dba窗口，菜单栏-View-DBA
* 新建连接，要求用户具有DBA权限
* Connections-Connection-Performance-AWR-AWR Report View
* 选择snapshot id，显示空白，无法正常使用
![无法选择snapshot](/blog/img/in-post/20180109-snapshot-no-results.png)

## 检查信息统计的级别

* 查看
```sql
SHOW PARAMETER STATISTICS_LEVEL 
```
* 如果STATISTICS_LEVEL的值为TYPICAL或者 ALL，表示启用AWR
* 如果STATISTICS_LEVEL的值为BASIC，表示禁用AWR 
* 检查结果是，VALUE为ALL，启用了AWR
* 那么，是其他原因导致AWR无法使用

## 排查相关的主要视图

* 快照历史，查询为空，说明视图已失效，无法使用
```sql
select * from dba_hist_snapshot;  
```

* 会话历史，查询有结果
```sql
select * from dba_hist_active_sess_history;
```

## 检查快照

* 查询
![查询快照](/blog/img/in-post/20180109-snapshot-not-work.png)

* 快照的sample_time，远远落后于当前日期2018-01-03，说明快照已经多日未生成 

## 检查表空间

* 查询表空间使用情况（包含已用尽的表空间）
```sql
select b.file_id 文件ID号,
       b.tablespace_name 表空间名,
       b.file_name 表空间文件,
       b.bytes/1024/1024||'M'字节数,
       round((b.bytes-sum(nvl(a.bytes,0)))/1024/1024,1) ||'M' 已使用,
       round(sum(nvl(a.bytes,0))/1024/1024,1) ||'M' 剩余空间,
       round(100 - sum(nvl(a.bytes,0))/(b.bytes)*100,2) 占用百分比
  from dba_free_space a,dba_data_files b
 where a.file_id(+)=b.file_id
 group by b.tablespace_name,b.file_id,b.bytes,b.FILE_NAME 
order by b.tablespace_name, b.file_id; 
```

![查询表空间](/blog/img/in-post/20180109-datafiles-no-free.png)

* SYSAUX表空间，是快照存储的表空间，已经耗尽，导致快照备份功能停止
* 查询SYSAUX表空间的使用情况
```sql
SELECT occupant_name "Item", 
      space_usage_kbytes / 1048576 "Space Used (GB)", 
      schema_name "Schema", 
      move_procedure "Move Procedure" 
FROM v$sysaux_occupants 
ORDER BY 2 ;
```
* SYSTEM表空间，用于存储整个数据库的数据字典、程序结构(包括过程、函数、包、触发器)
* 10g以后，Oracle默认打开数据库审计功能，记录所有DML操作，储存在SYSTEM表空间
* 如果关闭审计功能，SYSTEM表空间大小一般不会超过2G

## 修改统计信息保存时间

* 由默认的31天改成7天，过期的统计信息会自动被删除
```sql
select dbms_stats.get_stats_history_retention from dual; 
exec dbms_stats.alter_stats_history_retention(7);
select dbms_stats.get_stats_history_retention from dual; 
```

## 清理或扩展表空间

* 生成清理SYSAUX表空间语句，然后使用sysdba登录执行，清除所有快照
```sql
select distinct 'truncate  table  '||segment_name||';',s.bytes/1024/1024
  from dba_segments s
where s.segment_name like 'WRH$%'
  and segment_type in ('TABLE PARTITION', 'TABLE')
  and s.bytes/1024/1024>100
  order by s.bytes/1024/1024/1024 desc;
```
* 另一种清理过期快照的方法，比较慢，实际调用delete
```sql
begin 
     dbms_workload_repository.drop_snapshot_range( 
      low_snap_id => 1, 
      high_snap_id => 36768, 
      dbid => 1148453265); 
end; 
```
* 扩展表空间之前，务必要检查磁盘剩余空间是否足够
* 扩展SYSTEM表空间
```sql
alter database datafile 'E:\APP\ADMINISTRATOR\ORADATA\ORCL\SYSTEM01.DBF' resize 14G;
```

