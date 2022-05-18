---
permalink: /motifs/exercises
title: "Network Motifs Exercises"
sidebar:
 nav: "motifs"
image: "../assets/images/repressilator_chart.png"
---

## Identifying feed-forward loops and more complex motifs

**Exercise:** Modify the Jupyter notebook provided in the [tutorial on loops](tutorial_loops) to count the number of feed-forward loops in the transcription factor network for *E. coli.*
{: .notice--success}

There are eight types of feed-forward loops based on the eight different ways in which we can label the edges in the network with a "+" or a "-" based on activation or repression.

[![image-center](../assets/images/600px/ffl_types.png){: .align-center}](../assets/images/ffl_types.png)
The eight types of feed-forward loops.[^ffl]
{: style="text-align: center; font-size: medium;"}

**Exercise:** Modify the Jupyter notebook to count the number of loops of each type present in the *E. coli* transcription factor network.
{: .notice--success}

**Exercise:** How many feed-forward loops would you expect to see in a random network having the same number of nodes as the *E. coli* transcription factor network? How does this compare to your answers to the previous two questions?
{: .notice--success}

## Negative autoregulation

**Exercise:** One way for the cell to apply stronger "brakes" to the simple regulation rate would be to simply increase the degradation rate, rather than implement negative autoregulation. From an evolutionary perspective, why do you think that the cell doesn't do this?
{: .notice--success}

Recall that we used the reaction reaction *X* → *X* + *Y* to represent simple regulation. We then built a model in a [tutorial](tutorial_nar_mathematically_controlled) to run a mathematically controlled comparison between two simulated cells, one having only simple regulation, and the other also having negative autoregulation, which we represented using the reaction *Y* + *Y* → *Y*.

**Exercise:** Multiply the rate of *X* → *X* + *Y* by a factor of 100 in the cell having only simple regulation, and plot the concentration of *Y* in both cells (the updated table containing reactants, products, and reaction rate constants is found below). By approximately what factor do you need to increase the rate of this reaction in the cell that includes negative autoregulation so that the steady-state concentration of *Y* is the same in both cells?
{: .notice--success}

| Reactants |Products|Forward Rate|
|:--------|:-------:|--------:|
| X1’  | X1’ + Y1’ | 4e4 |
| X2’  | X2’ + Y2’ | 4e2 |
| Y1’  | NULL | 4e2 |
| Y2’  | NULL | 4e2 |
|Y2’ + Y2’|Y2’|4e2|

## Positive autoregulation

Although most of the autoregulating *E. coli* transcription factors exhibit negative autoregulation, 35 of these transcription factors autoregulate *positively*, meaning that the transcription factor activates its own regulation. This network motif exists in processes in which the cell needs a cell to be produced at a slower, more precise rate than it would under normal activation. This occurs in some genes related to development, when gene expression must be carefully controlled.

**Exercise:** Design and implement a reaction-diffusion model to run a mathematically-controlled simulation comparing the positive autoregulation of a transcription factor *Y* against normal activation of *Y* by another transcription factor *X*. Plot the concentration of *Y* over time in the two circumstances.
{: .notice--success}

## Replicating the module's conclusions with well-mixed simulations

Recall that a repressilator is a network motif in which *X* inhibits *Y*, which inhibits *Z*, which in turn inhibits *Z*. In a [tutorial](tutorial_perturb), we showed how to use a well-mixed simulation to build the repressilator, which we then perturbed.\tutorial[motifs/tutorial_perturb]\\

**Exercise:** Build well-mixed simulations to replicate the other network motif tutorials presented in this module.
{: .notice--success}

[Next module](../chemotaxis/home){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

[^ffl]: Image adapted from Mangan, S., & Alon, U. (2003). Structure and function of the feed-forward loop network motif. Proceedings of the National Academy of Sciences of the United States of America, 100(21), 11980–11985. https://doi.org/10.1073/pnas.2133841100

[^oscillator]: Elowitz, M. B. & Leibler, S. A Synthetic Oscillatory Network of Transcriptional Regulators. Nature 403, 335-338 (2000).

[^scNetwork]: Lee, T. I., Rinaldi, N. J., Robert, F., Odom, D. T., Bar-Joseph, Z., Gerber, G. K., … Young, R. A. (2002). Transcriptional regulatory networks in Saccharomyces cerevisiae. Science, 298(5594), 799–804. https://doi.org/10.1126/science.1075090
