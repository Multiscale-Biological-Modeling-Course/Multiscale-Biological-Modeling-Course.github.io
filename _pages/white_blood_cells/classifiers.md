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

A classical dataset that is commonly used for explaining classification is called the Iris flower data set. (CITE, with where it comes from.)

Something about machine learning.

In a classification problem,

Classification Problem
Input: A collection of data divided into a training set and a test set. Each training data point is labeled into one of k classes.
Output: a predictive labeling of all the points in the test set into one of k classes.


* Need overview of the problem of classification, with some visuals (preferably our own, in a 2-D example)

* Use Iris flower data set

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
