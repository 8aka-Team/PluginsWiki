# 配置文件中的自定义物品数据

您可以在MyPet配置中为物品设置`物品数据`（如羊毛颜色）和`NBT数据`（如附魔、名称与描述）。

需要按以下顺序提供物品属性：

* `1.13+物品ID` `NBT数据`

示例：

{% tabs %}
{% tab title="1.13" %}
`beef {display:{Name:"狼粮",Lore:["美味的狼粮","尝起来像香蕉"]}}`
{% endtab %}

{% tab title="1.14" %}
`beef {"display":{"Name":"[{\"text\":\"狼粮\"}]","Lore":["{\"text\":\"美味的狼粮\"}","{\"text\":\"尝起来像香蕉\"}"]}}`
{% endtab %}
{% endtabs %}

当您将狼的食物设置为这个时，玩家需要持有如图所示的物品：![自定义物品示例](../../.gitbook/assets/configitem.png)

这允许服务器所有者将食物和拴绳物品（以及MyPet使用的其他一些物品）设置为只能通过商店等途径获取的特殊物品。

## 物品生成器

您可以创建任意物品，但有时MyPet可能无法识别这些物品。这是因为MyPet的物品比对机制非常严格。为了简化配置物品的设置，插件现在提供`/petadmin info item`命令。该命令会将您主手持有的物品信息输出到服务器日志中（不要从控制台复制）。将此输出内容复制粘贴到您的配置文件中即可正常使用。

您可以使用以下网站的物品生成器：

* [http://mapmaking.fr/give/](http://mapmaking.fr/give/)
* [https://ezekielelin.com/give/](https://ezekielelin.com/give/)
* [https://minecraftcommand.science/de/custom-item-generator](https://minecraftcommand.science/de/custom-item-generator)

只需复制生成的命令并移除`/give @a`部分即可。

## NBT数据

NBT数据的语法与《我的世界》中`/give`命令相同。您可以在[这里](http://www.minecraftwiki.net/wiki/Player.dat_Format#Item_structure)查找所有可能的NBT属性，或直接使用上述生成器。