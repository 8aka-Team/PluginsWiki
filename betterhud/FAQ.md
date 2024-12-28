---
sidebar_position: 4
---

# FAQ

## 使用 "/hud reload" 不会移动 y 坐标。

别忘了你需要重新应用资源包。

---
## HUD 不显示

![](https://i.imgur.com/5F0IrKW.png)

- 没有应用资源包。去应用它。
- BetterhHud 的资源包路径默认是 `'BetterhHud/build'`。
- 如果你使用 ItemsAdder，请访问这里 -> [安装](How-to-install.md)

## 看不到任何 bossbars，看不到任何 HUD，它是空的。

- 如果你使用 ItemsAdder，需要将 text-effect 设置为 false。

链接: [安装](How-to-install.md)

## 如果 Enderdragon 或 Wither 的 bossbar 弹出，HUD 会失去对齐。

- 在 config.yml 中更改 `merge-boss-bar:` 为 `merge-boss-bar: false`
- 这是一个特殊的 bossbar，无法解决。

## 优化资源包

1. 如果你不使用 `shader.yml`，设置为：
``` yaml
#shader.yml 文件
hotbar:
  disable: false #默认是 true
```
并将 `config.yml` 设置为：
``` yaml
#config.yml 文件
load-minecraft-default-textures: false
```

2. font.yml:
   如果你不使用默认字体 `scale: 1`

1. 最小化字体使用类型。

## 文本显示异常
![](https://i.imgur.com/uA5MPif.png)

这是字体的问题。你需要用不同的字体替换它。

## 物品变黑
![](https://i.imgur.com/YiRrrlE.png)

**以 itemsadder 为例，但一般原因和解决方案相同**

Betterhud 使用的着色器核心文件。
`rendertype_entity_cutout.vsh`, `rendertype_entity_translucent_cull.vsh`, `rendertype_text.vsh`, `block.fsh`, `block.vsh`, `item.fsh`, `item.vsh`, `text.vsh`, `text.fsh`

Betterhud 的资源包没有正确合并，导致只应用了部分着色器核心。
当你在 itemsadder 中出错，或者 itemsadder 内部有不同着色器核心并忽略了 Betterhud 的着色器核心时，会发生这种情况。
检查并解决由 itemsadder 配置错误引起的控制台错误，或删除在“merge_other_plugins_resourcepacks_folders”或“itemsadder/contents”中包含的与 Betterhud 重复的所有着色器核心文件。

# 当我显示 PAPI 占位符时，HUD 消失了。

注意 PlaceholderAPI 中的旧格式。
一些占位符返回带有旧格式的文本。这可能会导致 BetterHud 出错。

例如，颜色代码。例如 `&aText`

即使它以白色打印，也可能像 "&fText", "§fText" 这样进行颜色编码。

这个问题可能由以下原因引起

1. 文本布局中 `use-legacy-format` 设置为 `false`（默认：`true`）
2. `config.yml` 中的 legacy-serializer 包含与设置类型不同的旧字符。

这通常是由问题 2 引起的。如果你遇到此错误，请尝试应用不同的类型并重新启动服务器。
legacy-serializer 的类型：`ampersand`(&), `section`(§)


# 额外支持？
是的，我们提供支持，加入我们的 Discord: https://discord.gg/5tGVx34sQG