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

> Every new control layer shifts the human role from doing the work to designing the feedback loop — observe, compare, adjust, repeat. Same pattern since 1780.

## A 250-Year Pattern

George (@odysseus0z) identified a pattern recurring three times across 250 years while reading OpenAI's harness engineering post:

1. **Watt's centrifugal governor (1780s)**: worker shifts from manually adjusting the valve to designing the automatic governor mechanism.
2. **Kubernetes**: engineer shifts from restarting services to writing the declarative spec the system reconciles against.
3. **AI agent harness**: engineer shifts from writing code to designing environments, feedback loops, and constraints for agents to write code.

Norbert Wiener named this in 1948: **cybernetics**, from Greek _kubernētēs_ (steersman). The core structure is always the same: observe actual state, compare with desired state, adjust, loop. Each time, humans shift from rower to steersman — not disappearing, but moving up one abstraction layer.

## Why This Is Universal

This pattern transcends domains entirely: it applies to mechanical engineering, software infrastructure, AI workflows, management, and biological homeostasis. The pattern holds in any system where a feedback loop can replace direct manual control.

## The Missing Link: Maltz (1960)

Maxwell Maltz is the missing link in the cybernetics chain. He applied Wiener's 1948 framework to _human psychology_ 60+ years before AI harness engineering — framing the brain as a goal-seeking servo-mechanism that auto-corrects via feedback.

The steersman role maps precisely: set the target (self-image/goal), trust the automatic process, don't micromanage the servo-mechanism's execution.

Maltz's formulation predates Kubernetes by 54 years and AI harness engineering by 66 years, yet describes the same pattern.

**The timeline:**
- Wiener (1948) — theory
- Maltz (1960) — human psychology
- Kubernetes (2014) — infrastructure
- AI harness (2026) — agent engineering

The lesson: the steersman role isn't new. We've been discovering it again and again across every domain. The question isn't whether this shift will happen in your field — it's whether you'll recognize it when it does.

**Sources:**
- [George (@odysseus0z) on X](https://x.com/odysseus0z/status/2030416758138634583)
- [OpenAI: Harness Engineering](https://openai.com/index/harness-engineering/)

</div>

<div class="lang-zh lang-hidden" markdown="1">

> 每一层新的控制层都将人类角色从"执行工作"转变为"设计反馈环"——感知、比较、调整、循环。1780 年以来同一模式。

## 跨越 250 年的模式

George (@odysseus0z) 在读 OpenAI 的 harness engineering 文章时，识别出一个跨越 250 年的模式，出现了三次：

1. **瓦特离心调速器 (1780s)**：工人从手动调节阀门转变为设计自动调速机构。
2. **Kubernetes**：工程师从重启服务转变为编写系统据以协调的声明式 spec。
3. **AI Agent Harness**：工程师从写代码转变为设计环境、反馈循环和约束，让 agent 写代码。

Norbert Wiener 在 1948 年命名了这个模式：**控制论 (cybernetics)**，源自希腊语 _kubernētēs_（舵手）。核心结构始终相同：感知实际状态、与期望状态比较、调整、循环。人类每次都从划桨者变成舵手——不是消失，而是上移一个抽象层。

## 为什么这是普适的

这个模式完全超越领域：适用于机械工程、软件基础设施、AI 工作流、管理和生物稳态。只要反馈环能替代直接手动控制，这个模式就成立。

## 缺失的一环：Maltz (1960)

Maxwell Maltz 是控制论链条中缺失的一环。他在 AI harness engineering 出现 60 多年前就将 Wiener 的 1948 框架应用于_人类心理学_——将大脑定义为通过反馈自动修正的目标寻求伺服机构。

舵手角色精确映射：设定目标（自我形象/目标），信任自动过程，不要微观管理伺服机构的执行。

Maltz 的理论比 Kubernetes 早 54 年，比 AI harness engineering 早 66 年，却描述了同一个模式。

**时间线：**
- Wiener (1948) — 理论
- Maltz (1960) — 人类心理学
- Kubernetes (2014) — 基础设施
- AI harness (2026) — agent 工程

启示：舵手角色并不新鲜。我们在每个领域一次又一次地重新发现它。问题不是这种转变是否会发生在你的领域——而是当它发生时，你能否认出它。

**来源：**
- [George (@odysseus0z) on X](https://x.com/odysseus0z/status/2030416758138634583)
- [OpenAI: Harness Engineering](https://openai.com/index/harness-engineering/)

</div>
