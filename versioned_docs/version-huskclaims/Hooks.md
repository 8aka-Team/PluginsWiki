---
sidebar_position: 6
---

# 钩子

HuskClaims 提供了多个内置钩子，支持其他插件的集成。这些钩子可以在插件的 `hooks` 配置部分启用或禁用。

| 名称                                 | 描述                  | 链接                                                |
|------------------------------------|---------------------|---------------------------------------------------|
| [Vault](#vault)                    | 为领地区块提供经济支持         | https://www.spigotmc.org/resources/vault.34315/   |
| [LuckPerms](#luckperms)            | 为 LuckPerms 组提供信任标签 | https://luckperms.net/                            |
| [HuskHomes](#huskhomes)            | 限制在领地内创建家园          | https://william278.net/project/huskhomes/         |
| [HuskTowns](#husktowns)            | 防止在城镇领地上创建领地        | https://william278.net/project/husktowns/         |
| [Plan](#plan)                      | 在 Plan 中显示领地分析      | https://www.playeranalytics.net/                  |
| [PlaceholderAPI](#placeholderapi)  | 提供 HuskClaims 占位符   | https://placeholderapi.com/                       |
| [WorldGuard](#worldguard)          | 防止在受限制的区域上创建领地      | https://enginehub.org/worldguard                  |
| [Dynmap](#dynmap-pl3xmap-bluemap)  | 在 Dynmap 上添加领地标记    | https://www.spigotmc.org/resources/dynmap.274/    |
| [Pl3xMap](#dynmap-pl3xmap-bluemap) | 在 Pl3xMap 上添加领地标记   | https://modrinth.com/plugin/pl3xmap/              |
| [BlueMap](#dynmap-pl3xmap-bluemap) | 在 BlueMap 上添加领地标记   | https://www.spigotmc.org/resources/bluemap.83557/ |

## Vault
如果安装了 Vault（以及兼容的经济插件），`/buyclaimblocks` 命令将被启用，允许用户[用金钱购买领地区块](claim-blocks#buying-claim-blocks)。

## LuckPerms
如果安装了 LuckPerms，HuskClaims 将为每个定义的 LuckPerms 组注册[信任标签](doc/Trust.md#trust-tags)，格式为 `#role/(group_name)`，例如 `#role/admin`。这使您可以轻松授予 LuckPerms 组所有成员的信任，特别是在管理员领地中非常有用。

## HuskHomes
如果安装了 HuskHomes，`/huskclaims teleport` 命令将被启用，允许管理员从[领地列表](doc/Claims.md#listing-claims)快速传送到领地，或者在使用[[Sign Moderation]]时传送到放置的标牌位置。

此外，HuskClaims 将防止在领地内创建或重新定位家园，除非用户在该领地中具有最低的[[信任]]级别（默认为访问信任+）。

## HuskTowns
如果安装了 HuskTowns，HuskClaims 将防止在现有的城镇领地上创建 HuskClaims 领地。

## Plan
如果安装了 Plan，HuskClaims 将在 Plan 网页界面的用户和服务器页面上显示 HuskClaims 分析数据（例如创建的领地区块和领地）。

## PlaceholderAPI
如果安装了 PlaceholderAPI，HuskClaims 将注册一个 PlaceholderAPI 扩展，允许您在其他支持 PlaceholderAPI 的插件中使用 HuskClaims 占位符。以下占位符可用：

| 占位符                                      | 描述                     | 示例                                |
|------------------------------------------|------------------------|-----------------------------------|
| `%huskclaims_claim_blocks%`              | 玩家拥有的[[领地区块]]数量        | `100`, `1234`, etc.               |
| `%huskclaims_current_is_claimed%`        | 玩家当前是否站在领地中            | `true` 或 `false`                  |
| `%huskclaims_current_claim_owner%`       | 玩家当前所在领地的所有者           | `Steve`, `an administrator`, etc. |
| `%huskclaims_current_claim_is_trusted%`  | 玩家是否对他们所在的领地具有[[信任级别]] | `true` 或 `false`                  |
| `%huskclaims_current_claim_trust_level%` | 玩家在他们所在领地中的信任级别        | `Access`, `Container`, etc.       |
| `%huskclaims_can_build%`                 | 玩家是否可以在他们所在的领地中建造      | `true` 或 `false`                  |
| `%huskclaims_can_open_containers%`       | 玩家是否可以在他们所在的领地中打开容器    | `true` 或 `false`                  |
| `%huskclaims_can_interact%`              | 玩家是否可以在他们所在的领地中交互      | `true` 或 `false`                  |

## WorldGuard
如果安装了 WorldGuard，HuskClaims 将注册一个第三方标志（`huskclaims-claim`），当在 WorldGuard 区域中设置为“拒绝”时，将阻止玩家在该区域上创建或调整领地。

## Dynmap, Pl3xMap, BlueMap
如果安装了支持的映射插件之一，HuskClaims 将在您的服务器地图上添加领地标记：

* [Dynmap](https://www.spigotmc.org/resources/dynmap.274/) (v3.2+)
* [Pl3xMap](https://modrinth.com/plugin/pl3xmap/) (v1.20.4+)
* [BlueMap](https://www.spigotmc.org/resources/bluemap.83557/) (v3.20+)

您可以在配置文件中配置标记标签名称以及要显示的领地类型。