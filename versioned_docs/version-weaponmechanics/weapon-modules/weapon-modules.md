---
description: 您可以添加到武器配置中的所有配置部分
sidebar_position: 2
---

# 武器模块

:::info
对维基百科不熟悉吗？本页面包含有关配置的**重要信息**！请先阅读这个！
:::

## 武器标题

所有武器在配置中都有一个独特的"武器标题"。它是文件顶部的名称，例如：

<figure><img src="../.gitbook/assets/image%20(1).png" alt="the weapon title is the root key in the yaml file" width="375"></img><figcaption></figcaption></figure>

在上面的图像中，武器标题是`AK_47`。要在服务器上获取这个武器，请使用`/wm get AK_47`命令。

:::danger
文件的名称完全被忽略。我们建议将它们与武器标题匹配（例如`AK_47.yml`），但这是可选的，不会影响插件。
:::

:::danger
您的武器标题（以及所有其他配置选项）**不应该**使用除了a->z、A->Z、0->9和下划线`_`之外的任何字符。请不要使用句点或破折号。
:::

## 模块

所有武器都使用模块。"模块"是指配置中的一个部分。例如，[射击](shoot/ "mention")模块是所有武器必需的。它在配置中以2个空格的缩进方式出现在武器名称下面。让我们看一个`AK_47`的示例：

```yaml
AK_47:
  Shoot:
    # 其他选项在这里，比如扳机和弹道速度
```

大多数模块也可以有内部部分。例如：

```yaml
AK_47:
  Shoot:
    Trigger: 
      # 其他选项在这里，比如主手和副手
```

以下是模块的完整列表（您还可以在本页面左侧的侧边栏中看到这些！）：

1. [info.md](info.md "mention")
2. [shoot](shoot/ "mention")
   1. [spread.md](shoot/spread.md "mention")
   2. [recoil.md](shoot/recoil.md "mention")
   3. [Broken link](broken-reference "mention")
3. [scope.md](scope.md "mention")
4. [reload](reload/ "mention")
   1. [ammo.md](reload/ammo.md "mention")
5. [skin.md](skin.md "mention")
6. [projectile](projectile/ "mention")
7. [explosion](explosion/ "mention")
8. [damage](damage/ "mention")
9. [firearm\_action.md](firearm_action.md "mention")
10. [melee.md](melee.md "mention")
11. [Firemode](https://app.gitbook.com/s/9hOjsLnIiB5Xm8MOXgWU/firemode "mention") -> 需要WeaponMechanicsPlus插件
12. [Cosmetics](https://app.gitbook.com/s/k51Oxya0kO19Qw62TtkL/cosmetics "mention") -> 需要WeaponMechanicsCosmetics插件
13. [Trails](https://app.gitbook.com/s/k51Oxya0kO19Qw62TtkL/trails "mention") -> 需要WeaponMechanicsCosmetics插件
14. [Show Time](https://app.gitbook.com/s/k51Oxya0kO19Qw62TtkL/show-time "mention") -> 需要WeaponMechanicsCosmetics插件

## 必需的模块

只有[info.md](info.md "mention")和[shoot](shoot/ "mention")模块是必需的。大多数配置选项都是可选的，可以从配置文件中省略。