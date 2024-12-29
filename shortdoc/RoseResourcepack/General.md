---
sidebar_position: 2
---

# 通用    

## 命令:
* /roserp texture \<pack\> \<pack2\> - 应用资源包
* /roserp texture \<player\> \<pack\> \<pack2\> - 向其他玩家应用资源包
* /roserp reset - 重置所有资源包
* /roserp reset \<pack\> - 重置资源包
* /roserp reset \<player\> - 重置其他玩家的所有资源包
* /roserp reset \<player\> \<pack\> - 重置其他玩家的资源包
* /roserp zip \<pack\> - 将资源包文件打包成zip存档
* /roserp zip all - 将所有资源包打包成zip存档
* /roserp reload - 重新加载插件
* /roserp help - 查看命令帮助

## 权限:
* roserp.* - 所有权限
* roserp.commands.* - 所有命令权限
* roserp.commands.reload - 重新加载插件
* roserp.commands.help - 查看玩家命令帮助
* roserp.commands.help.admin - 查看管理员命令帮助
* roserp.commands.zip - 将资源包打包成存档
* roserp.commands.texture - 应用资源包
* roserp.commands.texture.other - 向其他玩家应用资源包
* roserp.commands.reset - 重置资源包
* roserp.commands.reset.other - 重置其他玩家的资源包

## 插件层次结构
```
plugin
├── .cache                 # 插件的缓存数据
├── lang                   # 语言文件
│   ├── en.yml             # 英语语言
│   ├── ru.yml             # 俄语语言
│   ├── ua.yml             # 乌克兰语语言
│   └── ...                # 其他语言文件
├── resourcepacks          # 资源包
│   ├── pack1
│   │   └── pack1.zip      # 生成的资源包存档
│   ├── pack2
│   │   └── pack2.zip      # 生成的资源包存档
│   └── ...                # 其他资源包
└── config.yml             # 插件配置文件
```

# [配置](https://github.com/ladakx/RoseResourcepack/wiki/Config)