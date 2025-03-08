---
sidebar_position: 7
---

# 条件

```
layout:
  images:
    1:
      name: example
      conditions:
        1:
          first: (number)papi:player_x
          second: 1
          operation: '>='
          gate: or
```

几乎可以在任何地方使用：图像、布局（文本布局、图像布局）、弹出窗口等。

当条件满足时显示。

## 操作

类型：'\>', '\>=', '\<', '\<=', '==', '!='

只有'==', '!='可用于字符串类型。

比较方式如下 `first >= second`

## 逻辑门

类型：and , or

`默认：and`

设置条件的方法。

## 注意

### 数字文本
```
      conditions:
        1:
          first: "papi:player_x"
          second: "'1'"
          operation: '=='
```
当比较数字文本为字符串时，需要使用类似"'1'"的格式。

在这种情况下，first中的papi没有前缀(number)，因此它是字符串类型，

如果你使用`second: 1`，它将被识别为数字，因此会出现错误。

（反之亦然）

### PAPI格式
```
      conditions:
        1:
          first: "[papi:player_x]"
          second: "'1'"
          operation: '=='
```
在条件中使用PAPI时，不要使用[]。