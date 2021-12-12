---
permalink: /white_blood_cells/training
title: "Training a Classifier"
sidebar:
 nav: "white_blood_cells"
toc: true
toc_sticky: true
image: "../assets/images/normal_adult_blood_smear.JPG"
---

* Once we have our k-NN approach, the question is how it performs on a collection of new data. That is, how often is the approach correct?

* Ideally we would build a model on our given dataset, and then determine how it performs on a collection of new data, but we don't have more data!

* Since our data are fixed, and we know the correct classification of each image, we could exclude some *subset* of the data, and then ask how well we correctly predict the classes that we left out. This dataset that we left out is called the "validation set".

* STOP: Why is this approach bad?

* The issue with this excluding a subset is that it is unclear which subset we should use. Because of random error, maybe one subset leads to 80% accurate predictions, and another subset is 70% accurate.

* Ideally, we would have an approach that does two things. One, that is not so subject to random variation, and two, that would use *all* of the data to help build our model.

* One idea: leave one out cross validation. For each data point, pretend that we don't know its label. How accurate is the predicted class?

* A related idea: divide the data into *k* equally-sized groups, called *folds*. Ignore the classes of all of these points and determine how well we do on all unkown points.

* Note: This idea is more useful for more complicated classifiers that take a long time to run.



* Appeal to final tutorial with results

* Videos from Jen Golbeck

<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/gfhGfnkypCY" frameborder="0" allowfullscreen></iframe>

<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/V9PNyx5-kxM" frameborder="0" allowfullscreen></iframe>


### Notes to self

* Should we show a k-NN "decision boundary"? Perhaps for the iris dataset?

* Would be good to have the trade-off between using different values of *k*, showing a plot of accuracy.

* Need to adapt the discussion of true and false positives and ROC/AUC curve from our PreCollege slides. Use COVID test as an example.

* Could also discuss bootstrapping, but its not clear how we should adapt the Monte Carlo simulation aspect of bootstrapping here.

* Note somewhere that although the input variables are quantitative, the desired output is qualitative.
