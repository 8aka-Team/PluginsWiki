# 翻译说明

{% hint style="info" %}
**MyPet会使用玩家选择的语言！**

使用德语版Minecraft的玩家会收到德语消息，英语玩家则会收到英语消息。
{% endhint %}

如果你想帮助翻译MyPet，可以在[MyPet翻译网站](https://translation.mypet-plugin.de/)上参与。MyPet已支持多种语言翻译，请在自行翻译前先查看网站上已有的翻译版本。

### 自定义翻译

你可以通过修改[现有翻译文件](https://github.com/xXKeyleXx/MyPet-Translations)或创建全新翻译来实现自定义。无论哪种方式，都需要将文件放入`locale`文件夹，并按以下格式命名：`MyPet_XX.properties`。其中XX需替换为你要修改/创建的语言对应的[语言代码](https://minecraft.gamepedia.com/Language)。

### 覆盖默认语言

如果你不希望插件根据玩家语言自动发送消息，或者你已创建了自定义消息，可以强制插件使用特定语言。只需在[config.yml](../setup/configurations/config.yml.md)中将`OverwriteLanguages`设置为你想使用的[语言代码](https://minecraft.gamepedia.com/Language)即可。