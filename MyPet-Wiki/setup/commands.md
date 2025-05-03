# 命令

## 图例说明

* 聊天命令
  * `<选项>` → **必填项**！
  * `[选项]` → 可选项

    大多数命令都有简写形式，例如 `/pi`。可以使用简写替代完整命令。

{% hint style="info" %}
**您也可以通过按`[TAB]`键使用自动补全功能来浏览命令选项。**
{% endhint %}

## MyPet 命令

### `/mypet`

* 显示所有可用的 _MyPet_ 命令。

### `/petinfo`

* 语法：`/petinfo [玩家名]`
* 显示您或其他玩家宠物的以下信息：
  * 生命值
  * 饥饿度
  * 食物
  * 行为模式
  * 经验值
  * 等级
  * 主人（仅当查看他人宠物时显示）
  * 技能树
* 简写：
  * `/pinfo`

### `/petname`

* 语法：
  * `/petname <新宠物名>`
* 设置您宠物的名称。
* 主人可以使用以下颜色代码让宠物名称更加多彩：
  * `<black>`, `<darkaqua>`, `<darkblue>`, `<darkgreen>`, `<darkred>`, `<darkpurple>`, `<gold>`, `<gray>`, `<darkgray>`, `<blue>`, `<green>`, `<aqua>`, `<red>`, `<lightpurple>`, `<yellow>`, `<white>`, `<magic>`, `<bold>`, `<strikethrough>`, `<underline>`, `<italic>`, `<reset>`

### `/petrelease`

* 语法：`/petrelease [宠物名]`
* 释放您的宠物，之后您将不再拥有宠物。

### `/petcall`

* 将您的宠物传送到您身边。
* 简写：
  * `/pc`
  * `/petc`

### `/petsendaway`

* 让您的宠物离开。
* 仍可通过 `/petcall` 命令召回。
* 简写：
  * `/psa`
  * `/petsa`

### `/petrespawn`

* 语法：`/petrespawn [`**`pay`**`或`**`show`**`或`**`auto`**`]`
* 显示您或其他玩家宠物的以下信息：
  * 使用 `auto` 并附加参数（整数）可设定玩家愿意支付的最大等待时间。
  * 示例：玩家使用 `/petrespawn auto 10`，宠物死亡后有16秒的重生时间。插件将等待重生时间降至10秒后，若主人能支付重生费用，则立即重生宠物。
* 简写：
  * `/petr`
  * `/pr`

### `/petswitch`

* 允许您切换不同的宠物。
* 简写：
  * `/pswitch`

### `/petstore`

* 允许您存储当前活跃的宠物。
* 存储的宠物可通过 `/petswitch` 命令取回。
* 简写：
  * `/pstore`
  * `/pst`

### `/pettrade`

* 语法：`/pettrade [`**`accept`**`或`**`reject`**`或`**`cancel`**`或`**`a <玩家名>`**`] <价格>`
* 将您当前的宠物出售给其他玩家。
  * `<价格>` 可以是任意经济价格。
* 简写：
  * `/pett`
  * `/pt`

### `/petshop`

* 语法：`/petshop [商店名]`
* 打开一个显示可用宠物商店的图形界面。
* 简写：
  * `/petsh`
  * `/psh`

### `/petskill`

* 语法：`/petskill [玩家名]`
* 显示您宠物技能的信息。
* 管理员可用此命令查看其他玩家宠物的技能信息。

### `/petadmin`

* 语法：`/petadmin <选项> [参数...]`
* 您需要拥有 _`MyPet.admin`_ 权限才能使用此命令！
* 选项：
  * `name`
    * 为特定玩家的宠物设置名称。
    * 参数：
      * `<主人名>`
      * `<新宠物名>`
  * `exp`
    * 为特定玩家的宠物设置经验值。
    * 参数：
      * `<主人名>`
      * `<宠物新经验值>`
      * \[**add**/**set**/**remove**\]
  * `respawn`
    * 设置/显示特定玩家宠物的重生时间。
    * 仅对已死亡的宠物生效。
    * 参数：
      * `<主人名>`
      * \[新重生时间\] 或 \[**show**\]
  * `reload`
    * 重新加载指定的配置文件。
    * 参数：
      * **`all`**
      * **`config`**
      * **`skilltrees`**
  * `skilltree`
    * 更改宠物的技能树。
    * 参数：
      * `<宠物主人名>`
      * `<技能树>`
  * `build`
    * 显示 _MyPet_ 版本和构建号。
  * `create`
    * 为特定玩家创建新宠物。
    * 若玩家已有活跃宠物则无法使用。
    * 使用 -f 强制创建新宠物（即使玩家已有宠物）。
    * 参数：
      * \[**-f**\]
      * `<主人名>`
      * `<宠物类型>`
      * \[参数\]
    * 按 TAB 键查看所选宠物类型的所有可能参数。
  * `clone`
    * 克隆一个玩家的宠物并给予另一玩家。
    * 参数：
      * `<宠物主人名>`
      * `<新主人名>`
  * `remove`
    * 删除特定玩家的宠物。
    * 参数：
      * `<主人名>`
  * `cleanup`
    * 删除超过指定时间未使用的宠物。
    * 若无参数，则删除升级到 MyPet 1.1.3 后未使用的所有宠物。
    * 参数（示例）：
      * \[1Y\] \[1D\] \[1H\] \[1M\]
  * `ticket`
    * 创建一个 ZIP 文件，包含开发者在 [GitHub](https://github.com/xXKeyleXx/MyPet/issues) 上解答问题所需的所有信息。
  * `info item`
    * 此命令会将您手中持有的物品（包括 NBT 数据）输出到服务器日志中。有助于在 MyPet 配置中设置[物品](configurations/configitems.md)。

### `/petstop`

* 命令您的宠物停止攻击目标。
* 在 `farm` 和 `aggressive` 行为模式下无效。
* 简写：
  * `/ps`
  * `/pets`

### `/petchooseskilltree`

* 显示所有可用技能树并让您为宠物选择技能树。
* 简写：
  * `/pcst`
  * `/petcst`  

 

  ![](../.gitbook/assets/pcst.png)

### `/petcapturehelper`

* 启用/禁用捕获助手。
* 简写：
  * `/pch`

### `/petoptions`

* 语法：`/petoptions <选项> [参数...]`
* 选项：
  * `healthbar`
    * 切换动作条生命值显示开关。
  * `idle-volume`
    * 设置宠物空闲音效的音量。
    * 参数：
      * `<百分比>`

## 技能命令

### `/petinventory`

* 语法：`/petinventory [玩家名]`
* 打开您宠物的物品栏。
* 查看其他玩家宠物物品栏需要 _`MyPet.admin`_ 权限。
* 简写：
  * `/pi`
  * `/peti`

### `/petpickup`

* 切换宠物拾取物品功能开关。
* ![$](../.gitbook/assets/exclaim.gif) 需要至少有一行物品栏空位 ![$](../.gitbook/assets/exclaim.gif)
* 简写：
  * `/pp`
  * `/petp`

### `/petbehavior`

* 语法：`/petbehavior [模式]`
* 切换宠物的行为模式。
* 模式：
  * `friendly` → 宠物不会攻击，即使被攻击。
    * 简称：friend
  * `normal` → 宠物行为类似普通狼。
  * `aggressive` → 自动攻击主人15格范围内的所有目标。
    * 简称：aggro
  * `farm` → 自动攻击主人15格范围内的所有**怪物**。
  * `raid` → 类似 normal，但宠物不会攻击玩家及其随从（狼、豹猫、宠物）。
  * `duel` → 宠物会攻击半径5格内其他开启 duel 模式的宠物。
* 简写：
  * `/pb`
  * `/petb`

### `/petbeacon`

* 打开您宠物的信标界面。
* 简写：
  * `/pbeacon`
  * `/petbeacon`