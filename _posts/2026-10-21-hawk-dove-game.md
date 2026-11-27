---
layout: post
title: "The hawk-dove game: who pays for the fight?"
title_zh: "鹰鸽博弈：谁在买单"
description: "A conflict can reward the person who starts it while charging everyone else. Reading the hawk-dove game through everyday boundaries, work priorities, and the rules that decide who pays."
description_zh: "有些冲突，发起的人拿到好处，代价却落在别人身上。从鹰鸽博弈出发，想想生活中的退让、工作中的边界，以及哪些规则值得改。"
date: 2026-10-21
categories: life
tags: [game-theory, mind, career, systems]
bilingual: true
image:
  path: /assets/images/hawk-dove-cover.png
  width: 1200
  height: 630
  alt: "A hawk and a dove face a shared resource."
narration:
  en:
    src: /assets/audio/hawk-dove-game.en.mp3
    duration: 532
  zh:
    src: /assets/audio/hawk-dove-game.zh.mp3
    duration: 558
sources:
  - title: "John Maynard Smith and George Price — The Logic of Animal Conflict"
    url: "https://www.iasi.cnr.it/~vbonifaci/semcn/Smith1973.pdf"
  - title: "Stanford Encyclopedia of Philosophy — Evolutionary Game Theory"
    url: "https://plato.stanford.edu/entries/game-evolutionary/"
  - title: "Hall, Porter, and Dawkins — Dominance, sharing, and assessment in an iterated Hawk–Dove game"
    url: "https://arxiv.org/abs/1907.02160"
  - title: "Reinhard Selten — A note on evolutionarily stable strategies in asymmetric animal conflicts"
    url: "https://link.springer.com/content/pdf/10.1007/978-94-015-7774-8_3.pdf"
  - title: "Henwood, Friedman, and Oprea — Separating the Hawks from the Doves"
    url: "https://escholarship.org/uc/item/2zm6c64m"
  - title: "NitinKapoor2020 on hawk and dove strategies"
    title_zh: "NitinKapoor2020 谈鹰与鸽的策略"
    url: "https://x.com/NKapoor2020/status/2099342032020078592"
---

<div class="lang-en" markdown="1">

<img class="theme-img-light" src="{{ '/assets/images/hawk-dove-cover.svg' | relative_url }}" width="1200" height="630" alt="An angular hawk and a rounded dove face a small red resource between them.">
<img class="theme-img-dark" src="{{ '/assets/images/hawk-dove-cover-dark.svg' | relative_url }}" width="1200" height="630" alt="An angular hawk and a rounded dove face a small red resource between them.">

Picture a Friday afternoon. Someone drops a new feature request and wants it by end of day. Getting it done means dropping something you already promised, or giving up your evening.

They get the feature. You lose the night.

What draws me to the hawk-dove game is how cleanly a setup can reward pushing hard. When someone else supplies the extra hours, insisting on "today" gets pretty cheap.

## A resource, two moves

In the textbook version, two players contest a resource worth `V` with two moves:

- Hawk: escalate and keep pushing, willing to take a costly fight.
- Dove: avoid an expensive clash and back down if the other player escalates.

These are moves, not personality types. Saying no politely and firmly doesn't make you a hawk; a hawk is willing to risk real damage to win.

Two doves split the resource. A hawk facing a dove walks away with all of it. Two hawks fight, each with an even shot at winning and an injury cost `C` if they lose. Here's the payoff for the row player:

| My strategy | Against a hawk | Against a dove |
|---|---:|---:|
| Hawk | `(V - C) / 2` | `V` |
| Dove | `0` | `V / 2` |

The interesting regime is `C > V > 0`, where losing a fight hurts more than the prize is worth. In a room full of doves, one hawk cleans up. In a room full of hawks, a dove saves itself from wrecking its own week. Unlike the prisoner's dilemma, neither move always wins: against a dove, hawk pays better; against a hawk, dove does.

John Maynard Smith and George Price introduced this evolutionary-stability framework in 1973 (*The Logic of Animal Conflict*). Evolutionary stability asks which strategies resist invasion in a population. Useful lens, not a manual for how to live.

## 25% isn't a life formula

Suppose a large population matches up at random, with hawks making up share `p`. Expected payoffs are:

```text
Hawk: p(V - C)/2 + (1 - p)V
Dove: (1 - p)V/2
```

Set them equal and you get:

```text
p* = V / C
```

Plug in `V = 10` and `C = 40`, and the equilibrium lands at 25% hawks, with both strategies averaging `3.75`. (If `C <= V`, fights are cheap enough that all-hawk takes over.)

That clean 25% only holds when the matchup is symmetric, the matching is random, and you only have two buttons to press. I saw a post on X recommending a 70% dove, 30% hawk mix for life. I'd rather look at what's at stake and what a fight costs than carry a fixed quota around. Even our `25%` doesn't mean I should be difficult in one out of every four meetings.

Even in a single two-player game with `C > V`, both hawk-dove and dove-hawk are Nash equilibria: once one person pushes and the other folds, neither gains by switching alone. Notice that doesn't mean the same person has to fold every time. Notice too that stability can be lousy for everyone: if both sides played dove in our example, each would earn `5` instead of `3.75`, except a lone hawk could defect and grab `10`.

A lab study by Henwood, Friedman, and Oprea shows how much the matching setup matters. When students paired up from one shared pool, play drifted toward the mixed equilibrium; when they matched across two separate groups, outcomes turned sharply lopsided. One lab setup isn't a universal rule for relationships, but it's a sharp reminder to watch how roles and matchups get assigned.

## Who actually pays?

In the textbook table, both sides face the same `V` and `C`. Real conflicts rarely look that neat.

The person pushing for a Friday change gets the credit and visibility; someone else loses their weekend. An argument might cost one person five mildly annoying minutes and leave the other person stewing for hours. The prize itself can matter very differently to the two sides.

So the person who pushes hardest isn't necessarily tougher. Sometimes their seat just lets them pocket the upside and hand the bill to someone else. Once costs and payoffs go asymmetric, a single `V/C` ratio stops telling you much.

That also makes me skeptical of generic advice to "raise the cost of conflict." Making avoidable last-minute churn visible to the person causing it can help. Piling on extra approval meetings usually just taxes everyone, including the people already absorbing the mess. Before adding a rule, I want to know where the bill actually lands.

## At work, put the trade-off on the table

Back to Friday afternoon. I'd start by asking why it has to be today. Real emergencies happen, and plans should bend for them. Calling everything urgent doesn't manufacture extra hours.

Then I'd put the trade-off in plain sight:

> I can ship this today if we push A to Monday. If both deadlines have to hold, we either cut scope or find someone else with bandwidth. Which commitment are we changing?

No drama, no power play. There's a priority call to make, and putting the displaced work right beside the new request forces it into the open.

If I own the priorities, I state what's moving. If I don't, I put the choice in front of whoever does. Otherwise, a priority call quietly turns into an unspoken assumption about somebody's free evening.

When the same clash keeps coming back, it's better to settle the rules before the next fire drill: who owns the call, whose input is required, what evidence reopens it, and when an exception escalates. In asymmetric hawk-dove models, players can use a simple cue like owner vs. intruder to avoid pointless fights. Agreeing on a decision owner works a bit like that, with one obvious limit: owning a decision doesn't make you infallible. If a call creates a safety or legal risk, there still needs to be a real way to challenge it.

## At home, separate preference from boundaries

Say two people disagree about how to spend a free afternoon. One cares a lot about the destination; the other mostly just wants time together. Pretending both preferences carry the same weight misses the easiest solution.

Saying how much something matters to you, taking turns on ties, and checking that the easygoing person still gets what they care about goes a long way. The trap is letting "whoever cares more wins" turn into "whoever looks most upset gets their way."

And some things aren't prizes to negotiate over at all. Consent, privacy, and physical safety don't wait for your preference to outscore someone else's.

For everyday favors and friction, a clear line beats a vague grudge:

> I can help for half an hour, not take over the whole thing.

Or:

> I'm not keeping this going while we're yelling. Let's pick it up tomorrow.

Saying it cleanly doesn't guarantee a clean response, of course. When there's real dependence, lopsided power, or a threat to safety, this stops being a bargaining problem; support and safety come first.

## I'd rather be predictable

In the toy game, staying unpredictable has a mathematical point. In real life, I don't want people close to me guessing how hard they can push before I snap.

With people I expect to keep working or living alongside, I'd rather be predictable about what I can give and where I stop. That lets them plan without running pressure tests on me every week. It also leaves room for repair: one clumsy request is a mistake, not a verdict on someone's character, and you can separate a one-off slip from a habit without pretending nothing happened.

The toy model also freezes the prize and gives you only two moves. Real life usually has a third option: a smaller version of the feature, a different afternoon plan, rotating the unpleasant duty, splitting decision rights, or logging what an exception actually displaced. If a deadline only survives on unpaid overtime, the problem is the schedule, not your tone in the meeting.

Walking away is an option too, though not everyone has the same exits. While you're still building alternatives, holding one modest boundary may be the smartest move you have.

So on that Friday afternoon, I'd start with one plain question: "What breaks if this waits until Monday?" Then I'd open the schedule and look at what actually has to move.

</div>

<div class="lang-zh lang-hidden" markdown="1">

<img class="theme-img-light" src="{{ '/assets/images/hawk-dove-cover.svg' | relative_url }}" width="1200" height="630" alt="线条锐利的鹰与轮廓圆润的鸽相对而立，中间是一份红色的资源。">
<img class="theme-img-dark" src="{{ '/assets/images/hawk-dove-cover-dark.svg' | relative_url }}" width="1200" height="630" alt="线条锐利的鹰与轮廓圆润的鸽相对而立，中间是一份红色的资源。">

设想一个周五下午。有人临时塞进来一个需求，要求今天上线。想赶出来，要么推掉原本答应好的事，要么有人晚上接着加班。

提需求的人拿到了功能，另一个人交出了晚上。

我翻鹰鸽博弈的时候，最在意的其实是这件事：什么样的局面，会让硬推变得划算？就像这个周五，如果加班的时间由别人出，坚持“今天必须做完”，对提需求的人来说成本就低得很。

## 一份资源，两种打法

教科书里的简化版很简单。两个人争一份价值为 `V` 的资源，各有两种打法：

- 鹰：往上顶、继续争，真打起来也认。
- 鸽：躲开两败俱伤，对方一升级就退。

鹰和鸽说的是打法，不是性格。客气但干脆地拒绝，不算当“鹰”。模型里的鹰，是真准备掀桌子、扛损失的。

两只鸽相遇，平分资源；鹰碰上鸽，鹰全拿走；两只鹰硬撞，胜负各半，输了要吃一笔代价 `C`。按行选策略的这一方，期望收益如下：

| 我的选择 | 对方是鹰 | 对方是鸽 |
|---|---:|---:|
| 鹰 | `(V - C) / 2` | `V` |
| 鸽 | `0` | `V / 2` |

最有意思的是 `C > V > 0`：打输一架的代价，比争到的东西还贵。满屋子都是鸽的时候，冒出一只鹰就能通吃；反过来，满屋子都是鹰，一只肯退的鸽反而省掉了连场硬仗。这跟囚徒困境不一样，没有哪种打法碰到谁都占优：对方退，你硬推更赚；对方硬推，你退更划算。

这套演化稳定性的框架，是 John Maynard Smith 和 George Price 在 1973 年的《The Logic of Animal Conflict》里提出来的。它回答的是，在群体演化里哪种策略扛得住外来入侵。拿来照照现实很好用，但别把它当人生指南。

## 25% 不是配比公式

假设一个大群体随机配对，鹰占的比例是 `p`，两种打法的期望收益是：

```text
鹰：p(V - C)/2 + (1 - p)V
鸽：(1 - p)V/2
```

让两边相等，就能解出平衡点：

```text
p* = V / C
```

代个具体数：`V = 10`，`C = 40`，平衡时鹰占 25%，两种打法的期望收益都是 3.75。（如果 `C <= V`，打架太便宜，最后所有人都会变成鹰。）

这个干净的 25% 依赖一堆前提：双方处境对称、随机配对、而且手里只有鹰和鸽两个按钮。我在 X 上刷到过一条帖子，建议大家做人“七成鸽、三成鹰”。与其给自己定个死比例，我更愿意看眼下争的到底值多少、闹僵了代价有多大。就算按上面算出来是 25%，也不意味着四次开会里，我非得挑一次不好说话。

即使只看单次两人博弈（`C > V`），“一鹰一鸽”和“一鸽一鹰”也都是纳什均衡：只要对方不改，自己单方面变招占不到便宜。这既没规定每次都得同一个人让，也没保证大家过得好：上面那个例子里，如果人人当鸽，每人本来能拿 5，比 3.75 高一截，架不住只要别人都退，冒出一只鹰就能独吞 10。

Henwood、Friedman 和 Oprea 的学生实验也说明，怎么配对影响极大。大家在同一个池子里随机匹配时，结果接近混合均衡；改成跨两组配对后，结果立刻拉出很大的不平等。一场实验室结果当然套不住所有关系，但它提醒了一件很实在的事：别光盯着人，得看看角色和对手是怎么分出来的。

## 冲突的账，最后谁在买单

模型里双方的 `V` 和 `C` 一模一样，现实里很少这么对称。

有人坚持周五临时改需求，拿到的是曝光和功劳，别人赔进去的是周末。一场争吵，对一个人只是几分钟不痛快，对另一个人可能半天缓不过来。同一件事，两边在乎的分量往往也差一大截。

所以，最会硬推的那个人，未必天生更强硬。很多时候，只是他的位置刚好让他拿走好处、把账单甩给别人。一旦双方的收益和代价不对等，单看一个 `V/C` 就解释不了什么了。

这也是我对“提高冲突成本”这种建议有点警惕的原因。让制造无谓打断的人承担后果，多半管用；可要是多加几层审批会，往往是把所有人一起罚了，连本来就在兜底的人也跟着多开几场会。加规矩之前，先看看账单最后落到谁头上。

## 工作里，把被挤掉的事摊在明面上

回到周五下午。我会先问一句：为什么非得今天？真出了急事，计划当然该让路。可要是每件事都贴个“紧急”，一天也不会多出几个小时。

接着，把取舍直接摆出来：

> 这个需求今天能做完，但 A 得挪到周一。如果两个时间都不能动，那就得砍范围，或者找确实有空的人接。我们改哪一个？

不用拍桌子，也不用演强硬。本来就是一道优先级选择题，把被挤掉的工作摆在旁边，代价就藏不住了。

优先级归我定，我就直接说挪什么；不归我定，就把这道题交回给能拍板的人。不然，本该讨论的优先级取舍，很容易悄悄滑成“那你晚上顺手补一下吧”。

同类拉扯要是反复出现，最好别等下次救火再吵，提前把规矩定清楚：谁拍板、要听谁的意见、什么新信息可以推翻重议、例外情况找谁升级。非对称博弈模型里，靠“占有者”和“进入者”这种角色就能少打很多无谓的架；工作里提前约定负责人，道理差不多。当然，定负责人不是让他一言堂：真涉及安全或合规风险，反对意见照样得有通路。

## 生活里，分清偏好和底线

换成生活场景：两个人商量一个空闲下午怎么过，一个很在意去哪，另一个主要想一起待着。这时候假装两边在乎程度一样，反倒错过最省心的解法。

把在乎的程度直说出来，差不多的时候轮着来，再留意那个老让步的人有没有选到过自己真正想做的事，多数分歧其实好商量。要防的是另一件事：“谁更在乎听谁的”一旦跑偏，会变成谁表现得更崩溃、谁就能说了算。

至于身体安全、隐私、同意与否，这些本来就不在商量范围里，没法拿收益表来算。

日常帮忙或者拌嘴，把线划清楚比憋着气强：

> 我可以帮半小时，但整件事我接不下来。

或者：

> 现在这样吵没法聊，明天再说吧。

当然，话这么说，不代表对方就会买账。真碰上权力不对等、彼此深度依赖，甚至涉及人身安全的处境，那就不是讲策略的事了：先保安全，找帮手。

## 我宁可做个好猜的人

简化模型里，让人猜不透有数学上的好处。可真放进长期关系里，我不想让身边的人每天试探，才能摸清我今天能忍到哪一步。

真想长期一起共事、一起过日子，我宁可把话摊在明面上：什么能商量，什么我接不了。这样对方好安排，我也省心。同时留一点修复的余地：提错一次请求是一次失误，不必给人定性；把偶发误会和反复出现的老毛病分开看，也不必装作没发生过。

模型还把奖品和动作都锁死了。现实里常常有第三条路：需求能不能先做一个精简版？下午能不能换个折中方案？麻烦事轮着干、提前说好预算、把例外挤掉的工作记在账上。一个总要靠无偿加班才能守住的 deadline，毛病出在排期上，光靠开会语气更温和解决不了。

离开当然也是选项，只是每个人手里能走的路不一样多。还在给自己攒后路的时候，先守住一两条不大的边界，往往已经是眼下最稳妥的办法。

要是回到那个周五下午，我会先问一句：“这件事等到周一，到底会耽误什么？”然后打开排期表，看看真要硬塞进来，得把哪一项挪掉。

</div>
