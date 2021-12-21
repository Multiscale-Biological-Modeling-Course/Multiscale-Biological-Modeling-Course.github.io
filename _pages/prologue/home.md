---
permalink: /prologue/
title: "Prologue: Random Walks and Turing Patterns"
sidebar:
 nav: "prologue"
image: "../assets/images/gray_scott_jupyter_high-res.png"
excerpt: "by Noah Lee, Mert Inan, and Phillip Compeau"
header:
  overlay_image: "../assets/images/gray_scott_jupyter_high-res.png"
  overlay_filter: 0.3
author_profile: true # add author to page
---

# Introduction: Turing and the Zebra's Stripes

Our story begins with an unlikely character: Alan Turing. If you have heard of Turing, then you might be surprised that he would appear in the first sentence of a course on biological modeling.

[![image-center](../assets/images/600px/alan_turing_npg_cc.jpg){: .align-center}](../assets/images/alan_turing_npg_cc.jpg)
Alan Turing in 1951. © National Portrait Gallery, London.
{: style="font-size: medium; text-align: center;"}

Turing was a genius cryptographer who helped break several German ciphers during World War II. But his most famous scientific contribution was a 1936 paper in which he introduced what has come to be known as a **Turing machine**[^numbers]. This hypothetical computer consists of an infinitely long tape of cells and a reader that can read one cell at a time. Each cell consists of only a single number, and the machine can move one cell at a time, reading and rewriting cells according to a finite collection of internal rules.

Turing's major insight was that this simple machine is nevertheless powerful. Nearly a century after his work, any task that can be performed by a computer --- even the world's most largest supercomputer --- could be implemented by a Turing machine, which Joseph Weizenbaum called nothing more than "pebbles on toilet paper"[^weizenbaum].

Two years before his untimely demise in 1954, Turing published his only paper on biochemistry, which addressed the question: “Why do zebras have stripes?”[^morphogenesis]

Turing was not asking why zebras have *evolved* to have stripes --- this question was unsolved in Turing's time, and recent research has indicated that the stripes may be helpful in warding off flies.[^zebra] Rather, Turing was interested in what mechanism could produce the stripes that we see on a zebra's coat. And he reasoned that just as a simple machine can emulate a computer, some limited set of molecular "rules" could cause stripes to appear on a zebra's coat.

In this module, we will introduce a particle simulation model based on Turing's ideas. We will be amazed that a system built on very simple rules and even *randomness* can nevertheless produce seemingly complex emergent behavior. And we will explore how this model can be tweaked to provide a hypothesis for the source of not just the zebra's stripes but also the leopard's spots.

[Next lesson](random-walk){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

[^numbers]: Turing, Alan M. (1936), "On Computable Numbers, with an Application to the Entscheidungsproblem", Proceedings of the London Mathematical Society, Ser. 2, Vol. 42: 230-265.

[^weizenbaum]: Weizenbaum, Joseph (1976), Computer Power and Human Reason (New York: W.H. Freeman).

[^morphogenesis]: Turing, Alan (1952). "The Chemical Basis of Morphogenesis" (PDF). Philosophical Transactions of the Royal Society of London B. 237 (641): 37–72. Bibcode:1952RSPTB.237...37T. doi:10.1098/rstb.1952.0012. JSTOR 92463.

[^zebra]: Caro, T., Izzo, A., Reiner, R. C., Walker, H., & Stankowich, T. (2014). The function of zebra stripes. Nature Communications, 5(1), 1–10. https://doi.org/10.1038/ncomms4535
