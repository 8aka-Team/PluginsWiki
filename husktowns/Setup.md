---
sidebar_position: 2
---

# 安装指南

本指南将引导您在您的Spigot服务器或代理的Spigot服务器网络上安装HuskTowns。

## 要求
> **注意:** 如果插件无法加载，请检查您是否没有运行[不兼容的版本组合](Unsupported-Versions.md)

* 基于Spigot的Minecraft服务器（1.17.1或更高版本，Java 17+）
* （用于代理网络支持）代理服务器（Velocity, BungeeCord）和MySQL（v8.0+）数据库
* （用于可选的Redis支持）Redis数据库（v5.0+）

## 单服务器安装说明
这些说明适用于在单个Spigot/Paper服务器上安装HuskTowns。

### 1. 安装jar文件
- 将插件jar文件放置在您的Spigot服务器的`/plugins/`目录中。
### 2. 重启服务器并配置
- 启动，然后停止您的服务器以让HuskTowns生成配置文件。
- 您现在可以根据喜好编辑配置文件。
- 特别是对于`roles.yml`文件，请确保现在设置好该文件，因为以后无法添加新角色。
### 3. 开启服务器
- 再次启动您的服务器并享受HuskTowns！

## 多服务器安装说明
这些说明适用于在多个Spigot服务器上安装HuskTowns并使它们联网。需要MySQL数据库（v8.0+）。

### 1. 安装jar文件
- 将插件jar文件放置在每个Spigot服务器的`/plugins/`目录中。
- 您不需要将HuskTowns安装为代理插件。
### 2. 重启服务器并配置
- 启动，然后停止每个服务器以让HuskTowns生成配置文件。
- 高级用户：如果您愿意，您可以只创建一个config.yml文件，并在每个`/plugins/HuskTowns/`文件夹中创建符号链接，以便更容易更新。
### 3. 配置服务器以使用跨服务器模式
- 在每个服务器上导航到HuskTowns的通用配置文件（`~/plugins/HuskTowns/config.yml`）
- 在`database`下，将`type`设置为`MYSQL`
- 在`mysql`/`credentials`下，输入您的MySQL数据库服务器的凭据。
- 向下滚动并查找`cross_server`部分。将`enabled`设置为`true`。
- 您还可以配置一个Redis服务器用于网络消息传递，如果您愿意（如果您这样做，请将`messenger_type`设置为`REDIS`）。
- 根据您的喜好更新`levels.yml`、`rules.yml`和`roles.yml`文件。特别是对于roles.yml文件，请确保现在设置好该文件，因为以后无法添加新角色。
- 保存配置文件。确保您已在每个服务器上更新了文件。
### 4. 重启服务器并设置server.yml值
- 再次重启每个服务器。应在`~/plugins/HuskTowns/`内生成一个`server.yml`文件。
- 在此文件中设置服务器的`name`为在您的代理配置中定义的此服务器的ID（例如，如果这是您通过`/server hub`访问的“hub”服务器，请在此处输入“hub”）。
### 5. 最后一次重启服务器
- 如果您的MySQL数据库凭据正确，您的网络现在应该已设置为使用HuskTowns！
- 如果您愿意，可以删除生成的`HuskTownsData.db` SQLite平面文件。
