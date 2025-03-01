---
title: AI 标准
sidebar_position: 3
---

# AI 标准

为了节约人类有限的时间,PluginsWiki 允许使用 AI 进行翻译(推荐这么做)

> 一个国内镜像站: https://freegpt.tech

## 提示词

这一部分还在进行测试,这些提示词只是作为一个基本的框架,针对不同的 Wiki 需要进行微调

<details>
<summary> V1.3 版本</summary>

```text
# Minecraft技术文档翻译规范

**执行优先级：**
1. 保留原文段落/列表层级和链接
2. 术语严格匹配官方中文版
3. 仅必要句式调整（被动转主动/从句拆分）

**精简版规则：**
- 数字格式：3.5 blocks→3.5格
- 量词体系：1 stack→1组
- 句式规范：
  - [示例] "Items that explode"→"会爆炸的物品" 
  - [示例] "Was added in 1.17"→"1.17版本新增"
- 排版保留：
  - 代码缩进/表格间距不变
  - 半角标点→全角（保留英文术语内标点）

```

由 DeepSeek R1 生成后进行微调

</details>

<details>
<summary> 翻译质量检测 </summary>

```text
你是一名专业的翻译质量审核员。请根据以下规则严格评估用户提供的中文翻译质量，仅输出0-100的整数评分：

【评分规则】
1. 术语准确性 (30分)
- 检查所有Minecraft相关术语是否严格遵循中文Wiki标准（如allay→悦灵）
- 技术词汇需专业但通俗（如socket→网络连接）

2. 信达雅标准 (50分)
- 信(15分)：完整传达原文信息，无遗漏/曲解
- 达(20分)：中文表达流畅自然，无翻译腔
- 雅(15分)：语言优美符合中文审美，句式富有变化

3. 格式规范 (20分)
- 标点符号正确使用中文格式
- 数字/单位格式符合中文习惯
- 段落结构与原文一致

【扣分细则】
- 每个术语错误扣5-10分
- 每处信息失真扣5分
- 每处生硬表达扣3分
- 每处格式错误扣2分

请严格按规则评分，仅输出最终得分数字，不要任何解释。
```
</details>

<details>
<summary> AI 翻译检测</summary>

```text
你是一名专业的机器翻译审核员。请根据思考判断用户给出的文本是不是 AI 翻译的，仅输出0-100的整数评分,分数越高越像是 AI 翻译的
```

AI 检测很不靠谱,测试的时候把 NitWikit 上人写的几篇文章扔上去了,全都在 80 +
,AI 写的保持在 20- 

</details>

## 推荐模型

我们使用 Purpur 文档中[最恶心的一段](https://purpur.8aka.org/purpurpacks/packs/)(因为有大量的专有名词) 进行了测试

全都使用了上面的提示词，DeepSeek R1 是表现最好的翻译模型,做到了机翻翻出人翻味

测试模型:

* GPT 3.5
* GPT 4-all
* GPT o1 - mini
* GPT o1 - preview
* GPT o3 - mini
* DeepSeek R1
* Grok 3 - Reasoner
* Grok 3 - DeepSearch
* Claude 3.7 Sonnet Thinking
* Gemini 2.0 Flash Thinking

最后 DeepSeek R1 获得了胜利!