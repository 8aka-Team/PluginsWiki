---
sidebar_position: 4
---

# 翻译

您可以在[维基百科](https://en.wikipedia.org/wiki/List\_of\_ISO\_639\_language\_codes)上查看完整的有效语言代码列表。

目前支持的语言：

* 英语 - 由 [Jones](https://github.com/jonesdevelopment) 提供 - `en`
* 俄语 - 由 [MISHA](https://github.com/f3f5), Null 提供 - `ru`
* 波兰语 - 由 Najek, foren 提供 - `pl`
* 法语 - 由 ekiff 提供 - `fr`
* 德语 - 由 [micartey](https://github.com/micartey) 提供 - `de`
* 荷兰语 - 由 [Jones](https://github.com/jonesdevelopment) 提供 - `nl`
* 捷克语 - 由 [slosa](https://github.com/slosacoder) 提供 - `cs`
* 格鲁吉亚语 - 由 [GreenedDev](https://github.com/GreenedDev), [Chumb3x](https://github.com/chumb3x) 提供 - `ka`
* 简体中文 - 由 [FallenCrystal](https://github.com/fallencrystal) 提供 - `zh`
* 西班牙语 - 由 Juansitoh 提供 - `es`  (`config.yml` 缺失)
* 印度尼西亚语 - 由 [LourenT](https://github.com/LOURENT4462) 提供 - `id`  (`config.yml` 缺失)
* 土耳其语 - 由 [Jenkins](https://github.com/ayazjenkins) 提供 - `tr`  (`config.yml` 和 `webhook.yml` 缺失)

为了使用某种语言，您需要修改 Sonar 中的 `language.properties` 文件或更改您的系统语言。如果您让 Sonar 重新生成文件（例如，通过删除它们并重新启动服务器），新语言将自动用于翻译。

### 手动迁移

如果您想手动迁移您的语言文件，您可以在 GitHub 上找到所有翻译文件。只需选择翻译类型（配置、消息或 webhook 配置），然后选择您想在 Sonar 中使用的语言。然后，您可以将当前文件复制或替换为您想要使用的文件。