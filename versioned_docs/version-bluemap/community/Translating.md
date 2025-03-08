---
sidebar_position: 13
---

# 翻译BlueMap

*每个人都可以帮助将BlueMap翻译成他们的语言。*

本指南将介绍如何通过GitHub网页界面完成所有操作，但如果你知道如何使用git，也可以在本地完成。

以下是具体步骤：

1. 你需要在\<https://github.com/\>创建一个GitHub账户。
2. 然后访问\<https://github.com/BlueMap-Minecraft/BlueMap\>，点击右上角的“Fork”按钮。
3. Fork完成后，进入`BlueMapCommon/webapp/public/lang`文件夹，在文件选择器的右上角创建一个新文件，用你的语言代码命名该文件（例如`fi.conf`、`ru.conf`等），并将`en.conf`的内容复制到其中。
4. 将英文字符串（在`""`内的部分）翻译成你的语言。
5. 向下滚动并点击“Commit changes”。
6. 打开同一文件夹中的`settings.conf`文件，点击文件右上角的铅笔图标。复制另一种语言的设置，并为其赋予正确的名称和文件名。保持这些设置按字母顺序排列。别忘了提交更改。
7. 返回项目主页。在文件上方，你应该会看到一个“Contribute”按钮。点击“Open pull request”。
8. 填写必要的详细信息，并为其起一个合适的标题，例如“Added X language”。
9. 等待。
10. 如果你想在本地使用你的更改而不等待BlueMap发布，可以将语言文件和设置文件复制到你的BlueMap webroot lang文件夹中。
