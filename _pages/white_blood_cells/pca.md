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

Things get weird in multi-dimensional space. Consider a circle inscribed in a square, and a sphere inscribed in a cube. The ratio of the area of the square to the sphere is

[![image-center](../assets/images/600px/inscribed_circle_and_sphere.png){: .align-center}](../assets/images/inscribed_circle_and_sphere.png)
Caption.
{: style="font-size: medium;"}

One attempt to explain this phenomenon is that the cube has more corners than a square, and the more dimensions that we have, the more

Define

* Curse of dimensionality -- takes many forms but this is one of them.

* Make a note that with classifiers the issue exists too? Issue is related to the issue noted above; points tend to fly apart in multi-dimensional space.

## Regression and principal components analysis

* Motivate regression and PCA analogously to 02-251. Regression and PCA.



## Dimension reduction with principal components analysis

* Because of the CoD, it makes sense to reduce the number of dimensions before performing any type of analysis. We will lose some information present in the original data, but the more structure in the data, the less information that we will lose.

* For an example of how much can be gleaned from a simple PCA analysis, show the Novembre PCA paper.

* Link to PCA tutorial on generating and visualizing a shape space.

* We would like to visualize the shape space before we apply a classifier.

## Visualizing a shape space of WBC images

* Show shape space post PCA.

* Pointer to next lesson: more about classifiers.
