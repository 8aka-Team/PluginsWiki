---
sidebar_position: 2
---

# 安装

你可以从如下渠道下载本插件

:::tip 插件下载

`SpigotMC` https://www.spigotmc.org/resources/.27448

`Hangar` https://hangar.papermc.io/ViaVersion/ViaBackwards

`Modrinth` https://Modrinth.com/plugin/viabackwards

`GitHub` https://github.com/ViaVersion/ViaBackwards/releases

:::

:::warning

注意，ViaBackwards 最新版要求 Java 17 (最好 Java 21+ ，事实上 Java 17 在未来也将不被支持)及以上才能运行，

如果你的服务器仍然运行在 Java 17 以下的环境中，请使用在 [**这里**](https://ci.viaversion.com/job/ViaBackwards-Java8/lastSuccessfulBuild/) 下载最新构建！此构建最低支持 Java 8。

:::

## 食用方法

### 对于插件服

- 从上文任一渠道下载插件，然后放进服务器的 plugins 文件夹中。
- 想必你的服务器里面已经有 ProtocolLib 和 ViaVersion 啦，那你可以直接重启服务器了

### 对于 Mod 服

- 从上文任一渠道下载插件，并保证你的服务器中安装了 ViaFabric 或 ViaFabricPlus
- 如果你安装的是 **ViaFabric**，那么直接把 ViaBackwards 放进 mods 文件夹里
- 如果你安装的是 **ViaFabricPlus**，那么把 ViaBackwards 放进 `ViaFabricPlus/jars` 文件夹里
- 最后重启服务器即可

:::tip 一些建议

由于 ViaBackwards 是往前兼容的，新版本的东西老版本没有，那么这个插件就会用旧版本的方块去取代新版本的方块

这就会导致有些场景可能会非常奇怪，并且由于高版本的我的世界重新设计了限高(-64 ~ 320)，如果使用老版本进入这种服务器

会严重影响游戏体验。因此强烈建议在安装此插件前要了解新旧版本的区别和你服务器内是否有大量新版本有老版本没有的东西

而且还要衡量使用老版本的玩家会不会诱发一些奇怪的 bug

所以，你要重视 ViaVersion 配置中的 `block-versions` 和 `block-versions` 这两个选项，设置哪些版本不能进，哪些能进

不然无脑让服务器允许 1.9 - 1.21 版本进服，肯定会让你和你玩家吃不少亏

:::