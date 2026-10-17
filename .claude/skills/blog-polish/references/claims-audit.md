# Claims Audit — Verification Gate (runs BEFORE the voice pass)

Added 2026-07-26 after a live failure by the AI drafting assistant (Claude Code), not by Zach.
A post it drafted for this blog accused a source of fabricating an event. The event was real,
documented on worldsbk.com, CCTV and 央广网, and its opening scene was already published on
this very blog three months earlier. The post was retitled and rewritten the same day, then
deleted on 2026-10-12 at Zach's request because it presented the assistant's mistake as his
own. It survives only in git history (commits b9e790f and d5d2baa).

This file exists so that failure mode cannot ship again. "I" below means the assistant.

**Attribution rule:** never write the assistant's errors into Zach's first-person voice, and
never reuse this incident in a post as Zach's own mistake.

---

## When this gate runs

**Before** the EN pass, the ZH pass, and the voice pass. Voice does not matter on a post that
asserts something false. If this gate fails, stop — do not proceed to polish.

## Step 1 — Extract every external-world claim

List every sentence in the draft that asserts something checkable about reality: names, dates,
numbers, events, outcomes, quotes, attributions, "X said", "Y happened", "Z doesn't exist".

Personal anecdotes ("I tried this for two weeks") are exempt. Everything else is in scope.

## Step 2 — Classify each claim by burden of proof

| Claim type | Example | Burden |
|---|---|---|
| **Positive, low stakes** | "Naval has a line about desire" | 1 source |
| **Positive, load-bearing** | the fact an argument or title rests on | 2 independent sources |
| **Quote / attribution** | "Neyman said X" | primary or near-primary source |
| **Negative / accusation** | "this never happened", "this was fabricated", "X got it backwards" | **see Step 3 — highest bar in the file** |

**The asymmetry is the whole point.** "This happened" needs one good source. "This never
happened" is a universal negative and cannot be established by a failed lookup.

## Step 3 — The negative-claim protocol (mandatory, no exceptions)

Before the draft may assert that something is false, fabricated, invented, inverted, or
nonexistent, ALL of the following must be true and stated explicitly in the working notes:

1. **Local corpus searched first.** `grep` the blog repo (`_posts/`) and the vault. The
   cheapest source is what I already wrote. In the 2026-07-26 failure the refutation was in
   `_posts/` the entire time.
2. **Searched in the language the event lives in.** A claim about Chinese industry, sport,
   people or business gets at least one Chinese-language search. English Wikipedia is not a
   census of reality.
3. **Named the disconfirming search.** Write the sentence: *"If this were true, the search that
   would have found it is ____."* Then confirm that exact search was run. This single line
   would have caught the 2026-07-26 failure instantly — "I checked the premier-class entry
   list" makes the hole self-evident.
4. **Checked the scope/reference class.** Is the table, list, page or dataset I searched
   actually the one this claim lives in? Competitions have support classes. Companies have
   subsidiaries. Datasets have partitions. **One table is not the whole domain.**
5. **Two independent sources for the negative**, ideally including one that would have had
   commercial or institutional reason to report the event if it happened.
6. **Read past the summary.** A summary compresses. Using a summary to refute someone's
   description of *process detail* is a category error — the summary dropped that detail by
   construction. (This is how the Wang Shi ruling went wrong: a 第一桶金 summary covering only
   the final outcome was used to deny a documented loss-then-recovery arc.)

If any of the six is unmet: **downgrade the claim.** "I couldn't verify this" is publishable.
"This is fabricated" is not.

## Step 4 — Do not inherit verdicts

A conclusion found in my own notes, digests or vault is **not** verified. It is a prior
observation with unknown provenance and possibly a stale or careless check behind it.

Notes that *look* rigorous — tables, citation lists, hedged language, confidence markers — are
the most dangerous, because the apparent care substitutes for actual care.

**Rule: the load-bearing claim of a post is re-derived from primary sources at publish time,
every time.** Decorative details may be inherited. The beam may not.

Tell for this failure: in the 2026-07-26 post I re-verified Cromwell's rule (decorative, the
argument didn't need it) and inherited the fabrication verdict (load-bearing, the title
depended on it). **I checked the ornament and trusted the beam.**

## Step 5 — Pattern is not evidence

"This looks like AI slop" / "this has the shape of a fake inspirational story" / "this smells
like content farm output" are **signals to look harder**. They are never findings.

The suspicious shape in the 2026-07-26 case was: inspirational underdog + precise date + named
competition + famous brands defeated. That shape does correlate with generated content. It was
also an accurate description of a real event covered by state media.

**A strong prior should raise the bar for what counts as confirmation. If it is lowering the
bar instead, it has stopped being a prior and become a conclusion.**

## Step 6 — Title check

If the title asserts a fact, that fact gets the strictest tier in Step 2 — plus a second
person's eyes if possible. A wrong title cannot be quietly patched later; it is the URL, the
share text, and the thing people remember.

---

## Output of this gate

Before proceeding to the voice pass, report:

```
Claims audit — <N> external claims found
  Positive/low:      <n> — sourced
  Load-bearing:      <n> — sourced x2, re-derived at publish time
  Negative claims:   <n> — six-point protocol: PASS / DOWNGRADED
  Title asserts fact: yes/no — verified how
```

If there are zero negative claims, say so explicitly. That is the good case.

---

## Standing corrections (do not re-introduce)

- **ZXMOTO / 张雪机车 won.** 2026-03-28/29, Portimão, WorldSSP class, Valentin Debise, double
  win, 3.685s margin in race one. First Chinese manufacturer to win at a WSBK weekend. It was
  a **round** win in the **Supersport support class**, not a premier-class season title —
  compressing that is imprecise, not fabrication.
- **Wang Shi's corn trade lost money first.** ~¥400k earned in 1983, then wiped out with ~¥700k
  of debt (~¥1.1M swing) on the Hong Kong chicken-feed rumour, then a credit-financed
  double-down that cleared ¥3M+, which seeded Vanke. "First deal lost, borrowed, went again"
  is a compression, not an inversion.

### From the 2026-10-12 fact-check pass (verified against primary sources)

- **Feng Ji's line is “踏上取经路比抵达灵山更重要”** (新华社《扬声》, Aug 2024). “比取到真经更重要” is
  this blog's own riff, used in the Journey post's title, not his words.
- **Jensen Huang's "I hope suffering happens to you"** comes from the SIEPR Economic Summit at
  Stanford (2024-03-01), not a commencement speech.
- **The ZXMOTO race bike is over 90% domestic, not "entirely Chinese."** The engine, electronics
  and frame are in-house; the calipers are Brembo. It broke a European/Japanese hold, which
  includes Honda, so not only "Ducati, Yamaha, Kawasaki."
- **守正出奇 is not in 《孙子兵法》.** It's a later distillation of “以正合，以奇胜” (《兵势篇》).
- **GDP = the Spurs** (Ginóbili, Duncan, Parker). They beat the Heat's big three in 2014.
- **The *Outliers* hockey cutoff is January 1.** September 1 is the English soccer cutoff.
- **Verbatim, not paraphrase:**
  - Buffett 1996: "The size of that circle is not very important; knowing its boundaries,
    however, is vital."
  - Karpathy: "forget that the code even exists."
  - Naval (nav.al/rich): "…right 80% of the time, and somebody else is right 90% of time…"
  - Willison: "…check ten minutes later and find that it wasn't worth the tokens."
- **金庸:**
  - The warning to 鸠摩智 comes from the 扫地僧, not 玄慈, and 鸠摩智 really does 走火入魔.
  - 游坦之 had deep 内力 but mediocre 招式.
  - The 扫地僧 says “四十二年，还是四十三年”, not seventy.
  - 玄慈 took 二百棍 and 自绝经脉. There is no statue.
  - “我教你也是教，不教你也是教” is not in 射雕.
  - “大力金刚” is not in 笑傲.
- **《秋水》 turtle:** the text has cloth, a box and the temple. There is no seasonal rite.
- **Studies:**
  - Hölzel 2011 found gray-matter gains in the hippocampus and posterior cingulate, not the PFC.
  - Lim & Dinges 2010 gives no "20–30%".
  - Supertaskers (2.5%) are Watson & Strayer 2010, not Meyer.
  - Upwork 2024: 77% say AI added to their workload, 71% are burned out, and 38% feel
    overwhelmed about using AI. There is no "over half overwhelmed."

### From the 2026-10-17 fact-fix pass (verified against primary sources)

- **《秋水》's 巾 is plain cloth** (成玄英疏 / 經典釋文: 覆之以巾). No silk, no embroidery, no
  stated luxury. “绸布” and “绣花” were embellishments.
- **扫地僧** is a 服事僧, so “烧火、洒扫” fits the novel. The text says 玄字辈 “不识此僧”, not
  that nobody remembered his name. The novel's term is 七十二**绝技**, not 绝艺.
- **Xie et al. 2013 (glymphatic) is a mouse study:** ~60% wider interstitial space and ~2×
  faster Aβ clearance in sleep. Not "10–20×," not PFC-specific. Miao et al. 2024 (mice)
  found clearance *drops* in sleep, so the "sleep rinses the brain" story is contested.
- **Hungry judges (Danziger 2011):** ~65% → near 0 → ~65% after a food break is right. The
  fatigue explanation is disputed (Weinshall-Margel & Shapard 2011 on case order; Glöckner
  2016 simulation). Don't state "the cases didn't get worse" as settled.
- **Myelin:** practice changes white matter (Bengtsson 2005, Scholz 2009; McKenzie 2014 in
  mice), but "more myelin = more skill" is not settled. Not "much weaker," not "proven."
- **METR's 19% slowdown** is 16 experienced open-source developers on their own repos in
  early 2025, not "senior developers." METR's Feb 2026 update calls it out of date.
- **CodeRabbit's 1.57× security / 2.74× XSS** come from 470 open-source PRs (Dec 2025), not
  "AI-generated code" in general. The per-category split is reported by The Register.
- **"Don't State the Obvious" / "Avoid Railroading Claude"** are from Thariq Shihipar's X
  article (2026-03-17), not Anthropic's official docs. `frontend-design` named Inter and
  purple gradients only in its pre-2026-09-03 version.
- **AI-Ghost-Lab's "not in the living room" line** is an unverified gist (Bilibili blocks
  fetches). Present it as a translated paraphrase, never as a verbatim quote.
