---
title: Haskell and Discipline
subtitle: "Haskell requires discipline."
description: "Haskell requires discipline."
slug: haskell-and-discipline
date: 2020-03-09
tags: ["article", "haskell", "programming"]
layout: layouts/post.njk
permalink: /articles/{{ slug }}/index.html
---

What's the difference between a magma and a semigroup?

In abstract algebra, a magma is an algebraic structure, and is the marriage of a set (or 'type') together with a binary operation. Similarly, a semigroup is an algebraic structure that too marries a set together with a binary operation. In both cases, the binary operation must be 'total' (Meaning it isn't a partial function over the set.). The difference between a magma and a semigroup is in the added stipulation for semigroups that the binary operation be associative. If a set is together with a binary operation, it is a magma, and if that operation is associative, then it is a semigroup.

In Haskell, the difference between semigroups and magmas isn't entirely clear, at least not by looking at their respective typeclass implementations:

```haskell

-- The Semigroup typeclass (minimal) definition:
class Semigroup a where
  (<>) :: a -> a -> a

-- And a minimal typeclass definition for 'Magma':
class Magma a where
  (<~>) :: a -> a -> a

```

If we were to define an instance of the 'Magma' typeclass for a list:

```haskell

instance Magma [a] where
  (<~>) lst1 lsty2 = lst1 ++ lst2

-- or, more consicely
instance Magma [a] where
  (<~>) = (++)

```

How does this differ from the instance of Semigroup for a list of variable type 'a'?

```haskell

instance Semigroup [a] where
  (<>) = (++)

```

Other than the exact name of the function (Which was altered only to avoid an ambiguous occurrence error.), there's no difference. The fact that the binary operation in a Semigroup must be associative is completely absent from our definition of Semigroup. On the surface of it (And just by looking at the typeclass definitions.), the two typeclasses appear to be one and the same.

What would be really useful is if Haskell allowed us to define constraints within the typeclass, something like:

```haskell

-- Note, this is NOT real Haskell syntax
class Semigroup a where
  (<>) :: a -> a -> a
  given
    a1 <> (a2 <> a3) == (a1 <> a2) <> a3

```

Whilst something like this would be very nice to have, it's difficult to see how it would be implemented in practice.

It's possible to implement some level of property testing via QuickCheck, but this can't be done in a typeclass definition, and can only be done for each instance of a typeclass.

## Following the law

In place of any hard-coded compile-time checking of the properties of our algebraic structures, the responsibility for ensuring the appropriate laws are followed when implementing typeclasses and instances of different algebras falls solely on the programmer. The difference between a magma and a semigroup and ensuring the differences in laws is respected can't be offloaded to the computer, and therefore is taken as extra cognitive overhead. Keeping these laws in mind and making sure never to break them can lead to more cognitive work than many programmers are used to, but respecting them will almost always lead to better code. Haskell is pretty unique in the fact that idiomatic Haskell code must follow certain algebraic laws with respect to the algebraic structures the programmers uses in their code, requiring a level of discipline not seen in the most commonly used languages nowadays (Python and JavaScript spring to mind).

Haskell requires discipline, but learning to write code with the level of discipline that Haskell requires will lead inevitably lead to higher quality code and, more than likely, a higher quality coder too.
