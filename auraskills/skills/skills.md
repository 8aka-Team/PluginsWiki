---
sidebar_position: 3
description: 技能指南及skills.yml文件
---

# 技能

**技能**是衡量玩家在游戏不同方面经验或进度的指标。作为AuraSkills的主要功能，所有其他功能都与技能相关联。所有关于技能的信息都可以通过使用`/skills`命令在技能菜单中查看。每个技能都有一组来源：用于在该技能中获得经验值（XP）的特定任务或行动。玩家通过达到下一级别的XP要求来升级，随着技能级别的提高，XP要求也会增加。

当玩家达到新的技能级别时，可以获得以下奖励：

* 属性等级
* 能力解锁和升级
* 法力能力解锁和升级
* 其他可自定义的[奖励](../rewards.md)，包括：
  * 命令
  * 权限
  * 物品
  * 金钱

插件中包含11个默认技能：

* 农业
* 采集
* 采矿
* 钓鱼
* 挖掘
* 弓箭
* 防御
* 战斗
* 敏捷
* 附魔
* 炼金术

在Beta版本中有4个技能，这些技能在默认配置中被合并或移除。从Beta迁移或加载了旧版预设的服务器会有这些额外的技能：

* 耐力（在默认配置中合并到敏捷）
* 治疗（在默认配置中合并到炼金术）
* 锻造（在默认配置中合并到附魔）
* 巫术（从默认配置中移除）

## 配置

技能在`skills.yml`文件中进行配置。每个技能都有一个以其完整命名空间ID命名的部分（所有默认技能的前缀为`auraskills/`）。以下是农业技能部分的示例，并附有注释解释每个选项：

```yaml
auraskills/farming: # 技能的命名空间ID
  abilities: # 技能升级时解锁的能力列表
    - auraskills/bountiful_harvest
    - auraskills/farmer
    - auraskills/scythe_master
    - auraskills/geneticist
    - auraskills/triple_harvest
  mana_ability: auraskills/replenish # 技能的法力能力（可选）
  options: # 技能的可配置选项，详见下文
    enabled: true
    max_level: 97
    check_cancelled: true
    check_multiplier_permissions: true
```

### 能力

`abilities`键是附加到技能的能力列表（随着技能升级而解锁）。能力名称必须是完整的命名空间ID。所有其他能力的配置在`abilities.yml`中完成。

### 法力能力

`mana_ability`键是技能的法力能力的名称（完整的命名空间ID）。这是一个可选值，因为并非所有技能都有法力能力。所有其他法力能力的配置在`mana_abilities.yml`中完成。

### 选项

#### 通用选项

* `enabled` - 是否启用技能及其所有相关功能。如果设置为false，玩家无法在该技能中获得XP，使用能力或法力能力，并且该技能将从菜单中隐藏。禁用技能不会重置玩家等级，因此重新启用技能将保留之前获得的等级。
* `max_level` - 技能可达到的最高等级。降低此等级不会降低已经高于新最大等级的玩家等级。
* `check_cancelled` - 当给予XP时，来源等级器是否应忽略已取消的事件。除非有特定的兼容性问题需要更改，否则不应更改此选项。
* `check_multiplier_permissions` - 是否启用基于权限的倍率（`auraskills.multiplier.*`）。如果不使用权限倍率，将其设置为false可能会提高性能。

#### 弓箭和战斗选项

* `spawner_multiplier` - 对于由刷怪笼生成的生物，给予的XP乘以此值。设置为0以禁用刷怪笼的XP。

#### 防御选项

* `max` - 防御奖励的最大XP量。
* `min` - 奖励所需的最小XP量。如果XP低于最小值，则不会给予XP。
* `allow_shield_blocking` - 当玩家使用盾牌格挡时是否给予XP。

#### 炼金术选项

* `ignore_custom_potions` - 如果为true，具有自定义效果的药水（不可酿造的药水）将不会与炼金术能力（如炼金师、糖 rush 和溅射者）一起使用。

## 命令

技能名称可以直接用于打开该技能的等级进度菜单，例如`/farming`、`/archery`等。这可以通过在`config.yml`中将`enable_skill_commands`设置为false来禁用。

可以使用以下命令操作技能等级：

* `/skills skill setlevel <player> <skill> <level>`
* `/skills skill setall <player> <skill> <level>`
* `/skills skill reset <player> [skill]`

## 菜单

技能菜单通过使用`/skills`命令访问。菜单的设计和格式在`menus/skills.yml`中配置。

## 消息

技能的显示名称和描述可以在消息文件的`skills`部分进行更改。