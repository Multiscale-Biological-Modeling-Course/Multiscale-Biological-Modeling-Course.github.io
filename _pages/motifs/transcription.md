---
permalink: /motifs/transcription
title: "Transcription and DNA-Protein Binding"
sidebar:
 nav: "motifs"
toc: true
toc_sticky: true
image: "../assets/images/repressilator_chart.png"
---

## The central dogma of molecular biology

DNA is a double-stranded molecule consisting of the four nucleobases adenine, cytosine, guanine, and thymine. A gene is a region of an organism's DNA that is **transcribed** into a single-stranded RNA molecule in which thymine is converted to uracil and the other bases remain the same.

The RNA transcript is then **translated** into an amino acid sequence. Because there are four different bases but twenty amino acids available, RNA is translated in **codons**, or triplets of nucleobases. The figure below shows the way in which codons are translated into amino acids, which is called the **genetic code**.

[![image-center](../assets/images/600px/genetic_code.png){: .align-center width="300px"}](../assets/images/genetic_code.png)
The genetic code, which dictates the conversion of RNA codons into amino acids. Codons are read from the inside of the figure outward. Image courtesy J_Alves, Open Clip Art.
{: style="font-size: medium;"}

DNA can be thought of as a blueprint for storing information that flows from DNA to RNA to protein. This flow of information is called the **central dogma of molecular biology**, illustrated in the figure below.

**Note:** Like any dogma, there are times in which the central dogma of molecular biology is violated. If you are interested in an example, consider Chapter 4 of <a href="https://www.bioinformaticsalgorithms.org/bioinformatics-chapter-4" target="_blank"><em>Bioinformatics Algorithms</em></a>.
{: .notice--info}

[![image-center](../assets/images/600px/Central_Dogma_of_Molecular_Biochemistry_with_Enzymes.jpg){: .align-center}](../assets/images/Central_Dogma_of_Molecular_Biochemistry_with_Enzymes.jpg)
The central dogma of molecular biology states that molecular information flows from DNA in the nucleus, into the RNA that is transcribed from DNA, and then into proteins that are translated from RNA. Image courtesy: Dhorpool, Wikimedia commons user.
{: style="font-size: medium;"}

## Transcription factors control gene regulation

All of your cells have essentially the same DNA, and yet your liver cells, heart cells, and brain cells are able to serve different functions. This is because the rates at which these genes are **regulated**, or converted into RNA and then protein, vary between genes in different tissues.

Gene regulation typically occurs at either the DNA or protein level. At the DNA level, regulation is modulated by **transcription factors**, master regulator proteins that bind upstream of genes and serve to either **activate** or **repress** a gene's rate of transcription, turning that rate up or down, respectively.

Because of the central dogma, transcription factors are involved in a sort of feedback loop. DNA is transcribed into RNA, which is translated into the protein sequence of a transcription factor, which then binds to the upstream region of some other gene and changes its rate of transcription.

Transcription factors are vital for the cell's response to its environment because extracellular stimuli can serve to activate a transcription factor via a system of signaling molecules that convey a signal through relay molecules to the transcription factor (see figure below). Only when the transcription factor is activated will it regulate its target protein(s).

[![image-center](../assets/images/600px/signal_pathway.jpg){: .align-center width="400px"}](../assets/images/signal_pathway.jpg)
A cell receiving a signal which triggers a response in which this signal is "transduced" into the cell, resulting in transcription of a gene. We will discuss signal transduction in greater detail in a future module.[^signalResponse]
{: style="font-size: medium;"}

In module 2, we will discuss the details of how the cell detects an extracellular signal and conveys it as a response within the cell. For now, we will focus on the relationship between transcription factors and the genes they regulate.

## Determining if a given transcription factor regulates the expression of a given gene

Over the years, a number of both computational and experimental approaches have been developed to identify the collection of genes that a given transcription factor regulates.

A transcription factor has a weak binding affinity to DNA in general, but it has a very strong binding affinity for a single specific short sequence of nucleotides[^machinery] called a **motif**. Think of a transcription factor as latching onto DNA and then "sliding" up and down the DNA molecule until it finds its target motif, where it clamps down. If this motif occurs immediately before a gene, then the transcription factor will regulate this gene.

A natural question, then, is to find the set of genes to which a transcription factor binds. A widespread experimental practice for determining where a protein bonds in an organism's genome (i.e., its total collection of DNA) is called **ChIP-seq**[^chip], which is short for **chromatin immunoprecipitation sequencing**. This approach, which is illustrated in the figure below, combines an organism's DNA with a collection of proteins that bond to DNA (which in this case would be transcription factors). After allowing for the proteins to bond naturally to the DNA, the DNA (with proteins attached) is cleaved into much smaller fragments of a few hundred base pairs. As a result of this process, we obtain a collection of DNA fragments, some of which are attached to protein.

The question is how to isolate the fragments of DNA that are bound to a single transcription factor of interest so that we can infer the fragments of DNA to which that transcription factor binds.

The clever trick is to use an **antibody**. Normally, antibodies are produced by the immune system to bond to foreign pathogens. The antibody used by ChIP-seq is designed to identify a single protein of interest, and the antibody is attached to a bead. Once the antibody attaches to the protein target, a single complex is formed consisting of the DNA fragment, the transcription factor bonded to the DNA, the antibody that recognized the transcription factor, and the bead bonded to the antibody. Because the bead weighs down these complexes, they can be filtered out as "precipitate" from the solution, and we are left with just the DNA fragments that are bound to our transcription factor.

In a final step, we unlink the protein from the DNA, leaving a collection of DNA fragments that were previously bonded to a single transcription factor. These fragments are read using DNA sequencing to determine the order of nucleotides on each fragment. Once we have read the fragments, we can then scan through the genome to determine the genes that these fragments precede. We can then postulate that these are the genes regulated by the transcription factor!

[![image-center](../assets/images/600px/ChIP-seq_workflow.png){: .align-center width="400px"}](../assets/images/ChIP-seq_workflow.png)
An overview of ChIP-seq. Figure courtesy Jkwchui, Wikimedia Commons user.
{: style="font-size: medium;"}

If you would like a different explanation of  may also like to check out the following excellent video on identifying genes regulated by a transcription factor. This video was produced by students in the 2020 <a href="http://www.cbd.cmu.edu/education/pre-college-program-in-computational-biology" target="_blank">PreCollege Program in Computational Biology</a> at Carnegie Mellon. The presenters won an award from their peers for their work, and for good reason!

{% include video id="voEDurUgz_4" provider="youtube" %}

**STOP:** How do you think that researchers could determine whether a transcription factor activates or inhibits a given gene?
{: .notice--primary}

## Organizing transcription factor information

As a result of techniques like ChIP-seq, researchers have learned a great deal about which transcription factors regulate which genes. But what can we do with this information?

We would like to organize the relationships between transcription factors and the genes they regulate in a way that will help us identify patterns in these relationships. In the next lesson, we will see that consolidating gene regulatory information into a *network* will allow us to infer how cells have evolved to quickly change the expression of their genes in response to a dynamic environment.

[Next lesson](networks){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

[^dogma]: CC BY-SA 3.0 https://creativecommons.org/licenses/by-sa/3.0/

[^machinery]: Goodsell, David (2009), *The Machinery of Life*. Copernicus Books.

[^signalResponse]: CC https://www.open.edu/openlearn/science-maths-technology/general-principles-cellular-communication/content-section-1

[^chip]: Johnson, D. S., Mortazavi, A., Myers, R. M., & Wold, B. (2007). Genome-wide mapping of in vivo protein-DNA interactions. Science, 316(5830), 1497–1502. https://doi.org/10.1126/science.1141319
