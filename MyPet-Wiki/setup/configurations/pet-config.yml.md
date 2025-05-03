---
description: 宠物配置
---

# pet-config.yml

_`pet-config.yml`_ 文件包含所有宠物类型的专属设置。其他设置可在主配置文件中找到（[config.yml](config.yml.md)）。

<table>
  <thead>
    <tr>
      <th style="text-align:left">设置项</th>
      <th style="text-align:center">类型</th>
      <th style="text-align:right">说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><b>MyPet:</b>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:right"></td>
    </tr>
    <tr>
      <td style="text-align:left">&#xA0;&#xA0;<b>Pets:</b>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:right"></td>
    </tr>
    <tr>
      <td style="text-align:left">&#xA0;&#xA0;&#xA0;&#xA0;<b>&lt;宠物类型名称&gt;:</b>
      </td>
      <td style="text-align:center"></td>
      <td style="text-align:right"></td>
    </tr>
    <tr>
      <td style="text-align:left">&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;HP:</td>
      <td style="text-align:center">双精度浮点数</td>
      <td style="text-align:right">该类型宠物的默认最大生命值。</td>
    </tr>
    <tr>
      <td style="text-align:left">&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Speed:</td>
      <td style="text-align:center">双精度浮点数</td>
      <td style="text-align:right">
        <p>该类型宠物的默认移动速度。</p>
        <p>&#x2757; 微小改动会对速度产生巨大影响 &#x2757;</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;Food:</td>
      <td style="text-align:center">列表</td>
      <td style="text-align:right">该类型宠物的食物列表。必须是由有效的<a href="configitems.md">配置物品</a>组成的列表</td>
    </tr>
    <tr>
      <td style="text-align:left">&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;LeashItem:</td>
      <td style="text-align:center">字符串</td>
      <td style="text-align:right">可用于拴住该类型宠物的物品。必须是有效的<a href="configitems.md">配置物品</a></td>
    </tr>
    <tr>
      <td style="text-align:left">&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;LeashRequirements:</td>
      <td style="text-align:center">列表</td>
      <td style="text-align:right">有效的<a href="../../systems/leashflag.md">拴绳需求</a>列表</td>
    </tr>
    <tr>
      <td style="text-align:left">&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;CustomRespawnTimeFactor:</td>
      <td style="text-align:center">整数</td>
      <td style="text-align:right">可调整该类型宠物的重生时间系数。此值将在主配置值的基础上叠加。</td>
    </tr>
    <tr>
      <td style="text-align:left">&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;CustomRespawnTimeFixed:</td>
      <td style="text-align:center">整数</td>
      <td style="text-align:right">可调整该类型宠物的固定重生时间。此值将在主配置值的基础上叠加。</td>
    </tr>
    <tr>
      <td style="text-align:left">&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;ReleaseOnDeath:</td>
      <td style="text-align:center">布尔值</td>
      <td style="text-align:right">宠物死亡时是否自动释放。</td>
    </tr>
    <tr>
      <td style="text-align:left">&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;RemoveAfterRelease:</td>
      <td style="text-align:center">布尔值</td>
      <td style="text-align:right">宠物释放后是否删除对应的生物实体。</td>
    </tr>
  </tbody>
</table>