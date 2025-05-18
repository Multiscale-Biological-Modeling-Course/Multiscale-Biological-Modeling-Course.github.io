---
permalink: /coronavirus/tutorial_DynOmics
title: "Software Tutorial: Integrating Molecular Dynamics Analyses with DynOmics"
description: "Integrate molecular-dynamics results with DynOmics to analyze coronavirus spike flexibility, conformational shifts, and mutation impacts."
excerpt: "Module 3: Analyzing the Coronavirus Spike Protein"
sidebar:
 nav: "coronavirus"
header:
  overlay_image: "../assets/images/SARS_spike_proteins.jpg"
  overlay_filter: 0.3
image: "../assets/images/SARS_spike_proteins.jpg"
---

In this tutorial, we will be using a publicly available web server, DynOmics, produced by Dr. Hongchun Li and colleagues at the University of Pittsburgh School of Medicine. This server is dedicated to performing molecular dynamics analysis by integrating the GNM and ANM models that we learned about in the [main text](anm).

Navigate to the <a href="http://enm.pitt.edu/index.php" target="_blank">DynOmics homepage</a>. This page contains many options that we can change to customize our analysis, but we will keep the default options for now.

To choose our target molecule, we need to input the PDB ID. Since we will be performing the analysis on the SARS-CoV-2 spike protein, enter `6vxx` under `PDB ID`. Then, click `Submit`.

[![DynOmics tutorial step 1](../assets/images/600px/DynOmics1.png){: .align-center loading="lazy"}](../assets/images/DynOmics1.png)
{: style="font-size: medium;"}

Once the analysis is complete, you will see all the ANM and GNM results listed next to an interactive visualization of the protein. In addition, the visualization is colored based on the predicted protein flexibility from the slow mode analysis.

[![DynOmics tutorial step 2](../assets/images/600px/DynOmics2.png){: .align-center loading="lazy"}](../assets/images/DynOmics2.png)
{: style="font-size: medium;"}

Let's start exploring some of the results by clicking `Molecular Motions - Animations`. This shows an interactive animation of the protein with the same coloring as before and showing the predicted motion of protein fluctuation based on ANM calculations. On the right, we can customize the animation by changing the vibrations and vectors to make the motions more pronounced.

We can also change the `Mode index`. We learned in the main text that the motion of protein fluctuations can be broken down into a collection of individual modes. By changing the `Mode index`, we can see the different contribution of each mode to the motion. The lower the index of the mode, the greater this mode contributes to the square fluctuations of the protein's residues.

[![DynOmics tutorial step 3](../assets/images/600px/DynOmics3.png){: .align-center loading="lazy"}](../assets/images/DynOmics3.png)
{: style="font-size: medium;"}

We can also download the calculations as a `.nmd` file and visualize it in VMD. If you are interested in using VMD, open the software and go to `Extensions > Analysis > Normal Mode Wizard`. Then, click `Load NMD File` and select the `.nmd` file that you downloaded. Now that the ANM calculation is loaded into VMD, you can customize the visualization and recreate the animation by clicking `Animation: Play`.

[![DynOmics tutorial step 4](../assets/images/600px/DynOmics4.png){: .align-center loading="lazy"}](../assets/images/DynOmics4.png)
{: style="font-size: medium;"}

[![DynOmics tutorial step 5](../assets/images/600px/DynOmics5.png){: .align-center loading="lazy"}](../assets/images/DynOmics5.png)
{: style="font-size: medium;"}

Next, return to DynOmics and click `Mean-Square Fluctuations of Residues`. On this page, you will see two visualizations of the protein, labeled `Theoretical B-Factors` and `Experimental B-Factors` as well as the B-factor plot. Recall that theoretical B-factors are calculated during GNM analysis, whereas experimental B-factors are included in the PDB. On the bottom, we can see the plot of the B-factors across the entire protein split into chains.

[![DynOmics tutorial step 6](../assets/images/600px/DynOmics6.png){: .align-center loading="lazy"}](../assets/images/DynOmics6.png)
{: style="font-size: medium;"}

The next result page we will visit is `Selected Modes - Color-coded Diagrams`. On this page, we can see the shape of each individual mode, or an average of the "slowest" two, three, or ten modes. As we saw earlier in the main text, we can see a wide peak that corresponds to the RBD of the spike protein. Clicking the plot highlights the residue on the interactive visualizations.

[![DynOmics tutorial step 7](../assets/images/600px/DynOmics7.png){: .align-center loading="lazy"}](../assets/images/DynOmics7.png)
{: style="font-size: medium;"}

Next, click `Cross-correlations between Residue Fluctuations`, which shows the full cross-correlation heat map that we produced in the GNM tutorial.

[![DynOmics tutorial step 8](../assets/images/600px/DynOmics8.png){: .align-center loading="lazy" width="400px"}](../assets/images/DynOmics8.png)
{: style="font-size: medium;"}

Click `Inter-residue Contact Map`, which shows a visualization of the connected alpha carbon network based on the threshold distance, along with a contact map (called a "connectivity map"). The default threshold distance is set to 7.3 angstroms; to change the threshold, we need to perform the calculations again after changing the cutoff distance in `Advanced options`.

[![DynOmics tutorial step 9](../assets/images/600px/DynOmics9.png){: .align-center loading="lazy"}](../assets/images/DynOmics9.png)
{: style="font-size: medium;"}

[![DynOmics tutorial step 10](../assets/images/600px/DynOmics10.png){: .align-center loading="lazy"}](../assets/images/DynOmics10.png)
{: style="font-size: medium;"}

There is plenty more to say about the additional results produced by DynOmics; if you are interested in these results, please check out the <a href="http://enm.pitt.edu/Tutorial.php" target="_blank">DynOmics tutorial</a>.

If you have made it this far, congratulations! You have become an expert in protein analysis. We will now head back to the main text to wrap up this module with some concluding thoughts.

[Return to main text](anm#fighting-a-virus-with-open-science){: .btn .btn--warning .btn--large}
{: style="font-size: 100%; text-align: center;"}
