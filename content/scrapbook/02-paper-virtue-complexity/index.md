---
title: "The Limited Virtue of Complexity in a Noisy World"
subtitle: ""
date: "2025-07-01"
author: "D. Santiago"
categories:
  - "Scrapbook"
tags:
  - "Books"
  - "Podcasts"
  - "Videos"
  - "News"
excerpt: "Paper by Cartea, Álvaro and Jin, Qi and Shi, Yuantao (April 02, 2025).
Available at [SSRN](https://ssrn.com/abstract=5202064)."
layout: single
coverImage: "featured-natural-ensemble.jpg"
---


Cartea, Álvaro and Jin, Qi and Shi, Yuantao, The Limited Virtue of Complexity in a Noisy World (April 02, 2025).
Available at [SSRN here](https://ssrn.com/abstract=5202064) or [here](http://dx.doi.org/10.2139/ssrn.5202064).

**Summary:** In this paper, the authors analyse the role of model complexity in the context of predicting asset returns and portfolio
construction. In particular, they aim to address the significant question of whether adding a large number of predictive
features ultimately harms performance. Their work aims to bridge two views: the traditional econometric one, favoring
parsimonious models (i.e. [Occam’s razor](https://en.wikipedia.org/wiki/Occam's_razor)), and the more modern machine
learning findings that highly the fact that so-called "overparameterized" models can perform well under proper
regularization ([double descent phenomenon](https://en.wikipedia.org/wiki/Double_descent)).

The authors set up a framework where investors predicts excess returns using a large number of features, but these
features are "contaminated" by noise (which can arise from data collection gaps, computational approximations, or other
infrastructure limitations). They examine how this affects the Sharpe ratio of a timing strategy, which the investor
seeks to maximize, and the out-of-sample R-squared of return forecasts. Given the high-dimensional setting, they use
ridge regression and apply Random Matrix Theory classical results to characterise the asymptotic behaviour of these
metrics, focusing on the case where true features are independent (a quantitative investing).

Their results show that model complexity can improve asset return predictions and portfolio performance when
regularisation is used and data quality is high. However, when features are noisy or only partially observed, there
exists an optimal level of complexity. Beyond this point, adding features introduces more noise than signal, degrading
both predictive accuracy and portfolio outcomes.

**Takeaway:** In asset return prediction, higher complexity is not always better. When data are noisy, more features can
harm performance underscoring that [garbage in, garbage out](https://en.wikipedia.org/wiki/Garbage_in,_garbage_out)
applies strongly in quantitative finance.

