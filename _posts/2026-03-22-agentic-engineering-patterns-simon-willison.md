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

{% include bilingual.html %}

<div class="lang-en" markdown="1">

Simon Willison (Django co-creator, datasette author) distills his hands-on patterns for using AI coding agents like Claude Code and OpenAI Codex. The guide covers five areas: principles, testing & quality, understanding code, annotated prompts, and appendices. See also: [HN discussion](https://news.ycombinator.com/item?id=47243272).

---

## I. Principles

### 1. Writing Code Is Cheap Now

AI agents fundamentally change software economics — writing code is now nearly free, but writing *good* code remains expensive. Good code means: correct, tested, documented, solving the right problem, handling edge cases, simple enough, maintainable, and meeting non-functional requirements (security, reliability, accessibility).

The paradigm shift: past engineering decisions — both micro (should I refactor? should I write a test?) and macro (project planning, feature evaluation) — were all based on "writing code is expensive." Now you can spin up multiple agent sessions in parallel to explore approaches. "The worst outcome is learning it doesn't work ten minutes later."

The challenge: the industry needs new habits and practices to harness agent capabilities while maintaining strict quality standards.

### 2. Hoard Things You Know How to Do

"Knowing something is theoretically possible" and "having seen it run with your own eyes" are completely different. Build a collection of working examples — blog posts, GitHub repos (Willison has 1000+), tool sites, research repos — each becomes a reusable building block.

The most powerful pattern: have agents recombine multiple working codebases. His OCR tool combined Tesseract.js (OCR) and PDF.js (PDF rendering) — two existing JS libraries merged into one unified solution. Document once, agents deploy repeatedly.

---

## II. Testing & Quality

### 3. Red/Green TDD

TDD is critical for AI agents because agents risk generating non-functional code or adding unwanted features. TDD mitigates this via automatic verification:

- **Red phase:** Write failing tests first — proving the test actually checks new functionality
- **Green phase:** Implement code to make all tests pass

Skipping the red phase means your test might have passed from the start — rendering it useless. Practical prompt: `"Build a Python function to extract headers from a markdown string. Use red/green TDD."`

### 4. First Run the Tests

The four-word mantra: start every session with "First run the tests." The chain reaction:

1. Forces the agent to find and run tests — establishing test awareness
2. Reveals project scale and complexity through test count
3. Sets a test-centric mindset for the session
4. Activates the model's built-in quality discipline

"If code has never been executed, it working in production is pure luck."

---

## III. Understanding Code

### 5. Linear Walkthroughs

When you've vibe-coded a project or inherited an unfamiliar codebase, have the agent read the source and generate a structured file-by-file walkthrough document. Even a 40-minute vibe-coded toy project becomes a learning opportunity after a walkthrough. "AI making code faster to write" doesn't mean "you don't need to understand the code."

### 6. Interactive Explanations

**The problem: cognitive debt.** Agent-generated code you don't understand becomes a black box blocking future development. **The solution:** Have the agent create interactive visualizations to explain algorithms.

Willison had Claude Code generate an interactive HTML page to step through a word-cloud placement algorithm (Archimedean spiral + random angle offset) — with pause, speed control, and frame-by-frame playback. "A good coding agent can generate these on demand to explain code — whether it wrote it or someone else did."

---

## IV. Annotated Prompts

A complete prompt case study (sent from an iPhone):

> "gif-optimizer.html Compile gifsicle to WASM, then build a web page that lets you open or drag-drop an animated GIF onto it..."

Key techniques:
- **Filename first** — `gif-optimizer.html` as the opening word tells the agent the output format and project structure
- **Leverage agent knowledge** — "Compile gifsicle to WASM" relies on the agent knowing gifsicle (a 30-year-old compression tool) and the Emscripten toolchain
- **Integrate testing** — the prompt includes `"Run 'uvx rodney --help'"` to ensure the agent tests during development
- **Iterate** — follow-up requests to move build scripts to subdirectories, commit WASM bundles, add attribution

---

## V. Appendix: Custom Instructions

Willison's Artifacts custom instructions: always vanilla HTML + JS (no React), CSS with 2-space indent + `box-sizing: border-box`, 16px input fonts + Helvetica, JS with module syntax + 2-space indent.

For proofreading: check spelling, grammar, repetition, logic errors, factual inaccuracies, weak arguments, bad links. Importantly, **he never lets LLMs ghostwrite opinion pieces or first-person blog posts** — only proofread and update technical docs.

---

## Takeaways

1. **"First run the tests"** should become the opening line of every Claude Code session, especially when modifying existing code.
2. **Hoard working examples.** Your Second Brain can serve as a "solution library" — document each solved problem, and future agents can recombine them.
3. **Interactive explanations.** For complex logic (data pipelines, algorithms), have agents generate visualizations to build understanding.
4. **Cheap code != cheap good code.** Agents generate fast, but verification, testing, and architecture remain human responsibilities.
5. **Good prompts aren't long essays** — they're precise anchors: filename + test command + existing examples.

</div>

<div class="lang-zh lang-hidden" markdown="1">

Simon Willison（Django 联合创始人、datasette 作者）总结了他使用 Claude Code、OpenAI Codex 等 AI 编程代理的实战模式。全文分为五个板块：原则、测试与质量、理解代码、带注释的提示词、附录。参见：[HN 讨论](https://news.ycombinator.com/item?id=47243272)。

---

## 一、原则

### 1. 写代码现在很便宜了

- **核心论点**：AI 代理从根本上改变了软件开发的经济学。"写代码"本身几乎免费了，但"写好代码"依然昂贵。
- **好代码的定义**：功能正确、有测试、有文档、解决正确的问题、处理边界情况、足够简单、可维护、满足非功能性需求（安全、可靠性、无障碍等）。
- **范式转变**：过去工程师的微观决策（要不要重构、要不要写测试）和宏观决策（项目规划、功能评估）都基于"写代码很贵"的假设。现在可以并行启动多个代理会话来尝试——"最坏的结果是十分钟后发现不行"。
- **挑战**：行业需要建立新的习惯和实践来利用 AI 代理的能力，同时保持代码质量的严格标准。

### 2. 囤积你知道怎么做的事

- **核心洞察**："知道某件事理论上可行"和"亲眼见过它跑起来"是完全不同的。
- **建立你的收藏库**：博客记录、GitHub 仓库（Willison 有 1000+ 个）、工具站点、研究仓库——每个都是可复用的"积木"。
- **重组示例**：最强大的用法是让代理把多个已有的可运行代码组合起来。例如他的 OCR 工具就是把 Tesseract.js（OCR）和 PDF.js（PDF 渲染）两个已有的 JS 库合并成一个统一方案。
- **代理放大效应**：代理可以搜索你的文档、拉取远程代码、整合多个样本、在本地执行——你只需文档化一次，代理就能反复部署。

---

## 二、测试与质量

### 3. 红/绿 TDD

- **为什么 TDD 对 AI 代理至关重要**：代理面临特殊风险——可能生成不能用的代码、或加了不需要的功能。TDD 通过自动验证来缓解这些问题。
- **红绿流程**：
  - **红色阶段**：先写测试，确认测试**失败**（证明测试确实在检验新功能）
  - **绿色阶段**：实现代码，让所有测试**通过**
- **关键**：跳过红色阶段 = 测试可能一开始就通过了 = 测试形同虚设。
- **实用提示词**：`"Build a Python function to extract headers from a markdown string. Use red/green TDD."`

### 4. 先跑测试

- **四字咒语**：每次会话开头说 `"First run the tests"` 或 `"Run 'uv run pytest'"`。
- **连锁效果**：
  1. 强制代理找到并执行测试 → 建立测试意识
  2. 通过测试数量暴露项目规模和复杂度
  3. 给代理一个"以测试为核心"的思维定式
  4. 激活模型内置的质量纪律
- **核心论断**："如果代码从未被执行过，它能在生产中工作纯属运气。"

---

## 三、理解代码

### 5. 线性走读

- **场景**：你 vibe coded 了一个项目、或拿到一个不熟悉的代码库——需要理解它怎么工作。
- **方法**：让代理读源码，生成一个结构化的逐文件走读文档。
- **价值**：即使是 40 分钟 vibe coded 的玩具项目，走读后也能变成探索新技术栈的学习机会。"AI 让代码写得更快"不代表"你不需要理解代码"。

### 6. 交互式解释

- **问题：认知债务**：代理生成的代码你不理解 → 成为黑箱 → 阻碍未来开发。
- **解法**：让代理创建**交互式可视化**来解释算法。
- **示例**：Willison 用 Claude Code 生成了一个 Rust 词云工具，但"阿基米德螺线放置+随机角度偏移"这段描述太抽象。于是让代理生成了一个交互式 HTML 页面，可以暂停、调速、逐帧播放词云的放置过程。
- **核心洞察**："一个好的编程代理可以按需生成这些来解释代码——无论是它自己写的还是别人写的。"

---

## 四、带注释的提示词

一个完整的提示词案例分析（从 iPhone 发送）：

> "gif-optimizer.html Compile gifsicle to WASM, then build a web page that lets you open or drag-drop an animated GIF onto it..."

**关键技巧**：
- **文件名先行**：`gif-optimizer.html` 作为第一个词 → 代理自动理解输出格式和项目结构
- **利用代理的知识**："Compile gifsicle to WASM" → 代理知道 Gifsicle（30 年历史的压缩工具）和 Emscripten 工具链
- **测试集成**：提示词中包含 `"Run 'uvx rodney --help'"` → 确保代理在开发中就测试
- **迭代精炼**：后续要求把构建脚本放到子目录、确保 WASM bundle 被提交、添加归属声明

---

## 五、附录：常用提示词

Willison 的 Artifacts 自定义指令：永远不用 React → 纯 HTML + vanilla JavaScript，CSS 用 2 空格缩进 + `box-sizing: border-box`，输入框 16px 字体 + Helvetica，JS 用 module 语法 + 2 空格缩进。

校对自定义指令：检查拼写、语法、重复措辞、逻辑错误、事实不准确、弱论证、坏链接。**重要原则**：Willison 明确不让 LLM 代写观点性内容或第一人称博文——只做校对和技术文档更新。

---

## 要点总结

1. **"先跑测试"**：这个四字咒语应该成为每次 Claude Code 会话的开场白，尤其在修改已有代码时。
2. **囤积可运行示例**：你的 Second Brain 可以充当"解决方案库"——每次解决问题后记录下来，未来代理可以重组。
3. **交互式解释**：对于复杂逻辑（数据管道、算法），可以让代理生成可视化来帮助理解。
4. **写代码便宜了 ≠ 好代码便宜了**：代理能快速生成代码，但验证、测试、架构设计仍是人的责任。
5. **好的提示词不是长篇大论**——而是精确的锚点：文件名 + 测试命令 + 已有示例。

</div>
