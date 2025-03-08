---
sidebar_position: 1
---

# 👾 示例自定义掉落

注意：已发现，在Minecraft 1.20.6+版本中，使用NBT数据功能的掉落表不再按预期工作，因为NBT数据的处理方式发生了变化。我可能会在将来更新这些表以适应新系统，但不做任何保证。其他表，如xEffects，应该不受影响。

***

### xEffects库

这是一个掉落表的集合，利用Minecraft原生的`/particle`、`/playsound`和`/summon area_effect_cloud`命令，在生物死亡时在其周围创建不同类型的效果。以下是所有三种xEffects的演示视频。

* [在此下载完整的表文件](https://github.com/UltimaOath/LevelledMobs/blob/master/src/main/resources/customdrops\_xeffects\_library.yml)。

这些表利用Minecraft的Execute命令在正确的世界和玩家中执行命令。每个方面都是可定制的，并且设计得尽可能用户友好。

### 分级的损坏武器和盔甲

* [下界合金套装](https://github.com/UltimaOath/LevelledMobs/blob/master/src/main/resources/customdrops\_tiered\_netherite\_tools.yml)
* [钻石套装](https://github.com/UltimaOath/LevelledMobs/blob/master/src/main/resources/customdrops\_tiered\_diamond\_tools.yml)
* [铁套装](https://github.com/UltimaOath/LevelledMobs/blob/master/src/main/resources/customdrops\_tiered\_iron\_tools.yml)
* [木/皮革套装](https://github.com/UltimaOath/LevelledMobs/blob/master/src/main/resources/customdrops\_tiered\_wooden\_tools.yml)

每个表都包含每种类型的物品：剑、斧、头盔、胸甲、护腿、靴子和一套远程物品。

每个表的工作原理是将所有相同类型的物品放在一个表中，每个物品都有不同程度的损坏。使用组限制功能，这些物品在任何给定时间只能选择一个，损坏程度更高的版本更有可能出现。

这对于装备生物非常有用，这样它们可以从一系列随机物品中选择，当它们死亡时，如果掉落物品，它们将处于不同的耐久状态。

### 杂项表和技巧

* [在此下载表文件](https://github.com/UltimaOath/LevelledMobs/blob/master/src/main/resources/customdrops\_misc.yml)。

这些表在编写时不属于任何特定组。如果UltimaOath有随机想法，他可能会在测试后将其添加到这里。

包含的一些表：

* 简化的武器和盔甲等级（S、A、B和C）
* Minecraft唱片收藏
* 破碎-重生效果
* 给玩家金钱