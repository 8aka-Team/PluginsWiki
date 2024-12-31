---
sidebar_position: 8
---

# 🪨 占位符

内部使用与外部使用的占位符

我们生产了许多不同类型的占位符。有些仅限于特定设置；有些仅设计用于一种特定场景；有些可以在任何地方使用。

**内部使用**的占位符设计为仅在LevelledMobs4插件内使用。

**外部使用**的占位符设计为与第三方插件[**PlaceholderAPI**](https://www.spigotmc.org/resources/placeholderapi.6245/) **\[PAPI]**一起使用，以便扩展到其他插件。



## 仅限内部使用

<table data-full-width="true"><thead><tr><th width="230" align="center">杂项占位符</th><th width="282" align="center">用途</th><th>描述</th></tr></thead><tbody><tr><td align="center"><code>%displayname%</code></td><td align="center"><code>nametag</code>, <code>creature-death-nametag</code>, <code>death-messages</code></td><td>生物的<code>customname</code>字段，或其经过清理和处理的<code>EntityType</code>。</td></tr><tr><td align="center"><code>%death-nametag%</code></td><td align="center"><code>nametag</code>, <code>creature-death-nametag</code>, <code>death-messages</code></td><td>生物从<code>creature-death-nametag</code>设置中确定的死亡名称。</td></tr><tr><td align="center"><code>%health-indicator%</code></td><td align="center"><code>nametag</code>, <code>creature-death-nametag</code>, <code>death-messages</code></td><td>由<code>health-indicator</code>设置表示的健康状态。</td></tr><tr><td align="center"><code>%health-indicator-color%</code></td><td align="center"><code>nametag</code>, <code>creature-death-nametag</code>, <code>death-messages</code></td><td>由<code>health-indicator</code>设置输出表示的颜色。</td></tr><tr><td align="center"><code>%mob-lvl%</code></td><td align="center"><code>nametag</code>, <code>creature-death-nametag</code>, <code>death-messages</code>, <code>strategies</code>, <code>modifiers</code>, <code>attribute-modifier</code></td><td>分配给生物的当前等级。</td></tr><tr><td align="center"><code>%level-ratio%</code></td><td align="center"><code>nametag</code>, <code>creature-death-nametag</code>, <code>death-messages</code>, <code>strategies</code>, <code>modifiers</code>, <code>attribute-modifier</code></td><td>当前等级与最大和最小等级相比的比率，范围从0.0到1.0。该值使用以下公式计算：<code>(当前等级 - 最小等级) ÷ (最大等级 - 最小等级)</code>此外，如果计算的右半部分为零，意味着最小和最大等级相同，则实体将被赋予比率为<code>1</code>。然后，如果计算的左半部分为零，意味着生物的当前等级是最小等级，则比率将为<code>0</code>。</td></tr><tr><td align="center"><code>%entity-name%</code></td><td align="center"><code>nametag</code>, <code>creature-death-nametag</code>, <code>death-messages</code></td><td>经过清理和处理的生物的<code>EntityType</code>。</td></tr><tr><td align="center"><code>%entity-name-raw%</code></td><td align="center"><code>nametag</code>, <code>creature-death-nametag</code>, <code>death-messages</code></td><td>生物的<code>EntityType</code>。</td></tr><tr><td align="center"><code>%entity-health%</code></td><td align="center"><code>nametag</code>, <code>creature-death-nametag</code>, <code>death-messages</code>, <code>strategies</code>, <code>modifiers</code>, <code>attribute-modifier</code>, <code>construct-level</code></td><td>生物的确切健康值，四舍五入到百分位。</td></tr><tr><td align="center"><code>%entity-health-rounded%</code></td><td align="center"><code>nametag</code>, <code>creature-death-nametag</code>, <code>death-messages</code>, <code>strategies</code>, <code>modifiers</code>, <code>attribute-modifier</code>, <code>construct-level</code></td><td>生物的健康值四舍五入到最接近的整数。</td></tr><tr><td align="center"><code>%entity-health-rounded-up%</code></td><td align="center"><code>nametag</code>, <code>creature-death-nametag</code>, <code>death-messages</code>, <code>strategies</code>, <code>modifiers</code>, <code>attribute-modifier</code>, <code>construct-level</code></td><td>生物的健康值向上取整到下一个整数。例如，5.05的健康值将四舍五入为6。</td></tr><tr><td align="center"><code>%entity-max-health%</code></td><td align="center"><code>nametag</code>, <code>creature-death-nametag</code>, <code>death-messages</code>, <code>strategies</code>, <code>modifiers</code>, <code>attribute-modifier</code>, <code>construct-level</code></td><td>生物的最大健康值，四舍五入到百分位。</td></tr><tr><td align="center"><code>%entity-max-health-rounded%</code></td><td align="center"><code>nametag</code>, <code>creature-death-nametag</code>, <code>death-messages</code>, <code>strategies</code>, <code>modifiers</code>, <code>attribute-modifier</code>, <code>construct-level</code></td><td>生物的最大健康值四舍五入到最接近的整数。例如，5.35将四舍五入为5；而5.65将四舍五入为6。</td></tr><tr><td align="center"><code>%entity-max-health-rounded-up%</code></td><td align="center"><code>nametag</code>, <code>creature-death-nametag</code>, <code>death-messages</code>, <code>strategies</code>, <code>modifiers</code>, <code>attribute-modifier</code>,
<code>construct-level</code></td><td>生物的最大生命值，四舍五入到下一个整数。例如，5.05的生命值将四舍五入为6。</td></tr><tr><td align="center"><code>%entity-max-health-percent%</code></td><td align="center"><code>nametag</code>, <code>creature-death-nametag</code>, <code>death-messages</code>, <code>strategies</code>, <code>modifiers</code>, <code>attribute-modifier</code>, <code>construct-level</code></td><td>生物的最大生命值，以百分比表示。基本上总是输出100%，因为最大生命值的百分比应该始终为100%。</td></tr><tr><td align="center"><code>%entity-max-health-percent-X%</code></td><td align="center"><code>nametag</code>, <code>creature-death-nametag</code>, <code>death-messages</code>, <code>strategies</code>, <code>modifiers</code>, <code>attribute-modifier</code>, <code>construct-level</code></td><td>生物的生命值以百分比表示，四舍五入到指定的小数位。例如，<code>%entity-max-health-percent-3%</code>可能输出<code>25.000%</code>。</td></tr><tr><td align="center"><code>%heart-symbol%</code></td><td align="center"><code>nametag</code>, <code>creature-death-nametag</code>, <code>death-messages</code></td><td>符号：♥。</td></tr><tr><td align="center"><code>%tiered%</code></td><td align="center"><code>nametag</code>, <code>creature-death-nametag</code>, <code>death-messages</code></td><td>从<code>tiered-coloring</code> <code>setting</code>中输出的有效颜色。</td></tr><tr><td align="center"><code>%wg-region%</code></td><td align="center"><code>nametag</code>, <code>creature-death-nametag</code>, <code>death-messages</code></td><td>在生物处理时收集的WorldGuard区域名称。</td></tr><tr><td align="center"><code>%world%</code></td><td align="center"><code>nametag</code>, <code>creature-death-nametag</code>, <code>death-messages</code></td><td>Minecraft世界名称。</td></tr><tr><td align="center"><code>%player%</code></td><td align="center"><code>custom-drops</code></td><td>杀死生物的玩家名称。</td></tr><tr><td align="center"><code>%player-uuid%</code></td><td align="center"><code>custom-drops</code></td><td>杀死生物的玩家的唯一UUID。</td></tr><tr><td align="center"><code>%location%</code></td><td align="center"><code>custom-drops</code></td><td>生物死亡位置的坐标。</td></tr><tr><td align="center"><code>%mob-scale%</code></td><td align="center"><code>custom-drops</code></td><td>输出<code>customdrops.yml</code>中每个项目定义的<code>mob-scale:</code>的计算值。该值等于<code>mob-scale x level</code>。</td></tr><tr><td align="center"></td><td align="center"></td><td></td></tr><tr><td align="center"></td><td align="center"></td><td></td></tr><tr><td align="center"><strong>策略与修饰符占位符</strong></td><td align="center"><strong>用法</strong></td><td><strong>描述</strong></td></tr><tr><td align="center"><code>%weighted-random%</code></td><td align="center"><code>strategy</code>, <code>weighted-random</code>, <code>construct-level</code></td><td>与<code>weighted-random</code> <code>strategies</code>的输出值相关联。</td></tr><tr><td align="center"><code>%distance-from-origin%</code></td><td align="center"><code>strategy</code>, <code>distance-from-origin</code>, <code>construct-level</code></td><td>与<code>distance-from-origin</code> <code>strategies</code>的输出值相关联。</td></tr><tr><td align="center"><code>%y-coordinate%</code></td><td align="center"><code>strategy</code>, <code>y-coordinate</code>, <code>construct-level</code></td><td>与<code>y-coordinate</code> <code>strategies</code>的输出值相关联。</td></tr><tr><td align="center"><code>%player-variable-mod%</code></td><td align="center"><code>modifier</code>, <code>player-variable-modifier</code>, <code>construct-level</code></td><td>与<code>player-variable-modifier</code> <code>modifiers</code>的输出值相关联。</td></tr><tr><td align="center"><code>%custom_name%</code></td><td align="center"><code>modifier</code>, <code>custom</code>, <code>construct-level</code></td><td>与任何<code>custom</code> <code>modifiers</code>的输出值相关联。你可以通过<code>_name</code>分隔多个实例，其中这是与实例关联的唯一名称。</td></tr><tr><td align="center"><code>%rand_X_Y%</code></td><td align="center"><code>modifier</code>, <code>random-variance-modifier</code>, <code>construct-level</code></td><td>生成两个指定值之间的随机数。支持负数。你还可以在文件中使用多达100个这样的自定义占位符。示例：<code>%rand\_-5_5%</code>表示在-5和5之间。</td></tr><tr><td align="center"></td><td align="center"></td><td></td></tr><tr><td align="center"></td><td align="center"></td><td></td></tr><tr><td align="center"><strong>玩家等级修饰符占位符</strong></td><td align="center"><strong>用法</strong></td><td><strong>描述</strong></td></tr><tr><td align="center"><code>%level%</code></td><td align="center"><code>player-level-mod</code></td><td>与生物最近的玩家的Minecraft等级相关联。</td></tr><tr><td align="center"><code>%exp%</code></td><td align="center"><code>player-level-mod</code></td><td>与生物最近的玩家升级所需的剩余Minecraft经验值，表示为<code>0.0</code>到<code>1.0</code>之间的百分比。</td></tr><tr><td align="center"><code>%exp-to-level%</code></td><td align="center"><code>player-level-mod</code></td><td>与生物最近的玩家升级所需的剩余Minecraft经验值。</td></tr><tr><td align="center"><code>%total-exp%</code></td><td align="center"><code>player-level-mod</code></td><td>与生物最近的玩家收集的总Minecraft经验值。</td></tr><tr><td align="center"><code>%world-time-tick%</code></td><td align="center"><code>player-level-mod</code></td><td>游戏中的当前时间，以<code>ticks</code>表示，从<code>0</code>到<code>24000</code>。</td></tr><tr><td align="center"></td><td align="center"></td><td></td></tr><tr><td align="center"></td><td align="center"></td><td></td></tr><tr><td align="center"><strong>属性修饰符占位符</strong></td><td align="center"><strong>用法</strong></td><td><strong>描述</strong></td></tr><tr><td align="center"><code>%max-health%</code></td><td align="center"><code>attribute-modifier</code></td><td>输出生物<code>max-health</code>属性的默认值，在修改之前。</td></tr><tr><td align="center"><code>%movement-speed%</code></td><td align="center"><code>attribute-modifier</code></td><td>输出生物<code>movement-speed</code>属性的默认值，在修改之前。</td></tr><tr><td align="center"><code>%attack-damage%</code></td><td align="center"><code>attribute-modifier</code></td><td>输出生物<code>attack-damage</code>属性的默认值，在修改之前。</td></tr><tr><td align="center"><code>%ranged-attack-damage%</code></td><td align="center"><code>attribute-modifier</code></td><td>输出生物<code>ranged-attack-damage</code>属性的默认值，在修改之前。</td></tr><tr><td align="center"><code>%creeper-blast-damage%</code></td><td align="center"><code>attribute-modifier</code></td><td>输出生物<code>creeper-blast-damage</code>属性的默认值，在修改之前。</td></tr><tr><td align="center"><code>%follow-range%</code></td><td align="center"><code>attribute-modifier</code></td><td>输出生物<code>follow-range</code>属性的默认值，在修改之前。</td></tr><tr><td align="center"><code>%item-drop%</code></td><td align="center"><code>attribute-modifier</code></td><td>输出物品掉落数量的值，在修改之前。</td></tr><tr><td align="center"><code>%xp-drop%</code></td><td align="center"><code>attribute-modifier</code></td><td>输出经验值掉落数量的值，在修改之前。</td></tr><tr><td align="center"><code>%armor-bonus%</code></td><td align="center"><code>attribute-modifier</code></td><td>输出生物<code>armor-bonus</code>属性的默认值，在修改之前。</td></tr><tr><td align="center"><code>%armor-toughness%</code></td><td align="center"><code>attribute-modifier</code></td><td>输出生物<code>armor-toughness</code>属性的默认值，在修改之前。</td></tr><tr><td align="center"><code>%attack-knockback%</code></td><td align="center"><code>attribute-modifier</code></td><td>输出生物<code>attack-knockback</code>属性的默认值，在修改之前。</td></tr><tr><td align="center"><code>%knockback-resistance%</code></td><td align="center"><code>attribute-modifier</code></td><td>输出生物<code>knockback-resistance</code>属性的默认值，在修改之前。</td></tr><tr><td align="center"><code>%zombie-spawn-reinforcements%</code></td><td align="center"><code>attribute-modifier</code></td><td>输出生物<code>zombie-spawn-reinforcements</code>属性的默认值，在修改之前。</td></tr><tr><td align="center"></td><td align="center"></td><td></td></tr></tbody></table>


## 外部使用占位符（需要PAPI）

<table data-full-width="true"><thead><tr><th width="230" align="center">杂项占位符</th><th width="282" align="center">用法</th><th>描述</th></tr></thead><tbody><tr><td align="center"><code>%levelledmobs_mob-target%</code></td><td align="center"><code>PAPI</code></td><td>玩家在游戏中瞄准的（正在看的）生物的名称标签值。</td></tr><tr><td align="center"><code>%levelledmobs_displayname%</code></td><td align="center"><code>PAPI</code></td><td>玩家最后杀死的生物的<code>%displayname%</code>输出。</td></tr><tr><td align="center"><code>%levelledmobs_mob-lvl%</code></td><td align="center"><code>PAPI</code></td><td>玩家最后杀死的生物的等级。</td></tr><tr><td align="center"><code>%levelledmobs_killed-by%</code></td><td align="center"><code>PAPI</code></td><td>最后杀死玩家的生物的<code>%displayname%</code>输出。</td></tr><tr><td align="center"></td><td align="center"></td><td></td></tr></tbody></table>