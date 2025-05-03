---
description: 本页面详细说明了升级至MyPet 3.0版本所需执行的步骤
---

# 升级至3.0版本指南

### 第一步 - 替换新版JAR文件

若您同时运行[MyPet-NPC](../hooks/npc.md)插件，现在可以将其删除，因为该功能已整合至MyPet本体中。

### 第二步 - 转换技能树文件

{% hint style="info" %}
**若您从未修改过技能树文件，可跳过此步骤！**
{% endhint %}

若您曾自定义或编辑过默认技能树，请按以下步骤将其转换为新格式：

1. 打开新版SkilltreeCreator工具
2. 选择新技能树的保存目录
3. 浏览器将自动打开并显示新版[技能树编辑器](../systems/skilltrees/skilltreecreator.md)
4. 点击左上角菜单按钮
5. 选择`导入旧版技能树`选项
6. 按照向导完成三个步骤
7. 点击保存按钮
8. 将生成的`.st.json`文件上传至服务器**skilltrees**文件夹

### 第三步 - 调整配置文件

MyPet不再支持数字形式的物品ID。所有需要[配置物品](configurations/configitems.md)的设定，即使您未运行1.13版本服务器，也必须使用1.13格式的物品ID。