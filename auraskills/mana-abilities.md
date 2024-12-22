---
sidebar_position: 6
description: 魔力技能指南及mana_abilities.yml文件
---

# 魔力技能

> 不要与被动的[技能](abilities.md)混淆。

**魔力技能**是激活时消耗魔力的主动技能。默认情况下，魔力技能在技能等级6时解锁，并且每提升6个技能等级就会升级一次。每个技能最多可以有一个魔力技能。通过在`skills.yml`中更改`mana_ability`选项，可以在技能之间交换魔力技能。

## 列表

<table data-full-width="false"><thead><tr><th width="168">名称</th><th width="116">技能</th><th>描述</th></tr></thead><tbody><tr><td>补充</td><td>农业</td><td>在一定时间内自动重新种植作物。右键点击锄头并打破作物以激活。适用于小麦、胡萝卜、马铃薯、下界疣和甜菜根。</td></tr><tr><td>树砍</td><td>伐木</td><td>在一定时间内瞬间砍倒整棵树。右键点击斧头并打破原木以激活。算法尚未最终确定，将在未来改进以完美适用于所有树种。</td></tr><tr><td>快速挖掘</td><td>采矿</td><td>在一定时间内给予急迫10效果。右键点击镐并打破石头或矿石以激活。</td></tr><tr><td>锋利钩</td><td>钓鱼</td><td>使用钓鱼竿左键点击时对钩住的实体造成伤害。</td></tr><tr><td>地形改造</td><td>挖掘</td><td>挖掘时，在一定时间内以4格水平半径瞬间打破相连的方块。右键点击铲子并挖掘方块以激活。</td></tr><tr><td>充能射击</td><td>弓术</td><td>你射出的箭矢将根据弓拉开的距离造成更多伤害，并在此过程中消耗魔力。每消耗的魔力造成的伤害更多。左键点击弓以切换充能射击模式。</td></tr><tr><td>吸收</td><td>防御</td><td>受到的伤害将减少2倍于Minecraft伤害的魔力，而不是你的生命值。吸收激活时魔力不会恢复。左键点击盾牌并受到伤害以激活。</td></tr><tr><td>闪电刃</td><td>战斗</td><td>在一定时间内按百分比增加攻击速度。右键点击剑并攻击实体以激活。</td></tr></tbody></table>

## 配置

魔力技能的配置在`mana_abilities.yml`中完成。格式类似于普通技能配置，但有一些不同的选项。

### 常见选项

* `enabled` - 魔力技能是否应启用。禁用的魔力技能将无效并从菜单中隐藏。这与从`skills.yml`中的`mana_ability`选项中删除它的效果相同，但此`enabled`选项更适合临时禁用魔力技能。
* `base_value` - 魔力技能在1级时的基础值（刚解锁时）。该值决定了大多数魔力技能的持续时间，除了锋利钩（造成的伤害）、充能射击（每魔力造成的伤害）和闪电刃（攻击速度增加）。
* `value_per_level` - 魔力技能每级增加的值。有效值的公式为`value = base_value + (value_per_level * (level - 1))`，其中`level`是技能的等级，而不是技能的等级。参见下面的`level_up`选项，了解技能等级如何计算。
* `base_cooldown` - 魔力技能在1级时的冷却时间，单位为秒。冷却时间在魔力技能失效后开始倒计时。
* `cooldown_per_level` - 魔力技能每级冷却时间的变化。默认情况下，这是负数，因此冷却时间随着等级的提升而减少。如果你增加最大技能等级或魔力技能等级，请小心确保这不会使冷却时间变为负数。
* `base_mana_cost` - 魔力技能在1级时的激活魔力消耗。
* `mana_cost_per_level` - 魔力技能每级魔力消耗的变化。如果消耗高于玩家的最大魔力（由智慧属性增加），玩家将无法使用魔力技能。
* `unlock` - 技能解锁该技能的等级。这可以是一个固定的整数，或者是一个使用占位符`{start}`的字符串表达式，该占位符是`config.yml`中`start_level`选项的值。默认配置使用此方法，使得第一个技能总是在你第一次升级技能时解锁，直到第五个解锁。
* `level_up` - 技能等级之间技能升级的间隔。用户技能等级的公式为`level = (skill_level - unlock)/level_up + 1`，不包括`max_level`的任何上限。
* `max_level` - 技能可以达到的最大等级（不是技能等级）。将值设置为`0`表示没有最大等级，使得最大技能等级由最大技能等级和上述公式决定。

### 技能特定选项

<table><thead><tr><th width="218">选项键</th><th>适用的魔力技能</th><th>描述</th></tr></thead><tbody><tr><td>require_sneak</td><td>补充, 树砍, 快速挖掘, 地形改造, 闪电刃</td><td>如果为真，玩家必须同时右键点击和潜行以准备魔力技能。</td></tr><tr><td>check_offhand</td><td>补充, 树砍, 快速挖掘, 地形改造, 闪电刃</td><td>如果为真，右键点击放置副手物品将不会准备主手工具的魔力技能。</td></tr><tr><td>sneak_offhand_bypass</td><td>补充, 树砍, 快速挖掘, 地形改造, 闪电刃</td><td>如果为真，潜行时右键点击副手物品将准备主手工具的魔力技能。</td></tr><tr><td>replant_delay</td><td>补充</td><td>作物被打破和补充重新种植种子之间的延迟，单位为刻。</td></tr><tr><td>show_particles</td><td>补充</td><td>重新种植时是否显示粒子效果。</td></tr><tr><td>prevent_unripe_break</td><td>补充</td><td>当补充激活时，是否应阻止使用锄头打破未完全成熟的作物。</td></tr><tr><td>max_blocks_multiplier</td><td>树砍</td><td>树砍一次可以打破的最大方块数的乘数。基础方块数取决于木材类型。</td></tr><tr><td>give_xp</td><td>树砍</td><td>树砍打破的每个方块是否应给予技能经验。</td></tr><tr><td>haste_level</td><td>快速挖掘</td><td>快速挖掘应给予的急迫效果的等级。从1开始计数，1为最低可能等级。</td></tr><tr><td>display_damage_with_scaling</td><td>锋利钩</td><td>菜单中显示的伤害数字是否应乘以stats.yml中hp特性的action_bar_scaling选项。</td></tr><tr><td>enable_sound</td><td>锋利钩, 充能射击</td><td>玩家使用魔力技能时是否应播放声音。</td></tr><tr><td>disable_health_check</td><td>锋利钩</td><td>如果为真，即使插件认为锋利钩将造成0伤害，锋利钩仍将应用。仅在有兼容性问题时启用此选项。</td></tr><tr><td>always_enabled</td><td>充能射击</td><td>如果为真，如果玩家解锁了魔力技能，所有射出的箭矢都将为充能射击。这将禁用左键点击切换功能。</td></tr><tr><td>max_blocks</td><td>地形改造</td><td>地形改造一次可以打破的最大方块数。</td></tr><tr><td>enable_particles</td><td>吸收</td><td>玩家吸收攻击时是否应显示粒子效果。</td></tr></tbody></table>

## 消息

魔力技能的名称和描述可以在消息文件的`mana_abilities`部分进行编辑。

## 禁用魔力

虽然魔力是魔力技能系统的核心组成部分，但可以通过以下几个步骤实质上禁用魔力系统：

1. 将`config.yml`中的`mana.enabled`选项设置为false。这将移除魔力技能的魔力消耗，并从菜单中移除大多数魔力的提及。虽然大多数魔力技能仍将工作，只是没有魔力消耗，但吸收和充能射击魔力技能将被禁用，因为它们的机制完全依赖于魔力。
2. 在`messages/global.yml`文件中，通过删除`{{action_bar.mana_display}}`部分和多余的空格来编辑`action_bar.idle`消息。由于空闲动作只会显示生命值，你可能希望完全禁用它，方法是将`config.yml`中的`action_bar.idle`设置为false。
3. 到这一步，魔力已经功能上被禁用。但为了完全移除菜单中对魔力的提及，请将消息文件中对“Mana”一词的提及替换为其他内容，例如“Active Ability”。