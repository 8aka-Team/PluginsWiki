# 命令

只有一个命令：**/quests**

其参数如下：

| 名称             | 语法 | 描述                                             |
|------------------|--------|---------------------------------------------------------|
| create           |        | 打开任务创建编辑器                            |
| edit             | id*    | 打开任务编辑编辑器                              |
| remove           | id*    | 删除一个任务                                          |
| reload           |        | 重新加载配置和数据（强烈不推荐） |
| version          |        | 显示插件版本                                     |
| save             |        | 手动保存数据                               |
| finishAll        |        | 完成所有进行中的任务                           |
| seePlayer        | player | 查看玩家的数据                                     |
| resetPlayer      | player | 删除玩家的所有数据                              |
| resetPlayerQuest | player [id*] | 删除玩家单个任务的数据               |
| start | player [id*] | 手动为玩家启动一个任务               |
| list             |        | 列出所有任务                                         |
|                  |        |                                                         |
|    _**nothing**_        |        | 打开任务菜单（列出进行中的任务等） |

***_如果未指定ID，您将需要点击NPC启动器_**

# 权限

**BeautyQuests的权限非常简单：**
* _beautyquests.*_ : 授予访问BeautyQuests的全部权限（操作员）
* _beautyquests.start_ : 允许玩家启动任务（玩家）
* _beautyquests.seeId_ : 允许玩家在主界面中查看任务ID（操作员）
* _beautyquests.command_ : 授予访问命令的权限，但不包括参数（玩家）
* _beautyquests.command.*_ : 授予访问命令的全部权限（操作员）
* _beautyquests.command.**X**_ : 授予访问命令 /quests **X** 的权限（create, edit, remove...）​

# 使用占位符

如果您想在消息中使用占位符，您需要将它们大写，例如“\{PLAYER\}”。