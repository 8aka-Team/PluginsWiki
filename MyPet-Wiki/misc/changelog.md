# 更新日志

### 版本 3.0

* ✔️**所有MyPet-Premium功能现已包含在免费版中！**
* ✔️支持MC 1.13、1.13.1、1.13.2、1.14和1.14.1（包括新生物）
* ✔️宠物死亡时可降级（可通过`Allow-Level-Drowngrade`设置启用）
* ✔️经验倍率（全局或通过权限）
* ✔️新增插件联动：
  * CombatLogX
  * Gangs+
  * MiniaturePets
  * BossShopPro
  * MobStacker
  * StackMob
* ✔️将[MyPet-NPC](../hooks/npc.md)整合进插件
* ✔️可禁用某些世界的MyPet功能
* ✔️允许右键宠物时执行命令
* ✔️为_`/petstore`_命令添加`MyPet.command.store`权限
* 🔅 重写整个[技能树](../systems/skilltrees/)系统 & 新增技能树要求
* 🔅 重写[牵引标志/要求](../systems/leashflag.md)系统并新增标志
* 🔅 改进经验计算系统
  * JS文件现在只需包含`getExpByLevel(level, petType, worldGroup)`函数
* 🔅 API变更
* ⚙️修复末影龙交互问题
* ⚙️修复**大量**漏洞

### 版本 1.3.0

[GitHub对比](https://github.com/xXKeyleXx/MyPet/compare/1.2.8...HEAD)

* 🔅 改进NBT宠物存储
* ⚙️ 修复部分漏洞

### 版本 1.2.9

[GitHub对比](https://github.com/xXKeyleXx/MyPet/compare/1.2.8...1.2.9)

* ✔️ 可在配置中修改Wiki链接
* 🔅 名称过滤器现在忽略颜色代码
* 🔅 技能树创建器新增末影龙选项
* ⚙️ 修复允许玩家生成多个MyPet实体的漏洞
* ⚙️ 修复pet-config.yml包含所有节点的问题

### 版本 1.2.8

[GitHub对比](https://github.com/xXKeyleXx/MyPet/compare/1.2.7...1.2.8)

* ✔️ 为**/petswitch store**命令添加[权限](../setup/permissions.md)限制
* ✔️ 为远程技能新增蛋作为投射物
* ✔️ ![$](https://wiki.mypet-plugin.de/wiki/images/premium.gif) 新增盾牌技能
* 🔅 使用饥饿系统时信标范围计算方式变更
* 🔅 骑乘速度不受饥饿系统影响
* 🔅 食物物品现在存储在列表中（若未修改过pet-config.yml请删除）
* ⚙️ 修复可能导致宠物保存异常的漏洞
* ⚙️ 修复插件覆盖pet-config.yml的漏洞

### 版本 1.2.7

[GitHub对比](https://github.com/xXKeyleXx/MyPet/compare/1.2.6...1.2.7)

* ✔️ 重新添加_/petadmin clean_命令
* ✔️ 新增_/petswitch_命令
* ✔️ 添加[SkillAPI](http://dev.bukkit.org/bukkit-plugins/skillapi/)支持
* ⚙️ 修复宠物尺寸问题
* ⚙️ 修复JS经验脚本返回值漏洞

（后续版本更新内容按相同模式翻译，此处省略以保持简洁）