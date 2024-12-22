---
sidebar_position: 3
description: 物品和盔甲需求的指南
---

# 物品需求

**需求**允许你添加技能等级需求，以便使用某个物品。例如，你可以创建一个只有在玩家达到采矿15级时才能使用的镐。有两种类型的需求：物品和盔甲。

物品需求在玩家手持该物品时生效。盔甲需求仅在装备/穿戴该物品时生效。

添加需求的范围和方式有两种：使用命令或全局需求。

## 命令需求

使用命令添加需求只会将需求添加到你创建需求时所持有的特定物品上。因此，你必须分发该物品的精确副本才能使其生效。

命令：

:::warning
下面的`item/armor`表示你只需为物品需求输入`item`，为盔甲需求输入`armor`。
:::

* `/sk item/armor requirement add <skill> <level> [lore]` - 为手持的物品添加物品/盔甲需求。`skill`是所需技能的名称。`level`是使用该物品所需的最低技能等级。`lore`是一个可选的true/false参数，用于确定是否应将lore添加到物品中。Lore与需求的功能完全分开，因此你可以更改或删除任何lore。
* `/sk item/armor requirement remove <skill> [lore]` - 从手持的物品中移除物品/盔甲需求。如果`lore`为true，则尝试从物品中移除最初添加的lore。如果你添加了自定义lore，这可能不起作用。
* `/sk item/armor requirement list` - 列出手持物品上的物品/盔甲需求。
* `/sk item/armor requirement removeall` - 从手持的物品中移除所有物品需求。

## 全局需求

全局需求允许将技能需求添加到某种类型/材料的全部物品上。要添加全局需求，你必须在`config.yml`的`requirement.item`或`requirement.armor`部分添加一个`global`列表。

列表条目的基本格式是：`- MATERIAL SKILL:LEVEL`

以下是一个全局物品需求的示例，要求使用钻石剑需要战斗10级，包括其在配置文件中的位置：

```yaml
requirement:
  enabled: true
  item:
    global:
    - DIAMOND_SWORD FIGHTING:10
```

也支持在单个物品上添加多个全局需求：

```yaml
requirement:
  armor:
    global:
    - DIAMOND_CHESTPLATE DEFENSE:10 AGILITY:4
```

:::info

全局需求不支持自定义物品

:::
