---
description: 宠物商店配置
---

# pet-shops.yml

_`pet-shops.yml`_ 文件包含了玩家可以购买宠物的商店配置。

您可以创建任意数量的商店，但每个商店都需要不同的ID（`<shop-id>`）。每个商店可以通过 `/petshop <shop-id>` 命令打开。商店中的每个物品也需要一个唯一的ID（`<id>`）。

<table>
  <thead>
    <tr>
      <th style="text-align:left">设置项</th>
      <th style="text-align:center">类型</th>
      <th style="text-align:center">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>Shops:</b>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:center"></td>
    </tr>
    <tr>
      <td style="text-align:left">&#xA0;&#xA0;<b>&lt;shop-id&gt;:</b>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:center">
        <p><code>&lt;shop-id&gt;</code> 可以自由选择，但每个商店必须唯一</p>
        <p><em>(这是商店权限节点中的 <code>&lt;shop-name&gt;</code>)</em>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Name:</td>
      <td style="text-align:center">字符串</td>
      <td style="text-align:center">商店界面中显示的名称</td>
    </tr>
    <tr>
      <td style="text-align:left">&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<b>Balance</b>:</td>
      <td style="text-align:center"></td>
      <td style="text-align:center"></td>
    </tr>
    <tr>
      <td style="text-align:left">&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Type:</td>
      <td style="text-align:center">字符串</td>
      <td style="text-align:center">待完善</td>
    </tr>
    <tr>
      <td style="text-align:left">&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<b>Pets</b>:</td>
      <td style="text-align:center"></td>
      <td style="text-align:center"></td>
    </tr>
    <tr>
      <td style="text-align:left">&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;<b>&lt;id&gt;:</b>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:center"></td>
    </tr>
    <tr>
      <td style="text-align:left">&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Name:</td>
      <td
      style="text-align:center">字符串</td>
        <td style="text-align:center">宠物将拥有的名称</td>
    </tr>
    <tr>
      <td style="text-align:left">&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Description:</td>
      <td
      style="text-align:center">字符串列表</td>
        <td style="text-align:center">鼠标悬停在商店物品上时显示的描述</td>
    </tr>
    <tr>
      <td style="text-align:left">&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Position:</td>
      <td
      style="text-align:center">整数</td>
        <td style="text-align:center">宠物物品在商店库存中的槽位</td>
    </tr>
    <tr>
      <td style="text-align:left">&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Exp:</td>
      <td
      style="text-align:center">双精度浮点数</td>
        <td style="text-align:center">宠物将拥有的经验值</td>
    </tr>
    <tr>
      <td style="text-align:left">&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Price:</td>
      <td
      style="text-align:center">双精度浮点数</td>
        <td style="text-align:center">玩家获得宠物需要支付的价格</td>
    </tr>
    <tr>
      <td style="text-align:left">&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Skilltree:</td>
      <td
      style="text-align:center">字符串</td>
        <td style="text-align:center">宠物将拥有的技能树</td>
    </tr>
    <tr>
      <td style="text-align:left">&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;PetType:</td>
      <td
      style="text-align:center">字符串</td>
        <td style="text-align:center">宠物的生物类型</td>
    </tr>
    <tr>
      <td style="text-align:left">&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Options:</td>
      <td
      style="text-align:center">字符串列表</td>
        <td style="text-align:center">这些参数与宠物创建管理命令的参数完全一致</td>
    </tr>
  </tbody>
</table>