---
sidebar_position: 3
---

# 导入

HuskClaims支持通过`/huskclaims import`命令从其他插件导入数据。

| 名称                                  | 支持的导入数据 | 链接                           |
|-------------------------------------|---------|------------------------------|
| [GriefPrevention](#griefprevention) | 领地, 用户  | https://griefprevention.com/ |

## GriefPrevention

HuskClaims支持从[GriefPrevention](https://griefprevention.com/)（`v16.18.1`及以上版本）导入领地、信任和用户数据。

1. 在您的服务器上[安装最新版本的HuskClaims](setup)。您可以卸载GriefPrevention。
2. 运行`/huskclaims import griefprevention set uri:(URI) username:(USERNAME) password:(PASSWORD)`，输入您的GriefPrevention数据库凭据。
   * 如果您使用的是MySQL数据库，URI格式应为`jdbc:mysql://(HOST):(PORT)/(DATABASE)`。
   * 如果您使用的是SQLite数据库，URI格式应为`jdbc:sqlite:(PATH_TO_DATABASE)`。
3. 运行`/huskclaims import griefprevention start`以开始导入过程。根据数据库的大小，这可能需要一些时间。
4. 导入完成后，通过输入`/adminclaimslist`和`/claimslist <player>`来验证数据是否正确导入。

建议在导入成功完成后重启服务器。