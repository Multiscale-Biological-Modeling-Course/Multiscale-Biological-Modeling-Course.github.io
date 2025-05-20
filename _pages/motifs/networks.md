---
permalink: /motifs/networks
title: "Transcription Factor Networks"
description: "Explore the E. coli transcription-factor network: small subgraph patterns that reveal underlying design principles."
excerpt: "Module 1: Finding Motifs in Transcription Factor Networks"
sidebar:
 nav: "motifs"
toc: true
toc_sticky: true
header:
  overlay_image: "../assets/images/repressilator_chart.png"
  overlay_filter: 0.3
image: "../assets/images/repressilator_chart.png"
image_alt: "Chart of the concentrations of three particles involved in the repressilator, a synthetic biological oscillating system."
---

## The transcription factor network of *E. coli*

Once we know which genes each transcription factor regulates, we can consolidate this information into a **transcription factor network**. The nodes in the network represent an organism's proteins, and an edge connects *X* to *Y* if *X* is a transcription factor that regulates the expression of protein *Y*. These edges are one-way connections; any node can have an edge leading into it, but only a transcription factor can have an edge leaving it.

The figure below shows a portion of the transcription factor network for *Escherichia coli*, the workhorse model organism of bacterial study. The complete network, which is the sum of over two decades of biological research, consists of thousands of genes and around 300 transcription factors[^tfNumber]. Because of the size of this network, it forms what computational biologists affectionally call a "hairball", or a network with so many connections that it is functionally impossible to analyze visually. For this reason, we will need to use computational approaches to study this network.

Note that the edges in the *E. coli* transcription factor network below have different colors. An edge connecting *X* to *Y* is colored blue if *X* activates *Y*, and it is colored orange if *X* represses *Y*. (Alternatively, we could label the edges with a "+" or "-".)

[![E. coli transcription factor network in blue and orange](../assets/images/600px/e_coli_tf_network_blue_orange.png){: .align-center loading="lazy"}](../assets/images/e_coli_tf_network_blue_orange.png)
A subset of the *E. coli* transcription factor network[^eColiNetwork] (click to enlarge). An edge from *X* to *Y* denotes that *X* is a transcription factor that regulates *Y*. Edges corresponding to activation are colored blue, and edges corresponding to repression are colored orange.
{: style="font-size: medium;"}

**STOP:** Select the expanded view of the transcription factor network in the figure above. Do you notice anything interesting about this network?
{: .notice--primary}

## Loops in the transcription factor network

You may have noticed that the *E. coli* transcription factor network has surprisingly many **loops**, or edges that connect a node to itself. We will pause to consider the implications of a loop in a transcription factor network — what does it mean for a transcription factor to regulate itself?

A transcription factor is a protein, which means that because of the central dogma, the transcription factor is produced as the result of transcription and translation of a gene appearing in an organism's DNA. In **autoregulation**, illustrated in the figure below, the transcription factor protein then binds to the DNA in the region preceding the gene that encodes the very *same* transcription factor. This type of *feedback* is a beautiful and surprising feature of a simple biological system.

[![Example of autoregulation in gene networks](../assets/images/600px/autoregulation_example.png){: .align-center loading="lazy"}](../assets/images/autoregulation_example.png)
A simplified illustration of autoregulation, in which a gene is transcribed into messenger RNA (mRNA) and then translated into a transcription factor protein, and then this transcription factor regulates the same gene, producing a feedback loop. "Protein" labels the transcription factor binding factor protein, which binds to the DNA encoding this transcription factor, labeled by "Gene".
{: style="font-size: medium;"}

Transcription factor autoregulation leads us to ask two questions. First, how can we justify that a transcription factor network has "surprisingly many" loops? And second, if autoregulation is so common, then why would a transcription factor have evolved to regulate its own transcription? We will address these questions in each of the next two lessons.

[Next lesson](autoregulation){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

[^scNetwork]: Lee, T. I., Rinaldi, N. J., Robert, F., Odom, D. T., Bar-Joseph, Z., Gerber, G. K., … Young, R. A. (2002). Transcriptional regulatory networks in Saccharomyces cerevisiae. Science, 298(5594), 799–804. https://doi.org/10.1126/science.1075090

[^eColiNetwork]: Samal, A. & Jain, S. The regulatory network of *E. coli* metabolism as a Boolean dynamical system exhibits both homeostasis and flexibility of response. *BMC Systems Biology*,  2, 21 (2008). https://doi.org/10.1186/1752-0509-2-21

[^auto]: Arani, B. M. S., Mahmoudi, M., Lahti, L., González, J., & Wit, E. C. (2018). Stability estimation of autoregulated genes under Michaelis-Menten-type kinetics. Physical Review E, 97, 62407. [https://doi.org/10.1103/PhysRevE.97.062407](https://doi.org/10.1103/PhysRevE.97.062407)

[^tfNumber]: Gene ontology database with "transcription" keyword: https://www.uniprot.org/.
