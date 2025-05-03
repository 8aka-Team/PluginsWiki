---
description: >-
  栓绳标志是生物成为宠物需要满足的条件。
---

# 栓绳标志 / 需求条件

所有栓绳标志可以相互组合使用，但部分标志仅适用于特定生物类型，有些需要其他插件支持，  
且根据在[pet-config.yml](../setup/configurations/pet-config.yml.md)中的书写顺序，某些标志会覆盖其他标志。

* `Impossible`（不可驯服）
  * 若设置此条件，将忽略所有其他栓绳标志，该生物类型无法成为宠物
* `LowHP`（低血量）
  * 带有此标志的生物需生命值低于最大生命值的10%
* `Baby`（幼年体）
  * 带有此标志的生物需为幼年状态
* `Adult`（成年体）
  * 带有此标志的生物需为成年状态
* `Tamed`（已驯服）
  * 带有此标志的生物需已被驯服
  * 仅适用于可驯服动物
* `UserCreated`（玩家创造）
  * 带有此标志的生物需由玩家建造
  * 仅适用于铁傀儡
* `Wild`（野生状态）
  * 带有此标志的生物需处于野生状态
  * 仅适用于狼、豹猫和铁傀儡
* `CanBreed`（可繁殖状态）
  * 带有此标志的生物需处于可繁殖状态
  * 仅适用于可繁殖动物
* `Angry`（愤怒状态）
  * 带有此标志的生物需处于愤怒状态
  * 仅适用于狼
* `World`（世界限定）
  * `World:<世界名称>:...`
  * 示例：
    * `World:default`
    * `World:default:nether`
* `Size`（体型限定）
  * 仅适用于史莱姆和岩浆怪
  * `Size:min=<最小尺寸>:max=<最大尺寸>`
    * `min`为可选参数
    * `max`为可选参数
  * `Size:<精确尺寸>`
  * 示例：
    * `Size:min=2`
    * `Size:min=2:max=4`
    * `Size:max=2`
    * `Size:3`
* `BelowHP`（血量阈值）
  * 检查生物生命值是否低于指定阈值
  * `BelowHP:<生命值>[%]`
    * `%`为可选符号
  * 示例：
    * `BelowHP:2`
    * `BelowHP:2.5`
    * `BelowHP:10%`
* `Chance`（概率触发）
  * 为驯服过程添加随机因素
  * `Chance:<概率值>`
    * `<概率值>`为百分比数值（%）
  * 示例：
    * `Chance:2`
    * `Chance:50`
* `mcMMO`（技能等级）
  * 检查玩家是否拥有指定等级的mcMMO技能
  * `mcMMO:<技能名>=<等级>:...`
  * 若指定多个技能，需全部满足条件
  * 示例：
    * `mcMMO:Mining=10`
    * `mcMMO:Mining=2:Taming=25`
* `MythicMobs`（神话生物）
  * 检查生物是否属于特定MythicMobs类型
  * `MythicMobs:<类型名称>:...`
  * 示例：
    * `MythicMobs:SkeletalKnight`
    * `MythicMobs:StaticallyChargedSheep:SkeletonKing`