---
sidebar_position: 1
---

# 🌟 settings.yml

<details>

<summary>点击查看Settings.YML中所有选项的完整列表</summary>

```yaml
#
#   ---------------  -  ------------------------------
#        第一部分  |  设置
#   ---------------  -  ------------------------------

# ||  仅限高级用户 | 调试
# ||  除非LM开发者告诉你，否则不要动这个。
# ||  这些设置会在控制台打印大量关于LevelledMobs操作的“幕后”信息。
# ||  在LevelledMobs4中，我们建议使用命令：/lm debug
debug-entity-damage: false
debug-misc: [ ]

# ||  这是一个很好的更新检查器——它不会冻结
# ||  你的服务器启动，因为它是异步的，
# ||  只有在找到更新时才会说话，并且它只运行
# ||  每次服务器启动一次。禁用它是没有意义的。
use-update-checker: true

# ||  仅限高级用户
# ||  如果你的服务器软件（例如Paper）中有
# ||  Adventure库，那么LevelledMobs
# ||  会使用它，只要这个设置是启用的。
# ||  CraftBukkit和Spigot服务器没有
# ||  这个库，尽管PaperMC服务器和
# ||  所有PaperMC分支（Airplane等）都有。
# ||  建议你保持这个启用。
use-adventure: true

# ||  仅限高级用户
# ||  除非LM开发者告诉你，否则不要动这个。
# ||  如果你的服务器软件（例如Paper）有Adventure
# ||  库，那么你可以将其改为false并使用
# ||  MiniMessage进行名称标签解析。
use-legacy-serializer: true

# ||  仅限高级用户
# ||  除非LM开发者告诉你，否则不要动这个。
# ||  这个系统控制着重复的异步监听器，它
# ||  维护着等级和名称标签信息的准确性。
# ||  这非常重要且资源敏感，因此不建议
# ||  在没有事先测试的情况下更改这些设置。
# ||  这个系统充当垃圾收集和验证
# ||  机制，以及一种“重新检查”实体的方式，以确保
# ||  它们遵循系统的规则。
async-task-update-period: 3
async-task-max-blocks-from-player: 320

# ||  仅限高级用户
# ||  除非LM开发者告诉你，否则不要动这个。
# ||  启用生成监听器以在实体生成时应用等级。
# ||  如果为false，实体在生成时将不再被赋予等级。
level-mobs-upon-spawn: true

# ||  仅限高级用户
# ||  除非LM开发者告诉你，否则不要动这个。
# ||  启用加载监听器以在区块加载时应用等级。
# ||  如果为false，这个监听器将被禁用。
ensure-mobs-are-levelled-on-chunk-load: true

# ||  仅限高级用户
# ||  除非LM开发者告诉你，否则不要动这个。
# ||  这控制了在实体被标记为等级化后的
# ||  处理延迟（以游戏刻为单位）。注意，除了
# ||  这个设置外，还有1刻的延迟。
mob-process-delay: 0

# ||  仅限高级用户
# ||  除非LM开发者告诉你，否则不要动这个。
# ||  如果实体已经死亡，是否应该忽略名称标签数据包？
assert-entity-validity-with-nametag-packets: true

# ||  当玩家在一个区块内（在给定时间内）杀死的
# ||  等级化实体数量超过限制时，是否应该向玩家
# ||  发送消息通知他？
exceed-kill-in-chunk-message: true

# ||  这设置了使用LevelledMobs召唤命令可以召唤的
# ||  实体数量的硬限制。这是为了防止意外崩溃。
customize-summon-command-limit: 10

# ||  召唤命令会在玩家多远的地方生成实体？
summon-command-spawn-max-distance-from-player: 5

# ||  召唤命令会在玩家多近的地方生成实体？
summon-command-spawn-min-distance-from-player: 3

# ||  除非LM开发者告诉你，否则不要动这个。
# ||  这设置了自定义掉落系统中命令被“丢弃”的
# ||  次数的硬限制。这是为了防止意外崩溃。
customcommand-amount-limit: 100

# ||  当设置为true时，名称标签将显示根据你的客户端
# ||  语言设置翻译后的实体名称。然而，一些较旧或
# ||  被修改的客户端不支持这个功能，会显示翻译键。
use-translation-components: true

# ||  这些设置与玩家等级相关，它设置了
# ||  玩家等级任务的更新周期。
player-levelling-relevel-min-time: 5s

# ||  这个设置决定了实体可以离多远才能
# ||  在`%levelledmobs_mob-target%`下注册。
nametag-placeholder-maxblocks: 30

# ||  实体需要满足什么条件才能让LevelledMobs
# ||  击杀命令“跳过”它（不杀死实体）？
kill-skip-conditions:
  is-nametagged: true
  is-tamed: true
  is-leashed: true
  is-transforming: true
  is-villager: true
  entitytype:
    included-groups: ['all_passive_mobs']
    included-list: ['']

# ||  实体头颅是否应该被LevelledMobs的
# ||  掉落倍率所影响？相当多的服务器将头颅
# ||  作为其经济的一部分，因此默认设置为false，
# ||  以免影响他们的经济。
mobs-multiply-head-drops: false

# ||  当设置为true时，每个实体都会被检查以确保它
# ||  应用了最新的规则，通过比较存储的哈希字符串。
check-mob-hash: true

# ||  当使用LM召唤命令时，是否应该在控制台或执行
# ||  命令的玩家中打印结果？
print-lm-summon-results: true

# ||  仅限高级用户
# ||  在清除LEW（LivingEntityWrapper）缓存之前
# ||  应该经过多长时间。
lew-cache-clear-period: 3m

# ||  这个设置将在玩家等级修饰器确定值时
# ||  排除处于创造模式的玩家。
exclude-players-in-creative: false
```

</details>

## 当实体死亡时，LM是否应停止发送数据包？

```yaml
assert-entity-validity-with-nametag-packets: true
```

* `true` - 一旦实体生命值归零，将不再发送该实体的数据包。
* `false` - 一旦实体生命值归零，LM可能会发送额外的数据包以确保实体的名称标签数据（如生命值）准确。

此设置旨在修复与ViaBackwards的兼容性问题，其中VB检测到LM发送已死亡实体的名称标签数据包。

除非你完全理解自己在做什么，否则不建议更改此设置。



## 自动异步名称标签和等级更新器

```yaml
async-task-update-period: 3
async-task-max-blocks-from-player: 320
```

此设置将检查玩家周围X个方块内的区域（X为`async-task-max-blocks-from-player:`的值），查找任何应被升级、LM名称标签标记或由于某种原因缺少属性的实体。

`async-task-update-period:`以秒为单位计数。



## 自定义召唤命令限制

```yaml
customize-summon-command-limit: 10
```

此设置将强制限制每次使用LM的`/lm summon`命令时可以召唤的实体数量。

此设置用于帮助防止意外或服务器因大量实体召唤而过载。



## 头颅掉落倍数

```yaml
mobs-multiply-head-drops: false
```

* `true` - 怪物头颅物品掉落**不会**被乘以倍数，即使它们本应如此。
* `false` - 怪物头颅物品掉落**会**被乘以倍数，就像其他材料掉落一样。

在某些服务器上，头颅被认为是一种过于珍贵的资源，不应与其他掉落物一起被乘以倍数。此设置允许你决定是否允许这些掉落物与其他本应掉落的物品一起被乘以倍数。



## 自定义命令掉落限制器

```yaml
customcommand-amount-limit: 100
```

此设置有助于防止因实体死亡时运行超过服务器处理能力的命令而导致的意外崩溃。这将为通过自定义掉落系统掉落的任何自定义命令设置硬性限制，覆盖任何高于此值的`amount:`设置。



## 怪物处理延迟

```yaml
mob-process-delay: 0
```

此设置将在LM开始处理实体之前增加额外的延迟，以tick为单位计数。增加延迟仅在其他插件需要时间处理而LM需要应用任何值的情况下有用。

不建议更改此设置。



## 召唤命令生成距离玩家

```yaml
summon-command-spawn-min-distance-from-player: 3
summon-command-spawn-max-distance-from-player: 5
```

此设置将决定使用`/lm summon <数量> <实体> <等级> here`时，实体生成与玩家的最小和最大距离。



## 跳过击杀条件

```yaml
kill-skip-conditions:
  is-nametagged: true
  is-tamed: true
  is-leashed: true
  is-transforming: true
  is-villager: true
  entitytype:
    included-groups: ['all_passive_mobs']
    included-list: ['']
```

对于上述每个跳过击杀条件：

* `true` - 符合该条件的实体**将**在LM的击杀命令中被跳过。
* `false` - 符合该条件的实体**将不会**在LM的击杀命令中被跳过。

你还可以以类似于`entities`的**条件**检查的方式指定特定的怪物类型。\
这些将指定在使用`/lm kill`时跳过的实体。\
这对于防止宠物或其他意外实体死亡非常有用。\
建议在不了解其影响的情况下不要调整这些设置。



## 使用翻译组件

```yaml
use-translation-components: true
```

* `true` - 任何默认实体名称将以玩家客户端使用的本地语言显示给玩家。
* `false` - 一些较旧和自定义的客户端不支持此功能，因此如果服务器环境需要此规避措施，你可以禁用此功能。

此系统提供了一种生活质量机制，在大多数情况下应启用；此功能在较旧的Minecraft客户端和一些自定义客户端中不存在，可能导致显示给玩家的名称损坏。如果你的服务器需要这种规避措施，则通过禁用此功能，你将改为引用内部英文名称表。你仍然可以通过`rules.yml`中的`apply-setting: entity-name-override:`功能修改实体的名称。



## 区块加载时验证实体

```yaml
ensure-mobs-are-levelled-on-chunk-load: true
```

* `true` - 将检查玩家附近加载的区块中是否有任何应被升级但未被升级的实体。
* `false` - 由于某种原因未被升级的实体将不会被再次检查。

此系统类似于一个清洁工，检查玩家附近加载的区块中是否有任何应被升级但未被升级的实体。

如果不了解其影响，建议不要更改此设置。



## 将LM召唤命令结果打印到控制台/玩家

```yaml
print-lm-summon-results: true
```

* `true` - 启用时，使用LM召唤命令的输出将显示在控制台中。
* `false` - 禁用时，使用LM召唤命令的输出将不会显示在控制台中。

此设置管理LM召唤命令的输出文本是否显示在控制台中。禁用此设置可能在你定期或重复使用该命令时有用，因为这可能会用通知填满控制台。



## 生成时升级实体

```yaml
level-mobs-upon-spawn-max-players: 10
```

* `true` - 实体将在生成时被处理。
* `false` - 实体将不会在生成时被处理。
* `X` - 任何指定的数字；系统将设置为`true`，直到指定数量的玩家在线，此时将设置为`false`。


## 更新非玩家伤害时的名称标签

```yaml
update-mobs-upon-nonplayer-damage-max-players: 5
```

* `true` - 实体在受到任何伤害时，其名称标签将被更新。
* `false` - 实体在受到非玩家造成的伤害时，其名称标签将不会被更新。
* `X` - 任何指定的数字；系统将设置为`true`，直到指定数量的玩家在线，此时将设置为`false`。