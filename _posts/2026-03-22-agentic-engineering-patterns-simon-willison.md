---
layout: post
title: "Agentic Engineering Patterns — Simon Willison"
title_zh: "AI 代理工程实战模式 — Simon Willison"
description: "Simon Willison on coding agents: code got cheap but good code didn't, so hoard working examples, use red/green TDD and run the tests first."
description_zh: "Simon Willison 讲 agent 编程：代码便宜了，好代码可没便宜，所以先跑测试、囤能跑的例子。"
date: 2026-03-22
categories: digest
tags: [ai, engineering, productivity]
source: "https://simonwillison.net/guides/agentic-engineering-patterns/"
bilingual: true
narration:
  en:
    src: /assets/audio/agentic-engineering-patterns-simon-willison.en.mp3
    duration: 413
  zh:
    src: /assets/audio/agentic-engineering-patterns-simon-willison.zh.mp3
    duration: 403
---

<div class="lang-en" markdown="1">

Simon Willison (co-creator of Django and author of Datasette) wrote up his hands-on patterns for working with coding agents like Claude Code and OpenAI Codex. The guide spans five areas: principles, testing and quality, understanding code, annotated prompts, and custom instructions. There's also an active [HN discussion](https://news.ycombinator.com/item?id=47243272).

## I. Principles

### 1. Writing code is cheap now

Agents flip the old economics. Typing code is basically free; writing *good* code isn't. Good still means correct, tested, documented, solving the actual problem, handling edge cases, staying simple enough to maintain, and clearing security, reliability, and accessibility bars.

Almost every engineering habit, from micro-decisions like "should I refactor or write a test?" to macro ones like project planning and feature evaluation, assumed code was expensive to write. That assumption is gone. You can spin up parallel agent sessions to test competing ideas. As Willison puts it: "The worst that can happen is you check ten minutes later and find that it wasn't worth the tokens."

What's lagging are our habits.

### 2. Hoard things you know how to do

"Knowing that something is theoretically possible is not the same as having seen it done for yourself." Keep a stash of working examples: blog posts, GitHub repos (Willison has over a thousand), small tool sites, research repos. Each one becomes a reusable block.

The strongest move is letting agents stitch working codebases together. His browser OCR tool combines Tesseract.js (OCR) and PDF.js (PDF rendering). Document an example once, and you can recombine it forever.

## II. Testing and quality

### 3. Red/green TDD

TDD matters more with agents than without, because agents routinely make two mistakes: shipping code that doesn't run, or inventing features nobody asked for. TDD catches both.

- **Red:** write the failing test first so you know it actually exercises the new behavior.
- **Green:** write the code to make it pass.

Skip red and you can easily stare at a test that was passing all along. One line gets an agent into the loop: `"Build a Python function to extract headers from a markdown string. Use red/green TDD."`

### 4. First run the tests

Open a session with four words: `"First run the tests."` (or `"Run 'uv run pytest'"`). That single opener does four jobs at once:

1. Forces the agent to locate and execute the test suite, putting test awareness in context from turn one.
2. Gives the agent a quick read on how big and messy the repo is from the test count.
3. Frames the whole session around verification.
4. Wakes up the quality discipline already trained into the model.

As Willison writes: "If the code has never been executed it's pure luck if it actually works when deployed to production."

## III. Understanding code

### 5. Linear walkthroughs

If you vibe-coded a prototype or inherited an unfamiliar repo, ask the agent to read the source and generate a file-by-file walkthrough. A 40-minute throwaway build turns into a real learning session once you walk through it. Faster code generation doesn't excuse skipping comprehension.

### 6. Interactive explanations

The real risk is cognitive debt: agent-written code you don't understand turns into a black box blocking whatever you want to build next. Willison's fix is asking the agent to build an interactive visualization of the algorithm.

He had Claude Code build a standalone HTML page stepping through a word-cloud placement algorithm (Archimedean spiral plus random angle offset) with pause, speed controls, and frame-by-frame playback. "A good coding agent can produce these on demand to help explain code — its own code or code written by others."

## IV. Annotated prompts

A real prompt Willison sent from his iPhone:

> "gif-optimizer.html Compile gifsicle to WASM, then build a web page that lets you open or drag-drop an animated GIF onto it..."

Why it worked:

- Filename first: leading with `gif-optimizer.html` pins down the output format and structure immediately.
- Lean on what the agent already knows: "Compile gifsicle to WASM" works because the model knows gifsicle (a 30-year-old compression tool) and Emscripten.
- Bake in testing: `"Run 'uvx rodney --help'"` pushes the agent to test as it builds.
- Iterate in follow-ups: move build scripts into subdirectories, commit the WASM bundle, add attribution.

## V. Custom instructions

Willison's Artifacts setup sticks to vanilla HTML and JS (no React), CSS with 2-space indents and `box-sizing: border-box`, 16px Helvetica inputs, and ES module JS with 2-space indents.

For proofreading, he checks spelling, grammar, repetition, logic gaps, factual slips, weak arguments, and dead links. The rule I want to underline: **he never lets LLMs ghostwrite opinion pieces or first-person blog posts.** Proofread and update technical docs, yes. Fake his own voice, no.

## What I'm taking from this

`"First run the tests"` is going at the top of every coding-agent session I open, especially when touching existing code.

"Hoard working examples" also reframed my Second Brain for me. I used to treat those notes purely as personal memory; now they double as a solution library an agent can pull from and recombine.

Two harder habits to keep: building quick interactive visualizations to pay down cognitive debt even when nobody else will see them, and remembering that cheap typing doesn't make verification or architecture any cheaper.

The prompt example surprised me most. No long essays, just concrete anchors (filename, test command, working examples). Good anchors beat long instructions.

</div>

<div class="lang-zh lang-hidden" markdown="1">

Simon Willison（Django 联合创始人、Datasette 作者）整理了一套用 Claude Code、OpenAI Codex 这类编程 agent 的实战方法。全文五个板块：原则、测试与质量、理解代码、带注释的提示词、自定义指令，旁边还有场挺热闹的 [HN 讨论](https://news.ycombinator.com/item?id=47243272)。

## 一、原则

### 1. 写代码便宜了，好代码没有

有了 agent，旧账全得重算。写代码几乎白给，但写**好**代码依然贵。所谓“好”，依然是功能正确、有测试有文档、解决的是真问题、边界情况兜得住、结构简单好维护，安全性和可靠性也过关。

过去几乎所有工程习惯，小到“要不要重构、要不要补测试”，大到排期和方案评估，都建立在“写代码很贵”的前提下。现在前提没了，完全可以并行开几个 agent 会话试不同方向。用他的话说：“最坏的结果，也就是十分钟后回来一看，这点 token 花得不值。”

眼下没跟上的，是我们的旧习惯。

### 2. 攒能跑起来的例子

“知道某件事理论上可行”跟“亲眼看它跑起来”是两码事。平时多攒能跑通的例子：博客笔记、GitHub 仓库（Willison 自己囤了上千个）、小工具页面、研究仓库，每个都是一块随时能复用的积木。

最省事的玩法，是让 agent 把现成的可运行项目拼在一起。他的浏览器 OCR 工具，就是把 Tesseract.js（识别文字）和 PDF.js（渲染 PDF）缝起来的。把例子记下来一次，后面能反复拿来组合。

## 二、测试与质量

### 3. 红/绿 TDD

用 agent 写代码，TDD 比平时更值钱。agent 最常犯两类毛病：写出的代码根本跑不通，或者顺手加一堆你没要的功能。TDD 两样都能拦住。

- **红：** 先写测试，确认它先失败，证明测试真的在验新行为。
- **绿：** 再写代码让它过。

跳过“红”这一步，你盯着看的可能是一个本来就能过的空测试。一句话就能让 agent 走这套流程：`"Build a Python function to extract headers from a markdown string. Use red/green TDD."`

### 4. 开场先跑测试

会话第一句就扔四个词：`"First run the tests"`（或者 `"Run 'uv run pytest'"`）。这一下能同时办成四件事：

1. 逼着 agent 先找测试套件并跑起来，从第一轮就把测试意识拉进上下文。
2. 从测试数量上，agent 立刻能摸清这个仓库有多大、有多复杂。
3. 整场会话从头就围着验收转。
4. 把模型本身自带的质量纪律叫醒。

就像他说的：“代码要是从来没跑过，它在生产环境里能工作纯粹靠运气。”

## 三、理解代码

### 5. 逐文件走读

不管是自己 vibe code 出来的小工具，还是接手一个陌生仓库，直接让 agent 读完源码，吐一份逐文件的走读文档。花 40 分钟糊出来的玩具，走读一遍也能变成扎实的复习材料。写代码变快，不代表可以跳过“看懂”这一步。

### 6. 用交互式可视化还认知债

真正的隐患是认知债务：agent 写出来的代码你看不懂，它就变成黑箱，卡住你接下来想做的事。Willison 的解法，是让 agent 直接把复杂算法做成交互式可视化。

他让 Claude Code 写了个单文件 HTML 页面，把词云布局算法（阿基米德螺线加随机角度偏移）做成可暂停、可调速、可逐帧回放的演示。“一个好的编程 agent 可以按需生成这种东西来解释代码，不管是它自己写的还是别人写的。”

## 四、带注释的提示词

他晒了一条直接用 iPhone 发的真实提示词：

> “gif-optimizer.html Compile gifsicle to WASM, then build a web page that lets you open or drag-drop an animated GIF onto it...”

这里面真正起作用的是四下：

- 文件名打头：第一个词写 `gif-optimizer.html`，输出格式和项目形态立刻定死。
- 借力模型本来就知道的东西：“Compile gifsicle to WASM”之所以管用，是因为模型熟 gifsicle（30 年老牌压缩工具）和 Emscripten 工具链。
- 把测试塞进去：`"Run 'uvx rodney --help'"` 逼着 agent 边写边测。
- 后续分步迭代：再把构建脚本挪进子目录、提交 WASM 包、补上署名。

## 五、自定义指令

Willison 给 Artifacts 定的偏好非常克制：一律原生 HTML 加 vanilla JS（不用 React），CSS 2 空格缩进配 `box-sizing: border-box`，输入框 16px Helvetica，JS 用 module 语法配 2 空格缩进。

校对时则查拼写、语法、重复、逻辑漏洞、事实错误、论证薄弱以及空链接。有一条我特别想划重点：**他从来不让 LLM 代写观点文章或第一人称博客。** 校对和更新技术文档可以，假装他的口吻代笔不行。

## 我从这里带走的几条

`"First run the tests"` 以后会直接放在每次编程 agent 会话的开头，改老代码时尤其如此。

“攒能跑的例子”也改变了我对 Second Brain 的看法。以前我只把它当个人记忆库，现在发现它同时还是 agent 可以拿来重新拼装的零件库。

另外两条知道容易、做到难：一是哪怕只有自己看，也值得把复杂算法做成交互式可视化来还认知债；二是打字便宜了，不等于验证和架构变便宜了。

最反直觉的是那条提示词案例。根本用不着长篇大论，给几个准锚点（文件名、测试命令、现成例子），比写满屏指令管用得多。

</div>
