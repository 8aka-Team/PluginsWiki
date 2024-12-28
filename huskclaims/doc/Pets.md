---
sidebar_position: 9
---

# 宠物

HuskClaims 提供了一个简单的驯服动物（“宠物”）保护和转移系统。该系统默认启用，可以通过编辑配置文件中的 `pets` 部分来切换：

<details>
<summary>Pets &mdash; config.yml</summary>

```yaml
# 设置用于保护驯服动物（宠物）。文档：https://william278.net/docs/huskclaims/pets
pets:
  # 是否启用保护驯服动物，使其只能被主人伤害/使用
  enabled: true
```
</details>

禁用宠物功能也会禁用 `/transferpet` 命令。

## 保护宠物
当宠物被驯服后，它们会自动受到保护，免受其他玩家的伤害。

## 转移宠物
> **注意：** 宠物的接收者必须曾经在宠物所在的服务器上玩过。

你可以通过直接看着宠物并使用 `/transferpet <用户名>` 命令将宠物的所有权转移给另一个玩家。这将允许新主人像自己驯服宠物一样与它互动。

管理员可以通过 `huskclaims.command.transferpet.other` 权限转移其他玩家驯服的动物。