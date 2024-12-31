---
sidebar_position: 4
---

# 数据库

HuskTowns 将玩家和城镇数据存储在你选择的数据库中。对于跨服务器设置，你需要配置一个 MySQL 或 MariaDB 数据库，以便在全球范围内访问家园。

## 数据库类型
> **警告：** 目前没有自动的方式在 _数据库_ 类型之间迁移。更改数据库类型将导致数据丢失。

| 类型      | 文件或服务器 | 描述                                                                 | 支持跨服务器 |
|:----------|----------------|:----------------------------------------------------------------------------|:---------------------:|
| `SQLITE`  | 文件           | 基于文件的数据库。这是默认（推荐）选项。            |           ❌           |
| `MYSQL`   | 服务器         | 托管在 MySQL 服务器上的数据库。                                        |           ✅           |
| `MARIADB` | 服务器         | 托管在 MariaDB 服务器上的数据库。                                      |           ✅           |

### 跨服务器
如果你在跨服务器网络上使用 HuskTowns，你需要使用支持跨服务器设置的数据库类型。这是因为跨服务器设置需要一个在所有服务器之间共享的单一数据库，以便 HuskTowns 可以在每个服务器上访问相同的数据。

## 配置
要更改数据库类型，请导航到你的 [`config.yml`](Config-Files) 文件并修改 `database` 下的属性。

<details>
<summary>数据库选项 (config.yml)</summary>

```yaml
database:
  # 要使用的数据库类型 (SQLITE, MYSQL 或 MARIADB)
  type: SQLITE
  mysql:
    credentials:
      # 如果你使用 MYSQL 或 MARIADB 作为数据库类型，请在此处指定凭据
      host: localhost
      port: 3306
      database: HuskTowns
      username: root
      password: pa55w0rd
      parameters: ?autoReconnect=true&useSSL=false&useUnicode=true&characterEncoding=UTF-8
    connection_pool:
      # MYSQL 数据库 Hikari 连接池属性。除非你知道自己在做什么，否则不要修改这些内容！
      size: 10
      idle: 10
      lifetime: 1800000
      keepalive: 30000
      timeout: 20000
```
</details>

### 凭据 (MariaDB & MySQL)
如果你使用 MariaDB 或 MySQL，你需要指定凭据（主机名、端口、用户名、密码和数据库）。这些凭据用于连接到你的数据库服务器。

此外，如果你知道自己在做什么，可以修改 HikariCP 连接池属性。对于大多数用户来说，默认值应该足够了。