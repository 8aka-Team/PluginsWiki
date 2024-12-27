---
sidebar_position: 2
---

# 命令

* `/phantomworlds compatibility` - 为你的服务器运行兼容性检查。

* `/phantomworlds create <world> <environment> [options...]` - 开始创建新世界的过程。
  * 参数 1: `world` (必填) - 世界名称。
  * 参数 2: `environment` (必填) - 世界环境。
    * 有效选项如下：
      * `NORMAL` (即主世界 [你可能在找这个])
      * `NETHER`
      * `THE_END`
      * `CUSTOM` (仅限高级用户)
  * 参数 3: `options...` (可选) - 指定额外的世界选项，如世界生成器、种子等。
    * `generateStructures:` - 是否在此世界中生成结构，如村庄。
      * 有效选项：`true` 和 `false`；例如 `generateStructures:false`
    * `generator` - 用于此世界的世界生成器。
      * 有效选项：`<YourGeneratorHere>`；例如，如果你使用 [CleanroomGenerator](https://dev.bukkit.org/projects/cleanroomgenerator)，则输入 `generator:CleanroomGenerator:.`
    * `generatorSettings` - 高级生成器设置，以 JSON 格式提供。
      * 有效选项：太多无法在此列出；了解更多信息请访问 [这里](https://minecraft.fandom.com/wiki/Java_Edition_level_format#generatorOptions_tag_format)。
    * `hardcore` - 此世界是否遵循硬核规则。
      * 有效选项：`true` 和 `false`；例如 `hardcore:true`
    * `seed` - 使用的种子。
      * 有效选项：`<YourSeedHere>`；例如 `seed:847479976687857`
    * `type` - 你想要生成的世界类型。
      * 有效选项：`AMPLIFIED`, `FLAT`, `LARGE_BIOMES` 和 `NORMAL`；例如 `type:FLAT`
    * `spawnMobs` - 怪物是否可以在此世界生成。
      * 有效选项：`true` 和 `false`；例如 `spawnMobs:false`
    * `spawnAnimals` - 动物是否可以在此世界生成。
      * 有效选项：`true` 和 `false`；例如 `spawnAnimals:false`
    * `keepSpawnInMemory` - 生成区域是否始终加载在内存中（对于高流量区域，请保持开启）
      * 有效选项：`true` 和 `false`；例如 `keepSpawnInMemory:false`
    * `allowPvP` - 玩家是否可以在此世界中攻击其他玩家。
      * 有效选项：`true` 和 `false`；例如 `allowPvP:false`
    * `difficulty` - 此世界的难度。
      * 有效选项：`PEACEFUL`, `EASY`, `NORMAL` 和 `HARD`；例如 `difficulty:HARD`

* `/phantomworlds debug <method>` - 调试 PhantomWorlds 中的方法（用于帮助开发者查找错误）。

* `/phantomworlds info` - 了解更多关于 PhantomWorlds 的信息。

* `/phantomworlds list` - 列出当前由 PhantomWorlds 处理的所有世界。

* `/phantomworlds reload` - 重新加载 PhantomWorlds 的配置文件和世界文件。

* `/phantomworlds setspawn [x] [y] [z] [world] [yaw] [pitch]` - 设置世界的生成位置。

* `/phantomworlds spawn [player]` - 将自己或其他玩家传送到世界的生成位置。

* `/phantomworlds teleport <world>` - 传送到一个世界。

* `/phantomworlds unload <world>` - 从服务器卸载一个世界（不会删除世界数据）。


# 权限

```yaml
permissions:
  phantomworlds.*:
    default: op
    description: '所有 PhantomWorlds 权限，理想情况下应授予管理员。'
    children:
      phantomworlds.knows-vanished-users: true
      phantomworlds.command.phantomworlds.*: true

  phantomworlds.knows-vanished-users:
    default: op
    description: '拥有此权限的用户在使用 PhantomWorlds 的命令时将忽略隐身玩家的状态，例如在标签补全建议中。'

  phantomworlds.command.phantomworlds.*:
    default: op
    description: '能够运行所有 /pw 命令。'
    children:
      phantomworlds.command.phantomworlds: true
      phantomworlds.command.phantomworlds.compatibility: true
      phantomworlds.command.phantomworlds.create: true
      phantomworlds.command.phantomworlds.debug: true
      phantomworlds.command.phantomworlds.info: true
      phantomworlds.command.phantomworlds.list: true
      phantomworlds.command.phantomworlds.setspawn: true
      phantomworlds.command.phantomworlds.teleport: true
      phantomworlds.command.phantomworlds.unload: true
      phantomworlds.command.phantomworlds.reload: true

  phantomworlds.command.phantomworlds:
    default: op
    description: '能够运行 /pw'

  phantomworlds.command.phantomworlds.compatibility:
    default: op
    description: '能够运行 /pw compatibility'

  phantomworlds.command.phantomworlds.debug:
    default: op
    description: '能够运行 /pw debug'

  phantomworlds.command.phantomworlds.create:
    default: op
    description: '能够运行 /pw create'

  phantomworlds.command.phantomworlds.info:
    default: true
    description: '能够运行 /pw info'

  phantomworlds.command.phantomworlds.list:
    default: op
    description: '能够运行 /pw list'

  phantomworlds.command.phantomworlds.setspawn:
    default: op
    description: '能够运行 /pw setspawn'

  phantomworlds.command.phantomworlds.teleport:
    default: op
    description: '能够运行 /pw teleport'

  phantomworlds.command.phantomworlds.unload:
    default: op
    description: '能够运行 /pw unload'

  phantomworlds.command.phantomworlds.reload:
    default: op
    description: '能够运行 /pw reload'
```