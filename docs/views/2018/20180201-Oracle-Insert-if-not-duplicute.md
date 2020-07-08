---
title:  "Oracle insert忽略重复记录"
date:   2018-02-01 14:58:22
categories:
  - 数据库
tags:
  - Oracle
---

> 向Oracle数据库中插入记录，但是有部分数据在库中已存在

## 场景

* 插入数据报错，提示唯一性约束冲突
* 插入的数据由中间件通过网络取得，并不清楚取得的数据和数据库中的数据是否存在唯一性冲突
* 需求是，存在冲突，就不插入

## 方案一

* 利用Oracle的Comments
```sql
-- 假设表名是t_employees, 冲突的索引名是i_employees_code
insert into /*+ ignore_row_on_dupkey_index(t_employees, i_employees_code) */
       t_employees (id, code, name, memo) values (?, ?, ?, ?)
```

## 方案二

* 创建临时表t_temp，将中间件取得的数据插入到临时表
* 通过exists函数排除重复的数据
```sql
insert into t_employees a 
       (id, code, name, memo) 
select id, code, name, memo
  from t_temp b
 where not exists
       (select 1
          from a.code = b.code
       )
```
