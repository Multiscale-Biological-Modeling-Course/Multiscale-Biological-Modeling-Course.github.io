---
permalink: /white_blood_cells/tutorial_shape_space
title: "CellOrganizer Tutorial"
sidebar:
 nav: "wbcells"
toc: true
toc_sticky: true
---

### Step 4 Shape Space Visualization

Having generated a PCA model from the images and completed the post – processing in Step 3, we are now ready to visualize our results!
In this step of the pipeline, we open up Python to visualize the computed shape space by label. The goal is to see clusters of cells within the same region of the same type. We can classify our white blood cells by two different parameters, cell type or cell family. If we are classifying by cell type, then we are looking for clusters of neutrophils, eosinophils, basophils, lymphocytes, and monocytes. That being said, neutrophils, eosinophils, and basophils belong to the same family called granulocytes. Thus, if we are classifying by cell family, then we are looking for clusters of granulocytes, lymphocytes, and monocytes.

Method: Python by Cell Family

Open a new terminal.
Run the following commands in terminal:
~~~
> cd ~/Desktop/WBC_PCAPipeline/Step4_Visualization
> python WBC_CellFamily.py
~~~

As a result, you can click, drag, and rotate the graphical space to see the clusters of cell classes by color (a legend can be found in the upper right - hand corner). Furthermore, an image file of this visualization is saved within the current directory under WBC_ShapeSpace_CF.png.

![image-center](../assets/images/cellorg_pca_graph.png){: .align-center}


Method: Python by Cell Type

Open a new terminal.
Run the following commands in terminal:
~~~
> cd ~/Desktop/WBC_PCAPipeline/Step4_Visualization
> python WBC_CellType.py
~~~

As a result, you can click, drag, and rotate the graphical space to see the clusters of cell classes by color (a legend can be found in the upper right - hand corner). Furthermore, an image file of this visualization is saved within the current directory under WBC_ShapeSpace_CT.png.

![image-center](../assets/images/cellorg_pca_graph_cell.png){: .align-center}
