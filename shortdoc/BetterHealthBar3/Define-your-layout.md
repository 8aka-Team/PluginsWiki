---
sidebar_position: 7
---

# 资源

![截图 2024-05-11 202014](https://github.com/toxicity188/BetterHealthBar3/assets/114675706/b352ffdd-906f-488f-b35f-4d2cf0485445)  
在BetterHealthBar/layouts文件夹中，你可以找到默认配置。

# 配置
布局可以将多个图像、文本合并为一个。

布局
  - 图像
  - 文本

``` yaml
default_layout:
  images:
    1:
      image: 空
    2:
      image: 第一个
      listener:
        class: health_before #监听器用于监听图像。
    3:
      image: 红色
      listener:
        class: health
      conditions:
        1: #条件
          first: health_percentage
          second: 0.33
          operation: "<"
    4:
      image: 黄色
      listener:
        class: health
      conditions:
        1:
          first: health_percentage
          second: 0.33
          operation: ">="
        2:
          first: health_percentage
          second: 0.66
          operation: "<"
    5:
      image: 绿色
      listener:
        class: health
      conditions:
        1:
          first: health_percentage
          second: 0.66
          operation: ">="
  texts:
    1:
      text: 默认文本 #使用的字体
      pattern: "[entity_name]" #文本模式
      align: 居中 #对齐
      x: 60
      y: 20
      scale: 0.5
```