---
sidebar_position: 2
---

# 使用外部Web服务器直接从SQL存储托管BlueMap

BlueMap的内部Web服务器非常轻量且速度很快，但在大量并发用户的情况下可能会不堪重负。

如果你想为更多用户优化Web应用的速度，你也可以直接使用外部Web服务器（如[NGINX](https://www.nginx.com/)或[Apache](https://httpd.apache.org/)）来托管BlueMap。为此，你需要进行一些配置。

## 目标
BlueMap在SQL服务器上渲染并保存地图。但Web应用请求这些地图时，就像它们在Web根目录下的普通文件存储中一样。因此，我们需要一些脚本来翻译这些请求，并从SQL服务器获取并提供正确的文件。

## 通用设置

幸运的是，BlueMap提供了这样一个脚本，确切地说是一个PHP脚本。这意味着你需要做的第一件事是确保你的Web服务器上安装了PHP（>= 7.4）。然后，进入Web根目录并打开`sql.php`，并在其中设置你的SQL连接配置。

:::important
**重要提示：**  
确保你的PHP设置正常工作，否则你可能会意外地将这些SQL连接配置泄露给全世界！
:::

:::info
 **信息：**
 由于所有地图都在数据库中，请确保从**Web根目录**中删除（旧的）`maps`文件夹（如果它仍然存在）。这样，其中的文件不会覆盖本应从数据库中获取的数据。
:::

现在你需要配置你的Web服务器，使其将所有不存在静态文件的请求重写到`sql.php`。

## NGINX
在NGINX上，这可以通过例如`try_files $uri /sql.php;`来实现。

在某些上下文中，你的网站配置可能如下所示：
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    # BlueMap的Web根目录路径，BlueMap也可以在子文件夹中使用……只需相应地调整路径
    root /var/www;
    
    location / {
        try_files $uri /sql.php;
    }
    
    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/run/php/php7.4-fpm.sock;
    }

    # 可选：
    # 将每个地图的实时数据接口请求代理到BlueMap的集成Web服务器
    # 如果你有多个服务器，你需要将每个地图ID代理到正确的服务器
    location ~* /(maps/[^/\s]*/live/.*) {
        proxy_pass http://127.0.0.1:8100/$1;
    }
}
```
:::important

**重要提示：**

上述配置**只是一个示例**，并不是一个可以直接复制粘贴的完整配置。你**需要**根据你的设置进行调整！
:::

## Apache

以下是一个在Apache上的示例配置：
```apache
DocumentRoot /var/www/
<Directory /var/www/>
    allow from all
    Options FollowSymLinks
    Require all granted
  
    RewriteEngine On
    
    RewriteCond %{REQUEST_FILENAME} !-s
    RewriteCond %{REQUEST_FILENAME} !-l
    RewriteCond %{REQUEST_FILENAME} !-d
    # 将请求重写到sql.php
    RewriteRule ^.*$ /sql.php [L]  
</Directory>

# 可选：
# 将实时数据接口请求代理到BlueMap的集成Web服务器  
ProxyPreserveHost On
ProxyPassMatch ^/(maps/[^/]*/live/.*) http://127.0.0.1:8100/$1
```
:::important

**重要提示：**

上述配置**只是一个示例**，并不是一个可以直接复制粘贴的完整配置。你**需要**根据你的设置进行调整！
:::

## 使用php-fpm的Caddy

以下是一个在使用php-fpm的Caddy上的示例配置：
```
yourdomain.com {
    # Web服务器的根目录。
    root /var/www
    file_server

    # https://caddyserver.com/docs/caddyfile/patterns#php-fpm
    # 你可能需要修改此路径。
    php_fastcgi unix//run/php/php7.4-fpm.sock

    # 使用sql.php脚本，该脚本处理来自SQL服务器的数据请求。
    handle {
        try_files {path} /sql.php
    }

    # 可选：
    # 将实时数据请求代理到BlueMap的集成Web服务器。
    # 如果你有多个服务器，你需要将每个地图ID代理到正确的服务器。
    handle /maps/*/live/* {
        reverse_proxy 127.0.0.1:8100
    }
}
```
:::important

**重要提示：**

上述配置**只是一个示例**，并不是一个可以直接复制粘贴的完整配置。你**需要**根据你的设置进行调整！
:::

## FrankenPHP

以下是一个在FrankenPHP上的示例配置：
```
{
    # https://frankenphp.dev/docs/config/#caddyfile-config
    # 启用FrankenPHP。
    frankenphp
}

yourdomain.com {
    # Web服务器的根目录。
    root /var/www

    # https://frankenphp.dev/docs/config/
    # 在根目录中执行PHP文件并提供资源。
    php_server

    # 使用sql.php脚本，该脚本处理来自SQL服务器的数据请求。
    handle {
        try_files {path} /sql.php
    }

    # 可选：
    # 将实时数据请求代理到BlueMap的集成Web服务器。
    # 如果你有多个服务器，你需要将每个地图ID代理到正确的服务器。
    handle /maps/*/live/* {
        reverse_proxy 127.0.0.1:8100
    }
}
```

:::important

**重要提示：**

上述配置**只是一个示例**，并不是一个可以直接复制粘贴的完整配置。你**需要**根据你的设置进行调整！

:::
