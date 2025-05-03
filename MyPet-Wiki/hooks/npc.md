# 公民NPC

这是一个为_MyPet_设计的简单插件，它为Citizens添加了一个特性，允许宠物主人存储他们的宠物。

每个_WorldGroup_都有自己独立的存储空间，因此无法在_WorldGroup_之间转移宠物。

Citizens的特性包括：

* `mypet-storage`  -&gt;  MyPet存储
* `mypet-wallet`  -&gt;  为`mypet-storage`特性提供的经济系统扩展
* `mypet-shop`  -&gt;  宠物商店

## 图片展示

![](../.gitbook/assets/handover.png) ![](../.gitbook/assets/take.png) 

## 命令

所有NPC命令都需要先选中一个Citizens NPC！

* `/petadmin npc wallet [`**`Private`**`/`**`Owner`**`/`**`Bank`**`/`**`None`**`]`
  * 设置资金转移的目标账户
    * Owner和Bank需要第二个参数指定名称
* `/petadmin npc shop <商店名称>`
  * 设置所选NPC将打开的商店

## 权限

`MyPet.petstorage.limit.<limit>`权限与`/petstore`命令及**存储/商店特性**共享。

```text
 - MyPet.npc.storage
 - MyPet.npc.shop

 - MyPet.petstorage.limit.<limit>
```