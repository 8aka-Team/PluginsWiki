---
sidebar_position: 3
---


# 使用NGINX反向代理BlueMap

以下是一些如何使用NGINX反向代理你的BlueMap的示例。

如果你想将地图集成到你的网站中，或者想要添加SSL功能，这将非常有用。

## 假设 / 前提条件
- 你可以访问服务器的shell（不仅仅是Minecraft控制台）。
- 你已经安装了NGINX
  [安装指南](https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/)。
- NGINX与BlueMap的集成Web服务器运行在同一台机器上。*（如果不是这种情况，你需要在下面的示例中将`localhost`替换为正确的IP地址）*
- BlueMap的集成Web服务器运行在端口`8100`上。*（同样，只需在下面将`8100`替换为实际端口）*

:::info

如果你愿意，你可以告诉内部Web服务器只连接到特定的地址，例如`127.0.0.1`，
这样它就不再可以从外部访问（默认情况下它连接到所有可用的接口）：  
要做到这一点，只需打开`webserver.conf`并在某处添加`ip: "127.0.0.1"`设置。

:::

## 将BlueMap放在网站的子目录中
如果你有一个使用NGINX托管的普通网站，并希望将地图放在`/map`下（例如`https://mydomain.com/map`），那么
你只需将此添加到你的NGINX配置中：
```nginx
server {
  
  ...

  location /map/ {
    proxy_pass http://127.0.0.1:8100/;
  }
}
```

## 将BlueMap放在子域名中
如果你希望将BlueMap放在子域名下，例如`https://map.mydomain.com/`，那么你可以在
你的nginx配置中添加如下内容：
```nginx
server {
  listen 80;
  listen 443 ssl;

  server_name map.mydomain.com;

  location / {
    proxy_pass http://127.0.0.1:8100;
  }
}
```