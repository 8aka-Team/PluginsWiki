---
sidebar_position: 1
---

# 安装

## 通用前提条件
要运行BlueMap，你需要：
- Java 16 或更新版本
- Minecraft Java版

BlueMap仅支持Java版世界，不支持Bedrock版世界！

## 在哪里找到...
### ...“配置文件”？
它们位于你的服务器根目录/工作目录的相对路径下：

| 平台            | 目录            |
|-----------------|-----------------|
| Spigot/Paper    | `./plugins/BlueMap/` |
| Forge/Fabric/Sponge | `./config/bluemap/`  |
| CLI             | `./config/`          |

### ...“webroot”？
webroot是包含所有将由Web服务器托管并可通过浏览器访问的文件的文件夹。
默认情况下，它位于你的服务器根目录下的 `./bluemap/web/`。

### ...地图数据？
Web应用程序期望地图数据位于webroot内的 `./maps/` 文件夹中。这也是默认存储地图的地方。

## 安装BlueMap（基本设置）
这是BlueMap的基本设置。BlueMap将作为插件/模组在你的服务器上运行，随着世界的变化渲染/更新地图，并托管一个小型Web服务器以提供地图文件和Web应用程序，你可以在其中查看地图。

### 前提条件
- 一个Spigot/Paper、Sponge、Fabric或Forge服务器
- 除了Minecraft服务器使用的端口外，任何你可以使用的**第二个端口**
  *(询问你的托管服务是否可以以及如何打开第二个端口)*

### 步骤
- 首先，你需要下载BlueMap的jar文件。你可以从[这里](https://github.com/BlueMap-Minecraft/BlueMap/releases)选择并下载一个版本。
  确保它与你的服务器版本兼容！
- 将下载的jar文件放入服务器的 `plugins` 或 `mods` 文件夹中，然后重启服务器。
- BlueMap现在将生成默认的配置文件，并为服务器上的每个世界预配置一个地图。
- 打开 `core.conf` 配置文件，阅读注释并通过将 `accept-download` 更改为 `true` 来同意从Mojang下载一些额外资源。
- 打开 `webserver.conf` 配置文件，并将 `port` 更改为你从托管提供商处获得的**第二个端口**。
- 现在你可以浏览其余的配置文件，并根据你的喜好更改设置。
  *(更多关于配置BlueMap的信息可以在[这里](/versioned_docs/version-bluemap/wiki/getting-started/Configuration)找到)*
- 编辑完配置后，在服务器上使用命令 `/bluemap reload` 或重启服务器。

如果一切设置正确，BlueMap应该开始渲染你的地图。检查控制台/日志以查看是否有任何错误或警告。

你可以使用 `/bluemap` 查看进度，并访问 `http://<你的服务器IP>:<端口>/` 查看地图。

## 使用SQL服务器安装BlueMap
此设置通过使用SQL服务器存储地图来扩展基本设置。

### 前提条件
- 基本设置中的所有前提条件
- 一个可以从你的服务器访问的SQL服务器

### 步骤
- 使用上述基本设置正常安装BlueMap
- 在你的配置文件中，打开 `storages/sql.conf` 文件并配置与SQL服务器的连接。
  *(有关此配置文件的更多信息，请参见[此页面](/versioned_docs/version-bluemap/wiki/customization/Storages.html#mysql-mariadb--postgres))*
- 现在打开每个地图配置文件，并将 `storage` 设置为 `"sql"`。
- 使用 `/bluemap reload` 重新加载BlueMap。
- 现在你的地图存储在数据库中，你应该从文件系统中删除旧的地图数据，以防止干扰。
  你可以通过为每个刚刚切换到SQL的地图运行命令 `/bluemap storages file delete <地图>` 来执行此操作。
  或者只需手动删除文件系统上的旧地图数据文件夹，通常位于 `./bluemap/web/maps`。

如果一切设置正确，BlueMap应该开始渲染你的地图并将它们存储在SQL服务器上。
检查控制台/日志以查看是否有任何错误或警告。

## 在CLI / 独立模式下使用BlueMap
你可以在[CLI](https://en.wikipedia.org/wiki/Command-line_interface)上将BlueMap作为独立应用程序使用。
如果你想渲染Minecraft世界的地图，但不想设置整个Minecraft服务器，这将非常有用。

### 前提条件
- 你想要渲染的Minecraft世界
- 任何你可以用来托管Web服务器的**端口**
  *(询问你的托管服务是否可以以及如何打开端口)*

### 步骤
- 首先，你需要下载BlueMap的jar文件。你可以从[这里](https://github.com/BlueMap-Minecraft/BlueMap/releases)选择并下载一个版本。
  确保它针对CLI并且与你想要渲染的世界的Minecraft版本兼容。
- 选择/创建一个你希望BlueMap运行并生成其配置文件的目录，并将下载的jar文件存储在此文件夹中。
- 打开CLI并将你的[cwd](https://en.wikipedia.org/wiki/Working_directory)更改为包含你的jar文件的文件夹。*(通常使用命令 `cd <路径到你的文件夹>`)*
- 运行 `java -jar BlueMap-cli.jar`，以便BlueMap在jar文件旁边的cwd中生成配置文件。
- 打开 `core.conf` 配置文件，阅读注释并通过将 `accept-download` 更改为 `true` 来同意从Mojang下载一些额外资源。
- 为你想要渲染的世界设置地图配置。
- 现在你可以浏览其余的配置文件，并根据你的喜好更改设置。
  *(更多关于配置BlueMap的信息可以在[这里](/versioned_docs/version-bluemap/wiki/getting-started/Configuration)找到)*
- 编辑完配置后，运行 `java -jar BlueMap-cli.jar -r` 开始渲染。
- 使用 `java -jar BlueMap-cli.jar -w` 你也可以启动内置的Web服务器以查看你的地图。
  或者你可以阅读[此](/versioned_docs/version-bluemap/wiki/webserver)以了解如何为BlueMap设置NGINX或Apache。
- 使用 `java -jar BlueMap-cli.jar -h` 获取所有可用标志的列表和解释。

## 使用BlueMap Docker镜像
你可以在Docker容器中使用[BlueMap CLI](#using-bluemap-on-the-cli--standalone)。这对于喜欢容器的系统管理员来说是完美的。
该镜像在GitHub容器注册表上可用，名称为 `ghcr.io/bluemap-minecraft/bluemap`。
对于最新和最好的版本，`latest` 标签是最新版本（可能是预发布版本），`master` 是最新的git提交。
你也可以选择主要版本的最新次要版本，例如 `v3`，或特定版本标签，例如 `v3.14`。  
对于生产用途，你应该**始终**将版本固定为次要版本，因为即使是最新的次要版本可能仍然是预发布版本。
你可以在[GitHub](https://github.com/BlueMap-Minecraft/BlueMap/pkgs/container/bluemap)上查看可用的Docker标签列表。
从现在开始，文档将用 `<version>` 替换版本。

### 前提条件
- 你想要渲染的Minecraft世界
- 可用的Docker安装
- 阅读[CLI](#using-bluemap-on-the-cli--standalone)说明

### 卷

| 路径          | 用途                                     |
| ------------- | --------------------------------------- |
| /app/config   | 默认配置文件夹                           |
| /app/web      | 默认Web应用程序                          |
| /app/web/maps | 默认渲染数据（包含在Web挂载中）           |
| /app/data     | 其他持久化数据                           |
| /app/world    | 你的世界（你也可以挂载其他世界）          |

你可以在配置中将这些路径更改为你想要的任何路径。  
要更改使用的配置文件夹，请使用 `-c /path/to/config` 标志。

### 步骤
- 以某种方式获取配置文件夹。  
  最简单的方法是运行 `docker run --rm -it -v "$(pwd)/config:/app/config" ghcr.io/bluemap-minecraft/bluemap:<version>`。  
  这会在你当前的工作目录中创建一个包含默认配置的配置文件夹。
- 按照你的喜好配置应用程序。
- 启动一个容器来渲染并托管Web服务器。
  ```sh
  docker run --rm -it \
    --name bluemap \
    -p 8100:8100 \
    -v "$(pwd)/config:/app/config" \
    -v "$(pwd)/world:/app/world" \
    -v "$(pwd)/data:/app/data" \
    -v "$(pwd)/web:/app/web" \
    ghcr.io/bluemap-minecraft/bluemap:<version> \
    -r -u -w
  ```  
  将 `$(pwd)/world` 更改为你世界的实际路径。  
  最后两个标志 `-r` 用于渲染，`-u` 启用自动更新地图，`-w` 用于Web服务器。  
  有关更多信息，请参阅CLI用法和 `--help`。  
  如果你在配置中更改了默认路径，请确保在卷挂载中考虑到这一点。  
  如果你希望它在后台运行，请删除 `--rm -it` 并替换为 `-d --restart always`。

这是一个用于在后台运行的Docker Compose示例。  
只需使用 `docker compose up -d` 启动即可。
```yml
version: '3'

services:
  bluemap:
    image: ghcr.io/bluemap-minecraft/bluemap:<version>
    restart: always
    command: -r -u -w
    ports:
      - '8100:8100'
    volumes:
      - './config:/app/config'
      - './world:/app/world'
      - './world_nether:/world_nether'
      - './world_the_end:/world_the_end'
      - './data:/app/data'
      - './web:/app/web'
```

### 注意事项

配置中的相对路径是相对于 `/app` 文件夹的。  
如果你觉得这令人困惑，请使用绝对路径来挂载。

如果你愿意，你可以预先创建具有特定用户所有权的卷文件夹，然后使用Docker的 `--user uid:gid` 标志或Compose的 `user` 字段以非root用户身份启动BlueMap。

要更改Web服务器的端口或IP绑定，你不需要更改BlueMap的配置。  
相反，只需通过更改 `-p 8100:8100` 标志来更改Docker发布端口的位置。

要更改Java标志，只需覆盖默认的 `java -jar cli.jar` 入口点。