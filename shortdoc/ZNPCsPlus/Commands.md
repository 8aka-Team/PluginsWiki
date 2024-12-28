---
sidebar_position: 4
---

# 命令

本页面提供了ZNPCsPlus中可用命令的全面列表，并为每个命令提供了详细的解释和示例。

## 基础命令

### `/npc create <id> <type>`

创建一个具有指定ID和类型的NPC。`id`参数是NPC的唯一标识符，`type`参数决定NPC的类型。查看[所有NPC类型](../NPCTypes)列表。

**示例：**
- `/npc create my_npc zombie`
- `/npc create npc1 player`
- `/npc create shop_npc villager`

### `/npc delete <id>`

删除具有指定ID的NPC。此命令会永久从世界中移除指定的NPC。

**示例：**
- `/npc delete my_npc`
- `/npc delete npc1`

### `/npc changeid <old> <new>`

更改现有NPC的ID。此命令允许你更新NPC的标识符。

**示例：**
- `/npc changeid old_npc new_npc`
- `/npc changeid villager_npc trader_npc`

### `/npc toggle <id>`

切换NPC的状态，使其可见或不可见。此命令在NPC的激活和未激活状态之间切换。

**示例：**
- `/npc toggle my_npc`
- `/npc toggle npc1`

### `/npc list`

列出所有现有的NPC。

**用法：**
- `/npc list`

### `/npc type <id> <type>`

更改NPC的类型。查看[所有NPC类型](NPCTypes)列表。

**示例：**
- `/npc type my_npc skeleton`
- `/npc type npc1 cow`

## 位置和移动命令

### `/npc near <distance>`

列出指定距离内的NPC。此命令显示位于玩家指定范围内的NPC列表。

**示例：**
- `/npc near 10`
- `/npc near 5`

### `/npc center <id>`

将NPC移动到方块的中心，X和Z轴不变，高度不变。

**示例：**
- `/npc center my_npc`
- `/npc center npc1`

### `/npc lookatme <id>`

使NPC看向玩家。此命令调整NPC的方向以面向玩家。

**示例：**
- `/npc lookatme my_npc`
- `/npc lookatme npc1`

### `/npc setlocation <id> <x> <y> <z>`

设置NPC的位置。此命令允许你指定NPC应放置的确切坐标（x, y, z）。

**示例：**
- `/npc setlocation my_npc 100 64 200`
- `/npc setlocation npc1 50.5 70 -30.5`

### `/npc setrotation <id> <yaw> <pitch>`

设置NPC的旋转。此命令调整指定NPC的偏航角和俯仰角。

**示例：**
- `/npc setrotation my_npc 180 45`
- `/npc setrotation npc1 90 0`

调整旋转可以用于在游戏中引导NPC的方向。

### `/npc move <id>`

将NPC移动到玩家的位置。

**示例：**
- `/npc move my_npc`
- `/npc move npc1`

### `/npc teleport <id>`

将玩家传送到指定NPC的位置。

**示例：**
- `/npc teleport my_npc`
- `/npc teleport npc1`

## 皮肤命令

### `/npc skin <id> <type> <args>`

更改NPC的皮肤。此命令允许你使用不同的皮肤类型和附加参数自定义指定NPC的外观。

`/npc skin`命令有四种可用的皮肤类型：

1) **静态：**
   - 用于使用玩家的用户名设置皮肤。
   - 即使玩家更改了皮肤，皮肤也不会改变。
   - 不允许使用占位符。
   - 示例：`/npc skin my_npc static D3v1s0m`

2) **动态：**
   - 用于使用玩家的用户名设置皮肤。
   - 皮肤会根据输入更新。
   - 允许使用占位符；如果玩家更改了皮肤或基于指定的占位符，皮肤会更新。
   - 示例：`/npc skin my_npc dynamic Notch`
   - 示例：`/npc skin my_npc dynamic %player_name%`

3) **镜像：**
   - 使NPC拥有与查看它的玩家相同的皮肤。
   - 对于每个玩家，它显示他们自己的皮肤。
   - 示例：`/npc skin my_npc mirror`

4) **URL：**
   - 使用皮肤文件的URL设置皮肤。
   - 有两种皮肤变体可用：经典（4像素皮肤）和纤细（3像素皮肤或Alex纤细）。
   - 示例：`/npc skin my_npc url classic http://textures.minecraft.net/texture/5d6f51d459e743fc87cf61f1ca6d312e46270847c5ce293a0744be3e73d26751`
   - 示例：`/npc skin my_npc url slim https://imgur.com/VZ8Yo58`

## 全息命令

### `/npc holo add <id> <text>`

向指定的NPC添加一行全息文本。

**示例：**
- `/npc holo add my_npc 你好，我是一个NPC`
- `/npc holo add npc1 &6欢迎来到服务器`

### `/npc holo additem <id>`

向指定的NPC添加一个物品全息。此命令允许你在NPC的全息中显示一个物品。

**示例：**
- `/npc holo additem my_npc`（手持物品）

### `/npc holo delete <id> <line>`

从指定的NPC删除一行全息文本。

**示例：**
- `/npc holo delete my_npc 1`
- `/npc holo delete npc1 2`

### `/npc holo info <id>`

显示指定NPC的全息信息。

**示例：**
- `/npc holo info my_npc`

### `/npc holo insert <id> <line> <text>`

在指定NPC的指定位置插入一行新的全息文本。

**示例：**
- `/npc holo insert my_npc 1 欢迎`
- `/npc holo insert npc1 2 再见`

### `/npc holo insertitem <id> <line>`

在指定NPC的指定位置插入一个物品全息。

**示例：**
- `/npc holo insertitem my_npc 1`（手持物品）
- `/npc holo insertitem npc1 2`（手持物品）

### `/npc holo set <id> <line> <text>`

设置指定NPC的某行全息文本。

**示例：**
- `/npc holo set my_npc 1 你好`
- `/npc holo set npc1 2 欢迎`

### `/npc holo setitem <id> <line>`

设置指定NPC的物品全息。

**示例：**
- `/npc holo setitem my_npc 1`（手持物品）
- `/npc holo setitem npc1 2`（手持物品）

### `/npc holo offset <id> <offset>`

设置指定NPC的全息偏移量。此命令允许你调整全息的垂直位置。  
0是默认值，全息位于NPC的头部。

**示例：**
- `/npc holo offset my_npc 1`（将全息向上移动1格）
- `/npc holo offset npc1 -0.5`（将全息向下移动0.5格）

### `/npc holo refreshdelay <id> <delay>`

设置指定NPC的全息刷新延迟。此命令允许你调整全息的刷新频率。  
刷新延迟是全息每次更新之间的时间（以秒为单位）。这对于占位符非常有用。  
-1是默认值，全息不会刷新。

**示例：**
- `/npc holo refreshdelay my_npc 5`（将刷新延迟设置为5秒）

## 属性命令

### `/npc property set <id> <property> <value>`

为指定的NPC设置属性值。所有属性列在[属性](../Properties)页面中。
#### 注意：不同的NPC类型有不同的可用属性。

**示例：**
- `/npc property set my_npc dinnerbone true`（适用于除玩家和末影龙外的所有NPC）
- `/npc property set zombie1 baby true`（适用于可成长的NPC）
- `/npc property set farm_shop profession farmer`（适用于村民NPC）

### `/npc property remove <id> <property>`

从指定的NPC移除一个属性。

**示例：**
- `/npc property remove my_npc dinnerbone`
- `/npc property remove zombie1 baby`
- `/npc property remove farm_shop profession`

## 动作命令

### `/npc action add <action> <id> <click type> <cooldown seconds> <delay ticks> <value>`

向指定的NPC添加一个动作。此命令允许你为NPC添加一个动作，当玩家与NPC交互时可以触发该动作。

`<action>` 可以是以下之一：
- `consolecommand` - 以控制台身份执行命令。
- `message` - 向玩家发送消息。
- `playerchat` - 以玩家身份发送消息。
- `playercommand` - 以玩家身份执行命令。
- `switchserver` - 将玩家移动到另一个服务器。（仅限BungeeCord）

`<click type>` 可以是以下之一：
- `ANY_CLICK` - 任何点击（左键或右键）都会触发动作
- `LEFT_CLICK` - 仅左键点击（攻击）会触发动作
- `RIGHT_CLICK` - 仅右键点击（交互）会触发动作

`<cooldown seconds>` 是动作的冷却时间（以秒为单位）。如果玩家在冷却时间结束前与NPC交互，动作将不会触发。

`<delay ticks>` 是动作触发前的延迟（以tick为单位）。这对于在玩家与NPC交互后延迟动作非常有用。

`<value>` 是动作的值。这可以是命令、消息或服务器名称，具体取决于动作类型。

**示例：**
- `/npc action add consolecommand my_npc ANY_CLICK 5 0 "say 你好，我是一个NPC"`（在任何点击时执行命令“say 你好，我是一个NPC”）
- `/npc action add message npc1 LEFT_CLICK 10 20 "欢迎来到服务器！"`（当NPC被左键点击时向玩家发送消息“欢迎来到服务器！”）
- `/npc action add playercommand shop_warp RIGHT_CLICK 5 0 "warp shop"`（当NPC被右键点击时执行命令“warp shop”）

### `/npc action clear <id>`

清除指定NPC的所有动作。

**示例：**
- `/npc action clear my_npc`

### `/npc action delete <id> <index>`

删除指定NPC的指定索引处的动作。索引是动作在动作列表中的位置（使用List命令查看索引）。

**示例：**
- `/npc action delete my_npc 1`
- `/npc action delete npc1 2`

### `/npc action edit <id> <index> <action> <click type> <cooldown seconds> <delay ticks> <value>`

编辑指定NPC的指定索引处的动作。此命令允许你修改现有动作的属性。

**示例：**
- `/npc action edit my_npc 1 consolecommand ANY_CLICK 5 0 "msg %player_name% 你好，我是一个NPC"`
- `/npc action edit npc1 2 message LEFT_CLICK 10 20 "欢迎来到服务器！"`
- `/npc action edit shop_npc 3 playercommand ANY_CLICK 5 0 "warp shop"`

### `/npc action list <id>`

列出指定NPC的所有动作。

**示例：**
- `/npc action list my_npc`
- `/npc action list npc1`

## 存储命令

### `/npc storage save`

保存所有NPC。

**用法：**
- `/npc storage save`

### `/npc storage reload`

重新加载所有NPC。

**用法：**
- `/npc storage reload`

### `/npc storage import <importer>`

从指定的导入器导入NPC。
注意：请参阅[转换](Converting)页面以获取更多信息。