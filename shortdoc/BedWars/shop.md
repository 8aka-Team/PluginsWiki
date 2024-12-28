---
sidebar_position: 5
---

# 商店

Screaming BedWars 插件使用我们自己的库 SimpleInventories 来创建和渲染基于物品栏的图形用户界面（GUI），因此也包括商店。本文将向您展示这种格式的一些基础知识。查看[此维基](https://github.com/ScreamingSandals/SimpleInventories/wiki)以获取更高级的变量。

## 创建新物品

要创建新物品，首先您需要知道物品的内部名称。您可以使用[Minecraft 维基](https://minecraft.wiki)来获取特定的资源名称。名称通常以`minecraft:`开头，这部分可以从最终名称中省略。

您也可以在旧版环境（1.8.8-1.12.2）中使用现代名称。如果现代名称不起作用，请查看[此页面](https://helpch.at/docs/1.12.2/org/bukkit/Material.html)以获取旧名称。旧名称已被弃用，可能在未来的 BedWars 版本中不再支持。

有两种支持的物品格式。我们称之为`短堆栈`和`长堆栈`。

### 使用短堆栈

此格式只能描述材料名称、数量、显示名称和描述。除了材料名称外，每个部分都是可选的。每个部分用分号分隔。

```yaml
items:
- stone
- dirt;2
- diamond_pickaxe;;Super Sword
- tnt;3;Trinitrotoluene;Does explode
```

要指定价格并使物品可购买，请在此格式后加上`for <数量> <资源>`：

```yaml
items:
- stone for 1 bronze
- dirt;2 for 3 iron
- diamond_pickaxe;;Super Sword for 5 gold
- tnt;3;Trinitrotoluene;Does explode for 9 iron
```

为了能够指定其他属性（例如`properties`），我们必须将此字符串转换为映射。这是通过将字符串拆分为变量`stack`和`price`来完成的：

```yaml
items:
- stack: stone
  price: 1 bronze
- stack: dirt;2
  price: 3 iron
- stack: diamond_pickaxe;;Super Pickaxe
  price: 5 gold
- stack: tnt;3;Trinitrotoluene;Does explode
  price: 9 iron
```

### 使用长堆栈

长堆栈允许您创建带有附魔和其他属性的物品。让我们看看前面的示例在此格式中的重写：

```yaml
items:
- stack: 
    type: stone
  price: 1 bronze
- stack: 
    type: dirt
    amount: 2
  price: 3 iron
- stack: 
    type: diamond_pickaxe
    display-name: Super Pickaxe
  price: 5 gold
- stack: 
    type: tnt
    amount: 3
    display-name: Trinitrotoluene
    lore:
    - Does explode
  price: 9 iron
```

正如我们所看到的，`stack`属性现在是一个映射，允许存在更多属性。例如，我们可以为我们的超级镐附魔幸运 III。

```yaml
- stack: 
    type: diamond_pickaxe
    display-name: Super Pickaxe
    enchants:
      fortune: 3
  price: 5 gold
```

附魔名称可以在[这里](https://www.digminecraft.com/lists/enchantment_list_pc.php)找到。

有关所有可用选项的列表，请访问[此页面](https://github.com/ScreamingSandals/SimpleInventories/wiki/Variable:-stack)。

## 使用物品作为类别

您可以使用任何物品作为类别（即使该物品在另一个类别中）。玩家可以点击该物品以打开类别。格式非常相似，唯一需要指定的是一个名为`items`的列表，您可以在其中放置该特定类别的物品。`items`中的物品格式与基础`data`列表中的格式相同。

```yaml
- stack: 
    type: diamond_pickaxe
    display-name: Super Pickaxes
    lore:
     - You will never mine with anything else!
  items:
    - wooden_pickaxe for 10 gold
    - golden_pickaxe for 20 gold
```