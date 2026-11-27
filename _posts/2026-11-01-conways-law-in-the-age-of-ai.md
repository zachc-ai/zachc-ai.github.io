---
layout: post
title: "Conway's law: who gets to finish the work?"
title_zh: "康威定律：谁能把一件事做完？"
description: "AI can change the cost of implementation without automatically removing coordination or responsibility. Conway's law shows up in agent architectures too, leaving a practical question about which boundaries to keep."
description_zh: "AI 可以改变实现成本，却不会自动消除协调和责任。康威定律也会出现在 agent 架构里。哪些边界可以删，哪些仍然有用，得重新算一遍。"
date: 2026-11-01
categories: tech
tags: [ai, engineering, systems, career]
bilingual: true
image:
  path: /assets/images/conways-law-cover.png
  width: 1200
  height: 630
  alt: "One change crossing several ownership boundaries, compared with a bounded team owning the work and its feedback."
narration:
  en:
    src: /assets/audio/conways-law-in-the-age-of-ai.en.mp3
    duration: 496
  zh:
    src: /assets/audio/conways-law-in-the-age-of-ai.zh.mp3
    duration: 505
sources:
  - title: "Melvin Conway — How Do Committees Invent?"
    url: "https://www.melconway.com/research/committees.html"
  - title: "Martin Fowler — Conway's Law"
    url: "https://martinfowler.com/bliki/ConwaysLaw.html"
  - title: "Anthropic — Building agents: when to fold subagents into your main agent loop"
    url: "https://claude.com/resources/articles/building-agents-when-to-fold-subagents-into-your-main-agent-loop"
  - title: "Fiona Chen and James Stratton — Artificial Intelligence in the Firm: Bottlenecks in Software Production"
    url: "https://fion.ac/jellyfish.pdf"
  - title: "FurtherAI — Building an AI-native engineering org"
    url: "https://x.com/sgondala2/status/2115832070274723875"
  - title: "Block — From Hierarchy to Intelligence"
    url: "https://block.xyz/inside/from-hierarchy-to-intelligence"
  - title: "u/AlexFromUplevel — If your teams can't work independently today, your agents won't either"
    url: "https://www.reddit.com/r/ScalingSoftware/comments/1xg1de4/if_your_teams_cant_work_independently_today_your/"
---

<div class="lang-en" markdown="1">

Anthropic wrote up an agent refactor that cut latency and broke a workflow that used to pass. After folding a shipping subagent into the main loop, the main agent started answering order questions without checking delivery dates. Worse, the bug only showed up in one of two runs.

Cutting the handoff had quietly cut a check. A shorter pipeline didn't mean the job was still getting done.

That's the tension I've been chewing on lately: can a small team armed with AI finish work that used to bounce across four teams? It's tempting to say yes. Conway's law doesn't tell you small teams beat big ones; it just says your system will mirror how your people actually talk and decide. Before handing a small team more surface area, you still have to look at what the old boundaries were protecting.

<img class="theme-img-light" src="{{ '/assets/images/conways-law-cover.svg' | relative_url }}" width="1200" height="630" alt="An illustrative change passes through UI, service, data, and release owners. A second arrangement puts those activities inside one bounded team with authorized agents, required checks, and a feedback loop.">
<img class="theme-img-dark" src="{{ '/assets/images/conways-law-cover-dark.svg' | relative_url }}" width="1200" height="630" alt="An illustrative change passes through UI, service, data, and release owners. A second arrangement puts those activities inside one bounded team with authorized agents, required checks, and a feedback loop.">

## Conway's law shows up in agent architectures too

Melvin Conway's 1968 observation is simple: organizations build systems that copy their own communication structures. Modules need shared assumptions to fit together. When the people behind them rarely talk or can't make a call together, any design that requires tight coordination starts to rot. That reflects real working channels and decision power, not just the org chart.

Anthropic sees the exact same thing in enterprise agents. Each product team spins up its own specialist agent, then a central team glues an orchestrator on top. Org boundaries turn into separate context windows, prompts, and handoffs, and any customer request that spans products has to hop across all of them.

A Reddit post by u/AlexFromUplevel puts it bluntly: a service with no clear owner leaves an agent working on it with no clear owner either. It's a practitioner's observation, not a controlled study, yet the point lands. If nobody owns the whole workflow today, dropping agents into it won't magically create ownership.

## More PRs isn't the same as more shipped work

In a November 1 working paper, Fiona Chen and James Stratton looked at Jellyfish data from 655 companies. A year after adopting coding agents, teams opened about 36% more PRs and closed roughly 14% more Jira issues (with noisier statistical support on the issues), while time from PR open to merge jumped about 56%.

Like any observational study, it leans on adoption timing rather than random assignment, and merge time includes queue wait, not just reviewer hours. Even with those caveats, the shape makes sense: if code arrives faster than a team can verify and integrate it, the hours saved typing just pile up in the review queue downstream.

There are brighter reports too. FurtherAI's engineering write-up on X talks about spending months hardening tests, CI, and risk-tiered merges before handing engineers broader planning and review ownership. That upfront investment interests me more than any one startup's headline speedup. Cheap coding makes it easy to try ideas; getting them safely into production still takes its own machinery.

## Group work by what has to be understood together

AI lets one team touch more of the stack. How much of that stack the team can genuinely understand and own is a harder question.

Anthropic's rule of thumb for agents translates nicely to teams: fold specialists together when they constantly rely on each other's output or share the same context; keep them apart when fresh context, parallel work, or conflicting tools make separation pay off.

A UI and backend service that always change in lockstep probably belong under one roof. A shared payment core serving ten products doesn't; shoving it into one product team just trades one bottleneck for a worse one.

Microservices already pushed for autonomous teams around business capabilities, and Martin Fowler's "inverse Conway maneuver" is about reshaping teams to get the architecture you want. Start with what a team should actually be accountable for, then figure out headcount and service boundaries. Any boundary that forces two teams to negotiate on every routine change is worth questioning, as long as you check what expertise or safety rail it was holding up before you tear it down.

## Autonomy doesn't mean everyone turns into a generalist

Block recently floated an org design that keeps deep specialists while giving a single DRI 90-day authority to pull from multiple teams on a cross-cutting problem. It's a proposal, not proven history yet, but I like the direction: you keep deep craft while giving one person a concrete goal, a deadline, and real coordination power.

Anthropic suggests a matching split for agents. Domain teams own their skills and tools; a small central team owns the system prompt and end-to-end quality. Multiple teams contribute without each spinning up a rival agent that hijacks the conversation.

Neither setup gets you out of priority calls. When two products want the same specialist or platform at the same time, someone still has to choose. Giving everyone new titles or personal coding agents doesn't settle who holds that tiebreaker. What actually helps is letting a team move freely inside clear boundaries and pull in specialist help without renegotiating every routine step from scratch.

## Know what a handoff does before deleting it

That missing delivery date at the start is a classic example of hidden work inside a handoff. Process diagrams rarely show the informal checks people carry in their heads.

Some approvals just enforce a predictable rule that belongs in a test or an automated guardrail. Others are real judgment calls: is this migration safe, should we build this at all, does it break a promise we made to customers? Separate those two before deleting the step. Automate the repeatable checks; keep a named human on the hook for judgment.

Tests, permissions, and clean rollbacks aren't bureaucracy; they're what let a team ship low-risk changes without asking permission up the chain. Speed up code generation without matching verification, and you're mostly generating cleanup work for whoever holds the pager. And measure the whole loop: green unit evals can hide a broken customer workflow, just like a record PR count can hide a jammed review queue.

## Test it on one workflow first

I haven't worked at a startup, so my picture of their speed still has some guesswork in it. A greenfield team and a team running a ten-year-old system with shared databases and unwritten rules aren't playing the same game. Generating replacement code is easy; untangling those rules isn't.

If I were trying this, I'd pick one bounded workflow with clear decision rights and risk limits, then measure end-to-end delivery at comparable quality: waiting, rework, and post-release bugs included. I'd also check whether the speedup secretly leaned on another team's extra effort or months of verification tooling built ahead of time.

Incentives matter just as much. Reward PR volume and visible AI usage, and you'll get plenty of both. I'd rather reward cutting a dependency, shrinking maintenance, or preventing an incident. Conway himself argued for rewarding managers who keep organizations lean and adaptable.

A good pilot earns wider ownership. A messy one might tell you to fix the tests, tighten requirements, or keep a specialist boundary right where it is. Headcount alone won't tell you which.

I'd start by picking one handoff and finding out what it's actually doing.

</div>

<div class="lang-zh lang-hidden" markdown="1">

Anthropic 写过一次 agent 改造：把配送 subagent 合并进主循环之后，响应确实变快了，但一条原本能跑通的流程悄悄坏了。主 agent 直接回答了订单问题，忘了去查交付日期。更麻烦的是，这问题跑两次才出现一次。

砍掉一次交接，顺带砍掉了一项检查。链路变短，不代表活还干对了。

这正好撞上我最近一直在琢磨的事：一个小团队配上 AI，能不能自己啃完过去要跨好几个团队的活？听起来挺诱人。但康威定律没说过人少就一定快，它只是提醒你，做出来的系统早晚会长成你们平时沟通和拍板的样子。真想让小团队多扛一块地盘，先得看清旧边界原本在拦什么。

<img class="theme-img-light" src="{{ '/assets/images/conways-law-cover.svg' | relative_url }}" width="1200" height="630" alt="一种示意安排把同一个改动交给界面、服务、数据和发布的不同负责人；另一种把这些工作放进一个有明确边界的小团队，由获授权的 agent 协助，保留必要检查，并接收结果反馈。">
<img class="theme-img-dark" src="{{ '/assets/images/conways-law-cover-dark.svg' | relative_url }}" width="1200" height="630" alt="一种示意安排把同一个改动交给界面、服务、数据和发布的不同负责人；另一种把这些工作放进一个有明确边界的小团队，由获授权的 agent 协助，保留必要检查，并接收结果反馈。">

## 康威定律一样长在 agent 架构里

Melvin Conway 1968 年的判断很直白：组织做出来的系统，会复制它自己的沟通结构。模块之间要配合，背后的人就得把假设对齐；要是这几拨人平时不怎么说话、也没法一起拍板，需要频繁配合的设计迟早散架。这里说的结构，看的是谁真在跟谁协作、谁能拍板，不只是组织架构图。

Anthropic 在企业级 agent 里看到的是同一套翻版：每个产品团队各搭一个 specialist agent，中央团队再在上面套一层 orchestrator。组织边界原封不动变成了各自的 context window、prompt 和交接。一个跨产品的客户请求进来，照样得过五关斩六将。

Reddit 上 u/AlexFromUplevel 说得很直接：一个服务平时就没人真正负责，跑在上面的 agent 照样没人负责。虽然是一线吐槽不是论文，但话挺扎心。今天都没人端到端兜底的事，多塞几个 agent 进去，负责人也不会自己长出来。

## 改得多，不等于交付得多

Fiona Chen 和 James Stratton 11 月 1 日更新的工作论文，翻了 Jellyfish 上 655 家公司的记录。用上 coding agent 一年后，打开的 PR 多了约 36%，解决的 Jira issue 多了约 14%（统计噪声偏大），但 PR 从提交到合并的耗时涨了约 56%。

当然，这类研究靠的是上线时间差而不是随机分组，合并耗时里也混着排队等 review 的时间。可趋势很符合直觉：如果代码冒出来的速度远远超过检查和集成的速度，写代码省下来的功夫，多半全堵在下游的 review 队列里了。

正面案例也有。FurtherAI 在 X 上复盘工程团队改造时，先花了几个月补测试、改 CI、做按风险分级的合并机制，之后才把更多规划和审查权交给一线工程师。比起单个创业公司晒出来的提速数字，我更看重前面那段铺路。写代码变便宜了，试错门槛确实低了；可要把改动安稳交到用户手里，后面那套兜底能力还得自己长出来。

## 按“哪些活必须放一起理解”来划界

AI 能让一个团队多碰好几层技术栈，但团队真能吃透多少、扛得住多少责任，是另一笔账。

Anthropic 给 agent 划边界的经验，搬到团队上也管用：经常互相拿对方输出、吃同一份上下文的专家，可以考虑合在一起；需要干净上下文、并行推进，或者工具和指令互相打架的，还是分开省事。

前后端如果每次改需求都得绑在一起动，归一个团队管往往更顺。可像共享支付系统这种给十几个产品兜底的核心，硬塞进某一个产品团队，只会制造更难缠的新依赖。

微服务本来就想按业务能力建自治团队，Martin Fowler 说的“逆康威操作”也是先动组织、再带出想要的架构。划边界时，先定清楚团队到底对什么结果负责，再去算人数和服务怎么切。凡是每次常规改动都得跨团队反复扯皮的边界，都值得重新看一眼；只是动手拆之前，先确认它背后护着哪些专业积累和风控。

## 自治不等于人人都变通才

Block 最近提过一种方案：继续保留深度专家，同时指定一个 DRI，给 90 天授权去调动多个团队啃一个跨边界问题。虽然只是提案、还没跑出定论，但这思路挺顺眼：留住真专家，同时给一个人明确的目标、期限和协调权。

Anthropic 对 agent 系统也给了类似切法：领域团队维护各自的 skills 和 tools，一个精干的中央团队守住 system prompt 和端到端质量。大家都能往里添砖加瓦，不用每个团队各起一个 agent 抢对话控制权。

不管怎么切，优先级冲突都躲不掉。两个产品同时抢一位专家或者同一个平台，总得有人拍板。改个岗位头衔，或者人手发一个私人 agent，替不了这个拍板的人。我更在意的是，团队能不能在清楚的边界里放手干活，需要外援时也不用每次从零谈起。

## 删交接之前，先搞清它在干嘛

开头漏掉交付日期那个坑，正好说明一次交接背后藏着什么：流程框图上看不见的信息，或者一道靠人记着的检查。

有些审批其实只是在守一条死规矩，完全可以变成自动测试或受控工具；另一些审批则是真要人做判断，比如这次数据迁移稳不稳、这个功能该不该上、有没有违背对客户的承诺。删步骤之前，先把这两类拆开：能重复验的尽量自动化，机器兜不住的判断还是明确落到人头上。

测试、权限和回滚不是繁文缛节，它们才是让团队敢自己发低风险改动的底气。写代码快了、验证跟不上，最后只是把更多收拾烂摊子的活儿推给了值班的人。盯指标也得盯全链路：局部 eval 全绿，用户任务照样可能翻车；PR 数量刷得再高，也盖不住越排越长的 review 队列。

## 先拿一条小流程试一试

我没在创业公司待过，对它们有多灵活，多少带着点想象。从零起新盘的小团队，跟维护十年老系统、满地共享数据库和隐性业务规则的团队，本来就不是同一场仗。替换代码容易生成，那些没写进文档的老规则可不会跟着消失。

真要试，我会挑一条边界清楚的流程，把拍板权和风险红线先定好，然后在同等质量下量完整交付耗时，把排队、返工和上线后的故障全算进来。顺便看清这份提速有没有悄悄靠别的团队兜底，或者全靠提前搭好的验证基础设施。

考核标准也得跟着动。如果只奖励代码量和可见的 AI 使用率，大家自然会拼命刷这两样。我更希望干掉一条依赖、少一段重复维护、少出几次线上事故也能算功劳。Conway 自己当年就提过，应该奖励那些让组织保持精简灵活的管理者。

试点跑通了，再把责任范围放大；要是跑崩了，也许说明该补测试、理清需求，或者某条专家边界本来就不该拆。光盯着团队人数，看不出答案。

真要动手，我会先挑一次交接，弄明白它到底在拦什么。

</div>
