---
permalink: /coronavirus/tutorial_ab_initio
title: "Software Tutorial: Using ab initio Modeling to Predict the Structure of Hemoglobin Subunit Alpha"
description: "Hands-on tutorial: predict hemoglobin α-chain structure ab initio with Rosetta, stepping through fragment picking, folding, and scoring."
excerpt: "Module 3: Analyzing the Coronavirus Spike Protein"
sidebar:
 nav: "coronavirus"
header:
  overlay_image: "../assets/images/SARS_spike_proteins.jpg"
  overlay_filter: 0.3
image: "../assets/images/SARS_spike_proteins.jpg"
image_alt: "Illustration of a SARS-CoV-2 viral particle covered in spike proteins."
---

In this software tutorial, we will use the popular *ab initio* modeling software called QUARK. Because of the complexity of *ab initio* algorithms, QUARK limits us to polypeptides with at most 200 amino acids, and so rather than determining the structure of the SARS-CoV-2 spike protein (each monomer has 1281 amino acids), we will work with hemoglobin subunit alpha (PDB entry [1si4](https://www.rcsb.org/structure/1sI4)), which is only 141 amino acids long.

Before beginning, if you have not used QUARK before, then you will need to <a href="https://zhanglab.ccmb.med.umich.edu/QUARK2/registration/" target="_blank">register for a QUARK account</a> to use this software. After registering, you will receive an email containing a temporary password.

**Note:** At the current time, QUARK only accepts registrations from university E-mail accounts. If you do not have such an account, please send an E-mail to  <a href = "mailto: yangzhanglab@umich.edu">yangzhanglab@umich.edu</a> and mention that you are a *Biological Modeling* learner with Phillip Compeau to receive access.
{: .notice--info}

Then, [download the primary sequence](../_pages/coronavirus/files/Human_Hemoglobin_subunit_alpha_Seq.txt) of human hemoglobin subunit alpha. Visit <a href="https://zhanglab.ccmb.med.umich.edu/QUARK2/" target="_blank">QUARK</a> to find the submission page for QUARK, where you should take the following steps as shown in the figure below.

1. Copy and paste the sequence into the first box.
2. Add your email address and password.
3. Click `Run QUARK`.

[![QUARK tutorial interface for ab initio modeling](../assets/images/600px/QuarkTutorial.png){: .align-center loading="lazy"}](../assets/images/QuarkTutorial.png)
{: style="font-size: medium;"}

Even though this is a short protein, it will take at least a few hours to run your submission, depending on server load. When your job has finished, you will receive an email notification and be able to download the results. In the meantime, you may like to join us back in the main text.

**Note:** QUARK will not return a single best answer but rather the top five best-scoring structures that it finds. Continuing the exploration analogy from the text, think of these results as the five lowest points in the search space that QUARK is able to find.
{: .notice--info}

In the main text, we will show a figure of our models and compare them to the known structure of human hemoglobin subunit alpha from the PDB entry <a href="https://www.rcsb.org/structure/1sI4" target="_blank">1si4</a>. You can also <a href="../_pages/coronavirus/files/QUARK_Hemoglobin.tar.bz2" download>download</a> our completed models if you like.

[Return to main text](ab_initio#toward-a-faster-approach-for-protein-structure-prediction){: .btn .btn--warning .btn--large}
{: style="font-size: 100%; text-align: center;"}
