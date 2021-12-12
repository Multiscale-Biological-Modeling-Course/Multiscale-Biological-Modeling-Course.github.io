---
permalink: /white_blood_cells/conclusion
title: "Conclusion: Toward Deep Learning"
sidebar:
 nav: "white_blood_cells"
toc: true
toc_sticky: true
image: "../assets/images/normal_adult_blood_smear.JPG"
---

* Give overview of deep learning on high level

* local search! Tie back to the lost immortals.

* Note that this takes tons of resources.

* Call back to AlphaFold and how disappointing it is that the models just appear to work without any higher level understanding provided (not interpretable).

* Cite the state of the art for WBC analysis. And yet this is often still done manually because of liability. Major issue in modern medicine of the ramifications of turning our lives over to algorithms.

* Tradeoff between flexibility and interpretability. k-NN is inflexible but very interpretable. DL is extremely flexible -- the number of different functions that it could "compute" are huge -- but mystical at times, so that it is difficult to understand and know how to change the model when needed.

* Point out other neat applications of CellOrganizer. Like using a Ferrari to drive to the supermarket.

* Point to exercises

* Thank you!


## Notes to self

* Can the default value of n = 1000 sampled points for nuclear images be changed?

* Need at some point to define binarization and appeal to that tutorial separately

* Also need to define a confusion matrix

## Papers

Generating new shapes in our “Shape Space”

•	(Murphy 2015) “Models need to be generative rather than descriptive” – example given is that apples and oranges can be distinguished based on color, but this doesn’t work if we want to build a model of an apple to understand it.
•	The next point is how to synthesize a shape corresponding to a given point in the space where the shapes are embedded.  The idea is to “deform the known shapes that form the simplex containing that point) – need Peng et al., 2009 for this approach.  The key point of this approach is that we only know how to deform along a given path if we know both endpoints.  So how can we do get to a new point P only along known paths?
•	One idea is to just pick the three closest points to P that we know.  But the problem becomes that these points may not “enclose” P.  If P is in the triangle formed by these three points, then we can walk from one point x_3 through P to the point where it lands at x’ on the line connecting the other two x_1 and x_2.  This means that we can walk from x_1 and x_2 until we hit the shape x’, then walk toward x_3 until we hit P.  Problem solved!
•	However, this relies on our ability to always know what three points to choose so that P is in the interior of the triangle formed by them.  This is the problem of triangulation of a space.  (It’s tetrahedrons in 3-D and there are n-D analogues as well.)
•	The triangulation that we need is called Delaunay triangulation.  See Wikipedia page for a sample algorithm on how we can triangulate a space based on this approach.  (Would be cool to give students some small exercises on doing this.)
•	(Note to self: CellOrganizer takes a long time to compute new shapes. We should investigate the possibility of using some other program to visualize and perhaps speed up the computation of deformation distance between two shapes.  One possibility is Deformetrica.)

 

Murphy 2015, “Building cell models and simulations from microscope images”


Generative potentially models useful in six ways:
1.	“would capture the underlying spatial relationships in a collection of images”
2.	“models learned separately for different organelles or structures … could potentially be combined to synthesize a cell containing all of those organelles in the same cell (assuming that the organelles do not affect each other’s position or shape).” – Note that this is later invalidated by the Johnson paper because there is correlation.
3.	“Such models could be used to predict the distribution of an organelle in a new cell type”
4.	“Could provide a better framework for connecting morphology to the mechanisms that produce it, since biochemistry could be directly linked to the parameters of the generative model”
5.	“databases of generative spatial models could provide an important complement to Genome Ontology terms”
6.	“instances drawn from generative models could be used as the basis for spatially realistic simulations of cellular biochemistry”.  Appeals to MCell and others but point out that these require small number of images and manual manipulation.

Odds are we would focus on #1 and #2 before others here.

Criteria for generative models, proposed in Zhao and Murphy 2007:
1.	“automated: learnable automatically from images”
2.	“generative: able to synthesize new, simulated images displaying the specific pattern(s) learned from images”
3.	“statistically accurate: able to capture pattern variation between cells:”
4.	“compact: representable by a small number of parameters and communicable with significantly fewer bits than the training images.

Point #4 is important to mention here in terms of “why do we not work directly with the images?” and point out that their enormous size means that we need to cut down the runtime where possible.

The tradeoff between #3 and #4 is a common concern in modeling.  Murphy compares to bias-variance tradeoff; does it fit here though?

Figure 1: flow chart of how Cell Organizer works below  



For cell and nuclear shape, it makes sense to build a model jointly (see Johnson paper for demonstration of correlation between two shapes).  Natural way is to do so diffeomorphically.  So a distance represents the distance between a cell shape and a nuclear shape.  This requires labeling all pixels 0 (Background), 1 (cytoplasm), 2 (nucleus).



Figure 4 shown above.  Shows that once we compute diffeomorphic distance between every pair of cells, we obtain a distance matrix.  (Note that we could do this with some other metric.)  Part (c) represents multi-dimensional scaling of the distances to obtain a 2-D map (see Johnson for details) of how this is done.  Need to note that this isn’t Euclidean distance.

The generative model consists of the “shape space” in Fig. 4c along with the masks for the shapes (identification of what is nucleus, what is background, what is cytoplasm).

(Note that diffeomorphic model scales quadratically with # of cells)

Important point: there are “two issues common to many modeling efforts”
1.	“How well does model represent each instance”.  Murphy ties this to residual error, difference between original cell and its model.  To quantify, could measure sum of squared differences in fluorescence between original and model can be summed, then normalized by total fluorescence.
2.	“How well does model capture variation among the instances” More difficult concern but valid because we don’t want to flatten variation.


Murphy 2012, “CellOrganizer: Image-Derived Models of Subcellular Organization and Protein Distribution”

There is room for an entire module on each of two areas.

A second module appears from the “ratiometric model”, in which we measure ratio between distance from center to nuclear and cell outer wall.  “For two dimensional images, the coordinates of the cell and nuclear boundary are first mapped to polar coordinates, then the ratio between the two is calculated for a fixed number of angles (e.g., every degree…)” See Zhao and Murphy 2007 for more.

It will be tricky to explain how images are generated from this.

Benefit of ratiometric model is that it is joint: offers great medial approach between medial axis and diffeomorphic models

Key point: we need some way of testing our model against reality.  Mentioned in this paper in context of organization of vesicles and organelles. 
Johnson et al, 2015, “Joint modeling of cell and nuclear shape variation”

Central idea is understanding relationship between cell and nuclear shape.

Discussion of the large-deformation diffeomorphic metric mapping from Beg et al.

The generative model is based on “fitting a probability density to the low-dimensional shape-space coordinates, as was done using kernel density estimation for nuclear shapes” (see Peng et al., 2009).  Ultimate idea is to triangulate to draw these shapes.

Main result: “using cell shapes of the neighbors of a given nuclear shape to predict a cell shape for that nuclear shape”.  Used cross-validation to “predict cell from nuclear shape (and vice-versa)” that minimized the sum of squared errors between the actual shape and the predicted shape over all but the held-out image.  Using that learned kernel, we measured the error in predicting the held-out cell shape from its nuclear shape.”

Two methods for determining how good the shape predictions were:
1.	Compare frequency that error of shape prediction was less than from a model trained over multiple permutations (I don’t like this method as much)
2.	(More conservative) What is “frequency at which the error of the shape prediction was less than what we would expect if we were to draw a shape from the approximate probability density of the to-be predicted shape space at random.”  Results of 0.398 normalized error when predicting cell from nuclear and 0.447 when predicting nuclear from cell.

Figure 3b is great here:



Because it shows how size and shape vary across two dimensions: “the first dimension moves from smaller, eccentric cell shapes toward larger, rounder cell shapes.  The second dimension starts with small, round cell shapes and moves to large, eccentric cell shapes.”


Interesting premise: whether drugs could alter the relationship between cell and nuclear shape.  May be difficult to include, but for MCF7 cells:
•	cytochalasin B disrupted correlation of cell and nuclear shape
•	Aurora kinase inhibitors enhanced the relationship (if we inhibit this it disrupts cell cycle).

Movies of H1299 cells in G1:
•	Used k-means to cluster cells into three groups, inferred as G1, S, and G2.  (Natural thing to replicate with an experiment!  Integrate materials on clustering.)  Found G1 as cells with lowest “integrated DNA intensity under the nuclear shape mask”
•	A natural other experiment would be to cluster directly based on shape space!
•	Constructed expected displacement field over entire shape space (how?)
•	Had images of cells after 20 minutes and used random walk to fill in the gaps.
•	What is missing here is comparing predicted movements to actual movements – or would there just be too much noise?  Ask Greg.

In discussion, H1299 showed nuclear shape better predicted from cell shape than vice-versa.  “Suggests the presence of subpopulations of cells with similar nuclear shapes but different cell shapes.”  This would make an excellent thought exercise!


Note that each cell has the 0/1/2 mask associated with it – need to discuss this as well.

What is done in the paper then is to project the results down to two dimensions.  Would it make sense to instead just use two dimensions?


•	Two tasks – connect with a single thread:
o	If we’re given different types of cells, can we differentiate them based on how they look automatically?
o	(Murphy 2015) Cells and their nuclei and organelles change shape and behavior over time or have noise or differ between different cells of the same category due to differences between them.  How can we differentiate them?
•	Both of these tasks require a computer if we are going to do so for thousands of images … but how?



•	NEED BIBLIOGRAPHY NOTES
o	Median axis was Blum 1973, adapted in Zhao and Murphy 2007
o	Beg et al. 2005 gave diffeomorphic distance
o	Lloyd and k-means
o	Multidimensional scaling
