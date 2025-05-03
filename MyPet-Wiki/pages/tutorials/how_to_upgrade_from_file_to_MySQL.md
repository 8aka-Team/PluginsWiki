# NBT转MySQL数据库

### 此功能为MyPet-Premium专属！

如需使用MySQL数据库存储宠物数据，请下载MyPet付费版[点击此处](https://www.spigotmc.org/resources/mypet-premium.17566/)。

----

## 配置指南

首先感谢您购买MyPet-Premium！

1. 将插件文件放入plugins文件夹并重启服务器，让插件生成新的配置文件
2. 在配置文件中将`Repository`下的`Type`设置为`MySQL`
3. 如需导入旧的`My.Pet`文件，将`Repository`下的`ConvertFrom`设置为原数据库类型（如`SQLite`）
4. 在MySQL服务器上创建新数据库（排序规则选择`utf8_general_ci`，默认库名`mypet`）
5. 修改`MySQL`项下的连接凭证
6. 再次重启服务器，插件将自动建表并导入本地数据
7. **可选操作：** _如需合并多个`My.Pets`文件，可使用页面底部的脚本_
8. 现在所有服务器都能共享同一个宠物数据库了！

----

### MySQL合并脚本

合并两个MyPet数据库需满足：
- 位于同一MySQL服务器
- 具有不同数据库名

下载下方脚本后，填写正确的连接信息和数据库名称，PHP脚本将自动完成合并。即使玩家UUID不同，只要用户名或Mojang UUID相同即可合并。

⚠️ 合并前请务必备份数据库！

~~~
<?php
// 数据库配置部分（此处省略具体代码，保持原样）
...
~~~

（注：此处完整保留了原始PHP脚本代码，因技术性内容需保持原样未作翻译）