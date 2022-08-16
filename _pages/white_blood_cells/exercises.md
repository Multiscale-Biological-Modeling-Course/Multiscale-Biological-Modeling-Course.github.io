---
permalink: /white_blood_cells/exercises
title: "Exercises"
sidebar:
 nav: "exercises"
toc: true
toc_sticky: true
image: "../assets/images/normal_adult_blood_smear.JPG"
---

## Neural networks and logical connectives



## A little fun with lost cities

**Exercise:** Consider the three points *x* = (−8, 1), *y* = (7, 6), and *z* = (10, −2). Say that the distances from these points to some point *w* with unknown location are as follows: *d*(*x*,*w*) = 13; *d*(*y*,*w*) = 3; *d*(*z*,*w*) = 10. Where is *w*?
{: .notice--success}

## Irises and feature selection

**Exercise:** The [iris flower dataset](../downloads/iris.csv) has four features. Apply PCA with *d* = 2 to reduce the dimension of this dataset. Then, apply k-NN with *k* equal to 1 and cross validation with *f* equal to 10 to the resulting vectors of reduced dimension to obtain a confusion matrix. What are the accuracy, recall, specificity, and precision? How do they compare against the results of using all four iris features that we found [earlier](training#a-first-attempt-at-quantifying-the-success-of-a-classifier)?
{: .notice--success}

**Exercise:** Another way to reduce the dimension of a dataset is to eliminate features from the dataset. Apply k-NN with *k* equal to 1 and cross validation with *f* equal to 10 to the [iris flower dataset](../downloads/iris.csv) using only the two features petal width and petal length. Then, run the same classifier on your own choice of two iris features to obtain a confusion matrix. How do the results compare against the result of the previous exercise (which used PCA instead of feature elimination) and those from using [all four features](training#a-first-attempt-at-quantifying-the-success-of-a-classifier)?
{: .notice--success}




## More classification of our WBC image dataset
