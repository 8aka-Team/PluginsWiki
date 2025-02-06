# Spread

Spread允许你控制射击后方向的随机性。一般来说，子弹不应该完全笔直飞行，而是希望有一些随机角度。不同的视频游戏处理这个问题的方式各不相同，但通常情况下，你应该让第一枪射击相对准确，并随着时间增加散布度。

:::info
散布度（Spread）$\ne$ 准确度（Accuracy）。散布度是准确度的**相反**。散布度越低，准确度越高。&#x20;
:::

```yaml
    Spread:
      Spread_Image:
        Name: <路径>
        Field_Of_View_Width: <度数> 
        Field_Of_View_Height: <度数> 
      Base_Spread: <基础散布度>
      Modify_Spread_When:
        Zooming: <数值> 或 <百分比>
        Sneaking: <数值> 或 <百分比>
        Standing: <数值> 或 <百分比>
        Walking: <数值> 或 <百分比>
        Riding: <数值> 或 <百分比>
        Sprinting: <数值> 或 <百分比>
        Dual_Wielding: <数值> 或 <百分比>
        Swimming: <数值> 或 <百分比>
        In_Midair: <数值> 或 <百分比>
        Gliding: <数值> 或 <百分比>
      Changing_Spread:
        Starting_Amount: <数值>
        Reset_Time: <刻数>
        Increase_Change_When:
          Always: <数值> 或 <百分比>
          Zooming: <数值> 或 <百分比>
          Sneaking: <数值> 或 <百分比>
          Standing: <数值> 或 <百分比>
          Walking: <数值> 或 <百分比>
          Riding: <数值> 或 <百分比>
          Sprinting: <数值> 或 <百分比>
          Dual_Wielding: <数值> 或 <百分比>
          Swimming: <数值> 或 <百分比>
          In_Midair: <数值> 或 <百分比>
          Gliding: <数值> 或 <百分比>
        Bounds:
          Reset_After_Reaching_Bound: <true/false>
          Minimum: <最小散布度>
          Maximum: <最大散布度>
```

#### Spread_Image

散布图像是位于**你的服务器 -> 插件 -> WeaponMechanics -> spread_patterns**文件夹中的`.png`文件。你可以与其他散布特性一起使用这个功能来准确地复制视频游戏中的散布效果。

* `Name`
  * 图像文件的名称（例如，`"circle.png"`）。&#x20;
* `Field_Of_View_Width`
  * 图像的“最大角度”。&#x20;
  * 如果将其设置为`45.0`，则图像边缘的像素将呈现45度角。&#x20;
  * 默认为`45.0`。
* `Field_Of_View_Height`
  * 与`Field_Of_View_Width`相同，但用于垂直角度。

:::info
如果你创建自己的图像文件，请确保只使用灰度颜色！建议将图像文件保持在小于128x128的尺寸，但不同尺寸的图像对CPU没有影响。
:::

#### Base_Spread

应用于所有射击的随机性。同时应用于垂直和水平方向。&#x20;

#### Modify_Spread_When

根据玩家的动作修改散布度的量。例如，当玩家使用瞄准镜时，你可能希望减少散布度。

* `Zooming` -> 使用武器进行瞄准
* `Sneaking` -> 玩家按住Shift键时
* `Standing` -> 射击者不移动时
* `Walking` -> 射击者移动时
* `Riding` -> 射击者骑乘实体时
* `Sprinting` -> 玩家进行冲刺时
* `Dual_Wielding` -> 射击者双手持有武器时
* `Swimming` -> 射击者在水中时
* `In_Midair` -> 射击者在空中时
* `Gliding` -> 射击者使用滑翔翼滑翔时

例如：

```yaml
      Modify_Spread_When:
        Zooming: -5  # 使用瞄准镜时增加准确度
        Sneaking: -2
        Walking: 1.5
        Riding: 3.0
        Sprinting: 2.5
        Swimming: 1.5
        In_Midair: 4
        Gliding: 5
```

#### Changing_Spread

在每次连续射击后改变散布度。这可以用来使枪支在连续射击时不准确。&#x20;

* `Starting_Amount`
  * 基础改变量。
  * 如果你希望第一枪射击准确，使用`0`。&#x20;
* `Reset_Time`
  * 重置散布度返回到`Starting_Amount`所需的时间，以刻为单位。
  * 计时器在每次射击后重置。
* `Increase_Change_When`
  * 这与[#modify_spread_when](spread.md#modify_spread_when "mention")的工作方式相同
  * `Always` -> 每次射击
  * \+ [#modify_spread_when](spread.md#modify_spread_when "mention")中的所有选项
* `Bounds`
  * 定义最小和最大散布度。
  * `Reset_After_Reach_Bounds`
    * 使用`true`将其重置为`Starting_Amount`
    * 使用`false`使散布度保持高，适用于连续射击的情况。
  * `Minimum`
    * 允许的最低散布度值。
  * `Maximum`
    * 允许的最高散布度值。
