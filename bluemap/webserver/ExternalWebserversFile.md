---
sidebar_position: 1
---

# 使用外部Web服务器直接从文件存储托管BlueMap

BlueMap的内部Web服务器非常轻量且速度很快，但在面对大量并发用户时可能会不堪重负。

如果您想为更多用户优化Web应用程序的速度，您也可以直接使用外部Web服务器（如[NGINX](https://www.nginx.com/)或[Apache](https://httpd.apache.org/)）来托管BlueMap。为此，您需要进行一些配置。

## 目标
BlueMap将地图渲染并保存为许多小块，称为“瓦片”。这些瓦片以树状文件夹结构保存在以下路径中：`<webroot>/maps/<map-id>/tiles/`。低分辨率数据保存在[PNG](https://en.wikipedia.org/wiki/PNG)文件中，可以直接正常提供。高分辨率瓦片数据保存在[GZip](https://en.wikipedia.org/wiki/Gzip)压缩的PRBM（修改后的[PRWM](https://github.com/kchapelier/PRWM)）文件中。现在的问题是，Web应用程序（浏览器）请求的是未压缩的`.prbm`文件，但普通的Web服务器只能找到压缩的`.prbm.gz`文件。

**例如：** Web应用程序请求一个瓦片：`/maps/world/tiles/0/x9/z-8.prbm`。如果您的Web服务器现在搜索该文件，它将找不到，因为实际需要的文件是这个：`/maps/world/tiles/0/x9/z-8.prbm.gz`！而且它还是压缩的。

:::info
除了地图瓦片之外，可能还有其他地图文件仅以压缩形式存在。例如`<webroot>/maps/<map-id>/textures.json.gz`。
:::

**因此，我们需要做两件事：**
- 如果存在.gz文件，则在内部将请求重定向到该文件的.gz版本
- 告诉浏览器我们发送的文件实际上是GZip压缩的，浏览器在将其提供给Web应用程序之前需要解压缩它。*（我们可以使用[http-header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)`Content-Encoding: gzip`来实现这一点）*

可选：
- 如果任何地图瓦片不存在，而不是返回404并在浏览器控制台中显示错误，我们返回204（无内容）。
- 如果您使用的是插件/模组，通常地图上会有实时更新的玩家标记。为了使这些标记在外部Web服务器上正常工作，您还需要将所有请求`/maps/*/live/*`反向代理到内置的Web服务器。

## NGINX
在NGINX中，实际上只需要一行配置即可完成这两件事*（找到.gz文件并设置标头）*：`gzip_static always;`

因此，结合上下文，您的网站配置可能如下所示：
```nginx
server {
  listen 80;
  server_name yourdomain.com;
  
  # 指向bluemap-webroot的路径，BlueMap也可以在子文件夹中使用..只需相应地调整路径
  root /var/www;
  
  location /maps/ {
    # 找到.gz文件并设置"Content-Encoding: gzip"标头
    gzip_static always;

    # 将404转换为204以处理地图瓦片
    location ~* ^/maps/[^/]*/tiles/ {
      error_page 404 = @empty;
    }
  }
  
  location @empty {
    return 204;
  }

  # 可选：
  # 将实时数据的请求代理到BlueMap集成的Web服务器。
  # 如果您有多个服务器，则需要将每个map-id代理到正确的服务器。
  location ~* ^/maps/[^/]*/live/ {
    proxy_pass http://127.0.0.1:8100;
  }
}
```
:::important

**重要提示：**

上述配置**只是一个示例**，并不是一个可以直接复制粘贴的完整配置。你**需要**根据你的设置进行调整！
:::

## Apache2
### Apache2模块
这需要启用Apache的HEADERS、REWRITE和所有PROXY（PROXY和PROXY_HTTP）模块。  
*（您可以通过`apache2ctl -M`检查已启用的模块，并确认这些模块是否已启用。不要忘记在通过`a2enmod MODULENAME`安装任何缺失的模块后重新启动apache2）*

### Apache2配置
```apache
DocumentRoot /var/www/
<Directory /var/www/>
  allow from all
  Options FollowSymLinks
  Require all granted
  SetEnv no-gzip

  RewriteEngine on

  # 如果存在.gz文件，则重定向到该文件
  RewriteCond %{REQUEST_FILENAME}.gz -s
  RewriteRule ^(.+) $1.gz

  # 添加content-encoding标头以告诉浏览器解压缩
  <FilesMatch .gz$>
    Header set Content-Encoding gzip
  </FilesMatch>
  
  # 如果地图瓦片不存在，则发送204
  RewriteCond %{REQUEST_URI} "^/maps/[^/]*/tiles/"
  RewriteCond %{REQUEST_FILENAME} !-s
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^.*$ - [R=204,L]
</Directory>

# 可选：
# 将实时数据的请求代理到BlueMap集成的Web服务器。
# 如果您有多个服务器，则需要将每个map-id代理到正确的服务器。
ProxyPreserveHost On
ProxyPassMatch ^/(maps/[^/]*/live/.*) http://127.0.0.1:8100/$1
```
:::important

**重要提示：**

上述配置**只是一个示例**，并不是一个可以直接复制粘贴的完整配置。你**需要**根据你的设置进行调整！
:::

## Caddy 配置
```
yourdomain.com {
# 指向 bluemap-webroot 的路径，BlueMap 也可以在子文件夹中使用，只需相应地调整路径
  root * /var/www
  file_server
  
  # 匹配 textures.json 文件和 .prbm 文件
  @gz path /maps/*/textures.json *.prbm
  # 查找 .gz 文件（如果未找到则返回 204），并为上述匹配器设置 "Content-Encoding gzip" 头
  handle @gz {
  try_files {path}.gz =204
  header Content-Encoding gzip
  }
  
  # 对于不存在的 map-tiles 返回 204
  @204 path */tiles/*
  handle @204 {
  try_files {path} =204
  }
  
  # 可选：
  # 将实时数据的请求代理到 bluemaps 集成的 webserver。
  # 如果你有多个服务器，你需要将每个 map-id 代理到正确的服务器。
  handle /maps/*/live/* {
  reverse_proxy 127.0.0.1:8100
  }
}
```
:::important

**重要提示：**

上述配置**只是一个示例**，并不是一个可以直接复制粘贴的完整配置。你**需要**根据你的设置进行调整！
:::
