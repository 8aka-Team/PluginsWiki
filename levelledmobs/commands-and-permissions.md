---
sidebar_position: 6
---

# 🔑 命令与权限

<details>

<summary><strong>/lm debug</strong></summary>

要了解你的 _set-debug_ 选项，请参考维基中的 [调试](debugging.md) 部分。

* `/lm debug chunk-kill-count reset` \
  将区块击杀计数系统重置为零。
* `/lm debug create-zip` \
  提供创建调试压缩文件的方法，供开发者审查。需要 `confirm` 语句来执行。
* `/lm debug damage-debug-output <enable/disable>` \
  控制实体伤害系统调试输出的开关。
* `/lm debug disable` \
  `/lm debug disable-all` \
  禁用 **调试** 系统输出。
* `/lm debug enable <set-debug>` \
  启用单一的 _debug filter_，它将尊重任何 `filter-results` 设置。
* `/lm debug enable-all` \
  启用所有 _debug filters_，它将尊重 filter-results，除了 _set-debug_。
* `/lm debug enable-timer <time>` \
  启用 **调试** 系统一段时间，它将尊重任何 `filter-results` 设置。&#x20;
* `/lm debug filter-results`&#x20;
  * `... clear-all-filters` \
    清除任何已建立的 `filter-result` 设置，重置为默认状态。
  * `... listen-for <both|success|failure>` \
    根据事件是 _成功_、_失败_ 还是 _两者_ 发生，确定 **调试** 将如何考虑任何 _set-debug_ 选项的输出。&#x20;
  * `... set-debug <add|clear|remove> <set-debug>` \
    确定 **调试** 选项将被考虑的内容。你可以 _添加_ 或 _移除_ 一个 _set-debug_，或者 _清除_ 所有 _set-debug_ 过滤器的值。
  * `... set-distance-from-players <distance>` \
    确定激活的 **调试** 选项将监听距离任何玩家多远范围内的生物，以方块为单位。
  * `... set-entities <add|clear|remove> <entity>` \
    确定哪些生物将被考虑。你可以 _添加_ 或 _移除_ 一个生物，或者 _清除_ 过滤器中的所有生物。
  * `... set-players <add|clear|remove> <player>` \
    确定调试将在哪些玩家周围进行。如果未指定玩家，则命令发起者将被用作玩家。你可以 _添加_ 或 _移除_ 一个玩家，或者 _清除_ 过滤器中的所有玩家。
  * `... set-rules <add|clear|remove> <rule>` \
    确定在处理时将监听哪些规则，无论是失败还是成功。你可以 _添加_ 或 _移除_ 一个规则，或者 _清除_ 过滤器中的所有规则。
  * `... set-y-height <clear|max-y-height|min-y-height> <height>` \
    设置最小或最大 Y 高度，将 **调试** 选项限制在该高度范围内。
* `/lm debug lew-clear` \
  清除 LivingEntityWrapper \[LEW] 类。
* `/lm debug lew-debug` \
  输出当前 LivingEntityWrapper \[LEW] 状态。
* `/lm debug my-location` \
  输出执行命令的玩家的当前精确坐标。
* `/lm debug nbt-dump` \
  在控制台输出所有存储在生物上的可读 NBT 数据。
* `/lm debug output-debug <to-both/to-chat/to-console>` \
  更改调试信息的默认输出机制。建议将其设置为 `to-console`。&#x20;
* `/lm debug show-customdrops`\
  输出当前注册在 LevelledMobs 系统中的自定义掉落物。
* `/lm debug show-pdc-keys <console>` \
  在控制台输出所有存储在生物上的可读 PDC 键。
* `/lm debug show-plugin-definitions` \
  输出所有当前识别的 `externalplugins.yml` 定义，以及任何内部 `built-in` 定义。
* `/lm debug spawn-distance` \
  输出玩家距离出生点的精确距离，以方块为单位。
* `/lm debug view-debug-status` \
  输出调试系统当前是否处于活动状态，以及当前正在监听的内容。
* `/lm debug view-queues` \
  输出 LM-Nametag 和 LM-Levelling 处理流的当前队列计数。

</details>

<details>

<summary><strong>/lm info</strong></summary>

**LevelledMobs v4**\
_终极生物等级解决方案_

维护者：Pena
</details>

<details>

<summary><strong>/lm rules</strong></summary>

* `/lm rules force-all` \
  强制 LevelledMobs 重新加载，并重新处理所有已加载的怪物，以确保它们符合最新的规则和设置。
* `/lm rules <help-discord|help-wiki>` \
  提供支持 Discord 和 LevelledMobs4 Wiki 的链接。
* `/lm rules reset <challenge>` \
  提供一个易于使用的重置机制，允许你预设默认规则配置文件的启用难度。需要 `confirm` 语句来执行。
* `/lm rules show-all <console>` \
  将输出所有已注册的 **预设**、**默认规则** 和 **自定义规则**。在命令末尾添加 `console` 会将结果输出到控制台（推荐，因为文本行数较多）。
* `/lm rules show-effective <console> <looking-at>` \
  将输出玩家十格范围内最近怪物的有效规则。在命令末尾添加 `console` 会将结果输出到控制台（推荐，因为文本行数较多）。在命令末尾添加 `looking-at` 会将命令的范围限制为你准星所指的怪物。
* `/lm rules show-rule <rule> <console>` \
  将输出 LevelledMobs 关于指定 `rule` 的详细信息。在命令末尾添加 `console` 会将结果输出到控制台（推荐，因为文本行数可能较多）。
* `/lm rules show-temp-disabled` \
  如果 **自定义规则** 因 _冷却_ 条件被禁用，它将在此列出。

</details>

<details>

<summary><strong>/lm spawner</strong></summary>

* `/lm spawner create` \
  这是 LevelledMobs 生成器创建器的开始。它至少需要 `/minlevel`、`/maxlevel` 和 `/spawntype` 标志才能使生成器正常工作。\
  你还可以通过 `spawner-name:` 条件在 **规则** 文件中引用生成器的 `/name` 标志。\
  你可以将下面列出的任何数量的标志附加到命令的末尾，顺序不限。
  * `/minlevel <数量>` \
    从该生成器生成的怪物的最低等级。
  * `/maxlevel <数量>` \
    从该生成器生成的怪物的最高等级。
  * `/name <名称>` \
    生成器方块的名称，用于 **规则** 文件。
  * `/lore <文本>` \
    为任何可以接受描述的物品添加描述。要添加新行，请使用 `\n`。
  * `/nolore`\
    移除物品的描述。
  * `/customdropid <id>` \
    从 **自定义掉落** 系统中添加一个 `掉落表`。
  * `/spawntype <实体>` \
    该生成器将生成的怪物。
  * `/delay <数量>` \
    设置生成器的延迟，以刻为单位。
  * `/maxnearbyentities <数量>` \
    设置生成器范围内可以存在的最大生成实体数量。&#x20;
  * `/minspawndelay <数量>` \
    设置生成器的最小生成延迟，以刻为单位。
  * `/maxspawndelay <数量>` \
    设置生成器的最大生成延迟，以刻为单位。
  * `/requiredplayerrange <数量>` \
    设置玩家必须与生成器保持的最小距离才能激活生成器。
  * `/spawncount <数量>` \
    设置每次成功生成事件中生成的怪物数量。
  * `/spawnrange <数量>` \
    设置生成器方块外生成怪物的最大距离。
  * `/giveplayer <玩家>` \
    将创建的生成器给予指定的玩家。如果未指定玩家，则给予命令执行者。&#x20;
* `/lm 生成器 info <on|off>` \
  当设置为 `on` 时，右键点击 LevelledMobs 生成器方块时显示信息。当设置为 `off` 时，不会发送任何信息。
* `/lm 生成器 copy <on|off>` \
  当设置为 `on` 时，右键点击 LevelledMobs 生成器方块时会复制生成器。当设置为 `off` 时，不会生成副本。&#x20;

</details>

<details>

<summary><strong>/lm spawner-egg</strong></summary>

* `/lm spawner-egg` \
  这是 LevelledMobs 刷怪蛋创建器的开始。它至少需要 `/minlevel`、`/maxlevel` 和 `/spawntype` 标志才能使刷怪蛋正常工作。\
  你可以将下面列出的任何数量的标志附加到命令的末尾，顺序不限。
  * `/customdropid <名称>` \
    自定义掉落部分中掉落表的唯一名称；将掉落表添加到由刷怪蛋创建的怪物中。
  * `/entity <实体>` \
    该刷怪蛋将生成的怪物。
  * `/giveplayer <名称>` \
    将创建的蛋给予指定的玩家，而不是命令执行者。
  * `/lore <内容>`\
    为刷怪蛋物品添加描述。使用 `\n` 分隔行。
  * `/maxlevel <数量>`\
    从该刷怪蛋生成的怪物的最高等级。
  * `/minlevel <数量>`\
    从该刷怪蛋生成的怪物的最低等级。
  * `/name <名称>`\
    为蛋物品指定的名称。
  * `/nolore`\
    移除蛋物品上的任何描述行。

</details>

<details>
<summary><strong>/lm summon</strong></summary>

* `/lm summon`\
  这是LevelledMobs Summon命令的开始。
  * `... <amount> <entity> <level> ...`\
    这些选项填充了命令的中间部分。它允许你首先指定你想要召唤的怪物数量，最多一次召唤十个。然后你选择要召唤的怪物类型。最后，你可以设置应用于该怪物的等级。该怪物将像任何其他`/summon`怪物一样处理自己，但其生成原因更改为`LM_SUMMON`，并且其等级值被锁定，无论规则如何变化，除非明确适用于`LM_SUMMON`怪物。&#x20;
  * `... ... at-location <x> <y> <z> <world>`\
    在指定了怪物的数量、类型和等级后，我们可以指定怪物在指定世界中的一组坐标处生成。
  * `... ... at-player <name>`\
    在指定了怪物的数量、类型和等级后，我们可以指定怪物在指定玩家的坐标处生成，或者在该玩家附近生成。
  * `... ... here`\
    在指定了怪物的数量、类型和等级后，我们可以指定怪物在命令执行者的位置生成，或者在其附近生成。
</details>


