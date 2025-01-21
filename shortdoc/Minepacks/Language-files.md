# 语言文件

插件向用户显示的所有消息都可以通过语言文件进行配置。

## 设置语言：
要定义插件使用的语言（设置应使用的语言文件），请打开插件数据目录中的 `config.yml` 并搜索 `Language` 块。
```# 语言设置
Language:
  # 定义使用的语言及相应的文件。相应的语言文件将放置在 config.yml 旁边的 lang 文件夹中，命名为：<Language>.yml
  Language: en
  # 选项：
  #     Overwrite（删除文件中的所有更改并提取新的语言文件）
  #     Upgrade（提取新的语言文件并从旧语言文件中复制所有设置）
  #     Update（为所有缺失的值添加默认（英文）文本值，仅进行一些基本格式化）
  UpdateMode: Upgrade
```

## 编辑语言文件：
您可以使用文本编辑器（推荐 Windows 用户使用 Notepad++）编辑语言文件。为了最佳兼容性，文件编码应保持为 UTF-8。

此外，我们提供了一个工具，可以帮助您更轻松地修改语言文件，并支持插件的所有 JSON 消息功能。这是一个在浏览器中运行的 JavaScript 应用程序，无需安装。[插件翻译页面](https://ptp.pcgamingfreaks.at)