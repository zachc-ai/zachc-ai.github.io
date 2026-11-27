---
layout: page
title: Projects
title_zh: 项目
permalink: /projects/
intro: "Public tools, writing workflows, and small experiments I've put together. Plenty of other AI tinkering lives in private setups; the pieces worth sharing end up here or on the blog."
intro_zh: "一些整理出来、可以公开看的个人项目和写作实验。日常折腾的大部分 AI 工具留在私人环境里，觉得值得分享的部分会放到这里或写成博客。"
---

<div class="lang-en" markdown="1">

<ul class="project-list">
  <li class="project-item">
    <div class="project-head">
      <h2 class="project-title"><a href="https://github.com/zachc-ai/zachc-ai.github.io" rel="noopener">Zach's Compass</a></h2>
      <span class="project-status">Active</span>
    </div>
    <p class="project-desc">This site. A self-contained Jekyll design system built around warm paper typography, side-by-side EN/ZH publishing, zero-dependency client-side search (<code>⌘K</code> / <code>/</code>), separate English and Chinese RSS feeds, and light/dark vector covers.</p>
  </li>

  <li class="project-item">
    <div class="project-head">
      <h2 class="project-title"><a href="https://github.com/zachc-ai/zachc-ai.github.io/tree/main/.claude/skills/blog-polish" rel="noopener">blog-polish</a></h2>
      <span class="project-status">Active</span>
    </div>
    <p class="project-desc">An open editing workflow for bilingual personal essays and reading digests. Pairs a primary-source claims gate with anti-AI-tell checks, catching both hype/manifesto filler and overly defensive hedging while keeping English and Chinese native on their own.</p>
  </li>

  <li class="project-item">
    <div class="project-head">
      <h2 class="project-title"><a href="https://github.com/zachc-ai/zachc-ai.github.io/tree/main/docs/narration" rel="noopener">Local bilingual narration pipeline</a></h2>
      <span class="project-status">Experiment</span>
    </div>
    <p class="project-desc">Scripts that turn bilingual Markdown posts into clean spoken blocks, synthesize audio locally on Apple Silicon with a cloned voice, run automated Whisper ASR checks for drift, and loudness-normalize the output into inline post players. Live example on <a href="{{ '/blog/attention-is-all-you-need/' | relative_url }}">Attention Is All You Need</a>.</p>
  </li>
</ul>

More code and older experiments live on [GitHub](https://github.com/zachc-ai).

</div>

<div class="lang-zh lang-hidden" markdown="1">

<ul class="project-list">
  <li class="project-item">
    <div class="project-head">
      <h2 class="project-title"><a href="https://github.com/zachc-ai/zachc-ai.github.io" rel="noopener">Zach's Compass</a></h2>
      <span class="project-status">持续维护</span>
    </div>
    <p class="project-desc">就是你正在看的这个网站。基于 Jekyll 的独立静态站设计系统，围绕暖纸排版做了完整中英双语切换、零依赖站内弹窗搜索（<code>⌘K</code> / <code>/</code>）、拆分开的中英文独立 RSS，以及深浅双色矢量封面。</p>
  </li>

  <li class="project-item">
    <div class="project-head">
      <h2 class="project-title"><a href="https://github.com/zachc-ai/zachc-ai.github.io/tree/main/.claude/skills/blog-polish" rel="noopener">blog-polish 写作润色工作流</a></h2>
      <span class="project-status">持续维护</span>
    </div>
    <p class="project-desc">放在本仓库里公开的双语博客润色 skill。先做一手来源事实核查，再去 AI 味（既治早期浮夸宣言腔，也治新型过度免责端水腔），保证中英文各自说人话、不互相迁就语序。</p>
  </li>

  <li class="project-item">
    <div class="project-head">
      <h2 class="project-title"><a href="https://github.com/zachc-ai/zachc-ai.github.io/tree/main/docs/narration" rel="noopener">本地双语语音朗读流水线</a></h2>
      <span class="project-status">实验中</span>
    </div>
    <p class="project-desc">一套把双语 Markdown 博客拆成朗读段落、在 Apple Silicon 本机用克隆声线合成音频、再用 Whisper 自动校对漏字和串音、最后响度归一化嵌进文章播放器的脚本。线上样例见<a href="{{ '/blog/attention-is-all-you-need/' | relative_url }}">《注意力，才是稀缺品》</a>。</p>
  </li>
</ul>

更多代码和早期练习放在 [GitHub](https://github.com/zachc-ai)。

</div>
