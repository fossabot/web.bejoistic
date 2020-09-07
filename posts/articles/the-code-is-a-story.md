---
title: The Code Is a Story
subtitle: "This step is a personal one."
description: "This step is a personal one."
slug: the-code-is-a-story
date: 2018-07-20
tags: ["article", "programming", "thought", "dev"]
layout: layouts/post.njk
permalink: /articles/{{ slug }}/index.html
---

There's a bunch of posts here about reading code like [this one](https://dev.to/joshnuss/parachuting-into-unknown-code-19hg). Reading code is one of the most important skills that you should have alongside communication and abstraction. Because you will spend more time reading code than writing it. And sometimes, it will be the only thing you have. What I will be sharing today is how I approach reading code.

## Visualize the intent

The first task in my list is to get a clear view of what this code is supposed to do. Sometimes, you'll get a working version that you can experience with or the original specifications. Other times, you'll get a written version of the objectives of the author. But the most important thing is to get it running. It's the quickest way to visualize the solution, very much like viewing the table of contents of a book.

## Define your objectives

What I do next is defining one or two parts I want to understand from the code. More often than not, the implemented solution is a collection of interconnected systems and components and figuring the relations between them can take as much time as figuring how each one works individually. One example is "Figuring how the program models the content of this file". It's similar to skipping to a specific chapter to see a particular section of the subplot when the specifics are loosely related to the other parts of the main story.

## Reading the ~~plot~~ flow

Once you have a particular use case to study, it's pretty much straightforward. What I expect is that the code for a use case will usually have one entry point (good modularity) and one or more exit points (many of those are failures). You'll have four things to grasp:

- The input
- The output
- The context
- The process

I usually start with the **input**. If we take the previous example, I already know the input which is a file and the format of this file. From now, I will read what happens to this file by following the implemented **process**. The final result will be the **output** of the use case (which I expect will be a collection of structures that models the content of the file for other parts of the source code to deal with). The process may involve outside entities which will form its context. A lot of times, only the particular interactions between the process and its context will need to be understood, not the nature of the latter. If the content of the is JSON formatted text, you may need a deserializer. You only need to know that it will deserialize the string to a structure you can use more easily, not the deserialization process.

## Blackboxing

This step is a personal one. I try to simplify the process by considering it a black box and directly connect its input to the output. I also skip over the possible failures and ignore the context. The output will only depend on the input and the latter's possible variations. In our example, I consider how the changes in the content of the file will reflect in the structures created at the end. If I can successfully visualize that, I consider I'm done with this particular ~~chapter~~ use case

And that's it. That's my technique for reading code. For me, every code is a story and this way enabled me to understand it easily and swiftly. It's very analog to speed reading and allows me to focus only on the necessary parts.
