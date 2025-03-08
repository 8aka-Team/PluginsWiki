---
sidebar_position: 5
---

# 条件

<details>

<summary>点击查看所有<strong>条件</strong>的完整列表</summary>


```yaml
conditions: 
  spawn-reasons: ['']
  worldguard-regions: ['']
  worldguard-region-owners: ['']
  apply-above-y: 0
  apply-below-y: 0
  external-plugins: ['']
  biomes: ['']
  custom-names: ['']
  chance: 1.0
  entities: ['']
  maxLevel: 50
  minLevel: 1
  max-distance-from-spawn: 0
  min-distance-from-spawn: 0
  mob-customname-status: EITHER
  mob-tamed-status: EITHER
  mythicmobs-internal-names: ['']
  permission: ['']
  spawner-names: ['']
  scoreboard-tags: ['']
  stop-processing: true
  within-coordinates: 
    start-x: 0
    end-x: 0
    start-y: 0
    end-y: 0
    start-z: 0
    end-z: 0 
  worlds: ['']
  world-time-tick: ['']
  cooldown-duration: 10s
  cooldown-limit: 0
```


</details>

***

<table data-full-width="true"><thead><tr><th width="319">模块化选项条件</th><th>描述</th></tr></thead><tbody><tr><td><code>spawn-reasons:</code></td><td>检查可能的生成原因标志。您可以参考<a href="https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/entity/CreatureSpawnEvent.SpawnReason.html">SpigotMC的javadocs</a>关于<code>CreatureSpawnEvent.SpawnReason</code>的不同选项。您也可以使用<code>LM_SUMMON</code>或<code>LM_SPAWNER</code>，指的是通过<code>/lm summon</code>或<code>/lm spawner</code>命令生成的生物。</td></tr><tr><td><code>worldguard-regions:</code><code>worldguard-region-owners:</code></td><td>检查生物生成所在的WorldGuard区域或区域所有者。</td></tr><tr><td><code>apply-above-y:</code><code>apply-below-y:</code></td><td>检查生物是否在特定Y坐标之上或之下。</td></tr><tr><td><code>external-plugins:</code></td><td>检查生成的生物是否来自内部或外部支持的插件。</td></tr><tr><td><code>biomes:</code></td><td>检查生物生成所在的生物群系。</td></tr><tr><td><code>custom-names:</code></td><td>检查生物的自定义名称，假设它有的话。</td></tr><tr><td><code>chance:</code></td><td>可以应用于<strong>自定义规则</strong>，规则将只有指定的机会应用，否则将被跳过。默认情况下，未指定机会的规则如果已启用，将始终处理。</td></tr><tr><td><code>entities:</code></td><td>检查正在处理的生物。</td></tr><tr><td><code>minLevel:</code><code>maxLevel:</code></td><td>检查生物应用后的等级。此检查仅适用于少数<strong>设置</strong>，包括自定义掉落。</td></tr><tr><td><code>min-distance-from-spawn:</code><code>max-distance-from-spawn:</code></td><td>检查生物生成位置与Minecraft服务器生成坐标的最小和最大距离。</td></tr><tr><td><code>mob-customname-status:</code><code>mob-tamed-status:</code></td><td>检查生物的自定义名称或驯服状态。<code>NOT_SPECIFIED</code> / <code>EITHER</code> (默认)检查被禁用 / 检查值无关紧要<code>NAMETAGGED</code> / <code>TAMED</code>检查的生物必须被命名或驯服<code>NOT_NAMETAGGED</code> / <code>NOT_TAMED</code>检查的生物不能被命名或驯服</td></tr><tr><td><code>mythicmobs-internal-names:</code></td><td>检查MythicMobs自定义生物配置文件中使用的内部名称。</td></tr><tr><td><code>permission:</code></td><td>检查为实体最近的玩家或杀死实体的玩家建立的允许权限节点，取决于其实现。</td></tr><tr><td><code>spawner-names:</code></td><td>检查创建实体的<code>LM Spawner</code>的名称。</td></tr><tr><td><code>scoreboard-tags:</code></td><td>检查应用于生物的任何可能的Minecraft计分板标签，以及这些指定标签是否存在。</td></tr><tr><td><code>stop-processing:</code></td><td>可以应用于<strong>自定义规则</strong>，规则在激活<code>stop-processing:</code>设置时将导致未来的规则处理停止。默认情况下，未指定停止处理的规则将从上到下处理；从默认规则开始，然后是第一个自定义规则，以及所有后续规则。</td></tr><tr><td><code>within-coordinates:</code></td><td>此系统允许您设置<code>start-</code>和<code>end-</code>坐标以定义世界内的区域来应用规则。您可以仅指定一个轴来标记一个点或线；指定两个轴以沿这两个轴制作一个正方形；或指定三个轴以制作一个立方体区域。您还可以将<code>'-'</code>或<code>'+'</code>作为任何坐标的<code>end-</code>，它将从<code>start-</code>值向指定方向无限延伸。最后，如果您指定了<code>start-</code>但未指定<code>end-</code>，则<code>end-</code>将与<code>start-</code>值相同；反之亦然。</td></tr><tr><td><code>worlds:</code></td><td>检查实体生成所在的世界。</td></tr><tr><td><code>world-time-tick:</code></td><td>检查世界中的当前时间，以tick表示。Minecraft中的24小时由世界tick值<code>0-24000</code>表示。您可以通过<a href="https://minecraft.fandom.com/wiki/Daylight_cycle#24-hour_Minecraft_day">此链接</a>更好地了解时间。只有主世界有“时间”。</td></tr><tr><td><code>cooldown-duration:</code><code>cooldown-limit:</code></td><td>可以应用于<strong>自定义规则</strong>，规则在成功应用时将从零开始计数，直到达到<code>cooldown-limit:</code>，然后它将锁定规则，在<code>cooldown-duration:</code>计时器期间无法应用。计时器到期后，规则解锁，限制计数重置。</td></tr></tbody></table>
