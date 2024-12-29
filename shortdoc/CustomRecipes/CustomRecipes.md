---
sidebar_position: 5
---

# CustomRecipes

# 功能

## 无限制
创建任何配方来制作你想要的任何物品。游戏中的任何内容都可以通过CR实现！

## 独立的配方文件
所有配方都存储在“recipes”文件夹中的独立文件中。这提供了最佳的组织方式，并在处理大量配方时更加方便。

## 每个世界的配方
你可以选择在特定世界中禁用你的配方，而在其他世界中保持启用，从而实现每个世界的独立配方。你可以在blacklisted.yml文件中的“recipe-disabled-message:”部分配置相应的操作。

## 禁用原版配方
完全禁用任何原版配方或覆盖配方，从而改变其传统的制作方式！如果配方被禁用，可以向玩家发送聊天/动作栏消息！请参考blacklisted.yml获取帮助！

禁用配方会监听制作结果，触发对玩家的任何响应或消息，而覆盖配方则会完全从服务器中移除配方键，从而允许你“改变”原版配方的制作方式。

## 配方权限
要求用户拥有特定权限才能查看或制作自定义配方。可以选择发送自定义的聊天/动作栏消息。

## 占位符支持
通过PlaceholderAPI在自定义物品的描述中使用占位符。下面还有一些自定义插件侧的占位符。如果你有更多建议，请告诉我。

需要在服务器上安装PlaceholderAPI。

其他占位符可以在[这里](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders)找到。
当前占位符：
(recipeName 被替换为你的配方名称（通常是文件名）)
(slot 被替换为合成表中的槽位（1-9）)

```yaml
返回指定槽位中的材料：
- %customrecipes_recipeName_ingredient_slot%
返回指定槽位中的材料名称：
- %customrecipes_recipeName_ingredient_name_slot%
返回指定槽位中所需的材料数量：
- %customrecipes_recipeName_ingredient_amount_slot%
返回指定槽位中的材料标识符：
- %customrecipes_recipeName_ingredient_identifier_slot%
```

## NBT支持
能够检测自定义配方物品的名称，如果它被重命名，特定的描述，特定的材料类型，特定的颜色代码，以及它是否具有特定的自定义标识符。

对于1.14+版本，增加了对CustomModelData的支持，用于纹理包等。设置特定的自定义模型数据以在使用纹理包时改变原版物品的外观！

你可以选择忽略元数据 - 在配置中使用'Ignore-Data'。

你可以选择是否消耗或清空桶。添加字符串'Consume-Bucket: false'以清空桶而不是消耗它们。

你可以为你的武器添加效果，例如毒药，这将使你的敌人中毒。

你可以为你的配方添加物品[属性](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/attribute/Attribute.html)（v1.12+）。物品属性允许你更改物品的特定属性，例如攻击伤害、击退等。
代码（文本）：
Attribute:
- ATTRIBUTE:AMOUNT:EQUIPMENTSLOT
为自定义物品添加指定属性的给定数量。


## 物品标志
能够为你的自定义物品添加物品标志。你可以通过使用此功能隐藏属性等。你还可以选择此配方是否可以放置（Placeable: false）。所有物品标志可以在[这里](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/ItemFlag.html)找到。

## 材料数量
能够设置和要求材料数量。我已经实现了检测你的材料数量是否与配方中设置的数量匹配的检查。适用于Shift和非Shift点击。

## 有序或无序配方
能够创建无序配方（合成表中的任何顺序）或有序配方（必须在合成表中的特定槽位中放置特定材料）

## 箱子支持
将你的自定义配方应用到箱子中！在你的箱子插件中使用give recipe命令，将这些自定义配方作为奖励。

## 高度可配置
你可以配置插件的几乎所有内容。你可以配置消息、权限、配方名称、描述、附魔、效果等！

## 标签补全
为插件的每个方面集成了标签补全。这确保了在输入命令和给予配方时的易用性。

## 配方手册
添加了显示玩家有权限制作的所有活动配方的GUI。点击配方后，它将显示如何制作该配方。这使得玩家更容易记住如何制作你的自定义物品。

## 方便
集成了重载命令、给予配方命令，以及一个正在开发中的完全集成的GUI。该插件支持从1.8.x到最新版本的Paper Spigot和常规Spigot。此外，该插件应该是完全无错误且高效的。

## 即将推出
集成的GUI，用于快速、流畅地添加、编辑或删除自定义配方。
在游戏中轻松编辑物品的NBT数据 [/edititem (描述,名称,附魔等)]
支持Rankup插件以添加自定义物品要求

## 权限
别名：crecipes, customrecipe, customrecipes, customr, cr​
```yaml
crecipe.help
/crecipe - 显示帮助页面

crecipe.gui
/crecipe gui - 打开GUI（未完成）

crecipe.book
/crecipe book - 打开配方手册

crecipe.reload
/crecipe reload - 重载配方和配置

crecipe.give
/crecipe give <玩家> <配方名称> - 给予玩家一个自定义配方。

crecipe.debug
/crecipe debug - 启用/禁用调试模式

crecipe.list
/crecipe list - 列出所有活动的自定义配方

crecipe.admin
/edititem - 帮助管理游戏中的物品标签和数据
```

你还可以在配置中定义自己的权限来制作自定义配方！​

## 如何使用​
1. 在“recipes”文件夹中创建一个.yml文件
2. 使用模板在文件中配置配方
3. 按你希望的方式排列材料。
4. 添加自定义显示名称或其他元数据
5. 输入'/crecipe reload'或重启你的服务器。
6. 制作你新创建的配方！