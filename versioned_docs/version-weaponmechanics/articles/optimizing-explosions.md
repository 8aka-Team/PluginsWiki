---
description: 解释爆炸延迟的原因以及如何减少延迟的文章！
---

# 优化爆炸

本文是针对WeaponMechanics中的[爆炸](../weapon-modules/explosion/ "mention")功能的文章。

WeaponMechanics使用了一个自定义的爆炸系统，它与Minecraft的代码完全独立（尽管它看起来非常相似！）。WeaponMechanics默认使用了高度优化的爆炸算法。但是如果你仍然遇到延迟问题呢？

## 下落方块

下落方块是由[#block\_damage](../weapon-modules/explosion/#block\_damage "mention")添加的视觉效果。虽然它们只是视觉效果，但计算它们的碰撞可能会导致很多延迟。如果你有一个大型爆炸，你应该要么降低下落方块的概率，要么完全禁用它们。

```yaml
<weapon>:
  Explosion:
    Block_Damage:
      Falling_Block_Chance: 5%  # 将其设置为0%以获得最佳性能
```

## 减少射线

WeaponMechanics的爆炸计算方式与原版Minecraft的爆炸计算方式相同；通过在所有方向上投射$16\cdot 16\cdot 6=1536$条射线来计算。_这在CPU上是非常消耗资源的_，特别是如果你的爆炸威力很高（$>10$）或者同时有很多爆炸（比如空袭）。&#x20;

```yaml
<weapon>:
  Explosion:
    Explosion_Type_Data:
      Rays: 16  # 16是默认值。将其改为像12这样的值以获得更好的性能
```

:::warning
这个技巧只适用于`Explosion_Shape: DEFAULT`，其他爆炸形状不起作用。
:::

## 更改爆炸形状

使用`Explosion_Shape: DEFAULT`对CPU的负载始终很大。如果你的服务器每分钟有数百次爆炸，你应该考虑切换到新的形状，比如`SPHERE`。&#x20;

有关更多信息，请参阅[#explosion\_shape](../weapon-modules/explosion/#explosion\_shape "mention")。

## 更改爆炸曝光度

使用`Explosion_Exposure: DEFAULT`会为爆炸半径内的每个实体投射大量射线。切换到优化的曝光度可以帮助减少射线的数量。&#x20;

```yaml
<weapon>:
  Explosion:
    Explosion_Exposure: OPTIMIZED
```

如果你愿意采取更严格的方法，你可以使用`DISTANCE`来对每个实体几乎不进行任何数学计算（但会大幅减少爆炸的功能）。
