---
sidebar_position: 1
---

# 命令

HuskClaims provides a suite of commands to aid claiming, including the ability to trust users. Use `/huskclaims help` to
view a list of commands in-game.

## Command Reference

HuskClaims 提供了一套命令来辅助领地声明，包括信任用户的功能。使用 `/huskclaims help` 可以在游戏中查看命令列表。

## 命令参考

<table align="right">
    <thead>
        <tr><th colspan="2">键</th></tr>
    </thead>
    <tbody>
        <tr><td>✅</td><td>默认所有玩家均可访问</td></tr>
        <tr><td>❌</td><td>默认仅服务器管理员可访问</td></tr>
    </tbody>
</table>

这是一个 HuskClaims 命令的表格，包括如何使用它们、所需的权限节点以及默认是否授予权限。有关插件权限的更多详细信息，请查看 [[权限]] 页面。

<table>
    <thead>
        <tr>
            <th colspan="2">命令</th>
            <th>描述</th>
            <th>权限</th>
            <th>默认</th>
        </tr>
    </thead>
    <tbody>
        <!-- /claim 命令 -->
        <tr><th colspan="5">领地声明命令</th></tr>
        <tr><td colspan="5" align="center">用于声明领地的命令——有些需要持有声明工具才能使用。</td></tr>
        <tr>
            <td rowspan="2"><code>/claim</code></td>
            <td><code>/claim</code></td>
            <td>切换常规声明模式</td>
            <td rowspan="2"><code>huskclaims.claim</code></td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td><code>/claim &lt;radius&gt;</code></td>
            <td>在您的位置周围创建一个领地</td>
            <td align="center">✅</td>
        </tr>
        <!-- /childclaim 命令 -->
        <tr>
            <td rowspan="2"><code>/childclaim</code></td>
            <td><code>/childclaim</code></td>
            <td>切换子领地声明模式</td>
            <td rowspan="2"><code>huskclaims.child_claim</code></td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td><code>/childclaim &lt;radius&gt;</code></td>
            <td>在父领地中围绕您的位置创建一个子领地</td>
            <td align="center">✅</td>
        </tr>
        <!-- /adminclaim 命令 -->
        <tr>
            <td rowspan="2"><code>/adminclaim</code></td>
            <td><code>/adminclaim</code></td>
            <td>切换管理员声明模式</td>
            <td rowspan="2"><code>huskclaims.admin_claim</code></td>
            <td align="center">❌</td>
        </tr>
        <tr>
            <td><code>/adminclaim &lt;radius&gt;</code></td>
            <td>在您的位置周围创建一个管理员领地</td>
            <td align="center">❌</td>
        </tr>
        <!-- /claimslist 命令 -->
        <tr>
            <td rowspan="2"><code>/claimslist</code></td>
            <td><code>/claimslist</code></td>
            <td>查看您的领地列表</td>
            <td><code>huskclaims.command.claimslist</code></td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td><code>/claimslist &lt;username&gt;</code></td>
            <td>查看其他玩家的领地列表</td>
            <td><code>huskclaims.command.claimslist.other</code></td>
            <td align="center">❌</td>
        </tr>
        <!-- /adminclaimslist 命令 -->
        <tr>
            <td><code>/adminclaimslist</code></td>
            <td><code>/adminclaimslist</code></td>
            <td>查看管理员领地列表</td>
            <td><code>huskclaims.command.adminclaimslist</code></td>
            <td align="center">❌</td>
        </tr>
        <!-- /extendclaim 命令 -->
        <tr>
            <td rowspan="2"><code>/extendclaim</code></td>
            <td rowspan="2"><code>/extendclaim &lt;blocks&gt;</code></td>
            <td>在您面对的方向上扩展您的领地</td>
            <td><code>huskclaims.command.extendclaim</code></td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td>扩展其他用户的领地（使用您自己的领地块）</td>
            <td><code>huskclaims.command.extendclaim.other</code></td>
            <td align="center">❌</td>
        </tr>
        <!-- /unclaim 命令 -->
        <tr>
            <td rowspan="2"><code>/unclaim</code></td>
            <td rowspan="2"><code>/unclaim</code></td>
            <td>移除你所在的领地声明</td>
            <td><code>huskclaims.command.unclaim</code></td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td>移除你所在的另一个用户的领地声明</td>
            <td><code>huskclaims.command.unclaim.other</code></td>
            <td align="center">❌</td>
        </tr>
        <!-- /unclaimall 命令 -->
        <tr>
            <td rowspan="2"><code>/unclaimall</code></td>
            <td><code>/unclaimall [confirm]</code></td>
            <td>移除你所有的领地声明。如果在管理员声明模式下，移除所有管理员声明。</td>
            <td><code>huskclaims.command.unclaimall</code></td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td><code>/unclaimall &lt;username&gt; [confirm]</code></td>
            <td>移除另一个用户的所有领地声明。</td>
            <td><code>huskclaims.command.unclaimall.other</code></td>
            <td align="center">❌</td>
        </tr>
        <!-- /trust level 命令 -->
        <tr><th colspan="5">信任等级命令</th></tr>
        <tr><td colspan="5" align="center">用于授予你所在领地访问权限的命令。信任等级可自定义；以下是默认等级。</td></tr>
        <tr>
            <td rowspan="2"><code>/permissiontrust</code></td>
            <td rowspan="2"><code>/permissiontrust &lt;usernames|@groups|#tags&hellip;&gt;</code></td>
            <td>授予用户/组/标签管理（信任他人，创建子领地）权限</td>
            <td><code>huskclaims.command.permissiontrust</code></td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td>在他人领地上授予用户管理权限</td>
            <td><code>huskclaims.command.permissiontrust.other</code></td>
            <td align="center">❌</td>
        </tr>
        <tr>
            <td rowspan="2"><code>/trust</code></td>
            <td rowspan="2"><code>/trust &lt;usernames|@groups|#tags&hellip;&gt;</code></td>
            <td>授予用户/组/标签建造（放置/破坏方块）权限</td>
            <td><code>huskclaims.command.trust</code></td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td>在他人领地上授予用户建造权限</td>
            <td><code>huskclaims.command.trust.other</code></td>
            <td align="center">❌</td>
        </tr>
        <tr>
            <td rowspan="2"><code>/containertrust</code></td>
            <td rowspan="2"><code>/containertrust &lt;usernames|@groups|#tags&hellip;&gt;</code></td>
            <td>授予用户/组/标签容器（箱子、漏斗等）权限</td>
            <td><code>huskclaims.command.containertrust</code></td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td>在他人领地上授予用户容器权限</td>
            <td><code>huskclaims.command.containertrust.other</code></td>
            <td align="center">❌</td>
        </tr>
        <tr>
            <td rowspan="2"><code>/accesstrust</code></td>
            <td rowspan="2"><code>/accesstrust &lt;usernames|@groups|#tags&hellip;&gt;</code></td>
            <td>授予用户/组/标签访问（门、按钮等）权限</td>
            <td><code>huskclaims.command.accesstrust</code></td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td>在他人领地上授予用户访问权限</td>
            <td><code>huskclaims.command.accesstrust.other</code></td>
            <td align="center">❌</td>
        </tr>
        <!-- /trustlist 命令 -->
        <tr><th colspan="5">领地管理命令</th></tr>
        <tr><td colspan="5" align="center">用于管理你所在领地的命令。</td></tr>
        <tr>
            <td rowspan="2" colspan="2"><code>/trustlist</code></td>
            <td>查看受信任用户/组/标签的列表</td>
            <td><code>huskclaims.command.trustlist</code></td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td>查看另一个用户领地的信任列表</td>
            <td><code>huskclaims.command.trustlist.other</code></td>
            <td align="center">❌</td>
        </tr>
        <!-- /untrust 命令 -->
        <tr>
            <td rowspan="2"><code>/untrust</code></td>
            <td rowspan="2"><code>/untrust &lt;usernames|@groups|#tags&hellip;&gt;</code></td>
            <td>撤销用户/组/标签的信任等级</td>
            <td><code>huskclaims.command.untrust</code></td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td>撤销另一个用户领地上用户的信任等级</td>
            <td><code>huskclaims.command.untrust.other</code></td>
            <td align="center">❌</td>
        </tr>
        <!-- /restrictclaim 命令 -->
        <tr>
            <td rowspan="2"><code>/restrictclaim</code></td>
            <td rowspan="2"><code>/restrictclaim [on|off]</code></td>
            <td>限制你所在的子领地继承父领地的信任访问权限</td>
            <td><code>huskclaims.command.restrictclaim</code></td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td>限制子领地在他人领地内</td>
            <td><code>huskclaims.command.restrictclaim.other</code></td>
            <td align="center">❌</td>
        </tr>
        <!-- /transferclaim 命令 -->
        <tr>
            <td rowspan="2"><code>/transferclaim</code></td>
            <td rowspan="2"><code>/transferclaim &lt;用户名&gt;</code></td>
            <td>将领地的所有权转移给其他玩家</td>
            <td><code>huskclaims.command.transferclaim</code></td>
            <td align="center">❌</td>
        </tr>
        <tr>
            <td>转移他人领地的所有权</td>
            <td><code>huskclaims.command.transferclaim.other</code></td>
            <td align="center">❌</td>
        </tr>
        <!-- /claimflags 命令 -->
        <tr>
            <td rowspan="3"><code>/claimflags</code></td>
            <td rowspan="3"><code>/claimflags &lt;list|set&gt;</code></td>
            <td>管理你所在领地的标志</td>
            <td><code>huskclaims.command.claimflags</code></td>
            <td align="center">❌</td>
        </tr>
        <tr>
            <td>管理他人领地的标志</td>
            <td><code>huskclaims.command.claimflags.other</code></td>
            <td align="center">❌</td>
        </tr>
        <tr>
            <td>管理你所在领地世界的标志</td>
            <td><code>huskclaims.command.claimflags.world</code></td>
            <td align="center">❌</td>
        </tr>
        <!-- /claimexplosions 命令 -->
        <tr><th colspan="5">操作组命令</th></tr>
        <tr><td colspan="5" align="center">允许用户切换操作类型标志组。默认只配置了一个：</td></tr>
        <tr>
            <td rowspan="2"><code>/claimexplosions</code></td>
            <td rowspan="2"><code>/claimexplosions [on|off]</code></td>
            <td>切换领地内允许爆炸伤害的标志</td>
            <td><code>huskclaims.command.claimexplosions</code></td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td>切换他人领地内的爆炸设置</td>
            <td><code>huskclaims.command.claimexplosions.other</code></td>
            <td align="center">❌</td>
        </tr>
        <!-- /claimban 命令 -->
        <tr>
            <td rowspan="2"><code>/claimban</code></td>
            <td rowspan="2"><code>/claimban &lt;ban|unban|list&gt; [用户名]</code></td>
            <td>将用户从你所在的领地中封禁</td>
            <td><code>huskclaims.command.claimban</code></td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td>将用户从他人领地中封禁</td>
            <td><code>huskclaims.command.claimban.other</code></td>
            <td align="center">❌</td>
        </tr>
        <!-- /usergroup 命令 -->
        <tr><th colspan="5">用户组命令</th></tr>
        <tr><td colspan="5" align="center">允许用户创建玩家组，以便轻松集中管理领地权限。</td></tr>
        <tr>
            <td rowspan="4"><code>/usergroup</code></td>
            <td><code>/usergroup</code></td>
            <td>查看你的用户组列表</td>
            <td rowspan="4"><code>huskclaims.command.usergroup</code></td>
            <td rowspan="4" align="center">✅</td>
        </tr>
        <tr>
            <td><code>/usergroup &lt;名称&gt; [list]</code></td>
            <td>查看用户组的成员列表</td>
        </tr>
        <tr>
            <td><code>/usergroup &lt;名称&gt; delete</code></td>
            <td>删除一个用户组</td>
        </tr>
        <tr>
            <td><code>/usergroup &lt;名称&gt; &lt;add|remove&gt; &lt;用户名&hellip;&gt;</code></td>
            <td>向用户组添加或移除玩家。</td>
        </tr>
        <tr><th colspan="5">领地块命令</th></tr>
        <tr><td colspan="5" align="center">允许用户/管理员购买、查看和管理领地块。</td></tr>
        <tr>
            <td rowspan="4"><code>/claimblocks</code></td>
            <td><code>/claimblocks</code></td>
            <td>查看你的领地块余额</td>
            <td><code>huskclaims.command.claimblocks</code></td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td><code>/claimblocks &lt;用户名&gt; [show]</code></td>
            <td>查看其他用户的领地块余额</td>
            <td><code>huskclaims.command.claimblocks.other</code></td>
            <td align="center">❌</td>
        </tr>
        <tr>
            <td><code>/claimblocks &lt;用户名&gt; gift &lt;数量&gt;</code></td>
            <td>赠送（发送）用户一定数量的领地块。</td>
            <td><code>huskclaims.command.claimblocks.gift</code></td>
            <td align="center">❌</td>
        </tr>
        <tr>
            <td><code>/claimblocks &lt;用户名&gt; &lt;add|remove|set&gt; &lt;数量&gt;</code></td>
            <td>编辑领地块余额。编辑他人余额还需要 'other' 权限。</td>
            <td><code>huskclaims.command.claimblocks.edit</code></td>
            <td align="center">❌</td>
        </tr>
        <tr>
            <td><code>/buyclaimblocks</code></td>
            <td><code>/buyclaimblocks &lt;amount&gt;</code></td>
            <td>用金钱购买领地块。需要使用Vault插件。</td>
            <td><code>huskclaims.command.buyclaimblocks</code></td>
            <td align="center">✅</td>
        </tr>
        <!-- /transferpet command -->
        <tr><th colspan="5">宠物命令</th></tr>
        <tr><td colspan="5" align="center">管理驯服动物的保护。</td></tr>
        <tr>
            <td rowspan="2"><code>/transferpet</code></td>
            <td rowspan="2"><code>/transferpet &lt;username&gt;</code></td>
            <td>将驯服动物（宠物）的所有权转移给其他玩家</td>
            <td><code>huskclaims.command.transferpet</code></td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td>转移他人宠物的所有权</td>
            <td><code>huskclaims.command.transferpet.other</code></td>
            <td align="center">❌</td>
        </tr>
        <!-- /unlockdrops command -->
        <tr><th colspan="5">死亡掉落命令</th></tr>
        <tr><td colspan="5" align="center">管理死亡时掉落物品的锁定。</td></tr>
        <tr>
            <td rowspan="2"><code>/unlockdrops</code></td>
            <td><code>/unlockdrops</code></td>
            <td>解锁你死亡时锁定的物品掉落</td>
            <td><code>huskclaims.command.unlockdrops</code></td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td><code>/unlockdrops &lt;username&gt;</code></td>
            <td>解锁他人的死亡掉落</td>
            <td><code>huskclaims.command.unlockdrops.other</code></td>
            <td align="center">❌</td>
        </tr>
        <!-- /trapped command -->
        <tr><th colspan="5">被困在领地内命令</th></tr>
        <tr><td colspan="5" align="center">允许用户传送到他们没有建造权限的领地外。</td></tr>
        <tr>
            <td colspan="2"><code>/trapped</code></td>
            <td>将你传送到无法建造的领地外。</td>
            <td><code>huskclaims.command.trapped</code></td>
            <td align="center">✅</td>
        </tr>
        <tr><th colspan="5">其他管理员命令</th></tr>
        <tr><td colspan="5" align="center">管理和插件管理工具。</td></tr>
        <tr>
            <td><code>/ignoreclaims</code></td>
            <td><code>/ignoreclaims [on|off]</code></td>
            <td>切换忽略领地规则/信任级别。注意你必须持续拥有权限才能继续忽略领地。</td>
            <td><code>huskclaims.command.ignoreclaims</code></td>
            <td align="center">❌</td>
        </tr>
        <tr>
            <td><code>/signspy</code></td>
            <td><code>/signspy [on|off]</code></td>
            <td>切换接收用户放置或编辑告示牌时的管理通知。</td>
            <td><code>huskclaims.command.signspy</code></td>
            <td align="center">❌</td>
        </tr>
        <tr>
            <td rowspan="9"><code>/huskclaims</code></td>
            <td><code>/huskclaims</code></td>
            <td>使用插件管理命令</td>
            <td><code>huskclaims.command.huskclaims</code></td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td><code>/huskclaims about</code></td>
            <td>查看插件关于菜单</td>
            <td><code>huskclaims.command.huskclaims.about</code></td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td><code>/huskclaims help [page]</code></td>
            <td>查看插件命令列表</td>
            <td><code>huskclaims.command.huskclaims.help</code></td>
            <td align="center">✅</td>
        </tr>
        <tr>
            <td><code>/huskclaims update</code></td>
            <td>检查插件更新</td>
            <td><code>huskclaims.command.huskclaims.update</code></td>
            <td align="center">❌</td>
        </tr>
        <tr>
            <td><code>/huskclaims reload</code></td>
            <td>重新加载插件的语言文件和配置文件</td>
            <td><code>huskclaims.command.huskclaims.reload</code></td>
            <td align="center">❌</td>
        </tr>
        <tr>
            <td><code>/huskclaims import</code></td>
            <td>从其他插件导入数据</td>
            <td><code>huskclaims.command.huskclaims.import</code></td>
            <td align="center">❌</td>
        </tr>
        <tr>
            <td><code>/huskclaims teleport [coordinates]</code></td>
            <td>传送到指定位置的领地。需要使用HuskHomes插件。</td>
            <td><code>huskclaims.command.huskclaims.teleport</code></td>
            <td align="center">❌</td>
        </tr>
        <tr>
            <td><code>/huskclaims logs &lt;username&gt;</code></td>
            <td>查看玩家的审计日志，例如领地块交易收据。</td>
            <td><code>huskclaims.command.huskclaims.logs</code></td>
            <td align="center">❌</td>
        </tr>
        <tr>
            <td><code>/huskclaims status</code></td>
            <td>查看系统状态调试信息屏幕。</td>
            <td><code>huskclaims.command.huskclaims.status</code></td>
            <td align="center">❌</td>
        </tr>
    </tbody>
</table>

### 命令别名
以下命令有别名，可以方便使用：

| 命令                 | 别名                                         |
|--------------------|--------------------------------------------|
| `/claimslist`      | `/claims`                                  |
| `/trustlist`       | `/claiminfo`                               |
| `/adminclaimslist` | `/adminclaims`                             |
| `/unclaim`         | `/abandonclaim`                            |
| `/unclaimall`      | `/abandonallclaims`                        |
| `/childclaim`      | `/subdivideclaims`                         |
| `/restrictclaim`   | `/restrictchildclaim`, `/restrictsubclaim` |
| `/claimblocks`     | `/adjustclaimblocks`                       |
| `/permissiontrust` | `/managetrust` &dagger;                    |
| `/transferpet`     | `/givepet`                                 |

&dagger; 如果您愿意，可以完全自定义或更改[信任级别](trust#trust-levels)，包括命令别名。
