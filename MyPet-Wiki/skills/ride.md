# 骑乘

通过此技能，你可以骑乘你的宠物。要骑上宠物，请用[config.yml](../setup/configurations/config.yml.md)中指定的物品（`MyPet.Skill.Ride.Item`）右键点击你的宠物。默认物品是**缰绳**。骑乘时的操控方式与骑马类似。

## 飞行

当你的[技能树](../systems/skilltrees/)启用该功能时，你还可以骑着宠物飞行。

骑乘速度（以及飞行能力）可以通过[技能树](../systems/skilltrees/)中的技能设置进行调整。

即使是非常小的速度值也会显著提升移动速度，因此请谨慎设置。

{% hint style="info" %}
1米 = 1个方块
{% endhint %}

### 区域标志

_区域标志_可用于在特定[WorldGuard](http://dev.bukkit.org/bukkit-plugins/worldguard/)区域内禁止/允许飞行。

该标志名为：`mypet-fly`

## 演示  

![](../.gitbook/assets/ride.gif)