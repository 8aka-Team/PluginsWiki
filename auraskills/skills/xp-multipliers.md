---
sidebar_position: 2
description: XP 倍增器指南
---

# XP 倍增器

:::tip

目前,我们对`multipliers`没有想到较好的翻译,先翻成了倍增器

如果你有好的想法,请在 Issue 中提出

:::

**倍增器** 是一种在不改变源配置的情况下增加玩家获得技能 XP 的方法。

倍增器基于权限，这意味着你可以将它们添加到单个玩家或玩家组（如等级）中。如果你的权限插件支持临时权限，你甚至可以创建临时的 XP 倍增器事件。

## 添加倍增器

要添加倍增器，请使用你的权限插件以以下格式添加权限：

> **auraskills.multiplier.\[percent]**

将 \[percent] 替换为你希望倍增器提供的 **额外 XP 百分比**。例如，权限 `auraskills.multiplier.100` 将提供 100% 的额外 XP 或 2 倍 XP。百分比支持使用 `.` 的小数（例如 `auraskills.multiplier.10.5`）。

## 特定技能的倍增器

倍增器也可以仅用于增加特定技能来源的 XP。权限的格式为 `auraskills.multiplier.[skill].[percent]`，其中 \[skill] 是技能的默认英文名称，且为小写。

例如，1.5 倍耕作倍增器的权限：`auraskills.multiplier.farming.50`

## 多个倍增器

如果一个玩家拥有多个倍增器权限，倍增器将相加并像只有一个倍增器一样工作。例如，100（2 倍）和 50（1.5 倍）倍增器将相加为 150（2.5 倍）。

如果你想添加相同值的倍增器，你不能简单地使用相同的权限，因为权限本质上必须是唯一的。作为一种解决方法，你可以添加尾随的小数零，使它们在技术上是唯一的，但具有相同的值。

例如，`auraskills.multiplier.100` 将与 `auraskills.multiplier.100.0` 效果相同。你可以继续添加尾随的零来添加任意数量的重复项。

## LuckPerms 示例

以下是使用 LuckPerms（一个流行的权限插件）添加倍增器的示例。如果你使用不同的权限插件，请使用该插件的命令来添加倍增器，就像添加其他权限一样。

为一个玩家添加 2 倍倍增器：

```
/lp user [player] permission set auraskills.multiplier.100
```

为一个名为 vip 的等级添加 1.5 倍倍增器：

```
/lp group vip permission set auraskills.multiplier.50
```

为所有人添加临时的 3 倍倍增器，持续 12 小时：

```
/lp group default permission settemp auraskills.multiplier.200 true 12h
```

从一个玩家移除 2 倍倍增器：

```
/lp user [player] permission unset auraskills.multiplier.100
```

:::warning
移除倍增器时，你必须使用你添加的权限的确切文本。
:::

## 物品和盔甲倍增器

倍增器也可以像属性修饰符一样添加到物品和盔甲上。物品倍增器在持有物品时增加 XP。盔甲倍增器在穿戴物品时增加 XP。倍增器可以是全局的，也可以仅适用于特定技能。

用于物品/盔甲倍增器的命令：

* `/sk item/armor multiplier add <target> <value> [lore]`
* `/sk item/armor multiplier remove <target>`
* `/sk item/armor multiplier list`
* `/sk item/armor multiplier removeall`

根据你想要的倍增器类型，在命令中使用 item 或 armor。目标可以是全局或技能的名称。倍增器的值是获得的额外 XP 百分比（与权限倍增器的工作方式相同）。

这些倍增器包含在 /sk multiplier 命令中，如果它们与全局倍增器不同，则可以显示特定技能的倍增器。