---
sidebar_position: 8
---

<!-- Variables (this block will not be visible in the readme -->
[banner]: https://pcgamingfreaks.at/images/minepacks.png
[spigot]: https://www.spigotmc.org/resources/19286/
[spigotRatingImg]: https://img.shields.io/badge/dynamic/json.svg?color=brightgreen&label=rating&query=%24.rating.average&suffix=%20%2F%205&url=https%3A%2F%2Fapi.spiget.org%2Fv2%2Fresources%2F19286
[spigotDownloadsImg]: https://img.shields.io/badge/dynamic/json.svg?color=brightgreen&label=downloads%20%28spigotmc.org%29&query=%24.downloads&url=https%3A%2F%2Fapi.spiget.org%2Fv2%2Fresources%2F19286
[bukkit]: https://dev.bukkit.org/projects/minepacks
[bukkitDownloadsImg]: https://cf.way2muchnoise.eu/full_minepacks_downloads.svg
[versionsImg]: https://cf.way2muchnoise.eu/versions/minepacks.svg
[issues]: https://github.com/GeorgH93/Minepacks/issues
[wiki]: https://github.com/GeorgH93/Minepacks/wiki
[wikiFAQ]: https://github.com/GeorgH93/Minepacks/wiki/FAQ
[wikiPermissions]: https://github.com/GeorgH93/Minepacks/wiki/Permissions
[release]: https://github.com/GeorgH93/Minepacks/releases/latest
[releaseImg]: https://img.shields.io/github/release/GeorgH93/Minepacks.svg?label=github%20release
[license]: https://github.com/GeorgH93/Minepacks/blob/master/LICENSE
[licenseImg]: https://img.shields.io/github/license/GeorgH93/Minepacks.svg
[ci]: https://ci.pcgamingfreaks.at/job/Minepacks/
[ciImg]: https://ci.pcgamingfreaks.at/job/Minepacks/badge/icon
[ciDev]: https://ci.pcgamingfreaks.at/job/Minepacks%20Dev/
[ciDevImg]: https://ci.pcgamingfreaks.at/job/Minepacks%20Dev/badge/icon
[apiVersionImg]: https://img.shields.io/badge/dynamic/xml.svg?label=api-version&query=%2F%2Frelease[1]&url=https%3A%2F%2Frepo.pcgamingfreaks.at%2Frepository%2Fmaven-releases%2Fat%2Fpcgamingfreaks%2FMinepacks-API%2Fmaven-metadata.xml
[api]: https://github.com/GeorgH93/Minepacks/tree/master/Minepacks-API
[apiJavaDoc]: https://ci.pcgamingfreaks.at/job/Minepacks%20API/javadoc/
[apiBuilds]: https://ci.pcgamingfreaks.at/job/Minepacks%20API/
[bugReports]: https://github.com/GeorgH93/Minepacks/issues?q=is%3Aissue+is%3Aopen+label%3Abug
[bugReportsImg]: https://img.shields.io/github/issues/GeorgH93/Minepacks/bug.svg?label=bug%20reports
[reportBug]: https://github.com/GeorgH93/Minepacks/issues/new?labels=bug&template=bug.md
[featureRequests]: https://github.com/GeorgH93/Minepacks/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement
[featureRequestsImg]: https://img.shields.io/github/issues/GeorgH93/Minepacks/enhancement.svg?label=feature%20requests&color=informational
[requestFeature]: https://github.com/GeorgH93/Minepacks/issues/new?labels=enhancement&template=feature.md
[config]: https://github.com/GeorgH93/Minepacks/blob/master/Minepacks/resources/config.yml
[pcgfPluginLib]: https://github.com/GeorgH93/PCGF_PluginLib
[pcgfPluginLibAdvantages]: https://github.com/GeorgH93/Minepacks/wiki/Build-and-Mode-comparison#Advantages-of-using-the-PCGF-PluginLib
[languages]: https://github.com/GeorgH93/Minepacks/tree/master/Minepacks/resources/lang
<!-- End of variables block -->

Minepacks 是一个免费且可靠的背包插件，适用于运行 Bukkit 或 Spigot 的 Minecraft 服务器。

[![ciImg]][ci] [![releaseImg]][release]
[![apiVersionImg]][api] [![licenseImg]][license] [![spigotRatingImg]][spigot]
[![featureRequestsImg]][featureRequests] [![bugReportsImg]][bugReports]
[![spigotDownloadsImg]][spigot] [![bukkitDownloadsImg]][bukkit]

## 功能：
* [配置][config]
* 背包大小由[权限][wikiPermissions]控制
* 背包满时自动收集物品（可在配置中启用）
* 多种存储后端（文件、SQLite、MySQL）
* 多语言支持（包含[多种语言文件][languages]）
* 物品过滤器（阻止物品被存储在背包中）
* 保留物品的NBT数据（任何可以存储在箱子中的物品都可以存储在背包中）
* 支持名称更改/UUID
* 自动更新器
* 开发者[API][api]

## 要求：
### 运行要求：
* Java 8
* 适用于 Minecraft 1.8 或更新版本的 Bukkit、Spigot 或 Paper ![versionsImg]
* （可选）[PCGF PluginLib][pcgfPluginLib]（[使用 PCGF PluginLib 的优势][pcgfPluginLibAdvantages]）

### 构建要求：
* Java 8 的 JDK
* Maven 3
* git

## 从源代码构建：
该插件可以通过 3 种不同的配置进行构建。  
有关不同构建配置和运行模式的详细信息，请参见[此处](https://github.com/GeorgH93/Minepacks/wiki/Build-and-Mode-comparison)。

### 普通版本：
```
git clone https://github.com/GeorgH93/Minepacks.git
cd Minepacks
mvn package
```
最终文件将位于 `Minepacks/target` 文件夹中，名为 `Minepacks-<当前版本>.jar`。

### 独立版本：
此版本无需 PCGF-PluginLib，但某些 API 功能不可用。
```
git clone https://github.com/GeorgH93/Minepacks.git
cd Minepacks
mvn package -P Standalone
```
最终文件将位于 `Minepacks/target` 文件夹中，名为 `Minepacks-<当前版本>-Standalone.jar`。

### 发布版本：
这是发布在 dev.bukkit.org 和 spigotmc.org 上的插件版本。
```
git clone https://github.com/GeorgH93/Minepacks.git
cd Minepacks
mvn clean install -P Standalone
mvn clean package -P Release
```
最终文件将位于 `Minepacks/target` 文件夹中，名为 `Minepacks-<当前版本>-Release.jar`。

## API：
Minepacks V2 提供了一个 API，允许你与此插件进行交互。
如果你认为 API 中缺少某些功能，请随时提交[功能请求][requestFeature]。
请不要通过除提供的 API 之外的任何其他方式访问插件的数据，内部实现会发生变化，我不会跟踪你在插件中使用的部分。
有关 API 的更多详细信息，请查看以下链接：

[源代码和详细信息][api] ⚫ [JavaDoc][apiJavaDoc] ⚫ [构建服务器][apiBuilds]

## 支持：
* [Wiki][wiki]
* [问题跟踪器][issues]
    * [新功能请求][requestFeature]
    * [新错误报告][reportBug]
* [常见问题][wikiFAQ]

## 链接：
* [Spigot][spigot] - [![spigotDownloadsImg]][spigot]
* [CurseForge][bukkit] - [![bukkitDownloadsImg]][bukkit]
* [构建服务器 - 发布构建 ![ciImg]][ci]
* [构建服务器 - 开发构建 ![ciDevImg]][ciDev]