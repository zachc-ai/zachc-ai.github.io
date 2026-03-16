# Blog Improvements Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Polish the blog's reading experience, add feedback loop (comments + analytics), and improve content organization — all on top of minima with no new gems.

**Architecture:** Override minima via its designated extension points: `_sass/minima/custom-variables.scss` and `custom-styles.scss` for visual polish, `_includes/custom-head.html` for favicon/analytics, custom `_layouts/post.html` for reading time and bilingual support. Tags implemented with pure Liquid (no plugins). Giscus and GoatCounter added as templated script tags.

**Tech Stack:** Jekyll, minima theme (via github-pages gem), Liquid, SCSS, GitHub Pages

---

### Task 1: Extract Bilingual Toggle to Include

**Files:**
- Create: `_includes/bilingual.html`

**Step 1: Create the bilingual include**

Create `_includes/bilingual.html` with the shared styles, toggle button, and script. It reads `page.title_zh` from front matter to render the bilingual title.

```html
{% if page.bilingual %}
<style>
.lang-toggle {
  display: inline-block;
  cursor: pointer;
  padding: 4px 14px;
  border: 1px solid #ccc;
  border-radius: 16px;
  font-size: 14px;
  margin-bottom: 1.5em;
  user-select: none;
  transition: background 0.2s, color 0.2s;
}
.lang-toggle:hover {
  background: #333;
  color: #fff;
}
.lang-hidden { display: none; }
.post-title { display: none; }
.bilingual-title { font-size: 2em; font-weight: bold; margin-bottom: 0.5em; }
</style>

<div class="bilingual-title">
<span class="lang-en">{{ page.title }}</span>
<span class="lang-zh lang-hidden">{{ page.title_zh }}</span>
</div>

<span class="lang-toggle" onclick="toggleLang()">中文 / EN</span>

<script>
function toggleLang() {
  document.querySelectorAll('.lang-en').forEach(el => el.classList.toggle('lang-hidden'));
  document.querySelectorAll('.lang-zh').forEach(el => el.classList.toggle('lang-hidden'));
}
</script>
{% endif %}
```

**Step 2: Commit**

```bash
git add _includes/bilingual.html
git commit -m "Extract bilingual toggle into reusable include"
```

### Task 2: Update Existing Posts to Use Bilingual Include

**Files:**
- Modify: `_posts/2026-03-16-rediscovering-curiosity.md`
- Modify: `_posts/2026-03-16-prefrontal-cortex-protection.md`

**Step 1: Update rediscovering-curiosity.md**

Add to front matter:
```yaml
bilingual: true
title_zh: "重拾好奇心"
```

Remove the entire `<style>...</style>` block (lines 8-26).
Remove the `<div class="bilingual-title">...</div>` block (lines 29-32).
Remove the `<span class="lang-toggle"...>` line (line 34).
Remove the `<script>...</script>` block at the end (lines 88-93).

Add at the very top of the content (after front matter):
```
{% include bilingual.html %}
```

**Step 2: Update prefrontal-cortex-protection.md**

Same changes:
- Add `bilingual: true` and `title_zh: "保护你的前额叶皮层"` to front matter
- Remove the `<style>`, `<div class="bilingual-title">`, `<span class="lang-toggle">`, and `<script>` blocks
- Add `{% include bilingual.html %}` at top of content

**Step 3: Commit**

```bash
git add _posts/
git commit -m "Migrate bilingual posts to use shared include"
```

### Task 3: Create Reading Time Include

**Files:**
- Create: `_includes/reading-time.html`

**Step 1: Create the include**

```html
{% assign words = content | number_of_words %}
{% assign minutes = words | divided_by: 200 %}
{% if minutes < 1 %}{% assign minutes = 1 %}{% endif %}
<span class="reading-time">{{ minutes }} min read</span>
```

**Step 2: Commit**

```bash
git add _includes/reading-time.html
git commit -m "Add reading time include"
```

### Task 4: Override Post Layout

**Files:**
- Create: `_layouts/post.html`

**Step 1: Create custom post layout**

This layout extends minima's base layout, adding reading time to post meta and including the bilingual toggle. It mirrors minima's post.html structure but with our additions.

```html
---
layout: default
---
<article class="post h-entry" itemscope itemtype="http://schema.org/BlogPosting">

  <header class="post-header">
    {% include bilingual.html %}
    {% unless page.bilingual %}
    <h1 class="post-title p-name" itemprop="name headline">{{ page.title | escape }}</h1>
    {% endunless %}
    <p class="post-meta">
      <time class="dt-published" datetime="{{ page.date | date_to_xmlschema }}" itemprop="datePublished">
        {{ page.date | date: site.minima.date_format | default: "%b %-d, %Y" }}
      </time>
      {%- if page.author -%}
        · <span itemprop="author" itemscope itemtype="http://schema.org/Person"><span class="p-author h-card" itemprop="name">{{ page.author }}</span></span>
      {%- endif -%}
      · {% include reading-time.html %}
    </p>
  </header>

  <div class="post-content e-content" itemprop="articleBody">
    {{ content }}
  </div>

  {%- if site.giscus.repo -%}
  <div class="post-comments">
    <script src="https://giscus.app/client.js"
      data-repo="{{ site.giscus.repo }}"
      data-repo-id="{{ site.giscus.repo_id }}"
      data-category="{{ site.giscus.category }}"
      data-category-id="{{ site.giscus.category_id }}"
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="top"
      data-theme="preferred_color_scheme"
      data-lang="en"
      crossorigin="anonymous"
      async>
    </script>
  </div>
  {%- endif -%}

  <a class="u-url" href="{{ page.url | relative_url }}" hidden></a>
</article>
```

**Step 2: Commit**

```bash
git add _layouts/post.html
git commit -m "Add custom post layout with reading time and giscus support"
```

### Task 5: Visual Polish — SCSS Overrides

**Files:**
- Create: `_sass/minima/custom-variables.scss`
- Create: `_sass/minima/custom-styles.scss`

**Step 1: Create custom variables**

```scss
// Slightly wider content area
$content-width: 780px;
```

**Step 2: Create custom styles**

```scss
// Typography
body {
  font-size: 18px;
}

.post-content {
  line-height: 1.75;

  h2 { margin-top: 2em; }
  h3 { margin-top: 1.5em; }
}

// Post meta — softer, smaller
.post-meta {
  font-size: 0.85em;

  .reading-time {
    font-style: italic;
  }
}

// Links — calm hover
.post-content a {
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  transition: border-color 0.2s;

  &:hover {
    border-bottom-color: inherit;
  }
}

// Dark mode link underlines
@media (prefers-color-scheme: dark) {
  .post-content a {
    border-bottom-color: rgba(255, 255, 255, 0.2);
  }
}

// Code blocks — subtle rounding + tint
.highlight {
  border-radius: 6px;
}

code.highlighter-rouge {
  border-radius: 3px;
  padding: 2px 5px;
}

// Bilingual toggle — pill style
.lang-toggle {
  font-size: 0.8em;
  opacity: 0.7;
  transition: opacity 0.2s, background 0.2s, color 0.2s;

  &:hover {
    opacity: 1;
  }
}

// Post title spacing
.post-title {
  letter-spacing: -0.02em;
}

// Post list on home/blog/tags pages
.post-list h3 {
  margin-bottom: 0.2em;
}

// Comments section spacing
.post-comments {
  margin-top: 3em;
  padding-top: 2em;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .post-comments {
    border-top-color: rgba(255, 255, 255, 0.1);
  }
}
```

**Step 3: Commit**

```bash
git add _sass/
git commit -m "Add visual polish: typography, spacing, link styles, code blocks"
```

### Task 6: Favicon and Custom Head

**Files:**
- Create: `_includes/custom-head.html`

**Step 1: Create custom head with SVG favicon and GoatCounter placeholder**

```html
<!-- Favicon -->
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>ZC</text></svg>">

<!-- GoatCounter analytics — uncomment and set your code -->
<!-- <script data-goatcounter="https://YOURCODE.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script> -->
```

**Step 2: Commit**

```bash
git add _includes/custom-head.html
git commit -m "Add SVG favicon and GoatCounter placeholder"
```

### Task 7: Homepage Intro

**Files:**
- Modify: `index.md`

**Step 1: Add intro text**

```markdown
---
layout: home
list_title: Recent Posts
---

I'm ZC — a software engineer writing about tech, learning, and the things I'm figuring out along the way.
```

**Step 2: Commit**

```bash
git add index.md
git commit -m "Add personal intro to homepage"
```

### Task 8: Expand About Page

**Files:**
- Modify: `about.md`

**Step 1: Expand content**

```markdown
---
layout: page
title: About
permalink: /about/
---

I'm ZC, a software engineer. This blog is where I think out loud — about technology, learning, and the stuff in between.

I started writing here because I wanted a place to slow down and process what I'm learning, instead of just consuming and moving on. Some posts are technical deep dives, some are reading digests, and some are personal reflections on how I work and think.

Topics you'll find here: AI and how it's changing the way we build things, engineering practices, neuroscience of productivity, and the occasional life update.

If you want to get in touch, find me on [GitHub](https://github.com/Fighter-ZC).
```

**Step 2: Commit**

```bash
git add about.md
git commit -m "Expand About page with personal intro"
```

### Task 9: Tags System

**Files:**
- Create: `tags.md`
- Modify: `_posts/2026-03-16-rediscovering-curiosity.md` (add tags)
- Modify: `_posts/2026-03-16-prefrontal-cortex-protection.md` (add tags)
- Modify: `_posts/2026-03-16-welcome.md` (add tags)
- Modify: `_config.yml` (add tags.md to nav)

**Step 1: Add tags to existing posts**

rediscovering-curiosity.md front matter — add:
```yaml
tags: [life, learning, ai]
```

prefrontal-cortex-protection.md front matter — add:
```yaml
tags: [neuroscience, productivity, ai]
```

welcome.md — read file first to determine appropriate tags.

**Step 2: Create tags page**

```markdown
---
layout: page
title: Tags
permalink: /tags/
---

{% assign tags = site.tags | sort %}
<div class="tag-cloud">
{% for tag in tags %}
  <a href="#{{ tag[0] | slugify }}" class="tag-link">{{ tag[0] }} ({{ tag[1].size }})</a>
{% endfor %}
</div>

{% for tag in tags %}
<h2 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h2>
<ul class="post-list">
  {% for post in tag[1] %}
  <li>
    <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
    <h3><a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>
  </li>
  {% endfor %}
</ul>
{% endfor %}
```

**Step 3: Update _config.yml header_pages**

Change:
```yaml
header_pages:
  - blog.md
  - digests.md
  - about.md
```
To:
```yaml
header_pages:
  - blog.md
  - digests.md
  - tags.md
  - about.md
```

**Step 4: Commit**

```bash
git add tags.md _posts/ _config.yml
git commit -m "Add tags system with browsable tags page"
```

### Task 10: SEO and Giscus Config

**Files:**
- Modify: `_config.yml`

**Step 1: Add author and giscus config to _config.yml**

Append to `_config.yml`:

```yaml
author:
  name: ZC

# Giscus comments — fill in after enabling GitHub Discussions
# 1. Go to https://github.com/Fighter-ZC/Fighter-ZC.github.io/settings → Features → enable Discussions
# 2. Go to https://giscus.app and fill in your repo to get repo_id, category, and category_id
# 3. Uncomment and fill in the values below:
# giscus:
#   repo: "Fighter-ZC/Fighter-ZC.github.io"
#   repo_id: ""
#   category: "Announcements"
#   category_id: ""
```

**Step 2: Commit**

```bash
git add _config.yml
git commit -m "Add author config and giscus setup instructions"
```
