---
permalink: /motifs/autoregulation
title: "Gene Autoregulation is Surprisingly Frequent"
excerpt: "Module 1: Finding Motifs in Transcription Factor Networks"
sidebar:
 nav: "motifs"
toc: true
toc_sticky: true
header:
  overlay_image: "../assets/images/repressilator_chart.png"
  overlay_filter: 0.3
image: "../assets/images/repressilator_chart.png"
---

## Using randomness to determine statistical significance

In the previous lesson, we introduced the transcription factor network, in which a protein *X* is connected to a protein *Y* if *X* is a transcription factor that regulates the production of *Y*. We also saw that in the *E. coli* transcription factor network, there seemed to be a large number of loops, or edges connecting some transcription factor *X* to itself, and which indicate the autoregulation of *X*.

In the introduction, we briefly referenced the notion of a network motif, a structure occurring often throughout a network. Our assertion is that the loop is a motif in the transcription factor network; how can we defend this claim?

To argue that a loop is indeed a motif in the *E. coli* transcription factor network, we will apply a paradigm that occurs throughout computational biology (and science in general) when determining whether an observation is statistically significant. We will compare our observation against a  *randomly generated* dataset. Without getting into the statistical details, if an observation is frequent in a real dataset, and rare in a random dataset, then it is likely to be statistically significant. Randomness saves the day again!

**STOP:** How can we apply this paradigm of a randomly generated dataset to determine whether a transcription factor network contains a significant number of loops?
{: .notice--primary}

## Comparing a real transcription factor network against a random network

To determine whether the number of loops in the transcription factor network of *E. coli* is statistically significant, we will compare this number against the expected number of loops we would find in a randomly generated transcription factor network. If the former is much higher than the latter, then we have strong evidence that some selective force is causing gene autoregulation.

To generate a random network, we will use an approach developed by Edgar Gilbert in 1959[^Gilbert]. Given an integer *n* and a probability *p* (between 0 and 1), we form *n* nodes. Then, for every possible pair of nodes *X* and *Y*, we connect *X* to *Y* via a directed edge with probability *p*; that is, we simulate the process of flipping a weighted coin that has probability *p* of coming up "heads".

**Note:** Simulating a weighted coin flip amounts to generating a “random” number x between 0 and 1, and considering it “heads” if x is less than p and “tails” otherwise. For more details on random number generation, consult <a href="https://compeau.cbd.cmu.edu/programming-for-lovers/chapter-2-forecasting-a-presidential-election-with-monte-carlo-simulation/" target="_blank">Programming for Lovers</a>).
{: .notice--info}

**STOP:** What should *n* and *p* be if we are generating a random network to compare against the *E. coli* transcription factor network?
{: .notice--primary}

The full *E. coli* transcription factor network contains thousands of genes, most of which are not transcription factors. As a result, the approach described above may form a random network that connects non-transcription factors to other nodes, which we should avoid.

Instead, we will focus on the network comprising only those *E. coli* transcription factors that regulate each other. This network has 197 nodes and 477 edges, and so we will begin by forming a random network with *n* = 197 nodes.

We then select *p* to ensure that our random network will on average have 477 edges. To do so, we note that there are *n*<sup>2</sup> pairs of nodes that could have an edge connecting them (*n* choices for the starting node and *n* for the ending node). If we were to set *p* equal to 1/*n*<sup>2</sup>, then we would expect on average only to see a single edge in the random network. We therefore scale this value by 477 and set *p* equal to 477/*n*<sup>2</sup> ≈ 0.0123 so that we will see, on average, 477 edges in our random network.

In the following tutorial, we write some code to count the number of loops in the real *E. coli* transcription factor network. We then build a random network and compare the number of loops found in this network against the number of loops in the real network.

[Visit tutorial](tutorial_loops){: .btn .btn--warning .btn--large}
{: style="font-size: 100%; text-align: center;"}

## The negative autoregulation motif

In a random network containing *n* nodes, the probability that a given edge is a loop is 1/*n*. Therefore, if the network has *e* edges, then we would on average see *e*/*n* loops in the network. In our case, *n* is 197 and *e* is 477; therefore, on average, we expect to see 197/497 ≈ 2.42 loops in a random network. Yet the real network of *E. coli* transcription factors that regulate each other contains 130 loops!

Furthermore, in a random network, we would expect that about half of the edges correspond to activation, and the other half correspond to repression. But if you followed the preceding tutorial, then you know that of the 130 loops in the *E. coli* network, 35 correspond to activation and 95 correspond to repression. Just as you would be surprised to flip a coin 130 times and see “heads” 95 times, the cell must be negatively autoregulating for some reason.

Not only is autoregulation an important feature of transcription factors, but these transcription factors tend to *negatively* autoregulate. Why in the world would organisms have evolved the process of autoregulation only for a transcription factor to *slow down* its own transcription? In the next lesson, we will begin to unravel the mystery.

[Next lesson](nar){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

[^Gilbert]: Gilbert, E.N. (1959). "Random Graphs". Annals of Mathematical Statistics. 30 (4): 1141–1144. doi:10.1214/aoms/1177706098.
