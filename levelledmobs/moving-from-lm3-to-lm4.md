---
sidebar_position: 2
---

# 📦 从LM3迁移到LM4

**我们强烈建议，对于LevelledMobs（以及任何其他插件）的每个版本，您首先在测试服务器上测试此插件，然后再应用到任何生产服务器。**&#x20;

**即使我们对工作的质量和稳定性充满信心，我们显然也无法考虑到服务器软件的每一个潜在变化，或者可能与我们插件交互或影响我们插件的每一个插件组合。在测试环境中测试此插件及其与您服务器上其他插件的交互，几乎总能确保与您服务器上其他产品的兼容性。**

**跳过此步骤以及由此产生的任何问题，将不是我们的责任。**&#x20;

***

**LevelledMobs 4** 的功能与 **LevelledMobs 3** 类似，甚至配置文件也相当相似。然而，每个人都应该将此插件视为一个全新的插件。尽管它已经经过了一年多的开发，进行了两次完整的重写，以及几个月的幕后调整和测试，但这并不意味着我们已经预防或解决了所有可能的问题。

对于大多数人来说，他们遇到的最大问题是之前由LevelledMobs 3生成的 `rules.yml` 文件将与我们的第4版不兼容。

当然，我们首先建议您体验 **LevelledMobs 4** 的默认设置，看看是否希望将许多变化和新功能整合到您的旧设置中。

其次，如果您想保留旧设置，您可以参考此Wiki和 [**LM 3**](https://github.com/ArcanePlugins/LevelledMobs/wiki) Wiki，并重新创建您的规则，注意各种设置的名称和格式的变化。对于大多数文件，手动转换一个文件大约需要五到十分钟。

如果您在将 **LM 3** 安装转换为 **LM 4** 的格式时遇到真正的困难，您可以在官方的 [Support Discord](https://discord.gg/arcaneplugins-752310043214479462) 中寻求帮助。坦率地说，我们不会为您重新制作文件；我们将帮助指出您在转换过程中犯的错误。