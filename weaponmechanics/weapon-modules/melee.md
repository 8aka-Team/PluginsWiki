---
description: 为你的枪添加刺刀，或创建像棒球棒这样的近战武器
sidebar_position: 9
---

# 近战

```yaml
  Melee:
    Enable_Melee: <真/假>
    Melee_Attachment: <近战武器名称>
    Melee_Range: <最大近战范围>
    Melee_Hit_Delay: <刻>
    Melee_Miss:
      Mechanics: <机制>
      Melee_Miss_Delay: <刻>
      Consume_On_Miss: <真/假>
```

#### Enable\_Melee

如果该武器是近战武器，如刀、棒球棒或光剑，请使用 `true`。否则，请使用 `Melee_Attachment` 选项（用于刺刀）。

#### Melee\_Attachment

为该武器提供一个不可拆卸的刺刀。例如，如果你有一个名为 `Tactical_Knife`（战术刀）的近战武器，则使用：

```yaml
  Melee:
    Melee_Attachment: Tactical_Knife
```

你的武器将“_继承_”刀的近战属性。

#### Melee\_Range

近战可以从多远处击中敌人。为了获得最佳效果，我建议完全删除此选项，这样将使用Minecraft内置的近战系统。

#### Melee\_Hit\_Delay

造成伤害的击打之间的时间（以刻为单位，20刻 = 1秒）。

#### Melee\_Miss

* `Mechanics`
  * 当你未击中时触发的机制。
  * 使用 [机制](https://app.gitbook.com/o/MgHAZkcfIhs3YcmBjk2r/s/hz7yMxlL81NxAT44nraH/ "提及") 维基。
  * 要在击中时触发机制，请使用 [#mechanics](damage/#mechanics "提及") 中的伤害。
* `Melee_Miss_Delay`
  * 你可以再次击打之前的时间（以刻为单位）。
* `Consume_On_Miss`
  * 当设置为 `true` 时，消耗弹药（如果配置）、耐久度（如果配置）等。
