---
permalink: /white_blood_cells/segmentation
title: "Segmenting White Blood Cells"
sidebar:
 nav: "white_blood_cells"
toc: true
toc_sticky: true
image: "../assets/images/cellorg_pca_graph_cell.png"
---

## Cellular image segmentation requires a tailored approach

We begin our work in this module by discussing the problem of segmenting WBCs from an image of blood cells like the one in the figure below, reproduced from the [introduction](home).

<center><img src="../assets/images/neutrophil.png" width="300"></center>
The granulocyte presented in the introduction (having ID 3 in our dataset).
{: style="font-size: medium;"}

Researchers have developed many algorithms for cellular image segmentation, but no single approach can be used in all contexts. We therefore will identify the key attributes that make this dataset special, and then use these features to develop a segmentation algorithm.

We therefore ask what makes the WBC nucleus so easy for a human to spot in the above blood cell. You may be screaming, “It is dark purple! How hard could it be?” But to train a computer to segment images by color, we should first understand how the computer represents color in images.

## The RGB color model

In the **RGB color model**, every rectangular pixel on a computer screen receives a solid color formed as a mixture of the three primary colors of light: red, green, and blue (hence the acronym “RGB”). The amount of each color in a pixel is expressed as an integer between 0 and 255, inclusively, where larger integers correspond to larger amounts of the color.

A few colors are shown in the figure below along with their RGB equivalents; for example, magenta corresponds to equal parts red and blue. Note that a color like (128, 0, 0) contains only red but appears duskier than (256, 0, 0) because the red has not been “turned on” fully.

[![image-center](../assets/images/600px/RGB_color_chart.png){: .align-center}](../assets/images/RGB_color_chart.png)

A collection of colors along with their RGB codes. Note that this table corresponds to mixing colors of light instead of pigment, which causes some strange effects; for example, yellow is formed by mixing equal parts red and green, and cyan is formed by mixing equal parts blue and green. The last six colors appear muted because they only receive half of a given color value compared to a color that receives 256 units. If all three colors are mixed in equal proportions, then we obtain a color on the gray scale between white (maximum amount of all three colors) and black (no color). Source: <a href="https://excelatfinance.com/xlf/xlf-colors-1.php" target="_blank">Excel at Finance</a>.
{: style="font-size: medium;"}

The RGB model gives us an idea for finding a WBC nucleus. If we scan through the pixels in a blood cell image, we can “turn off” any pixels whose RGB color values are not sufficiently purple.

**STOP:** You can find a color picker in `Utilities > Digital Color Meter` (Mac OS X) or by using <a href="https://getsharex.com" target="_blank">ShareX</a> (Windows). Open your color picker, and hover the picker over different parts of the the granulocyte image above. What are the typical RGB values for the WBC nucleus, and how do these RGB values differ from both the RBCs and the background of the image?
{: .notice--primary}

## Binarizing an image based on a color threshold

Using a color picker, we find (unsurprisingly) that the blue values for pixels inside a stained WBC nucleus are higher than the more blue than the surrounding RBCs. We will therefore **binarize** our image by coloring a pixel white (RGB: (256, 256, 256)) if its blue value is above some threshold, and turning a pixel black (RGB: (0, 0, 0)) if its blue value is beneath some threshold.

The binarized version of the above cellular image for the threshold value of 153 is shown in the figure below. Unfortunately, we cannot clearly see the WBC nucleus in this binarized image because although the nucleus has high blue values, so does the image's background, because light colors are formed by mixing high percentages of red, green, and blue.

<center><img src="../assets/images/neutrophil_binarized_blue.png" width="300"></center>

A binarized version of the granulocyte from the previous figure (having image ID 3 in our dataset). A pixel is colored white if it has a blue value of 153 or greater, and the pixel is colored black otherwise. The region with the nucleus is shown in white but is not clearly visible because much of the background of the image, which is very light, also has a high blue value (remember that mixing all three colors in equal proportions yields white).
{: style="font-size: medium;"}

**STOP:** How might we modify our segmentation approach to perform a binarization that identifies the WBC nucleus more effectively?
{: .notice--primary}

We were unable to distinguish between the image background and the WBC nucleus using only blue, but a color picker will verify that nuclear pixels have a green content that is much lower than the background and a red content that is lower than every other part of the image. The binarizations of the original image using a green threshold of 153 and a red threshold of 166 are shown in the figure below.

<table>
<tr>
    <td><img src="../assets/images/neutrophil_binarized_green.png"></td>
    <td><img src="../assets/images/neutrophil_binarized_red.png"></td>
</tr>
</table>

Two more binarized versions of the neutrophil image from the figure above (left), based on the green and red channels. For both of these colors, the WBC nucleus tends to have lower values than other parts of the original image. (Left) A binarization in which a pixel is turned white if it has a green value less than or equal to 153. (Right) A binarization in which a pixel is turned white if it has a red value less than or equal to 166.
{: style="font-size: medium;"}

It would seem that we should work with the binarized image based on the red threshold, which contains the clearest image of the nucleus among the three binarized images. However, each threshold was successful in eliminating non-nuclear parts of the image. For example, note the white blob in the top left of the binarized image based on the red threshold. Although this image did not exclude this area, the binarized image based on blue was successful in doing so; this same region is black in the preceding figure.

This insight gives us an idea: if each of the three images is successful at excluding some part of the image, then let us produce a fourth image such that a pixel is white if it is white in all three binarized images. In the following tutorial, we will build an R pipeline that implements this approach to produce binarized WBC nuclei for all our blood cell images.

[Visit tutorial](tutorial_nuclear_segmentation){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

## Successful segmentation is subject to parameters

If you followed the above tutorial, then you may be tempted to celebrate, since it seems that we have resolved our first main objective of identifying WBCs. Indeed, if we segment all of the images in the dataset via the same process, then we typically obtain a nice result, as indicated in the figure below for the sample monocyte and lymphocyte images presented in the [introduction](home). Even though these images have been binarized, the large irregular shape of the monocyte nucleus and the small round shape of the lymphocyte nucleus are still visible.

<table>
<tr>
    <td><img src="../assets/images/monocyte_binarized.png"></td>
    <td><img src="../assets/images/lymphocyte_binarized.png"></td>
</tr>
</table>

Image segmentation of the monocyte (left) and lymphocyte (right) corresponding to IDs 15 and 20 in the provided dataset.
{: style="font-size: medium;"}

This is not to say that our segmentation pipeline is perfect. The figure below illustrates that for a few images in our dataset, we may not correctly parse out the entire nucleus.

<table>
<tr>
    <td><img src="../assets/images/WBC_167.png"></td>
    <td><img src="../assets/images/WBC_167_segmentation.png"></td>
</tr>
</table>

(Left) An image of a WBC (ID: 167). (Right) The binarization of this image, showing that the nucleus is not correctly identified during segmentation using the parameters from the tutorial.
{: style="font-size: medium;"}

**STOP:** Play around with the threshold parameters for red, green, and blue values from the tutorial. Can you find a better choice of parameters? How should we quantify whether one collection of parameters is better than another?
{: .notice--primary}

We can continue to tweak threshold parameters, but our relatively simple algorithm has successfully segmented most of the WBC nuclei from our dataset. We are ready to move on to our second goal of classifying WBC nuclei into families.

[Next lesson](classification){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}
