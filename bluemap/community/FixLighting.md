---
sidebar_position: 10
---

# 修复世界光照问题

有时，你的地图可能会出现一些光照问题...  
例如，如果这是一个从非常旧的Minecraft版本升级而来的世界。  
或者许多地球地图也存在这个问题。它们通常不是在Minecraft本身中创建的，而是通过第三方工具（如WorldPainter）创建的，这些工具生成的是最小的区块数据，因此它们通常缺少光照信息等重要组件。

通常情况下，你不会注意到这一点，因为当玩家加载区块时，服务器会自动修复光照数据。  
然而，BlueMap直接从磁盘读取区块数据，而不是通过服务器。这种方式效率更高，并且使BlueMap能够轻松支持多个平台，但这也意味着区块数据在BlueMap读取之前需要是完整的。

这就是为什么在开始渲染地图之前，先运行一个工具来修复这些区块中的数据可能会很有用。  
我们推荐使用Chunky，因为它在BlueMap运行的大多数平台上都受支持，但对于基于Bukkit的服务器，Light Cleaner也是一个选择。

## Chunky 使用说明

:::important

> Chunky似乎无法修复最新版本Paper（1.21.3+）的光照问题！  
> 如果你使用的是Paper 1.21.3或更高版本，请跳转到下面的**Light Cleaner 使用说明**部分。

:::

首先确保你已经安装了Chunky。你可以在[modrinth.com/plugin/chunky](https://modrinth.com/plugin/chunky)下载它。  
现在要修复世界中的光照问题，我们需要强制重新加载世界中的所有区块。可以通过以下步骤完成：
1. 打开Chunky的配置文件：`Chunky/config.yml`
2. 将选项`force-load-existing-chunks`设置为`true`，并保存文件
3. 重启服务器，或运行`chunky reload`以重新加载服务器上的配置文件
4. 使用`/chunky world <world-name>`设置世界
5. 使用`/chunky radius 100000`设置半径（或足够大以覆盖整个世界）
6. 使用`/chunky pattern world`设置世界模式，这将指定仅重新加载世界中已存在的区块
7. 运行`/chunky start`以开始加载过程。这可能需要很长时间，所以需要耐心等待。
8. 完成后重启服务器。这很重要，以确保所有修复的区块都已正确保存。
9. 运行`/bluemap purge <map-id>`以重新渲染你的世界，这次希望光照问题已经修复！

## Light Cleaner 使用说明
首先确保你已经安装了Light Cleaner。你可以在[spigotmc.org/resources/light-cleaner.42469/](https://www.spigotmc.org/resources/light-cleaner.42469/)下载它。  
现在要修复世界中的光照问题，我们需要运行Light Cleaner：
1. 运行`/cleanlight world earth`（如果世界名称不是“earth”，则使用世界名称）
2. 检查`/cleanlight status`以查看进度。这可能需要很长时间，所以需要耐心等待。
3. 完成后重启服务器。这很重要，以确保所有修复的区块都已正确保存。
4. 运行`/bluemap purge <map-id>`以重新渲染你的世界，这次希望光照问题已经修复！