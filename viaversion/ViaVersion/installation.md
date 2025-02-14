---
sidebar_position: 2
---

# 安装

此插件的兼容性很好， Bukkit / Spigot / Paper / Velocity 均可安装

你可以从如下渠道下载本插件：

:::tip 插件下载

`SpigotMC` https://www.spigotmc.org/resources/.19254

`Hangar` https://hangar.papermc.io/ViaVersion/ViaVersion

`Modrinth` https://modrinth.com/plugin/viaversion

`GitHub` https://github.com/ViaVersion/ViaVersion

`插件百科` https://mineplugin.org/ViaVersion

:::

:::warning

注意，ViaVersion 最新版要求 Java 17 (最好 Java 21+ ，事实上 Java 17 在未来也将不被支持)及以上才能运行，

如果你的服务器仍然运行在 Java 17 以下的环境中，请使用在 [**这里**](https://ci.viaversion.com/job/ViaVersion-Java8/lastSuccessfulBuild/) 下载最新构建！此构建最低支持 Java 8。

:::

## 食用方法

- 从上文任一渠道下载插件，然后放进服务器的 plugins 文件夹中。
- 确保你的服务器中有 ProtocolLib ，这是 ViaVersion 的前置插件，具体说明和下载渠道可以看[这里](https://nitwikit.8aka.org/Java/process/plugin/Front-Plugin/ProtocolLib/)
- 最后重启服务器即可，就这么简单。

:::tip 已知的问题

- 确保你服务器中所使用的插件能在**玩家使用的**游戏版本相兼容，否则可能会出现奇怪的问题。
- 不要**重载**(reload)插件，在配置插件后最好的方式应该是直接重启服务器，最好不要只是重载插件，否则有可能会出现问题。
- 如果你使用代理端，请确保代理端和代理端上的插件都是最新的(作者说 SkinRestorer 有可能导致玩家和服务器的连接断开，这个时候可以去掉 SkinRestorer 试试)。
- BKCommonLib 在 1.8.8 版本(游戏版本)的 ProtocolLib 上无法正常运行，请使用特供版: [点此跳转](https://github.com/MylesIsCool/BKCommonLib)。
- Orebfuscator 在 1.8 版本的 ProtocolLib 上无法正常运行，请使用特供版: [点此跳转](https://github.com/MylesIsCool/Orebfuscator)。

:::