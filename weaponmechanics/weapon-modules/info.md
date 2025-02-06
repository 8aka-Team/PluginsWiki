---
description: 武器外观的基本信息
sidebar_position: 1
---

# 信息

:::danger
所有武器都需要`Info`模块
:::

```yaml
  Info:
    Weapon_Item: <物品序列化器>
    Weapon_Info_Display: # 向下滚动获取更多信息
    Dual_Wield: # 向下滚动获取更多信息
    Weapon_Converter_Check:
      Type: <true/false>
      Name: <true/false>
      Lore: <true/false>
      Enchants: <true/false>
      Custom_Model_Data: <true/false>
    Weapon_Get_Mechanics: <机制>
    Weapon_Equip_Mechanics: <机制>
    Weapon_Equip_Delay: <刻数>
    Weapon_Holster_Mechanics: <机制>
    Cancel:
      Block_Interactions: <true/false>
      Item_Interactions: <true/false>
      Break_Blocks: <true/false>
      Drop_Item: <true/false>
      Swap_Hands: <true/false>
      Arm_Swing_Animation: <true/false>
```

#### Weapon_Item

作为武器使用的物品。使用[物品序列化器](https://app.gitbook.com/s/IIUkVnlH40vVBzLhWWQ8/item-serializer)。在这里可以定义物品的描述、属性等。

#### Weapon_Info_Display

如何在动作栏中显示弹药和其他信息。使用占位符和颜色。查看默认武器的示例。

<details>

<summary>显示示例</summary>

```yaml
    Weapon_Info_Display:
      Action_Bar:
        Message: "<gold>AK-47<firearm_state> <gray>«<gold><ammo_left><gray>»<gold><reload>"
```

</details>

```yaml
    Weapon_Info_Display:
      Action_Bar:
        Message: <string>
        Dual_Wield:
          Main_Hand: <string>
          Off_Hand: <string>
      Boss_Bar:
        Title: <string>
        Bar_Color: <string>
        Bar_Style: <string>
        Dual_Wield:
          Main_Hand: <string>
          Off_Hand: <string>
      Show_Ammo_In:
        Boss_Bar_Progress: <true/false>
        Exp_Level: <true/false>
        Exp_Progress: <true/false>
```

#### Dual_Wield

默认情况下，双持武器是被禁用的。如果你想同时使用两只手开火，你需要为两个武器都添加双持功能，并允许它们相互双持。

只有另一只手可以装填武器，只有另一只武器可以进行瞄准。两个武器仍然可以同时开火。

<details>

<summary>50_GS双持示例</summary>

```yaml
    Dual_Wield:
      Whitelist: true
      Weapons:
        - "50_GS"
```

</details>

```yaml
    Dual_Wield:
      Whitelist: <true/false>
      Weapons:
      - <weapon title>
      - <etc.>
      Mechanics_On_Deny: <Mechanics>
```

* `Whitelist`
  * 是否将`Weapons`作为白名单或黑名单使用。
    * 白名单表示只允许使用X选项。
    * 黑名单表示不允许使用X选项。
  * `true` -> 只能使用`Weapons`中列出的武器。
* `Weapons`
  * 有效武器的列表。应输入枪械的名称。
  * 根据`Whitelist`的值，此列表的行为会发生变化。
* `Mechanics_On_Deny`
  * 当拒绝双持时运行的机制。
  * 有助于发送拒绝消息和拒绝声音。
  * 参考[机制](https://app.gitbook.com/o/MgHAZkcfIhs3YcmBjk2r/s/hz7yMxlL81NxAT44nraH)。

#### Weapon_Converter_Check

将普通物品转化为"武器"时，WeaponMechanics会检查该物品是否应该成为武器。这是插件用于确定是否将物品转化为武器的检查列表。如果你希望玩家通过"原版手段"（如交易）获得武器，这将非常有用。

* `Type`
  * 检查物品的材料是否相同。
  * 材料示例：`stone`，`stick`，`emerald`。
* `Name`
  * 检查物品的名称是否相同。
  * 注意：如果你的武器名称有颜色（例如`"<yellow>AK-47"`），那么物品必须具有相同的颜色。
  * 注意：这两个选项**不相等**`"<yellow><yellow>M4A1"` ≠ `"<yellow>M4A1"`。
* `Lore`
  * 检查物品的描述是否相同。
  * 如果你希望完全控制谁可以获得武器，可以启用此选项，因为普通玩家无法给物品添加描述。
* `Enchants`
  * 检查物品的附魔是否相同。
  * 注意：同时检查附魔和等级。
* `Custom_Model_Data`
  * 检查自定义模型数据是否相同。
  * 这比`Lore`和`Name`更快，并且具有良好的插件兼容性！

#### Weapon_Get_Mechanics

通过命令（`/wm give`）获得武器时触发的机制

* `@Source{}` -> 获得武器的实体。

#### Weapon_Equip_Mechanics

装备武器时触发的机制。

* `@Source{}` -> 拿着武器的实体

#### Weapon_Equip_Delay

装备武器后，在可以射击之前的时间间隔，以防止玩家过快切换武器以获取不公平的优势。副武器的装备延迟应该比主武器低。

#### Weapon_Holster_Mechanics

收起武器（从手中拿出）时触发的机制。

* `@Source{}` -> 拿着武器的实体

#### Cancel

在持有武器时取消某些事件。

* `Block_Interactions`
  * 取消打开门、箱子等操作。
  * 这会导致物品上下移动；_你不应该使用这个_。
* `Item_Interactions`
  * 取消耕地、剪树等操作。
  * 这会导致物品上下移动；_你不应该使用这个_。
* `Break_Blocks`
  * 取消破坏方块。
* `Drop_Item`
  * 取消持有武器时丢弃枪支。
* `Swap_Hands`
  * 取消主手和副手之间的交换（按下`F`键）。
* `Arm_Swing_Animation`
  * 取消其他玩家的手臂摆动动画（如攻击动画）。

:::warning
由于物品上下移动的视觉故障，我建议对所有枪支使用以下配置：

```yaml
    Cancel:
      Drop_Item: true
      Swap_Hands: true
      Arm_Swing_Animation: true
```
:::