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

## Quantifying the success of a classifier with accuracy

* Before we apply cross validation to WBC images, we need to do a better job of answering "How good did the classifier do?"

* This probably seems like an easy question to answer, but it's packed with pitfalls.

* Let's return to the iris flower dataset and see how k-NN does on this dataset.

* Show the confusion matrix since it provides an excellent way of visualizing the results.

* Define accuracy. What is the accuracy of the iris approach? Easily inferrable from the confusion matrix.

* OK, so we're done! Great! But if you're in a smarmy mood, you could design a "classifier" that produces the following confusion matrix.

* Show confusion matrix in which we classify everything as a granulocyte. What is its accuracy? 259/345 = 84.3%. However, we would never consider this to be a good approach.

* Show a different confusion matrix that has a slightly worse accuracy. But this is much better because the accuracy for each class is high -- instead of being zero for two of the classes!

* This is comparable to medical testing. We could design a test for COVID that always comes back negative. If 1% of the population is actually COVID-positive, then the test is 99% accurate! But it's a horrible test.

## Precision and recall

* To motivate other measures of the success of a classifier, let's stay in the world of a medical test like a COVID test, in which there are just two classes for each patient.

* Define true positive, true negative, false positive, and false negative.

* Show figure that illustrates this concept.

* Need hypothetical "confusion matrix" for a COVID test. (Ideally it would have less than 99% accuracy but is more practical.)

* The recall (a.k.a. sensitivity) of a test is the percentage of cases that the test correctly identifies:
#true positives /(#true positives + #false negatives)

* STOP: How could we ”trick” a test to have recall close to 1?

* Answer: Report basically everything as positive, so that there are rarely ever any false negatives.

* The precision of a test is the percentage of its positive tests that are correct:
#true positives / (#true positives + #false positives)

* STOP: How could we ”trick” a test to have precision close to 1?

* Answer: Be extremely stingy in the decisions we make, only reporting a positive test when we are 100% sure (and causing many false negatives).

* When we move toward multiple classes, we consider each class individually and assume that identifying an element as part of the class corresponds to a "positive".

* Show computations of precision and recall for the iris flower data set and each individual class.

* STOP: Compute precision and recall for the confusion matrix that is so wildly incorrect in which everything is a granulocyte.

* Conclusion is that accuracy can be helpful, but only in concert with precision and recall.

* Link to final tutorial

* Reminder in tutorial to complete the analysis for cell type as well.

## Results of applying a classifier to the WBC shape space

* Return from this and show the best results that we can obtain with k-NN.

* Also show type results.

* However, we still have a problem, which is that the approach does very poorly on monocytes.

* The problem is that the class imbalance means that it is much more rare to encounter a monocyte or lymphocyte, so although there is certainly signal in our dataset, random noise means that granulocytes might show up as nearby to a monocyte or lymphocyte.

* There are a variety of approaches to try and fix this. We could throw out some of our data, but our dataset is not that large to begin with, and it would feel weird to throw some out.

* We could also try a different classifier (we encourage you to do so). One idea is to use a cost-sensitive classifier that charges a penalty for assigning a point to the wrong class and varies this penalty depending on the correct class and where it was assigned. For example, we could charge a very large penalty for assigning a monocyte as one of the other two classes, which would force the classifier to assign more monocytes. This approach doesn't work with the k-NN classifier as currently presented because there is no way to incorporate cost into it.




### Notes to self

* We have been doing ML all along -- meme with cake?

* Would be good to have the trade-off between using different values of *k*, showing a plot of accuracy.
