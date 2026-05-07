---
name: blog-polish
description: Polish a bilingual (EN + ZH) blog draft for Zach's Compass so it reads like Zach wrote it, not like AI generated it. Use after drafting a post in `_posts/`, before pushing. Also use when user says "polish this", "check for AI tells", "the Chinese sounds translated", or asks to refine a draft. Adapted from ContractorKeith/ai-writing-skill with Zach-specific voice rules and Chinese anti-translation rules.
user_invocable: true
---

# Blog Polish: Anti-AI-Tell Pass for Zach's Compass

Zach's Compass is a bilingual personal blog (EN + ZH, Jekyll, GitHub Pages). Each post has a `<div class="lang-en">` block and a `<div class="lang-zh lang-hidden">` block. Both should read as Zach's voice — direct, slightly dry, philosophical when the topic warrants, terse when it doesn't.

This skill runs a structured polish pass on a draft. It is **NOT** a content generator. The draft already exists; the job is to scrub AI tells, verify voice, and check that the Chinese isn't translation-stiff.

## When to use

- After drafting a new post in `_posts/`, before `push-to-main`
- When the user says "polish this", "this reads too AI", "the Chinese sounds translated", "check this draft", "tighten this"
- Proactively: if Claude has just drafted a blog post in this repo, run this skill before claiming the draft is done

## How to use

1. **Identify the draft.** Default to the most-recently-modified file in `_posts/`. If ambiguous, ask.
2. **Read the draft fully.** Both `lang-en` and `lang-zh` blocks.
3. **Load references in order:**
   - `references/en-antipatterns.md` — English AI tells (adapted from ContractorKeith)
   - `references/zh-antipatterns.md` — Chinese machine-translation tells (custom to this skill)
   - `references/voice-samples.md` — Zach's voice anchors from existing posts
4. **Run the EN pass** — flag every violation, propose specific edits.
5. **Run the ZH pass** — flag translation-stiff phrasing, propose native-Chinese rewrites.
6. **Run the voice pass** — check that opening, closing, and section transitions sound like Zach.
7. **Apply edits via `Edit` tool.** Do not rewrite the whole file at once — make targeted edits so the user can review each change.
8. **Report a short summary** — count of edits made, any judgment calls flagged for the user.

## Hard rules (apply to both languages unless noted)

### Always

- **Lead with a specific, concrete scene or sentence.** No throat-clearing, no topic-defining intros. The first sentence should make the reader want a second.
- **Vary paragraph length.** A one-line paragraph after a dense block is allowed and good.
- **Use first person ("I").** Zach writes from his own POV. Generic "one might consider" is a dead tell.
- **Cite real names, numbers, dates.** Vague "studies show" / "experts say" is banned. Either name the source or drop the appeal to authority.
- **End sections with forward pull, not summaries.** A question, a half-thought, a transition. Not "in conclusion".
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
- **Sentence-fragment minimum:** at least one fragment in the post. "Worth it." "Not even close." Adds rhythm.
- **Sentence-length variance:** at least one sentence under 8 words AND at least one over 25 words.
- **Conjunction openers:** at least 2 sentences starting with And/But/So/Because.

## Chinese-specific (`lang-zh` block)

See `references/zh-antipatterns.md`. The job here is different from English: the failure mode is **translation stiffness**, not AI-generic-blandness. Quick scan items:

- **Pronoun overuse:** Chinese drops pronouns more than English. "你向你大脑宣告" → "你其实是在告诉自己". Flag every chain of "你的 / 他的 / 它的" and ask if it's actually needed.
- **Direct copula translation:** "这不是 X，是 Y" used 3+ times → break the pattern. Use "说白了不是 X" / "其实它是 Y" / split into two sentences.
- **Missing 语气词:** Chinese blog tone uses 吧/啊/嘛/呢/了/吗 at sentence ends to feel spoken. A paragraph with zero 语气词 reads as machine translation. Add where natural.
- **Em-dash overuse:** Chinese uses 破折号（——）more sparingly than English em-dashes. Replace many with 冒号(：), 换行, or 中文括号（）.
- **Long nested sentences:** English 嵌套从句 → Chinese should break into shorter sentences with 句号. If a sentence has 3+ 的 in a row, rewrite.
- **Translated connectors:** "事实上" / "实际上" / "换句话说" / "因此" — natural in EN, overused-translation in ZH. Prefer "其实" / "讲白了" / "也就是说" / "所以".
- **Direct "It's not X. It's Y." translation:** "这不是 X，这是 Y" → 中文 nuance is better as "X？不是。是 Y。" or "说白了，X 只是表象，Y 才是底色".
- **Terms to keep in English:** technical vocab Zach uses naturally — `servo`, `backlog`, `prompt`, `LLM`, `harness`, `Slack`, `i 人`. Don't over-translate.
- **Title check:** Chinese title should be plain modern Chinese, NOT classical 4-character idioms unless the post itself is about that idiom. (See feedback memory: prior `曳尾涂中` was rejected as too 文言.)

## Voice consistency

Zach's voice anchors (drawn from his existing posts — see `references/voice-samples.md`):

- **Openers:** specific personal scene, an embarrassing quote he caught himself saying, a single concrete object/moment. Never a thesis statement.
- **Mid-post:** mixes hard data (named studies, real numbers) with personal aside ("I tried this for two weeks").
- **Asides:** dry humor, mild self-deprecation. ("免费的事不做白不做." "Annoyingly, it works." "I'll stop.")
- **Callbacks:** small Easter eggs to previous posts (e.g. ending a 2026-05-06 post with "drag my tail in the mud" referencing the 2026-05-03 post). Worth preserving when they appear naturally.
- **Closing:** half-step away, not a thesis. "Anyway. Going to go drag my tail in the mud now, I guess." / "行了，我去泥里曳尾巴了。"
- **Bilingual symmetry:** EN and ZH carry the same argument, NOT the same sentences. ZH should read as if Zach wrote it natively in Chinese, not as if it was translated from his English.

## Final checklist before declaring polish complete

Run mentally before reporting done:

1. **EN — em-dashes:** any paragraph with 3+? Any paragraph where every sentence uses one?
2. **EN — banned words:** any of the figurative-AI vocab survived?
3. **EN — "It's not X. It's Y." count:** more than 2 in the whole post? Reduce.
4. **EN — sentence rhythm:** at least one fragment, one <8-word sentence, one >25-word sentence?
5. **EN — opening:** concrete-specific or thesis-statement?
6. **EN — closing:** half-step or grand-statement?
7. **ZH — pronoun chains:** any "你向你大脑..."-type translation stiffness left?
8. **ZH — copula formula:** "这不是X，是Y" used more than twice in the post?
9. **ZH — 语气词:** does each section have at least one 吧/啊/嘛/了 where natural?
10. **ZH — title:** plain modern Chinese, not classical?
11. **ZH — em-dashes:** Chinese 破折号 reduced where 冒号/换行/括号work?
12. **Voice:** does the opening sound like Zach (specific scene) and the closing sound like Zach (half-step away)?
13. **Bilingual symmetry:** does ZH carry the EN argument without being a translation?

If all 13 pass, report polish complete with a 2-3 sentence summary of what changed.

## Output format

When reporting back to the user:

```
Polish complete on _posts/<filename>.md

Edits made:
- EN: <count> em-dash reductions, <count> banned-word swaps, <count> rhythm fixes
- ZH: <count> de-translation rewrites, <count> 语气词 adds, <count> pronoun simplifications
- Voice: <opening / closing / callback notes>

Judgment calls flagged for user:
- <any case where the rule conflicts with intent>
```

Keep the report under 100 words.
