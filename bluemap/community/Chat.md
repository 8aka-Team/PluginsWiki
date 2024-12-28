---
sidebar_position: 14
---

```# 网页聊天

## 示例指南

在BlueMap的世界中，我们需要支持所有平台和服务器配置，因此不可能编写满足每个人需求的指南和插件。这就是为什么本指南将通过一个示例案例，将一个运行在Debian VPS上的Paper服务器上的普通BlueMap安装，变成一个带有网页聊天的炫酷版本。您很可能需要根据您的具体情况调整本指南，或者找一个更懂技术的朋友来帮助您。您也可以以每小时90欧元的价格聘请本指南的作者（[Antti.Codes](https://antti.codes/)）进行咨询。不过，由于他非常热心，他会在官方BlueMap Discord的`#第三方支持`频道中尽可能免费提供帮助。

## 要求

根据[RFC 2119](https://datatracker.ietf.org/doc/html/rfc2119)的要求关键词

- 您必须拥有一个基于Spigot的服务器。建议使用Paper。该插件不支持其他平台。
- 您必须拥有root访问权限，并且能够安装和配置其他软件，如nginx。
- 您不得运行带有Bungeecord、Velocity或类似软件的服务器网络。该插件仅支持一个全局聊天。
- 您应该拥有一个公共IP地址。如果没有，您需要自己解决将端口暴露到互联网的问题。
- 您应该了解基本的命令行操作，否则这将非常痛苦。
- 您应该拥有一个域名。没有域名的情况下，自签名证书将非常麻烦。
- 您不应该运行任何聊天插件。该插件不支持它们，行为未定义。
- 您可以找一个系统管理员朋友来帮助您。

本指南假设所有建议都被遵循。

## 初始情况

我们有一个运行Debian的VPS。该VPS有一个公共IP。有一个运行在端口25565上的Paper Minecraft服务器，以及一个运行在端口8100上的BlueMap插件。BlueMap可以通过`http://12.34.56.789:8100/`访问。在我的情况下，Minecraft服务器是通过Docker容器运行的，如下所示。

![docker-compose.yml的内容和数据目录中的文件](/bluemap/assets/chat/starting-situation.png)
![BlueMap已经在http://12.34.56.789:8100/上运行](/bluemap/assets/chat/bluemap-already-working.png)

## 使用nginx进行代理

我们的第一步是将BlueMap站点放在nginx反向代理后面。这是必要的，因为我们想要HTTPS、nginx认证请求模块，并将许多服务合并到一个主机下。使用`sudo apt install -y nginx`安装nginx。您现在应该能够在`http://12.34.56.789/`看到nginx正在工作。

![欢迎使用nginx！](/bluemap/assets/chat/nginx-installed.png)

接下来，我们应该导航到`/etc/nginx`开始配置我们的新安装。我们将首先使用`sudo rm -rf ./sites-available/default ./sites-enabled/default /var/www/html`删除默认的配置文件。然后使用`sudo nano ./sites-available/bluemap.conf`创建我们自己的配置文件，内容如下。

```nginx
server {
  listen 80 default_server;
  listen [::]:80 default_server;
  server_name _;
  location / {
    proxy_pass http://127.0.0.1:8100;
  }
}
```

接下来，我们必须使用`sudo ln -s ../sites-available/bluemap.conf ./sites-enabled/bluemap.conf`启用创建的配置文件。然后使用`sudo nginx -s reload`重新加载nginx后，我们应该在之前显示nginx欢迎页面的位置看到我们的BlueMap。

![通过nginx代理运行的BlueMap](/bluemap/assets/chat/http-proxied-bluemap.png)

由于我们不再使用BlueMap自己的端口来访问它，我们应该防止它被暴露。在我们的`docker-compose.yml`文件中，我们可以使用`"127.0.0.1:8100:8100/tcp"`而不是`"8100:8100/tcp"`。如果您不使用Docker，可以通过编辑`plugins/BlueMap/webserver.conf`并添加`ip: "127.0.0.1"`来直接更改BlueMap使用的IP地址。

## 域名和HTTPS

代理很酷，但现在几乎没什么用。所以打开您的DNS管理界面，在我的情况下是Cloudflare，并为服务器的IP地址添加一个A记录。

![Cloudflare上的DNS记录](/bluemap/assets/chat/dns-cloudflare.png)

将nginx `sites-available/bluemap.conf`文件中的服务器名称更改为您选择的域名，例如`server_name your.domain;`。BlueMap应该可以通过域名访问，只是还没有HTTPS。

为了充分利用我们的域名，我们希望使用免费的SSL证书来保护连接。为此，我们需要一个获取证书的工具，比如`acme.sh`，它非常酷。要安装`acme.sh`，我们需要使用`sudo su`切换到root用户，并运行`curl https://get.acme.sh | sh -s email=your@email.here`，其中包含您的电子邮件。

关闭并重新打开终端，并使用`sudo su`切换回root用户，这样我们现在就可以获取一些免费的好东西了。运行`acme.sh --issue --nginx -d your.domain`来获取您的域名的证书。不过这些证书还不能使用。

首先，我们需要准备一些文件和权限，以便nginx一切顺利。运行以下命令。

```sh
addgroup certs
usermod -aG certs root
usermod -aG certs www-data
mkdir /etc/nginx/certs
touch /etc/nginx/certs/key.pem
touch /etc/nginx/certs/fullchain.pem
chown -R root:certs /etc/nginx/certs
chmod 770 /etc/nginx/certs
chmod 660 /etc/nginx/certs/*
```

这些命令将设置一个`certs`组和一个`certs`文件夹，只有组中的用户（root和nginx）可以访问。现在我们可以安装我们之前获取的证书了。

```sh
acme.sh --install-cert -d your.domain \
--key-file /etc/nginx/certs/key.pem \
--fullchain-file /etc/nginx/certs/fullchain.pem \
--reloadcmd "systemctl reload nginx"
```

我们现在可以退出 root 用户并返回到普通用户（除非你一直在 root 用户下操作...）。  
让我们修改 nginx 的 `sites-available/bluemap.conf` 文件来使用它们。

```nginx
server {  
  listen 80 default_server;  
  listen [::]:80 default_server;  
  server_name _;  
  location / {  
    return 301 https://$host$request_uri;  
  }  
}  

server {  
  listen 443 ssl;  
  listen [::]:443 ssl;  
  server_name your.domain;  
  ssl_certificate /etc/nginx/certs/fullchain.pem;  
  ssl_certificate_key /etc/nginx/certs/key.pem;  
  location / {  
    proxy_pass http://127.0.0.1:8100;  
  }  
}  
```

使用 `sudo nginx -s reload` 重新加载 nginx 后，我们应该会有一个支持 HTTPS 的 BlueMap 网站。太棒了！

![BlueMap with HTTPS](/bluemap/assets/chat/bluemap-with-https.png)

## 认证

下载 [Authentication](https://github.com/Chicken/Auth/releases/tag/authentication-v0.3.0)  
和 [BlueMap-Auth](https://github.com/Chicken/Auth/releases/tag/bluemap-auth-v0.1.0)。  
将它们复制到服务器的插件文件夹中。你可以使用 scp 命令来完成，例如  
`scp Downloads/{Authentication,BlueMap-Auth}*.jar 12.34.56.789:~/minecraft-server/data/plugins`。

现在让我们重启服务器以生成配置文件。  
编辑 `plugins/Authentication/config.yml`，将 `optional_authentication` 设置为 `true`。  
如果你没有使用 Docker，你完全不需要修改端口或 IP，但由于我使用了 Docker，我需要修改。  
我将编辑 Authentication 和 BlueMap-Auth 的 `config.yml`，将 `ip` 设置为 `"0.0.0.0"`。  
并在 `docker-compose.yml` 的 `ports` 部分添加 `"127.0.0.1:8200:8200/tcp"` 和 `"127.0.0.1:8400:8400/tcp"`。  
别忘了重启服务器以应用任何更改。

接下来，我们将回到 nginx，修改 `sites-available/bluemap.conf` 文件如下，并使用 `sudo nginx -s reload` 重新加载。

```nginx
server {
  listen 80 default_server;
  listen [::]:80 default_server;
  server_name _;
  location / {
    return 301 https://$host$request_uri;
  }
}

server {
  listen 443 ssl;
  listen [::]:443 ssl;

  server_name your.domain;
  
  ssl_certificate /etc/nginx/certs/fullchain.pem;
  ssl_certificate_key /etc/nginx/certs/key.pem;

  location / {
    proxy_pass http://127.0.0.1:8000;
    proxy_buffering off;

    auth_request /authentication-outpost/auth;
    error_page 401 = @minecraft_login;

    auth_request_set $minecraft_loggedin $upstream_http_x_minecraft_loggedin;
    auth_request_set $minecraft_uuid $upstream_http_x_minecraft_uuid;
    auth_request_set $minecraft_username $upstream_http_x_minecraft_username;

    proxy_set_header x-minecraft-loggedin $minecraft_loggedin;
    proxy_set_header x-minecraft-uuid $minecraft_uuid;
    proxy_set_header x-minecraft-username $minecraft_username;

    proxy_set_header Host $host;
  }

  location /authentication-outpost/ {
    proxy_pass http://127.0.0.1:8200/;
    proxy_set_header X-Forwarded-For $remote_addr;
    proxy_pass_request_body off;
    proxy_set_header Content-Length "";
  }

  location @minecraft_login {
    internal;
    return 302 /authentication-outpost/login;
  }
}

server {
    listen 127.0.0.1:8000;

    access_log off;

    location / {
        proxy_pass http://127.0.0.1:8100;
        proxy_buffering off;
    }

    location /addons/integration/ {
        proxy_pass http://127.0.0.1:8400/;
        proxy_buffering off;
    }
}
```

你的BlueMap现在应该在菜单中有一个登录按钮。

![一个登录按钮出现了](/bluemap/assets/chat/login-button.png)

![认证屏幕](/bluemap/assets/chat/authentication-screen.png)

![BlueMap菜单现在有你的Minecraft头像](/bluemap/assets/chat/logged-in-bluemap.png)

## 聊天

我们终于到了最后一步。只需要再安装一个插件并进行一点nginx配置。

下载[BlueMap-Chat](https://github.com/Chicken/Auth/releases/tag/bluemap-chat-v0.1.0)并传输它
`scp Downloads/BlueMap-Chat*.jar 12.34.56.789:~/minecraft-server/data/plugins`
使用Docker的用户需要再次调整IP和端口。编辑`plugins/BlueMap-Chat/config.yml`，使其包含
`ip: "0.0.0.0"`，并在`docker-compose.yml`的端口部分添加`"127.0.0.1:8800:8800/tcp"`。

接下来，只需在nginx配置中的集成插件位置旁边添加以下内容，并重新加载nginx。

```nginx
    location /addons/chat/ {
        proxy_pass http://127.0.0.1:8800/;
        proxy_buffering off;
    }
```

![Web应用中的聊天](/bluemap/assets/chat/chat-in-web.png)

![Minecraft中的聊天](/bluemap/assets/chat/chat-in-mc.png)
