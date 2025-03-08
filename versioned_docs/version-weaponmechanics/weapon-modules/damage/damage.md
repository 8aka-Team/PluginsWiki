---
sidebar_position: 7
---

# 伤害

```yaml
Damage:
  Base_Damage: <数量>
  Base_Explosion_Damage: <数量>
  Fire_Ticks: <滴数>
  Enable_Owner_Immunity: <真/假>
  Ignore_Teams: <真/假>
  Armor_Damage: <整数>
  Mechanics: <机制>
  Head:
    Bonus_Damage: <数量>
    Mechanics: <机制>
  Body:
    Bonus_Damage: <数量>
    Mechanics: <机制>
  Arms:
    Bonus_Damage: <数量>
    Mechanics: <机制>
  Legs:
    Bonus_Damage: <数量>
    Mechanics: <机制>
  Feet:
    Bonus_Damage: <数量>
    Mechanics: <机制>
  Backstab:
    Bonus_Damage: <数量>
    Mechanics: <机制>
  Critical_Hit:
    Chance: <1-100>
    Bonus_Damage: <数量>
    Mechanics: <机制>
  Kill:
    Mechanics: <机制>
  Damage_Modifiers: <伤害修正> # 更多信息见下文
  Explosion:
    Damage_Modifiers: <伤害修正> # 更多信息见下文
  Dropoff:
  - <飞行距离> <伤害数量>
```

伤害通过求和基础伤害来计算，然后应用所有 [#伤害修正](./#damage-modifiers "提及")。

#### 基础伤害

在应用任何伤害修正之前的伤害数量。

#### 基础爆炸伤害

爆炸中心造成的伤害数量。

#### 火焰滴数

将受损实体点燃设定的时间（以滴数为单位）。例如，`Fire_Ticks: 100` 将使实体在 5 秒内着火，如果该武器的投射物或爆炸击中它。

#### 启用拥有者免疫

使用 `true` 以防止射手因其射击而受到伤害。这使得射手对其自身的爆炸免疫。

#### 忽略团队

默认情况下，枪械会尊重防止伤害的团队（团队由 Minecraft 使用 `/team` 命令添加）。使用 `Ignore_Teams: true` 以启用友军伤害。

#### 装甲伤害

定义对受害者装甲施加多少伤害。你可能希望这个数字很小，比如 `1` 或 `2`。

#### 机制

在对实体造成伤害时触发的机制。使用 [机制](https://app.gitbook.com/o/MgHAZkcfIhs3YcmBjk2r/s/hz7yMxlL81NxAT44nraH/ "提及") 维基。

* `@Source{}` -> 射手。
* `@Target{}` -> 正在受伤的实体（受害者）。

#### 头部

* `Bonus_Damage` -> 定义头部射击造成的额外伤害。
* `Mechanics` -> 头部射击后触发的机制。
  * `@Source{}` -> 射手。
  * `@Target{}` -> 被射中头部的实体。

#### 身体

* `Bonus_Damage` -> 定义身体射击造成的额外伤害。
* `Mechanics` -> 身体射击后触发的机制。
  * `@Source{}` -> 射手。
  * `@Target{}` -> 被射中胸部的实体。

#### 腿部

* `Bonus_Damage` -> 定义腿部射击造成的额外伤害。
* `Mechanics` -> 腿部射击后触发的机制。
  * `@Source{}` -> 射手。
  * `@Target{}` -> 被射中腿部的实体。

#### 脚部

* `Bonus_Damage` -> 定义脚部射击造成的额外伤害。
* `Mechanics` -> 脚部射击后触发的机制。
  * `@Source{}` -> 射手。
  * `@Target{}` -> 被射中脚部的实体。

#### 背刺

背刺发生在伤害来源来自后方时（在受害者后方的 $180^\{\circ\}$ 区域）。

* `Bonus_Damage` -> 定义背刺造成的额外伤害。
* `Mechanics` -> 背刺后触发的机制。
  * `@Source{}` -> 射手。
  * `@Target{}` -> 被背刺的实体。

#### 暴击

* `Chance` -> 暴击的几率。使用 `100` 表示 100% 的几率。
* `Bonus_Damage` -> 定义暴击造成的额外伤害。
* `Mechanics` -> 暴击后触发的机制。
  * `@Source{}` -> 射手。
  * `@Target{}` -> 被暴击的实体。

#### 杀死

* `Mechanics` -> 杀死后触发的机制。
  * `@Source{}` -> 射手。
  * `@Target{}` -> 被射中的实体。

#### 伤害修正

[#伤害修正](./#damage_modifiers "提及") 用于覆盖基础伤害修正（在 `config.yml` 中定义）。

#### 爆炸.伤害修正

[#伤害修正](./#damage_modifiers "提及") 用于覆盖基础伤害修正，但适用于爆炸（在 `config.yml` 中定义）。

#### 下降

定义投射物飞行距离将如何增加或减少伤害。

* `飞行距离`
  * 投射物必须飞行多远才能激活此下降？
  * 如果投射物已经飞行了 `9` 块，而此列表只有 `10 -3`，则伤害不会减少 `3`，因为没有达到 `10` 块。
  * 如果你想要“平滑”的下降，请参见 [#100](https://github.com/WeaponMechanics/MechanicsMain/issues/100)。
* `伤害数量`
  * 增加（`+`）或减少（`-`）伤害的数量。
  * 这个数字应该 _总是_ 是负数，因为你希望投射物造成更少的伤害。
