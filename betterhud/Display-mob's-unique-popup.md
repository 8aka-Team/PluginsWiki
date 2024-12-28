---
sidebar_position: 10
---

# 显示生物独有弹窗

```yaml
monster_health:
  images:
    1:
      name: monster_empty
    2:
      name: monster_health
      x: 10
      y: 2
  texts:
    1:
      name: test_font
      pattern: "HP [entity_health] // [entity_max_health]"
      align: left
      x: 10
      y: 2
      scale: 0.5
      color: "green"
      outline: true
```
首先，创建一个表示怪物信息的布局。
```yaml
monster_health:
  triggers:
    - attack
  duration: 60
  key-mapping: true
  x: 10
  y: 35
  move:
    duration: 3
    pixel:
      x-equation: 0
      y-equation: 20t
  layouts:
    1:
      name: monster_health
```
其次，创建一个启用键映射的弹出窗口。  
![Recording_2024_03_09_20_34_37_639](_image/mo-1.gif)  
成功！
