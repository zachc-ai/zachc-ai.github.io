---
name: ship
description: Commit local changes, rebase on main, and push directly. Use when user says "ship", "ship it", "push changes", "check in", or wants to commit and push to main. No PR or code review needed — this is a personal repo.
user_invocable: true
---

# Ship: Commit, Rebase, Push

This is a personal repo. Push directly to `main` — no PRs or code review required.

## Steps

1. Run `git status` and `git diff --stat` to see what changed
2. If there are untracked files that should be included, stage them. Never stage `.env`, credentials, or secrets.
3. Draft a concise commit message summarizing the changes (1-2 sentences, focus on "why")
4. Stage relevant files by name (not `git add -A`)
5. Commit with the message, appending `Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>`
6. Run `git pull --rebase origin main`
7. Run `git push origin main`
8. Confirm success with the commit hash

## Rules

- If there are no changes, say so and stop
- If rebase has conflicts, stop and ask the user — do NOT force push
- Use HEREDOC format for commit messages
