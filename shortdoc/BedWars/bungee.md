---
sidebar_position: 2
---

# BungeeCord 模式

Screaming BedWars 支持 BungeeCord 模式，该模式允许单竞技场服务器自动加入竞技场。本文档提供了如何配置此模式的说明。

:::note Velocity 支持

    此模式也兼容 Velocity。确保在代理的 `velocity.toml` 文件中启用了 `bungee-plugin-message-channel`。

:::

## 配置游戏服务器

要启用 BungeeCord 模式，请在 `config.yml` 中找到 `bungee` 部分，并将 `enabled` 设置为 `true`。然后，根据您的需求配置每个选项：

* `serverRestart` - 决定游戏结束后服务器是否应重启。这对插件来说不是强制性的；根据需要调整此设置。要启用服务器重启，必须在 `spigot.yml` 中定义现有的启动脚本（`.sh` 或 `.bat`）。
* `serverStop` - 类似于 `serverRestart`，但仅关闭服务器。仅在您有单独的软件管理自动服务器启动时使用此选项。
* `server` - 指定游戏结束后玩家将被移动到的中心服务器。
* `auto-game-connect` - 决定用户加入服务器后是否应自动加入 BedWars 游戏。除非由附加组件管理，否则通常应启用此选项。
* `kick-when-proxy-too-slow` - 如果代理无法将玩家移动到中心服务器或速度太慢，服务器将踢出等待时间过长的玩家。
* `random-game-selection` - 如果同一服务器上有多个竞技场，则启用随机选择竞技场。将 `enabled` 设置为 `true` 以使用此功能。`preselect-games` 选项对于在任何玩家加入之前（在服务器启动或上一场游戏结束后）知道下一个选择的游戏非常有用。
* `motd` - 对于使用 MOTD 文本的服务器选择插件（如 [BungeeSigns](https://www.spigotmc.org/resources/bungeesigns.6563/)）非常有用。如果启用，插件将根据当前状态和玩家数量更新 MOTD。有五种状态：`waiting`、`waiting_full`、`running`、`rebuilding` 和 `disabled`。使用占位符 `%name%` 表示竞技场名称，`%current%` 表示当前玩家数量，`%max%` 表示最大玩家数量。可以使用传统颜色代码（`§<color code>`）为消息着色。

配置部分可能如下所示：

```yaml
bungee:
  enabled: false
  serverRestart: true
  serverStop: false
  server: hub
  auto-game-connect: false
  kick-when-proxy-too-slow: true
  random-game-selection:
    enabled: true
    preselect-games: false
  motd:
    enabled: false
    waiting: '%name%: 等待玩家 [%current%/%max%]'
    waiting_full: '%name%: 游戏已满 [%current%/%max%]'
    running: '%name%: 游戏进行中 [%current%/%max%]'
    rebuilding: '%name%: 重建中...'
    disabled: '%name%: 游戏已禁用'
```

## 配置中心服务器

虽然 Screaming BedWars 没有大厅插件，但可以使用任何服务器选择插件，例如 [BungeeSigns](https://www.spigotmc.org/resources/bungeesigns.6563/)。能够读取 MOTD 的插件是首选，因为它们可以将游戏状态传递到您的中心服务器。

如果您更喜欢使用基于库存的 GUI 而不是标志，并希望显示服务器 MOTD 中的信息，您可以使用任何与 [PlaceholderAPI](https://placeholderapi.com/) 兼容的库存插件，例如 [DeluxeMenus](https://www.spigotmc.org/resources/deluxemenus.11734/)。推荐使用 [Pinger 扩展](https://wiki.placeholderapi.com/users/placeholder-list/#pinger)，因为它提供了用于此目的的占位符。要使用 DeluxeMenus 创建服务器选择器，您可以参考 [此指南](https://wiki.helpch.at/helpchat-plugins/deluxemenus/example-gui-menus#server-selector) 并查看 [此示例](https://github.com/HelpChat/DeluxeMenus-Wiki/blob/master/gui_menus/serverselector.yml)。

<!-- TODO: 列出可能的选项并提供小教程 -->

:::tip 同步统计信息

    对于 BungeeCord 网络，通常将统计信息同步到数据库。按照 [此处](config.md#database-connection) 的描述配置 `database` 部分。确保所有服务器都连接到同一个数据库。

    要在大厅中访问统计信息，最简单的选项是在您的中心服务器上也安装 Screaming BedWars。确保此实例未处于 BungeeCord 模式。或者，您可以创建一个附加组件来检索统计信息。数据库结构在 [数据库配置部分](config.md#database-connection) 的末尾有详细说明。

:::