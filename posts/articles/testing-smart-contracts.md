---
title: Testing Smart Contracts
subtitle: "The high stakes and rigid immutability of smart contracts demands even more emphasis on testing compared to traditional software development."
description: "The high stakes and rigid immutability of smart contracts demands even more emphasis on testing compared to traditional software development."
slug: testing-smart-contracts
date: 2020-07-12
tags: ["article", "blockchain", "ethereum", "solidity"]
layout: layouts/post.njk
permalink: /articles/{{ slug }}/index.html
---

**Unit testing is a critical part of smart contract development.** The high stakes and rigid immutability of smart contracts demands even more emphasis on testing compared to traditional software. [Unit tests](https://en.wikipedia.org/wiki/Unit_testing) ensures your contracts are performing correctly at the most fundamental level, acting as a vanguard in your defense against bugs.

In this article, we’ll learn:

- Why unit testing is important for smart contracts,
- How to write unit tests for smart contracts,
- Helpful tools and utilities you can use for complex assertions,
- Other smart contract testing best practices.

---

## Why Unit Testing is Important for Smart Contracts

### - Reason 1: Smart Contracts are High Risk software

> On a blockchain, a single mistake could cost you all of your funds - or worse, your users’ funds. The cost of failure are in the high tens or hundreds of millions of dollars! 💰🔥

Smart contract bugs can lead to **extreme financial losses**. The [DAO Hack](https://medium.com/swlh/the-story-of-the-dao-its-history-and-consequences-71e6a8a551ee) lost more than 11.5 million Ether (US$70M at the time of the hack, now over $2B) and the [2nd Parity Hack](https://hackernoon.com/parity-wallet-hack-2-electric-boogaloo-e493f2365303) lost US$200M of user funds. Today, with a TVL of [over $2B](https://defipulse.com/), the DeFi space has a lot to lose should things go wrong. Bugs and hacks continue to affect major DeFi protocols today.

The goal of unit testing is to isolate each part of the program and show that the individual parts are correct. A unit test provides a strict, written contract that the piece of code must satisfy. They help you identify edge cases and unexpected behaviour throughout the development cycle.

Some of the major smart contract hacks may have been prevented with more comprehensive testing. A comprehensive test suite helps to reduce and manage the risks associated with smart contract bugs.

### - Reason 2: Smart Contracts are Immutable

Software has an inherent need for evolvability in response to changing requirements, and smart contract systems are no different. Code will need to be changed if errors are discovered or if improvements need to be made. It is no good to discover a bug, but have no way to deal with it.

Unfortunately, **upgrading smart contracts is difficult**, especially so for critical components. Smart contracts are immutable by default. This means it’s impossible to upgrade the source code of an already deployed contract. Finding even a tiny bug means you need to redeploy your smart contracts, so the consequences of an error are huge. In this sense, developing smart contracts is closer to hardware programming than web development. There are no easy upgrade paths for smart contracts.

---

Upgradeability mechanisms such as proxies do exist, but not all smart contract systems use them. Reasons for this include:

1. To preserve the immutable aspect of smart contracts, and
2. To minimize the need for custody and governance.

In either case, initiating contract upgrades is not a trivial matter. Large-scale upgrades require community consensus and are therefore avoided unless absolutely necessary.

---

Catching potential bugs before launch reduces the need for an upgrade path. Unit tests ensures your code is performing correctly at the most fundamental level, acting as a critical first line of defense.

### Summary: Yes, Unit Testing is Important

In short, the importance of good unit testing practices for smart contracts cannot be overstated. The **high stakes** when smart contracts go wrong and their **limited upgradability** forces us to take a more rigorous approach compared to traditional software.

Unit testing plays a critical role in the smart contract development process. Unit tests are simple to write and quick to run, and let you add features and fix bugs in your contracts with confidence. No moving fast and breaking things here!

## Hands-On: Getting Started with Writing Unit Tests

I’ve published a [example-testing-solidity](https://github.com/bejoistic/example-solidity-testing) [Truffle](https://www.trufflesuite.com/) project that contains the contracts, tests, and utilities we’ll use in the rest of this article.

> The Github repo is available [here](https://github.com/bejoistic/example-solidity-testing). **It’s open source and publicly available for your learning.** Star the repo if you found it helpful! 💫

To follow along, just clone and install:

```bash
git clone git@github.com:bejoistic/example-solidity-testing.git
cd example-solidity-testing
yarn
yarn test
```

For the rest of this article, we’ll write tests for this `Counter` smart contract:

```sol
pragma solidity ^0.6.10;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract Counter is AccessControl {
    uint private _value;
    uint private _lastUpdatedAt;

    bytes32 public constant PUBLISHER_ROLE = keccak256("PUBLISHER_ROLE");

    event Published(address indexed source, uint newValue);

    constructor(uint initialValue) public {
        _value = initialValue;

        // Grant the admin role to the contract deployer
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);

        // Grant the publisher role to the contract deployer
        _setupRole(PUBLISHER_ROLE, msg.sender);
    }

    /**
     * @notice Publish a new value for the counter.
     * @param newValue The new value
     */
    function publish(uint newValue) public {
      require(hasRole(PUBLISHER_ROLE, msg.sender), "Caller is not a publisher.");
      require(now > _lastUpdatedAt + 60 minutes, "Updates must be between at least an hour apart.");
      _value = newValue;
      _lastUpdatedAt = now;
      emit Published(msg.sender, newValue);
    }

    /**
     * @notice Read the counter's value.
     * @return The counter's current value.
     */
    function read() public view returns (uint) {
        return _value;
    }
}
```

This `Counter` contract:

- Has two functions `publish()` and `read()`.
- Only whitelisted Publishers can `publish()`, and only once every hour.
- Anyone can `read()`.

Let’s get started!

---

## Writing Unit Tests

When you write unit tests for a smart contract, you test against its [contract abstraction](https://github.com/trufflesuite/truffle/tree/master/packages/contract) in Javascript. Frontend dApps interact with smart contracts in the same way. You don’t actually write tests in Solidity.

Truffle uses [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/) to provide you with a solid framework from which to write your contract tests in Javascript. Here’s an example test suite:

```js
// test/Counter.test.js

const Counter = artifacts.require("Counter");

contract("Counter", (accounts) => {
  const [owner] = accounts;

  beforeEach(async () => {
    this.counter = await Counter.new(INITIAL_VALUE, { from: owner });
  });

  it("initializes with an initial value", async () => {
    const value = await this.counter.read();

    // Chai Expect
    expect(value.toNumber()).to.equal(INITIAL_VALUE);
    expect(value.toString()).to.be.a("string");

    // Chai Assert
    assert.equal(value.toNumber(), INITIAL_VALUE);
    assert.typeOf(value.toNumber(), "number");
  });
});
```

A `contract()` and `it()` clause wraps a test suite and a test case respectively. Both `contract()` and `it()` callbacks are run in the order they are defined (from top to bottom.)

Mocha provides the [hooks](https://mochajs.org/#hooks) `before()`, `beforeEach()`, `after()`, and `afterEach()`. These should be used to set up preconditions and clean up after your tests. For us, we use `beforeEach` to deploy the `Counter` contract we want to test. Note that test contracts are only deployed to a local chain and cleaned at the end of execution.

> Tests can appear before, after, or interspersed with your hooks. Hooks will run in the order they are defined, as appropriate; all `before()` hooks run (once), then any `beforeEach()` hooks, tests, any `afterEach()` hooks, and finally `after()` hooks (once).

Truffle comes preconfigured with the Chai assertion library, which comes in two flavours:

- [expect](https://www.chaijs.com/guide/styles/#expect) which uses the `BDD` style, and
- [assert](https://www.chaijs.com/guide/styles/#assert) which provides the classic assert-dot notation, similar to that packaged with node.js.

Let’s look at what’s happening in our first test case.

## Our First Unit Test

```js
beforeEach(async () => {
  // Deploy Counter contract
  this.counter = await Counter.new(INITIAL_VALUE, { from: owner });
});

it("initializes with an initial value", async () => {
  const value = await this.counter.read();

  expect(value.toNumber()).to.equal(INITIAL_VALUE);
});
```

In this test case:

- First, we deploy our `Counter` contract in a `beforeEach()` clause.
- Within the `it()` clause, we check that the `value` returned from `Counter.read()` is equal to the value passed in during deployment.

Run `truffle test`, and you’ll get a summary of your unit tests.

```text
Contract: Counter
   ✓ initializes with an initial value
```

## Testing Protected Functions

Our example `Counter` contract uses an [AccessControl](https://docs.openzeppelin.com/contracts/3.x/access-control) scheme where only whitelisted Publishers are allowed to call `publish()`. We want to write unit tests to make sure the following holds true:

- Only addresses with the Publisher role can call `publish()` successfully.
- Calls from addresses without the Publisher role should revert.

To test contracts as different accounts, Truffle provides an `accounts` array which contains 10 addresses by default:

```js
contract('Counter', (accounts) => {
  const [ owner, other ] = accounts;

  ...
})
```

We can override any contract call with a `{ from }` argument to send transactions as that address:

```js
const {
  expectRevert, // Assertions for transactions that should fail
} = require('@openzeppelin/test-helpers');

...

const [ owner, other ] = accounts;

...

it('non-publishers cannot call publish', async () => {
  const isPublisher = await this.counter.hasRole(PUBLISHER_ROLE, other);
  expect(isPublisher).to.equal(false);

  await expectRevert(
    this.counter.publish(9000, { from: other }),
    "Caller is not a publisher."
  );
});
```

## Testing Reverts

In the above test case, we call `publish()` from the `other` address who is not a publisher. We use [expectRevert](https://docs.openzeppelin.com/test-helpers/0.5/api#expect-revert)`from the`[@openzeppelin/test-helpers](https://docs.openzeppelin.com/test-helpers/0.5/) library to assert that the transaction reverts.

## Testing Events

In our next test case, we call `publish` from a publisher address:

```js
const {
  expectEvent,  // Assertions for emitted events
} = require('@openzeppelin/test-helpers');

it('publishers can call publish', async () => {
  ...

  const receipt = await this.counter.publish(NEW_VALUE, { from: owner });

  expectEvent(receipt, 'Published', { source: owner, newValue: new BN(NEW_VALUE) });

  ...
});
```

We use [expectEvent](https://docs.openzeppelin.com/test-helpers/0.5/api#expect-event) from the `@openzeppelin/test-helpers` library to check that the proper `Published` event is emitted.

## Grouping Common Behaviours

Our example `Counter` contract inherits from an [AccessControl](https://docs.openzeppelin.com/contracts/3.x/access-control) contract. We want to assert that any inherited behaviour still behave as expected in `Counter`. After all, functions could be overriden anywhere in the inheritance tree.

A modular way to test inherited behaviour is define a separate `AccessControl.behaviour.js` test suite:

```js
// test/AccessControl.behaviour.js

const DEFAULT_ADMIN_ROLE =
  "0x0000000000000000000000000000000000000000000000000000000000000000";

function shouldBehaveLikeAccessControl(ctx, owner) {
  // Any Access Control specific behaviour

  it("deployer has default admin role", async () => {
    const hasAdminRole = await ctx().hasRole(DEFAULT_ADMIN_ROLE, owner);
    expect(hasAdminRole).to.equal(true);
  });
}

module.exports = shouldBehaveLikeAccessControl;
```

We can use this in the `Counter` test suite as `shouldBehaveLikeAccessControl`:

```js
// test/Counter.test.js

const shouldBehaveLikeAccessControl = require('./AccessControl.behaviour');

contract('Counter', (accounts) => {
  const [ owner, other ] = accounts;

  beforeEach(async () => {
    // Deploy Counter contract
    this.counter = await Counter.new(INITIAL_VALUE, { from: owner });
  });

  shouldBehaveLikeAccessControl(() => this.counter, owner);

  ...
})
```

Splitting common behaviour into behaviour-specific test suites gives us a modular way to verify inherited behaviour across multiple smart contracts!

## How to Time Travel ⏳🏃‍♂️💨

Smart contracts can implement time-related logic such as cooldowns and rounds. Our `Counter` requires that an hour has passed between calls to `publish()`:

```sol
// Counter.sol

function publish(uint newValue) public {
  ...
  require(now > _lastUpdatedAt + 60 minutes, "Updates must be between at least an hour apart.");
  ...
}
```

Obviously, we’re not going to stick around or sleep for an hour in our tests! We can `time` travel with our test helpers:

```js
const {
  time, // Time manipulation
} = require("@openzeppelin/test-helpers");

it("subsequent publishes must wait for at least an hour", async () => {
  await this.counter.publish(9001, { from: owner });

  await expectRevert(
    this.counter.publish(9002, { from: owner }),
    "Updates must be between at least an hour.",
  );

  await time.increase(3720); // 1 hour 2 minutes
  await this.counter.publish(9002, { from: owner });

  const newValue = await this.counter.read();
  expect(newValue.toNumber()).to.equal(9002);
});
```

The `time` module from the [@openzeppelin/test-helpers](https://docs.openzeppelin.com/test-helpers/0.5/) library lets you move forward in time or to specific blocks.

## Calculating Test Coverage

You can use [solidity-coverage](https://github.com/sc-forks/solidity-coverage) to calculate the test coverage of your unit tests. This plugin is included in our sample project. Run `yarn coverage` to generate a report:

```text
  Contract: Counter
    ✓ deployer has default admin role (54ms)
    ✓ initializes with an initial value (79ms)
    ✓ non-publishers cannot call publish (177ms)
    ✓ publishers can call publish (243ms)

  4 passing (2s)

--------------|----------|----------|----------|----------|----------------|
File          |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
--------------|----------|----------|----------|----------|----------------|
 contracts/   |      100 |       75 |      100 |      100 |                |
  Counter.sol |      100 |       75 |      100 |      100 |                |
--------------|----------|----------|----------|----------|----------------|
All files     |      100 |       75 |      100 |      100 |                |
--------------|----------|----------|----------|----------|----------------|
```

Code coverage tools help you spot any untested code. Make sure that all branches are covered!

## Testing Gas Usage

You can use [eth-gas-reporter](https://github.com/cgewecke/eth-gas-reporter) to calculate the gas usage per unit test as well as the average gas usage per method. Here’s an example report:

```text
  Contract: Counter
    ✓ deployer has default admin role
    ✓ initializes with an initial value
    ✓ non-publishers cannot call publish (22876 gas)
    ✓ publishers can call publish (50070 gas)

·-------------------------------------------------|----------------------------|-------------|----------------------------·
|      Solc version: 0.6.10+commit.00c0fcaf       ·  Optimizer enabled: false  ·  Runs: 200  ·  Block limit: 6721975 gas  │
··················································|····························|·············|·····························
|  Methods                                        ·               45 gwei/gas                ·       216.96 eur/eth       │
···············|··································|··············|·············|·············|··············|··············
|  Contract    ·  Method                          ·  Min         ·  Max        ·  Avg        ·  # calls     ·  eur (avg)  │
···············|··································|··············|·············|·············|··············|··············
|  Counter     ·  DEFAULT_ADMIN_ROLE()            ·           -  ·          -  ·          -  ·           0  ·          -  │
···············|··································|··············|·············|·············|··············|··············
|  Counter     ·  getRoleAdmin(bytes32)           ·           -  ·          -  ·          -  ·           0  ·          -  │
···············|··································|··············|·············|·············|··············|··············
|  Counter     ·  getRoleMember(bytes32,uint256)  ·           -  ·          -  ·          -  ·           0  ·          -  │
···············|··································|··············|·············|·············|··············|··············
|  Counter     ·  getRoleMemberCount(bytes32)     ·           -  ·          -  ·          -  ·           0  ·          -  │
···············|··································|··············|·············|·············|··············|··············
|  Counter     ·  grantRole(bytes32,address)      ·           -  ·          -  ·          -  ·           0  ·          -  │
···············|··································|··············|·············|·············|··············|··············
|  Counter     ·  hasRole(bytes32,address)        ·           -  ·          -  ·          -  ·           0  ·          -  │
···············|··································|··············|·············|·············|··············|··············
|  Counter     ·  publish(uint256)                ·           -  ·          -  ·      50070  ·           1  ·       0.49  │
···············|··································|··············|·············|·············|··············|··············
|  Counter     ·  PUBLISHER_ROLE()                ·           -  ·          -  ·          -  ·           0  ·          -  │
···············|··································|··············|·············|·············|··············|··············
|  Counter     ·  read()                          ·           -  ·          -  ·          -  ·           0  ·          -  │
···············|··································|··············|·············|·············|··············|··············
|  Counter     ·  renounceRole(bytes32,address)   ·           -  ·          -  ·          -  ·           0  ·          -  │
···············|··································|··············|·············|·············|··············|··············
|  Counter     ·  revokeRole(bytes32,address)     ·           -  ·          -  ·          -  ·           0  ·          -  │
···············|··································|··············|·············|·············|··············|··············
|  Migrations  ·  last_completed_migration()      ·           -  ·          -  ·          -  ·           0  ·          -  │
···············|··································|··············|·············|·············|··············|··············
|  Migrations  ·  owner()                         ·           -  ·          -  ·          -  ·           0  ·          -  │
···············|··································|··············|·············|·············|··············|··············
|  Migrations  ·  setCompleted(uint256)           ·           -  ·          -  ·      27341  ·           1  ·       0.27  │
···············|··································|··············|·············|·············|··············|··············
|  Deployments                                    ·                                          ·  % of limit  ·             │
··················································|··············|·············|·············|··············|··············
|  Counter                                        ·      905248  ·     905260  ·     905250  ·      13.5 %  ·       8.84  │
··················································|··············|·············|·············|··············|··············
|  Migrations                                     ·           -  ·          -  ·     164391  ·       2.4 %  ·       1.60  │
·-------------------------------------------------|--------------|-------------|-------------|--------------|-------------·
```

Gas reports can be helpful for optimizing gas usage. They help you identify the gas-guzzlers amongst your smart contracts.

> This plugin is also included for you in the [example-solidity-testing](https://github.com/bejoistic/example-solidity-testing) sample project. Simply clone and run it! 😀

That’s it! We’ve learned how to unit test smart contracts:

- How to test protected functions by calling as other addresses,
- How to check for reverted transactions,
- How to check for emitted events,
- How to fast forward time,
- How to modularize tests of inherited behaviours,
- How to calculate code coverage, and
- How to get reports on gas usage.

## Other Testing Best Practices

Unit tests are an important vanguard in your line of defence against bugs. However, they should not be the only tool in your repertoire! Consider a [layered security](https://en.wikipedia.org/wiki/Layered_security#:~:text=In%20other%20words%2C%20%22layered%20security,%2C%20are%20bypassed%2C%20or%20defeated.) approach.

![Layered Security - Visual Example](/static/img/posts/articles/1024px-Layered_security.jpg)

There are also static analysis, continuous integration, security audits, and formal verification to help you further secure your smart contracts. Every layer you add enhances the overall security of your system. The more layers, the better.

# In Closing

The high stakes and rigid immutability of smart contracts demands even more emphasis on testing compared to traditional software development. Unit tests help verify that your application behaves exactly as you intended. We covered:

- Why unit testing is important for smart contracts,
- How to write unit tests for smart contracts,
- Helpful tools and utilities you can use for complex assertions,
- Other smart contract testing best practices.

Now go forth and build robust smart contract systems!

> What’s your smart contract testing setup like? Feel free to comment below with your questions and feedback. 🙂
