# 文件转存至MySQL

## 设置步骤

1. 将插件文件放入你的插件文件夹并重启服务器，使插件能生成新的配置设置。
2. 在`Repository`下将`Type`设置为`MySQL`。
3. 如需导入旧的`pets.db`文件，在`Repository`下将`ConvertFrom`设置为`SQLite`（或之前的`Type`值）。
4. 在MySQL服务器上新建数据库（排序规则：`utf8_general_ci`，默认名：`mypet`）。
5. 替换`MySQL`下的凭证为你自己的信息。
6. 再次重启服务器。此时应会创建数据表并将本地文件导入数据库。
7. **可选：** _如需合并多个_ `pets.db` _文件到单一数据库，可使用本页底部的脚本。_
8. 现在可以正常运服，所有服务器都能访问同一数据库中的宠物数据！

### MySQL合并脚本

如需合并两个MyPet数据库，它们需位于同一服务器且具有不同名称。下载折叠区内的文件，填写正确的凭证和数据库名，PHP脚本将自动合并。只要玩家名或Mojang UUID相同，不同的（MyPet）所有者UUID不会造成问题。

合并前请务必备份数据库！

```php
<?php

$database_1 = "mypet";
$database_2 = "mypet_2";
$user = "root";
$password = "";
$server = "localhost";
$port = 3306;

//----------------------------------------------------------------------------------------------------------------------
// 以下内容请勿修改
//----------------------------------------------------------------------------------------------------------------------


$mysqli = new mysqli($server, $user, $password, "", $port);

/* 检查连接 */
if ($mysqli->connect_errno) {
    printf("连接失败: %s\n", $mysqli->connect_error);
    exit();
}

$version_1 = 0;
$version_2 = 0;

if ($result_info = $mysqli->query("SELECT version FROM $database_1.info")) {
    while ($row = $result_info->fetch_assoc()) {
        $version_1 = $row["version"];
    }
} else {
    echo "未找到$database_1.info表中的版本号！";
    exit();
}
if ($result_info = $mysqli->query("SELECT version FROM $database_2.info")) {
    while ($row = $result_info->fetch_assoc()) {
        $version_2 = $row["version"];
    }
} else {
    echo "未找到$database_2.info表中的版本号！";
    exit();
}

if($version_1 != $version_2) {
    echo "数据库版本不一致 -> $version_1 != $version_2";
    exit();
}


$uuid_map = [];

$updated_mypets = 0;

if ($result_players_1 = $mysqli->query("SELECT * FROM $database_1.players")) {
    //printf("查询返回%d行。`<br>`", $result_players_1->num_rows);


    while ($row_players_1 = $result_players_1->fetch_assoc()) {

        // 查找重复项
        //printf("查找重复项 --------------------------------------------------------------`<br>`");
        $query = "SELECT * FROM $database_2.players WHERE ";
        $online_uuid = $row_players_1["mojang_uuid"];
        if($online_uuid != null) {
            $query .= "mojang_uuid LIKE \"" . $online_uuid . "\"";
        }
        $name = $row_players_1["name"];
        if($name != null) {
            if($online_uuid != null) {
                $query .= " OR ";
            }
            $query .= "name LIKE \"" . $name . "\"";
        }
        $query .= ";";

        //printf("查询语句: " . $query . "`<br>`");

        if ($result_players_2 = $mysqli->query($query)) {

            if($result_players_2->num_rows > 0) {
                //printf("查询返回%d行。`<br>`", $result_players_2->num_rows);
            }


            while ($row_players_2 = $result_players_2->fetch_assoc()) {
                $uuid_map[$row_players_1["internal_uuid"]] = $row_players_2["internal_uuid"];

                $qq = "UPDATE $database_2.pets SET owner_uuid=\"" . $row_players_1["internal_uuid"] . "\" WHERE owner_uuid=\"" . $row_players_2["internal_uuid"] . "\"";
                //printf("查询语句: %s`<br>`", $qq);
                $mysqli->query($qq);

                if($mysqli->affected_rows > 0) {
                    //printf("已更新%d个宠物。`<br>`", $mysqli->affected_rows);
                    $updated_mypets += $mysqli->affected_rows;
                }
            }
            $result_players_2->close();
        }

        // 删除重复项
        //printf("删除重复项 --------------------------------------------------------------`<br>`");

        $query = "DELETE FROM $database_2.players WHERE ";
        $online_uuid = $row_players_1["mojang_uuid"];
        if($online_uuid != null) {
            $query .= "mojang_uuid LIKE \"" . $online_uuid . "\"";
        }
        $name = $row_players_1["name"];
        if($name != null) {
            if($online_uuid != null) {
                $query .= " OR ";
            }
            $query .= "name LIKE \"" . $name . "\"";
        }
        $query .= ";";

        //printf("查询语句: " . $query . "`<br>`");
        $mysqli->query($query);
        if($mysqli->affected_rows > 0) {
            //printf("已删除%d个重复玩家。`<br>`", $mysqli->affected_rows);
        }

        // 复制非重复项

    }
    $result_players_1->close();
}


foreach ($uuid_map as $key => $value) {
    echo "$value -> $key`<br>`";
}

printf("已删除%d个重复玩家。`<br>`", count($uuid_map));
printf("已更新%d个宠物。`<br>`", $updated_mypets);

$query = "INSERT INTO $database_1.players SELECT * from $database_2.players";

$mysqli->query($query);

if($mysqli->affected_rows > 0) {
    printf("已插入%d个玩家。`<br>`", $mysqli->affected_rows);
}

$query = "INSERT INTO $database_1.pets SELECT * from $database_2.pets";
$mysqli->query($query);

if($mysqli->affected_rows > 0) {
    printf("已插入%d个宠物。`<br>`", $mysqli->affected_rows);
}
```