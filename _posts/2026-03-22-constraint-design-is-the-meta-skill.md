---
layout: post
title: "Constraint Design Is the Meta-Skill"
title_zh: "约束设计是元技能"
date: 2026-03-22
categories: tech
tags: [engineering, ai, design]
bilingual: true
---

<div class="lang-en" markdown="1">

> The highest-leverage design work is choosing which constraints to impose. They decide what the system discovers on its own.

## The breakthrough

I was building a topology visualization for a data analytics platform. The first version hardcoded the relationships — which tables fed which functions, listed by hand. It was stale within days. So I switched to constraint-based design: define parsing rules (regex patterns, parameter defaults) and let the system discover the relationships itself. It found 2–3× more connections than I would have ever typed out.

The pattern goes well past code. Designing good constraints — in systems, processes, orgs, personal workflows — is the meta-skill. A well-chosen constraint doesn't limit. It channels energy toward behavior you couldn't have predicted, let alone enumerated.

## System convergence in the AI era

AI-Ghost-Lab calls this "system convergence" — constraint design specifically aimed at AI-era development. His earlier mistake was leaning on broad test coverage to contain the chaos AI was generating. An agent might take three different paths from A to B, and the test surface tripled with it. The fix is to funnel similar functionality through unified entry points. Control the core nodes. Let everything else flex.

The constraints that actually work:

- Clear module boundaries
- Centralized state management
- Unified extension points
- Unified error handling

His metaphor lands it: "AI can make a mess, but only where you allow it. Not in the living room."

## Constrain agents, don't railroad them

Anthropic's skill-writing advice is constraint design pointed at AI agents. Two principles do most of the work:

1. **"Don't state the obvious."** Don't constrain what the model already does well. Aim constraints at the places its defaults are wrong.
2. **"Avoid railroading."** Over-specific instructions kill adaptability.

The art is constraining where the model goes wrong and leaving room where it goes right. The `frontend-design` skill is the clean example. It doesn't teach CSS (Claude knows CSS). It corrects Claude's aesthetic defaults — the Inter-font, purple-gradient instinct. A surgical constraint beats a wall of instructions, every time.

## The principle

The best designers don't enumerate every behavior they want, whether they're designing systems, organizations, or AI workflows. They pick a small number of constraints and let the right behaviors emerge. The meta-skill isn't building. It's knowing where to put the walls.

</div>

<div class="lang-zh lang-hidden" markdown="1">

> 最高杠杆的设计动作，是选择施加哪些约束。约束决定系统自己能发现什么。

## 突破

我在给一个数据分析平台做拓扑可视化。第一版是把已知关系硬编码进去：哪张表喂哪个函数，全靠手列。几天就过期了。后来换成基于约束的设计：定义解析规则（正则、参数默认值），让系统自己去发现关系。它找出来的连接数，比我手列出来的多 2–3 倍。

这模式远不止能用在代码上。系统、流程、组织、个人工作流——把约束设计好，就是元技能。选得好的约束不是限制，是把能量引向你预测不到、也穷举不出来的涌现行为。

## AI 时代的"系统收敛"

AI-Ghost-Lab 把这个叫"系统收敛"：约束设计专门对准 AI 时代的开发。他之前犯过的错是靠扩大测试覆盖去兜 AI 的混乱。Agent 从 A 到 B 可能走三条路，测试表面积也跟着翻三倍。正确的做法是让相同功能走同一个入口。核心节点控住，其他地方让它灵活。

真正管用的约束就那几条：

- 明确的模块边界
- 集中的状态管理
- 统一的扩展入口
- 统一的错误处理

他那个比喻一句话拍住："AI 可以拉屎，但只能在你指定的地方拉。不能拉客厅。"

## 约束 agent，不是绑住 agent

Anthropic 写 skill 的那套建议，本质上就是约束设计对准 AI agent。两条原则干了大部分活：

1. **"不要说显而易见的事。"** 模型本来就做得好的，别约束。约束要放在它默认就跑偏的地方。
2. **"别铁轨化。"** 太具体的指令会把适应性扼杀掉。

诀窍是：模型容易出错的地方加约束，做得对的地方放开手。`frontend-design` 这个 skill 就是个干净的例子。它不教 CSS（Claude 本来就会），它专门纠正 Claude 那套审美默认值——动不动就上 Inter 字体加紫色渐变。一刀切在点上，比一堵墙的指令强多了。

## 原则

最好的设计师不会去穷举自己想要的每一种行为，不管是设计系统、组织还是 AI 工作流。他们挑少数几个约束，让正确的行为自己长出来。元技能不是建造，是知道把墙放在哪里。

</div>
