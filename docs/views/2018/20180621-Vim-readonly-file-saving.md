---
title:  "Vim保存对只读文件的修改"
date:   2018-06-21 09:23:44
categories:
  - 开发工具
tags:
  - Vim
---

## 场景

* Vim修改文件，已经编辑了一些内容
* 保存的时候，提示此文件是只读文件，无法保存
* 如果强制退出，那么之前编辑的内容全部丢失，费时费力

## 操作

* 提示只读文件，无法保存时，在vim中运行
```shell
:w !sudo tee %
```

## 解释

### sudo

* 切换权限到超级用户，可以操作只读文件

### !

* ! 意思是 执行后面的shell命令

### % 

* % 意思是 当前文件
* 全局替换:%s/xxx/yyy/，%就表示的范围就是当前文件

### w

* w并不是表示更新，而是save as
* 比如在file1中编辑完成后，:w file2，内容就会保存为file2，file1没有发生变化
* w的作用是输出缓存内容
* 接收方可以是文件，也可以是shell命令
* :w !cat就是把文件内容打印到控制台

### tee

* tee具有双层输出的作用
* 第一，输出到指定的文件，可以指定多个文件名，覆盖
* 第二，输出到标准输出standard output，可以供管道操作
* 相当于echo和>
* 与>的差异在于，tee必须接收管道输出， >不能接收管道输出
```shell
  echo "hello world" > file1.txt  
  # file1.txt文件有内容

  echo "hello world" | > file2.txt  
  # file2.txt文件内容为空

  echo "hello world" | tee file3.txt  
  # file3.txt文件有内容，同时，控制台输出hello world

  echo "hello world" tee file4.txt  
  # file4.txt文件不会生成, 控制台显示hello world tee file4.txt
```
