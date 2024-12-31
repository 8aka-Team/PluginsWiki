---
sidebar_position: 2
---
# 修饰符

<details>

<summary>点击查看所有<strong>修饰符</strong>的完整列表</summary>


```yaml
modifiers:
  custom-formula: 
  player-variable-mod:  
```


</details>

***

## 自定义公式修饰符


```yaml
modifiers:
  custom:
    formula: '1 * %mob-lvl%'
  custom_uniqueName:
    formula: '1 + %mob-lvl%'
```


允许创建各种`custom_`占位符。通过执行基本数学函数并结合内部占位符来生成这些占位符。

<table data-full-width="false"><thead><tr><th width="251.00000000000006">配置</th><th>描述</th></tr></thead><tbody><tr><td><code>custom:</code></td><td>占位符由<code>custom_</code>修饰符的名称填充。例如，<code>custom_uniqueName</code>将生成占位符<code>%custom_uniqueName%</code>。</td></tr><tr><td><code>formula:</code></td><td>这是可以使用内部占位符进行基本数学计算的字段。</td></tr></tbody></table>

