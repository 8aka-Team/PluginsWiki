---
sidebar_position: 7
description: XP来源配置指南
---

# 来源

**来源** 是玩家在技能中获得XP的游戏行为。这包括挖掘方块或击杀生物等活动。每个技能的来源都在 `sources` 文件夹中配置，每个技能有不同的文件。每个来源的XP值可以更改，并且可以根据来源类型及其选项添加全新的来源。

## 默认部分

`default` 部分用于在来源文件中通过不重复编写相同选项来节省行数。默认部分中的每个键都会复制到 `sources` 部分中的每个来源，除非在特定来源中被具有相同路径的键覆盖。

例如，考虑以下带有默认部分的来源配置：

```yaml
default:
  type: brewing
  trigger: takeout
  menu_item:
    material: potion
sources:
  awkward:
    ingredient: nether_wart
    xp: 10
    menu_item:
      potion_data:
        type: awkward
```

这与以下没有默认部分的来源配置相同：

```yaml
sources:
  awkward:
    type: brewing # 从之前的默认部分复制
    trigger: takeout # 从之前的默认部分复制
    ingredient: nether_wart
    xp: 10
    menu_item: # menu_item 部分与之前的默认部分合并
      material: potion # 来自之前的默认部分
      potion_data: # 来源本身定义的键
        type: awkward
```

默认部分对于使文件更简洁非常有用，特别是对于大多数来源类型相同且共享常见选项的技能。

## 类型

每个来源必须有一个 `type` 键，用于定义来源的行为类型。如果你看到一个没有指定类型的来源，这意味着它使用了 `default` 部分中的类型。

每个来源都有一个名称，即其在定义时所在的节点的名称。此名称可以在 [tags](sources.md#tags) 部分中用于引用该来源。在单个技能中，来源名称必须是唯一的。

:::info
某些选项有复数列表变体，例如 `block` 和 `blocks`。如果定义了复数键，则不应使用单数键，即使它被列为必需项。
:::

#### 全局选项

以下是适用于所有来源类型的选项列表：

* `xp` - 来源给予的XP数量。这是基础数量，不包括任何能力、权限或物品乘数。（必需）
* `display_name` - 在菜单中用于标识来源的可读名称。默认来源已经在消息文件中的路径 `sources.[type].[name]` 定义了显示名称。仅在需要覆盖消息值或为新创建的无需本地化的来源定义 `display_name` 时才定义此项。
* `menu_item` - 定义在来源菜单中用于表示来源的物品的部分。可以在 `material` 中使用占位符到其他键，例如，只需在默认部分中定义一个 menu\_item。详见 [#Menu item](sources.md#menu-item)。
  * Oraxen 物品通过使用以 `oraxen:` 为前缀的字符串键来支持。例如，`menu_item: oraxen:mythril` 将使用 Oraxen 中定义的确切物品，包括任何 NBT。这直接在 `menu_item` 键上定义为字符串值，而不是用于正常菜单物品的映射部分。
* `unit` - 定义某些来源的单位名称的占位符，这些来源的XP数量是动态的，例如每点伤害的防御XP或每个铁砧成本经验的锻造XP。这对于在给予XP时某些单位正常工作是必需的。详见特定类型的部分以获取有效值。
* `income_per_xp` - 根据值乘以获得的XP给予金钱。仅在 [Main Config](main-config/#jobs) 中启用了 jobs 时有效。这与主配置中的 income\_per\_xp 工作方式相同，但覆盖了特定来源的值。与 income 和 income\_expression 互斥。
* `income` - 当获得来源时给予固定的小数金钱金额。仅在启用了 jobs 时有效。与 income\_per\_xp 和 income\_expression 互斥。
* `income_expression` - 用于计算收入的表达式，工作方式与 [Main Config](main-config/#jobs) 中的 jobs.income.default.expression 相同。仅在启用了 jobs 时有效。与 income\_per\_xp 和 income 互斥。

### 铁砧

铁砧来源（`type: anvil`）在铁砧中合并物品时给予XP。

#### 选项

* `left_item` - 定义左槽中有效物品的 [物品过滤器](sources.md#item-filter)。（必需）
* `right_item` - 定义右槽中有效物品的物品过滤器。（必需）
* `multiplier` - 用于乘以基础XP的占位符。目前必须是值 `'{repair_cost}'`，即在铁砧中使用经验等级。

### 方块

方块来源（`type: block`）在破坏或与方块交互时给予XP。可以使用选项定义涉及多个方块或特定方块状态的复杂来源。

#### 选项

* `block` - 方块类型/材料。这必须是有效的 Bukkit [Material](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)，全部小写。（必需）
  * Oraxen 自定义方块通过在方块名称前加上 `oraxen:` 来支持。例如，`block: oraxen:mythril_ore` 将自动从 Oraxen 注册方块状态，无需手动定义 `state`。
* `blocks` - 用于将多个方块分组到同一来源的多个方块类型的列表。覆盖 `block`。
* `trigger` - 方块上的行为类型。可以是 `break` 或 `interact`。`break` 是玩家用左键破坏方块时。`interact` 是右键点击方块时。（必需）
* `triggers` - 多个触发器的列表。
* `check_replace` - 玩家放置的方块是否不应给予XP。如果为 true，放置的方块将不给予XP。如果为 false，任何匹配来源的方块都将给予XP。默认为 true。
* `state` - 定义方块必须匹配的特定方块状态的键的部分。
* `states` - 用于匹配列表中任何方块状态的方块状态部分的列表。
* `after_state` - 在与方块交互后一tick检查的方块状态。如果方块不匹配 after\_state，则不给予XP。仅在 `trigger` 设置为 `interact` 时有效。
* `after_states` - 用于在一tick后检查的方块状态列表。如果方块仍然匹配列表中的任何状态，则给予XP。
* `state_multiplier` - 包含方块状态变量的表达式，计算结果为乘以基础 `xp` 的数字。
* `support_block` - 为某些方块定义的方向，如果相邻方块被破坏，则会自动破坏。有效值为 `above`、`below`、`side` 和 `none`。这确保了当方块间接被破坏时，可以将其标记为玩家放置的方块。默认为 `none`。
* `trunk` - 方块是否为树干。由 Treecapitator 用于检查有效方块以破坏。默认为 false。
* `leaf` - 方块是否为树叶方块。由 Treecapitator 用于检查有效方块以破坏。默认为 false。

### 酿造

酿造来源（`type: brewing`）在酿造台中酿造药水时给予XP。

#### 选项

* `ingredient` - 定义有效药水成分的物品过滤器
* `trigger` - 何时给予XP，可以是 `brew` 或 `takeout`。使用 `brew` 意味着自动酿造器仍会将XP给予放置酿造台的玩家。

### 伤害

伤害源（`type: damage`）在玩家受到伤害时给予经验值。在默认的源中，这处理了防御源和敏捷中的坠落伤害。给予的经验值是`xp`键乘以受到的伤害量。

#### 选项

* `cause` - 伤害的原因，必须是一个有效的Bukkit [DamageCause](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageEvent.DamageCause.html)，全部小写。
* `causes` - 多个伤害原因的列表。
* `excluded_cause` - 被排除的原因。如果没有指定`cause`/`causes`，则除了`excluded_cause`之外的任何原因都有效。
* `excluded_causes` - 多个被排除的伤害原因的列表。
* `damager` - 玩家必须受到伤害的特定实体类型。可以是`mob`、`player`或任何Bukkit [EntityType](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)，全部小写。指定damager会自动排除非实体伤害，如坠落伤害。
* `damagers` - 多个有效的实体类型的列表。
* `excluded_damager` - 被排除的特定实体类型，不会给予经验值。
* `excluded_damagers` - 被排除的多个实体类型的列表。
* `must_survive` - 玩家是否必须存活下来才能获得经验值。默认为true。
* `use_original_damage` - 给予的经验值是否应乘以原始伤害，不考虑任何伤害减少的修正（如护甲、属性、能力等）。默认为true。
* `cooldown_ms` - 再次获得经验值前的延迟时间，单位为毫秒（默认200）。

### 附魔

附魔源（`type: enchanting`）在玩家在附魔台附魔物品时给予经验值。

#### 选项

* `item` - 定义可附魔物品的物品过滤器。（必需）
* `unit` - 用于乘以经验值的单位。目前必须是`'{sources.units.enchant_level}'`。

### 实体

实体源（`type: entity`）在玩家杀死或伤害实体时给予经验值。

#### 选项

* `entity` - 玩家杀死/伤害的实体类型，必须是有效的Bukkit [EntityType](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)。（必需）
* `trigger` - 给予经验值的触发条件，可以是实体`death`或`damage`。（必需）
* `triggers` - 多个触发条件的列表。
* `damager` - 给予经验值时匹配的damager，可以是`player`、`projectile`或`thrown_potion`。
* `damagers` - 多个有效的damagers的列表。
* `scale_xp_with_health` - 如果`trigger`是damage，伤害经验值乘数将根据被伤害生物的最大生命值进行缩放。杀死生物获得的总经验值在death和damage触发条件下将保持一致。默认为true。
* `cause` - 伤害的原因，必须是一个有效的Bukkit [DamageCause](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/event/entity/EntityDamageEvent.DamageCause.html)，全部小写。
* `causes` - 多个伤害原因的列表。
* `excluded_cause` - 被排除的原因。如果没有指定`cause`/`causes`，则除了`excluded_cause`之外的任何原因都有效。
* `excluded_causes` - 多个被排除的伤害原因的列表。

### 钓鱼

钓鱼源（`type: fishing`）用于玩家钓鱼。

#### 选项

* `item` - 定义玩家钓上来的物品的物品过滤器。

### 砂轮

砂轮源（`type: grindstone`）在玩家在砂轮上拆解物品时给予经验值。

#### 选项

* `multiplier` - 给予经验值时乘以基础`xp`的占位符。目前只能是`'{total_level}'`，即砂轮移除的所有附魔的附魔等级之和。

### 物品消耗

物品消耗源（`type: item_consume`）在玩家消耗药水或食用物品时给予经验值。

#### 选项

* `item` - 定义被消耗物品的物品过滤器。（必需）

### 跳跃

跳跃源（`type: jumping`）在玩家跳跃时给予经验值。

#### 选项

* `interval` - 给予经验值所需的跳跃次数。每次跳跃给予的经验值是`xp/interval`。默认为100。

### 法力技能使用

法力技能使用源（`type: mana_ability_use`）在玩家使用法力技能时给予经验值。给予的经验值是`xp`乘以消耗的法力值。

#### 选项

* `mana_ability` - 仅在使用特定法力技能时给予经验值的法力技能名称。
* `mana_abilities` - 仅在使用特定法力技能时给予经验值的法力技能列表。

### 药水投掷

药水投掷源（`type: potion_splash`）在玩家使用投掷或滞留药水时给予经验值。

#### 选项

* `item` - 定义被投掷药水类型的物品过滤器。（必需）

### 统计

统计源（`type: statistic`）在Minecraft玩家统计增加时给予经验值。经验值的给予由`skills.yml`中Endurance下的`xp_gain_period`选项控制的固定间隔时间。默认间隔是每5分钟。要使源工作，服务器的`spigot.yml`中的`stats.disable-saving`必须为false（默认情况下为false，因此只有在更改后才需要检查）。

#### 选项

* `statistic` - 跟踪增加并给予经验值的统计名称。必须是有效的Bukkit [Statistic](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Statistic.html)，全部小写。（必需）
* `multiplier` - 乘以获得的经验值的固定量。（默认为1）
* `minimum_increase` - 统计在检查期间必须增加的最小量，以便给予经验值。如果获得的量小于最小值，它仍将计入下一次检查的量。（默认为1）

## 物品过滤器

多个源具有`item`、`ingredient`或类似选项，使用物品过滤器格式，该格式定义了物品在源类型中必须通过的过滤器，以便与特定源匹配。这允许指定具有精确材料和元数据的单个特定物品，或允许多个材料的更一般过滤器。

### 通用选项

* `material` - 物品必须是的单一特定材料。这应该是有效的Bukkit [Material](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html)，全部小写。
* `materials` - 过滤器可以匹配的多个材料的列表。
* `excluded_material` - 排除的单一材料。
* `excluded_materials` - 排除的多个材料的列表。
* `category` - 匹配所有物品的类别名称。有效值为`weapon`、`armor`、`tool`、`fishing_junk`和`fishing_treasure`。

### 直接值

在只需要过滤器中的单一材料的情况下，可以直接指定材料名称作为值，而不是在子部分中。

例如：

```yaml
ingredient: nether_wart
```

等同于

```yaml
ingredient:
  material: nether_wart
```

### 元数据选项

进一步的选项可以用于更具体地缩小物品的范围，而不仅仅是材料。这些选项与通用选项放在相同的缩进级别（在`item`或`ingredient`等部分名称的右侧一个级别）。

* `display_name` - 必须与物品完全匹配的字符串显示名称。
* `lore` - 定义必须与物品完全匹配的lore的字符串列表。
* `potion_data` - 包含指定要匹配的药水类型的选项的部分。
  * `type` - 要匹配的有效Bukkit [PotionType](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionType.html)，全部小写。
  * `types` - 要匹配的多个药水类型的列表。
  * `excluded_type` - 排除的PotionType。
  * `excluded_types` - 排除的多个药水类型的列表。
  * `extended` - 药水是否必须具有延长持续时间。
  * `upgraded` - 药水是否必须具有升级等级。
* `custom_model_data` - 匹配物品的CustomModelData id的整数。材料和custom_model_data都必须匹配才能通过过滤器。

### 示例

以下是一个在 `item_consume` 源中使用的物品过滤器示例：

```yaml
drink_regular:
  type: item_consume
  item: # 物品过滤器部分名称
    material: potion # 消耗的物品必须是药水
    potion_data:
      # 药水的类型不能是平凡、浓稠、笨拙或水瓶
      excluded_types: [ mundane, thick, water, awkward ]
      extended: false # 药水不能是延长的
      upgraded: false # 药水不能是升级的
  xp: 20
```

以下是一个在 `brewing` 源中使用的物品过滤器示例：

```yaml
regular:
  type: brewing
  trigger: takeout
  ingredient: # 物品过滤器部分名称
    # 原料不能是以下任何材料
    excluded_materials: [ redstone, glowstone_dust, nether_wart, gunpowder, dragon_breath ]
  xp: 15
```

## 菜单项

如上所述，`menu_item` 选项是一个定义在源菜单中用于表示源的物品的部分。该部分的格式在 [Slate Items 页面](https://app.gitbook.com/s/20NRRZnH0xxoDaR57bRl/items) 中有详细解释。

内置占位符可以用于引用 `menu_item` 中的其他键。

```yaml
default:
  type: block
  trigger: break
  menu_item:
    material: '{block}'
```

上面的示例为块源的默认部分将用每个源的 `block` 值替换 `{block}` 占位符。因此，如果泥土源有 `block: dirt`，则生成的菜单项材料将是 `material: 'dirt'`。

## 标签

源文件中的 `tags` 部分用于配置插件提供的某些能力或机制的源列表。你不能从该部分添加或删除标签，只能修改提供的标签列表。

例如，`farming_luck_applicable` 标签是应用 Farming Luck 特性双倍掉落加成的源列表。

### 通配符和排除

默认情况下，你可能看不到列表中的源名称，因为许多列表中只有一个符号 `*`。这会将技能中的所有源添加到标签中。

如果你想从已经包含通配符的列表中排除一个源而不添加每个其他源，可以在源名称前加上 `!` 来排除它。

```yaml
tags:
  farming_luck_applicable:
    - '*'
    - '!sugar_cane'
```

在上面的示例中，除甘蔗外的所有耕作源都将应用于 Farming Luck。

```yaml
tags:
  farming_luck_applicable:
    - wheat
    - potato
    - carrot
    - beetroot
```

此示例显示了使 Farming Luck 仅适用于小麦、土豆、胡萝卜和甜菜根。请注意，列表中使用的名称是源名称（`sources` 下的部分名称），而不是源中的 `block` 值。