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
video: "https://www.youtube.com/embed/WfXfj29KhLo?si=oGTIdv_3_rayUWv6"
---

Just finished watching this interesting talk from the PyconUS 2025 Conference.
<div style="display: flex; justify-content: center;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/WfXfj29KhLo?si=oGTIdv_3_rayUWv6" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
        web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
    </iframe>
</div>

## Takeaways

**Minimise memory transfers**:

- The [GPU](https://en.wikipedia.org/wiki/Graphics_processing_unit) is a separate device
  with its own memory (most modern GPUs rely on [VRAM](https://en.wikipedia.org/wiki/Video_random-access_memory)). To
  process data, you often
  need
  to transfer it from [CPU](https://en.wikipedia.org/wiki/Central_processing_unit) (host) memory to GPU (device) memory
  and back again. These transfers happen over the [PCIe](https://en.wikipedia.org/wiki/PCI_Express)
  bus, which is much slower than the GPU’s internal memory bandwidth.
- **Pitfall:** If you repeatedly move data back and forth in small chunks, the transfer latency dominates, and the GPU
  spends more time
  waiting than computing. This can make your code slower than a pure CPU implementation.

**Maximise operational intensity**:

- GPUs are designed for high throughput: they can perform billions of
  floating-point
  operations per second ([FLOPs](https://en.wikipedia.org/wiki/Floating_point_operations_per_second)). But if your
  kernel does only a few calculations per byte of memory accessed, then
  memory bandwidth — not compute power — becomes the bottleneck. This is called being memory-bound.
- **Pitfall:**
  Suppose you read 1 GB of data from memory and only do one addition per number. The GPU will be starved waiting for
  memory instead of flexing its compute units. A CPU, with better caching and lower memory latency, might actually run
  faster.

**Do NOT launch lots of small kernels**

- Launching a kernel has overhead (on the order of microseconds but an
  overhead at the end of the day). If you launch thousands of
  tiny [compute kernels](https://en.wikipedia.org/wiki/Compute_kernel), the overhead dominates and your GPU sits
  idle most of the time. GPUs work best using large, parallel workloads.
- **Pitfall:**
  Using a GPU like a CPU — e.g., writing a loop on the CPU that launches a GPU kernel for every small task. This gives
  you none of the parallelism benefits and a major overhead.

🔑 GPUs shine when you can (1) keep data on the GPU, (2) give them lots of calculations/mathematical operations to chew
on per byte of data, and (3) launch fewer, larger kernels rather than a ton of small ones. Misuse them, and they can be
slower than CPUs due to transfer overheads, memory stalls, or launch bottlenecks.