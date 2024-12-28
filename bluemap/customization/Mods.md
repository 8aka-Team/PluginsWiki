---
sidebar_position: 4
---

# 配置模组

## 概述
BlueMap 会自动在您的服务器文件中查找模组和数据包。如果找到它们，它将尝试加载并解析其资源，以便能够渲染任何额外的方块。  
如果您不希望这样，可以在 `core.conf` 中将 `scan-for-mod-resources` 设置为关闭。

BlueMap 可能无法解析模组的所有方块和资源。例如，如果模组在运行时生成其资源/方块模型，BlueMap 将无法在 `mod.jar` 中找到它们，因此无法正确渲染它们！  
如果您有使用自定义模型创建资源包的经验，那么您可以轻松地为这样的模组制作一个包含静态资源的资源包。BlueMap 随后可以加载您的资源包，并基于此渲染方块。

## 配置
一些模组添加了特殊的方块，这些方块的属性 BlueMap 无法轻易从模组的资源中读取。  
为此，您可以添加一些配置来告诉 BlueMap 如何渲染它们。  
**您需要将这些配置文件放入一个 .zip 文件或文件夹中，然后将其放入 BlueMap 的 `packs` 文件夹中。**  
*（您基本上是在为 BlueMap 创建一个特殊的资源包）*

### 自定义方块模型
使用标准的 [资源包格式](https://minecraft.wiki/w/Resource_pack) 来定义自定义方块状态和方块模型。

### 自定义生物群系
使用标准的 [数据包格式](https://minecraft.wiki/w/Biome_definition) 来定义自定义生物群系。

### 方块属性配置
**文件:** `assets/modid/blockProperties.json`

**示例:**
```json
{
  "minecraft:bubble_column": { "alwaysWaterlogged": true },
  "minecraft:grass": { "randomOffset": true },
  "minecraft:glass": { "occluding": false, "cullingIdentical": true },
  "minecraft:ice": { "cullingIdentical": true }
}
```

通常，BlueMap 会根据方块的模型猜测这些属性。但如果猜测不正确，您可以通过此配置更改方块的渲染行为。

方块的可能属性包括：
- `alwaysWaterlogged` 是默认被水浸没的方块。因此，它们不需要“waterlogged”属性来渲染为被水浸没的方块。
- `randomOffset` 是具有小随机偏移的方块，以打破网格状图案。在原版 Minecraft 中，草方块和花朵会这样做。
- `occluding` 用于确定方块在计算相邻方块的 [环境光遮蔽](https://en.wikipedia.org/wiki/Ambient_occlusion) 时是否“遮挡”光线。
- `cullingIdentical` 意味着如果方块直接与另一个相同类型的方块相邻，则面向该方块的侧面将被剔除（移除）。

### 方块颜色配置
**文件:** `assets/modid/blockColors.json`

**示例:**
```json
{
  "minecraft:water": "@water",
  "minecraft:grass": "@grass",
  "minecraft:birch_leaves": "#86a863",
  "minecraft:redstone_wire": "@redstone"
}
```

一些方块如草、树叶、水或红石是动态着色的。这些颜色会根据生物群系、属性变化，或者只是静态的。

可能的值包括 `@foliage`、`@grass`、`@water`，以使用生物群系的树叶、草或水颜色为方块着色，`@redstone` 以使用方块的功率级别（用于红石），或者使用 [CSS 风格的颜色十六进制](https://htmlcolorcodes.com/color-picker/) 如 `#86a863` 的静态颜色。
