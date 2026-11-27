---
layout: post
title: "Putting a Custom Domain on GitHub Pages: Six Gotchas"
title_zh: "给 GitHub Pages 配自定义域名（Cloudflare）：六个坑"
description: "A five-minute domain setup that took forty-five: GitHub Pages plus Cloudflare DNS, and six gotchas from cert deadlocks to blocked new domains."
description_zh: "给 GitHub Pages 配自定义域名，以为五分钟搞定，结果折腾了四十五分钟：证书死锁、重定向循环、新域名被屏蔽。"
date: 2026-04-18
categories: tech
tags: [engineering]
bilingual: true
sources:
  - title: "GitHub Pages — Managing a custom domain"
    title_zh: "GitHub Pages — 管理自定义域名"
    url: "https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site"
  - title: "Cloudflare — SSL/TLS encryption modes"
    title_zh: "Cloudflare — SSL/TLS 加密模式"
    url: "https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/"
  - title: "Let's Encrypt — How it works"
    title_zh: "Let's Encrypt — 工作原理"
    url: "https://letsencrypt.org/how-it-works/"
  - title: "Cisco Talos on Newly Registered Domains"
    title_zh: "Cisco Talos 关于新注册域名"
    url: "https://blog.talosintelligence.com/newly-registered-domains/"
---

<div class="lang-en" markdown="1">

I bought `zachc.ai` today. Thought the setup would take five minutes. It took forty-five.

The happy path really is simple: add a `CNAME` file, set five DNS records, wait for a cert. But every layer (DNS, Cloudflare, GitHub, corporate network) has its own quirks, and when they interact you can burn an afternoon. Here's the playbook that worked, then the six things that bit me.

---

## The Architecture

```
Browser
  ↓
Cloudflare DNS (DNS-only, gray cloud)
  ↓
GitHub Pages IPs
  ↓
Jekyll static site built from main
  ↓
TLS via Let's Encrypt, auto-issued & auto-renewed by GitHub
```

Zero servers. Cert renewal is automatic. Total cost: the annual domain fee.

Registrar: **Cloudflare Registrar**. At-cost pricing, free WHOIS privacy, free DNS, free CDN. Porkbun is a fine alternative. Host: **GitHub Pages**.

---

## The Setup

### 1. Add a CNAME file to the repo

```bash
echo "zachc.ai" > CNAME
```

### 2. Update `_config.yml`

```yaml
url: "https://zachc.ai"
```

This updates the sitemap, RSS, and canonical links. Skip it and search engines keep indexing the `.github.io` URL.

### 3. Set the custom domain via the GitHub API

```bash
gh api repos/<owner>/<repo>/pages \
  --method PUT \
  --field cname=zachc.ai
```

Don't set `https_enforced=true` yet. The cert doesn't exist yet, so it'll 404.

### 4. Add DNS records in Cloudflare (all DNS-only / gray cloud)

| Type | Name | Content |
|---|---|---|
| A | `@` | *GitHub Pages apex IP #1* |
| A | `@` | *GitHub Pages apex IP #2* |
| A | `@` | *GitHub Pages apex IP #3* |
| A | `@` | *GitHub Pages apex IP #4* |
| CNAME | `www` | `<owner>.github.io` |

Fetch the four current apex A-record IPs from [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site-apex-domain). They've changed before and will change again.

Then **SSL/TLS → Overview → Full (strict)**.

### 5. Wait for the cert, then enforce HTTPS

Wait until `gh api .../pages/health` shows `responds_to_https: true`, then:

```bash
gh api repos/<owner>/<repo>/pages \
  --method PUT \
  --field cname=zachc.ai \
  --field https_enforced=true
```

Done.

---

## The Six Gotchas

### 1. Cloudflare's orange cloud breaks cert provisioning

**Symptom:** `curl https://zachc.ai` returns Cloudflare **526 "Invalid SSL certificate from origin"**. GitHub refuses to issue a cert.

**Cause:** GitHub needs to see its own IPs during the ACME challenge. With the orange cloud on, public DNS resolves to Cloudflare's edge instead, and Cloudflare in Full (strict) mode demands a cert GitHub can't issue. Deadlock.

**Fix:** Keep gray cloud (DNS-only) until the cert is live. Turn orange on after.

### 2. Cloudflare SSL modes: only one is correct

- **Flexible** → infinite redirect loop. CF↔origin is HTTP; GitHub redirects HTTP→HTTPS; CF serves the redirect; browser loops forever.
- **Full** → works but doesn't verify origin cert.
- **Full (strict)** → works *and* verifies. This is the only right answer.

Most "my site redirects forever" posts come from someone stuck on Flexible.

### 3. `https_enforced=true` 404s before the cert exists

```json
{"message": "The certificate does not exist yet", "status": "404"}
```

GitHub won't enforce HTTPS until the cert is actually on their edge. Two API calls: cname first, then the enforcement flag.

### 4. The cert queue stalls, and the UI knows something the API doesn't

**Symptom:** DNS is correct, `is_https_eligible: true`, yet `peer_failed_verification` won't clear. Re-PUT via API, nothing. Wait ten more minutes, nothing.

**Fix:** Open Settings → Pages. Click **Remove** next to the domain. Wait ten seconds. Type it back in. Click **Save**. Sixty seconds later my cert was approved.

Something in the UI path triggers a more aggressive re-queue than the REST endpoint. I don't know why. I do know that if you've stared at `peer_failed_verification` for more than ten minutes, stop waiting and do the UI kick.

### 5. Corporate VPNs often hijack DNS

**Symptom:** `dig zachc.ai` returns an internal landing-page IP. `dig @1.1.1.1` times out.

**Cause:** Many corporate VPNs intercept port-53 traffic and rewrite queries to external domains.

**Fix:** Use DNS-over-HTTPS. Port 443 usually isn't intercepted at the DNS layer.

```bash
curl -sH 'accept: application/dns-json' \
  'https://1.1.1.1/dns-query?name=zachc.ai&type=A' | jq
```

Useful general-purpose VPN workaround, not specific to GitHub Pages.

### 6. Enterprise gateways block newly registered domains

**Symptom:** From the office network, `https://zachc.ai` shows a corporate "Page Blocked: newly registered website" page.

**Cause:** Enterprise Secure Web Gateways (Zscaler, Palo Alto Prisma, Netskope, etc.) auto-block **Newly Registered Domains** for 14 to 30 days. NRDs are a top phishing/malware indicator, so the whole category stays blocked until reputation accumulates. The block sits at the HTTP proxy layer; the origin is fine and unaware.

**Fix (in parallel):**

1. **File an allowlist ticket** with your internal security team (1 to 3 business days). "Personal domain, registered YYYY-MM-DD, blog on GitHub Pages" is enough.
2. **Verify off-network:** check on cellular, or tether with VPN off, to confirm the block is local policy.
3. **Wait it out:** typically clears in a few weeks once threat-intel feeds age the domain.

If you're about to do this yourself: keep Cloudflare on DNS-only until the cert issues, and file the corporate allowlist ticket the same day you register. Everything else you can back out of.

</div>

<div class="lang-zh lang-hidden" markdown="1">

今天买了 `zachc.ai`。以为配置五分钟搞定，结果花了四十五分钟。

顺利的话，流程其实不复杂：加一个 `CNAME` 文件，配五条 DNS 记录，等证书签出来。但每一层（DNS、Cloudflare、GitHub、公司网络）都有自己的坑，几层搅在一起，能吃掉你一个下午。下面先写能跑通的流程，再写我踩过的六个坑。

---

## 架构

```
浏览器
  ↓
Cloudflare DNS（纯 DNS 模式，灰色云）
  ↓
GitHub Pages 的 IP
  ↓
main 分支构建的 Jekyll 静态站
  ↓
Let's Encrypt 证书，GitHub 自动签发、自动续期
```

零服务器。证书自动续期。成本就是每年的域名费。

注册商：**Cloudflare Registrar**。按成本价卖，WHOIS 隐私保护、DNS、CDN 都免费。Porkbun 也行。托管：**GitHub Pages**。

---

## 配置流程

### 1. 在仓库根目录加 CNAME 文件

```bash
echo "zachc.ai" > CNAME
```

### 2. 更新 `_config.yml`

```yaml
url: "https://zachc.ai"
```

这会影响 sitemap、RSS 和 canonical 链接。不改的话，搜索引擎会一直索引 `.github.io` 地址。

### 3. 通过 GitHub API 设置自定义域名

```bash
gh api repos/<owner>/<repo>/pages \
  --method PUT \
  --field cname=zachc.ai
```

**先不要**带 `https_enforced=true`。证书还没签出来，会 404。

### 4. 在 Cloudflare 加 DNS 记录（全部 DNS-only / 灰色云）

| 类型 | 名称 | 内容 |
|---|---|---|
| A | `@` | *GitHub Pages 根域 IP #1* |
| A | `@` | *GitHub Pages 根域 IP #2* |
| A | `@` | *GitHub Pages 根域 IP #3* |
| A | `@` | *GitHub Pages 根域 IP #4* |
| CNAME | `www` | `<owner>.github.io` |

四条根域 A 记录的当前 IP 去 [GitHub 文档](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site-apex-domain)拿。以前变过，以后还会变。

然后 **SSL/TLS → Overview** 设为 **Full (strict)**。

### 5. 等证书，再强制 HTTPS

等到 `gh api .../pages/health` 显示 `responds_to_https: true`，再执行：

```bash
gh api repos/<owner>/<repo>/pages \
  --method PUT \
  --field cname=zachc.ai \
  --field https_enforced=true
```

完。

---

## 六个坑

### 1. Cloudflare 的橙色云会卡住证书签发

**症状：** `curl https://zachc.ai` 返回 Cloudflare **526 “Invalid SSL certificate from origin”**。GitHub 拒绝签证书。

**原因：** GitHub 在跑 ACME 验证时需要看到**自己**的 IP。橙色云一开，公共 DNS 解析到 Cloudflare 边缘；Cloudflare 在 Full (strict) 模式下又要求源站有合法证书。但 GitHub 被挡在外面，签不出来。死锁。

**解决：** 证书签出来之前保持灰色云（DNS-only）。之后想开橙色云再开。

### 2. Cloudflare 的 SSL 模式只有一个是对的

- **Flexible** → 无限重定向。CF 回源走 HTTP，GitHub 把 HTTP 重定向到 HTTPS，CF 把重定向返回浏览器，循环。
- **Full** → 能用，但不验证源站证书。
- **Full (strict)** → 能用，**且**验证证书。唯一正确选项。

大多数“我的站点无限重定向”的帖子，都是卡在 Flexible。

### 3. 证书没签出来之前，`https_enforced=true` 会 404

```json
{"message": "The certificate does not exist yet", "status": "404"}
```

证书真正部署到边缘之前，GitHub 不让你强制 HTTPS。拆成两次 API 调用：先设 cname，再开强制 HTTPS。

### 4. 证书队列会卡住，UI 比 API 管用

**症状：** DNS 正确，`is_https_eligible: true`，但 `peer_failed_verification` 就是不消失。用 API 重新 PUT，没反应；再等十分钟，还是没反应。

**解决：** 打开 Settings → Pages，点域名旁边的 **Remove**，等十秒，把域名输回去点 **Save**。六十秒后，证书就批下来了。

UI 这条路径显然会触发比 REST 接口更彻底的重新排队。具体原因我不清楚，但我知道如果你盯着 `peer_failed_verification` 超过十分钟，别等了，直接去页面里踢一脚。

### 5. 公司 VPN 经常劫持 DNS

**症状：** `dig zachc.ai` 返回内部跳转页的 IP，`dig @1.1.1.1` 直接超时。

**原因：** 很多公司 VPN 拦截 53 端口流量，把外部域名解析改写掉了。

**解决：** 用 DNS-over-HTTPS，443 端口通常不会被 DNS 层拦截。

```bash
curl -sH 'accept: application/dns-json' \
  'https://1.1.1.1/dns-query?name=zachc.ai&type=A' | jq
```

这是通用的 VPN 绕行办法，不限于 GitHub Pages。

### 6. 企业安全网关会屏蔽新注册域名

**症状：** 在公司网络下打开 `https://zachc.ai`，直接跳出“页面被屏蔽：新注册网站”的拦截页。

**原因：** 企业 Secure Web Gateway（Zscaler、Palo Alto Prisma、Netskope 等）会自动拦截**新注册域名（NRD）** 14 到 30 天。新域名是钓鱼和恶意软件的高发区，所以整类默认封掉，等域名攒够信誉再放行。拦截发生在 HTTP 代理层，源站本身完全正常，也根本不知道这次请求被挡了。

**解决（并行做）：**

1. **提内部白名单工单**（一般 1 到 3 个工作日）。理由写“个人域名，注册时间 YYYY-MM-DD，GitHub Pages 博客”就够了。
2. **在公司网外验证**：手机切蜂窝数据，或者开热点断 VPN，确认只是本地策略在拦。
3. **等**：通常过几周，域名在威胁情报库里过了新注册观察期，就会自动放行。

如果你也准备这么配：证书签出来之前 Cloudflare 保持 DNS-only，注册域名当天顺手提好公司的白名单工单。别的坑踩了都能爬出来。

</div>
