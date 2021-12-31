---
permalink: /coronavirus/accuracy
title: "Protein Structure Comparison"
sidebar:
 nav: "coronavirus"
toc: true
toc_sticky: true
image: "../assets/images/SARS_spike_proteins.jpg"
---

## Experiments determine the structure of the SARS-CoV-2 spike protein

While some scientists were working to predict the structure of the SARS-CoV-2 spike protein from sequence data, others were working on verifying the structure of this protein experimentally. On February 25, 2020, researchers from the Seattle Structural Genomics Center for Infectious Disease uploaded to the PDB the result of a cryo-EM experiment for the SARS-CoV-2 spike protein, which became entry <a href="http://www.rcsb.org/structure/6VXX" target="_blank">6vxx</a>.

**Note:** If you would like to explore the structure of the SARS-CoV-2 spike protein, check out the 3-D protein viewer at <a href="http://www.rcsb.org/3d-view/6VXX/1" target="_blank">http://www.rcsb.org/3d-view/6VXX/1</a>.
{: .notice--warning}

In this lesson, we will compare the results of the SARS-CoV-2 spike protein prediction from the previous lesson against each other and against the protein's empirically validated structure. To do so, we need a method of comparing two structures.

## Comparing two shapes with the Kabsch algorithm

Ultimately, comparing protein structures is intrinsically similar to comparing two shapes, such as those shown in the figure below.

**STOP:** Consider the two shapes in the figure below. How similar are they?
{: .notice--primary}

[![image-center](../assets/images/600px/two_shapes.png){: .align-center}](../assets/images/two_shapes.png)
{: style="font-size: medium;"}

If you think you have a good handle on comparing the above two shapes, then it is because humans have very highly evolved eyes and brains. As we will see in the next module, training a computer to see objects as well as we can is more difficult than you think!

We would like to develop a "distance function *d*(*S*, *T*) quantifies how different two shapes *S* and *T* are. If *S* and *T* are the same, then *d*(*S*, *T*) should be equal to zero; the more different the shapes, the larger *d* should become.

You may have noticed that the two shapes in the preceding figure are similar; in fact, they are identical. To demonstrate that this is true, we can first move the red shape to superimpose it over the blue shape, then flip the red shape, and finally rotate it so that its boundary coincides with the blue shape, as shown in the animation below.

[![image-center](../assets/images/600px/shape_transformations_first_frame.png){: .align-center}](../assets/images/shape_transformations.gif)
We can transform the red shape into the blue shape by translating it, flipping it, and then rotating it.
{: style="font-size: medium;"}

If *S* can be translated, flipped, and/or rotated to produce *T*, then *S* and *T* are the same shape, and so *d*(*S*, *T*) should be equal to zero. The question is what *d*(*S*, *T*) should be if *S* and *T* are not the same shape.

Our idea for defining *d*(*S*, *T*) is first to translate, flip, and rotate *S* so that it resembles *T* "as much as possible" to give us a fair comparison. We will then to quantify how different the shapes are to determine *d*(*S*, *T*).

We first translate *S* to have the same **centroid** (or **center of mass**) as *T*. The centroid of *S* is found at the point (*x*<sub><em>S</em></sub>, *y*<sub><em>S</em></sub>) such that *x*<sub><em>S</em></sub> and *y*<sub><em>S</em></sub> are the respective averages of the *x*-coordinates and *y*-coordinates on the boundary of *S*.

For example, suppose that *S* is the semicircular arc shown in the figure below, with endpoints (-1, 0) and (1, 0).

[![image-center](../assets/images/600px/semicircular_arc.png){: .align-center width="300px"}](../assets/images/semicircular_arc.png)
A semicircular arc with radius 1 corresponding to a circle whose center is at the origin.
{: style="font-size: medium;"}

The *x*-coordinate *x*<sub><em>S</em></sub> is zero, but computing *y*<sub><em>S</em></sub> requires us to apply a little calculus, taking the average of the *y*-coordinates along the entire semicircle:

$$\begin{align*}
y_S & = \dfrac{\int_{0}^{\pi}{\sin{\theta}}}{\pi} \\
& = \dfrac{-\cos{\pi} + \cos{0}}{\pi} \\
& = \dfrac{2}{\pi}
\end{align*}$$

**STOP:** Say that we connect (-1, 0) and (0, 1) to form a closed semicircle. What will be the centroid of the resulting shape?
{: .notice--primary}

The centroid of some shapes, like the semicircular arc in the preceding example, can be determined mathematically. But for irregular shapes, we can estimate the centroid of *S* by sampling *n* points from the boundary of the shape and taking the averages of all the *x*- and *y*-coordinates of sampled points.

After finding the centroids of the two shapes *S* and *T* that we wish to compare, we translate *S* so that it has the same centroid as *T*. We then wish to find the rotation of *S*, possibly along with a flip as well, that makes the shape resemble *T* as much as possible.

Imagine that we have found the desired rotation; we can then define *d*(*S*, *T*) in the following way. We sample *n* points along the boundary of each shape, converting *S* and *T* into **vectors** *s* = (*s*<sub>1</sub>, ..., *s*<sub><em>n</em></sub>) and *t* = (*t*<sub>1</sub>, ..., *t*<sub><em>n</em></sub>), where *s*<sub><em>i</em></sub> is the *i*-th point on the boundary of *S*. The **root mean square deviation (RMSD)** between the two shapes is the square root of the average squared distance between corresponding points in the vectors,

$$\text{RMSD}(s, t) = \sqrt{\dfrac{1}{n} \cdot (d(s_1, t_1)^2 + d(s_2, t_2)^2 + \cdots + d(s_n, t_n)^2)} \,.$$

In this formula, *d*(*s*<sub><em>i</em></sub>, *t*<sub><em>i</em></sub>) is the distance between the points *s*<sub><em>i</em></sub> and *t*<sub><em>i</em></sub>.

**Note:** RMSD is a very commonly used approach across data science when measuring the differences between two vectors.
{: .notice--warning}

For an example two-dimensional RMSD calculation, consider the figure below, which shows two shapes with four points sampled from each.

[![image-center](../assets/images/600px/rmsd_simple_shapes.png){: .align-center width="400px"}](../assets/images/rmsd_simple_shapes.png)
Two shapes with four points sampled from each.
{: style="font-size: medium;"}

The distances between corresponding points in this figure are equal to $$\sqrt{2}$$, 1, 4, and $$\sqrt{2}$$. As a result, we compute the RMSD as

$$\begin{align*}
\text{RMSD}(s, t) & = \sqrt{\dfrac{1}{4} \cdot (\sqrt{2}^2 + 1^2 + 2^2 + \sqrt{2}^2)} \\
& = \sqrt{\dfrac{1}{4} \cdot 9}\\
& = \sqrt{\dfrac{9}{4}}\\
& = \dfrac{3}{2}
\end{align*}$$

**STOP:** Do you see any issues with using RMSD to compare two shapes?
{: .notice--primary}

Even if we assume that the shapes have already been overlapped and rotated appropriately, we still need to make sure that we sample enough points to give a good approximation of how different the shapes are.  For an extreme example, consider a circle inscribed within a square, as shown in the figure below. If we happened to sample only the four points indicated, we would sample the same points in each shape, and conclude that the RMSD between these two shapes is zero.  This issue is easily resolved by making sure to sample enough points to avoid approximation errors.

[![image-center](../assets/images/600px/circle_square_undersampling.png){: .align-center width="300px"}](../assets/images/circle_square_undersampling.png)
A circle inscribed within a square. Sampling of the four points where the shapes intersect will give a flawed estimate of zero for RMSD.
{: style="font-size: medium;"}

However, all this has left open the fact that we assumed that we had rotated *S* to be as "similar" to *T* as possible. In practice, after superimposing *S* and *T* to have the same centroid, we will need to find the rotation of *S* that *minimizes* the RMSD between our vectorizations of *S* and *T*, and this resulting minimum will be what we define as *d*(*S*, *T*). It turns out that there is an approach to find this best rotation called the **Kabsch algorithm**, which requires some advanced linear algebra and is beyond the scope of our work but is described <a href="https://en.wikipedia.org/wiki/Kabsch_algorithm" target="_blank">here</a>.

## Applying the Kabsch algorithm to protein structure comparison

The Kabsch algorithm offers a compelling way to determine the similarity of two protein structures. We can convert a protein containing *n* amino acids into a vector of length *n* by selecting a single representative point from each amino acid. To do so, scientists typically choose the alpha carbon, the amino acid's centrally located carbon atom that lies on the peptide's backbone; the position of this atom will already be present in the `.pdb` file for a given structure.

**STOP:** Can you think of example where a small difference between protein structures can cause a large inflation in RMSD score?
{: .notice--primary}

Unfortunately, no perfect metric for shape comparison exists. To see why the Kabsch algorithm can be flawed, consider the figure below showing two toy protein structures. The orange structure (*S*) is identical to the blue structure (*T*) except for the change in a single bond angle between the third and fourth amino acids. And yet this tiny change in the protein's structure causes a significant increase in *d*(*s*<sub><em>i</em></sub>, *t*<sub><em>i</em></sub>) for every *i* greater than 3, which inflates the RMSD.

[![image-center](../assets/images/600px/RMSD_weakness_mutation.png){: .align-center}](../assets/images/RMSD_weakness_mutation.png)
(Top) Two hypothetical protein structures that differ in only a single bond angle between the third and fourth amino acids, shown in red. Each circle represents an alpha carbon. (Bottom left) Overlaying the first three amino acids shows how much the change in the bond angle throws off the computation of RMSD by increasing the distances between corresponding alpha carbons. (Bottom right) The Kabsch algorithm would align the centers of gravity of the two structures in order to minimize RMSD between corresponding alpha carbons. This makes it difficult for the untrained observer to notice that the two proteins only really differ in a single bond angle.
{: style="font-size: medium;"}

Another way in which the Kabsch algorithm can be fooled is in the case of a substructure that is appended to the side of a structure and that throws off the ordering of the amino acids. For example, consider the following toy example of a structure into which we incorporate a loop.

[![image-center](../assets/images/600px/RMSD_weakness_loop.png){: .align-center}](../assets/images/RMSD_weakness_loop.png)
A simplification of two protein structures, one of which includes a loop of three amino acids. After the loop, each amino acid in the orange structure will be compared against an amino acid that occurs farther long in the blue structure, thus increasing *d*(*s*<sub><em>i</em></sub>, *t*<sub><em>i</em></sub>)<sup>2</sup> for each such amino acid.
{: style="font-size: medium;"}

Finally, it may be the case that one or more amino acids is inserted into or deleted from one of the proteins. This mutation would have a similar effect on RMSD as the above figure. For this reason, biologists will often *align* two genes first, ignoring any positions that do not have a corresponding amino acid in one of the two proteins. (We will see an example of a protein alignment soon when comparing the coronavirus spike proteins.)

In short, if the RMSD of two proteins is *large*, then we should be wary of concluding that the proteins are very different, and we may need to combine RMSD with other methods of structure comparison. But if the RMSD is *small* (e.g., just a few angstroms), then we can have some confidence that the proteins are indeed similar.

We are now ready to consider the following tutorial, in which we apply the Kabsch algorithm to compare the structures that we predicted for human hemoglobin subunit alpha and the SARS-CoV-2 spike protein against their experimentally validated structures.

[Visit tutorial](tutorial_rmsd){: .btn .btn--info .btn--large}
{: style="font-size: 100%; text-align: center;"}

## Assessing the accuracy of our structure prediction models

In the tutorials occurring earlier in this module, we used publicly available protein structure prediction servers to predict the structure of human hemoglobin subunit alpha (using *ab initio* modeling) and the SARS-CoV-2 spike protein (using homology modeling).

Let's see how well our models performed by showing the values of RMSD produced by the Kabsch algorithm when comparing each of these models against the validated structures.

### *Ab initio* (QUARK) models of Human Hemoglobin Subunit Alpha

In the [ab initio tutorial](tutorial_ab_initio), we used *<a href="https://zhanglab.ccmb.med.umich.edu/QUARK/" target="_blank">QUARK</a>* to perform *ab initio* structure prediction of human hemoglobin subunit alpha from its amino acid sequence, producing five models. In the following table, we show the RMSD produced by the Kabsch algorithm for each of these models against the validated structure of this subunit (PDB: <a href="https://www.rcsb.org/structure/1SI4" target="_blank">1si4</a>).

| Quark Model | RMSD  |
|:------------|:------|
| QUARK1      | 1.58  |
| QUARK2      | 2.0988|
| QUARK3      | 3.11  |
| QUARK4      | 1.9343|
| QUARK5      | 2.6495|

It is tempting to conclude that our *ab initio* prediction was a success. However, because human hemoglobin subunit alpha is such a short protein (141 amino acids), researchers would consider this RMSD score high.

We know that homology modeling will be faster than *ab initio* modeling. But will it be more accurate as well?

### Homology models of SARS-CoV-2 S protein

In the [homology tutorial](tutorial_homology), we used SWISS-MODEL and Robetta to predict the structure of the SARS-CoV-2 spike protein, and we used GalaxyWeb to predict the structure of this protein's receptor binding domain (RBD). In addition to our predicted models, we will also assess five predicted models of the full SARS-CoV-2 spike protein released early in the COVID-19 pandemic by <a href="https://boinc.bakerlab.org/" target="_blank">Rosetta@Home</a> and published to the Seattle Structural Genomics Center for Infectious Disease (SSGCID). Because the work needed to generate these models was distributed over many users' machines, comparing the RMSD scores obtained by the Rosetta@Home models against our own may provide insights on the effect of computational power on the accuracy of predictions. The SSGCID models can be found <a href="https://www.ssgcid.org/cttdb/molecularmodel_list/?target__icontains=BewuA" target="_blank">here</a>.

#### GalaxyWEB

First, we consider the <a href="http://galaxy.seoklab.org/" target="_blank">GalaxyWEB</a> models that we produced of the spike protein RBD. We compared these models to the validated SARS-CoV-2 RBD (PDB entry: <a href="https://www.rcsb.org/structure/6LZG" target="_blank">6lzg</a>).

| GalaxyWEB | RMSD |
|:--------|:-----|
|Galaxy1| 0.1775|
|Galaxy2| 0.1459|
|Galaxy3| 0.1526|
|Galaxy4| 0.1434|
|Galaxy5| 0.1202|

All of these models have an excellent RMSD score and can be considered very accurate. Note that their RMSD is more than an order of magnitude lower than the RMSD computed for our *ab initio* model of hemoglobin subunit alpha, despite the fact that the RBD is longer (229 amino acids).

#### SWISS-MODEL

We now shift to homology models of the entire spike protein and start with <a href="https://swissmodel.expasy.org/" target="_blank">SWISS-MODEL</a>. We compared each model produced by SWISS-MODEL against the validated structure of the SARS-CoV-2 spike protein (PDB entry: <a href="https://www.rcsb.org/structure/6vxx">6vxx</a>).

| SWISS MODEL | RMSD |
|:------------|:-----|
|SWISS1| 5.8518|
|SWISS2| 11.3432|
|SWISS3| 11.3432|

From the scores, we can see that model SWISS1 performed the best. Even though the RMSD score of 5.818 is significantly higher than what we saw for the GalaxyWEB prediction for the RBD, keep in mind that the spike protein is 1281 amino acids long, and so the sensitivity of RMSD to slight changes should give us confidence that our models are on the right track.

#### Robetta

<a href="https://robetta.bakerlab.org/" target="_blank">Robetta</a> produced five models of a single chain of the SARS-CoV-2 spike protein. As with the models produced by SWISS-MODEL, we compared each of them against the validated structure of the SARS-CoV-2 spike protein (PDB: <a href="https://www.rcsb.org/structure/6vxx">6vxx</a>).

| Robetta | RMSD |
|:--------|:-----|
|Robetta1| 3.1189|
|Robetta2| 3.7568|
|Robetta3| 2.9972|
|Robetta4| 2.5852|
|Robetta5| 12.0975|

**STOP:** Which do you think performed more accurately on our predictions: SWISS-MODEL or Robetta?
{: .notice--primary}

Most of the Robetta models for a single chain beat the SWISS-MODEL predictions for the entire protein. This makes it difficult to say at the moment which resource has performed better.

#### SSGCID

As explained above, the SSGCID models of the S protein released by <a href="https://boinc.bakerlab.org/" target="_blank">Rosetta@Home</a> used large amounts of computational power. Therefore, we might expect to see RMSD scores lower than those of our models. Like before, we will compare the models to the validated structure of (PDB: <a href="https://www.rcsb.org/structure/6vxx">6vxx</a>). This time, we will assess the accuracy of predictions of a single chain as well as of the entire spike protein.

| SSGCID | RMSD (Full Protein) | RMSD (Single Chain)|
|:-------|:--------------------|:-------------------|
|SSGCID1|3.505|2.7843|
|SSGCID2|2.3274|2.107|
|SSGCID3|2.12|1.866|
|SSGCID4|2.0854|2.047|
|SSGCID5|4.9636|4.6443|

**STOP:** Consider the following two questions.<br><br>
First, note that SSGCID3 modeled a single chain more accurately, but SSGCID4 modeled a more accurate full protein. What do you think might have caused this?<br><br>
Second, why do you think that the full protein RMSD values are so close to the single chain values?
{: .notice--primary}

As we might expect due to their access to the resources of thousands of users' computers, the SSGCID models outperform our SWISS-MODEL models. But it is also worth noting that their RMSD values are not as close to zero as we might expect, even with access to hundreds of contributors' computational resources. Is protein structure prediction a hopeless problem?

[Next lesson](conclusion_part_1){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}
