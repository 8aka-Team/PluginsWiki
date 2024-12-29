# FAQ

## 无法在配方文件中找到配置部分 CursedPick：CursedPick.yml - (区分大小写) - 跳过此配方

此错误通常发生在插件无法在 yml 文件中找到 "CursedPick:" 部分时。必须有一个与文件匹配的部分才能使配方生效。

## 示例
```yaml
CursedPick:
  Enabled: true # 此配方是否启用
  Shapeless: false # 是否希望它在合成时有特定顺序
  Item: 'DIAMOND_PICKAXE' # 物品 ID
  Item-Damage: 'none' # 当您需要特定类型的物品时使用，例如 "19/00" 或 "13:4"。如果不存在，请留空。
  Amount: 1 # 当您合成此物品时，您将获得的数量。
  Placeable: true # 如果它是一个方块，您可以选择使其不可放置。
  Ignore-Data: false # 是否应将元数据视为合成的必要条件
  Ignore-Model-Data: false # 即使 ignore-data 设置为 true，是否希望考虑模型数据
  Custom-Tagged: true # 是否希望此物品带有自定义物品标签。
  Durability: '100' # 1-100。如果不需要，请删除此部分。
  Identifier: 'CURSED_PICKAXE' # 为您的配方提供一个标识符 :)。
```

如您所见，在 CursedPick.yml 文件的顶部，有一个与 YML 文件名匹配的部分 -- "CursedPick:"

## 我尝试合成我的配方，但它不起作用。请帮忙！！

如果您在自定义配方时遇到问题，十有八九控制台会告诉您发生了什么。无论是格式问题、无效的附魔、无效的材料类型等。如果您仍然无法弄清楚为什么它不起作用，请打开一个新的问题票证以获取额外帮助。

## 当插件启用时，我收到一个错误，它看起来像这样：
```
[21:16:33 ERROR]: null
org.bukkit.command.CommandException: Unhandled exception executing command 'customr' in plugin CustomRecipes v1.8.7
at org.bukkit.command.PluginCommand.execute(PluginCommand.java:47) ~[paper-api-1.20.1-R0.1-SNAPSHOT.jar:?]
at org.bukkit.command.SimpleCommandMap.dispatch(SimpleCommandMap.java:155) ~[paper-api-1.20.1-R0.1-SNAPSHOT.jar:?]
at org.bukkit.craftbukkit.v1_20_R1.CraftServer.dispatchCommand(CraftServer.java:1007) ~[paper-1.20.1.jar:git-Paper-137]
at org.bukkit.craftbukkit.v1_20_R1.command.BukkitCommandWrapper.run(BukkitCommandWrapper.java:64) ~[paper-1.20.1.jar:git-Paper-137]
at com.mojang.brigadier.CommandDispatcher.execute(CommandDispatcher.java:265) ~[paper-1.20.1.jar:?]
at net.minecraft.commands.Commands.performCommand(Commands.java:324) ~[?:?]
at net.minecraft.commands.Commands.performCommand(Commands.java:308) ~[?:?]
at net.minecraft.server.network.ServerGamePacketListenerImpl.performChatCommand(ServerGamePacketListenerImpl.java:2347) ~[?:?]
at net.minecraft.server.network.ServerGamePacketListenerImpl.lambda$handleChatCommand$21(ServerGamePacketListenerImpl.java:2307) ~[?:?]
at net.minecraft.util.thread.BlockableEventLoop.lambda$submitAsync$0(BlockableEventLoop.java:59) ~[?:?]
at java.util.concurrent.CompletableFuture$AsyncSupply.run(Unknown Source) ~[?:?]
at net.minecraft.server.TickTask.run(TickTask.java:18) ~[paper-1.20.1.jar:git-Paper-137]
at net.minecraft.util.thread.BlockableEventLoop.doRunTask(BlockableEventLoop.java:153) ~[?:?]
at net.minecraft.util.thread.ReentrantBlockableEventLoop.doRunTask(ReentrantBlockableEventLoop.java:24) ~[?:?]
at net.minecraft.server.MinecraftServer.doRunTask(MinecraftServer.java:1339) ~[paper-1.20.1.jar:git-Paper-137]
at net.minecraft.server.MinecraftServer.d(MinecraftServer.java:197) ~[paper-1.20.1.jar:git-Paper-137]
at net.minecraft.util.thread.BlockableEventLoop.pollTask(BlockableEventLoop.java:126) ~[?:?]
at net.minecraft.server.MinecraftServer.pollTaskInternal(MinecraftServer.java:1316) ~[paper-1.20.1.jar:git-Paper-137]
at net.minecraft.server.MinecraftServer.pollTask(MinecraftServer.java:1309) ~[paper-1.20.1.jar:git-Paper-137]
at net.minecraft.util.thread.BlockableEventLoop.managedBlock(BlockableEventLoop.java:136) ~[?:?]
at net.minecraft.server.MinecraftServer.waitUntilNextTick(MinecraftServer.java:1287) ~[paper-1.20.1.jar:git-Paper-137]
at net.minecraft.server.MinecraftServer.runServer(MinecraftServer.java:1175) ~[paper-1.20.1.jar:git-Paper-137]
at net.minecraft.server.MinecraftServer.lambda$spin$0(MinecraftServer.java:318) ~[paper-1.20.1.jar:git-Paper-137]
at java.lang.Thread.run(Unknown Source) ~[?:?]
Caused by: java.lang.IllegalStateException: Duplicate recipe ignored with ID customrecipes:cursed_sword
at net.minecraft.world.item.crafting.RecipeManager.addRecipe(RecipeManager.java:93) ~[?:?]
at org.bukkit.craftbukkit.v1_20_R1.inventory.CraftShapelessRecipe.addToCraftingManager(CraftShapelessRecipe.java:47) ~[paper-1.20.1.jar:git-Paper-137]
at org.bukkit.craftbukkit.v1_20_R1.CraftServer.addRecipe(CraftServer.java:1541) ~[paper-1.20.1.jar:git-Paper-137]
at org.bukkit.craftbukkit.v1_20_R1.CraftServer.addRecipe(CraftServer.java:1507) ~[paper-1.20.1.jar:git-Paper-137]
at me.mehboss.recipe.RecipeManager.addItems(RecipeManager.java:440) ~[CustomRecipes(v1.8.7).jar:?]
at me.mehboss.recipe.Main.reload(Main.java:419) ~[CustomRecipes(v1.8.7).jar:?]
at me.mehboss.recipe.GiveRecipe.onCommand(GiveRecipe.java:107) ~[CustomRecipes(v1.8.7).jar:?]
at org.bukkit.command.PluginCommand.execute(PluginCommand.java:45) ~[paper-api-1.20.1-R0.1-SNAPSHOT.jar:?]
```

当您的一个或多个配方具有相同的标识符时，会生成此错误。每个配方必须具有自己唯一的标识符。如您所见，错误提示为 "IllegalStateException: Duplicate recipe ignored with ID customrecipes:cursed_sword"