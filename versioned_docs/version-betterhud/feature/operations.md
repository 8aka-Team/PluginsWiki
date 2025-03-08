---
sidebar_position: 6
---

# 操作

操作符使用了exp4j库。

## 操作符维基

查看以下链接以了解默认操作符

https://redmine.riddler.com.ar/projects/exp4j/wiki/Built_in_Operators

对于数学操作符，请查看以下链接。

https://redmine.riddler.com.ar/projects/exp4j/wiki/Built_in_Functions

https://redmine.riddler.com.ar/projects/exp4j/wiki/Extra_Functions_and_Operators


## 示例

使用't'作为参数。

它主要由[PAPI](placeholders.md)使用，使用示例包括

例如 `[player_health@t * 2]`

player_health的值被定义为t，在这个例子中，如果原始生命值为20，则t为40。

当作为PAPI变量使用时，它是字符串类型，因此需要定义为数字类型。

例如 `[(number)papi:player_x@t * 2]`

### 异常

在文本布局的模式中工作时，

除法('/')操作符使用'//'。
