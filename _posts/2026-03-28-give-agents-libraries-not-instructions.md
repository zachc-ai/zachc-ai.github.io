---
layout: post
title: "Give Agents Libraries, Not Instructions"
title_zh: "给 Agent 库，而非指令"
description: "Why helper scripts in a skill folder beat repeated instructions, and how CLI-Anything takes the idea to whole desktop apps."
description_zh: "同样的指令别给 agent 写第二遍，做成脚本库放进 skill，让它专心做组合。"
date: 2026-03-28
categories: tech
tags: [ai, engineering]
bilingual: true
narration:
  en:
    src: /assets/audio/give-agents-libraries-not-instructions.en.mp3
    duration: 136
  zh:
    src: /assets/audio/give-agents-libraries-not-instructions.zh.mp3
    duration: 138
sources:
  - title: "Thariq on X — How We Use Skills"
    url: "https://x.com/trq212/status/2033949937936085378"
  - title: "CLI-Anything (GitHub)"
    url: "https://github.com/HKUDS/CLI-Anything"
---

<div class="lang-en" markdown="1">

In Anthropic's write-up on how they use skills, one line stood out: "one of the most powerful tools you can give Claude is code." When a skill ships with runnable scripts and helper functions, Claude stops burning tokens rewriting boilerplate data-fetching code from scratch. It calls what's already there and spends its attention on the actual question.

Say a data science skill includes helpers for pulling event logs. Ask "What happened on Tuesday?" and Claude doesn't spend half a turn writing API glue. It writes a short script composing the existing functions: filter, aggregate, inspect.

## Turn repeated steps into a library

Look for the operations you keep explaining to agents over and over: API calls, data transforms, file plumbing. Pull them into a script library inside the skill folder and document what's available in `SKILL.md`. Now the agent composes working pieces instead of reinventing them every session.

That moves your token budget from rebuilding plumbing to combining building blocks, which stretches both your context window and your patience a lot further.

## CLI-Anything pushes it all the way

CLI-Anything (from HKUDS, with 21.5k GitHub stars) takes this idea to its literal extreme. A 7-phase automated pipeline wraps desktop software into an installable CLI package. Run `pip install`, and an agent can drive Blender, GIMP, or OBS through structured JSON commands without ever touching the underlying GUI or internal APIs.

Each generated CLI ships with its own `SKILL.md` for discovery, a REPL for exploring commands, and undo/redo so a bad state stays reversible. The library literally *is* the CLI package.

My simple rule of thumb now: the second time I catch myself writing the same kind of prose instructions to an agent, I stop and turn them into a callable script instead. Instructions vanish when the chat ends. Libraries stick around and compose.

</div>

<div class="lang-zh lang-hidden" markdown="1">

Anthropic 分享内部怎么用 skill 时，有句话挺扎眼：“你能给 Claude 的最强大的工具之一，就是代码。”如果一个 skill 文件夹里直接带着能跑的脚本和辅助函数，Claude 就不用每回花一堆 token 重新写拉数据的样板代码，直接调用现成的，把力气留给真正要回答的问题。

比如一个数据科学 skill 自带拉事件日志的函数。你问一句“周二出了啥事？”，Claude 不用先从零拼接口，直接写段小脚本把现成函数串起来：过滤、聚合、分析。

## 把重复交代的步骤抽成库

翻翻自己日常的工作流，API 调用、数据清洗、文件处理这些反复给 agent 解释的步骤，抽出来做成脚本库塞进 skill 文件夹，再在 `SKILL.md` 里列清楚怎么调就行。以后 agent 自己就能找来拼着用，不用每次开新对话都重造一遍轮子。

这么一换，token 和上下文窗口就从“每次重搭脚手架”省出来，全花在组合和判断上。

## CLI-Anything 把这套推到了头

HKUDS 的开源项目 CLI-Anything（GitHub 上 21.5k star）直接把这件事做绝了。它用一条 7 步自动化流水线，把任意桌面软件封成一个能 `pip install` 的 CLI 包。装完以后，agent 不用学软件原本的界面或底层 API，直接发结构化 JSON 命令就能驱动 Blender、GIMP、OBS 这些工具。

每个生成的 CLI 还自带一份 `SKILL.md` 方便发现、一个 REPL 用来摸索命令，外加 undo/redo，改坏了随时能撤回。这大概是“给 agent 库而不是指令”最彻底的写法：库本身就是那个 CLI 包。

我现在给自己定了个很简单的门槛：同一类文字指令，只要发现自己在给 agent 写第二遍，就停下来把它做成能直接调的脚本。指令聊完就散了，库会留下来，还能互相拼着长。

</div>
