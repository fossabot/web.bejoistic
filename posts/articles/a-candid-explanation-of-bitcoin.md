---
title: A Candid Explanation of Bitcoin
subtitle: "A simple explanation of what is Bitcoin and how it works?"
description: "A simple explanation of what is Bitcoin and how it works?"
slug: a-candid-explanation-of-bitcoin
date: 2020-05-15
tags: ["article", "blockchain", "technology"]
layout: layouts/post.njk
permalink: /articles/{{ slug }}/index.html
---

![A Candid Explanation of Bitcoin](/static/img/posts/articles/how-does-bitcoin-work.jpg)

In this article, we will talk about What is Bitcoin and how does Bitcoin work?

The Japanese have the word _chokusetsu_. Which in the context of communication, expresses the desire for straightforwardness and honesty, without the usual sugar-coating.

I settled on the ‘candid’ for my title, but it doesn’t have the same subtle nuance as its Japanese counterpart.

I could have also gone with more clickbaity titles like ‘No BS Bitcoin’ or ‘What’s all the Fuss About Bitcoin?’. But again, I look back at what made me interested in the [Bitcoin](/tags/blockchain/) space in the first place. And that was _understanding_ the ideas and technology behind the Bitcoin.

This article, then, is my **_chokusetsu_** explanation of [Bitcoin](/tags/blockchain/).

It was written as an _introduction_ to the market leader (Bitcoin) of the still-nascent crypto industry. Therefore readers expecting to get a better grasp of technology should await my following articles. Where I will delve deeper into the technologies and theories.

With that said, for those that are still reading — let’s get started, shall we…

## The Vision: What is Bitcoin?

According to Satoshi Nakamoto, the cryptocurrency’s pseudonymous creator, [Bitcoin](/tags/blockchain/) is a “peer-to-peer electronic cash system”. That allows payments without the involvement of a financial institution.

So, in essence, [Bitcoin](/tags/blockchain/) is a form of digital money that is fully controlled by its owners.

[Bitcoin](/tags/blockchain/) is stored in the compatible ‘bitcoin wallet‘ and you can send or receive it without any bank.

Money decides how we live our modern lives. Yet, to this day, we rely on ‘trusted’ intermediaries to control our wealth, transactions and the issuance and value of money itself.

## The Problem: Why Do We Need Bitcoin?

> “I believe the continually advancing Information Revolution will lend us the wisdom and strength to address humanity’s previously unsolvable problems and help us make a positive impact on all of society” — Masayoshi Son.

Although [Bitcoin](/tags/blockchain/) was the culmination of years of study, research, and testing. Many believe that the catalyst for releasing the code was the 2007–08 financial crisis.

This global crash was the worst financial disaster since the Great Depression of the 1930s. Although it’s easily forgotten now in 2020 as we all ‘get on with it’.

The problem is, many of the same economists are now saying that another money meltdown is due.

What happened? Without going into too much detail, the banks over-leveraged their positions in riskier financial products such as sub-prime mortgages.

In contrast, other _shadow-banking_ entities such as hedge funds, borrowed short-term liquid capital to purchase riskier long-term illiquid assets.

This led to the collapse of many ‘trusted’ institutions, such as Fannie Mae and [Lehman Brothers](https://en.wikipedia.org/wiki/Bankruptcy_of_Lehman_Brothers). Therefore, causing an economic global shock-wave effect spanning many years, known as the Great Recession.

## The Greed of Money

In other words, greedy banks and institutions issued risky and often predatory loans or mortgages due to apparent low-interest rates.

To add insult to injury, even greedier hedge funds gambled on stocks, derivatives. The credit freeze brought the collapse of the global financial system

Not one of the perpetrators were punished, either financially or criminally, while some were even rewarded with multi-billion dollar bail-outs.

The central banks purchased almost \$2.5 trillion of debt and troubled assets from governments and banks.

This was the largest liquidity injection into the credit market, and the largest monetary policy action, in world history.

The Federal Reserve also injected \$600 billion into the US credit markets. With the hope that this would bring liquidity to spur more domestic loans and mortgage refinancing.

Did the banks learn from their lesson? It seems not, as these funds were utilized in more ‘profitable’ areas such as emerging markets and underhand currency wars.

Unfortunately, in every zero-sum game, there have to be losers. Yes, you got it — the people. Homeowners lost their homes; unemployment rates spiked, and borrowing became even more difficult and costly.

However, another interesting consequence is that of wealth distribution. The top 1% earning power of the US surpassed is at peaks since the Post-great depression era. And as more impoverished families do not hold assets, the middle-class families were hit the hardest.

So the mega-rich just got richer, the middle-class was diluted, and the wealth gap became even wider.

> “Buy when there’s blood in the streets, even if the blood is your own.” — Baron Rothschild

We need Bitcoin to level the playing field, bridging the gap of the despicable inequality we face today. And empower future generations to become responsible and accountable for all of their decisions.

## The Technology: How Does Bitcoin Work?

The exact mechanism of how the technology behind Bitcoin functions is beyond the scope of this article. But I will give a condensed overview of the underlying processes.

## Cryptography behind Bitcoin

The central technology behind [Bitcoin](/tags/blockchain/) is _cryptography_. Which in coding terms is

> the art of protecting information by encrypting it into an unreadable format (ciphertext) to be later decrypted into plain text by those that hold the secret key.

Technically, [Bitcoin](/tags/blockchain/) does not encrypt data as such. Instead, it uses two standardized cryptographic methods called ‘hashing’ and ‘digital signatures’ to validate transactions between senders and receivers.

Hashing is the process where data of any size can be encoded into a fixed size. The outputs of this algorithm are called ‘hashes’.

Digital signatures are a way to verify the authenticity and source of data transmissions. It is similar to a person’s signature or fingerprint in the physical world.

## Understanding Bitcoin Payment with an Example

I want to buy a car from Bob and he asked 0.5 BTC for it. Therefore, I decide to get some Bitcoin, so the first thing I need is a wallet.

I create a wallet, which then generates two ‘keys’ — one private that must be kept secret and one public key that can be shared with anyone, much like bank details.

_Behind the scenes, the cryptographic algorithm ‘hashes’ these keys into a 26-35 alphanumeric character sequence (public) and 64 alphanumeric character sequence (private)._

Now I need some Bitcoin. Therefore, I go to [BitPanda](https://www.bitpanda.com/) and buy 1 BTC with my credit card. And after inputting my Bitcoin wallet address (public key), I wait a few minutes until my BTC arrives.

Armed with Bitcoin, I then ask Bob to send me his wallet address, which he promptly does. I open my wallet to enter Bob’s Bitcoin address, the amount and press the ‘send’ button.

_Behind the scenes, the software digitally signs Bob’s wallet address (public key) with my private key. As the system knows both the destination address and the recipient address, removing 0.5BTC from my wallet and adding it to Bob’s._

But, how will the system know I didn’t try to deceive Bob by sending 0.5 BTC to John, Mike, and Jill at the same time?

This is known as the ‘double spending’ problem, and Bitcoin solves this by utilizing ‘blockchain’ technology.

## The Bitcoin Blockchain

[Bitcoin](/tags/blockchain/) uses an open public ledger to log every transaction. Transactions are grouped into a chain of ‘blocks’ that string together in a linear, chronological order to form a blockchain.

These blocks are ‘mined’ by powerful dedicated machines that use a brute force method to guess a specific hash. A hash is a sequence of alphanumeric numbers.

The rate of guessing these sequences is a measurement that is called the ‘hash rate’. The system attempts to time every block to occur every 10 minutes by adjusting the difficulty level of the hash puzzle.

So what are these blocks? They are simply a collection of all the transactions that occurred on the Bitcoin network, combined with the identifier of the previous block (so it knows where to place this block in the sequence).

The whole [Bitcoin](/tags/blockchain/) blockchain is open and transparent as it contains a record of every transaction that ever took place. However, the wallet addresses in alphanumeric, so even though we can see all of the transactions and balances, we do not necessarily know who they belong to.

## Who is mining Bitcoin blocks, and what do they gain?

In the beginning days of Bitcoin, you could mine bitcoins with a personal computer. But, Satoshi predicted the increase in computational power, as the algorithm makes the hash puzzles exponentially harder with time. And now dedicated mining machines are pooled in massive warehouses known as Bitcoin mining farms.

The incentive for mining is simple — solve a hash puzzle that mines a block and earn Bitcoins as a reward.

Initially, this reward was 50 BTC, but this number halves every 210,000 blocks until the reward becomes zero. The idea that by then, transaction fees alone will be enough to sustain the Bitcoin network.

Ok, so this whole complex yet elegant and straightforward system (known as ‘proof-of-work) was created for one main reason — to eliminate the third party while solving ‘double spending’ problem.

The blockchain is generated using a ‘proof-of-work’ system. This guarantees that there is no nefarious activity that creates false blocks to allow ‘double spending’.

The only way to create false blocks attached to the legitimate chain is to control more than 51% of the computing power of the network.

However, the incentives of staying honest, outweigh the advantages of the attacker’s double-spending his balance.

## The Economics: What’s Different About Bitcoin?

In terms of economics, Bitcoin is more similar to gold than it is to the cash or credit we use every day.

Money has changed drastically since the Bank of England removed the pound’s pegging to gold in 1931. And the enactment of the ‘gold-grabbing’ 1933 Executive Order 6102.

In the United States, which technically didn’t remove the peg but devalued the dollar by almost half, until in 1971, Nixon finally removed the gold standard.

Much like gold, Bitcoin is mined. It has a finite supply, and currently requires brokers (crypto exchanges and OTC desks) to trade it.

## Bitcoin Monetary Policy: Supply

The major difference with today’s money is that it has an infinite supply, with central and commercial banks printing money out of thin air. And banks able to utilize the ‘fractional reserve’ method to lend many multiples of their holdings.

This is much like leverage trading — when things go well, lots of bonuses for fat cats, however, as we have seen many times before when things go south, they go spectacularly wrong! (aka REKT).

In contrast, there will only ever be 21,000,000 Bitcoins in circulation. Because many bitcoins have been lost in inaccessible wallets, the final circulating supply will be considerably less.

As it stands, there are only over-collateralized loans — where individuals can borrow a small percentage against their Bitcoin value.

## Bitcoin Monetary Policy: Inflation vs. Deflation

The average rate of inflation in the US over the last 20 years is 3.22%, with a current inflation rate of around 2.2%.

This figure represents the increase in the price of general goods and services and is effectively the rate in which money loses value each year.

This is seen as a healthy way to stimulate the economy by promoting spending and discouraging saving.

Bitcoin, on the other hand, with its finite final supply and milestone reduction in mining rewards (halvings), will eventually have a 0% inflation rate.

As of writing, the current inflation of the Bitcoin rate is about 3.6%. And the next scheduled halving estimated to arrive in May 2020. Once that event occurs, the Bitcoin inflation rate will drop to 1.8%. Which is lower than the world’s central banks’ inflation target of 2% for the first time.

Central banks are renowned for manipulating inflation rates, which gives them an excuse to print and inject fiat cash into the economic system. On the other hand, Bitcoin’s monetary policy is well defined and unaffected by any outside manipulation

## The world of Monies

The world has 180 fiat currencies, Using which, you can buy goods and services in their countries’ local economies. This allows banks and money changers to profit from unavoidable, excessively high exchange rates.

Additionally, the foreign exchange (FOREX) market is worth almost $2 quadrillion (2.5x larger than global GDP), with $5.3 trillion traded every day. This market mainly exists as a tool for governments and central banks to gain more control over global finance.

If Bitcoin becomes an internationally recognized currency, then it will be redeemable in any countries’ economy. This could have profound effects and usher in a new global balance of fairness. The immediate result of which is unpredictable in terms of global pricing, but a long term equilibrium would surely be found.

## Ownership, Custody & Control

At present, banks are trusted to take custody of customers’ money. In return, they offer security alongside a plethora of services such as ATM withdrawals, bank transfers, and credit/debit cards.

They also have the power to freeze or close accounts, block transfers, and deny or restrict free access to funds (think bank opening times or online services maintenance).

When you own a Bitcoin, you own a Bitcoin, It’s yours. No one can confiscate it (ignoring phishing and extortion) or block you from sending or receiving coins, or charge you extra fees. As long as you keep your security tight, you finally have full control of your money.

## The Future of Bitcoin: Hurdles to Decentralized Money

> If you want to make enemies, try to change something — Woodrow Wilson

That’s it, right. Digital peer-to-peer cash. That’s what Bitcoin was envisioned to be, and that’s what Bitcoin does _right now_. But does it? Even though ‘maximalists’ would tell you otherwise, Bitcoin is not a widely accepted currency.

Sure, you can buy some things and pay for _some_ services using Bitcoin. But crypto payment is still optional and not demanded, then it is not yet legal tender.

To Bitcoin’s defense, there are more stores going ‘cashless’, which means that cash itself is not always king. Besides, we are witnessing an evolution of a currency going to different stages.

![Stages of Bitcoin evolution](/static/img/posts/articles/stages-of-money.jpeg)

Herein lies the great crypto conundrum. Peer-to-peer, yes. Electronic, yep. Cash, well… no. Or at least, not yet…

**Cash** is **legal** tender (currency or coins) used to exchange goods, debt, or services.

“Wait, don’t Bitcoins sell for thousands of dollars?”, I hear what you say. Yes, they do. They sell for thousands of US dollars on cryptocurrency exchanges like [~~Coinbase~~](https://www.coinbase.com) or [Binance](https://www.binance.com/), or through regulated brokers like BitPanda.

These exchanges run much like regular businesses do and need government approval to operate. And follow the guidelines of local financial legislation. Essentially, that makes them proxies of financial institutions.

## Wrapping Up…

So, for the true vision of Nakamoto-san to materialize, we need:

- Better onboarding, removing manipulation, bringing down fees and protecting the right to privacy.
- the general population to understand and embrace the core tenants of this new technology. As Bitcoin is more planet-positive and efficient than current systems.
- Merchants around the world to accept BTC as their primary payment system, seeing the benefits of a cryptographically-secured decentralized economy

This peaceful exodus of the current financial system could result in those in power using oppression and violence. As they have done countless times in history, to subdue the masses and preventing the rate of adoption.

I hope this is a bloodless revolution, where game theory concepts render the use of such tactics non-viable. But… we are human, after all.

Now, you understand what is Bitcoin and how does Bitcoin work?.
