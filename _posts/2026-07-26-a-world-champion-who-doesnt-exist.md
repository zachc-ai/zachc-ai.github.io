---
layout: post
title: "A World Champion Who Doesn't Exist"
title_zh: "那个不存在的世界冠军"
date: 2026-07-26
categories: life
tags: [bayesian, decision-making, epistemology, fact-checking, forecasting, compound-interest]
bilingual: true
sources:
  - title: "真正的高手，都是贝叶斯主义者 (book excerpt, Lê Nguyên Hoang)"
    url: https://zhuanlan.zhihu.com/p/1930028134704579295
  - title: "穷人之所以穷，是因为每一代都在从 0 开始"
    url: https://zhuanlan.zhihu.com/p/2056155443731362899
  - title: "Wang Shi (entrepreneur) — Wikipedia"
    url: https://en.wikipedia.org/wiki/Wang_Shi_(entrepreneur)
  - title: "2026 Superbike World Championship — Wikipedia"
    url: https://en.wikipedia.org/wiki/2026_Superbike_World_Championship
  - title: "Cromwell's rule — Wikipedia"
    url: https://en.wikipedia.org/wiki/Cromwell%27s_rule
---

<div class="lang-en" markdown="1">

Saturday afternoon I read two articles on Zhihu back to back. The second was linked at the bottom of the first, which is how these things usually happen.

One was about why poor families stay poor. The other was a history of Bayesian statistics under the most self-help headline imaginable: 《真正的高手，都是贝叶斯主义者》, roughly "the real masters are all Bayesians."

I liked both. So I did the thing I've only recently started doing, which is check the checkable parts before filing them into my notes.

The poverty article had exactly two claims about the public record.

First: that Wang Shi, before founding Vanke, lost money on his first corn-trading deal and borrowed ¥3 million to go again. The record runs the other way. He *made* roughly ¥3 million as a middleman hauling corn and feed from the northeast down to Shenzhen in the early eighties, and that was the money behind the company that became Vanke. A win, printed as a loss plus a loan.

Second: that in March 2026 a Chinese motorcycle brand called 张雪机车 won the Superbike World Championship, the first Chinese brand ever to take it, built by a repair-shop mechanic with a middle-school education who beat Ducati, Yamaha and Kawasaki.

None of that happened. The 2026 WSBK grid is Ducati, BMW, Bimota-Kawasaki and Yamaha. No Chinese manufacturer, no such brand anywhere. Every round win this season has gone to Ducati, and in March the season was two rounds old — the manufacturers' title wasn't settled until July 12 at Donington, Ducati's fifth straight. There was no fact here to bend. The article built a person, a bike, a race, a date, and a field of defeated rivals, out of nothing.

The Bayes piece turned out to be a book excerpt by a named researcher at EPFL, Lê Nguyên Hoang, translated by 方弦. I spot-checked its five most specific claims. Three had small errors: Nate Silver called 49 of 50 states in 2008, not all 50; "bit" was coined by Tukey, not Shannon; the 1-in-35 shuttle risk figure traces to a 1983 Air Force study rather than to NASA. Detail drift, the ordinary kind. Nothing invented.

Same platform, same afternoon, same recommendation chain. One is fiction with a good outline. The other is real work wearing a clickbait hat.

---

## The part that actually bothered me

It wasn't the fake champion.

Before I checked anything, both pieces sat at the same level in my head. Same platform, same 干货 register, same confident cadence, therefore same weight. My prior came from the pipe they arrived through.

Which is precisely what the honest one spends two hundred and fifty years arguing against.

---

## Score the frame and the evidence separately

The poverty article's models are good. More than one of them.

Elite families iterate. Money, judgment, contacts, and permission to fail all stack across generations. Poor families reboot: one illness, one bad investment, one kid's doomed startup, and twenty years zero out. What resets isn't only the money. The judgment, the network, and the error budget go with it.

I wrote a while back about [compound interest being one secret across four different worlds](/blog/compound-interest-one-secret-four-worlds), and the whole thing hangs on `t` never getting interrupted. Here it's the same equation with `t` shoved back to zero every generation — a restart problem that keeps getting mistaken for a rate problem.

So here's a thing most of us have no slot for: a sound frame and fabricated proof, in the same document, at the same time. We're used to giving a source one score. This needs two — one for the framework, one for the evidence, and neither gets to vouch for the other.

---

## Zeros

The one piece of evidence in that article I believe is also its smallest, which is funny.

The author's cousin. Top-tier university, ten years at a foreign firm. Last year she found out a former colleague doing identical work had asked for ¥3,000 more at the interview. Over ten years that gap is a car.

The line that stuck: **她不是能力差，是压根不知道还能这么谈。** She wasn't worse. She just never knew that asking was a move.

That's not a bad estimate. That's a zero.

She didn't assign a low probability to negotiating and lose the bet. Negotiating wasn't in her hypothesis space at all, and that failure has much worse math attached to it.

Dennis Lindley named this one — Cromwell's rule, after Oliver Cromwell's 1650 letter to the Church of Scotland: "I beseech you, in the bowels of Christ, think it possible that you may be mistaken." The rule says never hand out a prior of 0 or 1 for anything that isn't arithmetic. Because if P(H) = 0, then P(H | anything at all) = 0. Forever. No evidence can move it. Lindley's own illustration is that you should leave a one-in-a-million slot for the moon being made of green cheese, otherwise an army of astronauts returning with samples of the cheese will leave you unmoved.

So the expensive mistakes aren't the wrong probabilities. Wrong probabilities get corrected; that's what evidence does for a living. The expensive ones are the zeros, because a zero doesn't feel like an opinion. It feels like the shape of the world.

---

## Two hundred years of them

The Bayes history is basically a ledger of zeros.

Jerzy Neyman kept priors out of confidence-interval theory and said why: any theory would be more beautiful if its construction didn't involve Bayesianism and prior probabilities from the outset. An aesthetic veto on a correct method, and it held for most of a century, during which "subjective," "prior" and "Bayesian" were shown the door in statistics departments. Aesthetic objections are the hardest kind to catch, because they never announce themselves as aesthetic. In engineering they show up as "that's not clean" and "that violates the architecture." And they're sometimes right, which is what makes them dangerous.

Meanwhile Harold Jeffreys was quietly using the banned method on earthquakes, because you cannot re-run an earthquake to get a bigger sample. He located epicenters with it and correctly inferred that the Earth's interior is liquid. Fisher was right about genetics, where the experiment repeats. Jeffreys was right about seismology, where it doesn't. The field went wrong not by picking frequentism but by generalizing it from the repeatable case to everything.

Then there's David Blackwell in 1950. An economist asks him the probability of another world war within five years. Blackwell, a good frequentist, answers that the question is meaningless — probability applies to long sequences of repeatable events, this is obviously a one-off, the answer is 0 or 1 and we'll find out in five years.

The economist's reply is the whole story: **"I was afraid you'd say that. I've asked several other statisticians and they all said the same thing."**

Refusing to hold a prior is abdication in a rigor costume. Blackwell came around eventually.

A good chunk of my job is capacity forecasting, so this one lands close. When an entire profession tells the decision-maker that their actual question is meaningless, the methodology is broken, not the question. And I've watched the same incentive grow on teams: hand over a number with error bars and eat it when the number misses; say "not enough data to tell" and nothing happens to you. So people stop giving numbers. Rational, given the payoff. Still the wrong equilibrium.

---

## The honest complication

Best part is where the two articles start arguing with each other.

The Bayesian frame says don't wait for certainty. Bet on expected value, accept being wrong on individual draws, come out ahead over the run.

The poverty article's sharpest sentence is the rebuttal: **试错成本不光是钱。时间、精力、意志力，这些穷人更稀缺。** The cost of trying isn't only money — time, energy and willpower are scarcer too, not merely equal. Give an ordinary person three attempts and he may well match the rich kid. Reality gives him one. Sometimes half of one.

Expected value assumes you get to run the experiment. If you only get one draw, the average doesn't protect you; surviving the draw does.

Which means "bet on EV" is advice priced for people who already have an error budget. Any system with low error tolerance converges on low-risk, low-return behavior. Nothing stupid about that. It's solving for survival, and the mean isn't in its objective function — same math whether the system is a person, a team, or a company. If you want people around you taking smarter bets, arguing with them about probability is the wrong lever. Raise the error budget first.

---

The poverty article ends without promising anyone a way out, which is the most honest thing in it. A family's jump was never one generation's job. Make the end of your leg the start of the next runner's.

The engineering version has the same shape and I've been on both sides of it. Hand someone the repo without the reasons and they start at zero. Assets transfer. Context doesn't, unless you go move it yourself.

Anyway. The only thing I actually changed after that afternoon: my notes template now has one extra line at the top of every digest. Who wrote this, and can I check it. Not a rating of the article. A rating of the author.

Takes about ten seconds. I've been reading things for thirty years without it.

---

### Sources / 来源

- [真正的高手，都是贝叶斯主义者](https://zhuanlan.zhihu.com/p/1930028134704579295)
- [穷人之所以穷，是因为每一代都在从 0 开始](https://zhuanlan.zhihu.com/p/2056155443731362899)
- [Wang Shi (entrepreneur)](https://en.wikipedia.org/wiki/Wang_Shi_(entrepreneur))
- [2026 Superbike World Championship](https://en.wikipedia.org/wiki/2026_Superbike_World_Championship)
- [Cromwell's rule](https://en.wikipedia.org/wiki/Cromwell%27s_rule)

</div>

<div class="lang-zh lang-hidden" markdown="1">

周六下午，我在知乎上连着读了两篇文章。第二篇是从第一篇底下的推荐位点进去的，一般也都是这么开始的。

一篇讲穷人为什么一直穷。另一篇是贝叶斯统计的思想史，标题起得特别成功学：《真正的高手，都是贝叶斯主义者》。

两篇我都挺喜欢。所以我做了一件最近才养成的事：往笔记里存之前，先把能查的部分查一遍。

讲穷人那篇，全文只有两处碰到了公开事实。

一处说，王石办万科之前倒卖玉米，第一笔生意赔了，又借了三百万再战。实际记录是反过来的。八十年代初他做中间商，把东北的玉米和饲料倒到深圳，这笔生意让他**赚**了大约三百万，就是那个著名的"第一桶金"，后来万科的前身就是拿这笔钱办起来的。一笔赚钱的买卖，被写成了赔钱加借债。

另一处说，2026 年 3 月，一个叫"张雪机车"的中国品牌拿下 WSBK 世界超级摩托车锦标赛冠军，中国品牌首次登顶；创始人是个初中学历的修车师傅，把杜卡迪、雅马哈、川崎全打下去了。

这事根本没发生过。2026 赛季 WSBK 的参赛厂商是杜卡迪、宝马、Bimota-川崎和雅马哈，没有任何中国厂商，也查不到这么个品牌。本赛季到目前为止，每一站的分站冠军都归杜卡迪；3 月的时候赛季才跑到第二站，厂商年度冠军是 7 月 12 日在 Donington 才定下来的，杜卡迪五连冠。这篇文章连"细节说歪了"都算不上：它凭空造了一个人、一台车、一场比赛、一个日期，外加一串被击败的对手。

讲贝叶斯那篇，查下来是本正经书的书摘。作者是洛桑联邦理工（EPFL）的研究员黄黎原（Lê Nguyên Hoang），方弦翻译。我抽查了五条最具体的断言，三条有小毛病：内特·西尔弗 2008 年猜中的是 50 个州里的 49 个，不是全中；"bit"这个词是图基造的，不是香农；航天飞机 1/35 那个数字出自 1983 年美国空军的报告，不是 NASA 自己请人算的。都是科普转述里常见的细节漂移，没有一处是编的。

同一个平台，同一个下午，同一条推荐链。一篇是编的，但框架挺好。一篇是真东西，只是标题戴了顶卖课的帽子。

---

## 真正让我不舒服的地方

不是那个假冠军。

核查之前，这两篇在我脑子里的分量是一样的。同一个平台，同样的"干货"腔，同样自信的语气，于是给了同样的可信度。说白了，**我的先验是那根管子给的。**

而这恰好就是另一篇文章花了两百五十年在反对的事。

---

## 框架分和证据分，得分开打

讲穷人那篇，模型其实挺好的，而且不止一个。

精英家庭的人生是迭代：钱、判断力、人脉、试错的额度，一代一代往上叠。穷人家庭的人生是重启——一场大病、一次错误理财、孩子一个不切实际的创业梦，二十年积蓄就归零了。而且归零的不只是钱。判断力、人脉、容错额度，一起归零。

我之前写过[复利那篇](/blog/compound-interest-one-secret-four-worlds)，说它是四个领域里的同一个秘密，而整套东西全靠 `t` 不被打断。这就是把 `t` 每一代强行拨回 0 的版本——看着像利率问题，其实是重启问题。

所以这里冒出来一个很多人脑子里没有格子放的东西：**好框架和假证据，可以同时出现在一篇文章里**。我们习惯给一个信源打一个分。可这事得打两个分——框架一个，证据一个，谁也别替谁背书。

---

## 零

有意思的是，全文我唯一相信的证据，恰好是最小的那个。

作者的表姐。985 毕业，外企干了十年。去年才发现，前同事干一模一样的活，只因为面试时多报了三千。十年下来，差出一辆车。

有一句话我记住了：**她不是能力差，是压根不知道还能这么谈。**

这不是估错了概率。这是一个零。

她并不是给"谈薪水"这个动作打了个很低的概率，然后赌输了。她的假设空间里压根就没有这个动作。这是另一种失败，数学上要难看得多。

丹尼斯·林德利给它起过名字，叫**克伦威尔法则**，典出克伦威尔 1650 年写给苏格兰教会的一句话："我恳求你们，看在基督的份上，想一想你们也可能是错的。"法则本身很简单：除了纯算术，别给任何事赋 0 或 1 的先验概率。因为一旦 P(H) = 0，那么后面不管拿到什么证据，P(H|证据) 都还是 0。永远。林德利自己的例子挺逗：你得给"月亮是奶酪做的"留个百万分之一的位置，不然哪天一队宇航员真带着奶酪样本回来了，你也不会有任何反应。

所以真正贵的错误，不是概率估歪了。概率估歪会被修正，证据就是干这个的。真正贵的是那些零。零不像一个观点，零感觉起来就是世界本来的形状。

---

## 两百年的零

那篇思想史，说白了就是一本零的账簿。

耶日·内曼在置信区间理论里完全绕开先验，理由是他自己讲的：如果理论的建造从一开始就不涉及贝叶斯主义和先验概率的话，任何理论都会更漂亮。拿审美否决一个正确的方法，而且这一否就是大半个世纪——"主观""先验""贝叶斯"这三个词被赶出了统计系。审美理由最难抓，因为它从来不承认自己是审美理由。在工程里它长这样："这方案不干净"、"这不符合架构"。而且它有时候是对的，所以更危险。

同一时期，哈罗德·杰弗里斯正拿这个被禁的方法研究地震。他也没得选啊，你没法为了多凑几个样本再重现一场地震。他用贝叶斯定出了震中，还正确推断出地球内部是液态的。费希尔在遗传学上是对的，因为遗传学的实验能重复；杰弗里斯在地震学上也是对的，因为地震不能重复。学界栽的跟头在于：把可重复领域的结论，直接推广到了所有领域。

还有戴维·布莱克韦尔，1950 年。一位经济学家问他：五年内再爆发一场世界大战的概率是多少？布莱克韦尔作为一个合格的频率主义者答，这个问题毫无意义——概率只适用于可重复事件构成的长序列，这明显是独一无二的事件，概率要么 0 要么 1，五年之后自然就知道了。

经济学家的回话才是重点：**"我就怕你这样说。我跟另外几位统计学家谈过，他们都这样说。"**

拒绝给出先验，那不叫严谨，那叫弃权，只是披了件严谨的外套。（布莱克韦尔后来自己想通了，归顺了贝叶斯。）

我工作里有很大一块是做容量预测，这条戳得挺疼。当一整个专业告诉决策者"你真正想问的那个问题没有意义"，那是方法出了毛病，问题本身没毛病。团队里也会长出一模一样的激励：给了带误差的数字，偏了要挨骂；说一句"数据不足，无法判断"，什么事都没有。那大家当然就不给数字了。从收益上看这挺理性的，可这个均衡是错的。

---

## 一个诚实的麻烦

最好玩的是，这两篇文章其实在互相拆台。

贝叶斯那套说：别等确定性，按期望值下注，接受单次可能错、长期为正。

讲穷人那篇最狠的一句正好是反驳：**试错成本不光是钱。时间、精力、意志力，这些穷人更稀缺。** 给一个普通人三次试错的机会，他未必比富二代差。可现实往往只给他一次，甚至半次。

期望值这套东西，默认你能把实验跑很多遍。只能抽一次的话，平均值救不了你，你得先活过这一抽。

所以"按期望值下注"这个建议，定价对象是**已经有容错额度的人**。任何容错率低的系统，都会自动收敛到低风险低回报的行为。这不叫笨啊，它在给生存求解，均值压根不在它的目标函数里。人是这样，团队是这样，公司也是这样。你要是希望身边的人敢下聪明的注，跟他们讲概率是使错了劲。先把容错额度提上去。

---

讲穷人那篇的结尾没给任何人许诺翻身，这反而是全文最诚实的地方：一个家族的跃迁，从来不是一代人能完成的事。把这一棒的终点，变成下一棒的起点。

工程上的版本是同一个形状，而且这两头我都待过。你把 repo 交出去，不交背后的原因，接手的人就得从零开始了。资产会转移，上下文不会，除非你专门去搬一趟。

行了。那个下午之后我实际改的只有一样：笔记模板里，每篇 digest 顶上多了一行——谁写的，能不能核实。不是给文章打分，是给作者打分。

大概花十秒钟。我读了三十年东西，一直没干这事。

---

### 来源 / Sources

- [真正的高手，都是贝叶斯主义者](https://zhuanlan.zhihu.com/p/1930028134704579295)
- [穷人之所以穷，是因为每一代都在从 0 开始](https://zhuanlan.zhihu.com/p/2056155443731362899)
- [Wang Shi (entrepreneur)](https://en.wikipedia.org/wiki/Wang_Shi_(entrepreneur))
- [2026 Superbike World Championship](https://en.wikipedia.org/wiki/2026_Superbike_World_Championship)
- [Cromwell's rule](https://en.wikipedia.org/wiki/Cromwell%27s_rule)

</div>
