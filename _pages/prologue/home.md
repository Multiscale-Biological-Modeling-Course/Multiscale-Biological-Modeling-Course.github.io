---
permalink: /prologue/
title: "Prologue: Random Walks and Turing Patterns"
description: "Start our course: explore random walks that model diffusion and reaction diffusion systems that create striking Turing patterns."
sidebar:
 nav: "prologue"
image: "../assets/images/gray_scott_jupyter_high-res.png"
excerpt: "by Noah Lee, Mert Inan, and Phillip Compeau"
header:
  overlay_image: "../assets/images/gray_scott_jupyter_high-res.png"
  overlay_filter: 0.3
author_profile: true # add author to page
---

## Introduction: Alan Turing and the Zebra's Stripes

If you are familiar with Alan Turing, then you might be surprised that a famous computer scientist would appear in the first sentence of a book on biological modeling. After all, he is best known for two achievements that have nothing to do with biology. In 1936, Turing theorized a primitive computer consisting of a tape of cells along with a machine that writes symbols on the tape according to a set of predetermined set of rules; this "Turing machine" [^numbers] is simple but nevertheless has been proven capable of solving any problem that a modern computer can solve. Then, during World War II, Turing worked with Allied cryptographers at Bletchley Park to devise machines that broke several German ciphers.

[![image-center](../assets/images/600px/alan_turing_npg_cc.jpg){: .align-center}](../assets/images/alan_turing_npg_cc.jpg)
Alan Turing in 1951. © National Portrait Gallery, London.
{: style="font-size: medium; text-align: center;"}

Yet in 1952, two years before his untimely demise, Turing published his only paper on biochemistry, which addressed the question: "Why do zebras have stripes?"[^morphogenesis] He was not asking why zebras have *evolved* to have stripes — this question was unsolved in Turing’s time, and recent research has indicated that the stripes may be helpful in warding off flies. Rather, Turing was interested in what biochemical mechanism could produce the stripes that we see on a zebra’s coat. And he reasoned that just as a simple machine can emulate a computer, some limited set of molecular "rules" could cause stripes to appear on a zebra’s coat.

In this prologue, we will introduce a particle simulation model based on Turing's ideas. We will be see that a system built on very simple rules and even *randomness* can nevertheless produce emergent behavior that is complex and elegant. And we will explore how this model can be tweaked to provide a hypothesis for the origin of not just the zebra's stripes but also the leopard's spots.

[Next lesson](random_walk){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

[^numbers]: Turing, Alan M. (1936), "On Computable Numbers, with an Application to the Entscheidungsproblem", Proceedings of the London Mathematical Society, Ser. 2, Vol. 42: 230-265.

[^weizenbaum]: Weizenbaum, Joseph (1976), Computer Power and Human Reason (New York: W.H. Freeman).

[^morphogenesis]: Turing, Alan (1952). "The Chemical Basis of Morphogenesis" (PDF). Philosophical Transactions of the Royal Society of London B. 237 (641): 37–72. Bibcode:1952RSPTB.237...37T. doi:10.1098/rstb.1952.0012. JSTOR 92463.

[^zebra]: Caro, T., Izzo, A., Reiner, R. C., Walker, H., & Stankowich, T. (2014). The function of zebra stripes. Nature Communications, 5(1), 1–10. https://doi.org/10.1038/ncomms4535
