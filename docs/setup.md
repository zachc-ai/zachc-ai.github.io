---
permalink: /docs/setup/
---

{% raw %}
# Blog Setup Reference

Operational reference for [Zach's Compass](https://zachc.ai) (`zachc-ai/zachc-ai.github.io`).

## Stack

- **Engine**: Jekyll + minima theme (`skin: auto`), deployed on GitHub Pages
- **Config**: `_config.yml`
- **Theme overrides**:
  - `_sass/minima/custom-variables.scss` — color/font variable overrides
  - `_sass/minima/custom-styles.scss` — typography, spacing, dark mode tweaks
- **Custom layout**: `_layouts/post.html` — reading time, bilingual title toggle, giscus comments
- **Custom includes**:
  - `_includes/bilingual.html` — language toggle + bilingual title rendering
  - `_includes/reading-time.html` — estimated reading time
  - `_includes/custom-head.html` — favicon, GoatCounter script

## Services

### Giscus (comments)

GitHub Discussions-based comment system, loaded in `_layouts/post.html`.

| Key | Value |
|-----|-------|
| repo | `zachc-ai/zachc-ai.github.io` |
| repo_id | `R_kgDORoQKJg` |
| category | Announcements |
| category_id | `DIC_kwDORoQKJs4C4jVh` |
| mapping | `pathname` |
| theme | `preferred_color_scheme` |

- **Config location**: `_config.yml` -> `giscus:` block
- **Dashboard**: GitHub repo -> Discussions tab
- **Disable on a post**: not yet supported — would need a `{% unless page.comments == false %}` guard in `_layouts/post.html`

### GoatCounter (analytics)

Privacy-respecting, cookieless analytics.

- **Config location**: `_includes/custom-head.html`
- **Site code**: `zachc-ai`
- **Dashboard**: https://zachc-ai.goatcounter.com
- **Disable**: comment out the `<script>` tag in `custom-head.html`

## Content Structure

### Blog posts

Regular posts — any post whose category is **not** `digest`.

```yaml
---
layout: post
title: "Post Title"
date: YYYY-MM-DD
categories: life          # any category except "digest"
tags: [tag1, tag2]
---
```

File path: `_posts/YYYY-MM-DD-title.md`

### Digests

Curated summaries of external content. Same path as blog posts, distinguished by `categories: digest` and optional `source:` URL.

```yaml
---
layout: post
title: "Digest Title"
date: YYYY-MM-DD
categories: digest
tags: [tag1, tag2]
source: "https://example.com/original"
---
```

### Bilingual posts

Any post can be made bilingual. Add front matter flags, include the toggle, and wrap content in language divs.

Front matter additions:
```yaml
bilingual: true
title_zh: "Chinese Title"
```

Body structure:
```markdown
{% include bilingual.html %}

<div class="lang-en" markdown="1">
English content here.
</div>

<div class="lang-zh lang-hidden" markdown="1">
Chinese content here.
</div>
```

### Tags

Add `tags: [tag1, tag2]` to any post's front matter. Tags auto-appear on `/tags/` — no manual registration needed.

### Navigation

Order controlled by `header_pages` in `_config.yml`:

1. Blog (`blog.html`): every post, digests included and labeled; the nav marks Blog on any post and on `/digests/`
2. Tags (`tags.html`)
3. About (`about.md`)

`/digests/` (`digests.html`) is a filtered view of the reading notes, linked from the Blog intro and the homepage. A search icon sits next to the language switch.

## How To

### Create a new post

1. Create `_posts/YYYY-MM-DD-your-title.md`
2. Add front matter (see templates above)
3. Write content in Markdown

### Add a new tag

Just add it to a post's `tags:` array. It will automatically show up on `/tags/`.

### Make a post bilingual

1. Add `bilingual: true` and `title_zh: "..."` to front matter
2. Add `{% include bilingual.html %}` as the first line after the front matter
3. Wrap English content in `<div class="lang-en" markdown="1">...</div>`
4. Wrap Chinese content in `<div class="lang-zh lang-hidden" markdown="1">...</div>`

### Disable comments on a specific post

Not yet implemented. To add support:

1. In `_layouts/post.html`, wrap the giscus `<div class="post-comments">` block with:
   ```liquid
   {%- unless page.comments == false -%}
   ...existing giscus block...
   {%- endunless -%}
   ```
2. Then set `comments: false` in the post's front matter.

### Reader features (added 2026-10-17)

- **Share card.** Every page defaults to `assets/social-card.png` (1200×630) through `defaults` in `_config.yml`, so links unfurl with a large image. A post can set its own `image:`. The card and the icons (`favicon.ico`, `apple-touch-icon.png`) are rendered from HTML in `docs/brand/`; edit the HTML, then run `docs/brand/render.sh` (uses the local Chrome, nothing to install).
- **Sitemap and robots.** `jekyll-sitemap` (bundled with `github-pages`) writes `/sitemap.xml`; `robots.txt` points to it. Set `sitemap: false` to leave a page out.
- **Contents list.** `assets/post.js` builds it for the language being read, when that block has 3+ `##` headings and is long (≈4000 EN chars / 1600 ZH chars). With fewer than 4 `##`, the `###` are listed too. It is a side rail at ≥78rem and a fold-out list below that. Turn it off with `toc: false`.
- **Section links.** The same script adds a `#` to every `##`/`###`; clicking copies the section URL.
- **Related posts.** `_layouts/post.html` lists up to 3 posts that share the most tags, newest first within a tie. Posts tagged `placeholder` are skipped.
- **Search.** `/search/` (`search.html` + `assets/search.js`) scans `/search.json`, which Liquid builds from every post's titles, summaries, tags and full text in both languages. `/` jumps to it from any page; `?q=` links work.
{% endraw %}
