---
sidebar_position: 9
---

# 📈 性能与优化

尽管LevelledMobs从设计之初就注重性能，并且能够在资源最低的服务器上运行，但有些人还想要更多。以下是一些建议，您可以通过对LevelledMobs设置进行各种调整，以榨取每一兆字节的内存和每一比特的处理能力。

***

### 修改名称标签

最耗费资源的项目之一是名称标签的生成和维护系统。在LevelledMobs的早期版本中，我们并没有为每个生物提供名称标签，除非明确说明；现在我们尽可能为每个生物添加名称标签，以便将系统的效果扩展到每个生物。

您可以使用**Rules**文件中已经存在的**Preset**，名为`nametag-disabled`。这将设置`nametag-visibility-method: ['DISABLED']`，并清除名称标签字段`nametag: disabled`。设置后，即使生物受到LevelledMobs的影响，其名称标签也会被禁用，并且不会初始化其处理。

最容易应用此设置的是_被动_生物，因为这些生物包括鱼群、牛/羊/猪农场等。仅此一项就可能减少一半或更多的名称标签处理量。您还可以使用`nametag-visibility-method: ['MELEE']`来将处理限制为您一次明确查看的生物。

### 在设置文件中进行调整

```yaml
# || 仅限高级用户 / 与性能相关的设置
async-task-update-period: 3
async-task-max-blocks-from-player: 320

level-mobs-upon-spawn-max-players: 10
update-mobs-upon-nonplayer-damage-max-players: 5

ensure-mobs-are-levelled-on-chunk-load: true

lew-cache-clear-period: 3m
```

这些设置都位于`settings.yml`文件中。这些设置控制着插件在处理各个方面时的资源使用流程。

`async-task-update-period`和`async-task-max-blocks-from-player`设置控制着每个生物的主检查器、更新器和验证器。任何可能被遗漏或需要重新处理的内容都会在这个定时循环机制中完成。默认情况下，它设置为每3秒运行一次，检查距离每个在线玩家320个方块范围内的生物，LevelledMobs可能需要重新处理这些生物。您可以增加更新周期，或减少检查距离，以改善此过程的资源使用。您需要保持一个更新周期，以便在普通玩家处理生物时不会受到更新的影响。我们建议，作为一个保守值，将其设置为`6`秒和`64`个方块的距离。经过测试，这大约是最低的组合设置，而不会明显注意到更新的影响。

`level-mobs-upon-spawn-max-players`和`update-mobs-upon-nonplayer-damage-max-players`设置指的是不断运行的更新监听机制，监听指定事件的发生；第一个是当生物生成到世界中时，第二个是当生物受到非玩家来源的伤害时，例如跌落或岩浆。这些设置中指定的数字表示需要多少在线玩家才能使该系统自行禁用，因为地图不同部分的玩家数量会大大增加持续检查的数量。对于资源充足的服务器来说，这不是问题。如果您运行的是资源紧张的服务器，您可以通过将它们设置为`0`或将其玩家数量减少到更合理的数字来完全禁用此检查。这只是一个生活质量监听器，因为异步任务更新会在通过时纠正生物。

`ensure-mobs-are-levelled-on-chunk-load`设置与上述设置类似，但它监听的是当一个区块加载到世界中时。当这种情况发生时，它会快速检查该区块中是否有任何生物可能被升级。禁用此监听器将是在查看或世界生成范围较小的服务器上减少资源使用的简单快捷方法。

`lew-cache-clear-period`表示一个定时器，用于清除存储在内存中的任何陈旧或冲突的名称标签和数据条目，以便插件快速访问。有时可能会发生循环，导致LEW（LivingEntityWrapper）堆叠信息，从而填满内存。这是一个简单的清理机制，以防止这些信息溢出。默认的`3m`定时器应该没问题，尽管较低的数字会更频繁地清除内存。
