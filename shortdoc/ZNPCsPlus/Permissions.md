---
sidebar_position: 5
---

# 权限

本页面提供了与ZNPCsPlus相关的权限列表及其描述。

| 权限                      | 描述 |
| ------------------------- | ---- |
| `znpcsplus.command`       | 允许使用`/npc`命令来创建和管理NPC。 |
| `znpcsplus.updates`       | 当ZNPCsPlus有新更新时，通知玩家。 |
| `znpcsplus.npc.<npc id>`  | 如果NPC的`permission_required`属性设置为true，则允许与特定NPC进行交互。只有拥有相应权限（`znpcsplus.npc.<npc id>`）的玩家才能看到并与之交互。将`<npc id>`替换为NPC的实际ID。 |

## 权限详情

### `znpcsplus.command`

此权限允许玩家使用主`/npc`命令来创建和管理NPC。

### `znpcsplus.updates`

拥有此权限的玩家将在插件有新更新时收到通知。随时了解最新功能和改进！

### `znpcsplus.npc.<npc id>`

如果NPC的`permission_required`属性设置为true，则只有拥有此特定权限（`znpcsplus.npc.<npc id>`）的玩家才能看到并与之交互。将`<npc id>`替换为NPC的实际ID。

**示例用法：**
- 如果ID为"my_npc"的NPC的`permission_required`属性设置为true，玩家需要拥有`znpcsplus.npc.my_npc`权限才能与之交互。
