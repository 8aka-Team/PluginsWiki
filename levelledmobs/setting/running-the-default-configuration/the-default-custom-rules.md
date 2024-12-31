---
sidebar_position: 3
---

# 默认/自定义规则

以下将列出所有应用于默认配置文件的**自定义规则**。这些规则经过测试，被认为是适合寻求适度且独特挑战的普通服务器的“好选择”，但您可以修改下面列出的任何规则，使用相同的逻辑创建自己的规则，或完全删除自定义规则，保留**默认规则**。

***

## 世界特定的下界和末地等级设置

```yaml
  - custom-rule: '下界世界等级策略'
    is-enabled: true
    conditions:
      worlds: 'world_nether'
    strategies:
      y-coordinate:
        start-height: 100
        period: 0
        end-height: 60
    settings:
      construct-level: '%y-coordinate% + %custom_nether%'

  - custom-rule: '末地世界等级策略'
    is-enabled: true
    conditions:
      worlds: 'world_the_end'
    strategies:
      distance-from-origin:
        increase-level-distance: 200
        start-distance: 1000
        spawn-location:
          x: 0
          z: 0
    settings:
      construct-level: '%distance-from-origin% + %custom_end%'
```

这两个自定义规则在功能上相似；每个规则为各自的下界和末地世界文件夹名称建立了_条件_检查。如果实体所在的世界与此条件检查匹配，则该实体将使用自定义规则中建立的_策略_，而不是在应用此规则之前给定的_策略_。我们还必须更改`construct-level:`以尊重_策略_的变化，否则它将尝试使用**默认规则**中建立的`construct-level:`，而该规则并未考虑到_策略_的变化。我们引入了一个`custom_`占位符标签，该标签由启用的**默认规则**预设`lvlmodifier-custom-formula`创建，为等级提供了半随机的修饰符。

对于下界世界，我们将其设置为使用**Y坐标**等级策略，其中最低等级将在100及以上的方块处；尊重基岩天花板上的猪灵农场。而最高等级将在40及以下的方块处；这意味着靠近熔岩表面的怪物应该在其可用的最高等级时更加强大。

至于末地世界，我们将其设置为使用**距离原点**等级策略，您可以建立一个起点，并从该中心点向外扩展难度逐渐增加的环。此处使用的设置反映了起点为主岛上的主世界传送门，并且直到您到达扩展末地领域的第一块方块时，等级才会首次增加。

## 修改的挑战和名称标签

```yaml
  - custom-rule: '特定怪物的青铜挑战'
    is-enabled: true
    use-preset: challenge-bronze
    conditions:
      entities:
        included-groups: [ 'all_flying_mobs' ]
        included-list: [ 'ZOMBIFIED_PIGLIN', 'SHULKER', 'VEX', 'RAVAGER', 'HOGLIN', 'PILLAGER', 'WANDERING_TRADER', 'VILLAGER', 'ZOMBIE_VILLAGER', 'IRON_GOLEM', 'ENDER_DRAGON', 'ELDER_GUARDIAN', 'WITHER', 'WARDEN' ]

  - custom-rule: '特定怪物的原版挑战'
    is-enabled: true
    use-preset: challenge-vanilla
    conditions:
      entities:
        included-groups: [ 'all_passive_mobs' ]
        included-list: [ 'BABY_' ]
        excluded-list: [ 'IRON_GOLEM' ]

  - custom-rule: '特定怪物的最小化名称标签'
    is-enabled: true
    use-preset: nametag-minimized
    conditions:
      entities:
        included-groups: [ 'all_passive_mobs' ]
        included-list: [ 'BABY_', 'WANDERING_TRADER', 'VILLAGER', 'ZOMBIE_VILLAGER', 'BAT', 'ENDER_DRAGON', 'ELDER_GUARDIAN', 'WITHER', 'WARDEN', 'IRON_GOLEM' ]

  - custom-rule: '减少名称标签可见性'
    is-enabled: true
    conditions:
      entities:
        included-groups: [ 'all_passive_mobs' ]
        included-list: [ 'BAT' ]
        excluded-list: [ 'IRON_GOLEM' ]
    settings:
      nametag-visibility-method: [ 'MELEE', 'ATTACKED' ]

  - custom-rule: '特定怪物的自定义属性'
    is-enabled: true
    settings:
      attribute-modifier:
        custom-attribute-modifier:
          ENDERMAN:
            max-health: 0.5
            movement-speed: 0.0
          ENDERMITE:
            max-health: 0.5
            movement-speed: 0.0
          SILVERFISH:
            max-health: 0.5
            movement-speed: 0.0
          CREEPER:
            movement-speed: 0.05
```

这五个自定义规则实现了类似的结果：调整多种怪物类型的难度和等级策略，并应用修改后的名称标签设置以适应调整后的属性变化。

在前两个自定义规则中，我们简单地为选定的怪物设置了降低的默认挑战。一些怪物采取单步降低（因为它们的挑战与普通怪物不同，或者它们是Boss/迷你Boss怪物）或两步降低到原版属性。这是为了让所有怪物都能获得LevelledMobs功能，但不会调整某些特定于农场或类似的怪物的属性。

在第三和第四个自定义规则中，我们更改了这些怪物的名称标签。在这组规则中的第一个规则中，我们为怪物提供了一个不包含其等级输出的简化名称标签；这对于小型怪物以及“特殊”Boss/迷你Boss怪物很有用。第二个规则减少了被动怪物和类似怪物的名称标签可见性，以避免玩家农场中名称标签过多。

第五个规则允许您设置特定实体的属性修饰符，该修饰符将覆盖之前建立的任何属性修饰符值。此规则对于普通服务器的公平性很重要。例如，末影人、末影螨和蠹虫的移动速度被设置为无论等级如何都产生零变化。这是因为这些实体在原版标准中已经具有独特的高移动速度，进一步增加这些速度会使这些怪物几乎无法击中，更不用说防御了。

## 农场和刷怪笼限制器

```yaml
  - custom-rule: '玩家农场物品和经验限制器'
    is-enabled: true
    settings:
      maximum-death-in-chunk-threshold: 15
      max-adjacent-chunks: 5
      chunk-max-cooldown-seconds: 10m
      disable-vanilla-drops-on-chunk-max: false
      disable-item-boost-on-chunk-max: true
      disable-xp-boost-on-chunk-max: true

  - custom-rule: '刷怪笼实体'
    is-enabled: true
    use-preset: challenge-bronze
    conditions:
      spawn-reasons: [ 'SPAWNER' ]
    settings:
      entity-name-override:
        all_entities: '刷怪笼 %displayname%'
```

我们不想通过给玩家一个简单的方式来欺骗系统而破坏任何服务器的经济或农场设置。为了帮助识别任何利用此系统的人，或为玩家获得增加的奖励提供一般的冷却期，您可以访问**区块内死亡限制器**。\
这允许您建立触发限制器所需的等级怪物数量，限制器将强制执行的时间，限制器将应用于事件发生地点的距离，以及限制器将减少或完全移除物品的程度。\
对于默认设置，我们说如果一个玩家在同一个区块中在五分钟（5m）内杀死了十二（12）个等级怪物，那么超过上限的怪物被杀死的区块将被锁定，无法获得LevelledMobs通常提供的物品或经验加成；并且此效果将应用于原始区块周围三个区块内的所有相邻区块。

第二个规则允许更好地控制从_刷怪笼_生成的实体。这既是对玩家也是对服务器的公平；对玩家来说，这些怪物可以以比预期更快的速度和难度生成，对服务器来说，许多玩家使用_刷怪笼_作为其农场设置的一部分。虽然此规则并未移除默认配置提供的物品掉落和经验掉落加成，但它使用了相对较少的数量。您可以编辑此行为以适应服务器的需求。

## 添加盔甲和武器

```yaml
  - custom-rule: '盔甲和武器自定义掉落表'
    is-enabled: true
    conditions:
      entities: [ 'ZOMBIE', 'HUSK', 'PIGLIN', 'ZOMBIFIED_PIGLIN' ]
    settings:
      use-droptable-id: armor_and_weapons
```

此规则使用设置`use-droptable-id:`，该设置连接到`customdrops.yml`文件中的自定义掉落系统。此设置引用了名为`armor_and_weapons`的掉落表，该表存在于默认配置中。此掉落表包括低概率从随机选择的四件铁盔甲中应用两件盔甲，以及类似的低概率给怪物一把剑或斧头。此规则仅适用于少数实体。\
给实体装备是另一种在不调整每个怪物的属性的情况下增加服务器挑战性的方式。

## 外部插件支持

```yaml
  - custom-rule: '具有原版属性和最小化名称标签的外部插件'
    is-enabled: true
    use-preset: challenge-vanilla, nametag-minimized
    conditions:
      external-plugins:
        included-list: ['eco-bosses', 'mythic-mobs', 'elite-mobs', 'infernal-mobs', 'citizens', 'shop-keepers', 'simple-pets', 'elite-bosses', 'blood-night']
        #excluded-list: ['*']
```

此自定义规则连接到内部支持的插件，以及`externalplugins.yml`文件中的一些外部支持的插件。它将它们添加到可等级怪物的批准列表中，默认情况下为它们分配最小化的名称标签且不更改属性。
