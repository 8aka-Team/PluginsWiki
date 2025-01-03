---
sidebar_position: 3
---

# 👾 示例自定义规则

以下是一些示例自定义规则，您可以将其实现到您的LevelledMobs4规则文件中。每个规则都提供了其功能的简要描述，以及您可能在自己的服务器上使用它的方式。

***

### 拒绝为指定生物分配等级

```yaml
  - custom-rule: '拒绝为指定生物分配等级'
    is-enabled: true
    conditions:
      entities:
        included-list: ['BABY_']
        included-groups: ['all_passive_mobs']
    settings:
      maxLevel: 0
```

> 此规则通过`conditions`检查指定的`entities`，使用`included-list:`指定单个生物类型（`BABY_`代表所有幼年生物），并使用`included-groups:`指定一个通用的生物组。

### 自定义生物属性修改

```yaml
  - custom-rule: '自定义末影龙属性'
    is-enabled: true
    conditions:
      entities: ['ENDER_DRAGON']
    settings:
      attribute-modifier:
        max-health: 5.0
        xp-drop: 10.0
        item-drop: 2.0
        attack-damage: 2.5
        ranged-attack-damage: 1.0
```

> 此规则为末影龙生物提供了一组自定义的属性修改。

### 使用Boss栏样式的生命值指示器作为名称标签

<figure><img src="../../.gitbook/assets/image (1).png" alt=""></img><figcaption><p>此规则在生物上的输出示例。</p></figcaption></figure>

```yaml
  - custom-rule: 'Boss栏样式名称标签'
    is-enabled: true
    settings:
      nametag: '%health-indicator%'
      health-indicator:
        indicator: '█'
        indicator-half: '▌'
        scale: 6
        max: 10
        colored-tiers:
          tier-1: '&#22E76B' #绿色
          tier-2: '&#528CFF' #蓝色
          tier-3: '&#FFCD56' #黄色
          tier-4: '&#FE803C' #橙色
          tier-5: '&#F2003D' #红色
          tier-6: '&#B447FF' #紫色
          default: '&#FFFFFF' #白色
```

> 此自定义规则没有条件，因此它将应用于任何在此规则生效时被分配了等级的生物；您可以添加自己的`conditions`来限制其应用范围。

### 基于生物等级的独特名称

```yaml
  - custom-rule: '等级依赖的自定义名称'
    is-enabled: true
    settings:
      entity-name-override:
        1-5:
          all_entities: ['出牙的 %displayname%']
        6-10:
          all_entities: ['抓挠的 %displayname%']
        11-20:
          all_entities: ['咬人的 %displayname%']
        21-25:
          all_entities: ['捕猎的 %displayname%']
```

> 此自定义规则将根据生物的等级为其赋予一个独特的名称。此规则适用于所有生物，但您可以指定单个生物。

### 为外部插件生物自定义规则

```yaml
  - custom-rule: 'EliteMobs第三方生物'
    is-enabled: true
    conditions:
      external-plugins: ['elite-mobs']
    settings:
      attribute-modifier:
        max-health: 3.0
        xp-drop: 2.5
        item-drop: 1.5
      minLevel: 5
      maxLevel: 10
```

> 对于通过`externalplugins.yml`支持的任何第三方生物插件或任何其他内部支持的第三方生物插件，您可以对其进行条件检查，然后为这些类型的生物应用任何一组独特的规则。您可以通过实体类型或自定义名称等进一步缩小条件范围。

### 削弱刷怪笼生物

```yaml
  - custom-rule: '削弱刷怪笼生物'
    is-enabled: true
    conditions:
      spawn-reasons: ['SPAWNER']
    settings:
      entity-name-override:
        all_entities: '刷怪笼 %displayname%'
      attribute-modifier:
        max-health: 0.0  # 用于农场
        armor-bonus: 0.0
        armor-toughness: 0.0
        xp-drop: 0.0
        item-drop: 0.0
```

> 此自定义规则将监听任何从刷怪笼生成的生物。这些生物的名称将被赋予前缀`刷怪笼`，并且其属性将被修改，以防止任何常见的玩家农场被破坏。

### 修改构造等级以应用新策略

```yaml
  - custom-rule: '为下界自定义等级策略'
    is-enabled: true
    conditions:
      worlds: ['world_nether']
    strategies:
      y-coordinate:
        start-height: 100
        period: 0
        end-height: 60
    settings:
      construct-level: '%y-coordinate%'
```

> 当您需要为生物创建新的等级策略时，如果所做的更改不符合先前建立的`construct-level:`（可能来自`default-rule:`），则需要为其赋予一个新的`construct-level:`。

### 受惊的苦力怕 | 需要NBT-API插件

```yaml
  - custom-rule: '自定义苦力怕 - 受惊且引信短'
    is-enabled: true
    conditions:
      chance: 0.1
      entities: ['CREEPER']
    settings:
      nbt-data: '{Fuse:2,Attributes:[{Name:"generic.follow_range",Base:1f}]}'
      entity-name-override:
        CREEPER: ['受惊的 %displayname%']
```

> 此规则利用了与第三方插件NBT-API的兼容性。
>
> 此规则将以10%的几率为苦力怕生物应用自定义NBT数据。此自定义NBT修改了它们的视野范围和引信时间，使两者都非常短。这意味着苦力怕将无法识别玩家，除非玩家靠近，并且如果它们识别到玩家，它们将以比正常更短的引信时间爆炸。

### 使用自定义规则中的掉落表

```yaml
  - custom-rule: '应用自定义掉落表中的掉落表'
    is-enabled: true
    settings:
      use-droptable-id: name-of-table, other-table
```

> 此自定义规则将应用 `drop-table` 中的 `name-of-table` 和 `other-table`。
>
> 这些表在 `customdrops.yml` 中被引用。

### 使用自定义占位符与玩家变量修改器

```yaml
  - custom-rule: '设置玩家等级修改器'
    is-enabled: true
    modifiers:
      player-variable-mod:
        player-variable: '%level%'
        player-variable-scale: 1.0
        player-variable-tiers:
          '31-45': 3-7
          '16-30': 2-5
          '0-15': 1-3
          default: 1
        match-variable: false
        use-variable-as-max: false
        recheck-players: true
        decrease-output: true
        output-cap: 25
        preserve-entity: 60s
    settings:
      construct-level: '%player-variable-mod% + %rand_-5_5%'
```

> 此自定义规则利用玩家变量修改器（PVM）和构造等级机制来改变应用于怪物的等级。构造等级根据玩家变量修改器设置生成一个数字，并将其与-5到5之间的随机数相加。

### 将自定义规则限制在指定的WorldGuard区域

```yaml
  - custom-rule: 'WorldGuard区域规则'
    is-enabled: true
    conditions:
      worldguard-regions: ['worldguard-region-name']
    settings:
      maxLevel: 0
```

> 此规则将检查怪物是否在指定的WorldGuard区域生成，如果是，则应用指定的设置。

### 将自定义规则限制在指定的坐标范围内

```yaml
 - custom-rule: '在坐标范围内（单点坐标示例 [1D-点]）'
   is-enabled: true
   conditions:
     within-coordinates:
       start-x: 50
       start-y: 64
       start-z: 50
   settings:
     minLevel: 1
     maxLevel: 5

 - custom-rule: '在坐标范围内（直线坐标示例 [2D-线]）'
   is-enabled: true 
   conditions:
     within-coordinates:
       start-x: 50
       end-x: 75
       start-y: 64
   settings:
     minLevel: 1
     maxLevel: 5

 - custom-rule: '在坐标范围内（平面坐标示例 [2D-平面]）'
   is-enabled: true
   conditions:
     within-coordinates:
       start-x: 50
       end-x: 75
       start-y: 64
       start-z: 50
       end-z: 75
   settings:
     minLevel: 1
     maxLevel: 5

 - custom-rule: '在坐标范围内（立方体坐标示例 [3D-立方体]）'
   is-enabled: true 
   conditions:
     within-coordinates:
       start-x: 50
       end-x: 75
       start-y: 64
       end-y: 90
       start-z: 50
       end-z: 75
   settings:
     minLevel: 1
     maxLevel: 5
```

> 这些是几个示例，展示了如何在隔离特定坐标集或坐标区域时使用 `within-coordinates` 条件来应用自定义规则。

> 在第一个示例中，您可以看到如何通过为每个 `start-x`、`start-y` 和 `start-z` 条件指定 `start-` 坐标来指定特定点或坐标。由于未指定 `end-` 坐标，该条件将自动填充为与相应的 `start-` 相同的值。这意味着，在示例中，规则仅适用于坐标位置 (50, 64, 50)。这可能对指定生成实体的特殊命令块或生成器立方体非常有用。

> 在第二个示例中，您可以看到如何指定一条直线坐标。我们指定了 `start-x` 和 `end-x`，并指定了 `start-y`。使用与上述相同的逻辑，我们设置了 `start-y` 但没有设置 `end-y`，因此这些值将相等。由于我们指定了 `start-x` 和 `end-x`，这意味着在这两个设定数字之间的任何 `X` 坐标值都是有效的。这意味着，在示例中，规则仅适用于在 `y=64` 和 `x=50` 到 `x=75` 之间的任何 `X` 坐标生成的实体。这将在 `y=64` 高度处创建一条从 `x=50` 到 `x=75` 的线；移除 `start-y` 将在任何高度创建相同的效果，从而在任何高度创建一个2D平面坐标，而不是一条线。

> 在第三个示例中，您可以看到如何指定一个2D平面坐标。我们指定了 `start-x`/`end-x` 和 `start-z`/`end-z`，并指定了 `start-y`。由于指定了 `X` 和 `Z` 坐标范围，这意味着在这些 `start-` 和 `end-` 之间的任何坐标都是有效的。由于我们指定了 `Y` 坐标，这将生成2D平面；移除 `start-y` 将在任何高度创建相同的效果，从而在任何高度创建一个3D立方体坐标，而不是2D平面。

> 在最后一个示例中，您可以看到如何指定一个3D立方体坐标。我们指定了所有三个 `start-` 和 `end-` 坐标类型，这意味着在这些 `start-` 和 `end-` 值之间的任何值都是有效的。在示例中，这将生成一个立方体，其中一个角为 (50, 64, 50)，对角为 (75, 90, 75)。

> 对于所有 `end-` 选项，您可以指定 `+` 或 `-` 值。这些值仅表示“所有高于”或“所有低于”相应的 `start-` 值。此外，您可以为所有 `start-` 和 `end-` 值指定负数。最后，提醒一下，任何指定了 `start-` 但没有指定相应的 `end-` 的值将自动填充为与 `start-` 相同的值，从而创建单点坐标。如果既没有指定相应的 `start-` 也没有指定 `end-`（例如 `start-y` 和 `end-y` 一起），则在考虑实体位置时不会检查该坐标类型。

### 从主世界同步等级到地狱

```yaml
  - custom-rule: '主世界 - 地狱同步 1 of 3'
    is-enabled: true
    conditions:
      worlds: 'world'
    strategies:
      distance-from-origin:
        increase-level-distance: 1000
        start-distance: 0
        spawn-location:
          x: 0
          z: 0
    settings:
      construct-level: '%distance-from-origin%'

  - custom-rule: '主世界 - 地狱同步 2 of 3'
    is-enabled: true
    conditions:
      worlds: 'world'
      apply-below-y: 65
    strategies:
      distance-from-origin:
        increase-level-distance: 1000
        start-distance: 0
        spawn-location:
          x: 0
          z: 0
    settings:
      # 假设海平面，y=64，为过渡区。
      construct-level: '%distance-from-origin% + (((%y%/8)-8)*-1)'

  - custom-rule: '主世界 - 地狱同步 3 of 3'
    is-enabled: true
    conditions:
      worlds: 'world_nether'
    strategies:
      distance-from-origin:
        increase-level-distance: 125
        start-distance: 0
        spawn-location:
          x: 0
          z: 0
    settings:
      construct-level: '%distance-from-origin% + (((%y%/8)-16)*-1) + 16'
```

这些系列自定义规则的目的是安排一个等级系统，在主世界中使用距离原点的等级策略，从中心点每1000个方块应用一个等级。然后，它表示等级将从Minecraft的海平面（y=64方块）向下每8个方块增加一个等级。这种增加一直持续到玩家到达Minecraft的基岩层（y=-64方块）。这为我们提供了从y=64到基岩的最大16级增加。这意味着，在中心点本身，我在基岩层遇到的最高等级应该是17级；1级来自距离，16级来自深度。

然后，我们为地狱建立了一个类似的等级结构，使用已知的地狱信息来补偿主世界的差异。例如，主世界中的每1000个方块在地狱中仅代表125个方块的距离。如果我们假设主世界“在地狱之上”，并且等级将从主世界的底部继续增加到地狱的天花板，那么我们需要将第二个自定义规则中从主世界向下增加的16级“纳入”地狱领域自定义规则。我们通过在地狱公式中人工减去这16级的距离来实现这一点，以便在天花板处的怪物已经额外增加了16级。

地狱的天花板官方位于y=127，地狱的地板官方位于y=0。如果我们继续“每8个方块”增加一个等级，那么我们在地狱的末尾还有近16级可以增加。




