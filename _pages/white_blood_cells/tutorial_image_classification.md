---
permalink: /white_blood_cells/tutorial_image_classification
title: "Software Tutorial: Training a Classifier on an Image Shape Space"
sidebar:
 nav: "white_blood_cells"
toc: true
toc_sticky: true
image: "../assets/images/normal_adult_blood_smear.JPG"
---

### Installing Weka

In this tutorial, we will apply the k-NN classifier to the post-PCA shape space of WBC nuclei images that we generated in the [previous tutorial](tutorial_shape_space). To do so, we will need a statistical software framework that includes classification algorithms. There are a number of popular platforms available, but we will choose <a href="https://www.cs.waikato.ac.nz/ml/weka/" target="_blank">Weka</a>, developed at the University of Waikato in New Zealand, since it is relatively light-weight and easy to get running quickly.

To install Weka, follow the instructions provided at the <a href="https://waikato.github.io/weka-wiki/downloading_weka/" target="_blank">Weka wiki</a>.

### Converting a shape space file

To convert our current PCA pipeline coordinates to a format to be used in Weka, we need to convert the `WBC_PCA.csv` file that we produced in the previous tutorial and that contains the coordinates of every image in the post-PCA shape space into the `arff` format used by Weka. If you have not completed the previous tutorial, or you would like to skip to the next section of this tutorial, we provide the completed file for download <a href="../downloads/WBC_PCA.arff">here</a>.

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

###

You should now be at the `Weka GUI Chooser` window that shows at the application's startup. Under `Applications`, click `Explorer` to bring up the `Weka Explorer` window. This is the main window that we will use to run our classifier.

[![image-center](../assets/images/600px/weka_explorer.png){: .align-center}](../assets/images/weka_explorer.png)

Next, we need to load our `WBC_PCA.arff` file that we just created. At the top left of the window, click `Open file...` Navigate to the location of your `WBC_PCA.arff` file (the default location would be `Desktop/WBC_PCAPipeline/Step4_Visualization`). When we do so, we should see the data loaded into the window, as shown in the figure below.

[![image-center](../assets/images/600px/weka_explorer_data.png){: .align-center}](../assets/images/weka_explorer_data.png)

We want to ensure that Weka only considers the variables that are relevant for classifying the images by family. For this analysis, we won't need the `FILENAME` name or the `TYPE` variables (if we were to include them, Weka would try to use them as one of the coordinates of our shape space vectors). So, click the checkboxes next to these two vectors, and click `Remove` to exclude them from consideration.

Let's classify! Click the `Classify` tab at the top of the explorer window. Near the top of the window you will see a button that says `Choose`, with `ZeroR` next to it. This button will allow us to select our classifier.

If you're curious what `ZeroR` means, it is the clown classifier from the [main text](training) that assigns every object to the class containing the most elements. Let's not use this classifier! Instead, click `Choose`, which will bring up a menu of folders as shown below.

[![image-center](../assets/images/600px/classifier_list.png){: .align-center}](../assets/images/classifier_list.png)

The k-NN classifer is contained under `lazy > IBK`. Select `IBK`, and you will be taken back to the explorer window, except that next to `Choose` you should now see `IBK` followed by a collection of parameters. The only parameter that we need for k-NN is the value of *k* (the number of nearest neighbors to consider when assigning a class to an object), which by default is set to 1 as indicated by `-K 1`.

Under `Test Options`, we see `Cross-validation` is selected, which is what we want. Let us leave the number of folds equal to 10, the default value.

Finally, beneath `More options`, we will see `(Num) Var344`. This is the variable that Weka will use to assign classes; rather, we would like Weka to classify objects by family. So, select this field, scroll up to the top, and select `(Nom) Family`.

**Note:** Here, `Num` indicates a numeric variable, and `Nom` indicates a nominal variable (meaning that it corresponds to a name).
{: .notice--warning}

Now for the magic moment. Click `Start`. The classifier should run very quickly, and the results will show in the main window to the right.

[![image-center](../assets/images/600px/classifier_output_all_pca_variables.png){: .align-center}](../assets/images/classifier_output_all_pca_variables.png)



<!--
* We will lose some information present in the original data, but the more structure that is present in the data, the less information that we will lose. -- something about the percentage of variation in the data that can be explained by the multiple dimensions?

* Videos from Jen Golbeck -- these need to go into the tutorial

{% include video id="gfhGfnkypCY" provider="youtube" %}

{% include video id="V9PNyx5-kxM" provider="youtube" %}

-->
