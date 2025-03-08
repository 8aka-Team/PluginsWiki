---
description: 创建粘性炸弹并让投射物粘附在墙壁/实体上
---

# 粘性

```yaml
Sticky:
  Blocks:
    Allow_Any: <真/假>
    Whitelist: <真/假>
    List:
      - <材料>
      - <等等>
  Entities:
    Allow_Any: <真/假>
    Whitelist: <真/假>
    List:
      - <实体类型>
      - <等等>
```

#### 块

* `Allow_Any`（允许任何）
  * 如果为真，则投射物可以粘附在所有块上。
  * 这将覆盖 `Whitelist`（白名单）和 `List`（列表）。
* `Whitelist`（白名单）
  * 是否将 `List` 用作白名单或黑名单。
  * `真` = 只有在 `List` 中列出的块可以被粘附。
* `List`（列表）
  * 根据 `Whitelist` 的粘附/不粘附块的材料列表。
  * 使用 [材料](https://app.gitbook.com/s/IIUkVnlH40vVBzLhWWQ8/references#material "提及") 列表获取你版本的材料。

#### 实体

* `Allow_Any`（允许任何）
  * 如果为真，则所有实体都可以粘附。
  * 这将覆盖 `Whitelist`（白名单）和 `List`（列表）。
* `Whitelist`（白名单）
  * 是否将 `List` 用作白名单或黑名单。
  * `True` = 只有在 `List` 中列出的实体可以被粘附。
* `List`（列表）
  * 根据 `Whitelist` 的粘附/不粘附实体的列表。
  * 使用 [实体](https://app.gitbook.com/s/IIUkVnlH40vVBzLhWWQ8/references#entity "提及") 列表获取你版本的实体。
