# 创建新配方

所有配方都位于 'plugins/CustomRecipes/recipes' 文件夹中。

要创建自己的配方，只需复制任何模板文件，并更改其值。

在下面，您可以找到有关每个配置条目的信息。

## 结构
```yaml
CursedSword: 
  Enabled: true
  Shapeless: true
  Item: 'DIAMOND_SWORD'
  Item-Damage: 'none'
  Amount: 1
  Placeable: true
  Ignore-Data: false
  Ignore-Model-Data: false
  Custom-Tagged: true
  Identifier: 'CURSED_SWORD'
  Permission: 'crecipe.recipe.cursedsword'
  Name: '&e诅咒之剑'
  Lore:
   - '&f诅咒之剑'
  Effects:
   - 'POISON:20:2'
  Hide-Enchants: true
  Enchantments:
   - 'DURABILITY:300'
  ItemCrafting:
   - 'DDD'
   - 'XPX'
   - 'XPX'
  Ingredients:
    D:
      Material: DIAMOND
      Identifier: none
      Amount: 1
      Name: '钻石神殿'
    P:
      Material: OAK_PLANKS
      Identifier: none
      Amount: 1
      Name: '木板'
  Item-Flags: []
  Attribute: []
  Custom-Model-Data: none
  Disabled-Worlds: []
```

## 配置值
*标记为 \* 的配置值是可选的，*

*并且不需要出现在文件中。*

### 配方头
`RecipeName:`

这必须与配方文件的名称相同，不带 `.yml`。

### 启用
此配方是否启用。

布尔值。`true` / `false`

### 无形状
配方是否应为有形状或无形状。

有形状：配方必须按照 [**ItemCrafting**](https://github.com/mehboss/CustomRecipes/wiki/Custom-Recipe#itemcrafting) 中描述的方式放置。

无形状：物品可以在合成表中的任何位置，无论 [**ItemCrafting**](https://github.com/mehboss/CustomRecipes/wiki/Custom-Recipe#itemcrafting) 中的形状如何。

布尔值。`true` / `false`

### 物品
合成物品的材料。

您可以在此处找到所有接受的材料：https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html

*（在旧版本的 Minecraft 中，材料名称可能不同。）*

字符串值。`'SampleText'`

### 物品损坏*
物品默认缺失的耐久度。

*这主要用于旧版本的游戏。*

整数值。`123`
（或 `'none'` 表示无损坏。）

### 数量
合成的物品数量。

整数值。`123`

### 可放置*
合成的物品是否可以放置。

*这用于使用方块作为材料的自定义物品。*

布尔值。`true` / `false`

### 忽略数据*
配方是否应忽略具有附魔或其他元数据的物品。

*（如果设置为 false，具有附魔的物品不能用作原料。）*

布尔值。`true` / `false`

### 忽略模型数据*
配方是否应忽略具有 CustomModelData 的物品。

*（如果设置为 false，具有 CustomModelData 的物品不能用作原料。）*

布尔值。`true` / `false`

### 自定义标签*
物品是否应使用定义的 [**Identifier**](https://github.com/mehboss/CustomRecipes/wiki/Custom-Recipe#identifier) 进行“标记”？

布尔值。`true` / `false`

### 标识符
自定义物品的唯一标识。

可以在其他配方等地方使用。

字符串值。`'SampleText'`

### 权限*
如果定义，则需要此权限才能合成此配方。

字符串值。`'SampleText'`

### 名称（可选）
合成物品的名称。

字符串值。`'SampleText'`

### 描述*
合成物品的描述。

字符串列表值。
```yaml
- 'SampleText1'
- 'SampleText2'
```
使用 `Lore: []` 不给物品任何描述。

### 效果*
定义的效应用于给予被物品击中的实体。

字符串列表值。
```yaml
- '药水ID:持续时间:强度'
- 'POISON:20:2'
```
使用 `Effects: []` 不给物品任何效果。

您可以在此处找到所有接受的效果：https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/potion/PotionEffectType.html

### 隐藏附魔*
附魔是否在物品上可见。

这不会隐藏附魔的光效。

布尔值。`true` / `false`

### 附魔*
合成物品将具有的附魔。

字符串列表值。
```yaml
- '附魔ID:等级'
- 'PROTECTION:300'
```
使用 `Enchantments: []` 不给物品任何附魔。

您可以在此处找到所有接受的附魔：https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/enchantments/Enchantment.html

### 物品合成
在任何合成表中的配方形状。

如果配方标记为 [**Shapeless**](https://github.com/mehboss/CustomRecipes/wiki/Custom-Recipe#shapeless)，则每个原料的位置将被忽略。

此条目是 [**Ingredients**](https://github.com/mehboss/CustomRecipes/wiki/Custom-Recipe#ingredients) 中定义的字母。

字符串列表值。
```yaml
- 'DDD'
- 'XPX'
- 'XPX'
```
*注意：X 始终用于定义空气/空位。*

### 原料
配方中使用的原料。

部分值。
```yaml
D: #原料标识
 Material: 'DIAMOND'
 Identifier: #原料必须具有此标识符。有助于使自定义物品合成更多自定义物品。覆盖名称。（可以留空以忽略）
 Amount: 1
 Name: '钻石神殿' #原料必须具有此自定义名称。（可以留空以忽略）
P: #原料标识
 Material: 'OAK_PLANKS'
 Identifier: #原料必须具有此标识符。有助于使自定义物品合成更多自定义物品。覆盖名称。（可以留空以忽略）
 Amount: 1
 Name: '木板' #原料必须具有此自定义名称。（可以留空以忽略）
```

### 物品标志*
物品将具有的物品标志。

字符串列表值。
```yaml
- 'HIDE_ATTRIBUTES'
- 'HIDE_ARMOR_TRIM'
```
使用 `Item-Flags: []` 不给物品任何标志。

您可以在此处找到所有接受的标志：https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/ItemFlag.html

### 属性*
物品将具有的属性。

字符串列表值。
```yaml
- '属性ID:等级'
- 'GENERIC_ARMOR:3'
```
使用 `Attribute: []` 不给物品任何属性。

您可以在此处找到所有接受的标志：https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html

### 自定义模型数据*
合成物品的 CustomModelData 值。

整数值。`1234567`

### 禁用世界*
无法在此配方中合成的世界。消息配置位于 blacklisted.yml 中。

字符串列表值。