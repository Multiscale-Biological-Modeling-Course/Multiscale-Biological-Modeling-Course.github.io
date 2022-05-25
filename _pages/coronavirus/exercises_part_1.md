---
permalink: /coronavirus/exercises_part_1
title: "Coronavirus Exercises Part 1"
sidebar:
 nav: "coronavirus"
toc: true
toc_sticky: true
image: "../assets/images/SARS_spike_proteins.jpg"
---

## Determining a shape's center of mass mathematically

In the main text, we noted that the center of some shapes can be computed mathematically. Consider the semicircular arc shown in the figure below, with endpoints (-1, 0) and (1, 0).

[![image-center](../assets/images/600px/semicircular_arc.png){: .align-center width="300px"}](../assets/images/semicircular_arc.png)
A semicircular arc with radius 1 corresponding to a circle whose center is at the origin.
{: style="font-size: medium;"}

**Exercise:** Determine the center of mass of the shape in the figure above. (**Hint:** finding the x-coordinate of the center of mass is easy, but finding the y-coordinate requires a little calculus for finding an average value.)
{: .notice--success}

**Exercise:** Say that we connect (-1, 0) and (0, 1) to form a closed semicircle. What will be the center of mass of the resulting shape?
{: .notice--success}

## Calculating RMSD

Consider the two (very) hypothetical protein structures shown in the figure below with vectorizations of eight points each.

[![image-center](../assets/images/600px/rmsd_exercise.png){: .align-center}](../assets/images/rmsd_exercise.png)
Two hypothetical protein structures with vectorizations into eight points each.
{: style="text-align: center; font-size: medium;"}

**Exercise:** Using the vectorization of the figures indicated, estimate the center of mass of these two protein structures.
{: .notice--success}

**Exercise:** Without rotating these structures, align the two structures so that they have the same center of mass, and determine the RMSD between the two structures for the vectorizations shown.
{: .notice--success}

## Practicing *Ab initio* and homology modeling

In this exercise, we will perform *ab initio* and homology structure prediction on a simple protein, the human hemoglobin subunit alpha that we have worked with in this module. First, go to the <a href="https://www.rcsb.org/" target="_blank">protein data bank</a> and search for the protein “1SI4”. Download the PDB file by clicking on “Download Files” and then “PDB Format”. We will use this file for structure comparisons later. Next, go to the “Sequence” tab and click “Display Files” and then “FASTA Sequence”. Copy the first sequence corresponding to the alpha subunit and submit it to the ab initio structure prediction software, <a href="https://zhanggroup.org/QUARK/" target="_blank">QUARK</a>, and your choice of homology modeling software: <a href="https://swissmodel.expasy.org/" target="_blank">SWISS-MODEL</a>, <a href="https://robetta.bakerlab.org/" target="_blank">Robetta</a>, or <a href="https://galaxy.seoklab.org/cgi-bin/submit.cgi?type=TBM" target="_blank">GalaxyWEB</a>. Once you get the results, use ProDy to calculate the RMSD between the predicted structures and the actual structure (1SI4).

**Exercise:** Which type of modeling resulted in the most accurate prediction? Is this what you expected? (**Hint:** Use “Chain A” to focus on subunit alpha.)
{: .notice--success}

## Trying out AlphaFold

In the conclusion of part 1 of this module, we introduced AlphaFold from DeepMind that won the 14th CASP contest in 2020 by a wide margin. A simplified version of AlphaFold is available on Colab. This version currently does not work with the entire spike protein, so we will use the human hemoglobin subunit alpha once again. Following the directions from the previous exercise, grab the protein sequence of the alpha subunit. Next, open the <a href="https://colab.research.google.com/github/deepmind/alphafold/blob/main/notebooks/AlphaFold.ipynb#scrollTo=woIxeCPygt7K" target="_blank">simplified version of AlphaFold</a>. Read the documentation and follow the directions in each step to generate the predicted structure.

**Exercise:** Use ProDy to calculate the RMSD between the predicted structure and the actual structure (1SI4). Did this simplified version of AlphaFold perform better than your *Ab initio* and homology modeling results from the previous exercise?
{: .notice--success}
