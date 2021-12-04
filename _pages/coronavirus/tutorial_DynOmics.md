---
permalink: /coronavirus/tutorial_DynOmics
title: "Software Tutorial: Integrating Molecular Dynamics Analyses with DynOmics"
sidebar:
 nav: "coronavirus"
image: "../assets/images/SARS_spike_proteins.jpg"
---

In this tutorial, we will be using a publicly available web server, DynOmics, produced by Dr. Hongchun Li and colleagues at the University of Pittsburgh School of Medicine. This server is dedicated to performing molecular dynamics analysis by integrating the GNM and ANM models that we learned about in the [main text](conclusion_part_2).

**Note:** At the current time, the DynOmics server is down. Please let us know in the comments if you find that it is back up.
{: .notice--warning}

Navigate to the <a href="http://enm.pitt.edu/index.php" target="_blank">DynOmics homepage</a>. This page contains many options that we can change to customize our analysis, but we will keep the default options for now.

To choose our target molecule, we need to input the PDB ID. Since we will be performing the analysis on the SARS-CoV-2 spike protein, enter `6vxx` under `PDB ID`. Then, click `Submit`.

[![image-center](../assets/images/600px/DynOmics1.png){: .align-center}](../assets/images/DynOmics1.png)
{: style="font-size: medium;"}

Once the analysis is complete, you will see all the ANM and GNM results listed next to an interactive visualization of the protein. In addition, the visualization is colored based on the predicted protein flexibility from the slow mode analysis.

[![image-center](../assets/images/600px/DynOmics2.png){: .align-center}](../assets/images/DynOmics2.png)
{: style="font-size: medium;"}

Let's start exploring some of the results by clicking `Molecular Motions - Animations`. This shows an interactive animation of the protein with the same coloring as before and showing the predicted motion of protein fluctuation based on ANM calculations. On the right, we can customize the animation by changing the vibrations and vectors to make the motions more pronounced.

We can also change the `Mode index`. We learned in the main text that the motion of protein fluctuations can be broken down into a collection of individual modes. By changing the `Mode index`, we can see the different contribution of each mode to the motion. The lower the index of the mode, the greater this mode contributes to the square fluctuations of the protein's residues.

[![image-center](../assets/images/600px/DynOmics3.png){: .align-center}](../assets/images/DynOmics3.png)
{: style="font-size: medium;"}

We can also download the calculations as a `.nmd` file and visualize it in VMD. If you are interested in using VMD, open the software and go to `Extensions > Analysis > Normal Mode Wizard`. Then, click `Load NMD File` and select the `.nmd` file that you downloaded. Now that the ANM calculation is loaded into VMD, you can customize the visualization and recreate the animation by clicking `Animation: Play`.

[![image-center](../assets/images/600px/DynOmics4.png){: .align-center}](../assets/images/DynOmics4.png)
{: style="font-size: medium;"}

[![image-center](../assets/images/600px/DynOmics5.png){: .align-center}](../assets/images/DynOmics5.png)
{: style="font-size: medium;"}

Next, return to DynOmics and click `Mean-Square Fluctuations of Residues`. On this page, you will see two visualizations of the protein, labeled `Theoretical B-Factors` and `Experimental B-Factors` as well as the B-factor plot. Recall that theoretical B-factors are calculated during GNM analysis, whereas experimental B-factors are included in the PDB. On the bottom, we can see the plot of the B-factors across the entire protein split into chains.

[![image-center](../assets/images/600px/DynOmics6.png){: .align-center}](../assets/images/DynOmics6.png)
{: style="font-size: medium;"}

The next result page we will visit is `Selected Modes - Color-coded Diagrams`. On this page, we can see the shape of each individual mode, or an average of the "slowest" two, three, or ten modes. As we saw earlier in the main text, we can see a wide peak that corresponds to the RBD of the spike protein. Clicking the plot highlights the residue on the interactive visualizations.

[![image-center](../assets/images/600px/DynOmics7.png){: .align-center}](../assets/images/DynOmics7.png)
{: style="font-size: medium;"}

In `Cross-correlations between Residue Fluctuations`, we can see the full cross-correlation heat map and see the correlation between each pair of residue.

[![image-center](../assets/images/600px/DynOmics8.png){: .align-center}](../assets/images/DynOmics8.png)
{: style="font-size: medium;"}

For `Inter-residue Contact Map`, you will see a visualization of the connected alpha-Carbon structure based on the cutoff distance. On the right is the Connectivity Map that indicates which pair of residues are within the cutoff distance. The default is set to 7.3 Å. If you want to change the threshold, we have to redo the calculations and change the cutoff distance in `Advanced options`.

[![image-center](../assets/images/600px/DynOmics9.png){: .align-center}](../assets/images/DynOmics9.png)
{: style="font-size: medium;"}

[![image-center](../assets/images/600px/DynOmics10.png){: .align-center}](../assets/images/DynOmics10.png)
{: style="font-size: medium;"}

Finally, in `Properties of GNM Mode Spectrum`, we can see two different plots on modes: *Frequency Dispersion* and *Degree of Collectivity*. We will pause to explain these two plots.

The **frequency dispersion** of the modes is the plot representing the frequency of each mode. The y-axis represents the reciprocal of the corresponding eigenvalue of the mode, where a higher value indicates a slow mode with low frequency, which are expected to be highly related to biological functions.

[![image-center](../assets/images/600px/hemoglobin_frequency.png){: .align-center}](../assets/images/hemoglobin_frequency.png)
The frequency dispersion of modes in human hemoglobin. Higher values indicates low frequency, slower modes that are likely to be highly relative to biological functions.
{: style="font-size: medium;"}

The **degree of collectivity** is the measure of the extent of structural elements, in this case residues, that move together for each mode. The degree of collectivity of the $$ k^{th} $$ mode is calculated by the following equation:

$$ Collectivity_k = \frac{1}{N} e^{- \sum^N_i \Delta R_i^2 ln \Delta R_i^2} $$

where *N* is the total number of residues. A high degree of collectivity indicates that the mode is highly cooperative and engages in a large portion of the structure. Low degree of collectivity indicates that the mode only affects a small region. Modes of high degree of collectivity are generally believed to be functionally relevant nodes and are usually found at the low frequency end of the mode spectrum.

[![image-center](../assets/images/600px/hemoglobin_collectivity.png){: .align-center}](../assets/images/hemoglobin_collectivity.png)
The degree of collectivitiy of modes in human hemoglobin. Higher values indicate modes that describe a large portion of the protein while low values indicate modes that describe small local regions.
{: style="font-size: medium;"}

When we produce these two plots for the SARS-CoV-2 spike protein, we obtain the following.

[![image-center](../assets/images/600px/DynOmics11.png){: .align-center}](../assets/images/DynOmics11.png)
{: style="font-size: medium;"}

That is all for how to get the structural dynamics results of DynOmics. If you are interested in the other results, DynOmics has provided its own tutorial <a href="http://enm.pitt.edu/Tutorial.php" target="_blank">here</a>.

We will now head back to the main text in order to analyze our GNM/ANM results of SARS-CoV-2 S protein and compare it with SARS-CoV S protein to see if we can distinguish any significant differences.

[Return to main text](conclusion_part_2#fighting-a-virus-with-open-science){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}
