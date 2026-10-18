# zachc-ai.github.io

Personal GitHub Pages blog (Jekyll).

## Git Workflow

- Push directly to `main` — no PRs needed. This is a personal repo.

## Blog Post Guidelines

- Whenever you draft or rewrite post prose (`_posts/`, `about.md`, other pages), run the `blog-polish` skill before calling it done or pushing. It runs the vendored `humanizer` skill (`.claude/skills/humanizer/`) as its structural pass, with Zach's voice rules taking precedence. Typo-, link-, and front-matter-only fixes don't need it.

- When a post has reference articles or GitHub repos, list them only in the front matter `sources` array (`title`, `url`, optional `title_zh`; titles may use Markdown). The post layout renders the visible "Sources / 来源" list at the end of the post, so don't hand-write a Sources section in the body. Title + link only, no taglines or year padding.
