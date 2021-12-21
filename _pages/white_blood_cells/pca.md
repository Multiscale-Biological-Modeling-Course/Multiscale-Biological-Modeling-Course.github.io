---
permalink: /white_blood_cells/pca
title: "Reducing the Dimension of a Dataset with Principal Components Analysis"
sidebar:
 nav: "white_blood_cells"
toc: true
toc_sticky: true
image: "../assets/images/normal_adult_blood_smear.JPG"
---

## The curse of dimensionality

Things get weird in multi-dimensional space.

Consider a circle inscribed in a square, and a sphere inscribed in a cube, as shown in the figure below. The ratio of the area of the circle to the area of the square is π/4 ≈ 0.785, regardless of the side length. As for three dimensions, the ratio of the volume of the sphere to the volume of the cube is (4π/3)/8 ≈ 0.524.

[![image-center](../assets/images/600px/inscribed_circle_and_sphere.png){: .align-center}](../assets/images/inscribed_circle_and_sphere.png)
A circle inscribed in a square takes up more of the square than a sphere inscribed in a cube.
{: style="font-size: medium;"}

As we increase the number of dimensions, the volume of a sphere takes up less and less of the volume of the cube in which it is inscribed. We define an *n*-dimensional unit sphere as the set of points in *n*-dimensional space whose (Euclidean) distance from the origin is at most 1, and an *n*-dimensional cube as the set of points whose coordinates are all between 0 and 1. A precise definition of the volume of a multi-dimensional object is beyond the scope of our work, but as *n* increases, the ratio of the volume of the *n*-dimensional unit sphere to the volume of the *n*-dimensional unit cube approaches zero!

One way of interpreting this phenomenon is that the cube has more corners than a square does, and so the more dimensions that we have, the more corners in which there are to hide away from the sphere. In other words, as we increase the number of dimensions, most of the volume of an object winds up scattering outward from the object's center.

The vanishing of a sphere's volume inside of a cube in multiple dimensions may seem like an arcane fact reserved for mathematicians toiling in fluorescently lit academic offices at strange hours[^author]. Yet this observation is just one manifestation of a very deep paradigm in data science called the **curse of dimensionality**, which is a collection of properties that arise in higher dimensions that run counter to our intuition in three dimensions.

## How the curse of dimensionality affects classification

In the [previous lesson](shape_space), we discussed sampling *n* points from the boundary of an image, thus converting the image into a vector in a space with 2*n* dimensions. We argued that *n* needs to be sufficiently large to ensure that comparing the vectors of two images will give an accurate representation of how similar their shapes are. And yet the size of *n* means that we need to be careful about the curse of dimensionality.

In particular, say that we sample *k* points randomly from the interior of an *n*-dimensional unit hypercube. Let *d*<sub>min</sub> and *d*<sub>max</sub> denote the minimum and maximum distance from any of our points to the origin, respectively. As *n* grows, the ratio *d*<sub>min</sub>/*d*<sub>max</sub> heads toward 1. This mathematical result is another manifestation of points flying away from each other in multi-dimensional space, and it means that algorithms like k-NN, which classify points with unknown classes based on nearby points with known classes, may not perform well in higher-dimensional spaces in which points tend to spread out from each other.

Because of the curse of dimensionality, it makes sense to reduce the number of dimensions before performing any further analysis. We could reduce the number of features used for generating a vector, especially if we have reason to believe that some features are more informative than others. This approach will likely not work for our WBC image example, since it is not clear why one point on the boundary of our images would be inherently better than another.

Instead, we will reduce the number of dimensions of the space without removing any features from the data. As perplexing as multi-dimensional space may already seem, it may be totally unclear how we could reduce the dimensions of a space. We will therefore explain how dimension reduction can work in the context of three-dimensional space; you may be surprised that our approach is similar to something that you may already be familiar with.

## Dimension reduction with principal components analysis

We will introduce dimension reduction with the low-dimensional example of the iris flower data set that we introduced in a [previous lesson](classification) when discussing classification. In the figure below, we reproduce the plot of iris petal width against petal width, ignoring the species from which each flower derives.

[![image-center](../assets/images/600px/iris_petal_data_unlabeled.png){: .align-center}](../assets/images/iris_petal_data_unlabeled.png)
Petal width (x-axis) plotted against petal width (y-axis) for all flowers in the iris flower data set, not labeled according to species.
{: style="font-size: medium;"}

We can once again trust our eyes to notice the clear pattern: as iris petal width increases, petal length tends to increase as well.

You may surmise where this discussion is headed. If we draw a line through the center of the data (see figure below), then that line provides a reasonable estimate of a flower's petal width from its length, and vice-versa. The line, a one-dimensional object, therefore approximates a collection of two-dimensional points.

[![image-center](../assets/images/600px/iris_flowers_regression_line.png){: .align-center}](../assets/images/iris_flowers_regression_line.png)
A line passing through the plot of iris petal length against petal width. The line tells us approximately how wide we can expect an iris petal to be given the petal's width.
{: style="font-size: medium;"}

**STOP:** How can we determine the best line to approximate a collection of two-dimensional data points?
{: .notice--primary}

Long ago in math class, you may have learned about how to choose a line to best approximate a two-dimensional dataset using **linear regression**, which we will describe in what follows.

We first establish one variable as the *dependent* variable, which is typically plotted on the y-axis. In our iris flower example, the dependent variable is petal width.

Given a line, we use *L*(*x*) to denote the *y*-coordinate of the point on the line corresponding to a given *x*-coordinate. For this line, we can then define the **residual** of a data point (*x*, *y*) as the difference *y* - *L*(*x*) between its *y*-coordinate and the *y*-coordinate that the line estimates as corresponding to *x*. If a residual is positive, then the data point lies "above" the line, and if the residual is negative, then the point lies "below" the line (see figure below).

[![image-center](../assets/images/600px/residuals_y_coordinates.png){: .align-center width="300px"}](../assets/images/residuals_y_coordinates.png)
An example line with a visual depiction of residuals; the absolute value of a residual is the length of its dashed line, and the sign of a residual corresponds to whether it lies above or below the line.
{: style="font-size: medium;"}

As the line changes, so will the points' residuals. In linear regression, since we are looking for the line that best fits the data, we want the line that *minimizes* the sum of squared residuals. In other words, this line will minimize the variation between data points and the line in the *y*-direction.

However, this is not the only way to fit a line to a collection of data. Choosing petal width as the dependent variable makes sense if we want to explain petal width as a function of petal length, but it is not clear why this dependence would exist. If we were to make petal length the dependent variable instead, then linear regression would minimize the squared differences between residuals in the *x*-direction, as illustrated in the figure below.

[![image-center](../assets/images/600px/residuals_x_coordinates.png){: .align-center width="300px"}](../assets/images/residuals_x_coordinates.png)
If *x* is the dependent variable, then the residuals for a line become the horizontal distances between points and the line, and linear regression finds the line that minimizes these horizontal residuals.
{: style="font-size: medium;"}

**Note:** The linear regression line will likely differ according to which variable we choose as the dependent variable, since the quantity that we are minimizing changes. However, if there is a linear pattern in our data, then the two regression lines will be similar.
{: .notice--warning}

**STOP:** For the iris flower dataset, which of the two choices for dependent variable do you think is better?
{: .notice--primary}

The preceding question is implying that it is not clear whether petal width or petal length should be the dependent variable, because it is not clear at all how we might have any *causality* underlying the correlation between these variables. Because this causality is most likely absent, it does not make sense to prioritize one variable over the other as the dependent variable, and we should revisit how we are finding the line that best fits the data.

In particular, instead of considering residuals based on distances to the line in only the *x*-direction or the *y*-direction, we can instead examine the distances from our data points to the line, as shown in the figure below. Minimizing the sum of the squares of these distances will give us a third line fitting a dataset that treats each of the two variables equally and is called the **first principal component** of the data.

[![image-center](../assets/images/600px/residuals_projections.png){: .align-center width="300px"}](../assets/images/residuals_projections.png)
A line along with a collection of points; dashed lines show the shortest segments connecting each point to the line.
{: style="font-size: medium;"}

The first principal component is often said to be the line that "explains the most variance in the data". If there is indeed a correspondence between lily petal width and length, then the distances from each point to the first principal component correspond to variation due to randomness. By minimizing the sum of squares of these distances, we limit the amount of variation in our data that we cannot explain.

The following animated GIF shows a line rotating through a collection of data points, with the distance of each point onto the line shown in red. As the line rotates, we can see the distances to the lines become larger and smaller.

[![image-center](../assets/images/600px/pca_rotating_line_first_frame.png){: .align-center}](../assets/images/pca_rotating_line.gif)
An animated GIF showing that distances of points to their projections on a line change as the line rotates. The line of best fit is the one in which the sum of the square of these distances is minimized.  Source: amoeba, StackExchange user.[^amoeba]
{: style="font-size: medium;"}

Another benefit of finding the first principal component of a dataset is that it allows us to *reduce* the dimensionality of our dataset from two dimensions to one. We call the point on a line that is nearest to a given point the **projection** of that point onto the line; in the figure above, the projection of each point onto the line is shown in red. As a result, the collection of projections of a collection of data points onto their first principal component gives a one-dimensional representation of the data.

Dimension reduction may not seem useful at all, but it becomes more powerful as we increase the number of dimensions. With that in mind, say that we wanted to generalize the ideas above to three-dimensional space. The first principal component would offer a one-dimensional explanation of the variance in the data, but perhaps a line is insufficient to this end. Maybe the points all lie very near to a plane (a two-dimensional object), and projecting these points onto the plane would reduce the dataset to two dimensions.

Our three-dimensional minds will not permit us the intuition needed to visualize the extension of this idea into higher dimensions, but it is possible to generalize these concepts mathematically. Given a collection of *m* data points (vectors) in *n*-dimensional space, we are looking for a *d*-dimensional **hyperplane**, or an embedding of *d*-dimensional space inside *n*-dimensional space, such that the sum of squared distances from the points to the hyperplane is minimized. By taking the projections of points to their nearest point on the hyperplane, we reduce the dimension of the dataset from *n* to *d*. This approach, which is over 100 years old, is called **principal component analysis (PCA)**; a closely related concept called **singular value decomposition** was developed in the 19th century.

Although PCA is old, it is one of the fundamental tools of statistical analysis in an era defined by growing datasets. We will soon apply this approach to reduce the dimensions of our shape space; first, we make a brief aside to discuss a different biological problem in which the application of PCA provided amazing insights.

## Genotyping: PCA is more powerful than you think

Have you ever wondered how genetic testing companies  identify individuals' ethnicity from a saliva sample? After isolating the DNA in a sample, researchers identify hundreds of thousands of **markers** within the DNA, or locations in the DNA that are common sources of variation in humans. The most commonly type of marker is a single nucleotide (A, C, G, or T).

An individual's *n* markers can be converted to an *n*-dimensional vector *v* such that *v*(*i*) is 1 if the individual possesses the variant for a marker and *v*(*i*) is 0 if the individual has the more common version of the marker. (The mathematically astute reader will notice that this vector lies on one of the many corners of an *n*-dimensional hypercube.)

Because *n* is so large --- and in the early days of ancestry companies it far outnumbered the number of individual samples --- we need to be wary of the curse of dimensionality. When we apply PCA with *d* = 2 to produce a lower-dimensional projection of the data, we see some amazing results that helped launch the multi-billion dollar human ancestry industry.

The figure below shows a two-dimensional projection for individuals of known European ancestry. Even though we have condensed hundreds of thousands of dimensions to two, the projected points reconstruct the map of Europe.

[![image-center](../assets/images/600px/genotyping_europe.png){: .align-center width="500px"}](../assets/images/genotyping_europe.png)
The projection of a collection of marker vectors sampled from individuals of known European ethnicity onto the plane produced by PCA with *d* = 2. Individuals cluster by country, and neighboring countries remain nearby in the projected plane.[^Novembre2008]
{: style="font-size: medium;"}

If we zoom in on Switzerland, we can see that the countries around Switzerland tend to pull individuals toward them based on language spoken.

[![image-center](../assets/images/600px/genotyping_switzerland.png){: .align-center width="400px"}](../assets/images/genotyping_switzerland.png)
A PCA plot (*d* = 2) of individuals from Switzerland as well as nearby countries shows that an individual's mother tongue correlates with the individual's genetic similarity to representatives from a neighboring country where that language is spoken.[^Novembre2008]
{: style="font-size: medium;"}

And when we zoom farther out, we can see continental patterns emerge as well, with India standing out as its own entity. What is particularly remarkable about all these figures is that humans on the whole are genetically very similar, and yet PCA is able to find evidence of human migrations lurking within the small differences we do have.

[![image-center](../assets/images/600px/genotyping_continents.png){: .align-center width="400px"}](../assets/images/genotyping_continents.png)
A PCA plot (*d* = 2) shows clustering of individuals from Europe, Asia, Africa, and India.[^Xing2009]
{: style="font-size: medium;"}

Now that we have established the power of PCA to help us see patterns in high-dimensional biological data, we are ready to use CellOrganizer to build a shape space for our WBC images and apply PCA to this shape space to produce a lower-dimensional representation of the shape space.

**Note:** Before visiting this tutorial, we should point out that CellOrganizer is a much more flexible and powerful software resource than what is shown in the confines of this tutorial. For example, CellOrganizer not only infers properties from cellular images, it is able to build *generative* models that can form simulated cells in order to infer cellular properties. For more on what CellOrganizer can do, consult the <a href="http://www.cellorganizer.org/publications/" target="_blank">publications</a> page at its homepage.
{: .notice--warning}

[Visit tutorial](tutorial_shape_space){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

## Visualizing the WBC shape space after PCA

The figures below show the shape space of WBC images, reduced to three dimensions by PCA, and in which each image is represented by a point that is color-coded according to its cell family.

[![image-center](../assets/images/600px/cellorg_pca_graph.png){: .align-center}](../assets/images/cellorg_pca_graph.png)
The projection of each WBC shape vector onto a three-dimensional hyperplane produces this three-dimensional space, in which each image is assigned a point and color-coded according to cell family.
{: style="font-size: medium;"}

As we mentioned in the tutorial, we can also subdivide granulocytes into basophils, eosinophils, and neutrophils. Updating our labels according to this subdivision produces the following figure.

[![image-center](../assets/images/600px/cellorg_pca_graph_cell.png){: .align-center}](../assets/images/cellorg_pca_graph_cell.png)
The reduced dimension shape space from the previous figure, with granulocytes further subdivided into three classes.
{: style="font-size: medium;"}

Although images from the same family do not cluster as tightly as the iris data set --- which could be criticized as an unrealistic representation of the noise inherent in most real datasets --- we do see that images appear to be near other images of the same type. This fact should give us hope that proximity in the dimension-reduced space may help us correctly classify images of unknown type, which we will attempt to do in the next lesson.

[Next lesson](training){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

<!--
[Next lesson](training){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}
-->

[^amoeba]: [Amoeba](https://stats.stackexchange.com/users/28666/amoeba), Stack Exchange user. Making sense of principal component analysis, eigenvectors & eigenvalues, Stack exchange URL (version: 2021-08-05): [https://stats.stackexchange.com/q/140579](https://stats.stackexchange.com/q/140579)

[^author]: Much like your author.

[^Fisher1936]: Fisher RA (1936) The Use of Multiple Measurements in Taxonomic Problems. Annals of Eugenics 7(2):179-188. [Available online](https://doi.org/10.1111/j.1469-1809.1936.tb02137.x)

[^Novembre2008]: Novembre J et al (2008) Genes mirror geography within Europe. Nature 456:98–101. [Available online](https://www.nature.com/articles/nature07331)

[^Xing2009]: Xing J et al (2009) Fine-scaled human genetic structure revealed by SNP microarrays. Genome Research 19(5): 815-825. [Available online](https://dx.doi.org/10.1101%2Fgr.085589.108)
