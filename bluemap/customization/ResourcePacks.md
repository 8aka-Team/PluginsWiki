---
sidebar_position: 3
---

# 安装资源包或数据包

BlueMap 支持使用 Minecraft 的资源包和数据包。如果你想改变地图的外观，使用高分辨率纹理或精美的方块模型，或者自定义生物群系。

:::important
如果你更改了资源/数据包的设置，你需要删除之前的渲染！  
使用 `/bluemap purge <map>` 清除你的地图。  
否则，你可能会遇到模型损坏或纹理混乱的问题。
:::

要安装资源/数据包，你只需将包文件夹或压缩包放入配置文件旁边的 `packs` 文件夹中，然后重新加载 BlueMap。BlueMap 会扫描该文件夹并尝试加载找到的所有资源。

:::info

> Sponge, Forge, Fabric: `./config/bluemap/packs/`
> Spigot/Paper: `./plugins/BlueMap/packs/`  
> CLI: `./config/packs/`

:::

你可以使用多个资源/数据包。就像在 Minecraft 中一样，它们会相互覆盖。它们按字母顺序加载，因此名为 `zzzresources.zip` 的包会覆盖 `aaaresources.zip`。  
这意味着你可以通过重命名它们来重新排序，例如 `01_some_pack.zip`, `02_some_extension_pack.zip`...

确保资源/数据包适用于正确的 Minecraft 版本。否则，它可能无法正确加载。  
你可以查看 `./bluemap/logs/debug.log`（在 CLI 上是 `./data/logs/debug.log`）以查找加载资源/数据包时可能出现的警告。
