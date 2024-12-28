---
sidebar_position: 15
---

# 如何在Cloudflare R2上托管BlueMap

## 本指南适合谁？

本指南适合那些想要一个静态地图，并且很少或几乎不需要更新的人。它不适用于服务器的实时地图。

## 什么是Cloudflare R2？

Cloudflare R2是一项允许您在Cloudflare网络上托管文件的服务。通过一些调整，您可以在Cloudflare R2上托管静态网站，例如BlueMap。请注意，Cloudflare R2是收费的。

## 您需要什么？

- 一个Cloudflare账户
- 您拥有并已与Cloudflare连接的域名
- 您拥有的信用卡/预付卡
- 一个使用文件存储（FILE storage）而非SQL存储的渲染好的BlueMap
- 在渲染地图的系统上安装的rclone

## 将域名添加到Cloudflare

（您可以跳过此部分，直接进入设置Zero Trust仪表板部分）

进入“网站”，点击“添加站点”，然后输入您的域名。

1. “选择您的计划”
    - 您可以选择底部的免费计划。

2. “审查DNS记录”
    - 您可以跳过此步骤，因为我们不需要为此方法设置DNS。

3. “更改您的名称服务器”
    - 前往您购买域名的网站，将名称服务器更改为Cloudflare的名称服务器。

## 创建存储桶并使用rclone上传文件

1. 进入R2，点击“创建存储桶”，然后输入您的存储桶名称，例如`bluemap`。

2. 在您的新存储桶中，进入设置。

3. 滚动到“公共访问/自定义域名”并点击“连接域名”。输入您想用于BlueMap的域名并确认更改。

4. （可选）向下滚动并点击三个点，然后点击“编辑”来编辑“默认多部分中止规则”。将“多部分中止规则”设置为1天。这将导致未完成的多部分上传在1天后被中止。如果较大的文件上传被中断，这将非常有用。它将在1天后删除不完整的文件。

5. 返回R2概览页面，点击“管理R2 API令牌”。点击“创建API令牌”并为其命名。赋予它“管理员读写”权限并创建令牌。保持此页面打开以进行rclone配置。

## 使用rclone上传文件

1. 打开终端并运行`rclone config`来配置rclone。
   1. 选择“n”以创建新的远程。
   2. 为远程命名，例如`R2`。
   3. 选择`Amazon S3兼容存储提供商`作为存储提供商。（截至撰写时，选项`4`。）
   4. 选择`Cloudflare R2存储`作为提供商。（截至撰写时，选项`6`。）
   5. 选择`在下一步中输入AWS凭证。`
   6. 将`访问密钥ID`和`秘密访问密钥`从R2 API令牌页面复制到终端。
   7. 选择唯一可能的区域。
   8. 将端点从R2 API令牌页面复制到终端。
   9. 不要编辑高级配置。
   10. 检查配置是否正确并确认。

2. 在终端中导航到包含BlueMap *web*文件的目录。您应该位于包含`index.html`文件的目录中。

3. 运行以下命令将文件上传到您的R2存储桶：
   ```bash
   rclone sync . R2:bluemap/ --transfers=60 --checkers=120 -P
   ```
   - `rclone` — 您调用的程序
   - `sync` — 同步文件的命令 — 目标中不存在的文件将被复制到那里，源中不存在的文件将在目标中被删除
   - `.` — 当前目录
   - `R2:bluemap/` — 您在rclone配置中配置的远程加上您的存储桶名称
   - `--transfers=60` — 并行传输的数量 — BlueMap由许多小文件组成，因此高数量的传输是有益的
   - `--checkers=120` — 并行检查的数量 — BlueMap由许多小文件组成，因此高数量的检查是有益的。检查器将您的本地文件与远程文件进行比较。
   - `-P` — 显示进度

4. 在文件上传时，您可以继续下一步。

## 进行必要的配置

1. 进入Cloudflare仪表板中的您的域名。点击“规则”，然后点击“转换规则” — 确保您在“重写URL”选项卡中。点击“创建规则”。

2. 为规则命名，例如`BlueMap: Index`。此规则将允许您打开BlueMap域名而无需在URL末尾输入`index.html`。
   1. 选择`自定义过滤表达式`
      1. 在第一个字段中，选择`主机名`。在操作符字段中，选择`等于`。在值字段中，输入您用于BlueMap的域名，例如`map.example.com`。
      2. 点击`And`以添加另一条规则。
      3. 在第一个字段中选择`URI路径`，在操作符字段中选择`以...结尾`。在值字段中，输入`/`。
   2. 在路径下方，选择`重写为...`。
      1. 在第一个字段中选择`动态`，在第二个字段中输入`concat(http.request.uri.path, "index.html")`。
   3. 它应该类似于这样：![Cloudflare中的索引规则截图](/bluemap/assets/r2/index_rule.png)
   4. 保存规则。

3. 在此处创建另一个转换规则并为其命名，例如`BlueMap: gzip`。此规则允许Cloudflare在请求纹理或.prbm文件时提供压缩文件。
   1. 选择`自定义过滤表达式`
      1. 在第一个字段中，选择`主机名`。在操作符字段中，选择`等于`。在值字段中，输入您用于BlueMap的域名，例如`map.example.com`。
      2. 点击`And`以添加另一条规则。
      3. 在第一个字段中选择`URI路径`，在操作符字段中选择`以...结尾`。在值字段中，输入`textures.json`。
      4. 点击`Or`以添加另一条规则。
      5. 在第一个字段中，选择`主机名`。在操作符字段中，选择`等于`。在值字段中，输入您用于BlueMap的域名，例如`map.example.com`。
      6. 点击`And`以添加另一条规则。
      7. 在第一个字段中选择`URI路径`，在操作符字段中选择`以...结尾`。在值字段中，输入`.prbm`。
   2. 在路径下方，选择`重写为...`。
      1. 在第一个字段中选择`动态`，在第二个字段中输入`concat(http.request.uri.path, ".gz")`。
   3. 它应该类似于这样：![Cloudflare中的gzip规则截图](/bluemap/assets/r2/gzip_rule.png)
   4. 保存规则。

4. 现在点击`修改响应头`选项卡并创建一个新规则。此规则将压缩文件标记为压缩，以便您的浏览器在请求它们时知道如何处理它们。
   1. 为规则命名，例如`BlueMap: Content-Encoding`。
   2. 选择`自定义过滤表达式`
      1. 在第一个字段中，选择`URI路径`。在操作符字段中，选择`以...结尾`。在值字段中，输入`.gz`。
      2. 点击`Or`以添加另一条规则。
      3. 在第一个字段中，选择`URI路径`。在操作符字段中，选择`以...结尾`。在值字段中，输入`textures.json`。
      4. 点击`Or`以添加另一条规则。
      5. 在第一个字段中，选择`URI路径`。在操作符字段中，选择`以...结尾`。在值字段中，输入`.prbm`。
   3. 在`修改响应头`下方。
      1. 在第一个字段中，选择`设置静态`。在头名字段中，输入`Content-Encoding`。在头值字段中，输入`gzip`。
   4. 它应该类似于这样：![Cloudflare中的Content-Encoding规则截图](/bluemap/assets/r2/encoding_rule.png)
   5. 保存规则。

## 进行可选配置

每次从您的存储桶请求文件时，这都算作一次操作。每次超出免费限额的操作都会产生费用。为了减少对存储桶的请求次数，您可以设置缓存策略。这包括两部分。规则的第一部分（`Edge TTL`）将在Cloudflare的边缘服务器上缓存文件并从那里提供服务。这将减少对存储桶的请求次数，从而降低成本。规则的第二部分（`Browser TTL`）将增加文件在浏览器中的缓存时间。如果您有许多多次访问地图的访问者，这可能是有益的。他们可以更快地加载地图，因为文件已经在他们的浏览器缓存中。如果他们想查看地图的最新版本，他们可以进行强制刷新（Ctrl + F5）以强制浏览器从服务器加载静态文件，并点击菜单中的“更新地图”按钮以重新加载地图图块。

1. 进入Cloudflare仪表板中的您的域名。点击“规则”，然后点击“缓存规则”。点击“创建规则”。
    1. 为规则命名，例如`BlueMap: Cache`。
    2. 选择`自定义过滤表达式`
        1. 在第一个字段中，选择`主机名`。在操作符字段中，选择`等于`。在值字段中，输入您用于BlueMap的域名，例如`map.example.com`。
    3. 在`缓存资格`下选择`有资格缓存`。
    4. 在`Edge TTL`下点击`添加设置`。
        1. 现在选择`忽略缓存控制头并使用此TTL`，并将`输入生存时间（TTL）`设置为您认为合适的值。我将其设置为1年，这将在Cloudflare的边缘服务器上缓存文件长达1年。
    5. 在`Browser TTL`下点击`添加设置`。
        1. 现在选择`覆盖源并使用此TTL`，并将`输入生存时间（TTL）`设置为您认为合适的值。我将其设置为1年，这将在浏览器中缓存文件长达1年。
    6. 它应该类似于这样：![Cloudflare中的缓存规则截图](/bluemap/assets/r2/cache_rule.png)
    7. 保存规则。

2. 如果您有付费计划，您可以使用“自定义错误响应”将404错误更改为204错误，如[外部Web服务器文档](/bluemap/wiki/webserver/ExternalWebserversFile)所建议的。然而，这对于BlueMap的工作并不是必需的。由于本文档是关于Cloudflare R2和免费域名计划的，我将不详细讨论这一点。