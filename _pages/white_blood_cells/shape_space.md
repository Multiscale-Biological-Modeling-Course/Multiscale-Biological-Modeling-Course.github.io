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

In the [previous lesson](classification), we discussed the k-nearest neighbors algorithm (k-NN) for classifying an object with unknown class given a collection of objects with known classes. We would like to apply this approach to our example of segmented WBC images. Yet k-NN first requires each object to be represented by a feature vector, and so we need some way of converting an image of a WBC into a feature vector. In this way, we can produce a **shape space**, or an assignment of (cellular image) shapes to points in multi-dimensional space.

If you have followed the rest of this course, then you may notice that the problem of "vectorizing" a WBC image is similar to one that we have already encountered in our [module on protein structures](../coronavirus/accuracy). In that module, we vectorized a protein structure as the collection of locations of its alpha carbons.

* When Euclidean distance is introduced, point out how similar it is to RMSD.

* natural thing to do is to sample n equally spaced points [x(t), y(t)] around the outside of a shape. For example, we could take n = 360, which would sample a point every 1 degree. As a result, each shape would correspond to a vector of length 2n.

* (Note: CO uses 2000 points by default? Can this be changed?)

* The idea is that two similar shapes would be close together in the shape space, and different shapes would be far apart.

* However, the problem is the same as what we already encountered with protein structures!

* Show dissimilar shapes that would have lower RMSD. This is handled by ensuring that n is large enough -- call back to protein structures.

* Show identical shapes that would have higher RMSD/Euclidean distances

* The 2nd issue is trickier. We handled it in the protein structure discussion with Kabsch algorithm, which identified the best rotation of one shape into another that would minimize the RMSD of the resulting vectors.

* But the issue is that we don't have 2 images. We have hundreds! The best rotation of a shape when aligning against one shape may not be the same as its rotation against another shape.

* We therefore have two options:

1. Apply some algorithm like Kabsch (cite diffeomorphic model here), which will give us pairs of distances between points. We therefore must use the resulting pairs of distances to estimate a shape space from these distances. Sound familiar? This is just the lost city problem from the interlude at the start of this lesson.

2. Computing all these distances between shapes can take a really long time, so perhaps instead we can find the best rotation of all images at the same time so that the images are "aligned" against each other.

* To do so, first identify the "major axis" of each image (show figure). Define axis as a line segment through the shape's center of gravity that connects two points on the shape's boundary. The major axis is the axis of the shape that has maximum length.

* Then, rotate images so that their major axes are aligned; for example, align them so that the major axis is horizontal. Only then do we sample each image's vector, starting at one side of the major axis and proceeding clockwise.

* (There is just one problem, which is that similar shapes could be mirror images of each other. Pincus and Thierot 2007 used a reference shape and found the minimum RMSD between a shape and the reference or its inverse and the reference.)

* We now have a shape space, but there is one more pitfall.


We then used the Kabsch algorithm to compute a distance between two points so that  identify the rotation of one of the two protein structure that


[^apes]: Your author has not either.

[^Barjamovich2019]: Barjamovic B, Chaney T, Coşar K, Hortaçsu A (2019) Trade, Merchants, and the Lost Cities of the Bronze Age. The Quarterly Journal of Economics 134(3):1455-1503.[Available online](https://doi.org/10.1093/qje/qjz009)
