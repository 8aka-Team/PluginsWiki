# 构建和模式比较

[pcgfPluginLib]: https://github.com/GeorgH93/PCGF_PluginLib
[spigot]: https://www.spigotmc.org/resources/19286/
[bukkit]: http://dev.bukkit.org/bukkit-plugins/minepacks/
[githubReleases]: https://github.com/GeorgH93/Minepacks/releases

Minepacks v2 提供了三种不同的构建版本，并且可以在两种不同的模式下运行。

## 模式
### 独立模式
在这种模式下，插件可以在没有任何外部依赖的情况下运行。
某些 API 功能在此模式下不可用。目前：无法为 /backpack 注册自定义子命令。

### 普通模式
插件的普通模式要求服务器上安装了 PCGF 插件库才能正常工作。
此模式适用于使用多个依赖于 [PCGF PluginLib][pcgfPluginLib] 插件的服务器。
有关新增功能的列表，请查看 [使用 PCGF 插件库的优势](#使用-PCGF-插件库的优势)。

## 构建版本
### 发布版
此构建版本会根据已安装的依赖自动在普通模式和独立模式之间切换。
这是最用户友好的构建版本，也是在 [dev.bukkit.org][bukkit] 和 [spigotmc.org][spigot] 上发布的版本。

### 普通版
此构建版本是最小的构建版本，并使用插件的普通模式。
它要求服务器上安装了 [PCGF PluginLib][pcgfPluginLib] 才能正常工作。

### 独立版
此构建版本仅包含独立模式的插件。
可以从 [GitHub 发布页面][githubReleases] 下载此构建版本。

## 使用 PCGF 插件库的优势

* 可以通过多个插件共享 MySQL 数据库池（只需配置一次数据库凭据）
* 在多个插件之间共享常用的翻译（例如物品名称）
* 减少 RAM 使用量（如果至少使用了两个基于该库的插件）
* 提高 UUID 转换器的性能