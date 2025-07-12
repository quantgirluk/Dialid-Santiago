---
title: "Scrapbook - July 2025 "
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
excerpt: "A mental scrapbook to make sense of the noise, reflect on what stood out, and maybe even spark something interesting for you too."
layout: single
coverImage: "featured-natural-ensemble.jpg"
---

---

### 🍿 The Diary of a CEO: Geoffrey Hinton

Just finished watching [Geoffrey Hinton](https://en.wikipedia.org/wiki/Geoffrey_Hinton#Views)’s interview on The Diary
of a CEO — a rare, candid conversation from one of the pioneers of AI.

<div style="display: flex; justify-content: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/giT0ytynSqg?si=5m42a0UTQB_TcKp2" 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
  </iframe>
</div>

**Takeaways**

1. Real AI risks are already here
   Hinton emphasizes that the pressing dangers aren't sci-fi superintelligence, but things we see today: algorithmic
   manipulation, the amplification of bias, and disinformation at scale.

2. Hinton comes from a family tree of scientific legacy. His lineage includes
   [George Boole](https://en.wikipedia.org/wiki/George_Boole) best known as the author of The Laws of Thought (1854),
   which contains Boolean algebra;  [George Everest](https://en.wikipedia.org/wiki/George_Everest), a geographer and a
   Surveyor General of India, after whom Mount Everest was named;
   and [Joan Hinton](https://en.wikipedia.org/wiki/Joan_Hinton) a nuclear physicist and one of the few women scientists
   who worked for the Manhattan Project
   in Los Alamos.

3. Hinton left his academic post not for ambition or prestige, but to earn enough to support his son, who has learning
   disabilities. His story highlights a quiet crisis: academia struggles to retain top talent when it can’t offer the
   financial security that industry can. What does it say about our priorities when some of the most important work in
   science can’t afford to support a family?

---

### 📝 The Limited Virtue of Complexity in a Noisy World

Cartea, Álvaro and Jin, Qi and Shi, Yuantao, The Limited Virtue of Complexity in a Noisy World (April 02, 2025).
Available at SSRN: https://ssrn.com/abstract=5202064 or http://dx.doi.org/10.2139/ssrn.5202064

In this paper, the authors analyse the role of model complexity in the context of predicting asset returns and portfolio
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

---

### Scrapbook Featured Image

Natural History Ensemble, no. 11 (1596–1610) by the talented Flemish
draughtsman [Anselmus Boëtius de Boodt](https://en.wikipedia.org/wiki/Anselmus_de_Boodt)
(1550–1632).


<div style="text-align: center;">
  <img src="featured-natural-ensemble.jpg" alt="Featured image" style="width: 80%; height: auto;" />
</div>



Check out more of Anselmus Boëtius de Boodt's works in
this [Rawpixel Gallery](https://www.rawpixel.com/board/561364/anselmus-boetius-boodt-free-public-domain-plant-and-animal-illustrations)

Source: Public Domain. Original from the [Rijksmuseum](https://www.rijksmuseum.nl/en).  
