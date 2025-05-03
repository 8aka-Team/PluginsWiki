# NBT转MongoDB

### 此功能为MyPet-Premium专属！

如需使用MongoDB数据库存储宠物数据，请下载MyPet高级版[点击此处](https://www.spigotmc.org/resources/mypet-premium.17566/)。

----

## 配置指南

首先感谢您购买MyPet-Premium！

1. 将插件文件放入plugins文件夹并重启服务器，以便生成新的配置选项
2. 下载此jar文件([mongo-java-driver-3.2.1.jar](https://search.maven.org/remotecontent?filepath=org/mongodb/mongo-java-driver/3.2.1/mongo-java-driver-3.2.1.jar))并放入MyPet文件夹
3. 将配置文件中`Repository`下的`Type`选项设为`MongoDB`
4. 如需导入旧的`My.Pet`文件，请将`Repository`下的`ConvertFrom`选项设为`NBT`
5. 替换`MongoDB`下的凭证信息为您自己的配置
6. 再次重启服务器。系统将自动创建数据表并将旧版`My.Pets`文件转换为数据库条目
7. 您现在可以正常运服，所有服务器都能共享同一个宠物数据库！