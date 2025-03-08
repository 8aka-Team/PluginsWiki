---
sidebar_position: 8
---

# 使用 Traefik 反向代理 BlueMap

以下是一些如何使用 Traefik 反向代理 BlueMap 的示例。

如果您想将地图集成到您的网站中，或者想添加 SSL 功能，这将非常有用。

## 假设 / 前提条件
- 您可以访问服务器的 shell（不仅仅是 Minecraft 控制台）。
- 您已经运行了 Traefik
  [安装](https://doc.traefik.io/traefik/getting-started/install-traefik/)。
- Traefik [文件目录](https://doc.traefik.io/traefik/providers/file/#directory) 已配置。
- Traefik 可以访问 BlueMap 的集成 Web 服务器。*(在此示例中，我们使用 IP `127.0.0.1`)*
- BlueMap 的集成 Web 服务器在端口 `8100` 上运行。*(如果不是这种情况，您需要将下面的 `8100` 替换为实际端口)*

:::info

> 如果您愿意，可以告诉内部 Web 服务器仅连接到特定地址，例如 `127.0.0.1`，
> 这样它就不再可以从外部访问（默认情况下，它只是连接到所有可用接口）：  
> 要做到这一点，只需打开 `webserver.conf` 并在某处添加 `ip: "127.0.0.1"` 设置。

:::

## BlueMap 在子域名上
如果您希望 BlueMap 在子域名上，例如 `https://bluemap.example.com`，则可以这样做：
```yaml
http:
  routers:
    bluemap:
      entryPoints:
        - "websecure"
      rule: "Host(`www.example.com`) && PathPrefix(`/bluemap/`)"
      service: "bluemap"
      tls:
        certResolver: letsencrypt
  services:
    bluemap:
      loadBalancer:
        servers:
          - url: "http://127.0.0.1:8100"
```

## BlueMap 在网站的子目录中
如果您希望 BlueMap 在网站的子目录中，例如 `https://www.example.com/bluemap`，则可以这样做：
```yaml
http:
  routers:
    bluemap:
      entryPoints:
        - "websecure"
      rule: "Host(`www.example.com`) && PathPrefix(`/bluemap/`)"
      service: "bluemap"
      tls:
        certResolver: letsencrypt
      middlewares:
        - "bluemapprefix"
  services:
    bluemap:
      loadBalancer:
        servers:
          - url: "http://127.0.0.1:8100"
  middlewares:
    bluemapprefix:
        stripprefix:
        prefixes: "/bluemap/"
```
