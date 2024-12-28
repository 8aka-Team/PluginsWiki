---
sidebar_position: 11
---

# 从Python渲染截图

## 是什么以及为什么？
我需要从Python导出世界的图像，用于一个大项目。首先我尝试自己制作渲染器，但当你没有任何OpenGL或其他类似框架的经验时，这几乎是不可能的。所以我查看了其他已经渲染`nbt`文件或地图的项目，比如[deepslate](https://github.com/misode/deepslate)或[prismarine-viewer](https://github.com/PrismarineJS/prismarine-viewer)，但不幸的是，我是个Python爱好者，所以我懒，想要简单的东西。

然后我想起当我在[minestrator](https://minestrator.com)上有一个服务器时，我激活了LiveMap选项，它非常棒。所以我查看了用于此的程序，并找到了BlueMap。但现在，我如何自动化截取世界的截图呢？
## 教程
### 设置
- 按照[**BlueMap-CLI**的安装说明](https://bluemap.bluecolored.de/wiki/getting-started/Installation.html#using-bluemap-on-the-cli--standalone)进行操作。它甚至在我的Mac上也能运行，多么神奇。
- 安装Python。在这个例子中，我使用的是**Python 3.11**，但只要依赖项支持，它应该可以在其他版本上运行。
  - `aiofiles`，用于**异步读写文件**。
    使用以下命令安装：`pip install aiofiles`。
  - `playwright`，用于**打开执行JS的无头浏览器**，并与它们交互。
    使用以下命令安装：`pip install playwright`。
    然后执行：`playwright install chromium`。
    
### 程序
*整个程序在本节的底部。*
首先导入所有依赖项：
```py
from playwright.async_api import async_playwright, Download
# 用于与无头浏览器交互。

from base64 import b64decode
# 用于解码base64编码的图像。

from pathlib import Path
# 用于更轻松地处理路径，而不是使用os.path。

import aiofiles
# 用于异步处理文件。

import asyncio
# 用于构建异步环境。
```
这个**函数将异步工作**，因为我需要获取大量截图，并希望在我死之前完成。在这个例子中，我们只导出一张图像，但如果它已经适应于多张图像会更好。为此，我们使用：
```py
async def main() -> None:
    ""

if __name__ == "__main__":
    asyncio.run(main())
    # 异步调用`main`函数，以便我们可以在`main`中执行异步操作。
```
然后，我设置我想要导出的图像的路径：
```py
async def main() -> None:
    output_path = Path('image.png')
    # 可以是任何你想要的路径，`"image.png"`作为例子。
```
然后，我创建一个新的浏览器，一个新的上下文，并打开一个页面。
```py
    async with async_playwright() as playwright:
        browser = await playwright.chromium.launch(headless=True)
        context = await browser.new_context()

        page = await context.new_page()
```

在页面上，我将加载一个世界的URL，并指定一个视点。我使用`wait_until='networkidle'`来**确保页面已经加载了JS，并且已经准备好进行处理**。`'networkidle'`作为值被库不推荐使用，但它是唯一能正确加载页面的值，所以我不在乎。

```py
        await page.goto(
            'http://localhost:8100/#plots:10:-47:11:16:-0.54:0.83:0:0:perspective',
            wait_until='networkidle'
        )
```
然后我将定义（在`main`之外）一个函数，当页面上发生下载时调用。该函数将获取URL（它看起来像`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACgAA` ...），在`,`处分割并获取最后部分，即**base64编码的图像**，然后将其写入目标文件。
```py
async def on_download(output_path: Path, download: Download) -> None:
    content = download.url.split(",", 1)[1]
    content = b64decode(content.encode())
    async with aiofiles.open(output_path, 'wb') as write:
        await write.write(content)
```
现在，回到`main`函数中，我将设置回调。*我使用lambda以便它调用`on_download`函数并传递`output_path`，否则我将不得不创建一个类来存储它并调用它的一个函数，这很烦人且慢。*
```py
page.on('download', lambda download: on_download(output_path, download))
```
现在，我必须与页面交互以**点击菜单中的“截图”按钮**。为此，我使用以下代码行，打开菜单，然后使用按钮截图。
```py
        await page.get_by_title('Menu').click()
        # 获取并点击具有属性`title="Menu"`的元素。

        await page.get_by_text('Take Screenshot').locator('xpath=..').click()
        # 获取并点击具有文本'Take Screenshot'的元素的父元素（'xpath=..'）。
```
这是它在非无头浏览器中的效果。
![](https://github.com/BlueMap-Minecraft/BlueMapWiki/assets/85891169/c1063109-1eda-421c-9c73-6a1ccaa8822b)

然后我等待`.5`秒以确保下载完成。它大约需要`.11`秒来完成，但我们永远不知道。然后我关闭页面。
```py
        await asyncio.sleep(.5)
        await page.close()
```
*如果你想导出多张图像，你可能不想在每次截图后关闭页面并打开`playwright`对象，所以我建议你在页面创建之前创建一个循环，并在所有截图完成后关闭所有内容。*

这是我的截图，**全部自动生成**：
![](https://github.com/BlueMap-Minecraft/BlueMapWiki/assets/85891169/c62739a7-1b19-494b-a457-491a199208af)

当然，**在执行此程序时确保BlueMap已启动**。我使用`java -jar BlueMap-3.16-cli.jar -rw`运行它。

这是完整代码：
```py
from playwright.async_api import async_playwright, Download
from pathlib import Path
from base64 import b64decode
import aiofiles
import asyncio

async def on_download(output_path: Path, download: Download) -> None:
    print(download.url[:50])
    content = download.url.split(",", 1)[1]
    content = b64decode(content.encode())
    async with aiofiles.open(output_path, 'wb') as write:
        await write.write(content)

async def main() -> None:
    output_path = Path('image.png')

    async with async_playwright() as playwright:
        browser = await playwright.chromium.launch(headless=False)
        context = await browser.new_context()

        page = await context.new_page()
        await page.goto(
            'http://localhost:8100/#plots:10:-47:11:16:-0.54:0.83:0:0:perspective',
            wait_until='networkidle'
        )

        page.on('download', lambda download: on_download(output_path, download))

        await page.get_by_title('Menu').click()
        await page.get_by_text('Take Screenshot').locator('xpath=..').click()
        await asyncio.sleep(.5)
        await page.close()

if __name__ == "__main__":
    asyncio.run(main())
```
作者：[аэт](https://github.com/novitae)```
