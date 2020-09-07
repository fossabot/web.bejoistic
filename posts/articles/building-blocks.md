---
title: Building Blocks With Functional Programming
subtitle: "This is a more visual approach to the topic of purely-typed functional programming."
description: "This is a more visual approach to the topic of purely-typed functional programming."
slug: building-blocks
date: 2020-08-18
tags: ["article", "programming", "principles"]
layout: layouts/post.njk
permalink: /articles/{{ slug }}/index.html
---

This is a more visual approach to the topic of purely-typed functional programming. What does it mean to have a “functional” programming language? What are types? What makes a functional-programming language “pure”? These are the questions we will answer here, with a focus on simplicity.

## Simplicity

![Not intertwined](/static/img/posts/articles/simple.png)<br/>

> Not intertwined.

![Intertwined](/static/img/posts/articles/complex.png)<br/>

> Simplicity is a prerequisite for reliability.
>
> — Edsger W. Dijkstra

> The benefits of simplicity are: ease of understanding, ease of change, ease of debugging, flexibility.
>
> — Rich Hickey

## Functional

![Function](/static/img/posts/articles/function.png)<br/>

When we say that we are going to do functional programming, we are basically saying that we are mainly going to use functions. That’s all there is to it, **just plain functions.**

## Purity

> Not mixed or adulterated with any other substance or material.
>
> — Definition of the adjective **pure**

This is very close to the concept of simplicity.

Purity in functional programming means that we don’t want any side effects, or at least manage them properly. Or to put it differently, we want a function to always have the same output given the same input. For example, say you have a function that makes an HTTP request, you can’t guarantee that that request will always return the same thing, it’s impure.

![Impure functions](/static/img/posts/articles/impure-function.png)<br/>

Having a pure function means that we have certain guarantees, we can use mathematics (category theory) now. This is a pure function:

![Impure functions](/static/img/posts/articles/pure-function-1.png)<br/>

Given a function `f` which takes the argument `A` and returns `B`, and another function `g` which takes the argument `B` and returns `C`. Category theory says there must always be a function that takes the argument `A` and returns `C`, a composition of the functions `f` and `g`. We will call this function `h`:

![Composed](/static/img/posts/articles/pure-function-2.png)<br/>

In Haskell you can do function composition using the `.` operator. This new function is saying first `buyDynamiteFromStore` (and tell it the exact store), then after that `goIntoBuilding` and finally `strapDynamite`.

```haskell
placeDynamite = strapDynamite . goIntoBuilding . buyDynamiteFromStore store
```

> Composition is the essence of programming.
> 
> — [Bartosz Milewski](https://bartoszmilewski.com/2014/11/04/category-the-essence-of-composition/)

This goes hand in hand with immutability, another feature of pure-functional-programming languages. Because everything in these languages is immutable, everything is simple.

![Danger of Mutability](/static/img/posts/articles/immutability.png)<br/>

## Types

> Types are how we group a set of values together that share something in common. Sometimes that commonality is abstract; sometimes it’s a specific model of a particular concept or domain.
>
> — Haskell Programming From First Principles (book)

Using types we can define blueprints for our functions:

![Blueprint](/static/img/posts/articles/types.png)<br/>

Our compiler now knows what to expect from this function, and consequently, the compiler can tell us if something is wrong. We don’t have to wait until the code is being executed at runtime. It’s also easier for us to understand what the function does, the function signature already gives us a hint. Or sometimes, as in this example, it gives us the full picture. That said, types don’t cover everything, we still need tests, especially for logic.

Here again mathematics comes into play, this time in the form of set theory and type theory. I won’t go into it here, the only thing I will say is that it allows us again to make certain assumptions and guarantees about our code.

Every programming language has a set of predefined types, like `Integer` and `Bool`, but we can also make our own types, here’s an example of a datatype:

![Stacks](/static/img/posts/articles/union-types.png)<br/>

If a function takes an argument of the type `Stacks`, you can use any of these values. You can also make more abstract types:

![Option type](/static/img/posts/articles/option-type.png)<br/>

We could have some blocks or none at all. This is a better way to deal with none-existing values, as opposed to a `null` pointer.

```haskell
{-| In Haskell you would say the following,
    where `a` means "any type".
-}
data Option a = Some a | None


{-| And then you use it like so ...
    as a result from a function:
-}
blowUpLegoBuilding :: Building -> Option Blocks
blowUpLegoBuilding building =
    building
        |> placeDynamite
        |> gatherRubble
        |> takeBlocksFromRubble
        |> pick
    where
        pick []   = None
        pick list = Some list


{-| Or as an argument to a function:
-}
makeSomethingFromLeftovers :: Option Blocks -> Building
makeSomethingFromLeftovers option =
    case option of
        Some blocks ->
            buildNewBuilding blocks

        None ->
            -- Can't build something from nothing,
            -- so we buy a building instead.
            buyBuilding
```

## Conclusion

You may be wondering why I’m using the phrase “building blocks”, it’s because, to me, this really feels like putting blocks together and sometimes dismantling them.

![OurWall Type](/static/img/posts/articles/our-wall-type.png)<br/>

```haskell
dismantleAndGetBlockA :: OurWall -> BlockA
dismantleAndGetBlockA (Wall blockA blockB blockC) = blockA
```

I hope this shows some of the basics and advantages of (pure) functional programming. The rabbit hole goes a lot deeper, but I think the basics alone are already super useful.

![Happy building](/static/img/posts/articles/conclusion.png)
