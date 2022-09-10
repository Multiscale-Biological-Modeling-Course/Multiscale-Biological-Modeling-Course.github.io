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

**Exercise:** Determine the center of mass of the shape in the figure above. (**Hint:** finding the x-coordinate of the center of mass is easy, but finding the y-coordinate requires a little calculus.)
{: .notice--success}

**Exercise:** Say that we connect (-1, 0) and (0, 1) to form a closed semicircle. What will be the center of mass of the resulting shape?
{: .notice--success}

## Calculating RMSD

Consider the two shapes shown in the figure below with vectorizations of eight points each.

[![image-center](../assets/images/600px/rmsd_exercise.png){: .align-center}](../assets/images/rmsd_exercise.png)
Two hypothetical protein structures with vectorizations into eight points each.
{: style="text-align: center; font-size: medium;"}

**Exercise:** Using the vectorization of the figures indicated, estimate the center of mass of these two protein structures.
{: .notice--success}

**Exercise:** Without rotating these structures, align the two structures so that they have the same center of mass, and determine the RMSD between the two structures for the vectorizations shown.
{: .notice--success}

## Practicing *Ab initio* and homology modeling

Let's predict the structure of the beta subunit of human hemoglobin subunit alpha using both *ab initio* and homology structure prediction. To do so, first visit the <a href="https://www.rcsb.org/" target="_blank">Protein Data Bank</a> and search for the protein “1SI4”. Download the PDB file by clicking on “Download Files” and then “PDB Format”. We will use this file for structure comparisons later. Next, go to the “Sequence” tab and click “Display Files” and then “FASTA Sequence”. In this file, find the sequence corresponding to the beta subunit.

**Exercise:** Submit the beta subunit sequence to the *ab initio* structure prediction software, <a href="https://zhanggroup.org/QUARK/" target="_blank">QUARK</a> as well as your choice of homology modeling software: <a href="https://swissmodel.expasy.org/" target="_blank">SWISS-MODEL</a>, <a href="https://robetta.bakerlab.org/" target="_blank">Robetta</a>, and/or <a href="https://galaxy.seoklab.org/cgi-bin/submit.cgi?type=TBM" target="_blank">GalaxyWEB</a>.
{: .notice--success}

In a [tutorial](tutorial_rmsd), we saw how to use ProDy to compute RMSD between protein structures.

**Exercise:** Use ProDy to calculate the RMSD between your predicted structures from the previous exercise and the actual structure. (Use "Chain B" of the validated structure to focus on subunit beta.) Which type of modeling (*ab initio* or homology modeling) resulted in the most accurate structure prediction? Is this what you expected?
{: .notice--success}

## Trying out AlphaFold

A simplified version of AlphaFold is available for public use on Colab. This version currently does not work when using the entire spike protein, and so we will use the human hemoglobin subunit beta once again. Following the directions from a preceding exercise, obtain the protein sequence of the beta subunit. Next, open <a href="https://colab.research.google.com/github/deepmind/alphafold/blob/main/notebooks/AlphaFold.ipynb#scrollTo=woIxeCPygt7K" target="_blank">Colab's simplified version of AlphaFold</a>. Read the documentation and follow the directions in each step to generate a predicted structure.

**Exercise:** Use ProDy to calculate the RMSD between the predicted structure and the actual structure. Did this simplified version of AlphaFold perform better than your *ab initio* and homology modeling results from the previous exercise?
{: .notice--success}
