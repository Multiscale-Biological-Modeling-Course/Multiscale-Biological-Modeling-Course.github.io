---
permalink: /white_blood_cells/shape_space
title: "Shape Spaces"
sidebar:
 nav: "white_blood_cells"
toc: true
toc_sticky: true
image: "../assets/images/cellorg_pca_graph_cell.png"
---

## Interlude: Stone tablets and lost cities

Imagine that you

New York
Pittsburgh
Los Angeles
Chicago
Houston
Miami
Seattle
St. Louis
Boston

Test table

<table>
  <tr>
    <th>Fruit</th>
    <td>Banana</td>
  </tr>
  <tr>
    <th>Vegetable</th>
    <td>Carrot</td>
  </tr>
</table>

Not clear what interest this could hold, or what it might have to do with biology.



## Temp

Thus far in this module, we have learned how to segment images of WBCs, and we have discussed the k-nearest neighbors approach for classifying a collection of objects with unknown class. Yet this approach required each object to be represented by a feature vector, and it is

Classification Problem
Input: A collection of data divided into a training set and a test set. Each training data point is labeled into one of k classes.
Output: a predictive labeling of all the points in the test set into one of k classes.


* Another idea: find a way of directly assigning shapes to points. We've done this! When we sampled points from a protein structure we sampled n points from the surface.

* (There is an issue here, which is that we also need the Kabsch algorithm. It may be that we have the exact same proteins, but they have to be aligned and rotated to reveal this.)

* Better approach is to use distances. Identify distances between points and then try to assign shapes to points -- this is the stone tablet problem (perhaps move to intro).

* Issue: we'd love to build a shape space, but dimension is huge. Need for dimensionality reduction (although not if we are doing Kabsch).

* Applying classifier to our space.

* Transition to training and test sets -- connect to machine learning?

* Probably need cross-validation as its own section.

* Epilogue: neural nets? Maybe not depending on Kabsch.
