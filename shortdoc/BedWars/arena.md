---
sidebar_position: 1
---

# 创建竞技场

:::warning 世界
    
    本教程假设你已经拥有一个包含你想要的BedWars地图的世界，并且已经通过Multiverse或SlimeWorldManager等插件加载了该世界，且你已经进入了包含BedWars地图的世界。

:::

## 创建竞技场

通过执行以下命令创建竞技场：`/bw admin <竞技场名称> add`。

## 设置竞技场位置

要设置**第一个**位置，请进入地图的**第一个**角落并执行以下命令：`/bw admin <竞技场名称> pos1`。
要设置**第二个**位置，请进入地图的**第二个**角落并执行以下命令：`/bw admin <竞技场名称> pos2`。

:::note 位置
    
    `pos1`是竞技场的一个角落，`pos2`是与`pos1`相对的竞技场角落！

![](./assets/arena_bounds.png)

:::

## 添加队伍

现在是时候添加队伍了。要添加一个队伍，请执行以下命令：`/bw admin <竞技场> team add <队伍名称> <队伍颜色> <队伍人数>`。

对于颜色，你可以使用这个[TeamColor](https://docs.screamingsandals.org/BedWars/javadoc/LATEST_VERSION_HERE/org/screamingsandals/bedwars/api/TeamColor.html)枚举：`RED`, `BLUE`, `GREEN`, `YELLOW`, `MAGENTA`, `PINK`, `LIME`, `BLACK`, `WHITE`, `ORANGE`, `LIGHT_GRAY`, `GRAY`, `LIGHT_BLUE`, `CYAN` 和 `BROWN`。

:::warning

    你必须至少创建2个队伍。

:::

## 设置队伍出生点

站在你希望队伍出生的位置，并面向你希望玩家出生时的方向，因为yaw（偏航角）也会被考虑在内。使用以下命令设置队伍的出生点：`/bw admin <竞技场> team spawn <队伍>`，并重复直到所有队伍都有出生点。

## 设置队伍床

站在床上，低头看向床的**头部**，并执行以下命令来设置床的位置：`/bw admin <竞技场名称> team bed <队伍名称>`。重复直到所有队伍都有床。

:::tip 目标方块

    队伍的目标方块不仅限于床，实际上BedWars支持任何方块（龙蛋、蛋糕和重生锚有特殊支持，允许BedWars直接作为EggWars、AnchorWars或CakeWars运行）。

:::

## 添加资源生成器

站在你希望生成器所在的方块上，并执行以下命令：`/bw admin <竞技场名称> spawner add <资源> <true/false>`。

有效的默认资源：`bronze`, `iron` 和 `gold`（钻石和绿宝石不包括在内，你需要自己在[配置](config.md)中添加）。

命令中的**true/false**部分表示是否**有**全息图（true）或是否**没有**全息图（false）。

## 添加商人

现在是时候添加商店了。站在你希望商店实体所在的位置，向前看并执行以下命令：`/bw admin <竞技场> store add <村民实体名称> [商店文件] [使用主商店]`（最后两个命令部分可以省略）。

示例：`/bw admin <竞技场> store add &aStore shop.yml false`, `/bw admin <竞技场> store add &aStore`

:::info 商店实体类型

    如果你希望使用不同的实体作为商店，请执行以下命令：  
    `/bw admin <竞技场> store type <生物实体>`。
    这将设置商店的实体类型（村民、马、牛等）。  
    如果你希望使用带有皮肤的玩家作为商店管理员，请使用以下命令：`/bw admin <竞技场> store type Player:皮肤名称`。

:::

## 最后步骤

通过执行以下命令为竞技场添加大厅位置：`/bw admin <竞技场> lobby`。

通过执行以下命令为竞技场添加观战位置：`/bw admin <竞技场> spec`。

最后但同样重要的是，记得使用`/bw admin <竞技场> save`保存竞技场。

## 加入标志

你可以使用标志来加入竞技场。按照以下步骤创建这样的标志。

* 在第一行写上[BedWars]或[BWGame]
* 在第二行写上要加入的竞技场名称。
* 对于第一个标志，更新以加入游戏。

或者，你可以通过写上`leave`而不是竞技场名称来创建一个离开标志。

## 队伍实体

这些实体允许玩家通过右键点击它们来选择队伍。有两种方式可以创建这些实体。

### 通过jointeam命令创建

* 进入你的bedwars大厅并放置实体
* 将你的竞技场切换到编辑模式
* 运行命令`/bw admin <竞技场> jointeam <队伍>`
* 右键点击你想要更改为队伍实体的实体
* 现在实体将获得与队伍相同的名称，如果实体是盔甲架，它将获得队伍颜色的皮革盔甲。并且它会使你的实体持久化。
* 现在保存你的竞技场，你就可以开始游戏了

### 手动创建
创建任何与队伍名称相同的自定义名称的生物实体，并将其放置在你的大厅中。插件将使用名称来确定队伍。