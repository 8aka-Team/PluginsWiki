---
sidebar_position: 3
---
# 🌟 rules.yml

**规则**文件允许您创建真正模块化的**自定义规则**，这些规则可以修改或扩展在LevelledMobs处理周期开始时应用的**默认规则**。

该文件分为三个主要部分：**预设**、**默认规则**和**自定义规则**。

本文档旨在提供对这些部分的一般理解。

## 模块化选项

LevelledMobs3+的整个前提是使用由三个主要组件组成的**模块化选项**系统：**条件**、**策略**和**设置**。每个**模块化选项**都在各自的章节中有详细说明。LevelledMobs的工作原理是，您通过**默认规则**建立基线设置，指示它如何为怪物升级。

这些指令以**条件**、**策略**和**设置**的形式给出。您首先需要**条件**LevelledMobs认为有效的目标。这可能包括限制受影响的**世界**或**实体**，或针对特定外部插件的怪物。

然后，您应该建立您的**设置**，即您希望LevelledMobs如何修改这些怪物。这通常包括最大等级、名称标签、自定义掉落等。

最后，您需要建立您的**策略**，这将为LevelledMobs提供工具，以确定如何为怪物分配等级，从而启动属性和装备修改的过程。

## 预设

LevelledMobs允许您将某些配置选项集创建为可重用的**预设**。这些**预设**可以通过`use-preset:`配置选项应用于**默认规则**或任何**自定义规则**。

以下是配置中**预设**部分的示例，包括预设的所有潜在部分，如其在`rules.yml`中的格式。

```yaml
presets:
  preset-Name:
    name: '预设名称或描述'
    conditions: 
      x: 
    strategies: 
      x: 
    modifiers:
      x: 
    settings: 
      x: 
```

`rules.yml`的`presets:`部分覆盖了文件的上三分之一，我们默认使用此部分来填充许多**默认规则**和**自定义规则**。此区域旨在帮助防止在多个**自定义规则**中以类似但冗余的方式应用重复的配置选项。您不需要使用**预设**，但强烈推荐使用，它为您提供了一个易于参考的区域，涵盖了90%以上的开箱即用功能。

参考上面的代码：

<table data-header-hidden><thead><tr><th width="231"></th><th></th></tr></thead><tbody><tr><td><code>presets:</code></td><td>文件**预设**部分的开始。</td></tr><tr><td><code>preset-Name:</code></td><td>预设的唯一名称，将在<code>use-preset:</code>中引用。</td></tr><tr><td><code>name:</code></td><td>预设的唯一描述或名称，仅用于调试。</td></tr><tr><td><code>conditions:</code><code>strategies:</code><code>modifiers:</code><code>settings:</code></td><td>可以作为预设一部分的可能选项。任何这些**模块化选项**的一个或组合都是任何预设的可接受部分。</td></tr><tr><td><code>x:</code></td><td>相应**模块化选项**的任何子设置。</td></tr></tbody></table>

您可以通过`use-preset:`配置选项将**预设**应用于**默认规则**或任何**自定义规则**。以下是两种用法的示例：

```yaml
default-rule:
  use-preset:
    - presetName
    - otherPresetName

custom-rules:
  - enabled: true
    name: '自定义规则预设示例'
    use-preset: presetName, otherPresetName
```

## 默认规则

LevelledMobs要求**默认规则**填充某些最小信息，以便具有最低限度的功能。默认情况下，我们使用**预设**系统来填充许多这些选项。插件需要知道它可以运行在哪些**世界**和哪些**怪物**上；默认情况下，如果未指定**世界**或**怪物**，则系统将假定它无法访问任何**世界**或**怪物**，从而有效地禁用它。

第二个必要信息是至少一个启用的**升级策略**。这将告知LevelledMobs如何计算每个怪物的等级输出。

最后一个必要信息是怪物的最小等级（建议为`1`）和最大等级以及任何适用的属性修改器。

还有其他一些可选但建议的功能，我们鼓励您默认启用，例如某种形式的名称标签或自定义掉落系统。

以下是**默认规则**的示例，其中填充了所有最小信息：

```yaml
default-rule:
  conditions:
    worlds:
      included-list: ['*']
    entities:
      included-list: ['*']
  strategies:
    weighted-random: true
  settings:
    minLevel: 1
    maxLevel: 25
    attribute-modifier:
      max-health: 5.0
      movement-speed: 0.15
      attack-damage: 2.25
      item-drop: 3
      xp-drop: 5
    nametag: '&8&l༺ &f%displayname%&8 | &f%entity-health-rounded% &8&l༻'
```

## 自定义规则

LevelledMobs开箱即用，默认启用了几个**自定义规则**。

该插件拥有多年的玩家测试和开发者经验，使我们能够从一开始就制定一个配置，在挑战分布和功能集方面覆盖最广泛的网络。一些默认的自定义规则旨在降低某些在普通条件下本身就具有挑战性的怪物的难度，或自定义Boss和迷你Boss类型的怪物，或监控怪物农场并相应地减少增强的掉落。所有这些测试都是在Minecraft的普通难度下，在平均服务器条件下进行的。

以下是任何**自定义规则**的示例，其中包含所有可能的选项：

```yaml
custom-rules:
  - custom-rule: '示例自定义规则'
    is-enabled: true
    use-preset: 
    conditions: 
      x: 
    strategies: 
      x: 
    modifiers:
      x: 
    settings:
      x: 
```

参考上面的代码：

<table data-header-hidden><thead><tr><th width="237"></th><th></th></tr></thead><tbody><tr><td><code>custom-rules:</code></td><td>文件**自定义规则**部分的开始。</td></tr><tr><td><code>- custom-rule:</code></td><td>标记新**自定义规则**的开始。自定义规则的唯一描述或名称，仅用于调试。</td></tr><tr><td><code>is-enabled:</code></td><td>允许快速启用或禁用规则。</td></tr><tr><td><code>use-preset:</code></td><td>包括**预设**部分的任何预设。</td></tr><tr><td><code>conditions:</code><code>strategies:</code><code>modifiers:</code><code>settings:</code></td><td>可以作为预设一部分的可能选项。任何这些**模块化选项**的一个或组合都是任何预设的可接受部分。</td></tr><tr><td><code>x:</code></td><td>相应**模块化选项**的任何子设置。</td></tr></tbody></table>

## 包含和排除列表

几个**模块化选项条件**可以通过使用各种**包含**和**排除**列表或组选项来表达。

以下示例代表了所有可能的列表选项：\
注意：`x:`代表相应**模块化选项条件**的各种可用子设置。

```yaml
conditions:
  x:
    included-group: ['']
    included-list: ['']
```

### 示例：如何使用列表

***

**示例一：** 如果你希望**条件**检查实体所在的生物群系是否为冰刺或深暗生物群系，你可以使用`included-list:`，这意味着列表将只允许那些在这些指定的生物群系中被处理的实体满足**条件**。

```yaml
conditions:
  biomes:
    included-list: ['ICE_SPIKES', 'DEEP_DARK']
```

**示例二：** 如果你希望**条件**检查所有可访问世界中的生物，除了默认的`world_the_end`世界，那么你可以使用`excluded-list:`，这意味着列表将允许所有世界，除了你排除的世界，使其不满足**条件**。

```yaml
conditions:
  worlds:
    excluded-list: ['world_the_end']
```

**示例三：** 如果你希望条件应用于`all_passive_mobs`组，但希望跳过鸟类、蜜蜂、驴和骡子，你可以结合使用`included-groups:`、`excluded-groups:`和`excluded-list:`。首先，你允许所有被动生物组满足条件检查，然后移除所有飞行生物组以覆盖鸟类和蜜蜂，接着移除驴和骡子的个体实体。

```yaml
conditions:
  entities:
    included-groups: ['all_passive_mobs']
    excluded-groups: ['all_flying_mobs']
    excluded-list: ['DONKEY', 'MULE']
```

***

