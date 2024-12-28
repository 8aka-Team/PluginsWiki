---
sidebar_position: 5
---

# 操作组

HuskClaims支持在领地内切换操作组，以确定插件是否应阻止某些操作在领地内发生。

## 切换操作组
操作组可以在插件[[config]]中配置，并由在领地内拥有`MANAGE_OPERATION_GROUPS`[[trust]]权限的任何用户管理。实际上，操作组提供了一种让玩家微调领地标志设置的方式。

默认情况下，HuskClaims提供了`Claim Explosions`操作组，让您可以切换是否允许在领地内发生爆炸伤害。

| 操作组          | 切换命令          | 描述                                                                                            | 默认值 |
|-----------------|-------------------|------------------------------------------------------------------------------------------------|:------:|
| `Claim Explosions` | `/claimexplosions` | 切换是否允许在领地内发生爆炸方块伤害。包括方块和生物的爆炸。                                     |    ❌    |

## 自定义操作组
操作组可以在插件配置中自定义，如下所示：

<details>
<summary>操作组 (config.yml)</summary>

```yaml
# 可以在领地内切换的操作组
operation_groups:
- name: Claim Explosions
  description: 切换是否允许爆炸在领地内破坏地形
  toggle_command_aliases:
  - claimexplosions
  allowed_operations:
  - EXPLOSION_DAMAGE_TERRAIN
  - MONSTER_DAMAGE_TERRAIN
```
</details>

操作组是否在领地内默认启用，取决于该组的`allowed_operations`是否也存在于配置中的`default_flags`列表中。

## 细粒度标志管理
> **注意：** 这是一个强大的命令，默认情况下仅对操作员开放。授予玩家访问此命令时要小心！

`/claimflags`命令允许您在领地内微调允许的操作组设置。这是一个强大的命令，如果用户不小心弄错了标志，可能会导致混淆。因此，我们建议为最终用户需求创建操作组命令，并将此命令限制为管理员操作。

使用`/claimflags list`来列出您所在领地内启用的操作类型。此命令要求用户在所在领地内拥有`MANAGE_OPERATION_GROUPS`权限，或拥有`huskclaims.command.claimflags.other`绕过权限。

点击列出的标志以切换其允许状态，或使用`/claimflags set [operation_type] <true/false>`。

### 在领地外调整标志

您还可以通过站在领地外使用`/claimflags`来调整标志的值（“荒野”）。这需要`huskclaims.command.claimflags.world`权限。