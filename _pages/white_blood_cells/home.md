---
permalink: /white_blood_cells/home
title: "Module 4: Training a Computer to Classify White Blood Cells"
description: "Start Module 4: learn how to segment, analyze, and classify white-blood-cell images with PCA, K-NN, and machine-learning workflows."
sidebar:
 nav: "white_blood_cells"
image: "../assets/images/normal_adult_blood_smear.JPG"
excerpt: "by Phillip Compeau (with software tutorials featuring Nicole Matamala)"
header:
  overlay_image: "../assets/images/normal_adult_blood_smear.JPG"
  overlay_filter: 0.3
  image_alt: "Microscope image showing white blood cells stained purple among red blood cells."
author_profile: true # add author to page
gallery:
  - url: ../assets/images/600px/neutrophil.png
    image_path: ../assets/images/neutrophil.png
    alt: "Neutrophil with multilobular nucleus highlighting granulocyte morphology"
    title: "A specific subtype of granulocyte called a neutrophil, illustrating the multilobular structure of this WBC family."
    loading: "lazy"
  - url: ../assets/images/600px/monocyte.png
    image_path: ../assets/images/monocyte.png
    alt: "Monocyte featuring a single, kidney-shaped nucleus"
    title: "A monocyte with a single, irregularly-shaped nucleus."
    loading: "lazy"
  - url: ../assets/images/600px/lymphocyte.png
    image_path: ../assets/images/lymphocyte.png
    alt: "Lymphocyte showing a small, round nucleus typical of lymphoid cells"
    title: "A lymphocyte with a small, round nucleus."
    loading: "lazy"
---

## Introduction: Segmenting and counting white blood cells

Your doctor sometimes counts your blood cells to ensure that they are within healthy ranges as part of a complete blood count. These cells comprise **red blood cells (RBCs)**, which transport oxygen via the hemoglobin protein, and **white blood cells (WBCs)**, which help identify and attack foreign cells as part of your immune system.

The classic device used for counting blood cells is the **hemocytometer**. As illustrated in the video below, a technician filters a small amount of blood onto a gridded slide and then counts the number of cells of each type in the squares on the grid. As a result, the technician can estimate the number of each type of cell per volume of blood.

{% include video id="pP0xERLUhyc#t=1m24s" provider="youtube" %}

**STOP:** How could the volume of a blood sample influence the estimate of blood cell count?
{: .notice--primary}

You would not be wrong to think that the hemocytometer seems old-fashioned, as it was invented by Louis-Charles Malassez 150 years ago. To reduce the human error inherent in using this device, can we train a computer to count blood cells for us?

In this module, we will focus our work on WBCs, which divide into families based on their structure and function, with some diseases causing an abnormally low or high count of cells in a specific family.  We therefore have two aims. First, can we excise, or **segment**, WBCs from cellular images? Second, can we devise an algorithm to **classify** WBCs by family?

We will work with a <a href="https://github.com/Shenggan/BCCD_Dataset" target="_blank">publicly available dataset</a> containing blood cell images that depict both RBCs and WBCs, as shown in the figure below. The cells have been stained with a red-orange dye that bonds to hemoglobin and a blue dye that bonds to DNA and RNA. RBCs lack a nucleus and will only absorb the red-orange dye, whereas WBCs have a nucleus but lack hemoglobin and will only absorb the blue dye.

The figure below also illustrates the three main families of WBCs: **granulocytes**, **monocytes**, and **lymphocytes**.  Granulocytes have a **multilobular nucleus**, which consists of several “lobes” that are linked by thin strands of nuclear material. Monocyte and lymphocyte nuclei only have a single lobe, but monocyte nuclei have a more irregular shape, whereas lymphocyte nuclei are more rounded and take up a greater fraction of the cell's volume.

{% include gallery caption="Three images from the blood cell image dataset showing three types of WBCs. In our dataset, these cells correspond to image IDs 3, 15, and 20. (Left) A specific subtype of granulocyte called a neutrophil, illustrating the multilobular structure of this WBC family. (Center) A monocyte with a single, irregularly-shaped nucleus. (Right) A lymphocyte with a small, round nucleus." %}

When you look at the cells in the figure above, you may think that our work will be easy. Segmenting WBC nuclei only requires identifying the large purplish regions, and classifying them is just a matter of categorizing them according to the differences in nuclear shape that we described above. Yet even after decades of research into computer vision, researchers struggle to attain the precision of the human eye, a biological apparatus that is the result of billions of years of evolution.

[Next lesson](segmentation){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}
