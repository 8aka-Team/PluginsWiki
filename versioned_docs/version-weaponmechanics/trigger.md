---
sidebar_position: 3
---

# 触发器

```yaml
Trigger:
  Main_Hand: <触发类型>
  Off_Hand: <触发类型>
  Dual_Wield:
    Main_Hand: <触发类型>
    Off_Hand: <触发类型>
  Circumstance:
    Reloading: <拒绝/必需>
    Zooming: <拒绝/必需>
    Sneaking: <拒绝/必需>
    Standing: <拒绝/必需>
    Walking: <拒绝/必需>
    Riding: <拒绝/必需>
    Sprinting: <拒绝/必需>
    Dual_Wielding: <拒绝/必需>
    Swimming: <拒绝/必需>
    In_Midair: <拒绝/必需>
    Gliding: <拒绝/必需>
    Ammo_Empty: <拒绝/必需>
    Deny_Mechanics: <机制>
```

对于 `触发类型`，你有以下选项：
* `start_sneak`（开始潜行）
* `end_sneak`（结束潜行）
* `double_sneak`（双重潜行）
* `start_sprint`（开始冲刺）
* `end_sprint`（结束冲刺）
* `right_click`（右键点击）
* `left_click`（左键点击）
* `drop_item`（丢弃物品）
* `jump`（跳跃）
* `double_jump`（双重跳跃）
* `start_swim`（开始游泳）
* `end_swim`（结束游泳）
* `start_glide`（开始滑翔）
* `end_glide`（结束滑翔）
* `swap_hands`（交换手）
* `start_walk`（开始行走）
* `end_walk`（结束行走）
* `start_in_midair`（开始空中）
* `end_in_midair`（结束空中）
* `start_stand`（开始站立）
* `end_stand`（结束站立）

#### 主手

当武器在主手中持有时使用的触发器。

#### 副手

当武器在副手中持有时使用的触发器。

#### 双持

当双持武器时，你可能想要更改触发器。例如，你可能想将瞄准触发器从 `left_click`（左键点击）更改为 `start_sneak`（开始潜行）。
* `Main_Hand`（主手） -> 主手的双持触发器。
* `Off_Hand`（副手） -> 副手的双持触发器。

#### 情况

允许你拒绝或强制某些动作以使触发器工作。例如，你可以拒绝在冲刺时射击或在双持时瞄准。
对于以下选项，使用：
1. `DENY`（拒绝）以防止触发器在此条件下工作。
2. `REQUIRED`（必需）以强制实体在触发器工作之前使用此条件。
3. 删除配置行以允许该动作。
* `Reloading`（重新装填） -> 如果射手正在重新装填武器。
* `Zooming`（瞄准） -> 如果射手当前正在瞄准。
* `Sneaking`（潜行） -> 如果射手正在按住 Shift。
* `Standing`（站立） -> 如果射手没有移动。
* `Walking`（行走） -> 如果射手正在行走。
* `Riding`（骑乘） -> 如果射手正在骑乘坐骑。
* `Sprinting`（冲刺） -> 如果射手正在冲刺。
* `Dual_Wielding`（双持） -> 如果射手正在使用两把武器。
* `Swimming`（游泳） -> 如果射手当前在水下或正在快速游泳。
* `In_Midair`（空中） -> 如果射手不在地面上。
* `Gliding`（滑翔） -> 如果射手正在使用鞘翅滑翔。
* `Ammo_Empty`（弹药为空） -> 如果持有的武器为空。

#### 拒绝机制

当触发器被拒绝时播放的机制。通常，这是一个声音提示（如愤怒的村民）或一个动作条，提醒用户他们无法执行该动作。使用 [机制](https://app.gitbook.com/o/MgHAZkcfIhs3YcmBjk2r/s/hz7yMxlL81NxAT44nraH/ "提及") 维基。
* `@Source{}` -> 尝试使用触发器的玩家。
* `<deny_reason>` -> 哪个“动作”导致了拒绝。
  * 这将是 [#情况](trigger.md#circumstance "提及") 中的一个选项，但小写。
  * 例如，`Dual_Wielding`（双持） -> `dual wielding`（双持）。

## 示例

```yaml
  Scope:
    Trigger:
      Main_Hand: "LEFT_CLICK"（左键点击）
      Off_Hand: "LEFT_CLICK"（左键点击）
      Circumstance:
        Dual_Wielding: "DENY"（拒绝）
        Deny_Mechanics:
          - "ActionBar{message=<red><i>你不能在 <deny_reason> 时瞄准！}"
```

这个例子来自于`50_GS`，它允许玩家通过拳击来使用手枪进行瞄准。如果玩家手里拿着两把武器，他们将无法进行瞄准。