---
sidebar_position: 3
---

# 服务器网络（BungeeCord/Velocity）
您可以在服务器网络（BungeeCord/Velocity）上使用BlueMap，并在单个Web应用程序中显示来自多个服务器的所有地图。
有多种方法可以实现这一点。

## 通用设置
对于所有设置，您都需要在您网络中想要渲染地图的每个游戏服务器上[像通常那样](/versioned_docs/version-bluemap/wiki/getting-started/Installation)安装BlueMap。  

**确保整个网络中的地图配置名称不同！**  
由于地图的标识符来自配置文件的名称，您需要确保每个地图都有一个唯一的标识符！

*（您不能直接在代理服务器上安装BlueMap，所以不要尝试这样做）*

## 使用组合存储
要么您有一个可以从所有游戏服务器连接的SQL服务器，要么您有某种方式从所有服务器访问同一个文件夹（例如挂载共享驱动器/文件夹）。这两种方式都可以用于组合来自不同服务器的所有地图数据。

### 步骤
- 在所有服务器上配置`storages/sql.conf`为同一个SQL服务器，或者在所有服务器上配置`storages/file.conf`为同一个（共享）文件夹
- 在所有服务器上配置所有地图以使用该存储
- 选择其中一个服务器作为托管Web应用程序的服务器。  
  **在此服务器上：** 为**其他**服务器上的每个地图创建一个额外的地图配置，如[这里：“托管静态地图”](/versioned_docs/version-bluemap/wiki/getting-started/Configuration#hosting-static-maps)所示。*（示例如下）*

现在，其他服务器上的地图应该在此服务器的Web应用程序中可见。

> #### 示例
> 假设您的服务器/地图如下所示：
> ```
> server1/...
>   s1_map1.conf
>   s1_map2.conf
>
> server2/...
>   s2_map1.conf
>   s2_map2.conf
> ```
> 所有地图都存储在同一个数据库中...
> 现在，如果您想在`server1`的Web应用程序中查看`server2`的地图，则需要添加以下文件：
> ```
> server1/...
>   s1_map1.conf
>   s1_map2.conf
>   s2_map1.conf <<-
>   s2_map2.conf <<-
>
> server2/...
>   s2_map1.conf
>   s2_map2.conf
> ``` 
> 到您的`server1`，并且这两个额外文件的内容应如下所示：
> ```hocon
> storage: "sql"
> ```
> 没有其他内容。

### 实时更新
如果您希望在所有地图上实时更新标记和玩家标记，请在其他服务器的每个`plugin.conf`中打开`write-markers-interval`和`write-players-interval`。  
**或者**，如果您计划使用外部Web服务器托管整个地图，您可以将每个地图的实时接口反向代理到正确的游戏服务器。请参阅：[外部Web服务器（文件存储）](/versioned_docs/version-bluemap/wiki/webserver/ExternalWebserversFile)和[外部Web服务器（SQL存储）](/versioned_docs/version-bluemap/wiki/webserver/ExternalWebserversSQL)。

## 使用外部Web服务器和不同的存储
如果您不能将所有地图存储在同一个存储中，您也可以使用外部Web服务器来托管Web应用程序，并将所有地图反向代理到每个游戏服务器上的Web服务器。

### 步骤
- 将其中一个游戏服务器上的Web应用程序复制到外部Web服务器的Web根目录 => 复制`./bluemap/web`中的所有内容，**除了**`./bluemap/web/maps`文件夹
- 打开您刚刚复制的`settings.json`文件，并将所有地图标识符添加到`maps`数组中 *（所有游戏服务器上的地图配置文件的名称，不带`.conf`后缀，特殊字符应替换为`_`）*
- 配置您的Web服务器，使其将所有请求到`/maps/<地图标识符>`的请求反向代理到正确游戏服务器的Web服务器

如果所有这些都正确完成，您现在应该在外部Web服务器上看到包含所有地图的Web应用程序。
