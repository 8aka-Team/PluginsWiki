---
sidebar_position: 2
---

# 存储

## 概述
使用 BlueMap，你可以定义一个或多个**存储**，用于存放你的地图。理论上，你可以将每个地图存储在不同的存储中。

要配置你的存储，你可以使用配置文件夹中的 `storages` 文件夹。与地图配置类似，这些配置文件的名称（不包括 `.conf` 扩展名）决定了存储的标识符。这意味着你可以添加或删除存储。然后，在你的地图配置中，你可以使用 `storage` 设置来选择该地图应存储的存储。

**例如：** 如果你有一个配置文件 `storages/mystorage.conf`，那么在你的地图配置中，你可以设置 `storage: "mystorage"` 来使该地图使用该存储。

## 文件存储
文件存储是默认的存储方式。它只是一个文件夹，BlueMap 会将地图瓦片作为单独的文件存储在其中。这与 webapp 的预期完全一致。通常，该文件夹位于你的 webapp 的 webroot 中：`./bluemap/web/maps`。但你可以使用 `root` 设置随意更改此文件夹。

## MySQL、MariaDB 和 Postgres
要使用 MySQL、MariaDB 或 Postgres 数据库，你可以使用 `sql.conf` 模板并在其中输入你的数据库信息。

### 连接 URL
`connection-url` 设置是你定义大多数内容的地方，例如数据库的主机 *(URL/地址/IP)* 和端口。这是以 JDBC 字符串的形式完成的。该字符串的确切语法取决于你使用的数据库驱动程序。但通常它看起来像这样：`jdbc:[driver]://[host]:[port]/[database][?properties]`

以下是一些示例：  
`jdbc:mysql://localhost:3306/bluemap?permitMysqlScheme`  
`jdbc:mariadb://db.myhost.com/my-database`  
`jdbc:postgres://127.0.0.1:3306/bluemap`  

这里还有一些关于 [mysql](https://dev.mysql.com/doc/connector-j/8.0/en/connector-j-reference-jdbc-url-format.html)、[mariadb](https://mariadb.com/kb/en/about-mariadb-connector-j/#connection-strings) 和 [postgres](https://jdbc.postgresql.org/documentation/use/#connecting-to-the-database) 的文档。

### 连接属性
`connection-properties` 配置只是一个自定义属性的映射，你可以在创建新连接时将其传递给数据库驱动程序。通常，这用于通过 `user` 和 `password` 属性进行身份验证，如下所示：
```hocon
connection-properties: {
    user: "root",
    password: "pA55w0rd"
}
```

### 自定义 JDBC 驱动程序
BlueMap **不**包含任何数据库驱动程序，这意味着你需要以某种方式向 Java 运行时提供你自己的驱动程序：

**Paper** 已经包含了一个 MySQL 驱动程序，所以如果你在 Paper 服务器上并且想使用 MySQL/MariaDB，你不需要做任何事情。

对于 **Spigot、Fabric 和 Forge**，有一些 [mods/plugins](https://modrinth.com/mods?q=jdbc) 可以添加这样的驱动程序。

或者，你也可以**手动**下载你选择的 JDBC 驱动程序并配置 BlueMap 加载它：  
下载驱动程序 jar 文件（例如 [mariadb-java-client.jar](https://mariadb.com/downloads/connectors/connectors-data-access/java8-connector/)）并将其放置在 `./bluemap` 文件夹中。然后设置 `driver-jar: "bluemap/mariadb-java-client.jar"` 和 `driver-class: "org.mariadb.jdbc.Driver"` 来告诉 BlueMap 在哪里找到 jar 文件以及从其中加载哪个类。*(别忘了删除 `#` 以取消注释设置)*

## Sqlite
配置 Sqlite 基本上与 [MySQL、MariaDB 和 Postgres](#mysql-mariadb--postgres) 相同，只需使用 Sqlite 的 JDBC 驱动程序并配置正确的 `connection-url`，如下所示：`jdbc:sqlite:[path-to-database-file]`。如果数据库文件不存在，它将被创建。

:::info
建议在使用 Sqlite 时将 `max-connections` 设置为 `1`，以避免数据库锁定问题！
:::

以下是设置 Sqlite 存储的简单方法：
- 安装这个 [插件/mod](https://modrinth.com/plugin/sqlite-jdbc)
- 在你的 `sql.conf` 中将 `connection-url` 设置为 `connection-url: "jdbc:sqlite:bluemap/sqlite.db"`
- 将 `max-connections` 设置为 `1`
- 在每个**地图**配置文件 (`./maps/xxx.conf`) 中将 `storage` 更改为 `storage: "sql"`

完成 :)

## 压缩
所有存储类型都有一个 `compression` 设置。它定义了每个高分辨率瓦片在存储之前如何压缩。默认且推荐的压缩方式是 `GZIP`，因为浏览器可以接收压缩文件并在飞行中解压缩它们。支持的压缩设置如下：

| 设置                | 描述                                                                                                                                                                                                                      |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `compression: NONE`    | 无压缩，地图瓦片将以纯 json 格式存储。<br/>*未压缩的文件将大约大 20 倍！*                                                                                                                |
| `compression: GZIP`    | [GZip](https://en.wikipedia.org/wiki/Gzip) 压缩。<br/>*推荐。*                                                                                                                                                       |
| `compression: DEFLATE` | [Deflate](https://en.wikipedia.org/wiki/Deflate) 压缩。                                                                                                                                                                    |
| `compression: ZSTD`    | [Zstandard](https://en.wikipedia.org/wiki/Zstd) 压缩。<br/>*某些浏览器不支持此压缩。BlueMap 可能需要在每次发送给客户端之前将文件重新压缩为 gzip！（非常慢！）* |
