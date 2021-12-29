---
permalink: /white_blood_cells/training
title: "Applying a Classifier to a Cellular Shape Space"
sidebar:
 nav: "white_blood_cells"
toc: true
toc_sticky: true
image: "../assets/images/normal_adult_blood_smear.JPG"
author_profile: true # add author to page
gallery:
  - url: ../assets/images/600px/neutrophil.png
    image_path: ../assets/images/neutrophil.png
    alt: "Neutrophil"
    title: "A specific subtype of granulocyte called a neutrophil, illustrating the multilobular structure of this WBC family."
  - url: ../assets/images/600px/monocyte.png
    image_path: ../assets/images/monocyte.png
    alt: "Monocyte"
    title: "A monocyte with a single, irregularly-shaped nucleus."
  - url: ../assets/images/600px/lymphocyte.png
    image_path: ../assets/images/lymphocyte.png
    alt: "Lymphocyte"
    title: "A lymphocyte with a small, round nucleus."
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

## A first attempt at quantifying the success of a classifier

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

For our hypothetical COVID confusion matrix in the figure above, the recall is 1,000/1,500 = 0.667. The recall ranges from 0 to 1, with larger values indicating that the test is "sensitive", meaning that it can identify true positives out of patients who actually are positive.

The **specificity** of a test is an analogous metric for patients whose actual status is negative. It measures the ratio of true negatives to the sum of true negatives and false positives (found by summing the second row of our confusion matrix). For our hypothetical COVID test confusion matrix, the test specificity is 198,000/(198,000 + 2,000) = 0.99.

Finally, the **precision** of a test is the percentage of positive tests that are correct, formed by taking the ratio of true positives to the sum of true positives and false positives (found by summing the first column of the confusion matrix). For example, the precision of our hypothetical COVID test is 1,000/(1,000 + 2,000) = 0.333.

**STOP:** How could we trick a test to have recall close to 1? What about specificity? Precision?
{: .notice--primary}

Just like accuracy, all three of the metrics introduced in this section are not perfect, and can be fooled by silly tests that, for example, always return positive or negative. However, a frivolous test achieving all of these metrics at the same time is not possible. Therefore, in practice we may examine all of these metrics, as well as accuracy, when assessing the quality of a classifier.

**STOP:** Compute the recall, specificity, and precision of the dummy COVID test that always returns negative.
{: .notice--primary}

You may find all these terms confusing and difficult to keep straight. You are not alone! An entire generation of scientists make copious trips to the <a href="https://en.wikipedia.org/wiki/Precision_and_recall#Definition_(classification_context)" target="_blank">Wikipedia page</a> describing these metrics as well as others. It's called a confusion matrix for a reason…

{% include video id="6gJdf7LyGpg" provider="youtube" %}

{% include video id="bv26dLnbi9g" provider="youtube" %}

{% include video id="1G1dfLF8-jo" provider="youtube" %}

## Extending classification metrics to multiple classes

As we return to our example of classifying images of WBC nuclei, we need to extend the ideas discussed in the previous section to handle the case of multiple classes. To do so, we consider each class individually and treat this class as the "positive" case.

To see how this works, we return to our iris flower data set. Say that we wish to compute the recall, specificity, and precision for *Iris virginica* using the k-NN confusion matrix that we generated, reproduced below.

| *Iris setosa* | *Iris versicolor* | *Iris virginica* |
| :---: |  :----: | :---: |
| 50 | 0 | 0 |
| 0 | 47 | 3 |
| 0 | 4 | 46 |

We can simplify this confusion matrix into a two-class confusion matrix that combines the two classes corresponding to the other two species. The figure below shows this smaller confusion matrix, with *Iris virginica* moved to the first row and column.

| *Iris virginica* | *Iris setosa* and *Iris versicolor* |
| :---: |  :----: |
| 46 | 4 |
| 3 | 47 |

This simplification allows us to compute the recall, specificity, and precision for ths classifier with respect to *Iris virginica*.

* recall: 46/(46+4) = 0.92
* specificity: 47/(3+47) = 0.94
* precision: 46/(46+3) = 0.939

**STOP:** Compute the recall, specificity, and precision for each of the other two iris species using the above confusion matrix.
{: .notice--primary}

Now that we understand more about how to quantify the performance of a classifier, we are now ready to apply k-NN to our WBC shape space (post-PCA of course!) and assess how well it performs.

[Visit tutorial](tutorial_image_classification){: .btn .btn--info .btn--large}
{: style="font-size: 100%; text-align: center;"}

## Results of applying a classifier to the WBC shape space

If we run k-NN on our shape space, with *d* (the number of dimensions to use for PCA) equal to 10, *k* (the number of nearest neighbors to consider when assigning a class) equal to 1, and *f* (the number of folds) equal to 10, then we obtain the confusion matrix shown below, which has an accuracy of 84.3% and a weighted average of precision and recall over all three classes of 0.857 and 0.843, respectively.

| Granulocyte | Monocyte | Lymphocyte |
| :---: |  :----: | :---: |
| 259 | 9 | 23 |
| 14 | 6 | 1 |
| 5 | 2 | 26 |

These three values of *d*, *k*, and *f* appear to be close to optimal, and a natural question is to ask why this is the case.

We start with *d*, the dimension of the hyperplane used by PCA to reduce the dimension of the data. If we set *d* too large, then once again the curse of dimension strikes. Using *d* = 344 produces the baffling confusion matrix below, in which every element in the space is closest to a lymphocyte.

| Granulocyte | Monocyte | Lymphocyte |
| :---: |  :----: | :---: |
| 0 | 0 | 291 |
| 0 | 0 | 21 |
| 0 | 0 | 33 |

And using *d* = 3, we obtain better results, but we have reduced the dimension so much that we start to lose the signal in the data.

| Granulocyte | Monocyte | Lymphocyte |
| :---: |  :----: | :---: |
| 257 | 15 | 19 |
| 16 | 5 | 0 |
| 20 | 0 | 13 |

As for *k*, it may seem that taking more neighbors into account would be helpful. But because there are so many granulocytes in the data, the effects of random noise will mean that as we increase *k*, we threaten to start incorporating granulocytes that just happen to be nearby in the dataset. For example, when *k* is equal to 5, every monocyte is assigned as a granulocyte, as shown below.

| Granulocyte | Monocyte | Lymphocyte |
| :---: |  :----: | :---: |
| 264 | 1 | 26 |
| 21 | 0 | 0 |
| 7 | 0 | 26 |

The question of the number of folds, *f*, is trickier. Increasing this parameter does not change the confusion matrix much, but if *f* is too small, then we ignore too many known classes of our data.

However, we still have a problem, which is that although k-NN can identify granulocytes and lymphocytes quite well, it performs poorly on monocytes because of the **class imbalance** in our data. We have so few monocytes that it is rare to encounter another one in the shape space.

Statisticians have devised a variety of approaches to address class imbalance. We could **undersample** our data by excluding a random sample of the granulocytes. Undersampling works better when we have a huge amount of data, and in this case, it would risk plummeting the classifier's performance on granulocytes.

We could also try a different classifier (and in the tutorial we encouraged you to do so). One idea is to use a **cost-sensitive classifier** that charges a variable penalty for assigning an element to the wrong class, and then minimizes the total cost over all elements. For example, classifying a monocyte as a granulocyte would receive a greater penalty than classifying a granulocyte as a monocyte. Such a classifier would help increase the number of images that are classified as monocytes, although it would also incorporate incorrectly classified monocytes as well.

Yet ultimately, k-NN outperforms much more advanced classifiers on this dataset. It may be a relatively simple approach, but it also is a great match for classifying images within a WBC shape space, since proximity in this space indicates that two WBCs belong to the same family.

## Limitations of our WBC image classification pipeline

This is not to say that we cannot make improvements to our algorithm. After all, our model requires a number of steps from the intake of data to their ultimate classification, which provides several potential failure points.

We will start with data. Algorithms are beautiful, but if you have great data, then a very simple approach will probably give you a great result, and if you have bad data, then no amount of algorithmic wizardry will help you. An example of "good data" is the iris flower dataset; the flowers were studied very exactly, with no mistakes, and the features chosen very clearly differentiate the elements in the data set. Although this dataset provides a great motivating example, the pattern in the data is so obvious that it almost seems silly to run a classifier on it.

In our case, we have very low resolution WBC images, and not many of them. We consider the limitations of the data to be a feature of this chapter, not a bug, as they allow us to focus on what is a very common concern in data analysis. A natural thing to do now would be to look for a larger, higher resolution dataset with less class imbalance.

The next failure point in our model is our segmentation pipeline. Earlier in the module, we saw that this pipeline did not perfectly segment the nucleus from every image, sometimes capturing only a part of the nucleus. Perhaps we could devise a test for incorrect segmentations, excluding an image if the segmented nucleus is below some threshold size.

Then, we handed off the segmented images to CellOrganizer to build a shape space from the vectorized boundaries of the nuclei. However, the low resolution of the nuclear images will mean that the vectorization of each nuclear image will be noisy.

But even if we use higher resolution images and adjust our segmentation pipeline, we are still only building a model from the *shape* of the nucleus. We didn't even take the size of the nucleus into account! If we return to the three sample WBC images from the introduction, reproduced in the figure below, then we can see that the lymphocyte nucleus is much smaller than the other two nuclei, which is true in general. To address this concern, when vectorizing the images, we could devote one of the coordinates of each vector to the size (in pixels) of the segmented nucleus. This change would hopefully help improve the accuracy of our classifier, especially on lymphocytes.

{% include gallery caption="Three images from the blood cell image dataset showing a granulocyte (left), a monocyte (center), and a lymphocyte (right)." %}

**STOP**: What other features could we extract from our images?
{: .notice--primary}

Finally, we come to the classification algorithm itself. We used k-NN because it is intuitive to newcomers, but perhaps a more complicated algorithm could peer deeper into our dataset to find hidden signals.

It is a testament to the methods discussed in this module that we were able to obtain even moderately good results given the quality and size of our data, as well as the fact that we only took into account the shape of each cell's nucleus. It also leads us to wonder: how much better could we do? In this module's conclusion, we discuss the foundations of the approach that constitute the best known solution to WBC image classification.

[Next lesson (coming soon!)](){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

[^Mistry]: Mistry DA, Wang JY, Moeser ME, Starkey T, Lee LYW 2021. A systematic review of the sensitivity and specificity of lateral flow devices in the detection of SARS-CoV-2. BMC Infectious Diseases 21(1):828. [Available online](https://doi.org/10.1186/s12879-021-06528-3)
