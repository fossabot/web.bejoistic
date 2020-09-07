---
title: Never Trust Free Services Without an Escape Plan
subtitle: "Don't be surprised when the free is no longer free. Be prepared either with cash in hand or a solid plan to pull up stakes and leave."
description: "Don't be surprised when the free is no longer free. Be prepared either with cash in hand or a solid plan to pull up stakes and leave."
slug: never-trust-free-services-without-an-escape-plan
date: 2020-02-20
tags: ["article", "strategy", "leadership", "startup"]
layout: layouts/post.njk
permalink: /articles/{{ slug }}/index.html
---

![Never Trust Free Services Without an Escape Plan](/static/img/posts/articles/never-trust-free-services-escape-plan.jpg)

I get it.

You are a startup and your are scraping by, hustling, and squeezing every drop out of every lemon you can find.

Or, you are just a single developer experimenting with all the free services out there.

You are trying to save money at every turn until:

- you land that whale of a customer
- you land that whale of an investor
- you actually understand the parts of your business that make money and simply decide to put money into that

Either way, you are taking advantage of free services like Amazon's Free Tier (TM), Google's free tier, Sendgrid's Free Tier and so on.

## Build with the escape plan in mind

Whenever, where ever, however you sign up for these services – always keep a plan B in mind. This plan B can be a few things:

### #1 Do not count on anyone's good will

You eventually have to put your money where your services are hosted...so to speak. _Are you ready for that moment, and what will the terms be?_ If you are lucky they they will grandfather you in. Which means, "hey you were early and helped us beta test this bad boy. Keep the free tier as a thank you." I don't see that happen too often.

Next, you have the option to move to a paid plan with a discount. This might suit you, it might not. But we are cheap bastards, and that \$8/month is a real pinch.

So now that leaves you with the final option. Pay the price or GTFO (Get the f\*ck out). Fair enough, freeloaders cost money, and everyone has to eat.

### #2 Set aside some cash for when it time to pay the devil

You can simply start paying and keep your infrastructure/services in place without disruption. (This is the grown-up thing to do) It is also a good idea if you buy-in to propreitary serivices offered by the likes of cloud providers like AWS, Azure, and CGP. Cloud providers are all the devil, and this is the very deal they want you to make.

No evil here, but know the deal.

### #3 Only procure services that are built on open source

Many companies run an open source business model which means that you can run their software in your own infrastrucure at zero-cost (no counting the cost of your time or hosting). This can be a win, especially in regulated environments like healthcare and banking.

It also frees you from having to scramble to find a comparable or compatible service to the existing features you get for free now. Sentry.io is a great example of this model. They offer a compelling paid product but also offer the same experience and software as a download. Should you need to move away from the hosted version it is very easy to host yourself.

### #4 Only procure with open standards

This escape plan there also applies to service like SMTP (email sending). You can move from Mailgun to sendgrid to your own with some DNS and API key changes. No big deal.

This also applies to the likes of container hosting. Across the board the providers offer some kinds of Kubernetes or Docker support. Keeping your deployments and infrastructure within those environments goes a long way to ensure that you are not too locked in to that provider should the tables turn.

### #5 Think ahead, have the fire-drill in place

Build and deploy absolutely knowing this is going to happen. When it does, then you already know what needs doing:

- adjust the dns
- swap the api keys
- generate new certs
- etc, etc, etc

And then execute! If you are lucky then they providers will give you plenty of time to plan and allocate resources to roll over. In case they don't then it does not hurt to have this punch list in place.

## Conclusion

Don't be surprised when the free is no longer free. Be prepared either with cash in hand or a solid plan to pull up stakes and leave.
