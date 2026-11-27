# Voice Calibration — Confidence-tiered

The existing posts in `_posts/` were drafted with AI assistance, with iterative Zach corrections. So the posts are a **mix**: some patterns survived because they're genuinely Zach's voice; others survived because Zach didn't catch them. This file commits to a confidence call on each pattern, rather than treating the posts as either fully trustworthy or fully poisoned.

When polishing, weight rules by their confidence tier.

---

## Tier 1 — Trusted (Zach's own words)

These are verbatim from Zach's feedback memory or live conversation. They are voice ground truth, full stop.

### Tone direction
> "这个语气有点太装了 / 更纯粹 简洁一些 不用搞得故作高深"
> — pushback on the GitHub Pages domain post, 2026-04-18

**Implication:** default to direct, terse, no performative depth. Cut grand framings on small tasks.

### Spoken, sincere, plain
> "我希望我的文章更加口语化 / 更加 真诚纯粹"
> — after comparing two rewrites of the 2026-10-24 posts, 2026-10-25

**Implication:** write the way Zach would say it to a friend. This applies to every post, philosophical ones included.
- Use short, everyday sentences. ZH uses 口语 words (干活、挺、搞、聊) and 语气词 where they fall naturally. EN uses contractions and plain verbs.
- Don't craft quotable lines. Parallel aphorisms ("跟着所有人的日历走，agent 跟着我的注意力走", "它赢的是打断，不是别的钟点") read as performed; say the point plainly.
- Cite casually and inline ("第八卷里有一段", "roughly:"). Don't put a "第X卷第Y节，自译" line under every quote. One note per post about translations is enough. Keep the source list in front matter.
- Say what he actually thinks. Keep real doubt, and cut both defensive hedges and performed confidence. Don't add theory vocabulary ("无差别之物") unless the argument needs it.
- Sincere means nothing invented. Don't claim habits, origin stories, or feelings he hasn't stated; phrase them as things he's trying or wants.

### No em-dashes (2026-11-26 feedback)
> "我不喜欢AI写作里 大量使用 破折号 这个不符合我的写作习惯"
> — pushback on `——` in the `hawk-dove-game` polish preview, 2026-11-26

**Implication:** default to **zero** em-dashes (`—` in EN, `——` in ZH) outside verbatim quotations, code, or URLs. Earlier April–May posts had 10–16 dashes because of early AI drafting, not because Zach likes them. (Corrects the earlier mistaken note: *"I thought one `——` added a nice pause → Zach immediately flagged it as AI-like and not his habit."*)

### Translation quality
> "中文翻译 太像机器翻译了 / 把中文版重新 用人话 写一遍"
> — pushback on `2026-05-06-you-dont-discover-yourself.md`, 2026-05-06

**Implication:** ZH must be written natively in Chinese, not transliterated from English. This produced the rules in `zh-antipatterns.md`.

### Title accessibility
> "这个中文标题太难懂了，换通俗易懂的标题"
> — pushback on `2026-05-03-drag-your-tail-in-the-mud.md` (rejected `曳尾涂中`)

**Implication:** ZH titles must be plain modern Chinese, no classical 4-character idioms unless the post is about that idiom.

### Citation register (2026-05-06 feedback)
> "普通写blog 不需要这么多引用吧？ 显得不够生活和随性了"
> "I don't think hard cap is the right approach, is there other ways to make the reference and citations not looks like a paper?"

**The real problem isn't *count*. It's *register*.** A casual post can name three thinkers and still feel personal; a paper-stiff post can name one and still feel academic. The fix is to change *how* references appear, not how many.

**Academic register (drop):**
- "(Author, Year)" parentheticals: "(Maltz, 1960)", "(Dweck, 2006)"
- Full titles + years stacked: "Carol Dweck spent most of *Mindset* (2006) making this point"
- Journal names: "Stanovich's 1986 *Reading Research Quarterly* paper"
- Effect labels paraded: "the Matthew Effect, the Relative Age Effect, the Dunning-Kruger effect"
- Authority appeals: "studies show", "research demonstrates", "this seminal work"
- Italicizing book titles every time the name appears
- "Foundational text" / "landmark study" / "the canonical reference"
- A bottom Sources block with 5+ entries and "— relevance note" taglines

**Casual register (keep):**
- First-name basis where possible: "Naval has a line", "Carol Dweck wrote this great book about it"
- Just the *idea* without re-attributing every time: "praise the process, not the outcome" doesn't need Dweck pinned to it once you've named her once
- Inline hyperlinks over a Sources block when the reference is small
- "An old book by some guy named Maxwell Maltz" / "I was reading something by..."
- Famous phrases used naked: "fake it till you make it", "praise the process" — don't cite, just deploy
- Dropping the citation entirely when the *name* doesn't add weight

### The deletion test

For every named source in the draft, ask: **if I deleted this citation, would the sentence break?**

- Yes → citation is load-bearing, keep it.
- No → it's academic apparatus, cut it.

Examples from this skill's first test post:
- "Naval has a sentence that gets sharper every year I read it" → name adds weight (the quote is his), keep.
- "Carol Dweck spent most of *Mindset* (2006) making this point" → "this point" stands on its own, the apparatus is decoration. Cut to bare "praise the process, not the outcome."
- "The Matthew Effect, the Relative Age Effect — ages 0 to 10..." → labels add nothing the rest of the sentence doesn't carry. Cut.
- "Maltz's most cited finding is..." → "most cited" is academic marketing. Just say the finding.

### Sources block calibration

The block is rendered by the post layout from front matter `sources`; calibrate that list, never a hand-written body section.

- **Skip entirely** if the post has only 1-2 references and they're already inline-linked.
- **Keep** if there are real research articles or external pieces a reader might want to follow up on.
- **No taglines.** "[Title](url) — short note" reads like a syllabus. Just title + URL.
- **No date/edition padding.** "*Psycho-Cybernetics* (1960)" → "*Psycho-Cybernetics*". The year is information for librarians, not blog readers.

### When in doubt

Would Naval Ravikant put this citation in a tweet? If no, drop it.

(Naval names sources when he wants to credit a quote. He never name-checks for authority. That's the right calibration for this blog too.)

### Voice tone classification (from feedback memory)
- Philosophical posts → reflective tone OK, longer form, big-name framings allowed
- Setup walkthroughs → direct, terse, no grand outro
- Digests → clean theme synthesis, minimal attribution crutches, short personal note at the end
- Default to philosophical pacing only when topic actually warrants it

### Gold-standard positive anchors (Oct 2026 — Zach's best voice)

When calibrating tone, match these passages before consulting any banned-word list:

- **Plain, funny, sincere (`2026-10-24-meditations-and-stoicism.md`):**
  - EN: *"Book Five of Meditations opens with a Roman emperor arguing with his blankets... I find this weirdly comforting. The man running the Roman Empire kept a private notebook, and part of it is him talking himself out of bed."*
  - ZH: *"《沉思录》第五卷一开头，罗马皇帝马可·奥勒留在跟被窝较劲……读到这儿我挺乐的，也挺安心。管着整个罗马帝国的人，私下的本子里，有一部分是在劝自己起床。"*
- **Data + honest self-doubt (`2026-10-24-the-hour-i-dont-want-to-give-up.md`):**
  - EN: *"That number doesn't prove much. A commit marks when something got finished, not how long I spent thinking about it, and some of those commits were written by an agent anyway. But it lined up with the feeling, so I stopped writing the feeling off."*
  - ZH: *"这个数字说明不了太多。commit 只记事情做完的那一刻，前面想了多久，它不知道。而且有些 commit 本来就是 agent 写的。不过它跟我的感觉对得上，我也就不觉得那是错觉了。"*
- **Specific memory, half-step exit (`2026-10-25-before-i-knew-too-much.md`):**
  - ZH: *"小时候家里有一台电脑，赛扬处理器，接着一台大屁股 CRT 显示器，上网靠拨号……行了，我接着折腾去了。"*

### Three-way calibration (the sweet spot)

Avoid BOTH ditches on either side of Zach's voice:

| Ditch / target | What it sounds like |
|---|---|
| **Too flashy (old AI manifesto)** | *"The temple is welcoming. The cloth is flattering. The mud is honest."* / *"The equation has four variables. Pick one, and move."* / 10 celebrity quotes in a row. |
| **Too bleached (new AI committee-hedge)** | *"This is my application of the model, not something the payoff table proves."* / *"These are proposed ways of communicating, not guarantees that the other person will respond well."* / zero contractions. |
| **Target (Zach)** | *"The person who pushes hardest isn't necessarily tougher. Sometimes their seat just lets them pocket the upside and hand the bill to someone else."* / *"状态差的时候，硬逼自己“热爱生活”其实挺假。那天能把日子熬过去，就已经算交差了。"* |

---

## Tier 2 — High confidence (survived corrections; my judgment call)

These patterns emerged through iteration where Zach DID push back on adjacent things and DID NOT push back on these. I judge them voice-genuine.

### Mid-post moves
- **Famous quote → "Read that twice." → no explanation.** Letting a quote land without unpacking.
- **One personal anecdote per section** with a specific number or scene ("I tried this for two weeks before a difficult conversation").
- **Bold for the punch line, not for key terms.** Bold = the sentence that should hit, not vocabulary highlighting.
- **English terms kept inline within Chinese** when natural: `servo`, `prompt`, `LLM`, `harness`, `backlog`, `i 人`, `flag`.

### Asides — dry humor
- EN: "Annoyingly, it works." / "Either way it was free." / "I'll stop."
- ZH: "免费的事不做白不做。" / "烦人的是，它真管用。" / "行了，我打住。"

These survived multiple drafts, fit the "slightly dry" feedback note, and read true.

### Closings — half-step away
- "Anyway. Going to go drag my tail in the mud now, I guess."
- "行了，我去泥里拖尾巴了。" (Modernized after Zach's 2026-10-18 feedback against half-classical paraphrases.)
- A question that makes the reader sit with it (not a thesis recap)

### Cross-post callbacks
The 2026-05-06 post ending with "drag my tail in the mud" referencing the 2026-05-03 post — Zach didn't object. This is an Easter egg pattern worth preserving when natural opportunities appear. Don't manufacture them.

### Opening pattern
**Concrete personal scene or specific quoted line first.** Not a thesis statement, not a definition.

Examples that survived:
- "I stopped in the middle of organizing my notes today."
- "Last week I listened to a podcast where the host..."
- "OK here's a sentence I've caught myself saying way too often this year:"

Tier 2 because they survived without correction, but see Tier 4 for OK-here's-a-sentence specifically.

---

## Tier 3 — Probable voice-genuine (use, but watch)

These are patterns I lean toward keeping but I'd want Zach's signal on.

- **Numbered point structures** within a section ("**One.**" / "**Two.**" / "**Three.**" or "**一**" / "**二**" / "**三**") — concise and Zach-shaped, but verge on AI-list-tic.
- **Source links at the bottom** with a 2-3 word relevance note — clean, but it's also an AI default.
- **"This is the part nobody tells you"-style aside** — useful but easy to overuse.
- **Trap 1 / Trap 2 framing** — works for moral/philosophical posts but is a genre formula.

When polishing, allow these but flag if any single pattern repeats more than once in the same post.

---

## Tier 4 — Suspicious (likely AI residue, treat with skepticism)

These slipped through. Flag and consider rewriting.

### Phrasing tics
- **"Read that twice."** — appeared in two posts already. One per quote is fine; if it shows up multiple times in one post, cut.
- **"That stings the first time you hear it. Then it just sits there, true."** — pattern of "X. Then Y, true." is poetic-AI.
- **"OK here's a sentence I've..."** — clean, but starts to feel like a formula if reused. Vary.
- **"It's the most boring superpower you can develop. Annoyingly, it works."** — paired-sentence rhetorical kicker. Slightly Naval-pastiche.

### Structural tics
- **Symmetric "two types" / "three levers"** — useful but high AI-list-density. Use when actually structurally warranted, not as default scaffolding.
- **"Trap 1 / Trap 2" + "Three levers" in the same post** — too tidy. If the post has both, one should go.
- **Section dividers (`---`) every 3-4 paragraphs** — overused. Use only when the next section is a real shift in topic.
- **"It's not X. It's Y." rhetorical reversal** — known AI tic. Allowed once per post max. Catch every other instance.

### Em-dash usage
**Promoted to Tier 1 (2026-11-26):** existing April–May posts had heavy em-dashes solely from early AI drafting. Default to zero (`—` / `——`) in prose outside verbatim quotations.

### Closing kickers
- "The temple is welcoming. The cloth is luxurious. The mud is honest." — three-beat closing, likely AI-poetic. Keep ONE such kicker per post if it lands; flag if multiple posts reuse the structure.

---

## Tier 5 — NOT trusted (do not pattern-match to existing posts)

- **Specific quoted lines copied as templates.** Don't copy. Only refer to patterns/structures.
- **Frequency baselines** ("posts usually have 3 numbered points") — reinforces AI scaffolding habit.
- **Em-dash density.** See Tier 4.
- **The current draft being polished.** Obviously.

---

## Decision rule when polishing

For each line you'd flag or change:

1. **Does it violate `en-antipatterns.md` or `zh-antipatterns.md`?** → fix it.
2. **Does it match a Tier 4 pattern?** → flag and propose rewrite.
3. **Does it match a Tier 1-2 pattern?** → keep, even if it looks AI-shaped on first scan.
4. **Tier 3?** → keep on first appearance, flag on repeat in same post.
5. **Genuinely unsure?** → propose two alternatives and let Zach pick. Don't average toward either pole.

---

## Promotion / demotion

This file should evolve. As Zach explicitly endorses or rejects patterns in conversation:

- **Promote** patterns from Tier 3 → Tier 2, or Tier 4 → Tier 3, when he confirms they sound right.
- **Demote** Tier 2 patterns → Tier 4 if he flags them as AI-tics.
- **Add** new patterns to Tier 1 whenever he gives explicit voice instructions.

Never silently reclassify — when promoting/demoting, leave a note about what triggered the move.
