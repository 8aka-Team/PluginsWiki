---
sidebar_position: 6
---

# 使用Pterodactyl和Nginx设置反向代理

为BlueMap设置反向代理的扩展指南，使用Pterodactyl和Nginx。

## 假设/前提条件
- 您可以访问服务器的shell（不仅仅是Minecraft控制台）。
- 您已经安装并运行了Pterodactyl。
- 您应该对如何使用Pterodactyl和Nginx有基本的了解。
- 您已经安装了NGINX
  [安装](https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/)。
- NGINX与BlueMap的集成Web服务器运行在同一台机器上。*（如果不是这种情况，您需要在下面的示例中将`localhost`替换为正确的IP）*
- BlueMap的集成Web服务器运行在端口`8100`上。*（同样，只需在下面将`8100`替换为实际端口）*

:::info

> 我们建议您先阅读[使用NGINX反向代理BlueMap](https://bluemap.bluecolored.de/wiki/webserver/NginxProxy.html)指南。
> 还有[Pterodactyl Minecraft社区指南](https://pterodactyl.io/community/games/minecraft.html)，其中包含有关分配的有用信息。

:::

## 在Pterodactyl中设置服务器分配
我们需要为BlueMap Web服务器创建本地Pterodactyl分配。这可以通过在Pterodactyl面板中创建新的分配来完成。

1. 前往Pterodactyl管理区域。
2. 在所需节点上为您要创建代理的服务器创建新的分配。
> 将`IP地址`设置为`172.18.0.1`以及您所需的端口
3. 将新创建的分配添加到您要创建代理的服务器。
> 如果您更改了端口，请确保在`webserver.conf`文件中也进行编辑。

## 在NGINX配置块中的使用
您需要在配置块中使用Pterodactyl的穿透IP（`172.18.0.1`）以使反向代理工作。
您通常可以在`/etc/nginx/sites-available/`中找到要编辑的配置文件。

### BlueMap在您网站的子目录中
与[使用NGINX反向代理BlueMap](https://bluemap.bluecolored.de/wiki/webserver/NginxProxy.html)相同，只是您需要使用Pterodactyl的穿透IP（`172.18.0.1`）。
如果您有一个使用NGINX托管的普通网站，并希望将地图放在`/map`下（例如`https://mydomain.com/map`），那么
您只需将此添加到您的NGINX配置中：
```nginx
server {
  
  ...

  location /map/ {
    proxy_pass http://172.18.0.1:<your desired port>;
  }
}
```

### BlueMap在您网站的子域名中
与[使用NGINX反向代理BlueMap](https://bluemap.bluecolored.de/wiki/webserver/NginxProxy.html)相同，只是您需要使用Pterodactyl的穿透IP（`172.18.0.1`）。
如果您希望BlueMap在一个子域名上，例如`https://map.mydomain.com/`，那么您可以在
您的nginx配置中添加如下内容：
```nginx
server {
  listen 80;
  listen 443 ssl;

  server_name map.mydomain.com;

  location / {
    proxy_pass http://172.18.0.1:<your desired port>;
  }
}
```


