---
title: Decentralized Finance Explained
subtitle: "Decentralized Finance (or DeFi) is an emerging category of financial applications that are being developed on top of trustless networks."
description: "Decentralized Finance (or DeFi) is an emerging category of financial applications that are being developed on top of trustless networks."
slug: decentralized-finance-explained
date: 2020-06-20
tags: ["article", "blockchain", "decentralized", "cryptoeconomics"]
layout: layouts/post.njk
permalink: /articles/{{ slug }}/index.html
---

![Old Community](/static/img/posts/articles/defi-explained.png)

Decentralized Finance (or DeFi) is an emerging category of financial applications that are being developed on top of trustless networks. Today, most of this innovation is happening on the Ethereum blockchain. An entire digital finance stack came into existence within the past 18 months, under the radar of most people.

**This guide will explain to you what DeFi is all about, without the jargon.**

![What We'll Learn](/static/img/posts/articles/defi0.png)

Our exploration of DeFi will consist of three parts:

- An introduction to what DeFi means and why it matters.
- A tour of different financial applications in the Ethereum ecosystem.
- A deep dive into decentralized lending with the Compound protocol.

By the end of this guide, you’ll have a better understanding of DeFi and be able to learn more on your own. Read on!

## Trouble in Old Money

If you’re reading this, you probably live in a country with good access to financial services. You can:

- Open a savings account,
- Apply for personal and business loans,
- Acquire financial products such as unit trusts and stocks, and
- Purchase various types of insurance.

**However, not everyone in the world is so lucky.**

![Unbanked Picture #1](/static/img/posts/articles/defi00.png)

According to the World Bank, the global unbanked population is around 2 billion. Many people lose the geographic lottery, and are instead born in a financially undeveloped country. They do not have access to basic services that you and I take for granted.

![Unbanked Picture #2](/static/img/posts/articles/defi1.png)

Even in countries that offer bank accounts and basic financial services, people may face other limitations. For example:

- Not being able to access global financial markets (e.g. US stocks), or
- Forced to rely on hyperinflationary currencies due to government mismanagement.

This underbanked population do not have the same level of financial access compared to people living in developed countries.

![Serve the Underbanked](/static/img/posts/articles/defi2.png)

At the same time, two-thirds of the unbanked have access to mobile phones. This creates massive opportunities for companies to serve the often ignored market. Within just a few years, new _challenger_ banks have become viable alternatives to traditional financial institutions. Examples include Revolut in the UK, N26 in Germany, and Nubank in Brazil.

![Old Money](/static/img/posts/articles/defi3.png)

However, challenger banks are **still reliant on traditional institutions and payment networks.** This means challenger banks are legally required to have a banking license to operate in a specific region. They do not offer solutions to the problems of global access faced by the underbanked.

![Programmable Money](/static/img/posts/articles/defi4.png)

Blockchains and smart contracts offer **a new way to build financial applications** that are trustless and globally accessible. Instead of relying on trusted intermediaries which are constrained into a specific region, blockchains bring us closer to a global _Internet of Money_.

![The Programmable Money World](/static/img/posts/articles/defi5.png)

Given the new building blocks of the emerging programmable money world, **how can we make financial services 10x better?**

## Decentralized Finance

Decentralized Finance (DeFi) is **an emerging category of financial applications that are being developed on top of open, trustless networks.** DeFi aims to give anyone with an internet connection access to world-class financial services.

![Access to Financial Services](/static/img/posts/articles/defi6.png)

Most of this innovation is happening on the Ethereum blockchain. [Ethereum](https://ethereum.org/) is a smart contract platform that enables anyone to programmatically control digital value. You can think of it as the **printing press for open finance applications.**

Like how the internet created tools for content creators, Ethereum is doing the same by enabling the creation of new financial services.

![Blockchain Layers](/static/img/posts/articles/defi7.png)

Within a short period of time, an alternative digital finance stack has emerged on Ethereum, seemingly out of nowhere. Anyone with an internet connection and a crypto wallet can now access a plethora of financial services such as:

1. **Decentralized Exchanges** to help you trade between tokens,
2. **Decentralized Stablecoins** to remove volatility,
3. **Decentralized Money Markets** that enable lending and borrowing,
4. **Decentralized Synthetics** democratizes access to financial products, and
5. **Decentralized Insurance** to help counter black swan events.

**These services are all live today.** In the next section, we’ll examine each category to see how it works and identify real-life examples.

## Decentralized Finance Applications on Ethereum

### 1. Decentralized Exchanges

Centralized exchanges carry custodial risk. The crypto exchange landscape has faced many hacks over the years, such as the famous [Mt. Gox hack](https://blockonomi.com/mt-gox-hack/). Even today, there are still exchanges getting hacked on a regular basis.

![Exchanges Hacked](/static/img/posts/articles/defi8.png)

Decentralized Exchanges (DEX) offer **an exchange alternative with minimal custodial risk.** This is possible by allowing users to trade without intermediaries. With a DEX, you’re trading directly with a smart contract, which acts as a secure custodian that can’t take your money.

Instead of having to place their cryptoassets in an custodian account belonging to a third party, users can keep their funds in their own wallets and still be able to perform trades of cryptoassets such as tokens and cryptocollectibles.

![Crypto Swap](/static/img/posts/articles/defi9.png)

There are two categories of DEXes: orderbook-based exchanges (e.g. [Radar Relay](https://relay.radar.tech/)) and pooled exchanges. (e.g. [Uniswap](https://app.uniswap.org/#/swap)). Most orderbook-based DEXes on Ethereum are built on the [0x](https://0x.org/) protocol. Newer exchanges are increasingly using the pooled model.

### 3. Decentralized Stablecoins

**Stablecoins are tokens that remove price volatility.** It does so by pegging its value to some other currency, such as USD. This price stability is important for people seeking to use crypto to spend and save. You wouldn’t want your savings to be affected by market fluctuations.

![Coindesk](/static/img/posts/articles/defi10.png)

USDT and USDC are _centralized_ stablecoins, which require a trusted custodian. A party would hold USD and undergo audits to verify that each token is backed by an equal amount of collateral. This creates opportunities for abuse. For example, Tether has admitted that its USDT centralized stablecoin had been severely undercollateralized.

![Coindesk](/static/img/posts/articles/defi11.png)

[DAI](https://makerdao.com/) on the other hand, is a _decentralized_ stablecoin. It’s a price-stable currency that **uses economic incentives and smart contracts** to keep its value pegged to USD. It’s been able to keep its peg from its all the way from its inception to now, through crypto springs and winters. Today, DAI has become a promising alternative for [people living in countries plagued by hyperinflation](https://slideslive.com/38920018/living-on-defi-how-i-survive-argentinas-50-inflation).

![Stablecoins Real SOlution for Hyperinflation](/static/img/posts/articles/defi12.png)

Stablecoins are an important building block in any financial system, as it ensures the stability of the value in the market.

### 3. Decentralized Money Markets

![Compound](/static/img/posts/articles/defi13.png)

Money markets allow users to **lend and borrow cryptoassets**. Lending your crypto offers a new way to **earn interest** on idle assets.

![Compound Interest](/static/img/posts/articles/defi14.png)

Unlike traditional P2P lending, the [Compound](https://compound.finance/) money market protocol uses a _liquidity pool_ model. Instead of lending assets directly to another user, you supply liquidity to a pool, and users borrow from that pool. There are no fixed terms and interest is added every block (15 seconds.) Interest rates are determined based on supply and demand.

**Deep Dive: Collateralized Debt Positions**

![No Credit Scores](/static/img/posts/articles/defi15.png)

However, there are no credit scores on the blockchain. All blockchain addresses are effectively pseudonymous with no associated real-world identity. So how on earth can you lend out money to strangers with no credit history?

![CDPs](/static/img/posts/articles/defi16.png)

Decentralized lending protocols (also: stablecoins and synthetics) uses a mechanism called **Collateralized Debt Positions** (CDPs.) All DeFi loans today are collateralized. Similar to how you may need to put your house as collateral to borrow at a bank, you need to deposit some cryptoassets to borrow another.

In the above diagram, we have a loan with a minimum **Collateralization Ratio** of 150%. This means that for every $100 I borrow, I need to deposit a collateral of $150 or more.

After I’ve deposited sufficient collateral, I can draw \$100 worth of other cryptoassets from the Compound smart contracts. Borrowers often do this to increase their exposure and go long on a particular asset. As long as my loan is backed by at least 150% collateral, my loan is considered ‘safe.’

![CDPs Borrower](/static/img/posts/articles/defi17.png)

If the market value of my collateral drop and end up _below_ the minimum Collateralization Ratio of 150%, my loan will become _undercollateralized_ or ‘in liquidation.’ I will need to pay back my loan by returning the cryptoassets I borrowed back to the smart contracts or deposit more collateral until my ratio is back to safe ranges.

Otherwise, if your account is in liquidation, anyone can repay your outstanding borrowed assets at a discount, at your loss. There are automated bots scanning the blockchain for potential liquidation opportunities.

For example, suppose a CDP with a collateralization requirement of 150% has 1 ETH as collateral, and outstanding DAI debt with a face value of 100 USD. If the price of ETH drops to $149, someone can liquidate the repo by burning 100 DAI and receiving 1 ETH, for a total profit of around $49. (This figure can vary, depending on how the penalties are applied to borrowers and how discounts are granted to liquidators in the specific protocol.)

All of these rules are enforced by smart contracts on the blockchain.

![SAI Token](/static/img/posts/articles/defi18.png)

Decentralized money markets on Ethereum offer an [interest rate](https://loanscan.io/) much higher than a traditional savings account. More importantly, **anyone with an internet connection can now earn interest** on their crypto - creating new financial opportunities for the unbanked. For example, the unbanked can use a stablecoin like DAI to store their savings and earn interest on it.

---

💡 Compound interest rates (the supply rate and the borrow rate) are calculated dynamically based on supply and demand.

If there are more liquidity available, interest rate decreases. If there are less liquidity available, interest rate increases. The supply rate is usually lower than the borrow rate due to excess liquidity. All interest earned is distributed between all lenders every block (~15 seconds.)

---

### 4. Decentralized Synthetics

Most people buy stocks to get price exposure, nothing more. They don’t particularly care about annual general meetings or voting rights that come with the stock. They DO care about investing in assets that grow over time.

![UMA Synthetic Token Builder](/static/img/posts/articles/defi19.png)

[Decentralized](https://www.uma.org/) [Synthetics](https://www.synthetix.io/) are tokens that track the price of something. By purchasing synthetics (also known as [derivatives](<https://en.wikipedia.org/wiki/Derivative_(finance)>)), buyers can gain exposure to assets such as gold, Bitcoin, U.S. Dollars, TESLA, and AAPL within the Ethereum blockchain. For the unbanked, this means they would be able to acquire a synthetic pegged to the value of the S&P500 and capture the upside of the US stock market (or any other asset.)

---

💡 Note that synthetics don’t entitle you to the underlying asset. You can only redeem it for its monetary value.

---

Synthetic tokens opens up new financial opportunities for the unbanked, who would otherwise have no access to global markets.

### 4. Decentralized Insurance

All Decentralized Finance services are subject to smart contract risk. A bug in the smart contract can place your funds at risk, which has [happened in the past](https://hackernoon.com/parity-wallet-hack-2-electric-boogaloo-e493f2365303).

Considering the crypto industry’s security track record, people need the assurance that a black swan event wouldn’t suddenly wipe out their life savings. While it’s difficult to [quantify this risk](https://defiscore.io/), there are ways to minimize it such as by purchasing smart contract insurance.

![SC Cover](/static/img/posts/articles/defi20.png)

[Nexus Mutual](https://nexusmutual.io/) is a modern iteration of mutuals and co-ops that have existed for hundreds of years. Its decentralized smart contract insurance product gained over \$1M in total coverage in less than 3 months of its launch.

It’s currently insuring funds locked up in the most widely used DeFi products such as DAI and Compound. Should the unthinkable happen to these DeFi services, part of your funds can be recovered through insurance payouts.

---

## Summary

So far, we’ve looked at 5 different categories of DeFi applications:

1. **Decentralized Exchanges** to help you trade between tokens,
2. **Decentralized Stablecoins** to remove volatility,
3. **Decentralized Money Markets** that enable lending and borrowing,
4. **Decentralized Synthetics** democratizes access to financial products, and
5. **Decentralized Insurance** to help counter black swan events.

Let’s put together everything that we’ve learned to see how Decentralized Finance can help the unbanked.

![Putting DeFi Together](/static/img/posts/articles/defi21.png)

Imagine I’m a farmer in a developing country with minimal financial access:

- I’ve heard about cryptocurrencies but I’m quite nervous about volatility. Still, it’s better than my country’s hyperinflationary currency, so I choose to get paid in DAI - a stablecoin pegged to USD.
- I lend out a portion of my DAI on the Compound money market, giving me an interest on my idle savings.

I’ve secured both a stable currency and a high-interest savings account!

- Now that I’ve settled the basics, I want to set aside a small percentage (~10%) of my money to invest in higher-risk opportunities. I head over to the Uniswap DEX and exchange my DAI for ERC20 tokens of promising projects.
- I gain exposure to the U.S. stock market by purchasing tokenized derivatives of Tesla stock and S&P500 using decentralized synthetics.
- Finally, I head over to Nexus Mutual and take out an insurance cover on the DeFi smart contracts. This protects me in the event that there is a hack or security breach.

I’ve now not only secured **a stable currency with guaranteed interest**, but also gained **exposure to the upside of promising digital assets**, paired with **exposure to FAANG stock**, and am **covered by insurance** all using blockchain technology.

![DeFi System](/static/img/posts/articles/defi22.png)

In a decentralized financial system, anyone with an internet connection has access to world-class financial services. DeFi provides new financial opportunities for people in underserved markets all over the globe, with almost zero barriers.

---

## What’s next for DeFi

Decentralized Finance is undergoing rapid growth and development.

![Compound Dominance](/static/img/posts/articles/defi23.png)

The liquidity of the DeFi ecosystem has been growing steadily, spearheaded by stablecoins and money markets. In December 2019, the DeFi TVL (Total Value Locked) is just over half a billion USD. In July 2020, it’s over \$2.07B USD.

![USA Stats](/static/img/posts/articles/defi24.png)

The pace of innovation in the DeFi ecosystem is [incredible](https://medium.com/helisnetwork/a-simple-guide-to-makerdao-and-the-different-types-of-dai-stablecoins-58eec8722d56), due to the permissionless composability of smart contracts. Unlike [platforms](https://arstechnica.com/gadgets/2019/05/nest-the-company-died-at-google-io-2019/) that can shut you down at anytime, smart contracts allow anyone to [build without needing to ask for permission](https://openfinancetokens.com/). We’ll continue to see novel products and services emerging from this space.

The programmable and composable nature of the decentralized financial stack built on Ethereum provides the foundation for a new financial economy. While there are still significant challenges and uncertainty surrounding this financial revolution, DeFi has the potential to bring the rest of the world into the fold with truly open finance.
