---
permalink: /coronavirus/conclusion_part_1
title: "Part 1 Conclusion: Protein Structure Prediction is Solved! (Kind of…)"
sidebar:
 nav: "coronavirus"
image: "../assets/images/SARS_spike_proteins.jpg"
---

In 1967, the Soviets founded an entire [research insitute](https://www.protres.ru) dedicated to protein research and decoding nature's magic protein folding algorithm. Most of its founding scientists are dead now, but the institute carries on.

Protein structure prediction is an old problem, but continual algorithmic improvements and increasing computational resources have led biologists around the world to wish for the day when they could consider protein structure prediction to be solved.

That day has come. Kind of.

Every two years since 1994, a global effort called **Critical Assessment of protein Structure Prediction (CASP)** has allowed modelers to test their protein structure prediction algorithms against each other. The contest organizers compile a (secret) collection of experimentally verified protein structures and then run all submitted algorithms against these proteins.

The 14th iteration of this contest, held in 2020, was won in a landslide. The second version of <a href="https://deepmind.com/blog/article/alphafold-a-solution-to-a-50-year-old-grand-challenge-in-biology" target="_blank">AlphaFold</a>,[^Jumper2021] one of the projects of DeepMind (an Alphabet subsidiary), vastly outperformed the world's foremost structure prediction approaches, including those that we discussed in this module.

The algorithm powering AlphaFold is an extremely involved method based on deep learning, a topic that we will discuss in this work's final module. If you're interested in learning more about this algorithm, consult the AlphaFold website or this excellent blog post by Mohammed al Quraishi: <a href="https://bit.ly/39Mnym3" target="_blank">https://bit.ly/39Mnym3</a>.

Instead of using RMSD, CASP scores a predicted structure against a known structure using the **global distance test (GDT)**. For some threshold *t*, we first take the percentage of alpha carbon positions for which the distance between corresponding alpha carbons in the two structures is at most *t*. The GDT score that CASP uses then averages the percentages obtained when *t* is equal to each of 1, 2, 4, and 8 angstroms. A GDT score of 90% is considered good, and a score of 95% is considered excellent (i.e., comparable to minor errors resulting from experimentation) [^AlQuraishi].

We will show a few plots to illustrate the decisiveness of AlphaFold's CASP victory. The first graph, which is shown in the figure below, compares the scores of AlphaFold against the second-place algorithm (a product of David Baker's laboratory, which developed the Robetta and Rosetta@Home software that we used in this module).

[![image-center](../assets/images/600px/AlphaFold2_BAKER.png){: .align-center}](../assets/images/AlphaFold2_BAKER.png)
A plot of GDT scores for the 1st place (AlphaFold2) and 2nd place (Baker lab) submissions over all proteins in the CASP14 contest. Source: <a href="https://bit.ly/39Mnym3" target="_blank">https://bit.ly/39Mnym3</a>.
{: style="font-size: medium;"}

We can appreciate the margin of victory in the above figure if we compare it against the margin between the second- and third-place competitors, shown in the figure below.

[![image-center](../assets/images/600px/BAKER_Zhang.png){: .align-center}](../assets/images/BAKER_Zhang.png)
A plot of GDT scores for the 2nd place (Baker lab) and 3rd place (Zhang lab) submissions for all proteins in the CASP14 contest. Source: <a href="https://bit.ly/39Mnym3" target="_blank">https://bit.ly/39Mnym3</a>.
{: style="font-size: medium;"}

For each protein in the CASP14 contest, we can also compute each algorithm's **z-score**, defined as the number of standard deviations that the algorithm's GDT score falls from the mean GDT score over all competitors. For example, a z-score of 1.4 would imply that the approach performed 1.4 standard deviations above the mean, and a z-score of -0.9 would imply that the approach performed 0.9 standard deviations below the mean.

By summing all of an algorithm's positive z-scores, we obtain a reasonable metric for the relative quality of an algorithm compared to its competitors. If an algorithm's sum of z-scores is large, then the algorithm racked up lots of positive z-scores, and we can conclude that it performed well. The figure below shows the sum of z-scores for all CASP14 participants and reiterates the margin of AlphaFold's victory.

[![image-center](../assets/images/600px/CASP14_overall_results.png){: .align-center}](../assets/images/CASP14_overall_results.png)
A bar chart plotting the sum of z-scores for every entrant in the CASP14 contest. AlphaFold2 is shown on the far left; its sum of z-scores is over double that of the second-place submission. Source: <a href="https://predictioncenter.org/casp14/zscores_final.cgi" target="_blank">https://predictioncenter.org/casp14/zscores_final.cgi</a>.
{: style="font-size: medium;"}

AlphaFold's CASP14 victory led some scientists --- and media outlets --- to declare that protein structure prediction had finally been solved[^Science]. Yet some critics remained skeptical.

AlphaFold obtained an impressive median RMSD of 1.6 angstroms for its predicted proteins,[^AlQuraishi] but to be completely trustworthy for a sensitive application like designing drug targets, a predicted protein structure would need to have an RMSD nearly an order of magnitude lower.

Furthermore, about a third of AlphaFold's CASP14 predictions have an RMSD over 2.0 angstroms, which we mentioned in the previous lesson is often used as a threshold for whether a predicted structure is reliable. And there is no way of knowing in advance whether AlphaFold will perform well on a given protein, unless we validate the protein's structure. For example, AlphaFold published their predictions of the structures of other SARS-CoV-2 proteins[^DeepMind], none of which had validated structures in 2020. Most of these predictions are probably accurate, but we cannot know for sure without experimentation.

Finally, the AlphaFold algorithm is "trained" using a database of known protein structures, which makes it more likely to succeed if a protein is similar to a known structure. But it is the proteins with structures *dissimilar* to any known structure that possess some of the greatest scientific interest.

Pronouncing protein structure prediction to be solved may be hasty, but we will likely never again see such a clear improvement to the state of the art for structure prediction. AlphaFold is probably the final great innovation in a research problem that has puzzled biologists for fifty years.

Thus ends part 1 of this module, but there is still much for us to discuss. We hope that you will join us for part 2, in which we will delve further into measuring the differences between the spike proteins of SARS-CoV and SARS-CoV-2 using the validated protein structures published to PDB early in the pandemic.

[Continue to part 2: spike protein comparison](multiseq){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

[^AlQuraishi]: AlQuraishi, M. 2020, December 8. AlphaFold2 @ CASP14: “It feels like one’s child has left." Retrieved January 20, 2021, from <a href="https://bit.ly/39Mnym3" target="_blank">https://bit.ly/39Mnym3</a>

[^Curry]: Curry, S. 2020, December 12. No, DeepMind has not solved protein folding. Retrieved January 20, 2021, from <a href="http://occamstypewriter.org/scurry/2020/12/02/no-deepmind-has-not-solved-protein-folding/" target="_blank">http://occamstypewriter.org/scurry/2020/12/02/no-deepmind-has-not-solved-protein-folding/</a>

[^Jumper2021]: Jumper, J et al. 2021. Highly accurate protein structure prediction with AlphaFold. Nature 596: 583–58. [Available online](https://www.nature.com/articles/s41586-021-03819-2)

[^Sim2017]: Sim M, Koirala S, Picton D, Strahl H, Hoskisson PA, Rao CV, Gillespie CS, Aldridge PD. 2017. Growth rate control of flagellar assembly in *Escherichia coli* strain RP437. Scientific Reports 7:41189. [Available online](https://www.nature.com/articles/srep41189#:~:text=Escherichia%20coli%20is%20a%20prominent,distributed%20across%20the%20cell%20surface.)

[^Science]: Service, R. F. (2020, November 30). ‘The game has changed.’ AI triumphs at solving protein structures. Science. doi:10.1126/science.abf9367

[^DeepMind]: Computational predictions of protein structures associated with COVID-19 [Web log post]. (2020, August 04). Retrieved January 20, 2021, from <a href="https://deepmind.com/research/open-source/computational-predictions-of-protein-structures-associated-with-COVID-19" target="_blank">https://deepmind.com/research/open-source/computational-predictions-of-protein-structures-associated-with-COVID-19</a>
