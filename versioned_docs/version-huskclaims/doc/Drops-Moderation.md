---
sidebar_position: 7
---

# 掉落物管理

HuskClaims 提供了一个管理功能，用于保护玩家死亡时掉落的物品不被其他用户拾取。用户可以使用 `/unlockdrops` 来解锁他们的掉落物（例如，允许朋友拾取）。该系统可以在 `config.yml` 的 `moderation.drops` 部分进行配置：

<details>
<summary>掉落物管理 &mdash; config.yml</summary>

```yaml
  drops:
    # 是否锁定玩家死亡时掉落的物品，防止被其他人拾取
    lock_items: true
    # 是否也防止死亡掉落物被熔岩、火焰、仙人掌等破坏
    prevent_destruction: false
```
</details>

## 锁定掉落物
当用户死亡时，物品将被标记为“锁定”状态 —— 只有掉落这些物品的玩家才能拾取它们。请注意，它们仍然可能被伤害源（如熔岩、火焰、仙人掌等）移除 —— 除非启用了防止破坏功能 —— 并且仍然可能消失。

### 解锁掉落物
用户可以使用 `/unlockdrops` 来解锁掉落物。拥有 `huskclaims.command.unlockdrops.other` 权限的管理员可以使用 `/unlockdrops [用户名]` 来解锁其他用户的掉落物。

## 防止破坏
你可以通过启用 `prevent_destruction` 来防止死亡掉落物被伤害源（如火焰、熔岩等）破坏。默认情况下，此功能是禁用的，因为它与原始游戏机制有些冲突。如果物品掉入虚空或被其他插件移除，它们仍然会被移除。