---
permalink: /white_blood_cells/tutorial_shape_space
title: "Software Tutorial: Generalizing and Visualizing an Image Shape Space"
sidebar:
 nav: "white_blood_cells"
toc: true
toc_sticky: true
image: "../assets/images/cellorg_pca_graph_cell.png"
---

---
permalink: /white_blood_cells/tutorial_PCA
title: "Software Tutorial: Applying Principal Components Analysis to Nuclear Image Boundaries"
sidebar:
 nav: "white_blood_cells"
toc: true
toc_sticky: true
image: "../assets/images/cellorg_pca_graph_cell.png"
---

### Installing CellOrganizer

**Note:** The current version of CellOrganizer that these tutorials are built on is a free distribution provided as an add-on to MATLAB, which is paid software. We are in the process of investigating a way to run all of the tutorials in this module without needing paid software.
{: .notice--warning}

First, you will need the latest version of <a href="https://www.mathworks.com/products/matlab.html" target="_blank">MATLAB</a>.

Next, you should download the latest version of CellOrganizer for MATLAB, which you can find under `Downloads` at the <a href="http://www.cellorganizer.org" target="_blank">CellOrganizer homepage</a>. You should extract the `.zip` file into a folder, and then place this folder somewhere on your computer where you will remember it. (Our suggestion is to place it in the same applications folder where MATLAB is found.)

To install CellOrganizer, open MATLAB, and in the command window navigate to the CellOrganizer folder that you just extracted using the `cd` command. For example, if you are using a Mac, and you extracted the CellOrganizer folder as `cellorganizer-master` and moved it to your `Applications` folder, then you would type the following command:

~~~
cd /Applications/cellorganizer-master
~~~

Once you have navigated into this folder, you will see the contents of the CellOrganizer directory you downloaded appear under the `Current Directory` window in MATLAB.

[![image-center](../assets/images/600px/CellOrganizer_installation_directory.png){: .align-center width="400px"}](../assets/images/CellOrganizer_installation_directory.png)
{: style="font-size: medium;"}

You are now ready to install CellOrganizer by running `setup.m` by entering the following command into the MATLAB command window.

~~~
setup();
~~~

That's it! If your installation was successful, then you should see a message in the MATLAB command window similar to the following.

~~~
Adding appropiate folders to path.
Checking if your system and Matlab version is compatible with CellOrganizer.
Checking for updates. CellOrganizer version 2.9.2 is the latest stable release.
~~~

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
