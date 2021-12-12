---
permalink: /white_blood_cells/exercises
title: "Exercises"
sidebar:
 nav: "exercises"
toc: true
toc_sticky: true
image: "../assets/images/normal_adult_blood_smear.JPG"
---

Exercise: Say that we have identified the locations of the following three points.
x = (-8, 1)
y = (7, 6)
z = (10, -2)

If the distances to some point w with unknown location are:
d(x, w) = 13
d(y, w) = 3
d(z, w) = 10
 then where is w?

 Answer: (4, 6).


Exercise idea: local search and parameter estimation -- tie back to previous modules.

Exercise idea: soft classification, and breaking ties.

Exercise idea: show that RMSD of two vectors of length n is equivalent to Euclidean distance of two vectors of length 2n.

Exercise idea: PCA vs. linear regression for a few different data points to see that the resulting lines are different.


## The curse of dimensionality strikes again!

* You may be curious how we know what value of *d* to choose, since *d* = 2 produced such good results in the previous section. In practice, *d* may not be 2, but it does tend to be quite small, because the curse of dimensionality affects our results.

* Let's look at an example in lower dimensional space. For example, say that we had only sampled two lilies.

* Show two lilies with inverse relationship. We can find the line of best fit through them, and it's wrong!

* This idea extends to higher dimensions when we have  *n* much bigger than *m* (number of data points), so that when we apply dimension reduction, we want the number of dimensions *d* in the hyperplane to be significantly smaller than *m*. Recall that we only have a few hundred images in our WBC image set, and so *d* will need to be quite small.

Exercise idea: what are the odds that a randomly chosen points in the d*dimensional hypercube is within distance 0.5 of the origin? For d = 1, it's 1. For d = 2, it's the ratio of the area of the circle to the area of the square. This generalizes, so that asymptotically the probability is zero. Say that we randomly pick two points from the corners of a d-dimensional hypercube. How far apart will they be on average? (sqrt(d/2))
