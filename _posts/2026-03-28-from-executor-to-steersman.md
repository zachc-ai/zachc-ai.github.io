---
layout: post
title: "From Executor to Steersman"
title_zh: "从执行者到舵手"
date: 2026-03-28
categories: tech
tags: [systems-thinking, architecture, cybernetics]
bilingual: true
sources:
  - title: "George (@odysseus0z) on X"
    url: "https://x.com/odysseus0z/status/2030416758138634583"
  - title: "OpenAI: Harness Engineering"
    url: "https://openai.com/index/harness-engineering/"
---

<div class="lang-en" markdown="1">

> Every new control layer shifts the human role from doing the work to designing the feedback loop. Observe, compare, adjust, repeat. Same pattern since 1780.

## A 250-year pattern

George (@odysseus0z) spotted the same shape three times in 250 years while reading OpenAI's harness engineering post:

1. **Watt's centrifugal governor (1780s).** The worker moves from manually adjusting the valve to designing the governor that adjusts the valve.
2. **Kubernetes.** The engineer moves from restarting services to writing the declarative spec the system reconciles toward.
3. **AI agent harness.** The engineer moves from writing code to designing the environments, feedback loops, and constraints that let agents write code.

Norbert Wiener named this in 1948: **cybernetics**, from Greek _kubernētēs_, steersman. The structure underneath is always the same — observe actual state, compare with desired state, adjust, loop. Each time, humans shift from rower to steersman. Not disappearing. Moving up one abstraction layer.

## Why it shows up everywhere

The pattern doesn't care what domain you're in. Mechanical engineering, software infrastructure, AI workflows, management, biological homeostasis. Wherever a feedback loop can replace direct manual control, the shape is the same.

## The missing link: Maltz (1960)

Maxwell Maltz is the part of the cybernetics chain almost no one names. He took Wiener's 1948 framework and applied it to _human psychology_ — 60+ years before anyone said "AI harness." The brain, in his telling, is a goal-seeking servo-mechanism that auto-corrects via feedback.

The steersman role maps onto it cleanly: set the target (self-image, goal), trust the automatic process, don't micromanage the servo's execution.

Maltz predates Kubernetes by 54 years and AI harness engineering by 66. Same pattern.

**The timeline:**
- Wiener (1948) — theory
- Maltz (1960) — human psychology
- Kubernetes (2014) — infrastructure
- AI harness (2026) — agent engineering

The steersman role isn't new. We keep rediscovering it. The question isn't whether the shift will happen in your field. It's whether you'll recognize it when it does.

**Sources:**
- [George (@odysseus0z) on X](https://x.com/odysseus0z/status/2030416758138634583)
- [OpenAI: Harness Engineering](https://openai.com/index/harness-engineering/)

</div>

<div class="lang-zh lang-hidden" markdown="1">

> 每加一层新的控制层，人的角色就从"做这件事"挪到"设计反馈环"。感知、比较、调整、循环。1780 年以来，一直是同一个模式。

## 250 年的同一个模式

George (@odysseus0z) 读 OpenAI 那篇 harness engineering 时，看出同一种形状在 250 年里出现了三次：

1. **瓦特离心调速器（1780s）。** 工人从手动调阀门，挪到设计那个会自动调阀门的机构。
2. **Kubernetes。** 工程师从重启服务，挪到写一份系统会自己向其收敛的声明式 spec。
3. **AI agent harness。** 工程师从写代码，挪到设计让 agent 写代码的环境、反馈环、约束。

Norbert Wiener 在 1948 年给这个东西起了名字：**控制论**（cybernetics），源自希腊语 _kubernētēs_，舵手。底下的结构每次都一样：感知实际状态、跟期望状态比较、调整、循环。每一次，人都从划桨者变成舵手。不是消失，是往上挪一个抽象层。

## 为什么哪儿都能见到它

这模式不挑领域。机械工程、软件基础设施、AI 工作流、管理、生物稳态。只要反馈环能替掉直接手动控制，形状就是这一个。

## 漏掉的一环：Maltz (1960)

Maxwell Maltz 是控制论这条线里大家很少点到的一环。他比 AI harness engineering 早 60 多年，就把 Wiener 那套 1948 年的框架挪到了**人类心理学**上：大脑是个目标寻求型的伺服机构，通过反馈自动修正。

舵手的角色直接套上去：设定目标（自我形象或目标），信任自动过程，别去微管伺服怎么执行。

Maltz 比 Kubernetes 早 54 年，比 AI harness engineering 早 66 年。同一个模式。

**时间线：**

- Wiener（1948）— 理论
- Maltz（1960）— 人类心理学
- Kubernetes（2014）— 基础设施
- AI harness（2026）— agent 工程

舵手这个角色不是新东西。我们在不同领域反复重新发现它。问题不是这转变会不会发生在你这行，是它发生的时候，你认不认得出来。

**来源：**
- [George (@odysseus0z) on X](https://x.com/odysseus0z/status/2030416758138634583)
- [OpenAI: Harness Engineering](https://openai.com/index/harness-engineering/)

</div>
