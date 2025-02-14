---
sidebar_position: 2
---

# AutoViaUpdater

ViaVersion 系列的插件更新频率很快，而且更新很麻烦。但是，不更新的话容易被玩家追着打，甚至被人挖出漏洞炸服

AutoViaUpdater 插件可以为你解决这个问题！

这个插件可以帮你自动更新 ViaVersion 系列的插件！

在获取到 ViaVersion 插件有更新时，此插件会自动下载更新，然后自动重启服务器从而实现自动更新。

此插件支持 1.8 及更高的游戏版本，并同时支持 Velocity / BungeeCord，所以不用担心用不了。

同理，你也可以使用 [AutoUpdatePlugins](https://www.spigotmc.org/resources/autoupdateplugins.109683/) 插件来自动更新插件。

:::tip 插件下载

`SpigotMC` https://www.spigotmc.org/resources/.109331

`GitHub` https://github.com/NewAmazingPVP/AutoViaUpdater

:::

## 食用方法

- 首先需要把最新版本的插件下载下来，然后将它丢进服务器的 plugins 文件夹中。
- 确保你的服务器里面本身**没有** ViaVersion 系列的插件，不然会冲突，如果有的话把它们删掉，然后重启服务器。
- 等插件生成出配置文件后光速关闭服务器，然后配置好配置文件后再次启动。
- 最后启动服务器，不出意外的话插件就会检测到更新，然后自动帮你安装插件了。检测间隔和是否自动重启是可自行配置的，详见配置文件。
- 当然你也可以使用 /updatevias (权限节点: autoviaupdater.admin)指令执行更新检测。

## 配置文件

```yaml
# 注：此插件所有的构建都是从 jenkins 获取的，如果需要使用其他源，请使用上文说的 AutoUpdatePlugins 插件

# 被检测更新的插件名
ViaVersion:
 # 是否需要检测 ViaVersion 插件的更新？需要就填 true ，否则填 false，下文同理
  enabled: true
  # 是否使用开发版本，新功能可以抢先体验，但是有可能会不稳定，下文同理
  dev: false
  # 是否使用 Java 8 构建？
  # 如果你的服务器运行在 Java 17 以下的环境，请设置为 true
  java8: false

# 均同上文
ViaBackwards:
  enabled: true
  dev: false
  java8: false

ViaRewind:
  enabled: true
  dev: false
  java8: false

ViaRewind-Legacy:
 # 此项对 BungeeCord 服务器无效
  enabled: true
  dev: false

# 检测更新的时间间隔(单位:秒)
Check-Interval: 60

# 使用 Cron 表达式设置检测更新的日程，留空则不使用
Cron-Expression: ""

# 服务器启动完毕后多少秒开始自动检测更新
# 如果这个值太短可能会出现问题
# 如果在加载 ViaVersion 系列插件出现问题时，可以尝试将此值调至 60 以上
Delay: 5

# 检测到插件更新并自动下载后，是否需要自动重启服务器
AutoRestart: false
# 自检测到更新后多少秒重启服务器
AutoRestart-Delay: 60
# 提示玩家服务器将会重启的广播，爱写啥写啥
AutoRestart-Message: '&c服务器将会在 1 分钟后重启!'
```