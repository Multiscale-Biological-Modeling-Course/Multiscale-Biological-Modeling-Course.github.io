---
permalink: /white_blood_cells/conclusion
title: "Conclusion: Toward Deep Learning"
sidebar:
 nav: "white_blood_cells"
toc: true
toc_sticky: true
image: "../assets/images/normal_adult_blood_smear.JPG"
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

## Story about phone

* We have been doing ML all along --- meme with cake?

## point about cellorganizer

* Point out other neat applications of CellOrganizer. Like using a Ferrari to drive to the supermarket.

<!--
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

-->

## Kicking tires on our approach

* Why was our approach not perfect? There are lots of potential failure points.

* We will start with our data. Great data means that we often can obtain very positive results using just about any approach. An example of this was the iris flower data set, where the data were gathered very correctly and the features very clearly differentiated the data.

* We have very low resolution images, and we don't have many of them. From this perspective, it is impressive that we were able to find any signal at all, and a natural thing to do would be to boost the size of our dataset --- especially for monocytes and lymphocytes --- with higher resolution images.

* These drawbacks are a feature of this chapter, not a bug, as real datasets are often noisy.

* The next failure point is our segmentation pipeline. We saw at the start of this module that not all of our images were perfectly segmented by our pipeline. As part of our quality assurance, perhaps we could devise a test for incorrect segmentations --- such as, if the size of the final object is not as large as what we would expect to be a nucleus, we could disregard this image as it may throw off our results.

* Then, our pipeline was handed off to CellOrganizer. The low resolution of the nuclear images will mean that our vectorization of each segmented nucleus into features may have some round-off error included. We used the default number of sampled points of *n* equal to 1000, which was just one of many parameters that we encountered in this problem. Perhaps changing that default will improve the performance of our classifier as well.

* But even with a higher-resolution image, we are ignoring every aspect of these images other than their shape. It is in some sense amazing that we were able to obtain even moderately good results given that the features that we used were only based on the shape of the nucleus.

*  We didn't even take the size of the nucleus into account! For example, if we return to the three sample WBC images that we showed in this module's introduction, reproduced below, then we will see that the monocyte nucleus is much smaller than the other two nuclei. As a result, we could add a feature to our dataset that represents the total area of the nucleus.

* STOP: What other features could we potentially add?

{% include gallery caption="Three images from the blood cell image dataset showing three types of WBCs. In our dataset, these cells correspond to image IDs 3, 15, and 20. (Left) A specific subtype of granulocyte called a neutrophil, illustrating the multilobular structure of this WBC family. (Center) A monocyte with a single, irregularly-shaped nucleus. (Right) A lymphocyte with a small, round nucleus." %}

* Finally, for the classification itself. We used k-nearest neighbors because it is intuitive and straightforward to explain to newcomers. There is nothing wrong with using a simple approach, but perhaps a more advanced algorithm that is not simply based on the nearest point in the shape space will be able to make more intelligent decisions.

## Deep learning and the state of the art for WBC classification

* In fact, the state-of-the-art for WBC analysis is based on a deep learning approach that sacrifices interpretability for performance and flexibility. Explain what is meant by these terms.

* A full explanation of deep learning is more than what we set out to do here, and we will have to save it for another day. Suffice it to say that k-NN will work practically instantaneously, while a deep learning classifier may consume the energy of a small country to build.

* Yet at the end of the day, blood cell counts are often still done manually because medicine can be slow to change but also subject to liability. There are major qualms in modern medicine about the ramifications of turning our lives over to algorithms.

* Story about the phone ringing in my office one day and talking to a doctor, who said that he felt he and his colleagues were not doing a very good job of identifying cancer from images of skin lesions.

* After a quick search, I found a paper that had advanced the state of the art for this problem. Wow! Better at diagnosing cancer than some of the best dermatologists in the United States.

* And yet here is their confusion matrix. SHOW --- and this paper was on the cover of *Nature*!

* I bet you feel a bit better about our results on WBC nuclear image analysis! So the approach does improve over a human, but we aren't any good at solving this problem either. This is the ultimate hope of machine learning algorithms --- that they not just beat us, but they do so in resounding fashion.

## Wrapping up

* That's it! Thank you for joining us in this text. If you're reading this, we are very grateful that you made it all the way through.

* Point to exercises
