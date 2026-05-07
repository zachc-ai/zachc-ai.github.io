# English Anti-Patterns Reference

Adapted from [ContractorKeith/ai-writing-skill](https://github.com/ContractorKeith/ai-writing-skill) with Zach-specific overrides.

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
- **No rule-of-three lists.** Vary list lengths to 2, 4, or 5.
- **No elegant variation.** Repeat the actual term — don't rotate "this discipline / the craft / this practice".
- **No trailing -ing phrases.** "...highlighting the importance of X" / "...underscoring the need for Y" — give the point its own sentence.
- **No vague attributions.** Name sources or skip the appeal.

## Formatting anti-patterns

- **Em-dashes:** Zach uses them. **Allow ~1 per paragraph average.** Flag clusters of 3+ in one paragraph or "every sentence has one" patterns. (Zach's-style override of ContractorKeith's "zero em-dashes" rule.)
- **No emoji decoration** in headings or bullets.
- **Tables** only when comparing 3+ items across 2+ dimensions.
- **Straight quotes**, not curly/smart quotes.
- **Bold sparingly** — only for genuine emphasis, not key-term highlighting.

## Positive principles (require, don't just permit)

- **Mandatory rhythm:** at least one sentence under 8 words AND at least one over 25 words per post.
- **At least one sentence fragment per post.** "Worth it." "Not even close."
- **At least 2 sentences starting with And/But/So/Because.**
- **Lead with the specific.** First sentence: a name, number, date, place, or scene. Not an abstraction.
- **Only-I-would-know-this detail per section.** Personal anecdote, specific tool, real number. Hard to hallucinate.
- **Let the reader draw conclusions.** Don't append "this demonstrates the importance of...".
- **Forward-pull endings.** Section ends with a question, transition, or half-thought. Never a summary.
- **Hedge calibrated.** "I think," "in my experience," "from what I've seen" — when actually uncertain.

## Title rules

- No "[Number] [Plural Noun] That Will [Verb] Your [Noun]" listicles.
- Lowercase except proper nouns when possible.
- Statements / questions over promises. ("I stopped using X" beats "Why You Should Stop Using X".)
- Under 10 words.
- Never "The Ultimate Guide to" or "Everything You Need to Know About".

## Opening hooks

- First sentence must earn the second. No context-setting, no definitions.
- Name something specific in first 2 sentences (dollar amount, date, place, person).
- Cut throat-clearing: "In today's...", "When it comes to...", "If you've ever wondered..."

## Self-check (run before reporting done)

- [ ] Banned figurative vocab: zero?
- [ ] Copulas: plenty of "is/are/was/has", not all replaced?
- [ ] Em-dashes: ≤1 per paragraph average?
- [ ] Trailing -ing phrases: zero?
- [ ] Rule-of-three: at most one per section?
- [ ] Opening: hook, not definition?
- [ ] Legacy/significance bloat: zero?
- [ ] Headings: consistent case (sentence-case preferred but Title-case allowed if Zach used it)?
- [ ] Specificity: every section has at least one specific name/number/date/place?
- [ ] Conclusion: not "Challenges and Future Outlook" / "In conclusion..."?
- [ ] At least one fragment, one <8-word sentence, one >25-word sentence?
- [ ] At least 2 conjunction-opener sentences?
