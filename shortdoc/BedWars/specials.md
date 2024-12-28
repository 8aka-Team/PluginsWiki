---
sidebar_position: 8
---

# 特殊物品

特殊物品可以在商店中出售，并且在使用时具有独特的行为。例如，它们可以生成实体、减少击退、给予药水效果等。

插件也可以引入新的特殊物品。

商店中的每个特殊物品都使用`properties`进行配置。

## 箭矢阻挡器

箭矢阻挡器是一种物品，使用后可以在一定时间内阻挡箭矢。

箭矢阻挡器有两个可配置的选项：

* `protection-time` - 玩家在多少秒内不会被投射物伤害。
* `delay` - 使用后的冷却时间（以秒为单位），在此期间玩家不能使用另一个箭矢阻挡器。

以下是在商店中配置箭矢阻挡器的示例：

```yaml
- price: 5 of gold
  properties:
  - name: "ArrowBlocker"
    protection-time: 10
    delay: 5
  stack:
    type: ender_eye
    display-name: "箭矢阻挡器"
    lore:
      - "用黑魔法阻挡向你飞来的箭矢。"
      - "我的意思是，用这个物品。"
```

也可以使用`config.yml`中的全局配置，而不是本地配置。`config.yml`中的全局配置如下：

```yaml
specials:
  # ...
  arrow-blocker:
    protection-time: 10
    delay: 5
  # ...
```

要使用全局配置，只需在商店配置中省略不想覆盖的选项。如果只有一个属性且没有覆盖项，可以使用以下语法：

```yaml
- price: 5 of gold
  properties: "ArrowBlocker"
  stack:
    type: ender_eye
    display-name: "箭矢阻挡器"
    lore:
      - "用黑魔法阻挡向你飞来的箭矢。"
      - "我的意思是，用这个物品。"
```

## 自动点燃TNT

自动点燃TNT是一种特殊物品，放置时会生成点燃的TNT。

自动点燃TNT有三个可配置的选项：

* `explosion-time` - 生成的TNT在多少秒后爆炸。
* `damage-placer` - 放置TNT的玩家是否也会受到伤害。
* `damage` - TNT造成的伤害。

:::note TNT跳跃

    像SBA这样的插件提供了与此物品相关的跳跃功能的额外自定义。请参阅其文档以获取更多详细信息。

:::

以下是在商店中配置自动点燃TNT的示例：

```yaml
- price: 3 of iron
  properties:
  - name: "AutoIgniteableTnt"
    explosion-time: 5
    damage-placer: false
    damage: 4.0
  stack:
    type: tnt
    display-name: "自动点燃TNT"
```

也可以使用`config.yml`中的全局配置，而不是本地配置。`config.yml`中的全局配置如下：

```yaml
specials:
  # ...
  auto-igniteable-tnt:
    explosion-time: 5
    damage-placer: false
    damage: 4.0
  # ...
```

要使用全局配置，只需在商店配置中省略不想覆盖的选项。如果只有一个属性且没有覆盖项，可以使用以下语法：

```yaml
- price: 3 of iron
  properties: "AutoIgniteableTnt"
  stack:
    type: tnt
    display-name: "自动点燃TNT"
```

## 傀儡

傀儡是一种特殊物品，生成一个傀儡来攻击敌方队伍。

此特殊物品有多个可配置的选项：

* `speed` - 傀儡的速度。
* `follow-range` - 傀儡跟随敌人的范围。
* `health` - 傀儡的生命值。
* `show-name` - 是否在傀儡头上显示其名称。
* `delay` - 生成另一个傀儡的冷却时间。
* `collidable` - 玩家是否与傀儡碰撞。
* `name-format` - 显示在傀儡头上的名称格式。有两个占位符：`%teamcolor%`表示队伍颜色，`%team%`表示队伍名称。

以下是在商店中配置傀儡的示例：

```yaml
- price: 24 of iron
  properties:
  - name: "Golem"
    speed: 0.25
    follow-range: 16.0
    health: 20
    show-name: true
    delay: 0
    collidable: true
    name-format: "%teamcolor%%team% Golem"
  stack:
    type: ghast_spawn_egg
    display-name: "Golem"
    lore:
      - "An iron golem that will protect"
      - "your team from the enemies."
```

在 `config.yml` 中的全局配置也可以用来替代本地配置。`config.yml` 中的全局配置如下所示：

```yaml
specials:
  golem:
    speed: 0.25
    follow-range: 16.0
    health: 20
    show-name: true
    delay: 0
    collidable: true
    name-format: "%teamcolor%%team% Golem"
```

要使用全局配置，只需在商店配置中省略你不想覆盖的选项。如果只有一个属性且没有覆盖项，你可以使用以下语法：

```yaml
- price: 24 of iron
  properties: "Golem"
  stack:
    type: ghast_spawn_egg
    display-name: "Golem"
    lore:
      - "An iron golem that will protect"
      - "your team from the enemies."
```

## 幸运方块

幸运方块是一种特殊物品，灵感来源于 [BedWarsRel 的 LuckyBlock 插件](https://www.spigotmc.org/resources/bedwarsrel-luckyblock-addon.8268/)。  
这个方块可以放置在任何地方，当它被破坏时，会触发一个随机配置的事件。幸运方块默认不在商店中出售，因此你必须手动将它们添加到商店中。

与其他特殊物品一样，幸运方块使用 `properties` 进行配置。这些方块的属性名为 `LuckyBlock`，并包含一个 `data` 部分。该部分是一个可能发生的事件列表。

共有 5 种事件类型：

* `nothing` - 顾名思义，什么也不做。
* `teleport` - 此事件会将玩家沿 Y 轴传送。变量 `height` 用于配置相对传送的高度。例如，如果玩家在高度 60 处，且配置的高度为 50，则玩家将被传送到 Y 110。
* `tnt` - 当此事件发生时，会生成一个点燃的 TNT 实体，并立即爆炸。
* `potion` - 此事件会给玩家一个药水效果。效果通过变量 `effect` 配置。
* `item` - 此事件会给玩家一个物品。物品通过变量 `stack` 配置。

以下是一个完整配置的幸运方块示例，包含了所有这些事件。此外，每个事件都可以有一个变量 `message`。此消息将发送给破坏方块的玩家。

```yaml
- price: 7 of iron
  properties:
  - name: "LuckyBlock"
    data:
    - type: tnt
    - type: nothing
    - type: teleport
      height: 50
    - type: item
      stack: dirt
      message: "This sends you message. You can add it to any event type."
    - type: potion
      effect:
        effect: blindness
        amplifier: 2
        duration: 100
        ambient: true
        particles: true
        icon: true
  stack:
    type: sponge
    amount: 1
    display-name: "Lucky Block"
```

与其他特殊物品不同，幸运方块没有全局配置。

## 磁力鞋

穿上这种特殊物品后，会随机吸收所有受到的击退效果，使你在 PvP 中获得优势。

这种特殊物品有一个可配置的选项：

* `probability` - 一个数字（0-100），表示鞋子吸收击退效果的百分比概率。

以下是商店中配置的磁力鞋示例：

```yaml
- price: 6 of iron
  properties:
  - name: "MagnetShoes"
    probability: 75
  stack:
    type: iron_boots
    display-name: "Magnet-Shoes"
    lore:
      - "Wear those shoes and have a 75%"
      - "chance of getting no knockback!"
```

在`config.yml`中的全局配置也可以用来替代本地配置。`config.yml`中的全局配置如下所示：

```yaml
specials:
  # ...
  magnet-shoes:
    probability: 75
  # ...
```

要使用全局配置，只需在商店配置中省略你不想覆盖的选项。如果只有一个属性且没有覆盖项，你可以使用以下语法：

```yaml
- price: 6 of iron
  properties: "MagnetShoes"
  stack:
    type: iron_boots
    display-name: "Magnet-Shoes"
    lore:
      - "穿上这双鞋，有75%的几率"
      - "不会受到击退效果！"
```

## 保护墙

保护墙是一种特殊物品，使用时可以建造一堵墙。

该物品有多个可配置的选项：

* `is-breakable` - 是否可以破坏墙的方块。
* `delay` - 在建造另一堵保护墙之前的冷却时间。
* `break-time` - 墙消失的时间（以秒为单位）。可以设置为`0`以禁用墙的自动破坏。
* `width` - 墙的宽度（以方块为单位）。必须为奇数；如果为偶数，插件将打印警告并额外添加一个方块。
* `height` - 墙的高度（以方块为单位）。
* `distance` - 从激活物品的玩家到墙出现位置的距离（以方块为单位），方向为玩家面对的方向。
* `material` - 用于建造墙的材料。如果材料是可着色的，它将自动转换为队伍的颜色。

以下是在商店中配置保护墙的示例：

```yaml
- price: 64 of bronze
  properties:
  - name: "protectionwall"
    is-breakable: false
    delay: 20
    break-time: 0
    width: 5
    height: 3
    distance: 2
    material: cut_sandstone
  stack:
    type: bricks
    display-name: "Protection Wall"
    lore:
      - "立即建造一堵可以"
      - "救你一命的墙！"
```

在`config.yml`中的全局配置也可以用来替代本地配置。`config.yml`中的全局配置如下所示：

```yaml
specials:
  # ...
  protection-wall:
    is-breakable: false
    delay: 20
    break-time: 0
    width: 5
    height: 3
    distance: 2
    material: cut_sandstone
  # ...
```

要使用全局配置，只需在商店配置中省略你不想覆盖的选项。如果只有一个属性且没有覆盖项，你可以使用以下语法：

```yaml
- price: 64 of bronze
  properties: "protectionwall"
  stack:
    type: bricks
    display-name: "Protection Wall"
    lore:
      - "立即建造一堵可以"
      - "救你一命的墙！"
```

## 救援平台

救援平台与保护墙类似，但它建造的是一个平台，玩家可以在坠落时使用它来防止坠落伤害或掉出地图。

该物品有多个可配置的选项：

* `is-breakable` - 是否可以破坏平台的方块。
* `delay` - 在建造另一个救援平台之前的冷却时间。
* `break-time` - 平台消失的时间（以秒为单位）。可以设置为`0`以禁用平台的自动破坏。
* `distance` - 从激活物品的玩家到平台出现位置的距离（以方块为单位），方向为玩家下方。
* `material` - 用于建造平台的材料的名称。如果材料是可着色的，它将自动转换为队伍的颜色。

以下是在商店中配置救援平台的示例：

```yaml
- price: 64 of bronze
  properties:
  - name: "rescueplatform"
    is-breakable: false
    delay: 0
    break-time: 10
    distance: 1
    material: glass
  stack:
    type: blaze_rod
    display-name: "Rescue Platform"
    lore:
      - "使用救援平台保护自己"
      - "免于坠入虚空。"
      - "这是你最后的希望！"
```

在`config.yml`中的全局配置也可以用来替代本地配置。`config.yml`中的全局配置如下所示：

```yaml
specials:
  # ...
  rescue-platform:
    is-breakable: false
    delay: 0
    break-time: 10
    distance: 1
    material: glass
  # ...
```

要使用全局配置，只需在商店配置中省略你不想覆盖的选项。如果只有一个属性且没有覆盖项，你可以使用以下语法：

```yaml
- price: 64 of bronze
  properties: "rescueplatform"
  stack:
    type: blaze_rod
    display-name: "Rescue Platform"
    lore:
      - "使用救援平台保护自己"
      - "免于坠入虚空。"
      - "这是你最后的希望！"
```

## 团队箱子

放置此物品会创建一个仅限放置团队访问的箱子。所有这些箱子共享相同的库存，类似于末影箱。

由于历史原因，商店中的任何末影箱都会根据给定的属性转换为团队箱子。要禁用此行为，您必须在 `config.yml` 中将 `specials.teamchest.turn-all-enderchests-to-teamchests` 设置为 `false`。

在商店中明确创建的团队箱子如下所示：

```yaml
- price: 1 of gold
  properties: "teamchest"
  stack: ender_chest
```

:::warning

    物品的类型必须是 `ender_chest` 才能正常工作！

:::

## 可投掷火球

可投掷火球代表玩家可以从手中投掷的火球。

此物品有多个可配置选项：

* `damage` - 火球造成的伤害量。
* `incendiary` - 确定爆炸是否会引起火灾。
* `damage-thrower` - 确定火球在投掷者附近爆炸时是否会对投掷者造成伤害。

:::note 火球跳跃

    像 SBA 这样的插件提供了与此物品相关的跳跃功能的额外自定义。请参阅其文档以获取更多详细信息。

:::

以下是在商店中配置的可投掷火球的示例：

```yaml
- price: 40 of iron
  properties:
  - name: "ThrowableFireball"
    damage: 3.0
    incendiary: true
    damage-thrower: true
  stack:
    type: fire_charge
    display-name: "Fireball"
    lore:
      - "是鸟吗？是飞机吗？"
      - "当你意识到时"
      - "你已经死了！"
```

也可以在 `config.yml` 中使用全局配置，而不是本地配置。`config.yml` 中的全局配置如下所示：

```yaml
specials:
  # ...
  throwable-fireball:
    damage: 3.0
    incendiary: true
    damage-thrower: true
  # ...
```

要使用全局配置，只需在商店配置中省略您不希望覆盖的选项。如果只有一个属性且没有覆盖项，您可以使用以下语法：

```yaml
- price: 40 of iron
  properties: "ThrowableFireball"
  stack:
    type: fire_charge
    display-name: "Fireball"
    lore:
      - "是鸟吗？是飞机吗？"
      - "当你意识到时"
      - "你已经死了！"
```

## TNT 羊

TNT 羊是一种特殊物品，可以召唤一只爆炸羊，跟随敌方玩家。召唤后，它会锁定最近的敌人。

此特殊物品有多个可配置选项：

* `speed` - 羊的速度。
* `follow-range` - 羊会跟随敌人的范围。
* `max-target-distance` - 初始目标的最大距离（以方块为单位）。如果在此距离内没有目标，羊将不会生成。
* `explosion-time` - TNT 爆炸和羊消失的时间（以秒为单位）。

以下是在商店中配置的 TNT 羊的示例：

```yaml
- price: 10 of gold
  properties:
  - name: "TNTSheep"
    speed: 0.25
    follow-range: 10.0
    max-target-distance: 32
    explosion-time: 8
  stack:
    type: sheep_spawn_egg
    display-name: "TNT Sheep"
    lore:
      - "使用 TNT 羊！它会"
      - "走向你最近的敌人"
      - "并在 8 秒内爆炸！"
```

也可以在 `config.yml` 中使用全局配置，而不是本地配置。`config.yml` 中的全局配置如下所示：

```yaml
specials:
  # ...
  tnt-sheep:
    speed: 0.25
    follow-range: 10.0
    max-target-distance: 32
    explosion-time: 8
  # ...
```

要使用全局配置，只需在商店配置中省略您不希望覆盖的选项。如果只有一个属性且没有覆盖项，您可以使用以下语法：

```yaml
- price: 10 of gold
  properties: "TNTSheep"
  stack:
    type: sheep_spawn_egg
    display-name: "TNT Sheep"
    lore:
      - "使用 TNT 羊！它会"
      - "走向你最近的敌人"
      - "并在 8 秒内爆炸！"
```

## 追踪器

追踪器是一种简单的特殊物品，用于显示最近敌人的距离和方向。建议将追踪器设置为指南针，因为该物品会设置使用者的指南针目标。与其他特殊物品不同，该物品是永久性的，可以重复使用。

以下是在商店中配置的追踪器示例：

```yaml
- price: 5 of iron
  properties: "Tracker"
  stack:
    type: compass
    display-name: "Tracker"
    lore:
      - "想知道你最近的目标在哪里吗？"
      - "试试这个吧！"
```

## 陷阱

陷阱是一种可放置的特殊物品。当敌人踩到陷阱时，所有配置的事件都会发生。此外，团队将收到有人触发了他们的陷阱的通知。

与其他特殊物品不同，陷阱没有全局配置。这里唯一的选项是`data`，它是一个包含所有事件的列表。

有三种事件类型：

* `sound` - 播放指定的声音。
* `effect` - 对受害者施加药水效果。效果使用变量`effect`进行配置。
* `damage` - 对玩家造成指定的伤害。

以下是一个完全配置的陷阱示例：

```yaml
- price: 3 of iron
  properties:
   - name: "Trap"
     data:
      - damage: 2.0
      - sound: ENTITY_SHEEP_AMBIENT
      - effect:
          effect: blindness
          amplifier: 2
          duration: 100
          ambient: true
          particles: true
          icon: true
      - effect:
          effect: weakness
          amplifier: 2
          duration: 100
          ambient: true
          particles: true
          icon: true
      - effect:
          effect: slowness
          amplifier: 2
          duration: 100
          ambient: true
          particles: true
          icon: true
  stack:
    type: string
    display-name: "Trap"
    lore:
      - "当敌人踩到你的陷阱时，你会收到通知"
      - "并且你的敌人将无法正常移动。"
```

## 传送粉末

传送粉末是一种特殊物品，使用时会将你传送到团队出生点。然而，你必须等待几秒钟不动，否则传送将被取消。

传送粉末有两个可配置的选项：

* `teleport-time` - 玩家被传送前的冷却时间（以秒为单位）。
* `delay` - 使用后的冷却时间（以秒为单位），在此期间玩家不能使用另一个传送粉末。

以下是在商店中配置的传送粉末示例：

```yaml
- price: 7 of iron
  properties:
  - name: "WarpPowder"
    teleport-time: 6
    delay: 0
  stack:
    type: gunpowder
    display-name: "Warp Powder"
    lore:
      - "使用这种粉末时，你将在6秒内"
      - "被传送到你的出生点"
      - "警告：任何移动都会停止该过程"
```

也可以在`config.yml`中使用全局配置，而不是本地配置。`config.yml`中的全局配置如下所示：

```yaml
specials:
  # ...
  warp-powder:
    teleport-time: 6
    delay: 0
  # ...
```

要使用全局配置，只需在商店配置中省略你不想覆盖的选项。如果只有一个属性且没有覆盖，可以使用以下语法：

```yaml
- price: 7 of iron
  properties: "WarpPowder"
  stack:
    type: gunpowder
    display-name: "Warp Powder"
    lore:
      - "使用这种粉末时，你将在6秒内"
      - "被传送到你的出生点"
      - "警告：任何移动都会停止该过程"
```