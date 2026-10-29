# English Anti-Patterns Reference

Adapted from [ContractorKeith/ai-writing-skill](https://github.com/ContractorKeith/ai-writing-skill) with Zach-specific overrides.

Use these patterns to find passages worth reading closely, not to manufacture a house style. Zach's voice sample and the original meaning take precedence. No sentence, fragment, list length, or conjunction quota requires an edit.

## Banned figurative vocabulary

These words are statistically over-represented in AI output. Replace unless quoting or using literally.

### Significance / legacy inflation
- *stands as*, *serves as* (when "is" works)
- *is a testament to*, *is a reminder that*
- *vital*, *significant*, *crucial*, *pivotal*, *key*
- *underscores* / *highlights* its importance
- *reflects broader*, *symbolizing its ongoing/enduring/lasting*
- *setting the stage for*, *marking/shaping the*, *represents/marks a shift*
- *key turning point*, *evolving landscape*, *focal point*, *indelible mark*, *deeply rooted*

### High-frequency AI tells
- *delve*, *foster/fostering*, *bolster/bolstered*, *garner*, *showcase/showcasing*
- *tapestry* (figurative), *vibrant* (abstract), *meticulous*, *intricate/intricacies*
- *interplay*, *underscore* (as verb), *enduring*
- *enhance* — prefer *improve*, *strengthen*, or a specific verb
- *landscape* (as abstract noun, e.g. "the competitive landscape")
- *Additionally* / *Moreover* (sentence-initial)
- *align with*, *valuable insights*, *navigate* (figurative), *leverage* (verb)
- *comprehensive*, *robust* (non-physical)
- *It's important to note*, *It's worth noting*, *It should be noted*
- *In today's [anything]*, *In the realm of*, *When it comes to*
- *Whether you're a [X] or a [Y]*

### Promotional / travel-guide tone
- *nestled*, *in the heart of*, *renowned*, *groundbreaking*, *diverse array*
- *exemplifies*, *commitment to*, *natural beauty* (generic)
- *rich* (figurative — "rich cultural heritage"), *profound* (figurative)
- *boasts a*, *captivates*, *dynamic hub*, *gateway to*

### Copula-avoidance (AI replaces "is/are/was" with fancier verbs)
- Don't replace "is" with *serves as* / *stands as* / *marks* / *represents*
- Don't replace "has" with *boasts* / *features* / *offers* when the simpler verb works
- Prefer plain copulas — they read as more human, not less

## Structural anti-patterns

- **No "Challenges and Future Outlook" sections.** Strongest AI structural tell.
- **No "Despite its X, Y faces challenges..."** formula.
- **No preamble definitions** — never open by defining the topic.
- **No "Not just X, but also Y"** parallelisms unless genuinely contrasting.
- **No padded triads.** Keep a list of three real items; do not add or drop information to change its length.
- **No elegant variation.** Repeat the actual term — don't rotate "this discipline / the craft / this practice".
- **No empty -ing riders.** "...highlighting the importance of X" / "...underscoring the need for Y" can add fake significance. Keep a supported relationship when it carries meaning; do not ban the grammatical form.
- **No vague attributions.** Name sources or skip the appeal.

## Formatting anti-patterns

- **Em-dashes:** Zach uses them. **Allow ~1 per paragraph average.** Flag clusters of 3+ in one paragraph or "every sentence has one" patterns. (Zach's-style override of ContractorKeith's "zero em-dashes" rule.)
- **No emoji decoration** in headings or bullets.
- **Tables** only when comparing 3+ items across 2+ dimensions.
- **Straight quotes**, not curly/smart quotes.
- **Bold sparingly** — only for genuine emphasis, not key-term highlighting.

## Positive principles

- **Rhythm follows the thought.** Split a sentence when it is hard to follow, not because it exceeds a word count. Keep clear longer sentences and natural changes in pace.
- **Fragments are optional.** Keep "Worth it." or "Not even close." when they sound like Zach; never add one to satisfy a minimum.
- **Conjunction openers are optional.** And/But/So/Because can connect real thoughts; no minimum count.
- **Lead with the specific.** First sentence: a name, number, date, place, or scene. Not an abstraction.
- **Preserve supplied specifics.** Keep the user's anecdotes, tools, and numbers. Do not invent a detail or experience because a section lacks one; ask only when missing material blocks the point.
- **Let the reader draw conclusions.** Don't append "this demonstrates the importance of...".
- **Stop when the point is made.** Keep transitions that help the next section; do not force a question, half-thought, or recap.
- **Hedge calibrated.** "I think," "in my experience," "from what I've seen" — when actually uncertain.

## Title rules

- No "[Number] [Plural Noun] That Will [Verb] Your [Noun]" listicles.
- Lowercase except proper nouns when possible.
- Statements / questions over promises. ("I stopped using X" beats "Why You Should Stop Using X".)
- Keep titles concise without cutting a qualification or changing the point to hit a word count.
- Never "The Ultimate Guide to" or "Everything You Need to Know About".

## Opening hooks

- First sentence must earn the second. No context-setting, no definitions.
- Prefer an existing specific detail near the opening; do not invent a name, amount, date, or scene to create a hook.
- Cut throat-clearing: "In today's...", "When it comes to...", "If you've ever wondered..."

## Self-check (run before reporting done)

- [ ] Empty figurative vocabulary removed, with quotations and necessary literal or technical uses preserved?
- [ ] Plain "is/are/was/has" used where they fit, without forced substitution?
- [ ] Em-dashes: ≤1 per paragraph average?
- [ ] Empty -ing riders removed without dropping supported claims?
- [ ] Lists contain the actual material, without padding or deletions to change item counts?
- [ ] Opening: hook, not definition?
- [ ] Legacy/significance bloat: zero?
- [ ] Headings: consistent case (sentence-case preferred but Title-case allowed if Zach used it)?
- [ ] Supplied specifics preserved, with no invented detail or experience?
- [ ] Conclusion: not "Challenges and Future Outlook" / "In conclusion..."?
- [ ] Rhythm follows the thought and sample, without imposed fragments, sentence lengths, or conjunction counts?
- [ ] Before/after meaning, attribution, and qualifications preserved per `preservation-checks.md`?
