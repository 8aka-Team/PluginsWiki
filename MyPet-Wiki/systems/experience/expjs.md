# 经验值脚本

通过 **Experience-Script** `exp.js` 可以自定义宠物升级所需的经验值。从文件后缀可以看出，该脚本使用 **JavaScript** 语言编写。

## 安装方法

1. 下载 [Rhino](https://github.com/mozilla/rhino/releases)，将 jar 文件重命名为 `rhino.jar` 并放入 MyPet 文件夹。
2. 在 **`config.yml`** 中将 `LevelSystem.CalculationMode` 设置为 **`JavaScript`**。
3. 按需编辑 `exp.js` 文件。

## 脚本编写

要创建一个能被 _MyPet_ 使用的完整经验值脚本，你需要实现以下方法：

{% code title="exp.js" %}
```javascript
function getExpByLevel(level, petType, worldGroup) {
  var exp = 0;
  return exp;
}
```
{% endcode %}

### **区分宠物类型和世界组**

示例：

{% tabs %}
{% tab title="宠物类型" %}
{% code title="exp.js" %}
```javascript
function getExpByLevel(level, petType, worldGroup) {
  var exp = 10;
  if(petType == "Cow") {
    exp = 15;
  }
  return exp;
}
```
{% endcode %}
{% endtab %}

{% tab title="世界组" %}
{% code title="exp.js" %}
```javascript
function getExpByLevel(level, petType, worldGroup) {
  var exp = 10;
  if(worldGroup == "LuckyWorlds") {
    exp = 20;
  }
  return exp;
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

### 调试

为方便调试脚本，插件提供了一个可用的 JavaScript 打印方法。

```javascript
print("消息");
```

## 示例

{% code title="exp.js" %}
```javascript
//  2-17级每级需要17点经验值
//  18-31级每级比前一级多需要3点经验值
//  32-∞级每级比前一级多需要7点经验值

function getExpByLevel(level, petType, worldGroup) {
    var exp = 0, i;
    if (level > 31) {
        exp = 887;
        level -= 31;
        for (i = 1; i < level; i++) {
            exp += 62 + (i * 7);
        }
        return exp;
    }
    if (level > 17) {
        exp = 272;
        level -= 17;
        for (i = 1; i <= level; i++) {
            exp += 17 + (i * 3);
        }
        return exp;
    }
    return (level - 1) * 17;
}
```
{% endcode %}