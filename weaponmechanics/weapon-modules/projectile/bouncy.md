---
description: 让投射物可以在方块和实体上反弹和反射
---

# 弹跳

```yaml
Bouncy:
  Maximum_Bounce_Amount: <amount>
  Blocks:
    Allow_Any: <true/false>
    Default_Speed_Multiplier: <multiplier>
    Whitelist: <true/false>
    List:
      - <Material>
      - <Material> <speed multiplier>
      - <etc.>
  Entities:
    Allow_Any: <true/false>
    Default_Speed_Multiplier: <multiplier>
    Whitelist: <true/false>
    List:
      - <EntityType>
      - <EntityType> <speed multiplier>
      - <etc.>
  Rolling:
    Required_Motion_To_Start_Rolling: <speed>
    Blocks:
      Allow_Any: <true/false>
      Default_Speed_Multiplier: <multiplier>
      Whitelist: <true/false>
      List:
        - <Material>
        - <Material> <speed multiplier>
        - <etc.>
```

#### 最大反弹次数

此投射物可以从实体和方块反弹的最大次数。\
默认为 `1`。将值设置为 `-1` 意味着无限。

**`方块`:**

* `Allow_Any`（允许任何）
  * 如果为真，则所有方块都是有效的。
  * 这会覆盖 `Whitelist`（白名单）和 `List`（列表）。
* `Default_Speed_Multiplier`（默认速度乘数）
  * 用于乘以投射物速度的数字。
  * 这是默认速度乘数，意味着如果以下列表没有关于击中方块的特定速度信息，则默认为此值。
* `Whitelist`（白名单）
  * 是否使用 `List` 作为白名单或黑名单。
  * `True` = 只有在 `List` 中列出的方块可以反弹。
* `List`（列表）
  * 根据 `Whitelist` 的可反弹方块的材料列表。
  * 使用 [材料](https://app.gitbook.com/s/IIUkVnlH40vVBzLhWWQ8/references#material "提及") 列表以适应你的版本。
  * 第二个参数是 `速度乘数`，用于将投射物的当前速度与其值相乘。

#### 实体

* `Allow_Any`（允许任何）
  * 如果为真，则所有实体都是有效的。
  * 这会覆盖 `Whitelist` 和 `List`。
* `Default_Speed_Multiplier`（默认速度乘数）
  * 用于乘以投射物速度的数字。
  * 这是默认速度乘数，意味着如果以下列表没有关于击中实体的特定速度信息，则默认为此值。
* `Whitelist`（白名单）
  * 是否使用 `List` 作为白名单或黑名单。
  * `True` = 只有在 `List` 中列出的实体可以反弹。
* `List`（列表）
  * 根据 `Whitelist` 的可反弹实体的列表。
  * 使用 [实体](https://app.gitbook.com/s/IIUkVnlH40vVBzLhWWQ8/references#entity "提及") 列表以适应你的版本。
  * 第二个参数是 `速度乘数`，用于将投射物的当前速度与其值相乘。

#### 滚动

这对于手榴弹等是有用的。首先，你希望它们能在墙壁上反弹，当运动减小到足够低时，它们将开始在地面上滚动。当投射物的运动减小到接近 `0` 时，它会自动粘附在下面的当前方块上。

* `Required_Motion_To_Start_Rolling`（开始滚动所需运动）
  * 定义开始滚动所需的运动。
  * 当投射物的速度低于此值时，它将开始滚动而不是反弹。
* `Blocks`（方块）
  * 与上述 `Blocks` 配置相同，但用于滚动，速度乘数基于投射物下方的方块。
