---
permalink: /coronavirus/multiseq
title: "Finding Local Differences in Protein Structures with Qres"
sidebar:
 nav: "coronavirus"
toc: true
toc_sticky: true
image: "../assets/images/SARS_spike_proteins.jpg"
---

In part 1 of this module, we used a variety of existing software resources to predict the structure of the SARS-CoV-2 spike protein from its amino acid sequence. We then discussed how to compare our predicted structures against the experimentally confirmed structure of the protein.

Now begins part 2, in which we examine how the structure of the SARS-CoV-2 spike protein compares against the SARS-CoV spike protein. In keeping with the biological maxim that the *structure* of a protein informs the *function* of that protein, can we find any clues lurking in the spike proteins' structure that would indicate why the two viruses had different fates?

## Focusing on a variable region of interest in the spike protein

In part 1, we saw that the spike protein is much more variable than other regions of the viral genomes. We even see variable and conserved regions within the spike protein, as the following figure (reproduced from the section on [homology modeling](homology)) indicates.

[![image-center](../assets/images/600px/spike_protein_similarity.png){: .align-center}](../assets/images/spike_protein_similarity.png)
Variable and conserved regions in the SARS-CoV and SARS-CoV-2 spike proteins. The S1 domain tends to be more variable, whereas the S2 domain is more conserved.
{: style="font-size: medium;"}

The most variable region between the two viruses in the spike protein is the **receptor binding motif (RBM)**, part of the receptor binding domain (RBD) whose structure we predicted using GalaxyWEB in the [homology modeling tutorial](tutorial_homology). The RBM is the component of the RBD that mediates contact with ACE2, as the following simplified animation of the process illustrates.

{% include video id="e2Qi-hAXdJo" provider="youtube" %}

The fact that the region binding to the target human enzyme has mutated so much makes it a fascinating region of study. Do the mutations that SARS-CoV-2 has accumulated somehow make it easier for the virus to infect human cells?

As we hone in on the RBM, the figure below shows an alignment of the 70 amino acid long RBM region from SARS-CoV and SARS-CoV-2.

[![image-center](../assets/images/600px/RBM_alignment.png){: .align-center}](../assets/images/RBM_alignment.png)
An alignment of the RBM of the human SARS-CoV virus (first row) and the SARS-CoV-2 virus (second row). Amino acids that are highlighted in green represents matches between the two sequence. Beneath each column is the conservation between the two sequences, where full conservation indicates a match and partial conservation indicates a mismatch.
{: style="font-size: medium;"}

We know from our work in structure prediction that just because the sequence of a protein has been greatly mutated does not mean that the structure of that protein has changed much. Therefore, in this lesson, we will start a structural comparison of the SARS-CoV and SARS-CoV-2 spike proteins. All of this analysis will be performed using the software resources ProDy and VMD.

## Using bound spike-ACE2 enzymes

In addition to verifying the structure of the spike protein in both SARS-CoV and SARS-CoV-2, researchers also determined the structure of the RBD complexed with ACE2 in both SARS-CoV (PDB entry: <a href="https://www.rcsb.org/structure/2AJF" target="_blank">2ajf</a>) and SARS-CoV-2 (PDB entry: <a href="https://www.rcsb.org/structure/6vw1" target="_blank">6vw1</a>).

**Note:** The experimentally verified SARS-CoV-2 structure is a *chimeric* protein formed of the SARS-CoV RBD in which the RBM has the sequence from SARS-CoV-2 [^Shang]. A chimeric RBD was used for complex technical reasons to ensure that the crystallization process during X-ray crystallography could be borrowed from that used for SARS-CoV.
{: .notice--info}

Because we know the structures of the bound complexes, we can produce 3-D visualizations of the two different complexes and look for structural differences involving the RBM. We will use VMD to produce this visualization, rotating the structures around to examine potential differences. However, we should be wary of only trusting our eyes to guide us; can we use a computational approach to tell us where to look for structural differences between the two RBMs?

## A first attempt at identifying local dissimilarities between protein structures

To assess the accuracy of a predicted structure, we introduced a metric called root mean square deviation (RMSD) for quantifying the difference between two protein structures. RMSD offered an excellent method for a *global* comparison (i.e., a comparison across all structures), but we are interested in the *local* regions where the SARS-CoV and SARS-CoV-2 complexes differ. To this end, we will need an approach that considers individual amino acids in similar protein structures.

**STOP:** How could we compare individual amino acid differences of two protein structures?
{: .notice--primary}

Recall the following definition of RMSD for two protein structures *s* and *t*, in which each structure is represented by the positions of its *n* alpha carbons (<em>s</em><sub>1</sub>, ..., <em>s</em><sub><em>n</em></sub>) and (<em>t</em><sub>1</sub>, ..., <em>t</em><sub><em>n</em></sub>).

$$\text{RMSD}(s, t) = \sqrt{\dfrac{1}{n} \cdot (d(s_1, t_1)^2 + d(s_2, t_2)^2 + \cdots + d(s_n, t_n)^2)} $$

If two similar protein structures differ in a few locations, then the corresponding alpha carbon distances *d*(<em>s</em><sub><em>i</em></sub>, <em>t</em><sub><em>i</em></sub>) will likely be higher at these locations. However, we will introduce a more sophisticated approach for
comparing the local structure of <em>s</em><sub><em>i</em></sub> against <em>t</em><sub><em>i</em></sub>. First, however, we will discuss an alternative to RMSD for computing global structure.

## Contact maps and Qres

One of the weaknesses of RMSD that we pointed out in part 1 of this module is that a change to a single bond angle at the *i*-th position may cause *d*(<em>s</em><sub><em>j</em></sub>, <em>t</em><sub><em>j</em></sub>) to be nonzero when *j* > *i*, even though the structure of the protein downstream of this bond angle has not changed. For example, when we discussed the [Kabsch algorithm](accuracy#applying-the-kabsch-algorithm-to-protein-structure-comparison), we showed the figure below of two protein structures that are identical except for a single bond angle. All of the alpha carbon distances *d*(<em>s</em><sub><em>i</em></sub>, <em>t</em><sub><em>i</em></sub>) for *i* at least equal to 4 will be thrown off by this changed angle.

[![image-center](../assets/images/600px/single_bond_angle.png){: .align-center}](../assets/images/single_bond_angle.png)
Two toy protein structures in which the bond angle between the third and fourth alpha carbon has been changed. This change does not affect the distance between the *i*-th and *j*-th alpha carbons when *i* and *j* are both at least equal to 4.
{: style="font-size: medium;"}

However, note that when *i* and *j* are both at least equal to 4, the distance *d*(<em>s</em><sub><em>i</em></sub>, <em>s</em><sub><em>j</em></sub>) between the *i*-th and *j*-th alpha carbons in *S* will still be similar to the distance *d*(<em>t</em><sub><em>i</em></sub>, <em>t</em><sub><em>j</em></sub>) between the same alpha carbons in *T*. This observation leads us to a more robust approach for measuring differences in two protein structures, which compares *all* pairwise distances *d*(<em>s</em><sub><em>i</em></sub>, <em>s</em><sub><em>j</em></sub>) in one protein structure against the corresponding distances *d*(<em>t</em><sub><em>i</em></sub>, <em>t</em><sub><em>j</em></sub>) in the other structure.

To help us visualize all these pairwise distances, we will introduce the **contact map** of a protein structure, which is a binary matrix indicating whether two alpha carbons are near each other. After setting a threshold distance, for a given structure *s*, we set *M*(*i*, *j*) = 1 if the distance *d*(<em>s</em><sub><em>i</em></sub>, <em>s</em><sub><em>j</em></sub>) is less than the threshold, and *M*(*i*, *j*) = 0 if *d*(<em>s</em><sub><em>i</em></sub>, <em>s</em><sub><em>j</em></sub>) is greater than or equal to the threshold.

The following figure shows the contact maps for the SARS-CoV-2 and SARS-CoV spike proteins (both full proteins and single chains) with a threshold distance of twenty angstroms. In this map, we color contact map values black if they are equal to 1 (close amino acid pairs) and white if they are equal to 0 (distant amino acid pairs).

We note two things in the contact maps below. First, many black values cluster around the main diagonal of the matrix, since amino acids that are nearby in the protein sequence will remain near each other in the 3-D structure. Second, the contact maps for the two proteins are very similar, reinforcing that the two proteins have similar structures.

**Note:** Interested in learning how to make contact maps? We will use ProDy to do so in a later section.
{: .notice--info}

[![image-center](../assets/images/600px/Contact.png){: .align-center}](../assets/images/Contact.png)
The contact maps of the SARS-CoV-2 spike protein (top left), SARS-CoV spike protein (top right), single chain of the SARS-CoV-2 spike protein (bottom left), and single chain of the SARS-CoV spike protein (bottom right). If the distance between the *i*-th and *j*-th amino acids in a protein structure is 20.0 angstroms or less, then the (*i*, *j*)-th cell of the figure is colored black. The SARS-CoV-2 and SARS spike proteins have very similar contact maps, indicating similar global structures.
{: style="font-size: medium;"}

**STOP:** How do you think the contact map will change as we increase or decrease the threshold distance?
{: .notice--primary}

We obtain some insight into how two proteins differ structurally at the *i*-th amino acid if we look at all of the *i*-th row's values; that is, if we compare all of the *d*(<em>s</em><sub><em>i</em></sub>, <em>s</em><sub><em>j</em></sub>) values to all of the *d*(<em>t</em><sub><em>i</em></sub>, <em>t</em><sub><em>j</em></sub>) values.

We will use pairwise distances between alpha carbons to determine how different two proteins are at the *i*-th alpha carbon, using a metric called **Q per residue (Qres)**.  The formal definition of Qres for two structures *s* and *t* having *N* residues is[^Qres]

$$Q_{res}^{(i)} = \dfrac{1}{N-k} \sum^{residues}_{j\neq i-1,i,i+1} \textrm{exp}[-\dfrac{[d(s_i,s_j)-d(t_i,t_j)]^2}{2\sigma^2_{i,j}}]\, .$$

In this equation, *exp(x)* means *e*<sup><em>x</em></sup>. This equation also includes the following parameters.

* *k* is equal to 2 at either the start or the end of the protein (i.e., *i* is equal to 1 or *N*), and *k* is equal to 3 otherwise.
* The variance term $$\sigma_{ij}^2$$ is equal to $$\left\lvert{i-j}\right\rvert ^{0.15}$$, which corresponds to the sequence separation between the *i*-th and *j*-th alpha carbons.

**Note:** The above definition assumes that the two proteins have the same length or have been pre-processed by removing amino acids that only occur in one protein. Generalizations of Qres for proteins of non-equal length exist that first align proteins and retain only those amino acids for structural comparison that are shared by the two proteins.
{: .notice--info}

If two proteins are very similar at the *i*-th alpha carbon, then for every *j*, *d*(<em>s</em><sub><em>i</em></sub>, <em>s</em><sub><em>j</em></sub>) - *d*(<em>t</em><sub><em>i</em></sub>, <em>t</em><sub><em>j</em></sub>) will be close to zero, making term inside the summation in the Qres equation will be close to 1. The sum will be equal to approximately *N* - *k*, and so Qres will be close to 1. As two proteins become more different at the *i*-th alpha carbon, then the term inside the summation will head toward zero, and so will the Qres value as well.

As a result, we think of Qres as a similarity metric ranging between 0 and 1, with low scores representing low similarity between two proteins at the *i*-th position, and higher scores representing high similarity at this position.

We now will compute Qres for the SARS-CoV and SARS-CoV-2 spike proteins using the VMD plugin *<a href="https://www.ks.uiuc.edu/Research/vmd/plugins/multiseq/" target="_blank">Multiseq</a>*, a bioinformatics analysis environment. After determining Qres, we will visualize the individual locations where the two RBD regions differ.

[Visit tutorial](tutorial_multiseq){: .btn .btn--warning .btn--large}
{: style="font-size: 100%; text-align: center;"}

## Local comparison of spike proteins leads us to a region of interest

By computing Qres at every position of the two coronavirus RBD regions, we can form a "structural" alignment of the two regions, as shown in the figure below. Blue columns correspond to amino acids with high Qres (meaning high structural similarity), and red columns correspond to amino acids with low Qres (meaning low structural similarity).

If we zoom in on the region around position 150 of the alignment, we find a 13-column region of the alignment within the RBD region for which Qres values are significantly lower than they are elsewhere. This region corresponds to positions 476 to 485 in the SARS-CoV-2 spike protein and is shown in the bottom of the figure below.

[![image-center](../assets/images/600px/QresResult.png){: .align-center}](../assets/images/QresResult.png)

[![image-center](../assets/images/600px/QresResult_cropped.png){: .align-center}](../assets/images/QresResult_cropped.png)
(Top) A snapshot of the sequence alignment between the SARS-CoV RBD (first row) and the SARS-CoV-2 chimeric RBD[^Shang] (second row). Columns are colored along a spectrum from blue (high Qres) to red (low Qres), with positions that correspond to an inserted or deleted amino acid colored red. (Bottom) A region of the alignment with low Qres, which corresponds to amino acids at positions 476 to 485 in the SARS-CoV-2 spike protein.
{: style="font-size: medium;"}

We also can create a 3-D visualization of the structures. The figure below shows the superimposed structures of both the SARS and SARS-CoV-2 RBD bound with ACE2, shown in green. The same color-coding of columns of the multiple alignment in the figure above is used to highlight differences between the SARS-CoV and SARS-CoV-2 structures. The low-Qres region of the RBM alignment that we highlighted in the above figure is outlined in the figure below.

[![image-center](../assets/images/600px/QresVMD.png){: .align-center}](../assets/images/QresVMD.png)
A visualization showing the superposed structures of SARS-CoV-2 chimeric RBD [^Shang] and SARS RBD in blue and red based on Qres. Blue indicates regions of high Qres, and red indicates regions of low Qres. ACE2 is shown in green. The highlighted region corresponds to the part of the RBM with a potential structural difference. Because it is adjacent to ACE2, it is likely that the structural difference here will affect ACE2 interactions.
{: style="font-size: medium;"}

**Note:** Although the rest of the proteins are similar, there are other parts of the RBD at the top of the protein that show dissimilarities in the two proteins, which may be attributable to an experimental artifact. The authors of the work in which the comparison was published have pointed out that the highlighted region is unlikely to be an artifact of the experimentation because it is "buried at the RBD–ACE2 interface and did not affect crystallization".
{: .notice--info}

Finding this highlighted region in the RBM where the structures of the SARS-CoV and SARS-CoV-2 spike proteins differ is an exciting development. We will next explore this region of the protein structure to determine whether the mutations acquired by SARS-CoV-2 may have influenced the binding affinity of the virus spike protein with the human ACE2 enzyme.

[Next lesson](structural_differences){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

[^Hamming]: Hamming, I., Timens, W., Bulthuis, M. L., Lely, A. T., Navis, G., & van Goor, H. 2004. Tissue distribution of ACE2 protein, the functional receptor for SARS coronavirus. A first step in understanding SARS pathogenesis. The Journal of pathology, 203(2), 631–637. https://doi.org/10.1002/path.1570

[^Samavati]: Samavati, L., & Uhal, B. D. 2020. ACE2, Much More Than Just a Receptor for SARS-COV-2. Frontiers in cellular and infection microbiology, 10, 317. https://doi.org/10.3389/fcimb.2020.00317

[^Qres]: Li, L., Sethi, A., Luthey-Schulten, Z. Evolution of Translation Class I Aminoacyl-tRNA Synthetase:tRNA complexes. University of Illinois at Urbana-Champaign, Luthey-Schulten Group, NIH Resource for Macromolecular Modeling and Bioinformatics, Computational Biophysics Workshop. https://www.ks.uiuc.edu/Training/Tutorials/TCBG-copy/evolution/evolution_tutorial.pdf

[^Shang]: Shang, J., Ye, G., Shi, K., Wan, Y., Luo, C., Aijara, H., Geng, Q., Auerbach, A., Li, F. 2020. Structural basis of receptor recognition by SARS-CoV-2. Nature 581, 221–224. https://doi.org/10.1038/s41586-020-2179-y
