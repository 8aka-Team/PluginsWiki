# 方块伤害

方块伤害用于 [.](./ "mention") 和 WeaponMechanicsCosmetics 中。

https://youtu.be/C5aRJAhPECI

```yaml
    Block_Damage:
      Drop_Broken_Block_Chance: <Chance>
      Damage_Per_Hit: <Integer>
      Default_Block_Durability: <Integer>
      Default_Mode: <CANCEL/BREAK/CRACK>
      Default_Mask: <Material>
      Blocks:
        - <Material*> <CANCEL/BREAK/CRACK*> <ShotsToBreakBlock> <Mask>
```

#### Drop_Broken_Block_Chance

方块破坏后掉落为物品供玩家拾取的几率。默认为 `0%`。&#x20;

:::danger
与 [#regeneration](./#regeneration "mention") 一起使用 `Drop_Broken_Block_Chance` 会导致重复。
:::

#### Damage_Per_Hit

对方块造成的伤害点数。默认为 `1`。

#### Default_Block_Durability

定义破坏方块所需的击中次数。这可以在 [#blocks](block-damage.md#blocks "mention") 中针对每个方块进行覆盖。

#### Default_Mode

定义方块显示伤害的方式：

* `CANCEL` -> 不对方块应用任何伤害。
* `CRACK` -> 显示方块的裂纹动画，但不破坏方块。
* `BREAK` -> 显示方块的裂纹动画，并在完全损坏时破坏方块。&#x20;

这可以在 [#blocks](block-damage.md#blocks "mention") 中针对每个方块进行覆盖。

#### Default_Mask

定义用于替换方块的 [Material](https://app.gitbook.com/s/IIUkVnlH40vVBzLhWWQ8/references#material "mention")。默认为 `AIR`。

这可以在 [#blocks](block-damage.md#blocks "mention") 中针对每个方块进行覆盖。

:::info
如果你想用数据（例如楼梯）替换方块，请进入：

> **server -> plugins -> WeaponMechanics -> config.yml**

并设置：

```yaml
Explosions:
  Attempt_Copy_Data: true  # 将此设置为 true
```
:::

#### Blocks

定义方块的覆盖列表。

格式如下：

> **\<要破坏的方块> \<CANCEL/CRACK/BREAK> \<破坏所需击中次数> \<遮罩>**

示例：

* `BEDROCK CANCEL` -> 阻止破坏基岩。
* `DIRT BREAK` -> 一击摧毁泥土。
* `OBSIDIAN CRACK 5` -> 显示黑曜石的裂纹动画，但不破坏。&#x20;
* `GRAY_STAINED_GLASS BREAK 1 DIRT` -> 一击摧毁灰色玻璃并用泥土替换。
* `$glass BREAK 2` 两击摧毁所有玻璃方块。&#x20;

## 示例

这是一个标准示例，适用于普通服务器。此示例将破坏所有方块（不包括不可破坏的方块）：

```yaml
    Block_Damage:
      Spawn_Falling_Block_Chance: 0.55  # 用于Explosions
      Default_Mode: BREAK
      Blocks:
        - "BEDROCK cancel"
        - "$WATER cancel"  # stationary_water 和 moving_water 用于支持1.12版本
        - "OBSIDIAN cancel"
        - "$LAVA cancel"  # stationary_lava 和 moving_lava 用于支持1.12版本
```

