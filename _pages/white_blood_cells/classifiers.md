---
permalink: /white_blood_cells/classifiers
title: "Classifiers"
sidebar:
 nav: "white_blood_cells"
toc: true
toc_sticky: true
image: "../assets/images/cellorg_pca_graph_cell.png"
---

## The classification problem

We have discussed classifying images of WBCs according to their family. This is a specific instance of an ubiqitous problem in data science.

In this problem, which we call the Classification Problem, we have a collection of data, and we want to classify each object in the dataset into one of *k* classes. In this case, our data are images of WBCs, and the *k* classes are the three main families of WBCs. To take a different example, our data might be genomes taken from cancer tumors, which we want to classify based on which therapeutic should be prescribed for this patient. Or it may be the past behavior of shoppers, who we want to classify into two classes based on whether they will buy some new product.

A classical dataset commonly used for explaining classification is the **Iris flower data set**, which Ronald Fisher used in a seminal statistical paper in 1936, and which was compiled by Edgar Anderson. (CITE both and look up paper). Anderson measured four attributes, or **features**, of a collection of 50 Iris flowers from three species: both the width and height of the flower's petal, and both the width and height of the flower's sepal. Fisher's considered whether it was possible to use the information in the features to correctly classify each flower according to its species.

The key point is that although we are working with flowers, each flower has been reduced to four numbers representing the flower's features. If we had used only two features, then a flower's feature values *x* and *y* could be represented as a point in two-dimensional space (*x*, *y*). With four features, each flower is represented by a point in four-dimensional space. More generally, when classifying a collection of data with *n* features, if these features can be quantified, then each data point can be represented by a **vector** of length *n*, or a point in *n*-dimensional space.

VISUALIZATION -- TWO FEATURES? THREE?



Reducing each data point to a vector helps us visualize the data (if there are three or fewer features), but the greater insight is that two data points are typically more likely to belong to the same class if their vectors are closer in *n*-dimensional space. We will use this insight in the hopes of correctly classifying a data point whose class is *unknown* by determining which data points with *known* classification it is near.

Transition to training and test sets -- connect





(Say more about this dataset.)


Something about machine learning.

Classification Problem
Input: A collection of data divided into a training set and a test set. Each training data point is labeled into one of k classes.
Output: a predictive labeling of all the points in the test set into one of k classes.



* Give overview of most standard approach for classification, kNN

* Quantifying quality: training and test datasets

* But this is an algorithm that applies to points. What we have are *shapes*. How can shapes be assigned to points in space?

* Section break

* Another idea: find a way of directly assigning shapes to points. We've done this! When we sampled points from a protein structure we sampled n points from the surface.

* (There is an issue here, which is that we also need the Kabsch algorithm. It may be that we have the exact same proteins, but they have to be aligned and rotated to reveal this.)

* Better approach is to use distances. Identify distances between points and then try to assign shapes to points -- this is the stone tablet problem (perhaps move to intro).

* Issue: we'd love to build a shape space, but dimension is huge. Need for dimensionality reduction (not if we are doing Kabsch).

* Applying classifier to our space.

* Probably need cross-validation as its own section.

* Epilogue: neural nets? Maybe not depending on Kabsch.
