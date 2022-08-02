---
permalink: /prologue/gray-scott
title: "The Gray-Scott Model: A Turing Pattern Cellular Automaton"
sidebar:
 nav: "prologue"
toc: true
toc_sticky: true
image: "../assets/images/gray_scott_jupyter_high-res.png"
---

## Adding reactions to our diffusion automaton

Now that we have established a cellular automaton for coarse-grained particle diffusion, we will add to it the three reactions that we introduced in the [previous lesson](diffusion_automaton), which are reproduced below.

1. A "feed" reaction in which new *A* particles are fed into the system at a constant rate.
2. A "death" reaction in which *B* particles are removed from the system at a rate proportional to their current concentration.
3. A "reproduction" reaction *A* + 2*B* → 3*B*.

**STOP**: How might we incorporate these reactions into our automaton?
{: .notice--primary}

First, we have the feed reaction, which takes place at a rate *f*. It is tempting to simply add some constant value *f* to the concentration of *A* in each cell in each time step. However, if [*A*] were close to 1, then adding *f* to it could cause [*A*] to exceed 1, which we should avoid.

Instead, if a cell has current concentration [*A*], then we will add *f*(1-[*A*]) to this cell's concentration of *A* particles. For example, if [*A*] is 0.01, then we will add 0.99*f* to the cell because the current concentration is low. If [*A*] is 0.8, then we will only add 0.2*f* to the current concentration of *A* particles.

Second, we consider the death reaction of *B* particles, which takes place at rate *k*. Recall that *k* is proportional to the current concentration of *B* particles. As a result, we will subtract *k* · [*B*] from the current concentration of *B* particles.

Third, we have the reproduction reaction *A* + 2*B* → 3*B*, which takes place at a rate *r*. The higher the concentration of *A* and *B*, the more this reaction will take place. Furthermore, because we need *two* *B* particles in order for the collision to occur, the reaction should be even more rare if we have a low concentration of *B* than if we have a low concentration of *A*. To model this situation, if a given cell is represented by the concentrations ([*A*], [*B*]), then we will subtract *r* · [*A*] · [*B*]<sup>2</sup> from the concentration of *A* and add *r* · [*A*] · [*B*]<sup>2</sup> to the concentration of *B* in the next time step.

We now just need to combine these reactions with diffusion. Say that as the result of diffusion, the change in its concentrations are Δ*A* and Δ*B*, where a negative number represents particles leaving the cell, and a positive number represents particles entering the cell. Then in the next time step, the particle concentrations [*A*]<sub>new</sub> and [*B*]<sub>new</sub> are given by the following equations:

[*A*]<sub>new</sub> = [*A*] + Δ*A* +  *f*(1-[*A*]) - *r* · [*A*] · [*B*]<sup>2</sup>

[*B*]<sub>new</sub> = [*B*] + Δ*B* - *k* · [*B*] + *r* · [*A*] · [*B*]<sup>2</sup>.

Applying these reaction-diffusion computations over all cells in parallel and over many generations constitutes a cellular automaton model called the **Gray-Scott model**.[^gs]

Before continuing, let us consider an example of how a single cell might update its concentration of both particle types as a result of reaction and diffusion.  Say that we have the following hypothetical parameter values:

* <em>d</em><sub><em>A</em></sub> = 0.2;
* <em>d</em><sub><em>B</em></sub> = 0.1;
* *f* = 0.3;
* *k* = 0.4;
* *r* = 1 (the value typically always used in the Gray-Scott model).

Furthermore, say that our cell has the current concentrations ([*A*], [*B*]) = (0.7, 0.5). Then as a result of diffusion, the cell's concentration of *A* will decrease by 0.7 · <em>d</em><sub><em>A</em></sub> = 0.14, and its concentration of *B* will decrease by 0.5 · <em>d</em><sub><em>B</em></sub> = 0.05. It will also receive particles from neighboring cells; for example, say that it receives an increase to its concentration of *A* by 0.08 and an increase to its concentration of *B* by 0.06 as the result of diffusion from neighbors. Therefore, the net concentration changes due to diffusion are Δ*A* = 0.08 - 0.14 = -0.06, and Δ*B* = 0.06 - 0.05 = 0.01.

Now we will consider the three reactions. The feed reaction will cause the cell's concentration of *A* to increase by (1 - [*A*]) · *f* = 0.09. The death reaction will cause its concentration of *B* to decrease by *k* · [*B*] = 0.2. And the reproduction reaction will mean that the concentration of *A* decreases by [*A*] · [*B*]<sup>2</sup> = 0.175, with the concentration of *B* increasing by the same amount.

As the result of all these processes, we update the concentrations of *A* and *B* to the following values ([*A*]<sub>new</sub>, [*B*]<sub>new</sub>) in the next time step according to our equations above.

[*A*]<sub>new</sub> = 0.7 - 0.06 + 0.09 - 0.175 = 0.555<br>
[*B*]<sub>new</sub> = 0.5 + 0.01 - 0.2 + 0.175 = 0.485

We are now ready to implement the Gray-Scott model in the following tutorial. The question is: even though we have built a coarser-grained simulation than the previous lesson, will we still see Turing patterns?

[Visit tutorial](gs-jupyter){: .btn .btn--warning .btn--large}
{: style="font-size: 100%; text-align: center;"}

## Reflection on the Gray-Scott model

In contrast to the particle-based simulator introduced earlier, the Gray-Scott model produced an animation in under a minute on a laptop. We show the results of this model in the videos that follow; throughout these animations, we use the parameters <em>d</em><sub><em>A</em></sub> = 1.0, <em>d</em><sub><em>B</em></sub> = 0.5, and *r* = 1.

Our first video shows an animation of the Gray-Scott model using the parameters *f* = 0.034 and *k* = 0.095. We use a comparable initial configuration of the automaton that we used in the diffusion example, in which a cluster of *B* particles are found in a board full of *A* particles.

[![image-center](../assets/images/600px/gray-scott_movie_first_frame.png){: .align-center}](../assets/images/gray-scott_movie.gif)

If we expand the size of the simulation and add multiple clusters of predators to the automaton, then the patterns become more complex as waves of predators collide.

[![image-center](../assets/images/600px/gray-scott_multiple_predators_first_frame.png){: .align-center}](../assets/images/gray-scott_multiple_predators.gif)

If we keep the feed rate constant and increase the kill rate slightly to *k* = 0.097, then the patterns change significantly into spots.

[![image-center](../assets/images/600px/gray-scott_f34_k63_first_frame.png){: .align-center}](../assets/images/gray-scott_f34_k63.gif)
{: style="font-size: medium;"}

If we make the prey a little happier as well, increasing  *f* to 0.038 and *k* to 0.099, then we have a different striped pattern.

[![image-center](../assets/images/600px/gray-scott_f38_k61_first_frame.png){: .align-center}](../assets/images/gray-scott_f38_k61.gif)
{: style="font-size: medium;"}

And if we increase *f* to 0.042 and *k* to 0.101, then again we see spots.

[![image-center](../assets/images/600px/gray-scott_f42_k59_first_frame.png){: .align-center}](../assets/images/gray-scott_f42_k59.gif)
{: style="font-size: medium;"}

The point is that very slight changes in our model's parameters can produce drastically different results in terms of the patterns that we witness. In this prologue's conclusion, we will connect this observation back to our original motivation of identifying the cause for animal skin patterns.

[Next lesson](conclusion){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

[^gs]: P. Gray and S.K. Scott, Autocatalytic reactions in the isothermal, continuous stirred tank reactor: isolas and other forms of multistability, Chemical Engineering Science 38 (1983) 29-43.

[^robert]: "Reaction-Diffusion by the Gray-Scott Model: Pearson's Parametrization" © 1996-2020 Robert P. Munafo https://mrob.com/pub/comp/xmorphia/index.html
