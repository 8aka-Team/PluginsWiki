---
description: 使用武器进行放大
sidebar_position: 3
---

# 作用范围

```yaml
  Scope:
    Trigger: <触发器>
    Night_Vision: <true/false>
    Pumpkin_Overlay: <true/false> # 这是一个WMC（付费）功能
    Zoom_Amount: <1-10>
    Mechanics: <机制>
    Shoot_Delay_After_Scope: <ticks>
    Zoom_Off:
      Trigger: <触发器>
      Mechanics: <机制>
    Zoom_Stacking:
      Stacks: 
        - <1-10>
        - <1-10>
        - <等等>
      Mechanics: <机制>
```

#### 触发器

这是用于实际使用放大功能的触发器。请参考[#trigger](scope.md#trigger "mention")。

#### 夜视

是否在放大时给实体添加夜视效果。夜视药水通过数据包给予。

#### 南瓜覆盖

:::warning
这是一个[WeaponMechanicsCosmetics](https://www.spigotmc.org/resources/104539/)（付费）功能！
:::

当为true时，会在玩家头上放置一个“假”的南瓜。这可以用来创建一个放大的准星。查看`WeaponMechanicsCosmetics > config.yml`以更改南瓜的名称/描述。请注意，此功能对创造模式下的玩家无效！由于创造模式下的玩家可以复制物品，有时离开放大后南瓜仍然停留在头上。对于生存模式的玩家，这只是一个视觉效果。如果他们之前戴着头盔，服务器（以及其他玩家）仍然认为射击者戴着头盔。

<details>

<summary>放大准星图片</summary>

<img src="https://user-images.githubusercontent.com/43940682/189747433-f1c82f3e-c757-47c7-9845-121146f15db8.png" alt="reticle" data-size="original"></img>

</details>

#### 放大程度

定义放大程度。该值必须介于1和10之间。其中1是最低放大倍数，10是最高放大倍数。您还可以使用小数，如2.6、4.8等。

#### 机制

玩家放大时触发的机制。请参考[Mechanics](https://app.gitbook.com/o/MgHAZkcfIhs3YcmBjk2r/s/hz7yMxlL81NxAT44nraH/ "mention")。

#### 放大后射击延迟

如果该枪支进行放大，这是实体能够开火的时间（以tick为单位，20tick = 1秒）。

#### 取消放大

* `触发器`
  * 如果您想要使用不同的触发器取消放大，可以在这里定义。
  * 对于大多数情况，您可以删除这行。
  * 请参考[trigger.md](../trigger.md "mention")。
* `机制`
  * 这些机制在实体取消放大时运行。
  * 请参考[Mechanics](https://app.gitbook.com/o/MgHAZkcfIhs3YcmBjk2r/s/hz7yMxlL81NxAT44nraH/ "mention")。

:::info
如果您使用`start_sneak`，则在这里应该使用`end_sneak`作为触发器。否则，插件将强制玩家两次潜行（按下Shift）来进行放大和取消放大。&#x20;
:::

#### 放大堆叠

放大堆叠允许您创建多个放大的“级别”。当堆叠达到最大值时，它将取消放大。使用`Zoom_Off.Trigger`，您可以提前退出放大堆叠。

* `Stacks`
  * 定义放大堆叠的列表
  * 在初始`Zoom_Amount`之后，按照给定的顺序使用该列表
* `机制`
  * 这些机制在实体堆叠放大时运行。
  * 请参考[#mechanics](scope.md#mechanics "mention")。

在此示例中，有2个堆叠，`1.5`是第一个放大倍数。基本上，这里的顺序是`1.5` -> `3.0` -> `7.0` -> 取消放大

```yml
  Scope:
    Trigger:
      Main_Hand: "LEFT_CLICK"
      Off_Hand: "LEFT_CLICK"
    Zoom_Amount: 1.5
    Zoom_Stacking:
      Stacks:
        - 3.0
        - 7.0
```