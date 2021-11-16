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

As we increase the number of dimensions, the volume of a sphere takes up less and less of the volume of the cube in which it is inscribed. We define an *n*-dimensional unit sphere as the set of points in *n*-dimensional space whose (Euclidean) distance from the origin is at most 1, and an *n*-dimensional cube as the set of points whose coordinates are all between 0 and 1. A precise definition of the volume of a multi-dimensional object is beyond the scope of our work, but as *n* increases, the ratio of the volume of the *n*-dimensional unit sphere to the volume of the *n*-dimensional unit cube approaches zero!

One way of interpreting this phenomenon is that the cube has more corners than a square does, and so the more dimensions that we have, the more corners in which there are to hide away from the sphere. In other words, as we increase the number of dimensions, most of the volume of an object winds up scattering outward from the object's center.

The vanishing of a sphere's volume inside of a cube in multiple dimensions may seem like an arcane fact reserved for mathematicians toiling in fluorescently lit academic offices at strange hours[^author]. Yet this observation is just one manifestation of a very deep paradigm in data science called the **curse of dimensionality**, which is a collection of properties that arise in higher dimensions that run counter to our intuition in three dimensions.

## How the curse of dimensionality affects classification

In the [previous lesson](shape_space), we discussed sampling *n* points from the boundary of an image, thus converting the image into a vector in a space with 2*n* dimensions. We argued that *n* needs to be sufficiently large to ensure that comparing the vectors of two images will give an accurate representation of how similar their shapes are. And yet the size of *n* means that we need to be careful about the curse of dimensionality.

In particular, say that we sample *k* points randomly from the interior of an *n*-dimensional unit hypercube. Let *d*<sub>min</sub> and *d*<sub>max</sub> denote the minimum and maximum distance from any of our points to the origin, respectively. As *n* grows, the ratio *d*<sub>min</sub>/*d*<sub>max</sub> heads toward 1. This mathematical result is another manifestation of points flying away from each other in multi-dimensional space, and it means that algorithms like k-NN, which classify points with unknown classes based on nearby points with known classes, may not perform well in higher-dimensional spaces in which points tend to spread out from each other.

Because of the curse of dimensionality, it makes sense to reduce the number of dimensions before performing any further analysis. We could reduce the number of features used for generating a vector, especially if we have reason to believe that some features are more informative than others. This approach will likely not work for our WBC image example, since it is not clear why one point on the boundary of our images would be inherently better than another.

Instead, we will reduce the number of dimensions of the space without removing any features from the data. As perplexing as multi-dimensional space may already seem, it may be totally unclear how we could reduce the dimensions of a space. We will therefore explain how dimension reduction can work in the context of three-dimensional space; you may be surprised that our approach is similar to something that you may already be familiar with.

## Dimension reduction with principal components analysis

* Petal length vs. petal width in irises (don't need species labels this time)

* We can trust our eyes to notice the clear pattern: that as petal width increases, petal length tends to increase as well.

* Another way of noting this is that a line through the data does a good job of approximating the data. That is, if we knew the petal width, we could guess the petal length, and vice-versa. Even though the points exist in two dimensions, the line (a one-dimensional object) does a good job of approximating the data.

STOP: How do you think we determine the line?

* You may have learned about regression as part of your mathematics education: we want to minimize the sum of squared y distances between the point and its point (x, y) on the line.

* But this is not the only way to form a line through the data explaining it. In particular, regression is good if we want to explain y as a function of x, but it's not clear why petal width would depend on petal length or vice-versa. As a result, if we switched the coordinates, then we would be minimizing the sum of squared differences in the x coordinates.

* SHOW NEW LINE

* Because we don't want to prioritize one variable over another, perhaps instead of minimizing the sum of squares of x residuals, or the sum of squares of y residuals, we could instead find the line that minimizes the sum of squares of distances from the points in the data to their nearest point on the line.

* Note: the resuling line will be quite similar.

* Show figure that indicates the difference in what we are looking for.

* Great GIF from slides showing how if we rotate lines throughout the data, we can see the squared distances to the lines decrease at the point where the line is the best fit. Often this is said to be the line that "explains the most variance in the data" since the distances to the line are the variance perhaps caused by randomness, and the line minimizes these squared distances.

* Note also that we can *reduce* the dimensionality of our dataset from two dimensions to one by mapping each point to its nearest point on the line of best fit.

* Show original figure and projections against PCA line.

* Say that we wanted to generalize this to three-dimensional space. We might find the line through the data minimizing the sum of squared distances to the lines, or it might be that the line is insufficient to this end. Maybe instead we find the plane (a two-dimensional object) to minimize the sum of squared distances from each point to its nearest point on the plane.

* Visual of plane through three-d data?

* It is impossible to provide visual intuition for extending this concept into higher dimensions, but to generalize our idea for dimension reduction, we are looking for a *d*-dimensional "hyperplane" that explains as most variation in an *n*-dimensional dataset as possible, where *n* < *d*, meaning the hyperplane that minimizes the sum of squared distances from each data point to its nearest point on the hyperplane.

* The mathematics for performing this task is over 100 years old (CITE?) and is called **principal components analysis**; a closely related concept is called **singular value decomposition** by mathematicians.

## Genotyping maps: PCA is more powerful than you think

* Proof of concept: one of the things that ancestry companies do is sample genotyping markers from individuals. For example, they are able to detect the nucleotide that an individual has at a single position in their genome.

* This produces a vector of markers for an individual *v* such that *v*(*i*) is 1 if the individual posssesses the marker and 0 otherwise. There are hundreds of thousands of markers used, meaning that this vector inhabits an enormous space.

* Yet if we apply PCA with *d* = 2 to produce a lower-dimensional map of the data, we get some amazing results.

* Show Europe, Switzerland, India.

* We will lose some information present in the original data, but the more structure that is present in the data, the less information that we will lose.

## The curse of dimensionality strikes again

* You may be curious how we know what value of *d* to choose, since *d* = 2 produced such good results in the previous section. In practice, *d* may not be 2, but it does tend to be quite small, because the curse of dimensionality affects our results.

* Let's look at an example in lower dimensional space. For example, say that we had only sampled two lilies.

* Show two lilies with inverse relationship. We can find the line of best fit through them, and it's wrong!

* This idea extends to higher dimensions when we have  *n* much bigger than *m* (number of data points), so that when we apply dimension reduction, we want the number of dimensions *d* in the hyperplane to be significantly smaller than *m*. Recall that we only have a few hundred images in our WBC image set, and so *d* will need to be quite small.


* We are now ready to apply PCA to our shape vectors and visualize the shape space.

## Shape space of WBC images

* Return from tutorial and show shape space post PCA.

* We are now ready to apply a classifier, not to our original space, but to the lower dimensional plane returned by PCA. (We can do this for a few different values of d?)

* Point to next lesson.

## Notes

* (Need to define projection at some point)



[^author]: Much like your author.
