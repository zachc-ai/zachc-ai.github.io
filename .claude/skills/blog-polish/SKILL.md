---
name: blog-polish
description: Polish a bilingual (EN + ZH) blog draft for Zach's Compass so it reads like Zach wrote it, not like AI generated it. Use after drafting a post in `_posts/`, before pushing. Also use when user says "polish this", "check for AI tells", "the Chinese sounds translated", or asks to refine a draft. Adapted from ContractorKeith/ai-writing-skill with Zach-specific voice rules and Chinese anti-translation rules. Runs the locally adapted `humanizer` skill as its structural pass.
user_invocable: true
---

# Blog Polish: Anti-AI-Tell Pass for Zach's Compass

Zach's Compass is a bilingual personal blog (EN + ZH, Jekyll, GitHub Pages). Each post has a `<div class="lang-en">` block and a `<div class="lang-zh lang-hidden">` block. Both should read as Zach's voice — direct, slightly dry, philosophical when the topic warrants, terse when it doesn't.

This skill runs a structured polish pass on a draft. It is **NOT** a content generator. The draft already exists; the job is to scrub AI tells, verify voice, and check that the Chinese isn't translation-stiff.

The workflow is model-independent: define the editing goals and checks, not a required model, vendor, version, or reasoning preset. Model choice can change with the task and available capabilities.

Make the smallest useful edit. That can mean reconstructing an awkward sentence or paragraph, not preserving its frame and changing a few words. Zach's instructions and voice samples take precedence over generic style heuristics. Leave natural passages alone; do not manufacture fragments, modal particles, anecdotes, or uneven paragraphs to meet a quota.

## When to use

- After drafting a new post in `_posts/`, before `push-to-main`
- When the user says "polish this", "this reads too AI", "the Chinese sounds translated", "check this draft", "tighten this"
- Proactively: if an assistant has just drafted a blog post in this repo, run this skill before claiming the draft is done

## Post-type routing

Before editing, classify the draft and check its front matter:

| Post type | Voice & structure | Extra checks |
|---|---|---|
| **Personal essay** (`categories: life` or `tech` reflection) | Spoken, sincere, first person ("I"). Lead with a concrete scene, tension, or fact already in the draft (never invent one). | Watch BOTH failure modes: old-AI hype/manifesto AND new-AI defensive/committee hedging. |
| **Technical walkthrough** (setup, debugging, playbook) | Direct, terse, slightly dry. Playbook + gotchas carry the value; no grand framing or "planting a flag". | Keep commands, code, and Symptom → Cause → Fix crisp. |
| **Digest** (`categories: digest`) | Synthesize by theme rather than marching paragraph by paragraph. Once the author is introduced, state their argument cleanly instead of repeating "he says / 他说" every sentence. Put Zach's take in a short closing note (`A short note` / `顺便记一句`) without inventing personal reading stories ("I read both"). | Verify `source:` URL in front matter (renders the header `Original ↗ / 原文 ↗` link), `sources:` array, and every tag against `_data/tags.yml`. |

**Narration guard:** if front matter has a `narration:` block (recorded audio MP3s), warn Zach before rewriting prose — changing text puts the audio out of sync.

## How to use

1. **Identify the draft.** Default to the most-recently-modified file in `_posts/`. If ambiguous, ask.
2. **Read the draft fully.** Both `lang-en` and `lang-zh` blocks. Check post type, front matter (`source:`, `sources:`, `tags` against `_data/tags.yml`, `narration:`), and whether the user wants a preview or an in-place edit.
3. **Run the claims audit FIRST** — `references/claims-audit.md`. This is a hard gate, not a
   suggestion. If the draft asserts that anything is false, fabricated, invented, or
   nonexistent, the six-point negative-claim protocol must pass before any polishing happens.
   Voice does not matter on a post that asserts something untrue. **Stop and fix if it fails.**
   (Only load `references/standing-corrections.md` when revising older posts or touching those past topics.)
4. **Calibrate voice before rules** — read `references/voice-samples.md` first (positive anchors from Zach's best posts plus the three-way good / hype / defensive-hedge comparison), then `references/preservation-checks.md`, `references/en-antipatterns.md`, `references/zh-antipatterns.md`, and `../humanizer/references/zh-editing.md`. Treat `../humanizer/SKILL.md` as a structural reference rather than a 26-rule quota; positive taste overrides mechanical rule-checking.
5. **Run the EN pass** — strip both hype tells (inflation, quote parades, vault-note templates, em-dash clusters) and defensive-AI tells (preemptive disclaimers, both-sides padding, missing contractions, academic footnotes inline).
6. **Run the ZH pass** — read the Chinese independently for meaning, syntax, and flow. Reconstruct awkward sentences or paragraphs where necessary, break 1:1 paragraph mirroring when Chinese flows better merged or split, and check meaning back against the source.
7. **Run the voice pass** — check that opening, closing, and transitions sound like Zach talking plainly to a friend, without losing edge or conviction.
8. **Apply targeted edits.** Use the platform's file-editing tool for an in-place edit; keep a requested preview separate from the published post. Do not rewrite clean passages merely for consistency.
9. **Compare before and after** using `references/preservation-checks.md`. Check protected content and EN/ZH equivalence. Repair only material issues, then stop.
10. **Report a short summary** — claims-audit result first, then preservation and bilingual-check results, meaningful edits, and any unresolved judgment calls.

## Humanizer pass (runs on every post)

`.claude/skills/humanizer/` is a local adaptation of [blader/humanizer](https://github.com/blader/humanizer) (MIT, base v3.1.0, upstream commit `8c307f3`, local version `3.1.0-local.1`). It retains the 26-pattern catalog and original license, with a Chinese reference and separate accuracy/native-flow reviews informed by Humanizer-zh and Baoyu's refined workflow. General language editing belongs there; Zach-specific voice overrides stay here. Review upstream changes against the recorded base rather than overwriting the adaptation.

Where humanizer and this skill disagree, this skill wins. Humanizer's own Voice rule says a writer's sample overrides its patterns, and `references/voice-samples.md` is that sample.

- **Dashes (§8):** follow `humanizer` §8's zero-dash default for both EN (`—`) and ZH (`——`). Zach explicitly dislikes em-dashes in AI writing; replace them with periods, commas, colons (`:` / `：`), or parentheses (`()` / `（）`) instead (except inside verbatim quotations or code/URLs).
- **Anti-bleach override:** never let humanizer + preservation checks turn the post into a bloodless, disclaimer-heavy memo. Keep Zach's conviction, dry humor, and contractions; cut preemptive "not a guarantee / only a model / depends on context" throat-clearing.
- **Fragments and closers (§2):** one fragment that lands ("Worth it.") and a half-step closing stay. Cut rows of fragments and closers that restate the paragraph.
- **Not X but Y (§1):** apply humanizer's test (keep a contrast only when the negative half corrects a belief the reader actually holds) on top of the "once or twice per post" cap below.
- **Language scope:** §10, §12, §16, §18, and §21 are English word and typography rules, so apply them to `lang-en` only. Chinese “” quotes are correct in `lang-zh`. Every other pattern applies to both blocks.
- **Output:** targeted edits, not humanizer's whole-file rewrite.
- **Chinese flow:** follow `../humanizer/references/zh-editing.md`; targeted can mean rewriting the affected paragraph. Read the resulting Chinese on its own before checking EN/ZH equivalence; preserving all the English clauses is not a fluency test.
- **No new facts or semantic drift:** do not invent or silently drop facts, experiences, motives, feelings, attribution, or qualifications. See `references/preservation-checks.md`; ask for missing material rather than filling it in.

## Hard rules (apply to both languages unless noted)

### Always

- **Lead with something concrete already in the draft.** A personal scene, specific fact, quote, or tension. No throat-clearing, no topic-defining intros, no synthetic thesis blockquotes, and never invent a fake scene to create a hook.
- **Let the thought set paragraph length.** Keep clear long sentences, fragments, and short paragraphs when they sound like Zach. Do not rearrange them just to manufacture variety.
- **Use first person ("I") in essays and personal notes.** Generic "one might consider" is a dead tell. (In digests, present the source's ideas directly without pretending Zach did extra reading he didn't mention.)
- **Cite real names, numbers, dates — in casual register.** No academic `(Author, Year, Journal)` parentheticals or inline peer-review methodology footnotes unless the methodological caveat IS the point.
- **Keep quotations and retellings distinct.** Quote the verified original verbatim, or use fully modern Chinese and label it as a paraphrase. Avoid half-classical rewrites such as "宁可活着曳尾" or "曳尾巴".
- **End a section when its point is made.** Keep a useful transition, but do not manufacture a question or half-thought to force forward pull. Cut redundant summaries.
- **Match voice to topic magnitude** — philosophical post = reflective tone; setup walkthrough = direct, terse, no "planting a flag" framing. (See `references/voice-samples.md`.)

### Never

- **No preemptive disclaimers or committee-safe hedging.** State a clear thought and trust the reader has common sense. Don't append "of course this doesn't guarantee..." / "this model alone doesn't prove..." / "I wouldn't use this to demand..." to every paragraph.
- **No "Challenges and Future Outlook" sections.** Ever.
- **No "Despite its X, Y faces challenges..."** formula.
- **No formulaic "Takeaways" bullet list at the end** unless the topic genuinely warrants one (rare).
- **No "It's not X. It's Y." used more than once or twice in a post.** Flag every instance and rewrite all but real distinctions.
- **No quote carousels** (5+ consecutive celebrity quotes with two-sentence captions) or vault-note templates (`> thesis blockquote` + `## The insight / ## The technique / ## The principle`).
- **No emoji decoration in headings or bullets.**
- **No vague "experts say" / "researchers note" / "many believe".**
- **No grand-statement closing.** Final sentence should feel like the writer just stopped, not delivered a thesis.

## English-specific (`lang-en` block)

See `references/en-antipatterns.md` for the full banned-word list and structural rules. Quick scan items:

- **Em-dashes:** default to **zero** em-dashes (`—`) in EN prose (per Zach's Tier 1 feedback: he dislikes em-dashes in AI writing). Use periods, commas, colons, or parentheses instead. Keep only inside verbatim quotations or code/URLs.
- **Banned figurative words:** delve, foster, tapestry, vibrant (abstract), meticulous, intricate, robust (non-physical), comprehensive, navigate (figurative), leverage (verb), enhance (prefer "improve"), underscore (verb), pivotal, enduring, vital, crucial, intricate.
- **Banned phrases:** "it's worth noting", "in today's [X]", "in the realm of", "when it comes to", "whether you're a [X] or a [Y]", "stands as a testament to".
- **Fragments:** keep them when they belong to Zach's cadence; do not add one to satisfy a minimum.
- **Sentence rhythm:** change length or structure only when it improves the thought or readability, not to hit word-count targets.
- **Conjunction openers:** And/But/So/Because are fine where they connect real thoughts. No minimum count.

## Chinese-specific (`lang-zh` block)

See `references/zh-antipatterns.md`. The job here is different from English: the failure mode is **translation stiffness**, not AI-generic-blandness. Quick scan items:

- **Pronoun overuse:** Chinese drops pronouns more than English. "你向你大脑宣告" → "你其实是在告诉自己". Flag every chain of "你的 / 他的 / 它的" and ask if it's actually needed.
- **Repeated contrasts:** inspect each "这不是 X，是 Y". Keep a real distinction; state the point directly when the negative half only adds emphasis. Do not swap in "说白了" or "并非" and preserve the same empty contrast.
- **语气词:** keep 吧/啊/嘛/呢/了/吗 where they carry the writer's tone or meaning. Their absence is not evidence of translation stiffness; do not add them per paragraph.
- **Em-dash overuse:** default to **zero** Chinese 破折号（——）in prose. Replace with 冒号（：）, 句号（。）, 逗号（，）, 换行, or 中文括号（（））. Keep only inside verbatim quotations.
- **Long nested sentences:** simplify when modifiers obscure the main thought. The number of 的 or clauses is a prompt to inspect, not a rewrite trigger; preserve scope and qualifications when splitting.
- **Translated connectors:** check whether "事实上" / "实际上" / "换句话说" / "因此" express a real relationship. Use a more spoken alternative only where it fits, not as a mechanical substitution.
- **Direct "It's not X. It's Y." translation:** repair the relationship between the ideas, not just the connecting words. Preserve necessary negation and conditions while removing an empty rhetorical shell.
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

0. **Claims audit & metadata passed?** Every negative/accusatory claim cleared `references/claims-audit.md`? For digests: `source:` present, `sources:` clean, all `tags` registered in `_data/tags.yml`? If `narration:` exists, warned Zach before prose changes?
1. **Anti-bleach / anti-hedge check:** any Reviewer-#2 disclaimers ("this model doesn't prove...", "not a guarantee...", "I wouldn't use this to...") or repetitive `I can / I would / I'd like to` padding left? EN personal prose uses contractions naturally?
2. **EN — dashes & banned words:** zero em-dashes (`—`) outside verbatim quotes/code, and no leftover figurative-AI vocabulary?
3. **EN — "It's not X. It's Y." count:** at most 1–2 real distinctions in the whole post?
4. **EN — opening & closing:** concrete hook already in the draft (not a thesis blockquote or invented scene); half-step closing (not a grand thesis)?
5. **ZH — independent native read:** read the complete Chinese without looking at English. Any translation stiffness, pronoun chains, lazy untranslated nouns (`crowdfunding` / `creator`), or rigid 1:1 paragraph mirroring left?
6. **ZH — title & dashes:** plain modern Chinese title; zero `——` outside verbatim quotes?
7. **Voice calibration:** does the post sit in the sweet spot from `references/voice-samples.md` (closer to `10-24-meditations` / `10-24-the-hour` than either old-AI manifesto or new-AI committee-hedge)?
8. **Preservation & bilingual equivalence:** compare before and after per `references/preservation-checks.md` — same facts, numbers, caveats, and ownership of experiences, with nothing silently dropped or invented?

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
