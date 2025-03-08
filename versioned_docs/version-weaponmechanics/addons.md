---
description: 与其他插件的特性
sidebar_position: 4
---

# 插件

## 插件列表

1. [#weaponmechanicscosmetics](addons.md#weaponmechanicscosmetics "mention")
2. [#weaponmechanicsplus](addons.md#weaponmechanicsplus "mention")
3. [#armormechanics](addons.md#armormechanics "mention")
4. [#damagemechanics](addons.md#damagemechanics "mention")
5. [#mythicmobs](addons.md#mythicmobs "mention")
6. [#worldguard](addons.md#worldguard "mention")
7. [#vivecraftspigotextensions](addons.md#vivecraftspigotextensions "mention")

### WeaponMechanicsCosmetics

添加了一些装饰效果，如子弹撞击声音、3D子弹“嗖嗖”反馈、弹道、皮肤、撞击粒子、枪口火焰、南瓜瞄准镜缩放、形状粒子效果等等！WeaponMechanicsCosmetics是一个付费的插件，可以在Spigot上购买。

***

### WeaponMechanicsPlus

为武器添加附件修改器。使用可制作的附件升级你的武器，为你的枪械开启无限可能。WeaponMechanicsPlus还为ArmorMechanics添加了装甲附件和新的武器模块：

1. [Firemode](https://app.gitbook.com/s/9hOjsLnIiB5Xm8MOXgWU/firemode "mention")&#x20;

WeaponMechanicsPlus是一个付费插件，现在无法购买（稍后将可购买）。

***

### ArmorMechanics

装甲套装和特殊效果插件，完全支持WeaponMechanics。你可以添加套装奖励，使装甲对WeaponMechanics的爆炸和子弹有抵抗力，并且还可以做更多！

***

### DamageMechanics

一个独立的插件，可以修改伤害倍率。非常适合希望改变玩家生命值（例如从20改为100）的枪械服务器。该插件可以使伤害倍增（例如三倍火焰刻度伤害），以及恢复（例如恢复5颗心而不是半颗心）。

***

### MythicMobs

[MythicMobs](https://www.spigotmc.org/resources/5702/)是一个允许你创建具有特殊能力的自定义生物的插件。WeaponMechanics添加了`weaponMechanicsShoot`，有效地允许生物射击枪械！有关如何使用技能的更多信息，请查看[MythicMobs wiki](https://git.mythiccraft.io/mythiccraft/MythicMobs/-/wikis/Skills/Start)。

请注意，生物无法重新装填、瞄准、潜行等。相反，每发射一枪被模拟为弹夹中的“第一发”。

**`weaponMechanicsShoot` (**[**Skill**](https://git.mythiccraft.io/mythiccraft/MythicMobs/-/wikis/Skills/Start)**)**

| 属性         | 别名   | 描述                                                         | 默认值          |
| ------------ | ------ | ------------------------------------------------------------ | --------------- |
| weaponTitle  | weapon | 要射击的武器标题（来自配置文件）                              | 无（必需）      |
| spread       |        | 最大随机扩散角度（以度为单位）                                | 0.0             |
| head         |        | 是否瞄准目标的头部（瞄准中心为false）                        | true            |



**`weaponMechanicsWeapon` (**[**Item**](https://git.mythiccraft.io/mythiccraft/MythicMobs/-/wikis/Mobs/Equipment)**)**

| 属性         | 别名   | 描述                                                         | 默认值          |
| ------------ | ------ | ------------------------------------------------------------ | --------------- |
| weaponTitle  | weapon | 要装备的武器标题（来自配置文件）                              | 无（必需）      |
| amount       | a      | 要装备的武器数量                                             | 1               |



**`weaponMechanicsArmed` (**[**Condition**](https://git.mythiccraft.io/mythiccraft/MythicMobs/-/wikis/Skills/conditions)**)**

检查目标是否持有武器。您可以检查特定的武器，比如`AK-47,RPG-7,Tactical_Knife`，或者使用`*`代表任意武器。

| 属性     | 别名 | 描述                                                         | 默认值 |
| ------- | ----- | ------------------------------------------------------------ | ------- |
| weapons |       | 要检查的武器，或者使用`*`代表任意武器                        | *       |



**`weaponMechanicsReloading` (**[**Condition**](https://git.mythiccraft.io/mythiccraft/MythicMobs/-/wikis/Skills/conditions)**)**

检查目标是否正在重新装填。没有任何配置选项。

以下是一个示例：

```yaml
Gunner:
  Type: zombie
  Display: '&aGunner'
  Health: 40
  Damage: 0.1
  Equipment:
  # 握着一把AK_47（不需要这样做来射击AK）
  - weaponMechanicsWeapon{weapon=AK_47} HAND
  Skills:
  # 这个示例会向目标的头部射击5个ak_47弹药（方向上下各12度）。
  - weaponMechanicsShoot{weapon=AK_47;spread=12;head=true;repeat=5;repeatInterval=1} @Target ~onTimer:80
  # 这个示例会每20秒向所有玩家射出一个集束手榴弹
  - weaponMechanicsShoot{weapon=Cluster_Grenade;spread=30;head=false} @PIR{r=20} ~onTimer:400
```

***

### WorldGuard

[WorldGuard](https://dev.bukkit.org/projects/worldguard)是一个允许你创建区域的插件。在这些区域中，你可以添加标志来增加功能。使用这些标志可以防止破坏建筑物和/或伤害玩家。

* **`weapon-shoot` ->** 防止使用武器射击
* **`weapon-shoot-message` ->** 拒绝射击时发送给射击者的消息
* **`weapon-explode` ->** 防止由武器引起的爆炸
* **`weapon-explode-message` ->** 拒绝爆炸时发送给引爆者的消息
* **`weapon-break-block` ->** 防止方块受到破坏（通过爆炸或WMC方块破坏）
* **`weapon-damage` ->** 防止使用武器对实体造成伤害
* **`weapon-damage-message` ->** 拒绝伤害时发送给射击者的消息

***

### VivecraftSpigotExtensions

一个独立的插件，允许VR用户加入服务器。请注意，原始插件不应与WeaponMechanics一起使用，而是[使用我们的重新制作版](https://www.spigotmc.org/resources/vivecraft-spigot-extensions-remake.111303/)。

:::warning
默认情况下，VR玩家将以资源包中的枪支“反向”和与手偏移的方式看到。所有VR玩家都必须在控制器设置中启用自定义物品数据。&#x20;
:::

***
