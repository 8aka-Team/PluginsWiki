---
description: 投射物穿透墙壁以“墙击”杀死实体
---

# 穿透

```yaml
Through:
  Maximum_Through_Amount: <数量>
  Blocks:
    Allow_Any: <真/假>
    Default_Speed_Multiplier: <乘数>
    Whitelist: <真/假>
    List:
      - <材料>
      - <材料> <速度乘数>
      - <等等>
  Entities:
    Allow_Any: <真/假>
    Default_Speed_Multiplier: <乘数>
    Whitelist: <真/假>
    List:
      - <实体类型>
      - <实体类型> <速度乘数>
      - <等等>
```

#### 最大穿透数量

此投射物可以穿透实体和方块的最大数量。\
默认为 `1`。将值设置为 `-1` 意味着无限。

#### 方块

* `Allow_Any`（允许任何）
  * 如果为真，则所有方块都是有效的。
  * 这将覆盖 `Whitelist`（白名单）和 `List`（列表）。
* `Default_Speed_Multiplier`（默认速度乘数）
  * 用于乘以投射物速度的数字。
  * 这是默认速度乘数，意味着如果以下列表不包含关于击中方块的特定速度信息，则默认为此值。
* `Whitelist`（白名单）
  * 是否将 `List` 用作白名单或黑名单。
  * `True` = 只有在 `List` 中列出的方块可以穿透。
* `List`（列表）
  * 根据 `Whitelist` 的有效方块材料列表。
  * 使用 [材料](https://app.gitbook.com/s/IIUkVnlH40vVBzLhWWQ8/references#material "提及") 列表以适应你的版本。
  * 第二个参数是 `速度乘数`，它将投射物的当前速度与其值相乘。

#### 实体

* `Allow_Any`（允许任何）:
  * 如果为真，则所有实体都是有效的。
  * 这将覆盖 `Whitelist`（白名单）和 `List`（列表）。
* `Default_Speed_Multiplier`（默认速度乘数）
  * 用于乘以投射物速度的数字。
  * 这是默认速度乘数，意味着如果以下列表不包含关于击中实体的特定速度信息，则默认为此值。
* `Whitelist`（白名单）
  * 是否将 `List` 用作白名单或黑名单。
  * `True` = 只有在 `List` 中列出的实体可以穿透。
* `List`（列表）
  * 根据 `Whitelist` 的有效实体列表。
  * 使用 [实体](https://app.gitbook.com/s/IIUkVnlH40vVBzLhWWQ8/references#entity "提及") 列表以适应你的版本。
  * 第二个参数是 `速度乘数`，它将投射物的当前速度与其值相乘。
