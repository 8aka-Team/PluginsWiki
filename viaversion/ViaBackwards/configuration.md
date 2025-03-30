---
sidebar_position: 3
---
 
# 配置

以下是 ViaBackwards 的汉化配置

:::tip

在编辑 YAML文件 时，请尽量使用[文本编辑器](https://nitwikit.8aka.org/preparation/text-editor/)编辑，如 VSCode。

:::

```yaml
# 如果你需要官方的帮助，你可以加入这个 Discord 频道 -> https://viaversion.com/discord
#                                  汉化 by yao三七
#
# 是否始终显示生物的原始名称，而不是仅在光标指向生物时显示
always-show-original-mob-name: true
#
# 是否将附魔名称和等级写入物品的简介(lore)中
# 如果你看到物品的附魔重复显示，那就关闭这个选项
add-custom-enchants-into-lore: true
#
# 在 1.13+ 的服务器上，是否为 1.12 的客户端在名字前缀后面打上队伍对应的颜色
add-teamcolor-to-prefix: true
#
# 将1.13版本的面部朝向数据转换为旧版本格式，以便1.12及以下玩家正确显示。
fix-1_13-face-player: false
#
# 修复1.13及以下客户端在库存标题中看不到颜色或格式的问题。如果遇到翻译显示错误，可以关闭此功能。
fix-formatted-inventory-titles: true
#
# 用确认包代替ping包，帮助1.17以下客户端正常工作。此功能对反作弊兼容性有帮助。
handle-pings-as-inv-acknowledgements: true
#
# 在y=0高度添加床岩块，适用于1.17以下客户端。这可能会导致一些奇怪的互动。
bedrock-at-y-0: false
#
# 将幽匿尖啸体显示为哭泣的黑曜石，适用于1.18.2客户端在1.19+服务器上。这样可以避免碰撞和破坏问题。
sculk-shriekers-to-crying-obsidian: true
#
# 将黑暗效果映射为失明效果，适用于1.18.2客户端在1.19+服务器上。
map-darkness-effect: true
#
# 如果启用，1.21.3客户端将接收1.21.4+自定义模型数据的第一个浮点值作为整数。如果你自己处理此更改，可以关闭此功能。
map-custom-model-data: true
#
# 是否显示某些功能不支持的警告（例如1.17+世界高度）。如果不想看到这些警告，可以启用此功能。
suppress-emulation-warnings: false

```
