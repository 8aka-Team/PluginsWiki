---
sidebar_position: 1
---

# 标记

BlueMap 允许您在地图上添加各种标记。您可以通过在地图配置中手动配置它们，或者通过使用 BlueMap 的 [API](https://github.com/BlueMap-Minecraft/BlueMapAPI) 的第三方插件来管理标记。

使用 BlueMap API 的已知第三方插件列表可在 [这里](/versioned_docs/version-bluemap/community/3rdPartySupport.html) 找到。

## 标记集

所有标记都分组到标记集中。标记集将在菜单中可见，并且可以一次性启用或禁用该集中的所有标记。

以下是一个标记集的示例配置：

```yaml
example-marker-set: {
  label: "示例标记集"
  toggleable: true
  default-hidden: false
  sorting: 0
  markers: {
    # 标记放在这里 ...
  }
}
```

**属性：**
- `label`: 标记集的标签。将用作菜单项的名称
- `toggleable`: 如果为 `true`，则可以在菜单中启用或禁用标记集
- `default-hidden`: 如果为 `true`，则标记集默认隐藏，用户可以选择启用
- `sorting`: 一个数字，定义标记集在菜单中显示的顺序（`sorting` 值较低的标记集在列表中排在前面）
- `markers`: 此标记集中所有标记的列表

## 标记类型

根据您的需求，您可以使用不同类型的标记。

**每个标记都有：**
- 一个 `type` 属性，定义标记的类型
- 一个 `position`，即标记（或标记中心）在地图上的 x、y 和 z 坐标
- 一个 `label`，定义标记的名称。例如，在标记列表中使用
- 一个 `sorting` 数字，定义标记在列表和菜单中显示的（默认）顺序（`sorting` 值较低的标记在列表中排在前面）
- 一个 `listed` 属性，定义标记是否会在列表和菜单中列出
- 一个 `min-distance` 和一个 `max-distance`，默认值为“无限制”，但可用于限制标记在相机距离内显示

### POI 标记

POI 标记是最基本的标记。它是一个简单的图标图像，可以放置在地图上的任何位置。点击时，它会显示其标签。

![qLZpKw97EU](https://user-images.githubusercontent.com/10765470/211083198-93d034fc-9d6b-4ee9-aef2-08db0958c1ee.png)

以下是一个 POI 标记的示例配置：

```yaml
example-poi-marker: {
    type: "poi"
    position: { x: 1, y: 64, z: -23 }
    label: "示例 POI 标记"
    
    # 可选：
    detail: "这是一个 <b>POI</b> 标记"
    icon: "assets/poi.svg"
    anchor: { x: 25, y: 45 }
    sorting: 0
    listed: true
    classes: [
        "my-custom-class"
    ]
    min-distance: 10
    max-distance: 10000000
}
```

**特定的 POI 标记属性包括：**
- `detail` 是点击图标时显示的文本。此属性允许使用任何 HTML 标签。默认值为标记的标签。
- `icon`，即用作标记图标的图像的 URL。可以是本地文件或远程 URL。图像不会调整大小，因此图像应完全符合您希望图标在地图上的大小。支持所有可以在 HTML img 标签中使用的图像格式
- `anchor`。也可以称为“偏移量”。它基本上是标记图像上的像素，该像素放置在标记的位置。通常您希望这是标记图像的中心。但例如，如果您的标记是一个针，您可能希望这是针尖
- 一个 `classes` 列表，这些类将添加到标记元素中。如果您想使用自定义 CSS 样式化它们或在自定义脚本中使用它们，这将非常有用

### HTML 标记

HTML 标记用于将任何 HTML 元素添加到地图中。这为您提供了完全的自由，如果您想添加简单的文本、任何图像、按钮甚至嵌入视频 ;D。

![ESQgDvgzHg](https://user-images.githubusercontent.com/10765470/211083264-ca89c1b5-0051-4a82-af45-d9ebec9e9c35.png)

以下是一个 HTML 标记的示例配置：

```yaml
example-html-marker: {
    type: "html"
    position: { x: 1, y: 64, z: -23 }
    label: "示例 HTML 标记"
    html: "<div style='line-height: 2em; font-size: 2em; color: white; transform: translate(-50%, -50%);'>示例 HTML 标记</div>"
    
    # 可选：
    anchor: { x: 0, y: 0 }
    sorting: 0
    listed: true
    classes: [
        "my-custom-class"
    ]
    min-distance: 10
    max-distance: 10000000
}
```

**HTML标记的特定属性包括：**
- `html` .. 显而易见 .. 是您想要显示的HTML元素的HTML代码
- `anchor`。也可以称为“偏移”。它基本上是HTML元素上的像素，该像素被放置在标记的位置。*(与POI标记的工作方式相同，只是使用HTML元素)*
- 一个`classes`列表，这些类将被添加到标记元素中。如果您想使用自定义CSS样式或在自定义脚本中使用它们，这将非常有用。

### 线标记
线标记如其名所示。它们用于在地图上绘制一条线。如果您点击该线，它将显示标记的`detail`。

![dIZ7W6zjG2](https://user-images.githubusercontent.com/10765470/211083298-0116588c-15c8-4e84-8690-1a2936ae5c0c.png)

以下是一个线标记的示例配置：
```yaml
example-line-marker: {
    type: "line"
    position: { x: 1, y: 64, z: -25 }
    label: "Example Line Marker"
    line: [
        { x: 1, y: 64, z: -23 }
        { x: 1, y: 64, z: -24 }
        { x: 1, y: 64, z: -25 }
        { x: 2, y: 64, z: -25 }
        { x: 3, y: 64, z: -25 }
    ]
    
    # 可选：
    detail: "This is a <b>line</b> marker"
    #link: "https://google.de/"
    new-tab: false
    depth-test: false
    line-width: 5
    line-color: { r: 255, g: 0, b: 0, a: 1.0 }
    sorting: 0
    listed: true
    min-distance: 10
    max-distance: 10000000
}
```

**线标记的特定属性包括：**
- `line` 是一个定义线的位置数组。线将按照这些位置的顺序绘制
- `detail` 是点击线时显示的文本。此属性允许使用任何HTML标签
- `link` 是一个可选的URL，点击线时将打开该URL
- `new-tab` 定义上述链接是否应在新标签页中打开
- `depth-test` 如果为`false`，标记将始终渲染在所有其他（高分辨率）地形之上。如果为`true`，高分辨率瓦片将能够在它们位于标记前方时覆盖标记
- `line-width` 是线的宽度，以像素为单位
- `line-color` 是线的颜色

线标记的`position`属性不会改变线的实际位置，但它用于计算渲染顺序等。确保它始终大致位于线的中间以获得最佳效果 :)

### 形状标记
形状标记是放置在地图上的任何平面形状（多边形）。例如，您可以使用它来标记区域。
如果您点击形状，它将显示标记的`detail`。

![xDcmgynWv7](https://user-images.githubusercontent.com/10765470/211083324-04829ca3-515b-4b6b-8223-c9edaffbd07a.png)

以下是一个形状标记的示例配置：
```yaml
example-shape-marker: {
    type: "shape"
    position: { x: 1, y: 64, z: -23 }
    label: "Example Shape Marker"
    shape: [
        { x: 1, z: -23 }
        { x: 1, z: -24 }
        { x: 1, z: -25 }
        { x: 2, z: -25 }
        { x: 3, z: -25 }
    ]
    shape-y: 64
    
    # 可选：
    detail: "This is a <b>shape</b> marker"
    #link: "https://google.de/"
    new-tab: false
    depth-test: false
    line-width: 5
    line-color: { r: 255, g: 0, b: 0, a: 1.0 }
    fill-color: { r: 200, g: 0, b: 0, a: 0.3 }
    sorting: 0
    listed: true
    min-distance: 10
    max-distance: 10000000
}
```

**形状标记的特定属性包括：**
- `shape` 是一个定义形状的x,z位置数组（不包括y）。形状将按照这些位置的顺序绘制，最后一个位置自动连接到第一个位置
- `shape-y` 是形状的y位置
- `detail` 是点击形状时显示的文本。此属性允许使用任何HTML标签
- `link` 是一个可选的URL，点击形状时将打开该URL
- `new-tab` 定义上述链接是否应在新标签页中打开
- `depth-test` 如果为`false`，标记将始终渲染在所有其他（高分辨率）地形之上。如果为`true`，高分辨率瓦片将能够在它们位于标记前方时覆盖标记
- `line-width` 是线的宽度，以像素为单位
- `line-color` 是线的颜色
- `fill-color` 是填充的颜色

### 挤出标记
挤出标记与形状标记相同，但形状在两个高度之间挤出。通过这种方式，您可以标记仅限于特定y位置的区域。

![SqRL5ouEDS](https://user-images.githubusercontent.com/10765470/211083342-211b5d8b-81a3-407f-849b-af555707b85d.png)

以下是一个挤出标记的示例配置：
```yaml
example-extrude-marker: {
    type: "extrude"
    position: { x: 1, y: 64, z: -23 }
    label: "Example Extrude Marker"
    shape: [
        { x: 1, z: -23 }
        { x: 1, z: -24 }
        { x: 1, z: -25 }
        { x: 2, z: -25 }
        { x: 3, z: -25 }
    ]
    shape-min-y: 47
    shape-max-y: 72
    
    # 可选：
    detail: "This is a <b>extrude</b> marker"
    #link: "https://google.de/"
    new-tab: false
    depth-test: true
    line-width: 5
    line-color: { r: 255, g: 0, b: 0, a: 1.0 }
    fill-color: { r: 200, g: 0, b: 0, a: 0.3 }
    sorting: 0
    listed: true
    min-distance: 10
    max-distance: 10000000
}
```

**特定的挤出标记属性包括：**
- `shape` 是一个由 x、z 位置（不包括 y）组成的数组，用于定义形状。形状将按照这些位置的顺序绘制，最后一个位置会自动连接到第一个位置。
- `shape-min-y` 是形状的下部 y 位置。
- `shape-max-y` 是形状的上部 y 位置。
- `detail` 是点击形状时显示的文本。此属性允许使用任何 HTML 标签。
- `link` 是一个可选的 URL，点击形状时会打开该链接。
- `new-tab` 定义上述链接是否应在新标签页中打开。
- `depth-test` 如果为 `false`，标记将始终渲染在所有其他（高分辨率）地形之上。如果为 `true`，高分辨率瓦片如果位于标记前方，则可以覆盖标记。
- `line-width` 是线条的宽度，以像素为单位。
- `line-color` 是线条的颜色。
- `fill-color` 是填充的颜色。

## 完整示例

以下是一个完整的示例，展示了它可能在地图配置（末尾）中的样子：

```yaml
# 在这里，您可以定义任何静态标记集，这些标记应显示在地图上。
# 您可以随时更改此配置。
# 如果您需要动态标记，可以使用任何与 BlueMap 的 API 集成的插件。
# 以下是一个列表
marker-sets: {

    example-marker-set: {
    
        label: "Example Marker Set"
        toggleable: true
        default-hidden: false
        sorting: 0
        
        markers: {
        
            example-poi-marker: {
                type: "poi"
                position: { x: 1, y: 64, z: -23 }
                label: "Example POI Marker"
                icon: "assets/poi.svg"
                anchor: { x: 25, y: 45 }
                sorting: 0
                listed: true
                min-distance: 10
                max-distance: 10000000
            }
            
            example-html-marker: {
                type: "html"
                position: { x: 1, y: 64, z: -23 }
                label: "Example HTML Marker"
                html: "<div style='line-height: 2em; font-size: 2em; color: white; transform: translate(-50%, -50%);'>Example HTML Marker</div>"
                anchor: { x: 0, y: 0 }
                sorting: 0
                listed: true
                min-distance: 10
                max-distance: 10000000
            }
            
            example-line-marker: {
                type: "line"
                position: { x: 1, y: 64, z: -25 }
                line: [
                    { x: 1, y: 64, z: -23 }
                    { x: 1, y: 64, z: -24 }
                    { x: 1, y: 64, z: -25 }
                    { x: 2, y: 64, z: -25 }
                    { x: 3, y: 64, z: -25 }
                ]
                label: "Example Line Marker"
                detail: "This is a <b>line</b> marker"
                #link: "https://google.de/"
                new-tab: false
                depth-test: false
                line-width: 5
                line-color: { r: 255, g: 0, b: 0, a: 1.0 }
                sorting: 0
                listed: true
                min-distance: 10
                max-distance: 10000000
            }
            
            example-shape-marker: {
                type: "shape"
                position: { x: 1, y: 64, z: -23 }
                shape: [
                    { x: 1, z: -23 }
                    { x: 1, z: -24 }
                    { x: 1, z: -25 }
                    { x: 2, z: -25 }
                    { x: 3, z: -25 }
                ]
                shape-y: 64
                label: "Example Shape Marker"
                detail: "This is a <b>shape</b> marker"
                #link: "https://google.de/"
                new-tab: false
                depth-test: false
                line-width: 5
                line-color: { r: 255, g: 0, b: 0, a: 1.0 }
                fill-color: { r: 200, g: 0, b: 0, a: 0.3 }
                sorting: 0
                listed: true
                min-distance: 10
                max-distance: 10000000
            }
            
            example-extrude-marker: {
                type: "extrude"
                position: { x: 1, y: 64, z: -23 }
                shape: [
                    { x: 1, z: -23 }
                    { x: 1, z: -24 }
                    { x: 1, z: -25 }
                    { x: 2, z: -25 }
                    { x: 3, z: -25 }
                ]
                shape-min-y: 47
                shape-max-y: 72
                label: "Example Extrude Marker"
                detail: "This is a <b>extrude</b> marker"
                #link: "https://google.de/"
                new-tab: false
                depth-test: true
                line-width: 5
                line-color: { r: 255, g: 0, b: 0, a: 1.0 }
                fill-color: { r: 200, g: 0, b: 0, a: 0.3 }
                sorting: 0
                listed: true
                min-distance: 10
                max-distance: 10000000
            }
            
        }
        
    }
    
}
```
