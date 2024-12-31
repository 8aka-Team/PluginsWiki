---
sidebar_position: 2
---

# 默认 / 默认规则

## 条件检查

```yaml
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
```


作为**默认规则**的一部分，您需要建立LevelledMobs可以运行的核心条件集。这至少包括您希望LevelledMobs运行的_世界_和_实体_。如果未指定世界，则作为保护措施，LevelledMobs将假定它无法访问任何世界；实体也是如此。

我们还提供了通过`mob-tamed-status`条件来识别宠物的选项，或者通过`mob-customname-status`条件来识别生物是否具有名称标签或自定义名称。

## 应用的设置


```yaml
#
#   ---------------  -  ------------------------------
#    第03节 - B  |  默认规则 / 设置
#   ---------------  -  ------------------------------
#
  settings:
  # LevelledMobs核心设置
    minLevel: 1
    maxLevel: 50

    construct-level: '%distance-from-origin% + %weighted-random% + %player-variable-mod% + %custom_special% + %rand_-5_5%'

  # 自定义掉落设置
    use-custom-item-drops-for-mobs: true

  # 额外名称标签设置
    nametag-placeholder-levelled: ''
    nametag-placeholder-unlevelled: ''
    nametag-visible-time: 5s
    nametag-visibility-method: [ 'TARGETED', 'ATTACKED', 'TRACKING' ]

  # 调整`%tiered%`和`%health-indicator-color%`占位符
    tiered-coloring:
      1-09: '&#22E76B' #绿色
      10-19: '&#528CFF' #蓝色
      20-29: '&#FFCD56' #黄色
      30-39: '&#F2003D' #红色
      40-49: '&#B447FF' #紫色
      50-50: '&#FFD700' #金色
      default: '&#FFFFFF' #白色
      
    health-indicator:
      colored-tiers:
        tier-1: '&#22E76B' #绿色
        tier-2: '&#528CFF' #蓝色
        tier-3: '&#FFCD56' #黄色
        tier-4: '&#FE803C' #橙色
        tier-5: '&#F2003D' #红色
        tier-6: '&#B447FF' #紫色
        default: '&#B447FF' #白色
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


在这里，您将应用为先前符合条件的生物设置的默认设置。

您还可以在`settings:`下包含任何您想要应用的`attribute-modifiers`，不过我们使用**预设**部分来包含一个适当的_挑战_，其中包括这些配置选项。

在建立了等级范围和构造等级之后，我们有一系列可选设置，可以应用各种更改来调整LevelledMobs的功能；从启用自定义掉落系统，到管理某些生物的等级继承等。



***

从这里开始，我们将通过基于各种条件创建多个**自定义规则**来对**默认规则**进行多次修改，并解释我们做出这些决定的原因，以便您决定默认配置是否适合您，以及您可能如何进行更改以使其完美。



## 在下一节中，我们将解释作为默认配置一部分的每个**自定义规则**。
