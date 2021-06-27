---
permalink: /white_blood_cells/classifiers
title: "Classifiers"
sidebar:
 nav: "white_blood_cells"
toc: true
toc_sticky: true
image: "../assets/images/cellorg_pca_graph_cell.png"
---

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
