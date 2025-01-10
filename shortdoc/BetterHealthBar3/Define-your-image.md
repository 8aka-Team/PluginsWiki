---
sidebar_position: 5
---

# 定义你的图像

![스크린샷 2024-05-11 201341](https://github.com/toxicity188/BetterHealthBar3/assets/114675706/0f36daac-45af-407d-bd6b-dcf148158314)  
在 BetterHealthBar/image 文件夹中，你可以找到默认的图像配置。

![스크린샷 2024-05-11 201129](https://github.com/toxicity188/BetterHealthBar3/assets/114675706/f9366ddb-f1bf-4ecf-98e6-4e64a96c559f)  
在 BetterHealthBar/assets 文件夹中，你可以找到默认的血条图像。

# 配置
图像可以定义为3种类型。
- single(单一)
- listener(监听器)
- sequence(序列)

### 单一
``` yaml
empty:
  file: empty.png
  type: single
```
单一图像仅代表一个图像，如背景或图标。

### 监听器
``` yaml
first:
  type: listener
  file: first.png
  split-type: left #左, 右, 上, 下
  split: 25 #片段数量
```
监听器图像代表按某个方向分割的图像，如血条。
![68747470733a2f2f692e696d6775722e636f6d2f52434b346a62712e706e67](https://github.com/toxicity188/BetterHealthBar3/assets/114675706/4af274c8-c812-41c5-8183-f718b8c265b1)  
![68747470733a2f2f692e696d6775722e636f6d2f793070794442362e706e67](https://github.com/toxicity188/BetterHealthBar3/assets/114675706/51d5a57f-9d30-45c1-8add-73aa56c48c54)

### 序列
``` yaml
test_gif:
  type: sequence
  files:
    - test/test_00000.png
    - test/test_00001.png
    - test/test_00002.png
    - test/test_00003.png
    - test/test_00004.png
    - test/test_00005.png
    - test/test_00006.png
    - test/test_00007.png
    - test/test_00008.png
    - test/test_00009.png
    - test/test_00010.png
```
序列图像代表动画图像。