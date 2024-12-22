---
sidebar_position: 2
description: config.yml 文件指南
---

# 主配置

`config.yml` 是位于 `plugins/AuraSkills` 文件夹中的主插件配置文件。它用于与存储/数据库、外部插件钩子、语言、动作栏、Boss 栏、世界/区域、修饰符、要求等相关的常规或杂项配置选项。

每个 [技能](../skills/) 和属性的选项之前都在这里，但已移至它们自己的 `skills.yml` 和 `stats.yml` 文件中。

如果您在配置中看到的选项缺失，可能是因为此页面尚未更新，或者该选项已被删除。您可以在完整的插件 [更新日志](https://github.com/Archy-X/AureliumSkills/blob/master/Changelog.txt) 中找到任何配置的添加和更改。

最后更新版本：`2.2.3`

## 选项

### SQL

`sql:`

* `enabled` - 是否应使用 SQL 进行数据存储（需要重启以启用）。
* `type` - 要使用的 SQL 数据库类型；目前仅支持 `mysql`。
* `host` - SQL 主机名
* `port` - 端口（必须是数字）
* `database` - 数据库名称（必须已创建）
* `username` - SQL 用户名
* `password` - SQL 密码
* `load_delay` - 玩家加入后延迟加载数据的刻数，适用于将多个服务器同步到单个数据库。
* `always_load_on_join` - 如果为 true，玩家加入时将始终从数据库加载玩家数据，无论它是否已在内存中。
* `ssl` - 是否使用 SSL。
* `maximum_pool_size`, `minimum_idle`, `connection_timeout`, `max_lifetime`, `keepalive_time` - 用于配置 Hikari 连接池的选项。除非您遇到连接稳定性问题并知道自己在做什么，否则不应更改这些选项。

### 语言

`default_language` - 玩家的默认语言；必须有一个匹配的文件（例如：`messages_en.yml` 对应 `en`）

`try_detect_client_language` - 如果设置为 `true`，插件将尝试使用客户端的语言（如果可用且有效）。这仅适用于未使用命令设置语言的玩家，或者他们的语言在服务器重启后被重置。如果客户端语言不是有效的插件语言，它将使用 `default-language`。如果设置为 `false`，所有未设置的玩家将使用 `default-language`。

`languages` - 玩家可以使用 `/skills lang <language>` 切换到的语言列表；也必须有一个匹配的文件。自定义语言文件在此定义。

### 钩子

`hooks:`

* `enabled` - 是否应注册与给定插件的钩子。只有在检测到给定插件并启用时，才会尝试加载钩子，因此即使服务器上没有该插件，也可以将钩子设置为 `true`。某些钩子（如 HolographicDisplays 和 DecentHolograms）执行相同的功能，因此必须禁用其中一个才能启用另一个。

每个钩子的具体选项在下面带有插件名称的部分中：

#### LuckPerms

* `LuckPerms:`
  * `use_permission_cache` - 是否启用缓存 LuckPerms 乘数权限的系统，以优化乘数计算。如果您使用某些不触发 LuckPerms 事件的功能（如世界上下文）更改乘数权限，则可能需要将此功能设置为 false。

#### WorldGuard

* `WorldGuard:`
  * `blocked_regions` - 此列表中的区域内的玩家将无法在任何技能中自然获得 XP。
  * `blocked_check_replace_regions` - 此列表中的区域将禁用检查被破坏的方块是否为玩家放置的方块来源。

### 动作栏

`action_bar:`

* `enabled` - 是否启用/禁用动作栏。（必须设置为 `true` 才能显示任何动作栏；设置为 `false` 将禁用所有动作栏类型）。
* `idle` - 控制空闲动作栏（未获得 XP）。**如果您不希望在屏幕底部显示生命值和法力值，请将其设置为 false。**
* `ability` - 控制能力消息的动作栏（提升/降低、激活等）。如果设置为 false，能力消息将通过聊天发送。
* `xp` - 控制获得 XP 时的动作栏（未达到最大值）
* `maxed` - 控制获得 XP 时的动作栏（技能已达到最大值）
* `update_period` - 动作栏更新的频率，以刻为单位（如果动作栏导致延迟，请增加此值）。
* `round_xp` - 如果启用，当前 XP 将四舍五入为整数。
* `placeholder_api` - 是否应在动作栏中替换 PlaceholderAPI 占位符（前提是您有 PlaceholderAPI）。
* `use_suffix` - 是否使用数字后缀（k, m 等）格式化当前玩家的 XP。仅在 `xp` 设置为 true 时适用。
* `format_last` - 如果为 true，则在每次发送时替换占位符（如 hp 和 mana）后，将进行 MiniMessage 解析。这使得 MiniMessage 渐变效果生效，但会牺牲性能。
* `update_async` - 如果为 true，空闲动作栏将异步更新和发送。这是一个实验性选项。

### Boss 栏

`boss_bar:`

* `enabled` - 是否应为获得 XP 启用 Boss 栏。
* `mode` - 可以是 `single` 或 `multi`。`multi` 意味着如果从不同类型的技能获得 XP，将显示多个 Boss 栏，`single` 则一次只显示一个。
* `stay_time` - 未获得 XP 后 Boss 栏应保持的时间，以刻为单位。
* `update_every` - 控制连续获得 XP 时 Boss 栏更新的频率，如果遇到延迟问题，请增加此值。
* `round_xp` - 如果启用，当前 XP 将四舍五入为整数。
* `use_suffix` - 是否使用数字后缀（k, m 等）格式化当前玩家的 XP。
* `format` - 格式列表允许您为每个技能更改 Boss 栏的颜色和样式：
  * 格式：'\[SKILL] \[COLOR] \[STYLE]'
  * 可用颜色为 BLUE, GREEN, PINK, PURPLE, WHITE, RED, 和 YELLOW
  * 可用样式为 PROGRESS, NOTCHED\_6, NOTCHED\_10, NOTCHED\_12, 和 NOTCHED\_20
* `animate_progress` - 切换 Boss 栏动画（更新进度时的延迟）。

### 工作

`jobs:`

* `enabled` - 工作系统是否启用。即使选择功能被禁用，此选项也必须启用才能使源收入生效。必须安装Vault插件和经济插件才能发放收入。
* `selection:`
  * `require_selection` - 玩家是否需要通过等级进度菜单选择技能作为工作以在获得经验值时赚取收入。如果为false，所有技能都会在获得经验值时给予收入。
  * `default_job_limit` - 玩家可以同时激活的工作数量的默认最大值。可以使用auraskills.jobs.limit.[number]权限节点为每个玩家更改此限制。
  * `disable_unselected_xp` - 如果为true，玩家将无法在非活跃工作的技能中获得经验值。
  * `cooldown_sec` - 玩家在选择一个新工作后需要等待的秒数。
* `income:`
  * `use_xp` - 是否使用`default.income_per_xp`作为源的默认收入值。
  * `use_expression` - 是否使用`default.expression`作为源的默认收入值。这将覆盖`use_xp`。
  * `default:`
    * `income_per_xp` - 用于确定默认情况下源的经验值给予多少收入的乘数。例如，从源获得14技能经验值，且`income_per_xp`为0.1，将给玩家1.4 Vault货币。
    * `expression` - 如果`use_expression`为true，用于计算源的默认收入的表达式。可用变量包括xp、base_xp（无乘数值）、level（技能等级）、power和skill_average。
  * `batching:`
    * `enabled` - 如果为true，累积的收入将在一个间隔内发放，而不是立即发放。这可以减少大型服务器因大量调用Vault经济而产生的延迟。源的收入获取率不会改变。
    * `interval_ms` - 当批处理启用时，收入获取之间的最小延迟由interval_ms参数定义。例如，interval_ms为2000时，每次获得经验值时，系统会检查上次批处理收入获取的时间戳。如果自上次获取以来已超过2秒，收入将立即发放。如果不到2秒，收入将添加到下一批，并在上次批处理时间后2秒获得经验值时发放。
    * `display_individual` - 如果为true，boss栏将显示原始的单个收入，而不是批处理收入。这意味着如果为false且批处理启用，某些boss栏将不会显示任何收入获取，而批处理执行的boss栏将显示累积金额。
  * `use_final_xp` - 如果设置为false，income_per_xp的计算将排除所有经验值乘数。

:::info
工作收入也可以在[源配置](../sources.md#global-options)中按源进行配置。
:::

`enable_roman_numerals` - 是否应使用罗马数字表示技能等级。

### 防挂机

`anti_afk:`

* `enabled` - 防挂机系统是否启用。如果为false，系统的所有方面都将被禁用。
* `logging_enabled` - 是否启用防挂机检查失败的日志记录。日志将发送给任何在线的具有auraskills.antiafk.notify权限的玩家（默认情况下为op）。
* `log_threshold` - 确定记录事件所需的相同条件计数的表达式。可以使用min_count变量在此表达式中引用检查部分中检查类型的min_count。
* `checks:`
  * `[check_name]:`
    * `enabled` - 此单个检查类型是否启用。
    * `min_count` - 开始阻止经验值获取所需的连续失败条件的最低数量。每当检测到相同条件（位置、偏航、俯仰或身份）时，计数器递增，并在检测到不同条件时重置。
    * `max_distance` - 移动的最大距离，仍被视为位置/坐标基础检查失败。
    
### 伤害全息图

`damage_holograms:`

* `enabled` - 启用/禁用伤害全息图（需要启用HolographicDisplays或DecentHolograms钩子，并且服务器上必须有该插件）。
* `scaling` - 全息图上显示的伤害是否应根据`stats.yml`中hp特性的`action_bar_scaling`选项进行缩放。
* `decimal:`
  * `display_when_less_than:` - 当伤害小于指定值时，在伤害全息图中显示小数。
  * `max_amount` - 显示的最大小数位数。
* `offset:`
  * `x` - X坐标偏移
  * `y` - Y坐标偏移
  * z - Z坐标偏移
  * `random`:
    * `enabled` - 是否启用随机全息图位置。
    * `x_min` - 最小X坐标偏移
    * `x_max` - 最大X坐标偏移
    * `y_min` - 最小Y坐标偏移
    * `y_max` - 最大Y坐标偏移
    * `z_min` - 最小Z坐标偏移
    * `z_max` - 最大Z坐标偏移

### 排行榜

`leaderboards:`

* `update_period` - 排行榜更新的频率，以刻为单位。
* `update_delay` - 服务器启动后排行榜更新的延迟时间，以刻为单位（不包括启动时的立即更新）。

`start_level` - 玩家开始时的技能等级。默认为0，使用1以恢复到Beta机制。

`enable_skill_commands` - 是否启用技能名称命令，如`/farming`或`/mining`（需要重启以生效）。

`check_block_replace:`

* `enabled` - 玩家放置的方块是否不应给予经验；除非遇到插件兼容性问题，否则保持`true`。
* `blocked_worlds` - 不应检查方块替换的世界列表。在这些世界中，无论`enabled`设置为何，检查都将被禁用。

### 世界和区域

`blocked_worlds` - 此列表中的世界中的玩家将无法在任何技能中自然获得经验。

`disabled_worlds` - 此列表中的世界中的大部分插件游戏功能将被禁用，包括但不限于统计、能力、获得经验以及行动栏（命令和菜单仍可用）。

`disable_in_creative_mode` - 玩家在创造模式下是否不应获得经验。

### 数据验证

`data_validation:`

* `correct_over_max_level` - 如果为true，插件将在加入时防止技能等级超过最大等级。

### 死亡选项

`on_death:`

* `reset_skills` - 玩家死亡时是否重置其技能等级。
* `reset_xp` - 玩家死亡时是否重置其当前技能等级的经验。技能等级不会改变。

### 自动保存

`auto_save:`

* `enabled` - 是否应定期保存在线玩家的数据，而不是仅在登出时保存。这对于因服务器崩溃而导致技能数据丢失的情况很有用。
* `interval_ticks` - 自动保存的频率（以刻为单位）。

### 等级提升

`leveler:`

* `title:`
  * `enabled` - 玩家技能等级提升时是否显示标题。
  * `fade_in` - 标题淡入时间，以刻为单位
  * `stay` - 标题持续时间，以刻为单位
  * `fade_out` - 标题淡出时间，以刻为单位
* `sound:`
  * `enabled` - 玩家技能等级提升时是否播放声音。
  * `type` - 应播放的声音名称（必须是有效的声音名称）。
  * `category` - 声音应播放的声音类别。
  * `volume` - 声音音量
  * `pitch` - 声音音调
* `double_check_delay` - 一次性获得大量经验时的等级提升检查延迟，以刻为单位（越低越快）。

### 法力

`mana:`

* `enabled` - 如果为false，法力能力将不消耗法力，法力显示将从行动栏和菜单中隐藏。
* `cooldown_timer_period` - 法力能力冷却倒计时的刻数间隔。增加此值可以帮助减少法力能力TimerCooldown引起的延迟。冷却时间总体保持不变。需要重启以生效。

### 修饰符

`modifier:`

* `armor:`
  * `equip_blocked_materials` - 右键点击时应不授予盔甲统计的方块列表；当统计被授予但盔甲未装备时，添加到此列表。
* `item:`
  * `check_period` - 玩家手中物品的统计物品修饰符检查的频率，以刻为单位（如果遇到延迟，请增加此值）
  * `enable_off_hand` - 统计修饰符是否应在副手上工作
* `auto_convert_from_legacy` - 是否应将旧的修饰符nbt格式转换为新的格式。如果你有来自Beta的带有不再工作的修饰符的物品，请设置为true。

### 要求

`requirement:`

* `enabled` - 是否应检查要求。如果你不使用要求，禁用将提高性能。
* `item:`
  * `prevent_tool_use` - 玩家不满足要求时是否应阻止方块破坏
  * `prevent_weapon_use` - 玩家不满足要求时是否应阻止攻击实体
  * `prevent_block_place` - 玩家不满足要求时是否应阻止方块放置
  * `prevent_interact` - 玩家不满足要求时是否应阻止交互（右键点击）
  * `global` - 定义应适用于每种物品类型的物品要求。格式：- '\[material] \[skill\_1]:\[level\_1] \[skill\_2]:\[level\_2] ...'
* `armor:`
  * `prevent_armor_equip` - 玩家不满足要求时是否应阻止装备盔甲
  * `global` - 定义应适用于每种物品类型的盔甲要求。格式：- '\[material] \[skill\_1]:\[level\_1] \[skill\_2]:\[level\_2] ...'
* `override_global` - 如果为true，如果定义了物品特定的要求，将忽略全局要求。

### 暴击

`critical:`

* `base_multiplier` - 暴击的基础伤害倍数
* `enabled` - 此类别中的选项控制该物品类型是否应能造成暴击。（`hand`用于空手，`other`用于持有列表中未列出的任何其他物品）

### 来源

`grindstone:`

* `blocked_enchants` - 应阻止其计入磨石来源经验的附魔列表。将自定义附魔插件中的不可移除附魔/诅咒添加到此处。

`statistic:`

* `gain_period_ticks` - 统计来源应给予经验的频率。这不会改变经验的有效获取率，只是统计检查之间的时间。

`entity:`

* `give_alchemy_on_potion_combat` - 使用药水杀死/伤害实体是否应计为炼金术经验而不是战斗/弓箭经验。

### 菜单

`menus:`

* `lore_wrapping_width` - 菜单 lore 行中自动换行启用时每行字符数。
* `placeholder_api` - 菜单中是否应使用 PlaceholderAPI 占位符。
* `stats:`
  * `show_trait_values_directly` - 如果为true，具有单个特性且`modifier`恰好为1的统计将直接显示特性的值。这允许在菜单中包含特性的基础值，例如每个玩家默认拥有的20点生命值。

### 战利品

`loot:`

* `update_loot_tables` - 更新插件时，是否应自动添加默认配置中引入的新战利品物品。
* `directly_to_inventory` - 如果为true，来自幸运特性和战利品的所有额外物品掉落将始终直接添加到玩家的库存中，而不是掉落在世界中。此选项不影响原版物品掉落。

`check_for_updates` - 插件是否应在启动时以及具有`auraskills.checkupdates`权限的玩家加入时检查新更新

### 自动备份

`automatic_backups:`

* `enabled` - 服务器关闭时是否应进行自动备份
* `minimum_interval_hours` - 自动备份之间的最小间隔时间，以小时为单位。自动备份将仅在此时间后进行。
* `max_users` - 如果服务器总用户数超过此值，将跳过自动备份。

`save_blank_profiles` - 如果为false，未提升任何技能或获得任何经验的玩家数据将不会保存到存储中。