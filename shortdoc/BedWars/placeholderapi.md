---
sidebar_position: 7
---

# PlaceholderAPI

此插件向[PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)注册占位符。

这些占位符旨在用于其他插件中，如果在BedWars配置中使用可能无法正常工作。但是，如果安装了PlaceholderAPI，它们可以在`shop.yml`和其他与商店相关的文件中使用。请使用稍微修改的语法：`%papi.<placeholder_name>%`（例如，`%papi.bedwars_all_games_players%`）。

## 全局占位符

* `%bedwars_all_games_players%` - 返回所有游戏中的玩家总数。
* `%bedwars_all_games_maxplayers%` - 返回所有游戏中的最大玩家总数。
* `%bedwars_all_games_anyrunning%` - 如果任何游戏当前处于`running`或`game_end_celebrating`状态，则返回`true`；否则返回`false`。
* `%bedwars_all_games_anywaiting%` - 如果任何游戏当前处于`waiting`状态，则返回`true`；否则返回`false`。

## 当前玩家信息

本节中的占位符特定于玩家，基于它们使用的上下文，通常是消息、全息图等的查看者。

### 当前游戏信息

其中一些占位符包含参数`<team_name>`。请将其替换为团队名称。例如，如果团队名称为`red`，您将使用`%bedwars_current_game_team_red_bed%`。

* `%bedwars_current_game%` - 返回当前游戏的名称。
* `%bedwars_current_game_players%` - 返回游戏中的玩家数量。
* `%bedwars_current_game_minplayers%` - 返回游戏开始所需的最小玩家数量。
* `%bedwars_current_game_maxplayers%` - 返回可以加入游戏的最大玩家数量。
* `%bedwars_current_game_world%` - 返回竞技场所在世界的名称。
* `%bedwars_current_game_state%` - 返回游戏的当前状态。可能的值有：`waiting`、`running`、`game_end_celebrating`、`rebuilding`和`disabled`。
* `%bedwars_current_game_time%` - 返回剩余时间（秒）。
* `%bedwars_current_game_timeformat%` - 返回格式为`MM:SS`的剩余时间。
* `%bedwars_current_game_elapsedtime%` - 返回已用时间（秒）。
* `%bedwars_current_game_elapsedtimeformat%` - 返回格式为`MM:SS`的已用时间。
* `%bedwars_current_game_team_<team_name>_colored%` - 返回带颜色的团队名称。
* `%bedwars_current_game_team_<team_name>_color%` - 返回团队颜色代码为`&<legacy color code>`。
* `%bedwars_current_game_team_<team_name>_ingame%` - 返回团队当前是否在游戏中，作为字符串：`yes`或`no`。
* `%bedwars_current_game_team_<team_name>_players%` - 返回团队中的玩家数量。
* `%bedwars_current_game_team_<team_name>_maxplayers%` - 返回团队中的最大玩家数量。
* `%bedwars_current_game_team_<team_name>_bed%` - 返回团队当前是否有有效的目标块，作为字符串：`yes`或`no`。
* `%bedwars_current_game_team_<team_name>_bedsymbol%` - 返回SBW游戏内记分板中使用的带颜色的目标块符号。
* `%bedwars_current_game_team_<team_name>_teamchests%` - 返回团队箱子的数量。
* `%bedwars_current_game_running%` - 如果游戏当前处于`running`或`game_end_celebrating`状态，则返回`true`；否则返回`false`。
* `%bedwars_current_game_waiting%` - 如果游戏当前处于`waiting`状态，则返回`true`；否则返回`false`。
* `%bedwars_current_available_teams%` - 返回现有团队的数量。
* `%bedwars_current_connected_teams%` - 返回当前正在游戏的团队数量。
* `%bedwars_current_teamchests%` - 返回所有团队中团队箱子的数量。

### 玩家团队信息

* `%bedwars_current_team%` - 返回玩家团队的名称。
* `%bedwars_current_team_color%` - 返回玩家团队的颜色代码为`&<legacy color code>`。
* `%bedwars_current_team_colored%` - 返回带颜色的团队名称。
* `%bedwars_current_team_players%` - 返回团队中的玩家数量。
* `%bedwars_current_team_maxplayers%` - 返回团队中的最大玩家数量。
* `%bedwars_current_team_bed%` - 返回团队当前是否有有效的目标块，作为字符串：`yes`或`no`。
* `%bedwars_current_team_teamchests%` - 返回团队箱子的数量。
* `%bedwars_current_team_bedsymbol%` - 返回SBW游戏内记分板中使用的带颜色的目标块符号。

## 游戏信息占位符

使用这些占位符时，请将`<game>`替换为特定游戏标识符，将`<team_name>`替换为团队名称。例如，如果游戏标识符为`game1`，团队名称为`red`，您将使用`%bedwars_game_game1_team_red_colored%`。

* `%bedwars_game_<game>_name%` - 返回游戏的名称。
* `%bedwars_game_<game>_players%` - 返回游戏中的玩家数量。
* `%bedwars_game_<game>_minplayers%` - 返回游戏开始所需的最小玩家数量。
* `%bedwars_game_<game>_maxplayers%` - 返回可以加入游戏的最大玩家数量。
* `%bedwars_game_<game>_world%` - 返回竞技场所在世界的名称。
* `%bedwars_game_<game>_state%` - 返回游戏的当前状态。可能的值有：`waiting`、`running`、`game_end_celebrating`、`rebuilding`和`disabled`。
* `%bedwars_game_<game>_available_teams%` - 返回现有团队的数量。
* `%bedwars_game_<game>_connected_teams%` - 返回当前正在游戏的团队数量。
* `%bedwars_game_<game>_teamchests%` - 返回游戏中的团队箱子数量。
* `%bedwars_game_<game>_time%` - 返回剩余时间（秒）。
* `%bedwars_game_<game>_timeformat%` - 返回格式为`MM:SS`的剩余时间。
* `%bedwars_game_<game>_elapsedtime%` - 返回已用时间（秒）。
* `%bedwars_game_<game>_elapsedtimeformat%` - 返回格式为`MM:SS`的已用时间。
* `%bedwars_game_<game>_team_<team_name>_colored%` - 返回带颜色的团队名称。
* `%bedwars_game_<game>_team_<team_name>_color%` - 返回团队颜色代码为`&<legacy color code>`。
* `%bedwars_game_<game>_team_<team_name>_ingame%` - 返回团队当前是否在游戏中，作为字符串：`yes`或`no`。
* `%bedwars_game_<game>_team_<team_name>_players%` - 返回团队中的玩家数量。
* `%bedwars_game_<game>_team_<team_name>_maxplayers%` - 返回团队中的最大玩家数量。
* `%bedwars_game_<game>_team_<team_name>_bed%` - 返回团队当前是否有有效的目标块，作为字符串：`yes`或`no`。
* `%bedwars_game_<game>_team_<team_name>_bedsymbol%` - 返回SBW游戏内记分板中使用的带颜色的目标块符号。
* `%bedwars_game_<game>_team_<team_name>_teamchests%` - 返回团队箱子的数量。
* `%bedwars_game_<game>_running%` - 如果游戏当前处于`running`或`game_end_celebrating`状态，则返回`true`；否则返回`false`。
* `%bedwars_game_<game>_waiting%` - 如果游戏当前处于`waiting`状态，则返回`true`；否则返回`false`。

## 统计占位符

### 玩家统计占位符

!!! tip "自定义排行榜"

    您可以使用占位符创建自定义排行榜，以各种方式显示玩家统计数据。为此，请考虑使用[ajLeaderboards](https://www.spigotmc.org/resources/ajleaderboards.85548/)插件与下面列出的占位符。这提供了比BedWars插件更大的灵活性。

本节中的占位符特定于玩家，基于它们使用的上下文，通常是消息、全息图等的查看者。

* `%bedwars_stats_deaths%` - 返回死亡次数。
* `%bedwars_stats_destroyed_beds%` - 返回摧毁的床的数量。
* `%bedwars_stats_kills%` - 返回击杀次数。
* `%bedwars_stats_loses%` - 返回失败次数。
* `%bedwars_stats_score%` - 返回总得分。
* `%bedwars_stats_wins%` - 返回胜利次数。
* `%bedwars_stats_games%` - 返回总游戏次数。
* `%bedwars_stats_kd%` - 返回击杀/死亡比率。

### 任何玩家统计占位符

使用这些占位符时，请将`<player>`替换为特定玩家的名称。例如，如果玩家名称为`Misat11`，您将使用`%bedwars_otherstats_Misat11_deaths%`。

* `%bedwars_otherstats_<player>_deaths%` - 返回死亡次数。
* `%bedwars_otherstats_<player>_destroyed_beds%` - 返回摧毁的床的数量。
* `%bedwars_otherstats_<player>_kills%` - 返回击杀次数。
* `%bedwars_otherstats_<player>_loses%` - 返回失败次数。
* `%bedwars_otherstats_<player>_score%` - 返回总得分。
* `%bedwars_otherstats_<player>_wins%` - 返回胜利次数。
* `%bedwars_otherstats_<player>_games%` - 返回总游戏次数。
* `%bedwars_otherstats_<player>_kd%` - 返回击杀/死亡比率。
