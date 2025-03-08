---
sidebar_position: 4
---

# 添加登录功能

## 什么是登录功能及其必要性

通常情况下，你的地图是完全开放给所有人查看的。
但有时你可能不想分享它。
可能的原因包括：

- 仅限白名单好友的SMP
- 仅限工作人员的地图
- 地图是付费等级的特权

有多种方法可以添加登录页面。
方法从简单的共享密码到Minecraft命令，再到完整的SSO解决方案。

## 先决条件

认证是一个非常高级的主题，你需要的不仅仅是一个Minecraft服务器。
你应该有一个可以运行这些服务的适当服务器。
在你开始之前，你的地图应该已经运行在一个外部Web服务器或HTTP**S**代理后面，
这样凭证就不会以明文形式在互联网上传输。
你还应该对托管Web应用程序（Web服务器、DNS、SSL/TLS）有基本的了解。

## 基本认证（简单，但有点不方便且不美观）

基本认证是最...基本...的认证形式。
它只是要求输入一个用户名和密码，这些信息配置在一个文件中。
通常由外部Web服务器（如Nginx或Apache）处理。

你可以使用Apache的`htpasswd`工具创建配置文件。
在基于Debian的发行版中，它位于`apache2-utils`包中。
要创建一个新文件和第一个用户，请使用`htpasswd -c /path/to/file/.htpasswd user`。
要创建新用户，请使用`htpasswd /path/to/file/.htpasswd another_user`。

### [Nginx](https://docs.nginx.com/nginx/admin-guide/security-controls/configuring-http-basic-authentication/)

在你的BlueMap的Nginx配置中的`server`或`location`指令中添加以下行：

```nginx
auth_basic "BlueMap";
auth_basic_user_file /path/to/file/.htpasswd; 
```

### [Apache](https://httpd.apache.org/docs/2.4/mod/mod_auth_basic.html)

Apache认证发生在目录级别，所以如果你有`DocumentRoot /var/www/bluemap`，
你需要在你的BlueMap的Apache配置中添加以下内容：

```apache
<Directory "/var/www/bluemap">
    AuthType Basic
    AuthName "BlueMap"
    AuthUserFile /path/to/file/.htpasswd
    Require valid-user
</Directory>
```

## 基于Minecraft权限的登录（中等，对用户方便）

如果你想根据用户的Minecraft权限（如权限组/等级授予的权限）限制他们访问你的BlueMap，
你应该阅读[`Chicken/Auth`](https://github.com/Chicken/Auth)，这是我们社区成员制作的一个很棒的项目。

## 高级软件（最难，最灵活）

还有许多其他项目可以用于认证和授权。
经过实战考验的大型SSO和身份提供者应用程序，如[Authentik](https://goauthentik.io/)或[Authelia](https://www.authelia.com/)。
尽管这些应用程序庞大且复杂，但它们的好处是可以处理许多不同类型的登录和更复杂的设置。
解释它们的设置将远远超出本Wiki的范围，因此你最好阅读它们的官方说明。
请注意，设置这些并不是一件容易的任务，你需要一些经验。
