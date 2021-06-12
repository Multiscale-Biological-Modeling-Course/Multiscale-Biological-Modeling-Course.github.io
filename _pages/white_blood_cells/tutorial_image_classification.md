---
permalink: /white_blood_cells/tutorial_image_classification
title: "Software Tutorial: Training a Classifier on an Image Shape Space"
sidebar:
 nav: "white_blood_cells"
toc: true
toc_sticky: true
---

### Step 5 Classification

To convert our current PCA pipeline coordinates to a format to be used in Weka, we need to convert our WBC_PCA.csv file into arff format.

Method 1: Weka for File Conversion

Open Weka.
Navigate to Tools --> ArffViewer.
![image-center](../assets/images/cellorg_step_2.png){: .align-center}
Navigate to File --> Open
![image-center](../assets/images/cellorg_step_3.png){: .align-center}
Change the Files of Type option to CSV data files.
![image-center](../assets/images/cellorg_step_4.png){: .align-center}
Locate the WBC_PCA.csv file in the Step4_ShapeSpaceVisualization folder and press Open.
![image-center](../assets/images/cellorg_step_5.png){: .align-center}
Once all the data is loaded on screen, navigate to File --> Save as … .
![image-center](../assets/images/cellorg_step_6.png){: .align-center}
Locate the Step5_Classification folder, remove the .csv extension in the File Name field and press Save.
![image-center](../assets/images/cellorg_step_7.png){: .align-center}

As a result, our PCA pipeline coordinates have now been converted to the file format that Weka accepts for further classification. This file should be saved as WBC_PCA.arff in the Step5_Classification subfolder of the WBC_CellClass folder.
