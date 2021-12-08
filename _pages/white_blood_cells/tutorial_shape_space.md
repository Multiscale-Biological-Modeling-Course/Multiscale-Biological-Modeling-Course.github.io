---
permalink: /white_blood_cells/tutorial_shape_space
title: "Software Tutorial: Generalizing and Visualizing an Image Shape Space"
sidebar:
 nav: "white_blood_cells"
toc: true
toc_sticky: true
image: "../assets/images/cellorg_pca_graph_cell.png"
---

### Installations

Please ensure that the following additional applications have been installed before continuing.

|Required Applications | Terminal Command to Check Version |
|:---|---:|
| Python (v. 3.7.3 or newer)	|	python \-\-version |

### Shape Space Visualization

Having generated a PCA model from the images and completed the post – processing in the previous tutorial, we are ready to visualize our results!

In this step of the pipeline, we will use Python to visualize the computed shape space by label. The goal is to see clusters of cells within the same region of the same type. We can classify our white blood cells by two different parameters, cell type or cell family. If we are classifying by cell family, then we are attempting to classify images into the three classes of granulocytes, lymphocytes, and monocytes. We can also classify by cell type, in which case granulocytes subdivide out into neutrophils, eosinophils, and basophils, so that we are dividing the data into five classes.

### Classification by cell family

First, we will classify images by cell family. Open a new terminal window and run the following commands:

~~~
cd ~/Desktop/WBC_PCAPipeline/Step4_Visualization
python WBC_CellFamily.py
~~~

As a result, you can click, drag, and rotate the graphical space to see the clusters of cell classes by color (a legend can be found in the upper right - hand corner). Furthermore, an image file of this visualization is saved within the current directory under `WBC_ShapeSpace_CF.png`.

[![image-center](../assets/images/600px/cellorg_pca_graph.png){: .align-center}](../assets/images/cellorg_pca_graph.png)


### Classification by cell type

Now we will classify images by cell type. Open a new terminal window and run the following commands.

~~~
cd ~/Desktop/WBC_PCAPipeline/Step4_Visualization
python WBC_CellType.py
~~~

As a result, you can click, drag, and rotate the graphical space to see the clusters of cell classes by color (a legend can be found in the upper right - hand corner). Furthermore, an image file of this visualization is saved within the current directory under `WBC_ShapeSpace_CT.png`.

[![image-center](../assets/images/600px/cellorg_pca_graph_cell.png){: .align-center}](../assets/images/cellorg_pca_graph_cell.png)
