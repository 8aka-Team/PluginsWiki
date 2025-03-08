---
sidebar_position: 12
---

# 更新弹窗

你可以使用弹出系统实现各种功能。  
我将使用弹出系统创建一个技能系统。  
![스크린샷 2024-03-09 180712](https://github.com/toxicity188/BetterHud/assets/114675706/f6da96db-15f0-4115-91af-1de3b1fe4419)  
正如我们之前学到的，请准备好所需的图像和字体文件。

``` yaml
brutal_strike_layer:
  y: -8
  x: 2
  images:
    1:
      name: skill_icon_brutal_strike
      scale: 0.6
    2:
      name: skill_cooldown_brutal_strike
      scale: 0.6
  texts:
    1:
      name: itim_skill
      pattern: "[mmocore_skill_level:BRUTAL_STRIKE]"
      layer: 1
      color: yellow
      outline: true
      x: 16
      y: 10
      align: center
    2:
      name: itim
      scale: 0.5
      pattern: "[mmocore_current_cooldown_skill:BRUTAL_STRIKE]"
      layer: 1
      color: yellow
      number-format: "#,###"
      outline: true
      x: 9
      align: center
      conditions:
        1:
          first: "mmocore_current_cooldown_skill:BRUTAL_STRIKE"
          second: 1
          operation: ">"
    3:
      name: itim
      scale: 0.5
      pattern: "[mmocore_current_cooldown_skill:BRUTAL_STRIKE]"
      layer: 1
      color: yellow
      outline: true
      x: 9
      align: center
      conditions:
        1:
          first: "mmocore_current_cooldown_skill:BRUTAL_STRIKE"
          second: 1
          operation: "<="
        2:
          first: "mmocore_current_cooldown_skill:BRUTAL_STRIKE"
          second: 0
          operation: ">"
```

请为每个技能创建相应的布局。

``` yaml
brutal_strike_popup: #弹出名称
  unique: true
  group: skill #弹出组
  x: 50 #GUI位置
  y: 100
  index: "mmocore_skill_bound_index:BRUTAL_STRIKE@t - 2"
  layouts:
    1: 
      name: brutal_strike_layer
  move:
    duration: 6 #最大弹出索引
    gui: 
      x-equation: 0
      y-equation: 0
    pixel:
      x-equation: -60 + 24(t - 1) #每个弹出窗口将定位的位置。
      y-equation: 0
  conditions:
    0:
      first: mmocore_is_casting_mode
      second: true
      operation: "=="
    1:
      first: "mmocore_bounded_skill:BRUTAL_STRIKE"
      second: true
      operation: "=="
charge_popup:
  unique: true
  group: skill #设置相同的组以加入弹出窗口。
  x: 50
  y: 100
  index: "mmocore_skill_bound_index:CHARGE@t - 2"
  layouts:
    1: 
      name: charge_layer
  move:
    duration: 6
    pixel:
      x-equation: -60 + 24(t - 1)
      y-equation: 0
  conditions:
    0:
      first: mmocore_is_casting_mode
      second: true
      operation: "=="
    1:
      first: "mmocore_bounded_skill:CHARGE"
      second: true
      operation: "=="
```

然后，你应该像这样创建一个弹出窗口。

```
default-popup: 
  - brutal_strike_popup
  - charge_popup
  - shield_barrier_popup
  - judgement_popup
  - rampage_popup
  - chain_hook_popup
```

最后，将此弹出窗口设置为默认。  
![녹화_2024_03_09_17_33_45_816](_image/po-1.gif)  
成功！