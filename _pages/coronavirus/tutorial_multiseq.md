---
permalink: /coronavirus/tutorial_multiseq
title: "Software Tutorial: Finding Local Differences in the SARS-CoV and SARS-CoV-2 Spike Protein Structures"
description: "Tutorial: use MultiSeq to pinpoint local structural differences between SARS-CoV and SARS-CoV-2 spike proteins for functional insight."
excerpt: "Module 3: Analyzing the Coronavirus Spike Protein"
sidebar:
 nav: "coronavirus"
toc: true
toc_sticky: true
header:
  overlay_image: "../assets/images/SARS_spike_proteins.jpg"
  overlay_filter: 0.3
  image_alt: "Illustration of a SARS-CoV-2 viral particle covered in spike proteins."
image: "../assets/images/SARS_spike_proteins.jpg"
---

In this tutorial, we will get started with VMD and then calculate Qres between the SARS-CoV-2 RBD (PDB entry: <a href="https://www.rcsb.org/structure/6vw1" target="_blank">6vw1</a>) and SARS-CoV RBD (PDB entry: <a href="https://www.rcsb.org/structure/2ajf" target="_blank">2ajf</a>) using the VMD plugin Multiseq. By locating regions with low Qres, we can hopefully identify regions of structural differences between the two RBDs.

Multiseq aligns two protein structures using a tool called **Structural Alignment of Multiple Proteins (STAMP)**. Much like the Kabsch algorithm considered in part 1 of the module, STAMP minimizes the distance between alpha carbons of the aligned residues for each protein or molecule by applying rotations and translations. If the structures do not have common structures, then STAMP will fail. For more details on the algorithm used by STAMP, click <a href="http://www.compbio.dundee.ac.uk/manuals/stamp.4.4/stamp.pdf" target="_blank">here</a>.

**Note:** As of the current time, the STAMP alignment step used by Multiseq is not working for most users, especially Windows users. We will update this module when the software is fixed.
{: .notice--info}

## Getting started

For this tutorial, first <a href="https://www.ks.uiuc.edu/Development/Download/download.cgi?PackageName=VMD" target="_blank">download VMD</a>. Throughout this tutorial, the program may prompt you to download additional protein database information, which you should accept.

We will need to download the `.pdb` files for 6vw1 and 2ajf. Visit the <a href="https://www.rcsb.org/structure/6vw1" target="_blank">6vw1</a> and <a href="https://www.rcsb.org/structure/2ajf" target="_blank">2ajf</a> PDB pages. For each protein,  click `Download Files` and select `PDB Format`. The following figure shows this for 6vw1.

[![Step 0 of Ridge visualization tutorial](../assets/images/600px/Ridge0.png){: .align-center loading="lazy"}](../assets/images/Ridge0.png)
{: style="font-size: medium;"}

## Aligning the RBD regions of two spike proteins

Next, launch VMD, which will open three windows. We will not use `VMD.exe`, the console window, in this tutorial. We will load molecules and change visualizations in `VMD Main`. Finally, we will use `OpenGL Display` to display our visualizations.

We will first load the SARS-CoV-2 RBD (6vw1) into VMD. In `VMD Main`, go to `File > New Molecule`. Click `Browse`, select your downloaded file (`6vw1.pdb`) and click `Load`.

[![Step 1 of Ridge visualization tutorial](../assets/images/600px/Ridge1.png){: .align-center loading="lazy"}](../assets/images/Ridge1.png)
{: style="font-size: medium;"}
[![Step 2 of Ridge visualization tutorial](../assets/images/600px/Ridge2.png){: .align-center loading="lazy"}](../assets/images/Ridge2.png)
{: style="font-size: medium;"}

The molecule should now be listed in `VMD Main`, with its visualization in `OpenGL Display`.

[![Step 3 of Ridge visualization tutorial](../assets/images/600px/Ridge3.png){: .align-center loading="lazy"}](../assets/images/Ridge3.png)
{: style="font-size: medium;"}

In the `OpenGL Display` window, you can click and drag the molecule to change its orientation. Pressing ‘r’ on your keyboard allows you to rotate the molecule, pressing ‘t’ allows you to translate the molecule, and pressing ‘s’ allows you to enlarge or shrink the molecule (or you can use your mouse's scroll wheel). Note that left click and right click have different actions.

We now will need to load the SARS-CoV RBD (2ajf). Repeat the above steps for `2ajf.pdb`.

After both molecules are loaded into VMD, start up Multiseq by clicking on `Extensions > Analysis > Multiseq`.

[![Qres tutorial step 1](../assets/images/600px/Qres1.png){: .align-center loading="lazy"}](../assets/images/Qres1.png)
{: style="font-size: medium;"}

You will see all the chains listed out per file. Both PDB files contain two biological assemblies of the structure. The first is made up of Chain A (ACE2) and Chain E (RBD), and the second is Chain B (ACE2) and Chain F (RBD). Because Chain A is identical to Chain B, and Chain E is identical to Chain F, we only need to work with one assembly. (We will use the second assembly.)

[![Qres tutorial step 2](../assets/images/600px/Qres2.png){: .align-center loading="lazy"}](../assets/images/Qres2.png)
{: style="font-size: medium;"}

Because we only want to compare the RBD, we will only keep chain F of each structure. To remove the other chains, select the chain and click `Edit > Cut`.

[![Qres tutorial step 3](../assets/images/600px/Qres3.png){: .align-center loading="lazy"}](../assets/images/Qres3.png)
{: style="font-size: medium;"}

Click `Tools > Stamp Structural Alignment`, and a new window will open up.

[![Qres tutorial step 4](../assets/images/600px/Qres4.png){: .align-center loading="lazy"}](../assets/images/Qres4.png)
{: style="font-size: medium;"}

Keep all the values and click `OK`; once you have done so, the RBD regions will have been aligned.

[![Qres tutorial step 5](../assets/images/600px/Qres5.png){: .align-center loading="lazy"}](../assets/images/Qres5.png)
{: style="font-size: medium;"}

## Visualizing a structural alignment

Now that we have aligned the two RBD regions, we would like to compare their Qres values over the entire RBD. To see a coloring of the protein alignment based on Qres, click `View > Coloring > Qres`.

[![Qres tutorial step 6](../assets/images/600px/Qres6.png){: .align-center loading="lazy"}](../assets/images/Qres6.png)
{: style="font-size: medium;"}

Blue indicates a high value of Qres, meaning that the protein structures are similar at this position; red indicates low Qres and dissimilar protein structures.

[![Qres tutorial step 7](../assets/images/600px/Qres7.png){: .align-center loading="lazy"}](../assets/images/Qres7.png)
{: style="font-size: medium;"}

The `OpenGL Display` window will now color the superimposed structures according to the value of Qres.

[![Qres tutorial step 8](../assets/images/600px/Qres8.png){: .align-center loading="lazy"}](../assets/images/Qres8.png)
{: style="font-size: medium;"}

We are looking for regions of consecutive amino acids having low Qres, which correspond to locations in which the coronavirus RBDs differ structurally. You may like to explore the alignments yourself to look for regions of interest before we head back to the main text and discuss our results.

[Return to main text](multiseq#local-comparison-of-spike-proteins-leads-us-to-a-region-of-interest){: .btn .btn--warning .btn--large}
{: style="font-size: 100%; text-align: center;"}
