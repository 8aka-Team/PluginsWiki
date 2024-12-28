---
sidebar_position: 7
---

# 自定义指南

如何编辑BlueMap网站，例如使其更符合您服务器的品牌。

请记住，某些BlueMap更新需要您删除`index.html`文件以更新Web应用程序，
因此请确保记住您对其以及BlueMap的其他源文件所做的任何编辑，因为您需要再次应用它们。

:::info

在本指南中，`/bluemap/web/`将被假定为默认的Web根目录。如果您使用的是自定义的不同Web根目录，请确保使用该目录。
:::



## 自定义样式（主题和外观）
BlueMap允许您编写自定义CSS片段，您可以使用这些片段将BlueMap界面样式完全按照您的喜好进行设置。

自定义样式不限于任何特定平台；它们在BlueMap支持的所有平台上都有效。

:::info
如果您还不知道如何编写CSS，这里有一个很好的指南：[developer.mozilla.org/en-US/docs/Learn/CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)
:::

要开始使用BlueMap CSS，您应该在Web根目录（通常是`/bluemap/web/`）中创建一个`.css`文件。  
然后您需要将该样式表注册到BlueMap中，以便它实际加载它。  
您可以在`webapp.conf`中通过将文件名放入`styles: [ ]`列表中来执行此操作。  
将其添加到列表后，您需要重新加载BlueMap，以便BlueMap应用您对配置所做的更改。
您可以使用`/bluemap reload light`命令来执行此操作。

要测试它是否有效，您可以使用这个简单的样式：

`/bluemap/web/my-custom-style.css`:
```css
:root {
    --theme-bg: red;
}
```
`plugins/BlueMap/webapp.conf`:
```hocon
styles: [
    "my-custom-style.css"
]
```
这应该会使所有BlueMap的按钮完全变为红色。  
从这里开始，您可以自定义任何您想要的BlueMap类。

您还可以在本wiki的[第三方附加组件部分](/bluemap/3rdPartySupport.html?platform=script)中找到一些预制的BlueMap样式，
在“style”平台过滤器下。请随意从这些样式中获取灵感！样式设计很棘手。

## 自定义脚本（行为）
除了自定义CSS片段外，BlueMap还支持自定义JavaScript片段以自定义Web应用程序的行为。

自定义脚本不限于任何特定平台；它们在BlueMap支持的所有平台上都有效。

:::info
如果您还不知道如何编写JavaScript，这里有一个很好的指南：[developer.mozilla.org/en-US/docs/Learn/JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)
:::

要开始使用BlueMap JavaScript，您应该在Web根目录（通常是`/bluemap/web/`）中创建一个`.js`文件。  
然后您需要将该脚本注册到BlueMap中，以便它实际加载它。  
您可以在`webapp.conf`中通过将文件名放入`scripts: [ ]`列表中来执行此操作。  
将其添加到列表后，您需要重新加载BlueMap，以便BlueMap应用您对配置所做的更改。
您可以使用`/bluemap reload light`命令来执行此操作。

要测试它是否有效，您可以使用这个简单的脚本：

`/bluemap/web/my-custom-script.js`:
```js
console.log("Hello world!");
```
`plugins/BlueMap/webapp.conf`:
```hocon
scripts: [
    "my-custom-script.js"
]
```
这应该会在浏览器控制台中记录一条消息。
从这里开始，您可以编程任何您想要的附加行为！

您可以在本wiki的[第三方附加组件部分](/bluemap/3rdPartySupport.html?platform=script)中找到一些预制的脚本，
在“script”平台过滤器下。请随意从这些脚本中获取灵感！脚本编写很难。

## 嵌入
在某些地方，当您分享地图链接时，它会嵌入一些额外信息。在Discord中，它看起来像这样：

![默认BlueMap嵌入在Discord中的截图](/bluemap/assets/BlueMapDiscordEmbed.png)

您可以通过编辑`bluemap/web/index.html`文件来更改其外观。  
您可以安全更改的选项是`description`、`theme-color`、`og:site_name`、`og:title`、`og:description`和`og:image`。

> `og:image`属性应该是一个完整的URL链接，而不是相对路径。


## 网站图标
网站图标是您在浏览器标签页上看到的图标，如果您已将网站收藏，它也会出现在收藏栏中。  
有两种方法可以更改BlueMap的网站图标：
1. 替换网站图标图像`/bluemap/web/assets/favicon-8768b872.png`
2. 将新图像文件复制到BlueMap Web根目录（或`assets`目录）中，并编辑`index.html`中的`<link rel="icon" href="./assets/favicon-8768b872.png">`以引用您的新图像。

## 网站标题
标题是浏览器标签页上的文本。  
更改`index.html`中的`<title>`标签将不起作用！  
您需要在每个语言文件中更改它，这些文件位于`/bluemap/web/lang/`。  
您需要更改的是该目录中`.conf`文件中的`pageTitle`选项。

## 默认语言
您可以更改地图的默认语言，这将适用于所有新访客。
它不会更改已经访问过您网站的人的语言。  
在`/bluemap/web/lang/settings.conf`中有一个`default`设置，您可以将其更改为下面列出的任何语言环境。

## 信息菜单
BlueMap在侧边栏中有一个*信息*菜单，它也是完全可自定义的。  
您可以在每个语言文件中编辑它，这些文件位于`/bluemap/web/lang/`。  
您需要编辑的是`info: { content:`选项。  
它接受任何正常的HTML。

## 截图文件名
BlueMap有一个截图功能，可以将截图下载到您的设备上。  
您可以通过打开`/bluemap/web/assets/index-123456.js`文件，然后按`Ctrl`+`F`搜索“`bluemap-screenshot.png`”来更改该文件的文件名。  
通过更改该文本，您可以选择任何其他文件名。

## 域名
要为你的BlueMap使用自定义域名，而不是数字IP，它的工作方式与任何其他网站一样。

:::重要
无法像你可能为你的Minecraft服务器所做的那样，使用SRV记录移除端口！浏览器不支持SRV记录。
:::

将BlueMap放到域名上最好分多个步骤进行：
0. 确保你有一个运行在数字IP（`123.45.67.890`）上的服务器，并且BlueMap可以在那里访问（`http://123.45.67.890:8100`）。
1. 你应该首先在你的域名的DNS设置中创建一个指向你的数字IP的A记录。现在BlueMap应该可以通过`http://yourdomain.com:8100`访问。这通常是你使用普通Minecraft服务器主机所能达到的极限...不过，也许一些更好的托管提供商可以与你讨论可能性，尽管这需要与他们沟通。
2. 如果你对你的服务器有更多的控制权（例如你在家托管或租用VPS），你可以安装一个外部Web服务器并使其在你的域名上运行。我们通常推荐使用nginx。这里有一个很好的入门指南：[nginx.org/en/docs/beginners_guide](https://nginx.org/en/docs/beginners_guide.html)。
3. 一旦你设置好了外部Web服务器，你需要用它来反向代理BlueMap。这里有一个关于如何使用nginx进行反向代理的指南：[NginxProxy](/bluemap/wiki/webserver/NginxProxy.html)。
4. 一旦你完成了这些，你甚至可以设置SLL（HTTPS）。

## 高级Web应用程序定制
如果你觉得需要对Web应用程序的外观和行为进行比JavaScript和CSS片段允许的更多控制，你可以修改BlueMap WebApp的原始源代码，并手动重新编译它。

:::重要
对于没有使用过常见的Web开发工具和框架（如Node、Vue.js、Vite和three.js）经验的人来说，不应该尝试这样做。
:::

要开始，你应该使用git克隆BlueMap仓库。
([链接](https://github.com/BlueMap-Minecraft/BlueMap?tab=readme-ov-file#development))

然后，在[`common/webapp/`](https://github.com/BlueMap-Minecraft/BlueMap/tree/master/common/webapp)中，
你将找到Web应用程序的源代码。

现在你可以随意编辑它。运行和编译的重要命令在[readme](https://github.com/BlueMap-Minecraft/BlueMap/tree/master/common/webapp#readme)中有描述。

一旦你完成了更改并重新编译，你可以将`common/webapp/dist/`文件夹复制到你的服务器，并用你的自定义Web应用程序替换默认的Web应用程序。

Good luck!
