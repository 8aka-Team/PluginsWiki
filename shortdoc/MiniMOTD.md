---
sidebar_position: 4
---

# MiniMotd

## 配置
MiniMOTD 使用 HOCON (`.conf`) 文件格式作为其配置文件。以 `#` 开头的行表示注释。建议使用支持 HOCON 语法高亮的编辑器以获得最佳体验。VSCode 和 Sublime Text 都有可用的 HOCON 扩展。

### 基本配置
对于基本配置，我们只关注 `main.conf` 配置文件。以下是默认配置供参考：

```ini
# MiniMOTD 主配置

# 启用服务器列表图标相关功能
icon-enabled=true
# 启用 MOTD 相关功能
motd-enabled=true
# 要显示的 MOTD 列表
#
# - 支持的占位符：{onlinePlayers}, {maxPlayers}
# - 如果添加多个 MOTD，每次刷新时会随机选择一个
motds=[
    {
        # 设置与此 MOTD 一起使用的图标
        #  可以使用 'random' 随机选择一个图标，或者使用图标文件夹中的文件名（不包括 '.png' 扩展名）
        #    例如：icon="myIconFile"
        icon=random
        line1="<rainbow>MiniMOTD 默认"
        line2="MiniMessage <gradient:blue:red>渐变"
    },
    {
        # 设置与此 MOTD 一起使用的图标
        #  可以使用 'random' 随机选择一个图标，或者使用图标文件夹中的文件名（不包括 '.png' 扩展名）
        #    例如：icon="myIconFile"
        icon=random
        line1="<blue>另一个 <underlined><bold><red>MOTD"
        line2="<italic><gradient:red:green>非常棒</gradient>"
    }
]
player-count-settings {
    # 将此设置为 true 将禁用显示在线玩家用户名的悬停文本
    disable-player-list-hover=false
    # 假玩家数量功能的设置
    fake-players {
        # 模式：static, random, percent
        #
        # - static: 将添加此数量的假玩家
        #    例如：fakePlayers: "3"
        # - random: 将添加此范围内的随机数量的假玩家
        #    例如：fakePlayers: "3:6"
        # - percent: 玩家数量将按此百分比增加，向上取整
        #    例如：fakePlayers: "25%"
        fake-players="25%"
        # 启用假玩家数量功能
        fake-players-enabled=false
    }
    # 将此设置为 true 将禁用玩家列表悬停（与 'disable-player-list-hover' 相同），
    # 但也会导致玩家数量显示为 '???'
    hide-player-count=false
    # 将最大玩家数量设置为比在线玩家数量多 X
    # 例如：x=3 -> 16/19 玩家在线。
    just-x-more-settings {
        # 启用此功能
        just-x-more-enabled=false
        x-value=3
    }
    # 更改最大玩家数量
    max-players=69
    # 启用最大玩家数量的修改
    max-players-enabled=true
}
```

### 高级配置
对于代理服务器，有更多的配置可用。在 `plugin_settings.conf` 中，您可以将特定的 MOTD 配置（位于 `extra-configs` 文件夹中）分配给特定的虚拟主机。默认的 `plugins_settings.conf` 如下供参考。
```ini
# MiniMOTD 插件配置

# 仅在代理（Velocity 或 Waterfall/Bungeecord）上运行插件时适用的设置
proxy-settings {
# 在这里，您可以将 'extra-configs' 文件夹中的配置分配给特定的虚拟主机
# 可以使用 'extra-configs' 中的配置名称，或者使用 "default" 以使用 main.conf 中的配置
#
# 格式为 "hostname:port"="configName|default"
virtual-host-configs {
"minigames.example.com:25565"=default
"skyblock.example.com:25565"=skyblock
"survival.example.com:25565"=survival
}
# 设置是否启用虚拟主机测试模式。
# 启用后，MiniMOTD 将在每次服务器 ping 时向控制台打印虚拟主机调试信息。
virtual-host-test-mode=false
}
# 您是否希望插件在启动时检查 GitHub 上的更新？
# https://github.com/jpenilla/MiniMOTD
update-checker=true
```