---
permalink: /white_blood_cells/tutorial_image_classification
title: "Software Tutorial: Training a Classifier on an Image Shape Space"
sidebar:
 nav: "white_blood_cells"
toc: true
toc_sticky: true
image: "../assets/images/normal_adult_blood_smear.JPG"
---

### Downloading Weka

To run a classifier on our shape space, we will need a software framework for running standard machine learning algorithms. There are a number of options available, but we will choose <a href="https://www.cs.waikato.ac.nz/ml/weka/" target="_blank">Weka</a>, developed at the University of Waikato in New Zealand, since it is relatively light-weight and easy to get running quickly.

To install Weka, follow the instructions provided at the <a href="https://waikato.github.io/weka-wiki/downloading_weka/" target="_blank">Weka wiki</a>.

### Method 1: Weka for File Conversion

To convert our current PCA pipeline coordinates to a format to be used in Weka, we need to convert our `WBC_PCA.csv` file into the `arff` format used by Weka. If you did not complete the previous tutorial, or you would like to skip this section, we provide the completed file <a href="../downloads/WBC_PCA.arff">here</a>.


Open Weka and navigate to `Tools --> ArffViewer`.

[![image-center](../assets/images/600px/cellorg_step_2.png){: .align-center}](../assets/images/cellorg_step_2.png)


Then navigate to `File --> Open`.

[![image-center](../assets/images/600px/cellorg_step_3.png){: .align-center width="300px"}](../assets/images/cellorg_step_3.png)

Change the `Files of Type` option to `CSV data files`.

[![image-center](../assets/images/600px/cellorg_step_4.png){: .align-center}](../assets/images/cellorg_step_4.png)

Find the `WBC_PCA.csv` file in your `Step4_Visualization` folder and click `Open`.

[![image-center](../assets/images/600px/cellorg_step_5.png){: .align-center}](../assets/images/cellorg_step_5.png)

Once all the data is loaded on screen, navigate to `File --> Save as …`.

[![image-center](../assets/images/600px/cellorg_step_6.png){: .align-center}](../assets/images/cellorg_step_6.png)

Remove the `.csv` extension in the `File Name` field, and click `Save`.

[![image-center](../assets/images/600px/cellorg_step_7.png){: .align-center}](../assets/images/cellorg_step_7.png)

As a result, our PCA pipeline coordinates have now been converted to the file format that Weka accepts for further classification. This file should be saved as `WBC_PCA.arff` in the `Step4_Visualization` subfolder of the `WBC_CellClass` folder.

Now that we have the PCA dataset in the correct format, click `Exit` to return to the Weka home screen.
