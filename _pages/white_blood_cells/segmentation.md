---
permalink: /white_blood_cells/segmentation
title: "Segmentation"
sidebar:
 nav: "white_blood_cells"
toc: true
toc_sticky: true
---

In the [introduction](home), we established that we would like to program a computer to first separate WBCs from images containing both WBCs and RBCs and then classify the WBCs by cell family.

We will begin with the first problem, training a computer to “see” a stained WBC nucleus within a larger image. The more general problem of identifying objects within an image is called **segmentation**.

Many different approaches for image segmentation have been developed, but no one has yet developed a single algorithm that could be used in all contexts. We therefore will apply a maxim that is more general than its application to biological modeling and that will recur throughout this module, which is to identify the key features special to this dataset, and then convert these features into instructions that a computer can follow.

In particular, we ask ourselves what makes the nucleus so easy for a human to spot in the blood cell images. You may be screaming already, “The nucleus is dark purple, of course!” And this is a very good idea. But to train a computer to segment images by color, we need first to understand how the computer represents color in images.

In the **RGB color model**, every rectangular pixel on a computer screen receives a solid color which is formed as a mixture of the three primary colors of light: red, green, and blue (hence the acronym “RGB”). The amount of each color in a pixel is expressed as an integer between 0 and 255, respectively, where larger integers correspond to larger amounts of the color. Some simple colors are shown in the figure below along with their RGB equivalents; for example, magenta corresponds to equal parts red and blue. Note that a color like (128, 0, 0) contains only red but appears duskier than (256, 0, 0) because the red has not been “turned on” fully.

INSERT IMAGE WITH CITATION

A collection of colors along with their RGB codes. Note that this table corresponds to mixing colors of light instead of pigment, which causes some strange effects; for example, yellow is formed by mixing equal parts red and green, and cyan is formed by mixing equal parts blue and green. The last six colors appear muted because they only receive half of a given color value compared to a color that receives 256 units. If all three colors are mixed in equal proportions, then we obtain a color on the gray scale between white (maximum amounts of the colors) and black (no color).
{: style="font-size: medium;"}

This observation gives us an idea for finding a WBC nucleus. Why don’t we scan through the pixels in a blood cell image and determine the amounts of each primary color in different parts of the image? We can then “turn off” any pixels whose color codes are not similar to the pixels inside the nucleus.

**STOP:** You can find a color picker in `Utilities > Digital Color Meter` (Mac OS X) or by using <a href="https://getsharex.com" target="_blank">ShareX</a> (Windows). Open your color picker and one of the WBC images from our dataset, and scan through different pixels in the WBC nucleus, in the RBCs, and in the background parts of the cell. What are the RGB values for the WBC nucleus, and how do they differ from other parts of the cell?
{: .notice--primary}

START HERE

With some exploration, we can find that a stained WBC nucleus has more blue than the surrounding RBCs, which is unsurprising. So if we instruct the computer to binarize our image by turning everything black that falls below a threshold amount of blue, and turning everything else white, the result is shown in the figure below. We can’t clearly see the WBC nucleus because although the nucleus has a high blue content, so does the whitish background of the image. So how can our approach to image segmentation possibly be useful?


Perhaps remove the following (but need to define binarized).

Needs to be clear that the nucleus is darker.

Even though we are training a computer to find patterns in images, we will need to help the computer understand what patterns it should look for. In this case, the end result that we want is a binarized image in which the nucleus’s pixels are essentially all white, and every other pixel in the diagram is colored black. Once we have an image of this form, we can take the outline of this image and know the shape of the nucleus.
