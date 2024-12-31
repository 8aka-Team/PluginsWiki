---
sidebar_position: 6
---

# RoseResourcepack 

![横幅](https://github.com/ladakx/RoseResourcepack/blob/master/banner.png?raw=true)

**RoseResourcepack** 是一个强大的插件，简化了为 Minecraft 服务器创建和分发资源包的过程。只需两条命令，您就可以生成、压缩并将资源包应用到游戏中——无需手动上传到云存储！

## 关键命令

- **`/roserp zip`**: 将资源包文件压缩为 zip 存档。
- **`/roserp texture`**: 将资源包存档应用到游戏中。

该插件自动在您的服务器上托管资源包，无需外部存储解决方案。只需配置、命令并开始游戏！

---

## 工作原理

RoseResourcepack 在单独的端口上启动一个轻量级 Web 服务器来托管和分发资源包。这使得玩家可以无缝下载和安装资源包，而不会影响服务器性能。不再需要依赖 Dropbox 或 Google Drive 等第三方云存储！

---

## 插件功能

- **集成资源包托管**: 直接从您的服务器托管资源包。
- **多版本支持**: 兼容 Minecraft 1.16.5 至 1.21.3 版本。
- **MiniMessage 支持**: 使用 MiniMessage 自定义消息。
- **多个资源包**: 同时应用多个资源包。
- **与其他插件集成**: 与 BetterHUD、ItemsAdder 和 Oraxen 等插件兼容。
- **资源包保护**: 保护您的资源包不被解包。
- **异步处理**: 异步构建资源包，减少延迟。
- **自动 SHA1 哈希生成**: 自动生成 SHA1 哈希值。
- **自动交付**: 玩家登录时自动交付资源包。
- **重置资源包命令**: 允许玩家通过命令重置其资源包。
- **多包应用**: 为玩家应用多个资源包（Minecraft 1.20.3+）。
- **强制安装**: 强制客户端安装资源包（Minecraft 1.17+）。
- **自定义消息支持**: 在客户端的提示屏幕上显示自定义消息。

---

## 安装与配置

1. **打开端口**: 在您的服务器上打开一个端口（例如 `8085`）用于资源包托管。有关如何打开端口的说明可以在线查找或联系您的托管提供商。

2. **在插件设置中配置端口**: 在插件配置文件中输入所选端口。*注意:* 更改端口需要重启服务器。

---

## 要求

- **Minecraft 服务器软件**: Spigot 或 Paper（版本 1.16.5 至 1.21.3）
- **Java**: Java 16 或更新版本

---

## 路线图

以下功能计划在未来的版本中发布：

- **WorldGuard 标志**: 与 WorldGuard 集成，实现区域特定的资源包。
- **扩展版本支持**: 添加对 Minecraft 1.8 及以上版本的支持。
- **强制安装被踢出的玩家**: 为重新加入的玩家重新应用资源包。
- **资源包混淆**: 增强资源包的安全性。

---

## 支持

需要帮助？通过以下方式联系我们：

- **问题跟踪器**: 直接在 GitHub 上报告问题。
- **讨论**: 加入我们的 [SpigotMC 论坛](https://www.spigotmc.org/resources/roseresourcepack-premium-auto-host-resourcepack.120602/) 讨论。
- **Discord**: 加入我们的 [Discord](https://discord.gg/EzXaxQCFQR) 社区，获取快速响应。

对于私密或敏感问题，您可以发送私信。通常在 12 小时内回复，工作时间内的回复速度更快。

---

## 有用链接

- [文档](https://www.spigotmc.org/resources/roseresourcepack-premium-auto-host-resourcepack.120602/field?field=documentation)
- [Discord 支持](https://discord.gg/EzXaxQCFQR)
- [SpigotMC 页面](https://www.spigotmc.org/resources/roseresourcepack-premium-auto-host-resourcepack.120602/)

## 插件统计

[![插件统计](https://bstats.org/signatures/bukkit/RoseResourcepack.svg)](https://bstats.org/plugin/bukkit/RoseResourcepack/23796)

---

感谢您选择 **RoseResourcepack** 来满足您的 Minecraft 服务器需求！我们很高兴帮助您轻松高效地管理资源包。