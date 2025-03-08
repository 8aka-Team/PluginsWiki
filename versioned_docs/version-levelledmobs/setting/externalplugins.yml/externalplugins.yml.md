---
sidebar_position: 5
---

# 🌟 externalplugins.yml

以下是**外部插件**支持文件的默认内容：

```yaml
#   ---------------  -  ------------------------------
#        第一部分  |  外部插件支持
#   ---------------  -  ------------------------------
#
infernal-mobs:
  friendly-name: 'infernal-mobs'
  plugin-name: 'InfernalMobs'
  key-name: 'infernalMetadata'
  key-type: 'metadata'
  requirement: 'exists'
#  placeholder-name: '%infernal-mobs-name%'

shop-keepers:
  friendly-name: 'shop-keepers'
  plugin-name: 'ShopKeepers'
  key-name: 'shopkeeper'
  key-type: 'metadata'
  requirement: 'exists'
#  placeholder-name: '%shop-keeper-name%'

blood-night:
  friendly-name: 'blood-night'
  plugin-name: 'BloodNight'
  key-name: 'mobtype'
  key-type: 'PDC'
  requirement: 'exists'
#  placeholder-name: '%blood-night-name%'

eco-bosses:
  friendly-name: 'eco-bosses'
  plugin-name: 'EcoBosses'
  key-name: 'boss'
  key-type: 'PDC'
  requirement: 'exists'
#  placeholder-name: '%eco-bosses-name%'

combat-pets:
  friendly-name: 'combat-pets'
  plugin-name: 'CombatPets'
  key-name: 'attribute.health_regeneration_speed'
  key-type: 'PDC'
  key-valuetype: 'double'
  requirement: 'exists'
#  placeholder-name: '%combat-pets-name%'

Deadly-Disasters:
  friendly-name: 'Deadly-Disasters'
  plugin-name: 'DeadlyDisasters'
  key-name: 'customentity'
  key-type: 'PDC'
  requirement: 'exists'
#  placeholder-name: '%deadly-disasters-name%'

gadgets-menu:
  friendly-name: 'gadgets-menu'
  plugin-name: 'GadgetsMenu'
  key-name: 'GadgetsMenu-Pet'
  key-type: 'metadata'
  requirement: 'exists'
#  placeholder-name: '%gadgets-menu-name%'

my-pet:
  friendly-name: 'my-pet'
  plugin-name: 'MyPet'
  key-name: 'MyPet'
  key-type: 'metadata'
  requirement: 'exists'
#  placeholder-name: '%mypet-menu-name%'
```

此文件允许您创建外部插件兼容性检查，然后可以在**规则**文件中使用，以将规则应用于来自特定插件的生物。大多数创建自定义生物的第三方插件通常会将其插件的信息存储为实体的PDC（持久数据容器）中的信息，或存储在生物的NBT元数据中。您可能需要询问第三方插件的开发者如何通过这两种方法之一识别他们的生物，然后自己创建一个。

**我们不会提供支持来调查生物的数据以识别这些键或值。这是第三方插件开发者的问题，而不是LevelledMobs的问题。**

有一些插件是“内部支持”的，这意味着它们需要一些额外的代码来识别它们的生物。这些插件包括：MythicMobs、EliteMobs、Citizens和SimplePets。您不需要为这些插件创建外部支持表。更多详细信息请参见[这里](../../levelledmobs-v4.0/installation.md#optional-did-you-install-any-integrated-plugins)。

***

要填充插件的详细信息，我们将使用第一个示例：

```yaml
infernal-mobs:                               #  Line One
  friendly-name: 'infernal-mobs'             #  Line Two
  plugin-name: 'InfernalMobs'                #  Line Three
  key-name: 'infernalMetadata'               #  Line Four
  key-type: 'metadata'                       #  Line Five
  key-valuetype: 'STRING'                    #  Line Six
  requirement: 'exists'                      #  Line Seven
#  requirement-value: ''                     #  Line Eight
#  placeholder-name: '%infernal-mobs-name%'  #  Line Nine
```

在`第一行`，插件树开始。这只是为了将信息与同一文件中的其他外部插件分开。建议但不要求此名称与`友好名称`匹配。

在`第二行`，`friendly-name`是LevelledMobs通过**条件**检查`external-plugins`来识别与此插件相关的生物的方式。

在`第三行`，`plugin-name`是Minecraft服务器本身识别的插件的特定名称。获取此名称的最简单方法是在您的服务器上执行`/plugins`，并完全复制（包括任何大小写变化或特殊字符）您尝试引用的插件的名称。另一种方法是找到与插件相关的`plugins.yml`文件，并复制插件的标识符。

在`第四行`，`key-name`是指要搜索的键的名称，无论它是否存在或是否具有特定值。

在`第五行`，`key-type`是指两种可能的搜索类型之一。第一种是`metadata`，第二种是`PDC`，如开头段落所述。

在`第六行`，`key-valuetype`是指PDC键的可读类型。默认情况下，未指定时为`STRING`；通常不需要指定。在某些特定情况下，您可能需要指定`DOUBLE`、`FLOAT`、`INTEGER`或[此处列出的少数选项](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/persistence/PersistentDataType.html)。

在`第七行`，`requirement`配置选项通过限制检查`键名`是否`存在`或`不存在`，或通过检查`键名`是否`包含`或`不包含``要求值`来过滤搜索。

在`第八行`，`requirement-value`配置选项仅适用于`要求`检查为`包含`或`不包含`时。当设置这些时，此选项检查`键名`键的内容，以确定它是否完全或部分匹配此配置选项的内容。

在`第九行`，`placeholder-name`配置选项允许您创建一个内部使用的占位符，由`键名`的值填充，用于各种其他配置选项，如名称标签。