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

<img src="{{ '/assets/images/hawk-dove-cover.png' | relative_url }}" width="1200" height="630" alt="An angular hawk and a rounded dove face a small red resource between them.">

Imagine a Friday afternoon. Someone asks for a new feature by the end of the day. Finishing it means dropping something already promised, or having someone work through the evening.

The person making the request gets the feature. Someone else loses the evening.

What interests me about the hawk-dove game is how a situation makes a particular way of behaving pay. In this imagined workday, insisting on the request costs less when someone else supplies the extra hours.

## A resource, two strategies

The game describes a contest over a resource worth `V`. There are two available strategies:

- A hawk escalates and keeps contesting the resource.
- A dove avoids a damaging fight, backing down when the other player escalates.

These are moves in a model, not personality types. A firm, polite refusal is not necessarily a hawk move; the model's hawk accepts the possibility of a costly fight.

In the common simplified version, two doves divide the resource. A hawk facing a dove takes it all. Two hawks fight, with an expected injury cost. Let `C` be the cost of losing that fight, and assume each has an equal chance of winning.

The payoff to the player choosing the row is:

| My strategy | Against a hawk | Against a dove |
|---|---:|---:|
| Hawk | `(V - C) / 2` | `V` |
| Dove | `0` | `V / 2` |

The interesting case is `C > V > 0`: losing a fight costs more than the resource is worth. A population of doves is vulnerable to a hawk taking the whole prize. But a population of hawks is vulnerable to a dove avoiding those expensive fights.

Unlike the standard prisoner's dilemma, there is no strategy here that pays better against both possible opponents. Against a dove, hawk pays more. Against a hawk, dove pays more.

The evolutionary-stability framework was introduced by John Maynard Smith and George Price in their 1973 paper, *The Logic of Animal Conflict*. The table above is a simplified textbook model. Evolutionary stability concerns which strategies can resist invasion by rare alternatives under specified conditions. That is a narrower question than how a person ought to live.

## The 25% is not a life prescription

Let `p` be the share of hawks in a large, randomly matched population. The expected payoffs are:

```text
Hawk: p(V - C)/2 + (1 - p)V
Dove: (1 - p)V/2
```

Setting them equal gives:

```text
p* = V / C
```

For `V = 10` and `C = 40`, the equilibrium share of hawks is 25%. Both strategies earn an expected payoff of 3.75.

That number belongs to this model. The encounters are symmetric, the two strategies are the only options, and matching is random. A randomly mixing individual can use the same probability in the corresponding symmetric mixed equilibrium.

One X post recommends a 70% dove, 30% hawk split. I would rather ask what is at stake and what a fight would cost than give myself a fixed ratio. Even the 25% in our example does not tell me to be difficult in one quarter of my meetings.

And if `C <= V`, this interior coexistence result no longer applies; all-hawk is evolutionarily stable in this simple game.

There is also a different question hiding nearby. In a single two-player game with `C > V`, hawk-dove and dove-hawk are both pure-strategy Nash equilibria: neither player gains by changing their own move alone. That does not require the same person to back down in every future encounter.

A stable outcome can leave both players worse off. If everyone used dove in our numerical example, each would get 5 rather than 3.75. The problem is that a unilateral hawk move would then pay 10.

Henwood, Friedman, and Oprea studied a related distinction in student laboratory experiments. Play in a single matching pool approached the mixed equilibrium; matching players across two groups instead produced sharply unequal outcomes. This is evidence from a particular experimental setup, not a diagnosis of every relationship. It gives me another reason to look at how people are assigned roles and opponents.

## Whose cost is in the calculation?

The simple model makes the contest symmetric. Real conflicts often are not.

A person insisting on an urgent change may gain visibility while someone else loses a weekend. An argument may cost one person a few unpleasant minutes and another person hours of worry. The same outcome can also matter very differently to the two people involved.

I would be careful about describing the first person as naturally stronger. Perhaps their position lets them collect more of the benefit and pass on more of the cost.

This is my application of the model, not something the payoff table proves. Once the costs and rewards differ between players, a single shared `V/C` is no longer an adequate description.

It also makes me wary of the advice to "raise the cost of conflict." Clear accountability for an avoidable disruption could help. Adding more approval meetings could instead make everyone pay, including the people already absorbing the disruption.

I want to ask where the cost lands before deciding whether a new rule changes anyone's incentive.

## At work, make the displaced commitment visible

In the Friday example, I would start by asking what makes the request urgent. A real emergency may justify changing the plan. Calling everything urgent does not create more hours.

Then I would make the choice explicit:

> I can deliver this today if we move A to Monday. If both deadlines have to hold, we need to reduce the scope or find someone with available capacity. Which commitment should change?

No showdown required. There is a decision to make, and I am putting its consequences next to it.

If I can choose my own priorities, I should say what I will move. If I cannot, I need the person authorized to make that trade-off. Otherwise, a decision about priorities can turn into an assumption about someone's unpaid availability.

For recurring disagreements, I would rather settle the decision process before the next deadline: who decides, whose input is required, what evidence could reopen the decision, and when an exception needs escalation.

Models of asymmetric contests can distinguish an owner from an intruder and allow strategies to depend on those roles. I see an analogy with agreeing on who decides before a dispute begins. That does not prove that whoever currently owns a decision deserves to keep it.

A technical objection still needs a route to be heard. If a choice could create a safety or legal problem, an agreed decision owner does not make that problem disappear. Roles need a way to challenge mistakes as well as a way to end routine disagreements.

## At home, separate preference from permission

Suppose two people disagree about where to spend a free afternoon. One cares about the destination; the other mostly wants time together. Treating both preferences as equally intense would miss something useful.

I like the idea of saying how much a choice matters, taking turns when it matters equally, and checking whether the person who usually yields still gets choices they care about.

But "whoever cares more wins" has an obvious weakness. Someone can make every disagreement seem intolerable. I would not want visible distress to become the rule for deciding who gets their way.

And some boundaries are not prizes to divide. Consent, privacy, and bodily safety do not need a sufficiently large competing preference to justify them. A model describing strategic stability cannot supply that moral judgment.

For ordinary favors, I would prefer a limit that another person can understand:

> I can help for half an hour. I cannot take over the whole task.

Or:

> I do not want to continue while we are shouting. I can return to this tomorrow.

These are proposed ways of communicating, not guarantees that the other person will respond well. Dependence and unequal power can make a refusal expensive. Where there is coercion or a threat to safety, the priority is support and protection, not a more skillful bargaining move.

## I prefer predictable boundaries

I do not want to make myself harder to read just to keep another person guessing.

Randomization has a precise function in the simplified game. In an ongoing relationship, people can remember what happened, explain a mistake, make a commitment, or repair damage. Those possibilities need a richer model.

For someone I hope to keep working or living alongside, I would prefer to be predictable about what I can offer and what I cannot. Then they can make plans without testing how much pressure I will tolerate that day.

There should be room for repair too. A single mistaken request need not define someone forever. I can distinguish a misunderstanding from a pattern without pretending either one did not happen.

The model also fixes the prize and limits the available moves. An afternoon together need not have just two possible plans; a request may be useful at a smaller scope. Looking for those options changes the game we are discussing.

I can sometimes change the arrangement too: rotate an unpleasant duty, agree on a budget, divide decision rights, document the cost of an exception, or seek another option. A deadline that repeatedly requires unpaid overtime needs a different plan, not just a calmer discussion about it.

Leaving can be one option, though it is not equally available to everyone. While someone is building alternatives, keeping a boundary modest may be the safest workable choice.

In the Friday conversation, I would start with the request itself: "What changes if this waits until Monday?" Then I would open the existing plan and work out what would have to move.

</div>

<div class="lang-zh lang-hidden" markdown="1">

<img src="{{ '/assets/images/hawk-dove-cover.png' | relative_url }}" width="1200" height="630" alt="线条锐利的鹰与轮廓圆润的鸽相对而立，中间是一份红色的资源。">

设想一个周五下午，有人临时提了个需求，要求今天做完。要赶出来，就得推掉已经答应的事，或者有人晚上继续干。

提需求的人拿到了结果，另一个人交出了晚上。

我读鹰鸽博弈时，更想弄清楚的是：什么样的处境，会让一种做法占便宜？就拿这个假设场景来说，额外的工时由别人出，坚持今天做完的人，就少了一份顾虑。

## 一份资源，两种策略

两个人争一份价值为 `V` 的资源，各有两种选择：

- 鹰：升级冲突，继续争，接受打起来的风险。
- 鸽：避免有损失的争斗，碰到对方升级就退出。

这里讲的是策略，先别急着给人贴标签。礼貌而明确地拒绝，不一定就是模型里的“鹰”。鹰的定义里，包括愿意承担争斗的代价。

在常见的简化版本里，两只鸽平分资源；鹰遇到鸽，鹰拿走全部；两只鹰相遇就争斗，双方获胜概率各半。把输掉争斗的损失记为 `C`，选择行策略的一方，收益如下：

| 我的选择 | 对方是鹰 | 对方是鸽 |
|---|---:|---:|
| 鹰 | `(V - C) / 2` | `V` |
| 鸽 | `0` | `V / 2` |

最值得讨论的情形是 `C > V > 0`：输一场的损失，比赢一场的好处还大。一个全是鸽的群体里，鹰能占便宜；可要是全是鹰，争斗太贵，避开冲突的鸽又有了优势。

这跟标准的囚徒困境不一样。这里没有一种策略，碰到谁都更划算。对方退，争更赚；对方争，退更划算。

John Maynard Smith 和 George Price 在 1973 年的论文《The Logic of Animal Conflict》里提出了演化稳定性的框架。上面的表格是教科书里的简化模型。演化稳定性讨论的是，在特定条件下，一种策略能不能抵御少量其他策略的入侵。至于人该怎么生活，还得另想。

## 25% 不是人生配方

假设一个足够大的群体随机配对，鹰的比例为 `p`，两种策略的期望收益分别是：

```text
鹰：p(V - C)/2 + (1 - p)V
鸽：(1 - p)V/2
```

令两者相等，可以得到：

```text
p* = V / C
```

比如，`V = 10`，`C = 40`，平衡时鹰占 25%，两种策略的期望收益都是 3.75。

数字很干净，条件也很具体：双方处境对称，随机相遇，而且只有鹰、鸽两种选择。在对应的对称混合均衡里，也可以把这个比例理解成每个个体随机选鹰的概率。

X 上有一条帖子，建议七成鸽、三成鹰。我更想先问，这次争的东西值多少，争起来又会损失多少，而不是给自己定个配比。就算是刚才算出的 25%，也不等于四次开会就该有一次不好说话。

而且，如果 `C <= V`，上面这个内部共存的结论就不适用了；在这个简化博弈里，全鹰是演化稳定的。

还得分清另一个层次：当 `C > V` 时，单次两人博弈中的“一鹰一鸽”和“一鸽一鹰”，都是纯策略纳什均衡。意思是，别人不变，自己单独换策略也占不到便宜。它并没有规定，以后每一次都得同一个人让。

均衡未必让大家过得更好。刚才的例子里，要是全选鸽，每人能拿 5，比 3.75 高。麻烦是，只要别人都退让，自己改选鹰就能拿 10。

Henwood、Friedman 和 Oprea 做过一组学生实验。所有人放在同一个池子里配对时，结果接近混合均衡；改成两组之间配对后，却出现了很不平等的结果。这只是特定实验设置下的证据，不能拿来诊断所有关系。不过，它让我更想留意：人们按什么方式相遇，又被分到了什么角色？

## 冲突的代价，到底记在谁账上

简单模型里，双方的得失是对称的。现实里常常没这么整齐。

有人坚持临时改需求，拿到的是曝光和成果，别人失去的是周末。一次争吵，对一个人只是几分钟不愉快，对另一个人却可能是半天缓不过来的消耗。同一件事，在双方心里的分量也可能差很多。

这时，先别急着说前者“天生强势”。也许只是他的位置，让他更容易拿到收益，把代价留给别人。

这是我借模型看现实的一个角度，收益表本身证明不了这些。一旦双方的收益和代价不同，就不能再拿同一个 `V/C` 解释整个局面了。

所以，“提高冲突成本”也得问清楚提高的是谁的成本。对无谓打断设置合理的问责，可能有用；多加几层审批，也可能只是让所有人多开几次会，连原本承担损失的人也一起罚了。

一条规则有没有用，我想先看最后是谁在付账。

## 工作里，把被挤掉的事摆出来

回到周五的假设场景，我会先问，为什么一定要今天做。真有紧急情况，调整计划当然有必要。可每件事都叫紧急，也不会多出几个小时。

接下来，把取舍说清楚：

> 今天做这个可以，但 A 就要挪到周一。如果两个时间都不能动，就得减范围，或者找确实有空的人。我们改哪一个承诺？

不用威胁，也不用表演强硬。既然要改计划，就把后果跟决定放在一起说。

如果我有权调整优先级，就说明准备挪掉什么；如果没有，就找有权做这个取舍的人。否则，一次本该讨论优先级的决定，很容易悄悄变成“那你晚上补一下吧”。

如果同类争执反复发生，我更希望在下一次 deadline 之前，先讲好谁拍板、需要听谁的意见、什么证据足以重开讨论，以及例外情况怎么升级。

非对称争斗的模型，还会区分“占有者”和“进入者”，允许双方按各自角色行动。我觉得这跟提前约定谁拍板有点像。但“目前归谁管”，并不能证明“就应该永远归谁管”。

技术上的反对意见仍然要有入口。涉及安全或法律风险时，也不能拿一句“他是负责人”就算了。规则得能结束一般分歧，也得留出纠错的办法。

## 生活里，分清偏好和边界

比如，两个人商量一个空闲下午怎么过。一个特别在乎去哪，另一个主要想一起待着。这时，假装双方对地点同样在乎，反而漏掉了有用的信息。

我愿意把偏好说清楚：这次谁更在乎，差不多在乎时怎么轮流，以及那个经常让步的人，有没有真的选到过自己想做的事。

但“谁更在乎就听谁的”，也很容易出问题。一个人可以把每次分歧都表现得无法承受。我不想把谁表现得更痛苦，当成谁说了算的规则。

而且，有些边界根本不该当成奖品分配。身体安全、隐私、同意与否，不需要等到自己的偏好比对方更强烈，才值得被尊重。描述策略怎么稳定下来的模型，替不了这个价值判断。

日常帮忙时，我更想把能给多少讲明白：

> 我可以帮半小时，但不能把整件事接下来。

或者：

> 现在这样吵，我不想继续了。明天可以再谈。

这些只是沟通方式的例子，不能保证对方会好好回应。双方有依赖关系、权力差距时，拒绝本来就可能很贵。如果已经有胁迫或安全威胁，先要考虑的是支持和保护，别把它当成一次可以靠话术赢下来的谈判。

## 我更愿意把边界说清楚

我不太想靠“让别人猜不透”来保护自己。

随机化在那个简化博弈里有明确作用。长期相处却多了很多可能：记得上次发生了什么，解释误会，作出承诺，或者把造成的损失补回来。想讨论这些，就得用更丰富的模型了。

如果还希望继续一起做事、一起生活，我更愿意让对方知道，哪些事能商量，哪些事我做不到。这样，安排事情就不必靠每天试探我能忍到哪一步。

也得留一点修复的余地。一次提错了请求，不必就给一个人定性；误会和反复出现的模式，可以分开看，发生过的事也不用装作没发生。

模型里的奖品固定，可选动作也只有两种。现实里，一个下午怎么过，未必只有两套方案；一个需求减一点范围，也可能仍然有用。能找到这些选择，讨论的就已经是另一个博弈了。

还可以试着改改安排：轮流承担麻烦事，提前说好预算，分清决策权限，把一次例外挤掉了什么记下来，或者找找别的选择。一个总要靠无偿加班才能守住的 deadline，得重新排计划，光是讨论时语气更温和，还不够。

离开也可能是一种选择，只是每个人能走的路不一样多。在慢慢积累其他选择的时候，先守住一个不大的边界，也可能已经是当下最安全、最可行的做法。

要是回到那个周五下午，我会先问：“这件事等到周一，会有什么后果？”然后打开原来的计划，看看真要做的话，得挪掉哪一项。

</div>
