---
sidebar_position: 2
---

# 调整攻击追踪器

触发攻击检测所需的最小新玩家数量。默认值：`8`

```yaml
min-players-for-attack: 8
```

攻击必须持续的最小时间（以毫秒为单位）才能被视为正在进行。默认值：`30000`

```yaml
min-attack-duration: 30000
```

确认攻击所需的最小事件报告数量，作为防止误报的缓冲。默认值：`2`

```yaml
min-attack-threshold: 2
```

在检测到新攻击之前所需的冷却时间（以毫秒为单位）。默认值：`3000`

```yaml
attack-cooldown-delay: 3000
```
