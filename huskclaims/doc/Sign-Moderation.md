---
sidebar_position: 6
---

# 告示牌审核

HuskClaims 提供了一个审核功能，用于监视玩家放置的告示牌和悬挂告示牌的文本内容，并自动根据禁用词列表过滤内容。告示牌审核适用于所有类型的文本输入告示牌（悬挂告示牌、墙上的告示牌和立式告示牌——包括两面），并且需要 Minecraft 1.19.4+ Paper 服务器。该系统可以在 `config.yml` 的 `moderation.signs` 部分进行配置：

<details>
<summary>告示牌审核 — config.yml</summary>

```yaml
  signs:
    # 是否在放置/编辑告示牌时通知使用 /signspy 的用户。需要 Minecraft 1.19.4+
    notify_moderators: true
    # 是否过滤消息
    filter_messages: false
    # 是否仅在被过滤的告示牌上发送通知
    only_notify_if_filtered: false
    # 用于替换被过滤消息内容的单个字符
    replacement_character: '#'
    # 要过滤的告示牌中的单词列表
    filtered_words: []
```
</details>

:::tip 言论审查

**这并非原英文文档提供的,这是文档翻译本土化的一部分**

国内腐竹应该重视此功能,防止恶意用户在服务器内冲塔导致自身进局子

HuskClaims 自带的告示牌审查很低级无法阻挡,推荐使用[AdvancedSensitiveWords](https://www.minebbs.com/resources/advanced-sensitive-words-minecraft-folia.7398/)

:::


## 告示牌监视
要开始监视告示牌，请使用 `/signspy [on|off]`（参见[[命令]]）。这需要 `huskclaims.command.signspy` 权限才能使用。之后，每当用户放置告示牌或编辑告示牌文本时（除非告示牌为空），您将开始接收消息——如果您正在使用跨服务器模式，这还包括在其他服务器上放置的告示牌。

如果您点击聊天消息中告示牌的位置，如果 [HuskHomes 钩子正在使用](../hooks#HuskHomes)，您将被传送到告示牌的位置。

## 告示牌过滤
您可以选择根据配置的禁用词列表过滤告示牌。如果告示牌包含任何禁用词，告示牌文本中的单词将自动被审查并替换为选定的字符。放置告示牌的用户也将在聊天中被告知其告示牌已被过滤。

当告示牌被过滤时，所有监视告示牌的人都会收到通知警告。您还可以选择仅让管理员监视需要过滤的告示牌，以减少聊天中的杂乱信息。