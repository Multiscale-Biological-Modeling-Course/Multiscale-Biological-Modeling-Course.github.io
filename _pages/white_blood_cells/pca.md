---
permalink: /white_blood_cells/pca
title: "Principal Components Analysis"
sidebar:
 nav: "white_blood_cells"
toc: true
toc_sticky: true
image: "../assets/images/cellorg_pca_graph_cell.png"
---

## The curse of dimensionality

Things get weird in multi-dimensional space.

Consider a circle inscribed in a square, and a sphere inscribed in a cube, as shown in the figure below. The ratio of the area of the circle to the area of the square is π/4 ≈ 0.785, regardless of the side length. As for three dimensions, the ratio of the volume of the sphere to the volume of the cube is (4π/3)/8 ≈ 0.524.

[![image-center](../assets/images/600px/inscribed_circle_and_sphere.png){: .align-center}](../assets/images/inscribed_circle_and_sphere.png)
A circle inscribed in a square takes up more of the square than a sphere inscribed in a cube.
{: style="font-size: medium;"}

As we increase the number of dimensions, the volume of the sphere takes up less and less of the total volume of the cube in which it is inscribed. We can define an *n*-dimensional unit sphere as the set of points in *n*-dimensional space whose (Euclidean) distance from the origin is at most 1, and an *n*-dimensional cube as the set of points whose coordinates are all between 0 and 1. A precise definition of the volume of a multi-dimensional object is beyond the scope of our work here. We state a known geometric result, which is that as *n* increases, the ratio of the volume of the *n*-dimensional unit sphere to the volume of the *n*-dimensional unit cube goes to zero!

One way of interpreting this phenomenon is that the cube has more corners than a square does, and so the more dimensions that we have, the more corners in which there are to hide away from the sphere. In other words, as we increase the number of dimensions, most of the volume of an object winds up scattering outward from the object's center.

The vanishing of a sphere's volume inside of a cube in multiple dimensions may seem like an arcane fact reserved for mathematicians toiling in fluorescently lit academic offices at strange hours[^author]. Yet this observation is just one manifestation of a very deep paradigm in data science called the **curse of dimensionality**, which is a collection of properties that arise in higher dimensions that run counter to our intuition in three dimensions.

In the [previous lesson](shape_space), we discussed sampling *n* points from the boundary of an image, thus converting the image into a vector in a space with 2*n* dimensions. We argued that *n* needs to be sufficiently large to ensure that comparing the vectors of two images will give an accurate representation of how similar their shapes are. And yet the size of *n* means that we need to be careful about the curse of dimensionality.

In particular, say that we sample *k* points randomly from the interior of an *n*-dimensional unit hypercube. Let *d*<sub>min</sub> and *d*<sub>max</sub> denote the minimum and maximum distance from any of our points to the origin, respectively. As *n* grows, the ratio *d*<sub>min</sub>/*d*<sub>max</sub> heads toward 1. This mathematical result is another manifestation of points flying away from each other in multi-dimensional space, and it means that algorithms like k-NN, which classify points based on which other points are nearby, may not perform well in higher-dimensional spaces.

Because of the curse of dimensionality, it makes sense to reduce the number of dimensions before performing any further analysis. We could reduce the number of features used for generating a vector, especially if we have reason to believe that some features are more informative than others. This approach will likely not work for our WBC image example, since it is not clear why one point on the boundary of our images would be inherently better than another.

Instead, we will reduce the number of dimensions of the space without removing any features from the data. As perplexing as multi-dimensional space may already seem, it may be totally unclear how we could reduce the dimensions of a space. We will therefore explain how dimension reduction can work in the context of three-dimensional space; you may be surprised that our approach is similar to something that you may already be familiar with.

## Dimension reduction with principal components analysis

* We will lose some information present in the original data, but the more structure that is present in the data, the less information that we will lose.

* Motivate regression and PCA analogously to 02-251. Regression and PCA.

* For an example of how much can be gleaned from a simple PCA analysis, show the Novembre PCA paper.

* Link to PCA tutorial on generating and visualizing a shape space.

* We would like to visualize the shape space before we apply a classifier.

## Visualizing a shape space of WBC images

* Show shape space post PCA.

* Pointer to next lesson: more about classifiers.

[^author]: Much like your author.
