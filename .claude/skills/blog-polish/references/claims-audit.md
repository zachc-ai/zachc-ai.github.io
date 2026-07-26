# Claims Audit — Verification Gate (runs BEFORE the voice pass)

Added 2026-07-26 after a live failure. A post published on this blog accused a source of
fabricating an event. The event was real, documented on worldsbk.com, CCTV and 央广网 — and
its opening scene was already published on this very blog three months earlier. The post had
to be retitled, rewritten and redirected. See `_posts/2026-07-26-i-checked-the-wrong-table.md`.

This file exists so that failure mode cannot ship again.

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
