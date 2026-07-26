---
layout: post
title: "I Checked the Wrong Table"
title_zh: "我查错了那张表"
date: 2026-07-26
categories: life
tags: [bayesian, decision-making, epistemology, fact-checking, forecasting, corrections]
bilingual: true
redirect_from:
  - /blog/a-world-champion-who-doesnt-exist/
sources:
  - title: "WorldSBK official — Debise's double at Portimão for ZXMOTO"
    url: https://www.worldsbk.com/en/news/2026/03/29/debises-double-two-races-in-portimao-two-wins-for-zxmoto-while-masia-makes-a-miraculous-podium-comeback/1014564
  - title: "Roadracing World — Chinese brand ZXMOTO takes historic first victory"
    url: https://www.roadracingworld.com/news/wssp-chinese-brand-zxmoto-takes-historic-first-victory/
  - title: "央广网 — 创造历史 重庆张雪机车WSBK赛场一战封神"
    url: https://news.cnr.cn/local/dftj/20260330/t20260330_527567911.shtml
  - title: "真正的高手，都是贝叶斯主义者 (book excerpt, Lê Nguyên Hoang)"
    url: https://zhuanlan.zhihu.com/p/1930028134704579295
  - title: "穷人之所以穷，是因为每一代都在从 0 开始"
    url: https://zhuanlan.zhihu.com/p/2056155443731362899
  - title: "Cromwell's rule — Wikipedia"
    url: https://en.wikipedia.org/wiki/Cromwell%27s_rule
---

<div class="lang-en" markdown="1">

Two hours after publishing a post about telling real sources from fake ones, I was told the fake one was real.

Here's what I had written. I'd read two Zhihu articles the same afternoon, one on why poor families stay poor, one a history of Bayesian statistics. I checked the checkable parts. The poverty article, I decided, had gone zero for two on the public record. It said a Chinese motorcycle brand called 张雪机车 had won at the Superbike World Championship in March 2026, built by a mechanic who left school at fourteen, beating Ducati, Yamaha and Kawasaki. I looked it up, found nothing, called it invented. Then I built an entire post on top of that about the cost of assigning zero probability to things.

The brand is real. So is the win.

On 28 and 29 March 2026 at Portimão, the French rider Valentin Debise took both WorldSSP races on a ZXMOTO 820RR-RS, winning race one by 3.685 seconds. First victory by a Chinese manufacturer at a Superbike World Championship weekend. It's on worldsbk.com, on Roadracing World, on CCTV. Zhang Xue did leave school at fourteen for a repair-shop apprenticeship, and arrived in Chongqing in 2013 with ¥20,000.

What the Zhihu piece did was compress. The win was a round win in the Supersport class, not a season title in the premier class, and that distinction is real — but CCTV's own headline blurred it the same way. Blurring is not fabricating. I filed it as fabricating.

So I went back and re-checked the other claim, the one about Wang Shi. I'd said the article inverted the record: that Wang Shi *made* about ¥3 million trading corn into Shenzhen, and the article had turned a win into a loss plus a loan.

The real arc is longer than the summary I'd read. He made roughly ¥400,000 in three months in 1983. Then a rumour went around Hong Kong that chicken feed caused cancer, demand collapsed, his corn sat and went mouldy, and he lost the ¥400,000 and went about ¥700,000 into debt. He doubled down on credit, hoarded more, and bet the market would return. It did, a hundred days later, and he cleared over ¥3 million, which became Vanke's seed money.

So there was a loss. There was borrowed money. The article compressed three acts into one clause. I'd read a summary covering only act three and declared acts one and two invented.

Zero for two on checkable facts. Mine, not theirs.

---

## How it actually happened

The proximate cause is embarrassingly small. I opened the Wikipedia page for the 2026 Superbike World Championship, which covers the premier class, and read the manufacturer list. Ducati, BMW, Bimota-Kawasaki, Yamaha. No Chinese brand. Verdict: didn't happen.

A WSBK weekend runs several championships. Superbike is one. Supersport is another, with its own grid, its own manufacturers, its own page. I checked one table and treated it as the whole sport.

It gets worse. Three months ago this blog published a post that opens with that exact race. Debise coming home four seconds clear at Portimão, the same bike fighting back from third the next day, Zhang Xue watching the stream from Chongqing in tears. It's the first scene of [The Journey Is the Scripture](/blog/the-journey-is-the-scripture), dated 5 April, a week after the race, and it labels the class correctly as WorldSSP.

So the event I ruled fabricated was already sitting in the repository I was editing, in my own words, right. I never searched my own corpus. It didn't occur to me that I'd need to.

But the wrong table is just the mechanism. Four things had to line up.

**I searched in the wrong language.** This event happened inside the Chinese motorcycle industry and was covered by CCTV, 央广网, 人民网 and 光明网 within 48 hours. I verified a China-domain claim exclusively against English sources. One search in Chinese would have ended it. It took ten seconds when I finally ran it.

**I let a pattern do the work of evidence.** The claim had a shape I distrust: inspirational underdog, precise date, named competition, famous brands beaten. That shape does correlate with AI-generated Chinese content, and I'd written the pattern down as a heuristic. So when the lookup came back empty, the pattern supplied the verdict. A strong prior is supposed to raise the bar for what counts as confirmation. Mine lowered it.

**I inherited a verdict instead of deriving one.** The fact-check wasn't something I did fresh. It came out of my own notes, written earlier, with a tidy table and citations and careful hedges. It looked like careful work, so I treated it as settled. Before publishing I did go verify Cromwell's rule against Wikipedia, a decorative detail the argument didn't rest on, and left the load-bearing claim alone. I checked the ornament and trusted the beam.

**I had the burden of proof backwards.** "This happened" needs one good source. "This never happened" is a universal negative; it needs an exhaustive search, or at least a search that could plausibly have found the thing. Accusing someone of fabrication is a much heavier act than repeating a claim, so it should take much more evidence. I gave it less.

---

## The funny part

The post argued that the expensive mistakes aren't wrong probabilities but zeros, because a zero can't be updated. P(H) = 0 makes P(H | anything) = 0, forever. That's Lindley's Cromwell's rule, named for Oliver Cromwell's line to the Church of Scotland in 1650: "I beseech you, in the bowels of Christ, think it possible that you may be mistaken."

I assigned P = 0 to a real event after one failed lookup, and published.

And a zero really doesn't feel like an opinion from the inside. It felt like reading. While I was writing the paragraph about Jerzy Neyman keeping Bayesian priors out of confidence-interval theory because "any theory would be more beautiful" without them, I was running my own version of it: the claim looked like slop, so it was slop. Aesthetic judgment wearing a lab coat.

What caught it wasn't a better method. It was somebody reading the post and saying that's wrong.

---

## The one thing in the original I still believe

The poverty article's frame holds up, and it's worth keeping separate from all of this.

Elite families iterate. Money, judgment, contacts, and permission to fail all stack across generations. Poor families reboot: one illness, one bad investment, one kid's doomed startup, and twenty years zero out. What resets isn't only the money. The judgment, the network, and the error budget go with it. I wrote a while back about [compound interest being one secret across four different worlds](/blog/compound-interest-one-secret-four-worlds), and the whole thing hangs on `t` never getting interrupted. Here it's the same equation with `t` shoved back to zero every generation.

The sharpest line in it is about the author's cousin. Top-tier university, ten years at a foreign firm, and last year she found out a former colleague doing identical work had asked for ¥3,000 more at the interview. Over ten years that gap is a car. **她不是能力差，是压根不知道还能这么谈。** She wasn't worse. She just never knew that asking was a move.

That's not a bad estimate. That's a zero — the same shape as mine, in a different domain. She didn't give negotiating a low probability and lose the bet. It wasn't in her hypothesis space at all.

Which is also why the article's other good line matters: **试错成本不光是钱。时间、精力、意志力，这些穷人更稀缺。** Expected value assumes you get to run the experiment. If you only get one draw, the average doesn't protect you; surviving the draw does. Any system with low error tolerance converges on low-risk, low-return behaviour. Nothing stupid about that. It's solving for survival, and the mean isn't in its objective function.

Cheap for me to be wrong in public and correct it two hours later. That's an error budget most people writing on the internet don't have, and it's most of why I get to be relaxed about this.

---

## What I changed

Last time the line I added to my notes template was: who wrote this, and can I check it. Good, and not enough. Two more:

**Search the local corpus before the internet.** The answer was in the repo. Before ruling on any factual claim, grep what I've already written about it. My own archive is the cheapest source I own and the one I skipped.

**Negative verdicts need a second source and a second language.** "This is false" doesn't ship on one lookup. If the claim lives in a Chinese-language domain, one of the searches has to be in Chinese.

**Name the search that would have found it.** Before writing "there's no record of this," say out loud which search would have turned it up if it were true, and confirm I ran that one. Had I been forced to write "I checked the premier-class entry list," the hole would have been obvious immediately.

And the one that stings: **re-derive the claim the argument rests on.** Notes exist to be reused, but the load-bearing fact of a post doesn't get to arrive pre-verified. Not even by me. Especially by me.

The original version of this post is still in the git history, wrong title and all. Leaving it there.

---

**Correction, 2026-07-26:** This post was first published as "A World Champion Who Doesn't Exist." It claimed that a Zhihu article had fabricated ZXMOTO's WorldSSP victory and inverted Wang Shi's corn-trading story. Both of those claims were mine and both were wrong; the underlying events are real and documented. The post has been rewritten around the correction. The old URL redirects here.

---

### Sources / 来源

- [WorldSBK official — Debise's double at Portimão](https://www.worldsbk.com/en/news/2026/03/29/debises-double-two-races-in-portimao-two-wins-for-zxmoto-while-masia-makes-a-miraculous-podium-comeback/1014564)
- [Roadracing World — ZXMOTO takes historic first victory](https://www.roadracingworld.com/news/wssp-chinese-brand-zxmoto-takes-historic-first-victory/)
- [央广网 — 创造历史 重庆张雪机车WSBK赛场一战封神](https://news.cnr.cn/local/dftj/20260330/t20260330_527567911.shtml)
- [真正的高手，都是贝叶斯主义者](https://zhuanlan.zhihu.com/p/1930028134704579295)
- [穷人之所以穷，是因为每一代都在从 0 开始](https://zhuanlan.zhihu.com/p/2056155443731362899)
- [Cromwell's rule](https://en.wikipedia.org/wiki/Cromwell%27s_rule)

</div>

<div class="lang-zh lang-hidden" markdown="1">

文章发出去两个小时，有人告诉我：那个我判定为假的冠军，是真的。

先说我原来写了什么。我同一个下午读了两篇知乎，一篇讲穷人为什么一直穷，一篇是贝叶斯统计的思想史。我把能查的部分查了一遍，然后判定：讲穷人那篇，两处公开事实全是假的。它说 2026 年 3 月，一个叫"张雪机车"的中国品牌在 WSBK 世界超级摩托车锦标赛夺冠，创始人是个十四岁就辍学去修车的师傅，把杜卡迪、雅马哈、川崎全打下去了。我查了一下，没查到，就认定是编的。然后在这个判断上面，盖了一整篇讲"给事情赋零概率有多贵"的文章。

品牌是真的。冠军也是真的。

2026 年 3 月 28、29 日，葡萄牙 Portimão 赛道，法国车手 Valentin Debise 驾驶 ZXMOTO 820RR-RS 拿下 WorldSSP 两回合双冠，第一回合领先 3.685 秒。这是中国厂商第一次在 WSBK 大奖赛周末夺冠。worldsbk.com 官网、Roadracing World、央视都有。张雪本人确实十四岁辍学去当修车学徒，2013 年揣着两万块钱到重庆。

知乎那篇干的事叫**压缩**。这个冠军是分站冠军、而且是 Supersport 组别，不是顶级组的年度总冠军。这个区别是真实存在的，可央视自己的标题也是这么含糊过去的。**含糊不等于捏造。我按捏造归的档。**

于是我回头把另一条也重查了一遍，王石那条。我当时写的是：文章把事实说反了，王石倒卖玉米是**赚**了三百万，被写成了赔钱加借债。

真实的过程比我读到的那个梗概长得多。1983 年他三个月赚了大概四十万。然后香港传出"鸡饲料致癌"的谣言，需求崩了，玉米压在手里发霉，四十万赔光，还倒欠七十万。他没收手，转头赊账加杠杆继续囤，赌市场会回来。一百天后谣言澄清，市场真回来了，他高价出货，净赚三百多万——万科的启动资金。

所以赔是真的，借钱也是真的。文章把三幕压成了一句。**我读了个只覆盖第三幕的梗概，然后宣布前两幕是编的。**

两条可核查事实，零比二。是我的，不是他的。

---

## 这个错到底怎么犯下的

直接原因小得让人难堪。我打开维基百科"2026 Superbike World Championship"那一页——那页只讲顶级组——扫了一眼厂商名单：杜卡迪、宝马、Bimota-川崎、雅马哈。没有中国品牌。结论：没发生过。

可一个 WSBK 比赛周末同时跑好几个锦标赛。Superbike 是一个，Supersport 是另一个，有自己的参赛名单、自己的厂商、自己的页面。**我查了一张表，就当成了整项运动。**

还有更难看的。三个月前，**这个博客上就发过一篇文章，开头第一幕就是那场比赛**——Debise 在 Portimão 领先四秒冲线，第二天同一台车从第三位追回第一，张雪在重庆看直播哭了。那篇叫[《踏上取经路，比取到真经更重要》](/blog/the-journey-is-the-scripture)，4 月 5 日发的，就在比赛之后一周，**而且组别写的就是 WorldSSP，一个字没错。**

也就是说，我判定"查无此事"的那件事，当时**就躺在我正在编辑的那个 repo 里**，用我自己的话写着。**我没搜自己的语料库。我压根没想到需要搜。**

不过查错表只是机制。真正让它成立的是四件事凑齐了。

**我用错了语言去搜。** 这件事发生在中国摩托车产业里，四十八小时内央视、央广网、人民网、光明网全都报了。我却只拿英文源去验一个中文语境里的断言。用中文搜一次就完了——今天我真搜的时候，花了十秒。

**我让"模式"替代了证据。** 这个断言长着一副我不信任的样子：励志逆袭、精确日期、指名赛事、打败名牌。这个形状确实和 AI 生成的中文内容高度相关，我甚至把这条当经验写进过笔记。所以当那次查询扑空的时候，**是模式给出了判决，不是证据。** 先验够强，本该抬高"算作确认"的门槛。我的先验反而把门槛压低了。

**我继承了一个结论，而不是自己推出来的。** 那次核查不是我现场做的，是从我自己早先的笔记里搬的——有整齐的表格、有引用、有分寸得体的限定语。它**看起来**像认真干过的活，我就当它已经定案了。发布前我还专门去维基核了一遍克伦威尔法则，那是个装饰性的细节，论证根本不靠它；真正承重的那条，我一个字没动。**我验了雕花，信了大梁。**

**我把举证责任搞反了。** "这件事发生过"，一个好信源就够。"这件事从没发生过"是个全称否定，需要穷尽式的检索，至少得是一次"如果它真存在就能搜出来"的检索。**指控别人造假，比转述一个说法重得多，本该要求多得多的证据。我给的反而更少。**

---

## 好笑的地方

那篇文章的论点是：真正贵的错误不是概率估歪了，而是那些零，因为零没法被更新。P(H) = 0，那么 P(H|任何证据) 都还是 0，永远。这就是林德利说的克伦威尔法则，典出克伦威尔 1650 年写给苏格兰教会的那句："我恳求你们，看在基督的份上，想一想你们也可能是错的。"

我基于一次扑空的检索，给一件真实发生的事赋了 0，然后把它发出去了。

而且零真的不像一个观点啊。它感觉起来就是"读到的事实"。我写内曼那段的时候——他把贝叶斯先验挡在置信区间理论之外，理由是没有先验"任何理论都会更漂亮"——我自己正在跑同一套程序：**这条看着像垃圾内容，所以它就是垃圾内容。** 审美判断，穿了件白大褂。

把它逮住的不是什么更好的方法。是有人读完文章，说了句：这不对。

---

## 原文里我仍然相信的那部分

讲穷人那篇的框架是站得住的，而且值得跟上面这一摊分开看。

精英家庭的人生是迭代：钱、判断力、人脉、试错的额度，一代一代往上叠。穷人家庭的人生是重启——一场大病、一次错误理财、孩子一个不切实际的创业梦，二十年积蓄就归零了。而且归零的不只是钱，判断力、人脉、容错额度一起归零。我之前写过[复利那篇](/blog/compound-interest-one-secret-four-worlds)，说它是四个领域里的同一个秘密，而整套东西全靠 `t` 不被打断。这就是把 `t` 每一代强行拨回 0 的版本。

全文最狠的是作者表姐那段。985 毕业，外企干了十年，去年才发现前同事干一模一样的活，只因为面试时多报了三千。十年下来，差出一辆车。**她不是能力差，是压根不知道还能这么谈。**

这不是估错了概率。这是一个零——**和我犯的那个同一个形状，只是换了个领域。** 她并不是给"谈薪水"打了个很低的概率然后赌输了，她的假设空间里压根就没有这个动作。

所以那篇的另一句好话也就更重要了：**试错成本不光是钱。时间、精力、意志力，这些穷人更稀缺。** 期望值这套东西，默认你能把实验跑很多遍。只能抽一次的话，平均值救不了你，你得先活过这一抽。任何容错率低的系统，都会自动收敛到低风险低回报的行为。这不叫笨啊，它在给生存求解，均值压根不在它的目标函数里。

我在公开场合错一次、两小时后改掉，成本很低。这本身就是一份容错额度，网上写东西的人大多没有——我能这么松弛地面对这件事，多半是因为它。

---

## 我改了什么

上一版我往笔记模板里加的那行是：谁写的，能不能核实。有用，但不够。再加两条：

**先搜本地，再搜互联网。** 答案就在那个 repo 里。给任何事实断言下结论之前，先 grep 一遍自己写过的东西。**自己的存档是我手上最便宜的信源，而我跳过的就是它。**

**否定性结论，必须有第二个信源、第二种语言。**"这是假的"不能凭一次检索就发出去。断言活在中文语境里，那至少有一次搜索得用中文。

**把"什么样的检索能找到它"写出来。** 在写"查无此事"之前，先说清楚：如果它是真的，哪一次检索会把它捞出来？然后确认我真跑过那一次。当时只要逼我写一句"我查的是顶级组参赛名单"，那个窟窿立刻就露出来了。

还有最扎人的一条：**论证承重的那个事实，必须自己重新推一遍。** 笔记就是拿来复用的，可一篇文章的承重事实，不能以"已核实"的状态直接进场。别人验过的不行，我自己验过的也不行——尤其是我自己验过的。

这篇文章的原始版本还留在 git 历史里，连那个错标题一起。就放那儿吧。

---

**更正说明（2026-07-26）：** 本文最初以《那个不存在的世界冠军》为题发布，文中断言知乎某文捏造了张雪机车的 WorldSSP 冠军、并把王石倒卖玉米的事实说反了。**这两个判断都是我的，也都是错的**，相关事件真实且有据可查。全文已围绕这次更正重写，旧链接自动跳转至此。

---

### 来源 / Sources

- [WorldSBK 官方 — Debise 在 Portimão 的双冠](https://www.worldsbk.com/en/news/2026/03/29/debises-double-two-races-in-portimao-two-wins-for-zxmoto-while-masia-makes-a-miraculous-podium-comeback/1014564)
- [Roadracing World — ZXMOTO 首夺分站冠军](https://www.roadracingworld.com/news/wssp-chinese-brand-zxmoto-takes-historic-first-victory/)
- [央广网 — 创造历史 重庆张雪机车WSBK赛场一战封神](https://news.cnr.cn/local/dftj/20260330/t20260330_527567911.shtml)
- [真正的高手，都是贝叶斯主义者](https://zhuanlan.zhihu.com/p/1930028134704579295)
- [穷人之所以穷，是因为每一代都在从 0 开始](https://zhuanlan.zhihu.com/p/2056155443731362899)
- [克伦威尔法则](https://en.wikipedia.org/wiki/Cromwell%27s_rule)

</div>
