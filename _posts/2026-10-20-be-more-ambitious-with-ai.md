---
layout: post
title: "Being More Ambitious with AI"
title_zh: "更大胆地用 AI"
description: "Felix Rieseberg on asking AI for better outcomes, using professional methods, and borrowing from other fields, with an outside judge for the result."
description_zh: "Felix Rieseberg 讲怎样把 AI 用得更大胆：把任务追到最终目标，用专业方法做深，再借其他领域的本事。结果交给外部标准检验。"
date: 2026-10-20
categories: digest
tags: [ai, engineering, systems, learning]
source: "https://felixrieseberg.com/how-to-be-more-ambitious-a-tutorial-for-humans-with-models/"
bilingual: true
sources:
  - title: "Felix Rieseberg — How to be more ambitious: A tutorial for humans with models"
    url: "https://felixrieseberg.com/how-to-be-more-ambitious-a-tutorial-for-humans-with-models/"
---

<div class="lang-en" markdown="1">

Felix Rieseberg's October 13 essay separates ambition with AI into speed, altitude, depth, and range. Speed is familiar: get the same work done sooner. He spends the article on the other three, using a quarterly business review as a running example.

Model capabilities keep changing, while our idea of what to ask for can stay where it was months ago. But those capabilities are uneven, so a bigger request still needs a way to establish whether the result works.

## Altitude: follow the task to its purpose

Ask for a quarterly review deck, and the model can fill the slides. Felix proposes working upward from there:

- Explain what changed this quarter, why it changed, and what to do about it.
- Identify the three most urgent decisions and develop arguments for and against possible directions.
- Design a better way to catch problems early and allocate resources. Test it against the company's history, then run it alongside the quarterly review for a quarter.

Moving upward also changes the setup. Felix describes going from asking Claude to fix individual crashes to asking it to keep an app crash-free. That required access to crash reports, a mapping from app versions to commits, and computers on which it could reproduce problems and verify fixes.

## Depth: work with professional methods

A model told to act like an expert may adopt the expert's language while keeping its usual methods. Felix wants the methods to change too: use databases and statistical models, start with raw data, and challenge the assumed explanation.

For a churn problem, that means testing whether onboarding really explains customer losses. He then proposes building a simulation that reproduces the previous year and looking for an earlier warning signal that predicts outcomes on unseen data. A plausible account of the past and a successful prediction are different standards.

He also recommends stretch goals. His hypothetical performance request goes from improving a ten-second load to five seconds, to aiming for 200 milliseconds. I would keep the test conditions next to that target so there is something concrete to measure.

And use an outside judge. Felix explicitly warns against making the model its own evaluator; ideally, a tool can give it feedback as it works.

## Range: borrow another field's methods

For the quarterly review deck, describe the activity: helping busy people understand cause and effect and decide under uncertainty.

So the next question is which fields know how to do those things well. Felix imagines an analyst, a journalist, and an editor, with motion and audio designers if presentation matters. A short seller and a forensic accountant could bring adversarial methods.

The point of assembling this crew is to find techniques worth using. Asking a model to sound like a short seller changes the transcript; asking it to investigate a position the way one would changes the work.

## What makes the request workable

Felix closes with self-efficacy: beliefs about what we can accomplish affect which attempts we make. His argument is that those beliefs need updating as the tools change.

He also marks limits. Higher abstraction is most useful when there is an ultimate outcome to pursue, and less useful for some creative work. In his account, telling Claude to "go make money" is still insufficient for most businesses in 2026. The examples depend on access to relevant data, an environment in which to act, and ways to check the result.

My reading is to ask more of the outcome and the method within a clear boundary: specify the data and tools the agent is authorized to use, and how its output will be checked.

## A prompt to reuse

Here is my condensed adaptation of the article's prompting advice:

> What outcome is this task meant to produce?
>
> What would a strong practitioner start from, and which tools and methods would they use?
>
> Which other field could improve the approach?
>
> What independent test would show that the result works?

</div>

<div class="lang-zh lang-hidden" markdown="1">

Felix Rieseberg 在 10 月 13 日的文章里，把用 AI 时的进取心拆成四个方向：速度、高度、深度和广度。速度已经很熟悉了，就是同样的活儿做得更快。他主要讲后面三个方向，用季度业务回顾串起整篇文章。

模型的能力一直在变，我们对“可以让它做什么”的想象，却可能还停在几个月前。不过能力的增长并不均匀，目标定大了，照样得有办法验收。

## 高度：顺着任务往上找目的

让模型做季度汇报，它可以帮忙填幻灯片。Felix 建议往上多走几步：

- 解释这个季度变了什么，为什么变，接下来该怎么办。
- 找出最紧迫的三个决策，分析几种方向各自的利弊。
- 重新设计一套更早发现问题、调整资源的办法。先用历史数据检验，再和现有季度回顾并行跑一个季度。

要求往上走，工作环境也得跟着变。Felix 以前让 Claude 一个个修崩溃，后来干脆交给它一个目标：让应用保持零崩溃。为此，他得先让它拿得到崩溃报告，弄清每个应用版本对应哪次代码提交，再给它能复现问题、验证修复的电脑。

## 深度：专业方法也得跟上

让模型“扮演专家”，它可能先换一套术语，做事方法却没变。Felix 要求换掉的是方法：用数据库和统计模型，回到原始数据，检查原先认定的解释。

比如用户流失，先别认定是新手引导出了问题，要看原始数据支不支持这个判断。他接着提了更深的要求：建一个能复现过去一年情况的模拟，找出一个还没人注意到、出现得更早的流失信号，再验证它在没见过的数据上也能预测。能把过去讲通，和能预测对，是两种不同的标准。

他也建议把目标定得激进一点，让模型继续找办法。比如页面原本要十秒才能加载，常规目标是五秒，他举的假设例子则直接瞄准两百毫秒。我会把测试条件一起写清楚，免得最后只剩一个漂亮数字。

还有一条值得留着：找外部裁判。Felix 明确提醒，不要让模型自己给自己判分，最好有个工具能在工作过程中持续给它反馈。

## 广度：借别的领域的本事

季度汇报看起来是一套幻灯片。换成动词来描述，它是在帮忙碌的人理解因果，并在信息不完整时做决定。

这样就能继续问：哪些领域擅长做这些事？Felix 设想的团队里有分析师、记者和编辑；需要呈现时，再找动态设计和音频设计的方法。做空研究与法务会计，也能提供挑错、核查的视角。

组这个团队，是为了找到能用的方法。让模型模仿做空者的口吻，聊天记录会变个样；让它按做空研究的办法调查一个判断，才会改变实际工作。

## 怎么把这些要求落到实处

文章最后谈到自我效能感：我们相信自己能做到什么，会影响愿意尝试什么。Felix 的判断是，工具变了，这套预期也得更新。

他也讲了边界。把任务往上抽象，比较适合确实有最终目标要追的工作，对一些创作任务没那么管用。按他写作时的观察，只给一句“去赚钱”，对大多数生意仍然不够。前面的例子，都需要相关数据、能动手的环境，以及检验结果的办法。

我的理解是，目标可以提得更高，方法可以追问得更细；同时讲清楚 agent 能用哪些数据和工具，结果又该怎么检查。

## 一个可以复用的问法

下面是按这篇文章压缩、改写的提问框架：

> 这件事最终是为了得到什么结果？
>
> 一个专业人士会从什么材料入手，用哪些工具和方法？
>
> 有没有别的领域，能帮我们换一种做法？
>
> 用什么独立检验，才能知道结果真的管用？

</div>
