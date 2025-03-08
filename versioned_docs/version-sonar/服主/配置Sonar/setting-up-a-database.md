---
sidebar_position: 3
---

# 设置数据库

:::info
IP地址以明文形式存储，因此请确保您的数据库安全。
:::

定义Sonar使用的数据库类型。选项包括`NONE`、`MYSQL`、`MARIADB`和`H2`。默认值：`NONE`

```yaml
type: NONE
```

指定存储在Sonar插件目录中的`H2`数据库的文件名。默认值：`verified_players`

```yaml
filename: verified_players
```

SQL数据库认证的主机地址。默认值：`localhost`

```yaml
host: localhost
```

SQL数据库认证的端口号。默认值：`3306`

```yaml
port: 3306
```

SQL数据库的名称。默认值：`sonar`

```yaml
name: sonar
```

用户名和密码用于Sonar认证与数据库的连接。如果未提供用户名或密码，连接将失败。

```yaml
username: 'my_username'
```

```yaml
password: 'my_p@ssw0rd!'
```

Sonar应在数据库中保留已验证玩家的天数。默认值：`5`

```yaml
maximum-age: 5
```