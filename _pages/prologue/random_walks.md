---
permalink: /prologue/random-walk
title: "An Introduction to Random Walks"
sidebar:
 nav: "prologue"
toc: true
toc_sticky: true
image: "../assets/images/gray_scott_jupyter_3.png"
---

## The wanderlust of a single particle

We introduced this prologue with the observation that our experience of the world is influenced by the random movements of invisible particles. For example, throughout this course, we will work with proteins, molecules that perform nearly every function in our cells. If a protein could move in a straight line, it would move 20 kph or more[^machinery], but the cellular cytoplasm is so densely packed with molecules that the protein constantly bounces off these molecules and changes direction.

We can therefore model the random movements of a particle by **random walk** in a two-dimensional plane. At each step, the particle moves a single unit of distance in a randomly chosen direction.

**STOP**: After *n* steps, how far do you think the particle will have traveled (as the crow flies) from its starting point?
{: .notice--primary}

Let's generate an animation of a particle following a random walk. Click on the video below to show a randomly walking particle, shown in red, taking 1000 steps.

<iframe width="640" height="380" src="https://www.youtube-nocookie.com/embed/htggKpDKQDk" frameborder="0" allowfullscreen></iframe>

The distance that the particle wanders from its starting point may surprise you. And yet the astute scientist would point out that this is just a single particle; perhaps the typical particle would be much more of a homebody.

The particle's movements are random, but the *average-case* behavior of the particle can be predicted, as the following theorem indicates. For mathematics lovers, we explain why this theorem is true in an optional bonus section at the bottom of this page.

**Random Walk Theorem:** After *n* steps of unit length in a random walk, a particle will on average find itself a distance of approximately $$\sqrt{n}$$ from its origin.

**Note:** If you love mathematics and are interested in seeing a proof of this theorem, click <a href="../assets/tex/random_walk_theorem.pdf" download>here</a>.
{: .notice--warning}

## From one particle to many

The Random Walk Theorem does not say that after *n* steps a particle will be exactly $$\sqrt{n}$$ from the origin, any more than we would expect that in flipping a coin 2,000 times the coin will come up heads exactly 1,000 times. Yet the statement about the particle's average behavior is powerful. If we animate the action of many independent particles following random walks, then we will see that although some particles hug their starting point and some wind up far away, most particles steadily move outward. Click on the following video to watch a simulation of 200 randomly walking particles.

<iframe width="640" height="380" src="https://www.youtube-nocookie.com/embed/U9uPFDBc0VY" frameborder="0" allowfullscreen></iframe>

If you are interested in seeing how to build this random walk simulation as an introduction to the software that we will soon be using for biological modeling, then please visit the following software tutorial. This tutorial uses **CellBlender**, an add-on to the popular open graphics software program **Blender**, which allows us to create and visualize biological models. These models rely on particle-based reaction-diffusion simulations that are implemented by the program **MCell**.

We have designed this course so that you can appreciate the key ideas behind the biological models that we build without following software tutorials. But we also provide these tutorials so that you can explore the modeling software that we have used to generate our conclusions. If you find this software helpful, perhaps you can even use this software in your own work!

[Visit tutorial](tutorial-random-walk){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

## Brownian motion: big numbers in small spaces

Our experience of the world confirms what we see in the animations produced by CellBlender. The seemingly random movements of particles suspended in a medium via **Brownian motion** will cause those particles to move away from their starting point, even if the concentration of these particles is uniform. We understand, for example, that an infected COVID-19 patient can infect many others in an enclosed space in a short time frame. To take a less macabre example, we also know that when a cake is baking in the oven at home, we will not need to wait long for wonderful smells to waft outward from the kitchen.

Why should a scientist care about random walks? Later in this course, we will see that the random walk model is at the core of a simple but powerful approach that bacteria like *E. coli* use to explore their environment in the hunt for food. In the next lesson, we will see that mimicking the random movements of particles will be important for building a biological model in which we allow particles to move naturally and interact when they collide.

Before continuing, we point you to a beautiful animation illustrating just how far a single randomly moving particle can travel in a relatively small amount of time. This animation, which shows a simulation of the path taken by a glucose molecule as the result of Brownian motion, starts at 6:10 of the following excellent instructional video developed by the late Joel Stiles.

<center>
<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/KQgydF-fXvc?start=370" frameborder="0" allowfullscreen></iframe>
</center>

[Next lesson](animals){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

[^machinery]: Goodsell, David (2009), *The Machinery of Life*. Copernicus Books.
