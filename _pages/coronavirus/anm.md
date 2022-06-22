---
permalink: /coronavirus/anm
title: "Anisotropic Network Models"
sidebar:
 nav: "coronavirus"
toc: true
toc_sticky: true
image: "../assets/images/SARS_spike_proteins.jpg"
---

## ANMs account for the direction of protein fluctuations

The generalization of a Gaussian network model, in which we attempt to determine the directions of the forces influencing alpha carbons, is called an **anisotropic network model (ANM)**. Although ANMs include directionality, they typically perform worse than GNMs when benchmarked against experimental data[^Yang]. However, ANMs can be used to create animations depicting the range of motions and fluctuations of the protein, as well as to estimate the specific directions of movement caused by each of a protein's modes.

We will not delve into the mathematical intricacies of ANM calculations, but we will use ANM to create animations visualizing protein fluctuations. For example, click on the animation below to see a video of estimated hemoglobin fluctuations produced from ANM. We can see that the left and right side of the protein are more flexible than the rest of the protein and twist in opposite directions.

[![image-center](../assets/images/600px/hemoglobin_anm_2.gif){: .align-center}](../assets/images/hemoglobin_anm_2.gif)
Collective motions of the slowest mode in human hemoglobin from ANM calculations using DynOmics.
{: style="font-size: medium;"}

After we produce an animation like the one in the figure above, we also should attempt to explain it biologically. Human hemoglobin exists in two states: the tense state (T), in which it is not bound to an oxygen molecule, and the relaxed state (R), in which it is oxygenated. Hemoglobin's mobility shown in the above animation corresponds to its ability to transition between these two states, in which salt-bridges and contacts can shift by up to seven angstroms[^Davis]. This significant molecular flexibility exemplifies why we need to study protein dynamics as well as structure.

We will now apply ANM to the SARS-CoV and SARS-CoV-2 spike proteins. We will also use <a href="http://prody.csb.pitt.edu/nmwiz/" target="_blank">NMWiz</a>, which is short for "normal mode wizard", to perform ANM calculations and create an animation of the SARS-CoV-2 (chimeric) RBD and the SARS-CoV RBD.

[Visit tutorial](tutorial_ANM){: .btn .btn--warning .btn--large}
{: style="font-size: 100%; text-align: center;"}

## ANM analysis of the coronavirus binding domain

The following two animations show the complex of each virus's RBD (purple) bound with ACE2 (green). Important residues from the three sites of conformational differences from the previous lessons are also highlighted.

### SARS-CoV spike protein RBD (PDB: 2ajf)

|SARS-CoV RBD|Purple|
|:-------|:-----|
|Resid 463 to 472 (Loop)|Yellow|
|Resid 442 (Hotspot 31)|Orange|
|Resid 487 (Hotspot 353)|Red|
|--------|-----|
|ACE2|Green|
|Resid 79, 82, 83 (Loop)|Silver|
|Resid 31, 35 (Hotspot 31)|Orange|
|Resid 38, 353 (Hotspot 353)|Red|

<center>
<video width="484" height="500" controls="controls">
  <source src="../assets/videos/2ajf_B&F.mp4" type="video/mp4">
</video>
</center>

### SARS-CoV-2 spike protein chimeric RBD (PDB: 6vw1)

|SARS-CoV-2 (Chimeric) RBD|Purple|
|:------------------------|:-----|
|Resid 476 to 486 (Loop)|Yellow|
|Resid 455 (Hotspot 31)|Blue|
|Resid 493 (Hotspot 31)|Orange|
|Resid 501 (Hotspot 353)|Red|
|--------------------------|-----|
|ACE2|Green|
|Resid 79, 82, 83 (Loop)|Silver|
|Resid 31, 35 (Hotspot 31)|Orange|
|Resid 38, 353 (Hotspot 353)|Red|

<center>
<video width="496" height="472" controls="controls">
  <source src="../assets/videos/6vw1_B&F.mp4" type="video/mp4">
</video>
</center>

Recall from the [previous lesson](NAMD#differences-in-interaction-energy-with-ace2-between-sars-and-sars-cov-2) that the greatest contribution of negative energy to the RBD/ACE2 complex in SARS-CoV-2 was the region called "hotspot 31". This region is highlighted in blue and orange in the above figures. If you look very closely, as the protein swings in to bind with ACE2, the blue and orange regions appear to line up just a bit more naturally in the SARS-CoV-2 animation than in the SARS-CoV animation. That is, the improved binding that we hypothesized for a static structure appears to be confirmed by dynamics simulations. This animation provides one more piece of evidence that SARS-CoV-2 is more effective at binding to the ACE2 enzyme.

## DynOmics Integrates GNM and ANM Analysis

Although we have separated our discussion of GNM and ANM, the <a href="http://enm.pitt.edu/index.php" target="_blank">DynOmics 1.0</a> server is an effort to integrate these approaches on a user-friendly platform. If you are interested, the following tutorial shows how to use DynOmics to replicate some of our above analysis.

[Visit tutorial](tutorial_DynOmics){: .btn .btn--warning .btn--large}
{: style="font-size: 100%; text-align: center;"}

[Next lesson](conclusion_part_2){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

[^Dwek]: Dwek, R.A. Glycobiology: Toward Understanding the Function of Sugars. Chem. Rev. 96(2),  683-720 (1996). https://doi.org/10.1021/cr940283b

[^Varki]: Varki A, Lowe JB. Biological Roles of Glycans. In: Varki A, Cummings RD, Esko JD, et al., editors. Essentials of Glycobiology. 2nd edition. Cold Spring Harbor (NY): Cold Spring Harbor Laboratory Press; 2009. Chapter 6. https://www.ncbi.nlm.nih.gov/books/NBK1897/

[^Raman]: Raman, R., Tharakaraman, K., Sasisekharan, V., & Sasisekharan, R. 2016. Glycan-protein interactions in viral pathogenesis. Current opinion in structural biology, 40, 153–162. https://doi.org/10.1016/j.sbi.2016.10.003

[^Grant]: Grant, O. C., Montgomery, D., Ito, K., & Woods, R. J. 2020. Analysis of the SARS-CoV-2 spike protein glycan shield: implications for immune recognition. bioRxiv. https://doi.org/10.1101/2020.04.07.030445

[^Casalino]: Casalino, L., Gaieb, Z., Dommer, A. C., Harbison, A. M., Fogarty, C. A., Barros, E. P., Taylor, B. C., Fadda, E., & Amaro, R. E. 2020. Shielding and Beyond: The Roles of Glycans in SARS-CoV-2 Spike Protein. bioRxiv : the preprint server for biology, 2020.06.11.146522. https://doi.org/10.1101/2020.06.11.146522

[^Watanabe]: Watanabe, Y., Allen, J., Wrapp, D., McLellan, J., Crispin, M. Site-specific glycan analysis of the SARS-CoV-2 spike. Science 369, 330-333. https://doi.org/10.1126/science.abb9983

[^Skjaerven]: Skjaerven, L., Hollup, S., Reuter, N. 2009. Journal of Molecular Structure: THEOCHEM 898, 42-48. https://doi.org/10.1016/j.theochem.2008.09.024

[^Yang]: Yang, L., Song, G., Jernigan, R. 2009. Protein elastic network models and the ranges of cooperativity. PNAS 106(30), 12347-12352. https://doi.org/10.1073/pnas.0902159106

[^cdc]: New COVID-19 Variants. 2021. Retrieved January 27, 2021, from https://www.cdc.gov/coronavirus/2019-ncov/transmission/variant.html

[^Yang]: Yang, L., Song, G., Jernigan, R. 2009. Protein elastic network models and the ranges of cooperativity. PNAS 106(30), 12347-12352. https://doi.org/10.1073/pnas.0902159106

[^Yang2]: Yang, L., Song, G., & Jernigan, R. L. 2009. Comparisons of experimental and computed protein anisotropic temperature factors. Proteins, 76(1), 164–175. https://doi.org/10.1002/prot.22328

[^Garrett]: Garrett, R. H., Grisham, C. M., 2010. *Biochemistry*, 4th ed. Brooks/Cole, Cengage Learning.

[^Davis]: Davis, M., Tobi, D. 2014. Multiple Gaussian network modes alignments reveals dynamically variable regions: The hemoglobin case. Proteins: Structure, Function, and Bioinformatics, 82(9), 2097-2105. https://doi-org.cmu.idm.oclc.org/10.1002/prot.24565

[^Soh]: Soh, W. T., Liu, Y., Nakayama, E. E., Ono, C., Torii, S., Nakagami, H., Matsuura, Y., Shioda, T., Arase, H. The N-terminal domain of spike glycoprotein mediates SARS-CoV-2 infection by associating with L-SIGN and DC-SIGN.

[^Grant]: Grant, O. C., Montgomery, D., Ito, K., & Woods, R. J. Analysis of the SARS-CoV-2 spike protein glycan shield: implications for immune recognition. bioRxiv : the preprint server for biology, 2020.04.07.030445. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7217288/
