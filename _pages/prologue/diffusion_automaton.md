---
permalink: /prologue/diffusion_automaton
title: "A Coarse-Grained Model of Particle Diffusion"
description: "Model diffusion with a coarse-grained cellular automaton that averages particle motion into lattice concentrations and shows smooth spreading patterns."
excerpt: "Prologue: Random Walks and Turing Patterns"
sidebar:
 nav: "prologue"
toc: true
toc_sticky: true
header:
  overlay_image: "../assets/images/gray_scott_jupyter_high-res.png"
  overlay_filter: 0.3
image: "../assets/images/gray_scott_jupyter_high-res.png"
gallery:
  - url: ../assets/images/initial_A_concentration.png
    image_path: ../assets/images/600px/initial_A_concentration.png
    alt: "Initial diffusion automaton"
    title: "The system contains a maximum concentration of particles in the central square."
    loading: "lazy"
  - url: ../assets/images/A_concentration_one_time_step.png
    image_path: ../assets/images/600px/A_concentration_one_time_step.png
    alt: "Diffusion automaton after one time step"
    title: "The system after one time step."
    loading: "lazy"
  - url: ../assets/images/A_concentration_two_time_steps_complete.png
    image_path: ../assets/images/600px/A_concentration_two_time_steps_complete.png
    alt: "Diffusion automaton after two time steps"
    title: "The system after two time steps."
    loading: "lazy"
---

## A coarse-grained model of single particle diffusion

Part of a modeler's job is to find simple models that capture the essence of a system while running quickly and scaling well to larger inputs.

Our model consumes a huge amount of computational resources because it must track the movements of hundreds of thousands of individual particles. Our goal is to build a "coarse-grained" model that will allow us to witness Turing patterns emerge without the computational overhead required to track individual particles.

We will grid off a two-dimensional plane into blocks and store only the *concentration* of each type of particle found within each block.  To simplify things further, we will assume that the concentration of a particle in each block is represented by a decimal number (sometimes representing a percentage concentration) as opposed to counting individual particles.

We will begin with an example of the diffusion of only *A* particles; we will later add *B* particles as well as reactions to our model. Say that the particles have concentration equal to 1 in the central cell of the grid and 0 everywhere else, as shown below.

[![Initial concentration map of chemical A](../assets/images/600px/initial_A_concentration.png){: .align-center loading="lazy" width="300px"}](../assets/images/initial_A_concentration.png)
A 5 x 5 grid showing hypothetical initial concentrations of *A* particles. Cells are labeled by decimal numbers representing their concentration of *A* particles. The central cell has maximum concentration, and no particles are contained in any other cell.
{: style="font-size: medium;"}

We will now update the grid of cells after one time step to mimic particle diffusion. To do so, we will spread out the concentration of particles in each square to its eight neighbors. For example, we could assume that 20% of the current cell's concentration diffuses to each of its four adjacent neighbors, and that 5% of the cell's concentration diffuses to each of its four diagonal neighbors. Because the central square in our ongoing example is the only cell with nonzero concentration, the updated concentrations after a single time step are shown in the following figure.

[![Concentration of chemical A after one time step](../assets/images/600px/A_concentration_one_time_step.png){: .align-center loading="lazy" width="300px"}](../assets/images/A_concentration_one_time_step.png)
A grid showing an update to the system in the previous figure after diffusion of particles after a single time step.
{: style="font-size: medium;"}

**Note:** The sum of the values in both grids in the figure above is equal to 1, which ensures the conservation of total mass in the system.
{: .notice--info}

After an additional time step, the particles continue to diffuse outward. For example, each diagonal neighbor of the central cell in the above figure, which has a concentration of 0.05 after one time step, will lose all of its particles in the following step. Each of these cells will also gain 20% of the particles from two of its adjacent neighbors, along with 5% of the particles from the central square (whose concentration is zero). This makes the updated concentration of this cell after two time steps equal to 2(0.2)(0.2) + 0.05(0) = 0.08.

The four cells directly adjacent to the central square, which have a concentration of 0.2 after one time step, will also gain particles from their neighbors. Each such cell will receive 20% of the particles from two of its adjacent neighbors and 5% of the particles from two of its diagonal neighbors, which have a concentration of 0.2. Therefore, the updated concentration of each of these cells after two time steps is 2(0.2)(0.05) + 2(0.05)(0.2) = 0.02 + 0.02 = 0.04.

Finally, the central square has no particles after one step, but it will receive 20% of the particles from each of its four adjacent neighbors, as well as 5% of the particles from each of its four diagonal neighbors. As a result, the central square's concentration after two time steps is 4(0.2)(0.2) + 4(0.05)(0.05) = 0.17.

In summary, the central nine squares after two time steps are as shown in the following figure.

[![Partial concentration map of A after two time steps](../assets/images/600px/A_concentration_two_time_steps_partial.png){: .align-center loading="lazy" width="300px"}](../assets/images/A_concentration_two_time_steps_partial.png)
A grid showing an update to the central nine squares of the diffusion system in the previous figure after an additional time step. The cells labeled "?" are left as an exercise for the reader.
{: style="font-size: medium;"}

**STOP**: What should the values of the "?" cells be in the above figure?
{: .notice--primary}

The coarse-grained model of particle diffusion that we have built is a variant of a **cellular automaton**, or a grid of cells in which we use fixed rules to update the status of a cell based on its current status and those of its neighbors. Cellular automata form a rich area of research applied to a wide variety of fields dating back to the middle of the 20th Century; if you are interested in learning more about them from the perspective of programming, then you might like to check out the <a href="http://compeau.cbd.cmu.edu/programming-for-lovers/chapter-3-building-a-self-replicating-cellular-automaton-with-top-down-programming/" target="_blank">Programming for Lovers</a> project.

## Slowing down the diffusion rate

There is just one problem: our diffusion model is too volatile! The figure below shows the initial automaton as well as its updates after each of two time steps. In a true diffusion process, all of the particles would not rush out of the central square in a single time step, only for some of them to return in the next step.

{% include gallery caption="A 5 x 5 cellular automaton model for diffusion of a single particle. (Left) The system contains a maximum concentration of particles in the central square. (Center) The system after one time step. (Right) The system after two time steps." %}

Our solution is to slow down the diffusion process by adding a parameter <em>d</em><sub><em>A</em></sub> having values between 0 and 1 that represents the *rate* of diffusion of *A* particles. Instead of moving a cell's entire concentration of particles to its neighbors in a single time step, we move only a fraction <em>d</em><sub><em>A</em></sub> of them.

Revisiting our original example, say that <em>d</em><sub><em>A</em></sub> is equal to 0.2. After the first time step, only 20% of the central cell's particles will be spread to its neighbors. Of these particles, 5% will be spread to each diagonal neighbor, and 20% will be spread to each adjacent neighbor. The figure below illustrates that after one time step, the central square has concentration equal to 0.8, its adjacent neighbors have concentration equal to 0.2<em>d</em><sub><em>A</em></sub> = 0.04, and its diagonal neighbors have concentration equal to 0.05<em>d</em><sub><em>A</em></sub> = 0.01.

[![A concentration profile with slower diffusion rate](../assets/images/600px/A_concentration_slower_diffusion.png){: .align-center loading="lazy" width="300px"}](../assets/images/A_concentration_slower_diffusion.png)
An updated grid of cells showing the concentration of <em>A</em> particles after one time step if <em>d</em><sub><em>A</em></sub> = 0.2.
{: style="font-size: medium;"}

## Adding a second particle to our diffusion simulation

We now will add *B* particles to the simulation, which we assume also start with concentration equal to 1 in the central square and 0 elsewhere. Recall that *B*, our "predator" molecule, diffuses half as fast as *A*, the "prey" molecule. If we set the diffusion rate <em>d</em><sub><em>B</em></sub> equal to 0.1, then our cells after a time step will be updated as shown in the figure below. This figure represents the concentration of the two particles in each cell as an ordered pair ([*A*], [*B*]).

[![Diffusion profile for two initial particle sources](../assets/images/600px/two_particle_concentration_diffusion.png){: .align-center loading="lazy" width="300px"}](../assets/images/two_particle_concentration_diffusion.png)
A figure showing cellular concentrations after one time step for two particles <em>A</em> and <em>B</em> that start at maximum concentration in the central square and diffuse at rates <em>d</em><sub><em>A</em></sub> = 0.2 and <em>d</em><sub><em>B</em></sub> = 0.1. Each cell is labeled by the ordered pair ([<em>A</em>], [<em>B</em>]).
{: style="font-size: medium;"}

**STOP**: Update the cells in the above figure after another generation of diffusion. Use the diffusion rates <em>d</em><sub><em>A</em></sub> = 0.2 and <em>d</em><sub><em>B</em></sub> = 0.1.
{: .notice--primary}

## Visualizing particle concentrations in an automaton

As we move toward diffusing a large board that is hundreds of cells wide, listing the concentrations of our two particles in each cell will be difficult to analyze. Instead, we need some way to visualize the results of our diffusion simulation.

First, we will consolidate the information stored in a cell about the concentrations of two particles into a single value. In particular, let a cell's particle concentrations be denoted [*A*] and [*B*]. Then the single value [*B*]/([*A*] + [*B*]) is the ratio of the concentration of *B* particles to the total number of particles in the cell. This value ranges between 0 (no *B* particles present) and 1 (only *B* particles present).

**STOP**: What should be the value of [*B*]/([*A*] + [*B*]) if both [*A*] and [*B*] are equal to zero?
{: .notice--primary}

Next, we color each cell according to its value of [*B*]/([*A*] + [*B*]) using a color spectrum like those shown in the figure below. We will use the `Spectral` color map, meaning that if a cell has a value close to 0 (relatively few predators), then it will be colored red, while if it has a value close to the maximum value of [*B*]/([*A*] + [*B*]) (relatively many predators), then it will be colored dark blue.

[![Matplotlib color map used to visualize diffusion](../assets/images/600px/matplotlib_colormap.png){: .align-center loading="lazy"}](../assets/images/matplotlib_colormap.png)

When we color each cell over many time steps, we can animate the automaton to see how it changes over time. We are now ready for the following tutorial, in which we will implement and visualize our diffusion automaton using a **Jupyter notebook**.

[Visit tutorial](tutorial-diffusion){: .btn .btn--warning .btn--large}
{: style="font-size: 100%; text-align: center;"}

The video below shows an animation of a 101 x 101 board with <em>d</em><sub><em>A</em></sub> = 0.5 and <em>d</em><sub><em>B</em></sub> = 0.25 that begins with [*A*] = 1 for all cells. All cells have [*B*] = 0 except for an 11 x 11 square in the middle of the grid, where [*B*] = 1. (There is nothing special about the dimensions of this central square.) Without looking at individual concentration values, this animation allows us to see immediately that the *A* particles are remaining in the corners, while a band of *B* particles expands outward from the center.

**Note:** Particles technically "fall off" the sides of the board in the figure below, meaning that a given particle’s total concentration across all cells decreases over time.
{: .notice--info}

[![First frame of diffusion simulation movie](../assets/images/600px/diffusion_movie_first_frame.png){: .align-center loading="lazy"}](../assets/images/diffusion_movie.gif)

[Next lesson](gray-scott){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

[^gs]: P. Gray and S.K. Scott, Autocatalytic reactions in the isothermal, continuous stirred tank reactor: isolas and other forms of multistability, Chemical Engineering Science 38 (1983) 29-43.

[^robert]: "Reaction-Diffusion by the Gray-Scott Model: Pearson's Parametrization" © 1996-2020 Robert P. Munafo https://mrob.com/pub/comp/xmorphia/index.html
