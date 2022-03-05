---
permalink: /coronavirus/structure_intro
title: Protein Structure Prediction is Difficult
sidebar:
 nav: "coronavirus"
toc: true
toc_sticky: true
image: "../assets/images/SARS_spike_proteins.jpg"
---

## Determining protein structure is fundamental to understanding protein function

In the [introduction](home), we showed the polypeptide chain for the SARS-CoV-2 spike protein. After this polypeptide chain is formed, it will "fold" into a three-dimensional shape and attach to the exterior of the virus. The folding process occurs spontaneously and without any outside influence, and the same polypeptide chain will almost always fold into the same 3-D structure in a manner of microseconds. This means that nature is applying some "magic algorithm" that produces the folded structure of a protein from its sequence of amino acids. But how does this algorithm work?

Predicting the folded structure of a polypeptide is called the **structure prediction problem**, and this problem is simple to state but deceptively difficult to solve. In fact, it has been an active area of biological research for several decades.

Why do we care about protein structure? Knowing a protein's structure is essential to determining its function and how it interacts with other proteins or molecules in its environment. Determining protein function is still an active area of research: there are still a few thousand proteins in humans alone whose function is unknown.

Furthermore,  a huge amount of biological research is devoted to understanding protein interactions. For example, a disease may be caused by a faulty protein, in which case researchers want to find a drug that binds to the protein and causes some change of interest in that protein, such as inhibiting its behavior.

For a more visual example of how protein structure affects protein function, consider the following video of a ribosome (which is a complex of RNA and proteins) translating a messenger RNA into protein. For translation to succeed, the ribosome needs to have a very precise shape, including a "slot" into which the messenger RNA strand can fit.

{% include video id="TfYf_rPWUdY" provider="youtube" %}

As we have seen throughout this course, molecular interactions are ruled by probability. Any two molecules may *interact*, but their rate of *dissociation* will be much higher if they do not fit together well. Furthermore, two colliding molecules need to have the correct orientation in order to produce an interaction

Because structure prediction is such a fundamental problem, researchers wish to catalog the varied shapes of different proteins. This variety is evident in the figure below, which shows the "proteins of the month" in 2020 named by the **Protein Data Bank** (**PDB**). Yet the question remains: how do we know these protein structures?

[![image-center](../assets/images/600px/different_protein_shapes_2020.jpg){: .align-center}](../assets/images/different_protein_shapes_2020.jpg)
Each "molecule of the month" in 2020 named by the PDB. These proteins have widely varying shapes and accomplish a wide variety of cellular tasks. Note that the SARS-CoV-2 spike protein was the molecule of the month in June. Image courtesy: David Goodsell.
{: style="font-size: medium;"}

## Laboratory methods for determining protein structure

We will introduce two popular and sophisticated laboratory methods for accurately determining protein structure. We appeal to high-quality videos explaining them if you are interested.

In **X-ray crystallography**, researchers crystallize many copies of a protein and then shine an intense beam of X-rays at the crystal. The light hitting the protein is diffracted, creating patterns from which the position of every atom in the protein can be inferred. If you are interested in learning more about X-ray crystallography, check out the following excellent two-part video series from The Royal Institution.

{% include video id="gLsC4wlrR2A" provider="youtube" %}

{% include video id="WJKvDUo3KRk" provider="youtube" %}

X-ray crystallography is over a century old and has been the *de facto* approach for protein structure determination for decades. Yet a newer method is now rapidly replacing X-ray crystallography.

In **cryo-electron microscopy** (**cryo-EM**), researchers preserve thousands of copies of a protein in non-crystalline ice and then examine these copies with an electron microscope. Check out the following YouTube video from the University of California San Francisco for a detailed discussion of cryo-EM.

{% include video id="Qq8DO-4BnIY" provider="youtube" %}

Unfortunately, laboratory approaches for structure determination are expensive and cannot be used on all proteins. X-ray crystallography costs upward of $2,000 per protein; furthermore, crystallizing a protein is a challenging task, and each copy of the protein must line up in the same way, which does not work for very flexible proteins. As for cryo-EM, an electron microscope costs upwards of millions of dollars. And to study bacterial proteins, we need to culture the bacteria in the lab, but microbiologists have estimated that less than 2% of bacteria can currently be cultured.[^Wade]

Protein structures that have been determined experimentally are typically stored in the PDB. This database contains over 160,000 proteins, most of which have been added this century. This number may seem large, but a recent study estimated that humans have between 620,000 and 6.13 million protein isoforms (i.e., differently-shaped protein variants) [^Ponomarenko]. If we hope to catalog the proteins of all living things, then our work on structure determination is just beginning.

## What makes protein structure prediction so difficult?

Predicting protein structure from amino acid sequence is very challenging. On the one hand, small perturbations in the sequence of a protein can drastically change the protein's shape and even render it useless. On the other, different amino acids can have similar chemical properties, and so some mutations will hardly change the shape of the protein. As a result, two very different amino acid sequences can fold into proteins with similar structure and comparable function.

For example, the following figure compares the sequences and structures of hemoglobin subunit alpha taken from three species: humans (PDB: [1si4](https://www.rcsb.org/structure/1SI4)), shortfin mako sharks (PDB: [3mkb](https://www.rcsb.org/structure/3mkb)), and emus (PDB: [3wtg](https://www.rcsb.org/structure/3wtg)). Hemoglobin is the oxygen-transport protein in the blood, consisting of two alpha "subunit" proteins and two beta subunit proteins that combine into a protein complex; because hemoglobin is well-studied and much shorter than the SARS-CoV-2 spike protein, we will use it as an example throughout this module. The alpha subunits for the three species are markedly different in terms of amino acid sequence, and yet their 3-D structures are essentially identical.

[![image-center](../assets/images/600px/SequenceStructureExample.png){: .align-center}](../assets/images/SequenceStructureExample.png)
(Top) An amino acid sequence comparison of the first 40 (out of 140) amino acids of hemoglobin subunit alpha for three species: human, shortfin mako shark, and emu. A column is colored blue if all three species have the same amino acid, white if two species have the same amino acid, and red if all amino acids are different. Sequence identity calculates the number of positions in two amino acid sequences that share the same amino acid. (Bottom) Side by side comparisons of the 3-D structures of the three proteins. The final figure on the right superimposes the first three structures to highlight their similarities.
{: style="font-size: medium;"}

Another reason why protein structure prediction is so difficult is because a polypeptide is very flexible, with the ability to rotate in multiple ways at each amino acid, which means that the polypeptide is able to fold into a staggering number of different shapes.  A good analogy for polypeptide flexibility is the "Rubik's Twist" puzzle, shown in the video below, which consists of a linear chain of flexible blocks that can form a huge number of different shapes.

{% include video id="auNLb75QRfg" provider="youtube" %}

The flexibility of a polypeptide owes to the molecular structure of amino acids. As shown in the figure below, an amino acid comprises four parts. In the center, a carbon atom (called the **alpha carbon**) is connected to four different molecules: a hydrogen atom (H), a **carboxyl group** (–COOH), an **amino group** (-NH<sub>2</sub>), and a **side chain** (denoted "R" and often called an **R group**). The side chain is a molecule that differs between different amino acids and ranges in mass from a single hydrogen atom (glycine) up to -C<sub>8</sub>H<sub>7</sub>N (tryptophan).

[![image-center](../assets/images/600px/AminoAcid.png){: .align-center width="300px"}](../assets/images/AminoAcid.png)
An amino acid consists of a central, alpha carbon attached to a hydrogen atom, a side group, a carboxyl group, and an amino group.
{: style="font-size: medium;"}

To form a polypeptide chain, consecutive amino acids are linked together during a condensation reaction in which the amino group of one amino acid is joined to the carboxyl group of another, while a water molecule (H<sub>2</sub>O) is expelled (see figure below).

[![image-center](../assets/images/600px/dipeptide_reaction.png){: .align-center}](../assets/images/dipeptide_reaction.png)
A condensation reaction joins two amino acids into a "dipeptide" by joining the amino group of one amino acid to the carboxyl group of the other. A water molecule is expelled, which is why the reaction is a condensation reaction. Source: [https://bit.ly/3q0Ph8V](https://bit.ly/3q0Ph8V).
{: style="font-size: medium;"}

The resulting bond that is produced between the carbon atom of one amino acid's carboxyl group and the nitrogen atom of the next amino acid's amino group, called a **peptide bond**, is very strong. The peptide has very little rotation around this bond, which is almost always locked at 180°. As peptide bonds are formed between adjacent amino acids, the polypeptide chain takes shape, as shown in the figure below.

[![image-center](../assets/images/600px/Backbone.png){: .align-center}](../assets/images/Backbone.png)
A protein backbone formed of three amino acids.
{: style="font-size: medium;"}

However, the bonds *within* an amino acid, joining the alpha carbon to its carboxyl group and amino group, are not as rigid, and the polypeptide is free to rotate around these two bonds. This rotation produces two angles of interest, called the **phi angle (φ)** and **psi angle (ψ)** (see figure below), which are formed at the alpha carbon's connections to its amino group and carboxyl group, respectively.

[![image-center](../assets/images/600px/torsion_angles.png){: .align-center width="400px"}](../assets/images/torsion_angles.png)
A polypeptide chain of multiple amino acids with the torsion angles φ and ψ indicated. The angle ω indicates the angle of the peptide bond, which is typically 180°. Image courtesy: Adam Rędzikowski.
{: style="font-size: medium;"}

Below is an excellent video from Jacob Elmer illustrating how changing φ and ψ at a single amino acid can drastically reorient a protein's shape.

{% include video id="1usemtIYe_s" provider="youtube" %}

A polypeptide with *n* amino acids will have *n* - 1 peptide bonds, meaning that its shape is influenced by *n* - 1 phi angles and *n* - 1 psi angles. If each bond has *k* stable conformations, then there are *k*<sup>2<em>n</em>-2</sup> total possible conformations of the polypeptide. For example, if *k* is equal to 3 and *n* is equal to only 100 (representing a short polypeptide), then the number of potential protein structures is more than the number of atoms in the universe! (The concept of combinatorial explosion, introduced in module 2, appears again.) The ability for the protein to reliably find a single conformation using the magic algorithm despite such an enormous number of potential shapes is called **Levinthal's paradox**.[^Levinthal]

Although protein structure prediction is difficult, it is not impossible; nature's algorithm is not, after all, magic. Furthermore, researchers have spent decades cataloging the genomes of thousands of species. As a result, biologists know the *sequence* of amino acids for many proteins whose structures have not been validated experimentally. In our case, although the SARS-CoV-2 genome was sequenced in January 2020, the structure of its spike protein was unknown at that time.  In the next lesson, we will place ourselves in the shoes of early SARS-CoV-2 researchers working before the structure of the virus's spike protein had been experimentally determined to see if we can predict its structure and give biologists a head start on fighting the pandemic.

[Next lesson](ab_initio){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

[^Wade]: Wade W. 2002. Unculturable bacteria--the uncharacterized organisms that cause oral infections. Journal of the Royal Society of Medicine, 95(2), 81–83. https://doi.org/10.1258/jrsm.95.2.81

[^Fischer]: Fischer, E. 1894. Einfluss der Configuration auf die Wirkung der Enzyme. Ber. Dtsch. Chem. Ges., 27: 2985-2993. https://doi.org/10.1002/cber.18940270364

[^Koshland]: Koshland D.E. 1958. Application of a Theory of Enzyme Specificity to Protein Synthesis. Proc Natl Acad Sci U S A. 44(2):98-104. doi:10.1073/pnas.44.2.98

[^Levinthal]: Levinthal, C. 1969. How to Fold Graciously. Mossbaur Spectroscopy in Biological Systems, Proceedings of a meeting held at Allerton House, Monticello, Illinois. eds. Debrunner, P., Tsibris, J.C.M., Munck, E. University of Illinois Press Pages 22-24.

[^machinery]: Goodsell, David (2009), *The Machinery of Life*. Copernicus Books.

[^HPP]: https://hupo.org/human-proteome-project

[^HPP2016]: Omenn, G. S., Lane, L., Lundberg, E. K., Beavis, R. C., Overall, C. M., & Deutsch, E. W. 2016. Metrics for the Human Proteome Project 2016: Progress on Identifying and Characterizing the Human Proteome, Including Post-Translational Modifications. Journal of proteome research, 15(11), 3951–3960. https://doi.org/10.1021/acs.jproteome.6b00511

[^Munnink]: Oude Munnink, B.B., Nieuwenhuijse, D.F., Stein, M. et al. 2020. Rapid SARS-CoV-2 whole-genome sequencing and analysis for informed public health decision-making in the Netherlands. Nat Med 26, 1405–1410. https://doi.org/10.1038/s41591-020-0997-y

[^Islam]: Islam, M.R., Hoque, M.N., Rahman, M.S. et al. 2020. Genome-wide analysis of SARS-CoV-2 virus strains circulating worldwide implicates heterogeneity. Sci Rep 10, 14004. https://doi.org/10.1038/s41598-020-70812-6

[^Ponomarenko]:	Ponomarenko, E. A., Poverennaya, E. V., Ilgisonis, E. V., Pyatnitskiy, M. A., Kopylov, A. T., Zgoda, V. G., Lisitsa, A. V., & Archakov, A. I. 2016. The Size of the Human Proteome: The Width and Depth. International journal of analytical chemistry, 2016, 7436849. https://doi.org/10.1155/2016/7436849
