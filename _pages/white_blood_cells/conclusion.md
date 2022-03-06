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

On the other end of the line was a local dermatologist. He asked me if I knew of anyone working on diagnosing cancer from images of skin lesions. He had noticed that he and his colleagues weren't very accurate at this task when they compared their initial impressions of patient lesions against a biopsy.

I accessed my millennial superpowers and performed an internet search, which led me to an article (CITE) that had recently attained a landmark result and has since received thousands of citations. This article devised an algorithm that beat 21 certified U.S. dermatologists at classifying images of skin lesions into one of three classes: **malignant** (i.e., cancerous and at risk of spread), **benign** (a non-cancerous tumor with no risk of spread), and **non-neoplastic** (not a tumor).

As is the case for the skin lesion research, the currently best known classifier for WBC image classification (CITE) uses a technique called **deep learning**. You may have seen this term wielded with mystical reverence, but you may very well not know what it means, and so let's take explain it.

## A brief introduction to neural networks

**Neurons** are cells in the nervous system that are electrically charge and that use this charge as a method of communication to other cells. As you are reading this text, huge numbers of neurons are firing in your brain as it processes the visual information that it receives. The basic structure of a neuron is shown in the figure below.

<figure>
	<a href="../assets/images/components_of_neuron.png"><img src="../assets/images/600px/components_of_neuron.png"></a>
	<figcaption>The components of a neuron. Electrical signals are passed down axons and exchanged at terminal boundaries between neurons. Image courtesy: Jennifer Walinga.</figcaption>
</figure>

In 1943, Warren McCulloch, a neuroscientist, and Walter Pitts, a logician, devised a small network modeling a neuron called a **McCulloch-Pitts neuron**. (CITE) A McCulloch-Pitts neuron has a fixed threshold θ and takes as input *n* **binary variables** *x*<sub>1</sub>, …, *x*<sub><em>n</em></sub>, where each of these variables is equal to either 0 or 1. The MP neuron outputs 1 if *x*<sub>1</sub> + … + *x*<sub><em>n</em></sub> ≥ θ; otherwise, it returns 0. If an MP neuron outputs 1, then we say that it **fires**.

The McCulloch-Pitts neuron with *n* equal to 2 and θ equal to 2 is shown in the figure below. The only way that this neuron will fire is if both inputs *x*<sub>1</sub> and *x*<sub>2</sub> are equal to 1.

<figure>
	<a href="../assets/images/MP_neuron.png"><img src="../assets/images/600px/MP_neuron.png"></a>
	<figcaption>A McCullough-Pitts neuron with <em>n</em> = 2 and θ = 2. The neuron will fire precisely when both input variables are equal to 1; if either is equal to 0, then <em>x</em><sub>1</sub> + <em>x</em><sub>2</sub> will be less than θ and the neuron will not fire.</figcaption>
</figure>

In 1957, Frank Rosenblatt generalized the McCulloch-Pitts neuron into a **perceptron**. A perceptron also has a threshold constant θ and *n* binary input variables *x*<sub><em>i</em></sub>, but it also includes a collection of real-valued constant weights *w*<sub><em>i</em></sub> that are applied to each input variable. That is, the neuron will output 1 (fire) precisely when *w*<sub>1</sub> · *x*<sub>1</sub> + *w*<sub>2</sub> · *x*<sub>2</sub> + … + *w*<sub><em>n</em></sub> · *x*<sub><em>n</em></sub> ≥ θ.

**Note:** A McCulloch-Pitts neuron is a perceptron for which all of the *w*<sub><em>i</em></sub> are equal to 1.
{: .notice--info}

For example, consider the perceptron shown in the figure below. We assign the weight *w*<sub><em>i</em></sub> to the edge connecting input variable *x*<sub><em>i</em></sub> to the neuron.

<figure>
	<a href="../assets/images/perceptron.png"><img src="../assets/images/600px/perceptron.png"></a>
	<figcaption>A perceptron with two input variables. The perceptron includes a constant threshold and constant weights <em>w</em><sub>1</sub> and <em>w</em><sub>2</sub>. The perceptron outputs 1 precisely when the weighted sum *w*<sub>1</sub> · *x*<sub>1</sub> + *w*<sub>2</sub> · *x*<sub>2</sub> is greater than or equal to θ, and it outputs 0 otherwise.</figcaption>
</figure>

We can generalize the perceptron even further. by allowing the input variables *x*<sub><em>i</em></sub> to have arbitrary real values (often, these inputs are constrained to be between 0 and 1). Then, rather than the neuron rigidly firing when *w*<sub>1</sub> · *x*<sub>1</sub> + *w*<sub>2</sub> · *x*<sub>2</sub> + … + *w*<sub><em>n</em></sub> · *w*<sub><em>n</em></sub> is greater than or equal to θ, we pass this weighted sum into a function *f* called an **activation function**, so that the neuron's output is not 1 or 0 but rather *f*(*w*<sub>1</sub> · *x*<sub>1</sub> + *w*<sub>2</sub> · *x*<sub>2</sub> + … + *w*<sub><em>n</em></sub> · *w*<sub><em>n</em></sub>).

A commonly used activation function is the **logistic function**, *f*(*x*) = 1/(1 + *e*<sup>-<em>x</em></sup>), shown in the figure below. Note that the output of this function ranges between 0 (when its input is very negative) and 1 (when its input is very positive).

INSERT FIGURE

**STOP:** What is the activation function used by a perceptron?
{: .notice--primary}

The figure below shows the most general form of an artificial neuron for two inputs.

<figure>
	<a href="../assets/images/activation_function.png"><img src="../assets/images/600px/activation_function.png"></a>
	<figcaption>A general form of an artificial neuron for two input variables *x*<sub>1</sub> and *x*<sub>2</sub>, two fixed weights *w*<sub>1</sub> and *w*<sub>2</sub>, and an activation function *f*. The output of the neuron, rather than being strictly 0 or 1, is *f*(*w*<sub>1</sub> · *x*<sub>1</sub> + *w*<sub>2</sub> · *x*<sub>2</sub>).</figcaption>
</figure>

The outputs of mathematical functions can be used as inputs to other functions via function composition. For example, if *f*(*x*) = 2*x*-1, *g*(*x*) = *e*<sup>*x*</sup>, and *h*(*x*) = cos(*x*), then *h*(*g*(*f*(*x*))) = cos(*e*<sup>2*x*-1<sup>).

* Need general figure?

* Most general form of network -- explain the parameters in the network.

<figure>
	<a href="../assets/images/600px/cancer_classifier.png"><img src="../assets/images/cancer_classifier.png"></a>
	<figcaption>Our desired neural network for cancer classification of skin lesions.</figcaption>
</figure>



* Convert input into a vector, and output should fall into classes.

* "Depth" in DL means many layers of neurons, often connected in elaborate ways that could constitute an entire course. (Show a few from wikimedia commons?)

* This is what we would hope would happen, but it means finding the "best" collection of parameters for the network.

## Finding the best choice of parameters

* To do so, we divide our pre-labeled data into a training set and a test set.

* For the training set, we should find the choice of network parameters that performs the best on this set.

* What does it mean for something to perform well on this test set?

* For each data element, it has a true vector and an output vector. We could take the mean RMSD of every element's true and output vector. Now we have a function that we wish to minimize. (Needs example.)

* Once we have done so, for each item in the test set, we simply take the element *i* maximizing *v*(*i*) where *v* is the vector corresponding to this data point. Then we are ready to apply what we have learned in this module, using metrics like accuracy, recall, specificity, and precision, to determine how well the model does on our test dataset.

* Because there are many parameters, we should be careful of the curse of dimensionality. As many a student completing a deep learning project has learned, a choice of parameters producing good results on the test data may not perform well on the training set at all -- perform worse than random choice.

* All of this, however, assumes that we have already determined our choice of parameters. We would like these parameters to minimize the mean RMSD on the training dataset. But how do we find these parameters to begin with?

## Exploring a parameter space

* We can think of every parameter in a neural network as a coordinate of a vector, so that every choice of parameters in such a network corresponds to a point in an enormous dimensional space.

* Most of the points in this space, from the perspective of classifying data, are garbage. A tiny number of the vast infinitude of these points will provide a good result on our training set.

* The situation in which we find ourselves is remarkably similar to that of a bacterium in a sparse landscape with isolated food sources.

* Figure?

* One idea, then, is to simply mimic a random walk algorithm, changing parameters randomly by a little bit each time, and seeing how the new parameters perform on the training set.

* However, we saw in the module on bacterial exploration (link) that this is a bad way of searching a space with a goal. Instead, bacteria have evolved to move in the direction of best improvement.

* This idea inspires the most common approach for determining parameters in a neural network, called **gradient descent**. For a given choice of parameters, we make a small change to these parameters "moving in the best direction" -- i.e., which produces the greatest decrease in mean RMSD between the object vectors and their true vectors. (Need terms for this.)

* This approach is analogous to a bacterium constantly reorienting itself in the direction of greatest increase in attractant concentration to swim toward a goal.

* But what parameters should we start with? We will choose them randomly and then run our gradient descent algorithm until we stop being able to make improvements to the mean RMSD on our training data.

* Then, we continue to re-run gradient descent using a variety of different randomly chosen parameters. This is akin to spreading multiple bacteria across a space to explore.

* In the end, we simply take the choice of parameters minimizing mean RMSD over all of the different runs of gradient descent.  There are modifications of gradient descent used in practice, but none make great improvements over this idea.

## A reflection on deep learning

* Deep learning is, without a doubt, a great idea.

* But at the same time, it has its drawbacks. Interpretability and energy resources.

* Sometimes, DL has produced a landmark development that wipes away the competition, like with Alphafold that we mentioned in a previous module (link). The hope is that there will be more developments like it.

* More often than not, DL for classification winds up causing a great deal of time to set up and only provides a slight improvement (if any) over a much simpler, more interpretable approach like k-NN.

* Let us consider the DL project for skin lesion image classification. Beating humans at any task, whether it is chess or cancer diagnosis, is amazing! But at the same time, the accuracy of this approach was only 72%. (I bet you now feel better about our WBC image classifier!) Their approach beat doctors because doctors, like the dermatologist on the other end of the line, are simply not very good at making this diagnosis because it's a hard problem. The ultimate hope of designing all these algorithms is to not just beat us, but do so in resounding fashion.

* Skin lesion classification offers just one of many hard problems still to solve in biology. Compared to other scientific disciplines, it is still a largely untouched universe just waiting to be explored.

## Other

* We have been doing ML all along --- meme with cake?

## Thank you!

* If you are reading this, and you've made it through our entire course, **thank you** for joining us on this journey! We are grateful that you gave your time to us, and we wish you the best on your educational journey. Please don't hesitate to [contact us](../contact) if you have any feedback or questions; we would love to hear from you.
