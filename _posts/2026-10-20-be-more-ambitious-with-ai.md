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
narration:
  en:
    src: /assets/audio/be-more-ambitious-with-ai.en.mp3
    duration: 277
  zh:
    src: /assets/audio/be-more-ambitious-with-ai.zh.mp3
    duration: 262
sources:
  - title: "Felix Rieseberg — How to be more ambitious: A tutorial for humans with models"
    url: "https://felixrieseberg.com/how-to-be-more-ambitious-a-tutorial-for-humans-with-models/"
---

<div class="lang-en" markdown="1">

Felix Rieseberg's October 13 essay splits ambition with AI into four axes: speed, altitude, depth, and range. Everyone already gets speed (doing the same work faster). He spends the piece on the other three, using a quarterly business review as a running example.

Model capabilities keep jumping while our mental template for what to ask stays stuck six months behind. At the same time, those capabilities are uneven, so asking for bigger outcomes only works if you pair the request with a real way to check the result.

## Altitude: chase the actual goal

Ask a model for a quarterly review deck and it'll happily fill slides. Rieseberg pushes three steps higher:

- Explain what shifted this quarter, why it shifted, and what we should actually do next.
- Surface the three most urgent decisions and build the case for and against each path.
- Design a better way to catch problems early and allocate resources, backtest it against company history, and run it in parallel with the quarterly review for a quarter.

Moving up in altitude changes the environment you have to give the agent. Rieseberg went from asking Claude to patch individual crashes to asking it to keep an app crash-free. That meant wiring up crash reports, mapping app versions to commits, and giving it machines where it could reproduce bugs and verify its own fixes.

## Depth: demand real methods, not expert cosplay

Tell a model to "act like an expert" and it often adopts the vocabulary while sticking to shallow habits. Rieseberg wants the methods themselves to change: start from raw data, pull in databases and statistical models, and test the assumed story instead of repeating it.

On a churn problem, that means checking whether onboarding actually drives customer losses, then building a simulation that reproduces last year and hunting for an earlier warning signal that predicts churn on unseen data. Telling a tidy story about the past and predicting unseen outcomes are very different bars.

He also pushes for stretch targets. In his hypothetical performance example, you don't stop at cutting a ten-second load time to five; you aim for 200 milliseconds to force a different architecture. (I'd pin the exact test conditions right next to that target so the number actually means something.)

And bring in an outside judge. Rieseberg warns straight out against letting the model grade its own homework; ideally, a real tool or test harness feeds back results as it works.

## Range: borrow playbooks from outside your field

Strip away the slides, and a quarterly review is really about helping busy people spot cause and effect and make calls under uncertainty.

Ask which professions are great at that, and a different crew shows up: an analyst, a journalist, and an editor (plus motion and audio designers if presentation counts), alongside a short seller and a forensic accountant for adversarial digging. Telling a model to sound like a short seller just changes its tone; asking it to pressure-test your assumptions the way a short seller would changes the work.

## Where it holds, and where it doesn't

Rieseberg closes on self-efficacy: what you believe is possible shapes what you even bother trying, and our defaults need an update as models improve.

He's realistic about the edges, too. Pushing up in abstraction works best when there's a clear outcome to optimize, and much less well for open-ended creative work. In 2026, telling Claude to "go make money" still falls flat for most businesses. Every working example depends on real data access, an environment to act in, and an independent check.

My own takeaway: push much harder on the goal and the method, while keeping the fence clear on what data and tools the agent can touch and how we'll verify what comes back.

## A prompt worth reusing

Condensed from the essay's prompting advice:

> What outcome is this task actually meant to produce?
>
> What would a strong practitioner start from, and which tools and methods would they use?
>
> Which other field could improve this approach?
>
> What independent test proves the result works?

</div>

<div class="lang-zh lang-hidden" markdown="1">

Felix Rieseberg 10 月 13 日写了篇文章，把用 AI 时的野心拆成四个维度：速度、高度、深度和广度。速度大家早就熟了，无非是把原来的活干快点；他整篇重点聊后面三个，拿季度业务回顾（QBR）一路串下来。

模型能力每隔几个月就跳一截，我们对“能交给它干什么”的想象却常常停在半年前。不过能力涨得并不均匀，敢提更大的要求，前提还是得有靠谱的验收办法。

## 高度：顺着任务追到真正目的

让模型做季度汇报，它顺手就能帮你填完几页 PPT。Rieseberg 建议再往上拔三层：

- 讲清这个季度变了什么、为什么变、接下来该干嘛。
- 拎出眼下最急的三个决策，把不同方向的利弊摊开。
- 干脆重做一套更早发现问题、重新分配资源的机制，拿公司历史数据回测，再跟现有季度回顾并行跑一个季度。

目标拔高了，给 agent 配的环境也得跟着换。Rieseberg 以前让 Claude 一条条修崩溃，后来直接给它一个目标：让应用保持零崩溃。为此，他把崩溃日志、版本和代码提交的对应关系全接进去，再配好能复现问题、跑通验证的机器。

## 深度：换掉方法，别只换术语

让模型“扮演专家”，它往往只换了一嘴行话，干活套路还是老样子。Rieseberg 要换的是真方法：回到原始数据，上数据库和统计模型，先拿数据敲打大家默认相信的那个解释。

拿用户流失来说，别上来就认定是新手引导的锅，先验原始数据撑不撑得住；接着搭个能复现过去一年的模拟，挖一个更早出现的预警信号，再看它在没见过的数据上预测得准不准。把过去讲圆，和能预测未来，完全是两道门槛。

他也鼓励定个看着离谱的拉升目标。比如原本加载要十秒，常规思路是压到五秒，他的假设例子直接盯两百毫秒，逼着模型换一套架构思路。（我自己用这招时，会把测试条件一起钉死，免得最后只剩个好看的数字。）

还有一条很关键：别让模型自己给自己打分，尽量接一个外部工具或测试在干活过程里持续给反馈。

## 广度：借外行的手法来干活

把幻灯片的外壳剥掉，季度汇报干的其实是帮一群大忙人看清因果、在信息不全时拍板。

顺着这个动作去找擅长干这事的行当，就能拉出一支跨界班子：分析师、记者、编辑（讲究呈现再加动效和音频设计），甚至拉来做空研究员和法务会计专门挑刺。让模型模仿做空者的口吻，只会改聊天腔调；让它按做空研究的路数去核查你的判断，才会真正改变产出。

## 边界在哪

文章最后落回自我效能感：你觉得自己能做成什么，决定了你敢不敢开口试；工具变了，这套心理预期也得跟着刷新。

他也没把话说满。往上抽高目标，最适合结果明确的任务，放到开放式创作上没那么灵。放到 2026 年，扔给 Claude 一句“去赚钱”，对绝大多数生意依然行不通。前面跑得通的例子，全靠三样底座：真数据、能动手的环境、独立的验收标准。

我自己记下来的落点很简单：目标和方法可以大胆往上要，同时把围栏划清，说透 agent 能碰哪些数据和工具、交回来的东西怎么验。

## 一套可复用的问法

把文章里的建议压成四个问题：

> 这件事最终到底要拿到什么结果？
>
> 真正厉害的从业者会从什么材料入手，用哪些工具和方法？
>
> 哪个别的行业有现成套路能借过来？
>
> 用什么独立检验，才能确认结果真管用？

</div>
