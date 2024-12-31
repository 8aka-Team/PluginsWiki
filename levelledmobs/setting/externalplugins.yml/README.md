# 🌟 externalplugins.yml

Below includes the default contents of the **External Plugins** support file:

```yaml
#   ---------------  -  ------------------------------
#        Section 01  |  External Plugin Support
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

This file allows you to do create an external plugin compatibility check which can then be used in the **Rules** file to apply rules to mobs from specific plugins. Most 3rd party plugins which create custom mobs will typically apply information about their plugin either as information stored in the PDC (Persistant Data Container) of the entity, or within the NBT Metadata of the mob. You will likely need to ask the developer of the 3rd party plugin how you could identify their mobs via one of these two methods, then create one yourself.

**We will not provide support in investigating the data of mobs to identify these keys or values. This is a question for the developer of the third party plugin, not LevelledMobs.**

There are a handful of plugins which are 'Internal Support', meaning that they require a little extra code to identify their mobs. These plugins include: MythicMobs, EliteMobs, Citizens, and SimplePets. You do not need to create an external support table for these plugins. More details are located [here](../../levelledmobs-v4.0/installation.md#optional-did-you-install-any-integrated-plugins).

***

To populate the details of a plugin, we will use the first example:

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

On `Line One`, the plugin tree is started. This is to simply separate the information from other external plugins in the same file. It is recommended, but not required, that this match the `friendly-name`.&#x20;

On `Line Two`, the `friendly-name`, is how LevelledMobs will identify mobs associated with this plugin, via the **Condition** check for `external-plugins`.

On `Line Three`, the `plugin-name`, is the specific name of the plugin as identified by the Minecraft server itself. The easiest way to receive this is to perform `/plugins` on your server and to copy exactly, including any case change or unique characters, the name of the plugin you are attempting to reference. An alternative way would be to locate the `plugins.yml` file associated with the plugin and copy the identifier of the plugin there.

On `Line Four`, the `key-name`, refers to the name of the key being searched against, whether it exists at all or whether it has a specific value.

On `Line Five`, the `key-type`, refers to one of two possible types of searches. The first being `metadata`, the second being `PDC`, as described in the opening paragraph.

One `Line Six`, the `key-valuetype`, refers to the PDC key readable type. The default, when not specified, is `STRING`; and typically this does not need to be specified. In some niche situations, you may need to specify `DOUBLE`, `FLOAT`, `INTEGER`, or a [select handful of options listed here](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/persistence/PersistentDataType.html).

On `Line Seven`, the `requirement` config option, filters the search by either limiting the check to whether the `key-name` `exists` or `not_exists`, or by checking whether the `key-name` `contains` or `not_contains` the `requirement-value`.&#x20;

On `Line Eight`, the `requirement-value` config option, is only applicable to a `requirement` check of `contains` or `not_contains`. When those are set, this checks the contents of the `key-name` key to determine if it matches in full or partial the contents of this config option.

On `Line Nine`, the `placeholder-name` config option, allows you to create an internal-use placeholder, populated by the value of the `key-name`, to be used in various other config options such as the nametag.



## Internally Supported Plugins

There are some plugins which&#x20;
