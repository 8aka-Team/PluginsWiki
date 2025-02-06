---
description: 自定义抛射物的飞行和交互方式
sidebar_position: 6
---

# 抛射物

本节定义了抛射物的移动方式和与环境的交互方式。请记住，抛射物并不是真实的实体。相反，WeaponMechanics使用数学和射线追踪来模拟抛射物的位置/移动。

```yaml
  Projectile: <另一个抛射物的路径>
    Projectile_Settings:
      Type: <抛射物类型>  # 实体类型或 "invisible"
      Projectile_Item_Or_Block:
        Type: <材料>
        Durability: <耐久度>
        Unbreakable: <true/false>
        Custom_Model_Data: <自定义模型数据编号>
        Skull:
          Owning_Player: <玩家的UUID或名称>
        Potion:
          Color: <颜色类型>
      Gravity: <重力>
      Minimum:
        Speed: <抛射物的最小速度>
        Remove_Projectile_On_Speed_Reached: <true/false>
      Maximum:
        Speed: <抛射物的最大速度>
        Remove_Projectile_On_Speed_Reached: <true/false>
      Drag:
        Base: <乘数>
        In_Water: <乘数>
        When_Raining_Or_Snowing: <乘数>
      Disable_Entity_Collisions: <true/false>
      Maximum_Alive_Ticks: <刻数>
      Maximum_Travel_Distance: <距离>
      Size: <抛射物大小>
    Sticky:  # 更多信息请向下滚动
    Bouncy:  # 更多信息请向下滚动
    Through:  # 更多信息请向下滚动
    Mechanics: <机制>
```

#### **Projectile: \<另一个抛射物的路径>**

通常，您可以在`projectiles`文件夹中定义抛射物，这样您可以在多个武器中重复使用抛射物。例如，在此配置中，`my_weapon`和`my_other_weapon`都使用`my_projectile`作为它们的抛射物。这样可以节省时间，不需要重复输入内容。

```yaml
# 这部分放在weapons文件夹中
my_weapon:
  Projectile: "my_projectile.Projectile"
  Shoot: <射击配置>
  Reload: <重新加载配置>
  <等等>

my_other_weapon:
  Projectile: "my_projectile.Projectile"
  Shoot: <射击配置>
  Reload: <重新加载配置>
  <等等>

# 这部分放在projectiles文件夹中
my_projectile:
  Projectile:
    Projectile_Settings: ...
    Sticky: ...
    <等等>
```

#### Type

抛射物看起来像哪种实体？它可以看起来像箭、雪球、火球、末影龙或任何您想要的实体类型。抛射物也可以使用`"invisible"`来隐藏（这有助于节省一些CPU性能）。使用一个[实体](https://app.gitbook.com/s/IIUkVnlH40vVBzLhWWQ8/references#entity)作为抛射物（或`"invisible"`）。

#### Projectile_Item_Or_Block

某些实体可以使用物品来提供额外的数据。`DROPPED_ITEM`必须使用它来确定要掉落的物品。`FALLING_BLOCK`必须使用它来确定要使用的方块。`ARMOR_STAND`会在头部添加任何物品。盔甲架非常有用，可以展示自定义弹药模型，比如RPG的火箭。

使用[物品序列化器](https://app.gitbook.com/s/IIUkVnlH40vVBzLhWWQ8/item-serializer)获取所有选项。

:::info
由于使用了[物品序列化器](https://app.gitbook.com/s/IIUkVnlH40vVBzLhWWQ8/item-serializer)，您可以在抛射物中使用`Custom_Model_Data`，例如：

```yaml
my_projectile:
  Projectile:
    Projectile_Settings:
      Type: DROPPED_ITEM
      Projectile_Item_Or_Block:
        Type: IRON_NUGGET
        Custom_Model_Data: 10 
```
:::

#### Gravity

定义垂直加速度。正数使抛射物随时间下落，负数使抛射物随时间上浮。数字以`方块/秒^2`为单位。原版Minecraft使用`10`。地球的重力约为`9.8`，月球的重力约为`1.62`。使用`0`将使抛射物在直线上“漂浮”。

#### Minimum

* `Speed`
  * 抛射物可以达到的最小速度。
* `Remove_Projectile`
  * 当达到最小速度时是否移除抛射物。
  * true = 当达到最小速度时，抛射物将被移除。

#### Maximum

* `Speed`:
  * 抛射物可以达到的最大速度。
* `Remove_Projectile`:
  * 当达到最大速度时是否移除抛射物。

#### Drag

拖拽允许您每个刻数将抛射物速度乘以一个数字。由于我们希望抛射物减速，因此应使用`0.0`和`1.0`之间的数字（但您可能希望将其保持在`0.9`和`1.0`之间，否则抛射物可能减速过快）。使用`1.0`将保持速度恒定，使用大于`1.0`的任何数字将导致速度增加。

* `Base`
  * 每个刻数速度乘以的数量。
* `In_Water`
  * 当抛射物在液体中时，速度乘以的数量。
* `When_Raining_Or_Snowing`
  * 当下雨或下雪时，速度乘以的数量。

:::danger
不能使用负数来进行拖拽。要减速抛射物，请使用正数\<1，例如`0.98`。要像火箭一样加速抛射物，请使用正数\>1，例如`1.03`。
:::

#### Disable_Entity_Collisions

将此设置为`true`将阻止抛射物与实体碰撞。这对于提高抛射物的CPU性能非常有用，但会禁用所有实体交互。

:::warning
使用此功能将禁用所有实体交互，包括[#sticky](./#sticky)，[#bouncy](./#bouncy)，[#through](./#through)和直接伤害。此功能可能仅适用于手雷，因为它们不需要击中实体。
:::

#### Maximum_Alive_Ticks

定义抛射物可以存在的最长时间，以刻数为单位。
默认为`600`，即`30`秒。

#### Maximum_Travel_Distance

定义抛射物可以行进的最长距离，然后会被移除。

#### Size

定义用于击中检测的抛射物大小。此大小会添加到每个方向。意味着`0.5`与大小为1x1x1相同。关于使用此功能的重要说明是，它仅适用于实体，而不适用于方块。
默认为`0.1`。例如，在原版中，箭和雪球的大小设置为`0.3`。

#### Sticky

请参考[sticky.md](sticky.md)页面获取更多信息。

#### Bouncy

请参考[bouncy.md](bouncy.md)页面获取更多信息。

#### Through

请参考[#through](./#through)页面获取更多信息。

#### Mechanics

将机制施加到抛射物的位置。在想要为手雷添加蜂鸣声时非常有用。
使用[Mechanics](https://app.gitbook.com/o/MgHAZkcfIhs3YcmBjk2r/s/hz7yMxlL81NxAT44nraH/)。