---
sidebar_position: 1
---

# 常规设置

启用使用GitHub API进行自动更新检查，以确保Sonar保持最新状态。默认值：`true`

```yaml
check-for-updates: true
```

确定Sonar是否在控制台中记录玩家的IP地址。默认值：`true`

```yaml
log-player-addresses: true
```

允许使用相同IP地址在线的玩家数量。如果您有一个允许玩家使用多个备用账户的服务器，您可能希望增加此数值。任何尝试加入的玩家，如果已经有超过最大数量的玩家使用相同IP地址在线，将被踢出。默认值：`3`

```yaml
max-online-per-ip: 3
```