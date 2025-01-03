---
sidebar_position: 7
---

# 策略

<details>

<summary>点击查看所有<strong>策略</strong>的完整列表</summary>

```yaml
strategies:
  random: 
  weighted-random: 
  distance-from-origin: 
  y-coodinate: 
```

</details>

***

## 真随机

```yaml
strategies:
  random: true
```

正如描述的那样，在最小级别和最大级别之间进行真正的随机选择。

内部使用占位符：`%random%`

<table data-full-width="false"><thead><tr><th width="251.00000000000006">配置</th><th>描述</th></tr></thead><tbody><tr><td><code>random:</code></td><td>当设置为<code>true</code>时，启用随机级别策略</td></tr></tbody></table>

## 加权随机

```yaml
strategies:
  weighted-random: true
# 或
  weighted-random:
    1-2: 5
    3-4: 4
    5-6: 3
    7-8: 2
    9-10: 1
```

**注意：** 你可以简单地设置`weighted-random: true`，它将使用最小级别和最大级别生成一个加权随机，其中最低级别最有可能出现，而最高级别最不可能出现。

内部使用占位符：`%weighted-random%`

**示例：** 上述加权随机将生成一个数字列表，使用右侧列出的“权重”值来增加或减少级别被随机选择的机会。\
1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9, 10

<table data-full-width="false"><thead><tr><th width="251.00000000000006">配置</th><th>描述</th></tr></thead><tbody><tr><td><code>weighted-random:</code></td><td>当设置为<code>true</code>时，启用加权随机级别策略</td></tr><tr><td>例如：<code>1-10: 3</code></td><td>左侧的值表示可能应用的级别范围；右侧的值表示该级别范围的权重。权重越高，该范围的可能性越大。</td></tr></tbody></table>

## 距离原点

```yaml
strategies:
  distance-from-origin:
    origin-coordinates:
      x: spawn
      z: spawn
    buffer-distance: 250
    ringed-tiers: 150
  # Y高度修饰符
    enable-height-modifier: true
    transition-y-height: 62
    y-height-period: 10
    level-multiplier: 0.05
    scale-increase-downward: true
```

内部使用占位符：`%distance-from-origin%`

**注意：** 当使用`enable-height-modifier:`功能时，此配置选项之后的设置是同一系统的一部分。系统使用以下公式来推导最终应用的级别：

$
\scriptsize f(pre.result) =
((((transition.y.height - mob.y.height) / y.height.period) * level.multiplier) * spawn.distance.level)
$

$
\footnotesize f(post.result) =
round(pre.result) + spawn.distance.level
$

<table data-full-width="false"><thead><tr><th width="251.00000000000006">配置</th><th>描述</th></tr></thead><tbody><tr><td><code>distance-from-origin:</code></td><td>启动距离原点级别策略。</td></tr><tr><td><code>origin-coordinates:</code></td><td>启动可以指定此<strong>策略</strong>引用的中心点的<code>x:</code>或<code>z:</code>坐标的部分。</td></tr><tr><td><code>buffer-distance:</code></td><td>表示中心点坐标与从该中心点测量的块数之间的缓冲区，其中怪物将应用最低级别。适用于提供更安全的初始区域。</td></tr><tr><td><code>ringed-tiers:</code></td><td>此策略形成的环是圆形且同心的。在达到<code>buffer-distance</code>后，将从<code>buffer-distance</code>环的边缘进行新的测量，以确定此坐标中指定的块数。对于从第一个<code>ringed-tiers</code>环延伸出的每个环，怪物的级别值将增加一。</td></tr><tr><td><code>enable-height-modifier:</code></td><td>当设置为<code>true</code>时，启用与距离原点级别策略相关的混合距离修饰符。这在确定与中心点坐标的距离时增加了Y高度组件。更改为<code>false</code>将禁用此功能，所有后续配置选项将被忽略。</td></tr><tr><td><code>transition-y-height:</code></td><td>Y高度坐标，距离原点级别策略将在此处精确应用，并且如果启用了混合距离修饰符，则级别增加或减少趋势之间的过渡线将在此处发生。</td></tr><tr><td><code>y-height-period:</code></td><td>从<code>transition-y-height</code>开始的块数，在应用<code>level-multiplier</code>之前。</td></tr><tr><td><code>level-multiplier:</code></td><td>应用于预期距离原点级别策略级别值的乘数值。该值在<code>transition-y-height</code>的任一方向上的每个<code>y-height-period</code>实例上呈指数应用。<strong>例如</strong>，较高的<code>y-height-period</code>值和较低的<code>level-multiplier</code>将导致缓慢积累，直到达到大约最大级别的一半，然后随着你进一步向外，增加得更快。</td></tr><tr><td><code>scale-increase-downward:</code></td><td>当设置为<code>true</code>时，混合距离修饰符的效果将是，当玩家从<code>transition-y-height</code>向下进入洞穴时，级别增加；而当玩家进入同一Y高度坐标以上的山脉时，级别值将减少。更改为<code>false</code>将反转此效果。</td></tr></tbody></table>

## Y坐标

```yaml
strategies:
  y-coordinate:
    start-height: 100
    period: 0
    end-height: 20
```

内部使用占位符：`%y-coordinate%`

此策略考虑了正在处理的怪物的当前Y高度，并将根据该高度值为其提供级别值。应用于怪物的最低级别来自<code>start-height</code>及以上的所有块，而最高级别应用于来自<code>end-height</code>及以下的所有块的怪物。当<code>period</code>值为非零时，<code>end-height</code>将被忽略，而是每<code>period</code>块在指定方向上移动级别。

<table data-full-width="false"><thead><tr><th width="251.00000000000006">配置</th><th>描述</th></tr></thead><tbody><tr><td><code>y-coordinate:</code></td><td>启动Y坐标级别策略。</td></tr><tr><td><code>start-height:</code></td><td>起始Y高度坐标，来自此高度及以上的块处于最低级别。</td></tr><tr><td><code>period:</code></td><td>从<code>start-height</code>开始的块数，每<code>period</code>实例级别将增加。<code>end-height</code>被忽略。</td></tr><tr><td><code>end-height:</code></td><td>结束Y高度坐标，来自此高度及以下的块处于最高级别。</td></tr></tbody></table>