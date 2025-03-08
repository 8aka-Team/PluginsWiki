---
sidebar_position: 6
---

# 配置文件

本页面包含HuskTowns的配置结构。

## 配置结构
📁 `plugins/HuskTowns/`
- 📄 `config.yml`: 插件通用配置
- 📄 `flags.yml`: 标志定义配置
- 📄 `levels.yml`: 城镇等级要求和限制
- 📄 [`roles.yml`](doc/Roles.md): 城镇角色层级（参见[[Roles]]）
- 📄 `rules.yml`: 默认城镇/荒野领地/标志规则
- 📄 `server.yml`: （仅限跨服务器设置）服务器ID配置
- 📄 [`advancements.json`](doc/Advancements.md): 城镇进度JSON文件（参见[[Advancements]]）
- 📄 [`messages-xx-xx.yml`](translations): 插件本地化文件，使用MineDown格式（参见[[Translations]]）

## 示例文件
<details>
<summary>config.yml</summary>

```yaml
# ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
# ┃       HuskTowns 配置         ┃
# ┃    由 William278 开发        ┃
# ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
# ┣╸ 信息: https://william278.net/project/husktowns
# ┣╸ 配置帮助: https://william278.net/docs/husktowns/config-files/
# ┗╸ 文档: https://william278.net/docs/husktowns

# 默认语言文件的区域设置。文档: https://william278.net/docs/husktowns/translations
language: en-gb
# 是否在启动时自动检查插件更新
check_for_updates: true
# 用于 /town 命令的别名。
aliases:
  - t
# 数据库设置
database:
  # 使用的数据库类型 (SQLITE, MYSQL, MARIADB)
  type: SQLITE
  # 为您的 MYSQL 或 MARIADB 数据库指定凭据
  credentials:
    host: localhost
    port: 3306
    database: HuskTowns
    username: root
    password: pa55w0rd
    parameters: ?autoReconnect=true&useSSL=false&useUnicode=true&characterEncoding=UTF-8
  # MYSQL / MARIADB 数据库 Hikari 连接池属性。除非您知道自己在做什么，否则不要修改此部分！
  connection_pool:
    size: 10
    idle: 10
    lifetime: 1800000
    keepalive: 0
    timeout: 5000
  # 数据库中使用表的名称。除非您知道自己在做什么，否则不要修改此部分！
  table_names:
    meta_data: husktowns_metadata
    claim_data: husktowns_claim_worlds
    user_data: husktowns_users
    town_data: husktowns_town_data
# 跨服务器设置
cross_server:
  # 是否启用跨服务器模式
  enabled: false
  # 集群ID，用于网络化多个独立的HuskTowns服务器组。
  # 除非您知道自己在做什么，否则不要更改此部分
  cluster_id: main
  # 用于数据同步的网络消息代理类型 (PLUGIN_MESSAGE 或 REDIS)
  broker_type: PLUGIN_MESSAGE
  # 如果您使用 REDIS 作为消息代理的设置
  redis:
    host: localhost
    port: 6379
    # Redis 服务器的密码。如果不使用密码，请留空。
    password: ''
    use_ssl: false
    # 如果您使用 Redis Sentinels 的设置。
    # 如果您不确定这是什么，请忽略此部分。
    sentinel:
      master_name: ''
      # 主机:端口对列表
      nodes: []
      password: ''
# 通用设置
general:
  # 在聊天菜单列表中每页显示的项目数量
  list_items_per_page: 6
  # 用于检查工具的项目；右键点击时显示领地信息的项目。
  inspector_tool: minecraft:stick
  # 检查工具可以从领地使用的最大距离。（以方块为单位）
  max_inspection_distance: 80
  # 显示领地进入/传送通知的位置。(ACTION_BAR, CHAT, TITLE, SUBTITLE, NONE)
  notification_slot: ACTION_BAR
  # 运行 /town map 命令时在聊天中显示的领地地图的宽度和高度。
  claim_map_width: 9
  claim_map_height: 9
  # 当城镇的第一个领地创建时，是否自动创建城镇出生点。
  first_claim_auto_setspawn: false
  # 是否允许玩家在自己的城镇内攻击其他玩家。
  allow_friendly_fire: false
  # 无法创建领地的世界名称列表。
  unclaimable_worlds:
    - world_nether
    - world_the_end
  # 无法使用的城镇名称列表。
  prohibited_town_names:
    - Administrators
    - Moderators
    - Mods
    - Staff
    - Server
  # 为城镇进度添加特殊成就。文档: https://william278.net/docs/husktowns/advancements/
  do_advancements: false
  # 启用经济功能。需要 Vault 和兼容的经济插件。如果禁用或未安装 Vault，将使用内置的城镇点数货币。
  economy_hook: true
  # 与 LuckPerms 挂钩以提供城镇权限上下文。文档: https://william278.net/docs/husktowns/hooks
  luckperms_contexts_hook: true
  # 与 PlaceholderAPI 挂钩以提供占位符。文档: https://william278.net/docs/husktowns/hooks
  placeholderapi_hook: true
  # 使用 HuskHomes 以改进传送功能。文档: https://william278.net/docs/husktowns/hooks
  huskhomes_hook: true
  # 在您的 Player Analytics 网页面板上显示城镇信息。文档: https://william278.net/docs/husktowns/hooks
  plan_hook: true
  # 在您的服务器 Dynmap、BlueMap 或 Pl3xMap 上显示城镇信息。文档: https://william278.net/docs/husktowns/hooks
  web_map_hook:
    # 启用与网页地图插件的挂钩
    enabled: true
    # 在您的网页地图上用于领地的标记集名称
    marker_set_name: Claims
# 城镇设置
towns:
  # 是否应通过正则表达式限制城镇名称。设置为false以允许完整的UTF-8名称。
  restrict_town_names: true
  # 城镇名称必须匹配的正则表达式。名称的硬性最小/最大长度为3-16个字符
  town_name_regex: '[a-zA-Z0-9-_]*'
  # 是否应限制城镇简介/问候语/告别语。设置为false以允许完整的UTF-8。
  restrict_town_bios: true
  # 城镇简介/问候语/告别语必须匹配的正则表达式。硬性最大长度为256个字符
  town_meta_regex: \A\p{ASCII}*\z
  # 在创建城镇时要求提供第一级的成本作为抵押（否则忽略此成本）
  require_first_level_collateral: false
  # 城镇之间的最小距离，以区块为单位
  minimum_chunk_separation: 0
  # 要求城镇的所有领地必须相邻
  require_claim_adjacency: false
  # 当城镇的等级提升作物生长或怪物生成时，是否生成粒子效果
  spawn_boost_particles: true
  # 用于作物生长和怪物生成提升的粒子效果
  boost_particle: spell_witch
  # 关系设置
  relations:
    # 启用城镇关系（联盟和敌对）。文档：https://william278.net/docs/husktowns/relations/
    enabled: true
    # 城镇战争设置
    wars:
      # 允许相互敌对的城镇同意开战。需要启用城镇关系。战争由成员之间的战斗组成，战斗将在防守城镇的出生点进行。文档：https://william278.net/docs/husktowns/wars/
      enabled: false
      # 城镇在结束一场战争后，可以参与另一场战争之前的小时数
      cooldown: 48
      # 战争声明在过期前的有效时间
      declaration_expiry: 10
      # 战争的最低赌注。这是每个城镇参与战争必须支付的金额。战争的胜利者将获得双方的赌注。
      minimum_wager: 5000.0
      # 战争期间显示的Boss条的颜色
      boss_bar_color: RED
      # 城镇参与战争所需的最低在线成员数（%）。
      required_online_membership: 50.0
      # 防守城镇出生点周围的半径，以方块为单位，战斗可以在此范围内进行。（最小：16）
      war_zone_radius: 128
  # 管理城镇设置，用于更改管理领地的外观
  admin_town:
    name: Admin
    color: '#ff0000'
  # 城镇清理设置
  prune_inactive_towns:
    # 在启动时删除在一定天数内没有成员在线的城镇。文档：https://william278.net/docs/husktowns/inactive-town-pruning/
    prune_on_startup: false
    # 城镇在多少天内不活动后将被删除
    prune_after_days: 90
# ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
# ┃    HuskTowns Flags Config    ┃
# ┃    Developed by William278   ┃
# ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
# ┣╸ 此文件用于配置标志。标志ID映射到允许的操作列表。
# ┗╸ 配置帮助：https://william278.net/docs/husktowns/config-files

# 标志ID到允许操作的映射。标志的显示名称对应于消息文件中的"town_rule_name_"区域设置。
flags:
  public_container_access:
    - CONTAINER_OPEN
  fire_damage:
    - FIRE_SPREAD
    - FIRE_BURN
  public_farm_access:
    - BLOCK_INTERACT
    - FARM_BLOCK_PLACE
    - FARM_BLOCK_BREAK
    - FARM_BLOCK_INTERACT
    - PLAYER_DAMAGE_ENTITY
    - PLACE_VEHICLE
    - BREAK_VEHICLE
  public_build_access:
    - CONTAINER_OPEN
    - BLOCK_PLACE
    - FARM_BLOCK_PLACE
    - PLAYER_DAMAGE_MONSTER
    - ENDER_PEARL_TELEPORT
    - BLOCK_INTERACT
    - USE_SPAWN_EGG
    - BREAK_HANGING_ENTITY
    - PLACE_HANGING_ENTITY
    - FARM_BLOCK_INTERACT
    - EMPTY_BUCKET
    - REDSTONE_INTERACT
    - PLAYER_DAMAGE_PERSISTENT_ENTITY
    - BLOCK_BREAK
    - FILL_BUCKET
    - ENTITY_INTERACT
    - PLAYER_DAMAGE_ENTITY
    - START_RAID
    - PLACE_VEHICLE
    - BREAK_VEHICLE
  mob_griefing:
    - MONSTER_DAMAGE_TERRAIN
  explosion_damage:
    - EXPLOSION_DAMAGE_TERRAIN
    - EXPLOSION_DAMAGE_ENTITY
  pvp:
    - PLAYER_DAMAGE_PLAYER
  monster_spawning:
    - MONSTER_SPAWN
    - PASSIVE_MOB_SPAWN
    - PLAYER_DAMAGE_MONSTER
  public_interact_access:
    - ENTITY_INTERACT
    - REDSTONE_INTERACT
    - ENDER_PEARL_TELEPORT
    - BLOCK_INTERACT
```
</details>

<details>
<summary>levels.yml</summary>

```yaml
# ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
# ┃    HuskTowns 等级配置   ┃
# ┃    由 William278 开发   ┃
# ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
# ┣╸ 此文件用于配置城镇升级要求和奖励
# ┗╸ 配置帮助: https://william278.net/docs/husktowns/config-files

# 升级城镇所需的金额。如果 config.yml 中启用了 require_first_level_collateral，创建城镇时将收取第一级的费用。
level_money_requirements:
  '1': 2000.0
  '2': 4000.0
  '3': 8000.0
  '4': 16000.0
  '5': 32000.0
  '6': 64000.0
  '7': 128000.0
  '8': 256000.0
  '9': 512000.0
  '10': 1024000.0
  '11': 2048000.0
  '12': 4096000.0
  '13': 8192000.0
  '14': 1.6384E7
  '15': 3.2768E7
  '16': 6.5536E7
  '17': 1.31072E8
  '18': 2.62144E8
  '19': 5.24288E8
  '20': 1.048576E9
# The maximum number of members a town can have at each level
level_member_limits:
  '1': 5
  '2': 10
  '3': 15
  '4': 20
  '5': 25
  '6': 30
  '7': 35
  '8': 40
  '9': 45
  '10': 50
  '11': 55
  '12': 60
  '13': 65
  '14': 70
  '15': 75
  '16': 80
  '17': 85
  '18': 90
  '19': 95
  '20': 100
# The maximum number of claims a town can have at each level
level_claim_limits:
  '1': 6
  '2': 12
  '3': 18
  '4': 24
  '5': 30
  '6': 36
  '7': 42
  '8': 48
  '9': 54
  '10': 60
  '11': 66
  '12': 72
  '13': 78
  '14': 84
  '15': 90
  '16': 96
  '17': 102
  '18': 108
  '19': 114
  '20': 120
# The bonus crop growth rate percentage a town has at each level (e.g. 105 is 5% faster crop growth)
level_crop_growth_rate_bonus:
  '1': 105.0
  '2': 110.0
  '3': 115.0
  '4': 120.0
  '5': 125.0
  '6': 130.0
  '7': 135.0
  '8': 140.0
  '9': 145.0
  '10': 150.0
  '11': 155.0
  '12': 160.0
  '13': 165.0
  '14': 170.0
  '15': 175.0
  '16': 180.0
  '17': 185.0
  '18': 190.0
  '19': 195.0
  '20': 200.0
# The bonus mob spawner rate percentage a town has at each level
level_mob_spawner_rate_bonus:
  '1': 102.5
  '2': 105.0
  '3': 107.5
  '4': 110.0
  '5': 112.5
  '6': 115.0
  '7': 117.5
  '8': 120.0
  '9': 122.5
  '10': 125.0
  '11': 127.5
  '12': 130.0
  '13': 132.5
  '14': 135.0
  '15': 137.5
  '16': 140.0
  '17': 142.5
  '18': 145.0
  '19': 147.5
  '20': 150.0
```
</details>

<details>
<summary>roles.yml</summary>

```yaml
# ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
# ┃  HuskTowns 城镇角色配置  ┃
# ┃    由 William278 开发   ┃
# ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
# ┣╸ 此文件用于配置城镇角色及其相关权限。
# ┣╸ 每个角色都映射到一个权重，标识其层级位置。每个权重也映射到角色名称。
# ┣╸ 配置帮助：https://william278.net/docs/husktowns/config-files
# ┗╸ 文档：https://william278.net/docs/husktowns/roles

# 角色权重ID到显示名称的映射
names:
  '1': 居民
  '2': 理事
  '3': 市长
# 角色权重ID到权限的映射
roles:
  '1':
    - deposit
    - chat
    - claim_plot
    - spawn
  '2':
    - set_farm
    - set_plot
    - manage_plot_members
    - trusted_access
    - unclaim
    - claim
    - set_greeting
    - set_farewell
    - invite
    - set_spawn
    - manage_relations
    - spawn_privacy
    - view_logs
  '3':
    - set_bio
    - evict
    - promote
    - demote
    - withdraw
    - level_up
    - set_rules
    - rename
    - set_color
    - declare_war
```
</details>

<details>
<summary>rules.yml</summary>

```yaml
# ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
# ┃    HuskTowns 规则预设    ┃
# ┃    由 William278 开发    ┃
# ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
# ┣╸ 此文件用于配置城镇内的默认标志规则预设以及城镇外的公共规则。
# ┗╸ 配置帮助：https://william278.net/docs/husktowns/config-files

# 荒野规则（城镇外可认领的区块）`
wilderness_rules:
  public_farm_access: true
  explosion_damage: true
  pvp: true
  monster_spawning: true
  public_build_access: true
  public_interact_access: true
  public_container_access: true
  fire_damage: true
  mob_griefing: true
# 管理员领地规则（使用 /admintown claim 创建）
admin_claim_rules:
  public_farm_access: true  # 公共农场访问：是
  explosion_damage: false  # 爆炸伤害：否
  pvp: false  # 玩家对战：否
  monster_spawning: false  # 怪物生成：否
  public_build_access: false  # 公共建筑访问：否
  public_interact_access: true  # 公共交互访问：是
  public_container_access: false  # 公共容器访问：否
  fire_damage: false  # 火焰伤害：否
  mob_griefing: false  # 生物破坏：否
# 无法创建领地的世界规则（在 unclaimable_worlds 中定义）
unclaimable_world_rules:
  public_farm_access: true  # 公共农场访问：是
  explosion_damage: true  # 爆炸伤害：是
  pvp: true  # 玩家对战：是
  monster_spawning: true  # 怪物生成：是
  public_build_access: true  # 公共建筑访问：是
  public_interact_access: true  # 公共交互访问：是
  public_container_access: true  # 公共容器访问：是
  fire_damage: true  # 火焰伤害：是
  mob_griefing: true  # 生物破坏：是
# 城镇战争期间的默认规则（仅在城镇战争期间使用）
wartime_rules:
  public_farm_access: true  # 公共农场访问：是
  explosion_damage: true  # 爆炸伤害：是
  pvp: true  # 玩家对战：是
  monster_spawning: true  # 怪物生成：是
  public_build_access: true  # 公共建筑访问：是
  public_interact_access: true  # 公共交互访问：是
  public_container_access: true  # 公共容器访问：是
  fire_damage: true  # 火焰伤害：是
  mob_griefing: true  # 生物破坏：是
# 不同城镇领地类型的默认规则
default_rules:
  # 普通领地的默认规则
  claims:
    public_farm_access: false  # 公共农场访问：否
    explosion_damage: false  # 爆炸伤害：否
    pvp: false  # 玩家对战：否
    monster_spawning: true  # 怪物生成：是
    public_build_access: false  # 公共建筑访问：否
    public_interact_access: false  # 公共交互访问：否
    public_container_access: false  # 公共容器访问：否
    fire_damage: false  # 火焰伤害：否
    mob_griefing: false  # 生物破坏：否
  # 农场领地的默认规则
  farms:
    public_farm_access: true  # 公共农场访问：是
    explosion_damage: false  # 爆炸伤害：否
    pvp: false  # 玩家对战：否
    monster_spawning: true  # 怪物生成：是
    public_build_access: false  # 公共建筑访问：否
    public_interact_access: false  # 公共交互访问：否
    public_container_access: false  # 公共容器访问：否
    fire_damage: false  # 火焰伤害：否
    mob_griefing: false  # 生物破坏：否
  # 地块领地的默认规则
  plots:
    public_farm_access: false  # 公共农场访问：否
    explosion_damage: false  # 爆炸伤害：否
    pvp: false  # 玩家对战：否
    monster_spawning: false  # 怪物生成：否
    public_build_access: false  # 公共建筑访问：否
    public_interact_access: false  # 公共交互访问：否
    public_container_access: false  # 公共容器访问：否
    fire_damage: false  # 火焰伤害：否
    mob_griefing: false  # 生物破坏：否
```
</details>

<details>
<summary>server.yml</summary>

此文件仅在您的服务器使用跨服务器模式在代理网络上运行HuskTowns时存在。
```yaml
# ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
# ┃  HuskTowns 服务器 ID 配置  ┃
# ┃    由 William278 开发       ┃
# ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
# ┣╸ 此文件应包含在您的代理配置中定义的此服务器的ID。
# ┣╸ 如果您使用 /server alpha 加入，则将其设置为 'alpha'（区分大小写）
# ┗╸ 仅当您使用跨服务器模式时才需要修改此文件。

name: beta
```
</details>