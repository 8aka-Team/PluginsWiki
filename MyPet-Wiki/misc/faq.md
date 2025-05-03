---
description: 常见问题解答
---

# 常见问题

## MyPet是否符合EULA协议？

{% page-ref page="eula.md" %}

## 是否存在等级上限？

是的，有三种方式可以设置等级上限：1. 通过[配置文件](../setup/configurations/config.yml.md) 2. 通过[技能树系统](../systems/skilltrees/) 3. 创建自定义[经验脚本](../systems/experience/expjs.md)并在其中添加等级上限

## 如何给僵尸/骷髅/僵尸猪人穿戴装备？

潜行状态下手持装备右键点击宠物即可穿戴。潜行状态下手持剪刀右键点击宠物可卸下装备。![$](../.gitbook/assets/exclaim.gif) **武器/护甲仅具视觉效果，不会影响宠物属性** ![$](../.gitbook/assets/exclaim.gif)

{% hint style="info" %}
此操作同样适用于马、驴、末影人和铁傀儡。  
所有可装备物品的宠物都使用相同操作方法。
{% endhint %}

## 骑乘时如何控制宠物？

骑乘宠物与骑马操作相同（需配备鞍具）。

## 如何让宠物飞行？

1. 宠物需具备[骑乘技能](../skills/ride.md)
2. 技能树需启用[飞行标记](../skills/ride.md#flying)
3. 骑上宠物
4. 按`空格键`

## 如何获得宠物？

{% page-ref page="../tutorials/how\_to\_get\_a\_mypet.md" %}

## 如何喂养宠物？

首先在此处查看宠物所需食物类型。手持食物右键点击宠物即可喂养。食物会先补充宠物[饱食度](../systems/hungersystem.md)，当饱食度达到100%后才会恢复生命值。每份食物提供**6点饱食度**，每点饱食度或生命值消耗**1点**。

## 能否拥有多个宠物？

不能。同一时间只能有**一只**活跃宠物。但可通过[NPC系统](../hooks/npc.md)或[指令](../setup/commands.md)_存储_宠物并进行切换。

## 为什么服务器上的宠物无法攻击？

您的宠物尚未学习伤害类技能（[近战伤害](../skills/damage.md)或[远程攻击](../skills/ranged.md)）。请选择含伤害技能的技能树，或为现有技能树添加伤害技能。

## 为什么无法驯服末影龙/凋灵？

驯服末影龙需要安装[ProtocolLib](https://www.spigotmc.org/resources/protocollib.1997/)。

末影龙/凋灵的[驯服条件](../systems/leashflag.md)默认设置为`不可能`。请在[宠物配置文件](../setup/configurations/pet-config.yml.md)中修改为其他条件（或清空条件列表`[]`）。

## 为什么末影龙/蝙蝠/幻翼等不会飞行？

Minecraft原生不存在飞行AI。  
宠物被驯化为MyPet后将使用驯服狼的AI系统。

## 能否让宠物坐下/停留？

可以，通过Shift+右键点击让宠物保持停留状态  
此功能适用于所有宠物，不仅限于猫/狼等常规可驯服生物。

## 为什么无法使用`/petstore`指令？

需要使用以下[权限](../setup/permissions.md)：

* `MyPet.command.store` 
* `MyPet.petstorage.limit.<上限值>`
  * （具体权限设置请参阅[权限说明](../setup/permissions.md)）