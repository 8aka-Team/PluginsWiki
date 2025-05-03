---
description: >-
  技能树需求用于将技能树限定给符合特定条件的宠物。
---

# 技能树需求

目前可用的需求条件如下：

*  `NoSkilltree`（无技能树）
  * 将该技能树限定给尚未拥有任何技能树的宠物
*  `Skilltree`（特定技能树）
  * 将该技能树限定给已拥有特定技能树的宠物
  * 需要以技能树名称作为参数
  * 示例：
    * `Skilltree:Ride`（骑乘技能树）
*  `Permission`（权限）
  * 将该技能树限定给需要主人拥有`MyPet.skilltree.<技能树名称>`权限的宠物
  * 可通过参数修改所需权限
    * 示例：
      * `Permission:newNode`将转换为`MyPet.skilltree.newNode`
* `PetLevel`（宠物等级）
  * 将该技能树限定给达到特定等级的宠物
  * 可限定为：
    * 指定等级
    * 最低等级
    * 最高等级
  * 示例：
    * `PetLevel:min=2`（最低2级）
    * `PetLevel:min=2:max=4`（2至4级）
    * `PetLevel:max=2`（最高2级）
    * `PetLevel:3`（3级）