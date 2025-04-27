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
excerpt: "Power up your computational and machine learning skills with our free course on modeling biological systems."
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
    excerpt: "Transcription factors are proteins serving as master gene regulators in the cell. When we study how transcription factors interact, we uncover remarkable patterns like oscillations that arise from simple behavior. In this module, we will build models to explain why these regulatory patterns have evolved."
    url: "/motifs/home"
    btn_label: "Read More"
    btn_class: "btn--primary"
chapter_2:
  - image_path: /assets/images/ecoli_glucose.png
    title: "Module 2: Unpacking E. coli’s genius exploration algorithm"
    excerpt: "In bacteria, a single-celled organism explores its environment using an approach that seems intelligent, and yet it can be broken down into a series of chemical reactions. When a bacterium senses a change, it propagates that information through a sequence of internal reactions that adjust its behavior. In this module, we’ll model these processes and see how even when we perturb them, the bacterium still manages to return to its original exploration strategy."
    url: "/chemotaxis/home"
    btn_label: "Read More"
    btn_class: "btn--primary"
chapter_3:
  - image_path: /assets/images/SARS_spike_proteins.jpg
    title: "Module 3: Analyzing the coronavirus spike protein"
    excerpt: "Why did the original SARS coronavirus fizzle out but SARS-CoV-2 spread like wildfire around the planet? Much of the answer lies in how effectively the virus can infect human cells by binding its spike protein to an enzyme on their surface. Can we predict a protein’s structure, and therefore its function, without performing any experiments? And how can we compare proteins (say,  spike proteins across related coronaviruses) to determine why one virus infects humans more efficiently than another?"
    url: "/coronavirus/home"
    btn_label: "Read More"
    btn_class: "btn--primary"
chapter_4:
  - image_path: /assets/images/normal_adult_blood_smear.JPG
    title: "Module 4: Training a computer to classify white blood cells"
    excerpt: "How can algorithms be trained to see as well as a human? By tackling the real-world challenge of classifying white blood cells into categories, a common task in medicine, we will see how computers can make automated decisions. We’ll start by segmenting images to isolate the white blood cells. Then, we will apply classic machine learning algorithms to cluster them based on shape, ultimately allowing us to classify them into distinct types."
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


