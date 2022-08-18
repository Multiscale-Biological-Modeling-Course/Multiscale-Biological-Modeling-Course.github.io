---
permalink: /white_blood_cells/exercises
title: "Classification and Image Analysis Exercises"
sidebar:
 nav: "white_blood_cells"
toc: true
toc_sticky: true
image: "../assets/images/normal_adult_blood_smear.JPG"
---

## Neural networks and logical connectives

One of the strengths of artificial neurons and neural networks is that their output can mimic, at least approximately, any function. In the case of classification, this means that if some function *g*(*x*<sub>1</sub>, …, *x*<sub><em>n</em></sub>) performs well at classifying data with *n* features, then some neural network exists that will replicate *g*: we just need to find the right set of network parameters.

We say that a neural network with input variables *x*<sub>1</sub>, …, *x*<sub><em>n</em></sub> **represents** a function *g*(*x*<sub>1</sub>, …, *x*<sub><em>n</em></sub>) if for any choice of input variables *x*<sub>1</sub>, …, *x*<sub><em>n</em></sub>, the output of the neural network is equal to *g*(*x*<sub>1</sub>, …, *x*<sub><em>n</em></sub>). We provide two exercises on finding neural networks that represent relatively simple functions.

**Exercise:** Consider the function *g*(*x*<sub>1</sub>, *x*<sub>2</sub>) for binary input variables *x*<sub>1</sub> and *x*<sub>2</sub> that outputs 0 only when *x*<sub>1</sub> and *x*<sub>2</sub> are both equal to 1 and that outputs 1 for other choices of *x*<sub>1</sub> and *x*<sub>2</sub>. (The function *g* is known as a “``NAND`` gate”). Find a single perceptron that represents *g*.
{: .notice--success}

**Exercise:** Consider the function *g*(*x*<sub>1</sub>, *x*<sub>2</sub>) for binary input variables *x*<sub>1</sub> and *x*<sub>2</sub> that outputs 1 when *x*<sub>1</sub> ≠ *x*<sub>2</sub> and 0 when *x*<sub>1</sub> = *x*<sub>2</sub>. (The function *g* is known as an “`XOR` gate”). It can be shown that no single perceptron represents *g*; find a neural network of perceptrons that represents *g*.
{: .notice--success}

## A little fun with lost cities

**Exercise:** Consider the three points *x* = (−8, 1), *y* = (7, 6), and *z* = (10, −2). Say that the distances from these points to some point *w* with unknown location are as follows: *d*(*x*,*w*) = 13; *d*(*y*,*w*) = 3; *d*(*z*,*w*) = 10. Where is *w*?
{: .notice--success}

## More on the curse of dimensionality

Intuitively, we would like to have a large number of features in our data (i.e., a large dimension of *n* in each data point's feature vector). Yet consider the figure below, which plots the petal width and length of only two iris flowers. It would be a horrible idea to extrapolate anything from the line connecting these two points, as it indicates that these two variables are inversely coordinated, which is the *opposite* of the true correlation that we found in the [main text](pca#dimension-reduction-with-principal-components-analysis).

[![image-center](../assets/images/600px/curse_of_dimensionality_two_irises.png){: .align-center}](../assets/images/curse_of_dimensionality_two_irises.png)
Petal length (x-axis) plotted against petal width (y-axis) for two flowers in the iris flower dataset. Because of random chance and small sample size, these two flowers demonstrate an inverse correlation between petal length and width, the opposite of the true correlation found in the main text.
{: style="font-size: medium;"}

This example provides another reason why we reduce the dimension of a dataset when the number of objects in our dataset is smaller than the number of features of each object. Furthermore, when fitting a *d*-dimensional hyperplane to a collection of data, we need to be careful with selecting too large of a value of *d*, especially if we do not have many data points.

**Exercise:** What is the minimum number of points in three-dimensional space such that we cannot guarantee that there is a plane containing them all? Provide a conjecture as to the minimum number of points in *n*-dimensional space such that we cannot guarantee that there is a *d*-dimensional hyperplane containing them all.
{: .notice--success}

## Irises, PCA, and feature selection

**Exercise:** The [iris flower dataset](../downloads/iris.csv) has four features. Apply PCA with *d* = 2 to reduce the dimension of this dataset. Then, apply k-NN with *k* equal to 1 and cross validation with *f* equal to 10 to the resulting vectors of reduced dimension to obtain a confusion matrix. What are the accuracy, recall, specificity, and precision? How do they compare against the results of using all four iris features that we found [earlier](training#a-first-attempt-at-quantifying-the-success-of-a-classifier)?
{: .notice--success}

**Exercise:** Another way to reduce the dimension of a dataset is to eliminate features from the dataset. Apply k-NN with *k* equal to 1 and cross validation with *f* equal to 10 to the [iris flower dataset](../downloads/iris.csv) using only the two features petal width and petal length. Then, run the same classifier on your own choice of two iris features to obtain a confusion matrix. How do the results compare against the result of the previous exercise (which used PCA instead of feature elimination) and those from using [all four features](training#a-first-attempt-at-quantifying-the-success-of-a-classifier)?
{: .notice--success}

## More classification of WBC images

Exercises coming soon!
