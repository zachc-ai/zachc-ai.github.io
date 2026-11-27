---
layout: post
title: "The Curse of Possibility"
title_zh: "可能性的诅咒"
description: "Why AI tools leave people more tired: attention is a fixed pipe, each new possibility is another valve, and all you control is how many you open."
description_zh: "AI 让什么都变得可以做，人却更累了：注意力这根管子就那么粗，能做的越多，越得学会不做。"
date: 2026-04-08
categories: life
tags: [mind, productivity, ai, philosophy]
bilingual: true
sources:
  - title: "The Magical Number Seven, Plus or Minus Two"
    url: "https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two"
  - title: "Cognitive Load Theory"
    title_zh: "认知负荷理论"
    url: "https://en.wikipedia.org/wiki/Cognitive_load"
  - title: "Attention Restoration Theory"
    title_zh: "注意力恢复理论"
    url: "https://en.wikipedia.org/wiki/Attention_restoration_theory"
  - title: "Danziger, Levav & Avnaim-Pesso — Extraneous Factors in Judicial Decisions"
    url: "https://doi.org/10.1073/pnas.1018033108"
  - title: "Weinshall-Margel & Shapard — Overlooked Factors in the Analysis of Parole Decisions"
    url: "https://doi.org/10.1073/pnas.1110910108"
  - title: "Danziger, Levav & Avnaim-Pesso — Reply to Weinshall-Margel and Shapard"
    url: "https://doi.org/10.1073/pnas.1112190108"
  - title: "Glöckner — The Irrational Hungry Judge Effect Revisited"
    url: "https://doi.org/10.1017/S1930297500004812"
  - title: "Upwork 2024 Research"
    title_zh: "Upwork 2024研究"
    url: "https://www.upwork.com/research/ai-enhanced-work-models"
  - title: "Microsoft 2024 Work Trend Index"
    title_zh: "Microsoft 2024工作趋势指数"
    url: "https://www.microsoft.com/en-us/worklab/work-trend-index/"
  - title: "APA 2023 Work in America Survey"
    title_zh: "APA 2023美国职场调查"
    url: "https://www.apa.org/pubs/reports/work-in-america/2023-work-america-ai-monitoring"
  - title: "The Paradox of Choice"
    title_zh: "选择的悖论"
    url: "https://en.wikipedia.org/wiki/The_Paradox_of_Choice"
  - title: "Solow Paradox"
    title_zh: "Solow悖论"
    url: "https://en.wikipedia.org/wiki/Productivity_paradox"
---

<div class="lang-en" markdown="1">

I stopped halfway through organizing my notes today. Not because there was nothing left to do, because there was too much.

My Obsidian vault has about 300 files. With Claude Code, I wired up an automated workflow: morning planning, task dispatch, knowledge digests, cross-project sync. Before AI, I'd never have bothered with any of it (too fiddly, not worth the weekend). Now "not worth it" quietly turns into "why not?"

Then came the twist. Everything became doable, yet everything took longer than expected. The tools got stronger, and I got more tired.

At first I figured I was just doing it wrong. Then I ran into Upwork's 2024 survey:

Upwork's 2024 research found that 77% of employees using AI say the tools have added to their workload.
{: .callout}

Turns out it isn't just me. It's built into the math.

## I. The pipe stays the same width

Two thousand years ago, Zhuangzi wrote a line that hits a lot closer now: "My life has a limit, but knowledge has none. To pursue the limitless with the limited is perilous."

Cognitive science spent half a century putting numbers behind that line. In 1956, George Miller showed that working memory holds about 7 chunks at once (7 chunks, not 7 GB), a hardware ceiling you can't push wider by trying harder. In the late 1980s, John Sweller's Cognitive Load Theory added that this buffer is brief as well as small: jam too many options or noisy interfaces through it and learning and judgment collapse. And Rachel and Stephen Kaplan showed that just suppressing distractions drains a finite tank of directed attention, leaving you with worse judgment, a shorter fuse, and lazier impulses.

From Miller to Sweller to the Kaplans, the takeaway never budges: your brain is a fixed-width pipe.

## II. Ten times more valves

Back in 1971, before smartphones, Slack, or AI, Herbert Simon saw the whole joke coming:

> "In an information-rich world, the wealth of information means a dearth of something else: a scarcity of whatever it is that information consumes, the attention of its recipients."

Attention is zero-sum. Hand it to A, and B gets less.

Now drop AI into that equation. Before AI, a normal workday threw maybe 5 to 10 real decision points at me. With coding agents, it's closer to 50. Should I ask AI to refactor this? Is its output actually right? One more iteration? Is this automation even worth maintaining? Who fixes it when it breaks? Do I understand the code it just wrote? Every new "possibility" installs another valve, and every valve asks whether to open it.

The famous Israeli parole-judge study is often cited here: favorable rulings start around 65% early in a session, drop near 0% as cases stack up, and bounce back to 65% after a food break. Critics have pushed back on the fatigue story (pointing to case order and judges avoiding long cases right before breaks), so the exact cause is still argued over. Either way, I wouldn't want to be the last case before lunch.

David Meyer's switching research is less ambiguous: jumping between tasks can eat up to 40% of productive time in zero-progress restart overhead. And David Strayer at Utah found only 2.5% of people are real "supertaskers"; everyone else just performs worse when juggling.

AI lets you bolt ten times more valves onto the same pipe. Opening more valves doesn't widen the pipe; it just thins the pressure coming out of every single one.

## III. The surveys back it up

The exhaustion shows up across pretty much every workplace dataset from the last few years.

In Upwork's 2024 study, 77% of AI-using workers said the tools increased their workload, 71% of full-time employees reported burnout, and 38% felt overwhelmed about using AI at work. Microsoft's 2024 Work Trend Index found 75% of knowledge workers already using AI (78% bringing their own tools), yet 59% of leaders couldn't quantify the productivity gains, 60% worried leadership lacked a real plan, and 46% of respondents were considering quitting in the next year (up from 40% in 2021).

Even before that wave peaked, APA's 2023 survey of 2,515 U.S. workers showed 38% worried AI would make their jobs obsolete (with over half of that group reporting mental-health strain and 64% feeling stressed at work), while tech monitoring pushed workday stress from 40% to 56%. Gallup's 2021 global emotions data already sat at record highs of 41% stress and 42% worry.

Way back in 2007, Tarafdar named five flavors of technostress: overload, always-on invasion, steep complexity, job insecurity, and constant tool churn. AI turns every one of those dials past ten.

## IV. We've seen this lag before

In 1987, Robert Solow summed up the computer boom in one dry line: "You can see the computer age everywhere but in the productivity statistics." Erik Brynjolfsson put numbers on it in 1993: computing power jumped 100× through the 1970s and 80s, yet labor productivity growth *fell* from over 3% in the 1960s to about 1%.

Steam and electricity ran the exact same delay. Factories in the 1890s bolted electric motors onto steam-era floor plans and wondered why output barely moved; the payoff only showed up decades later once people redesigned the factory layout around electricity.

AI is hitting the same wall: tools explode first, cognitive load spikes, habits and orgs lag behind. We're the slow layer.

## V. Knowing when to close the valve

Rejecting AI isn't realistic, and using it even harder just accelerates burnout. Laozi landed on the boring, durable answer 2,500 years ago: "He who knows when to stop does not find himself in danger," and "Less brings gain; more brings confusion."

When Steve Jobs returned to Apple in 1997, he didn't start by launching new gadgets; he cut 70% of the product line. Focus, as he put it later, means saying no to the hundred other good ideas. Obama's gray-or-blue suits and Zuckerberg's gray T-shirts were tiny versions of the same defense: every trivial choice drinks from the same finite cognitive pool.

That's the shift I'm trying to practice with Claude Code. It *can* help me automate notes, refactor code, build pipelines, run analyses, and draft docs. When I push all of them at once, I end the day more drained than before AI existed, because every new pipeline adds another system to maintain and another pile of AI output to verify. The days that actually feel good are the ones where I decide *not* to build something precisely because I could.

Barry Schwartz called the consumer version of this the "paradox of choice": past a threshold, extra options mostly produce anxiety and regret. AI handed us more options than ever, while leaving our choosing hardware untouched.

## Back to Zhuangzi

Zhuangzi's line wasn't telling people to give up. It sits in the chapter on *nourishing life*, and what needs nourishing is the pipe itself.

The rule I keep coming back to is simple: **the more you can do, the less you should do.** Use the tools to go deeper on fewer things, not wider on shallower ones. Clay Shirky once said the real problem isn't information overload, it's filter failure. AI is the fastest generator we've ever built, which makes throwing most of it away the hardest part of the job.

In 1971, Simon said an information-rich world makes attention scarce. In an AI-rich world, the scarcest thing might be the moments you decide *not* to use it.

*Written April 8, 2026, after an evening using AI to organize 300 note files and ending up more tired than when I started.*

</div>

<div class="lang-zh lang-hidden" markdown="1">

今天下午整理笔记整理到一半，我突然停手了。倒不是没事干，是能干的事太多了。

手头的 Obsidian vault 有三百多个文件，Claude Code 帮我搭了一套自动化流程：晨间规划、任务调度、知识摘要、跨项目同步。以前这些活儿我压根不会碰，太折腾，不值当。现在有了 AI，“不值当”悄悄变成了“顺手好像也能搞定”。

结果冒出一个悖论：每件事都变得“可以做”，可每件事做起来都比想象中耗神。工具越来越强，人反而更累了。

起初我以为是自己没用顺手，直到看到 Upwork 2024 年的一份调研：

Upwork 2024 年的研究发现，用 AI 工具的员工里，77% 说这些工具反而加重了工作量。
{: .callout}

原来不是我一个人的毛病，这是结构本身带来的。

## 一、管子就那么粗

庄子两千多年前说过一句，现在读着有点后背发凉：“吾生也有涯，而知也无涯。以有涯随无涯，殆已。”

后来的认知科学花了半个多世纪，把这句话拆出了硬件参数。1956 年 George Miller 提出著名的“7±2”：人的工作记忆一次大概只能塞进 7 个信息块，7 个 chunk，不是 7 GB，靠更努力也扩不了容。1980 年代末 John Sweller 的认知负荷理论又补了一刀：这小块缓存不仅窄，而且转瞬即逝，选项一多、噪音一大，理解和判断直接掉线。密歇根大学的 Kaplan 夫妇则发现，单是压住周围的干扰就在持续烧能量，油箱一空，人就容易判断失误、脾气变冲、做事草率。

从 Miller 到 Sweller 到 Kaplan，半个世纪的研究说透了同一件事：大脑就是一根固定口径的管子，它不会跟着工具一起变粗。

这很像《天龙八部》里的鸠摩智。少林七十二绝技他一门门硬学下来，看着威风，其实是拿小无相功硬催，最后内息逆转、走火入魔。毛病不在招式，在他经脉就那么宽，却硬塞进七十二门。藏经阁里的扫地僧早点破过他：“每一项绝技，均须有相应的慈悲佛法为之化解。”鸠摩智没听进去。

AI 工具就像这少林七十二绝技，哪一门都能立刻上手，可你的内息（注意力和决策力）还是那么多。同时开的门越多，每一门就只能越用越浅。

## 二、阀门一下子多了十倍

1971 年，还没互联网，更没智能手机和 AI，Herbert Simon 就把结局写明白了：

> “在信息丰富的世界里，信息的富裕意味着其他东西的匮乏，即信息所消耗的东西的匮乏：接收者的注意力。”

注意力是零和的，分给 A，B 就变少。

套进 AI 时代看看。以前一天下来，我大概面对 5 到 10 个真正要拍板的节点；用上 Claude Code 之后，决策点暴涨到 50 个左右：这段要不要让 AI 重构？结果对不对？要不要再改一轮？这条自动化值不值得搭？出 bug 谁来兜底？它给的方案我自己真看懂了吗？每多一种“可能性”，就等于多装了一个阀门，每个阀门都在等你点头开还是不开。

以色列那项著名的假释法官研究常被拿来打比方：每轮开庭初期批准率约 65%，案子越审越多，批准率一路滑到接近 0%，吃完饭歇完又跳回 65%。流行解释说这是决策疲劳，不过后来也有人提出异议（比如没请律师的案子常排在后面，或者法官临近休息不接长案子），真正原因学界仍有争论。但不管怎么解释，反正我不想排在午饭前最后一个。

David Meyer 关于任务切换的数据更直接：来回切任务最多能吃掉 40% 的有效时间，每次切换大脑都要空转一段“重启时间”。犹他大学的 David Strayer 则发现，只有 2.5% 的人是真正的“超级任务者”，其余人只要多任务并行，表现就会往下掉。

AI 让你能一口气多装十倍阀门，但管子还是那根管子。阀门越开越多，总产出未必涨，每个口子分到的水压反而薄了。

## 三、数据摆在桌面上

这种累不是错觉，过去几年的职场数据几乎全指向同一个方向。

最扎心的是 Upwork 2024 年的调研：77% 用 AI 的员工觉得工作量变重了，71% 的全职员工已经感到倦怠，38% 对工作中必须使用 AI 感到吃不消。Microsoft 2024 年工作趋势指数里，75% 的知识工作者已经在用 AI（78% 自己带工具上班），可 59% 的管理者愁着没法量化收益，60% 担心管理层压根没计划，46% 的受访者考虑未来一年离职（比 2021 年的 40% 还高）。

再往前看，APA 2023 年对 2,515 名美国职场人的调查里，38% 担心工作被 AI 淘汰（这群人里超过一半觉得心理健康受损，64% 上班时常紧张焦虑），被技术监控的员工高压比例高达 56%（未被监控的为 40%）。盖洛普 2021 年全球情绪调查本就处在 41% 压力、42% 担忧的历史高位。

早在 2007 年，Tarafdar 就把技术压力分过五类：过载、全天候入侵、学习复杂、不安全感和工具频繁过时。到了 AI 时代，五条全被拧到了最大档。

## 四、这套滞后，历史上演过好几回

1987 年，经济学家 Robert Solow 留过一句很损的话：“你到处都能看到计算机时代，唯独在生产力统计里看不到。”1993 年 Erik Brynjolfsson 算过账：七八十年代算力翻了 100 倍，劳动生产率增速反倒从六十年代的 3% 以上掉到了大约 1%。

蒸汽机和电力也是同一个剧本。1890 年代的工厂把电动机直接装进蒸汽机时代的车间布局里，纳闷为什么产量没涨；直到几十年后大家彻底重排了厂房结构，电力的红利才真放出来。

AI 眼下正卡在同一段滞后里：工具先爆发，认知跟着过载，习惯和组织还没跟上。掉队的不是模型，是我们自己。

## 五、学会关阀门

拒绝 AI 不现实，更拼命用 AI 只会更快把自己耗干。两千五百年前老子就给过一句很土但顶用的答案：“知止不殆”，还有更狠的：“少则得，多则惑。”

1997 年乔布斯回苹果，头一件事不是发新品，而是先砍掉 70% 的产品线。他后来说，专注不是对要做的事说“是”，而是对另外一百个同样不错的主意说“不”。奥巴马只穿灰蓝西装、扎克伯格天天灰 T 恤，背后的算盘也一样：哪怕挑衣服这么小的决定，扣的也是同一池有限的认知电量。

我最近用 Claude Code 也在练这件事。它确实能帮我干几十种活，可一旦同时开五六条线，我比没用 AI 时还累，因为每多一条自动化流程，就多一个要维护的系统和一堆要验收的输出。真正舒服的日子，往往是我明明知道它能做，却主动决定“这次不做”的时候。

Barry Schwartz 管消费里的同类现象叫“选择悖论”：选项超过一定数量，多出来的全是焦虑和后悔。AI 把选项拉到了历史最高，我们大脑里那套做选择的硬件却还停在原地。

## 回到庄子

庄子说“以有涯随无涯，殆已”，落点不是让你躺平，而是“养生”。养的是什么？就是大脑这根管子本身。

我反复提醒自己的一句话：**能做的事越多，该做的事就越少。** 工具照用，但拿它去做更少、更深的事，而不是更多、更浅的事。Clay Shirky 说得准，问题从来不是信息过载，而是过滤失败。AI 是史上最猛的内容生成器，这就让“扔掉大部分、只留真正重要的”成了最难的一步。

1971 年 Simon 说，信息过剩的时代，稀缺的是注意力。到了 AI 过剩的时代，最稀缺的，说不定是你主动决定**不用** AI 的那些时刻。

*写于 2026 年 4 月 8 日，一个用 AI 整理完 300 个笔记文件、结果比动手前更累的晚上。*

</div>
