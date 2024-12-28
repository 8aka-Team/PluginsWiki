---
sidebar_position: 8
---

# 领地方块

领地方块（■）是HuskClaims提供的一种特殊货币，用于限制玩家可以领地的数量。玩家在服务器上每玩一小时就会积累领地方块，并且可以通过`/buyclaimblocks`命令额外购买（如果启用了Vault挂钩并且安装了经济插件）。玩家可以使用`/claimblocks`命令查看他们的领地方块余额。

当用户创建领地时，与领地横向矩形表面积相等的领地方块将从玩家的余额中扣除。移除领地将退还玩家用于创建领地的领地方块；调整领地大小将根据调整后领地的表面积变化，退还或向用户收取额外的领地方块。如果玩家没有足够的领地方块，他们将无法创建或调整领地。

子领地和管理员领地创建时不消耗领地方块。

## 领地方块积累
默认情况下，玩家在服务器上每玩一小时会积累100个领地方块。这可以在配置文件中更改：

<details>
<summary>每小时领地方块 (config.yml)</summary>

```yaml
# 用户每小时获得的领地方块数量。
# 使用 "huskclaims.hourly_blocks.(amount)" 权限覆盖
hourly_claim_blocks: 100
```
</details>

此外，可以通过向用户/组授予`huskclaims.hourly_blocks.(amount)`权限节点来覆盖此值，其中`(amount)`是每小时授予该用户的领地方块数量。请注意，此权限节点不会叠加；将采用最高有效权限的值。在使用跨服务器模式运行HuskClaims的服务器上，领地方块将全局同步。

## 购买领地方块
如果启用了Vault（“经济”）挂钩，并且安装了经济插件，玩家可以使用`/buyclaimblocks (amount)`命令购买领地方块。购买领地方块的成本可以在配置文件中配置，默认情况下为`1.0`单位货币：

<details>
<summary>经济挂钩 (config.yml)</summary>

```yaml
economy:
  # 是否挂钩经济插件以允许购买领地方块
  enabled: true
  # 购买1个领地方块的成本
  cost_per_block: 1.0
```
</details>

## 调整领地方块
管理员可以使用`/claimblocks (player) add|remove|set (amount)`命令调整玩家的领地方块余额。此命令还可以通过服务器自动化执行，以促进自动化。

此外，管理员可以使用`/huskclaims logs (player)`命令查看用户领地方块余额的交易日志。有关必要权限的详细信息，请参阅[[Commands]]参考。

## 赠送领地方块
玩家可以使用`/claimblocks (player) gift (amount)`命令从他们的余额中向他人赠送领地方块。默认情况下，此命令仅对操作员可用，并且可以通过授予`huskclaims.command.claimblocks.gift`权限来允许用户使用。
