---
permalink: /white_blood_cells/tutorial_nuclear_segmentation
title: "Software Tutorial: Segmenting Nuclei from Cellular Images"
sidebar:
 nav: "white_blood_cells"
toc: true
toc_sticky: true
image: "../assets/images/cellorg_pca_graph_cell.png"
---

### Installing R and RStudio

To run our segmentation pipeline, we will use <a href="https://www.r-project.org" target="_blank">R</a>, a free programming language that is popular among data scientists across disciplines. We will also use <a href="https://www.rstudio.com" target="_blank">RStudio</a>, an integrated development environment that makes working with R easy.

You can download R and RStudio from their respective home sites or follow the instructions at <a href="https://rstudio-education.github.io/hopr/starting.html" target="_blank">Hands-On Programming with R</a>.

### Obtaining the WBC Image Data

Next, we ask that you download our `WBC_PCAPipeline` folder, move this folder to your desktop, and verify that it has the following contents:

~~~
WBC_PCAPipeline
	Data
		RawImgs
			BloodImage_00001.jpg
			·
			·
			·
			BloodImage_00410.jpg
		WBC_Labels.csv
	Step1_Segmentation
		WBC_imgSeg.R
	Step2_Binarization
		WBC_imgBin.m
	Step3_PCAModel
		WBC_PCAModel.m
	Step4_ShapeSpaceVisualization
		WBC_SS_CellClass.py
		WBC_SS_CellType.py
	Step5_Classification
	README.pdf
~~~

**Note:** Asking you to place this directory of files onto your desktop is unconventional. If you place it elsewhere, then you will have to manually change all file paths in the tutorials that follow in order to point to the appropriate directory. However, we have noticed occasional software glitches with using `setwd()` or `pwd()` if not specifying a universal location.
{: .notice--warning}

You may like to take a look at the `Data` folder, which contains the WBC images that we will work with in `RawImgs`. The other folders contain files that we will use to run different aspects of our analysis, starting with segmentation of the nuclei from the WBC images.

### Segmenting Nuclei from WBC Images

In the [main text](segmentation), we stated that we would segment the nuclei from our WBC images by binarizing the image based on color. The nucleus shows up as bluish, so that our idea is to color a pixel white if it has above a certain threshold level of blue, below a threshold amount of red, and below a threshold amount of green.

Open RStudio, navigate to `File --> Open File`, and find `Desktop/WBC_PCAPipeline/Step1_Segmentation/WBC_imgSeg.R`. You should see the `WBC_imgSeg.R` file appear on the left side of the RStudio window.

The first few lines of `WBC_imgSeg.R` refer to a collection of three **packages** (or **libraries**) that we need to install in order to run segmentation pipeline. Two of these packages (`jpeg` and `tiff`) are contained in R, and the third (`EBImage`) is installed from the <a href="https://bioconductor.org" target="_blank">Bioconductor</a> project as part of the `BiocManager` package. These package installations correspond to the following lines of our R file.

~~~ R
install.packages("jpeg")
install.packages("tiff")
install.packages("BiocManager")
BiocManager::install("EBImage")
~~~

Place your cursor on the first line of the file, and click `Run`, which will install the `jpeg` package along with any packages upon which it depends.

You can then click `Run` three more times to install each of the other three packages.

**Note:** Should you be asked in the RStudio console about upgrading dependencies during the EBImage library installation, type `a` and hit `enter`. Also, after you run this file once, should you decide to run this file again, you will not need to run the package installations and can comment them out using `#`.
{: .notice--warning}

Now that we have installed the required packages, we indicate to R that we want to use each of the three packages that we just installed in this file. Run each of the following three lines.

~~~ R
# Required Libraries
library("EBImage")
library("jpeg")
library("tiff")
~~~

Next, we run the following lines, which will create a directory counter that will keep track of how many files we have processed thus far.

~~~ R
# dir Counter
i = 1
~~~

Set paths for raw image files and segmented images, respectively.

~~~ R
# Set path for raw image files
path="~/Desktop/WBC_PCAPipeline/Data/"
rawImgs=paste(path, "RawImgs/", sep="")

# Set up directory path for segemented images
segImgs=paste(path, "SegImgs_", sep="")
colImgs=paste(path, "ColNuc_", sep="")
bwImgs=paste(path, "BWImgs_", sep="")
~~~

Setting up directories and printing some messages to the console.

~~~ R
# Check if unique seg directory exists, otherwise create one
while (file.exists(paste(segImgs, toString(i), sep=""))) {
  i = i + 1
}
print(noquote(paste("Creating", paste(segImgs, toString(i), sep=""), "directory for segmented images.")))
dir.create(paste(segImgs, toString(i), sep=""), showWarnings = FALSE);
print(noquote(paste("Creating", paste(bwImgs, toString(i), sep=""), "directory for binarized images.")))
dir.create(paste(bwImgs, toString(i), sep=""), showWarnings = FALSE)
print(noquote(paste("Creating", paste(colImgs, toString(i), sep=""), "directory for nucleus in color images.")))
dir.create(paste(colImgs, toString(i), sep=""), showWarnings = FALSE)

outDir=paste(segImgs, toString(i), sep="")
setwd(rawImgs)

# Gather all files within the directory above
all.files <- list.files()
my.files <- grep("*.jpg", all.files, value=T)

print(noquote("Starting nucleus segmentation..."))
~~~

Engine of our work is a function that processes every image individually.

~~~ R
# Loop through each file and process each image individually
for (i in my.files) {
  print(noquote(paste("Segmenting nucleus from file", i)))
  # Read the image, change to its directory
  nuc = readImage(paste(rawImgs, i, sep=""))

  # Each nuclear stain has low red, low green and high blue.

  # Need to invert the red and green channels, and then threshold according to
  # the above criteria
  nuc_r = channel(nuc, 'r')
  nuc_g = channel(nuc, 'g')
  nuc_b = channel(nuc, 'b')

  # Assigned thresholds for low red, low green, and high blue.
  r_threshold = 0.65
  g_threshold = 0.60
  b_threshold = 0.5975

  # Apply the thresholds accordingly
  nuc_rTH = nuc_r < r_threshold
  nuc_gTH = nuc_g < g_threshold
  nuc_bTH = nuc_b > b_threshold

  nucleusComp = nuc_rTH & nuc_gTH & nuc_bTH
  nucleusBW = bwlabel(fillHull(nucleusComp))


  # Compute features for objects that have made the threshold boundaries
  features = computeFeatures.shape(nucleusBW)

  # Assigned area threshold
  area_threshold <- 1500

  # Find all features that do not meet the area threshold
  indices = which(features < area_threshold)
  nucleusFin = rmObjects(nucleusBW, indices)

  newFeatures = computeFeatures.shape(nucleusFin)

  # Write final nucleus image to disk
  filename = paste(outDir, i, sep="/")
  writeImage(nucleusFin, filename)
}
~~~

Finally, we print that we are finished. If we see this command printed to the console, then we know that we are done.

~~~ R
print(noquote("DONE!"))
~~~

**Note:** If you source the file multiple times, three directories are created each time within the Data folder with the form of `SegImgs_i`, `ColNuc_i`, and `BWImgs_i`, where *i* is an integer. The images are only segmented into the most recently created directories (those with the largest value of *i*). Should you run into trouble and need to run this file multiple times, ensure that future file paths are pointing to the right folders!
{: .notice--warning}

After we have sourced our R file, you’ll notice the creation of three directories of the form: `SegImgs_1`, `ColNuc_1`, and `BWImgs_1` within the `Data` folder.

Assuming the file ran correctly, the first directory, `SegImgs_1`, contains all of the segmented nuclei images where the white blood cell nucleus is in white and the rest of the image is seemingly in black. The second directory, `ColNuc_1`, should be empty, but will eventually contain all of the segmented nuclei images; however, the white blood cell nucleus will be in its original color and the rest of the image will be in black. Finally, the third directory, `BWImgs_1`, should be empty, but will eventually hold binarized versions (strictly black and white) of the images in `SegImgs_1`.

[![image-center](../assets/images/600px/cellorg_raw_image.png){: .align-center}](../assets/images/cellorg_raw_image.png)
Nuclear Segmentation Example using `BloodImage_00001.jpg`.
{: style="font-size: medium;"}


[![image-center](../assets/images/600px/cellorg_segmented.png){: .align-center}](../assets/images/cellorg_segmented.png)
Greyscale segmented nucleus from the above image.
{: style="font-size: medium;"}

### Binarizing Segmented Images

As mentioned in Step 1, we would ideally have black and white segmented images as a result of running the above commands. However, we would like to ensure that our segmented images are in black and white, and if not (suppose they are in greyscale), we would like to convert them into this form. Furthermore, the CellOrganizer PCA method requires all images to be in TIFF format, so this step handles that file conversion as well. To go an extra step, we also want another set of images that show the segmented nuclei in color while the background is in black.

In this step of the pipeline, we open up MATLAB for running the binarization and file conversion code.

Open MATLAB. Then, run the following commands in the MATLAB command window:

~~~
clear
clc
cd ~/Desktop/WBC_PCAPipeline/Step2_Binarization
WBC_imgBin
~~~

As a result, the `BWImgs_1` directory will now contain binarized TIFF versions of the segmented images. That is, each greyscale image resulting from the nuclear segmentation step with have pixel values strictly of 0, which is black, or 1, which is white.

Our other result is that the `ColNuc_1` directory will now contain TIFF versions of the segmented images where the nuclei is in color and the background is in black. We won’t be using these images further along the pipeline, but they are useful to look at for visual confirmation that the majority of the nucleus is being considered for the PCA model.

[![image-center](../assets/images/600px/cellorg_segmented.png){: .align-center}](../assets/images/cellorg_segmented.png)
Nuclear segmentation of `BloodImage_00001.jpg` in black and white.
{: style="font-size: medium;"}

[![image-center](../assets/images/600px/cellorg_segmented_color.png){: .align-center}](../assets/images/cellorg_segmented_color.png)
Nuclear segmentation of `BloodImage_00001.jpg` with color retained in the nucleus.
{: style="font-size: medium;"}

[Return to main text](segmentation#successful-segmentation-is-subject-to-parameters){: .btn .btn--primary .btn--large}         
