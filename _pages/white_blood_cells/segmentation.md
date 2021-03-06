---
permalink: /white_blood_cells/segmentation
title: "Segmenting White Blood Cell Images"
sidebar:
 nav: "white_blood_cells"
toc: true
toc_sticky: true
image: "../assets/images/normal_adult_blood_smear.JPG"
gallery:
  - url: ../assets/images/600px/neutrophil_binarized_green.png
    image_path: ../assets/images/neutrophil_binarized_green.png
    alt: "Neutrophil"
    title: "A specific subtype of granulocyte called a neutrophil, illustrating the multilobular structure of this WBC family."
  - url: ../assets/images/600px/neutrophil_binarized_red.png
    image_path: ../assets/images/neutrophil_binarized_red.png
    alt: "Monocyte"
    title: "A monocyte with a single, irregularly-shaped nucleus."
gallery2:
  - url: ../assets/images/600px/monocyte_binarized.png
    image_path: ../assets/images/monocyte_binarized.png
    alt: "Segmented monocyte"
    title: "Image segmentation of the monocyte corresponding to ID 15 in the provided dataset."
  - url: ../assets/images/600px/lymphocyte_binarized.png
    image_path: ../assets/images/lymphocyte_binarized.png
    alt: "Segmented lymphocyte"
    title: "Image segmentation of the lymphocyte corresponding to ID 20 in the provided dataset."
gallery3:
  - url: ../assets/images/600px/WBC_167.png
    image_path: ../assets/images/WBC_167.png
    alt: "White blood cell image."
    title: "An image of a WBC (ID: 167)."
  - url: ../assets/images/600px/WBC_167_segmentation.png
    image_path: ../assets/images/WBC_167_segmentation.png
    alt: "Binarized white blood cell."
    title: "The binarization of this image, showing that the nucleus is not correctly identified during segmentation using the parameters from the tutorial."
---

## Image segmentation requires a tailored approach

We begin our work by discussing how to segment WBCs from blood cell images like the one below, reproduced from the [introduction](home).

[![image-center](../assets/images/600px/neutrophil.png){: .align-center width="300px"}](../assets/images/neutrophil.png)
The granulocyte presented in the introduction (having ID 3 in our dataset).
{: style="font-size: medium;"}

Researchers have developed many algorithms for cellular image segmentation, but no single approach can be used in all contexts. We therefore will identify the key attributes that make this dataset special, which we will use to develop our own segmentation algorithm.

What makes the WBC nucleus so easy for a human to spot in the above blood cell? You may be screaming, ???It is dark blue! How hard could it be???? But to train a computer to segment images by color, we should first understand how the computer encodes color in images.

## The RGB color model

In the **RGB color model**, every rectangular pixel on a computer screen emits a single color formed as a mixture of differing amounts of the three primary colors of light: red, green, and blue (hence the acronym ???RGB???). The amount of each primary color in a pixel is expressed as an integer between 0 and 255, inclusively, with larger integers corresponding to greater amounts of the color.

A few colors are shown in the figure below along with their RGB equivalents; for example, magenta corresponds to equal parts red and blue. Note that a color like (128, 0, 0) contains only red but appears duskier than (256, 0, 0) because the red light in that pixel  has not been ???turned on??? fully.

[![image-center](../assets/images/600px/RGB_color_chart.png){: .align-center}](../assets/images/RGB_color_chart.png)

A collection of colors along with their RGB codes. This table corresponds to mixing colors of light instead of pigment, which causes some non-intuitive effects; for example, yellow is formed by mixing equal parts red and green. The last six colors appear muted because they only receive half of a given color value compared to a color that receives 256 units. If all three colors are mixed in equal proportions, then we obtain a color on the gray scale between white (maximum amount of all three colors) and black (no color). Source: <a href="https://excelatfinance.com/xlf/xlf-colors-1.php" target="_blank">Excel at Finance</a>.
{: style="font-size: medium;"}

The RGB model gives us an idea for segmenting a WBC nucleus. If we scan through the pixels in a blood cell image, we can ignore any pixels whose RGB color values are not sufficiently blue; hopefully, the remaining pixels are found in the WBC nucleus.

**STOP:** You can find a color picker in `Utilities > Digital Color Meter` (Mac OS X) or by using <a href="https://getsharex.com" target="_blank">ShareX</a> (Windows). Open your color picker, and hover the picker over different parts of the granulocyte image above. What are the typical RGB values for the WBC nucleus, and how do these RGB values differ from those of the RBCs and the image background?
{: .notice--primary}

## Binarizing an image based on a color threshold

We will **binarize** each blood cell image by coloring a pixel white (RGB: (256, 256, 256)) if its blue value is above some threshold, and turning a pixel black (RGB: (0, 0, 0)) if its blue value is beneath some threshold.

The binarized version of the above granulocyte image using the threshold value of 153 is shown in the figure below. Unfortunately, we cannot clearly see the WBC nucleus in this binarized image because although the nucleus's pixels have high blue values, so do those of the image's background, which emit high percentages of red, green, and blue, producing the background's light appearance.

[![image-center](../assets/images/600px/neutrophil_binarized_blue.png){: .align-center width="300px"}](../assets/images/neutrophil_binarized_blue.png)

A binarized version of the granulocyte image from the previous figure (having image ID 3 in our dataset). A pixel is colored white if it has a blue value of 153 or greater, and a pixel is colored black otherwise. The region with the nucleus is not clearly visible because much of the original image's background is light, and so its pixels have large red, green, and blue values.
{: style="font-size: medium;"}

**STOP:** How might we modify our segmentation approach to perform a binarization that identifies the WBC nucleus more effectively?
{: .notice--primary}

We were unable to distinguish between the image background and the WBC nucleus using blue color values, but a color picker verifies that pixels in the WBC nucleus tend to have a green value that is much lower than the image background and a red value that is lower than every other part of the image. The figure below shows two binarizations of the original image using a green threshold of 153 (left) and a red threshold of 166 (Right).

{% include gallery caption="Two more binarized versions of the neutrophil image from the figure above, based on the green and red channels. For both these colors, the WBC nucleus tends to have lower values than other parts of the original image. (Left) A binarization in which a pixel is colored white if it has a green value less than or equal to 153, and a pixel is colored black otherwise. (Right) A binarization in which a pixel is turned white if it has a red value less than or equal to 166, and a pixel is colored black otherwise." %}

It would seem that we should work with the binarized image based on the red threshold, which contains the clearest image of the nucleus among the three binarized images. However, note that each threshold was successful in eliminating some of the non-nuclear parts of the image. For example, the white regions in the top left of both binarized images in the figure above was eliminated by the binarized image based on the blue threshold, which initially did not seem helpful.

This insight gives us an idea: if each of the three images is successful at excluding some part of the image, then let us produce a fourth image in which a pixel is white only if it is white in all three binarized images. In the following tutorial, we will build an R pipeline that implements this approach to produce binarized WBC nuclei for all our blood cell images.

[Visit tutorial](tutorial_nuclear_segmentation){: .btn .btn--warning .btn--large}
{: style="font-size: 100%; text-align: center;"}

## Successful segmentation is subject to parameters

If you followed the above tutorial, then you may be tempted to celebrate, since it seems that we have resolved our first main objective of identifying WBCs. Indeed, if we segment all of the images in the dataset via the same process, then we typically obtain a nice result, as indicated in the figure below for the sample monocyte and lymphocyte images presented in the [introduction](home).

{% include gallery id="gallery2" caption="Image segmentation of the monocyte (left) and lymphocyte (right) corresponding to IDs 15 and 20 in the provided dataset." %}

At the same time, no segmentation pipeline is perfect. The figure below illustrates that for a few images in our dataset, we may not correctly segment the entire nucleus.

{% include gallery id="gallery3" caption="(Left) An image of a WBC (ID: 167). (Right) The binarization of this image, showing that the nucleus is not correctly identified during segmentation using the parameters described in this lesson." %}

We can continue to tweak threshold parameters, but our relatively simple algorithm successfully segments almost every WBC nucleus from our dataset. We are ready to move on to classify WBC nuclei into families according to their shape

[Next lesson](classification){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}
