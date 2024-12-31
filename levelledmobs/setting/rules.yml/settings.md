---
sidebar_position: 6
---

# 设置

<details>

<summary>点击查看所有<strong>设置</strong>的完整列表</summary>


```yaml
settings:
# 核心等级设置
  minLevel: 1
  maxLevel: 50
  construct-level: '%weighted-random%'

# 名称标签相关设置
  nametag: ' %tiered%Lvl %mob-lvl% &8&l༺ &f%displayname%&8 &8&l༻ &f%entity-health-rounded%&8/&f%entity-max-health-rounded% %tiered%%heart_symbol% '
  nametag-visible-time: 5s
  nametag-placeholder-unlevelled: ''
  nametag-placeholder-levelled: ''
  nametag-visibility-method: ['TARGETED', 'TRACKING', 'ATTACKED']
  creature-death-nametag: '%tiered%Lvl %mob-lvl%&8 | &f%displayname%'
  death-messages:
    1: ['%player% 被 %death_nametag% 杀死了！']

# 自定义名称设置
  entity-name-override:
    SKELETON: '杰克·斯凯灵顿'
    all_entities: '生成器 %displayname%'

  entity-name-override:
    LVL-LVL:
      SKELETON: ['维塔·布雷', '比利·博恩斯']

# 名称标签健康指示器设置
  health-indicator:
    indicator: '█'
    indicator-half: '▌'
    scale: 4
    max: 5
    colored-tiers:
      tier-1: '&#22E76B' #绿色
      tier-2: '&#528CFF' #蓝色
      tier-3: '&#FFCD56' #黄色
      tier-4: '&#FE803C' #橙色
      tier-5: '&#F2003D' #红色
      tier-6: '&#B447FF' #紫色
      tier-X: '#COLOR' # 示例语法
      default: '&#FFFFFF' #白色
    merge: true

# 自定义掉落设置
  use-custom-item-drops-for-mobs: true
  use-droptable-id: ''

# 等级继承设置
  baby-mobs-inherit-adult-setting: true
  transforming-mobs-inherit-level: true
  riding-passengers-match-vehicle-level: false

# 自定义生物属性设置
  creeper-max-damage-radius: 3
  attribute-modifier:
#   堆叠乘数方法
    use-stacked: true
    max-health: ['5.0', 'STACKED']
#   自定义公式方法
    max-health: '%max-health% + (%level% * %max-health% * 0.25)'
#   默认乘数方法
    max-health: 5.0
    movement-speed: 0.15
    attack-damage: 2.25
    ranged-attack-damage: 2.0
    creeper-blast-damage: 1.0
    follow-range: 0
    item-drop: 3
    xp-drop: 5
#   特殊乘数（0.0 最小 - 1.0 最大）
    armor-bonus: 0.25
    armor-toughness: 0.15
    attack-knockback: 0.25
    knockback-resistance: 0.2
    zombie-spawn-reinforcements: 0.25

  attribute-modifier:
    vanilla-bonus: ['']
 
  attribute-modifier:
    custom-attribute-modifier:
      EntityType:
        max-health: 5.0
        movement-speed: 0.15
        attack-damage: 2.25
        ranged-attack-damage: 2.0
        creeper-blast-damage: 1.0
        item-drop: 3
        xp-drop: 5

# 区块内死亡设置
  maximum-death-in-chunk-threshold: 0
  max-adjacent-chunks: 3
  chunk-max-cooldown-seconds: 300
  disable-vanilla-drops-on-chunk-max: false
  disable-item-boost-on-chunk-max: true
  disable-xp-boost-on-chunk-max: true

# 杂项设置
  nbt-data: ''
  sunlight-intensity: 5

  tiered-coloring:
    1-5: '&#22E76B' #绿色
    6-10: '&#528CFF' #蓝色
    11-15: '&#FFCD56' #黄色
    16-20: '&#F2003D' #红色
    21-25: '&#B447FF' #紫色
    X-Y: '#COLOR' # 示例语法
    default: '&#FFFFFF' #白色

  spawner-particles: 'SOUL'
  spawner-particles-count: 10

  lock-entity: false
```


</details>


***

<table data-full-width="true"><thead><tr><th width="319">模块化选项设置</th><th>描述</th></tr></thead><tbody><tr><td><code>minLevel:</code><code>maxLevel:</code></td><td>设置程序在处理策略、修饰符或构造级别时使用的最小和最大级别。</td></tr><tr><td><code>construct-level:</code></td><td>有关此设置的更多详细信息<a href="../running-the-default-configuration/#the-construct-level">请参见此处</a>。</td></tr><tr><td><code>nametag:</code></td><td>填充等级化生物的标签字段。</td></tr><tr><td><code>nametag-visiblity-time:</code></td><td>设置如果某个操作临时激活了标签（例如“被攻击”），标签将保持可见的时间。</td></tr><tr><td><code>nametag-placeholder-unlevelled:</code><code>nametag-placeholder-levelled:</code></td><td>填充与特定占位符标签（<code>%levelledmobs_mob-target%</code>）相关联的标签字段，当玩家悬停在等级化或未等级化的生物上时。</td></tr><tr><td><code>nametag-visibility-method:</code></td><td>设置标签如何对玩家可见。<code>TARGETED</code> - 当实体以视线锁定玩家时。<code>ATTACKED</code> - 当玩家攻击实体时。<code>TRACKING</code> - 当实体正在跟踪目标玩家时（跟随范围）。<code>ALWAYS_ON</code> - 标签始终可见，即使通过方块。<code>MELEE</code> - 标签仅在近战范围内可见。<code>DISABLED</code> - 标签被禁用。</td></tr><tr><td><code>creature-death-nametag:</code></td><td>这表示当玩家被等级化生物杀死时使用的名称。</td></tr><tr><td><code>death-messages:</code></td><td>这表示死亡消息树的开始，您可以在此定义设置以更改玩家被实体杀死时发送给他们的消息。您可以通过更改左侧的数字来设置消息被使用的几率，同时在右侧包含您修改后的消息。</td></tr><tr><td><code>entity-name-override:</code> | <code>LVL-LVL:</code>, <code>EntityType:</code>, <code>all_entities:</code></td><td>这允许您为实体创建虚假名称；这不会覆盖任何自定义名称字段。此配置选项有多种实现方法。您可以使用单行项目方法，例如<code>SKELETON: 'Jack'</code>；多个随机选择的选项，例如<code>SKELETON: ['Jack', 'Sally', 'Sandy Claws']</code>；或在应用前检查生物的等级。</td></tr><tr><td><code>health-indicator:</code> | <code>indicator:</code>, <code>indicator-half:</code>, <code>scale:</code>, <code>max:</code>, <code>colored-tiers:</code></td><td>这些表示健康指示器视觉辅助系统。每个设置维护该功能的不同方面：<code>indicator</code>和<code>indicator-half</code>是实体每个“健康条”的字符表示。指示器半仅在最后一个条上使用。<code>max</code>表示每个健康条中<code>indicator</code>的数量，而<code>scale</code>表示每个<code>indicator</code>代表的健康值。最后，<code>colored-tiers</code>允许为从指示器生成的每个健康条建立不同的颜色，随着健康值的增加，颜色逐渐升级。</td></tr><tr><td><code>use-custom-item-drops-for-mobs:</code></td><td>当设置为<code>true</code>时，生物将使用与其相关联的任何适用的自定义掉落物。</td></tr><tr><td><code>use-droptable-id:</code></td><td>这将应用在自定义掉落物中识别的掉落表到生物上。</td></tr><tr><td><code>baby-mobs-inherit-adult-setting:</code></td><td>当设置为<code>true</code>时，相同实体类型的成体和幼体变体将被视为相同。当<code>false</code>时，成体和幼体变体可能被视为不同的实体。例如：<code>ZOMBIE</code>和<code>BABY_ZOMBIE</code></td></tr><tr><td><code>transforming-mobs-inherit-level:</code></td><td>当设置为<code>true</code>时，任何经历转换事件的实体将保留其先前应用的设置。当设置为<code>false</code>时，新转换的实体将尝试在其新状态下重新等级化。转换事件的示例包括当一个大史莱姆分裂成小史莱姆时，或当一个村民转变为僵尸村民并再次转变回来时。</td></tr><tr><td><code>riding-passengers-match-vehicle-level:</code></td><td>当设置为<code>true</code>时，任何作为<code>Passenger</code>组合生成的实体将与堆栈中最低实体生成的等级相同（移动乘客的实体）。无论最低实体生成的等级是什么，乘客将匹配该等级。当设置为<code>false</code>时，每个实体将根据其自身的等级策略生成自己的等级。</td></tr><tr><td><code>creeper-max-damage-radius:</code></td><td>这表示苦力怕爆炸的半径。Minecraft的默认值为<code>3</code>，一个更强的中间值为<code>5</code>；任何高于<code>10</code>的值基本上都是核弹，不推荐使用。</td></tr><tr><td><code>attribute-modifier:</code> | <code>use-stacked:</code>, <code>max-health</code>, <code>movement-speed:</code>, <code>attack-damage:</code>, <code>ranged-attack-damage:</code>, <code>creeper-blast-damage:</code>, <code>follow-range:</code>, <code>item-drop:</code>, <code>xp-drop:</code>, <code>armor-bonus:</code>, <code>armor-toughness:</code>, <code>attack-knockback:</code>, <code>knockback-resistance:</code>, <code>zombie-spawn-reinforcements:</code>, <code>vanilla-bonus:</code>, <code>custom-attribute-modifier:</code></td><td>这表示属性修饰符系统树的开始，您可以根据实体的最大等级或任何各种公式调整实体属性的变化。每个属性的具体细节如下。对于<code>xp-drop</code>或<code>item-drop</code>，值为<code>-1</code>将分别禁用默认的XP或物品掉落。</td></tr><tr><td><code>maximum-death-in-chunk-threshold:</code>, <code>max-adjacent-chunks:</code>, <code>chunk-max-cooldown-seconds:</code>, <code>disable-vanilla-drops-on-chunk-max:</code>, <code>disable-item-boost-on-chunk-max:</code>. <code>disable-xp-boost-on-chunk-max:</code></td><td>这表示区块内死亡系统设置。这些设置允许您限制或完全关闭在指定区块区域内生成的任何等级化生物的自定义掉落物或物品/经验属性修饰符。这对于玩家农场管理以及限制玩家滥用物品或经验掉落增益非常有用。该系统的具体细节如下。</td></tr><tr><td><code>nbt-data:</code></td><td>此配置选项需要软依赖<a href="https://www.spigotmc.org/resources/nbt-api.7939/"><strong>NBT-API</strong></a>才能正常工作。这允许您将NBT标签应用于已生成的实体。这<em>添加</em>NBT标签到生物已有的NBT标签列表中（不会重置/覆盖任何内容）。这是一个用于制作更独特风格实体的有用工具集。</td></tr><tr><td><code>sunlight-intensity:</code></td><td>这表示对在阳光下燃烧的实体施加的额外伤害量。这是一个有用的工具，可以帮助杀死那些健康值超过阳光伤害的高等级实体。</td></tr><tr><td><code>tiered-coloring:</code> | <code>LVL-LVL:</code>, <code>default:</code></td><td>这表示分层颜色系统树的开始，您在此定义必要的设置以利用<code>%tiered%</code>标签，该标签可用于<code>nametag:</code>配置选项中。根据实体的当前等级应用颜色。您将在<code>LVL-LVL:</code>处建立一个等级范围，然后使用Hex或Minecraft颜色代码，前缀为<code>&#x26;</code>代替<code>color</code>。您可以建立一个<code>default:</code>颜色，该颜色将应用于任何生成或召唤的实体，其等级范围未指定。</td></tr><tr><td><code>spawner-particles:</code>, <code>spawner-particles-count:</code></td><td>这仅适用于LM生成器，它是生成生物时使用的粒子效果和数量。可以是<a href="https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html">Minecraft粒子Javadocs</a>中的任何值。</td></tr><tr><td><code>lock-entity:</code></td><td>当设置为<code>true</code>时，标签和自定义掉落规则将锁定到生物，即使稍后应用了不同的规则，也不会更改。</td></tr></tbody></table>

