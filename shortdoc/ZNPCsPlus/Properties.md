---
sidebar_position: 5
---

# 属性

本页面提供了在ZNPCsPlus中自定义NPC的所有可用属性列表。

并非所有属性都适用于所有版本和所有NPC类型。例如，`is_elder`属性仅在1.8.8-1.10版本中可用，并且仅适用于`guardian`。

### 头盔
用于为NPC装备头盔。  
用法：`/npc property set <id> helmet` - 手持物品  
默认值：`none`  
版本：所有  
类型：`player`,`armor_stand`,`giant`,`skeleton`,`zombie`,`zombified_piglin`,`husk`,`stray`,  
`wither_skeleton`,`zombie_villager`,`drowned`,`piglin`,`piglin_brute`

### 胸甲
用于为NPC装备胸甲。  
用法：`/npc property set <id> chestplate` - 手持物品  
默认值：`none`  
版本：所有  
类型：`player`,`armor_stand`,`giant`,`skeleton`,`zombie`,`zombified_piglin`,`husk`,`stray`,  
`wither_skeleton`,`zombie_villager`,`drowned`,`piglin`,`piglin_brute`

### 护腿
用于为NPC装备护腿。  
用法：`/npc property set <id> leggings` - 手持物品  
默认值：`none`  
版本：所有  
类型：`player`,`armor_stand`,`giant`,`skeleton`,`zombie`,`zombified_piglin`,`husk`,`stray`,  
`wither_skeleton`,`zombie_villager`,`drowned`,`piglin`,`piglin_brute`

### 靴子
用于为NPC装备靴子。  
用法：`/npc property set <id> boots` - 手持物品  
默认值：`none`  
版本：所有  
类型：`player`,`armor_stand`,`giant`,`skeleton`,`zombie`,`zombified_piglin`,`husk`,`stray`,  
`wither_skeleton`,`zombie_villager`,`drowned`,`piglin`,`piglin_brute`

### 主手
用于为NPC的主手装备物品。  
用法：`/npc property set <id> hand` - 手持物品  
默认值：`none`  
版本：所有  
类型：`player`,`armor_stand`,`giant`,`skeleton`,`zombie`,`zombified_piglin`,`husk`,`stray`,  
`wither_skeleton`,`zombie_villager`,`drowned`,`piglin`,`piglin_brute`,`vex`,`pillager`,`allay`

### 副手
用于为NPC的副手装备物品。  
用法：`/npc property set <id> offhand` - 手持物品  
默认值：`none`  
版本：1.9+  
类型：`player`,`armor_stand`,`giant`,`skeleton`,`zombie`,`zombified_piglin`,`husk`,`stray`,  
`wither_skeleton`,`zombie_villager`,`drowned`,`piglin`,`piglin_brute`,`vex`,`pillager`,`allay`

### 倒置
使NPC像使用Dinnerbone命名标签一样倒置。  
用法：`/npc property set <id> dinnerbone <true/false>`  
默认值：`false`  
版本：所有  
类型：所有（**除了** `ender_dragon`）

### 外观
改变NPC的外观，即头部旋转。  
用法：`/npc property set <id> look <FIXED/CLOSEST_PLAYER/PER_PLAYER>`  
默认值：`FIXED`  
示例：`/npc property set 1 look CLOSEST_PLAYER`  
FIXED - NPC不会移动头部  
CLOSEST_PLAYER - NPC会看向最近的玩家  
PER_PLAYER - NPC会看向正在看它的玩家  
版本：所有  
类型：所有

### 视线距离
用于设置NPC看向玩家的距离。  
用法：`/npc property set <id> look_distance <distance>`  
默认值：`10`  
示例：`/npc property set 1 look_distance 20.5`  
版本：所有  
类型：所有

### 可见距离
用于设置NPC对玩家可见的距离。  
用法：`/npc property set <id> view_distance <distance>`  
默认值：`32`  
示例：`/npc property set 1 view_distance 50`  
版本：所有  
类型：所有

### 权限要求
如果为true，只有拥有`znpcsplus.npc.<id>`权限的玩家才能看到NPC。  
用法：`/npc property set <id> permission_required <true/false>`  
默认值：`false`  
版本：所有  
类型：所有

### 发光
使NPC发光。  
用法：`/npc property set <id> glow [<GlowColor>]` <!-- TODO: 当Javadoc可用时，将此链接到Javadoc -->  
默认值：`false`  
示例：`/npc property set 1 glow RED`  
版本：1.9+  
类型：所有

### 火焰
将NPC设置为着火状态。  
用法：`/npc property set <id> fire <true/false>`  
默认值：`false`  
版本：所有  
类型：所有

### 隐身
将NPC设置为隐身状态。效果类似于隐身药水。  
用法：`/npc property set <id> invisible <true/false>`  
默认值：`false`  
版本：所有  
类型：所有（**除了** `ender_dragon`）

### 静默
使NPC静默。类似于命令中的`silent`标签。  
用法：`/npc property set <id> silent <true/false>`  
默认值：`false`  
版本：所有  
类型：所有

### 坐下
使NPC坐下。  
用法：`/npc property set <id> sitting <true/false>`  
默认值：`false`  
版本：所有  
类型：`cat`, `parrot`, `wolf`

### 驯服
驯服NPC。需要此属性才能使项圈颜色生效。  
用法：`/npc property set <id> tamed <true/false>`  
默认值：`false`  
版本：所有  
类型：`cat`, `parrot`, `wolf`

### 药水颜色
设置NPC的药水颜色。  
用法：`/npc property set <id> potion_color [<Color>]`  
默认值：`none`  
示例：`/npc property set 1 potion_color #FFFF00` - 将药水颜色设置为黄色  
版本：所有  
类型：所有（**除了** `ender_dragon`）

### 药水环境效果
将药水效果设置为环境效果。  
用法：`/npc property set <id> potion_ambient <true/false>`  
默认值：`false`  
版本：所有  
类型：所有（**除了** `ender_dragon`）

### 婴儿
将NPC设置为婴儿状态。  
用法：`/npc property set <id> baby <true/false>`  
默认值：`false`  
版本：所有  
类型：所有可成长的生物、僵尸、猪灵、猪灵蛮兵

### 小型
如果为true，盔甲架NPC将变为小型。  
用法：`/npc property set <id> small <true/false>`  
默认值：`false`  
版本：所有  
类型：`armor_stand`

### 手臂
如果为true，盔甲架NPC将拥有手臂。  
用法：`/npc property set <id> arms <true/false>`  
默认值：`false`  
版本：所有  
类型：`armor_stand`

### 底座
如果为false，盔甲架NPC将没有底座。  
用法：`/npc property set <id> base_plate <true/false>`  
默认值：`true`  
版本：所有  
类型：`armor_stand`

### 头部旋转
用于设置盔甲架NPC头部的旋转。  
用法：`/npc property set <id> head_rotation <x> <y> <z>`  
默认值：`0 0 0`  
示例：`/npc property set 1 head_rotation 0 90 0`  
版本：所有  
类型：`armor_stand`

### 身体旋转
用于设置盔甲架NPC身体的旋转。  
用法：`/npc property set <id> body_rotation <x> <y> <z>`  
默认值：`0 0 0`  
示例：`/npc property set 1 body_rotation 0 90 0`  
版本：所有  
类型：`armor_stand`

### 左臂旋转
用于设置盔甲架NPC左臂的旋转。  
用法：`/npc property set <id> left_arm_rotation <x> <y> <z>`  
默认值：`-10 0 -10`  
示例：`/npc property set 1 left_arm_rotation 0 0 -5`  
版本：所有  
类型：`armor_stand`

### 右臂旋转
用于设置盔甲架NPC右臂的旋转。  
用法：`/npc property set <id> right_arm_rotation <x> <y> <z>`  
默认值：`-15 0 10`  
示例：`/npc property set 1 right_arm_rotation -105 0 100`  
版本：所有  
类型：`armor_stand`

### 左腿旋转
用于设置盔甲架NPC左腿的旋转。  
用法：`/npc property set <id> left_leg_rotation <x> <y> <z>`  
默认值：`-1 0 -1`  
示例：`/npc property set 1 left_leg_rotation 40 0 0`  
版本：所有  
类型：`armor_stand`

### 右腿旋转
用于设置盔甲架NPC右腿的旋转。  
用法：`/npc property set <id> right_leg_rotation <x> <y> <z>`  
默认值：`1 0 1`  
示例：`/npc property set 1 right_leg_rotation -40 0 0`  
版本：所有  
类型：`armor_stand`

### 攻击
使恶魂NPC看起来像是在攻击。  
用法：`/npc property set <id> attacking <true/false>`  
默认值：`false`  
版本：所有  
类型：`ghast`

### 悬挂

使蝙蝠NPC倒挂。  
用法：`/npc property set <id> hanging <true/false>`  
默认值：`false`  
版本：所有  
类型：`bat`

### blaze_on_fire
使Blaze NPC着火。  
用法：`/npc property set <id> blaze_on_fire <true/false>`  
默认值：`false`  
版本：所有  
类型：`blaze`

### creeper_state
设置Creeper NPC的状态。  
用法：`/npc property set <id> creeper_state <IDLE/FUSE>`  
默认值：`IDLE`  
版本：所有  
类型：`creeper`

### creeper_charged
使Creeper NPC带电。  
用法：`/npc property set <id> creeper_charged <true/false>`  
默认值：`false`  
版本：所有  
类型：`creeper`

### is_saddled
使Horse NPC装备马鞍。  
用法：`/npc property set <id> is_saddled <true/false>`  
默认值：`false`  
版本：所有  
类型：`horse`, `donkey`, `mule`, `skeleton_horse`, `zombie_horse`

### is_eating
使Horse NPC进食。  
用法：`/npc property set <id> is_eating <true/false>`  
默认值：`false`  
版本：所有  
类型：`horse`, `donkey`, `mule`, `skeleton_horse`, `zombie_horse`

### is_rearing
使Horse NPC后腿站立。  
用法：`/npc property set <id> is_rearing <true/false>`  
默认值：`false`  
版本：所有  
类型：`horse`, `donkey`, `mule`, `skeleton_horse`, `zombie_horse`

### has_mouth_open
使Horse NPC的嘴张开。  
用法：`/npc property set <id> has_mouth_open <true/false>`  
默认值：`false`  
版本：所有  
类型：`horse`, `donkey`, `mule`, `skeleton_horse`, `zombie_horse`

### beam_target
设置End Crystal NPC光束的目标。  
用法：`/npc property set <id> beam_target <x> <y> <z>`  
默认值：`none`  
示例：`/npc property set 1 beam_target 0 100 0`  
版本：1.9+  
类型：`ender_crystal`

### show_base
如果为false，End Crystal NPC将没有像放置的End Crystal那样的底座。  
用法：`/npc property set <id> show_base <true/false>`  
默认值：`true`  
版本：1.9+  
类型：`ender_crystal`

### is_elder
使Guardian NPC成为Elder Guardian。  
用法：`/npc property set <id> is_elder <true/false>`  
默认值：`false`  
版本：1.8.8-1.10  
类型：`guardian`

### is_retracting_spikes
使Guardian NPC收回尖刺。  
用法：`/npc property set <id> is_retracting_spikes <true/false>`  
默认值：`false`  
版本：所有  
类型：`guardian`, `elder_guardian`

### horse_type
设置Horse NPC的类型。  
用法：`/npc property set <id> horse_type <HORSE/DONKEY/MULE/SKELETON/ZOMBIE>`  
默认值：`HORSE`  
版本：1.8.8-1.10  
类型：`horse`

### horse_style
设置Horse NPC的样式。  
用法：`/npc property set <id> horse_style <NONE/WHITE/WHITEFIELD/WHITE_DOTS/BLACK_DOTS>`  
默认值：`HORSE`  
版本：所有  
类型：`horse`

### horse_color
设置Horse NPC的颜色。  
用法：`/npc property set <id> horse_color <WHITE/CREAMY/CHESTNUT/BROWN/BLACK/GRAY/DARK_BROWN>`  
默认值：`HORSE`  
版本：所有  
类型：`horse`

### horse_armor
设置Horse NPC的护甲。  
用法：`/npc property set <id> horse_armor <NONE/IRON/GOLD/DIAMOND>`  
默认值：`NONE`  
版本：1.8.8-1.13  
类型：`horse`

### has_chest
如果为true，NPC将拥有一个箱子。  
用法：`/npc property set <id> has_chest <true/false>`  
默认值：`false`  
版本：所有  
类型：`horse`（仅1.8.8-1.13）, `donkey`, `mule`, `llama`