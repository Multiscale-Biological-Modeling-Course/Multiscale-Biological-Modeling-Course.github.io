---
permalink: /white_blood_cells/home
title: "Module 4: Training a Computer to Count White Blood Cells Automatically"
description: Learn how to train a computer to identify cells in images and classify these images into categories.
sidebar:
 nav: "white_blood_cells"
image: "../assets/images/cellorg_pca_graph_cell.png"
excerpt: "by Phillip Compeau (with software tutorials by Nicole Matamala)"
header:
  overlay_image: "../assets/images/cellorg_pca_graph_cell.png"
  overlay_filter: 0.3
author_profile: true # add author to page
gallery:
  - url: ../assets/images/600px/neutrophil.png
    image_path: ../assets/images/neutrophil.png
    alt: "Neutrophil"
    title: "A specific subtype of granulocyte called a neutrophil, illustrating the multilobular structure of this WBC family."
  - url: ../assets/images/600px/monocyte.png
    image_path: ../assets/images/monocyte.png
    alt: "Monocyte"
    title: "A monocyte with a single, irregularly-shaped nucleus."
  - url: ../assets/images/600px/lymphocyte.png
    image_path: ../assets/images/lymphocyte.png
    alt: "Lymphocyte"
    title: "A lymphocyte with a small, round nucleus."
---

# Introduction: how are blood cells counted?

Your doctor sometimes wants to count your blood cells to ensure that they are within healthy ranges as part of a complete blood count. Blood cells consist of **red blood cells (RBCs)**, which transport oxygen via the hemoglobin protein, and **white blood cells (WBCs)**, which help identify and attack foreign cells as part of your immune system.

The classic device for counting blood cells is the **hemocytometer**. As illustrated in the video below, a technician filters a small amount of blood onto a gridded slide and then counts the number of cells of each type in the squares on the grid. As a result, they can estimate the number of each type of cell per volume of blood.

<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/pP0xERLUhyc#t=1m24s" frameborder="0" allowfullscreen></iframe>

**STOP:** Why might the size of the blood sample influence the estimate of blood cell count?
{: .notice--primary}

You would not be wrong if you think that the hemocytometer seems old-fashioned; it was invented by Louis-Charles Malassez 150 years ago. In an attempt to reduce the human error inherent in using a hemocytometer, what if we train a computer to count blood cells for us?

We will focus specifically on identifying WBCs in images of cells. A low WBC count may indicate a host of diseases that leave the immune system susceptible to attack; a high WBC count may indicate that an infection is present, or that a disease like leukemia has caused overproduction of WBCs.

WBCs divide into families based on their structure and function, and some diseases may cause an abnormally low or high count of a specific WBC classes. We therefore wish not only to identify WBCs in cellular images but also to **classify** these WBCs into their appropriate types.

We will work with a <a href="https://github.com/Shenggan/BCCD_Dataset" target="_blank">publicly available dataset</a> containing blood cell images that depict both RBCs and WBCs, as shown in the figure below. The cells have been applied with a stain in which a red-orange dye bonds to hemoglobin and a blue dye bonds to DNA and RNA. Because RBCs have no cell nucleus, the stain will cause the WBC nuclei to appear as purple.

The figure below also illustrates the three main families of WBCs: **granulocytes**, **lymphocytes**, and **monocytes**.  Granulocytes have a **multilobular nucleus**, which consists of several round “lobes” that are linked by thin strands of nuclear material. Monocyte and lymphocyte nuclei only have a single lobe, but the shapes of the nuclei are quite different: lymphocyte nuclei tend to have a more rounded shape (taking up a greater fraction of the cell’s volume), whereas monocyte nuclei have a more irregular shape.

{% include gallery caption="Three images from the blood cell image dataset showing three types of WBCs. In our dataset, these cells correspond to image IDs 3, 15, and 20. (Left) A specific subtype of granulocyte called a neutrophil, illustrating the multilobular structure of this WBC family. (Center) A monocyte with a single, irregularly-shaped nucleus. (Right) A lymphocyte with a small, round nucleus." %}

In this module, our goal is twofold. First, can we excise, or **segment**, WBCs from cellular images? Second, can we train a computer to classify WBCs by family? To perform these tasks, we will enlist <a href="http://www.cellorganizer.org" target="_blank">CellOrganizer</a>, a powerful software resource that can perform a wide variety of automated analyses on cellular images.

When you look at the cells in the figure above, you may think that our two tasks will be easy. Identifying WBCs is simply a matter of identifying the large purplish regions, and classifying them is just a matter of categorizing them by shape. Yet the human eye is the result of billions of years of evolution to identify patterns and differentiate objects, and even after decades of research into computer vision, researchers struggle to attain its precision.

[Next lesson](segmentation){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}
