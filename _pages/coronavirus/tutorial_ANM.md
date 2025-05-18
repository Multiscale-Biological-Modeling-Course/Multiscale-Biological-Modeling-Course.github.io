---
permalink: /coronavirus/tutorial_ANM
title: "Software Tutorial: Adding Directionality to Spike Protein GNM Simulations Using ANM"
description: "Tutorial: add directionality to spike-protein dynamics using Anisotropic Network Models, revealing collective motions that enable fusion."
excerpt: "Module 3: Analyzing the Coronavirus Spike Protein"
sidebar:
 nav: "coronavirus"
header:
  overlay_image: "../assets/images/SARS_spike_proteins.jpg"
  overlay_filter: 0.3
image: "../assets/images/SARS_spike_proteins.jpg"
---

In this tutorial, we will use **Normal Mode Wizard (NMWiz)**, a VMD plugin that serves as a GUI for ProDy, to perform ANM analysis on the SARS-CoV-2 RBD. We will visualize the results in a cross-correlation map and square fluctuation plot and then produce ANM animations showing the predicted range of motion of the SARS-CoV-2 spike RBD.

Before starting, make sure that you have installed VMD and know how to load molecules into the program. If you need a refresher, visit the [Multiseq tutorial](tutorial_multiseq).

First, load the SARS-CoV-2 spike protein/ACE2 enzyme complex (<a href="https://www.rcsb.org/structure/6vw1" target="_blank">6vw1</a>) into VMD. Then, start up NMWiz by clicking `Extensions > Analysis > Normal Mode Wizard`.

[![image-center](../assets/images/600px/ANM1.png){: .align-center loading="lazy"}](../assets/images/ANM1.png)
{: style="font-size: medium;"}

A small window will open. Select `ProDy Interface`.

[![image-center](../assets/images/600px/ANM2.png){: .align-center loading="lazy" width="200px"}](../assets/images/ANM2.png)
{: style="font-size: medium;"}

We want to focus on the RBD of SARS-CoV-2, so we need to choose a new selection. In `ProDy Interface`, change `Selection` to `protein and chain F` and click `Select`. Next, make sure that `ANM calculation` is selected for `ProDy job:`. Check the box for `write and load cross-correlations heatmap`. Finally, click `Submit Job`.

[![image-center](../assets/images/600px/ANM3.png){: .align-center loading="lazy" width="300px"}](../assets/images/ANM3.png)
{: style="font-size: medium;"}

**Note:** Let the program run and do not click any of the VMD windows, as this may cause the program to crash or become unresponsive. The job can take between a few seconds and a few minutes. When the job is complete, you will see a new window `NMWiz - 6vw1_anm ...` and the cross=correlation heatmap appear.
{: .notice--info}

[![image-center](../assets/images/600px/ANM4.png){: .align-center loading="lazy" width="300px"}](../assets/images/ANM4.png)
{: style="font-size: medium;"}

[![image-center](../assets/images/600px/ANM5.png){: .align-center loading="lazy" width="400px"}](../assets/images/ANM5.png)
{: style="font-size: medium;"}

Now that the ANM calculations are completed, you will see the visualization displayed in `VMD Main`. Disable the original visualization of `6vw1` by double-clicking on the letter `D`. The letter will change red to indicate that it has been disabled.

[![image-center](../assets/images/600px/ANM6.png){: .align-center loading="lazy" width="400px"}](../assets/images/ANM6.png)
{: style="font-size: medium;"}

In `OpenGL Display`, you can see the protein with numerous arrows representing the calculated fluctuations.

[![image-center](../assets/images/600px/ANM7.png){: .align-center loading="lazy" width="400px"}](../assets/images/ANM7.png)
{: style="font-size: medium;"}

To visualize the protein movements as described by the arrows, we need to create the animation. Return to the `NMWiz - 6vw1_anm...` window and click `Make` next to `Animations`.

[![image-center](../assets/images/600px/ANM8.png){: .align-center loading="lazy" width="300px"}](../assets/images/ANM8.png)
{: style="font-size: medium;"}

`VMD Main` should now show a new row for the animation.

[![image-center](../assets/images/600px/ANM9.png){: .align-center loading="lazy" width="400px"}](../assets/images/ANM9.png)
{: style="font-size: medium;"}

The animation should also be visible in `OpenGL Display`. However, the previous visualizations are somewhat in the way. We can disable them in the same way as before by double-clicking the letter `D`.

[![image-center](../assets/images/600px/ANM10.png){: .align-center loading="lazy"}](../assets/images/ANM10.png)
{: style="font-size: medium;"}


You should now be able to see the animation of the ANM fluctuations of 6vw1, as shown in the figure below.

<center>
<video width="496" height="472" controls="controls">
  <source src="../assets/videos/6vw1_chainF.mp4" type="video/mp4">
</video>
</center>

We now will return to the main text and interpret our results.

[Return to main text](anm#anm-analysis-of-the-coronavirus-binding-domain){: .btn .btn--warning .btn--large}
{: style="font-size: 100%; text-align: center;"}
