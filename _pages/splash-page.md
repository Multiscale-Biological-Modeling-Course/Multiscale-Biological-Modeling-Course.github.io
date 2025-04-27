---
title: "Biological Modeling"
description: "Welcome to Biological Modeling: free lessons and tutorials that blend computation with life science, plus a companion textbook."
layout: splash
permalink: /splash-page/
header:
  overlay_color: "#000"
  overlay_filter: "0.6"
  overlay_image: /assets/images/600px/f38_k61_high-res.png
  actions:
    - label: "Start learning"
      url: "/prologue/"
    - label: "Download the E-book"
      url: "https://leanpub.com/biologicalmodeling"
    - label: "Get the print book"
      url: "https://www.amazon.com/Biological-Modeling-Short-Phillip-Compeau/dp/B0BT6B2B8W"
excerpt: "Power up your computational and machine learning skills with our free course on modeling biological systems at multiple scales."
author_profile: true
prologue:
  - image_path: /assets/images/gray_scott_jupyter_high-res.png
    title: "Prologue: Random walks and Turing patterns"
    excerpt: "Have you ever wondered why zebras have stripes? In the course prologue, we’ll explore how simple predator-prey interactions at the microscopic level can give rise to reaction-diffusion systems, where stripes and spots spontaneously emerge from random motion."
    url: "/prologue/"
    btn_label: "Read More"
    btn_class: "btn--primary"
chapter_1:
  - image_path: /assets/images/repressilator_chart.png
    title: "Module 1: Finding motifs in transcription factor networks"
    excerpt: "Transcription factors are proteins that serve as master gene regulators in the cell. When we study how they interact, we uncover remarkable patterns like oscillations that arise from simple behavior. In this module, we will build models to explain why these regulatory patterns have evolved."
    url: "/motifs/home"
    btn_label: "Read More"
    btn_class: "btn--primary"
chapter_2:
  - image_path: /assets/images/ecoli_glucose.png
    title: "Module 2: Unpacking E. coli’s genius exploration algorithm"
    excerpt: "How can cells perform complex tasks without intelligence?"
    url: "/chemotaxis/home"
    btn_label: "Read More"
    btn_class: "btn--primary"
chapter_3:
  - image_path: /assets/images/SARS_spike_proteins.jpg
    title: "Module 3: Analyzing the coronavirus spike protein"
    excerpt: "Why did the original SARS coronavirus fizzle out but SARS-CoV-2 spread like wildfire around the planet?"
    url: "/coronavirus/home"
    btn_label: "Read More"
    btn_class: "btn--primary"
chapter_4:
  - image_path: /assets/images/normal_adult_blood_smear.JPG
    title: "Module 4: Training a computer to classify white blood cells"
    excerpt: "How can algorithms be trained to see as well as a human?"
    url: "/white_blood_cells/home"
    btn_label: "Read More"
    btn_class: "btn--primary"
---

# Contents

{% include feature_row id="prologue" type="left" %}

{% include feature_row id="chapter_1" type="right" %}

{% include feature_row id="chapter_2" type="left" %}

{% include feature_row id="chapter_3" type="right" %}

{% include feature_row id="chapter_4" type="left" %}

# Acknowledgements

This online course is a training and dissemination effort for the <a href="https://mmbios.pitt.edu" target="_blank">National Center for Multiscale Modeling of Biological Systems (MMBioS)</a>. It is supported by the National Institutes of Health (grant ID: P41 GM103712).

We would first and foremost like to thank everyone working on MMBioS software; their work allowed this project to come about. Chiefly, thank you to the other members of our training and dissemination team (Alex Ropelewski, Joe Ayoob, and Rozita Laghaei) as well as the head of the MMBioS consortium, Jim Faeder.

We are also very grateful to Wendy Velasquez Ebanks, Julien Gomez, Yanjing Li, Ulani Qi, Aditya Parekh, and Shalini Panthangi, who provided additional work on the course during its conception.

Module 1 was in part inspired by Uri Alon's research and superlative book <a href="https://www.amazon.com/Introduction-Systems-Biology-Mathematical-Computational/dp/1439837171" target="_blank"><i>An Introduction to Systems Biology</i></a>, a landmark biological textbook that we strongly recommend if you are interested in a greater discussion of biological network motifs.

Special thanks to Jiayi Shou for the analogy in Module 3 of new protein companies rising like "bamboo shoots after the rain".

The cover image on Module 4 was created by Keith Chambers.

Finally, the website design was built using Michael Rose's excellent <a href="https://mmistakes.github.io/minimal-mistakes/" target="_blank">Minimal Mistakes</a> theme.

