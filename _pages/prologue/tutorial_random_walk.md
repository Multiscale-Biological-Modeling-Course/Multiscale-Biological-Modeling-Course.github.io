---
permalink: /prologue/tutorial-random-walk
title: "Software Tutorial: Simulating Particle Diffusion"
description: "Tutorial: simulate many random walkers in Python, track mean squared displacement, and watch diffusion appear."
excerpt: "Prologue: Random Walks and Turing Patterns"
sidebar:
 nav: "prologue"
 nav: "prologue"
toc: true
toc_sticky: true
header:
  overlay_image: "../assets/images/gray_scott_jupyter_high-res.png"
  overlay_filter: 0.3
  image_alt: "Turing pattern stripes produced by the Gray-Scott model, a coarse-grained predator-prey reaction-diffusion system."
image: "../assets/images/gray_scott_jupyter_high-res.png"
---

## Setting up CellBlender

In the main text, we mentioned that we would need MCell to simulate a reaction-diffusion particle model, along with the CellBlender add-on for Blender that will integrate MCell simulations and help us visualize these simulations.

The current version of these tutorials is written for MCell3, CellBlender 3.5.1, and Blender 2.79. You can download and install all three programs by following the installation guide on the "Previous downloads" page at the <a href="https://mcell.org/download_previous.html" target="_blank">MCell homepage</a>. Once you have followed the installation instructions, start Blender, and you will be ready to build and visualize a particle diffusion model.

**Note:** We are currently in the process of updating this tutorial to the latest version of MCell, CellBlender, and Blender.
{: .notice--info}

## Setting up CellBlender simulations

From a new Blender file, initialize CellBlender. Delete the existing default cube by right-clicking on the cube to select the cube (an orange outline should be around the cube when it is selected) and pressing the “x” key to delete. Then, in the tab `CellBlender > Model Objects`, insert a new plane, following the figure below.

[![Initial setup screen for CellBlender simulation](../assets/images/600px/motifs_setup1.png){: .align-center loading="lazy"}](../assets/images/motifs_setup1.png)
In `CellBlender > Model Objects`, click the `+` symbol to center the cursor. Next press the square “plane” button to create the object. To have CellBlender recognize this object as a model object, press the `+` button. The name of this object is `Plane` by default, although you can change this name and edit the color by selecting the color wheel if you like. A slightly transparent coloring will help with visibility but is not necessary.
{: style="font-size: medium;"}

Resizing the render preview window so that objects are visible in the center of the screen is recommended. See the following figure for instructions. Then save your file as `CellBlender_Tutorial_Template.blend`.

[![Continued setup of CellBlender scene for random walk](../assets/images/600px/motifs_setup2.png){: .align-center loading="lazy"}](../assets/images/motifs_setup2.png)
From the View menu, select `Top` to align the view directly overhead. With the plane object selected, follow the arrow over to the object parameters menu (the orange cube) and scale the plane by setting the first two values to “1.5”. Then, hover the mouse over the object and either use ctrl + “+” 6 times or the scroll wheel on your mouse to zoom in.
{: style="font-size: medium;"}

## Navigating the CellBlender window

This section will provide images and descriptions for the different components of the Blender window. When a new file has been created, the following figure shows the menu options available.

[![Navigation panel in CellBlender interface](../assets/images/600px/motifs_nav1.png){: .align-center loading="lazy"}](../assets/images/motifs_nav1.png)

**A:** This is the window for modules like CellBlender. To start CellBlender, you must click the `CellBlender` tab and then click the `Initialize CellBlender` button as shown in the image. This will then display the image shown as “D” in the figure below.

**B:** There are many `View` tabs throughout the Blender window. Any future tutorials referring to the `View` tab are referencing this tab.

**C:** This window contains options relating to a selected object.

[![Alternate navigation interface view in CellBlender](../assets/images/600px/motifs_nav2.png){: .align-center loading="lazy"}](../assets/images/motifs_nav2.png)

**D:** This is the `CellBlender` menu, which opens after CellBlender has been initialized, and contains sub-menus which will be noted as follows: `CellBlender > Model Objects`. We recommend dragging the edge of the window outward to increase visibility (see box “e” on the image above).

## Implementing particle diffusion

In CellBlender, load the `CellBlender_Tutorial_Template.blend` file from the previous section and save your file as `random_walk.blend`. You may also download the completed tutorial file <a href="../tutorials/random_walk_200.blend" download="random_walk_200.blend">here</a>.

[![Location of CellBlender software in file system](../assets/images/600px/cellblender_location.png){: .align-center loading="lazy"}](../assets/images/cellblender_location.png)

Right click the plane object to ensure it is selected. Visit the object parameters menu (the orange cube) and move the plane by setting the third `location` value to 1.0 instead of 0.0.

Then select `CellBlender > Molecules` and create the following molecules:

[![CellBlender output showing normalized molecule positions](../assets/images/600px/motifs_norm1.png){: .align-center loading="lazy"}](../assets/images/motifs_norm1.png)

1. Click the `+` button.
2. Select a color (such as orange).
3. Name the molecule `X`.
4. Select the molecule type as `Surface Molecule`.
5. Add a diffusion constant of `1e-6`.
6. Increase the scale factor to `5` (click and type `5` or use the arrows).

Now visit `CellBlender > Molecule Placement` to set the following sites for molecules to be released:

[![3D model of molecule distribution after simulation](../assets/images/600px/motifs_norm3.png){: .align-center loading="lazy"}](../assets/images/motifs_norm3.png)

1. Click the `+` button.
2. Select or type in the molecule `X`.
3. Type in the name of the Object/Region `Plane`.
4. Set the Quantity to Release as `1`.

Finally, we are ready to run our diffusion simulation. Visit `CellBlender > Run Simulation` and select the following options:

[![Final stage of molecule distribution in CellBlender](../assets/images/600px/motifs_norm7.png){: .align-center loading="lazy"}](../assets/images/motifs_norm7.png)

1. Set the number of iterations to `1000`.
2. Ensure the time step is set as `1e-6`.
3. Click `Export & Run`.

The simulation should run quickly, and we are ready to visualize the outcome of the simulation. To do so, visit `CellBlender > Reload Visualization Data`. You have the option of watching the animation within the Blender window by clicking the play button at the bottom of the screen, as indicated in the figure below. Then, save your file.

[![Rendering of molecule trajectories using CellBlender](../assets/images/600px/motifs_norm8.png){: .align-center loading="lazy"}](../assets/images/motifs_norm8.png)

You can also save and export the movie of your animation using the following steps:

[![Rendered visualization of CellBlender simulation](../assets/images/600px/cellblender_render.png){: .align-center loading="lazy"}](../assets/images/cellblender_render.png)

1. Click the movie tab.
2. Scroll down to the file name.
3. Select a suitable location for your file.
4. Select your favorite file format (we suggest FFmpeg_video).
5. Click `Render > OpenGL Render Animation`.

The movie will begin playing, and when the animation is complete, the movie file should be found in the folder location you selected.

Now that we have run and visualized our diffusion, we will head back to the main text, where we will continue on with our discussion of how the diffusion of particles can help us find Turing patterns.

[Return to main text](random_walk#brownian-motion-big-numbers-in-small-spaces){: .btn .btn--warning .btn--large}
{: style="font-size: 100%; text-align: center;"}
