---
title: What Is Blockchain? a Simple Guide for Dummies
subtitle: "In this article, we will understand What is blockchain and how it works."
description: "In this article, we will understand What is blockchain and how it works."
slug: what-is-blockchain-a-simple-guide-for-dummies
date: 2020-05-13
tags: ["article", "blockchain", "technology"]
layout: layouts/post.njk
permalink: /articles/{{ slug }}/index.html
---

![Blockchain](/static/img/posts/articles/what-is-blockchain.png)

In the year 2008, an unknown person or organization published a [white paper](https://bitcoin.org/bitcoin.pdf) named **“Bitcoin: A Peer-to-Peer Electronic Cash System”** under the pseudo name Satoshi Nakamoto. That started a new era of decentralized technologies. The main motive of the white paper was to introduce a peer to peer payment system with its own currency without the involvement of central authorities.

At the end of this article, you will have a clear understanding of –

- What is blockchain?
- The architecture of a Blockchain
- How Blockchain Works?
- Transaction Flow in Blockchain
- Blockchain use cases

Before we move forward, let’s clarify one thing: **Blockchain ≠ Bitcoin**

[Bitcoin](/articles/a-candid-explanation-of-bitcoin) introduced blockchain technology to the world. The technology that comprises Bitcoin is called the blockchain and used in many other cryptocurrencies.

## What exactly is blockchain?

According to Wikipedia :

_“A **blockchain** is a growing list of records, called blocks, that are linked using cryptography.”_

Too many technical terms!! But don’t worry, we got you covered.

If we split the term **Blockchain**, we will get **Block** and **Chain**. A **Block** consists of a collection of information ( transactions in case of Bitcoin) which are linked to one another with the help of cryptography. This altogether forms a **Chain like architecture** similar to the [linked list](https://en.wikipedia.org/wiki/Linked_list).

Some well-known blockchain networks are Bitcoin, Ethereum, Ripple, Hyperledger Fabric, etc.

## The architecture of a Blockchain

The main goal of blockchain architecture is to remove the need for a central authority. Let’s understand the generic architecture of a blockchain. Different blockchains modify these structures based on their need, but the underlying principles remain the same.

A blockchain consists of three main parts

- Ledger
- Consensus Mechanism
- Peer to Peer networking protocol

The Blockchain network consists of many participants. Each participant in the network is called a **Node**, and every node has a copy of the transaction ledger.

Transaction ledger or blockchain ledger has all the information of all previous transactions/blocks. Because there is no central server, this ledger works as a local database for each node.

Each node talks to multiple nodes in the network. Every transaction propagated to the entire network through a peer to peer networking protocol such as [Gossip protocol](https://en.wikipedia.org/wiki/Gossip_protocol).

All blockchains have a consensus system to decide the state of the network. Because there is no central authority, the consensus mechanism needed to reach the agreement on the state of the network. For example in the case of Bitcoin, this mechanism helps in create a consensus on transaction sequence, i:e which transaction came first.

For instance, Bitcoin’s consensus protocol is called Proof of Work (PoW), and Ethereum 2.0 consensus protocol will be [Proof of Stake](/articles/proof-of-stake-explained) (PoS).

Consensus protocol requires the Miners(we will learn later) to solve a particular and present the proof. **Miners** club transactions into a block and a proof(usually the block hash) is shared with other nodes to verify it and add the block to their locally stored blockchain.

It is to be kept in mind that all miners are node but all nodes are not a miner.

## How Blockchain Works?

Before understanding how blockchain works, we need to understand the few important terminologies, for example, hash, blocks, etc.

## Understanding Hash Function

Cryptographic hashes are at the heart of blockchain. It keeps the blockchain secure. These hashes are generated using hash cryptographic functions. The key feature of the Hash Function is-

- **One way function**: This means that we cannot reproduce the input data from the output. This way, no one can know what information was used to generate the output.
- **The output is of fix length**: The output spit out by the hash function is of fixed length irrespective of the size of input data. This eradicates the chances of guessing the data length.
- **Avalanche Effect**: If we make a small change in the input data, there will be a drastic change in the output. This effect is called Avalanche Effect.

## Block in Blockchain

![Block in Blockchain](/static/img/posts/articles/block-in-blockchain.png)

The above diagram gives a schematic representation of the architecture of the blockchain. The first block of a blockchain is called a genesis block. A block consists of four main parameters. They are block number, block hash, information( transaction data in case of Bitcoin), timestamp and hash of the previous block.

- The **block number** represents the position of the block in the blockchain. It also helps to keep track of total blocks present in the network.
- **Block hash** is the hash produced after putting the information along with the timestamp into a specific cryptographic hash function ([SHA256](https://en.wikipedia.org/wiki/SHA-2) in case of Bitcoin). This hash a unique cryptographic identifier of a whole block, and helps in connecting the block to each other.
- **Information** can be anything. In the case of Bitcoin and Ethereum, it is the transaction and state transition data. In the case of [Hyperledger](https://www.hyperledger.org/), it can be the state of data.
- The **timestamp** is used to identify the time at which the block was added to the network. It is also an important parameter in calculating the hash of the block.
- **Hash of the previous block** stores the hash of the block present before it. It is one of the biggest reasons why blockchain is an immutable ledger because you can’t change the block information once it’s hashed and linked to the next block. For the genesis block, the value of the hash of the previous block is nil.

Miners are responsible for producing the blocks in the network and they get rewards for this by the network using its network’s currency.

---

## Transaction Flow in Blockchain

Let’s say a node creates a transaction. Then this node propagates the transaction to its peer nodes and those peer nodes propagate this transaction to their peer nodes and so on.

All these transactions sit in a mempool before miners pick them to include in a block. Now a miner sees our transaction and picks it with other transactions to create a block. The Miner validates all these transactions and create a block, start working to find the target hash for the block.

Once a miner successfully hashes the block, it will propagate the block to the network. Other nodes see this block and verify it and add this new block in their local blockchain ledger.

Meanwhile, miners start working on the next block, and as more blocks get added to the top of that block, it becomes more difficult to replace them and our transaction achieves finality.

Transaction finality means transactions is processed and considered confirmed by the network.

**Note**: The above workflow is usually seen in Proof-of-work blockchain such as Bitcoin, Monero, etc. Different blockchain networks work differently, but underlying principles remain the same.

## What if someone tampers a block?

Let say a malicious user is in the network. He makes some change in the transaction data present in a block. Since the block hash is produced from the transaction data, the hash of the block will be modified. The “previous hash” parameter present in the next block will not match with the hash of the modified block. That will automatically raise a red flag.

Let say, someone managed to change the hash of the whole blockchain network. Since everyone has a copy of the blockchain ledger and the majority of the nodes will have the untampered data, it will alert the nodes about the malicious actor.

This may lead to either penalty or exclusion from the network. So, to change the data stored in a blockchain network, at least 51% of the nodes should be malicious. A blockchain network’s tolerance on the malicious network depends on the consensus algorithm it uses.

---

## Use cases of Blockchain

1. **Transaction Network**: The biggest use case of blockchain technology is to create a decentralized peer to peer transaction network powered by its digital assets.
2. **Smart Contract**: Ethreum introduced the smart contracts which make blockchain programmable enabling different types of use cases.
3. **Supply chain**: One of the implementations of blockchain is in the supply chain system. It gives timestamped data from the source of the product until it reaches the end-user. E.g: [Certified Origins](https://www.oracle.com/it/customers/certified-origins-1-blockchain-story.html)
4. **Voting system**: A blockchain-based voting system will be free from corruption and tampering as everything will be transparent. E.g: Voting conducted by Sierra Leone
5. **DAO**: It stands for Decentralized Autonomous Organization. These Organizations are transparent and operate in a decentralized manner.

Till now blockchain technology is at an infant stage and needs to solve the scalability problem. Blockchain has initiated the Web 3.0 revolution. It intends to make the Internet more decentralized.
