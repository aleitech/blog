---
title:  "docker操作入门"
date:  2018-11-29 10:35:42
categories:
  - 云原生
tags:
  - docker
---

## 说明

* 前提是已经了解docker基本的概念和命令
* 本文关注动手，实际操作

## 准备

* 本机Windows操作系统
* 安装Virtual box, 网络配置正常，推荐NAT + Host-only
* Virtual box安装Centos 7
* 假设Centos的访问地址是192.168.56.11

## 踩坑

* 将踩坑放在前面，节省大家的时间

### docker版本区别

* 1.13版是一个分界线
* 1.13版之前的命令行，不支持docker image和docker container
```shell
1.13版之前的命令
sudo docker images
sudo docker ps
1.13版及之后的命令，结构更清晰(之前的命令依然有效)
sudo docker image ls
sudo docker container ls
```
* 本文采用1.13版之后的命令
* 1.13版之后，docker分CE和EE版本，一个免费，一个收费

### 无法删除镜像

* 用id删除可能会遇到，优先使用repository:tag删除
```shell
当删除docker image时，报错：
Error response from daemon: conflict: unable to delete 568c4670fa80 (cannot be forced) - image has dependent child images
这时，可以先tag下该image:
docker tag 568c4670fa80 repository:tag
然后再次删除:
docker rmi repository:tag
即可删除；
```

## 操作

### 安装

* 安装
```shell
sudo yum install docker
```

* 检查docker版本
```shell
docker --version
```

* 启动，后台会出现2个进程
```shell
sudo systemctl start docker
```

### 构建一个nginx镜像

* 当前目录，准备文件
```shell
mkdir docker-demo
cd docker-demo
mkdir html
echo '<h1>Hello, My Docker!</h1>' > html/index.html
```

* 当前目录，新建文件Dockerfile，内容如下
```shell
FROM nginx
COPY html/* /usr/share/nginx/html
```

* Dockerfile的内容含义是，从Docker Hub拉取一个nginx镜像，然后将html目录下的文件复制到镜像中的/usr/share/nginx/html路径

* 构建镜像，别忘了最后一个.
```shell
sudo docker build -t docker-demo:0.01 .
```

* -t 是指加tag，加标签
* docker-demo是服务名，0.01是版本或者标签

### 操作镜像和容器

* 查看镜像
```shell
sudo docker image ls
```

* 通过镜像，创建容器，提供服务
```shell
sudo docker run --name my-docker-nginx -d -p 8080:80 docker-demo:0.01
```

* 外部访问这个my-docker-nginx服务，返回<h1>Hello, My Docker!</h1>
```shell
在本机Windows上访问， http://192.168.56.11:8080
在Centos虚拟机上访问，curl http://localhost:8080
```

* 查看正在运行的容器
```shell
sudo docker container ls
```

* 停止运行容器
```shell
sudo docker container stop my-docker-nginx
```

* 查看所有的容器，包含停止的
```shell
sudo docker container ls -a
```

* 删除容器
```shell
sudo docker container rm my-docker-nginx
```

* 删除镜像
```shell
sudo docker rmi 镜像id  
或者
sudo docker rmi 镜像仓库:tag 
```
