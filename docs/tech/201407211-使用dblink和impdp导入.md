---
layout: post
title:  "Oracle 使用database link和impdp导入"
date:   2014-07-21 06:59:47
catalog: true
tags:
    - Oracle
---

> 通俗的说，就是Oracle用户数据复制

## 使用场景

* 同一个实例下，想快速复制用户A的数据给用户B。用户B是新建的用户，复制用户A的数据用于测试。

* 用户A在实例1上，用户B在实例2上。两个实例可以远程访问。想快速复制用户A的数据给用户B。

## 同机复制

* 创建directory
```sql
drop directory dump_dir;
create directory dump_dir as 'D:\dump';
```

* 授权directory给目标用户userb
```sql
grant read, write on directory dump_dir to userb;
```

* 用户userb登录，创建database link链接到usera
```sql
create public database link dblink_usera connect to usera identified by usera_password using 'usera_sid';
```

* impdp导入
```sql
impdp userb/userb_password network_link=dblink_usera directory=dump_dir logfile=impdump.log remap_schema=usera:userb
```

## 异机复制

> 和同机复制的区别只有创建database link

* 用户userb登录，创建database link链接到usera
```sql
create public database link dblink_usera 
connect to usera identified by usera_password
using '(description=(address_list=(address=(protocol=tcp)(host='xxx')(port=1521)))(connect_data=(sid=usera_sid)))';
```
