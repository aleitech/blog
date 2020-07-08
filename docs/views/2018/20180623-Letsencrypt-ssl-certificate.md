---
title:  "使用免费SSL证书"
date:   2018-06-23 10:17:57
categories:
  - 操作系统与网络
tags:
    - Network
---

> 免费一年的阿里云DV证书到期，继续使用需要续费
> 不想每年都折腾
> 申请证书时，blog二级域名没通过，查了不是敏感词，发工单没回复

## 场景

* http不安全，会被监听，劫持后添加广告
* 免费的SSL证书
* 长期有效
* 服务器环境：CentOS 7, Nginx

## 安装客户端certbot-auto

* certbot-auto客户端用于获取let's encrypt的证书
* certbot官网说，可通过仓库安装certbot。尝试过，部分主机有效，但是需要更新依赖
* 更通用的方式获取客户端
```shell
$ wget https://dl.eff.org/certbot-auto
$ chmod a+x ./certbot-auto
```

## 获取SSL证书

* 外网防火墙需要放开80,443端口
* 停止运行nginx
```shell
# service nginx stop
```
* 获取证书，多个域名，独立服务(相对于nginx的静态网页服务)
```shell
$ ./certbot-auto certonly --standalone -d yourdomain.com -d sub.yourdomain.com
```
* 根据提示，输入必要信息，比如邮箱（我用了域名注册的邮箱）
* 完成后，证书存储在/etc/letsencrypt/live/yourdomain.com/
* (备忘，无需执行)另一种获取证书的方式，静态网页服务
```shell
$ ./certbot-auto certonly --webroot -w /home/wwwroot/yourhtmlweb.com -d  yourhtmlweb.com
```

## 测试证书更新

* 运行前，必须停止nginx，否则占用80端口报错
* 测试通过显示Congratulations
```shell
./certbot-auto renew --dry-run
```

## 配置nginx

* 在/etc/nginx/conf.d路径下，新建sub.yourdomain.com.conf文件，添加如下内容
```shell
server {
    listen 443;
    server_name sub.yourdomain.com
    ssl on;
    ssl_certificate   /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key  /etc/letsencrypt/live/yourdomai.com/privkey.pem;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;
    location / {
        proxy_pass http://127.0.0.1:8080;
    }
}
```
* 启动nginx
```shell
# service nginx start
```

## 定时任务更新证书

* 免费证书90天后过期
* let's encrypt支持自动续约
* 配置定时任务，每2个月更新
```shell
# crontab -e
15 2 20 */2 * /home/alei/./certbot-auto renew --pre-hook "service nginx stop" --post-hook "service nginx start"
```
