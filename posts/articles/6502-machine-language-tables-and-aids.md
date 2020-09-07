---
title: 6502 Machine Language Tables and Aids
subtitle: "I have created a couple of tables for the 6502 that can make the process easier."
description: "I have created a couple of tables for the 6502 that can make the process easier."
slug: 6502-machine-language-tables-and-aids
date: 2020-01-03
tags: ["article", "assembly", "6502", "retro", "programming"]
layout: layouts/post.njk
permalink: /articles/{{ slug }}/index.html
---

When programming using machine code there are a few useful aids that can make it easier to do. I have created a couple of tables for the 6502 that can make the process easier. They are based on tables found in 'Machine Code for Beginners', which [Usborne have made available as a PDF for free](https://usborne.com/browse-books/features/computer-and-coding-books/).

## 6502 Machine Language Hex Codes

When writing a program in machine code we need to be able to quickly find the machine language hex code for the instruction we want to enter. The following table should make this fairly simple.

![6502 Machine Language Hex Code Table](/static/img/posts/articles/6502_machine_language_hex_codes_table.jpg)

## Two's Complement Hex Code

If we need to use a negative number such as when using relative addresses, then the following table will allow us to quickly find the correct hex code to use. For example the two's complement of `-92` in hex is `A4`.

![8-bit Two's Complement Hex Table](/static/img/posts/articles/8_bit_twos_complement_hex_table.jpg)

## Source Files

If you want to alter these tables, I have put the original files used to create them in a [repo](https://gitlab.com/bejoistic/machine_language_aids) on GitLab.
