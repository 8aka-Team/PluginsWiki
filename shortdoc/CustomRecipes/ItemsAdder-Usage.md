# 如何使用ItemAdder自定义物品

本指南解释了如何在'ItemsAdder'插件中使用自定义物品。
以下是一个名为**诅咒之斧**的自定义物品的示例配置，以及关键使用说明。

## 示例配置：诅咒之剑

```yaml
CursedAxe: 
  Enabled: true
  Shapeless: false
  Cooldown: -1
  Item: 'itemsadder:BEDROCK_AXE'
  Item-Damage: 'none'
  Amount: 1
  Placeable: true
  Ignore-Data: false
  Ignore-Model-Data: false
  Custom-Tagged: false
  Identifier: 'CURSED_AXE'
  Converter: none
  Permission: 'crecipe.recipe.cursedaxe'
  Name: '&c诅咒之斧'
  Lore:
   - '&f诅咒之斧'
  Effects: []
  Hide-Enchants: true
  Enchantments:
   - 'DURABILITY:255'
  ItemCrafting:
   - 'XDX'
   - 'XBX'
   - 'XBX'
  Ingredients:
    D:
      Material: DIAMOND
      Identifier: itemsadder:curseddiamond
      Amount: 1
      Name: '&o钻石神龛'
    B:
      Material: OAK_PLANKS
      Identifier: itemsadder:cursedplank
      Amount: 1
      Name: '&o木板'
  Custom-Tags: []
  Item-Flags: []
  Attribute: []
  Custom-Model-Data: none
  Disabled-Worlds: []
```

要在合成结果或材料中使用自定义物品，您必须包含由连字符分隔的受支持插件名称。
您可以在配方结果或材料标识符部分中使用它们。

```yaml
itemsadder:Custom_Item
```
将Custom_Item替换为自定义物品的标识符（例如，上例中的CURSED_SWORD）。

提醒：标识符部分会覆盖材料中的其他字段，并查找具有预定义数据的ItemStack。