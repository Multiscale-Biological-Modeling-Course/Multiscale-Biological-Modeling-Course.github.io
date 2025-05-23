---
permalink: /motifs/tutorial_nar
title: "Software Tutorial: Comparing Simple Regulation to Negative Autoregulation"
description: "Tutorial: model negative autoregulation in genes, simulate responses to stimuli, and compare speed and noise with non-regulated circuits."
excerpt: "Module 1: Finding Motifs in Transcription Factor Networks"
sidebar:
 nav: "motifs"
toc: true
toc_sticky: true
header:
  overlay_image: "../assets/images/repressilator_chart.png"
  overlay_filter: 0.3
  image_alt: "Chart of the concentrations of three particles involved in the repressilator, a synthetic biological oscillating system."
image: "../assets/images/repressilator_chart.png"
---

**Note:** We are currently in the process of updating this tutorial to the latest version of MCell, CellBlender, and Blender. This tutorial works with MCell3, CellBlender 3.5.1, and Blender 2.79. Please see a [previous tutorial](../prologue/tutorial-random-walk) for a link to download these versions.
{: .notice--info}

### Implementing simple regulation in CellBlender

In this tutorial, we will compare simple against negative autoregulation using a particle-based simulation in CellBlender. We will start with simple regulation; if you followed the prologue, then load your `CellBlender_Tutorial_Template.blend` file; otherwise, follow the steps indicated in the prologue's [Random Walk Tutorial](../prologue/tutorial-random-walk) to produce this file. Then, save a copy of this file as `NAR_comparison.blend`. You may also download the completed tutorial files <a href="../tutorials/NAR_compare_unequal.blend" download="NAR_compare_unequal.blend">here</a>.

Then go to `CellBlender > Molecules` and create the following molecules:

[![CellBlender output showing normalized molecule positions](../assets/images/600px/motifs_norm1.png){: .align-center loading="lazy"}](../assets/images/motifs_norm1.png)

1. Click the `+` button.
2. Select a color (such as yellow).
3. Name the molecule `Y1`.
4. Select the molecule type as `Surface Molecule`.
5. Add a diffusion constant of `1e-6`.
6. Up the scale factor to `5` (click and type “5” or use the arrows).

Repeat the above steps as needed to make sure that both of the following molecules are entered with the following parameters.

| Molecule Name | Molecule Type|Diffusion Constant| Scale Factor|
|:--------|:-------:|--------:|--------:|--------:|
| Y1  | Surface  | 1e-6  | 5|
| X1  | Surface  | 1e-6  | 1|

Now go to `CellBlender > Molecule Placement` to set the following sites to release our molecules:

[![3D model of molecule distribution after simulation](../assets/images/600px/motifs_norm3.png){: .align-center loading="lazy"}](../assets/images/motifs_norm3.png)

1. Click the `+` button.
2. Select or type in the molecule `X1`.
3. Type in the name of the Object/Region `Plane`.
4. Set the Quantity to Release as `300`.

Finally, we set reactions. Go to `CellBlender > Reactions` and define the following reactions:

[![Progressive pattern formation in CellBlender](../assets/images/600px/motifs_norm4.png){: .align-center loading="lazy"}](../assets/images/motifs_norm4.png)

1. Click the `+` button.
2. Under reactants, type `X1’` (note the apostrophe).
3. Under products, type `X1’ + Y1’`.
4. Set the forward rate as `2e2`.

Repeat the above steps as needed to ensure the following reactions are present.

| Reactants |Products|Forward Rate|
|:--------|:-------:|--------:|
| X1’  | X1’ + Y1’ | 4e2 |
| Y1’  | NULL | 4e2 |

Go to `CellBlender > Plot Output Settings` to ensure that we will be able to plot the concentrations of our particles over time.

[![image-center](../assets/images/600px/motifs_norm6.png){: .align-center loading="lazy"}](../assets/images/motifs_norm6.png)

1. Click the `+` button.
2. Set the molecule name as `Y1`.
3. Ensure `World` is selected.
4. Ensure `Java Plotter` is selected.
5. Ensure `One Page, Multiple Plots` is selected.
6. Ensure `Molecule Colors` is selected.

We are ready to run our simulation! Visit `CellBlender > Run Simulation` and select the following options:

[![Final stage of molecule distribution in CellBlender](../assets/images/600px/motifs_norm7.png){: .align-center loading="lazy"}](../assets/images/motifs_norm7.png)

1. Set the number of iterations to `20000`.
2. Ensure the time step is set as `1e-6`.
3. Click `Export & Run`.

Once the simulation has run, click `CellBlender > Reload Visualization Data` to visualize the outcome.

[![Rendering of molecule trajectories using CellBlender](../assets/images/600px/motifs_norm8.png){: .align-center loading="lazy"}](../assets/images/motifs_norm8.png)

You have the option of watching the animation within the Blender window by clicking the play button at the bottom of the screen.

Now return to `CellBlender > Plot Output Settings` and scroll to the bottom to click `Plot`.

[![image-center](../assets/images/600px/motifs_norm9.png){: .align-center loading="lazy"}](../assets/images/motifs_norm9.png)

You should be able to see `Y` reach a steady state, at which the number of particles essentially levels off subject to some noise.

Save your `.blend` file.

### Adding negative auto-regulation to the simulation

Now that we have simulated simple regulation, we will implement negative autoregulation in CellBlender to compare how this system reaches steady state compared to the simple regulation system.

Go to `CellBlender > Molecules` and create the following molecules:

[![CellBlender output showing normalized molecule positions](../assets/images/600px/motifs_norm1.png){: .align-center loading="lazy"}](../assets/images/motifs_norm1.png)

1. Click the `+` button.
2. Select a color (such as yellow).
3. Name the molecule `Y2`.
4. Select the molecule type as `Surface Molecule`.
5. Add a diffusion constant of `1e-6`.
6. Up the scale factor to `5` (click and type “5” or use the arrows).

Repeat the above steps to make sure that we have all of the following molecules (`X1` and `Y1` are inherited from the simple regulation simulation).

| Molecule Name | Molecule Type|Diffusion Constant| Scale Factor|
|:--------|:-------:|--------:|--------:|--------:|
| Y1  | Surface  | 1e-6  | 5|
| X1  | Surface  | 1e-6  | 1|
| Y2  | Surface  | 1e-6  | 5|
| X2  | Surface  | 1e-6  | 1|

Now go to `CellBlender > Molecule Placement` to set the following molecule release sites:

[![3D model of molecule distribution after simulation](../assets/images/600px/motifs_norm3.png){: .align-center loading="lazy"}](../assets/images/motifs_norm3.png)

1. Click the `+` button.
2. Select or type in the molecule `X2`.
3. Type in the name of the Object/Region `Plane`.
4. Set the Quantity to Release as `300`.

You should now have the following release sites.

| Molecule Name | Object/Region|Quantity to Release|
|:--------|:-------:|--------:|
| X1  | Plane | 300 |
| X2  | Plane | 300 |

Next go to `CellBlender > Reactions` to create the following reactions:

[![Progressive pattern formation in CellBlender](../assets/images/600px/motifs_norm4.png){: .align-center loading="lazy"}](../assets/images/motifs_norm4.png)

1. Click the `+` button.
2. Under reactants, type `X2’` (the apostrophe is important).
3. Under products, type `X2’ + Y2’`.
4. Set the forward rate as `2e2`.

Repeat the above steps as needed to ensure that you have the following reactions.

| Reactants |Products|Forward Rate|
|:--------|:-------:|--------:|
| X1’  | X1’ + Y1’ | 4e2 |
| X2’  | X2’ + Y2’ | 4e2 |
| Y1’  | NULL | 4e2 |
| Y2’  | NULL | 4e2 |
|Y2’ + Y2’|Y2’|4e2|

Go to `CellBlender > Plot Output Settings` to set up a plot as follows:

[![image-center](../assets/images/600px/motifs_norm6.png){: .align-center loading="lazy"}](../assets/images/motifs_norm6.png)

1. Click the `+` button.
2. Set the molecule name as `Y2`.
3. Ensure `World` is selected.
4. Ensure `Java Plotter` is selected.
5. Ensure `One Page, Multiple Plots` is selected.
6. Ensure `Molecule Colors` is selected.

You should now have both `Y1` and `Y2` plotted.

| Molecule Name|Selected Region|
|:--------|:-------:|
| Y1| World|
| Y2| World|

We are now ready to run the simulation comparing simple regulation and negative autoregulation. To do so, go to `CellBlender > Run Simulation` and do the following:

[![Final stage of molecule distribution in CellBlender](../assets/images/600px/motifs_norm7.png){: .align-center loading="lazy"}](../assets/images/motifs_norm7.png)

1. Set the number of iterations to `20000`.
2. Ensure the time step is set as `1e-6`.
3. Click `Export & Run`.

Click `CellBlender > Reload Visualization Data` to visualize the result of the simulation.

[![Rendering of molecule trajectories using CellBlender](../assets/images/600px/motifs_norm8.png){: .align-center loading="lazy"}](../assets/images/motifs_norm8.png)

You have the option of watching the animation within the Blender window by clicking the play button at the bottom of the screen.

Now return to `CellBlender > Plot Output Settings` and scroll to the bottom to click `Plot`.

[![image-center](../assets/images/600px/motifs_norm9.png){: .align-center loading="lazy"}](../assets/images/motifs_norm9.png)

A plot should appear in which the plot of *Y* over time assuming simple regulation is shown in red, and the plot of *Y* if negatively autoregulated is shown in yellow.

Save your file.

### Comparing simple regulation and negative autoregulation

**STOP:** Now that you have run the simulation comparing simple regulation and negative autoregulation, are the plots of *Y* for the two simulations what you would expect? Why or why not?
{: .notice--primary}

If you find the outcome of the simulation in this tutorial confusion, don't be concerned. In the main text, we will interpret this outcome and see if it allows us to start making conclusions about why negative autoregulation has evolved, or if we will need to further tweak our model.

[Return to main text](nar#ensuring-a-mathematically-controlled-comparison){: .btn .btn--warning .btn--large}
{: style="font-size: 100%; text-align: center;"}
