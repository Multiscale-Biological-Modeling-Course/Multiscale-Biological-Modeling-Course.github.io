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

[![image-center](../assets/images/iris_petal_data.png)](../assets/images/iris_petal_data.png){: .align-center}
Petal width (*x*-axis) plotted against width (*y*-axis) for each of the flowers in the Iris flower data set, colored by species. There are not fifty points corresponding to every species because some flowers have the same petal length and width.
{: style="font-size: medium;"}

Note how stark the pattern in the above figure is. Even though we chose only two features from the Iris flowers, the points associated with the flowers essentially divide into three main clusters by species. In other words, nearby points tend to correspond to flowers from the same species.

If we were to use all four features for the iris dataset, then every flower would be represented by a point in four-dimensional space. For example, the first flower in our initial table of iris features would be represented by the point (5.1, 3.5, 1.4, 0.2). More generally, when classifying a collection of data with *n* features, each element in the dataset can be represented by a **feature vector** of length *n*, whose *i*-th value corresponds to its value for the *i*-th feature.

## Classifying unknown elements with k-nearest neighbors

For the iris dataset, recall our observation that data points were more likely to belong to the same class if they were nearby. Our hope is that this is true for other datasets, that elements from the same class will have feature vectors that are close in *n*-dimensional space. If so, we can classify a data point whose class is *unknown* by determining which data points with *known* classification it is near.

**STOP:** Consider the point with unknown class (gray) in the figure below. Should it be assigned to the class of the green points or to the class of the blue points? Why?
{: .notice--primary}

![image-center](../assets/images/knn_neighborhood.png){: .align-center}
An unknown point (gray) along with a collection of nearby points belonging to two classes, colored green and blue.
{: style="font-size: medium;"}

The task of classifying points with unknown class may seem straightforward, but the preceding question also indicates that it is also open-ended. Because of this freedom, researchers have devised a variety of different approaches for classifying data given data with known classes. We will discuss a simple but powerful classification algorithm called **k-nearest neighbors**, or **k-NN**. (CITE: Fix and Hodges, 1951)

In k-NN, we fix a positive integer *k* in advance, which will be used for classification of all points. Then, for each point with unknown class, we assign it the class possessed by the largest number of its *k* closest neighbors.

For example, if we were using *k* equal to 1, then we would assign the unknown point to the blue class, as the nearest point with known class is blue (see figure below).

![image-center](../assets/images/knn_neighborhood_k=1.png){: .align-center}
When using k-NN with *k* equal to 1, we classify an unknown point according to the point of known class that is nearby; the above figure indicates that the blue point is the closest to the unknown point.
{: style="font-size: medium;"}

However, with the same data and *k* equal to 3 or 4, the figure below shows that a majority of the *k* nearest neighbors are green, and so we classify the unknown point as green. This example reinforces a theme of this course, and of data science in general, that the results of an algorithm can be sensitive to our choice of parameters.

![image-center](../assets/images/knn_neighborhood_k=4.png){: .align-center}
When using k-NN with *k* equal to 4, we consider the four nearest points when classifying the unknown point, which will therefore receive the green class.
{: style="font-size: medium;"}

**STOP:** When *k* = 2 or *k* = 6 for the above figure, note that we obtain a tie in the number of points from each known class belonging to the *k* nearest neighbors of a point with unknown class. How could we break ties in k-NN?
{: .notice--primary}

In the more general case in which feature vectors have length *n*, we can determine which points are nearest to a given point by using the **Euclidean distance**, which generalizes the distance between two points in two-dimensional space to vectors in *n*-dimensional space. Say that we have the vectors **x** = (*x*<sub>1</sub>, *x*<sub>2</sub>, ..., *x*<sub>*n*</sub>) and **y** = (*y*<sub>1</sub>, *y*<sub>2</sub>, ..., *y*<sub>*n*</sub>). Then the Euclidean distance between them is given by the sum of squares of differences between corresponding vector elements:

$$d(\mathbf{x}, \mathbf{y}) = \sqrt{(x_1 - y_1)^2 + (x_2 - y_2)^2 + \cdots + (x_n-y_n)^2}$$

We now have learned how to use k-NN to classify unknown points given a set of points of known classes. Returning to our ongoing example of WBCs, we could imagine that researchers classify hundreds of images of WBCs in advance to give us a validated dataset, which we can compare a new WBC image against to determine the family to which this WBC belongs. There is just one problem: how can we convert an image of a WBC into a vector?
