---
layout: post
title: "From Executor to Steersman"
title_zh: "从执行者到舵手"
description: "From Watt's governor to Kubernetes to AI harnesses, each new control layer moves people from doing the work to designing the feedback loop."
description_zh: "从瓦特调速器到 Kubernetes 再到 AI harness，每多一层控制，人就从划桨的变成掌舵的。"
date: 2026-03-28
categories: tech
tags: [systems, engineering, ai]
bilingual: true
narration:
  en:
    src: /assets/audio/from-executor-to-steersman.en.mp3
    duration: 158
  zh:
    src: /assets/audio/from-executor-to-steersman.zh.mp3
    duration: 148
sources:
  - title: "George (@odysseus0z) on X"
    url: "https://x.com/odysseus0z/status/2030416758138634583"
  - title: "OpenAI: Harness Engineering"
    url: "https://openai.com/index/harness-engineering/"
---

<div class="lang-en" markdown="1">

Reading OpenAI's post on harness engineering, George (@odysseus0z) noticed the exact same shift repeating three times over 250 years:

1. **Watt's centrifugal governor (1780s).** The operator stops adjusting the steam valve by hand and designs the governor that adjusts it automatically.
2. **Kubernetes (2014).** The engineer stops SSHing in to restart crashed services and writes the declarative spec the cluster reconciles toward.
3. **AI agent harnesses (2026).** The engineer stops typing every line of code and designs the environment, tests, and constraints that steer agents as they write it.

Norbert Wiener gave this loop a name in 1948: cybernetics, from the Greek *kubernētēs*, meaning steersman. Underneath, the loop never changes: observe actual state, compare against desired state, adjust, repeat. Each time a new control layer arrives, humans don't vanish. They move from rowing to steering, one layer up.

The domain barely matters. Mechanical governors, cloud clusters, AI workflows, management, biological homeostasis: anywhere a feedback loop can replace direct manual nudging, the same shape turns up.

## The step almost everyone skips: Maltz

When people trace this line from Wiener to Kubernetes to AI harnesses, they almost always skip Maxwell Maltz. In 1960, 54 years before Kubernetes and 66 years before "harness engineering," Maltz applied Wiener's framework to human psychology. In his model, the brain is a goal-seeking servo that auto-corrects via feedback.

The steersman's job maps onto it straight across: set the target (your self-image and goals), trust the feedback loop, and stop micromanaging every step of the servo's execution.

Put them on one timeline and the pattern is hard to unsee:

- 1948: Wiener (cybernetics theory)
- 1960: Maltz (human psychology)
- 2014: Kubernetes (infrastructure)
- 2026: AI harnesses (agent engineering)

The steersman role isn't new; we just keep rediscovering it in a new wrapper. The trick is recognizing the shift when it finally arrives in your own work.

</div>

<div class="lang-zh lang-hidden" markdown="1">

George (@odysseus0z) 读 OpenAI 那篇 harness engineering 文章时，发现同一种变化在 250 年里已经重演了三回：

1. **瓦特离心调速器（1780 年代）。** 工人不用再手动拧阀门，转而去设计那个会自动调阀门的机械结构。
2. **Kubernetes（2014）。** 工程师不用再天天手动重启挂掉的服务，转而写一份声明式 spec，让集群自己往目标状态收敛。
3. **AI agent harness（2026）。** 工程师不再逐行手写所有代码，转而设计让 agent 干活的环境、反馈环和约束。

Norbert Wiener 1948 年给这套东西起过名字，叫控制论（cybernetics），词根来自希腊语 *kubernētēs*，就是“舵手”。底下的循环从来没变过：观察当前状态、对照目标状态、纠偏、继续循环。每多出一层控制机制，人并没有被淘汰，只是往上挪了一层，从划桨的变成了掌舵的。

这件事其实不挑行业。蒸汽机、云基础设施、AI 工作流、团队管理，甚至人体的稳态调节，只要反馈环能接手直接的手动控制，长出来的结构都差不多。

## 大家常漏掉的一环：Maltz

顺着 Wiener、Kubernetes 一路聊到 AI harness 时，大家几乎都会漏掉 Maxwell Maltz。早在 1960 年（比 Kubernetes 早 54 年，比今天聊 harness engineering 早 66 年），这位整形外科医生就把 Wiener 的控制论搬进了心理学。在他看来，大脑本身就是一套盯着目标、靠反馈自动纠偏的伺服系统。

掌舵人的活儿搬到人身上也一样：把目标（自我形象和方向）定准，相信自动运转的过程，别老去微操每一步执行。

摊成一条时间线就很直观：

- 1948：Wiener（控制论）
- 1960：Maltz（人类心理学）
- 2014：Kubernetes（基础设施）
- 2026：AI harness（agent 工程）

掌舵这件事早就不是新发明了，我们只是每换一个领域，就重新认出它一次。关键是等它轮到自己这行的时候，别还死抓着船桨不放。

</div>
