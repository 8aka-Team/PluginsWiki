---
description: 插件钩子配置
---

# hooks-config.yml

MyPet 与众多插件进行了集成（[列表](../../hooks/)）。其中部分集成仅确保MyPet与某些插件的兼容性，而另一些则提供了可自定义的设置选项。

下表仅展示可自定义的设置项。

| **钩子设置** | 类型 | 说明 |
| :--- | :---: | ---: |
|   **钩子:** |  |  |
|     AncientRPG: | 布尔值 | 根据AncientRPG插件规则（如**队伍系统**）检测宠物主人是否能攻击目标玩家。若主人可攻击某玩家，则其宠物也可攻击该玩家。 |
|     Towny: | 布尔值 | 根据Towny插件规则检测宠物主人是否能攻击目标玩家。若主人可攻击某玩家，则其宠物也可攻击该玩家。 |
|     MCMMO: | 布尔值 | 根据MCMMO插件规则（如**队伍系统**）检测宠物主人是否能攻击目标玩家。若主人可攻击某玩家，则其宠物也可攻击该玩家。 |
|     Factions: | 布尔值 | 根据Factions插件规则检测宠物主人是否能攻击目标玩家。若主人可攻击某玩家，则其宠物也可攻击该玩家。 |
|     Heroes: | 布尔值 | 根据Heroes插件规则（如**最低PvP等级**或**队伍系统**）检测宠物主人是否能攻击目标玩家。若主人可攻击某玩家，则其宠物也可攻击该玩家。 |
|     WorldGuard: | 布尔值 | 根据WorldGuard规则（如**区域标志**）检测宠物主人是否能攻击目标玩家。若主人可攻击某玩家，则其宠物也可攻击该玩家。 |
|     Residence: | 布尔值 | 根据Residence插件规则检测宠物主人是否能攻击目标玩家。若主人可攻击某玩家，则其宠物也可攻击该玩家。 |
|     GriefPrevention: | 布尔值 | 根据GriefPrevention插件规则检测宠物主人是否能攻击目标玩家。若主人可攻击某玩家，则其宠物也可攻击该玩家。 |
|     PvPManager: | 布尔值 | 根据PvPManager插件规则检测宠物主人是否能攻击目标玩家。若主人可攻击某玩家，则其宠物也可攻击该玩家。 |
|     Citizens: | 布尔值 | 检测目标NPC是否可被MyPet攻击。NPC不能被拴绳牵引。 |
|     **MobArena:** |  |  |
|       Enabled: | 布尔值 | 启用MobArena集成（允许宠物在竞技场中造成伤害） |
|       RespectPvPRule: | 布尔值 | 若为`true`，宠物将遵守竞技场的PvP规则。若主人可攻击某玩家，则其宠物也可攻击该玩家。 |
|       AllowPets: | 布尔值 | 若为`true`，宠物可进入竞技场。 |
|     **Minigames:** |  |  |
|       DisablePetsInGames: | 布尔值 | 在所有小游戏中完全禁用MyPets。 |
|     **PvPArena:** |  |  |
|       PvP: | 布尔值 | 检测宠物主人在竞技场内是否能攻击目标玩家。若主人可攻击某玩家，则其宠物也可攻击该玩家。 |
|       DisablePetsInArena: | 布尔值 | 在竞技场中完全禁用MyPets。 |
|     **SurvivalGames:** |  |  |
|       PvP: | 布尔值 | 检测宠物主人在生存游戏比赛中是否能攻击目标玩家。若主人可攻击某玩家，则其宠物也可攻击该玩家。 |
|       DisablePetsInGames: | 布尔值 | 在生存游戏比赛中完全禁用MyPets。 |
|     **MyHungerGames:** |  |  |
|       DisablePetsInGames: | 布尔值 | 在生存游戏比赛中完全禁用MyPets。 |
|     **BattleArena:** |  |  |
|       DisablePetsInArena: | 布尔值 | 在竞技场中完全禁用MyPets。 |
|     **Vault:** |  |  |
|       Economy: | 布尔值 | 启用经济系统支持（用于宠物交易、复活和寄存功能）。 |
|     **SkillAPI:** |  |  |
|       GrantExp: | 布尔值 | 当主人获得SkillAPI经验时，允许宠物同步获得经验。 |
|       Disable-Vanilla-Exp: | 布尔值 | 完全禁用常规经验获取途径。宠物仅能通过主人获取SkillAPI经验来升级。 |