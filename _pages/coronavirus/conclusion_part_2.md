---
permalink: /coronavirus/conclusion_part_2
title: "Part 2 Conclusion: From Static Protein Analysis to Molecular Dynamics"
sidebar:
 nav: "coronavirus"
toc: true
toc_sticky: true
image: "../assets/images/SARS_spike_proteins.jpg"
---

## Modeling protein bonds using tiny springs

To conclude part 2 of this module, we transition from the static study of proteins to the field of **molecular dynamics (MD)**, in which we simulate the movement of proteins' atoms, along with their interactions as they move.

You may think that simulating the movments of proteins with hundreds of amino acids will be a hopeless task. After all, predicting the static structure of a protein has occupied biologists for decades! Yet part of what makes structure prediction so challenging is that the "search space" of potential shapes is so enormous. Once we have established the static structure of a protein, its dynamic behavior will not allow it to deviate greatly from this static structure, and so the space of potential structures is automatically narrowed down to those that are similar to the static structure.

A protein's molecular bonds are constantly vibrating, stretching and compressing, much like that of the oscillating mass-spring system shown in the figure below. Bonded atoms are held together by sharing electrons and are held at specific bond length due to the attraction and repulsion forces of the negatively charged electrons and positively charged nucleus. If you push the atoms closer together or pull them farther apart, they will "bounce back" to their equilibrium.

[![image-center](../assets/images/600px/mass-spring_first_frame.png){: .align-center}](../assets/images/mass-spring.gif)
A mass-spring system in which a mass is attached to the end of a spring. The more we move the mass from its equilibrium, the greater its resistance and the more it will be repelled back toward equilibrium. Courtesy: [flippingphysics.com](http://flippingphysics.com).
{: style="font-size: medium;"}

In an **elastic network model (ENM)**, we imagine nearby alpha carbons of a protein structure to be connected by springs. Because distant atoms will not influence each other, we will only connect two alpha carbons if they are within some threshold distance of each other. A major strength of ProDy is its implementation of a **Gaussian network model (GNM)**, an ENM for molecular dynamics. We describe how a GNM works in the following section.

## An Introduction to Gaussian Network Models

### Representing random movements of alpha carbons

We will introduce GNM using our old friend human hemoglobin protein (<a href="https://www.rcsb.org/structure/1a3n" target="_blank">1A3N.pdb</a>). We first convert hemoglobin into a network of nodes and springs, in which each alpha carbon is given by a node, and two alpha carbons are connected by a string if they are within a threshold distance; the figure below uses a threshold value of 7.3 angstroms.

[![image-center](../assets/images/600px/hemoglobin_enm.png){: .align-center}](../assets/images/hemoglobin_enm.png)
Conversion of human hemoglobin (left) to a network of nodes and springs (right) in which two nodes are connected by a spring if they are within a threshold distance of 7.3 angstroms.
{: style="font-size: medium;"}

As the alpha carbons in a protein move randomly, they are subject to fluctuations that cause them to deviate from their equilibrium positions. These fluctuations are *Gaussian*, which give the model its name. In short, this means that the alpha carbon can deviate randomly from its equilibrium position, but that it is more likely to be near the equilibrium than far away.

The equilibrium position of node *i* is represented by the vector $$ R_i^0 $$, and its position at a given point in time is denoted by the (variable) vector $$ \Delta R_i $$. The distance between node *i* and node *j* at equilibrium is denoted by the vector $$ R_{ij}^0 $$, which is equal to $$ R_j^0 - R_i^0 $$ (as illustrated in the figure below); at a given point in time, this distance becomes the vector $$ R_{ij} $$.

[![image-center](../assets/images/600px/gaussian_fluctuations.png){: .align-center}](../assets/images/gaussian_fluctuations.png)
(Left) A small network of nodes connected by springs deriving from a protein structure. The distance between two nodes *i* and *j* is denoted by the variable $$ R_{ij} $$. (Right) Zooming in on two nodes *i* and *j* that are within the threshold distance. The equilibrium positions of node *i* and node *j* are represented by the distance vectors $$ R_i^0 $$ and $$ R_j^0 $$, with the distance between them denoted $$ R_{ij}^0 $$, which is equal to $$ R_j^0 - R_i^0 $$. The vectors $$ \Delta R_i $$ and $$ \Delta R_j $$ represent the nodes' respective changes from equilibrium. Image courtesy: Ahmet Bakan.
{: style="font-size: medium;"}

<!--
We are interested in the change in the distance between *i* and *j* compared to equilibrium, $$ \Delta R_{ij} $$, which is equal to $$ R_{ij} - R_{ij}^0 = \Delta R_j - \Delta R_i $$.
-->

Yet although atomic fluctuations are powered by randomness, the movements of protein atoms are in fact heavily correlated, owing to the evolution of the proteins to perform replicable tasks. For example, imagine the simple case in which all a protein's alpha carbons are connected in a straight line. If we pull the first alpha carbon away from the second node, then because we think of this atom being connected to the second alpha carbon by a "spring", the second alpha carbon will be pulled toward the first alpha carbon. Our goal is to understand how the movements of *every* pair of alpha carbons, called the **cross-correlation** of these atoms, may be related. We will see how using vectors to represent these movements can be helpful.

### Inner products and cross-correlations

To determine how the movements of nodes *i* and *j* may be related, we need to examine the fluctuation vectors $$ \Delta R_i $$ and $$ \Delta R_j $$. Do these vectors point in similar or opposing directions?

This question is answered by computing the **inner product**, or **dot product**, of the two vectors, $$ \langle \Delta R_i, \Delta R_j \rangle $$. The inner product of two vectors **x** = (*x*<sub>1</sub>, *x*<sub>2</sub>, *x*<sub>3</sub>) and **y** = (*y*<sub>1</sub>, *y*<sub>2</sub>, *y*<sub>3</sub>) is given by <**x**, **y**> = *x*<sub>1</sub> · *y*<sub>1</sub> + *x*<sub>2</sub> · *y*<sub>2</sub> + *x*<sub>3</sub> · *y*<sub>3</sub>. If two vectors **x** and **y** are at right angles, then <**x**, **y**> is equal to zero. The more that the two vectors point in the same direction, the larger the value of <**x**, **y**>. And the more that the two vectors point in opposite directions, the smaller the value of <**x**, **y**>.

**STOP:** Say that **x** = (1, -2, 3), **y** = (2, -3, 5), and **z** = (-1, 3, -4). Compute the inner products <**x**, **y**> and <**x**, **z**> and ensure that your answers match the preceding observation.
{: .notice--primary}

The inner product is also useful for representing  giving the **mean-square fluctuation** of an alpha carbon, or the expected squared distance of node *i* from equilibrium. This value is given simply by the inner product $$  \langle \Delta R_i, R_i \rangle $$ of a fluctuation vector with itself.

**Note:** In practice, we will not know the exact values for the $$ \Delta R_i $$ and must compute the inner products of fluctuation vectors indirectly using linear algebra, which is beyond the scope of this work. A full treatment of the mathematics of GNMs can also be found in the chapter at <a href="https://www.csb.pitt.edu/Faculty/bahar/publications/b14.pdf" target="_blank">https://www.csb.pitt.edu/Faculty/bahar/publications/b14.pdf</a>
{: .notice--warning}

Long vectors pointing in the same direction will have a larger inner product than short vectors pointing in the same direction. As a result, we can normalize the inner product so that we can have a sense of the correlation of these vectors, independent of their length. To be precise, the **cross-correlation** of nodes *i* and *j* is given by

$$ C_{ij} = \dfrac{\langle \Delta R_i, \Delta R_j \rangle}{\sqrt{\langle \Delta R_i, \Delta R_i \rangle \langle \Delta R_j, \Delta R_j \rangle}} $$.

After normalization, the cross-correlation ranges from -1 to 1. A cross-correlation of -1 means that the two alpha carbons' movements are completely anti-correlated, and a cross-correlation of 1 means that their movements are completely correlated.

After computing the cross-correlation of every pair of alpha carbons in a protein structure with *n* residues, we obtain an *n* × *n* **cross-correlation matrix** *C*. We can visualize this matrix using a **heat map**, in which we color matrix values along a spectrum from red (1) to blue (-1). This heat map for the cross-correlation matrix of human hemoglobin is shown in the figure below.

[![image-center](../assets/images/600px/hemoglobin_cc.png){: .align-center width="400px"}](../assets/images/hemoglobin_cc.png)
The normalized cross-correlation heat map of human hemoglobin (PDB: 1A3N). Red regions indicate correlated residue pairs which move in the same direction; blue regions indicate anti-correlated residue pairs which move in opposite directions. Note that the matrix is oriented so that its first element is in the bottom left corner.
{: style="font-size: medium;"}

The cross-correlation map of a protein contains complex patterns of correlated and anti-correlated movement of the protein's atoms. As such, it serves as a "fingerprint" of sorts for the protein, giving useful insights into the protein's structure.

We should not be surprised that the main diagonal of the cross-correlation map is colored red, since alpha carbons that are near each other in a polypeptide chain will likely have correlated movements.

Furthermore, the regions of high correlation near the main diagonal typically provide information regarding the protein's secondary structures, since amino acids belonging to the same secondary structure will typically move in concert.

High correlation regions that are far away from the matrix's main diagonal provide information about the *tertiary* structure of the protein, such as protein domains and other components of the protein that work together.

Consider again the cross-correlation map of human hemoglobin shown above. We can see four squares of positive correlation along the main diagonal, representing the four subunits of hemoglobin: α<sub>1</sub>, β<sub>1</sub>, α<sub>2</sub>, and β<sub>2</sub>. Note that the first and third squares have the same patterns; these correspond to α<sub>1</sub> and α<sub>2</sub>, respectively. Similarly, the second and fourth squares correspond to β<sub>1</sub> and β<sub>2</sub>.

**STOP:** What other patterns do you notice in the hemoglobin cross-correlation heat map?
{: .notice--primary}

### Mean-square Fluctuations & B-factor

Just like cross-correlation, we can also visualize the mean-square fluctuations of the residues. This is typically done in two ways. The simplest is to directly plot the values, where the x-axis represent the residues and the y-axis represent the mean-square fluctuation $$ \langle \Delta R_i, \Delta R_i \rangle $$. The other, more useful, method is to plot the B-factor. When performing crystallography, the displacement of atoms within the protein crystal decreases the intesity of the scattered X-ray, creating uncertainty in the positions of atoms. **B-factor**, also known as **temperature factor** or **Debye-Waller factor** is a measure of this uncertainty, which includes noise from positional variance of thermal protein motion, model errors, and lattice defects. B-factors are reported in addition to the atomic coordinates in the PDB entry. One of the main reason we use B-factors is that they scale with the mean-square fluctuation, such that for atom *i*:

$$ B_i = \frac{8 \pi^2}{3} \langle \Delta R_i, \Delta R_i \rangle $$

We can calculate the **theoretical B-factors** using the equation and GNM analysis, and the correlation with the **experimental B-factors** that are included in the PDB entry as a simple way to evaluate the GNM analysis. A study in 2009 by Lei Yang et al. compared the experimental and theoretical B-factors of 190 sufficiently different (<50% similarity) protein stuctures from X-ray and found the correlation to be about 0.58 on average [^Yang2]. Below is a plot of the B-factor, synonomous to the mean-square fluctutation, of α<sub>1</sub>. Residues with high values are those that fluctuate with greater motion or residues with greater positional uncertainty, and are colored red in the figures. In this case, we see that the residues colored in red are generally at the ends of secondary structures in the outer edges of the protein and loops (segments in between secondary structures). This is expected because protein loops typically contain highly fluctuating residues.

[![image-center](../assets/images/600px/hemoglobin_b_factors.png){: .align-center}](../assets/images/hemoglobin_b_factors.png)
(Top): Human hemoglobin colored according to the GNM calculated theoretical B-factors (left) and the experimental B-factors (right). (Bottom): 2D plot comparing the theoretical and experimental B-factors of subunit α<sub>1</sub> (chain A of the protein). α<sub>1</sub> is located at the top left quarter of the protein figure. A correlation coefficient of 0.63 was calculated between the theoretical and experimental B-factors.
{: style="font-size: medium;"}

### Slow Modes

The oscillations of a protein's atoms can be summarized by using a combination of functions explaining them, or **modes**. The paradigm resulting from the insight of breaking down oscillations into a comparatively small number of modes that summarize them is called **normal mode analysis (NMA)** and powers the elastic model that ProDy implements.

A benefit from decomposing the protein fluctuation into individual normal modes is that we are able to observe the characteristics of slow modes separately, i.e. which residues does it affect and to what degree, or **slow mode shape**. This is typically done by visualizing the modes as 2D plots where the x-axis is the residue sequence and the y-axis is the inverse eigenvalues of the Kirchhoff matrix. Peaks in the plot indicate which region of residues the mode describes, with higher peaks representing greater magnitude of motions. It is also common to observe the plot of the average of multiple modes to see the collective contribution of the modes. Below is an example of slow mode shape using human hemoglobin.

[![image-center](../assets/images/600px/hemoglobin_mode_shape.png){: .align-center}](../assets/images/hemoglobin_mode_shape.png)
(Top): Visualization of human hemoglobin colored based on GNM slow mode shape. Red represents regions of high mobility and correspond to peaks in the plot. The first image represents the slowest mode (left) and the second image represents the average of the first 10 slowest modes (right). (Bottom): 2D plot of the slowest mode separate by the four chains of hemoglobin.
{: style="font-size: medium;"}

Similar to cross-correlation, analyzing slow mode shapes will give us insight on the structure of the protein and comparing the slow mode shapes can reveal differences between protein structures. From the shape of the slowest mode of all four chains (subunits), we can see that the shape for the four subunits of hemoglobin are quite similar. However, it is important to realize that the slowest mode only captures the largest movements of the protein. Therefore, we cannot say with certainty that the four subunits are as structurally similar as the slow mode shape, although from the cross-correlation map patterns and experimental studies, we know that subunit $$ \alpha $$ and subunit $$ \beta $$ are similar but have structural differences. As mentioned before, we can also view the average shape of the modes. Below is the slow mode plot of the slowest ten modes of hemoglobin. Here, we can see a stark difference between two groups of subunits/chains, where the $$ \alpha $$ subunits (chains A and C) share a very similar slow mode shape while the $$ \beta $$ subunits (chains B and D) share a different, yet similar, slow mode shape as well.

[![image-center](../assets/images/600px/hemoglobin_mode_shape_avg.png){: .align-center}](../assets/images/hemoglobin_mode_shape_avg.png)
The average mode shape of the slowest ten modes of human hemoglobin using GNM.
{: style="font-size: medium;"}


### Performing NMA calculations

By running molecular dynamics simulations, we obtain another way to study two homologous proteins by comparing their patterns of fluctuation under perturbation. With this in mind, we will use ProDy to perform NMA calculations as a final method of comparing the SARS-CoV-2 and SARS-CoV spike proteins. We also will use ProDy to compute a contact map, if you are interested in doing this after our discussion of contact maps in a [previous lesson](multiseq#contact-maps-and-qres). When we return from the tutorial, we will explain each of the analyses that we perform in the tutorial.

[Visit tutorial](tutorial_GNM){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

## Molecular dynamics analyses of SARS-CoV and SARS-CoV-2 spike proteins using GNM

In the tutorial, we used ProDy to generate visualizations of how the SARS-CoV-2 spike protein fluctuates compared to that of SARS-CoV. Here, we will explain how to interpret the results and compare them to analyze the similarities between the two proteins.

### Cross-Correlation

Much as a contact map indicated which amino acids in a protein structure are close to each other, we will use a **cross-correlation map** to show whether the *movements* of different amino acids are coordinated as the protein flexes. A matrix *M* receives a value at *M*(*i*, *j*) equal to the correlation between the movements of the *i*-th and *j*-th amino acids in a protein structure. The values of this matrix are decimals ranging from -1 to 1. *M*(*i*, *j*) is equal to 1 if the movements are completely correlated (both amino acids always move in the same direction), a value of -1 if the movements are completely anticorrelated (both amino acids always move in opposite directions), and a value of 0 if the movements are completely uncorrelated.

Much as the contact map typically has many values equal to 1 near the main diagonal, we commonly see a diagonal of strong cross-correlation values (i.e., either close to -1 or close to 1) because movements in an amino acid will almost always affect nearby amino acids.

Positive correlations near the diagonal represents correlations between contiguous residues and are characteristics of secondary structures (e.g., alpha helices and beta sheets), in which amino acids tend to move together. Correlations and anticorrellations off the diagonal (i.e., for amino acids distant from each other in the protein structure) may potential represent interesting interactions between non-contiguous residues and domains for further study.

From our results, we see that the SARS-CoV-2 and SARS S protein fluctuate similarly, supporting that they not only have similar structures, but similar dynamics as well.

[![image-center](../assets/images/600px/CrossCorr.png){: .align-center}](../assets/images/CrossCorr.png)
The cross-correlation heat maps of the SARS-CoV-2 spike protein (top-left), SARS-CoV spike protein (top-right), single chain of the SARS-CoV-2 spike protein (bottom-left), and single-chain of the SARS-CoV spike protein (bottom-right). The map shows every residue pair in the structure and the colors represent the correlation in the fluctuations of residues as shown in the spectrum. A value of 1.0 (red) means that the amino acids' movements are perfectly correlated, and a value of -1.0 (dark blue) means that their movements are perfectly anticorrelated.
{: style="font-size: medium;"}

### Slow mode shape and square fluctuations

<!-- NMA is based on the idea that the lowest frequency modes describe the largest movement in the structure. Below is the plot of the lowest frequency (slowest) mode calculated by ProDy.
-->

Above, we pointed out that in NMA, we break down the complex movements of a protein in terms of a few simpler component functions called "modes". The mode having the greatest contribution to these fluctuations (called the "slowest" mode) is charted in the figure below, called a **slow mode shape plot**, for the SARS-CoV-2 and SARS-CoV spike proteins. The amino acid positions are across the x-axis, and the direction/magnitude of movement is shown on the y-axis. Positive and negative values correspond to opposite directions of movement, and the farther a value is from zero, the more this position moves with respect to the given mode.

In this figure, we can see that the protein region between positions 200 and 500 of the spike protein is the most mobile. This region overlaps with the RBD region, found between residues 331 to 524. This analysis indicates that the RBD is a relatively mobile part of the spike protein, which matches our intuition that the RBD might need to be flexible in order to "catch" the moving target of an ACE2 enzyme and latch onto it.

[![image-center](../assets/images/600px/SlowMode.png){: .align-center}](../assets/images/SlowMode.png)
Slow mode plots of the SARS-CoV-2 spike protein (top-left), SARS-CoV spike protein (top-right), single chain of the SARS-CoV-2 spike protein (bottom-left), and single chain of the SARS-CoV spike protein (bottom-right). The x-axis represents the amino acid positions along the protein, and the y-axis represents the relative fluctuations at each amino acid position. From the single-chain plots for both SARS-CoV-2 and SARS, we see that the residues between 200 – 500 fluctuate the most. The plots between SARS-CoV-2 and SARS-CoV are very similar, indicating similar protein fluctuations for this mode.
{: style="font-size: medium;"}

A related plot called a slow mode **square fluctuations plot** is similar to the slow mode shape plot, except that its values are produced by multiplying the square of the slow mode by the variance along the mode. In this case, all the values will be positive, and larger amplitudes represent regions of greater fluctuation. As with the slow mode plots, the square fluctuations plots for SARS-CoV-2 and SARS-CoV shown below indicate that the RBD is highly mobile compared with the rest of the spike protein.

[![image-center](../assets/images/600px/SqFlucts.png){: .align-center}](../assets/images/SqFlucts.png)
Plots of the slow mode square fluctuation of the SARS-CoV-2 spike protein (top-left), SARS-CoV spike protein (top-right), a single chain of the SARS-CoV-2 spike protein (bottom-left), and a single chain of the SARS-CoV spike protein (bottom-right). The x-axis represents the amino acid positions along the protein, and the y-axis is proportional to the square of the fluctuations at each amino acid position. The plots between SARS-CoV-2 and SARS-CoV are very similar, indicating similar protein fluctuations for this mode.
{: style="font-size: medium;"}

### Comparing Results

From these results, we can see that the SARS-CoV-2 and SARS-CoV spike proteins are not only very similar in terms of structure, but they are similar in terms of dynamics as well. This result is perhaps not a surprise since they both target the ACE2 enzyme, and it drives home the fact that proteins can seem almost identical and yet one can have very subtle changes that turns an outbreak into a pandemic.

## ANM models account for the direction of protein fluctuations

The anisotropic counterpart to GNM, in which the direction of fluctuations is also considered, is called **anisotropic network model (ANM)**. Although ANM includes directionality, it typically performs worse than GNM when compared with experimental data[^Yang]. However, we can this model offers the benefit that it can be used to create animations depicting the range of motions and fluctuations of the protein.

In the tutorial linked below, we will apply ANM to produce versions of the plots that we produced above. We will also encounter <a href="http://prody.csb.pitt.edu/nmwiz/" target="_blank">NMWiz</a>, which is short for "normal mode wizard", a GUI for ProDy that is available as a plugin for VMD. We will use NMWiz to perform ANM calculations and create an animation of the SARS-CoV-2 (chimeric) RBD (PDB entry: <a href="http://www.rcsb.org/structure/6vw1" target="_blank">6vw1</a>) and the SARS-CoV RBD (PDB entry: <a href="http://www.rcsb.org/structure/2ajf" target="_blank">2ajf</a>).

[Visit tutorial](tutorial_ANM){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

## ANM analysis of the coronavirus binding domain

In the tutorial, we were able to generate a cross-correlation map and square fluctuation plot for the SARS-CoV-2 RBD, which resemble the results that we obtained previously for GNM (see figure below). Unsurprisingly, we do not see significant differences between the plots for the two viruses.

[![image-center](../assets/images/600px/ANMResults.png){: .align-center}](../assets/images/ANMResults.png)
The cross-correlation map (top) and the square fluctuation plot (bottom) for the SARS-CoV-2 (left) and SARS (right) RBDs using ANM. Like the results from the GNM analysis, the map and plot are very similar between the two RBDs, indicating that their dynamics are similar.
{: style="font-size: medium;"}

The fluctuations calculated by ANM provide information on possible movement and flexibility but do not depict actual protein movements. To predict these movements, we used NMWiz and VMD to create animations of the protein fluctuations over time as calculated via ANM analysis. The following two animations show of the complex of each virus's RBD (purple) bound with ACE2 (green). Important residues from the three sites of conformational differences from the previous lessons are also highlighted.

### SARS-CoV spike protein RBD (PDB: 2ajf)

|SARS RBD|Purple|
|:-------|:-----|
|Resid 463 to 472 (Loop)|Yellow|
|Resid 442 (Hotspot 31)|Orange|
|Resid 487 (Hotspot 353)|Red|
|--------|-----|
|ACE2|Green|
|Resid 79, 82, 83 (Loop)|Silver|
|Resid 31, 35 (Hotspot 31)|Orange|
|Resid 38, 353 (Hotspot 353)|Red|

<center>
<video width="484" height="500" controls="controls">
  <source src="../assets/videos/2ajf_B&F.mp4" type="video/mp4">
</video>
</center>

### SARS-CoV-2 spike protein chimeric RBD (PDB: 6vw1)

|SARS-CoV-2 (Chimeric) RBD|Purple|
|:------------------------|:-----|
|Resid 476 to 486 (Loop)|Yellow|
|Resid 455 (Hotspot 31)|Blue|
|Resid 493 (Hotspot 31)|Orange|
|Resid 501 (Hotspot 353)|Red|
|--------------------------|-----|
|ACE2|Green|
|Resid 79, 82, 83 (Loop)|Silver|
|Resid 31, 35 (Hotspot 31)|Orange|
|Resid 38, 353 (Hotspot 353)|Red|

<center>
<video width="496" height="472" controls="controls">
  <source src="../assets/videos/6vw1_B&F.mp4" type="video/mp4">
</video>
</center>

Recall from our work in the [previous lesson](NAMD#differences-in-interaction-energy-with-ace2-between-sars-and-sars-cov-2) that the greatest contribution of negative energy to the RBD/ACE2 complex in SARS-CoV-2 was the region called "hotspot 31". This region is highlighted in blue and orange in the above figures. If you look very closely (you may need to zoom in), as the protein swings in to bind with ACE2, the blue and orange regions appear to line up just a bit more naturally in the SARS-CoV-2 animation than in the SARS-CoV animation. That is, the improved binding that we hypothesized for a static structure appears to be confirmed by dynamics simulations. This provides one more piece of evidence that SARS-CoV-2 is more effective at binding to the ACE2 enzyme.

## Summing Up

<!--
Move this to conclusion 2?
Finally, we would point out that although scientific research five decades ago was, like the Soviet protein institute, siloed away from the public, the COVID-19 pandemic offers an excellent example of how citizens around the world can follow and even get involved in real research.

For example, the [GISAID](https://www.gisaid.org) organization published their first publicly available SARS-CoV-2 genome on December 24, 2019. Within six months, this database had grown to contain over 50,000 entries. At any point in early 2020, anyone could have grabbed their favorite SARS-CoV-2 genome, excised the sequence of the spike protein, and used one of a variety of different software resources to predict its structure. Alternatively, a more communally minded person could have enlisted their home machine as part of a global race to provide vaccine developers with accurate estimations of the protein's structure. Despite 2020 being a time of international crisis, the progress we have made in opening scientific research to the public is cause for optimism.
-->

In this module, we have discussed a great deal of computational methods surrounding the analysis of proteins. We began with a discussion of the fundamental problem of determining a protein's structure. Because experimental methods for identifying protein structure are costly and time consuming, we transitioned to discuss algorithmic approaches that do a good job of predicting a protein's structure from its sequence of amino acids.

We then transitioned to the problem of comparing structures for related proteins, with a lengthy case study on comparing the SARS-CoV and SARS-CoV-2 spike protein structures. We saw that the problem of quantifying the "difference" between two shapes is more challenging than it might seem, and we established both global and local structure comparison metrics. We applied these approaches to isolate three candidate regions of the SARS-CoV-2 spike protein that seem to be bound better to the ACE2 enzyme, and we quantified this binding using a localized energy function.

We then saw that to infer a protein's function, we need to move from studying structure to molecular dynamics, studying how the protein behaves within its environment as it flexes and bends in order to interact with other molecules.

This is a great deal of ground to have covered, but if we would like to present an ultimate moral to this chapter, it is that biology is an extremely complex subject. The structure prediction problem is decades old and still not fully solved, and computational approaches for studying protein structure and dynamics are sophisticated. But there is just as much that we have left undiscussed. What happens after the spike protein binds to ACE2? How does the virus enter the cell? How does it replicate itself? How does it fight our immune systems, and how can we design a vaccine to fight back? We would need far more time than we have here to treat all of these topics, but if
you are interested in an online course covering some of them, then check out the free online course *<a href="https://sites.google.com/view/sarswars/home" target="_blank">SARS Wars: A New Hope</a>* by our colleague <a href="https://www.cs.cmu.edu/~cjl/" target="_blank">Christopher James Langmead</a>.

Thus concludes the third module of this course. In the course's final module, we will turn our attention to a very different type of problem. To fight a virus like SARS, your body employs a cavalry of white blood cells. Maintaining healthy levels of these cells is vital to a strong immune system, and blood reports run counts of these cells to ensure they are within normal ranges. Can we teach a computer to run this analysis automatically?

We hope you will join us to find out! (New module coming soon.)

<!--
A Mutating Virus

One of the main characteristics of life is the ability to reproduce. Of course, this includes the replication of genetic material, whether it be DNA or RNA. However, the replication process is not completely error-proof and can the biological machinery can make mistakes. These changes in the genetic material are called mutations and are the driving force in evolution. These mutations are often harmful to the organism or can have little to no effect. On rare occasions, the mutations can enhance the organism and allow it to outcompete members of the same species and pass down the positive mutation to its offsprings. As time passes, more and more members of the species will have accumulated mutations and may eventually be considered a new species or variant of the species depending on how much the genetic material has changed. Although scientists are still debating over whether viruses are alive, they are still involved in genetic replication, albiet hijacking the host's biological machinery. Nonetheless, the constant replication of viruses often lead to mutations and creation of new strains or variants of the virus. Why else do we need annual flu shots?

With the widespread rate of infection of COVID-19, it is inevitable for mutations to occur and create variants of the virus. In fact, there are already multiple strains that are circulating globally. The more well-known variants as of January 2021, are variant B.1.1.7 in the United Kingdom, variant 1.351 in South Africa, and variant P.1 in Brazil. From observations, it appears that these new variants are more infectious and can spread more easily [^cdc]. However, there are still much in the unknown.

There are important questions that need to be answered:
* How far have the variants spread?
* How do they differ from current variants?
* How do their infectivity and severity differ?
* How will they respond to current vaccines and treatment?

As COVID-19 continues to circulate, new variants will continue to emerge, meaning that this is still an active area of study.
-->


<!--
[Exercises](exercises){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}
-->


[^Dwek]: Dwek, R.A. Glycobiology: Toward Understanding the Function of Sugars. Chem. Rev. 96(2),  683-720 (1996). https://doi.org/10.1021/cr940283b

[^Varki]: Varki A, Lowe JB. Biological Roles of Glycans. In: Varki A, Cummings RD, Esko JD, et al., editors. Essentials of Glycobiology. 2nd edition. Cold Spring Harbor (NY): Cold Spring Harbor Laboratory Press; 2009. Chapter 6. https://www.ncbi.nlm.nih.gov/books/NBK1897/

[^Raman]: Raman, R., Tharakaraman, K., Sasisekharan, V., & Sasisekharan, R. 2016. Glycan-protein interactions in viral pathogenesis. Current opinion in structural biology, 40, 153–162. https://doi.org/10.1016/j.sbi.2016.10.003

[^Grant]: Grant, O. C., Montgomery, D., Ito, K., & Woods, R. J. 2020. Analysis of the SARS-CoV-2 spike protein glycan shield: implications for immune recognition. bioRxiv. https://doi.org/10.1101/2020.04.07.030445

[^Casalino]: Casalino, L., Gaieb, Z., Dommer, A. C., Harbison, A. M., Fogarty, C. A., Barros, E. P., Taylor, B. C., Fadda, E., & Amaro, R. E. 2020. Shielding and Beyond: The Roles of Glycans in SARS-CoV-2 Spike Protein. bioRxiv : the preprint server for biology, 2020.06.11.146522. https://doi.org/10.1101/2020.06.11.146522

[^Watanabe]: Watanabe, Y., Allen, J., Wrapp, D., McLellan, J., Crispin, M. Site-specific glycan analysis of the SARS-CoV-2 spike. Science 369, 330-333. https://doi.org/10.1126/science.abb9983

[^Skjaerven]: Skjaerven, L., Hollup, S., Reuter, N. 2009. Journal of Molecular Structure: THEOCHEM 898, 42-48. https://doi.org/10.1016/j.theochem.2008.09.024

[^Yang]: Yang, L., Song, G., Jernigan, R. 2009. Protein elastic network models and the ranges of cooperativity. PNAS 106(30), 12347-12352. https://doi.org/10.1073/pnas.0902159106

[^cdc]: New COVID-19 Variants. 2021. Retrieved January 27, 2021, from https://www.cdc.gov/coronavirus/2019-ncov/transmission/variant.html

[^Yang]: Yang, L., Song, G., Jernigan, R. 2009. Protein elastic network models and the ranges of cooperativity. PNAS 106(30), 12347-12352. https://doi.org/10.1073/pnas.0902159106

[^Yang2]: Yang, L., Song, G., & Jernigan, R. L. 2009. Comparisons of experimental and computed protein anisotropic temperature factors. Proteins, 76(1), 164–175. https://doi.org/10.1002/prot.22328

[^Garrett]: Garrett, R. H., Grisham, C. M., 2010. *Biochemistry*, 4th ed. Brooks/Cole, Cengage Learning.

[^Davis]: Davis, M., Tobi, D. 2014. Multiple Gaussian network modes alignments reveals dynamically variable regions: The hemoglobin case. Proteins: Structure, Function, and Bioinformatics, 82(9), 2097-2105. https://doi-org.cmu.idm.oclc.org/10.1002/prot.24565

[^Soh]: Soh, W. T., Liu, Y., Nakayama, E. E., Ono, C., Torii, S., Nakagami, H., Matsuura, Y., Shioda, T., Arase, H. The N-terminal domain of spike glycoprotein mediates SARS-CoV-2 infection by associating with L-SIGN and DC-SIGN.
