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

In the [prologue](../prologue), we worked with a particle-based model that simulated the interactions of skin cells to produce complex Turing patterns. In this module, we will zoom into the molecular level and model protein interactions. The scale of these interactions is tiny: a protein is typically on the order of about 10nm in diameter. (For comparison, the diameter of a single human hair is about 100,000 nm, and a light microscope's highest resolution is about 2,000 nm.) We will see that the cell has evolved a form of molecular communication based on protein interactions that is rapid, robust, and elegant.

To model protein interactions, we will use a  **network**, which is a collection of **nodes** along with **edges** that connect pairs of nodes. Whether we are studying the interactions of proteins, the complex chains of chemical reactions underlying cellular metabolism, the tangled webs of neurons in the human nervous system, or an evolutionary tree of life, networks are critical to our understanding of biological processes.

Our interest lies in the frequently recurring structures hidden within biological networks called **network motifs**. Similarly to our work in the prologue, we will use modeling to answer of *why* these motifs have evolved to help the cell respond to its environment.

We will soon define our specific network of study, but before we get ahead of ourselves, we will introduce some of the molecular biology fundamentals we will need to complete our analysis. You may already know this biological background, in which case you should feel free to skim the next lesson.

[Next lesson](transcription){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

[^neuralNetwork]: An, Hongyu. (2017). Opportunities and challenges on nanoscale 3D neuromorphic computing system. 10.1109/ISEMC.2017.8077906.
[^metabolicNetwork]: Colombie, Sophie & Nazaret, Christine & Bénard, Camille & Biais, Benoit & Mengin, Virginie & Solé, Marion & Fouillen, Laetitia & Dieuaide‐Noubhani, Martine & Mazat, Jean-Pierre & Beauvoit, Bertrand & Gibon, Yves. (2014). Modelling central metabolic fluxes by constraint-based optimization reveals metabolic reprogramming of developing Solanum lycopersicum (tomato) fruit. The Plant Journal. 81. 10.1111/tpj.12685.
[^PPInetwork]: Ramage, Holly & Kumar, Gagandeep & Verschueren, Erik & Johnson, Jeffrey & Dollen, John & Johnson, Tasha & Newton, Billy & Shah, Priya & Horner, Julie & Krogan, Nevan & Ott, Melanie. (2015). A Combined Proteomics/Genomics Approach Links Hepatitis C Virus Infection with Nonsense-Mediated mRNA Decay. Molecular cell. 57. 329-340. 10.1016/j.molcel.2014.12.028
