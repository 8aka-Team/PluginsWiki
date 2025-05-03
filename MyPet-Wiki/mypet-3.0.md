# MyPet 3.0

## 更新指南请查阅此处：

{% page-ref page="setup/update-to-3.0.md" %}

## 重大变更

### 技能树格式

* MyPet 现在对所有技能树文件使用 JSON 格式
* 包含全新优化的编辑器（双击 jar 文件即可使用）
  * 选择技能树文件夹（可自定义）后，将在默认浏览器中打开新标签页
* 技能树系统完全重写，旧版技能树无法在新版本中加载
  * 若从未修改过技能树则无需任何操作
  * 可通过新版 SkilltreeCreator 转换旧版技能树：
    1. 打开新版 SkilltreeCreator
    2. 选择要保存新技能树的文件夹
    3. 点击左上角菜单
    4. 选择「导入旧版技能树」
    5. 按照向导完成3个步骤
    6. 点击保存按钮
    7. 将新生成的 `.st.json` 文件上传至服务器技能树文件夹

## 其他变更

* 修复了末影龙交互问题
* 优化经验值计算系统
  * JS 文件现在只需包含 `getExpByLevel(level, info)` 函数
    * 使用 exp.js 文件无需任何修改
* 宠物死亡时可降级（通过 `Allow-Level-Drowngrade` 设置启用）
* 修复了一些长期存在的漏洞

### 牵引标记系统全面革新

* 基本功能保持不变，但新增可配置标记
* 部分标记需要其他插件支持
* 新增标记类型：
  * `World` 世界标记
    * `World:<世界名称>:...`
    * 示例：
      * `World:default`
      * `World:default:nether`
  * `Size` 尺寸标记
    * 仅适用于史莱姆和岩浆怪
    * `Size:min=<最小尺寸>:max=<最大尺寸>`
      * `min` 为可选参数
      * `max` 为可选参数
    * `Size:<精确尺寸>`
    * 示例：
      * `Size:min=2`
      * `Size:min=2:max=4`
      * `Size:max=2`
      * `Size:3`
  * `BelowHP` 生命值标记
    * 检测生物是否低于特定生命阈值
    * `BelowHP:<生命值>[%]`
      * `%` 为可选符号
    * 示例：
      * `BelowHP:2`
      * `BelowHP:2.5`
      * `BelowHP:10%`
  * `Chance` 概率标记
    * 为牵引添加随机因素
    * `Chance:<概率值>`
      * `<概率值>` 为百分比数值（%）
    * 示例：
      * `Chance:2`
      * `Chance:50`
  * `mcMMO` 技能标记
    * 检测玩家是否拥有达到特定等级的技能
    * `mcMMO:<技能名>=<等级>:...`
    * 多个技能需同时满足条件
    * 示例：
      * `mcMMO:Mining=10`
      * `mcMMO:Mining=2:Taming=25`
  * `MythicMobs` 神话生物标记
    * 检测是否为特定神话生物类型
    * `MythicMobs:<类型名称>:...`
    * 示例：
      * `MythicMobs:SkeletalKnight`
      * `MythicMobs:StaticallyChargedSheep:SkeletonKing`