# 👾 Sample Custom Drops

Note: It has been discovered that with Minecraft 1.20.6+, the drop tables which utilize the NBT-Data feature no longer function as intended as NBT data is handled differently. I may eventually update these to function under the new system but no promises. \
The other tables, such as xEffects, should be unaffected.&#x20;

***

### The xEffects Library

This is a collection of drop tables which, utilizing Minecraft's native `/particle`, `/playsound`, and `/summon area_effect_cloud` commands, creates different kinds of effects around the mob at the moment of their deaths. Below is a demonstration video of all three kinds of xEffects in action.

{% embed url="https://www.youtube.com/watch?v=mB9plPAO364" %}
A proof-of-concept demo video from LevelledMobs 3
{% endembed %}

* [Download the full table file here](https://github.com/UltimaOath/LevelledMobs/blob/master/src/main/resources/customdrops\_xeffects\_library.yml).

These tables utilize Minecraft's Execute command to perform the commands in the proper worlds and for the correct players. Every aspect is customizable, and it's designed to be as user friendly as possible.

### Tiered Damaged Weapons and Armor

* [Netherite Set](https://github.com/UltimaOath/LevelledMobs/blob/master/src/main/resources/customdrops\_tiered\_netherite\_tools.yml)
* [Diamond Set](https://github.com/UltimaOath/LevelledMobs/blob/master/src/main/resources/customdrops\_tiered\_diamond\_tools.yml)
* [Iron Set](https://github.com/UltimaOath/LevelledMobs/blob/master/src/main/resources/customdrops\_tiered\_iron\_tools.yml)
* [Wood / Leather Set](https://github.com/UltimaOath/LevelledMobs/blob/master/src/main/resources/customdrops\_tiered\_wooden\_tools.yml)

Each of these tables include a table for each type of item: sword, axe, helmet, chestplate, leggings, boots, and a set of ranged items.

Each table works by having all the items of the same type in one table, and each item has various degrees of damage applied to it. Using the Group Limits feature, these items are limited to only one of them being selected at any given time, with the more damaged version being more likely to occur.&#x20;

This is useful for kitting out mobs, so that they have a range of random items they can pick from and when they die if they drop the item they will be in various states of durability.&#x20;



### Miscellaneous Tables and Tricks

* [Download the table file here](https://github.com/UltimaOath/LevelledMobs/blob/master/src/main/resources/customdrops\_misc.yml).

This collection of tables do not fit into any particular group at the time of their writing. If UltimaOath gets a random idea, he'll probably add it here once it's been tested out.

Some of the tables included within:

* Simplified Weapon and Armor Tiers (S, A, B, and C)
* The Minecraft Disc Collection
* The Shatter-ReSpawn Effect
* Give Money to Players
