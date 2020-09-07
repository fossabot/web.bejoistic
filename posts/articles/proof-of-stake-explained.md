---
title: Proof of Stake Explained
subtitle: "We will look into the blockchain architecture and use cases."
description: "We will look into the blockchain architecture and use cases."
slug: proof-of-stake-explained
date: 2020-05-26
tags: ["article", "blockchain", "technology"]
layout: layouts/post.njk
permalink: /articles/{{ slug }}/index.html
---

![BlocProof of Stakekchain](/static/img/posts/articles/proof-of-stake.png)

The consensus is the key to every [blockchain](/articles/what-is-blockchain-a-simple-guide-for-dummies). It is the consensus that enforces transaction ordering. Among many other responsibilities, the consensus also helps in promoting honest actors and punish bad actors in the network.

[Bitcoin](/articles/a-candid-explanation-of-bitcoin) introduced Proof-of-Work(PoW) as it’s consensus protocol. It uses heavy computation to solve a complex mathematical puzzle. The outcome is a transaction order that is agreed upon by the whole network.

Though it is the bottleneck to Bitcoin’s scalability, the main issue with PoW is the enormous requirement of the computing power, hence more physical resource requirement.

In the year 2011, Proof-of-Stake (PoS) was proposed in a forum post. Over time, many cryptocurrencies adopted the proof-of-stake system. Many even added their flavor to the underlying PoS to come up with new versions of PoS. In this article, we will discuss PoS and different types of Proof of stake in use.

---

## How Proof of Stake works?

Proof of Stake(PoS) revolves around the [stake](https://dictionary.cambridge.org/dictionary/english/stake). In general, Proof of Stake, the nodes stake the native cryptocurrency of a blockchain network. In return, the staker would get a chance to form the next block in the [blockchain](/articles/what-is-blockchain-a-simple-guide-for-dummies).

The proposed block is then verified by other nodes(known as an **endorser**). If the proposed block is correct in all respect, the staker(known as **validator**) receives the reward, and if it fails, a portion of the stake amount is deducted(this process is known as **slashing**).

In PoS, if a node willing to become a validator, he/she has to stake a certain amount of tokens (as per the protocol), which will be locked in the blockchain.

The validator create a block of transactions and proposes it to the network for the block validation process. Other nodes will vote for the validity of the block. If the block is approved, it is added to the blockchain.

In return, they will receive the mining fee associated with the transactions present in the block. The PoS may or may not mint any new token (as in PoW) as a reward for block formation.

The validator selection process uses randomization techniques. Two most popular randomization protocols are –

1. **Randomized Block Selection**– In this, a node with a high stake and lower number of hashes will be selected as a validator. So, nodes who didn’t much get a chance to form a block will be selected given that his stake amount is high enough.
2. **The Coin Age Selection**– In this, a node which has staked coin for the most prolonged period will be selected to form the next block. It assumes that the node has been an honest player for a very long time.

---

## Types of Proof of Stake Protocols

1. **Delegated Proof-of-Stake (DPoS)**: It is based on delegation. In this, the network participants would elect a witness who will work on their behalf to protect and secure the network. In this way, a pool of witnesses will be selected. The selected witnesses are allowed to produce blocks. If they verify and produce an authentic block, they receive a reward, which is shared with those who have voted for the witness.
2. **Delegated Proof-of-Contribution(DPoC)**: DPoC is a decentralized and democratic governance protocol first implemented by the [ICON network](https://icon.foundation/?lang=en). In this, token holders exercise their right to governance through delegating stake to Public Representatives (P-Reps). There are currently 22 elected Main P-Reps, and there is no limit on the number Sub P-Reps. The Sub P-Reps delegate for the Main P-Reps. On successful block formation, the reward is distributed among the Sub P-Reps. In the case of malicious activity, The P-Reps have to face a slash of 6% of their stake.
3. **Liquid Proof-of-Stake (LPoS)**: LPoS makes delegation optional. [Tezos](https://tezos.com/) was the first to use LPoS. The validators in Tezos are called bakers, and the process of creating new blocks is called baking. Here a node can delegate validation right without actually giving up the ownership of his token (also called custody free). In the case of malpractices, the baker will be penalized. This also comes with an on-chain governance system that resolves the problem caused due to fork.
4. **Hybrid Proof-of-Stake(HPoS)**: It is a mix of PoS and PoW. The network uses PoW to produce new blocks and then uses PoS to validate the blocks. It combines both computational and staking power to make the network immune from malicious activities. Blockchain networks like Casper of Ethereum 2.0, Hcash.
5. **Pure Proof-of-Stake (PPoS)**: Each user in the blockchain influences the choice of the new block that is proportional to its stake in the system. A user is randomly and secretly selected to propose blocks and vote on block proposals. Rest all online users have the chance to be chosen to propose and vote. So in this way, the malicious actor won’t able to influence the honest actor. The normal functioning of the system depends heavily on the number of honest users. It is estimated that, for the network to function well, at least 75% of the users should be honest.

---

## Advantages of Proof of Stake

1. Less consumption of power: PoS doesn’t involve massive computational power like PoW.
2. Rewards and passive income: Staking and delegation make it easier for nodes to get rewards and cash flow. The reward is higher than PoW.

---

## Nothing at Stake problem

In case a PoS based blockchain gets forked, a validator’s stake will be duplicated. As a result, he can continue to form blocks in both the versions of the blockchain. In this, we can claim double the amount he initially invested. But many blockchains has made modifications to tackle this issue. For example – on-chain and self amending in Tezos.
