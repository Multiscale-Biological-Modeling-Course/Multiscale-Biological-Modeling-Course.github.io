---
permalink: /white_blood_cells/tutorial_shape_space_docker
title: "Software Tutorial: Generalizing and Visualizing an Image Shape Space After Applying PCA (in Docker)"
sidebar:
 nav: "white_blood_cells"
toc: false
toc_sticky: true
image: "../assets/images/normal_adult_blood_smear.JPG"
---

In a [previous tutorial](tutorial_nuclear_segmentation), we segmented and binarized a collection of WBC images. If you completed that tutorial, then you should see those images as a collection of .tiff files in your `BWImgs_1` folder inside your `WBC_PCAPipeline/Data` directory.

We are now ready to use CellOrganizer to build a shape space of these images and then apply PCA to the resulting shape vectors in order to reduce the dimension of the dataset.

**Note:** This version of the tutorial is modified to use the <a href="https://www.docker.com/" target="_blank">Docker</a> implementation of CellOrganizer rather than the (standard) MATLAB implementation. We created this alternative version primarily for Windows users to allow them to run CellOrganizer. Those who are running a Mac/Linux machine may prefer to follow the [original tutorial](tutorial_shape_space). Note that MATLAB is still required for this version of the tutorial.
{: .notice--info}

### Necessary Software

We will need to install Docker in order to use this version of CellOrganizer. To do so, follow the instructions <a href="https://docs.docker.com/desktop/install/windows-install/" target="_blank">here</a>. For Windows users, we also recommend installing a UNIX-like terminal such as Git Bash, which can be downloaded as part of <a href="https://gitforwindows.org/" target="_blank">Git for Windows</a>.

**Note:** In order to get Docker to run, it may be necessary for Windows users to <a href="https://docs.microsoft.com/en-us/windows/wsl/install" target="_blank">set up the Windows Subsystem for Linux</a>. Also, depending on the computer, it may be necessary to modify the computer's BIOS settings and enable <a href="https://en.wikipedia.org/wiki/Virtualization" target="_blank">virtualization technology</a> in order to get Docker to run. Consult the help sections on <a href="https://docs.docker.com/desktop/install/windows-install/#wsl-2-backend" target="_blank">WSL</a> and <a href="https://docs.docker.com/desktop/troubleshoot/topics/#virtualization" target="_blank">virtualization</a> for more details.
{: .notice--info}


### Running CellOrganizer for Docker

CellOrganizer for Docker is accessed via a Jupyter notebook server interface. To get started, first ensure that Docker is running by launching the Docker Desktop app. Next, follow the instructions <a href="https://cellorganizer.readthedocs.io/en/latest/chapters/cellorganizer_for_docker.html#getting-started" target="_blank">here</a> to start the server.

**Note:** To execute the `run.sh` script from the instructions above, first navigate to the folder where you saved the file using Git Bash, and execute the command `bash ./run.sh`. For example, if you saved the file onto your desktop, you would first type in `cd ~/Desktop`, and then `bash ./run.sh` to run the bash script.
{: .notice--info}

The output from running the commands in the instructions above is shown below. To access the Jupyter notebook server, copy the URL shown at the bottom of the output (highlighted below).

[![image-center](../assets/images/600px/shape_space_docker_img1.png){: .align-center width="400px"}](../assets/images/shape_space_docker_img1.png)
{: style="font-size: medium;"}

Open a web browser, and navigate to the URL you copied above. This will open the Jupyter notebook server in your browser, which contains all of the software needed to run CellOrganizer and create our model.

[![image-center](../assets/images/600px/shape_space_docker_img2.png){: .align-center width="400px"}](../assets/images/shape_space_docker_img2.png)
{: style="font-size: medium;"}

Next, we need to upload our images to the server so that they can be fed as input to the CellOrganizer model. The most straightforward way to do this would be to upload our `WBC_PCAPipeline/Data/BWImgs_1` folder onto the server, but unfortunately we can only upload individual files onto the server. Fortunately, there is a simple workaround - Jupyter notebooks allows us to upload zipped folders, so we can instead upload a zipped folder onto the server which contains all of our images.

First, compress your `BWImgs_1` folder into a `.zip` file by right-clicking on the folder in  File Explorer and selecting `send to > Compressed (zipped) folder`. Next, click the `upload` button near the top-right corner of the Jupyter notebook screen, and double-click on the `BWImgs_1.zip` file you just created. Then, click the `upload` button next to the newly added folder.

[![image-center](../assets/images/600px/shape_space_docker_img3.png){: .align-center width="400px"}](../assets/images/shape_space_docker_img3.png)
{: style="font-size: medium;"}

We are now ready to start using CellOrganizer! Create a new IPython notebook on the server named `WBC_PCA.ipynb`, and enter the following code into a code cell. We will not do a line-by-line walkthrough of the code here, but feel free to compare it with the corresponding MATLAB code contained in `Step3_ModelGeneration/WBC_PCAModel.m`.

~~~ python
! unzip BWImgs_1  # unzip folder - the ! specifies a UNIX command (not python)

# import CellOrganizer functions
from cellorganizer.tools import img2slml, slml2info

import os
import sys

# Specify model options for CellOrganizer
options = {'verbose': True,
           'debug': False,
           'display': False,
           'model.name': 'WBC_PCA',
           'train.flag': 'framework',
           'nucleus.class': 'framework',
           'nucleus.type': 'pca',
           'cell.class': 'framework',
           'cell.type': 'pca',
           'skip_preprocessing': True,

           # Latent Dimension for the Model
           'latent_dim': 15,

           # No idea what this is for
           'masks': [],

           'model.resolution': [0.049, 0.049],
           'model.filename': 'WBC_PCA.xml',
           'model.id': 'WBC_PCA',

           # Set nuclei and cell model name
           'nucleus.name': 'WBC_NUC',
           'cell.model': 'WBC_CELL',

           'documentation.description': 'Trained using demo2D08 from CellOrganizer.'}

dimensionality = '2D'

# Set path to the binarized segmented images
directory = os.path.join('.', 'BWImgs_1')
dna = [os.path.join(directory, 'bw*.tiff')]
cellm = [os.path.join(directory, 'bw*.tiff')]

# Create the shape space model
img2slml(dimensionality, dna, cellm, [], options)

# img2slml results saved in a MATLAB data file if command run successfully.
print("Model output saved successfully:", "WBC_PCA.mat" in os.listdir())
~~~

The results of running the Python code above will be a new file called `WBC_PCA.mat` stored on the Jupyter notebook server. Download the file onto your own local computer, and store it in the folder `WBC_PCAPipeline/Step3_ModelGeneration`.

Next, start MATLAB, and set the MATLAB path by clicking the button indicated below, and navigating to your `WBC_PCAPipeline/Step3_ModelGeneration` folder.

[![image-center](../assets/images/600px/shape_space_docker_img4.png){: .align-center width="400px"}](../assets/images/shape_space_docker_img4.png)
{: style="font-size: medium;"}

Once the path is set, run the following lines of MATLAB code to extract and save the principal components from your model to a `.csv` file:

~~~
load( [pwd filesep 'WBC_PCA.mat'] );
scr = array2table(model.nuclearShapeModel.score);
lbls = readtable('../Data/WBC_Labels.csv');
mtrx = [lbls scr];
writetable(mtrx, '../Step4_Visualization/WBC_PCA.csv');
~~~

The result will be a new file, `WBC_PCA.csv`, saved to the folder `Step4_Visualization`. This file contains the shape vector of each image after PCA has been applied.

**Note:** If you use this file as input for the [next tutorial](tutorial_image_classification), then you will obtain very slightly different results from those in the text. The reasons why these results do not match are not clear but the conclusions will remain the same.
{: .notice--info}

That's it! You can now follow along the remainder of the tutorial, in which we visualize the post-PCA shape space.

[Return to main tutorial](tutorial_shape_space#shape-space-visualization){: .btn .btn--warning .btn--large}
{: style="font-size: 100%; text-align: center;"}
