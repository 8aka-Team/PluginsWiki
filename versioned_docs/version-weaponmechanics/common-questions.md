---
description: 常见问题及答案。
sidebar_position: 5
---

# 常见问题

#### 如何获取弹药？如何让枪支使用子弹？为什么我可以无限射击？

如果你想让玩家使用物品子弹装填枪支，你必须为每一把你想要的枪支配置一个[ammo.md](weapon-modules/reload/ammo.md "mention")部分。配置完弹药后，你可以使用`/wm ammo`命令。

***

#### 如何获取资源包？

资源包会自动下载到**你的服务器 -> 插件 -> WeaponMechanics**文件夹中。或者，你可以查看[最新发布版本](https://github.com/WeaponMechanics/MechanicsMain/releases)。我们还有一个[版本历史](https://github.com/WeaponMechanics/MechanicsMain/tree/master/resourcepack)的资源包。

***

#### WeaponMechanics支持Bedrock（GeyserMC）吗？

作为插件，WeaponMechanics完全支持Bedrock（枪支射击、装填、瞄准等）。然而，WeaponMechanics使用的资源包不适用于Bedrock。你需要创建自己的资源包。

***

#### 射击声音太大声了，我可以调低音量吗？

可以！默认情况下，我们在资源包中包含了3个不同的音量：`.loud`、`.ambient`和`.quiet`。要降低音量，你必须进入每个武器文件，将`.loud`替换为`.ambient`。我建议使用搜索和替换功能（`ctrl + f`）。

***

#### WeaponMechanics是免费的吗？

WeaponMechanics是[免费下载](https://github.com/WeaponMechanics/MechanicsMain/releases)和[开源](https://github.com/WeaponMechanics/MechanicsMain)，欢迎贡献！然而，我们也有一些需要付费的附加组件。想支持我的持续开发吗？考虑购买以下内容：

1. BiomeManager -> 为生物群系涂上不同的颜色（包括粒子效果等）！
2. WeaponMechanicsCosmetics -> 给你的枪支添加装饰，包括声音、粒子和皮肤！
3. WeaponMechanicsPlus -> 为你的枪支添加附件和修改器，打造一个丰富而深入的系统！

***

#### 为什么我的武器无法破坏WorldGuard区域的方块？

WeaponMechanics完全支持WorldGuard。请查看[#worldguard](addons.md#worldguard "mention")了解更多信息。

如果你无法在区域内破坏方块，或者收到以下消息：

> **嘿！**抱歉，你不能在这里破坏方块。

这意味着你应该进入**你的服务器 -> 插件 -> WeaponMechanics -> config.yml**并将这些选项设置为`true`：

```yaml
Disable_Entity_Explode_Event: true  # 将其改为true
Disable_Block_Break_Event: true  # 将其改为true
```

***

#### WeaponMechanics支持Folia吗？

不支持。遗憾的是，“机械插件”（包括WeaponMechanics、ArmorMechanics等）都不支持Folia，我们也没有支持Folia的计划，因为支持它存在困难。如果你愿意资助Folia支持的开发，请在Discord上给我发消息 @CJCrafter。

WeaponMechanics官方支持Spigot和Paper。Paper的分支“可能会工作”，但不受官方支持。

***

#### 我不希望我的枪支堆叠，如何使武器不可堆叠？

你需要将配置文件更改为不可堆叠的物品，比如铲子。这意味着你还必须修改资源包的feather.json，使资源包适用于修改后的物品。