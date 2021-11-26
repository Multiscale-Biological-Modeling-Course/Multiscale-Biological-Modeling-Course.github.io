---
permalink: /white_blood_cells/shape_space
title: "Building a Shape Space from a Collection of Images"
sidebar:
 nav: "white_blood_cells"
toc: true
toc_sticky: true
image: "../assets/images/cellorg_pca_graph_cell.png"
---

## Interlude: Talking monkeys, stone tablets, and lost cities

If you have not yet found the time to watch the 1968 movie *Planet of the Apes*, we will spoil its <a href="https://www.youtube.com/watch?v=XvuM3DjvYf0" class="popup-youtube" target="_blank">ending</a> for you. Charlton Heston's character finds the Statue of Liberty protruding from the sand and has the epiphany that the mysterious planet he has come across was just Earth all along.

Imagine that you are a traveler to Earth and come across the ruins of New York. You find an old road atlas that has driving distances between cities (in miles), shown in the table below. Can you use this atlas to find the other cities in the table? In an [earlier module](chemotaxis/home), we had a Lost Immortals problem; this problem, of inferring the locations of cities given the distance between them, we call "Lost Cities".

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

## Vectorizing a segmented image

In the [previous lesson](classification), we discussed the k-nearest neighbors algorithm (k-NN) for classifying an object with unknown class given a collection of objects with known classes. We would like to apply this approach to our example of segmented WBC images. Yet k-NN first requires each object to be represented by a feature vector, and so we need some way of converting an image of a WBC into a feature vector. In this way, we can produce a **shape space**, or an assignment of (cellular image) shapes to points in multi-dimensional space.

If you have followed the rest of this course, then you may notice that the problem of "vectorizing" a WBC image is similar to one that we have already encountered in our [module on protein structures](../coronavirus/accuracy). In that module, we vectorized a protein structure as the collection of locations of its alpha carbons. Specifically, given a protein structure *S*, we sampled the *n* alpha carbons from *S*, producing a vector  *s* = (*s*<sub>1</sub>, ..., *s*<sub><em>n</em></sub>), where *s*<sub><em>i</em></sub> is the position of the *i*-th alpha carbon of *S*.

We will apply the same idea to vectorize our segmented WBCs. Specifically, given a binarized image *I*, we will first center the image so that its center of mass is at the origin, and then sample *n* points from the boundary of the cell nucleus to produce a **shape vector** *s* = (*s*<sub>1</sub>, ..., *s*<sub><em>n</em></sub>), where *s*<sub><em>i</em></sub> is a point with coordinates (*x*(*i*), *y*(*i*)).

**Note:** Both isolating the boundary of a binarized image, and sampling points from this boundary to ensure that points are similarly spaced, are challenging tasks that are outside the scope of our work here, and which we will let CellOrganizer handle for us.
{: .notice--warning}

**STOP:** What is the dimension of the space in which the vector *s* lies? (Hint: the answer is not *n*.)
{: .notice--primary}

To answer the preceding question, note that the feature vector of a binarized image has 2*n* elements, two corresponding to each of the coordinates of its *n* sampled points. However, working with this vector is less intuitive than what we have done in the past, and so we will think of the vector as having length *n*, with each element having two coordinates.

Furthermore, to determine the "distance" between two images' shape vectors, we will use our old friend root mean square deviation (RMSD), which is very similar to the Euclidean distance introduced in the previous lesson. Recall from the [module on protein structures](../coronavirus/accuracy) that RMSD is the square root of the average squared distance between corresponding points in the vectors. More precisely, given shape vectors *s* and *t*, the RMSD between these vectors is

$$\text{RMSD}(s, t) = \sqrt{\dfrac{1}{n} \cdot (d(s_1, t_1)^2 + d(s_2, t_2)^2 + \cdots + d(s_n, t_n)^2)}\,. $$

## Ensuring that vectorization of images preserves (dis)similarity

After vectorizing our WBC images, we hope that images of similarly shaped nuclei will have low RMSD and that the more dissimilar two nuclei become, the higher the RMSD of their shape vectors. The potential issues with this assumption are the same as those encountered when discussing protein structures.

On the one hand, we could have very dissimilar shapes with low RMSD, such as those shown in the figure below. However, this issue can be easily resolved by ensuring that the number of points (*n*) that we choose is sufficiently high. For this reason, CellOrganizer uses *n* = 1000 by default for cell nuclei.

[![image-center](../assets/images/600px/circle_square_undersampling.png){: .align-center width="300px"}](../assets/images/circle_square_undersampling.png)
A circle inscribed within a square. Sampling of the four points where the shapes intersect will give a flawed estimate of zero for RMSD.
{: style="font-size: medium;"}

On the other hand, we could have very similar shapes whose RMSD winds up being high. For example, recall the shapes in the figure below, which are identical, but one has been flipped and rotated. If we were to vectorize these shapes as they are now in the same way (say, by starting at the top of the shape and proceeding clockwise), then we would obtain two vectors with high RMSD.

[![image-center](../assets/images/600px/two_shapes.png){: .align-center}](../assets/images/two_shapes.png)
Two identical shapes, with one shape flipped and rotated. Vectorizing these shapes without first correctly aligning them will produce two vectors with high RMSD.
{: style="font-size: medium;"}

We handled this issue in our work on protein structure comparison by introducing the Kabsch algorithm, which identified the best rotation of one shape into another that would minimize the RMSD of the resulting vectors.

And yet what makes our work here more complicated is that we are not comparing just two shape vectors in our example of WBC images. We will have shape vectors deriving from hundreds of images!

## Inferring a shape space from pairwise distances

One attempt to build a shape space for a collection of binarized images is to apply the Kabsch algorithm, which includes a step in which the best rotation is found, to every pair of images. As a result, we would obtain the RMSD between every pair of images, and our goal is to use the collection of all these "distances" to build a shape space of our images.

**Note:** CellOrganizer applies a related approach to the Kabsch algorithm for computing a cellular distance, called the **diffeomorphic distance**[^Rohde2008], which can be thought of as determining the amount of energy required to deform one shape into another.
{: .notice--warning}

We hope that this problem sounds familiar, as it is Lost Cities problem from the start of this lesson in disguise. The pairs of distances between images correspond to a road atlas, and placing images into a shape space corresponds to locating cities.

Statisticians have devised a collection of approaches to solve the Lost Cities problem, the most common of which are called multi-dimensional scaling. The fundamental idea is to assign points to *n*-dimensional space such that the distances between points in this space approximately resemble a collection of distances between pairs of objects in some dataset (which in our case is cellular images).

**STOP:** If we have *m* cellular images, then how many times will we need to compute the distance between a pair of images?
{: .notice--primary}

## Aligning many images concurrently

Unfortunately, if we have a large dataset, computing the distance between every pair of objects can become very time-intensive, even with a powerful computer. Instead, we will rotate all images concurrently so that the images are all aligned against each other before we begin. After this alignment, we can then vectorize all the images starting at the same position to ensure that two shape vectors have high RMSD when (and only when) they derive from dissimilar shapes.

We can align a collection of images by first identifying the **major axis** of each image, which is the line segment crossing through the image's center of mass that is as long as possible. The figure below shows the major axis for a few similar shapes -- they may not look similar because they have not been aligned to reveal these similarities.

[![image-center](../assets/images/600px/three_similar_shapes_unaligned.png){: .align-center}](../assets/images/three_similar_shapes_unaligned.png)
Three similar shapes, with their major axes highlighted in gray.
{: style="font-size: medium;"}

When we align the major axes of similar shapes, their similarities will overlap, as shown in the figure below. These images are ready to be vectorized (say, starting from the point on the right side of an image's major axis and proceeding clockwise). The resulting vectors will have low RMSD because corresponding points on the shapes are nearby.

[![image-center](../assets/images/600px/three_similar_shapes_aligned.png){: .align-center width="300px"}](../assets/images/three_similar_shapes_aligned.png)
Aligning the three images from the previous figure so that their major axes overlap allows us to see similarities between the shapes as well as build consistent shape vectors for them.
{: style="font-size: medium;"}

**Note:** When we align images along their major axes, we need to ensure that a shape's mirror image is not a better alignment. Handling this issue is beyond the scope of our work here but is discussed in the literature[^Pincus2007].
{: .notice--warning}

We can now generate a shape space for a collection of binarized cellular images. To review, after aligning the images along their major axis, we sample *n* points from the boundary of each image. These points can be translated into a vector of 2*n* coordinates, which is a point in a very high-dimensional space. We now can construct our desired shape space for a collection of images, but one more pitfall remains, which we will discuss in the next lesson.

[Next lesson](pca){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

[^Barjamovich2019]: Barjamovic B, Chaney T, Coşar K, Hortaçsu A (2019) Trade, Merchants, and the Lost Cities of the Bronze Age. The Quarterly Journal of Economics 134(3):1455-1503.[Available online](https://doi.org/10.1093/qje/qjz009)

[^Pincus2007]: Pincus Z, Theriot J (2007) Comparison of quantitative methods for cell-shape analysis. Journal of Microscopy 227(Pt 2):140-56.[Available online](https://doi.org/10.1111/j.1365-2818.2007.01799.x)

[^Rohde2008]: Rohde G, Ribeiro A, Dahl K, Murphy F (2008) Deformation-based nuclear morphometry: capturing nuclear shape variation in hela cells. Cytometry Part A 73:341–350.[Available online](https://doi.org/10.1002/cyto.a.20506)
