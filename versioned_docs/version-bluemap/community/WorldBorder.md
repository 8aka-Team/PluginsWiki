---
sidebar_position: 12
---

# 添加世界边界

在你的地图上显示世界边界有很多方法。  
所有这些方法都是通过在地图上添加标记来实现的，但有些方法比其他方法更简单，代价是控制或支持的平台较少。  
本指南将列出几种最常见的方法来为你的BlueMap添加世界边界！


## 在配置中手动添加
这是最受支持的方法。它适用于所有平台（Paper/Fabric/Forge等）。  
前往你的BlueMap配置目录，并打开`maps`文件夹。  
在那里，你会找到每个地图的`.conf`文件。  
打开与你想要添加世界边界的世界对应的文件，并滚动到底部，直到`marker-sets`部分。  
将以下代码片段复制到那里，并根据你的喜好进行调整：
```hocon
marker-sets: {
    world-borders: {
        label: "World Borders"
        toggleable: true
        default-hidden: false
        sorting: 0
        markers: {
            world-border: {
                type: "shape"
                label: "World Border"
                position: { x: 0, y: 64, z: 0 } # 世界的中心
                shape-y: 64
                shape: [
                    { x: -1000, z: -1000 }  # 左上角（西北）
                    { x:  1000, z: -1000 }  # 右上角（东北）
                    { x:  1000, z:  1000 }  # 右下角（东南）
                    { x: -1000, z:  1000 }  # 左下角（西南）
                ]
                line-color: { r: 255, g: 0, b: 0, a: 1.0 }  # 红色
                fill-color: { r:   0, g: 0, b: 0, a: 0.0 }  # 完全透明
            }
        }
    }
}
```
有关如何创建标记的更多信息，请参阅[官方标记指南](/versioned_docs/version-bluemap/wiki/customization/Markers.html)。

## 使用命令手动添加
你也可以使用流行的第三方插件[BlueMap Marker Manager](https://modrinth.com/plugin/bmarker)手动创建标记。（可作为Paper插件和Fabric模组使用。）  
这个插件允许你通过游戏内命令创建BlueMap标记，而不是通过配置文件。

创建标记集：
```
/bmarker set-create
/bmarker-setup-set id worldborders
/bmarker-setup-set map "world.(overworld)"
/bmarker-setup-set label World Borders
/bmarker-setup-set build
```

创建世界边界标记：
```
/bmarker create shape
/bmarker-setup id worldborder
/bmarker-setup label World Border
/bmarker-setup marker_set "worldborders_world.(overworld)"
/bmarker-setup add_edge -1000 1000
/bmarker-setup add_edge -1000 -1000
/bmarker-setup add_edge 1000 -1000
/bmarker-setup add_edge 1000 1000
/bmarker-setup height 64
/bmarker-setup line_color 255 0 0 1
/bmarker-setup fill_color 0 0 0 0
/bmarker-setup build
```

## 使用BlueBorder自动添加
如果你使用的是原版世界边界，有一种更简单的方法来添加世界边界：你可以安装[BlueBorder](https://github.com/pop4959/BlueBorder)插件！  
它会自动在你的世界边界位置添加一个世界边界标记，无需任何命令或配置！  
你可以在配置文件中选择边界的颜色。

## 使用BlueBridge自动添加
[BlueBridge](https://github.com/Mark-225/BlueBridge)是另一个可以添加标记的插件，标记位置为你的原版世界边界。  
下载`BlueBridgeCore.jar`和`BlueBridgeWB.jar`，并将它们放入你的插件文件夹中。  
有关如何使用此插件的更多信息，请访问[其wiki](https://github.com/Mark-225/BlueBridge/wiki/Usage)。

## 使用ChunkyBorder自动添加
如果你没有使用原版世界边界，你也可以使用[Chunky](https://modrinth.com/plugin/chunky)及其扩展[ChunkyBorder](https://modrinth.com/plugin/chunkyborder)来添加世界边界。  
然后你可以像这样创建世界边界：
```
/chunky radius 1000
/chunky border add
```
或者像这样：
```
/chunky world the_nether
/chunky shape circle
/chunky radius 1000
/chunky border add
```
有关如何使用Chunky和ChunkyBorder的更多信息，请访问它们各自的wiki：[Chunky Wiki](https://github.com/pop4959/Chunky/wiki)和[ChunkyBorder Wiki](https://github.com/pop4959/ChunkyBorder/wiki)  
你可以在配置文件中选择边界的颜色。

如果你是从[earth.motfe.net](https://earth.motfe.net/)获得的地球地图，那么你可以在这个网站上找到添加边界的精确命令和坐标：[docs.apocmc.us/minecraft-earth-map/map-borders](https://docs.apocmc.us/minecraft-earth-map/map-borders#id-1-500-scale-map)  
请注意，你_不需要_像这个网站建议的那样运行`/chunky start`！
