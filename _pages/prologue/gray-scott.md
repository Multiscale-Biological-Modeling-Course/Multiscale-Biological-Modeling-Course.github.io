---
permalink: /prologue/gray-scott
title: "The Gray-Scott Model: A Turing Pattern Cellular Automaton"
sidebar:
 nav: "prologue"
toc: true
toc_sticky: true
image: "../assets/images/gray_scott_jupyter_high-res.png"
gallery:
  - url: ../assets/images/initial_A_concentration.png
    image_path: ../assets/images/600px/initial_A_concentration.png
    alt: "Initial diffusion automaton"
    title: "The system contains a maximum concentration of particles in the central square."
  - url: ../assets/images/A_concentration_one_time_step.png
    image_path: ../assets/images/600px/A_concentration_one_time_step.png
    alt: "Diffusion automaton after one time step"
    title: "The system after one time step."
  - url: ../assets/images/A_concentration_two_time_steps_complete.png
    image_path: ../assets/images/600px/A_concentration_two_time_steps_complete.png
    alt: "Diffusion automaton after two time steps"
    title: "The system after two time steps."
---

## A coarse-grained model of single particle diffusion

Part of a modeler's job is to find simple models that capture the essence of a system while running quickly and scaling well to larger inputs.

In our case, we have a very "fine-grained" reaction-diffusion model illustrating Turing patterns, but this model consumes a huge amount of computational resources because it requires tracking the movements of hundreds of thousands of individual particles. Our goal is to build a model that will allow us to appreciate Turing patterns without significant computational overhead.

Our idea is to grid off two-dimensional space into blocks and store only the *concentration* of each type of particle found inside the block. To make things even simpler, we assume that there is some maximum concentration of particles possible, so that we can divide the number of particles by this maximum concentration. As a result, the concentration of a particle in each block will be represented by a decimal number between 0 and 1.

Let us begin with an example of the diffusion of only *A* particles; we will later add *B* particles as well as reactions to our model. Say that the particles are at maximum concentration in the central cell of our grid and are present nowhere else, as shown below.

[![image-center](../assets/images/600px/initial_A_concentration.png){: .align-center width="300px"}](../assets/images/initial_A_concentration.png)
A 5 x 5 grid showing hypothetical initial concentrations of *A* particles. Cells are labeled by numbers between 0 and 1 representing their concentration of *A* particles. The central cell has maximum concentration, and no particles are contained in any other cell.
{: style="font-size: medium;"}

We will now update the grid of cells after one time step to mimic particle diffusion. To do so, we will spread out the concentration of particles in each square to its eight neighbors. For example, we could assume that 20% of the current cell's concentration diffuses to each of its four adjacent neighbors, and that 5% of the cell's concentration diffuses to its four diagonal neighbors. Because the central square in our ongoing example is the only cell with any particles, the updated concentrations after a single time step are shown in the following figure.

[![image-center](../assets/images/600px/A_concentration_one_time_step.png){: .align-center width="300px"}](../assets/images/A_concentration_one_time_step.png)
A grid showing an update to the system in the previous figure after diffusion of particles after a single time step.
{: style="font-size: medium;"}

**Note:** The sum of the values in the grid in the figure above is 1, which is the same as the sum of the values in our original figure. Regardless of how many times we update the grid, the sum of the values should be 1 to ensure the conservation of total mass in the system.
{: .notice--warning}

After an additional time step, the particles continue to diffuse outward. For example, each diagonal neighbor of the central cell in the above figure, which has a concentration of 0.05 after one time step, will lose all of its particles in the following step. Each of these cells will also gain 20% of the particles from two of its adjacent neighbors, along with 5% of the particles from the central square (which doesn't have any particles). This makes the updated concentration of this cell after two time steps equal to 2(0.2)(0.2) + 0.05(0) = 0.08.

The four cells directly adjacent to the central square, which have a concentration of 0.2 after one time step, will also gain particles from their neighbors. Each such cell will receive 20% of the particles from two of its adjacent neighbors and 5% of the particles from two of its diagonal neighbors, which have a concentration of 0.2. Therefore, the updated concentration of each of these cells after two time steps is 2(0.2)(0.05) + 2(0.05)(0.2) = 0.02 + 0.02 = 0.04.

Finally, the central square has no particles after one step, but it will receive 20% of the particles from each of its four adjacent neighbors, as well as 5% of the particles from each of its four diagonal neighbors. As a result, the central square's concentration after two time steps is 4(0.2)(0.2) + 4(0.05)(0.05) = 0.16 + 0.01 = 0.17.

In summary, the central nine squares after two time steps are as shown in the following figure.

[![image-center](../assets/images/600px/A_concentration_two_time_steps_partial.png){: .align-center width="300px"}](../assets/images/A_concentration_two_time_steps_partial.png)
A grid showing an update to the central nine squares of the diffusion system in the previous figure after an additional time step. The cells labeled "?" are left as an exercise for the reader.
{: style="font-size: medium;"}

**STOP**: What should the values of the "?" cells be in the above figure? Note that these cells are neighbors of cells with positive concentrations after one time step, so their concentrations should be positive after two time steps.
{: .notice--primary}

The coarse-grained model of particle diffusion that we have built is a variant of a **cellular automaton**, or a grid of cells in which we use fixed rules to update the status of a cell based on its current status and those of its neighbors. Cellular automata form a rich area of research applied to a wide variety of fields dating back to the middle of the 20th Century; if you are interested in learning more about them from the perspective of programming, then you might like to check out the <a href="http://compeau.cbd.cmu.edu/programming-for-lovers/chapter-3-building-a-self-replicating-cellular-automaton-with-top-down-programming/" target="_blank">Programming for Lovers</a> project.

## Slowing down the rate of diffusion

There is just one problem. Our cellular automaton model of diffusion is too volatile! The figure below shows the initial automaton as well as its updates after each of two time steps. In a true diffusion process, all of the particles would not rush out of the central square in a single time step, only for some of them to return in the next step.

{% include gallery caption="A 5 x 5 cellular automaton model for diffusion of a single particle. (Left) The system contains a maximum concentration of particles in the central square. (Center) The system after one time step. (Right) The system after two time steps." %}

Our solution is to slow down the diffusion process by adding a parameter <em>d</em><sub><em>A</em></sub> between 0 and 1 that represents the *rate* of diffusion of *A* particles. Instead of moving a cell's entire concentration of particles to its neighbors in a single time step, we move only a fraction <em>d</em><sub><em>A</em></sub> of them.

Revisiting our original example, say that <em>d</em><sub><em>A</em></sub> is equal to 0.2. After the first time step, only 20% of the central cell's particles will be spread to its neighbors. Of these particles, 5% will be spread to diagonal neighbors, and 20% will be spread to adjacent neighbors. The figure below illustrates that after one time step, the central square has concentration 0.8, its adjacent neighbors have concentration 0.2<em>d</em><sub><em>A</em></sub> = 0.04, and its diagonal neighbors have concentration 0.05<em>d</em><sub><em>A</em></sub> = 0.01.

[![image-center](../assets/images/600px/A_concentration_slower_diffusion.png){: .align-center width="300px"}](../assets/images/A_concentration_slower_diffusion.png)
An updated grid of cells showing the concentration of <em>A</em> particles after one time step if <em>d</em><sub><em>A</em></sub> = 0.2.
{: style="font-size: medium;"}

## Adding a second particle to our diffusion simulation

We now will add particle *B* to the simulation, which also starts with 100% concentration in the central square. Recall that *B*, our "predator" molecule, diffuses half as fast as *A*, the "prey" molecule. If we set the diffusion rate <em>d</em><sub><em>B</em></sub> equal to 0.1, then our cells after a time step will be updated as shown in the figure below. This figure represents the concentration of the two particles in each cell as an ordered pair ([*A*], [*B*]).

[![image-center](../assets/images/600px/two_particle_concentration_diffusion.png){: .align-center width="300px"}](../assets/images/two_particle_concentration_diffusion.png)
A figure showing cellular concentrations after one time step for two particles <em>A</em> and <em>B</em> diffusing at rates <em>d</em><sub><em>A</em></sub> = 0.2 and <em>d</em><sub><em>B</em></sub> = 0.1. Each cell is labeled by the ordered pair ([<em>A</em>], [<em>B</em>]).
{: style="font-size: medium;"}

**STOP**: Update the cells in the above figure after another generation of diffusion. Use the diffusion rates <em>d</em><sub><em>A</em></sub> = 0.2 and <em>d</em><sub><em>B</em></sub> = 0.1.
{: .notice--primary}

## Visualizing particle concentrations

As we move toward diffusing a large board that is hundreds of cells wide, listing the concentrations of our two particles in each cell will be too much to process. Instead, we need some way to visualize the results of our diffusion simulation.

First, we will consolidate the information stored in a cell about the concentrations of two particles into a single value. In particular, let a cell's particle concentrations be denoted [*A*] and [*B*]. Then the single value [*B*]/([*A*] + [*B*]) is the ratio of the concentration of *B* particles to the total number of particles in the cell. This value ranges between 0 (no *B* particles present) and 1 (only *B* particles present).

Next, we color each cell in the grid according to its value of [*B*]/([*A*] + [*B*]) using a color spectrum like those shown in the figure below. We will use the `Spectral` color map, meaning that if a cell has a value close to 0 (relatively few predators), then it will be colored red, while if it has a value close to 1 (relatively many predators), then it will be colored dark blue.

[![image-center](../assets/images/600px/matplotlib_colormap.png){: .align-center}](../assets/images/matplotlib_colormap.png)

When we color each cell over many time steps, we can animate the automaton to see how it changes over time. We are now ready for the following tutorial, in which we will implement and visualize our diffusion automaton using a **Jupyter notebook**.

[Visit tutorial](tutorial-diffusion){: .btn .btn--info .btn--large}
{: style="font-size: 100%; text-align: center;"}

The video below shows an animation of a 101 x 101 board that begins with the following properties:
* [*A*] = 1 for all cells;
* [*B*] = 0 for all cells other than an 11 x 11 square in the middle of the grid, where [*B*] = 1;
* <em>d</em><sub><em>A</em></sub> = 0.5;
* <em>d</em><sub><em>B</em></sub> = 0.25.

[![image-center](../assets/images/600px/diffusion_movie_first_frame.png){: .align-center}](../assets/images/diffusion_movie.gif)

Note that the center of the cell becomes blue because the *A* particles diffuse twice as fast, so that they spread out more from the middle of the board, which is occupied in greater numbers by *B* particles.

## Adding reactions to our automaton: the Gray-Scott model

Now that we have established a cellular automaton for coarse-grained particle diffusion, we will add to it the three reactions that we introduced in the [previous lesson](reaction-diffusion), which are reproduced below.

1. A "feed" reaction in which new *A* particles are fed into the system at a constant rate.
2. A "death" reaction in which *B* particles are removed from the system at a rate proportional to their current concentration.
3. A "reproduction" reaction *A* + 2*B* → 3*B*.

**STOP**: How might we incorporate these reactions into our automaton?
{: .notice--primary}

We will address these reactions one at a time. First, we have the feed reaction, which takes place at a rate *f*. It is tempting to simply add some constant value *f* to the concentration of each cell in each time step. However, if [*A*] were close to 1, then adding *f* to it could cause [*A*] to exceed 1, which we should avoid.

Instead, if a cell has current concentration [*A*], then we will add *f*(1-[*A*]) to this cell's concentration of *A* particles. For example, if [*A*] is 0.01, then we will add 0.99*f* to the cell because the current concentration is low. If [*A*] is 0.8, then we will only add 0.2*f* to the concentration.

Second, we consider the death reaction of *B* particles, which takes place at rate *k*. Recall from the previous lesson that *k* is proportional to the current concentration of *B* particles. As a result, if a cell has concentration [*B*], then for some constant *k* between 0 and 1, we will subtract *k* · [*B*] from the current concentration of *B* particles.

Third, we have the reproduction reaction *A* + 2*B* → 3*B*, which takes place at a rate *r*. The higher the concentration of *A* and *B*, the more this reaction will take place. Furthermore, because we need *two* *B* particles in order for the collision to occur, the reaction should be even more rare if we have a low concentration of *B* than if we have a low concentration of *A*. To model this situation, if a given cell is represented by the concentrations ([*A*], [*B*]), then we will subtract *r* · [*A*] · [*B*]<sup>2</sup> from the concentration of *A* and add *r* · [*A*] · [*B*]<sup>2</sup> to the concentration of *B* in the next time step.

In summary, say that a cell has current concentrations [*A*] and [*B*]. Say also that as the result of diffusion, the change in its concentrations are Δ*A* and Δ*B*, where a negative number represents particles leaving the cell, and a positive number represents particles entering the cell. Then in the next time step, the particle concentrations [*A*]<sub>new</sub> and [*B*]<sub>new</sub> are given by the following equations.

[*A*]<sub>new</sub> = [*A*] + Δ*A* +  *f*(1-[*A*]) - *r* · [*A*] · [*B*]<sup>2</sup>
[*B*]<sub>new</sub> = [*B*] + Δ*B* - *k* · [*B*] + *r* · [*A*] · [*B*]<sup>2</sup>

Applying these reaction-diffusion computations over all cells in parallel and over many generations forms a cellular automaton called the **Gray-Scott** model.[^gs]

Before continuing, let us consider an example of how a single cell might update its concentration of both particle types as a result of reaction and diffusion.  Say that we have the following hypothetical parameter values:

* <em>d</em><sub><em>A</em></sub> = 0.2;
* <em>d</em><sub><em>B</em></sub> = 0.1;
* *f* = 0.3;
* *k* = 0.4;
* *r* = 1 (the value typically always used in the Gray-Scott model).

Furthermore, say that our cell has the concentrations ([*A*], [*B*]) = (0.7, 0.5). Then as a result of diffusion, the cell's concentration of *A* will decrease by 0.7 · <em>d</em><sub><em>A</em></sub> = 0.14, and its concentration of *B* will decrease by 0.5 · <em>d</em><sub><em>B</em></sub> = 0.05. It will also receive particles from neighboring cells; for example, say that it receives an increase to its concentration of *A* by 0.08 and an increase to its concentration of *B* by 0.06 as the result of diffusion from neighbors. Therefore, Δ*A* = 0.08 - 0.14 = -0.06, and Δ*B* = 0.06 - 0.05 = 0.01.

Now we will consider the three reactions. The feed reaction will cause the cell's concentration of *A* to increase by (1 - [*A*]) · *f* = 0.09. The death reaction will cause its concentration of *B* to decrease by *k* · [*B*] = 0.2. And the reproduction reaction will mean that the concentration of *A* decreases by [*A*] · [*B*]<sup>2</sup> = 0.175, with the concentration of *B* increasing by the same amount.

As the result of all these processes, we update the concentrations of *A* and *B* to the following values ([*A*]<sub>new</sub>, [*B*]<sub>new</sub>) in the next time step according to our equations above.

[*A*]<sub>new</sub> = 0.7 - 0.06 + 0.09 - 0.175 = 0.555<br>
[*B*]<sub>new</sub> = 0.5 + 0.01 - 0.2 + 0.175 = 0.485

We should now feel ready to implement the Gray-Scott model in the following tutorial. The question is: even though we have built a coarser-grained simulation than the previous lesson, will we still see Turing patterns?

[Visit tutorial](gs-jupyter){: .btn .btn--info .btn--large}
{: style="font-size: 100%; text-align: center;"}

## Reflection on the Gray-Scott model

In contrast to our particle-based simulator, the Gray-Scott model produced an animation of Turing patterns in under a minute on a laptop. We show the results of this model in the videos that follow; throughout these animations, we use the parameters <em>d</em><sub><em>A</em></sub> = 1.0, <em>d</em><sub><em>B</em></sub> = 0.5, and *r* = 1.

Our first video shows an animation of the Gray-Scott model using the parameters *f* = 0.034 and *k* = 0.095. We use the same initial configuration of the automaton that we used in the diffusion example, in which a cluster of *B* particles are found at the middle of a board full of *A* particles.

[![image-center](../assets/images/600px/gray-scott_movie_first_frame.png){: .align-center}](../assets/images/gray-scott_movie.gif)

If we expand the size of the simulation and add multiple clusters of predators to the automaton, then the patterns become more complex as they intersect.

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
