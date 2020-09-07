---
title: Buangin Dong
description: Robotic trashcan that sorts your trash for you.
image: /static/img/posts/projects/buangindong.gif
tags: project
slug: buangindong
type: pi
date: 2018-02-20
layout: layouts/project.njk
permalink: /projects/{{ slug }}/index.html
---

### The problem

My team wanted to take on a very challenging problem and see what we could come up with. We were confident that we had a good mix of talent and wanted something to really push ourselves. After mulling over a few ideas, we settled on trying to tackle the world’s excessive waste problem.

### Here’s more on the issue:

Failing to handle waste properly is loss to our health, our economy, and our environment. These are just a few of the ways it harms us and our planet:

- Unrecycled products release harmful chemicals and greenhouse gasses polluting our soil and air
- Habitat destruction is furthered instead of reusing the materials we already have
- Huge amounts of energy are wasted by mining raw materials instead of using recycled ones

In spite of these harmful effects and inefficiencies, Indonesians only recycle about 20% of their waste, leaving 180 million pounds to decompose in landfills and pollute our oceans. [1] At current rates, we are completely *unsustainable*.

When polled about their low recycling rate, 9 out of 10 Indonesians said that they would recycle if it were 'easier'. [2] Clearly, there needs to be a better way for Americans to dispose of their waste.

### The Idea

To solve this need for easier recycling, our team proposed **_BuanginDong_**, a robotic trashcan that sorts your trash for you! BuanginDong revolutionizes the centuries-old trashcan with advanced new technologies.

The product is enabled by deep learning models and robotic components that quickly sort compost, recyclables, and trash into separate bins within one main trashcan. The user simply tosses an item into the can and it’s automatically sorted!

![Sorting](/static/img/posts/projects/buangindong.gif)

### Here’s a more specific breakdown of how BuanginDong works:

![BuanginDong](/static/img/posts/projects/buangindong-work.jpeg)

**(1)** The user tosses the waste item into the top of the can and the item is quickly funneled down to a sorting platform via gravity.

**(2)** Here, the detection occurs. The camera feeds the video image of the item to a laptop. The laptop then predicts the type of waste using a convolutional neural network.

**(3)** Based on this prediction, the laptop signals the Arduino into action. The Arduino first rotates the bin and then turns the sorting platform dumping the item into its compartment.

### What I learned

On top of having a ton of fun at the event, I learned a lot in both technical and non-technical domains.

On the **_technical side_**, I got to delve into transfer learning, a deep learning technique that allows a model to get better results with fewer data, and apply it to a real-world problem. In addition to that, I gained some hands-on engineering experience when I helped build pieces of the can. It was really cool to work with all the different materials and combine them to accomplish a structural goal.

On the **_non-technical side_**, I sharpened my ability to work under pressure with a team and got more valuable experience working with people face-to-face, rather than through my computer screens.

### Sources

1. https://gitlab.com/bejoistic/buangin-dong
