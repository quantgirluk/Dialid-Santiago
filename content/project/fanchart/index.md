---
title: "fanchart"
subtitle: "A Python library which provides functionality to create fancharts."
excerpt: "📦 Python library to create Fan Charts as introduced by the Bank of England in 1996"
date: 2020-01-05
author: "D. Santiago"
featured: true
draft: false
tags:
- Python
categories:
- Python
# layout options: single or single-sidebar
layout: single-sidebar
links:

- icon: github
  icon_pack: fab
  name: code
  url: https://github.com/quantgirluk/fanchart
- icon: door-open
  icon_pack: fas
  name: quick-start
  url: https://fanchart.readthedocs.io/en/latest/quick_start.html
- icon: newspaper
  icon_pack: far
  name: Documentation
  url: https://fanchart.readthedocs.io/en/latest/
---

<!-- ### “Grid is the very first CSS module created specifically to solve the layout problems we've all been hacking our way around for as long as we've been making websites.”

*— [Chris House, A Complete Guide to CSS Grid Layout](http://chris.house/blog/a-complete-guide-css-grid-layout/)* [^1]

--- -->

### Overview

The term **fanchart** was coined by the Bank of England in 1996. Since then, central banks around the world have used these charts to illustrate its forecasts for inflation, GDP, and other economy measures.

The BoE introduced the fan charts aiming to communicate a more accurate representation of their forecast for medium term inflation. In particular, the charts have two key objectives:

1. To **convey the uncertainty** in their forecasts. This is, to focus attention on the forecast distribution, rather than only on small changes to the central projection.
2. To **promote discussion** of the risks to the economic outlook, and thus contribute to a wider debate about economic policy. Fan charts help to make it clear that monetary policy is about making decisions instead of knowing the exact rate of inflation in two years time.

This library provides two main functions:

1. The fan function illustrates the distribution of all the forecasts available; and it has the option to display the historical values for reference.
   ![A fanchart](fan01.png)
2. The fan_single function illustrates the probability density function (pdf) or the cumulative density function (cdf) of one forecast distribution
   ![A second fanchart](fan04.png)
   ![A third fanchart](fan05.png)

<!-- ### <dfn title="Ermahgerd is a humorous version of the phrase oh my god, written as though pronounced with a heavy influence of extra Rs. It's meant to imitate the sound of someone speaking through a retainer.">ERMAHGERD</dfn>

A proper grid is what we always wanted, no ... _needed_ to build websites with a solid, unbreakable structure. And that's why I used it in this theme. I call this feature a "scaffold" because none of the _content_ is laid out on this grid. Only the main _structure_: consisting of the `header`, `footer`, `main`, `aside`, and `footer`. As you can tell by this quote from the [W3C](https://www.w3.org/TR/css-grid-1/) on the candidate recommendation itself, Grid is the perfect tool for the job: -->

<!-- > ##### CSS Grid Layout Module
>
> This CSS module defines a two-dimensional grid-based layout system, optimized for user interface design. In the grid layout model, the children of a grid container can be positioned into arbitrary slots in a predefined flexible or fixed-size layout grid.
>
> — _W3C_

CSS Grid is a total game changer, IMHO. Compared to the bottomless pit of despair that is the old way, the new way of building a site structure can be done in as little as 5 lines of CSS. Of course, it always takes more than that, but not much. I mean this is really the meat of the deal:

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, auto);
}
```

#### What an amazing time to be a web developer. Anyway, I hope you enjoy this "feature" that you'll probably never notice or even see. Maybe that's the best part of a good user interface – the hidden stuff that just works.

[^1]: The original article cited here is now updated and maintained by the staff over at CSS-Tricks. Bookmark their version if you want to dive in and learn about CSS Grid: [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) -->
