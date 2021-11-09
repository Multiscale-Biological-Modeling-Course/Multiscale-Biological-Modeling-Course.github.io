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

In this module's introduction, we established our goal of labeling images of WBCs according to their family. This is a specific instance of an ubiqitous problem in data science, in which we wish to classify each object in a given dataset into one of *k* classes.

In our ongoing example, the data are images of WBCs, and the classes are the three main families of WBCs (granulocytes, lymphocytes, and monocytes). To take a different example, our data might be genomes sequenced from cancer tumors, which we want to classify based on which therapeutic should be prescribed for the patient from which the tumor was taken. Or the data may be  past behavior of shoppers, who we want to classify into two classes based on a prediction of whether they will buy a new product.

A classical dataset commonly used for motivating classification is the **Iris flower data set**, which Ronald Fisher used in a seminal statistical paper in 1936, and which was compiled by Edgar Anderson. (CITE both and look up paper). Anderson measured four attributes, or **features**, of a collection of 50 Iris flowers from three species: both the width and height of the flower's petal, and both the width and height of the flower's sepal. Fisher considered whether it was possible to use the information in the features to correctly classify each flower according to its species.

Pictures of the three flower species are shown in the figures below.

| *Iris setosa* | *Iris versicolor* | *Iris virginica* |
:-------------------------:|:-------------------------:|:-------------------------:
![](../assets/images/Iris_setosa_2.jpg)  |  ![](../assets/images/Iris_versicolor.jpg)   |  ![](../assets/images/Iris_virginica.jpg)

Images of the three species of iris included in the Iris flower data set. Image courtesies: Emma Forsberg, unknown author, Robert H. Mohlenbrock.
{: style="font-size: medium;"}

Add link to download the full Iris flower dataset. Link to https://archive.ics.uci.edu/ml/datasets/iris as courtesy.



| Sepal length (cm) | Sepal width (cm) | Petal length (cm) | Petal width (cm) | Species |
| :----: | :----: | :----: | :----: | :----: |
| 5.1 | 3.5 | 1.4 | 0.2 | *Iris setosa* |
| 4.9 | 3.0 | 1.4 | 0.2 | *Iris setosa* |
| 4.7 | 3.2 | 1.3 | 0.2 | *Iris setosa* |
| 4.6 | 3.1 | 1.5 | 0.2 | *Iris setosa* |
| 7.0 | 3.2 | 4.7 | 1.4 | *Iris versicolor* |
| 6.4 | 3.2 | 4.5 | 1.5 | *Iris versicolor* |
| 6.9 | 3.1 | 4.9 | 1.5 | *Iris versicolor* |
| 6.3 | 3.3 | 6.0 | 2.5 | *Iris virginica* |
| 5.8 | 2.7 | 5.1 | 1.9 | *Iris virginica* |
| 7.1 | 3.0 | 5.9 | 2.1 | *Iris virginica* |

A table containing the four features and the correct species label for ten members of the Iris flower data set.
{: style="font-size: medium;"}




The key point is that although we are working with flowers, each flower has been reduced to four numbers representing the flower's features. If we had used only two features, then a flower's feature values *x* and *y* could be represented as a point in two-dimensional space (*x*, *y*). With four features, each flower is represented by a point in four-dimensional space. More generally, when classifying a collection of data with *n* features, if these features can be quantified, then each data point can be represented by a **vector** of length *n*, or a point in *n*-dimensional space.

VISUALIZATION -- TWO FEATURES? THREE?

Perhaps just petal width and height.



Reducing each data point to a vector helps us visualize the data (at least, in the case of only two or three features), but the greater insight is that two data points are typically more likely to belong to the same class if their vectors are closer in *n*-dimensional space. We will use this insight in the hopes of correctly classifying a data point whose class is *unknown* by determining which data points with *known* classification it is near.



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
