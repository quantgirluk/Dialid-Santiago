---
title: "Yield Curves Visualisation"
subtitle: "A Dash app showing Interactive Visualisation of the Yield Curve for the UK and the US."
excerpt: "📈 A Dash app showing Interactive Visualisation of the Yield Curve UK and US."
date: 2024-05-01
author: "D. Santiago"
draft: false
tags:
  - hugo-site
categories:
  - Python
  - Data-viz
layout: single-sidebar
links:
- icon: github
  icon_pack: fab
  name: code
  url: https://github.com/quantgirluk/Yield-Curves-Visual
---

<!-- ![Formspree Logo](formspree-logo.png) -->

<!-- ## [Formspree](https://formspree.io) makes it easy to receive submissions from HTML forms on your static website. -->

<!-- --- -->

### Overview

This **dash app** contains interactive charts illustrating the **risk-free Yield Curves** for the US and the UK. It was written in Python using the graphing open source library [Plotly](https://plotly.com/python/).

#### Visualisations

The app consists of the following 4 interactive charts:

1. An animated scatter with line plot illustrating the evolution of the yield curve over time. It allows us to appreciate the different shapes that it has taken, and how it compares with the present curve.
2. A 3-D surface displaying the structure of the curve over time. This chart follows the style from the article [“A 3-D View of a Chart That Predicts The Economic Future: The Yield Curve”](https://www.nytimes.com/interactive/2015/03/19/upshot/3d-yield-curve-economic-growth.html) published by The New York Times.
3. A Heatmap showing the yield curve evolution over time in two dimensions. It is worth noting that the heatmap provides the same picture as the 3-D surface when viewed from above.
4. Finally, an area-chart illustrating the spread yield, i.e. the difference between long and short term interest rates.

#### The Yield Curve

In finance, the yield curve is a graph which depicts how the yields on debt instruments – such as bonds – vary as a function of their years remaining to maturity.

[Ronald Melicher](https://www.colorado.edu/business/leeds-directory/faculty/ronald-melicher) and Merle Welshans have identified several characteristics of a properly constructed yield curve. It should be based on a set of securities which have differing lengths of time to maturity, and all yields should be calculated as of the same point in time. All securities measured in the yield curve should have similar credit ratings, to screen out the effect of yield differentials caused by credit risk. For this reason, many traders closely watch the yield curve for U.S. Treasury (Bank of England in the UK) debt securities, which are considered to be risk-free.