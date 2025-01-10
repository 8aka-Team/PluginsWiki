---
sidebar_position: 1
---

# 使用1.20.5+的传输功能

设置为true以启用传输功能。确保在您的服务器配置中启用了此功能，并考虑调整Velocity或其他代理/插件中的登录速率限制设置，以避免传输问题。默认值为false。

```yaml
enabled: false
```

指定验证后玩家应传输到的服务器IP或域名。这是玩家用于连接到您的服务器的IP或域名（例如，play.my-server.com）。

```yaml
destination-host: play.my-server.com
```

定义源服务器连接的端口。默认值为25565，这是标准端口，除非您的服务器需要不同的端口。

```yaml
destination-port: 25565
```

有关详细设置指南，请参阅[YouTube教程](https://youtu.be/aSWrzQVjGnc?t=71)。

:::info
如果您的服务器允许Bedrock玩家通过Geyser加入，请确保为Geyser设置[TransferTool](https://github.com/onebeastchris/TransferTool)，以便Bedrock玩家被重定向到正确的服务器。
:::