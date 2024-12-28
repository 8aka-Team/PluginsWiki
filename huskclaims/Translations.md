---
sidebar_position: 5
---

# 翻译

HuskClaims 支持许多社区提供的插件本地化翻译，涵盖多种语言。默认语言是 [`en-gb`](https://github.com/WiIIiam278/HuskClaims/blob/master/common/src/main/resources/locales/en-gb.yml)（英语）。消息文件使用 [MineDown](https://github.com/Phoenix616/MineDown) 格式进行格式化。

你可以通过更改插件 config.yml 文件中的顶层 `language` 设置来切换预设的语言选项。你必须将其更改为支持的语言代码之一。你可以通过查看 [locales 源文件夹](https://github.com/WiIIiam278/HuskClaims/tree/master/common/src/main/resources/locales) 来[查看支持的语言列表](https://github.com/WiIIiam278/HuskClaims/tree/master/common/src/main/resources/locales)。

## 贡献本地化翻译
你可以通过提交一个包含 [默认本地化文件](https://github.com/WiIIiam278/HuskClaims/blob/master/common/src/main/resources/locales/en-gb.yml) 翻译的 yaml 文件的拉取请求来贡献本地化翻译。以下是一些建议：
* 不要翻译本地化键本身（例如 `claim_created`）
* 你的拉取请求应针对 [locales 文件夹](https://github.com/WiIIiam278/HuskClaims/tree/master/common/src/main/resources/locales) 中的文件
* 不要翻译 [MineDown](https://github.com/Phoenix616/MineDown) 语法本身或命令及其参数；只翻译英文界面文本
* 每个本地化条目应在一行内，并且应删除头部信息
* 使用正确的 ISO 639-1 [语言代码](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) 来表示你的语言和方言
* 如果你愿意，你可以将自己的名字添加到 `AboutMenu` 的翻译者致谢列表中，否则我们可以为你添加

感谢你为让 HuskClaims 在全球范围内更易于使用所做的贡献！