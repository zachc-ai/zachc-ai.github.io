# Blog Improvements Design

**Date:** 2026-03-16
**Goal:** Polish the blog's reading experience, add feedback loop, and improve organization. Writing practice now, personal brand later.
**Constraints:** Stay on Jekyll + minima. No new gems. No theme replacement.

## 1. Bilingual Toggle Extraction

Extract duplicated CSS/JS from each post into `_includes/bilingual.html`. Posts opt in via front matter:

```yaml
bilingual: true
title_zh: "中文标题"
```

The include injects the toggle button, styles, and script. Non-bilingual posts are unaffected.

## 2. Visual Polish (CSS Overrides)

Create `assets/css/style.scss` that imports minima then adds overrides (~50 lines):

- Body font ~18px, line-height ~1.7
- Content max-width ~780px
- Softer post meta (dates, reading time)
- Muted link underlines on hover
- Rounded code blocks with subtle background tint
- Bilingual toggle styled as a pill

No external fonts. No theme replacement.

## 3. Homepage & About

**Homepage:** Short 2-3 line intro above the existing recent posts list. Keep `layout: home`.

**About:** Expand to 3-4 paragraphs: who you are, what the blog is, topics to expect, how to reach you. Draft provided as starting point.

## 4. Tags & Organization

- Add `tags` to post front matter
- `tags.md` at `/tags/` — groups posts by tag with anchor links
- `_includes/reading-time.html` — `words / 200`, shown in post meta
- Custom `_layouts/post.html` extending minima's post layout
- Nav: Blog | Digests | Tags | About

Existing `categories` (life, digest) stay for filtering. Tags are reader-facing.

## 5. Feedback Loop

**Giscus comments:** GitHub Discussions-based. Script tag at bottom of posts. TODO with setup link (enable Discussions + install giscus app).

**GoatCounter analytics:** One script tag, templated with placeholder for site code. Free, no cookies.

## 6. Favicon & Social Sharing

- Inline SVG favicon ("ZC")
- jekyll-seo-tag config: `author`, default `image`, OG/Twitter card defaults
