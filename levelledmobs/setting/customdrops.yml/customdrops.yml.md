---
sidebar_position: 6
---

```# 🌟 customdrops.yml

## 自定义掉落配置

LevelledMobs的`customdrops.yml`文件允许您使用许多不同的配置选项来构建自定义掉落物，以创建独特的材料和自定义命令，以添加或替换实体的掉落物。

[查看最新默认文件](https://github.com/ArcanePlugins/LevelledMobs/blob/master/src/main/resources/customdrops.yml)

***

## 默认值：

这些配置选项将应用于在CustomDrops中构建的所有掉落物，除非您已修改掉落物的个别属性以覆盖这些默认设置。每个选项都必须有一个值，以便LM的CD能够正常运行，但一旦在此处设置，如果值不会更改，您无需在个别掉落物中设置它。这些默认值适用于CD文件中的所有系统，包括**掉落表**。

> #### 对于任何列为_百分比_的值，请使用以下方法确定要使用的值：
>
> 0.0 = 0%  |  0.1 = 10%  |  0.25 = 25%  |  0.5 = 50%  |  0.75 = 75%  |  1.0 = 100%
>
> 0.01 = 1%  |  0.05 = 5%  | 0.001 = 0.1%  |  0.005 = 0.5%  |  0.00001 = 0.001%

```yaml
defaults:
  chance: 0.2
  chance-formula: ''
  use-chunk-kill-max: true
  amount: 1
  amount-formula: ''
  minLevel: -1
  maxLevel: -1
  damage: 0
  custommodeldata: -1
  min-player-level: -1
  max-player-level: -1
  player-level-variable: ''
  player-level-match-value: ''
  nomultiplier: true
  nospawner: false
  equipped: 1.0
  equip-offhand: true
  equip-on-helmet: false
  override: false
  maxdropgroup: 1
  group-limits:
    cap-select: -1
    cap-per-item: -1
    cap-total: -1
    cap-equipped: -1
    retries: 0
  priority: 0
  player-caused: true
  item-flags: ''
  groupid: ''
  overall-chance: 0.0
  overall-chance-formula: ''
  nbt-data: ''
  only-drop-if-equipped: false
  mob-scale: 0.0
  name: ''
  lore:
    - ''
    - ''
  enchantments:
    ENCHANTMENT: X
  enchantments:
    ENCHANTMENT:
      shuffle: false
      default: 1
      X: 0.5
  overall-permission: ['']
  permission: ['']
  cause-of-death: ['']
  run-on-spawn: false
  run-on-death: true
  delay: 0
```

<table><thead><tr><th width="204" align="center">配置行选项</th><th>描述</th></tr></thead><tbody><tr><td align="center"><code>chance:</code><code>chance-formula:</code></td><td>这表示单个CD掉落的百分比几率。<code>chance</code>支持滑动值。<code>chance-formula</code>将覆盖任何其他指定的<code>chance</code>。这允许通过数学公式而不是静态量来处理几率。</td></tr><tr><td align="center"><code>use-chunk-kill-max:</code></td><td>如果在<code>rules.yml</code>中启用了区块击杀计数系统，则将其设置为true将导致自定义掉落物在达到阈值后不会掉落，直到冷却时间结束。</td></tr><tr><td align="center"><code>amount:</code><code>amount-formula:</code></td><td>这表示掉落的单个CD的数量。这可能是范围值，例如<code>1-3</code>，其中从最小/最大值之间随机选择一个值。<code>amount-formula</code>将覆盖任何其他指定的<code>amount</code>。这允许通过数学公式而不是静态或范围量来处理数量。</td></tr><tr><td align="center"><code>minLevel:</code> <code>maxLevel:</code></td><td>这表示实体在掉落单个CD之前所需的最低和最高等级。替换为<code>-1</code>以禁用特定等级检查。</td></tr><tr><td align="center"><code>damage:</code></td><td>物品将受到的伤害量。可以使用数字或数字范围。值越高，物品损坏越严重。</td></tr><tr><td align="center"><code>custommodeldata:</code></td><td>这是一个高级配置选项；这表示应用于材料CD的自定义模型。</td></tr><tr><td align="center"><code>nomultiplier:</code></td><td>这表示检查CD是否会根据被杀实体的<code>item-drop:</code>值进行乘法。</td></tr><tr><td align="center"><code>nospawner:</code></td><td>这表示检查CD是否适用于由生成器方块生成的实体。</td></tr><tr><td align="center"><code>equipped:</code></td><td>这表示如果实体能够装备，单个CD被装备的百分比几率。它将首先尝试放置在手中，然后是头部，否则如果实体通常无法装备物品（如银鱼），则会忽略。支持滑动值。</td></tr><tr><td align="center"><code>equip-offhand:</code></td><td>如果<code>equipped:</code>成功，并且此设置为<code>true</code>，则它将装备物品到副手而不是主手（如果副手未被占用）。</td></tr><tr><td align="center"><code>equip-on-helmet:</code></td><td>当设置为<code>true</code>时，如果物品成功装备到生物，该生物将尝试将物品装备到其头盔槽。</td></tr><tr><td align="center"><code>name:</code></td><td>这表示应用于材料掉落物的名称，当它用于<code>MATERIAL</code>或<code>PLAYER_HEAD</code>掉落物时。当用于<code>customCommand</code>时，它仅是一个调试值。您可以使用Minecraft的颜色代码，或者如果您的服务器软件支持，可以使用HEX颜色。</td></tr><tr><td align="center"><code>lore:</code></td><td>此配置选项结构允许您设置多行描述以应用于<code>MATERIAL</code>或<code>PLAYER_HEAD</code>掉落物。您可以使用Minecraft的颜色代码，或者如果您的服务器软件支持，可以使用HEX颜色。</td></tr><tr><td align="center"><code>enchantments:</code><code>ENCHANTMENT:</code> <code>X</code><code>ENCHANTMENT:</code> <code>X: 0.5</code><code>shuffle:</code> <code>default:</code></td><td>此配置选项结构允许您将附魔应用于物品。将<code>ENCHANTMENT:</code>替换为附魔名称，并将<code>X</code>替换为该附魔的强度。例如，<code>UNBREAKING: 2</code>。您还可以通过使用<code>X: 0.5</code>在<code>ENCHANTMENT:</code>下指定附魔级别应用于物品的几率；<code>X</code>表示附魔的强度，而<code>0.5</code>表示该附魔级别被应用的几率。在此部分中，您可以指定<code>shuffle: false</code>，这将按顺序而不是随机处理附魔级别几率。设置<code>default: X</code>将在没有任何附魔级别几率成功时使用指定的级别。</td></tr><tr><td align="center"><code>override:</code></td><td>这将确定LM是否会与原始掉落物一起处理CD，或者完全替换它们。</td></tr><tr><td align="center"><code>maxdropgroup:</code> <code>groupid:</code></td><td>在相同<code>EntityType</code>或<code>drop-table:</code>下的多个项目中使用<code>groupid:</code>将把这些CD组合到它们自己单独处理的组中。<code>maxdropgroup:</code>对从相同groupid中选择的项目数量进行限制以进行处理。</td></tr><tr><td align="center"><code>group-limits:</code><code>cap-select:</code><code>cap-per-item:</code><code>cap-total:</code><code>cap-equipped:</code><code>retries:</code></td><td><code>group-limits:</code>设置包括多个上限检查，以应用于相同<code>groupid:</code>中的项目。如果设置了<code>group-limits:</code>中的任何设置，则<code>maxdropgroup:</code>的任何值将被忽略。<code>cap-select:</code>功能与当前的<code>maxdropgroup:</code>设置相同；对从相同groupid中选择的项目数量进行限制以进行掉落处理。例如，如果三个项目共享相同的<code>groupid:</code>，并且我设置了<code>cap-select: 1</code>，则只会选择其中一个项目进行潜在的掉落处理。<code>cap-per-item:</code>作为每个项目的<code>amount:</code>上限。这在<code>retries:</code>被使用时非常有用，您不希望玩家获得大量相同的物品。<code>cap-total:</code>作为所有来源组合在一起的总数量上限，适用于相同<code>groupid:</code>中的项目。<code>cap-equipped:</code>作为实体可以成功装备的相同<code>groupid:</code>中物品的总数量上限。<code>retries:</code>作为重新掷骰的能力，告诉LM在第一次尝试后重新处理相同<code>groupid:</code>中的项目X次。这提供了多次处理一组项目的能力，以增加掉落或装备事件的几率。</td></tr><tr><td align="center"><code>priority:</code></td><td>默认情况下，CD处理掉落物的方式与LM处理规则树的方式类似。通过在单个CD上设置<code>priority:</code>，您可以优先处理某些项目。</td></tr><tr><td align="center"><code>player-caused:</code></td><td>这表示检查实体的死亡是否由玩家引起，或者是否由环境引起。建议您不要将其从<code>true</code>更改为<code>false</code>，因为将其设置为<code>false</code>将导致任何死亡的等级实体可能掉落您自定义的特殊掉落物。</td></tr><tr><td align="center"><code>overall-chance:</code><code>overall-chance-formula:</code></td><td>这表示EntityType的CD被处理的百分比机会。这只需要为EntityType设置一次，如果机会失败，该EntityType的所有CD都不会被处理。支持滑动值。<code>overall-chance-formula</code>将覆盖任何其他指定的<code>overall-chance</code>。这允许通过数学公式而不是静态量来处理从<code>0.0</code>到<code>1.0</code>的整体机会。</td></tr><tr><td align="center"><code>nbt-data:</code></td><td>这允许您指定要应用于材料掉落的任何NBT数据。<strong>注意：</strong>这需要软依赖<a href="https://www.spigotmc.org/resources/nbt-api.7939/"><strong>NBT-API</strong></a><strong>。</strong></td></tr><tr><td align="center"><code>item-flags:</code></td><td>这允许您指定Minecraft提供的各种<code>ITEM_FLAGS</code>以应用于材料。<code>HIDE_ATTRIBUTES</code> - 将隐藏属性，如伤害。<code>HIDE_DESTROYS</code> - 将隐藏物品可以破坏的内容。<code>HIDE_DYES</code> - 将隐藏应用于物品的染料颜色。<code>HIDE_ENCHANTS</code> - 将隐藏物品上的附魔。<code>HIDE_PLACED_ON</code> - 将隐藏物品可以放置的位置。<code>HIDE_POTION_EFFECTS</code> - 将隐藏物品上的药水效果。<code>HIDE_UNBREAKABLE</code> - 将隐藏物品的不可破坏状态。</td></tr><tr><td align="center"><code>only-drop-if-equipped:</code></td><td>这表示一个检查，如果实体成功<code>equipped:</code>了物品，是否应用<code>chance:</code>掉落。如果设置为<code>true</code>，则只有在物品成功装备时才会尝试掉落。如果设置为<code>false</code>，则无论物品是否装备，都会尝试掉落。</td></tr><tr><td align="center"><code>overall-permission:</code> <code>permission:</code></td><td>一个<code>MODALLIST</code>配置选项；这表示对实体最近的玩家或杀死实体的玩家的检查，取决于其实现。所有权限都注册为<code>levelledmobs.permission.&#x3C;node></code>，其中<code>&#x3C;node></code>表示此配置的值。例如，如果您的权限是<code>levelledmobs.permission.vip</code>，您可以这样配置：<code>permission: ['vip']</code>。使用<code>overall_permission:</code>将应用于集合中的所有物品，而<code>permission:</code>应用于每个单独的物品。</td></tr><tr><td align="center"><code>cause-of-death:</code></td><td>一个<code>MODALLIST</code>配置选项；这表示对实体如何被杀死的检查。这只考虑最后一击，并且会忽略<code>player-caused: true</code>，因为死亡原因通常不涉及玩家互动（'火'造成伤害，而不是玩家）。</td></tr><tr><td align="center"><code>mob-scale:</code></td><td>一个配置值，然后乘以怪物的当前等级，以从<code>%mob-scale%</code>占位符标签生成最终输出。</td></tr><tr><td align="center"><code>min-player-level:</code> <code>max-player-level:</code></td><td>这表示在单个CD掉落之前，玩家所需的最低和最高Minecraft等级。用<code>-1</code>替换以禁用此特定等级检查。</td></tr><tr><td align="center"><code>player-level-variable</code></td><td>如果设置了此配置选项，上述<code>min-player-level:</code>和<code>max-player-level:</code>将引用此变量而不是玩家的Minecraft等级。您可以在此处使用任何<code>PAPI</code>占位符标签，类似于<code>Player Levelling</code>策略使用变量生成等级的方式。</td></tr><tr><td align="center"><code>player-level-match-value</code></td><td>如果设置了此配置选项，您可以改为从<code>PAPI</code>占位符标签中检查基于文本的值。这仍然可以引用上述<code>min-player-level:</code>和<code>max-player-level:</code>。您可以在此处使用任何<code>PAPI</code>占位符标签，类似于<code>Player Levelling</code>策略使用变量生成等级的方式。标签将与<code>player-level-variable:</code>进行检查。此配置选项包括通配符功能，以从<code>player-level-variable:</code>中提取部分输出。您可以添加<code>*</code>作为前缀、后缀或两者以搜索部分匹配。例如，如果变量输出是<code>Lvl 5 Zombie- S0hp</code>，我可以搜索<code>Zombie\*</code>或<code>*Zombie*</code>以成功匹配，因为单词<code>Zombie</code>部分匹配作为通配符检查。在此示例下，搜索<code>Zombie</code>将无法匹配，因为输出中的单词显示为<code>Zombie-</code>，而搜索参数是精确匹配。</td></tr><tr><td align="center"><code>external-amount</code></td><td>当与LM Items官方插件一起使用时，这将内部数量设置为指定的插件</td></tr><tr><td align="center"><code>type</code></td><td>当与LM Items官方插件一起使用时，这将设置物品类型（目前仅支持MMOItems）</td></tr><tr><td align="center"><code>run-on-spawn</code></td><td>仅适用于自定义命令，确定是否在怪物生成时执行</td></tr><tr><td align="center"><code>run-on-death</code></td><td>仅适用于自定义命令，确定是否在怪物死亡时执行</td></tr><tr><td align="center"><code>delay</code></td><td>仅适用于自定义命令，这是命令执行前经过的滴答数</td></tr></tbody></table>

***

## 通用组：

LM包括几个实体组，它们以方便的格式捆绑在一起。每个组都作为自己的EntityType，同时应用于多个实体。您可以参考[EntityType通用组](https://github.com/lokka30/LevelledMobs/wiki/Documentation---rules.yml#universal-mob-and-biome-groups)了解不同类型！

## 指定怪物：

LM已在CD文件中列出了截至Minecraft 1.20的所有原版实体。您应该找到您希望修改的实体，而不是在配置的其他位置添加额外的实体，因为它们很可能不会按预期处理。您可以选择删除任何不使用的实体，因为您可以随时再次添加它们。

## 公式处理

对于某些选项，如<code>chance</code>、<code>overall-chance</code>和<code>amount</code>，您可以改为指定其对应的<code>-formula</code>变体。例如，<code>chance-formula:</code>。\
这将允许您指定一个数学公式来计算此值，而不是可用的静态或轻微范围选项。您可以利用许多可用的[占位符](../../levelledmobs-v4.0/placeholders.md)来调整值。\
下面是一个如何实现新机制的示例，通过使同一物品在低级别时成功的机会大大降低，但在高级别时成功的机会大大提高。

```yaml
chance-formula: '(%level%/(%max_level%+10))'

# 这将为以下系列级别处理如下：
#级别1：(1/(25+10)) = 0.02  机会
#级别5：(5/(25+10)) = 0.14  机会
#级别15：(15/(25+10)) = 0.42  机会
#级别25：(25/(25+10)) = 0.71  机会
```

## 滑动值

有三个选项支持滑动值：`chance`、`equipped` 和 `overall_chance`。你可以使用小数表示百分比，或者分配代表等级范围和分配范围的层级。语法如下：

```yaml
chance:
  lvl-lvl: X-Y
```

在左侧，你放置层级可以匹配的最小和最大等级，然后在右侧放置这些等级范围将使用的最小和最大几率；分配的数值将根据分配的等级值滑动。如果怪物等级在最小和最大之间，则将使用分配的最小和最大分配值。例如：

```yaml
- IRON_SWORD:
    chance:
      1-10: 0.2-0.8
      11-20: 1.0
```

在上面的例子中，等级1的怪物将有20%的几率。等级10的怪物将有80%的几率，而介于两者之间的怪物等级将按比例缩放。对于等级11到20的怪物，它们将有100%的几率。任何没有分配的怪物等级将有0%的几率，例如上面例子中的等级21+。

## 掉落表

CD 包含掉落表系统，允许你构建材料组或自定义命令，这些可以附加到任何 `EntityType` 作为单个项目，使用 `usedroptable: tableName`，有助于减少覆盖多个实体的重复掉落实例。这也可以用于制作“分层”掉落。

```yaml
PUT_ENTITY_TYPE_HERE:
  - usedroptable: 'putTableNameHere'
```

在使用掉落表构建掉落时，你可以复制用于任何其他掉落的相同格式，将 `EntityType` 替换为 `tableName`。

**注意：** 强烈建议你使用 **Rules** 文件来实现任何掉落表。它将提供更准确的条件，以确定何时以及如何应用掉落表。

## LM 物品 - 外部插件支持

如果你想使用来自外部插件的自定义物品，请查看 LM 物品。\
这个插件弥合了差距，使你可以原生使用第三方物品。\
从 [https://www.spigotmc.org/resources/lm-items.102081/](https://www.spigotmc.org/resources/lm-items.102081/) 下载

LM 物品如何改善你的服务器的一个例子：将玩家头颅添加到怪物中！

以下是如何使用 `- HeadDatabase:` LM 物品类型的示例。

```yaml
# 需要 LM_Items 官方插件
  - HeadDatabase:61942:
      amount: 1
      chance: 1.0
```

你提供来自 [Minecraft Heads](https://minecraft-heads.com/) 的头颅 ID 号，该 ID 号在你选择的头颅的 URL 中提供，并将其附加到 `HeadDatabase:` 物品类型，如上所示。\
例如，URL `https://minecraft-heads.com/custom-heads/humanoid/61942-demon-helmet` 的 ID 为 `61942`。

## 材料、命令和特殊物品

```yaml
- MATERIAL:

- ENCHANTED_BOOK:
    enchantments:
      ENCHANTMENT: X

- customCommand:
    command: ''
    command: ['', '']
    ranged_A: ''
    ranged_B: ''
    name: ''
```

`MATERIAL:` 掉落从上面列出的默认部分获取其配置选项。列出的任何配置选项都可以在任何 `MATERIAL:` 或 `customCommand` 掉落中使用。

`customCommand:` 告诉 CD 你希望设置一个命令来处理，就像任何其他掉落一样。\
为了使此功能正常工作，至少需要 `command:` 配置选项，并带有有效的控制台格式命令。\
你也可以通过列出多个命令来同时使用它们，如上所示。\
一个有效命令的示例可能是 `effect give %player% strength %ranged_a% %ranged_b%`。\
带有 `ranged_` 前缀的标签是唯一的。这些允许你构建一个随机数生成器，用作命令中的占位符。上面的示例配置展示了如何使用 `ranged` 配置选项，将 A/B/C/D 等附加到 `ranged_` 末尾创建标签，而值表示可以应用于单个命令掉落中存在的占位符标签的潜在值范围。使用前面的示例命令，`ranged_A: 1-2` 和 `ranged_B: 3-5`，则第一个标签将是1-2之间的任何值，而第二个标签将是3-5之间的任何值，当在激活的命令中使用时。

`ENCHANTED_BOOK` 是一种特殊的 `MATERIAL` 掉落，它将通过使用 `enchantments:` 配置选项启用可用于铁砧的附魔书。