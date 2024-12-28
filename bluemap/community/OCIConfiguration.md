---
sidebar_position: 9
---


# Oracle Cloud 实例 - 端口开放（Oracle Linux 和 Ubuntu）

:::info
> 在本指南中，我将仅涵盖在OCI控制台和服务器本身上的端口管理。
> 重点将放在BlueMap访问上，而不是您的Minecraft服务器或设置它的方法。
:::

## 第一步：在您的Oracle实例上开放端口（Web控制台）

前往您的控制台（[Oracle Cloud 登录页面](https://cloud.oracle.com/)），然后在菜单中选择“网络”，接着选择“虚拟云网络”。

![OCI Web配置菜单的截图](/bluemap/assets/ociconf/OCI_01.png)

在新页面上，您应该会看到您的虚拟网络（默认情况下为“vcn-....”形式），选择它。
之后，选择您的子网，然后选择“默认安全列表”（每种只有一个）。

您应该会看到一个类似于以下截图的页面：

![默认OCI网络规则的截图](/bluemap/assets/ociconf/OCI_02.png)

选择“添加入站规则”
我们添加的第一条规则是用于访问BlueMap的：

![BlueMap端口开放规则配置的截图](/bluemap/assets/ociconf/OCI_03.png)

因此，作为源，我们将其设置为ANY，即：0.0.0.0/0
对于端口，如果您使用默认值：8100
协议是TCP（HTTP服务的标准）

然后，如果尚未完成，我们还需要允许访问我们的Minecraft服务器（取决于您安装的版本和/或允许客户端连接到您的Java服务器的模组）

![Minecraft服务器端口开放规则配置的截图](/bluemap/assets/ociconf/OCI_04.png)

对于所有这些设置，请根据您的需要调整目标端口。

之后，您应该会有一些类似于以下规则的规则：

![OCI网络规则摘要的截图](/bluemap/assets/ociconf/OCI_05.png)

现在，这里简要解释一下我们上面所做的：

“无状态” ==> 我们不希望手动创建出站规则，因此我们不勾选此框，让系统处理连接。
如果我们选择了它，我们将需要创建一条规则，以允许从BlueMap Web服务器端口（到任何目标端口（因为这是一个随机端口，永远不会相同））的任何目的地出站。

“源CIDR” ==> 我们希望任何外部连接都能连接到我们的服务器，因此我们以CIDR表示法指定“全部”，即0.0.0.0/0

“源端口范围” ==> 由客户端主机（随机）定义，因此我们留空此框。

“目标端口范围” ==> 对于这一点，我们设置为目标服务的值，例如，BlueMap端口8100。

## 第二步a - Oracle Linux 8

关于如何开放端口的官方指南可以在这里找到：[https://docs.oracle.com/en/operating-systems/oracle-linux/8/firewall/firewall-ConfiguringaPacketFilteringFirewall.html#ol-firewall](https://docs.oracle.com/en/operating-systems/oracle-linux/8/firewall/firewall-ConfiguringaPacketFilteringFirewall.html#ol-firewall)

但是，以下是您为Oracle Linux设置需要做的总结：

:::info

所有这些命令都以“sudo”开头。如果您已经使用root账户，可以从命令中删除它！

:::

首先，检查您的系统上是否有`firewall-cmd`命令。
您可以使用以下命令检查其存在：
```
sudo firewall-cmd --version
```

如果您没有得到版本输出或只是“命令未找到”，请执行以下命令来安装它：
```
sudo dnf install firewalld
sudo systemctl enable firewalld
```
第二条命令确保它在启动时启动。

然后，您可以简单地将所需的端口添加到规则列表中，对于BlueMap，默认是8100/tcp，因此命令将如下所示：
```
sudo firewall-cmd --permanent --zone=public --add-port=8100/tcp
```

作为最终命令，只需运行此命令以重新加载防火墙配置与您的更改
```
sudo firewall-cmd --reload
```

## 第二步b - Ubuntu

根据Oracle的最佳实践，您可以按照此处解释的步骤操作：[https://blogs.oracle.com/developers/post/enabling-network-traffic-to-ubuntu-images-in-oracle-cloud-infrastructure](https://blogs.oracle.com/developers/post/enabling-network-traffic-to-ubuntu-images-in-oracle-cloud-infrastructure)；在“主机防火墙”章节或仅阅读下面的快速步骤。

那里使用的方法是编辑名为“/etc/iptables/rules.v4”的文件，并在其中添加您自己的规则。

您的初始文件应该如下所示（至少开头部分）：
```
# CLOUD_IMG: 此文件由云镜像构建过程创建/修改
# Oracle Cloud Infrastructure的iptables配置

# 请参阅Oracle Cloud Infrastructure文档中的Oracle提供镜像部分，了解修改或删除这些规则的安全影响

*filter
:INPUT ACCEPT [0:0]
:FORWARD ACCEPT [0:0]
:OUTPUT ACCEPT [463:49013]
:InstanceServices - [0:0]
-A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT
-A INPUT -p icmp -j ACCEPT
-A INPUT -i lo -j ACCEPT
-A INPUT -p tcp -m state --state NEW -m tcp --dport 22 -j ACCEPT
-A INPUT -p udp --sport 123 -j ACCEPT
-A [...]
-A INPUT -j REJECT --reject-with icmp-host-prohibited
-A FORWARD -j REJECT --reject-with icmp-host-prohibited
[...]
-A InstanceServices [...]
COMMIT
```

然后，您可以插入新行，对于BlueMap（但在全局REJECT规则之前！），这将如下所示：
```
# CLOUD_IMG: 此文件由云镜像构建过程创建/修改
# Oracle Cloud Infrastructure的iptables配置

# 请参阅Oracle Cloud Infrastructure文档中的Oracle提供镜像部分，了解修改或删除这些规则的安全影响

*filter
:INPUT ACCEPT [0:0]
:FORWARD ACCEPT [0:0]
:OUTPUT ACCEPT [463:49013]
:InstanceServices - [0:0]
-A INPUT -m state --state RELATED,ESTABLISHED -j ACCEPT
-A INPUT -p icmp -j ACCEPT
-A INPUT -i lo -j ACCEPT
-A INPUT -p tcp -m state --state NEW -m tcp --dport 22 -j ACCEPT
-A INPUT -p udp --sport 123 -j ACCEPT
-A INPUT -p tcp -m state --state NEW -m tcp --dport 8100 -j ACCEPT
-A [...]
-A INPUT -j REJECT --reject-with icmp-host-prohibited
-A FORWARD -j REJECT --reject-with icmp-host-prohibited
[...]
-A InstanceServices [...]
COMMIT
```

:::important

> 在添加行到该文件时要小心！
> 您必须将新行放在“REJECT”规则之前（“-A INPUT -j REJECT --reject-with icmp-host-prohibited”）。
> 如果不遵循这一点，防火墙可能会默认应用“拒绝”规则（有时这可能有效，但并非总是如此）。

:::

现在，保存文件，之后您可以选择重新启动服务器或运行以下命令：

**如果您没有使用root权限：**
```
sudo iptables-restore < /etc/iptables/rules.v4
```

**如果您使用root权限：**
```
iptables-restore < /etc/iptables/rules.v4
```

## 第三步 - 享受吧！

如果您已经到达这里，您应该能够通过以下地址访问您的Web地图：`http://您的服务器公共IP:您的BlueMap Web端口（默认端口为8100）`。

如果您想使用自定义DNS和/或HTTPS，您可以在Web服务器Wiki中找到一些信息（[使用NGINX反向代理BlueMap](https://bluemap.bluecolored.de/wiki/webserver/NginxProxy.html)）
```