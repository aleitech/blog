---
title:  "CentOS 创建sudo用户"
date:   2018-06-21 06:24:16
categories:
  - 操作系统与网络
tags:
  - Linux
---

## 场景

* 新建的CentOS服务器
* 出于安全考虑，禁止使用root远程登录
* 增加sudo用户

## 增加用户

* 注意，bash的提示符#, 表示当前用户是root; $, 非root用户
* 使用root登录之后，创建用户tom
```shell
# adduser tom
```
* 设置密码
```shell
# passwd tom
```
* 增加到具有sudo权限的用户组wheel
```shell
# usermod -a -G wheel tom
```

## 启用wheel用户组的sudo权限

* 修改/etc/sudoers文件
```shell
# vi /etc/sudoers
```

* 去掉前面的注释符号#
```shell
%wheel  ALL=(ALL)       ALL
```

## 禁止root登录ssh

* 修改/etc/ssh/sshd_config
```shell
PermitRootLogin no
```

* 重启sshd
```shell
# service sshd restart
```
