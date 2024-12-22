---
sidebar_position: 5
description: 能力指南及abilities.yml文件
---

# 能力

> 不要与[法力能力](mana-abilities.md)混淆。

**能力**是被动游戏增益，与技能等级一起解锁和升级。默认情况下，每个技能有5个能力，分别在技能等级1-5（或2-6，如果config.yml中的`start_level`为1）时解锁，并且每5个技能等级升级一次。能力并不固定在其默认技能上；通过从skills.yml中技能部分的`abilities`列表中移除，可以轻松地将能力切换到其他技能或禁用能力。

## 配置

除了与技能的关联外，所有与能力相关的配置都在`abilities.yml`文件中完成。每个能力包含许多通用选项，有些能力还有特定选项。

### 通用选项

* `enabled` - 能力是否应启用。禁用的能力将无效并从菜单中隐藏。这与从skills.yml中的`abilities`列表中移除它效果相同，但`enabled`选项更适合临时禁用能力。
* `base_value` - 能力在1级时的值（刚解锁时）。能力的值决定了其强度/效果，并直接显示在菜单中能力描述的任何地方。通常，具有一定激活几率的能力，其几率直接由百分比值控制。例如，如果“丰收”能力的`base_value`为5.0，则它在1级时有5%的激活几率。
* `value_per_level` - 能力每升一级时增加的值。有效值的公式为`value = base_value + (value_per_level * (level - 1))`，其中`level`是能力的等级，而不是技能的等级。有关能力等级如何计算，请参见下面的`level_up`选项。
* `unlock` - 能力解锁时的技能等级。这可以是一个固定的整数，或者是一个使用占位符`{start}`的字符串表达式，`{start}`是config.yml中`start_level`选项的值。默认配置使用此方法，使得第一个能力总是在你首次升级技能到第五个解锁时解锁。
* `level_up` - 能力升级之间的技能等级间隔。用户能力的等级公式为`level = (skill_level - unlock)/level_up + 1`，不包括由`max_level`设定的上限。
* `max_level` - 能力可以达到的最大等级（不是技能等级）。将值设置为`0`表示没有最大等级，能力的最大等级由技能的最大等级和上述公式决定。
* `secondary_base_value` - 一些能力有次要基础值来控制另一个变量。工作原理与`base_value`相同。
* `secondary_value_per_level` - 一些能力有次要每级值来控制另一个变量。工作原理与`value_per_level`相同。

### 能力特定选项

下表中的选项仅适用于一个或几个能力。

<table><thead><tr><th width="242">选项键</th><th width="181">适用能力</th><th>描述</th></tr></thead><tbody><tr><td>scale_base_value_chance</td><td>treasure_hunter, epic_catch, metal_detector, lucky_spades</td><td>如果为真，能力的值将缩放战利品表的基础几率，而不是增加。几率乘以<code>1 + value/100</code>。</td></tr><tr><td>enable_message</td><td>first_strike, revival</td><td>当能力激活时，是否应向玩家发送动作栏消息。</td></tr><tr><td>cooldown_ticks</td><td>first_strike</td><td>“先发制人”能力刷新所需的刻数。默认为6000（5分钟）。</td></tr><tr><td>enable_enemy_message</td><td>bleed</td><td>当玩家使敌人流血时，是否发送动作栏消息。</td></tr><tr><td>enable_self_message</td><td>bleed</td><td>当自己流血时，是否发送动作栏消息。</td></tr><tr><td>enable_stop_message</td><td>bleed</td><td>当自己的流血停止时，是否发送动作栏消息。</td></tr><tr><td>base_ticks</td><td>bleed</td><td>当玩家尚未流血时，添加的流血刻数。</td></tr><tr><td>added_ticks</td><td>bleed</td><td>当玩家已经流血时，添加的流血刻数。</td></tr><tr><td>tick_period</td><td>bleed</td><td>每次流血刻数应用之间的Minecraft刻数。</td></tr><tr><td>show_particles</td><td>bleed</td><td>流血时是否生成粒子。</td></tr><tr><td>health_percent_required</td><td>fleeting</td><td>“短暂”能力适用的玩家最大生命百分比。</td></tr><tr><td>add_item_lore</td><td>alchemist</td><td>是否在酿造的药水上添加 lore 以显示持续时间加成。</td></tr></tbody></table>

## 菜单

能力菜单显示一个技能的所有能力和法力能力，以及它们的描述和等级。可以通过点击等级进度菜单中的能力物品（默认是浅蓝色染料）来访问。

能力描述也显示在等级进度菜单中每个技能等级窗格的奖励中。在技能菜单中，每个技能物品上显示的简短描述称为信息消息。

## 消息

能力的名称、描述和信息消息在消息文件的`abilities`部分中配置。
