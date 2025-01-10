---
sidebar_position: 2
---

# 通用配置

![截图 2024-05-11 195803](https://github.com/toxicity188/BetterHealthBar3/assets/114675706/af183aa9-7543-495b-8aad-155388a2d9b8)  
如果你安装了这个插件，这些文件夹将会被生成。

``` yaml
debug: false #启用错误堆栈跟踪。
metrics: true #启用bstats。
pack-type: folder #folder, zip
namespace: betterhealthbar #插件的资源包命名空间。
default-duration: 60 #血条的剩余时间
build-folder: BetterHealthBar/build #构建文件夹位置
default-height: 1 #血条的高度
look-degree: 20 #玩家视野的角度
look-distance: 15 #玩家视野的距离
merge-other-folder: [] #将其他文件夹合并到构建文件夹
create-pack-mcmeta: true #是否创建pack.png和pack.mcmeta
enable-self-host: true #启用自托管。
self-host-port: 8163 #自托管的端口。
blacklist-entity-type: #黑名单实体。
- ARMOR_STAND
- TEXT_DISPLAY
- BLOCK_DISPLAY
- ITEM_DISPLAY
disable-to-invulnerable-mob: true #对无敌生物禁用
shaders: #核心着色器文件
  rendertype_text:
    vsh: true
    fsh: true
plugin-version: 3.0-alpha-3 #请勿编辑此项。
use-core-shaders: true #如果你想在使用着色器包时使用BetterHealthBar，将此设置为false。
```
配置如下。