---
sidebar_position: 4
---

# 重新加载

:::info
如果你想要你的枪具有**无限弹药**并且永远不需要重新加载，你可以完全删除枪械中的`Reload`模块。&#x20;
:::

```yaml
  Reload:
    Trigger: <触发器>
    Magazine_Size: <数量>
    Ammo_Per_Reload: <数量>
    Unload_Ammo_On_Reload: <true/false>
    Reload_Duration: <刻数>
    Shoot_Delay_After_Reload: <刻数>
    Start_Mechanics: <机械>
    Finish_Mechanics: <机械>
    Ammo:  # 更多信息请向下滚动
```

#### 触发器

用于触发重新加载的[触发器.md](../../trigger.md "mention")。

#### 弹夹大小

可以装载到枪械中的最大弹药量。

#### 每次重新加载的弹药量

使用此功能逐个加载子弹（一些真实枪械内置弹夹，需要逐个加载）。否则，默认为[#magazine\_size](./#magazine_size "mention")。&#x20;

#### 重新加载时卸载弹药

定义重新加载时是否卸载弹药。这意味着将取出武器中剩余的所有弹药，并且如果定义了`Ammo`，它们将被归还给玩家。

#### 重新加载持续时间

以刻为单位，重新装填弹夹所需的时间。&#x20;

#### 重新加载后射击延迟

重新加载后枪械可以射击的时间间隔，以刻为单位。

#### 开始机械

当武器开始重新加载时触发的机械。使用 [机械](https://app.gitbook.com/o/MgHAZkcfIhs3YcmBjk2r/s/hz7yMxlL81NxAT44nraH/ "mention") wiki。

* `@Source{}` -> 拿着武器的实体。

#### 完成机械

当武器完成重新加载时触发的机械。使用 [机械](https://app.gitbook.com/o/MgHAZkcfIhs3YcmBjk2r/s/hz7yMxlL81NxAT44nraH/ "mention") wiki。

* `@Source{}` -> 拿着武器的实体。

#### 弹药

查看 [弹药.md](ammo.md "mention") wiki 页面。