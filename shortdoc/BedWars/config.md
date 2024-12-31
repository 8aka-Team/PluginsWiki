---
sidebar_position: 3
---

# 配置

```yaml
# 插件消息的语言
locale: en
# 启用调试信息，可能有助于解决某些问题
debug: false
# 是否允许在竞技场中制作物品？
allow-crafting: false
# 玩家在竞技场中死亡时是否保留物品？
keep-inventory-on-death: false
# 玩家在大厅选择队伍后，其护甲是否应着色？
in-lobby-colored-leather-by-team: true
# 加入队伍的实体是否显示名称？
jointeam-entity-show-name: true
# 队友之间是否允许互相伤害？
friendlyfire: false
# 玩家在竞技场中被击杀时是否会掉落物品？
player-drops: true
# 大厅等待时间结束后，玩家是否应被随机分配到队伍？
# 如果为false，游戏将不会开始，直到每个人都选择了队伍
join-randomly-after-lobby-timeout: false
# BedWars是否应阻止玩家杀死商人？
prevent-killing-villagers: true
# 在大厅中是否启用选择队伍的指南针？
compass-enabled: true
# 玩家加入大厅时，BedWars是否应将其随机分配到队伍？
join-randomly-on-lobby-join: false
add-wool-to-inventory-on-join: true
prevent-spawning-mobs: true
spawner-holograms: true
spawner-disable-merge: true
prevent-lobby-spawn-mobs-in-radius: 16
spawner-holo-height: 0.25
spawner-holograms-countdown: true
damage-when-player-is-not-in-arena: false
remove-unused-target-blocks: true
allow-block-falling: true
game-start-items: false
player-respawn-items: false
# 当game-start-items启用时，玩家将获得以下列表中列出的所有物品。
# 示例：
# gived-game-start-items:
# - wooden_sword
# - leather_helmet
# - leather_boots
# - leather_leggings
# - leather_chestplate
gived-game-start-items: []
gived-player-respawn-items: []
disable-hunger: false
automatic-coloring-in-shop: true
sell-max-64-per-click-in-shop: true
enable-cheat-command-for-admins: false
shopkeepers-are-silent: true
destroy-placed-blocks-by-explosion-except: []
destroy-placed-blocks-by-explosion: true
holo-above-bed: true
allow-spectator-join: false
disable-server-message:
  player-join: false
  player-leave: false
disable-flight: true
respawn-cooldown:
  enabled: true
  time: 5
stop-team-spawners-on-die: false
allow-fake-death: false
# 是否应使用1.19.4的显示实体。仅在1.19.4+版本中有效。
prefer-1-19-4-display-entities: true
remember-what-scoreboards-players-had-before: false
use-chunk-tickets-if-available: true
reset-full-spawner-countdown-after-picking: true
players-can-win-game-only-after-seconds: 0
kick-players-upon-final-death:
  enabled: false
  delay: 5
allowed-commands: []
change-allowed-commands-to-blacklist: false
bungee:
  enabled: false
  serverRestart: true
  serverStop: false
  server: hub
  auto-game-connect: false
  kick-when-proxy-too-slow: true
  random-game-selection:
    enabled: true
    preselect-games: false
  motd:
    enabled: false
    waiting: '%name%: Waiting for players [%current%/%max%]'
    waiting_full: '%name%: Game is full [%current%/%max%]'
    running: '%name%: Game is running [%current%/%max%]'
    rebuilding: '%name%: Rebuilding...'
    disabled: '%name%: Game is disabled'
farmBlocks:
  enable: false
  blocks: []
scoreboard:
  enable: true
  title: '&a%game%&r - %time%'
  bedLost: '&c✘'
  anchorEmpty: '&e✘'
  bedExists: '&a✔'
  teamTitle: '%bed%%color%%team%'
title:
  enabled: true
  fadeIn: 0
  stay: 20
  fadeOut: 0
shop:
  rows: 4
  render-actual-rows: 6
  render-offset: 9
  render-header-start: 0
  render-footer-start: 45
  items-on-row: 9
  show-page-numbers: true
  inventory-type: CHEST
  citizens-enabled: false
  allow-execution-of-console-commands: true
items:
  jointeam: COMPASS
  leavegame: SLIME_BALL
  startgame: DIAMOND
  shopback: BARRIER
  shopcosmetic: GRAY_STAINED_GLASS_PANE
  pageback: ARROW
  pageforward: ARROW
  team-select: WHITE_WOOL
vault:
  enable: true
  reward:
    kill: 5
    win: 20
    final-kill: 5
    bed-destroy: 0
resources:
  gold:
    material: GOLD_INGOT
    color: GOLD
    name: Gold
    interval: 20
    translate: resource_gold
    spread: 1.0
  iron:
    material: IRON_INGOT
    color: GRAY
    name: Iron
    interval: 10
    translate: resource_iron
    spread: 1.0
  bronze:
    material: BRICK
    color: DARK_RED
    name: Bronze
    interval: 1
    translate: resource_bronze
    spread: 1.0
respawn:
  protection-enabled: true
  protection-time: 10
  show-messages: true
specials:
  action-bar-messages: true
  dont-show-success-messages: false
  rescue-platform:
    is-breakable: false
    delay: 0
    break-time: 10
    distance: 1
    material: GLASS
  protection-wall:
    is-breakable: false
    delay: 20
    break-time: 0
    width: 5
    height: 3
    distance: 2
    material: CUT_SANDSTONE
  tnt-sheep:
    speed: 0.25
    follow-range: 10.0
    max-target-distance: 32
    explosion-time: 8
  arrow-blocker:
    protection-time: 10
    delay: 5
  warp-powder:
    teleport-time: 6
    delay: 0
  magnet-shoes:
    probability: 75
  golem:
    speed: 0.25
    follow-range: 10
    health: 20
    name-format: '%teamcolor%%team% Golem'
    show-name: true
    delay: 0
    collidable: false
  teamchest:
    turn-all-enderchests-to-teamchests: true
  throwable-fireball:
    damage: 3.0
    incendiary: true
    damage-thrower: true
  auto-igniteable-tnt:
    explosion-time: 8
    damage-placer: true
    damage: 4.0
sounds:
  bed_destroyed:
    sound: ENTITY_ENDER_DRAGON_GROWL
    volume: 1
    pitch: 1
  my_bed_destroyed:
    sound: ENTITY_ENDER_DRAGON_GROWL
    volume: 1
    pitch: 1
  countdown:
    sound: UI_BUTTON_CLICK
    volume: 1
    pitch: 1
  game_start:
    sound: ENTITY_PLAYER_LEVELUP
    volume: 1
    pitch: 1
  team_kill:
    sound: ENTITY_PLAYER_LEVELUP
    volume: 1
    pitch: 1
  player_kill:
    sound: ENTITY_PLAYER_BIG_FALL
    volume: 1
    pitch: 1
  item_buy:
    sound: ENTITY_ITEM_PICKUP
    volume: 1
    pitch: 1
  upgrade_buy:
    sound: ENTITY_EXPERIENCE_ORB_PICKUP
    volume: 1
    pitch: 1
  respawn_cooldown_wait:
    sound: UI_BUTTON_CLICK
    volume: 1
    pitch: 1
  respawn_cooldown_done:
    sound: ENTITY_PLAYER_LEVELUP
    volume: 1
    pitch: 1
game-effects:
  end:
    effects:
    - ==: Firework
      flicker: false
      trail: false
      colors:
      - ==: Color
        RED: 255
        BLUE: 255
        GREEN: 255
      fade-colors:
      - ==: Color
        RED: 255
        BLUE: 255
        GREEN: 255
      type: BALL
    power: 1
    type: Firework
  start: {}
  kill: {}
  teamkill: {}
  lobbyjoin: {}
  lobbyleave: {}
  respawn: {}
  beddestroy: {}
  warppowdertick: {}
lobby-scoreboard:
  enabled: true
  title: '&eBEDWARS'
  content:
  - ' '
  - '&fMap: &2%arena%'
  - '&fPlayers: &2%players%&f/&2%maxplayers%'
  - ' '
  - '&fWaiting ...'
  - ' '
statistics:
  enabled: true
  type: yaml
  show-on-game-end: false
  bed-destroyed-kills: false
  scores:
    kill: 10
    final-kill: 0
    die: 0
    win: 50
    bed-destroy: 25
    lose: 0
    record: 100
database:
  host: localhost
  port: 3306
  db: database
  user: root
  password: secret
  table-prefix: bw_
  type: mysql
  driver: default
  params:
    useSSL: false
    serverTimezone: Europe/Prague
    autoReconnect: true
    cachePrepStmts: true
    prepStmtCacheSize: 250
    prepStmtCacheSqlLimit: 2048
bossbar:
  use-xp-bar: false
  lobby:
    enable: true
    color: YELLOW
    style: SEGMENTED_20
  game:
    enable: true
    color: GREEN
    style: SEGMENTED_20
  # backend-entity 字段仅在服务器运行在 1.8.8 版本时存在。允许的值：wither, dragon
  backend-entity: dragon
  # allow-via-hooks 字段仅在服务器运行在 1.8.8 版本时存在。
  # 该插件尝试挂钩到 ViaVersion API，以便为 1.9+ 玩家提供彩色和分段的首领血条。
  # 由于 ViaVersion API 不断变化，这可能会偶尔导致协议问题。```
  allow-via-hooks: true
holograms:
  enabled: true
  headline: Your &eBEDWARS&f stats
  leaderboard:
    headline: '&6Bedwars Leaderboard'
    format: '&l%order%. &7%name% - &a%score%'
    size: 10
chat:
  override: true
  format: '<%teamcolor%%name%&r> '
  separate-chat:
    lobby: false
    game: false
  send-death-messages-just-in-game: true
  send-custom-death-messages: true
  default-team-chat-while-running: true
  all-chat-prefix: '@a'
  team-chat-prefix: '@t'
  all-chat: '[ALL] '
  team-chat: '[TEAM] '
  death-chat: '[DEATH] '
  disable-all-chat-for-spectators: false
rewards:
  enabled: false
  player-win:
  - /example {player} 200
  player-win-run-immediately:
  - /example {player} 200
  player-end-game:
  - /example {player} {score}
  player-destroy-bed:
  - /example {player} {score}
  player-kill:
  - /example {player} 10
  player-final-kill:
  - /example {player} 10
  player-game-start:
  - /example {player} 10
  player-early-leave:
  - /example {player} {death} 10
  team-win:
  - /example {team} 10
  player-team-win:
  - /example {team} {death} 10
  game-start:
  - /example Hello World!
lore:
  generate-automatically: true
  text:
  - '&7Price:'
  - '&7%price% %resource%'
  - '&7Amount:'
  - '&7%amount%'
sign:
  lines:
  - '&c&l[BedWars]'
  - '%arena%'
  - '%status%'
  - '%players%'
  block-behind:
    enabled: false
    waiting: ORANGE_STAINED_GLASS
    rebuilding: BROWN_STAINED_GLASS
    in-game: GREEN_STAINED_GLASS
    game-disabled: RED_STAINED_GLASS
hotbar:
  selector: 0
  color: 1
  start: 2
  leave: 8
breakable:
  enabled: false
  asblacklist: false
  explosions: false
  blocks: []
leaveshortcuts:
  enabled: false
  list:
  - leave
mainlobby:
  enabled: false
  location: ''
  world: ''
turnOnExperimentalGroovyShop: false
preventSpectatorFlyingAway: false
removePurchaseMessages: false
removePurchaseFailedMessages: false
removeUpgradeMessages: false
disableCakeEating: true
disableDragonEggTeleport: true
preventArenaFromGriefing: true
update-checker:
  zero:
    console: true
    admins: true
  one:
    console: true
    admins: true
target-block:
  allow-destroying-with-explosions: false
  respawn-anchor:
    fill-on-start: true
    enable-decrease: true
    sound:
      charge: BLOCK_RESPAWN_ANCHOR_CHARGE
      used: BLOCK_GLASS_BREAK
      deplete: BLOCK_RESPAWN_ANCHOR_DEPLETE
  cake:
    destroy-by-eating: true
event-hacks:
  damage: false
  destroy: false
  place: false
tab:
  enable: false
  header:
    enabled: true
    contents:
    - '&aMy awesome BedWars server'
    - '&bMap: %map%'
    - '&cPlayers: %respawnable%/%max%'
  footer:
    enabled: true
    contents:
    - '&eexample.com'
    - '&fWow!!'
    - '&a%spectators% are watching this match'
  hide-spectators: true
  hide-foreign-players: false
default-permissions:
  join: true
  leave: true
  stats: true
  list: true
  rejoin: true
  autojoin: true
  leaderboard: true
  party: true
# The following sections requires Parties plugin to be installed
party:
  enabled: false
  autojoin-members: false
  notify-when-warped: true
```

## 自定义资源

:::tip
如果你想特别切换到`绿宝石`、`钻石`、`铁`和`金`，你可能希望在你的服务器上拥有其他Hypixel功能，比如升级。
在这种情况下，我们建议你查看[SBA](https://www.spigotmc.org/resources/sba-screaming-bedwars-addon-1-8-8-1-20-1.99149/)。

:::

打开配置文件(`plugins/BedWars/config.yml`)并向下滚动，直到找到一个名为`resources`的部分。使用`Ctrl+F`可以帮助你搜索它。

以下是如何添加`绿宝石`、`钻石`、`铁`和`金`的示例。

```yaml
resources:
  emerald: # 资源名称
    material: EMERALD # 资源材料 (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)
    color: GREEN # 资源颜色 (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/ChatColor.html)
    name: Emerald # 资源游戏内名称
    interval: 60 # 资源生成时间（秒）
    translate: resource_emerald # 资源翻译键
    spread: 1.0 # 资源扩散半径
  diamond:
    material: DIAMOND
    color: BLUE
    name: Diamond
    interval: 30
    translate: resource_diamond
    spread: 1.0
  iron:
    material: IRON_INGOT
    color: WHITE
    name: Iron
    interval: 2
    translate: resource_iron
    spread: 1.0
  gold:
    material: GOLD_INGOT
    color: GOLD
    name: Gold
    interval: 8
    translate: resource_gold
    spread: 1.0
```

## 数据库连接

在 `config.yml` 文件中，你可以找到一个名为 `database` 的部分。在这个部分下，你可以配置数据库连接。目前官方仅支持 MySQL 和 MariaDB，但配置允许你为较新版本的数据库系统提供自定义驱动程序，或为类似 PostgreSQL 的其他类 SQL 数据库系统提供驱动程序。欢迎提交修复不同数据库系统支持的拉取请求 :)

要启用数据库连接，你需要设置一些内容以保存到数据库中。目前只有统计数据可以保存到数据库中。要启用此功能，请找到 `statistics` 部分，并将 `type` 从 `yaml` 切换为 `database`。

数据库部分包含以下字段：

* `host` 是数据库服务器的主机名或 IP 地址，默认为 `localhost`。
* `port` 是数据库服务器的端口，默认为 `3306`，这是 MySQL/MariaDB 的默认端口。
* `db` 是数据库的名称，默认为 `database`。
* `user` 是具有访问指定数据库 `db` 的数据库系统用户。该用户需要能够更改数据库的结构。默认为 `root`，但应用程序不应具有 root 访问权限。
* `password` 是数据库用户的密码。默认为 `secret`，但你应该选择更好的密码（可能是生成的）。
* `table-prefix` 是表名前缀的字符串，默认为 `bw_`。
* `type` 是数据库系统的类型，默认为 `mysql`（当使用 MySQL 驱动程序时，MySQL 和 MariaDB 均有效）。
* `driver` 是将要使用的驱动程序。有两种可能的选项：
    * 你可以将其设置为 `default`。驱动程序将根据类型选择。Spigot 和 Paper 服务器都提供了 `mysql` 类型的驱动程序。其他插件可能会向类路径提供其他驱动程序。
    * 要使用第三方驱动程序，请指定路径，例如 `mysql-connector-j-8.0.0.jar`。路径始终相对于 `plugins/BedWars` 文件夹，因此我们建议将 jar 文件放入此文件夹。驱动程序需要与 JDBC 4 兼容。该驱动程序对其他插件不可用，也不会以任何方式影响它们。
* `params` 是一个包含驱动程序特定选项的映射。在修改之前，你应该检查所选数据库系统的文档。默认情况下，设置了以下参数：
  ```yaml
  params:
    useSSL: false  # 如果你的数据库服务器需要 SSL 或在不同的机器上运行并启用了 SSL，请将此更改为 true
    serverTimezone: Europe/Prague  # 默认值基于你的系统
    autoReconnect: true
    cachePrepStmts: true
    prepStmtCacheSize: 250
    prepStmtCacheSqlLimit: 2048
  ```

:::warning 驱动程序版本

    如果你使用像 1.8.8 这样的古老 Minecraft 版本，但你有新版本的 MySQL/MariaDB，Spigot 1.8.8 中捆绑的驱动程序可能不兼容。请在此处获取新版本的 MySQL Connector J [here](https://dev.mysql.com/downloads/connector/j/)：选择 Platform Independent，下载存档并从中提取 mysql-connector-j-8.x.x.jar 文件（存档中的其他文件不相关）。将 JAR 文件放入 `plugins/BedWars` 文件夹，并将 `driver` 从 `default` 更改为文件名，例如 `mysql-connector-j-8.4.0.jar`。

:::

:::info stats_players 表结构

    在特定情况下，数据库表的自动创建可能会失败。在这种情况下，你可能需要手动创建它，使用以下代码或其变体。

    ```sql
    CREATE TABLE IF NOT EXISTS `bw_stats_players` (
      `kills` int(11) NOT NULL DEFAULT '0',
      `wins` int(11) NOT NULL DEFAULT '0',
      `score` int(11) NOT NULL DEFAULT '0',
      `loses` int(11) NOT NULL DEFAULT '0',
      `name` varchar(255) NOT NULL,
      `destroyedBeds` int(11) NOT NULL DEFAULT '0',
      `uuid` varchar(255) NOT NULL,
      `deaths` int(11) NOT NULL DEFAULT '0',
      PRIMARY KEY (`uuid`)
    );
    ```

:::

## 游戏效果

在 `config.yml` 文件中，你可以找到一个名为 `game-effects` 的部分。在这里，你可以设置一些视觉效果，以增强你的游戏体验。

### 事件
* `end` - 当游戏结束时调用此效果。
* `start` - 当游戏开始时调用此效果。
* `kill` - 当某人杀死某人时调用此效果。
* `teamkill` - 当某人杀死某人并摧毁床或其他目标块时调用此效果。
* `lobbyjoin` - 当某人进入大厅时调用此效果。
* `lobbyleave` - 当某人离开大厅时调用此效果。
* `respawn` - 当某人重生时调用此效果。
* `beddestroy` - 当某人摧毁床或其他目标块时调用此效果。
* `warppowdertick` - 当某人被 Warp Powder 传送时调用此效果。

### 效果类型
* `Particle` - [粒子效果（点击此处查看列表）](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Particle.html)
* `Effect` - [效果（点击此处查看列表）](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Effect.html)
* `Firework` - 发射烟花
* `List` - 一个事件上的多个效果

#### 粒子效果
```yaml
game-effects:
  start:
    type: Particle
    value: LAVA # 从列表中选择的大写键
    # 以下选项是可选的
    count: 2 # 生成的粒子数量（默认 - 1）
    offsetX: 1 # 事件位置的偏移量（默认 - 每个坐标为0）
    offsetY: 1
    offsetZ: 1
    extra: 1 # 额外数据，取决于每个粒子（默认 - 1）
```

#### 效果
```yaml
game-effects:
  start:
    type: Effect
    value: DOOR_CLOSE # 从列表中选择的大写键
```

#### 烟花
烟花效果类型列在[这里](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html)
```yaml
game-effects:
  end:
    type: Firework
    power: 1 # 烟花的威力
    effects: # 烟花效果列表
    - ==: Firework
      flicker: false
      trail: false
      colors: # 颜色列表
      - ==: Color
        RED: 255
        BLUE: 255
        GREEN: 255
      fade-colors:
      - ==: Color
        RED: 255
        BLUE: 255
        GREEN: 255
      type: BALL # 效果类型
```

#### 列表
```yaml
game-effects:
  end:
    type: List
    list: # 效果列表
    - type: Particle
      value: LAVA
      count: 2
      extra: 1
    - type: Effect
      value: DOOR_CLOSE # 从列表中选择的大写键
    - type: Firework
      power: 1 # 烟花的威力
      effects: # 烟花效果列表
      - ==: Firework
        flicker: false
        trail: false
        colors: # 颜色列表
        - ==: Color
          RED: 255
          BLUE: 255
          GREEN: 255
        fade-colors:
        - ==: Color
          RED: 255
          BLUE: 255
          GREEN: 255
        type: BALL # 效果类型
```

## 自定义语言

* 从[这里](https://github.com/ScreamingSandals/BedWars/tree/ver/0.2.x/plugin/src/main/resources/languages)下载基础语言文件
* 在你的_BedWars_文件夹中创建一个名为“**languages**”的文件夹。（_BedWars_文件夹位于默认的_plugins_文件夹中）
* 将你的语言文件粘贴到这里。例如，language_cs.yml
* 打开你的**config.yml**并将变量“**locale**”配置为“**cs**”

就这样，你有了自己的语言！