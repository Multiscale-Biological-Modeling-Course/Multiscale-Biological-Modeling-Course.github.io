---
permalink: /white_blood_cells/training
title: "Training a Classifier"
sidebar:
 nav: "white_blood_cells"
toc: true
toc_sticky: true
image: "../assets/images/normal_adult_blood_smear.JPG"
---

## Cross validation

In previous lessons, we learned how to build a shape space for a collection of images (in our case containing WBC nuclei) and then reduce the dimension of this space using PCA. We also learned about the k-nearest neighbors (k-NN) classification algorithm that assigns a "class" to a data point based on the class held by a plurality of its *k* closest neighbors.

We would like to apply k-NN to WBC images to see how well it performs. That is, how often does k-NN assign an image to the correct class?

The tricky part is that we already know the correct class for every image in our dataset. To get around this issue, we could exclude some *subset* of the data, pretending that we don't know the correct classes, and then ask how well we are able to correctly predict the classes of the objects that we excluded, called the **validation set**.

**STOP:** What issues do you see with this approach?
{: .notice--primary}

The problem is that it is unclear which subset we should use as a validation set. Random variation could mean that the reported accuracy will change depending on which subset we choose. And for that matter, what makes the elements of the validation set so special? Ideally, we would use an approach that is not subject to random variation and that uses *all* of the data for validation.

The most common solution is called **cross validation**, in which we divide our data into a collection of *f* (approximately) equally sized groups called **folds**. We use one of these folds as a validation set, keeping track of how many objects are correctly classified, and then we start over with a different fold as our validation set. Cross validation is democratic, since every element in our dataset will get used as a member of a validation set exactly once.

The case in which *f* is equal to the number of points in our dataset is called **leave one out cross validation**. This approach amounts to, for every point in the dataset, pretending that we do not know its label, using the classification algorithm to assign it a class, and then comparing this prediction against the known class.



* Appeal to final tutorial with results

* Videos from Jen Golbeck

<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/gfhGfnkypCY" frameborder="0" allowfullscreen></iframe>

<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/V9PNyx5-kxM" frameborder="0" allowfullscreen></iframe>


### Notes to self

* Should we show a k-NN "decision boundary"? Perhaps for the iris dataset? NO

* Would be good to have the trade-off between using different values of *k*, showing a plot of accuracy.

* Need to adapt the discussion of true and false positives and ROC/AUC curve from our PreCollege slides. Use COVID test as an example.

* Could also discuss bootstrapping, but its not clear how we should adapt the Monte Carlo simulation aspect of bootstrapping here.

* Note somewhere that although the input variables are quantitative, the desired output is qualitative.
