# Known Plugin Keys

Below is a collection of known keys for use in the `externalplugins.yml` file which should allow for LevelledMobs to identify those mobs and be able to condition against them, meaning they can be levelled or unlevelled as a unique group of mobs. While we cannot guarentee that these will always work, it is rare for the keys being referenced to be changed unless the 3rd party plugin has undergone significant changes.

***



#### Deadly Disasters

[https://www.spigotmc.org/resources/deadly-disasters.90806/](https://www.spigotmc.org/resources/deadly-disasters.90806/)

```yaml
Deadly-Disasters:
  friendly-name: 'Deadly-Disasters'
  plugin-name: 'DeadlyDisasters'
  key-name: 'customentity'
  key-type: 'PDC'
  requirement: 'exists'
 #placeholder-name: '%deadly-disasters-name%'
```

***

**GadgetMenu**

[https://www.spigotmc.org/resources/gadgetsmenu-free.10885/](https://www.spigotmc.org/resources/gadgetsmenu-free.10885/)\
[https://www.spigotmc.org/resources/gadgetsmenu-premium.62831/](https://www.spigotmc.org/resources/gadgetsmenu-premium.62831/)

```yaml
gadgets-menu:
  friendly-name: 'gadgets-menu'
  plugin-name: 'GadgetsMenu'
  key-name: 'GadgetsMenu-Pet'
  key-type: 'metadata'
  requirement: 'exists'
#  placeholder-name: '%gadgets-menu-name%'
```

***

