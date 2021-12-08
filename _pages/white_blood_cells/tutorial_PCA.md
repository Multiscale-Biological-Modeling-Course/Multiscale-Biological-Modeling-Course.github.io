---
permalink: /white_blood_cells/tutorial_PCA
title: "Software Tutorial: Applying Principal Components Analysis to Nuclear Image Boundaries"
sidebar:
 nav: "white_blood_cells"
toc: true
toc_sticky: true
image: "../assets/images/cellorg_pca_graph_cell.png"
---

### Step 3 PCA Model Generation

Having completed Steps 1 and 2, all of our remaining images, and their subsequent labels, should be pre – processed and ready to train into a PCA model. In CellOrganizer, this is sampled as `demo2D08`.  

In this step of the pipeline, we return to MATLAB for running a modified version of CellOrganizer’s demo2D08 in order to generate the PCA model for our white blood cells. This model would then be used to plot the shape space by either cell type or cell class. Furthermore, we do some post – processing cleanup to ensure our resulting model could be easily read into the visualization code by using only the first three principal components.

Open MATLAB and navigate into your CellOrganizer directory. Then, run the following command in the MATLAB command window:
~~~
setup
~~~

Run the following commands in the MATLAB command window:

~~~
clear
clc
cd ~/Desktop/WBC_PCAPipeline/Step3_ModelGeneration
WBC_PCAModel
~~~

**Note:** These runs will generate a large amount of console output. You may want to go make a cup of coffee.
{: .notice--warning}

The run will be complete when you see output analogous to the following.

~~~
CLEAN UP WORKSPACE AND ENVIRONMENT
Removing temporary folder
Checking if model file exists on disk
Elapsed time is 11.682268 seconds.
Creating output directory /Users/phillipcompeau/Desktop/WBC_PCAPipeline/Step3_ModelGeneration/report
Number of objects: 345
~~~

As a result, the `Step3_PCAModel` and `Step4_Visualization` directories have been updated. The principal components along with the assigned label to each cell are captured in the `WBC_PCA.csv` file within the `Step4` directory. Information about the images used and the CellOrganizer generated shape space can be found by clicking on `Step3_PCAModel/report/index.html`.

**Note:** For any subsequent run of the `WBC_PCAModel file`, make sure to delete any log and param files that have been created from a previous run. All other files will be overwritten unless preemptively removed from the `WBC_PCAModel` file’s access. Saving the files can be done by either compressing the files into a zip folder or removing them from the directory.
{: .notice--warning}

We next want to view our model results. First, run the following commands in the MATLAB command window:

~~~
load('WBC_PCA.mat');
scr = model.nuclearShapeModel.score;
~~~

Double-click on the `scr` variable in the `Workspace` window.

In the matrix on your screen, each row represents an image and each column represents the subsequent PCA components for the image. For the purpose of our shape space visualization, we will only be focusing on the first three principal components.

**Note:** You may need to close the window containing the shape space in order to be able to run additional commands in your terminal window.
{: .notice--warning}
