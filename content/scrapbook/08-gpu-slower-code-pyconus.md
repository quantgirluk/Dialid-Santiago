---
title: "When GPUs Make Python Slower"
subtitle: ""
date: "2025-08-22"
author: "D. Santiago"
categories:
  - "Scrapbook"
tags:
  - "Videos"
  - "Python"
excerpt: "Just watched this interesting talk from the PyconUS 2025 Conference."
layout: single-scrapbook
video: "https://www.youtube.com/watch?v=giT0ytynSqg&t=3741s"
---

Just finished watching this interesting talk from the PyconUS 2025 Conference.
<div style="display: flex; justify-content: center;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/WfXfj29KhLo?si=oGTIdv_3_rayUWv6" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
        web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
    </iframe>
</div>

**Takeaways**

1. **Minimise memory transfers**: The GPU is a separate device with its own memory (VRAM). To process data, you often
   need
   to transfer it from CPU (host) memory to GPU (device) memory and back again. These transfers happen over the PCIe
   bus, which is much slower than the GPU’s internal memory bandwidth.
2. **Maximise operational intensity**: GPUs are designed for high throughput: they can perform billions of
   floating-point
   operations per second (FLOPs). But if your kernel does only a few calculations per byte of memory accessed, then
   memory bandwidth — not compute power — becomes the bottleneck. This is called being memory-bound.
3. **Do NOT launch lots of small kernels**: Launching a kernel has overhead (on the order of microseconds but an
   overhead at the end of the day). If you launch thousands of tiny kernels, the overhead dominates and your GPU sits
   idle most of the time. GPUs work best using large, parallel workloads.

🔑 GPUs shine when you can (1) keep data on the GPU, (2) give them lots of calculations/mathematical operations to chew
on per byte of data, and (3) launch fewer, larger kernels rather than a ton of small ones. Misuse them, and they can be
slower than CPUs due to transfer overheads, memory stalls, or launch bottlenecks.