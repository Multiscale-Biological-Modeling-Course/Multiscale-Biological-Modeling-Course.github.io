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

If you have not yet managed to see the 1968 movie *Planet of the Apes*[^apes], we will spoil its <a href="https://www.youtube.com/watch?v=XvuM3DjvYf0" class="popup-youtube" target="_blank">ending</a> for you. Charlton Heston's character finds the Statue of Liberty protruding from the sand and has the epiphany that the mysterious planet he has come across was just Earth all along.

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

[![image-center](../assets/images/600px/circle_square_undersampling.png){: .align-center}](../assets/images/circle_square_undersampling.png)
A circle inscribed within a square. Sampling of the four points where the shapes intersect will give a flawed estimate of zero for RMSD.
{: style="font-size: medium;"}

On the other hand, we could have very similar shapes whose RMSD winds up being high. For example, recall the shapes in the figure below, which are identical, but one has been flipped and rotated. If we were to vectorize these shapes as they are now in the same way (say, by starting at the top of the shape and proceeding clockwise), then we would obtain two vectors with high RMSD.

Test popup vertical

<a class="image-popup-vertical-fit" href="../assets/images/two_shapes.png" title="Two identical shapes, with one shape flipped and rotated. Vectorizing these shapes without first correctly aligning them will produce two vectors with high RMSD.">
	<img src="../assets/images/600px/two_shapes.png">
</a>
Two identical shapes, with one shape flipped and rotated. Vectorizing these shapes without first correctly aligning them will produce two vectors with high RMSD.
{: style="font-size: medium;"}

[![image-center](../assets/images/600px/two_shapes.png){: .align-center}](../assets/images/two_shapes.png)
Two identical shapes, with one shape flipped and rotated. Vectorizing these shapes without first correctly aligning them will produce two vectors with high RMSD.
{: style="font-size: medium;"}

We handled this issue in our work on protein structure comparison by introducing the Kabsch algorithm, which identified the best rotation of one shape into another that would minimize the RMSD of the resulting vectors.

And yet what makes our work here more complicated is that we are not comparing just two shape vectors. We have hundreds of images!

* But the issue is that we don't have 2 images. We have hundreds! The best rotation of a shape when aligning against one shape may not be the same as its rotation against another shape.

* We therefore have two options:

1. Apply some algorithm like Kabsch (cite diffeomorphic model here), which will give us pairs of distances between points. We therefore must use the resulting pairs of distances to estimate a shape space from these distances. Sound familiar? This is just the lost city problem from the interlude at the start of this lesson.

2. Computing all these distances between shapes can take a really long time, so perhaps instead we can find the best rotation of all images at the same time so that the images are "aligned" against each other.

* To do so, first identify the "major axis" of each image (show figure). Define axis as a line segment through the shape's center of mass that connects two points on the shape's boundary. The major axis is the axis of the shape that has maximum length.

* Then, rotate images so that their major axes are aligned; for example, align them so that the major axis is horizontal. Only then do we sample each image's vector, starting at one side of the major axis and proceeding clockwise.

* (There is just one problem, which is that similar shapes could be mirror images of each other. Pincus and Thierot 2007 used a reference shape and found the minimum RMSD between a shape and the reference or its inverse and the reference.)

* We now have a shape space, but there is one more pitfall.




## Notes to self

* Can the default value of n = 1000 sampled points for nuclear images be changed?


[^apes]: Your author has not either.

[^Barjamovich2019]: Barjamovic B, Chaney T, Coşar K, Hortaçsu A (2019) Trade, Merchants, and the Lost Cities of the Bronze Age. The Quarterly Journal of Economics 134(3):1455-1503.[Available online](https://doi.org/10.1093/qje/qjz009)
