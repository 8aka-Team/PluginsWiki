---
sidebar_position: 3
---

# 转换

您可以将其他插件的NPC数据导入到ZNPCsPlus中。

## 可用的转换

### ZNPCs:

```markdown
/npc storage import znpcs
```
将ZNPCs插件中的NPC导入到ZNPCsPlus中。  
数据从`plugins/ServersNPC/data.json`导入。

### ZNPCsPlus 旧版:

```markdown
/npc storage import znpcsplus_legacy
```
将旧版（1.0.8及以下版本）ZNPCsPlus中的NPC导入到当前版本中。  
数据从`plugins/ZNPCsPlusLegacy/data.json`导入。

**注意：数据应该已经自动导入；仅在数据因某些原因未导入时使用此命令。**

### Citizens:

```markdown
/npc storage import citizens
```
将Citizens插件中的NPC导入到ZNPCsPlus中。  
数据从`plugins/Citizens/saves.yml`导入。

## 请求

如果您希望支持从其他NPC插件转换NPC数据，请在我们的[Discord社区](https://discord.gg/MAZz6XpPcg)中告知我们。我们重视您的反馈，并愿意根据用户请求扩展转换选项。
