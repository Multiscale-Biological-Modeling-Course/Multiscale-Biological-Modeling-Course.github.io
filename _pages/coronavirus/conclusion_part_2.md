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

**Note:** The following section is at times mathematically advanced, so feel free to skim it if you do not have a background in linear algebra. A full treatment of the mathematics of GNMs can also be found in the chapter at <a href="https://www.csb.pitt.edu/Faculty/bahar/publications/b14.pdf" target="_blank">https://www.csb.pitt.edu/Faculty/bahar/publications/b14.pdf</a>
{: .notice--warning}

## An Introduction to Gaussian Network Models

## Converting a protein structure to vectors

In this section, we will introduce GNM using our old friend human hemoglobin protein (<a href="https://www.rcsb.org/structure/1a3n" target="_blank">1A3N.pdb</a>). We first convert hemoglobin into a network of nodes and springs, in which each alpha carbon is given by a node, and two alpha carbons are connected by a string if they are within a threshold distance; the figure below uses a threshold value of 7.3 angstroms.

<!--
Study by Kundu et al. showing that 7.3 Å being the optimal cutoff across a set of 113 proteins.
-->

[![image-center](../assets/images/600px/hemoglobin_enm.png){: .align-center}](../assets/images/hemoglobin_enm.png)
Conversion of human hemoglobin (left) to a network of nodes and springs (right) in which two nodes are connected by a spring if they are within a 7.3 angstroms.
{: style="font-size: medium;"}

As the alpha carbons within a protein move randomly, they are subject to *Gaussian* fluctuations that cause them to deviate in position from their equilibrium positions. Yet although atomic fluctuations are powered by randomness, the movements of protein atoms are in fact heavily correlated, owing to the evolution of the proteins to perform replicable tasks. As a result, the oscillations of these particles can be summarized by using a combination of functions explaining them, or **modes**. The paradigm resulting from the insight of breaking down oscillations into a comparatively small number of modes that summarize them is called **normal mode analysis (NMA)** and powers the elastic model that ProDy implements.

For a given node *i* and node *j*, the equilibrium position is represented by the equilibrium position vector $$ R_i^0 $$ and $$ R_j^0 $$. The fluctuation for node *i* and node *j* is represented by instantaneous fluction vectors $$ \Delta R_i $$ and $$ \Delta R_j $$. The distance between node *i* and node *j* at equilibrium is represented by the equilibrium distance vector $$ R_{ij}^0 $$, and the distance between nodes *i* and *j* in fluctuation is represented by the instantaneous distance vector $$ R_{ij} $$. Finally, we can calculate the fluctuation in the distance, $$ \Delta R_{ij} = R_{ij} - R_{ij}^0 = \Delta R_j - \Delta R_i $$.

[![image-center](../assets/images/600px/gaussian_fluctuations.png){: .align-center}](../assets/images/gaussian_fluctuations.png)
Schematic showing gaussian fluctuations between two nodes. Equilibrium positions of node *i* and node *j* are represented by distance vectors $$ R_i^0 $$ and $$ R_j^0 $$. The equilibrium distance between the nodes is labelled $$ R_{ij}^0 $$. The instantaneous fluction vectors, are labelled $$ \Delta R_i $$ and $$ \Delta R_j $$ and the instantaneous distance vector is labeled $$ \Delta R_{ij} $$. Image courtesy of Ahmet Bakan.
{: style="font-size: medium;"}

### Inner products and cross correlations

One of the most common analyses using GNM is on the coordinated movement between residues as the protein fluctuates. More specifically, we want to see how each residue will move relative to other residues, or the **cross-correlation** between the residues. Recall that we are representing the fluctuations as vectors (see Gaussian Fluctuations). Therefore, for some residue *i* and residue *j*, we are trying to compute how much of the fluctation vector $$ \Delta R_i $$ points in the the same direction as the fluctuation vector $$ \Delta R_j $$. To do this, we need to compute the **inner product** of the vectors, denoted by the angle brackets: $$ \langle \rangle $$, which is a generalization of the dot product. In other words, computing the inner product between the fluctuation vectors is synonomous to computing the cross-correlation between the residues. As such, the cross-correlation between residue *i* and residue *j* is often represented as $$ \langle \Delta R_i \cdot \Delta R_j \rangle $$.

Similarly, we can also calculate the expectation values of the fluctuation for each residue, or the **mean-square fluctuations**, which is the inner product of the fluctuation vector with itself, $$  \langle \Delta R_i^2 $$.

Now that we can compute the cross-correlation between residues, we can normalize the values and construct a normalized cross-correlation matrix, $$ C^{(n)} $$, such that:

$$ C^{(n)}_{ij} = \frac{\langle \Delta R_i \cdot \Delta R_j \rangle}{\left[ \langle \Delta R_i \cdot \Delta R_i \rangle \langle \Delta R_j \cdot \Delta R_j \rangle \right]^{\frac{1}{2}}} $$

where $$ C^{(n)}_{ij} $$ corresponds to the orientational cross-correlation between residue *i* and residue *j*. Because we normalized the values, the range of $$ C^{(n)}_{ij} $$ is $$ [-1,1] $$, where 1 means the residues are fully correlated in motion, and -1 means the residues are fully anti-correlated in motion.

Cross-correlation analysis provides useful insight on the structure of the protein. The regions of high correlation coming off the diagonal typically provide information on secondary structures (residues in the same secondary structure will typically move together). On the other hand, high correlation regions not near the diagonal provide information on the tertiary structure of the protein, such as protein domains and clues to which parts of the protein work together. In general, we can observe complex patterns of correlated and anti-correlated movement throughout the protein (both inter- and intrasubunit), which can act like some sort of fingerprint. We can compare the cross-correlation between regions of the same protein or the cross correlation map between two similar proteins to find differences in the correlation patterns. This would then provide clues in where the proteins or protein regions are different structurally and possibly functionally. After calculating the cross-correlation for each residue pair, we can organize the data as a matrix and then visualize it as a **cross-correlation heat map** like the figure below.

[![image-center](../assets/images/600px/hemoglobin_cc.png){: .align-center}](../assets/images/hemoglobin_cc.png)
Normalized cross-correlation heat map of human hemoglobin (1A3N) using the first 20 slowest normal modes. Red regions indicate correlated residue pairs which move in the same direction; blue regions indicate anti-correlated residue pairs which move in opposite directions.
{: style="font-size: medium;"}

In the cross-correlation map of human hemoglobin above, we see four squares of positive correlation along the diagonal. This represents the four subunits of hemoglobin, $$ \alpha_1 $$, $$ \beta_1 $$, $$ \alpha_2 $$, and $$ \beta_2 $$ in this order and the intrasubunit correlations. We can differentiate between the two types of subunits by comparing the correlation patterns between the four squares. We see that the same patterns can be seen between the first and third square, and the second and fourth square. Assuming that first square represents $$ \alpha_1 $$, we can deduce that the third square represents $$ \alpha_2 $$, and that the second and fourth square represent $$ \beta $$ subunits.

The rest of the cross-correlation map (regions next to the diagonal squares) provide evidence of high intersubunit correlations between $$ \alpha_1 \beta_1 $$/$$ \alpha_2 \beta_2 $$, some correlation between the $$ \alpha_1 \beta_2 $$/$$ \alpha_2 \beta_1 $$, and minimal correlation between the $$ \alpha_1 \alpha_2 $$/$$ \beta_1 \beta_2 $$. This agrees with experimental analysis of human hemoglobin on the interaction of the extensive, cooperative interactions between $$ \alpha $$ and $$ \beta $$ subunits, and minimal interactions between $$ \alpha $$ subunits and between $$ \beta $$ subunits[^Garrett].

### Mean-square Fluctuations & B-factor

Just like cross-correlation, we can also visualize the mean-square fluctuations of the residues. This is typically done in two ways. The simplest is to directly plot the values, where the x-axis represent the residues and the y-axis represent the mean-square fluctuation $$ \langle \Delta R_i^2  \rangle $$. The other, more useful, method is to plot the B-factor. When performing crystallography, the displacement of atoms within the protein crystal decreases the intesity of the scattered X-ray, creating uncertainty in the positions of atoms. **B-factor**, also known as **temperature factor** or **Debye-Waller factor** is a measure of this uncertainty, which includes noise from positional variance of thermal protein motion, model errors, and lattice defects. B-factors are reported in addition to the atomic coordinates in the PDB entry. One of the main reason we use B-factors is that they scale with the mean-square fluctuation, such that for atom *i*:

$$ B_i = \frac{8 \pi^2}{3} \langle \Delta R_i^2 \rangle $$

We can calculate the **theoretical B-factors** using the equation and GNM analysis, and the correlation with the **experimental B-factors** that are included in the PDB entry as a simple way to evaluate the GNM analysis. A study in 2009 by Lei Yang et al. compared the experimental and theoretical B-factors of 190 sufficiently different (<50% similarity) protein stuctures from X-ray and found the correlation to be about 0.58 on average [^Yang2]. Below is a plot of the B-factor, synonomous to the mean-square fluctutation, of $$ \alpha_1 $$. Residues with high values are those that fluctuate with greater motion or residues with greater positional uncertainty, and are colored red in the figures. In this case, we see that the residues colored in red are generally at the ends of secondary structures in the outer edges of the protein and loops (segments in between secondary structures). This is expected because protein loops typically contain highly fluctuating residues.

[![image-center](../assets/images/600px/hemoglobin_b_factors.png){: .align-center}](../assets/images/hemoglobin_b_factors.png)
(Top): Human hemoglobin colored according to the GNM calculated theoretical B-factors (left) and the experimental B-factors (right). (Bottom): 2D plot comparing the theoretical and experimental B-factors of subunit $$ \alpha_1 $$ (chain A of the protein). $$ \alpha_1 $$ is located at the top left quarter of the protein figure. A correlation coefficient of 0.63 was calculated between the theoretical and experimental B-factors.
{: style="font-size: medium;"}

### Slow Modes

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

Much as a contact map indicated which amino acids in a protein structure are close to each other, we will use a **cross correlation map** to show whether the *movements* of different amino acids are coordinated as the protein flexes. A matrix *M* receives a value at *M*(*i*, *j*) equal to the correlation between the movements of the *i*-th and *j*-th amino acids in a protein structure. The values of this matrix are decimals ranging from -1 to 1. *M*(*i*, *j*) is equal to 1 if the movements are completely correlated (both amino acids always move in the same direction), a value of -1 if the movements are completely anticorrelated (both amino acids always move in opposite directions), and a value of 0 if the movements are completely uncorrelated.

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
