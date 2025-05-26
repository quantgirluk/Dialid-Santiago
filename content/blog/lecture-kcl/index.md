---
title: "KCL Guest Lecture 2025"
subtitle: ""
date: 2025-03-07
author: "D. Santiago"
categories: 
  - "Career"
  - "Talks"
tags: 
  - "Talks"
excerpt: "Last month, I had the privilege of delivering a guest lecture at King’s College London to MSc students enrolled in the Computational Finance program. This year, we focused on the estimating price sensitivities (a.k.a. Greeks) using Malliavin Calculus + Monte Carlo methods."
layout: single
coverImage: "comparison_delta_digital.png"
---

Last month, I had the privilege of delivering a guest lecture at [King's College London](https://www.kcl.ac.uk) to MSc students enrolled 
in the [Computational Finance](https://www.kcl.ac.uk/study/postgraduate-taught/courses/computational-finance-msc) program. This year, we focused on the problem of estimating price sensitivities 
(a.k.a. Greeks) using Malliavin Calculus + Monte Carlo methods, thoroughly exploring its mathematical formulation, 
along with a practical demonstration of its implementation in Python 🐍. Here is a summary of the points that we 
discussed during the session


First, I shared a bit about my experience working as a Quant after graduating from a STEM background (and having no 
previous experience). More generally, we discussed what it means to be a Quant and how this has changed over the years.


We talked about the large number of opportunities that currently exist in the Quant world. To put things in 
perspective, we took a look at this image from the book 
"[The Front Office Manual: The Definitive Guide to Trading, Structuring and Sales (Global Financial Markets)](https://www.amazon.co.uk/Front-Office-Manual-Definitive-Structuring/dp/1137030682) (2013)" 
by A. Sutherland, and J. Court

<a href="images/IBStructure-2.png" class="glightbox">
  <img src="images/IBStructure-2.png" alt="Description" />
</a>

and commented on how much things have changed since the book was published. Today the picture should probably look more
like this one ⬇️ which translates in much more opportunities for Quants!

[//]: # (![]&#40;images/IBStructureModified2.png&#41;)


<a href="images/IBStructureModified2.png" class="glightbox">
  <img src="images/IBStructureModified2.png" alt="Description" />
</a>


Then, we passed to the more technical part of the agenda: defining the problem of estimating Greeks and exploring different mathematical techniques to solve it.

{{< gallery match="gallery/*.png" >}}

You can access the lecture materials here:

- [Jupyter Notebook: Malliavin Greeks under BS dynamics](https://quantgirluk.github.io/Understanding-Quantitative-Finance/malliavin_delta_gbm.html)

- Slides

[//]: # (<iframe src="/docs/Malliavin_KCL.pdf" width="100%" height="400px" style="border: none;">)

[//]: # (    This browser does not support PDFs. Please download the PDF to view it: )

[//]: # (    <a href="/docs/Malliavin_KCL.pdf">Download PDF</a>.)

[//]: # (</iframe>)


<div class="pdf-container">
  <iframe src="/docs/Malliavin_KCL.pdf" width="900%" height="400px" style="border: none;"></iframe>
</div>


I cannot believe this is already my 4th year visiting KCL-- it was amazing to be there and have the opportunity to engage with both the students and their professors who organise these lecture series, acting as a crucial bridge between industry and academia.

As a quant, keeping in touch with academia holds a tremendous value. Not only does it help you to remain current with the latest research trends, but it also infuses you with the energy and curiosity of the upcoming generations!

p.s. Big thank you to all the students for attending and asking so many interesting questions during and after the presentation.
