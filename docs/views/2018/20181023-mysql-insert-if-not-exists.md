---
title:  "MySQL：不重复插入"
date:  2018-10-23 09:08:12
categories: 
  - 数据库
tags:
  - MySQL
---

## 说明

* 数据库中不存在同样的记录，就插入

## 业务场景

* 需要向客户发送天气预警
* 按城市和日期，轮询天气的接口
* 定时任务，获取city和date的数据，如果t_city_weather表不存在city和date的组合记录，就插入

## t_city_weather表结构

```sql
create table `ykb_city_weather` (
  `id` int(10) not null auto_increment,
  `city` varchar(50)  comment '城市',
  `weather` varchar(20000) default '' comment '天气',
  `date` date  comment '时间',
  primary key (`id`)
);
```

## 实现思路

* 方案一：利用唯一索引阻挡重复的数据插入，用ignore忽略sql执行错误
* 方案二：利用临时表暂存来源数据，用exists过滤重复的数据后，一次性插入
* 方案三：利用dual表存放来源数据，用exists过滤重复的数据后，逐条插入
* 方案一和方案三适用于代码调用sql，方案二也适用于纯数据库操作

### 方案一：唯一索引

* 声明约束，city和date组合唯一索引

```sql
alter table t_city_weather modify city varchar(50) not null;
alter table t_city_weather modify date date not null;
alter table t_city_weather add constraint CityDate_Unique UNIQUE (city,date);
```

* 插入

```sql
insert ignore into t_city_weather (city, date) values (?, ?)
```

### 方案二：临时表和exists

* 创建临时表，无条件接收数据，接收前清空（数据不存在city和date重复的记录）

```sql
create table tmp_city_date (
city varchar(50),
date date
)
```

* 插入t_city_weather，用exists过滤重复

```sql
insert into t_city_weather a (city, date)
select city, date
  from tmp_city_date b
 where not exists (a.city = b.city and a.date = b.date);
```

### 方案三：dual表和exists

* 假设在java代码中可以拿到来源数据的值

```sql
insert into t_city_weather (city, date)
select ?, ?
  from dual
 where not exists (select * 
                     from t_city_weather 
                    where city = ? 
                      and date = ?)
```                      

## jFinal中的批量处理

* 采用方案一

```java
        if (distinctCityDateList != null && !distinctCityDateList.isEmpty()) {
            int size = distinctCityDateList.size();
            Object[][] params = new Object[size][2];
            for (int i = 0; i < size; i++) {
                Record record = distinctCityDateList.get(i);
                params[i][0] = record.getStr("city");
                params[i][1] = record.getStr("date");
            }
            // city和date不重复的情况下，才插入
            db.batch("insert ignore into ykb_city_weather (city, date) values (?, ?)", params, 1000);
        }
```
