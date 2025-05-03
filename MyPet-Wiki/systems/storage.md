---
description: MyPet存储功能允许玩家拥有多个宠物。
---

# 宠物存储

这并不意味着你可以同时激活多个宠物，而是用于存放当前不想激活的宠物。

## 哪些功能会使用存储系统？

* 宠物[商店](../misc/premium.md)
* `/petstore`和`/petswitch`[指令](../setup/commands.md)
* [MyPet-NPC](../hooks/npc.md)的`mypet-storage`公民插件特性
* 所有通过驯服以外方式获得的宠物

## 如何限制玩家可存储的宠物数量？

玩家可存储的宠物数量受以下权限控制：

* `MyPet.petstorage.limit.`**`X`**
  * 需将**`X`**替换为允许玩家存储的宠物数量
  * **`X`**必须小于或等于配置文件中`MyPet.Max-Stored-Pet-Count`的值

## `Max-Stored-Pet-Count`配置项的作用是什么？

由于服务器需要检查大量权限来判断玩家是否可以存储超出当前数量的宠物，该配置项用于限制这些检查的次数。