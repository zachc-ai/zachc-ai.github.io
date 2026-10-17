# zachc-ai.github.io

Personal GitHub Pages blog (Jekyll).

## Git Workflow

- Push directly to `main` — no PRs needed. This is a personal repo.

## Blog Post Guidelines

- Whenever you draft or rewrite post prose (`_posts/`, `about.md`, other pages), run the `blog-polish` skill before calling it done or pushing. It runs the vendored `humanizer` skill (`.claude/skills/humanizer/`) as its structural pass, with Zach's voice rules taking precedence. Typo-, link-, and front-matter-only fixes don't need it.

- When publishing a post that has reference articles or GitHub repos, include source links visibly in the post content (a "Sources" / "来源" section at the bottom of each language block) and in the front matter `sources` array.
