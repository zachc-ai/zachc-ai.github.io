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

Anthropic describes an agent migration that reduced latency and broke a previously passing workflow. The main agent answered an order question without asking the shipping specialist for the delivery date. The failure appeared in only one of two runs.

Removing the handoff had also removed a check. A shorter process wasn't enough to establish that the work was still being done.

I've been thinking about whether a small team with AI could finish work that used to cross several teams. It's an appealing possibility. But Conway's law doesn't give us a productivity ranking by team size. It helps explain how communication shapes a system. To decide whether a team should own more, we still have to examine the work and its costs.

<img src="{{ '/assets/images/conways-law-cover.png' | relative_url }}" width="1200" height="630" alt="An illustrative change passes through UI, service, data, and release owners. A second arrangement puts those activities inside one bounded team with authorized agents, required checks, and a feedback loop.">

## Conway's law shows up in agent architectures too

In his 1968 paper, Melvin Conway argued that organizations designing systems produce designs that copy their communication structures.

Modules need shared assumptions to work together. If the people responsible for them can't reach those agreements easily, a design requiring frequent collaboration becomes difficult to sustain. The relevant structure includes who actually talks to whom and who can make a decision, beyond the reporting chart.

Anthropic describes the same pattern in enterprise agents: each product team builds its own specialist agent, then a central team adds an orchestrator. Organizational boundaries become separate context windows, prompts, and handoffs. A customer task spanning products then has to cross those boundaries.

In a Reddit post, u/AlexFromUplevel makes a related point: a service without a clear owner also leaves an agent working on that service without a clear owner. It's a practitioner argument, not a measured result, but it raises a useful question. If nobody owns the full workflow today, why would adding agents establish that ownership?

## More changes and more completed work are different measures

Fiona Chen and James Stratton's November 1 working-paper version uses Jellyfish records from 655 firms. One year after coding-agent adoption, it estimates about 36% more PRs opened and about 14% more Jira issues resolved, with weaker statistical evidence for the latter. Elapsed time from PR submission to merge increased by about 56%.

The study uses differences in adoption timing, rather than randomly assigning tools, and depends on assumptions about comparable trends without adoption. A resolved issue is also a proxy for completed work, not a direct measure of customer value. Submission-to-merge time includes waiting; it isn't a measure of a reviewer's working hours. I'd use these estimates to investigate what happens after implementation, rather than predict how every team will perform.

If changes arrive faster than they can be checked and integrated, some of the saved coding time can become a longer queue downstream.

There are favorable accounts too. FurtherAI's engineering retrospective on X describes months spent improving tests, CI, and risk-based merging before shifting more planning and review responsibility to engineers. I find the investment behind that account more useful than the headline productivity numbers. It's one startup's self-report, not a recipe we can assume will work everywhere.

Cheap implementation can make it easier to try an idea. Getting that idea safely into use still needs its own capacity.

## Divide work by what needs to be understood together

AI could let a team implement changes across a wider range of technologies. How much of that work the team can understand and take responsibility for is a separate question.

Anthropic's agent guidance gives a concrete test for boundaries: consider combining specialists that repeatedly use each other's output or need the same context. Keep separate agents when fresh context, independent parallel work, or incompatible tools and instructions make separation useful.

I'd ask a similar question about teams. A UI and service that must change together may benefit from being owned together. A shared payment system has obligations to many products; folding it into one product team could create a different dependency.

Microservices already aimed for autonomous teams organized around business capabilities. Fowler describes the inverse Conway maneuver as changing the organization to encourage a desired architecture. I'd start by defining a team's responsibility, then consider headcount and service count.

I'd reconsider boundaries around changes that repeatedly require joint decisions, while checking what knowledge or protection each boundary provides. Some separation makes coordination possible at scale. Removing it can move too much context and risk onto a small group.

## Autonomy can keep the specialists

Block has proposed an arrangement that keeps deep specialists while giving a DRI responsibility for a cross-cutting problem. Its example is a 90-day assignment with authority to draw on several teams.

That is a proposed organization design, not evidence that it has already succeeded. But it offers an alternative to turning everyone into a generalist: retain specialist capabilities and give someone a defined outcome, a limited duration, and authority to coordinate the work.

Anthropic proposes a related division for agent systems. Domain teams can own skills and tools; a small central team owns the system prompt and end-to-end quality. Several teams can contribute without each having a separate agent that takes over the conversation.

These arrangements still need decisions about priorities. Someone has to settle a conflict between two products needing the same specialist or platform. Renaming roles or providing personal agents won't assign that authority. What interests me is whether a team can act inside a clear scope and get help without negotiating every routine step from scratch.

## Replace the handoff only after identifying its job

The shipping-date failure at the beginning is a small example of what a handoff can carry. It may hold information or a check that isn't obvious from the process diagram.

For a routine change, an approval may be applying a stable rule that could be enforced by a test or an authorized tool. For another change, the reviewer may be deciding whether a migration is safe, whether the feature should exist, or whether it conflicts with a promise to a customer.

I would separate those cases before removing the approval. Make repeatable checks cheap and automatic where appropriate; keep a named person responsible for judgment that the checks don't cover.

Tests, permissions, and rollback options need design work too. They give a team room to act without passing every low-risk decision upward. A faster coding loop with inadequate verification can instead send more work to the people who have to recover from its mistakes.

And I'd measure the whole workflow. Locally passing evals can hide a failed customer task, just as an impressive PR count can hide a growing review queue. Someone needs to own that end-to-end test.

## Start with a comparison that can teach us something

I haven't worked at a startup, so my ideas about their flexibility still include guesswork. A small greenfield team and a team maintaining a mature system also face different work. Shared databases and unwritten business rules don't disappear because the replacement code is easy to generate.

I'd try one bounded workflow, with explicit decision rights and risk limits. Measure delivery time at comparable quality, including waiting, rework, and failures after release. Check whether the gains depended on extra effort from another team or on verification infrastructure built beforehand.

The evaluation system matters as well. If it rewards code volume or visible AI activity, people have a reason to produce more of both. I'd also want it to recognize a dependency removed, less recurring maintenance, or fewer failures. Conway himself called for rewarding managers who keep design organizations lean and flexible.

A successful experiment might justify wider ownership. A failure might show that the team needs better tests, clearer requirements, or a specialist boundary we should keep. I wouldn't decide between those explanations from headcount alone.

I'd start with one handoff and find out what it is actually doing.

</div>

<div class="lang-zh lang-hidden" markdown="1">

Anthropic 记录过一次 agent 改造：合并一个 subagent 以后，响应更快了，原来能通过的一项流程却出了错。主 agent 自己回答了订单问题，没有再向配送 specialist 确认交付日期。这个问题跑两次，只出现了一次。

少了一次交接，也漏掉了一项检查。光看流程变短，还不知道原来的事有没有继续做好。

我最近在想，一个小团队加上 AI，能不能把原来跨几个团队的工作做成一个闭环。这个设想挺有吸引力。但康威定律没有按团队人数给生产力排个名次。它解释的是，沟通怎样影响系统设计。至于一个团队该多负责多少，还得把工作和成本摊开看。

<img src="{{ '/assets/images/conways-law-cover.png' | relative_url }}" width="1200" height="630" alt="一种示意安排把同一个改动交给界面、服务、数据和发布的不同负责人；另一种把这些工作放进一个有明确边界的小团队，由获授权的 agent 协助，保留必要检查，并接收结果反馈。">

## 康威定律也会出现在 agent 架构里

Melvin Conway 在 1968 年的文章里提出，一个组织设计出来的系统，会复制这个组织的沟通结构。

模块要配合，背后的人就得对接口有共同理解。如果这件事很难达成，需要频繁协作的设计就很难维持。这里的结构包括谁实际和谁交流、谁能做决定，光看汇报线还不够。

Anthropic 描述了一类企业 agent 的做法：每个产品团队各造一个 specialist agent，再由中央团队加一层 orchestrator。组织边界变成了各自的 context window、prompt 和交接。一件跨产品的客户任务，也就得穿过这些边界。

Reddit 上，u/AlexFromUplevel 提了一个相关的观点：一个服务如果没有明确的 owner，在这个服务上干活的 agent 也就没有明确的 owner。这是实践者的判断，不是测量结果。但它让我想到一个问题：今天都没有人对完整流程负责，加几个 agent，怎么就会自动产生这个负责人？

## 改动多了，交付未必同比增加

Fiona Chen 和 James Stratton 的工作论文，在 11 月 1 日更新的版本里，使用了 Jellyfish 上 655 家企业的记录。采用 coding agent 一年后，研究估计发起的 PR 增加了约 36%，解决的 Jira issue 增加了约 14%，后者的统计证据较弱。PR 从提交到合并的耗时增加了约 56%。

它比较不同时间采用工具的企业，而不是随机分配工具。一个重要前提是：如果没有采用工具，这些企业原本会沿着相近的趋势发展。解决 issue 只是完成工作的代理指标，不能直接当成用户价值。从提交到合并的耗时包括等待，也不是 reviewer 真正工作的小时数。我会拿这些估计检查实现之后的环节，而不是预测每个团队会怎么样。

如果改动来得比检查和集成更快，省下来的写代码时间，就可能变成下游更长的队列。

也有正面的经验。FurtherAI 在 X 上的工程团队回顾里，描述了几个月的测试、CI 和按风险分级合并的投入，然后再把更多规划和审查责任交给工程师。相比醒目的生产力数字，我更在意这段投入。不过，这仍然是一家 startup 的自述，不能直接拿来当通用配方。

实现便宜了，试一个想法会更容易。把它安全地交到用户手里，仍然需要相应的能力。

## 哪些工作需要一起理解？

AI 可能让一个团队能在更多技术领域里改代码。但它能理解多少、又能对多少工作负责，是另外一个问题。

Anthropic 给 agent 边界提供了一个具体的判断办法：如果几个 specialist 经常用彼此的输出，或者需要同一份上下文，可以考虑合并。需要独立 context、并行做互不依赖的工作，或者工具和指令互相冲突时，分开仍然有用。

我觉得团队也可以这么问。界面和服务如果总要一起改，放在一起负责可能更顺。一个共享支付系统，却对很多产品都有责任；把它塞进某个产品团队，可能制造另一种依赖。

微服务原本就想要围绕业务能力组织能自主交付的团队。Fowler 讲的 inverse Conway maneuver，也是先调整组织，去促成想要的架构。划团队时，我更想先定责任，再考虑人数和服务数量。

我会重新看那些每次改动都需要共同拍板的边界，同时检查边界原来提供了什么知识或保护。有些分工是在让大规模协作成为可能。删掉以后，上下文和风险反而可能压到一小群人身上。

## 自治，也可以保留深度专家

Block 提出过一种安排：保留深度专家，同时给一个 DRI 跨团队问题的责任。文中的例子，是一项为期 90 天的任务，负责人有权调动几个团队的资源。

这是一个组织设计提案，还不能拿来证明它已经成功。但它提供了“人人都变成通才”之外的一种做法：保留专业能力，给某个人明确的结果、有限的时间，以及协调这件事的权力。

Anthropic 对 agent 系统也提出了类似分工。领域团队可以维护 skills 和 tools，一个小的中央团队负责 system prompt 和端到端质量。几个团队都能贡献，不必每个团队各造一个接管对话的 agent。

这些安排照样需要处理优先级。如果两个产品都需要同一位专家、同一个平台，仍然得有人拍板。换个岗位名称，或者人人配一个私人 agent，不会自动把这个权力分配好。我关心的是，一个团队能不能在清楚的范围内做事、得到帮助，而不用每个常规步骤都从头谈一遍。

## 先弄清交接在做什么，再考虑删

开头漏掉交付日期的例子，说明一次交接可能带着什么：信息，或者一项光看流程图不容易发现的检查。

有些常规改动，审批是在执行一条稳定的规则，可以考虑交给测试或获授权的工具。有些改动，reviewer 是在判断数据迁移安不安全、这个功能该不该做，或者它有没有违背对用户的承诺。

删审批以前，我会先把这些情况分开。适合重复执行的检查，尽量做得便宜、自动；检查没有覆盖的判断，仍然明确由谁负责。

测试、权限和回滚，也需要花功夫设计。它们让一个团队能自主处理更多低风险的事。写代码的循环变快了，验证却跟不上，也可能把更多工作送给负责收拾问题的人。

而且得看完整流程。局部 eval 都通过，也可能有一个客户任务失败；PR 数量挺漂亮，也可能有一条越排越长的 review 队列。需要有人负责端到端验收。

## 从一个能学到东西的小实验开始

我没有在 startup 工作过，对它们灵活性的想象，仍然有主观臆断。小团队做新项目，和一个团队维护成熟系统，面对的工作也不同。共享数据库和没写下来的业务规则，不会因为替换代码容易生成就消失。

如果要试，我会先选一个范围明确的流程，讲清决策权和风险边界。同等质量下，测完整交付时间，把等待、返工和上线后的问题一起算进去。再看收益有没有依赖别的团队额外干活，或者提前建设的验证设施。

评价体系也得一起看。如果奖励代码量、可见的 AI 活动，人就有理由把这两样做得更多。我希望消掉一项依赖、减少重复维护、少出几次故障，也能算成绩。Conway 自己就提出过，应该奖励那些让设计组织保持精简、灵活的管理者。

实验成功，可能说明责任范围可以放大。实验失败，也可能说明测试不够、需求不清，或者有一条专业边界值得保留。单看人头数，分不出是哪一种。

我会先挑一次交接，看看它究竟负责了什么。

</div>
