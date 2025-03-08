---
sidebar_position: 8
---

# 钩子

HuskTowns 提供了多个内置钩子，以支持其他插件。

| 名称                               | 描述                       | 链接                                              |
|------------------------------------|-----------------------------------|---------------------------------------------------|
| [Vault](#vault)                    | 经济支持                   | https://www.spigotmc.org/resources/vault.34315/   |
| [LuckPerms](#luckperms)            | 城镇的权限上下文     | https://luckperms.net/                            |
| [HuskHomes](#huskhomes)            | 改进的全局传送     | https://william278.net/project/huskhomes/         |
| [Plan](#plan)                      | 在 Plan 中显示城镇分析    | https://www.playeranalytics.net/                  |
| [PlaceholderAPI](#placeholderapi)  | 提供 HuskTowns 占位符   | https://placeholderapi.com/                       |
| [Dynmap](#dynmap-pl3xmap-bluemap)  | 在 Dynmap 中添加领地标记  | https://www.spigotmc.org/resources/dynmap.274/    |
| [Pl3xMap](#dynmap-pl3xmap-bluemap) | 在 Pl3xMap 中添加领地标记 | https://modrinth.com/plugin/pl3xmap/              |
| [BlueMap](#dynmap-pl3xmap-bluemap) | 在 BlueMap 中添加领地标记 | https://www.spigotmc.org/resources/bluemap.83557/ |

## Vault
HuskTowns 支持使用 Vault 和兼容的经济插件来接入服务器经济系统，允许玩家向城镇金库存入和提取资金。

## LuckPerms
HuskTowns 为 [LuckPerms](https://luckperms.net) 提供了额外的 [权限上下文](https://luckperms.net/wiki/Context)，允许你根据 HuskTowns 确定的上下文因素限制权限访问。

例如，如果你想限制某些命令只能在玩家处于城镇中时使用，你可以通过这种方式实现。

### 设置
* 在服务器上安装 LuckPerms v5.3+
* 在 [`config.yml`](config-files) 中，确保在 `general` 下启用了 `luckperms_contexts_hook`。

### HuskTowns 提供的上下文
> ✅ 请参阅 [LuckPerms Wiki](https://luckperms.net/wiki/Context) 了解如何使用上下文。

| 上下文                          | 描述                                                                      |
|----------------------------------|----------------------------------------------------------------------------------|
| `husktowns:claim-town`           | 玩家所在领地的城镇名称                              |
| `husktowns:in-claim`             | `true`/`false`; 玩家是否在领地中                                 |
| `husktowns:can-build`            | `true`/`false`; 玩家是否可以放置和破坏方块                           |
| `husktowns:can-open-containers`  | `true`/`false`; 玩家是否可以使用容器                                   |
| `husktowns:can-interact`         | `true`/`false`; 玩家是否可以与方块和实体交互（右键点击）  |
| `husktowns:standing-in-own-town` | `true`/`false`; 玩家是否站在自己城镇的领地中 |
| `husktowns:is-town-member`       | `true`/`false`; 玩家是否是城镇成员                                |
| `husktowns:town`                 | 玩家所在城镇的名称                                                |
| `husktowns:town-role`            | 玩家在城镇中的角色; 市长、居民或受信任者                      |
| `husktowns:town-level`           | 玩家所在城镇的等级                                           |

## HuskHomes
HuskTowns 可选择性地支持与 HuskHomes 集成，以在玩家传送到 `/town spawn` 时提供改进的全局传送功能。

## Plan
HuskTowns 支持在 [Player Analytics](https://github.com/plan-player-analytics/Plan) (Plan) 网页面板上显示城镇的统计数据。

### 设置
1. 在安装了 HuskTowns 的 Spigot 服务器上安装 Plan v5.4.1690+
2. 根据需要配置 Plan 并重启服务器
3. 数据将开始在 Player 和 Server 页面的 "Plugins" 面板下的 "HuskTowns" 中显示

## PlaceholderAPI
如果你安装了 [PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI)，HuskTowns (v2.2+) 将自动注册一个钩子，提供多个占位符，这些占位符将被替换为相应的值。

### 可用的占位符
下表列出了可用的占位符。你可以在插件的本地化文件中自定义替换消息。如果你想自定义是/否消息，请编辑你的 PlaceholderAPI 配置文件，因为这些消息是从那里获取的。

#### 标准占位符
| 占位符                                          | 替换值                      | 备注                                                             |
|------------------------------------------------------|----------------------------------|-------------------------------------------------------------------|
| `%husktowns_town_name%`                              | `Waterside`                      | 玩家所在城镇的名称¹                                    |
| `%husktowns_town_role%`                              | `Citizen`                        | 玩家在其城镇中的角色名称¹                    |
| `%husktowns_town_mayor%`                             | `William278`                     | 玩家所在城镇的镇长名称¹                                  |
| `%husktowns_town_color%`                             | `#ff1200`                        | 玩家所在城镇的颜色（如果不在城镇中则为灰色）                   |
| `%husktowns_town_members%`                           | `Mark12, William278, MeetThePro` | 玩家所在城镇的成员列表¹                             |
| `%husktowns_town_member_count%`                      | `3`                              | 玩家所在城镇的成员数量¹                           |
| `%husktowns_town_claim_count%`                       | `4`                              | 玩家所在城镇的领地数量¹                       |
| `%husktowns_town_max_claims%`                        | `6`                              | 玩家所在城镇可拥有的最大领地数量¹              |
| `%husktowns_town_max_members%`                       | `5`                              | 玩家所在城镇可拥有的最大成员数量¹             |
| `%husktowns_town_crop_growth_rate%`                  | `105.0`                          | 玩家所在城镇的作物生长率加成百分比¹           |
| `%husktowns_town_mob_spawner_rate%`                  | `102.5`                          | 玩家所在城镇的怪物生成率加成百分比¹           |
| `%husktowns_town_money%`                             | `1230.32`                        | 玩家所在城镇的余额¹                                     |
| `%husktowns_town_money_formatted%`                   | `1k`                             | 玩家所在城镇的余额，以简短格式显示¹             |
| `%husktowns_town_level_up_cost%`                     | `1500.00`                        | 玩家所在城镇升级到下一级的成本¹                       |
| `%husktowns_town_level%`                             | `1`                              | 玩家所在城镇的当前等级¹                               |
| `%husktowns_town_max_level%`                         | `20`                             | 城镇的最大等级                                                |
| `%husktowns_current_location_town%`                  | `Tomoeda`                        | 玩家所在领地所属城镇的名称²             |
| `%husktowns_current_location_town_color%`            | `#aaaaaa`                        | 玩家所在领地所属城镇的颜色⁵            |
| `%husktowns_current_location_can_build%`             | `No`                             | 玩家是否可以在其所在领地中建造³                 |
| `%husktowns_current_location_can_interact%`          | `Yes`                            | 玩家是否可以在其所在领地中交互³              |
| `%husktowns_current_location_can_open_containers%`   | `No`                             | 玩家是否可以在其所在领地中打开容器³       |
| `%husktowns_current_location_claim_type%`            | `Plot`                           | 玩家所在领地的类型（`Claim`, `Plot`, `Farm`)³          |
| `%husktowns_current_location_plot_members%`          | `Sakura32, Toya567`              | 如果这是一个地块，地块的成员名称⁴               |
| `%husktowns_current_location_plot_managers%`         | `Sakura32`                       | 如果这是一个地块，地块的管理者名称⁴              |
| `%husktowns_current_location_town_money%`            | `1130.50`                        | 玩家所在领地所属城镇的余额³          |
| `%husktowns_current_location_town_money_formatted%`  | `1k`                             | 同上，以简短格式显示³                     |
| `%husktowns_current_location_town_level%`            | `3`                              | 玩家所在领地所属城镇的等级³            |
| `%husktowns_current_location_town_level_up_cost%`    | `2400.00`                        | 玩家所在领地所属城镇升级的成本³ |
| `%husktowns_current_location_town_max_claims%`       | `15`                             | 玩家所在领地所属城镇可拥有的最大领地数量³   |
| `%husktowns_current_location_town_max_members%`      | `20`                             | 玩家所在领地所属城镇可拥有的最大成员数量³     |
| `%husktowns_current_location_town_crop_growth_rate%` | `105.0`                          | 玩家所在领地所属城镇的作物生长率加成百分比³   |
| `%husktowns_current_location_town_mob_spawner_rate%` | `102.5`                          | 玩家所在领地所属城镇的怪物生成率加成百分比³   |

¹ &mdash; 如果玩家不在城镇中，则显示 `Not in town` <br/>
² &mdash; 如果玩家不在领地中，则显示 `Wilderness` <br/>
³ &mdash; 如果玩家不在领地中，则显示 `Not in claim` <br/>
⁴ &mdash; 如果玩家不在领地中，则显示 `Not in claim`，如果不在地块中，则显示 `Not a plot` <br/>
⁵ &mdash; 如果玩家不在领地中，则返回灰色

#### 排行榜占位符
这些占位符根据城镇在排行榜中的位置返回城镇名称，按各自的属性排序（其中1为排名最高的城镇）。适用于制作游戏内排行榜，促进城镇之间的竞争！

* `%husktowns_town_leaderboard_members_{index}%` &mdash; 成员最多的城镇
* `%husktowns_town_leaderboard_claims_{index}%` &mdash; 领地最多的城镇
* `%husktowns_town_leaderboard_money_{index}%` &mdash; 余额最高的城镇
* `%husktowns_town_leaderboard_level_{index}%` &mdash; 等级最高的城镇

您还可以通过以下格式获取每个城镇在排行榜中的值：`%husktowns_town_leaderboard_{leaderboard}_{index}_{type}%`。

* `{leaderboard}` 是 `members`, `claims`, `money`, 或 `level` 之一
* `{index}` 是排行榜中的索引（例如 `10` 获取排行榜中的第10个条目）。
* `{type}` 是要获取的城镇值类型，可以是 `mayor`, `members`, `member_count`, `claim_count`, `max_claims`, `max_members`, `crop_growth_rate`, `mob_spawner_rate`, `money`, `money_formatted`, `level_up_cost`, `level`, 或 `max_level` 之一。

**示例：** `%husktowns_town_leaderboard_money_1_money%` 获取排行榜中排名第一的城镇的余额（适用于在全息图中设置排行榜信息）。


## Dynmap, Pl3xMap, BlueMap

HuskTowns 提供了可选的集成支持，可以与 Dynmap、Pl3xMap 或 BlueMap 结合使用，以在服务器的网页地图上显示城镇领地。

如果启用此功能，HuskTowns 将在地图上添加一个图层，突出显示服务器上不同城镇所占领的区块！这对于可视化服务器上社区的建设位置非常有帮助，同时也能帮助玩家规划他们的下一次旅程。

### 设置

1. 确保服务器上已安装其中一个支持的地图插件，并且运行的是最新版本。
2. 关闭服务器并导航到 `plugins/HuskTowns/config.yml`。
3. 向下滚动到 `general` 下的 `web_map_hook` 部分。
4. 确保 `enabled` 设置为 true，并根据喜好配置标记集名称。
5. 保存配置，重启服务器，网页地图上应会显示城镇领地。