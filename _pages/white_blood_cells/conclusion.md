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

## A brief introduction to neural networks

You may be wondering what the state of the art is for WBC image classification. The best known classifier (CITE) uses high-resolution images in addition to a technique called **deep learning**. You may have seen this term wielded with mystical reverence, but you may very well not know what it means, and so in this module's conclusion, we will make an aside to explain the basics of this method.

**Neurons** are cells in the nervous system that are electrically charged and that use this charge as a method of communication to other cells. As you are reading this text, huge numbers of neurons are firing in your brain as it processes the visual information that it receives. The basic structure of a neuron is shown in the figure below.

<figure>
  <center>
	<a href="../assets/images/components_of_neuron.png"><img src="../assets/images/600px/components_of_neuron.png"></a>
  </center>
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

The outputs of mathematical functions can be used as inputs to other functions via function composition. For example, if *f*(*x*) = 2*x*-1, *g*(*x*) = *e*<sup>*x*</sup>, and *h*(*x*) = cos(*x*), then *h*(*g*(*f*(*x*))) = cos(*e*<sup>2*x*-1</sup>). Similarly, the outputs of artificial neurons can be used as inputs to other neurons with (possibly) different weights and activation functions. Linking neurons together in this way produces a **neural network** such as the one shown in the figure below.

INSERT FIGURE

We have a huge amount of freedom when building neural networks, since we can link up neurons however we like, and since the weights of all incoming edges at each neuron are allowed to vary, as well as the activation function used at each neuron. This freedom will mean that the number of possible neural networks is incomprehensibly large, so that neural networks are very powerful, but they can also be difficult to interpret.

## Framing a classification problem using neural networks

The question is how to use neural networks to solve a classification problem involving real data. Earlier in this module, we discussed converting each data point *x* into a *feature vector* (*x*<sub>1</sub>, *x*<sub>2</sub>, …, *x*<sub>*n*</sub>) representing each of the *n* feature values of *x*. As a result, these *n* variables of the data's feature vectors become the *n* input variables of a neural network.

The most typical design of a neural network for classification is then to connect all of the input variables into each one of a collection of (possibly many) artificial neurons, called a **hidden layer**. These neurons may then be connected in some combination to neurons in another layer, which are connected to neurons in another layer, and so on. As a result, many practical neural networks may have several hidden layers amounting to thousands of neurons, each with their own input weights and possibly different activation functions. The most common usage of the term **deep learning** refers to solving problems using many hidden layers of neurons; the discussion of the many pitfalls in designing neural networks for deep learning would cover an entire course much longer than this one.

The remaining question is what the output of our neural network should be. If we are classifying our data into *k* classes, then we typically would like to connect the final hidden layer of neurons to *k* **output neurons**. Ideally, if we plug in the values of the feature vector for a given data point *x* that we know belongs to the *i*-th class, then we would like for the *i*-th output neuron to output a value close to 1, and all other output neurons to output a value close to 0.

A potential neural network model is illustrated in the figure below for our example of categorizing WBC images into three classes. Because the number of nodes and edges in a real network is enormous, this figure uses gray boxes to indicate layers containing potentially many hidden neurons, as well as dashed edges to represent connecting many (if not all) nodes in one layer to each of the nodes in the next layer.

<figure>
	<a href="../assets/images/600px/cancer_classifier.png"><img src="../assets/images/cancer_classifier.png"></a>
	<figcaption>FIX THIS so that it isn't skin lesion specific and so it doesn't just have theta1, theta2, theta3. Should also just have *x*<sub>*n*</sub> instead of 3n.</figcaption>
</figure>

In order for such a neural network to classify objects in our dataset, we must find the "best" choices for the weights assigned to input variables at each neuron, assuming that we have decided on which activation function(s) to use for the network's neurons. A network may have hundreds of thousands of these input weights, and for a given application it will be initially unclear which weights to use to produce the magic output in which an object belonging to the *i*-th class produces an output close to 1 for the *i*-th output neuron (and an output close to 0) for other neurons.

## Finding the best choice of parameters

In a previous lesson (CITE), we discussed how to assess the results of a classification algorithm like k-NN on a collection of data with known classes. To this end, we established a subset of our data called the *validation set* and asked how well the classification algorithm performed on these data, pretending that we did not know the correct class for each data point.

To generalize this idea to our neural network classifier, we divide our data with known classes into a **training set** and a **test set**. We then seek the choice of parameters that "performs the best" on the training set, ignoring the test set for the moment.

Of course, we should specify what it means for a neural network with established parameters to perform well on the training set. Each data point *x* in the training set has a ground truth classification vector *c*(*x*) = (*c*<sub>1</sub>, *c*<sub>2</sub>, ..., *c*<sub>*k*</sub>), where exactly one of the *c*<sub>*i*</sub> is equal to 1 corresponding to the correct class of *x*, and the other *c*<sub>*i*</sub> are equal to 0. The data point *x* also has an output vector *o*(*x*) = (*o*<sub>1</sub>, *o*<sub>2</sub>, ..., *o*<sub>*k*</sub>), where *o*<sub>*i*</sub> is the output of the *i*-th output vector in the network when *x* is used as the input data.

Fortunately, we have been using a method of comparing two vectors throughout this course, namely RMSD. The RMSD between an object's classification vector and its output vector for a given neural network measures how well the network classified this data point, with a value close to 0 representing a good fit.

Therefore, we can obtain a good measure of how well a neural network performs on a training set by taking the mean RMSD between classification and output vectors for every element in the training set. As a result, we have a clear problem to solve: select the input weights of each neuron in a neural net minimizing this mean RMSD for objects in the training set.

NEEDS EXAMPLE

Once we have chosen a collection of weight parameters for our network that perform well on the training set, we then assess how well this choice of parameters performs on the test set that we left out initially. To this end, we can insert the feature vector of each test set object *x* as input into the network, and then consult the output vector *o*(*x*) = (*o*<sub>1</sub>, *o*<sub>2</sub>, ..., *o*<sub>*k*</sub>) for this object. Whichever *i* maximizes *o*<sub>*i*</sub> for this output vector is the assigned class of *x*. Now we are ready to apply what we have learned earlier in this module for quantifying the quality of a classifier, using metrics such as accuracy, recall, specificity, and precision, to determine how well the neural network is performing as a classifier.

However, because the typical neural network has many parameters, we should be wary of the curse of dimensionality. As many a student completing a deep learning project has learned, it may be very difficult to obtain a network and parameters that perform well on the training set, and even if a model has a low mean RMSD for the training set, it may perform horribly on the test set. (The former situation is called "underfitting" and the latter is called "overfitting".)

All of this discussion, however, assumes that we have already determined our network's choice of parameters to produce a low mean RMSD for our training set. But how can we find this best choice of parameters in the first place?

## Exploring a parameter space

Every neural network contains a collection of hundreds of thousands or more input weights. We can think of each of these weight parameters as the coordinate of a very long vector in a very high-dimensional space.

From the perspective of producing low mean RMSD between output and classification vectors for a collection of training data, the vast majority of the points in this space (i.e., choices of weight parameters) are worthless. Among this vast infinitude, a tiny number of these points will provide a good result on our training set. Even with substantial computational resources, finding one of these points is daunting.

The situation in which we find ourselves is remarkably similar to that of a bacterium exploring an environment with sparse food resources. Or identifying the conformation of a protein having the lowest potential energy.

Our idea, then, is to borrow what we have learned in this course, and apply a *local search* algorithm to explore the parameter space. As with *ab initio* structure prediction, we could make a variety of small changes to the parameter values, and then update our current parameters to the ones producing the greatest decrease in mean RMSD between output and classification vectors. We continue this process until this mean RMSD stops decreasing. This idea serves as the foundation for the most popular approach for determining parameters for a neural network, called **gradient descent**.

**STOP:** How can we avoid getting stuck in a local minimum? What does a local minimum mean in the context of parameter search?
{: .notice--primary}

To avoid getting stuck in a *local minimum*, we then run this local search algorithm for many different randomly chosen initial parameters. In the end, we take the choice of parameters minimizing mean RMSD over all of the different runs of gradient descent.

Many modifications of gradient descent have been developed, but all are based on the core idea of local search. Whether we are classifying cellular images, predicting the structure of a protein, or modeling the exploration of a humble bacterium, local search can prove powerful. And yet despite these three problems demonstrating how biological problems can be solved with modeling, biology on the whole largely remains an untouched universe just waiting to be explored.

**Note:** If you find yourself interested in deep learning and would like to learn more, check out the excellent <a href="http://neuralnetworksanddeeplearning.com" target="_blank"><em>Neural Networks and Deep Learning</em> online book by Michael Nielsen.
{: .notice--info}

## Thank you!

If you are reading this, and you've made it through our entire course, **thank you** for joining us on this journey! We are grateful that you gave your time to us, and we wish you the best on your educational journey. Please don't hesitate to [contact us](../contact) if you have any questions, feedback, or would like to leave us a testimonial; we would love to hear from you.
