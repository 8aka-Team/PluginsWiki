---
sidebar_position: 3
---

# 命令

<p align="center">
  <img src="https://i.imgur.com/vZgf8cS.png" alt="Commands-img"></img>
</p>

## 主页
> 显示插件的帮助信息。
* **`/znpcs`**

***
## 创建
> 创建一个NPC。
* **`/znpcs create <id> <type> <name>`**
    * **`<id>`** 是NPC的ID。
    * **`<type>`** 是NPC的类型。所有NPC类型列在[这里](https://github.com/gonalez/znpc-servers/wiki/Others#npc-types)。
    * **`<name>`** 是NPC上方的文本。

**示例:**

   * **`/znpcs create 1 PLAYER jeff`**

***
## 删除
> 删除一个NPC。
* **`/znpcs delete <id>`**
    * **`<id>`** 是NPC的ID。

**示例:**

   * **`/znpcs delete 1`**

***
## 列表
> 列出所有NPC。
* **`/znpcs list`**

***
## 移动
> 将NPC移动到你的位置。
* **`/znpcs move <id>`**
    * **`<id>`** 是NPC的ID。

**示例:**

   * **`/znpcs move 1`**

***
## 传送
> 传送到一个NPC。
* **`/znpcs teleport <id>`**
    * **`<id>`** 是NPC的ID。

**示例:**

   * **`/znpcs teleport 1`**

***
## 类型
> 更改NPC的类型。
* **`/znpcs type <id> <type>`**
    * **`<id>`** 是NPC的ID。
    * **`<type>`** 是NPC的类型。所有NPC类型列在[这里](https://github.com/gonalez/znpc-servers/wiki/Others#npc-types)。

**示例:**

   * **`/znpcs type 1 VILLAGER`**

***

## 行

> 更改NPC上方的文本。
* **`/znpcs lines <id> <text>`**
    * **`<id>`** 是NPC的ID。
    * **`<text>`** 是将在NPC上方显示的文本。

**示例:**

   * **`/znpcs lines 1 line-1 line-2`**

***
## 皮肤
> 更改NPC的皮肤。
### 使用用户名
* **`/znpcs skin <id> <username>`**
    * **`<id>`** 是NPC的ID。
    * **`<username>`** 是玩家的用户名，其皮肤将被设置为NPC的皮肤。

**示例:**

   * **`/znpcs skin 1 Notch`**

### 使用URL
* **`/znpcs skin <id> <url>`**
    * **`<id>`** 是NPC的ID。
    * **`<url>`** 是皮肤图像的链接（应以`.png`或`.jpg`结尾）。

**示例:**

   * **`/znpcs skin 1 http://novask.in/5126623161.png`**

***
## 高度
> 更改NPC上方全息图的高度。
* **`/znpcs height <id> <height>`**
    * **`<id>`** 是NPC的ID。
    * **`<height>`** 是全息图设置的高度（默认值为1）。

**示例:**

   * **`/znpcs height 1 0.75`**
   * **`/znpcs height 1 1.5`**

***
## 动作
> 在NPC中设置动作（命令/消息）。
### CMD
   * 命令由点击NPC的玩家运行。
* **`/znpcs action <id> add CMD <command>`**
    * **`<id>`** 是NPC的ID。
    * **`<command>`** 是要执行的命令。

**示例:**

   * **`/znpcs action <id> add CMD menu`**

### CONSOLE
   * 命令由控制台运行。
* **`/znpcs action <id> add CONSOLE <command>`**
    * **`<id>`** 是NPC的ID。
    * **`<command>`** 是要执行的命令。

**示例:**

   * **`/znpcs action <id> add CONSOLE eco give %player_name% 10`**

### CHAT
   * 以点击NPC的玩家身份发送消息。
* **`/znpcs action <id> add CHAT <text>`**
    * **`<id>`** 是NPC的ID。
    * **`<text>`** 是要发送的消息。

**示例:**

   * **`/znpcs action <id> add CHAT sample text`**

### MESSAGE
   * 向点击NPC的玩家发送消息。
* **`/znpcs action <id> add MESSAGE <text>`**
    * **`<id>`** 是NPC的ID。
    * **`<text>`** 是要发送的消息。

**示例:**

   * **`/znpcs action <id> add MESSAGE Welcome`**

### SERVER
   * 将点击NPC的玩家发送到另一个服务器。
* **`/znpcs action <id> add SERVER <server>`**
    * **`<id>`** 是NPC的ID。
    * **`<server>`** 是服务器名称（在bungeecord配置中）。
> **注意:** 你需要一个bungeecord代理来使用此功能。

**示例:**

   * **`/znpcs action <id> add SERVER smp`**

## 列出动作
> 列出在NPC中设置的动作。
* **`/znpcs action <id> list`**
    * **`<id>`** 是NPC的ID。

**示例:**

   * **`/znpcs action <id> list`**

## 移除动作
> 从NPC中移除一个动作。
* **`/znpcs action <id> remove <actionId>`**
    * **`<id>`** 是NPC的ID。
    * **`<actionId>`** 是动作的ID。
> **注意:** 你可以使用[列出动作](https://github.com/gonalez/znpc-servers/wiki/commands#list-actions)命令找到动作ID。

**示例:**

   * **`/znpcs action <id> remove 0`**

## 动作冷却
> 为NPC中的动作设置冷却时间。
* **`/znpcs action <id> cooldown <actionId> <delay>`**
    * **`<id>`** 是NPC的ID。
    * **`<actionId>`** 是动作的ID。
    * **`<delay>`** 是冷却延迟，以秒为单位。
> **注意:** 冷却时间意味着再次使用该动作的延迟。

> 5秒的冷却时间意味着该动作每5秒可以运行一次。

**示例:**

   * **`/znpcs action <id> cooldown 0 5`**

***

## 切换
> 用于切换NPC的不同设置。
### 外观
* 用于切换NPC是否看向附近的玩家。
* **`/znpcs toggle <id> look`**
  * **`<id>`** 是NPC的ID。

**示例:**

* **`/znpcs toggle 1 look`**

### 全息图
* 用于切换NPC上方的全息图。
* **`/znpcs toggle <id> holo`**
  * **`<id>`** 是NPC的ID。

**示例:**

* **`/znpcs toggle 1 holo`**

### 镜像
* 用于切换NPC的自皮肤视图。
* **`/znpcs toggle <id> mirror`**
  * **`<id>`** 是NPC的ID。

**示例:**

* **`/znpcs toggle 1 mirror`**

### 发光
* 用于切换NPC是否具有发光效果。
* **`/znpcs toggle <id> glow <color>`**
  * **`<id>`** 是NPC的ID。
  * **`<color>`** 是发光效果的颜色。

**示例:**

* **`/znpcs toggle 1 glow RED`**
* **`/znpcs toggle 1 glow BLUE`**

***
## 装备
> 用于给NPC装备物品/盔甲。
* **`/znpcs equip <id> <slot>`**
  * **`<id>`** 是NPC的ID。
  * **`<slot>`** 是物品装备的槽位。
  * 槽位包括 `HAND`、`OFFHAND`、`HELMET`、`CHESTPLATE`、`LEGGINGS` 和 `BOOTS`。
> **注意:** 将你想装备的物品拿在手中。

**示例:**

* **`/znpcs equip 1 HELMET`**

***
## 自定义
> 用于自定义NPC的设置。
* **`/znpcs customize <id> <type> <value>`**
  * **`<id>`** 是NPC的ID。
  * **`<type>`** 是自定义的类型。所有自定义方法请参见[这里](https://github.com/gonalez/znpc-servers/wiki/Others#all-znpcs-customize-methods)。
  * **`<value>`** 是相应自定义类型的值。

> **注意:** 不同的NPC类型有不同的自定义类型。

***
## 路径
> 用于让NPC沿路径移动。
### 创建路径
* 进入路径创建模式。
* **`/znpcs path create <name>`**
  * **`<name>`** 是路径名称。

**示例:**

* **`/znpcs path create test1`**
> **注意:** 运行此命令后，移动到你希望NPC移动的位置。
>     然后运行下面的退出命令。

### 退出路径
* 退出路径创建模式。
* **`/znpcs path exit`**

**示例:**

* **`/znpcs path exit`**

### 设置路径
* 为NPC设置路径。
* **`/znpcs path set <id> <name>`**
  * **`<id>`** 是NPC的ID。
  * **`<name>`** 是路径名称。

**示例:**

* **`/znpcs path set 1 test1`**

***
## 对话
> 用于设置对话。
### 创建对话
* 创建一个对话。
* **`/znpcs conversation create <name>`**
  * **`<name>`** 是对话名称。

**示例:**

* **`/znpcs conversation create test1`**
> **注意:** 运行此命令后，使用下面的命令。

### 打开GUI
* 打开对话编辑器的GUI。
* **`/znpcs conversation gui`**

**示例:**

* **`/znpcs conversation gui`**

### 删除对话
* 删除一个对话。
* **`/znpcs conversation remove <name>`**
  * **`<name>`** 是对话名称。

**示例:**

* **`/znpcs conversation remove test1`**

### 设置对话
* 为NPC设置对话。
* **`/znpcs conversation set <id> <name> <type>`**
  * **`<id>`** 是NPC的ID。
  * **`<name>`** 是对话名称。
  * **`<type>`** 是对话类型。
  * 可用的对话类型有:
    * `CLICK` : 当玩家点击NPC时执行。
    * `RADIUS` : 当玩家在NPC设置的半径内时执行。
      **示例:**

  * **`/znpcs conversation set 1 test1 CLICK`**
  * **`/znpcs conversation set 1 test1 RADIUS`**