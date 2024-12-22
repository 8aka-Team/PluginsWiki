---
sidebar_position: 1
description: 自定义XP需求的指南
---

# XP需求

技能升级所需的XP数量可以在`xp_requirements.yml`文件中进行配置。

## 表达式和变量

在一个部分中，例如`default`部分，你会看到一个包含用于计算XP需求的表达式/方程的`expression`值。

你可以根据需要更改表达式，但它必须是有效的EvalEx表达式。你可以在[这里](https://ezylang.github.io/EvalEx/references/functions.html)查看支持的运算符和函数。

:::info
表达式的结果将始终四舍五入到最接近的整数
:::

表达式中也支持变量。为了使每个等级所需的XP不同，表达式中必须包含`level`变量。该变量对应于达到所需XP后解锁的等级。`level`从`config.yml`中的`start_level+1`开始，并上升到技能的最大等级。例如，当`level`为5时，表达式的结果是从等级4到等级5所需的XP。

还支持自定义变量，这允许你标记和组织表达式的各个部分。你可以将数字直接转换为在单独键中指定的变量，而不是直接在表达式中使用数字。在下面显示的默认表达式中，`multiplier`和`base`是自定义变量的示例。

```
multiplier * (level - 2) ^ 2 + base
```

如你所见，`multiplier`和`base`的数值被指定为与变量同名的键：

```
default:
  expression: 'multiplier * (level - 2) ^ 2 + base'
  multiplier: 100.0
  base: 100.0
```

你可以使用任何变量名称，只要变量的值在同名的单独键中定义。

## 技能覆盖

你可以通过添加一个`skills.[skillName]`部分来为每个技能创建不同的XP需求，该部分将覆盖`default`部分。技能部分中的键和值与`default`部分相同。

以下是覆盖默认值的炼金术XP需求示例：

```
default:
  expression: 'multiplier * (level - 2) ^ 2 + base'
  multiplier: 100.0
  base: 100.0
skills:
  alchemy:
    expression: 'multiplier * (level - 2) ^ 3 + base'
    multiplier: 20.5
    base: 20.0
```

## 直接值列表

除了使用方程外，XP需求还可以通过直接值列表来定义。在`default`部分或特定技能部分下创建一个名为`values`的列表。

以下是使用值列表定义XP需求的示例：

```
default:
  values:
    - 100
    - 200
    - 300
    - 500
    - 750
    - 1250
    - 1720
```

列表中的第一个值是从等级1到等级2所需的XP。