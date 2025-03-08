---
sidebar_position: 8
---

# 枪支动作

```yaml
  Firearm_Action:
    Type: <FirearmType>
    Firearm_Action_Frequency: <每隔x发使用一次>
    Open:
      Time: <ticks>
      Mechanics: <机械>
    Close:
      Time: <ticks>
      Mechanics: <机械>
```

#### **Type（类型）**

定义武器的枪支动作行为。有4种不同的枪支类型。这些枪支动作可以增加一层深度，尤其是如果您为枪支动作定制了自定义声音。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs queryString="type">
<TabItem value="SLIDE" label="SLIDE（滑套）">

对于大多数弹夹供弹的武器，如果弹夹不为空，可以简单地更换弹夹而无需额外的枪支动作。

* 射击时：
  * 武器开火
* 装填弹药时：
  * 如果弹夹为空
    * 武器开启（拉动滑套，特别适用于H&K武器、AUG和其他武器）
    * 武器装填（取出弹夹，插入新弹夹）
    * 武器关闭（滑套返回，装填一发子弹）
  * 如果弹夹不为空
    * 武器装填（取出弹夹，插入新弹夹）

</TabItem>
<TabItem value="REVOLVER" label="REVOLVER（左轮手枪）">

对于左轮手枪，必须拉出弹药筒才能装填弹药。

* 射击时：
  * 武器开火
* 装填弹药时：
  * 武器开启（旋转部分弹药筒弹出）
  * 装填计时器开始（将弹药装入每个槽位）
  * 武器关闭（旋转部分弹药筒弹回）

</TabItem>

<TabItem value="PUMP" label="PUMP（泵动式）">

对于泵动式武器，必须来回泵动以弹出和装填弹壳。

* 射击时：
  * 武器开火
  * 武器开启（弹出弹壳）
  * 武器关闭（装填弹壳）
* 装填弹药时：
  * 如果弹夹为空
    * 武器装填
    * 武器开启（如果尚未开启，弹出弹壳）
    * 武器关闭（装填弹壳）
  * 如果弹夹不为空
    * 武器装填

</TabItem>

<TabItem value="LEVER" label="LEVER（拉机式）">


对于拉机式/枪机式武器，必须先拉动拉机，然后再推动它以弹出和装填子弹。与“PUMP”不同之处在于，在重新装填之前，武器**必须**先打开。

* 射击时：
  * 武器开火
  * 武器开启（弹出一发子弹）
  * 武器关闭（装填一发子弹）
* 装填弹药时：
  * 如果弹夹为空
    * 武器开启（弹出一发子弹，并解锁弹夹）
    * 武器装填
    * 武器关闭（装填一发子弹，并锁定弹夹）
  * 如果弹夹不为空
    * 武器装填

</TabItem>
</Tabs>

:::info
在使用不同射击类型的枪支动作时

* `SINGLE` -> 射击后触发枪支动作
* `BURST` -> 完成连发后触发枪支动作
* `AUTO` -> 取消全自动射击后触发枪支动作
  :::

**`Firearm_Action_Frequency`（枪支动作频率）: \<整数>**

定义枪支动作的使用频率。

如果射击后剩余的弹药数量可以被`Firearm_Action_Frequency`整除，则触发枪支动作。例如，当`Firearm_Action_Frequency: 2`时，如果武器射击后弹夹中剩余的弹药为18发，则触发枪支动作。如果剩余弹药为`9`发，则不会触发枪支动作。

#### Open（开启）

* `Time`（时间）
  * 打开武器所需的时间，以游戏刻度计算。
* `Mechanics`（机械）
  * 如果取消枪支动作，则取消延迟播放的声音。
  * 参考[机械](https://app.gitbook.com/o/MgHAZkcfIhs3YcmBjk2r/s/hz7yMxlL81NxAT44nraH/ "mention")维基页面。

#### Close（关闭）

* `Time`（时间）
  * 关闭武器所需的时间，以游戏刻度计算。
* `Mechanics`（机械）
  * 如果取消枪支动作，则取消延迟播放的声音。
  * 参考[机械](https://app.gitbook.com/o/MgHAZkcfIhs3YcmBjk2r/s/hz7yMxlL81NxAT44nraH/ "mention")维基页面。
