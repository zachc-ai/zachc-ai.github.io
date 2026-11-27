---
layout: post
title: "Constraint Design Is the Meta-Skill"
title_zh: "约束设计是元技能"
description: "Why picking a few well-placed constraints beats listing every behavior, from a self-discovering topology map to Claude skills."
description_zh: "与其穷举想要的每种行为，不如挑几个约束放对地方，剩下的让系统自己找。"
date: 2026-03-22
categories: tech
tags: [engineering, ai, systems]
bilingual: true
narration:
  en:
    src: /assets/audio/constraint-design-is-the-meta-skill.en.mp3
    duration: 155
  zh:
    src: /assets/audio/constraint-design-is-the-meta-skill.zh.mp3
    duration: 147
sources:
  - title: "AI-Ghost-Lab on Bilibili"
    url: "https://space.bilibili.com/1731330412"
  - title: "Thariq Shihipar — *Lessons from Building Claude Code: How We Use Skills*"
    url: "https://x.com/trq212/status/2033949937936085378"
  - title: "anthropics/skills — `frontend-design` SKILL.md, as of Mar 2026"
    url: "https://github.com/anthropics/skills/blob/00756142ab04c82a447693cf373c4e0c554d1005/skills/frontend-design/SKILL.md"
---

<div class="lang-en" markdown="1">

I was building a topology map for a data analytics platform. In the first version, I hardcoded every link by hand: which table fed which function, written out one by one. It went stale within days.

So I threw away the list and switched to rules instead: regex patterns and parameter defaults that let the tool parse the codebase and discover the graph on its own. It turned up 2 to 3 times more connections than I would ever have typed out.

That stuck with me well past that project. Whether you're designing software, workflows, or an org, listing every desired behavior rarely holds up. Picking a few constraints and putting them in the right places does far more work, because the constraints decide what the system discovers on its own.

## System convergence in the AI era

AI-Ghost-Lab calls this "system convergence" for AI-assisted coding. His earlier mistake was trying to contain AI-generated sprawl with ever-wider test suites. When an agent can wander from A to B along three different paths, your test surface triples right along with it.

His fix is to funnel similar capabilities through shared entry points, lock down the core nodes, and let the edges stay flexible. The constraints that carry the weight are pretty plain: clear module boundaries, centralized state, unified extension points, and unified error handling.

His joke sums it up cleanly (roughly translated): AI can make a mess, just only where you allow it, not in the living room.

## Constrain agents, don't railroad them

Thariq Shihipar from the Claude Code team wrote up how Anthropic thinks about writing agent skills, and it lands in the exact same place. Two rules do most of the lifting:

1. "Don't state the obvious." Don't waste constraints on things the model already handles fine; aim them where its defaults go wrong.
2. "Avoid railroading Claude." Over-specified scripts kill the model's ability to adapt when reality doesn't match your checklist.

The `frontend-design` skill is a neat example. Instead of teaching CSS (Claude already knows CSS), it aimed straight at Claude's default habits at the time, like reaching for Inter and purple gradients on every page.

Put the walls where the system drifts off track, and leave the rest open. Most good design comes down to knowing where those walls belong.

</div>

<div class="lang-zh lang-hidden" markdown="1">

前阵子给一个数据分析平台做拓扑图。第一版图省事，哪张表连哪个函数全靠手写硬编码，结果没几天就跟不上变化了。

后来干脆把清单全删了，只定几条解析规则（正则和参数默认值），让程序自己去扫代码。跑出来一看，它挖出的连接数是我手写版本的两三倍。

写完这东西我才琢磨明白，不管做系统、流程还是 AI 工作流，把想要的每种行为一条条列全几乎都会过时。真正值钱的是挑几个对的约束立在关键位置，剩下的让系统自己长出来。

## AI 时代的“系统收敛”

AI-Ghost-Lab 管这叫“系统收敛”，专门用来治 AI 写代码容易散架的毛病。他踩过的坑是想靠狂堆测试覆盖去兜住 AI 的混乱：agent 从 A 到 B 能绕出三条路，你要测的面就跟着翻三倍。

解法是把相似功能收进统一入口，死守住几个核心节点，别的地方放开。真正管用的约束听着都很朴素：清晰的模块边界、集中的状态管理、统一的扩展入口、统一的错误处理。

他打过一个很糙但一针见血的比喻，大意是：AI 可以拉屎，但只能拉在你指定的地方，客厅不行。

## 约束 agent，别把路写死

Claude Code 团队的 Thariq Shihipar 分享过 Anthropic 内部写 skill 的经验，落点一模一样。最管用的是两条：

1. “不要说显而易见的事。”模型本来就能干好的别瞎管，约束只加在它默认容易跑偏的地方。
2. “别把 Claude 的路线写死。”步骤抠得太死，现场稍有变化它就没法随机应变了。

`frontend-design` 这个 skill 就是很好的例子。它压根不教 CSS（Claude 本来就会），专门盯着 Claude 当时爱犯的审美默认值下手，比如动不动就上 Inter 字体加紫色渐变。

好设计很少去穷举所有正确答案，它只是想清楚该把墙立在哪儿，其余的留给系统自己找。

</div>

