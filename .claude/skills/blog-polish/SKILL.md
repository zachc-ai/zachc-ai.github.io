---
name: blog-polish
description: Polish a bilingual (EN + ZH) blog draft for Zach's Compass so it reads like Zach wrote it, not like AI generated it. Use after drafting a post in `_posts/`, before pushing. Also use when user says "polish this", "check for AI tells", "the Chinese sounds translated", or asks to refine a draft. Adapted from ContractorKeith/ai-writing-skill with Zach-specific voice rules and Chinese anti-translation rules. Runs the vendored `humanizer` skill as its structural pass.
user_invocable: true
---

# Blog Polish: Anti-AI-Tell Pass for Zach's Compass

Zach's Compass is a bilingual personal blog (EN + ZH, Jekyll, GitHub Pages). Each post has a `<div class="lang-en">` block and a `<div class="lang-zh lang-hidden">` block. Both should read as Zach's voice — direct, slightly dry, philosophical when the topic warrants, terse when it doesn't.

This skill runs a structured polish pass on a draft. It is **NOT** a content generator. The draft already exists; the job is to scrub AI tells, verify voice, and check that the Chinese isn't translation-stiff.

The workflow is model-independent: define the editing goals and checks, not a required model, vendor, version, or reasoning preset. Model choice can change with the task and available capabilities.

Make the smallest useful edit. Zach's instructions and voice samples take precedence over generic style heuristics. Leave natural passages alone; do not manufacture fragments, modal particles, anecdotes, or uneven paragraphs to meet a quota.

## When to use

- After drafting a new post in `_posts/`, before `push-to-main`
- When the user says "polish this", "this reads too AI", "the Chinese sounds translated", "check this draft", "tighten this"
- Proactively: if Claude has just drafted a blog post in this repo, run this skill before claiming the draft is done

## How to use

1. **Identify the draft.** Default to the most-recently-modified file in `_posts/`. If ambiguous, ask.
2. **Read the draft fully.** Both `lang-en` and `lang-zh` blocks. Keep the original available for comparison and establish whether the user wants a preview or an in-place edit.
3. **Run the claims audit FIRST** — `references/claims-audit.md`. This is a hard gate, not a
   suggestion. If the draft asserts that anything is false, fabricated, invented, or
   nonexistent, the six-point negative-claim protocol must pass before any polishing happens.
   Voice does not matter on a post that asserts something untrue. **Stop and fix if it fails.**
4. **Load the remaining references in order:**
   - `references/preservation-checks.md` — protect the original meaning and check bilingual equivalence
   - `../humanizer/SKILL.md` — general AI-tell catalog, 26 patterns (see "Humanizer pass" below)
   - `references/en-antipatterns.md` — English AI tells (adapted from ContractorKeith)
   - `references/zh-antipatterns.md` — Chinese machine-translation tells (custom to this skill)
   - `references/voice-samples.md` — Zach's voice anchors from existing posts
5. **Run the humanizer pass** on both language blocks, following its "How to work" steps and the overrides in "Humanizer pass" below.
6. **Run the EN pass** — flag every violation, propose specific edits.
7. **Run the ZH pass** — flag translation-stiff phrasing, propose native-Chinese rewrites.
8. **Run the voice pass** — check that opening, closing, and section transitions sound like Zach.
9. **Apply targeted edits.** Use the platform's file-editing tool for an in-place edit; keep a requested preview separate from the published post. Do not rewrite clean passages merely for consistency.
10. **Compare before and after** using `references/preservation-checks.md`. Check both protected content and EN/ZH meaning. Repair only material issues, then stop; an audit finding is not automatically a reason to rewrite.
11. **Report a short summary** — claims-audit result first, then preservation and bilingual-check results, meaningful edits, and any unresolved judgment calls.

## Humanizer pass (runs on every post)

`.claude/skills/humanizer/` is an unmodified copy of [blader/humanizer](https://github.com/blader/humanizer) (MIT, v3.1.0, upstream commit `8c307f3`). Don't edit it; put Zach-specific overrides here. To update, re-download upstream `SKILL.md`, review the diff, and bump the commit above.

Where humanizer and this skill disagree, this skill wins. Humanizer's own Voice rule says a writer's sample overrides its patterns, and `references/voice-samples.md` is that sample.

- **Dashes (§8):** don't strip to zero. Keep the EN em-dash rule below (≤1 per paragraph average). ZH 破折号 follows `references/zh-antipatterns.md`.
- **Fragments and closers (§2):** one fragment that lands ("Worth it.") and a half-step closing stay. Cut rows of fragments and closers that restate the paragraph.
- **Not X but Y (§1):** apply humanizer's test (keep a contrast only when the negative half corrects a belief the reader actually holds) on top of the "once or twice per post" cap below.
- **Language scope:** §10, §12, §16, §18, and §21 are English word and typography rules, so apply them to `lang-en` only. Chinese “” quotes are correct in `lang-zh`. Every other pattern applies to both blocks.
- **Output:** targeted edits, not humanizer's whole-file rewrite.
- **No new facts or semantic drift:** do not invent or silently drop facts, experiences, motives, feelings, attribution, or qualifications. See `references/preservation-checks.md`; ask for missing material rather than filling it in.

## Hard rules (apply to both languages unless noted)

### Always

- **Lead with a specific, concrete scene or sentence.** No throat-clearing, no topic-defining intros. The first sentence should make the reader want a second.
- **Let the thought set paragraph length.** Keep clear long sentences, fragments, and short paragraphs when they sound like Zach. Do not rearrange them just to manufacture variety.
- **Use first person ("I").** Zach writes from his own POV. Generic "one might consider" is a dead tell.
- **Cite real names, numbers, dates.** Vague "studies show" / "experts say" is banned. Either name the source or drop the appeal to authority.
- **Keep quotations and retellings distinct.** Quote the verified original verbatim, or use fully modern Chinese and label it as a paraphrase. Avoid half-classical rewrites such as "宁可活着曳尾" or "曳尾巴".
- **End a section when its point is made.** Keep a useful transition, but do not manufacture a question or half-thought to force forward pull. Cut redundant summaries.
- **Match voice to topic magnitude** — philosophical post = reflective tone; setup walkthrough = direct, terse, no "planting a flag" framing. (See `references/voice-samples.md`.)

### Never

- **No "Challenges and Future Outlook" sections.** Ever.
- **No "Despite its X, Y faces challenges..."** formula.
- **No formulaic "Takeaways" bullet list at the end** unless the topic genuinely warrants one (rare).
- **No "It's not X. It's Y." used more than once or twice in a post.** This is Claude's signature tic. Flag every instance and rewrite all but one.
- **No emoji decoration in headings or bullets.**
- **No vague "experts say" / "researchers note" / "many believe".**
- **No grand-statement closing.** Final sentence should feel like the writer just stopped, not delivered a thesis.

## English-specific (`lang-en` block)

See `references/en-antipatterns.md` for the full banned-word list and structural rules. Quick scan items:

- **Em-dashes:** Zach uses em-dashes intentionally. **Allow up to ~1 per paragraph average.** Flag clusters of 3+ em-dashes in one paragraph or a paragraph with em-dashes in every sentence — those are AI overuse.
- **Banned figurative words:** delve, foster, tapestry, vibrant (abstract), meticulous, intricate, robust (non-physical), comprehensive, navigate (figurative), leverage (verb), enhance (prefer "improve"), underscore (verb), pivotal, enduring, vital, crucial, intricate.
- **Banned phrases:** "it's worth noting", "in today's [X]", "in the realm of", "when it comes to", "whether you're a [X] or a [Y]", "stands as a testament to".
- **Fragments:** keep them when they belong to Zach's cadence; do not add one to satisfy a minimum.
- **Sentence rhythm:** change length or structure only when it improves the thought or readability, not to hit word-count targets.
- **Conjunction openers:** And/But/So/Because are fine where they connect real thoughts. No minimum count.

## Chinese-specific (`lang-zh` block)

See `references/zh-antipatterns.md`. The job here is different from English: the failure mode is **translation stiffness**, not AI-generic-blandness. Quick scan items:

- **Pronoun overuse:** Chinese drops pronouns more than English. "你向你大脑宣告" → "你其实是在告诉自己". Flag every chain of "你的 / 他的 / 它的" and ask if it's actually needed.
- **Direct copula translation:** "这不是 X，是 Y" used 3+ times → break the pattern. Use "说白了不是 X" / "其实它是 Y" / split into two sentences.
- **语气词:** keep 吧/啊/嘛/呢/了/吗 where they carry the writer's tone or meaning. Their absence is not evidence of translation stiffness; do not add them per paragraph.
- **Em-dash overuse:** Chinese uses 破折号（——）more sparingly than English em-dashes. Replace many with 冒号(：), 换行, or 中文括号（）.
- **Long nested sentences:** simplify when modifiers obscure the main thought. The number of 的 or clauses is a prompt to inspect, not a rewrite trigger; preserve scope and qualifications when splitting.
- **Translated connectors:** check whether "事实上" / "实际上" / "换句话说" / "因此" express a real relationship. Use a more spoken alternative only where it fits, not as a mechanical substitution.
- **Direct "It's not X. It's Y." translation:** "这不是 X，这是 Y" → 中文 nuance is better as "X？不是。是 Y。" or "说白了，X 只是表象，Y 才是底色".
- **Terms to keep in English:** technical vocab Zach uses naturally — `servo`, `backlog`, `prompt`, `LLM`, `harness`, `Slack`, `i 人`. Don't over-translate.
- **Title check:** Chinese title should be plain modern Chinese, NOT classical 4-character idioms unless the post itself is about that idiom. (See feedback memory: prior `曳尾涂中` was rejected as too 文言.)

## Voice consistency

Zach's voice anchors (drawn from his existing posts — see `references/voice-samples.md`):

- **Openers:** specific personal scene, an embarrassing quote he caught himself saying, a single concrete object/moment. Never a thesis statement.
- **Mid-post:** mixes hard data (named studies, real numbers) with personal aside ("I tried this for two weeks").
- **Asides:** dry humor, mild self-deprecation. ("免费的事不做白不做." "Annoyingly, it works." "I'll stop.")
- **Callbacks:** small Easter eggs to previous posts (e.g. ending a 2026-05-06 post with "drag my tail in the mud" referencing the 2026-05-03 post). Worth preserving when they appear naturally.
- **Closing:** half-step away, not a thesis. "Anyway. Going to go drag my tail in the mud now, I guess." / "行了，我去泥里拖尾巴了。"
- **Bilingual equivalence:** EN and ZH preserve the same facts, argument, uncertainty, and first-person experiences, NOT the same sentences. Neither language must be written first. Each should read natively.

## Final checklist before declaring polish complete

Run mentally before reporting done:

0. **Claims audit passed?** Every negative/accusatory claim cleared the six-point protocol in
   `references/claims-audit.md`? Local corpus grepped? Searched in the claim's own language?
   Load-bearing facts re-derived rather than inherited from notes? **If no, nothing else matters.**
1. **EN — em-dashes:** any paragraph with 3+? Any paragraph where every sentence uses one?
2. **EN — banned words:** any of the figurative-AI vocab survived?
3. **EN — "It's not X. It's Y." count:** more than 2 in the whole post? Reduce.
4. **EN — sentence rhythm:** does it follow the thought and voice sample without added fragments, word-count targets, or conjunction quotas?
5. **EN — opening:** concrete-specific or thesis-statement?
6. **EN — closing:** half-step or grand-statement?
7. **ZH — pronoun chains:** any "你向你大脑..."-type translation stiffness left?
8. **ZH — copula formula:** "这不是X，是Y" used more than twice in the post?
9. **ZH — 语气词:** do they carry real tone or meaning, without being added to meet a quota?
10. **ZH — title:** plain modern Chinese, not classical?
11. **ZH — em-dashes:** Chinese 破折号 reduced where 冒号/换行/括号work?
12. **Voice:** does the opening sound like Zach (specific scene) and the closing sound like Zach (half-step away)?
13. **Bilingual equivalence:** do both versions preserve the facts, argument, qualifications, and ownership of experiences without sentence-by-sentence translation?
14. **Humanizer re-scan:** after edits, any §1 contrasts, §2 closers, §6 triads, §8 dash clusters, or §19 bold labels left in either block? Did any edit add or drop a fact?
15. **Preservation gate:** did the before/after comparison pass for protected content and meaning? State any unresolved issue rather than declaring polish complete.

If all checks pass, report polish complete with a 2-3 sentence summary of what changed. Do not keep editing just to remove every possible style-pattern match.

## Output format

When reporting back to the user:

```
Polish complete on _posts/<filename>.md

Checks: claims audit <result>; preservation <result>; EN/ZH equivalence <result or not applicable>.

Edits: <meaningful EN/ZH changes; natural passages intentionally left alone>.

Judgment calls or unresolved issues: <only material ones; identify checks actually run>.
```

Keep the report under 100 words.
