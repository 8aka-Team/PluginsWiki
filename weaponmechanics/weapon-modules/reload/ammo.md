---
description: 为你的枪械添加可消耗的弹药
---

# 弹药

如果你想防止玩家永远射击枪械，你应该使用`Ammo`。弹药分为两个部分，即[#weapon-config](ammo.md#weapon-config "mention")和[#ammo-config](ammo.md#ammo-config "mention")。&#x20;

## 武器配置

```yaml
<weapon>:
  Reload: # 确保弹药部分在重新装填部分内部！
    Ammo: 
      Out_Of_Ammo_Mechanics: <Mechanics>
      Ammo_Switch_Trigger: <Trigger>
      Ammo_Switch_Mechanics: 
      Ammos:
        - <ammo1>
        - <ammo2>
```

#### Out\_Of\_Ammo\_Mechanics

当玩家尝试射击但武器为空时触发的机制。请参考[机制](https://app.gitbook.com/o/MgHAZkcfIhs3YcmBjk2r/s/hz7yMxlL81NxAT44nraH/ "mention")wiki。&#x20;

* `@Source{}` -> 尝试射击的玩家。

#### Ammo\_Switch\_Trigger

用于切换弹药类型的[trigger.md](../../trigger.md "mention")。通常使用`SWAP_HANDS`。例如：

```yaml
      Ammo_Switch_Trigger:
        Main_Hand: SWAP_HANDS
        Off_Hand: SWAP_HANDS
```

#### Ammo\_Switch\_Mechanics

在切换弹药类型后触发的机制（即在[#ammo\_switch\_trigger](ammo.md#ammo_switch_trigger "mention")之后使用）。

#### Ammos

该武器可以使用的所有弹药列表。通常服务器每种枪械只有一种弹药。但是，如果你购买了WeaponMechanicsPlus，你可以制作爆炸弹药、火药等等！

例如：

```yaml
      Ammos:
        - Rocket  # 这个Rocket在Ammo配置中定义（见下文）
```

## 弹药配置

那么弹药配置放在哪里呢？不是在武器文件中！而是去**yourserver -> plugins -> WeaponMechanics -> ammos**目录下创建一个新的`.yml`文件（或使用默认的文件）。&#x20;

确保用一个唯一的名称替换`<ammo_title>`，并且不要使用任何特殊字符。例如，`.50`不会起作用，但`50_Caliber`可以。&#x20;

```yaml
<ammo_title>:
  Symbol: <string>
  Experience_As_Ammo_Cost: <amount>
  Money_As_Ammo_Cost: <amount>
  Item_Ammo:
    Bullet_Item: <Item>
    Magazine_Item: <Item>
    Ammo_Converter_Check:
      Type: <true/false>
      Name: <true/false>
      Lore: <true/false>
      Enchantments: <true/false>
      Custom_Model_Data: <true/false>
```

#### Symbol

这是在[#weapon\_info\_display](../info.md#weapon_info_display "mention")中的`<ammo_type>`占位符中显示的内容。如果你不使用任何符号，它将默认为弹药标题。&#x20;

#### Experience\_As\_Ammo\_Cost

消耗经验点数（而非等级）来装填你的枪械。大多数生物掉落5点经验。&#x20;

#### Money\_As\_Ammo\_Cost

如果你安装了Vault插件，你可以消耗货币来装填你的枪械。&#x20;

#### Item\_Ammo

消耗物品作为弹药使用。你可以使用`Bullet_Item`或`Magazine_Item`中的一个，或者你可以**同时使用**两者。&#x20;

* `Bullet_Item`
  * 单个子弹的物品。
  * 使用[物品序列化器](https://app.gitbook.com/s/IIUkVnlH40vVBzLhWWQ8/item-serializer "mention")。
* `Magazine_Item`&#x20;
  * 用于装填枪械的完整弹夹的物品。
  * 使用[物品序列化器](https://app.gitbook.com/s/IIUkVnlH40vVBzLhWWQ8/item-serializer "mention")。
* `Ammo_Converter_Check`
  * （可选）
  * 将原版物品自动转换为WeaponMechanics可用的弹药。
  * 例如，`Type: true`将将相同材料的所有物品转换为可用的弹药。&#x20;
  * 这与[#weapon\_converter\_check](../info.md#weapon_converter_check "mention")相同。