# 常见问题解答

## 如何在没有权限插件的情况下使用该插件？
如果您没有权限插件，您可以使用 [permissions.yml](https://bukkit.gamepedia.com/Permissions.yml) 文件（位于服务器的 .jar 文件和插件文件夹的同一目录下）。通过添加以下内容（之后您需要重启服务器）：
```
minepacks:
  default: true
  children:
    backpack.user: true
    backpack.size.6: true
```