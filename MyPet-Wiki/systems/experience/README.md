# 经验值

与玩家类似，宠物也能获取经验值并升级。每升一级，它们可以获得特殊的[技能](../../skills/)，例如[背包](../../skills/backpack.md)。

目前有两种不同的经验值转化为等级的方式。

## 默认模式

`默认`是计算经验值的标准方式。当`MyPet.LevelSystem.CalculationMode`设置为`default`时，所有宠物将按照[Minecraft 12w23a预览版之前](https://minecraft.gamepedia.com/Experience#Values_of_Beta_1.8_-_Before_1.3.1_.2812w23a.29)的玩家升级方式进行升级。

## [JavaScript脚本](expjs.md)

这是一种高级方式，允许你自定义等级成长机制。当`MyPet.LevelSystem.CalculationMode`设置为`JS`或`JavaScript`时，插件会使用_MyPet_文件夹中的`exp.js`文件来计算升级所需的经验值。使用此功能需要在_MyPet_文件夹中放置[rhino.jar](https://github.com/mozilla/rhino/releases)。

你可以在此查看[示例](expjs.md#example)，并在此阅读[详细说明](expjs.md)。如有任何相关问题，请在[Discord](http://discord.mypet-plugin.de)的帮助频道中向我发送消息。