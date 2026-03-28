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

> Store scripts and helper functions in skill folders so agents spend tokens on composition and decision-making, not reconstructing boilerplate.

## The Insight

Anthropic found that "one of the most powerful tools you can give Claude is code." When skills include executable scripts and function libraries, Claude doesn't need to spend tokens generating data-fetching code from scratch — it calls existing functions and focuses on composing them to answer higher-level questions.

**Concrete example:** a data science skill includes helper functions to fetch data from an event source. When the user asks "What happened on Tuesday?", Claude doesn't write data-fetching code — it generates a script composing existing functions for filtering, aggregation, and analysis. Tokens spent on logic and judgment, not infrastructure.

## The Technique

Identify repetitive operations in your workflows (API calls, data transforms, file operations), extract them into script libraries within the skill folder, and document them in the SKILL.md. The agent discovers and composes them instead of reinventing them each session.

This shifts agent effort from _reconstruction_ to _composition_ — a fundamentally higher-leverage use of tokens and context window.

## CLI-Anything: The Logical Extreme

CLI-Anything (HKUDS, 21.5k GitHub stars) takes this to its logical extreme: a 7-phase automated pipeline that transforms any desktop software into an installable CLI package. `pip install` and the agent can control Blender, GIMP, OBS, etc. through structured JSON commands.

The agent doesn't learn the software's API or GUI; it calls a pre-built CLI library. Each generated CLI includes:
- A **SKILL.md** for auto-discovery
- A **REPL** for exploration
- **Undo/redo** for safe state management

This is the most literal implementation of "give agents libraries": the library IS the CLI package.

## The Principle

The pattern generalizes: anywhere you find yourself writing the same kind of instructions repeatedly for an agent, you should extract that into a callable library instead. Instructions are consumed once and forgotten. Libraries persist across sessions and compose with each other.

**Sources:**
- [Thariq on X — How We Use Skills](https://x.com/trq212/status/2033949937936085378)
- [CLI-Anything (GitHub)](https://github.com/HKUDS/CLI-Anything)

</div>

<div class="lang-zh lang-hidden" markdown="1">

> 在 skill 文件夹中存储脚本和辅助函数，让 agent 把 token 花在组合和决策上，而非重建样板代码。

## 核心洞察

Anthropic 发现"给 Claude 代码是最强大的工具之一"。当 skill 包含可执行脚本和函数库时，Claude 不需要花 token 从头生成获取数据的代码——它可以直接调用已有函数，把精力花在组合这些函数来回答更高层次的问题上。

**具体例子：**数据科学 skill 包含一组从事件源获取数据的辅助函数。当用户问"周二发生了什么？"时，Claude 不需要写数据获取代码——它生成一个脚本来组合已有函数，做过滤、聚合和分析。Token 花在了逻辑和判断上，而不是基础设施上。

## 技巧

识别工作流中的重复操作（API 调用、数据转换、文件操作），将它们提取为 skill 文件夹内的脚本库，在 SKILL.md 中记录。Agent 发现并组合它们，而不是每次会话都重新发明。

这将 agent 的精力从_重建_转移到_组合_——一种从根本上更高杠杆的 token 和上下文窗口使用方式。

## CLI-Anything：逻辑极限

CLI-Anything（HKUDS，21.5k GitHub stars）将这个理念推到了逻辑极限：一条 7 步自动化流水线，将任意桌面软件转化为可安装的 CLI 包。`pip install` 后 agent 就能通过结构化 JSON 命令控制 Blender、GIMP、OBS 等。

Agent 不需要学习软件的 API 或 GUI，直接调用预构建的 CLI 库。每个生成的 CLI 都包含：
- **SKILL.md** 用于自动发现
- **REPL** 用于探索
- **Undo/redo** 用于安全操作

这是"给 agent 库而非指令"最字面的实现：库就是 CLI 包本身。

## 原则

这个模式可以泛化：凡是你发现自己反复为 agent 编写同类指令的地方，都应该提取为可调用的库。指令被消费一次就遗忘，库则跨会话持久存在且能互相组合。

**来源：**
- [Thariq on X — How We Use Skills](https://x.com/trq212/status/2033949937936085378)
- [CLI-Anything (GitHub)](https://github.com/HKUDS/CLI-Anything)

</div>
