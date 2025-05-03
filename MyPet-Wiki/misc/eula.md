# MyPet是否符合EULA规定？

MyPet最初设计时并未特别考虑EULA条款，但通过调整配置后，MyPet应该能够符合EULA要求。这主要取决于您想在服务器上启用的MyPet功能。

{% hint style="info" %}
本文中将通过真实货币在服务器购买过任何服务的玩家统称为"赞助者"。
{% endhint %}

## 需要修改哪些内容？

1. 不得设置仅限赞助者或付费宠物玩家使用的技能树。所有技能树必须在相同条件下对所有玩家开放。
2. 禁用宠物的特殊能力（如奶牛产奶、绵羊剪毛等）。请检查pet-config.yml文件并关闭所有相关功能。
3. 所有宠物的基础属性必须保持一致，至少不能高于免费获取的宠物属性。
4. ![$](../.gitbook/assets/exclaim.gif) 商店出售的宠物不得拥有更高经验值或非公开的特殊技能树。
5. [自定义经验脚本](https://wiki.mypet-plugin.de/experience)必须平等对待所有玩家（赞助者与非赞助者）

## 免责声明

本人不对本页所述内容承担法律责任。所有内容均基于善意编写，但仍可能存在疏漏。如发现内容缺失或错误，请通过[Spigot论坛](https://www.spigotmc.org/conversations/add?to=Keyle&title=EULA)与我联系。