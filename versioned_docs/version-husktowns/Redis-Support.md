---
sidebar_position: 5
---

# Redis 支持

对于连接的服务器网络，HuskTowns 支持 Redis（v5.0+）作为默认插件消息传递协议的替代方案，适用于希望使用它的服务器。

## 设置
要使用 Redis，您的网络必须首先在 `cross_server` 模式下正确配置。然后，按照以下步骤操作：
1. 关闭所有服务器。
2. 确保您的 Redis 服务器在线。
3. 修改每个服务器的 `config.yml` 文件，在 `cross_server` 部分填写 Redis 的 `credentials`。
   - 大多数 Redis 安装默认没有密码。您可能可以将 `password` 留空（`''`）。
4. 将 `messenger_type` 设置为 `REDIS`。
5. 保存您的配置文件并启动每个服务器。检查以确保插件在启动时成功启用了网络消息传递。如果没有，请检查您的凭据（必要时尝试不设置密码并关闭 SSL 模式）。
