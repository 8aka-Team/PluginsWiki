---
sidebar_position: 3
---

# 应用资源包

在config.yml中，你可以找到这些选项。

``` yaml
pack-type: folder
namespace: betterhealthbar
build-folder: BetterHealthBar/build
merge-other-folder: []
enable-self-host: true
create-pack-mcmeta: true
self-host-port: 8163
```
![截图 2024-05-11 195803](https://github.com/toxicity188/BetterHealthBar3/assets/114675706/6be40b34-0593-4ace-8cb3-03b365cb84fd)  
![截图 2024-05-11 200332](https://github.com/toxicity188/BetterHealthBar3/assets/114675706/3b913891-6896-4d66-8c66-16038af9cd7c)  
你需要将这个构建文件夹合并到你的资源包中。

或者你可以像这样使用自托管资源包：
``` yaml
pack-type: zip
namespace: betterhealthbar
build-folder: BetterHealthBar/build
merge-other-folder: []
enable-self-host: true
create-pack-mcmeta: true
self-host-port: 8163
```
![截图 2024-05-11 200642](https://github.com/toxicity188/BetterHealthBar3/assets/114675706/f09ee634-4dc7-4f6f-b923-79ed07b232e8)  
![2024-05-11_20 07 48](https://github.com/toxicity188/BetterHealthBar3/assets/114675706/ba5bd2db-c2ac-484b-97eb-858737d4f891)  
成功！
