---
title: Haskell is a Bad Programming Language
subtitle: "Haskell is not too hard to learn. It is just a bad programming language."
description: "Haskell is not too hard to learn. It is just a bad programming language."
slug: haskell-is-a-bad-programming-language
date: 2020-07-10
tags: ["article", "haskell", "programming"]
layout: layouts/post.njk
permalink: /articles/{{ slug }}/index.html
---

Such inflammatory, much wow. Unfortunately, Haskell itself agrees.

Some languages naturally lend themselves towards adoption. Some don't. You'd expect after 30 years of Haskell, the community, tooling, and development environment would grow much more mature.

Spoiler alert. It did not.

Funnily enough everyone in the Haskell community blamed everyone else instead of doing a critical assessment of the language like what Perl did. I stifled a laugh when I see proponents of "Simple Haskell", implying that somehow the language is "too hard for people to learn".

If people can pick up F#, Scala and Clojure, all with their own brand of weirdness, both in syntax and environment while being functional programming languages, I don't really see how this statement holds any water.

Haskell is not too hard to learn. It is just a bad programming language.

One, programming languages are meant to ease the task of creating computer programs as opposed to writing assembly by hand. Thus, the most important part of programming languages is communication. If the language naturally lends itself towards making code easier for people to understand, it will succeed, even if it is weird. Look at Clojure. Weird parentheses, and yet it took the world by storm all because the programming language actually makes a lot of sense and facilitates communication both between programmers, and the computer.

Haskell proponents try to claim that type signatures are somehow documentation. Yeah, no matter how many times you claim this, it's really not true. We have had decades of experience in statically typed languages tell us that types are never replacement for clear syntax and documentation. Every few months some newbie comes along to the Haskell reddit and asks why is Haskell documentation so confusing, and the post get destroyed by people telling them to get good or just pointing at academic papers. Really?

What's even funnier is people saying that "Haskell doesn't suck, the development environment does". Haskell has had 30 years to improve itself and while there's some headway, growth is ridiculously slow. Guess what? If people can work with C++ and create amazing tools with it, I don't think that statement makes much sense.

Two, Haskell is a functional language that also convinces its users to commit the same mistakes as writing an OOP language. Very senior Haskellers calls for "type oriented programming" which goes like this: Write types and interfaces for the types and fill in the blanks. Sounds familiar? Because that's we've been doing with Java and the like using UML. Haskell barely benefits because it's a FP language but being a relatively unflexible language, it throws out all the things we've learnt as a software development community like focusing on loose dependencies and being constantly ready for change. Professional developers find themselves describing the system in such concrete ways using types that when the requirements change suddenly their precious castle is reduced to dust and they then have to restructure their types interaction again. This is the bad thing of top-down design. Bottom up design is something we've learnt collectively as a good way to be much more flexible in responding to change. Build simple parts, mix and match them to build complex parts.

Part of this has to do with Haskell's way of tricking people into thinking that more abstraction with higher level types is a good thing. There's two things wrong with this. One, types are a concretion. If you're looking for higher level of abstractions to get flexible behaviour, you're ultimately going to have a world of pain, because of two, abstractions ultimately leak, and when abstractions on abstractions on abstractions leak, it's not a pretty sight. Somehow Haskellers think that they are more productive with Haskell when the reality in the real world is that only a few languages can proudly make that claim, such as Python and Lisp. These are languages battle tested in actual software products that it is for a fact that people are simply more productive in it, not because they are easy, but they are simple.

Abstractions with types is a bad type of abstraction because it ignores the basic fact that programs deal with data, and data has no types. When you're reading this article, or talking to someone, do you claim that you're saying a string, a number, a Text, or something else? No! Data is simply data, and data is inherently dynamic. We add types to data to make it easier (not simpler!) to work with data. In most cases people are looking for schemas, not types. Types wrap data and treat it like a black box whereas schema describes the shape and content of data. As such haskell ultimately suffers a lot when they have to interact with the real world. Suddenly they are left reeling as they find out that the real world is, in fact, dynamic. And so you see people propose "boring haskell" where you basically write haskell like some functional C# program.

Three, Haskell doesn't suck because it does not have enough libraries, it sucks because working with other languages is a horrifying experience given that so many tricks are needed to make GHCJS. Look, even most haskellers would agree that purescript is a better choice compared to GHCJS. No man is an island, and yet Haskellers generally convinced themselves that other languages need to learn from Haskell, and not the other way around.

A very clear indication of this is how Haskell treats programming terms. [Instead of explaining Monads like all other design patterns out there](https://medium.com/glassblade/pragmatic-monad-understanding-c6f6447d1bcb), they insist on using some obscure definition from category theory to explain it. Look, when monads are used without the infix notation, the result is horrendous and it looks like yet another callback chain. Functors are basically an Object with a internal state changing method in typical OOP terms. Haskell is not hard, the language itself is fairly easy to grok, but the terms people use are just plain ignorant of the other people in the software community. It is as if Haskell doesn't want "normal" people to understand it, and it lends towards a sort of elitist community where people claim they understand something when they don't. Don't believe me? Try asking people using Haskell about monads and watch as they gape as they give you a psuedo-explanation. I tried it myself. Of course, there are very smart people who do understand Monads, but most people would just tell you to "get an intuition for it", which to be honest is total BS.

Haskell would be better off if people stop thinking that it's a "beautifully designed" language and start critically examining how to improve core Haskell, in my honest opinion.
