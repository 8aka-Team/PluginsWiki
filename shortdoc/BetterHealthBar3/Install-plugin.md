---
sidebar_position: 1
---

# 安装插件

![截图 2024-05-11 194940](https://github.com/toxicity188/BetterHealthBar3/assets/114675706/abe8f441-6d41-4b86-bf8a-0a46e08989d5)  
首先，在SpigotMC上下载jar文件。

![截图 2024-05-11 195509](https://github.com/toxicity188/BetterHealthBar3/assets/114675706/e671fad8-bccc-4155-b5f4-b2d1fa2a2f05)  
然后，将其放入你的Bukkit/plugins文件夹中。

![截图 2024-05-11 195615](https://github.com/toxicity188/BetterHealthBar3/assets/114675706/b7148b7f-4bd0-4cb3-be6a-39a5125dda7b)  
完成！


# 如何与BetterHud一起使用BetterHealthBar

1. 在BetterHealthBar的配置中调整一些选项。

```
enable-self-host: false

shaders:
rendertype_text:
vsh: false
fsh: false
   ```

2. 为每个资源包管理插件进行额外配置。

### Oraxen 2.0

   ```
BetterHealthBar/config.yml
pack-type: zip
build-folder: Oraxen/pack/external_packs/bh3
   ```

   ```
Oraxen/settings.yml
Pack:
import:
external_packs: true
   ```

### ItemsAdder

   ```
ItemsAdder/config.yml
resource-pack:
zip:
merge_other_plugins_resourcepacks_folders:
- BetterHealthBar/build
- BetterHud/build
   ```
