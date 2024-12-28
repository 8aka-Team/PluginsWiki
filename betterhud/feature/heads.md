---
sidebar_position: 3
---

# 头

## 如何将你的头部带到HUD上

在你的heads文件夹中创建一个yml文件，并像这样输入它。

```
test_head:
  pixel: 4
```

![](_images/head-1.png)

将它放在布局上。

```
outline_head:
  heads:
    0:
      name: test_head
      x: 0
      y: 0
```

![](_images/head-2.png)