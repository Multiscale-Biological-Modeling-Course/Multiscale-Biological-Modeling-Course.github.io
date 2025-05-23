---
permalink: /motifs/tutorial_nar_mathematically_controlled
title: "Software Tutorial: Ensuring a mathematically controlled simulation for comparing simple regulation to negative autoregulation"
description: "Tutorial: build a mathematically controlled comparison for negative autoregulation, quantifying response time, overshoot, and noise resilience."
excerpt: "Module 1: Finding Motifs in Transcription Factor Networks"
sidebar:
 nav: "motifs"
header:
  overlay_image: "../assets/images/repressilator_chart.png"
  overlay_filter: 0.3
  image_alt: "Chart of the concentrations of three particles involved in the repressilator, a synthetic biological oscillating system."
image: "../assets/images/repressilator_chart.png"
---

**Note:** We are currently in the process of updating this tutorial to the latest version of MCell, CellBlender, and Blender. This tutorial works with MCell3, CellBlender 3.5.1, and Blender 2.79. Please see a [previous tutorial](../prologue/tutorial-random-walk) for a link to download these versions.
{: .notice--info}

In this tutorial, we will use CellBlender to adapt our simulation from the [tutorial](tutorial_nar) on negative autoregulation into a mathematically controlled simulation.

First, open the file `NAR_comparison.blend` from the negative autoregulation tutorial and save a copy of the file as `NAR_comparison_equal.blend`. You may also download the completed tutorial files <a href="../tutorials/NAR_compare_equal.blend" download="NAR_compare_equal.blend">here</a>.

Now go to `CellBlender > Reactions` to scale up the simple regulation reaction in the negative autoregulation simulation as follows: for the reaction `X2’ -> X2’ + Y2’`,  change the forward rate from `4e2` to `4e3`.

Next go to `CellBlender > Run Simulation` and ensure that the following options are selected:

[![Final stage of molecule distribution in CellBlender](../assets/images/600px/motifs_norm7.png){: .align-center loading="lazy"}](../assets/images/motifs_norm7.png)

1. Set the number of iterations to `20000`.
2. Ensure the time step is set as `1e-6`.
3. Click `Export & Run`.

Click `CellBlender > Reload Visualization Data`. You have the option of watching the animation within the Blender window by clicking the play button at the bottom of the screen.

[![Rendering of molecule trajectories using CellBlender](../assets/images/600px/motifs_norm8.png){: .align-center loading="lazy"}](../assets/images/motifs_norm8.png)

Now go back to `CellBlender > Plot Output Settings` and scroll to the bottom to click `Plot`; this should produce a plot. How does your plot

[![image-center](../assets/images/600px/motifs_norm9.png){: .align-center loading="lazy"}](../assets/images/motifs_norm9.png)

Save your file before returning to the main text, where we will interpret the plot produced to see if we were able to obtain a mathematically controlled simulation and then interpret the result of this simulation from an evolutionary perspective.

[Return to main text](nar#an-evolutionary-basis-for-negative-autoregulation){: .btn .btn--warning .btn--large}
{: style="font-size: 100%; text-align: center;"}
