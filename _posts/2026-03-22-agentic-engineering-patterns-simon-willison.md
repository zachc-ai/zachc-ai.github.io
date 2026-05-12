---
layout: post
title: "Agentic Engineering Patterns — Simon Willison"
title_zh: "AI 代理工程实战模式 — Simon Willison"
date: 2026-03-22
categories: digest
tags: [ai, engineering, testing, productivity]
source: "https://simonwillison.net/guides/agentic-engineering-patterns/"
bilingual: true
---

<div class="lang-en" markdown="1">

Simon Willison (Django co-creator, datasette author) wrote up his hands-on patterns for using AI coding agents — Claude Code, OpenAI Codex. Five sections: principles, testing & quality, understanding code, annotated prompts, appendices. Also: [HN discussion](https://news.ycombinator.com/item?id=47243272).

---

## I. Principles

### 1. Writing code is cheap now

Agents change the math. Writing code is basically free. Writing *good* code isn't. Good means: correct, tested, documented, solves the right problem, handles edge cases, simple enough, maintainable, and clears the non-functional bar (security, reliability, accessibility).

Almost every engineering habit — micro decisions like "should I refactor?" or "should I write a test?" and macro ones like project planning and feature evaluation — assumed code was expensive to write. That assumption is gone. You can spin up multiple agent sessions in parallel to try approaches. "The worst outcome is learning it doesn't work ten minutes later."

What's missing is the new habits to match.

### 2. Hoard things you know how to do

"Knowing something is theoretically possible" and "having seen it run with your own eyes" are completely different things. Build a stash of working examples: blog posts, GitHub repos (Willison has 1000+), tool sites, research repos. Each one is a reusable block.

The strongest pattern is letting agents recombine working codebases. His OCR tool stitched Tesseract.js (OCR) and PDF.js (PDF rendering) into a single thing. Document the example once, deploy it forever.

---

## II. Testing & Quality

### 3. Red/Green TDD

TDD matters more with agents than without, because agents can ship code that doesn't work or invent features you didn't ask for. TDD catches both.

- **Red:** write the failing test first. Confirms the test actually checks the new behavior.
- **Green:** make it pass.

Skip red and you might be staring at a test that was already passing — useless. A prompt that does the work: `"Build a Python function to extract headers from a markdown string. Use red/green TDD."`

### 4. First run the tests

A four-word session opener: "First run the tests." What it triggers:

1. The agent has to find and execute the test suite. Test awareness on by default.
2. The test count tells you how big and gnarly the project is.
3. It frames the whole session around tests.
4. Models have built-in quality discipline that this prompt actually wakes up.

"If code has never been executed, it working in production is pure luck."

---

## III. Understanding Code

### 5. Linear walkthroughs

You vibe-coded something. Or inherited a codebase. Ask the agent to read the source and produce a file-by-file walkthrough document. A 40-minute toy project becomes a learning opportunity once you walk through it. AI making code faster to *write* doesn't mean you can skip *understanding* it.

### 6. Interactive explanations

**The problem is cognitive debt.** Code the agent generated that you don't understand turns into a black box that blocks the next thing you want to build. **The fix:** ask the agent to build an interactive visualization of the algorithm.

Willison had Claude Code build an HTML page that stepped through a word-cloud placement algorithm — Archimedean spiral plus random angle offset — with pause, speed, and frame-by-frame playback. "A good coding agent can generate these on demand to explain code, whether it wrote it or someone else did."

---

## IV. Annotated Prompts

A full prompt case study (sent from an iPhone):

> "gif-optimizer.html Compile gifsicle to WASM, then build a web page that lets you open or drag-drop an animated GIF onto it..."

What's doing the work:
- **Filename first.** `gif-optimizer.html` as the opening word fixes the output format and project structure.
- **Lean on what the agent knows.** "Compile gifsicle to WASM" only works because the agent knows gifsicle (a 30-year-old compression tool) and the Emscripten toolchain.
- **Bake in testing.** `"Run 'uvx rodney --help'"` forces the agent to test as it builds.
- **Iterate.** Follow-ups: move build scripts to subdirectories, commit the WASM bundle, add attribution.

---

## V. Appendix: Custom Instructions

Willison's Artifacts custom instructions: always vanilla HTML + JS (no React), CSS with 2-space indent and `box-sizing: border-box`, 16px input fonts in Helvetica, JS with module syntax and 2-space indent.

For proofreading: check spelling, grammar, repetition, logic errors, factual inaccuracies, weak arguments, broken links. The line worth highlighting: **he never lets LLMs ghostwrite opinion pieces or first-person blog posts.** Proofread and update technical docs, yes. Author your voice, no.

---

## What I'm taking from this

"First run the tests" is going at the top of every Claude Code session I open from now on, especially when I'm modifying existing code.

The "hoard working examples" idea reframes my Second Brain as a solution library — every solved problem becomes a building block an agent can recombine. I'd been thinking of those notes as personal memory; they're also AI substrate.

Two harder-to-internalize ones: visualizations for complex algorithms aren't just teaching aids, they're how you escape cognitive debt. And cheap code isn't cheap good code — verification and architecture didn't get any easier just because typing did.

The prompt advice surprised me. Not long essays. Filename + test command + existing examples. Precise anchors do more work than instructions.

</div>

<div class="lang-zh lang-hidden" markdown="1">

Simon Willison（Django 联合创始人、datasette 作者）整理了他用 Claude Code、OpenAI Codex 这类 AI 编程代理的实战套路。全文五个板块：原则、测试与质量、理解代码、带注释的提示词、附录。也可以看：[HN 讨论](https://news.ycombinator.com/item?id=47243272)。

---

## 一、原则

### 1. 写代码现在很便宜了

Agent 改了帐怎么算。写代码基本免费了。但写**好**代码还是贵。"好"是说：功能正确、有测试、有文档、解决对了问题、处理过边界、够简单、能维护、安全可靠性无障碍这些非功能要求也过得去。

过去几乎每个工程习惯——小到"要不要重构""要不要写测试"，大到项目规划和功能评估——都建立在"写代码很贵"这个假设上。这假设现在没了。你可以并行开好几个 agent 会话去试不同方案。"最坏的结果，也就是十分钟后发现不行。"

缺的是配套的新习惯。

### 2. 囤积你知道怎么做的事

"知道某件事理论上可行"和"亲眼看它跑起来"是两码事。攒一份能跑的例子库吧：博客记录、GitHub 仓库（Willison 自己有 1000+ 个）、工具站点、研究仓库。每个都是一块能复用的积木。

最强的用法是让 agent 把这些可运行代码重新拼起来。他的 OCR 工具就是把 Tesseract.js 和 PDF.js 缝成一个东西。例子文档化一次，agent 反复部署。

---

## 二、测试与质量

### 3. 红/绿 TDD

TDD 在用 agent 的时候比平时更重要。原因是 agent 容易出两种问题：写出来的代码根本跑不了，或者顺手加了你没要的功能。TDD 两个都能挡。

- **红：** 先写测试，确认它**失败**。证明这个测试真的在检验新功能。
- **绿：** 写代码让它过。

跳过红那一步，你可能盯着一个一开始就通过的测试——废的。一句话就能让 agent 走完流程：`"Build a Python function to extract headers from a markdown string. Use red/green TDD."`

### 4. 先跑测试

一句四个词的开场白：`"First run the tests"`。或者 `"Run 'uv run pytest'"`。会触发一连串好事：

1. agent 得先找到测试套件、跑一遍。测试意识默认开启。
2. 测试数量直接告诉你这项目多大、多复杂。
3. 整个会话的基调就被 framing 成围绕测试转。
4. 模型其实自带质量纪律，这句话能把它叫醒。

"代码要是从来没跑过，它在生产里能工作就是运气。"

---

## 三、理解代码

### 5. 线性走读

你 vibe coded 了一个东西。或者拿到一个不熟的代码库。让 agent 读源码，写一份逐文件的走读文档。40 分钟 vibe coded 的小玩具，走读完也能变成学新东西的入口。AI 让代码写得更**快**，不代表你可以跳过**理解**那一步。

### 6. 交互式解释

**问题是认知债务。** Agent 写的代码你看不懂 → 变成黑箱 → 挡住下一个想做的事。**解法是**：让 agent 给这个算法做一个交互式可视化。

Willison 用 Claude Code 做了个 HTML 页面，把词云布局算法——阿基米德螺线加随机角度偏移——拆成了可暂停、可调速、可逐帧的过程。"一个好的编程 agent 可以按需生成这种东西来解释代码，不管是它自己写的还是别人写的。"

---

## 四、带注释的提示词

一个完整提示词案例（从 iPhone 发的）：

> "gif-optimizer.html Compile gifsicle to WASM, then build a web page that lets you open or drag-drop an animated GIF onto it..."

里面真正在干活的是这几下：

- **文件名先行。** `gif-optimizer.html` 作为第一个词，输出格式和项目结构就定了。
- **靠 agent 已经知道的东西。** "Compile gifsicle to WASM" 之所以能跑，是因为 agent 知道 gifsicle（30 年历史的压缩工具）和 Emscripten 工具链。
- **把测试塞进提示词。** `"Run 'uvx rodney --help'"` 逼 agent 边写边测。
- **迭代。** 后面追加要求：把构建脚本挪到子目录、把 WASM bundle commit 进去、加归属。

---

## 五、附录：常用提示词

Willison 的 Artifacts 自定义指令：永远不用 React，纯 HTML + vanilla JS；CSS 用 2 空格缩进加 `box-sizing: border-box`；输入框 16px、Helvetica；JS module 语法、2 空格缩进。

校对指令：拼写、语法、措辞重复、逻辑错误、事实不准、论证薄、链接坏。值得划重点的一条：**他从来不让 LLM 代写观点性内容或第一人称博客。**校对和更新技术文档可以，代笔自己的声音不行。

---

## 我从这里捡走的几样

"First run the tests" 准备直接挪进我每次 Claude Code 会话的开头，尤其是改老代码的时候。

"囤积能跑的例子"这条把我对 Second Brain 的定位整个改了：每个解过的问题都是 agent 能拼起来用的积木。之前我只把它当成自己的记忆，原来它还是 AI 的素材库。

还有两个不太好内化的：复杂算法做交互式可视化，不只是教学用的，是逃出认知债务的方式。还有就是写代码便宜，不等于"好代码"也便宜——验证、测试、架构这些一点没变简单。

最后是提示词那一段挺反直觉的。不是写长篇大论，而是给三个准确的锚点：文件名 + 测试命令 + 已有示例。这种精确比解释更有用。

</div>
