# 创建新的HavenBags配方
所有配方都位于`../plugins/CustomRecipes/recipes`目录下。

要创建你自己的配方，只需复制任何一个模板，并更改其值。

在下面你可以找到每个配置条目的相关信息。

这些配方专门用于插件[**HavenBags**](https://www.spigotmc.org/resources/havenbags-shulker-like-player-bound-bags-1-17-1-21-1.110420/)。

*(需要HavenBags v1.25.0或更高版本才能使用)*

## 结构
```yaml
RecipeName: 
  Enabled: true
  Shapeless: false
  Identifier: 'havenbags-custom_boundbag1'
  Permission: 'crecipe.recipe.boundbag1'
  Item: PLAYER_HEAD
  Bag-Texture: 'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNGNiM2FjZGMxMWNhNzQ3YmY3MTBlNTlmNGM4ZTliM2Q5NDlmZGQzNjRjNjg2OTgzMWNhODc4ZjA3NjNkMTc4NyJ9fX0='
  Custom-Model-Data: 0
  Bag-Size: 3
  Can-Bind: true
  ItemCrafting:
   - 'LLL'
   - 'LDL'
   - 'LLL'
  Ingredients:
    D:
      Material: DIAMOND
      Identifier: none
      Amount: 1
      Name: 'Diamond Shrine'
    L:
      Material: 'LEATHER'
      Identifier: none
      Amount: 2
      Name: 'Rough Leather'
  Disabled-Worlds: []
```

## 配置值

### 配方头
`RecipeName:`

这必须与配方文件的名称相同，不包括`.yml`。

(区分大小写)

### 启用
此配方是否启用。

布尔值。`true` / `false`

### 无形状
配方是否应为无形状。

有形状：配方必须按照[**ItemCrafting**](https://github.com/mehboss/CustomRecipes/wiki/HavenBags-Recipes#itemcrafting)中描述的方式放置。

无形状：物品可以在合成表中的任何位置，无论[**ItemCrafting**](https://github.com/mehboss/CustomRecipes/wiki/HavenBags-Recipes#itemcrafting)中的形状如何。

布尔值。`true` / `false`

### 标识符
自定义物品的唯一标识。

你必须保留标识符前缀"havenbags-"，以便CR检测到它是一个Haven包。

字符串值。`'havenbags-SampleText'`

### 权限
如果定义，则需要此权限才能制作此配方。

字符串值。`'SampleText'`

### 物品
制作物品的材料。

你可以在这里找到所有接受的材料：https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html

*(在旧版本的Minecraft中，材料名称可能不同。)*

字符串值。`'SampleText'`

### 包纹理
制作包的纹理。

你可以在[Minecraft-Heads](https://minecraft-heads.com/custom-heads)上选择大量的头部。

选择你的头部，并在“For Developers”部分复制“Value”。

如果此值为空或'none'，配方将从HavenBag的配置中获取纹理。

*(仅在Item设置为PLAYER_HEAD时有效)*

字符串值。`'eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvODI4ZDZkMGVhNDY0MjJiYTE0OTAyYzc0M2MwMjRjMGIyNGJlMDYyZTRlYmRlMzA2MzVmYTA3ZjVmNDIzYzA5NCJ9fX0='`

### 自定义模型数据
制作包的自定义模型数据值。

用于指定自定义资源包中的特定纹理。

如果设置为0，则忽略。

*(仅在Item未设置为PLAYER_HEAD时有效)*

数值。`1234567`

### 背包大小
制作背包的尺寸。

用于指定背包应包含多少行格子。

*（如果设置为3，背包将有27个格子。不能高于或低于1-6）*

数值。`3`

### 可绑定
制作的背包是否可以绑定。

用于指定背包是否可以被所有人使用，或仅绑定给特定玩家使用。

*（如果设置为false，所有人都可以使用背包）*

布尔值。`true` / `false`

### 物品合成
在任何合成表中的配方形状。

如果配方标记为[**无形状**](https://github.com/mehboss/CustomRecipes/wiki/HavenBags-Recipes#shapeless)，则每个材料的位置将被忽略。

此处的条目是在[**材料**](https://github.com/mehboss/CustomRecipes/wiki/HavenBags-Recipes#ingredients)中定义的字母。

字符串列表值。
```yaml
- 'LLL'
- 'LDL'
- 'LLL'
```
*注意：X始终用于定义空气/空位。*

### 材料
配方中使用的材料。

部分值。
```yaml
D: #Ingredient Identification
 Material: 'DIAMOND'
 Identifier: #Ingredient must have this identifier. Helpful for making custom items craft more custom items. Overrides name. (Can be left empty to ignore)
 Amount: 1
 Name: 'Diamond Shrine' #Ingredient must have this custom name. (Can be left empty to ignore)
L: #Ingredient Identification
 Material: 'LEATHER'
 Identifier: #Ingredient must have this identifier. Helpful for making custom items craft more custom items. Overrides name. (Can be left empty to ignore)
 Amount: 2
 Name: 'Rough Leather' #Ingredient must have this custom name. (Can be left empty to ignore)
```

### 禁用世界
此配方无法在其中制作的世界。消息配置可在blacklisted.yml中找到。

字符串列表值。
```yml
Disabled-Worlds:
  - Worldname
  - Worldname_nether
  - Worldname_the_end
```


