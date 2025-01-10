---
sidebar_position: 1
---

# Sonar

<div align="center">
  <!-- 介绍 -->
  <h2>💫 Sonar</h2>
  为您的Minecraft服务器提供的轻量级且易于使用的反机器人插件。
  <br></br>
  Sonar保护您的服务器免受常见甚至复杂的机器人攻击。
  <br></br><br></br>

  <!-- 徽章和图标 -->
[![](https://github.com/jonesdevelopment/sonar/actions/workflows/gradle.yml/badge.svg)](https://github.com/jonesdevelopment/sonar/actions/workflows/gradle.yml)
[![](https://www.codefactor.io/repository/github/jonesdevelopment/sonar/badge/main)](https://www.codefactor.io/repository/github/jonesdevelopment/sonar/overview/main)
[![](https://img.shields.io/github/v/release/jonesdevelopment/sonar)](https://github.com/jonesdevelopment/sonar/releases)
[![](https://img.shields.io/github/issues/jonesdevelopment/sonar)](https://github.com/jonesdevelopment/sonar/issues)
[![](https://img.shields.io/discord/923308209769426994.svg?logo=discord)](https://jonesdev.xyz/discord)
[![](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
<br></br>
  <!-- 快速导航 -->
[发布](https://github.com/jonesdevelopment/sonar/releases)
|
[问题](https://github.com/jonesdevelopment/sonar/issues)
|
[拉取请求](https://github.com/jonesdevelopment/sonar/pulls)
|
[Discord](https://jonesdev.xyz/discord)
|
[许可证](https://github.com/jonesdevelopment/sonar/?tab=readme-ov-file#license)
</div>

## 设计和目标
* 高效、轻量级且易于使用
* 没有不必要的功能和干净的代码
* 防止各种机器人攻击
* 玩家不应受到任何形式的[验证码](https://en.wikipedia.org/wiki/CAPTCHA)的困扰
* 不检查VPN或代理
* 多平台支持（参见[支持的版本](https://docs.jonesdev.xyz/sonar/supported-versions)）

## 检查
Sonar在玩家加入实际服务器之前分析其行为，从而阻止恶意流量到达后端。它应该是一种即时、强大且简单的验证方法，可以防止所有典型和高级类型的机器人。

1. Sonar在玩家首次连接时将其发送到一个轻量级的假服务器。
2. Sonar验证玩家是否遵守Minecraft的物理定律，包括重力和正确的方块碰撞。
3. Sonar验证玩家在与车辆（如船）交互时发送的合法数据包。
4. Sonar确保玩家根据[原版Minecraft协议](<https://wiki.vg/Protocol>)发送合法数据包。

Sonar还防止垃圾邮件机器人攻击，因为它会排队处理传入的连接，因此在技术上不可能让大量机器人同时加入服务器。

### 误报
Sonar不太可能错误地阻止玩家加入服务器，因为Minecraft使用TCP协议，这意味着数据包总是以正确的顺序发送。因此，延迟或ping不应影响机器人检查。
如果您或您的玩家遇到误报，请确保通过打开[GitHub问题](https://github.com/jonesdevelopment/sonar/issues/new/choose)或在[Discord服务器](https://jonesdev.xyz/discord/)上提交票证来报告。

## 赞助商
非常感谢Sonar的赞助商，他们帮助维持这个项目的运行：

<a href="https://github.com/Hydoxl"><img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/107579333?v=4&h=50&w=50&fit=cover&mask=circle&maxage=7d" alt="logo" align="center"></img></a>

## 构建
如果您想构建自己的Sonar版本，请查看[Sonar构建文档](https://docs.jonesdev.xyz/development/building)。
<br></br>
您还可以查看[gradle文档](https://docs.gradle.org/current/userguide/userguide.html)以更好地理解Gradle。

## 贡献
如果您有兴趣贡献，可以查看[贡献指南](https://github.com/jonesdevelopment/sonar/blob/main/.github/CONTRIBUTING.md)以获取详细说明。

## 许可证
Sonar根据[GNU通用公共许可证3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)授权。

## 致谢
- 特别感谢[Sonar的贡献者](https://github.com/jonesdevelopment/sonar/graphs/contributors)。

:::tip

本文档未翻译开发和贡献部分,作为一个开发者,不会用翻译别打代码了

:::