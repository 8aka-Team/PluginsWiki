---
sidebar_position: 2
---

# 常见问题解答

### 问：我可以在哪里打开我的地图？
默认情况下，它是你服务器的公共IP地址（例如 `123.45.67.8`）和端口（`8100`），像这样：`http://123.45.67.8:8100/`  
*（确保你将 `123.45.67.8` 替换为**你的**服务器IP。与你连接Minecraft服务器时使用的IP相同！）*

### 问：我仍然无法访问网站！
以下是一个检查清单：
- 你在服务器控制台/日志中看到 `Webserver started...` 的消息了吗？如果没有，请查看是否有任何错误/警告，并再次检查配置。
- 确保你在连接网页时使用的是 `http` 而不是 `https`。
- 端口（默认是 `8100`，`TCP`）是否已正确打开并转发？或者你的防火墙是否阻止了该端口的传入连接？如果你不知道，**请询问你的服务器主机如何为BlueMap打开第二个端口！**。

### 问：当我打开地图时，我收到 `404 - 未找到` 的错误
检查你的 `core.conf` 配置文件，你是否将 `accept-download` 设置为 `true`？  
如果是，请检查 `webapp.conf` 和 `webserver.conf` 中的 `webroot` 设置是否正确（相同）的文件夹。

### 问：我的地图没有更新！
BlueMap需要等待服务器将世界数据保存到磁盘，因此地图上的更改可能需要一些时间才能显示。此外，请确保点击左侧菜单中的 `更新地图`，以使浏览器获取最新版本。

### 问：我在更新到新版本的BlueMap后遇到了问题！
请确保阅读更新日志，因为可能需要的步骤不仅仅是替换 .jar 文件。这些步骤将在更新页面上明确列出。

### 问：我的地图是黑色的 / 地图的大部分缺失了！
- 按下BlueMap菜单中的 `更新地图` 按钮。这会从服务器更新所有图块，并确保你的浏览器没有缓存任何异常内容。
- 使用 `/bluemap` 命令检查BlueMap是否正在渲染某些内容！它可能正在优先渲染其他地图。
- 使用 `/bluemap unfreeze <map>` 命令确保它没有被冻结。
- 确保你的地图配置中的 `world:` 设置指向正确的世界文件夹。
- 确保你的地图配置中的 `dimension:` 设置正确。
- 确保你的BlueMap版本支持你正在尝试渲染的Minecraft版本。*（你可以在BlueMap的[官方下载页面](https://github.com/BlueMap-Minecraft/BlueMap/releases/latest)上查看）*
- BlueMap只能渲染Minecraft已经生成的世界部分！*（例如，通过探索你的世界或使用插件预生成世界的一部分。）*
- 使用命令 `/bluemap debug block`（在游戏中）。如果抛出错误，可能是你安装了一个与BlueMap不兼容的模组。
  检查底部的[不兼容模组列表](#known-incompatibilities-with-other-mods)。
  如果你的模组不在列表中，请在此处报告错误：[https://github.com/BlueMap-Minecraft/BlueMap/issues](https://github.com/BlueMap-Minecraft/BlueMap/issues)。
- 你是否从较早的Minecraft版本升级了你的世界？或者你是否使用WorldPainter等工具预生成或生成了你的世界？
  那么，未被玩家访问过的区块**可能**还没有生成光照数据。
  BlueMap需要光照数据，并忽略没有光照数据的区块。
  因此，它只会渲染至少被玩家加载过一次的区块。  
  这里有一个专门修复世界光照问题的指南：
  [https://bluemap.bluecolored.de/community/FixLighting.html](https://bluemap.bluecolored.de/community/FixLighting.html)

如果其他方法都不起作用，你可以尝试在地图配置中设置 `ignore-missing-light-data: true`。*（然后使用 `/bluemap purge <map>` 更新你的地图）*  
这将在渲染时忽略可能缺失的光照数据，但有一些缺点：
- 在这些区块中，洞穴渲染将始终启用，因为它使用太阳光照数据来检测“洞穴”
- 这些区块中的所有内容都将以全亮度渲染（太阳光照值为15，看起来类似于拥有夜视效果）

### 问：我的地图只能以低分辨率加载！
当你的Web应用程序无法加载高分辨率图块时，就会发生这种情况。  
这可能是由以下原因之一引起的：  
- 你更新了BlueMap，但没有正确更新BlueMap的Web应用程序。  
  尝试删除 `<webroot>/index.html` 并重新加载BlueMap。
- 你在地图配置中禁用了高分辨率图块。  
  在地图配置中将 `enable-hires` 设置为 `true`，并清除你的地图，以便BlueMap重新渲染并启用高分辨率图块。
- 你没有正确设置外部Web服务器。  
  请确保你已经阅读了[外部Web服务器](/bluemap/wiki/webserver/)指南，了解如何操作。

如果你仍然遇到问题，请访问我们的[Discord](https://bluecolo.red/map-discord)中的[#support](https://discord.com/channels/665868367416131594/751804128749027421)。  

### 问：我的地图上有黑色/粉色棋盘格方块！
阅读此内容：[https://bluemap.bluecolored.de/wiki/customization/Mods.html](https://bluemap.bluecolored.de/wiki/customization/Mods.html)

### 问：地图（Web应用程序）的FPS很低（卡顿）
确保你的浏览器启用了**硬件加速**！ 
使用你喜欢的搜索引擎学习如何做到这一点 :)

如果你有一台带有两个GPU单元的笔记本电脑，请确保你的浏览器使用的是高性能GPU。 
例如，Intel/Nvidia有时默认会为你的浏览器使用低性能GPU以节省能源。
你可以在Nvidia控制面板中更改此设置。

### 问：区块（图块）加载非常慢
BlueMap需要将你的世界区块转换为3D模型文件。（我们通常将此过程称为“渲染”。）  
如果你刚刚安装了BlueMap，这可能需要一些时间，因为这是第一次。  
你可以使用 `/bluemap` 命令检查进度。你可能只需要等待区块完成转换。

一旦3D模型文件生成，它们就会存储在服务器上。
然后，访问你的BlueMap网站的人会请求这些文件。  
这些文件从服务器传输到浏览器的速度几乎完全取决于服务器和你自己计算机之间的网络速度。  
你可以使用浏览器的内置开发者工具（网络选项卡）调试此问题，检查每个请求的耗时以及瓶颈所在。

如果你确定服务器和你之间的连接速度足够，请确保你使用的是最新版本的BlueMap，因为可能已经进行了优化。

### 问：为什么BlueMap占用了我服务器的大量CPU？
当你第一次安装BlueMap时，它需要将你的所有世界转换为3D模型。
这是一个相当密集的过程，因此在安装后的一段时间内看到BlueMap占用大量CPU资源并不奇怪。

在BlueMap配置文件 `core.conf` 中，你可以设置BlueMap用于转换过程的线程数。
BlueMap与你的服务器线程异步运行，因此只要CPU没有达到最大负载，它就不应该减慢你的服务器速度。

第一次转换过程完成后，它就不需要再次渲染整个地图了！
从那时起，BlueMap将跟踪你的世界，并仅转换发生变化的区块。

如果你使用 `/bluemap` 命令，你可以查看转换进度和剩余时间的估计。

### 问：如何添加或删除地图？
要添加地图，请从 `maps` 文件夹中复制一个地图配置文件，打开它并调整新地图的设置。要删除地图，只需删除配置文件。  
阅读[此指南](https://bluemap.bluecolored.de/wiki/getting-started/Configuration.html#configuring-your-maps-adding--removing-maps)了解更多信息。

### 问：如何为我的地图添加SSL（HTTPS）？
BlueMap的集成Web服务器本身不支持（也不会支持）SSL，但你可以[使用NGINX反向代理你的地图](/bluemap/wiki/webserver/NginxProxy.html)并以此方式添加SSL。

### 问：如何为我的地图添加身份验证？
BlueMap本身不支持身份验证。相反，你可以[使用外部Web服务器进行HTTP基本身份验证](https://docs.nginx.com/nginx/admin-guide/security-controls/configuring-http-basic-authentication/)。

## 与其他模组的已知不兼容性
- JustEnoughIDs (jeid)
- NotEnoughIDs
- OpenCubicChunks
- SlimeWorldManager
