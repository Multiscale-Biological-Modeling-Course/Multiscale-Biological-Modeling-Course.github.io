---
permalink: /white_blood_cells/tutorial_image_binarization
title: "CellOrganizer Tutorial"
sidebar:
 nav: "wbcells"
toc: true
toc_sticky: true
---

### Step 2 Image Binarization and File Conversion

As mentioned in Step 1, we would ideally have black and white segmented images as a result of running the above commands. However, we would like to ensure that our segmented images are in black and white, and if not (suppose they are in greyscale), we would like to convert them into this form. Furthermore, the CellOrganizer PCA method requires all images to be in TIFF format, so this step handles that file conversion as well. To go an extra step, we also want another set of images that show the segmented nuclei in color while the background is in black.

In this step of the pipeline, we open up MATLAB for running the binarization and file conversion code.

Method: MATLAB

Open MATLAB.
Run the following commands in the MATLAB command window:
~~~
> clear
> clc
> cd ~/Desktop/WBC_PCAPipeline/Step2_Binarization
> WBC_imgBin
~~~

As a result, the BWImgs_1 directory will now contain binarized TIFF versions of the segmented images. That is, each greyscale image resulting from the nuclear segmentation step with have pixel values strictly of 0, which is black, or 1, which is white.
Our other result is that the ColNuc_1 directory will now contain TIFF versions of the segmented images where the nuclei is in color and the background is in black. We won’t be using these images further along the pipeline, but they are useful to look at for visual confirmation that the majority of the nucleus is being considered for the PCA model.

Binarization and Color Nuclear Segmentation Example using BloodImage_00001.jpg

![image-center](../assets/images/cellorg_segmented.png)
![image-center](../assets/images/cellorg_segmented_color.png){: .align-center}
Nuclear Segmentation in B/W                  Nuclear Segmentation in Color
