---
date: 2019-05-21
title: Does Cloudflare’s 1.1.1.1 DNS Block Archive.is?
slug: cloudflare-dns-archive-is-blocked
tags: note
type: code
layout: layouts/note.njk
permalink: /notes/{{ slug }}/index.html
---

**tl;dr:** No. Quite the opposite, actually — [Archive.is](https://archive.is/)’s owner is intentionally blocking 1.1.1.1 users.

![archive.is](/static/img/posts/notes/archive-is.png)

A [recent post on Hacker News](https://news.ycombinator.com/item?id=19828317) pointed out something I’ve noticed myself over the past year — the [Archive.is](https://archive.is/) website archiving tool (aka Archive.today and a few other TLDs) appears unresponsive when I’m on my home network, where I use Cloudflare’s fantastic public DNS service, [1.1.1.1](https://1.1.1.1/). I didn’t connect the two variables until I read this post, where somebody noticed that the Archive.is domain resolves for Google’s 8.8.8.8 DNS, but not 1.1.1.1. An interesting and timeless debate on privacy versus convenience ensued.

Matthew Prince, the CEO and co-founder of Cloudflare (who’s also very active on Hacker News), responded to the observation with a detailed explanation of what’s happening behind the scenes, revealing that Archive.is’s owner is actively refusing to resolve their own website for 1.1.1.1 users because Cloudflare’s DNS offers too much privacy. Excerpt below, emphasis mine:

---

We don’t block archive.is or any other domain via 1.1.1.1. […] Archive.is’s authoritative DNS servers **return bad results to 1.1.1.1 when we query them**. I’ve proposed we just fix it on our end but our team, quite rightly, said that too would violate the integrity of DNS and the privacy and security promises we made to our users when we launched the service. […] The archive.is owner has explained that **he returns bad results to us because we don’t pass along the EDNS subnet information**. This information leaks information about a requester’s IP and, in turn, sacrifices the privacy of users. [Read more »](https://news.ycombinator.com/item?id=19828702)

---

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">&quot;Having to do&quot; is not so direct here.<br>Absence of EDNS and massive mismatch (not only on AS/Country, but even on the continent level) of where DNS and related HTTP requests come from causes so many troubles so I consider EDNS-less requests from Cloudflare as invalid.</p>&mdash; archive.today (@archiveis) <a href="https://twitter.com/archiveis/status/1018691421182791680?ref_src=twsrc%5Etfw">July 16, 2018</a></blockquote>

He’s even gone as far as [replying to support requests](https://community.cloudflare.com/t/archive-is-error-1001/18227/7) by telling people to switch to Google’s DNS, which — surprise! — offers your location to nameservers [with pleasure](https://developers.google.com/speed/public-dns/docs/ecs).

Sure, it’s annoying that I’ll need to use a VPN or change my DNS resolvers to use a pretty slick (and otherwise convenient) website archiver. But I’m more happy to see that Cloudflare is playing the privacy long-game, even at the risk of their users concluding that they’re blocking websites accessible to everyone else on the internet.
