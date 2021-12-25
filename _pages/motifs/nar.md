---
permalink: /motifs/nar
title: "The Negative Autoregulation Motif"
sidebar:
 nav: "motifs"
toc: true
toc_sticky: true
image: "../assets/images/repressilator_chart.png"
---

## Hunting for a biological motivation for negative autoregulation

Theodosius Dobzhansky famously wrote that "nothing in biology makes sense except in the light of evolution."[^Dob] In the spirit of this quotation, there must be some evolutionary reason for the presence of the large number of negatively autoregulating *E. coli* transcription factors that we identified in the [previous lesson](autoregulation). We will use biological modeling to establish this justification.

Say that a transcription factor *X* regulates another transcription factor *Y*, and consider two cells. In both cells, *X* upregulates the transcription of *Y*, but in the second cell, *Y* also negatively autoregulates.

In this lesson, we will simulate a "race" to the steady state concentration of *Y* in the two cells. Our premise is that the cell that reaches the steady state faster can respond more quickly to its environment and is therefore more fit for survival.

## Simulating transcriptional regulation with a reaction-diffusion model

In the [prologue](../prologue/), we used a particle-based model to simulate a reaction-diffusion process. In this lesson, we will apply the same type of model, in which our "particles" are the two transcription factors *X* and *Y*.

We will begin with a model of the first cell, in which *X* activates *Y* but we do not have negative autoregulation of *Y*. To simulate *X* activating *Y*, we use the reaction *X* → *X* + *Y* at some rate *r*. In a given interval of time, there is a constant underlying probability related to *r* that any given *X* particle will spontaneously form a new *Y* particle.

We should also account for the fact that proteins are *degraded* over time by enzymes called proteases. The typical protein's concentration will be degraded by 20 to 40 percent in an hour, but transcription factors degrade even faster, only lasting a matter of minutes.[^machinery] Degradation may seem like a bug of cellular design, but it is a feature, as it allows the cell to remove a protein after increasing that protein's concentration in response to some environmental change.

To model the degradation of a protein, we add a "kill" reaction that removes *Y* particles at a rate *k*. We will initialize our simulation with no *Y* particles and the *X* concentration at steady-state, so that *X* is being produced at a rate that exactly balances its degradation rate, and we will therefore not need to add reactions to the model simulating the production or degradation of *X*.

To complete the model of the first cell, diffusion of the *X* and *Y* particles is not technically necessary because there is no reaction having more than one particle as a reactant. However, for the sake of biological correctness, we will allow both *X* and *Y* particles to diffuse through the system at the same rate.

**STOP:** What chemical reaction could be used to simulate the negative autoregulation of *Y*?
{: .notice--primary}

We now will simulate the second cell, which will inherit all of the reactions from the first cell (with the same reaction rates) while adding negative autoregulation of *Y*. We will do so using the reaction 2*Y* → *Y*, occurring at some rate *n*. In other words, when two *Y* particles collide, there is some probability that one of the particles serves to remove the other, which mimics the process of a transcription factor turning off another copy of itself during negative autoregulation.

To recap, the simulations of both cells will include an initial concentration of *X* at steady-state, diffusion of *X* and *Y*, removal of *Y*, and the reaction *X* → *X* + *Y*. The second simulation, which includes negative autoregulation of *Y*, will add the reaction 2*Y* → *Y*. You can explore these simulations in the following tutorial.

[Visit tutorial](tutorial_nar){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

**Note:** Even though we are using a particle-based model to mimic regulation, it is not attempting to replicate specific chemical reactions. In reality, gene regulation is a complicated chemical process that involves a great deal of molecular machinery. However, this is the purpose of the model, to strip away what is not relevant and retain the essence of what is being modeled.
{: .notice--warning}

## Ensuring a mathematically controlled comparison

If you followed the above tutorial, then you were likely disappointed in the second cell and its negative autoregulating transcription factor *Y*. The figure below shows a plot of *Y* particles for the two simulations; the first cell is shown in red, and the second cell is shown in yellow.

[![image-center](../assets/images/600px/nar_unequal_chart.png){: .align-center}](../assets/images/nar_unequal_chart.png)
A comparison of the number of *Y* particles across two simulations. In the first cell (red), we only have upregulation of *Y* by *X*, whereas in the second cell (yellow), we keep all parameters fixed but add a reaction simulating negative autoregulation of *Y*.
{: style="font-size: medium;"}

By allowing *Y* to slow its own transcription, we wound up with a simulation in which the final concentration of *Y* was lower than when we only had upregulation of *Y* by *X*. It seems like we are back at square one; why in the world would negative autoregulation be so common?

The answer to our quandary is that the model we built was not a fair comparison between the two systems. In particular, the two simulations must be controlled so that they have approximately the *same* steady-state concentration of *Y*. Ensuring this equal footing for the two simulations is called a **mathematically controlled comparison.**[^Savageau]

**STOP:** How can we change the parameters of our models to obtain a mathematically controlled comparison?
{: .notice--primary}

There are a number of parameters that we must keep constant across the two simulations because they are not related to regulation: the diffusion rates of *X* and *Y*, the number of initial particles *X* and *Y*, and the degradation rate of *Y*.

With these parameters fixed, the only way that the steady-state concentration of *Y* can be the same in the two simulations is if we *increase* the rate at which the reaction *X* → *X* + *Y* takes place in the second simulation. If you followed the previous tutorial, then you may like to try your hand at adjusting the rate of the *X* → *X* + *Y* reaction on your own. The following tutorial adjusts this parameter to build a mathematically controlled comparison that we will analyze in the next section.

[Visit tutorial](tutorial_nar_mathematically_controlled){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

## An evolutionary basis for negative autoregulation

The figure below plots the number of *Y* particles for the two simulations on the same chart over time, with the rate of the *X* → *X* + *Y* reaction increased in the simulation involving negative autoregulation. The two simulations now have approximately the same steady-state concentration of *Y*. However, the second simulation is able to reach this concentration faster; that is, its **response time** to the external stimulus causing the increase in regulation of *Y* is faster.

[![image-center](../assets/images/600px/nar_equal_chart.png){: .align-center}](../assets/images/nar_equal_chart.png)
A comparison of the number of *Y* particles across the same two simulations from the previous figure, with the change that in the second simulation (shown in yellow), we increase the rate of the reaction simulating upregulation of *Y* by *X*.  As a result, the two simulations have approximately the same steady state of *Y*, and the simulation involving negative autoregulation reaches this steady state more quickly.
{: style="font-size: medium;"}

More importantly, a justification for the evolutionary purpose of negative autoregulation presents itself. Because the rate of the reaction *X* → *X* + *Y* is higher in the second simulation, the number of *Y* particles in this simulation increases at a much faster rate. As the concentration of *Y* increases, the rate at which new *Y* particles are added to the system is the same in the two simulations because this reaction only depends on the number of *X* particles, which is constant. However, the rate at which *Y* particles are removed is higher in the second simulation because in addition to the degradation reaction *Y* → *NULL*, we have the negative autoregulation reaction 2*Y* → *Y* serving to remove *Y* particles. As a result, the plot of *Y* particles over time flattens more quickly (i.e., its derivative decreases faster) for the second simulation.

More importantly, this plot helps explain *why* negative autoregulation may have evolved. The simulation involving negative autoregulation wins the "race" to a steady-state concentration of *Y*, and so we can conclude that a cell in which this transcription factor is negatively autoregulated is more fit for survival than one that does not. Uri Alon[^Alon] has proposed an excellent analogy of a negatively autoregulating transcription factor as a sports car that has a powerful engine (corresponding to the higher rate of the reaction producing *Y*) and sensitive brakes (corresponding to the negative autoregulation reaction slowing the production of *Y*).

In this lesson, we have seen that particle-based simulations can be powerful for justifying why a network motif is prevalent. What are some other commonly occurring network motifs in transcription factor networks? And what evolutionary purposes might they serve? We will spend the remainder of this module delving into these questions.

[Next lesson](feed){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

[^Alon]: Alon, Uri. *An Introduction to Systems Biology: Design Principles of Biological Circuits*, 2nd Edition. Chapman & Hall/CRC Mathematical and Computational Biology Series. 2019.

[^Dob]: Dobzhansky, Theodosius (March 1973), "Nothing in Biology Makes Sense Except in the Light of Evolution", American Biology Teacher, 35 (3): 125–129, JSTOR 4444260)

[^machinery]: Goodsell, David (2009), *The Machinery of Life*. Copernicus Books.

[^Savageau]: Savageau, 1976 https://ucdavis.pure.elsevier.com/en/publications/biochemical-systems-analysis-a-study-of-function-and-design-in-mo
