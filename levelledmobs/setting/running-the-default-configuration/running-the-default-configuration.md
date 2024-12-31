---
sidebar_position: 2
---

# 🌟 运行默认配置

## **默认规则和预设**

```yaml
#   ---------------  -  ------------------------------
#        第03节  |  设置默认规则
#   ---------------  -  ------------------------------
#
default-rule:
  use-preset:
    #===== 选择一个挑战 =====
    #- challenge-vanilla
    #- challenge-bronze
    - challenge-silver
    #- challenge-gold
    #- challenge-platinum
    #- challenge-formula
    
    #===== 选择策略 =====
    #- lvlstrategy-random
    - lvlstrategy-weighted-random
    - lvlstrategy-distance-from-origin
    #- lvlstrategy-y-coordinate

    #===== 选择修饰符 =====
    - lvlmodifier-player-variable
    - lvlmodifier-custom-formula

    #===== 选择附加选项 =====
    - nametag-using-numbers
    #- nametag-using-indicator
    #- nametag-minimized
    #- nametag-disabled
    #- custom-death-messages


#
#   ---------------  -  ------------------------------
#    第03节 - A  |  默认规则 / 条件
#   ---------------  -  ------------------------------
#
  conditions:
    worlds: ['*']
    #biomes: ['*']
    entities: ['*']

    mob-customname-status: EITHER
    mob-tamed-status: EITHER


#
#   ---------------  -  ------------------------------
#    第03节 - A  |  默认规则 / 条件
#   ---------------  -  ------------------------------
#
  conditions:
    worlds: ['*']
    #biomes: ['*']
    entities: ['*']

    mob-customname-status: EITHER
    mob-tamed-status: EITHER
#
#   ---------------  -  ------------------------------
#    第03节 - B  |  默认规则 / 设置
#   ---------------  -  ------------------------------
#
  settings:
  # 核心LevelledMobs设置
    minLevel: 1
    maxLevel: 50

    construct-level: '%distance-from-origin% + %weighted-random% + %player-variable-mod% + %rand_-5_5% + %custom_special%'

  # CustomDrop设置
    use-custom-item-drops-for-mobs: true

  # 附加Nametag设置
    nametag-placeholder-levelled: ''
    nametag-placeholder-unlevelled: ''
    nametag-visible-time: 5s
    nametag-visibility-method: [ 'TARGETED', 'ATTACKED', 'TRACKING' ]

  # 调整`%tiered%`和`%health-indicator-color%`占位符
    tiered-coloring:
      1-09: '&#x26;#22E76B' #绿色
      10-19: '&#x26;#528CFF' #蓝色
      20-29: '&#x26;#FFCD56' #黄色
      30-39: '&#x26;#F2003D' #红色
      40-49: '&#x26;#B447FF' #紫色
      50-50: '&#x26;#FFD700' #金色
      default: '&#x26;#FFFFFF' #白色
      
    health-indicator:
      colored-tiers:
        tier-1: '&#x26;#22E76B' #绿色
        tier-2: '&#x26;#528CFF' #蓝色
        tier-3: '&#x26;#FFCD56' #黄色
        tier-4: '&#x26;#FE803C' #橙色
        tier-5: '&#x26;#F2003D' #红色
        tier-6: '&#x26;#B447FF' #紫色
        default: '&#x26;#B447FF' #白色
      scale: 5
      max: 5

  # LevelledMobs生成器立方体设置
  # 使用命令:  /lm spawner
    spawner-particles: 'SOUL'
    spawner-particles-count: 10

    baby-mobs-inherit-adult-setting: true
    transforming-mobs-inherit-level: true
    riding-passengers-match-vehicle-level: false

  # 杂项设置
    multipliers:
      vanilla-bonus:
        excluded-list: ['LEADER_ZOMBIE_BONUS', 'RANDOM_SPAWN_BONUS']

    sunlight-intensity: 5
    creeper-max-damage-radius: 3
```

上述代码是从`rules.yml`文件中复制的，适用于`v4.0.0 b1`版本。

***

## 初始预设部分

```yaml
  use-preset:
    #===== 选择一个挑战 =====
    #- challenge-vanilla
    #- challenge-bronze
    - challenge-silver
    #- challenge-gold
    #- challenge-platinum
    #- challenge-formula
    
    #===== 选择策略 =====
    #- lvlstrategy-random
    - lvlstrategy-weighted-random
    - lvlstrategy-distance-from-origin
    #- lvlstrategy-y-coordinate

    #===== 选择修饰符 =====
    - lvlmodifier-player-variable
    - lvlmodifier-custom-formula

    #===== 选择附加选项 =====
    - nametag-using-numbers
    #- nametag-using-indicator
    #- nametag-minimized
    #- nametag-disabled
    #- custom-death-messages
```

从顶部部分开始，我们看到了一系列`use-preset:`选项，其中大部分已被注释掉。这些选项大量使用了位于**默认规则**上方的**预设**部分，以便快速在几个常见且有用的选项之间切换；有些选项是相同的，但具有不同的值，而其他选项则提供了可选功能，并提供了一种方便的方式在**默认规则**或**自定义规则**中应用它们。

在这个例子中，我们将各种**预设**类型分为四类：_挑战_、_策略_、_修饰符_和_杂项_。

在_挑战_部分，我们有六个经过游戏测试的挑战预设：_Vanilla_、_Bronze_、_Silver_ \[默认]、_Gold_、_Platinum_和_Formula_。这些预设包括与更改实体属性相关的设置，其中_Vanilla_表示对属性零更改；_Bronze_包含适度的增加；_Silver_，我们的默认值，是我们在乐趣和挑战之间的中间地带；_Gold_通常要求玩家全副武装才能应对，而_Platinum_则是为硬核玩家或服务器设计的，赋予玩家非原版的能力。_Formula_是LevelledMobs 4的新增功能；创建一个与_Gold_挑战相当的挑战，但使用我们新的自定义公式机制处理，允许您使用一定程度的数学来制作自己的属性更改。

_策略_部分包括任何可能用于计算怪物等级的已启用_策略_。该部分与_修饰符_部分一起，生成与相关策略相关的内部使用占位符标签。在LevelledMobs 4中，您可以指定多个运行的_策略_或_修饰符_，这些策略或修饰符可以以多种方式组合在一起。我们建议使用`construct-level:`配置设置（如下所述）来精确构建您的等级。

在此部分下方是_杂项_选项，其中包括来自独特名称标签、自定义实体名称、自定义玩家死亡消息、健康指示器显示等的可选功能的预设。

***

## 构造等级

LevelledMobs 4 新增的构造等级设置允许您从各种_策略_或_修改器_中获取输出，并结合基本的数学函数来生成最终应用的等级。此功能允许您同时启用多个策略，每个策略提供自己的数值“等级”值，您可以根据需要将它们组合在一起。使用默认配置（如下所示），我们从启用的**距离起源**和**加权随机**策略中获取输出，以相同名称的占位符形式，以及**玩家变量**和**自定义公式**修改器在其各自的占位符下，添加了一个新的**随机**变量，范围在-5到5之间，最后使用数学方法将这些值结合起来，提供一种独特的等级策略。

如果您未指定`construct-level:`，则_策略_和_修改器_的输出将组合在一起以生成最终应用的等级。

```yaml
construct-level: '%distance-from-origin% + %weighted-random% + %player-variable-mod% + %custom_special% + %rand_-5_5%'
```

## 属性修改与等级的区别

在等级、等级提升以及`minLevel`或`maxLevel`值之间，与生物属性的实际修改之间存在重要区别。

当您设置`minLevel`和`maxLevel`时，您是在告诉LevelledMobs生物的最低和最高数值等级值。默认情况下，在大多数情况下，`minLevel`可能应保持在`1`，但有时有理由将此值设置得更高（例如，您可能希望所有生物在开始时都有一个人为更高的属性提升）。至于`maxLevel`，这更加主观，取决于您希望如何拉伸生物属性的变化。默认情况下，我们使用`maxLevel: 50`，这意味着我们将属性变化从等级1拉伸到等级50。

## 属性修改器

当您使用原始的LevelledMobs方法设置`attribute-modifier:`时（如下所示），插件将使用该值作为“在最大等级时的乘数增加”，并为每个低于最大等级的等级提供该值的相等部分。

```yaml
    settings:
      attribute-modifier:
        max-health: 5.0
```

$
f(x) = attribute + ((attribute * config) * (level / maxlevel))
$

还有一些特殊的乘数，由于Minecraft中属性的性质，其输出结果必须在`0.0`和`1.0`之间。我们使用以下公式来应用这些特殊属性的值（如下所示）。

```yaml
      # 特殊乘数（0.0 最小 - 1.0 最大）
        armor-bonus: 0.5
        armor-toughness: 0.5
        attack-knockback: 0.5
        knockback-resistance: 0.5
        zombie-spawn-reinforcements: 0.15
```

:::info

其中`attribute.max`由以下值填充：

```
armor-bonus: - 30.0
armor-toughness: - 20.0
attack_knockback: - 5.0
knockback_resistance: - 1.0
zombie-spawn-reinforcements: - 1.0
```

:::

$
f(x) = (level / maxlevel) * (attribute.max * config)
$

然而，作为LevelledMobs4的一部分，您现在可以使用基本的数学公式来调整属性（如下所示）。在此示例中，我们获取相同属性的占位符值，表示实体的基础属性值，然后在此基础上添加等级乘以其生命值的0.25倍。此公式的最终结果是，每提升一个等级，生命值增加原始实体生命值的25%。

```yaml
    settings:
      attribute-modifier:
        max-health: '(%level-ratio% * %max-health% * 5)'
```

***

##

## 在下一节中，我们将解释默认规则如何作为默认配置的一部分应用。