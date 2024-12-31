---
sidebar_position: 4
---

# 💢 错误与运行LM

## 你是否遇到了这些常见错误？

#### YAML错误：

<figure><img src="./.gitbook/assets/image (1) (1).png" alt=""></img><figcaption></figcaption></figure>

最常见的错误是YAML拼写错误。YAML在语法和空格错误方面非常严格。这条信息告诉你，在尝试加载文件时，本例中是`rules.yml`，文件中存在语法错误，导致文件无法读取。然后它会通知你程序中规则无法读取的位置，这将帮助你识别错误的位置。我们还建议你只需将无法读取的文件内容复制到一个免费的在线[YAML检查器\[ http://yamlchecker.com \]](https://yamlchecker.com/)中进行检查。



#### 无效条目：

<figure><img src="./.gitbook/assets/image (1) (1) (1).png" alt=""></img><figcaption></figcaption></figure>

第二常见的错误是无效条目。虽然这不会影响每个选项，但有许多选项会通过控制台通知操作员，如果有任何配置选项包含无效或无法被LevelledMobs处理的值。在某些情况下，无效值不会直接影响插件的功能；而在某些情况下，无效值可能会禁用某些功能或整个插件。



#### 缺失的掉落表

<figure><img src="./.gitbook/assets/image (2).png" alt=""></img><figcaption></figcaption></figure>

如果你使用`apply-settings:` `use-droptable-id:`指定了一个规则，而指定的表与`customdrops.yml`文件中的`drop-tables:`条目不匹配，那么你的控制台将会被每个应用该表但无法应用的实例刷屏，因为缺少或无效的掉落表名称。我们建议要么禁用应用掉落表的规则，要么替换指定名称的表。



### 如果你的服务器启动看起来像这样：

<figure><img src="./.gitbook/assets/image (3).png" alt=""></img><figcaption></figcaption></figure>

### 并且执行LevelledMobs重载看起来像这样：

<figure><img src="./.gitbook/assets/image (4).png" alt=""></img><figcaption></figcaption></figure>

### 那么你的服务器可能已经准备好使用LevelledMobs了！



***



## 让我们看看常见问题