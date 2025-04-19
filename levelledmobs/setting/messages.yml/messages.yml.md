---
sidebar_position: 2
---

# 🌟 messages.yml

:::tip

这里是语言文件，对语言文件的汉化很快就会进行！

:::


<details>

<summary>点击查看 Messages.YML 内所有选项的完整列表</summary>

```yaml
#
#   ---------------  -  ------------------------------
#        Section 01  |  通用消息
#   ---------------  -  ------------------------------
#
common:
  prefix: '&b&lLevelledMobs:&7'
  no-permission:
    - '%prefix% 你没有权限访问该内容。'
  players-only:
    - '%prefix% 只有玩家才能访问该内容。'
  player-offline:
    - '%prefix% 玩家“&r%player%&7”已离线。'
  invalid-command:
    - '%prefix% 无效的指令。'


#
#   ---------------  -  ------------------------------
#        Section 02  |  默认指令消息
#   ---------------  -  ------------------------------
#
command:
  levelledmobs:
    main-usage:
      - '%prefix% 可用指令：'
      - '&8 &m->&b /%label% debug &8- &7调试相关的各种指令'
      - '&8 &m->&b /%label% egg &8- &7生成刷怪蛋'
      - '&8 &m->&b /%label% help &8- &7显示 Wiki 的链接'
      - '&8 &m->&b /%label% info &8- &7查看插件信息'
      - '&8 &m->&b /%label% kill &8- &7批量击杀等级怪物'
      - '&8 &m->&b /%label% reload &8- &7重载配置文件'
      - '&8 &m->&b /%label% rules &8- &7打印规则系统'
      - '&8 &m->&b /%label% summon &8- &7召唤指定等级怪物'


    #
    #   ---------------  -  ------------------------------
    #        Section 03  |  召唤指令消息
    #   ---------------  -  ------------------------------
    #
    summon:
      invalid-amount:
        - '%prefix% 无效的数量“&b%amount%&7”。'
      invalid-entity-type:
        - '%prefix% 无效的实体类型“&b%entityType%&7”。'
      invalid-level:
        - '%prefix% 无效的等级“&b%level%&7”。'
      invalid-summon-type:
        - '%prefix% 无效的召唤类型“&b%summonType%&7”。'
      invalid-summon-type-console:
        - '%prefix% 只有玩家可以使用“&bhere&7”召唤类型，你必须使用“&batPlayer&7”或“&batLocation&7”。'
      invalid-location:
        - '%prefix% 无效的位置。'
      here:
        usage:
          - '%prefix% 用法：&b/%label% summon <数量> <实体> <等级> here'
        success:
          - '%prefix% 已在你的位置生成 &b%amount%&7 个 &f等级.%level% &b%entity%&7。'
      atLocation:
        usage:
          - '%prefix% 用法：&b/%label% summon <数量> <实体> <等级> atLocation <x> <y> <z> [世界]'
        success:
          - '%prefix% 已在 &8(&b%x%&7, &b%y%&7, &b%z%&7 世界“&b%world%&7”&8)&7 生成 &b%amount%&7 个 &f等级.%level% &b%entity%&7。'
        usage-console:
          - '%prefix% 用法（控制台）：&b/%label% summon <数量> <实体> <等级> atLocation <x> <y> <z> <世界>'
        invalid-world:
          - '%prefix% 无效的世界“&b%world%&7”。'
        invalid-location:
          - '%prefix% 无效的位置。'
      atPlayer:
        usage:
          - '%prefix% 用法：&b/%label% summon <数量> <实体类型> <等级> atPlayer <玩家>'
        success:
          - '%prefix% 已在 &r%targetDisplayname%&7 的位置生成 &b%amount%&7 个 &f等级.%level% &b%entity%&7。'
      usage:
        - '%prefix% 召唤指令语法：'
        - '&8 &m->&b /%label% summon <数量> <实体> <等级> here'
        - '&8 &m->&b /%label% summon <数量> <实体> <等级> atPlayer <玩家>'
        - '&8 &m->&b /%label% summon <数量> <实体> <等级> atLocation <x> <y> <z> [世界]'
      amount-limited:
        min:
          - '%prefix% 召唤数量最少为 &b1&7 个怪物。'
        max:
          - '%prefix% 召唤数量最多为 &b%maxAmount%&7 个怪物。'
      level-limited:
        min:
          - '%prefix% 等级最小为 &b等级.%minLevel%&7。'
        max:
          - '%prefix% 等级最大为 &b等级.%maxLevel%&7。'
      not-levellable:
        - '%prefix% &b%entity%&7 不能被设定等级。'


    #
    #   ---------------  -  ------------------------------
    #        Section 04  |  击杀指令消息
    #   ---------------  -  ------------------------------
    #
    kill:
      usage:
        - '%prefix% 用法：&b/%label% kill <all/near>'
      all:
        invalid-world:
          - '%prefix% 无效的世界“&b%world%&7”。'
        success:
          - '%prefix% 已在 &b%worlds%&7 个世界击杀 &b%killed%&7 个等级怪物 &8(&b%skipped%&7 个怪物被跳过&8)&7。'
        usage:
          - '%prefix% 用法：&b/%label% kill all [世界/*]'
        usage-console:
          - '%prefix% 用法（控制台）：/%label% kill all <世界/*>'
      near:
        invalid-radius:
          - '%prefix% 无效的半径“&b%radius%&7”。'
        invalid-radius-min:
          - '%prefix% 指定半径已调整为最小半径 &8(&b%minRadius%&8)&7。'
        invalid-radius-max:
          - '%prefix% 指定半径已调整为最大半径 &8(&b%maxRadius%&8)&7。'
        success:
          - '%prefix% 已在半径 &b%radius%&7 格内击杀 &b%killed%&7 个等级怪物 &8(&b%skipped%&7 个怪物被跳过&8)&7。'
        usage:
          - '%prefix% 用法：&b/%label% kill near <半径>'


    #
    #   ---------------  -  ------------------------------
    #        Section 05  |  刷怪笼指令消息
    #   ---------------  -  ------------------------------
    #
    spawner:
      usage:
        - '%prefix% 刷怪笼指令语法：'
        - '&8 &m->&b /%label% spawner create'
        - '&8 &m->&b /%label% spawner copy'
        - '&8 &m->&b /%label% spawner info'
        - ' '
        - '&f示例语法：'
        - '&8 &m->&b /%label% spawner create &3/minlevel&b 1 &3/maxlevel&b 10 &3/name&b "自定义LM刷怪笼" &3/customDropId&b Id1'
      no-value:
        - '%prefix% 未为键“&b%keyname%&7”指定值。'
      no-player:
        - '%prefix% 只有玩家可执行该指令，除非指定了 &b/giveplayer&7 参数。'
      invalid-value:
        - '%prefix% &b%keyname%&7 的值无效，必须为数字。'
      no-level-specified:
        - '%prefix% 你必须指定 minLevel 和/或 maxLevel。'
      inventory-full:
        - '%prefix% 你的背包已满。'
      spawner-give-message:
        - '%prefix% 已给予你一个LM刷怪笼。'
      spawner-give-message-console:
        - '%prefix% 已给予 &r%playername%&7 一个LM刷怪笼。&8|&7 最小等级: &b%minlevel%&7, 最大等级: &b%maxlevel%&7'
      permission-denied:
        - '%prefix% 你没有权限更新或转换LM刷怪笼。'
      spawner-converted:
        - '%prefix% 已将原版刷怪笼转换为名为“%spawnername%”的LM刷怪笼。'
      spawner-updated:
        - '%prefix% 已通过刷怪蛋更新LM刷怪笼。刷怪笼名称：“%spawnername%”'
      info:
        status-enabled:
          - '%prefix% 刷怪笼信息已&a启用&f。'
        status-not-enabled:
          - '%prefix% 刷怪笼信息已&c禁用&f。'
        enabled:
          - '%prefix% 刷怪笼信息已&a启用&f。右键任意刷怪笼查看详情！'
        disabled:
          - '%prefix% 刷怪笼信息已&c禁用&f。'
      copy:
        vanilla-spawner:
          - '%prefix% 仅LM刷怪笼可复制。'
        status-enabled:
          - '%prefix% 刷怪笼复制已&a启用&f。'
        status-not-enabled:
          - '%prefix% 刷怪笼复制已&c禁用&f。'
        enabled:
          - '%prefix% 刷怪笼复制已&a启用&f。右键LM刷怪笼进行复制。'
          - '你的手必须为空。'
        disabled:
          - '%prefix% 刷怪笼复制已&c禁用&f。'


    #
    #   ---------------  -  ------------------------------
    #        Section 06  |  刷怪蛋指令消息
    #   ---------------  -  ------------------------------
    #
    spawn_egg:
      usage:
        - '%prefix% egg 指令语法：'
        - '&8 &m->&b /%label% egg /minlevel <等级> /maxlevel <等级> /entity <实体类型>'
        - '&7&o 示例刷怪蛋'
        - '&7/%label% egg &b/minlevel&7 1 &b/maxlevel&7 10 &b/name&7 "自定义LM刷怪蛋" &b/customDropId&7 Id1'
      no-paper:
        - '%prefix% 此功能仅在运行Paper或其分支的服务器上可用'
      no-value:
        - '%prefix% 未为 &b%keyname%&7 指定值'
      no-player:
        - '%prefix% 只有玩家可执行该指令，除非指定 /giveplayer'
      no-player-specified:
        - '%prefix% 未指定玩家'
      invalid-value:
        - '%prefix% &b%keyname%&7 的值无效，必须为数字'
      no-level-specified:
        - '%prefix% 你必须指定 minLevel、maxLevel 和实体'
      inventory-full:
        - '%prefix% &4你的背包已满！'
      give-message:
        - '%prefix% 已给予你一个LM刷怪蛋'
      give-message-console:
        - '%prefix% 已给予 &r%playername%&7 一个LM刷怪蛋。&8|&7 最小等级: &b%minlevel%&7, 最大等级: &b%maxlevel%&7, 实体: &b%entitytype%&7'


    #
    #   ---------------  -  ------------------------------
    #        Section 07  |  规则指令消息
    #   ---------------  -  ------------------------------
    #
    rules:
      incomplete-command:
        - '%prefix% 指令不完整'
      console-rules:
        - '%prefix% 规则已打印到控制台'
      discord-invite:
        - '%prefix% 点击获取Discord邀请'
      wiki-link:
        - '%prefix% 点击打开Wiki'
      rules-reprocessed:
        - '%prefix% 已为 &b%worldcount%&7 个世界的 &b%entitycount%&7 个怪物重新处理规则'
      reset:
        - '%prefix% 执行此指令将重置你的规则为4种默认之一。'
        - '你必须选择 vanilla/basic/average/advanced/extreme 难度。'
        - '将自动备份并重置 rules.yml 为默认。'
      resetting:
        - '%prefix% 正在重置规则为 %difficulty%'
      reset-syntax:
        - '%prefix% 若要重置为 %difficulty% 难度，请输入以下指令：'
        - '%label% rules reset %difficulty% confirm'
      reset-complete:
        - '%prefix% rules.yml 已成功更新'
      invalid-difficulty:
        - '%prefix% 无效的难度：%difficulty%'
      rule-name-missing:
        - '%prefix% 必须指定规则名称。'
      rule-name-invalid:
        - '%prefix% 未找到名为 %rulename% 的规则'
      showing-rules:
        - '显示规则所有值：&b%rulename%&r'
      no-entities-visible:
        - '%prefix% 必须看向附近的实体'
      no-entities-near:
        - '%prefix% 10格范围内未找到实体'
      effective-rules:
        - '%prefix% 显示有效规则：%entitytype%（等级 %level% %mobname%）于 %world%，%location%'
      no-effective-rules:
        - '%prefix% 未找到有效规则'


    #
    #   ---------------  -  ------------------------------
    #        Section 08  |  系统指令消息
    #   ---------------  -  ------------------------------
    #
    reload:
      started:
        - '%prefix% 正在重载配置文件……'
      finished:
        - '%prefix% 重载完成。'
      usage:
        - '%prefix% 用法：&b/%label% reload'
    info:
      about:
        - ' '
        - '&b&lLevelledMobs&b v%version%'
        - '&7&o%description%'
        - ' '
        - '&7维护者：&f%maintainers%'
        - '&7贡献者：&f%contributors%'
        - '&7支持：&fMC &f%supportedVersions%'
        - ' '
      listSeparator: '&7, &f'
      usage:
        - '%prefix% 用法：&b/%label% info'
    compatibility:
      notice:
        - '%prefix% 兼容性检查结果已打印到日志，请检查控制台 :)'
      usage:
        - '%prefix% 用法：&b/%label% compatibility'


#
#   ---------------  -  ------------------------------
#        Section 09  |  其他消息
#   ---------------  -  ------------------------------
#
other:
  compatibility-notice:
    enabled: true
    messages:
      - '%prefix% LevelledMobs 兼容性提示：'
      - '&8 &m->&r &b%incompatibilities% &7个可能的不兼容项被发现。请运行“&b/levelledmobs compatibility&7”进行检查。'
      - '&8 &m->&7 此消息因你拥有 &blevelledmobs.compatibility-notice&7 权限而发送。你可以在 &bmessages.yml&7 中关闭此消息。'
      - '&8 &m->&7 请确保你已按照插件Wiki页面的所有说明操作。'
  update-notice:
    messages:
      - '&b&nLevelledMobs 更新检查提示：'
      - '&7你的 &bLevelledMobs&7 版本已&boutdated&7！请尽快更新到 &bv%latestVersion%&7。&8(&7你当前运行的是 &bv%currentVersion%&8)'
    send-in-console: true
    send-on-join: true

  mob-head-drop-name: '%mob_name%的头颅'
  no-drop-in-chunk: '%prefix% &7你在该区域击杀的等级怪物数量已达上限，将不再获得等级掉落。请稍后再来。'
  create-debug:
    - '&b&n创建调试ZIP'
    - '&7仅当LevelledMobs开发者要求时才应运行此命令。用于协助遇到插件问题的用户。'
    - ''
    - '&7此命令将生成包含以下必要数据的ZIP文件：'
    - '&8 &m->&b 插件列表'
    - '&8 &m->&b 服务器版本'
    - '&8 &m->&b 当前及最大在线玩家数'
    - '&8 &m->&b latest.log 文件&7 &8(/logs/latest.log)'
    - ''
    - '&7LevelledMobs开发者不会为除解决问题外的目的分发或保留数据。你可在发送前自行核查内容。'
    - '&7如需继续创建ZIP文件，请运行：'
    - '&b/lm debug create-zip confirm&7'
```

</details>

LevelledMobs 的 `messages.yml` 文件允许你自定义插件发送的所有聊天消息。你可以访问官方翻译，轻松切换为西班牙语（Español）、德语（Deutsch）等语言版本，法语（Français）即将推出！

#### 警告：

> **大多数占位符仅在特定消息中可用。**\
> 通常，如果某条消息默认未包含某占位符，则该占位符不会被处理。\
> \
> 因此，如果你不确定某些消息支持哪些占位符，建议参考默认的 messages.yml 文件。\
> \
> 例如，你无法在“无权限”消息中使用 `%supportedVersions%` 占位符。

<details>

<summary>点击查看 Section 1 - 通用消息 的所有选项</summary>

```yaml
common:
  prefix: '&b&lLevelledMobs:&7'
  no-permission:
    - '%prefix% 你没有权限访问该内容。'
  players-only:
    - '%prefix% 只有玩家才能访问该内容。'
  player-offline:
    - '%prefix% 玩家“&r%player%&7”已离线。'
  invalid-command:
    - '%prefix% 无效的指令。'
```

</details>

<details>

<summary>点击查看 Section 2 - 默认指令消息 的所有选项</summary>

```yaml
#
#   ---------------  -  ------------------------------
#        Section 02  |  默认指令消息
#   ---------------  -  ------------------------------
#
command:
  levelledmobs:
    main-usage:
      - '%prefix% 可用指令：'
      - '&8 &m->&b /%label% debug &8- &7调试相关的各种指令'
      - '&8 &m->&b /%label% egg &8- &7生成刷怪蛋'
      - '&8 &m->&b /%label% help &8- &7显示 Wiki 的链接'
      - '&8 &m->&b /%label% info &8- &7查看插件信息'
      - '&8 &m->&b /%label% kill &8- &7批量击杀等级怪物'
      - '&8 &m->&b /%label% reload &8- &7重载配置文件'
      - '&8 &m->&b /%label% rules &8- &7打印规则系统'
      - '&8 &m->&b /%label% summon &8- &7召唤指定等级怪物'
```

</details>

<details>

<summary>点击查看 Section 3 - 召唤指令消息 的所有选项</summary>

```yaml
#
#   ---------------  -  ------------------------------
#        Section 03  |  召唤指令消息
#   ---------------  -  ------------------------------
#
    summon:
      invalid-amount:
        - '%prefix% 无效的数量“&b%amount%&7”。'
      invalid-entity-type:
        - '%prefix% 无效的实体类型“&b%entityType%&7”。'
      invalid-level:
        - '%prefix% 无效的等级“&b%level%&7”。'
      invalid-summon-type:
        - '%prefix% 无效的召唤类型“&b%summonType%&7”。'
      invalid-summon-type-console:
        - '%prefix% 只有玩家可以使用“&bhere&7”召唤类型，你必须使用“&batPlayer&7”或“&batLocation&7”。'
      invalid-location:
        - '%prefix% 无效的位置。'
      here:
        usage:
          - '%prefix% 用法：&b/%label% summon <数量> <实体> <等级> here'
        success:
          - '%prefix% 已在你的位置生成 &b%amount%&7 个 &f等级.%level% &b%entity%&7。'
      atLocation:
        usage:
          - '%prefix% 用法：&b/%label% summon <数量> <实体> <等级> atLocation <x> <y> <z> [世界]'
        success:
          - '%prefix% 已在 &8(&b%x%&7, &b%y%&7, &b%z%&7 世界“&b%world%&7”&8)&7 生成 &b%amount%&7 个 &f等级.%level% &b%entity%&7。'
        usage-console:
          - '%prefix% 用法（控制台）：&b/%label% summon <数量> <实体> <等级> atLocation <x> <y> <z> <世界>'
        invalid-world:
          - '%prefix% 无效的世界“&b%world%&7”。'
        invalid-location:
          - '%prefix% 无效的位置。'
      atPlayer:
        usage:
          - '%prefix% 用法：&b/%label% summon <数量> <实体类型> <等级> atPlayer <玩家>'
        success:
          - '%prefix% 已在 &r%targetDisplayname%&7 的位置生成 &b%amount%&7 个 &f等级.%level% &b%entity%&7。'
      usage:
        - '%prefix% 召唤指令语法：'
        - '&8 &m->&b /%label% summon <数量> <实体> <等级> here'
        - '&8 &m->&b /%label% summon <数量> <实体> <等级> atPlayer <玩家>'
        - '&8 &m->&b /%label% summon <数量> <实体> <等级> atLocation <x> <y> <z> [世界]'
      amount-limited:
        min:
          - '%prefix% 召唤数量最少为 &b1&7 个怪物。'
        max:
          - '%prefix% 召唤数量最多为 &b%maxAmount%&7 个怪物。'
      level-limited:
        min:
          - '%prefix% 等级最小为 &b等级.%minLevel%&7。'
        max:
          - '%prefix% 等级最大为 &b等级.%maxLevel%&7。'
      not-levellable:
        - '%prefix% &b%entity%&7 不能被设定等级。'
```

</details>

<details>

<summary>点击查看 Section 4 - 击杀指令消息 的所有选项</summary>

```yaml
#
#   ---------------  -  ------------------------------
#        Section 04  |  击杀指令消息
#   ---------------  -  ------------------------------
#
    kill:
      usage:
        - '%prefix% 用法：&b/%label% kill <all/near>'
      all:
        invalid-world:
          - '%prefix% 无效的世界“&b%world%&7”。'
        success:
          - '%prefix% 已在 &b%worlds%&7 个世界击杀 &b%killed%&7 个等级怪物 &8(&b%skipped%&7 个怪物被跳过&8)&7。'
        usage:
          - '%prefix% 用法：&b/%label% kill all [世界/*]'
        usage-console:
          - '%prefix% 用法（控制台）：/%label% kill all <世界/*>'
      near:
        invalid-radius:
          - '%prefix% 无效的半径“&b%radius%&7”。'
        invalid-radius-min:
          - '%prefix% 指定半径已调整为最小半径 &8(&b%minRadius%&8)&7。'
        invalid-radius-max:
          - '%prefix% 指定半径已调整为最大半径 &8(&b%maxRadius%&8)&7。'
        success:
          - '%prefix% 已在半径 &b%radius%&7 格内击杀 &b%killed%&7 个等级怪物 &8(&b%skipped%&7 个怪物被跳过&8)&7。'
        usage:
          - '%prefix% 用法：&b/%label% kill near <半径>'
```

</details>

<details>

<summary>点击查看 Section 5 - 刷怪笼指令消息 的所有选项</summary>

```yaml
#
#   ---------------  -  ------------------------------
#        Section 05  |  刷怪笼指令消息
#   ---------------  -  ------------------------------
#
    spawner:
      usage:
        - '%prefix% 刷怪笼指令语法：'
        - '&8 &m->&b /%label% spawner create'
        - '&8 &m->&b /%label% spawner copy'
        - '&8 &m->&b /%label% spawner info'
        - ' '
        - '&f示例语法：'
        - '&8 &m->&b /%label% spawner create &3/minlevel&b 1 &3/maxlevel&b 10 &3/name&b "自定义LM刷怪笼" &3/customDropId&b Id1'
      no-value:
        - '%prefix% 未为键“&b%keyname%&7”指定值。'
      no-player:
        - '%prefix% 只有玩家可执行该指令，除非指定了 &b/giveplayer&7 参数。'
      invalid-value:
        - '%prefix% &b%keyname%&7 的值无效，必须为数字。'
      no-level-specified:
        - '%prefix% 你必须指定 minLevel 和/或 maxLevel。'
      inventory-full:
        - '%prefix% 你的背包已满。'
      spawner-give-message:
        - '%prefix% 已给予你一个LM刷怪笼。'
      spawner-give-message-console:
        - '%prefix% 已给予 &r%playername%&7 一个LM刷怪笼。&8|&7 最小等级: &b%minlevel%&7, 最大等级: &b%maxlevel%&7'
      permission-denied:
        - '%prefix% 你没有权限更新或转换LM刷怪笼。'
      spawner-converted:
        - '%prefix% 已将原版刷怪笼转换为名为“%spawnername%”的LM刷怪笼。'
      spawner-updated:
        - '%prefix% 已通过刷怪蛋更新LM刷怪笼。刷怪笼名称：“%spawnername%”'
      info:
        status-enabled:
          - '%prefix% 刷怪笼信息已&a启用&f。'
        status-not-enabled:
          - '%prefix% 刷怪笼信息已&c禁用&f。'
        enabled:
          - '%prefix% 刷怪笼信息已&a启用&f。右键任意刷怪笼查看详情！'
        disabled:
          - '%prefix% 刷怪笼信息已&c禁用&f。'
      copy:
        vanilla-spawner:
          - '%prefix% 仅LM刷怪笼可复制。'
        status-enabled:
          - '%prefix% 刷怪笼复制已&a启用&f。'
        status-not-enabled:
          - '%prefix% 刷怪笼复制已&c禁用&f。'
        enabled:
          - '%prefix% 刷怪笼复制已&a启用&f。右键LM刷怪笼进行复制。'
          - '你的手必须为空。'
        disabled:
          - '%prefix% 刷怪笼复制已&c禁用&f。'
```

</details>

<details>

<summary>点击查看 Section 6 - 刷怪蛋指令消息 的所有选项</summary>

```yaml
#
#   ---------------  -  ------------------------------
#        Section 06  |  刷怪蛋指令消息
#   ---------------  -  ------------------------------
#
    spawn_egg:
      usage:
        - '%prefix% egg 指令语法：'
        - '&8 &m->&b /%label% egg /minlevel <等级> /maxlevel <等级> /entity <实体类型>'
        - '&7&o 示例刷怪蛋'
        - '&7/%label% egg &b/minlevel&7 1 &b/maxlevel&7 10 &b/name&7 "自定义LM刷怪蛋" &b/customDropId&7 Id1'
      no-paper:
        - '%prefix% 此功能仅在运行Paper或其分支的服务器上可用'
      no-value:
        - '%prefix% 未为 &b%keyname%&7 指定值'
      no-player:
        - '%prefix% 只有玩家可执行该指令，除非指定 /giveplayer'
      no-player-specified:
        - '%prefix% 未指定玩家'
      invalid-value:
        - '%prefix% &b%keyname%&7 的值无效，必须为数字'
      no-level-specified:
        - '%prefix% 你必须指定 minLevel、maxLevel 和实体'
      inventory-full:
        - '%prefix% &4你的背包已满！'
      give-message:
        - '%prefix% 已给予你一个LM刷怪蛋'
      give-message-console:
        - '%prefix% 已给予 &r%playername%&7 一个LM刷怪蛋。&8|&7 最小等级: &b%minlevel%&7, 最大等级: &b%maxlevel%&7, 实体: &b%entitytype%&7'
```

</details>

<details>

<summary>点击查看 Section 7 - 规则指令消息 的所有选项</summary>

```yaml
#
#   ---------------  -  ------------------------------
#        Section 07  |  规则指令消息
#   ---------------  -  ------------------------------
#
    rules:
      incomplete-command:
        - '%prefix% 指令不完整'
      console-rules:
        - '%prefix% 规则已打印到控制台'
      discord-invite:
        - '%prefix% 点击获取Discord邀请'
      wiki-link:
        - '%prefix% 点击打开Wiki'
      rules-reprocessed:
        - '%prefix% 已为 &b%worldcount%&7 个世界的 &b%entitycount%&7 个怪物重新处理规则'
      reset:
        - '%prefix% 执行此指令将重置你的规则为4种默认之一。'
        - '你必须选择 vanilla/basic/average/advanced/extreme 难度。'
        - '将自动备份并重置 rules.yml 为默认。'
      resetting:
        - '%prefix% 正在重置规则为 %difficulty%'
      reset-syntax:
        - '%prefix% 若要重置为 %difficulty% 难度，请输入以下指令：'
        - '%label% rules reset %difficulty% confirm'
      reset-complete:
        - '%prefix% rules.yml 已成功更新'
      invalid-difficulty:
        - '%prefix% 无效的难度：%difficulty%'
      rule-name-missing:
        - '%prefix% 必须指定规则名称。'
      rule-name-invalid:
        - '%prefix% 未找到名为 %rulename% 的规则'
      showing-rules:
        - '显示规则所有值：&b%rulename%&r'
      no-entities-visible:
        - '%prefix% 必须看向附近的实体'
      no-entities-near:
        - '%prefix% 10格范围内未找到实体'
      effective-rules:
        - '%prefix% 显示有效规则：%entitytype%（等级 %level% %mobname%）于 %world%，%location%'
      no-effective-rules:
        - '%prefix% 未找到有效规则'
```

</details>

<details>

<summary>点击查看 Section 8 - 系统指令消息 的所有选项</summary>

```yaml
#
#   ---------------  -  ------------------------------
#        Section 08  |  系统指令消息
#   ---------------  -  ------------------------------
#
    reload:
      started:
        - '%prefix% 正在重载配置文件……'
      finished:
        - '%prefix% 重载完成。'
      usage:
        - '%prefix% 用法：&b/%label% reload'
    info:
      about:
        - ' '
        - '&b&lLevelledMobs&b v%version%'
        - '&7&o%description%'
        - ' '
        - '&7维护者：&f%maintainers%'
        - '&7贡献者：&f%contributors%'
        - '&7支持：&fMC &f%supportedVersions%'
        - ' '
      listSeparator: '&7, &f'
      usage:
        - '%prefix% 用法：&b/%label% info'
    compatibility:
      notice:
        - '%prefix% 兼容性检查结果已打印到日志，请检查控制台 :)'
      usage:
        - '%prefix% 用法：&b/%label% compatibility'
```

</details>

<details>

<summary>点击查看 Section 9 - 其他消息 的所有选项</summary>

```yaml
#
#
#   ---------------  -  ------------------------------
#        Section 09  |  其他消息
#   ---------------  -  ------------------------------
#
other:
  compatibility-notice:
    enabled: true
    messages:
      - '%prefix% LevelledMobs 兼容性提示：'
      - '&8 &m->&r &b%incompatibilities% &7个可能的不兼容项被发现。请运行“&b/levelledmobs compatibility&7”进行检查。'
      - '&8 &m->&7 此消息因你拥有 &blevelledmobs.compatibility-notice&7 权限而发送。你可以在 &bmessages.yml&7 中关闭此消息。'
      - '&8 &m->&7 请确保你已按照插件Wiki页面的所有说明操作。'
  update-notice:
    messages:
      - '&b&nLevelledMobs 更新检查提示：'
      - '&7你的 &bLevelledMobs&7 版本已&boutdated&7！请尽快更新到 &bv%latestVersion%&7。&8(&7你当前运行的是 &bv%currentVersion%&8)'
    send-in-console: true
    send-on-join: true

  mob-head-drop-name: '%mob_name%的头颅'
  no-drop-in-chunk: '%prefix% &7你在该区域击杀的等级怪物数量已达上限，将不再获得等级掉落。请稍后再来。'
  create-debug:
    - '&b&n创建调试ZIP'
    - '&7仅当LevelledMobs开发者要求时才应运行此命令。用于协助遇到插件问题的用户。'
    - ''
    - '&7此命令将生成包含以下必要数据的ZIP文件：'
    - '&8 &m->&b 插件列表'
    - '&8 &m->&b 服务器版本'
    - '&8 &m->&b 当前及最大在线玩家数'
    - '&8 &m->&b latest.log 文件&7 &8(/logs/latest.log)'
    - ''
    - '&7LevelledMobs开发者不会为除解决问题外的目的分发或保留数据。你可在发送前自行核查内容。'
    - '&7如需继续创建ZIP文件，请运行：'
    - '&b/lm debug create-zip confirm&7'
```

</details>

***

<table>
  <thead>
    <tr>
      <th width="223" align="center">配置行选项</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center"><code>%prefix%</code></td>
      <td>LevelledMobs 在插件发送的所有消息前使用的前缀。</td>
    </tr>
    <tr>
      <td align="center"><code>%player%</code></td>
      <td>事件所针对的玩家名称。</td>
    </tr>
    <tr>
      <td align="center"><code>%label%</code></td>
      <td>运行 LM 指令时使用的主命令别名。<strong>示例：</strong> <code>/lm</code> 或 <code>/levelledmobs</code></td>
    </tr>
    <tr>
      <td align="center"><code>%amount%</code></td>
      <td>事件的输入数值。</td>
    </tr>
    <tr>
      <td align="center"><code>%entityType%</code></td>
      <td>事件中的 <code>EntityType</code> 实体类型值。</td>
    </tr>
    <tr>
      <td align="center"><code>%level%</code></td>
      <td>事件处理中实体的等级。</td>
    </tr>
    <tr>
      <td align="center"><code>%summonType%</code></td>
      <td>召唤时输入的 <code>EntityType</code> 类型值。</td>
    </tr>
    <tr>
      <td align="center"><code>%entity%</code></td>
      <td>被处理实体的名牌、<code>CustomName</code> 或默认名称。</td>
    </tr>
    <tr>
      <td align="center"><code>%x%</code> <code>%y%</code> <code>%z%</code></td>
      <td>这三个标签分别返回事件发生时的<strong>X</strong>、<strong>Y</strong>、<strong>Z</strong>坐标。</td>
    </tr>
    <tr>
      <td align="center"><code>%world%</code></td>
      <td>事件发生所在世界的名称。</td>
    </tr>
    <tr>
      <td align="center"><code>%targetUsername%</code></td>
      <td>事件目标的用户名。</td>
    </tr>
    <tr>
      <td align="center"><code>%targetDisplayname%</code></td>
      <td>事件目标的显示名称。</td>
    </tr>
    <tr>
      <td align="center"><code>%maxAmount%</code></td>
      <td>返回 <code>settings.yml</code> 中<strong>召唤指令数量限制</strong>的值。</td>
    </tr>
    <tr>
      <td align="center"><code>%minLevel%</code> <code>%maxLevel%</code></td>
      <td>返回处理事件时的 <code>minLevel</code> 和 <code>maxLevel</code> 值。</td>
    </tr>
    <tr>
      <td align="center"><code>%killed%</code></td>
      <td>返回处理事件中被击杀的实体数量。</td>
    </tr>
    <tr>
      <td align="center"><code>%skipped%</code></td>
      <td>返回 LM 击杀事件中被跳过的实体数量。</td>
    </tr>
    <tr>
      <td align="center"><code>%radius%</code></td>
      <td>LM 召唤指令中使用的半径输入值。</td>
    </tr>
    <tr>
      <td align="center"><code>%minRadius%</code> <code>%maxRadius%</code></td>
      <td>返回最小和最大半径值。</td>
    </tr>
    <tr>
      <td align="center"><code>%version%</code></td>
      <td>返回当前 LM 版本，格式为 <code>LM X.Y.Z b000</code>，其中 <code>X.Y.Z</code> 为发行版本，<code>b000</code> 为构建号。</td>
    </tr>
    <tr>
      <td align="center"><code>%description%</code></td>
      <td>返回 LM 内部描述文本。</td>
    </tr>
    <tr>
      <td align="center"><code>%supportedVersions%</code></td>
      <td>返回 LM 支持的版本信息文本。</td>
    </tr>
    <tr>
      <td align="center"><code>%contributors%</code></td>
      <td>返回 LM 内部贡献者列表文本。</td>
    </tr>
    <tr>
      <td align="center"><code>%incompatibilities%</code></td>
      <td>返回 LM 内部不兼容项文本。</td>
    </tr>
  </tbody>
</table>