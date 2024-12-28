---
sidebar_position: 1
---

# 本指南将涵盖哪些内容？（什么是Lazy服务器？）

我们在这里使用“Lazy服务器”来描述一个仅在玩家活跃使用时运行的Minecraft服务器。这是一种在服务器上没有玩家24/7在线时节省资源的好方法。然而，在这些类型的服务器上托管BlueMap会带来一个问题，因为当服务器离线时，BlueMap集成的Web服务器也会离线。

本指南将介绍如何设置一个启用了BlueMap的Lazy Minecraft服务器，并详细说明一种即使在服务器离线时也能24/7查看地图（和地图标记）的设置。


## 设置懒人服务器

可以使用[lazymc]项目来设置一个Lazy Minecraft服务器。本质上，它的行为就像一个普通的Minecraft服务器，足以接受传入的连接请求，启动Minecraft服务器（如果尚未运行），并将连接透明地代理到它。

一旦服务器运行，它会监控当前玩家的数量，并在服务器为空时将其关闭。它还可以配置为暂停Minecraft服务器而不是关闭它，以便在下一位玩家连接时可以立即恢复。

有关如何设置和配置lazymc的详细说明，请参阅项目的README。


## 配置BlueMap

根据需要安装和配置BlueMap（参见[入门指南]）。

在本指南中，我们将假设BlueMap使用`FILE`类型的存储并启用`GZIP`压缩来存储所有数据，因为这是默认配置。当然，也可以使`SQL`类型的存储和未压缩的地图数据工作，但这需要一些本指南未涵盖的额外工作。

由于我们将使用外部Web服务器，因此无需将BlueMap集成的Web服务器暴露给外界。要使服务器仅限本地访问，请在`webserver.conf`中，在现有的`port: <some port>`设置上方添加`ip: "127.0.0.1"`。请记下配置中的`<some port>`，因为稍后您将需要它。


## 配置外部Web服务器以提供地图服务

由于Minecraft服务器（以及集成的BlueMap Web服务器）不会一直在线，我们需要使用其他东西来托管BlueMap Web应用程序和资源。本指南将提供一个[Nginx]的配置示例，但同样的思路也可以应用于任何其他Web服务器。

大部分配置与[外部Web服务器（FILE存储）]页面上详细说明的完全相同，因此为了理解基础知识，可能值得先快速浏览一下该页面。在这种情况下，我们*预期*集成的Web服务器在服务器离线时会关闭，因此代理应返回一些占位符数据以保持前端正常运行。

请注意，如果[lazymc]配置为暂停服务器而不是关闭它，Nginx需要配置一个较短的`proxy_read_timeout`，以避免在等待集成Web服务器的响应时挂起。这是因为暂停的服务器会接受连接，但无法以任何方式响应请求。


## 在服务器离线时伪造“实时”数据

前端尝试从`/maps/<world>/live/`下的端点加载实时数据（标记、玩家）。

在关闭时（以及定期），BlueMap会将当前的实时状态写入`<webroot>/maps/<world>/live/`中的文件。这些文件恰好具有前端正在寻找的路径，因此我们可以直接从webroot正常处理请求（如果请求的文件不存在，则返回204 No Content响应）。


## Nginx配置示例

```nginx
server {
  listen 80;
  server_name yourdomain.com;

  # BlueMap webroot的路径，BlueMap也可以在子文件夹中使用..只需相应地调整路径
  root /var/www;

  location /maps/ {
    # 所有高分辨率瓦片数据和一些json数据已预压缩为*.gz文件
    gzip_static always;

    # 如果请求的瓦片缺失，则返回204 No Content
    location ~* ^/maps/[^/]*/tiles/ {
      error_page 404 = @no-content;
    }

    # 将所有实时数据的请求代理到集成的Web服务器。
    # 如果无法联系到，则回退到@server-offline。
    location ~* ^/maps/[^/]*/live/ {
      proxy_read_timeout 2s;  # 如果lazymc暂停服务器而不是关闭它，则需要此设置
      error_page 502 504 = @server-offline;
      proxy_pass http://127.0.0.1:8100;  # 集成Web服务器的默认端口，根据您的设置进行调整
    }
  }

  location @no-content {
    internal;
    return 204;
  }

  # 当无法访问集成的Web服务器时，从磁盘提供“实时”数据
  location @server-offline {
    internal;
    try_files $uri =204;
  }
}
```

:::important

上述配置**仅是一个示例**，并不是一个可以直接复制粘贴的完整配置。您**需要**根据您的设置进行调整！

:::


[lazymc]:https://github.com/timvisee/lazymc

