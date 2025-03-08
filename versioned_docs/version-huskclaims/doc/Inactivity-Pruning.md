---
sidebar_position: 8
---

# 不活跃删除

HuskClaims 支持自动修剪/过期用户在可配置的时间段（以天为单位）内未登录的声明。启用后，修剪将在每个服务器启动时进行。由不活跃用户创建的声明将退还其声明块。

请注意，启用此设置后，不活跃修剪将立即开始。在启用此功能时请谨慎操作，并考虑在必要时备份数据库。

## 自动修剪
要启用自动声明修剪，请编辑 [`config.yml` 文件](config) 中声明部分的 `inactivity_pruning`，将 `enabled` 设置为 true。

<details>
<summary>自动修剪 (config.yml)</summary>

```yaml
  # 自动删除由现在不活跃用户创建的声明的设置
  inactivity_pruning:
    # 是否删除所有由标记为不活跃的用户创建的声明。（警告：危险！）
    enabled: false
    # 用户必须未登录的天数才能被标记为不活跃（最小值：1）
    inactive_days: 60
    # 排除修剪的世界列表。
    excluded_worlds: []
    # 排除不活跃声明修剪的用户列表（通过 UUID 或用户名）
    excluded_users: []
```
</details>

在这里，您还可以自定义用户必须未登录的天数才能被视为不活跃（默认为 60 天），并提供不应修剪的声明世界名称列表。

<details>
<summary>进一步修剪自定义 (config.yml)</summary>

```yaml
    # 排除修剪的世界列表。
    excluded_worlds: [ 'world_the_end' ]
    # 排除不活跃声明修剪的用户列表（通过 UUID 或用户名）
    excluded_users: [ 'William278', '2c9e9697-0517-4e7a-825d-916a2eaebd64' ]
```
</details>

最后，您可以提供要排除在自动修剪之外的用户的 UUID 或用户名列表。