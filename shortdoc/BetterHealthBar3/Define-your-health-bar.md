---
sidebar_position: 8
---

# 定义你的血条
![스크린샷 2024-05-11 202810](https://github.com/toxicity188/BetterHealthBar3/assets/114675706/d6ba5c69-eacb-490e-bc02-bc8e4de52696)  
在 BetterHealthBar/文件夹中，你可以找到默认的血条配置。  

# 配置
### 示例
``` yaml
default_healthbar:
  default: true #是否为默认
  applicable-types: [] #应用血条的生物类型。如果为空，所有实体都将被选中。
  scale: #血条缩放比例
    x: 0.75
    y: 0.75
    z: 0.75
  triggers: #血条触发条件（空、伤害、注视、移动）
    - damage
    - look
  groups: #布局组
    - default_layout
    - mob_effect_absorption
    - mob_effect_bad_omen
    - mob_effect_blindness
    - mob_effect_conduit_power
    - mob_effect_darkness
    - mob_effect_dolphins_grace
    - mob_effect_fire_resistance
    - mob_effect_glowing
    - mob_effect_haste
    - mob_effect_health_boost
    - mob_effect_hero_of_the_village
    - mob_effect_hunger
    - mob_effect_infested
    - mob_effect_instant_damage
    - mob_effect_instant_health
    - mob_effect_invisibility
    - mob_effect_jump_boost
    - mob_effect_levitation
    - mob_effect_luck
    - mob_effect_mining_fatigue
    - mob_effect_nausea
    - mob_effect_night_vision
    - mob_effect_oozing
    - mob_effect_poison
    - mob_effect_raid_omen
    - mob_effect_regeneration
    - mob_effect_resistance
    - mob_effect_saturation
    - mob_effect_slowness
    - mob_effect_slow_falling
    - mob_effect_speed
    - mob_effect_strength
    - mob_effect_trial_omen
    - mob_effect_unluck
    - mob_effect_water_breathing
    - mob_effect_weakness
    - mob_effect_weaving
    - mob_effect_wind_charged
    - mob_effect_wither
```

### 生物类型？

在你的生物配置中，你可以定义自己的类型。
``` yaml
AngrySludge:
  types: 
  - some_type
  healthbars:
  - some_healthbar
```

你可以使用该类型来定义血条。
``` yaml
default_healthbar:
  applicable-types: 
  - some-type #匹配！
```