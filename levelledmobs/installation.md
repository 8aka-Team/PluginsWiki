---
sidebar_position: 3
---

# 🤖 安装

注意：**兼容**和提供**支持**之间的区别：\
\
如果一个选项是**支持的**，这仅仅意味着我们的团队愿意在解决方案可用的情况下解决与该选项相关的问题、错误或疑问。这意味着我们打算让我们的插件对列出的选项**支持**或功能正常。这并不意味着我们可以为您的服务器上可能发生的所有问题组合提供答案。\
\
如果一个选项是**兼容的**，这仅仅向您传达您应该期望我们的插件在您的服务器上运行的程度，而不会出现问题或错误。我们无法考虑到每一种情况，但如果一个选项被列为具有高度的**兼容性**，那么您应该期望该插件在您的服务器上按预期运行。如果您遇到列出的兼容选项的问题，我们建议首先调查其他插件是否可能导致问题。您可以通过仅运行LevelledMobs来测试服务器，看看问题是否可以重现。如果不能，则逐步将更多插件返回到服务器，直到发现不兼容的插件。如果这没有解决问题，那么您可能会建议将问题提交到[ArcanePlugins支持Discord](https://discord.gg/arcaneplugins-752310043214479462)。



## 您是否运行兼容的服务器软件？

<table data-full-width="false"><thead><tr><th width="128" align="center">服务器</th><th width="139" align="center">兼容性</th><th width="104" align="center">支持</th><th>备注</th></tr></thead><tbody><tr><td align="center">PaperMC</td><td align="center"><img src="./.gitbook/assets/image (5).png" alt="" data-size="line"></img></td><td align="center"><img src="./.gitbook/assets/image (5).png" alt="" data-size="line"></img></td><td>* 推荐软件最低版本：1.19.4 build <a href="https://papermc.io/downloads/all">550</a>推荐：1.21+</td></tr><tr><td align="center">Folia</td><td align="center"><img src="./.gitbook/assets/image (5).png" alt="" data-size="line"></img></td><td align="center"><img src="./.gitbook/assets/image (5).png" alt="" data-size="line"></img></td><td>遵循PaperMC的推荐</td></tr><tr><td align="center">PurpurMC</td><td align="center"><img src="./.gitbook/assets/image (5).png" alt="" data-size="line"></img></td><td align="center"><img src="./.gitbook/assets/image (5).png" alt="" data-size="line"></img></td><td>遵循PaperMC的推荐</td></tr><tr><td align="center">SpigotMC</td><td align="center"><img src="./.gitbook/assets/image (6).png" alt="" data-size="line"></img></td><td align="center"><img src="./.gitbook/assets/image (5).png" alt="" data-size="line"></img></td><td>有限兼容性；一些可选功能需要PaperMC或其分支。最低版本：1.19.4 build <a href="https://hub.spigotmc.org/stash/projects/SPIGOT/repos/spigot/commits/454acb73c87f8249040c2a4a434125e799237089">454acb73c87</a>推荐：1.21+</td></tr><tr><td align="center">Mod或混合服务器：Mohist; Arclight; Cauldron; Magma; 等。</td><td align="center"><img src="./.gitbook/assets/image (6).png" alt="" data-size="line"></img></td><td align="center"><img src="./.gitbook/assets/image (7).png" alt="" data-size="line"></img></td><td><strong>Bukkit API从未被编写以适应mod！</strong>这些服务器软件通常需要更改核心功能，插件开发者，包括我们自己，依赖这些功能来使插件工作。它们也容易产生不可重现、不可预测、特定情况或用户特定的错误，这些错误或多或少是无法修复的。</td></tr></tbody></table>

总的来说，我们旨在支持**PaperMC**超过任何其他插件软件。我们也努力为**SpigotMC**提供支持，尽管一些可选功能对这些用户不可用。



## 您是否运行支持的Minecraft版本？

<table data-full-width="false"><thead><tr><th width="181" align="center">Minecraft版本</th><th width="146" align="center">兼容性</th><th width="101" align="center">支持</th><th>备注</th></tr></thead><tbody><tr><td align="center">1.15\*及之前</td><td align="center"><img src="./.gitbook/assets/image (7).png" alt="" data-size="line"></img></td><td align="center"><img src="./.gitbook/assets/image (7).png" alt="" data-size="line"></img></td><td>支持和兼容性在<code>3.1.0 b473</code>后停止</td></tr><tr><td align="center">1.16\* - 1.18*</td><td align="center"><img src="./.gitbook/assets/image (7).png" alt="" data-size="line"></img></td><td align="center"><img src="./.gitbook/assets/image (7).png" alt="" data-size="line"></img></td><td>支持和兼容性在<code>4.0.0 b1</code>后停止</td></tr><tr><td align="center">1.19* - 1.20*</td><td align="center"><img src="./.gitbook/assets/image (5).png" alt="" data-size="line"></img></td><td align="center"><img src="./.gitbook/assets/image (5).png" alt="" data-size="line"></img></td><td>* 支持可能会为未来的Minecraft版本而停止。</td></tr><tr><td align="center">最新 [ 1.21* ]</td><td align="center"><img src="./.gitbook/assets/image (5).png" alt="" data-size="line"></img></td><td align="center"><img src="./.gitbook/assets/image (5).png" alt="" data-size="line"></img></td><td></td></tr></tbody></table>

我们只能为我们提供支持的最新Minecraft版本维护支持。例如，1.19指的是对1.19.4的支持，这是1.19分支的最终版本。

***

当Minecraft的每个分支发布时（例如1.18, 1.19, 1.20等），这些分支通常被分成多个版本（例如1.18.1, 1.19.2, 1.20.3等）。随着每个分支的更新，我们将尽一切努力跟上该分支的最新版本。\
有时，从一个版本到下一个版本的更新（例如1.20.1 -> 1.20.2）可能会导致破坏先前版本的服务器软件或为该服务器软件编写的插件的更改。由于行业标准是维护对分支的最新版本的支持和兼容性，而不是为每个子版本的特定版本提供支持，这是我们能够维护的所有内容。我们认识到有些服务器类型依赖于过时的服务器软件。您可以调查LevelledMobs的发布历史，并找到与您的服务器版本发布时对应的版本，并使用那些可能功能正常但过时的版本。它们将没有支持，因为我们没有资源来维护特定版本的插件。

总的来说，我们致力于提供两个版本的兼容性和支持。这意味着无论当前可用的Minecraft版本是什么，加上前两个版本。\
例如，对于**Minecraft 1.20**的支持，我们打算也为**Minecraft 1.18-1.19**的最新发布版本提供支持。这并不总是可能的，有时即使没有提供支持，兼容性也可能超过两个版本。\
用户总是会收到有关支持或兼容性变化的通知。



## 您是否运行正确的Java版本？

我们目前要求用户运行**Java 17**或更高版本。自**Minecraft 1.16**以来，服务器已被要求至少拥有**Java 17**，因此这应该不是问题。我们的支持团队不会协助管理您的Java安装，因为互联网上有许多免费的教程。\
自[**Minecraft Snapshot 24w14a \[pre-1.20.5\]**](https://www.minecraft.net/en-us/article/minecraft-snapshot-24w14a)以来，基础游戏需要**Java 21**或更高版本才能运行。这几乎肯定适用于最终发布版本。如果您打算使用LevelledMobs 4，并打算使用1.20+的Minecraft服务器，那么强烈建议您使用**Java 21**或更高版本。

我们的团队推荐使用[**OpenJDK**](https://openjdk.org/)。它为您的Java安装需求提供了Java标准软件的实现。它是_免费_和_开源_的，代码直接来自GPL许可的二进制文件，这些文件也是_开源_的。

## 你是否安装了任何已知问题的插件？

经过多年的发现，我们发现有一些特定和非特定的插件要么完全失败，要么导致与LevelledMobs的不一致，破坏我们使用的原生功能，或引起意外效果。其中一些问题有解决方案，有些则没有。我们无法解决互联网上每个插件的每个潜在问题；尽管我们一直在努力。

| 插件 / *类型 | 问题严重性 | 备注 |
| --- | --- | --- |
| [mcMMO](https://www.spigotmc.org/resources/official-mcmmo-original-author-returns.64348/) | ![image](.gitbook/assets/image (8).png) | 该插件包含自己的怪物生命条功能，如果你使用LevelledMobs的标签功能，应禁用以防止双重标签。 |
| [ModelEngine](https://www.spigotmc.org/resources/conxeptworks-legacy-model-engine-1-16-5-1-20-4.79477/) | ![image](.gitbook/assets/image (9).png) | 该插件会遮挡我们发送给怪物的标签。通常是因为该插件使用的模型不包含标准标签位置。有方法可以在该插件内创建标签，除了缺失的标签外，实体仍根据规则进行等级调整。 |
| * 全息图 | ![image](.gitbook/assets/image (9).png) | 发送以怪物为中心或在其自定义名字字段内的虚假全息图的插件会干扰我们自己的标签功能。我们使用虚假数据包直接将标签信息发送到玩家的客户端。任何干扰此过程的东西都可能影响实体的标签。 |
| * 堆叠器 | ![image](.gitbook/assets/image (9).png) | 更新：插件[RoseStacker](https://www.spigotmc.org/resources/rosestacker.82729/)从`RoseStacker 1.5.22`版本开始，已包含与我们插件的特定兼容性，允许我们的插件与其堆叠系统一起工作。大多数将怪物实体堆叠在一起的插件通常由于不一致的生成原因或实体识别而无法与LevelledMobs一起使用。 |

## 你是否将LevelledMobs安装在正确的位置？

你可能认为这很明显，如果你已经走到这一步，你应该知道在哪里安装你为Minecraft服务器下载的插件。非常明确地说：LevelledMobs的`.jar`文件需要放在你的Minecraft服务器根目录的`/plugins/`文件夹中。如果你的服务器安装没有`/plugins/`文件夹，那么它要么没有正确安装，要么你运行的服务器软件不兼容或不支持。请自行诊断此问题。

## [可选] 你是否安装了任何支持的插件？

我们通过与多个不同插件的集成提供了多种可选功能和特性。还有一些由我们自己的ArcanePlugins开发者创建的扩展功能插件，提供了CustomDrops及其他功能的扩展能力。如果你想使用这些可选功能，你需要安装相应插件的最新版本。

| 插件 | 可访问的功能 |
| --- | --- |
| :: 官方附加组件 ::[LM Items](https://www.spigotmc.org/resources/lm-items.102081/) | 当使用CustomDrops时，使用此插件，你可以将CustomDrops系统连接到许多流行的物品创建插件。更多信息，请查看LM Items的wiki。 |
| :: 官方附加组件 ::[Armor Placeholders](https://www.spigotmc.org/resources/armorplaceholders.108890/) | *需要PlaceholderAPIArmor Placeholders根据玩家穿戴的装备生成一个数值，考虑到附魔和损坏，并根据可配置的值对这些物品进行评分。与Player Level Modifier一起使用，根据玩家的护甲技能提升挑战。 |
| :: 第三方支持 ::[MobHunting](https://www.spigotmc.org/resources/mobhunting.3582/) | 通过MobHunting，你可以通过杀死更高级别的怪物赚取更多的钱。 |
| :: 第三方支持 ::[Money From Mobs](https://www.spigotmc.org/resources/money-from-mobs-1-12-1-17.79137/) | 通过Money From Mobs，你可以通过杀死更高级别的怪物赚取更多的钱。 |
| :: 第三方支持 ::[RoseStacker](https://www.spigotmc.org/resources/rosestacker.82729/) | 通过RoseStacker，你可以堆叠等级怪物。这是目前已知的唯一一个与我们的插件功能兼容的怪物堆叠插件，从`RoseStacker 1.5.22`版本开始。 |
| [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) | 使用PlaceholderAPI [PAPI]标签；对Player Level Modifier应用程序有用。 |
| [NBT-API](https://www.spigotmc.org/resources/nbt-api.7939/) | 当使用选项`apply-settings:` `nbt-data:`时，直接在等级调整时将NBT数据应用到怪物。 |
| [WorldGuard](https://dev.bukkit.org/projects/worldguard) | 当使用选项`conditions:` `worldguard-regions`时，根据实体在等级调整时所在的WorldGuard区域进行条件判断。 |

## [可选] 你是否安装了任何集成插件？

这些插件我们为其编写了特殊的条件检查，无论是**内部硬编码支持**对于更复杂的插件，需要我们在内部付出额外的努力，还是**外部手工支持**通过新的LevelledMobs4 `externalplugins.yml`文件，允许你根据常用的数据存储和搜索功能编写自己的第三方插件支持条件检查。

| 插件 | 内/外支持 | 备注 |
| --- | --- | --- |
| [MythicMobs](https://www.spigotmc.org/resources/%E2%9A%94-mythicmobs-free-version-%E2%96%BAthe-1-custom-mob-creator%E2%97%84.5702/) ** | 内部 | \* 不需要`external-plugins`条目。 |
| [InfernalMobs](https://www.spigotmc.org/resources/infernal-mobs.2156/) | 外部 | |
| [EliteMobs](https://www.spigotmc.org/resources/%E2%9A%94elitemobs%E2%9A%94.40090/) | 内部 | \* 不需要`external-plugins`条目。 |
| [Shopkeepers](https://www.spigotmc.org/resources/shopkeepers.80756/) | 外部 | |
| [Citizens](https://www.spigotmc.org/resources/citizens.13811/) * | 内部 | \* 不需要`external-plugins`条目。 |
| [EcoMobs](https://www.spigotmc.org/resources/30-sale-%E2%8F%B3-ecomobs-%E2%AD%95-create-custom-mobs-%E2%9C%85-custom-mob-ai-%E2%9C%A8-natural-spawns-custom-model-support.86576/) * | 外部 | |
| [SimplePets](https://www.spigotmc.org/resources/simplepets.100106/) * | 内部 | \* 不需要`external-plugins`条目。 |
| [BloodNight](https://www.spigotmc.org/resources/blood-night-spice-up-your-nights.85095/) | 外部 | |
| [CombatPets](https://www.spigotmc.org/resources/combatpets-%E2%9A%A1-battle-pets-with-leveling-big-update-30-done.100360/) * | 外部 | |
| [DeadlyDisasters](https://www.spigotmc.org/resources/deadly-disasters.90806/) | 外部 | |

到目前为止一切顺利吗？继续到错误和运行LM！

[^1]: 提供高级和免费选项
[^2]: 仅限高级版
[^3]: 仅限高级版
[^4]: 仅限高级版
[^5]: 仅限高级版