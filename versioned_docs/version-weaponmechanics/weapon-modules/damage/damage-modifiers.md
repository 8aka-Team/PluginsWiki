---
description: 根据条件微调伤害
---

# 伤害修正器

伤害修正器根据诸如盔甲、附魔、药水、移动、生命值和实体类型等因素修改造成的伤害量。

每个武器默认使用 config.yml 中的 `Damage_Modifiers` 部分。然而，你可能希望你的武器覆盖这些修正器。查看 [.](./ "提及") 模块中的 [#damage\_modifiers](./#damage_modifiers "提及")。

```yaml
  Damage_Modifiers:
    Min: 20%   
    Max: 300% 
    Per_Armor_Point: -3%
    Armor:
      - IRON_HELMET -5%
    Enchantments:
      - projectile_protection -8%
      - protection -4%

    # 子弹击中身体的部位修正器
    Head: +50%
    Body: +0%
    Arms: -20%
    Legs: -20%
    Feet: -50%
    Back: +20%

    # 移动目标未做好冲击准备
    Sneaking: -5%
    Walking: +0%
    Swimming: +5%
    Sprinting: +5%
    In_Midair: +5%

    # 玩家持盾并面向伤害方向
    Shielding: -100%

    Entities:
      - ZOMBIE +50%
      - PLAYER -50%
    Potions:
      - weakness +10%
```

#### Min

最小伤害百分比。`0%` 意味着子弹有可能造成 0 伤害。你可能希望将其设置得稍高一点，比如 `20%`。

#### Max

最大伤害百分比。你应该将其设置得稍高于 `100%`。

#### Per\_Armor\_Point

获取受损实体的盔甲值（包括他们穿着的盔甲、自定义盔甲属性和每个实体的盔甲属性）。请记住，完整的钻石盔甲是 20 点盔甲值，所以不要将这个数字设置得太高（`-5%` 可能是你想要的最高值）。

#### Armor

盔甲部件及其硬编码抗性列表。

:::warning
这个功能很难正确使用，所以你可能应该使用 [#per\_armor\_point](damage-modifiers.md#per_armor_point "提及") 代替。
:::

#### Enchantments

附魔及其修正器列表。修正器是附魔等级的乘积。使用 [附魔](https://app.gitbook.com/s/IIUkVnlH40vVBzLhWWQ8/references#enchantment "提及") 列表。

以下示例对于每个投射物保护等级造成 8% 的伤害减少，对于每个保护等级造成 5% 的伤害减少。

```yaml
    Enchantments:
      - projectile_protection -8%
      - protection -4%
```

:::warning
在 `1.12.2` 中，附魔使用 [旧格式](https://helpch.at/docs/1.12.2/org/bukkit/enchantments/Enchantment.html)。
:::

#### Head

头部伤害修正器（头部击中造成高伤害？）

#### Body

身体伤害修正器（身体击中造成中等伤害？）

#### Arms

手臂伤害修正器（手臂击中造成较少伤害？）

#### Legs

腿部伤害修正器（腿部击中造成较少伤害？）

#### Feet

脚部伤害修正器（脚部击中造成轻微伤害？）

#### Sneaking

如果受害者在潜行，修改伤害（就像他们做好了冲击准备）。

#### Walking

如果受害者在行走，修改伤害。

#### Swimming

如果受害者在水中游泳，修改伤害。

#### Sprinting

如果受害者在冲刺，修改伤害。

#### In\_Midair

如果受害者在受伤时处于空中，修改伤害。

#### Shielding

当受害者用盾牌阻挡并面向伤害时，减少所受伤害。

#### Entities

实体及其修正器列表 [entity](https://app.gitbook.com/s/IIUkVnlH40vVBzLhWWQ8/references#entity "提及")。

以下示例对僵尸造成双倍伤害：

```yaml
    Entities:
      - zombie 100%
```

#### Potions

药水效果及其修正器列表 [potion-effect](https://app.gitbook.com/s/IIUkVnlH40vVBzLhWWQ8/references#potion-effect "提及")。

以下示例对具有虚弱效果的实体造成 10% 的额外伤害。

```yaml
    Potions:
      - weakness +10%
```