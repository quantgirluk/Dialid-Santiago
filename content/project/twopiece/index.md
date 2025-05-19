---
title: "two-piece"
subtitle: "Python library providing Two-Piece distributions functionality."
excerpt: "📦 Python library providing Two-Piece distributions functionality. It covers the subfamilies: TP Scale, TP Shape, and Double TP."
date: 2019-01-11
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
  url: https://github.com/quantgirluk/twopiece
- icon: door-open
  icon_pack: fas
  name: web-site
  url: https://pypi.org/project/twopiece/
# - icon: newspaper
#   icon_pack: far
#   name: Documentation
#   url: https://fanchart.readthedocs.io/en/latest/
---

<!-- ### “Grid is the very first CSS module created specifically to solve the layout problems we've all been hacking our way around for as long as we've been making websites.”

*— [Chris House, A Complete Guide to CSS Grid Layout](http://chris.house/blog/a-complete-guide-css-grid-layout/)* [^1]

--- -->

### Overview

The **twopiece** library provides a [Python](https://www.python.org/) implementation of the family of Two Piece
distributions. It covers three subfamilies [Two-Piece Scale](#two-piece-scale), [Two-Piece Shape](#two-piece-shape),
and [Double Two-Piece](#double-two-piece). The following diagram shows how these families relate.

<figure>
  <p><img src="https://raw.githubusercontent.com/quantgirluk/twopiece/master/tpfamilies.png"
    width="500" height="230">
</figure>

### Notes

For technical details on this families of distributions we refer to the following two publications which serve as reference for our implementation.

- [Inference in Two-Piece Location-Scale Models with Jeffreys Priors](https://projecteuclid.org/euclid.ba/1393251764) published in [Bayesian Anal.](https://projecteuclid.org/euclid.ba) Volume 9, Number 1 (2014), 1-22.

- [Bayesian modelling of skewness and kurtosis with Two-Piece Scale and shape distributions](https://projecteuclid.org/euclid.ejs/1440680330)
  published in [Electron. J. Statist.](https://projecteuclid.org/euclid.ejs), Volume 9, Number 2 (2015), 1884-1912.

For the [R](https://www.r-project.org/) implementation we refer to the following packages.

- [twopiece, DTP, and TPSAS](https://sites.google.com/site/fjavierrubio67/resources)

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
