---
layout: post
title: "Give Agents Libraries, Not Instructions"
title_zh: "给 Agent 库，而非指令"
date: 2026-03-28
categories: tech
tags: [claude-code, ai, tooling]
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

**A concrete example.** A data science skill includes helpers for fetching events. User asks: "What happened on Tuesday?" Claude doesn't write the fetching code. It writes a script that composes existing functions — filter, aggregate, analyze. Tokens land on logic and judgment, not plumbing.

## The technique

Find the operations you keep repeating in your workflows: API calls, data transforms, file operations. Pull them into a script library inside the skill folder. Document the library in SKILL.md. The agent finds them and composes them, instead of reinventing them every session.

The shift is from _reconstruction_ to _composition_. A much higher-leverage use of both tokens and context window.

## CLI-Anything: the logical extreme

CLI-Anything (HKUDS, 21.5k GitHub stars) pushes this to the wall. A 7-phase automated pipeline turns any desktop software into an installable CLI package. After `pip install`, the agent can drive Blender, GIMP, OBS, and others through structured JSON commands.

The agent never learns the underlying API or GUI. It calls a pre-built CLI library. Each generated CLI ships with:

- A **SKILL.md** for auto-discovery
- A **REPL** for exploration
- **Undo/redo** for safe state management

This is the most literal version of "give agents libraries": the library *is* the CLI package.

## The principle

Anywhere you catch yourself writing the same kind of instructions to an agent twice, extract a callable library instead. Instructions are consumed once and forgotten. Libraries persist across sessions and compose with each other.

**Sources:**
- [Thariq on X — How We Use Skills](https://x.com/trq212/status/2033949937936085378)
- [CLI-Anything (GitHub)](https://github.com/HKUDS/CLI-Anything)

</div>

<div class="lang-zh lang-hidden" markdown="1">

> 把脚本和辅助函数放进 skill 文件夹。Agent 的 token 就能花在组合和判断上，不再重建样板代码。

## 核心洞察

Anthropic 发现了一件挺具体的事："给 Claude 最强大的工具之一就是代码。"当 skill 里带着能执行的脚本和函数库，Claude 就不用花 token 重新生成获取数据的代码了。它直接调已有的函数，把精力放在更高阶的问题上。

**举个具体例子。** 一个数据科学 skill 自带获取事件的辅助函数。用户问"周二发生了啥？"，Claude 不写数据获取那一段。它写一个组合脚本：过滤、聚合、分析。Token 花在逻辑和判断上，不是水管上。

## 技巧

把工作流里反复出现的操作识别出来：API 调用、数据转换、文件操作。提取成一个脚本库，放进 skill 文件夹。库的内容在 SKILL.md 里记录一下。Agent 自己会发现并组合，不用每次会话都重新发明一遍。

精力就从**重建**挪到了**组合**。Token 和上下文窗口的杠杆都高一截。

## CLI-Anything：逻辑极限

CLI-Anything（HKUDS，21.5k GitHub stars）把这思路推到墙边。一条 7 步自动化流水线，把任意桌面软件变成一个可安装的 CLI 包。`pip install` 完，agent 就能通过结构化 JSON 命令开 Blender、GIMP、OBS 这些。

Agent 不用学软件本身的 API 或者 GUI。它调一个预先构建好的 CLI 库就行。每个生成的 CLI 都自带：

- **SKILL.md** 用于自动发现
- **REPL** 用于探索
- **Undo/redo** 用于安全的状态管理

这是"给 agent 库而不是指令"最字面的实现：库就是 CLI 包本身。

## 原则

只要你发现自己在反复给 agent 写同一类指令，就该把它提成一个可调用的库。指令被消费一次就没了。库跨会话留着，还能互相组合。

**来源：**
- [Thariq on X — How We Use Skills](https://x.com/trq212/status/2033949937936085378)
- [CLI-Anything (GitHub)](https://github.com/HKUDS/CLI-Anything)

</div>
