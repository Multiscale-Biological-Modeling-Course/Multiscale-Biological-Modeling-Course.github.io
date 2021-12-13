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

Before we can apply cross validation to WBC images, we should know how to answer the question, "How well did our classifier do?" This question may seem easy to answer, but we will see that pitfalls are lurking.

Let us return to our example iris flower dataset. The table below shows the result of applying k-NN to this dataset, using *k* = 1 and ten folds (meaning that since there are 150 flowers, each fold contains 15 flowers). This table is called a **confusion matrix**, because it makes it easy to see if we are "confusing" the assignment of a flower to the wrong class.

To read a confusion matrix, consider the table below. Rows correspond to true classes, and columns correspond to predicted classes. For example, consider the second row, which corresponds to the flowers that we know are *Iris versicolor*. Our classifier predicted that none of these flowers were *Iris setosa*, that 47 of these flowers were *Iris versicolor*, and that three of the flowers were *Iris virginica*. Therefore, it correctly predicted the class of 47 of the 50 total *Iris versicolor* flowers.

| *Iris setosa* | *Iris versicolor* | *Iris virginica* |
| :---: |  :----: | :---: |
| 50 | 0 | 0 |
| 0 | 47 | 3 |
| 0 | 4 | 46 |

**STOP:** Why did we not need to apply a dimension reduction like PCA to the iris flower dataset before applying a classifier?
{: .notice--primary}

We define the **accuracy** of a classifier as the fraction of objects that it correctly identifies out of the total. The accuracy is easily computable from the confusion matrix; for the above iris flower exmap k-NN has an accuracy of (50 + 47 + 46)/150 = 95.3%.

It may seem that we are finished, that the accuracy gives us everything we need. But if you were in a smarmy mood, then you might design a classifier that produces the following confusion matrix for our WBC dataset.

| Granulocyte | Monocyte | Lymphocyte |
| :---: |  :----: | :---: |
| 291 | 0 | 0 |
| 21 | 0 | 0 |
| 33 | 0 | 0 |

**STOP:** What is the accuracy of this classifier?
{: .notice--primary}

Your clown classifier blindly assigned every image in the dataset to be a granulocyte. But its accuracy is 84.3%! To make matters worse, below is a confusion matrix for a hypothetical classifier on the same dataset that is clearly better. And yet its accuracy would be only 79.7%.

| Granulocyte | Monocyte | Lymphocyte |
| :---: |  :----: | :---: |
| 232 | 25 | 34 |
| 2 | 17 | 2 |
| 6 | 1 | 26 |

This particular issue arises because our dataset has *imbalanced* classes, a common issue in data science. As a result, only reporting a classifier's accuracy may be misleading if the classifier does not correctly predict many members from smaller classes.

For another example, say that we design a COVID test that always comes back negative. If 1% of the population at a given point in time is COVID-positive, then we could report that our test is 99% accurate. But we would fail to get this test approved for widespread use because it performs horribly on COVID-positive individuals.

**STOP:** What other metrics could we use for measuring the success of a classifier?
{: .notice--primary}

## Recall, specificity, and precision of a medical test

To motivate our discussion of other measures of classifier success, let's stay in the realm of medical tests, which can be thought of as two-class classifiers.

First, we define some terms. A **true positive** is a positive test in a patient that has the disease; a **false positive** is a positive test in a patient that does not have the disease; a **true negative** is a negative test in a patient that does not have the disease; and a **false negative** is a negative test in a patient that does have the disease. The locations of these four terms in a confusion matrix are shown in the table below.

[![image-center](../assets/images/600px/medical_test_confusion_matrix.png){: .align-center}](../assets/images/medical_test_confusion_matrix.png)
A visualization of where true positives, true positives, true negatives, and false negatives are found in the confusion matrix corresponding to a medical test. Correct predictions are shown in green, and incorrect predictions are shown in red.
{: style="font-size: medium;"}

To illustrate our points, we will use the hypothetical confusion matrix for a COVID test shown in the figure below. We used a hypothetical confusion matrix because results for COVID tests, even the same type of test like a lateral flow test, can vary wildly.[^Mistry]

[![image-center](../assets/images/600px/medical_test_confusion_matrix_hypothetical.png){: .align-center}](../assets/images/medical_test_confusion_matrix_hypothetical.png)
A hypothetical COVID test confusion matrix.
{: style="font-size: medium;"}

**STOP:** What is the accuracy of this test? What about the accuracy of a test that returns negative for everyone in the population?
{: .notice--primary}

Once again, this test has lower accuracy than one that returns negative for all individuals, but now we will provide metrics for which it is superior.

The **recall** (a.k.a. **sensitivity**) of a two-class classifier is the percentage of positive cases that the test correctly identifies, or the ratio of true positives over the sum of the true positives and false negatives (found by summing the top row of the confusion matrix).

For our hypothetical COVID confusion matrix in the figure above, the recall is 1,000/1,500 = 66.7%. The recall ranges from 0 to 1, with larger values indicating that the test is "sensitive", meaning that it can identify true positives out of patients who actually are positive.

**STOP:** How could we trick a test to have recall close to 1?
{: .notice--primary}

The **specificity** of a test is an analogous metric for patients whose actual status is negative. It measures the ratio of true negatives to the sum of true negatives and false positives (found by summing the second row of our confusion matrix). For our hypothetical COVID test confusion matrix, the test specificity is 198,000/(198,000 + 2,000) = 99%.

**STOP:** How could we trick a test to have specificity close to 1?
{: .notice--primary}

Finally, the **precision** of a test is the percentage of positive tests that are correct, formed by taking the ratio of true positives to the sum of true positives and false positives (found by summing the first column of the confusion matrix). For example, the precision of our hypothetical COVID test is 1,000/(1,000 + 2,000) = 33.3%.

**STOP:** How could we trick a test to have precision close to 1?
{: .notice--primary}

Just like accuracy, all three of the metrics introduced in this section are not perfect, and can be fooled by silly tests that, for example, always return positive or negative. However, a frivolous test achieving all of these metrics at the same time is not possible.

**STOP:** Compute the recall, specificity, and precision of the dummy COVID test that always returns negative.
{: .notice--primary}

You may find all these terms confusing and difficult to keep straight. You are not alone!

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Here is a quote from Trump:<br><br>"I tested very positively in another sense so— this morning. Yeah. I tested positively toward negative, right. So. I tested perfectly this morning. Meaning I tested negative."<a href="https://twitter.com/kylegriffin1/status/1263518696309313537">November 6, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

An entire generation of scientists agree with you and make copious trips to the <a href="https://en.wikipedia.org/wiki/Precision_and_recall#Definition_(classification_context)" target="_blank">Wikipedia page</a> describing these metrics as well as others.

## Extending metrics to multiclass classifiers

* When we move toward multiple classes, we consider each class individually and assume that identifying an element as part of the class corresponds to a "positive".

* Show computations of precision and recall for the iris flower data set and each individual class.



**STOP:** Compute the recall, specificity, and precision for the confusion matrix that labels everything a granulocyte.
{: .notice--primary}

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

[^Mistry]: Mistry DA, Wang JY, Moeser ME, Starkey T, Lee LYW 2021. A systematic review of the sensitivity and specificity of lateral flow devices in the detection of SARS-CoV-2. BMC Infectious Diseases 21(1):828. [Available online](https://doi.org/10.1186/s12879-021-06528-3)

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">🎨 Finally got around to adding all my <a href="https://twitter.com/procreateapp">@procreateapp</a> creations with time lapse videos <a href="https://t.co/1nNbkefC3L">https://t.co/1nNbkefC3L</a> <a href="https://t.co/gcNLJoJ0Gn">pic.twitter.com/gcNLJoJ0Gn</a></p>&mdash; Michael Rose (@mmistakes) <a href="https://twitter.com/mmistakes/status/662678050795094016">November 6, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
