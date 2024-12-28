---
sidebar_position: 6
---

# 升级

## 生成器资源数量升级
这是它在你的 `shop.yml` 文件中的样子：

```yaml
- price: 1
  price-type: bronze
  upgrade:
    entities:
    - type: spawner
      spawner-type: bronze
      add-levels: 0.2
      max-level: 2
      shop-name: "Bronze upgrade of the team %team%"
      notify-team: true
  stack:
    type: diamond_block
    amount: 1
    display-name: "Bronze upgrade of the team %team%"
```

让我们深入了解一下。

* 你**必须**定义变量 `upgrade`、`entities` 和 `type: spawner`。如果缺少其中任何一个，升级将无法工作。
* 我们有这些生成器模式：`spawner-name`、`spawner-type` 和 `team-upgrade`
* `add-levels` 参数定义了我们将要增加的等级。（生成器的默认起始等级为1）
* `max-level` 定义了你可以升级到的最大等级。（默认没有限制）
* `shop-name` 在你购买升级后显示。仅此而已。
* `notify-team` 如果为 true，信息将发送给团队的所有玩家。

### 模式

* `spawner-name`：你需要在 `arena.yml` 文件中或在创建竞技场时定义生成器名称（`/bw admin arenaName spawner add <spawnerType> <holoEnabled> <startLevel (default: 1)> <customName> <team>`）。
* `spawner-type` 和 `team-upgrade`：你需要为生成器定义团队。