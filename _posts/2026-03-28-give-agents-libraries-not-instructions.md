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
sources:
  - title: "Thariq on X — How We Use Skills"
    url: "https://x.com/trq212/status/2033949937936085378"
  - title: "CLI-Anything (GitHub)"
    url: "https://github.com/HKUDS/CLI-Anything"
---

<div class="lang-en" markdown="1">

> Put scripts and helper functions in skill folders. Then agents spend tokens on composition and decision-making instead of rewriting boilerplate.

## The insight

Anthropic noticed something specific: "one of the most powerful tools you can give Claude is code." When a skill ships with executable scripts and function libraries, Claude stops spending tokens reinventing data-fetching code. It just calls what's already there. The tokens go into the higher-order question instead.

For example, a data science skill includes helpers for fetching events. A user asks: "What happened on Tuesday?" Claude doesn't write the fetching code. It writes a script that composes the existing functions: filter, aggregate, analyze.

## The technique

Find the operations you keep repeating in your workflows: API calls, data transforms, file operations. Pull them into a script library inside the skill folder. Document the library in SKILL.md. The agent finds the functions and composes them instead of reinventing them every session.

The shift is from _reconstruction_ to _composition_. A much higher-leverage use of both tokens and the context window.

## CLI-Anything: the logical extreme

CLI-Anything (HKUDS, 21.5k GitHub stars) pushes this all the way. A 7-phase automated pipeline turns any desktop software into an installable CLI package. After `pip install`, the agent can drive Blender, GIMP, OBS, and others through structured JSON commands.

The agent never learns the underlying API or GUI. It calls a pre-built CLI library. Each generated CLI ships with a SKILL.md for auto-discovery, a REPL for exploration, and undo/redo for safe state management.

This is the most literal version of "give agents libraries": the library *is* the CLI package.

## The principle

Any time you catch yourself writing the same kind of instructions to an agent twice, extract a callable library instead. Instructions are consumed once and forgotten. Libraries persist across sessions and compose with each other.

</div>

<div class="lang-zh lang-hidden" markdown="1">

> 把脚本和辅助函数放进 skill 文件夹。Agent 的 token 就能花在组合和判断上，不用再重写样板代码。

## 核心洞察

Anthropic 发现了一件挺具体的事：“你能给 Claude 的最强大的工具之一，就是代码。”如果 skill 里带着能执行的脚本和函数库，Claude 就不用花 token 重新生成获取数据的代码了。它直接调已有的函数，把精力放在更高阶的问题上。

举个例子，一个数据科学 skill 自带获取事件的辅助函数。用户问“周二发生了啥？”，Claude 不写数据获取那一段，直接写个脚本，把现成的函数串起来：过滤、聚合、分析。

## 技巧

把工作流里反复出现的操作识别出来：API 调用、数据转换、文件操作。提取成一个脚本库，放进 skill 文件夹。库的内容在 SKILL.md 里记录一下。Agent 自己会发现并组合，不用每次会话都重新造一遍轮子。

精力就从**重建**挪到了**组合**。同样的 token 和上下文窗口，能撬动的东西多了一大截。

## CLI-Anything：逻辑极限

CLI-Anything（HKUDS，21.5k GitHub stars）把这个思路推到了头。一条 7 步自动化流水线，把任意桌面软件变成一个可安装的 CLI 包。`pip install` 完，agent 就能通过结构化 JSON 命令操控 Blender、GIMP、OBS 这些软件。

Agent 不用学软件本身的 API 或者 GUI。它调一个预先构建好的 CLI 库就行。每个生成的 CLI 都自带一份 SKILL.md 供自动发现，一个 REPL 方便探索，还有 undo/redo，状态改坏了能撤回。

这是“给 agent 库而不是指令”最字面的实现：库就是 CLI 包本身。

## 原则

只要你发现自己在反复给 agent 写同一类指令，就该把它抽出来，做成一个能调用的库。指令用一次就没了。库跨会话留着，还能互相组合。

</div>
