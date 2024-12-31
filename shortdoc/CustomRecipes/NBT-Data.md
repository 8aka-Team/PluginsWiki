# 在ItemsAdder中使用'Custom-Tags'部分处理NBT数据

本指南解释了如何在ItemsAdder配置中使用Custom-Tags部分来为自定义物品应用NBT数据。以下是使用Custom-Tags设置各种属性的示例，如刷怪笼ID、属性修饰符和皮革盔甲颜色。

## 示例：将生物设置为空刷怪笼

```yaml
Custom-Tags:
  - path:
    - SpawnerID
    value: Zombie
```
此配置将SpawnerID设置为生成僵尸。

## 示例：添加属性修饰符（攻击伤害）

```yaml
Custom-Tags:
  - path:
    - AttributeModifiers
    value:
    - Name: CustomAttackDamage
      AttributeName: generic.attackDamage
      Amount: 100.0
      Operation: 0
      Slot: mainhand
```
此配置应用了一个自定义属性修饰符，当物品被握在主手时，攻击伤害增加100.0。

## 示例：设置皮革盔甲颜色

```yaml
Custom-Tags:
  - path:
    - display
    - color
    value: 16711680
```
此配置使用RGB值16711680（十六进制：#FF0000）将皮革盔甲颜色设置为红色。

# 关键注意事项

NBT路径：path字段定义了要设置的属性的特定NBT路径。路径的每个部分应作为数组项列出。

值格式：value字段指定在指定NBT路径上分配的值。对于嵌套结构，根据需要使用数组和键值对。

