---
permalink: /white_blood_cells/classification
title: "An Overview of Classification"
sidebar:
 nav: "white_blood_cells"
toc: true
toc_sticky: true
image: "../assets/images/cellorg_pca_graph_cell.png"
---

## The classification problem

In this module's introduction, we established our goal of labeling images of WBCs according to their family. This is a specific instance of an ubiqitous problem in data science, in which we wish to classify each object in a given dataset into one of *k* classes.

In our ongoing example, the data are images of WBCs, and the classes are the three main families of WBCs (granulocytes, lymphocytes, and monocytes). To take a different example, our data might be genomes sequenced from cancer tumors, which we want to classify based on which therapeutic should be prescribed for the patient from which the tumor was taken. Or the data may be  past behavior of shoppers, who we want to classify into two classes based on a prediction of whether they will buy a new product.

## The iris flower data set

A classical dataset commonly used for motivating classification is the **iris flower data set**, which Ronald Fisher used in a seminal statistical paper in 1936, and which was compiled by Edgar Anderson. (CITE both and look up paper). Anderson collected 150 iris flowers, equally divided among three species, which are illustrated in the figure below.

| *Iris setosa* | *Iris versicolor* | *Iris virginica* |
:-------------------------:|:-------------------------:|:-------------------------:
![](../assets/images/Iris_setosa_2.jpg)  |  ![](../assets/images/Iris_versicolor.jpg)   |  ![](../assets/images/Iris_virginica.jpg)

Representative images of the three species of iris included in the iris flower data set. Image courtesies, from left to right: Emma Forsberg, unknown author, Robert H. Mohlenbrock.
{: style="font-size: medium;"}

Anderson further measured four attributes, or **features**, of each of the flowers in his dataset: both the width and height of the flower's petal, and both the width and height of the flower's sepal (a green offshoot beneath the petals). The features and species labels for twelve of the flowers in the iris flower dataset are shown in the table below (click [here](../downloads/iris.csv) for the full dataset). Fisher considered whether it was possible to classify each flower according to its species using only the features Anderson had measured.

| Sepal length (cm) | Sepal width (cm) | Petal length (cm) | Petal width (cm) | Species |
| :----: | :----: | :----: | :----: | :----: |
| 5.1 | 3.5 | 1.4 | 0.2 | *I. setosa* |
| 4.9 | 3.0 | 1.4 | 0.2 | *I. setosa* |
| 4.7 | 3.2 | 1.3 | 0.2 | *I. setosa* |
| 4.6 | 3.1 | 1.5 | 0.2 | *I. setosa* |
| 7.0 | 3.2 | 4.7 | 1.4 | *I. versicolor* |
| 6.4 | 3.2 | 4.5 | 1.5 | *I. versicolor* |
| 6.9 | 3.1 | 4.9 | 1.5 | *I. versicolor* |
| 5.5 | 2.3 | 4.0 | 1.3 | *I. versicolor* |
| 6.3 | 3.3 | 6.0 | 2.5 | *I. virginica* |
| 5.8 | 2.7 | 5.1 | 1.9 | *I. virginica* |
| 7.1 | 3.0 | 5.9 | 2.1 | *I. virginica* |
| 6.3 | 2.9 | 5.6 | 1.8 | *I. virginica* |

A table containing the four features and the correct species label for twelve members of the iris flower data set. The complete dataset can be downloaded [here](../downloads/iris.csv) and was accessed from the <a target="_blank" href="https://archive.ics.uci.edu/ml/datasets/iris">University of California, Irvine Machine Learning Repository</a>].
{: style="font-size: medium;"}

**STOP:** What characteristics do flowers from each species tend to share in terms of the four features in the table above?
{: .notice--primary}

## From flowers to vectors

If we were to use only two features in the Iris flower dataset, then a flower's feature values *x* and *y* could be represented as a point in two-dimensional space (*x*, *y*). In the figure below, we do just this for the features petal length (*x*-axis) and petal width (*y*-axis).

![image-center](../assets/images/iris_petal_data.png){: .align-center}
Petal width (*x*-axis) plotted against width (*y*-axis) for each of the flowers in the Iris flower data set, colored by species. There are not fifty points corresponding to every species because some flowers have the same petal length and width.
{: style="font-size: medium;"}

Note how stark the pattern in the above figure is. Even though we chose only two features from the Iris flowers, the points associated with the flowers essentially divide into three main clusters by species. In other words, nearby points tend to correspond to flowers from the same species.

If we were to use all four features for the iris dataset, then every flower would be represented by a point in four-dimensional space. For example, the first flower in our initial table of iris features would be represented by the point (5.1, 3.5, 1.4, 0.2). More generally, when classifying a collection of data with *n* features, each element in the dataset can be represented by a **feature vector** of length *n*, whose *i*-th value corresponds to its value for the *i*-th feature.

## Classifying unknown elements with k-nearest neighbors

For the iris dataset, recall our observation that data points were more likely to belong to the same class if they were nearby. Our hope is that this is true for other datasets, that elements from the same class will have feature vectors that are close in *n*-dimensional space. If so, we can classify a data point whose class is *unknown* by determining which data points with *known* classification it is near.

**STOP:** Consider the point with unknown class (gray) in the figure below. Should it be assigned to the class of the green points or to the class of the blue points? Why?
{: .notice--primary}

![image-center](../assets/images/knn_neighborhood.png){: .align-center}
An unknown point along with a collection of
{: style="font-size: medium;"}

This task may seem straightforward, but the preceding question also indicates that it is also open-ended. Because of this freedom, researchers have devised a variety of different approaches for classifying data given data with known classes. We will discuss a simple but powerful classification algorithm called **k-nearest neighbors**, or **k-NN**. (CITE: Fix and Hodges, 1951)



In k-NN, we classify a point according to how many

![image-center](../assets/images/knn_neighborhood.png){: .align-center}
Petal width (*x*-axis) plotted against width (*y*-axis) for each of the flowers in the Iris flower data set, colored by species. There are not fifty points corresponding to every species because some flowers have the same petal length and width.
{: style="font-size: medium;"}


Transition to training and test sets -- connect

Make point about machine learning.

Classification Problem
Input: A collection of data divided into a training set and a test set. Each training data point is labeled into one of k classes.
Output: a predictive labeling of all the points in the test set into one of k classes.

* Give overview of most standard approach for classification, kNN

* But this is an algorithm that applies to points. What we have are *shapes*. How can shapes be assigned to points in space?

* Section break

* Another idea: find a way of directly assigning shapes to points. We've done this! When we sampled points from a protein structure we sampled n points from the surface.

* (There is an issue here, which is that we also need the Kabsch algorithm. It may be that we have the exact same proteins, but they have to be aligned and rotated to reveal this.)

* Better approach is to use distances. Identify distances between points and then try to assign shapes to points -- this is the stone tablet problem (perhaps move to intro).

* Issue: we'd love to build a shape space, but dimension is huge. Need for dimensionality reduction (although not if we are doing Kabsch).

* Applying classifier to our space.

* Probably need cross-validation as its own section.

* Epilogue: neural nets? Maybe not depending on Kabsch.
