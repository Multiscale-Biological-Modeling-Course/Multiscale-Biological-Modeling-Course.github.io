---
permalink: /white_blood_cells/conclusion
title: "Conclusion: Toward Deep Learning"
sidebar:
 nav: "white_blood_cells"
toc: true
toc_sticky: true
image: "../assets/images/normal_adult_blood_smear.JPG"
gallery:
  - url: ../assets/images/600px/neutrophil.png
    image_path: ../assets/images/neutrophil.png
    alt: "Neutrophil"
    title: "A specific subtype of granulocyte called a neutrophil, illustrating the multilobular structure of this WBC family."
  - url: ../assets/images/600px/monocyte.png
    image_path: ../assets/images/monocyte.png
    alt: "Monocyte"
    title: "A monocyte with a single, irregularly-shaped nucleus."
  - url: ../assets/images/600px/lymphocyte.png
    image_path: ../assets/images/lymphocyte.png
    alt: "Lymphocyte"
    title: "A lymphocyte with a small, round nucleus."
---

A professor's phone never rings. And yet here was the phone in my office, on a cold spring afternoon, ringing away. "Nothing good can come of this", I thought. Nervously, I answered.

On the other end of the line was a local dermatologist. He asked me if I knew of anyone working on diagnosing cancer from images of skin lesions. He had noticed that he and his colleagues weren't very accurate at this task when they compared their initial impressions against a biopsy.

I told him that I was unaware of any colleagues working on such a project, but an internet search took me to a recently published article (CITE) that had attained a landmark result, beating 21 certified U.S. dermatologists at classifying images of skin lesions into one of three classes: **malignant** (i.e., cancerous and at risk of spread), **benign** (a non-cancerous tumor with no risk of spread), and **non-neoplastic** (not a tumor).

As is the case for the skin lesion research, the currently best known classifier for WBC image classification (CITE) uses a technique called **deep learning**. You may have seen this term wielded with mystical reverence, but you may very well not know what it means; let's take a moment to explain it.

## A brief introduction to neural networks

* Explain what an artificial neuron is: cite McCullough-Pitts and perceptrons

* Most general form of network -- explain the parameters in the network.

* Convert input into a vector, and output should fall into classes.

* This is what we would hope would happen, but it means finding the "best" collection of parameters for the network.

## Other

* We have been doing ML all along --- meme with cake?

## Kicking tires on our approach

* Why was our approach not perfect? There are lots of potential failure points.

* We will start with our data. Great data means that we often can obtain very positive results using just about any approach. An example of this was the iris flower data set, where the data were gathered very correctly and the features very clearly differentiated the data.

* We have very low resolution images, and we don't have many of them. From this perspective, it is impressive that we were able to find any signal at all, and a natural thing to do would be to boost the size of our dataset --- especially for monocytes and lymphocytes --- with higher resolution images.

* These drawbacks are a feature of this chapter, not a bug, as real datasets are often noisy.

* The next failure point is our segmentation pipeline. We saw at the start of this module that not all of our images were perfectly segmented by our pipeline. As part of our quality assurance, perhaps we could devise a test for incorrect segmentations --- such as, if the size of the final object is not as large as what we would expect to be a nucleus, we could disregard this image as it may throw off our results.

* Then, our pipeline was handed off to CellOrganizer. The low resolution of the nuclear images will mean that our vectorization of each segmented nucleus into features may have some round-off error included. We used the default number of sampled points of *n* equal to 1000, which was just one of many parameters that we encountered in this problem. Perhaps changing that default will improve the performance of our classifier as well.

* But even with a higher-resolution image, we are ignoring every aspect of these images other than their shape. It is in some sense amazing that we were able to obtain even moderately good results given that the features that we used were only based on the shape of the nucleus.

*  We didn't even take the size of the nucleus into account! For example, if we return to the three sample WBC images that we showed in this module's introduction, reproduced below, then we will see that the monocyte nucleus is much smaller than the other two nuclei. As a result, we could add a feature to our dataset that represents the total area of the nucleus.

* STOP: What other features could we potentially add?

{% include gallery caption="Three images from the blood cell image dataset showing three types of WBCs. In our dataset, these cells correspond to image IDs 3, 15, and 20. (Left) A specific subtype of granulocyte called a neutrophil, illustrating the multilobular structure of this WBC family. (Center) A monocyte with a single, irregularly-shaped nucleus. (Right) A lymphocyte with a small, round nucleus." %}

* Finally, for the classification itself. We used k-nearest neighbors because it is intuitive and straightforward to explain to newcomers. There is nothing wrong with using a simple approach, but perhaps a more advanced algorithm that is not simply based on the nearest point in the shape space will be able to make more intelligent decisions.

## Deep learning and the state of the art for WBC classification

* In fact, the state-of-the-art for WBC analysis is based on a deep learning approach that sacrifices interpretability for performance and flexibility. Explain what is meant by these terms.

* A full explanation of deep learning is more than what we set out to do here, and we will have to save it for another day. Suffice it to say that k-NN will work practically instantaneously, while a deep learning classifier may consume the energy of a small country to build.

* Yet at the end of the day, blood cell counts are often still done manually because medicine can be slow to change but also subject to liability. There are major qualms in modern medicine about the ramifications of turning our lives over to algorithms.

* Story about the phone ringing in my office one day and talking to a doctor, who said that he felt he and his colleagues were not doing a very good job of identifying cancer from images of skin lesions.

* After a quick search, I found a paper that had advanced the state of the art for this problem. Wow! Better at diagnosing cancer than some of the best dermatologists in the United States.

* And yet here is their confusion matrix. SHOW --- and this paper was on the cover of *Nature*!

* I bet you feel a bit better about our results on WBC nuclear image analysis! So the approach does improve over a human, but we aren't any good at solving this problem either. This is the ultimate hope of machine learning algorithms --- that they not just beat us, but they do so in resounding fashion.

## Wrapping up

* That's it! Thank you for joining us in this text. If you're reading this, we are very grateful that you made it all the way through.

* Point to exercises
