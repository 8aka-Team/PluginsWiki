# 权限

要使用该插件，您必须为您的玩家授予权限。建议使用权限插件，如GroupManager、PermissionsEx或LuckPerms。

如果您没有权限插件，可以使用[此解决方法](https://github.com/GeorgH93/Minepacks/wiki/FAQ#how-can-i-use-the-plugin-without-a-permission-plugin)。

## 权限：
下表列出了所有权限、它们的默认值以及它们所属的组。

| 权限                            | 描述                                          | 默认值   | backpack.disable | backpack.user | backpack.bypass | backpack.admin |
|:------------------------------|:--------------------------------------------|:------|:-----------------|:--------------|:----------------|:---------------|
| backpack.use                  | 允许玩家使用背包                                    | false | false            | true          |                 |                |
| backpack.size.1               | 将玩家的背包大小设置为1行（如果玩家拥有`backpack.use`权限，将自动授予） | false |                  | true          |                 |                |
| backpack.size.2               | 将玩家的背包大小设置为2行                               | false |                  |               |                 |                |
| backpack.size.3               | 将玩家的背包大小设置为3行                               | false |                  |               |                 |                |
| backpack.size.4               | 将玩家的背包大小设置为4行                               | false |                  |               |                 |                |
| backpack.size.5               | 将玩家的背包大小设置为5行                               | false |                  |               |                 |                |
| backpack.size.6               | 将玩家的背包大小设置为6行                               | false |                  |               |                 |                |
| backpack.sort                 | 允许玩家使用排序命令                                  | false |                  | true          |                 |                |
| backpack.clean                | 允许玩家使用清理命令                                  | false | false            | true          |                 |                |
| backpack.clean.other          | 允许玩家清理其他玩家的背包                               | OP    |                  |               |                 | true           |
| backpack.fullpickup           | 为玩家启用自动拾取（如果在配置中启用）                         | true  |                  |               |                 |                |
| backpack.others               | 允许玩家查看其他玩家背包的内容                             | OP    | false            |               |                 | true           |
| backpack.others.edit          | 允许更改其他玩家背包的内容                               | OP    |                  |               |                 | true           |
| backpack.keepOnDeath          | 允许玩家在死亡时保留背包内容                              | OP    | true             |               |                 |                |
| backpack.noCooldown           | 禁用玩家的命令冷却时间                                 | OP    |                  |               | true            |                |
| backpack.ignoreGameMode       | 允许玩家绕过游戏模式过滤器                               | OP    |                  |               | true            |                |
| backpack.ignoreWorldBlacklist | 允许玩家绕过世界过滤器                                 | OP    |                  |               | true            |                |
| backpack.update               | 允许玩家使用更新命令                                  | OP    |                  |               |                 | true           |
| backpack.reload               | 允许玩家使用重载命令                                  | OP    |                  |               |                 | true           |
| backpack.migrate              | 允许玩家使用迁移命令                                  | OP    |                  |               |                 | true           |
| clearInventory                | 允许玩家使用清空背包命令                                | OP    |                  |               |                 |                |
| clearInventory.other          | 允许玩家清空其他玩家的背包                               | OP    |                  |               |                 |                |