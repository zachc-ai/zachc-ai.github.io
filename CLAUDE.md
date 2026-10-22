# zachc-ai.github.io

Personal GitHub Pages blog (Jekyll).

## Git Workflow

- Push directly to `main` — no PRs needed. This is a personal repo.

## Privacy

The repo and its full git history are public. Refer to Zach by first name only. Never name his employer, team, internal tools, or colleagues, and never include his last name, Chinese name, personal emails, home hostnames/IPs, or family details, in posts, pages, docs, or commit messages. Commit as `zachc-ai <zachc-ai@users.noreply.github.com>`. History was scrubbed once (2026-10-18); keeping it clean is cheaper than another rewrite.

## Blog Post Guidelines

- Whenever you draft or rewrite post prose (`_posts/`, `about.md`, other pages), run the `blog-polish` skill before calling it done or pushing. It runs the vendored `humanizer` skill (`.claude/skills/humanizer/`) as its structural pass, with Zach's voice rules taking precedence. Typo-, link-, and front-matter-only fixes don't need it.

- When a post has reference articles or GitHub repos, list them only in the front matter `sources` array (`title`, `url`, optional `title_zh`; titles may use Markdown). The post layout renders the visible "Sources / 来源" list at the end of the post, so don't hand-write a Sources section in the body. Title + link only, no taglines or year padding.

- Use relevant images where they help, including a post-specific cover when appropriate. Prefer original or properly licensed images. Show a cover in the post and set front matter `image` for sharing previews.
