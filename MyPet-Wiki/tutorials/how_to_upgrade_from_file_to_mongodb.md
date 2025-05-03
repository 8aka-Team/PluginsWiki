# 文件转存至MongoDB

## 安装步骤

1. 将插件文件放入服务器插件文件夹并重启服务器，使插件自动生成新配置文件。
2. 下载此jar文件[mongo-java-driver-3.12.11.jar](https://search.maven.org/remotecontent?filepath=org/mongodb/mongo-java-driver/3.12.11/mongo-java-driver-3.12.11.jar)并放入MyPet文件夹。
3. 在配置文件的`Repository`部分将`Type`选项设置为`MongoDB`。
4. 如需导入旧的`My.Pet`文件，请在`Repository`部分将`ConvertFrom`选项设为`NBT`。
5. 替换`MongoDB`下的凭证信息为您自己的数据库凭据。
6. 再次重启服务器。系统将自动创建数据表并将旧版`My.Pets`文件转换为数据库条目。
7. 您现在可以正常运服，且所有服务器都能共享同一个宠物数据库！