---
sidebar_position: 8
---

# PAPI

该插件有一个内部的占位符系统。

这些占位符可以用于阶段描述信息、大多数游戏内信息、任务描述等。  
大多数占位符是上下文相关的：这意味着例如阶段占位符仅在阶段描述的上下文中可用（显示在记分板、GUI等中）。

:::warning

> 此列表尚未详尽

:::

***

# 任务占位符
* `quest`: 任务的名称和ID，格式为 `name (#id)`
* `quest_name`
* `quest_id`
* `quest_description`: 任务的描述，如果未定义则为空

# NPC占位符
* `npc_name`
* `npc_id`

# 阶段占位符
## _阶段间共享_
* _所有任务占位符_
* `stage_type`
* `stage_rewards`: 阶段的奖励数量
* `stage_requirements`: 阶段的要求数量

## _实体阶段间共享_
* _所有阶段占位符_
* `mobs`: 关于实体的预格式化信息，遵循 `config.yml` 中的 `stage description.item formats` 部分
* `mobs_remaining`: 剩余需要处理的实体数量
* `mobs_done`: 已经处理的实体数量
* `mobs_total`: 需要处理的总实体数量
* `mobs_percentage`: 已处理实体占总实体的百分比
* `mobs_name`: 实体的名称

## _具有多个 `<object_type>` 的阶段间共享_
* _所有阶段占位符_
* `<object_type>`, `<object_type>_remaining|done|total|percentage|name`: 关于对象的信息，参见“实体阶段”
* `<object_type>_<id>_remaining|done|total|percentage|name`: 关于第 `id` 个对象的信息，参见“实体阶段”

## “繁殖动物”阶段
* _所有实体阶段占位符_

## “将物品带给NPC”阶段
* _所有“与NPC对话”阶段占位符_
* `items`: 格式化后的物品列表，遵循 `config.yml` 中的 `stage description` 部分

## “填充桶”阶段
* _所有阶段占位符_
* `bucket_type`: 要填充的桶的名称
* `buckets`, `buckets_remaining|done|total|percentage|name`: 关于桶的信息，参见“实体阶段”

## “在聊天中写入”阶段
* _所有阶段占位符_
* `text`: 要在聊天中写入的文本

## “制作物品”阶段
* _所有阶段占位符_
* `items`, `items_remaining|done|total|percentage|name`: 关于要制作的物品的信息，参见“实体阶段”

## “造成伤害”阶段
* _所有阶段占位符_
* `damage_remaining|done|total|percentage`: 关于伤害的信息，参见“实体阶段”
* `target_mobs`: 适用于此阶段的实体列表

## “杀死实体”阶段
* _所有[具有多个 `mobs` 的阶段](#shared-between-stages-with-multiple-object_type) 占位符_

<!--- 待继续 --->

## “与NPC对话”阶段
* _所有阶段占位符_
* _所有NPC占位符_
* `dialog_npc_name`: NPC的名称。可以是NPC的真实名称，或者在对话编辑器中设置的自定义名称。