---
description: 武器如何发射弹药
sidebar_position: 2
---

# 射击

:::danger
所有武器都需要 `Shoot:` 模块
:::

:::info
`Shoot:` 可能会引起误解；武器**不一定**需要发射弹药。相反，你可以创建消耗品。
请查看下面的消耗品示例：

<details>

<summary>消耗品示例</summary>

这个“武器”不会发射弹药。相反，当使用时它会删除自身并治疗玩家！

```yaml
Stim:
  Info:
    Weapon_Item:
      Type: "LIGHTNING_ROD"
      Name: "<gold>Stim"
      Lore:
        - "<gray>军用兴奋剂，可止血治疗战斗伤口。"
        - ""
        - "<gray>武器统计数据"
        - "<gold>➣ &c♥♥♥♥♥♥♥♥ <gold>⟸ <gray>治疗"
      Unbreakable: true
      Hide_Flags: true
      Deny_Use_In_Crafting: true
    Weapon_Get_Mechanics:
      - "Sound{sound=ITEM_ARMOR_EQUIP_CHAIN, pitch=0.75}"
    Cancel:
      Block_Interactions: true
      Item_Interactions: true
  Skin:
    Default:
      Type: FEATHER
      Custom_Model_Data: -1  # 负数在这里是可以的！
  Shoot:
    Trigger:
      Main_Hand: "RIGHT_CLICK"
      Off_Hand: "RIGHT_CLICK"
      Circumstance:
        Swimming: "DENY"
    Consume_Item_On_Shoot: true
    Delay_Between_Shots: 20
    Mechanics:
      - "Sound{sound=ENTITY_GENERIC_DRINK, noise=0.1}"
      - "Potion{potion=HEAL, level=3}"
```

</details>
:::

```yaml
  Shoot:
    Trigger: <触发器>
    Projectile_Speed: <速度>
    Projectiles_Per_Shot: <数量>
    Selective_Fire:
      Trigger: <触发器>
      Default: <单发/连发/全自动>
      Mechanics: <机制>
    Delay_Between_Shots: <刻数>
    Fully_Automatic_Shots_Per_Second: <数量>
    Burst:
      Shots_Per_Burst: <数量>
      Ticks_Between_Each_Shot: <刻数>
    Consume_Item_On_Shoot: <是/否>
    Destroy_When_Empty: <是/否>
    Ammo_Per_Shot: <数量>
    Reset_Fall_Distance: <是/否>
    Spread:  # 更多信息请往下滚动
    Recoil:  # 更多信息请往下滚动
    Mechanics: <机制>
    Attract_Mobs:  # 更多信息请往下滚动，WMP 特性
    Offsets:
      Right_Hand: <向量>
      Left_Hand: <向量>
      Scope:
        Right_Hand: <向量>
        Left_Hand: <向量>
      Vive:
        Right_Hand: <向量>
        Left_Hand: <向量>
```

#### 触发器

射击武器时使用的[触发器.md](../../trigger.md "mention")。

:::danger
由于Minecraft的限制，使用 `left_click` 来射击无效。请使用 `right_click`。&#x20;
:::

#### 弹药速度

以 m/s 为单位，发射弹药的速度。一个逼真的数值大约为 `1000`，但我们推荐使用大约 `100`。

:::danger
由于Minecraft的限制，速度超过 `80.0` 的弹药看起来会“偏离”中心。对于速度超过 `80.0` 的弹药，你应该使用隐形弹药和
WeaponMechanicsCosmetics 来使用轨迹来显示弹药。
:::

#### 每次射击的弹药数量

每次射击发射的弹药数量。这主要用于霰弹枪。

#### 选择射击模式

选择射击模式允许玩家在单发、连发和全自动之间切换。

* `Trigger` -> 用于切换射击模式的[触发器.md](../../trigger.md "mention")。
* `Default` -> 可以是 `SINGLE`、`BURST` 或 `AUTO`。
* `Mechanics` -> 切换射击模式时触发的机制。
    * `@Source{}` -> 持有武器的实体。

#### 射击间隔

每次射击之间的时间间隔（对于 `SINGLE`）。

#### 每秒全自动射击次数

将武器设置为全自动武器。建议使用 `[1, 20]` 的值。大于 `20` 的数字将导致在同一刻发射多个弹药。由于每秒只有 20
个服务器刻度，因此并非每个射击频率都是完美的。你**不应该**能够听到 `<50` 毫秒的波动，但以下是我们的评分标准：

`完美`：没有任何波动。\

`良好`：波动均匀。

| 射击频率 | RPM  | 评分 |
|------|------|:--:|
| 1    | 60   | 完美 |
| 2    | 120  | 完美 |
| 3    | 180  |    |
| 4    | 240  | 完美 |
| 5    | 300  | 完美 |
| 6    | 360  |    |
| 7    | 420  |    |
| 8    | 480  |    |
| 9    | 540  |    |
| 10   | 600  | 完美 |
| 11   | 660  |    |
| 12   | 720  |    |
| 13   | 780  |    |
| 14   | 840  |    |
| 15   | 900  | 良好 |
| 16   | 960  | 良好 |
| 17   | 1020 |    |
| 18   | 1080 | 良好 |
| 19   | 1140 | 良好 |
| 20   | 120  |    |