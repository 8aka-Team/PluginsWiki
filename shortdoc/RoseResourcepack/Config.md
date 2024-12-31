---
sidebar_position: 2
---

# 配置

```yaml
lang: "en"
loadDefaultFiles: true

# 服务器上资源包所在的开放端口。
# 端口必须开放且不被其他程序占用。
# 不能与服务器端口相同（例如25565）。
port: 8085
# 你的服务器IP。例如：141.148.166.48 不能是localhost/127.0.0.1
# 插件可以自动获取它。如果插件无法获取服务器的IP地址，请手动输入。
#ip: "127.0.0.1"

# 玩家加入时将会加载的资源包列表。
joinPacks:
  - main

# 当玩家离开服务器时是否重置资源包
resetPackOnLeave: true

# 资源包列表
packs:
  main:
    # 启用资源包的哈希检查。
    enableHash: true
    # 保护资源包以防止未经授权的修改。
    protect: true
    # 是否替换冲突的文件
    replaceDuplicate: false
    # 当提示玩家下载资源包时显示的消息。
    prompt: "请下载资源包！"
    # 指示此资源包是否为玩家必需。
    required: true
    # 将与主资源包一起包含的关联资源包列表。
    connectedPacks:
      BetterHUD:
        # 资源包的ZIP文件或文件夹路径。
        path: "BetterHud/build.zip"
        # 启用/禁用使用绝对路径
        absolutePath: false
        # 包含此资源包时要跳过的文件或目录。
        skipFiles:
          - assets/minecraft/textures/gui/
      BackpackPlus:
        path: "/home/user/server/plugins/BackpackPlus/resourcepack.zip"
        absolutePath: true
        skipFiles: []
      EliteMobs:
        #path: "EliteMobs/exports/elitemobs_resource_pack.zip"
        #absolutePath: false
        # 从互联网下载ZIP存档的URL
        url: http://123.123.123.123/addon.zip
        # 连接和读取的超时时间
        timeout:
          read: 180
          timeout: 180
        skipFiles: []
      Oraxen:
        path: "Oraxen/pack/pack.zip"
        absolutePath: false
        skipFiles: []
      ItemsAdder:
        path: "ItemsAdder/output/generated.zip"
        absolutePath: false
        skipFiles: []
      ModelEngine:
        path: "ModelEngine/resource pack.zip"
        absolutePath: false
        skipFiles: []

  low_quality:
    # 启用低质量资源包的哈希检查。
    enableHash: true

  - "zip"  # 忽略zip文件
  - "txt"  # 忽略文本文件
  - "yml"  # 忽略YAML文件
  - "json1"  # 忽略扩展名为'json1'的JSON文件
```

### Lang
语言选择，插件中可用的语言：乌克兰语（ua）、英语（en）、俄语（ru）


### LoadDefaultFiles
加载默认文件


### Port
服务器上任何开放且未使用的端口，将用于托管资源包


### IP
插件本身会确定其运行的服务器IP地址。但如果插件无法做到这一点，请手动输入IP地址以帮助它。


### JoinPacks
玩家进入游戏时将发送给用户的资源包列表。


### ResetPackOnLeave
当玩家离开服务器时重置已安装的资源包。


# Packs
```yaml
packs:
  main:
    # 启用资源包的哈希检查。
    enableHash: true
    # 保护资源包以防止未经授权的修改。
    protect: true
    # 是否替换冲突的文件
    replaceDuplicate: false
    # 当提示玩家下载资源包时显示的消息。
    prompt: "请下载资源包！"
    # 指示此资源包是否为玩家必需。
    required: true
    # 将与主资源包一起包含的关联资源包列表。
    connectedPacks:
      BetterHUD:
        # 资源包的ZIP文件或文件夹路径。
        path: "BetterHud/build.zip"
        # 启用/禁用使用绝对路径
        absolutePath: false
        # 包含此资源包时要跳过的文件或目录。
        skipFiles:
          - assets/minecraft/textures/gui/
      BackpackPlus:
        path: "/home/user/server/plugins/BackpackPlus/resourcepack.zip"
        absolutePath: true
        skipFiles: []
      EliteMobs:
        #path: "EliteMobs/exports/elitemobs_resource_pack.zip"
        #absolutePath: false
        # 从互联网下载ZIP存档的URL
        url: http://123.123.123.123/addon.zip
        # 连接和读取的超时时间
        timeout:
          read: 180
          timeout: 180
        skipFiles: []

```

### Enable Hash
启用或禁用资源包中的哈希检查。不建议关闭此功能，因为这会使客户端在之后更新资源包时出现问题。

### Protect
破坏资源包存档，使其无法被WinRAR读取。这是一种基本的保护措施，资源包永远无法完全防止被盗。

### ReplaceDuplicate
此设置与connectedPacks相关。它决定是否替换冲突的文件。

### Prompt
当提示玩家下载资源包时显示的消息。
仅适用于Minecraft 1.18.1或更高版本。

### Required
指示此资源包是否为玩家必需。
仅适用于Minecraft 1.18.1或更高版本。

## Connected Packs
将添加到最终存档中的资源包

### Path
资源包的ZIP文件或文件夹路径。

### Absolute Path
绝对路径意味着你指定文件或文件夹的完整路径。如果不使用，父文件夹将始终是Plugins文件夹。

让我们考虑以下情况。你有一个专用的虚拟服务器，在该服务器上你创建了多个服务器在一个目录中
```/home/user/server1/```
```/home/user/server2/```
因此，使用绝对路径你将能够指定位于另一个服务器上的文件的路径。例如
```/home/user/server2/Plugins/BetterHud/pack.zip```

### URL
能够从网站下载资源包。为此，你必须提供直接链接。例如 https://123.123.123.123/main.zip。使用此功能将禁用从磁盘路径加载资源包。

### Timeout
等待资源包所在服务器响应的时间。你的服务器可能需要几分钟才能连接并下载资源包。

### Skip Files
包含此资源包时要跳过的文件或文件夹。

## Ignore Files
处理资源包时要忽略的文件类型列表。