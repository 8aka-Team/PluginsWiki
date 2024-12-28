---
sidebar_position: 3
---

# 命令与权限

:::info
 **通常你不需要使用任何命令来让BlueMap正确渲染和更新地图。**
 即使你删除了你的世界并创建了一个新的，只要地图配置正确，BlueMap应该会自动检测到这一点并删除旧地图，
 然后渲染新的世界。  
 只有当你更改了一些地图设置或其他需要重新渲染地图的配置时，你可能需要
 手动清除地图。
:::


以下是一个表格，列出了所有命令及其权限，如果你将BlueMap作为插件/模组使用，你可以使用这些命令：

:::info
 看起来像`<this>`的参数是**必填的**！  
 看起来像`[this]`的参数是**可选的**！
:::

| 命令                                                    | 权限           | 描述                                                                                                                                                                                                                                             |
|------------------------------------------------------------|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/bluemap`                                                 | bluemap.status       | 显示BlueMap的渲染状态                                                                                                                                                                                                                         |
| `/bluemap version`                                         | bluemap.version      | 显示BlueMap的版本和一些有用的系统信息                                                                                                                                                                                       |
| `/bluemap help`                                            | bluemap.help         | 显示所有可能的BlueMap命令列表                                                                                                                                                                                                        |
| `/bluemap reload [light]`                                  | bluemap.reload       | 重新加载所有资源、配置文件和Web服务器 *(`light` => 重新加载除资源（资源包/模组）之外的所有内容，速度更快)*                                                                                              |
| `/bluemap maps`                                            | bluemap.status       | 显示BlueMap加载的所有地图                                                                                                                                                                                                                        |
| `/bluemap worlds`                                          | bluemap.status       | 显示BlueMap加载的所有世界                                                                                                                                                                                                                      |
| `/bluemap storages`                                        | bluemap.status       | 显示所有配置/可用的存储                                                                                                                                                                                                                 |
| `/bluemap storages <storage>`                              | bluemap.status       | 显示该存储上所有地图的列表                                                                                                                                                                                                       |
| `/bluemap storages <storage> delete <map>`                 | bluemap.delete       | 从该存储中删除（未加载的）地图 *(要删除已加载的地图，请使用`/bluemap purge <map>`命令)*                                                                                                                                       |
| `/bluemap stop`                                            | bluemap.stop         | 暂停所有渲染 *(在服务器重启后仍然有效)*                                                                                                                                                                                                 |
| `/bluemap start`                                           | bluemap.start        | 恢复所有暂停的渲染 *(在服务器重启后仍然有效)*                                                                                                                                                                                         |
| `/bluemap freeze <map-id>`                                 | bluemap.freeze       | 暂停特定地图的所有更新 *(在服务器重启后仍然有效)*                                                                                                                                                                                 |
| `/bluemap unfreeze <map-id>`                               | bluemap.freeze       | 恢复之前冻结的地图的所有更新 *(在服务器重启后仍然有效)*                                                                                                                                                                       |
| `/bluemap purge <map-id>`                                  | bluemap.purge        | 清除（删除）已渲染地图的所有数据 *(只要地图未被冻结，之后会重新渲染)*                                                                                                                                     |
| `/bluemap update [world / map] [x z] [block-radius]`       | bluemap.update       | 更新整个世界或可选的玩家周围的指定半径 *(仅渲染已更改的区块)*BlueMap会自动检测并更新你的地图，通常你不需要使用这个命令 :)                                                 |
| `/bluemap fix-edges [world / map] [x z] [block-radius]`    | bluemap.update.force | 重新渲染地图的边缘 **(即使没有任何更改)** *(通常在更改地图边界后出现问题时会有所帮助)*                                                                                              |
| `/bluemap force-update [world / map] [x z] [block-radius]` | bluemap.update.force | 渲染整个世界或可选的玩家周围的指定半径 **(即使没有任何更改)** BlueMap有一种非常可靠的方法来检测你世界中的变化并仅渲染这些变化。你应该只在测试时使用这个命令！ |
| `/bluemap cancel [task-ref]`                               | bluemap.cancel       | 取消队列中的最后一个（或引用的）渲染任务 你通常不需要使用这个命令。考虑使用`/bluemap freeze`代替 :)                                                                                              |
| `/bluemap debug block [world x y z]`                       | bluemap.debug        | 打印玩家（或指定）位置的方块的一些调试信息                                                                                                                                                                            |
| `/bluemap debug map [map x z]`                             | bluemap.debug        | 打印玩家（或指定）位置的地图图块的一些调试信息                                                                                                                                                                          |
| `/bluemap debug flush <world>`                             | bluemap.debug        | 保存世界并刷新计划的图块更新                                                                                                                                                                                                      |
| `/bluemap debug cache`                                     | bluemap.debug        | 清除BlueMap的世界缓存                                                                                                                                                                                                                           |
| `/bluemap debug dump`                                      | bluemap.debug        | 创建一个文件`./bluemap/dump.json`，包含关于BlueMap当前状态的大量信息                                                                                                                                                               |
