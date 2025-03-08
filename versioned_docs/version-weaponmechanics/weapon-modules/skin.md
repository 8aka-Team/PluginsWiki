---
description: 更改武器道具的不同皮肤/位置
sidebar_position: 5
---

# 皮肤

您可能已经注意到，当您持有默认武器之一并左键瞄准时，武器会改变位置。或者当您开始奔跑时，枪支会改变位置，指向下方，就好像您用两只手拿着它一样。这就是“皮肤”模块的作用。

:::danger
## 旧版系统

您使用的是1.12.2或1.13.2版本吗？旧于1.14.4版本的Minecraft无法使用Custom_Model_Data，必须使用旧版系统。如果您认为旧版系统更容易使用，您仍然可以在更新的版本上使用旧版系统：

<details>

<summary>旧版系统</summary>

旧版皮肤系统使用**固定的**数值而不是数值相加。以下是所有可用选项：

```yaml
  Skin:
    Default:
      Type: <Material>
      Legacy_Data: <Integer>
      Custom_Model_Data: <Integer>
      Durability: <Integer>
    Scope:
      Type: <Material>
      Legacy_Data: <Integer>
      Custom_Model_Data: <Integer>
      Durability: <Integer>
    Scope_<number>:
      Type: <Material>
      Legacy_Data: <Integer>
      Custom_Model_Data: <Integer>
      Durability: <Integer>
    No_Ammo:
      Type: <Material>
      Legacy_Data: <Integer>
      Custom_Model_Data: <Integer>
      Durability: <Integer>
    Reload:
      Type: <Material>
      Legacy_Data: <Integer>
      Custom_Model_Data: <Integer>
      Durability: <Integer>
    Sprint:
      Type: <Material>
      Legacy_Data: <Integer>
      Custom_Model_Data: <Integer>
      Durability: <Integer>
```



* `Type`:
    * 皮肤的材料，如果材料发生了变化。
    * 对于**大多数**用途，您可以删除此行。我个人建议将武器皮肤保持为1种物品类型。
* `Legacy_Data`:
    * 在Minecraft 1.8.8至1.12.2版本中使用的材料数据。
    * 通常用于羊毛颜色。
* `Custom_Model_Data`:
    * 您的模型定义的数字。
    * 如需使用模型数据创建资源包的帮助，请参阅[CustomModelData](https://www.planetminecraft.com/forums/communities/texturing/new-1-14-custom-item-models-tuto-578834/)。
    * 仅适用于Minecraft 1.14及更高版本。
* `Durability`:
    * 您的模型定义的数字。
    * 如需使用耐久性创建资源包的帮助，请参阅[Durability](https://www.spigotmc.org/wiki/custom-item-models-in-1-9-and-up/)。
    * 如果您的服务器使用的是1.14或更高版本，强烈建议改用`Custom_Model_Data`。
    * 仅适用于Minecraft 1.9及更高版本。

以下是一个示例配置：

```yaml
  Skin:
    Default: 
      Custom_Model_Data: 5
    Scope: 
      Custom_Model_Data: 1005
    Sprint:
      Custom_Model_Data: 2005
```

您可以看到，“射击”或默认皮肤将使用自定义模型数据5，而当您瞄准时，自定义模型数据将设置为1005。

</details>
:::

```yaml
  Skin:
    Default: <integer>
    Scope: ADD <integer>
    Scope_<number>: ADD <integer>
    No_Ammo: ADD <integer>
    Reload: ADD <integer>
    Sprint: ADD <integer>
   
    # 这需要安装WeaponMechanicsCosmetics
    <skin>: ADD <integer>
    <another skin>: ADD <integer>
    
    # 这需要安装WeaponMechanicsPlus
    Attachments:
      <attachment title>: ADD <integer>
      <another attachment>: ADD <integer>
```

只能同时显示`Default`、`Scope`、`Scope_<number>`、`No_Ammo`、`Reload`和`Sprint`中的一个。如果您同时进行奔跑和瞄准，将使用`Sprint`皮肤，因为它具有更高的优先级。以下是优先级顺序：

> **No\_Ammo -> Scope\_\<number> -> Scope -> Reload -> Sprint -> Default**

1. `Default`皮肤是射击时的皮肤。
2. `Scope`皮肤用于瞄准铁矛。
    1. 您还可以为每个堆叠的瞄准镜级别更改模型。
    2. 例如，使用`Scope_1`替换第一个堆叠的缩放（请记住，第一个堆叠的缩放是第二个缩放）。
    3. 您可以使用此功能创建[斜视镜](https://support.pubg.com/hc/en-us/articles/360016470833-What-is-a-Canted-Sight-)。
3. `Reload`皮肤用于装填弹药时。
4. `Sprint`皮肤用于玩家奔跑时。
5. `No_Ammo`皮肤用于枪支没有装填弹药时。

## 添加

您是否注意到所有选项（除了`Default`）都需要“ADD \<integer>”选项？我们将所有选项相加而不是将皮肤设置为一个数字，以保持配置相对较小，只要我们保持资源包有序。如果您遇到问题，请查看下面的教程：

https://youtu.be/6FVtGOQwQLE

## 皮肤

:::warning
必须购买并安装[WeaponMechanicsCosmetics](https://www.spigotmc.org/resources/weaponmechanicscosmetics-guns-in-minecraft-1-12-2-1-20-1.104539/)才能使用皮肤
:::

想从玩家那里获得捐赠吗？皮肤非常适合让玩家支持您的开发！看看`AK_47`的这个例子：

```yaml
  Skin:
    Default: 5
    Scope: ADD 1000
    Sprint: ADD 2000
    blue: ADD 10000 # 只有购买了WMC才能使用蓝色和红色
    red: ADD 20000
```

持有`AK_47`时，您可以使用`/skin blue`或`/skin red`来更改武器的皮肤（只要您具有`weaponmechanics.skin.AK_47.blue`和`weaponmechanics.skin.AK_47.red`权限）。

:::success
`weaponmechanics.skin.*`权限使玩家可以访问每种枪械的每种皮肤。`weaponmechanics.skin.AK_47.*`权限使玩家可以访问AK\_47的每种皮肤。
:::

## 附件

:::warning
必须购买并安装WeaponMechanicsPlus才能使用附件
:::

假设您想在武器上添加一个反射瞄准镜。这意味着您想要更改皮肤，以便在瞄准时不再看到铁矛，而是看到一个“点”瞄准镜。假设您有一个名为`Reflex_Sight`的附件。您可以这样做：

```yaml
  Skin:
    # 在此处定义其他选项，例如Default和Scope
    Attachments:
      Reflex_Sight: ADD 100000
```
