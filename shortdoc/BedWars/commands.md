---
sidebar_position: 4
---

# 命令与权限

## 权限

* `bw.admin` - 允许你创建/编辑竞技场，重新加载插件，并在启用时使用作弊命令。
* `bw.vip.startitem` - 允许你使用物品开始游戏。所有玩家将自动分配到队伍中。
* `bw.vip.forcejoin` - 允许你在游戏已满时加入（没有此权限的玩家将被踢出）。
* `bw.otherstats` - 允许你查看其他玩家的统计数据。
* `bw.admin.alljoin` - 允许你使用 /bw alljoin 命令。
* `bw.disable.joinall` - 保护你免受 /bw alljoin 命令的影响。
* `bw.cmd.join` - 允许你使用 /bw join 命令。
* `bw.cmd.leave` - 允许你使用 /bw leave 命令。
* `bw.cmd.stats` - 允许你使用 /bw stats 命令。
* `bw.cmd.rejoin` - 允许你使用 /bw rejoin 命令。
* `bw.cmd.autojoin` - 允许你使用 /bw autojoin 命令。
* `bw.cmd.list` - 允许你使用 /bw list 命令。
* `bw.cmd.leaderboard` - 允许你使用 /bw leaderboard 命令。

每个权限都可以以 `misat11.` 为前缀。请注意，这种自我主义已被弃用，并将在未来的版本中移除。

所有以 `bw.cmd.` 开头的权限默认都是允许的，即使没有明确授予该权限。这可以在 `config.yml` 的 `default-permissions` 部分中进行更改。

```yaml
default-permissions:
  join: true
  leave: true
  stats: true
  list: true
  rejoin: true
  autojoin: true
  leaderboard: true
```

## 命令

每个命令都有其指定的权限（在括号中）。

`<argument>` 是必需的参数。  
`[argument]` 是可选的参数，如果未指定此参数，命令仍可执行。但是，在此可选参数之前的所有可选参数都必须指定，才能使用此参数。

### 玩家命令

* `/bw help` - 显示命令列表（无需权限）
* `/bw join [arena]` - 加入竞技场（权限：`bw.cmd.join`）
* `/bw leave` - 离开竞技场（权限：`bw.cmd.leave`）
* `/bw list` - 列出所有可用的竞技场（权限：`bw.cmd.list`）
* `/bw stats` - 显示你的统计数据（权限：`bw.cmd.stats`）
* `/bw stats <player>` - 显示你的统计数据（权限：`bw.cmd.stats` 与 `bw.otherstats` 或 `bw.admin`）
* `/bw leaderboard` - 显示服务器上的顶级玩家（权限：`bw.cmd.leaderboard`）
* `/bw rejoin` - 加入你最近玩过的游戏，以便轻松重赛。请注意，尽管名称不幸，此命令不允许你在网络故障时重新连接到正在进行的比赛。（权限：`bw.cmd.rejoin`）
* `/bw autojoin` - 加入随机游戏（权限：`bw.cmd.autojoin`）
* `/bw party warp` - 将你队伍中的所有玩家传送到你的游戏或你所在的位置（权限：`bw.cmd.party`，需要 [Parties](https://alessiodp.com/parties) 插件并启用 `config.yml` 中的 `party` 部分）

### 管理员命令

所有这些命令都需要 `bw.admin` 权限（如果未指定）。

#### 竞技场编辑

* `/bw admin <arena> info [section]` - 显示竞技场的所有信息
* `/bw admin <arena> add` - 创建一个新的竞技场
* `/bw admin <arena> lobby` - 将大厅位置设置为你的位置
* `/bw admin <arena> spec` - 将观察者的生成点设置为你的位置
* `/bw admin <arena> pos1` - 将竞技场的一个极端点设置为你的位置
* `/bw admin <arena> pos2` - 将竞技场的第二个极端点设置为你的位置
* `/bw admin <arena> pausecountdown <seconds>` - 设置游戏开始前的暂停时间
* `/bw admin <arena> minplayers <minimum>` - 设置开始游戏所需的最小玩家数量
* `/bw admin <arena> time <seconds>` - 设置游戏的持续时间
* `/bw admin <arena> team add <team> <color> <max players>` - 向游戏中添加一个队伍
* `/bw admin <arena> team color <team> <color>` - 更改队伍颜色
* `/bw admin <arena> team maxplayers <team> <max players>` - 更改队伍的最大玩家数量
* `/bw admin <arena> team spawn <team>` - 将队伍的生成点设置为你的位置
* `/bw admin <arena> team bed <team> [looking_at|standing_on]` - 将队伍的目标块设置为你的目标位置（可以是任何块，不仅仅是床）
* `/bw admin <arena> jointeam <team>` - 设置使用实体连接到队伍的能力
* `/bw admin <arena> spawner add <bronze|gold|iron> [hologram] [first level] [name] [team] [max spawned resources]` - 在你的位置添加物品生成器（或者你可以指定最大生成资源而不指定队伍）
* `/bw admin <arena> spawner reset` - 移除所有生成器
* `/bw admin <arena> spawner remove` - 移除位置的所有生成器
* `/bw admin <arena> store add [name above dealer head] [file with shop] [use main shop]` - 在你的位置添加交易村民
* `/bw admin <arena> store remove` - 移除你位置的交易村民
* `/bw admin <arena> store type <living entity>` - 设置商店的实体类型（村民、马、牛、猪等）
* `/bw admin <arena> store child` - 将此商店标记为儿童
* `/bw admin <arena> store adult` - 将此商店标记为成人
* `/bw admin <arena> config <constant> <value>` - 设置游戏中常量变量的值
* `/bw admin <arena> arenatime <type>` - 设置竞技场中的时间（白天、夜晚等）
* `/bw admin <arena> arenaweather <type>` - 设置竞技场中的天气（默认、晴天、雨天）
* `/bw admin <arena> postgamewaiting <seconds>` - 设置玩家被传送出竞技场前的等待时间
* `/bw admin <arena> customprefix <name|off>` - 启用竞技场的自定义前缀
* `/bw admin <arena> save` - 保存游戏并激活它！
* `/bw admin <arena> edit` - 关闭游戏并将竞技场切换到编辑模式
* `/bw admin <arena> remove` - 移除竞技场

#### 作弊命令

这些命令必须通过配置选项 `enable-cheat-command-for-admins` 手动启用。管理员必须在游戏中（运行中或在等待大厅中）才能执行作弊。

* `/bw cheat give <resource> [amount] [player]` - 给予玩家指定数量的资源
* `/bw cheat kill [player]` - 杀死指定的玩家
* `/bw cheat startemptygame` - 开始一个只有一支队伍的游戏（用于测试）
* `/bw cheat destroybed <team>` - 摧毁指定队伍的床
* `/bw cheat destroyallbeds` - 摧毁游戏中所有的床
* `/bw cheat jointeam [team]` - 将管理员加入指定的队伍或当前队伍，忽略其大小（也可以在游戏运行时使用，但队伍必须有一些玩家）

除了 `/bw cheat` 命令外，还有 `/bw cheatIn <game> <cheat> [params...]` 命令。此命令允许管理员在他们未加入的游戏中执行作弊，或从控制台执行。目前支持以下作弊：`give`、`kill`、`destroybed` 和 `destroyallbeds`。

#### 其他

* `/bw alljoin [arena]` - 将所有没有 `bw.disable.alljoin` 权限的玩家加入竞技场（权限：`bw.admin.alljoin`）
* `/bw reload` - 重新加载插件
* `/bw mainlobby [enable|set]` - 启用主大厅或设置主大厅位置
* `/bw dump [paste.gg|pastes.dev]` - 转储服务器信息并给你转储链接。此链接对支持有用。
* `/bw addholo [leaderboard|stats]` - 在你的位置添加新的全息图
* `/bw removeholo` - 执行此命令后，玩家可以右键单击全息统计信息以移除它