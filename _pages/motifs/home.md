---
permalink: /motifs/home
title: "Module 1: Finding Motifs in Transcription Factor Networks"
description: Learn to comb through biological networks to find network "motifs" that have evolved to occur surprisingly often and drive cellular processes.
sidebar:
 nav: "motifs"
image: "../assets/images/repressilator_chart.png"
excerpt: "by Noah Lee and Phillip Compeau"
header:
  overlay_image: "../assets/images/repressilator_chart.png"
  overlay_filter: 0.3
author_profile: true # add author to page
---

# Introduction: Networks Rule (Biology)

In the [prologue](../prologue), we worked with a particle-based model that simulated the interactions of skin cells to produce complex Turing patterns. In this module, we will zoom into a much lower biological scale and model protein interactions, which occur on a molecular level. The scale of these interactions is tiny: a protein is typically on the order of about 10nm in diameter. (For comparison, a light microscope's highest resolution is about 2000 nm, and the diameter of a single human hair is about 100,000 nm.)

Our focus will be on how the cell can adjust its protein concentrations to react to an ever-changing environment.  We will see that the mechanisms a cell uses to change internal protein concentrations depend on the interactions of proteins as a sort of molecular communication that is rapid, robust, and elegant.

Because we are considering the interactions of pairs of proteins, we will work with **networks** to explore these relationships. A network is a collection of **nodes** along with **edges** that connect pairs of nodes; the network is a simple model, but in the study of molecular biology, it is ubiquitous.

For example, when studying the functions and binding of proteins, biologists build a **protein-protein interaction network** (figure below). Nodes correspond to proteins, and two proteins are connected with an edge if they are known to interact.

[![image-center](../assets/images/600px/PPI_network.png){: .align-center}](../assets/images/PPI_network.png)
A complete hepatitis C virus-host protein-protein interaction network in hepatoma cells.[^PPInetwork] Nodes correspond to proteins, and an edge connects two proteins if the two proteins interact.
{: style="font-size: medium;"}

When analyzing the complex chains of chemical reactions taking place within a cell, biologists form a **metabolic network** (figure below). Nodes correspond to substances in a chemical reaction, and an edge connects two nodes if there is some enzyme that catalyzes a reaction involving these substances.

[![image-center](../assets/images/600px/The-metabolic-network-of-tomato-cells-The-system-is-a-cell-with-symbolic-subcellular.png){: .align-center}](../assets/images/The-metabolic-network-of-tomato-cells-The-system-is-a-cell-with-symbolic-subcellular.png)
The metabolic network of tomato cells.[^metabolicNetwork]
{: style="font-size: medium; text-align:center;"}

When studying the nervous system, biologists build **neuronal networks** that link neurons together according to how they are linked in the body (figure below). These networks have been studied since the 1940s but have recently exploded as a model for solving applied problems in machine learning as the foundation of what is called "deep learning" (more on this in a later module).

[![image-center](../assets/images/600px/Neuron-networks-a-brain-b-neural-network-c-neuron-connecting-structure-d-neuron.png){: .align-center}](../assets/images/Neuron-networks-a-brain-b-neural-network-c-neuron-connecting-structure-d-neuron.png)
Mapping and models of neurons.[^neuralNetwork]
{: style="font-size: medium;"}

In this module, we will work with yet another fundamental biological network called a **transcription factor network**, which involves the proteins that drive a cell's response to its environment. We will then hunt for frequently recurring structures hidden within this network called **network motifs**. Much like our work in the prologue, we will use modeling to address the question of *why* these motifs have evolved to help the cell respond to its environment.

We will define a transcription factor network soon. But before we get ahead of ourselves, let us introduce some of the molecular biology fundamentals we will need to complete our analysis. As in the prologue, you may already know this biological background, in which case you should feel free to skim the next lesson.

[Next lesson](transcription){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

[^neuralNetwork]: An, Hongyu. (2017). Opportunities and challenges on nanoscale 3D neuromorphic computing system. 10.1109/ISEMC.2017.8077906.
[^metabolicNetwork]: Colombie, Sophie & Nazaret, Christine & Bénard, Camille & Biais, Benoit & Mengin, Virginie & Solé, Marion & Fouillen, Laetitia & Dieuaide‐Noubhani, Martine & Mazat, Jean-Pierre & Beauvoit, Bertrand & Gibon, Yves. (2014). Modelling central metabolic fluxes by constraint-based optimization reveals metabolic reprogramming of developing Solanum lycopersicum (tomato) fruit. The Plant Journal. 81. 10.1111/tpj.12685.
[^PPInetwork]: Ramage, Holly & Kumar, Gagandeep & Verschueren, Erik & Johnson, Jeffrey & Dollen, John & Johnson, Tasha & Newton, Billy & Shah, Priya & Horner, Julie & Krogan, Nevan & Ott, Melanie. (2015). A Combined Proteomics/Genomics Approach Links Hepatitis C Virus Infection with Nonsense-Mediated mRNA Decay. Molecular cell. 57. 329-340. 10.1016/j.molcel.2014.12.028
