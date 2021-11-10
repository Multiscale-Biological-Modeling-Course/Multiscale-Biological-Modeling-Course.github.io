---
permalink: /white_blood_cells/shape_space
title: "Shape Spaces"
sidebar:
 nav: "white_blood_cells"
toc: true
toc_sticky: true
image: "../assets/images/cellorg_pca_graph_cell.png"
---

## Interlude: Talking monkeys, stone tablets, and lost cities

If you have not yet managed to see the 1968 movie *Planet of the Apes*[^apes], we will spoil its <a href="https://www.youtube.com/watch?v=XvuM3DjvYf0" target="_blank">ending</a> for you. Charlton Heston's character finds the Statue of Liberty protruding from the sand and has the epiphany that the mysterious planet he has come across was just Earth all along.

Imagine that you are a traveler to Earth and come across the ruins of New York. You hope to find the other cities of this area as well, and you find an old road atlas that has driving distances between cities (in miles), shown in the table below.

| | New York | Los Angeles | Pittsburgh | Miami | Houston | Seattle |
| :----: | :----: | :----: | :----: | :----: | :----: | :----: |
| **New York** | 0 | 2805 | 371 | 1283 | 1628 | 2852 |
| **Los Angeles** | 2805 | 0 | 2427 | 2733 | 1547 | 1135 |
| **Pittsburgh** | 371 | 2427 | 0 | 1181 | 1388 | 2502 |
| **Miami** | 1283 | 2733 | 1181 | 0 | 1189 | 3300 |
| **Houston** | 1628 | 1547 | 1388 | 1189 | 0 | 2340 |
| **Seattle** | 2852 | 1135 | 2502 | 3300 | 2340 | 0 |

**STOP:** If you know the location of New York, how could you use the information in the table above to find the other cities?
{: .notice--primary}

This example may be contrived, but it has a real archaeological counterpart. In 2019, researchers used commercial records on 19th Century BCE stone tablets compiled by Assyrian merchants to estimate distances between pairs of lost Bronze age cities in present-day Turkey. Using these approximated "atlas" of sorts, they predicted the location of the lost cities[^Barjamovich2019].

You may be confused as to why stone tablets and lost cities  matter to biologists. Let us therefore return to our central problem of classifying segmented WBC images by family.

## Temp

In the [previous lesson](classification), we discussed the k-nearest neighbors algorithm (k-NN) for classifying an object with unknown class given a collection of objects with known classes. Yet k-NN first requires each object to be represented by a feature vector, and so we need some way of converting a WBC image into a feature vector.

If you have followed the rest of this course, you may notice that this question is very similar to one that we have already encountered in a [different module](), when we vectorized a protein structure as the locations of its alpha carbons to compare protein structures.



Classification Problem
Input: A collection of data divided into a training set and a test set. Each training data point is labeled into one of k classes.
Output: a predictive labeling of all the points in the test set into one of k classes.


* Another idea: find a way of directly assigning shapes to points. We've done this! When we sampled points from a protein structure, we sampled points from the surface.

* (There is an issue here, which is that we also need the Kabsch algorithm. It may be that we have the exact same proteins, but they have to be aligned and rotated to reveal this.)

* Better approach is to use distances. Identify distances between points and then try to assign shapes to points -- this is the stone tablet problem (perhaps move to intro).

* Issue: we'd love to build a shape space, but dimension is huge. Need for dimensionality reduction (although not if we are doing Kabsch).

* Applying classifier to our space.

* Transition to training and test sets -- connect to machine learning?

* Probably need cross-validation as its own section.

* Epilogue: neural nets? Maybe not depending on Kabsch.

[^apes]: Your author has not either.

[^Barjamovich2019]: Barjamovic B, Chaney T, Coşar K, Hortaçsu A (2019) Trade, Merchants, and the Lost Cities of the Bronze Age. The Quarterly Journal of Economics 134(3):1455-1503.[Available online](https://doi.org/10.1093/qje/qjz009)
