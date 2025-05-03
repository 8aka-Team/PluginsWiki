# 权限列表

```yaml
  - MyPet.admin
  - MyPet.command.info.other
  - MyPet.command.capturehelper
  - MyPet.command.release
  - MyPet.command.respawn
  - MyPet.command.name
  - MyPet.command.name.color
  - MyPet.command.switch
  - MyPet.command.store
  - MyPet.command.trade.offer.<宠物类型>
  - MyPet.command.trade.receive.<宠物类型>
  - MyPet.shop.access.<商店名>
  - MyPet.shop.storage
  - MyPet.petstorage.limit.<上限>
  - MyPet.leash.<宠物类型>
  - MyPet.skilltree.<技能树名称>
  
  - MyPet.experience.multiplier.250
  - MyPet.experience.multiplier.225
  - MyPet.experience.multiplier.200
  - MyPet.experience.multiplier.175
  - MyPet.experience.multiplier.150
  - MyPet.experience.multiplier.125
  
  - MyPet.npc.storage
  - MyPet.npc.shop
```

## 牵引权限

牵引权限是最重要的权限，因为它允许用拴绳牵引生物。您可以使用通配符`*`允许所有类型，也可以根据需要仅允许特定玩家牵引特定类型。

{% hint style="warning" %}
该权限仅允许牵引特定生物，玩家对宠物进行的其他操作与此权限无关
{% endhint %}

* `MyPet.leash.<宠物类型名称>`
  * `<宠物类型名称>`需替换为有效的宠物类型名称或通配符(`*`)来授予所有宠物类型的权限
  * 允许牵引该类型的宠物

{% tabs %}
{% tab title="通配符(*)" %}
```yaml
  - MyPet.leash.*
```
{% endtab %}

{% tab title="全部类型" %}
```yaml
  - MyPet.leash.Bat
  - MyPet.leash.Bee
  - MyPet.leash.Blaze
  - MyPet.leash.Cat
  - MyPet.leash.CaveSpider
  - MyPet.leash.Chicken
  - MyPet.leash.Cod
  - MyPet.leash.Cow
  - MyPet.leash.Creeper
  - MyPet.leash.Dolphin
  - MyPet.leash.Donkey
  - MyPet.leash.Drowned
  - MyPet.leash.ElderGuardian
  - MyPet.leash.Enderdragon
  - MyPet.leash.Enderman
  - MyPet.leash.Endermite
  - MyPet.leash.Evoker
  - MyPet.leash.Fox
  - MyPet.leash.Giant
  - MyPet.leash.Ghast
  - MyPet.leash.Guardian
  - MyPet.leash.Hoglin
  - MyPet.leash.Horse
  - MyPet.leash.Husk
  - MyPet.leash.Illusioner
  - MyPet.leash.IronGolem
  - MyPet.leash.Llama
  - MyPet.leash.MagmaCube
  - MyPet.leash.Mooshroom
  - MyPet.leash.Mule
  - MyPet.leash.Ocelot
  - MyPet.leash.Panda
  - MyPet.leash.Parrot
  - MyPet.leash.Phantom
  - MyPet.leash.Pig
  - MyPet.leash.Piglin
  - MyPet.leash.PigZombie
  - MyPet.leash.Pillager
  - MyPet.leash.PolarBear
  - MyPet.leash.Pufferfish
  - MyPet.leash.Rabbit
  - MyPet.leash.Ravager
  - MyPet.leash.Salmon
  - MyPet.leash.Sheep
  - MyPet.leash.Silverfish
  - MyPet.leash.Skeleton
  - MyPet.leash.SkeletonHorse
  - MyPet.leash.Slime
  - MyPet.leash.Snowman
  - MyPet.leash.Spider
  - MyPet.leash.Squid
  - MyPet.leash.Stray
  - MyPet.leash.Strider
  - MyPet.leash.TraderLlama
  - MyPet.leash.TropicalFish
  - MyPet.leash.Turtle
  - MyPet.leash.Vex
  - MyPet.leash.Villager
  - MyPet.leash.Vindicator
  - MyPet.leash.WanderingTrader
  - MyPet.leash.Witch
  - MyPet.leash.Wither
  - MyPet.leash.WitherSkeleton
  - MyPet.leash.Wolf
  - MyPet.leash.Zoglin
  - MyPet.leash.Zombie
  - MyPet.leash.ZombieHorse
  - MyPet.leash.ZombieVillager
  - MyPet.leash.ZombifiedPiglin
```
{% endtab %}
{% endtabs %}

## MyPet权限说明

* `MyPet.admin`
  * 允许：
    * 打开任何宠物的物品栏
    * 在创造模式/世界中打开物品栏
    * 自由切换技能树
    * 使用`/petadmin`命令
* `MyPet.command.info.other`
  * 允许通过`/petinfo`命令查看其他玩家的宠物信息
* `MyPet.command.capturehelper`
  * 允许使用捕获助手
* `MyPet.command.release`
  * 允许释放宠物
* `MyPet.command.name`
  * 允许重命名宠物
* `MyPet.command.name.color`
  * 允许在宠物名称中使用颜色代码
* `MyPet.command.respawn`
  * 允许使用`/petrespawn`命令复活宠物(需要经济插件)
* `MyPet.command.switch`
  * 允许使用`/petswitch`命令切换宠物
* `MyPet.command.store`
  * 允许使用`/petstore`命令存储宠物
* `MyPet.command.trade.offer.<宠物类型>`
  * 允许赠送指定类型的宠物
* `MyPet.command.trade.receive.<宠物类型>`
  * 允许接收指定类型的宠物
* `MyPet.petstorage.limit.<上限>`
  * 限制玩家可存储的宠物数量
  * `<上限>`需替换为1至54之间的数字
    * 必须小于[config.yml](https://wiki.mypet-plugin.de/setup/configurations/config.yml)中的`Max-Stored-Pet-Count`值
* `MyPet.shop.access.<商店名>`
  * 允许通过/petshop命令访问指定商店
  * `<商店名>`需替换为实际商店名称
* `MyPet.shop.storage`
  * 允许直接购买宠物到存储空间，无需先存储现有宠物
* `MyPet.skilltree.<技能树名称>`
  * `<技能树名称>`需替换为现有技能树名称
  * 允许使用该技能树
  * 默认技能树包括：`战斗`、`实用`、`PvP`、`骑乘`和`农场`
* `MyPet.npc.storage`
  * 允许与Citizens插件的`mypet-storage`特性交互
* `MyPet.npc.shop`
  * 允许与Citizens插件的`mypet-shop`特性交互
* `MyPet.experience.multiplier.X`
  * 允许该玩家的宠物获得X%经验值
  * 完整的X值列表请参见本页顶部的[列表](permissions.md)

## 扩展权限

要使用扩展权限，需在配置中启用(`MyPet.Permissions.Extended`)。扩展权限主要用于功能限制，例如在创造世界禁用物品栏等功能。所有权限名称都具有自解释性，但请注意这些权限仅用于禁用特定功能。

```yaml
  - MyPet.extended.feed
  - MyPet.extended.beacon
  - MyPet.extended.behavior.friendly
  - MyPet.extended.behavior.aggressive
  - MyPet.extended.behavior.farm
  - MyPet.extended.behavior.raid
  - MyPet.extended.behavior.duel
  - MyPet.extended.inventory
  - MyPet.extended.ride
  - MyPet.extended.ride.fly
  - MyPet.extended.control
  - MyPet.extended.pickup
  - MyPet.extended.equip
  - MyPet.extended.nametag
```