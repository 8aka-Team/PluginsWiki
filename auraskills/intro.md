---
sidebar_position: 1
description: 欢迎来到AuraSkills维基！
---

# AuraSkills

**AuraSkills**（原名**Aurelium Skills**）是一个Minecraft插件，增加了[技能](skills/)、[属性](stats/)、[能力](abilities.md)和其他RPG相关功能。该插件为Spigot和Paper服务器平台开发，可以在官方[插件网站](https://aurelium.dev/auraskills/download)、[SpigotMC](https://www.spigotmc.org/resources/81069/)、[Hangar](https://hangar.papermc.io/Archy/AuraSkills)和[Modrinth](https://modrinth.com/plugin/auraskills)免费下载。该插件完全可配置和可定制，适用于从小型SMP到大型自定义MMORPG网络的各种服务器类型。

本维基包含关于如何设置、配置和使用该插件的文档。开发者在[Discord](https://discord.gg/Bh2EZfB)服务器上提供支持，用户也可以在那里提出建议、报告错误和获取公告。AuraSkills在[GitHub](https://github.com/Archy-X/AuraSkills)上开源。

:::warning
本维基仅适用于AuraSkills 2.0+版本。如需旧版维基（AureliumSkills Beta 1.3.x），请点击[这里](https://app.gitbook.com/o/-Mf1Cqap-T455k8cLLbf/s/-Mf1ApP15HhRtnWXpe0T/)。
:::

## 概述

玩家通过完成Minecraft的常规任务（如耕种、采矿、战斗或附魔）获得技能经验值来提升[技能](skills/)等级。每个技能等级的提升会为玩家提供[属性增益](stats/)，解锁并提升[被动能力](abilities.md)和[法力能力](mana-abilities.md)，以及其他可定制的[奖励](rewards.md)。玩家可以使用`/skills`命令查看所有与技能和游戏相关的信息，这些信息通过完全可配置的库存GUI[菜单](menus.md)展示。某些钓鱼和挖掘能力会掉落自定义战利品，这些战利品可以通过[战利品表](loot.md)进行定制和扩展到其他技能。玩家可以通过排行榜和排名相互竞争。还可以创建自定义物品，当持有或穿戴时提供[属性修饰符](stats/stat-modifiers.md)，使用时需要[技能要求](skills/item-requirements.md)，以及[经验倍率](skills/xp-multipliers.md#item-and-armor-multipliers)。众多[命令](commands.md)和[权限](permissions.md)允许服务器管理员管理玩家并控制对功能的访问。

## 技能

> 主文章: [技能](skills/)

AuraSkills包含11个默认技能，玩家通过各种经验来源获得技能经验值来提升这些技能等级。默认情况下，每个技能有两个[属性](stats/)，每提升1或2个技能等级会增加。大多数技能还有5个被动[能力](abilities.md)，在最初5个等级解锁，并每5个技能等级提升一次。某些技能有一个[法力能力](mana-abilities.md)，这是一种需要玩家激活的特殊能力，消耗法力并具有冷却时间。

这11个技能包括耕种、伐木、采矿、钓鱼、挖掘、弓箭、防御、战斗、敏捷、附魔和炼金术。Beta版本中的15个技能可以通过加载旧版预设重新添加。

可以使用`/skills`命令或使用单个技能的命令（如`/farming`、`/mining`等）查看技能。

`skills.yml`文件用于配置技能，包括启用/禁用技能、更改最大等级和其他技能相关选项，以及技能拥有的能力和法力能力。

## 配置

`plugins/AuraSkills`目录中有多个配置文件，用于配置插件。

### 主配置

> 主文章: [主配置](main-config/)

主`config.yml`文件用于与存储/数据库、外部插件挂钩、语言、动作栏、Boss栏、世界/区域、修饰符、要求等相关的常规或杂项配置选项。

### 技能

> 主文章: [技能#配置](https://github.com/Archy-X/AureliumSkills)

`skills.yml`文件用于配置技能，包括：

* 启用/禁用技能
* 更改技能的最大等级
* 移除或切换技能的能力
* 移除或切换技能的法力能力
* 其他技能相关的配置选项

### 奖励

> 主文章: [奖励](rewards.md)

`rewards/`文件夹包含每个技能的奖励文件。文件名对应于其对应的技能名称。当玩家升级技能时，会给予奖励，可以用于提升属性、执行命令、授予权限、给予物品或存入金钱（Vault）。`global.yml`用于添加适用于所有技能的奖励（不是组合等级，只是节省了在每个文件中添加相同奖励的时间）。

:::info
移除或更改技能默认授予的属性在[奖励](rewards.md)文件中完成。
:::

### 战利品

> 主文章: [战利品](loot.md)

`loot/`文件夹包含某些技能的战利品表。默认情况下，钓鱼和挖掘技能包含由这些技能的某些能力掉落的战利品表。可以通过创建技能名称的文件（如mining.yml或foraging.yml）为采矿或伐木添加自定义战利品表。

### 菜单

> 主文章: [菜单](menus.md)

`menus/`文件夹包含用于更改插件GUI菜单外观的菜单文件，如`/skills`。几乎所有与菜单外观相关的内容都可以自定义，包括添加新物品或添加点击物品时执行的操作。

## API

> 主文章: [API](api.md)

AuraSkills提供了一个广泛的API，允许开发者与插件挂钩，与用户交互，监听事件并添加自定义内容。