---
permalink: /prologue/random_walk
title: "An Overview of Random Walks"
sidebar:
 nav: "prologue"
toc: true
toc_sticky: true
image: "../assets/images/gray_scott_jupyter_high-res.png"
---

## Life is random

Everything in the universe ultimately depends on the interaction of tiny particles. Yet this fundamental truth is difficult to process when our experience of existence is guided by "macro" phenomena.

You may feel like a single, coherent being, but you are just a skin-covered bag of trillions of cells that act largely independently. Over half of these cells aren't even yours! They correspond to bacteria that make up a couple of kilograms of your mass. What makes the whole affair even crueler is that your cellular symphony depends on the *random* movement of particles.

Throughout this course, we will see that just because a system is driven by randomness and simple rules does not mean that it cannot have emergent behavior that is complex and elegant. Just like you.

## The wanderlust of a randomly walking particle

Cells are full of **proteins**, complex macromolecules that perform nearly every cellular function. If a protein could move in a straight line, then it would move at 20 kph or faster[^machinery], but the cytoplasm that fills the cell is so densely packed with water molecules that the protein ping-pongs off them, frequently changing direction.

We will model the movements of a cellular particle such as a protein by a **random walk** in a two-dimensional plane. At each step, the particle moves a single unit of distance in a randomly chosen direction. The video below shows a randomly walking particle taking 1000 steps.

{% include video id="htggKpDKQDk" provider="youtube" %}

The distance that the particle wanders from its starting point may surprise you. And yet perhaps this particle is just an outlier, and the typical particle would be much more of a homebody.

## From one particle to many

If we animate the action of many independent particles following random walks, then although some particles hug the starting point and some wind up far away, most particles steadily drift outward. The following video shows a simulation of 200 randomly walking particles.

{% include video id="U9uPFDBc0VY" provider="youtube" %}

In fact, although the movements of a single particle are random, we can draw conclusions about the *average-case* behavior of many particles can be predicted, as the following theorem indicates.

**Random Walk Theorem:** After *n* steps of unit length in a random walk, a particle will on average find itself a distance of approximately $$\sqrt{n}$$ from its origin.

**Note:** If you love mathematics and are interested in seeing a proof of this theorem, click <a href="../assets/tex/random_walk_theorem.pdf" download>here</a>.
{: .notice--info}

Our experience of the world confirms the Random Walk Theorem's statement that randomly walking particles tend to drift away from their starting point. We understand, for example, that an infected COVID-19 patient can infect many others in an enclosed space in a short time frame. To take a less macabre example, we also know that when a cake is baking in the oven at home, we will not need to wait long for wonderful smells to waft outward from the kitchen.

If you are interested in seeing how to build the random walk simulation shown in the video above, then please visit the following software tutorial. This tutorial uses **CellBlender**, an add-on to the popular open graphics software program **Blender**, which allows us to create and visualize biological models. These models rely on particle-based reaction-diffusion simulations that are implemented by the program **MCell**. We will use this software for our work in biological modeling in this prologue as well as module 1.

**Note:** We have designed this course so that you can appreciate the key ideas behind the biological models that we build without following software tutorials. But we also provide these tutorials so that you can explore the modeling software that we have used to generate our conclusions.
{: .notice--info}

[Visit tutorial](tutorial-random-walk){: .btn .btn--warning .btn--large}
{: style="font-size: 100%; text-align: center;"}

## Brownian motion: big numbers in small spaces

Why should scientists care about random walks? Later in this course, we will see that random walks power a simple but powerful approach that bacteria like *E. coli* use to explore their environment in the hunt for food. In the next lesson, we will see that randomly moving particles serve can produce high-level patterns if the particles interact when they collide.

Before continuing, we will point you to a beautiful animation illustrating just how far a single randomly moving particle can travel in a relatively small amount of time. This animation, which shows a simulation of the path taken by a glucose molecule as the result of Brownian motion, starts at 6:10 of the following excellent video developed by the late Joel Stiles.

{% include video id="KQgydF-fXvc?start=370" provider="youtube" %}

[Next lesson](reaction-diffusion){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

[^machinery]: Goodsell, David (2009), *The Machinery of Life*. Copernicus Books.
