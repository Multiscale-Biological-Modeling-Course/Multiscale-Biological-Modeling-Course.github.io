---
permalink: /chemotaxis/adaptation
title: "Methylation Helps a Bacterium Adapt to Differing Concentrations"
description: "Discover how E. coli adjusts to new environments by chemotaxis, with models that reveal its sensory pathways and adaptive behavior."
excerpt: "Module 2: Unpacking E. coli’s Genius Exploration Algorithm"
sidebar:
 nav: "chemotaxis"
toc: true
toc_sticky: true
header:
  overlay_image: "../assets/images/ecoli_glucose.png"
  image_alt: "Microscope image of E. coli cells migrating toward a glucose crystal"
  overlay_filter: 0.3
image: "../assets/images/ecoli_glucose.png"
---

## Bacterial tumbling frequencies remain constant for different attractant concentrations

In the [previous lesson](biochemistry), we explored the signal transduction pathway by which *E. coli* can change its tumbling frequency in response to a change in the concentration of an attractant. But the reality of cellular environments is that the concentration of an attractant can vary across several orders of magnitude. The cell therefore needs to detect not *absolute* concentrations of an attractant but rather *relative* changes.

*E. coli* detects relative changes in its concentration via **adaptation** to these changes. If the concentration of attractant remains constant for a period of time, then regardless of the absolute value of the concentration, the cell returns to the same background tumbling frequency. That is, *E. coli* demonstrates *robustness* to the attractant concentration in maintaining its default tumbling behavior.

However, our current model is not able to address this adaptation. If the ligand concentration increases in the model, then phosphorylated CheY will plummet and remain at a low steady state.

In this lesson, we will investigate the biochemical mechanism that *E. coli* uses to achieve such a robust response to environments with different background concentrations. We will then expand the model we built in the previous lesson to replicate the bacterium's adaptive response.

## Bacteria remember past concentrations using methylation

Recall that in the absence of an attractant, CheW and CheA readily bind to an MCP, leading to greater autophosphorylation of CheA, which in turn phosphorylates CheY. The greater the concentration of phosphorylated CheY, the more frequently the bacterium tumbles.

Signal transduction is achieved through phosphorylation, but *E. coli* maintains a "memory" of past environmental concentrations through a chemical process called **methylation**. In this  reaction, a **methyl group** (-CH<sub>3</sub>) is added to an organic molecule; the removal of a methyl group is called **demethylation**.

Every MCP receptor contains four methylation sites, meaning that between zero and four methyl groups can be added to the receptor. On the plasma membrane, many MCPs, CheW, and CheA molecules form an array structure. Methylation reduces the negative charge on the receptors, stabilizing the array and facilitating CheA autophosphorylation. The more sites that are methylated, the higher the autophosphorylation rate of CheA, which means that CheY has a higher phosphorylation rate, and tumbling frequency increases.

We now have two different ways that tumbling frequency can be elevated. First, if the concentration of an attractant is low, then CheW and CheA freely form a complex with the MCP, and the phosphorylation cascade passes phosphoryl groups to CheY, which interacts with the flagella and keeps tumbling frequency high. Second, an increase in MCP methylation can also boost CheA autophosphorylation and lead to increased tumbling frequency.

Methylation of MCPs is achieved by an additional protein called **CheR**. When bound to MCPs, CheR methylates ligand-bound MCPs faster[^Amin2010][^Terwilliger1986], and so the rate of MCP methylation by CheR is higher if the MCP is bound to a ligand.[^Spiro1997]. Let's consider how this fact affects a bacterium's behavior.

Say that *E. coli* encounters an increase in attractant concentration. Then the lack of a phosphorylation cascade will mean less phosphorylated CheY, and so the tumbling frequency will decrease. However, if the attractant concentration levels off, then the tumbling frequency will flatten, while CheR starts methylating the MCP. Over time, the rising methylation will increase CheA autophosphorylation, bringing back the phosphorylation cascade and raising tumbling frequency back to default levels.

Just as the phosphorylation of CheY can be reversed, MCP methylation can be undone to prevent methylation from being permanent. In particular, an enzyme called **CheB**, which like CheY is phosphorylated by CheA, demethylates MCPs (as well as autodephosphorylates). The rate of an MCP's demethylation is dependent on the extent to which the MCP is methylated. In other words, the rate of MCP methylation is higher when the MCP is in a low methylation state, and the rate of demethylation is faster when the MCP is in a high methylation state.[^Spiro1997]

The figure below adds CheR and CheB to provide a complete picture of the core pathways influencing chemotaxis. To model these pathways and see how our simulated bacterial system responds to different relative attractant concentrations, we will need to add quite a few molecules and reactions to our current model.

[![Overview of chemotaxis signal transduction pathway](../assets/images/600px/chemotaxis_wholestory.png){: .align-center loading="lazy"}](../assets/images/chemotaxis_wholestory.png)
The chemotaxis signal-transduction pathway with methylation included. CheA phosphorylates CheB, which methylates MCPs, while CheR demethylates MCPs. Blue lines denote phosphorylation, grey lines denote dephosphorylation, green arrows denote methylation, and red arrows denote demethlyation. Image modified from <a href="https://chemotaxis.biology.utah.edu/projects/projects.html">Parkinson Lab</a>'s illustrations.
{: style="font-size: medium;"}

## Combinatorial explosion and the need for rule-based modeling

To expand our model, we will need to include methylation of the MCP by CheR and demethylation of the MCP by CheB. For simplicity, we will use three methylation levels (low, medium, and high) rather than five.

Imagine that we were attempting to specify every reaction that could take place in our model. To specify an MCP, we would need to establsh whether it is bound to a ligand (two possible states), whether it is bound to CheR (two possible states), whether it is phosphorylated (two possible states), and which methylation state it is in (three possible states). Therefore, a given MCP would need 2 · 2 · 2 · 3 = 24 total states.

Consider the simple reaction of a ligand binding to an MCP, which we originaly wrote as *T* + *L* → *TL*. We now need this reaction to include 12 of the 24 states, the ones corresponding to the MCP being unbound to the ligand. Our previously simply reaction would become, 12 different reactions, one for each possible unbound state of the complex molecule *T*. And if the situation were just a little more complex, with the ligand molecule *L* having *n* possible states, then we would have 12*n* reactions. Image trying to debug a model in which we had accidentally incorporated a type when transcribing just one of these reaction!

In other words, as our model grows, with multiple different states for each molecule involved in each reaction, the number of reactions that we need to represent the system grows rapidly; this phenomenon is called **combinatorial explosion** and means that building realistic models of biochemical systems at scale can be daunting.

Yet all these 12 reactions can be summarized with a single *rule*: a ligand and a receptor can bind into a complex if the receptor is unbound. Moreover, all 12 reactions implied by the rule are easily inferable from it. This example illustrates **rule-based modeling**, a paradigm applied by BioNetGen in which a potentially enormous number of reactions are specified by a much smaller collection of "rules" from which all reactions can be inferred.

We will not bog down the main text with a full specification of all the rules needed to add methylation to our model while avoiding combinatorial explosion. If you are interested in the details, please follow our tutorial.

[Visit tutorial](tutorial_adaptation){: .btn .btn--warning .btn--large}
{: style="font-size: 100%; text-align: center;"}

## Bacterial tumbling is robust to large sudden changes in attractant concentration

In the figures that follow, we plot the concentration over time of each molecule for different values of *l*<sub>0</sub>, the initial concentration of ligand. From what we have learned about *E. coli*, we should see the concentration of phosphorylated CheY (and therefore the bacterium's tumbling frequency) drop before returning to its original equilibrium. But will our simulation capture this behavior?

First, we add a relatively small amount of attractant, setting *l*<sub>0</sub> equal to 10,000. The system returns so quickly to an equilibrium in phosphorylated CheY that it is difficult to imagine that the attractant has had any effect on tumbling frequency.

[![Visual output after adding attractant at 1e4](../assets/images/600px/chemotaxis_tutorial_oneadd1e4_vscode.png){: .align-center loading="lazy"}](../assets/images/chemotaxis_tutorial_oneadd1e4_vscode.png)
Molecular concentrations (in number of molecules in the cell) over time (in seconds) in a BioNetGen chemotaxis simulation with 10,000 initial attractant ligand particles.
{: style="font-size: medium;"}

If instead *l*<sub>0</sub> is equal to 100,000, then we obtain the figure below. After an initial drop in the concentration of phosphorylated CheY, it returns to equilibrium after a few minutes.

[![Visual output after adding attractant at 1e5](../assets/images/600px/chemotaxis_tutorial_oneadd1e5_vscode.png){: .align-center loading="lazy"}](../assets/images/chemotaxis_tutorial_oneadd1e5_vscode.png)
Molecular concentrations (in number of molecules in the cell) over time (in seconds) in a BioNetGen chemotaxis simulation with 100,000 initial attractant ligand particles.
{: style="font-size: medium;"}

When we increase *l*<sub>0</sub> by another factor of ten to 1 million, the initial drop is more pronounced, but the system returns just as quickly to equilibrium. Note how much higher the concentration of methylated receptors are in this figure compared to the previous figure; however, there are still a significant concentration of receptors with low methylation, indicating that the system may be able to handle an even larger jolt of attractant.

[![Visual output after adding attractant at 1e6](../assets/images/600px/chemotaxis_tutorial_oneadd1e6_vscode.png){: .align-center loading="lazy"}](../assets/images/chemotaxis_tutorial_oneadd1e6_vscode.png)
Molecular concentrations (in number of molecules in the cell) over time (in seconds) in a BioNetGen chemotaxis simulation with one million initial attractant ligand particles.
{: style="font-size: medium;"}

When we set *l*<sub>0</sub> equal to 10 million, we give the system this bigger jolt. Once again, the model returns to its previous CheY equilibrium after a few minutes.

[![Visual output after adding attractant at 1e7](../assets/images/600px/chemotaxis_tutorial_oneadd1e7_vscode.png){: .align-center loading="lazy"}](../assets/images/chemotaxis_tutorial_oneadd1e7_vscode.png)
Molecular concentrations (in number of molecules in the cell) over time (in seconds) in a BioNetGen chemotaxis simulation with ten million initial attractant ligand particles.
{: style="font-size: medium;"}

Finally, with *l*<sub>0</sub> equal to 100 million, we see what we might expect: the steepest drop in phosphorylated CheY yet, but a system that is able to return to equilibrium after a few minutes.

[![Visual output after adding attractant at 1e8](../assets/images/600px/chemotaxis_tutorial_oneadd1e8_vscode.png){: .align-center loading="lazy"}](../assets/images/chemotaxis_tutorial_oneadd1e8_vscode.png)
Molecular concentrations (in number of molecules in the cell) over time (in seconds) in a BioNetGen chemotaxis simulation with 100 million initial attractant ligand particles.
{: style="font-size: medium;"}

Our model, which is built on real reaction rate parameters, provides compelling evidence that the *E. coli* chemotaxis system is robust to changes in its environment across several orders of magnitude of attractant concentration. This robustness has been observed in real bacteria[^Shimizu2005][^Krembel2015], as well as replicated by other computational simulations[^Bray1993].

Aren't bacteria magnificent?

## Traveling up an attractant gradient

We have simulated *E. coli* adapting to a single sudden change in its environment, but life often depends on responding to continual change. Imagine a glucose cube in an aqueous solution. As the cube dissolves, a **gradient** will form, with a glucose concentration that decreases outward from the cube. How will the tumbling frequency of *E. coli* change if the bacterium finds itself in an environment of an attractant gradient?  Will the tumbling frequency decrease continuously as well, or will we see more complicated behavior? And once the cell reaches a region of high attractant concentration, will its default tumbling frequency stabilize to the same steady state?

We will modify our model by increasing the concentration of the attractant ligand exponentially and seeing how the concentration of phosphorylated CheY changes. This model will simulate a bacterium traveling up an attractant gradient toward an attractant. Moreover, we will examine how the concentration of phosphorylated CheY changes as we change the gradient's "steepness", or the rate at which attractant ligand is increasing. Visit the following tutorial if you're interested in following our adjustments for yourself.

[Visit tutorial](tutorial_gradient){: .btn .btn--warning .btn--large}
{: style="font-size: 100%; text-align: center;"}

## Steady state tumbling frequency is robust

To model a ligand concentration [*L*] that is increasing exponentially, we will use the function [*L*] = *l*<sub>0</sub> · *e*<sup>*k* · t</sup>, where *e* is Euler's number (*e* = 2.71828...) *l*<sub>0</sub> is the initial ligand concentration, *k* is a constant dictating the rate of exponential growth, and *t* is time. The parameter *k* represents the steepness of the gradient, since the higher the value of *k*, the faster the growth in the ligand concentration [*L*].

For example, the following figure shows the concentration over time of phosphorylated CheY (orange) when *l*<sub>0</sub> = 1000 and *k* = 0.1. The concentration of phosphorylated CheY, and therefore the tumbling frequency, still decreases sharply as the ligand concentration increases, but after all ligands become bound to receptors (the plateau in the blue curve), receptor methylation causes the concentration of phosphorylated CheY to return to its equilibrium. For these values of *l*<sub>0</sub> and *k*, the outcome is similar to when we provided an instantaneous increase in ligand, although the cell takes longer to reach its minimum concentration of phosphorylated CheY because the attractant concentration is increasing gradually.

[![Chemotaxis model showing ligand addition phase 1](../assets/images/600px/chemotaxis_tutorial_addition01_vscode.png){: .align-center loading="lazy"}](../assets/images/chemotaxis_tutorial_addition01_vscode.png)
Plots of relevant molecule concentrations in our model (in number of molecules in the cell) over time (in seconds) when the concentration of ligand grows exponentially with *l*<sub>0</sub> = 1000 and *k* = 0.1. The concentration of bound ligand (shown in red) quickly hits saturation, which causes a minimum in phosphorylated CheY (orange), and therefore a low tumbling frequency. To respond, the cell increases the methylation of receptors, which boosts the concentration of phosphorylated CheY back to equilibrium.
{: style="font-size: medium;"}

The following figure shows the results of multiple simulations in which we vary the growth parameter *k* and plot only the concentration of phosphorylated CheY over time. The larger the value of *k*, the faster the increase in receptor binding, and the steeper the drop in the concentration of phosphorylated CheY.

[![Chemotaxis model after additional ligand exposure](../assets/images/600px/chemotaxis_tutorial_addition03.png){: .align-center loading="lazy"}](../assets/images/chemotaxis_tutorial_addition03.png)
Plots of the concentration of phosphorylated CheY over time (in seconds) for different growth rates *k* of ligand concentration. The larger the value of *k*, the steeper the initial drop in the concentration of phosphorylated CheY, and the faster that methylation returns the concentration of phosphorylated CheY to equilibrium. The same equilibrium is obtained regardless of the value of *k*.
{: style="font-size: medium;"}

The above figure further illustrates the *robustness* of bacterial chemotaxis to the rate of growth in ligand concentration. Whether the growth of the attractant is slow or fast, methylation will always bring the cell back to the same equilibrium concentration of phosphorylated CheY and therefore the same background tumbling frequency.

## From changing tumbling frequencies to an exploration algorithm

We hope that our work here has conveyed the elegance of bacterial chemotaxis, as well as the power of rule-based modeling and the Gillespie algorithm for simulating a complex biochemical system that may include a huge number of reactions.

And yet we are missing an important part of the story. *E. coli* has evolved to ensure that if it detects a relative increase in concentration (i.e., an attractant gradient), then it can reduce its tumbling frequency in response. But we have not explored *why* changing its tumbling frequency would help a bacterium find food in the first place. After all, according to the run and tumble model, the direction that a bacterium is moving at any point in time is random!

This quandary does not have an obvious intuitive answer. In this module's conclusion, we will build a model to explain why *E. coli*'s randomized run and tumble walk algorithm is a clever way of locating resources in an unfamiliar land.

[Next lesson](conclusion){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

## Additional resources

If you find chemotaxis biology as interesting as we do, then we suggest the following resources.
 - An amazing introduction to chemotaxis from the  [Parkinson Lab](https://chemotaxis.biology.utah.edu/projects/projects.html).
 - A good overview of chemotaxis: [Webre et al. 2003 ](https://doi.org/10.1016/S0960-9822(02)01424-0)
 - A review article on chemotaxis pathway and MCPs:  [Baker et al. 2005](https://pubmed.ncbi.nlm.nih.gov/16369945/).
 - A more recent review article of MCPs: [Parkinson et al. 2015](https://www.sciencedirect.com/science/article/abs/pii/S0966842X15000578).
 - Lecture notes on robustness and integral feedback: [Berg 2008](https://www.weizmann.ac.il/mcb/UriAlon/sites/mcb.UriAlon/files/uploads/lecture_notes_-_robustness_in_bacterial_chemotaxis_.pdf).


[^Munroe]: Randall Munroe. What If? [Available online](https://what-if.xkcd.com/)

[^Pierucci1978]: Pierucci O. 1978. Dimensions of *Escherichia coli* at various growth rates: Model of envelope growth. Journal of Bacteriology 135(2):559-574. [Available online](https://jb.asm.org/content/jb/135/2/559.full.pdf)

[^Sim2017]: Sim M, Koirala S, Picton D, Strahl H, Hoskisson PA, Rao CV, Gillespie CS, Aldridge PD. 2017. Growth rate control of flaggelar assembly in *Escherichia coli* strain RP437. Scientific Reports 7:41189. [Available online](https://www.nature.com/articles/srep41189#:~:text=Escherichia%20coli%20is%20a%20prominent,distributed%20across%20the%20cell%20surface.)

[^Baker2005]: Baker MD, Wolanin PM, Stock JB. 2005. Signal transduction in bacterial chemotaxis. BioEssays 28:9-22. [Available online](https://pubmed.ncbi.nlm.nih.gov/16369945/)

[^Weis1990]: Weis RM, Koshland DE. 1990. Chemotaxis in *Escherichia coli* proceeds efficiently from different initial tumble frequencies. Journal of Bacteriology 172:2. [Available online](https://jb.asm.org/content/jb/172/2/1099.full.pdf)

[^Berg2000]: Berg HC. 2000. Motile behavior of bacteria. Physics today 53(1):24. [Available online](https://physicstoday.scitation.org/doi/pdf/10.1063/1.882934)

[^Achouri2015]: Achouri S, Wright JA, Evans L, Macleod C, Fraser G, Cicuta P, Bryant CE. 2015. The frequency and duration of *Salmonella* macrophage adhesion events determines infection efficiency. Philosophical transactions B 370(1661). [Available online](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4275903/)

[^Turner2016]: Turner L, Ping L, Neubauer M, Berg HC. 2016. Visualizing flagella while tracking bacteria. Biophysical Journal 111(3):630--639.[Available online](https://pubmed.ncbi.nlm.nih.gov/27508446/)

[^Parkinson2015]: Parkinson JS, Hazelbauer, Falke JJ. 2015. Signaling and sensory adaptation in *Escherichia coli* chemoreceptors: 2015 update. [Available online](https://www.sciencedirect.com/science/article/abs/pii/S0966842X15000578)

[^Yang2019]: Yang W, Cassidy CK, Ames P, Diebolder CA, Schulten K, Luthey-Schulten Z, Parkinson JS, Briegel A. 2019. *In situ* confomraitonal changes of the *Escherichia coli* serine chemoreceptor in different signaling states. mBio. [Available online](https://mbio.asm.org/content/10/4/e00973-19/article-info)

[^Saragosti2001]: Saragosti J, Calvez V, Bournaveas, N, Perthame B, Buguin A, Silberzan P. 2001. Directional persistence of chemotactic bacteria in a traveling concentration wave. PNAS. [Available online](https://www.pnas.org/content/pnas/108/39/16235.full.pdf)

[^Hlavacek2003]: Hlavacek WS, Faeder JR, Blinov ML, Perelson AS, Goldsten B. 2003. The complexity of complexes in signal transduction. Biotechnology and Bioengineering 84(7):783-94. [Available online](https://onlinelibrary.wiley.com/doi/abs/10.1002/bit.10842)

[^Hlavacek2006]: Hlavacek WS, Faeder JR, Blinov ML, Posner RG, Hucka M, Fontana W. 2006. Rules for modeling signal-transduction systems. Science Signaling 344:re6. [Available online](https://stke.sciencemag.org/content/2006/344/re6.long)

[^ParkinsonLab]: Parkinson Lab website. [website](https://chemotaxis.biology.utah.edu/projects/projects.html)

[^Spiro1997]: Spiro PA, Parkinson JS, and Othmer H. 1997. A model of excitation and adaptation in bacterial chemotaxis. Biochemistry 94:7263-7268. [Available online](https://www.pnas.org/content/94/14/7263).

[^Bray1993]: Bray D, Bourret RB, Simon MI. 1993. Computer simulation of phosphorylation cascade controlling bacterial chemotaxis. Molecular Biology of the Cell. [Available online](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC300951/)

[^Li2004]: Li M, Hazelbauer GL. 2004. Cellular stoichimetry of the components of the chemotaxis signaling complex. Journal of Bacteriology. [Available online](https://jb.asm.org/content/186/12/3687)

[^Stock1991]: Stock J, Lukat GS. 1991. Intracellular signal transduction networks. Annual Review of Biophysics and Biophysical Chemistry. [Available online](https://www.annualreviews.org/doi/abs/10.1146/annurev.bb.20.060191.000545)

[^Shimizu2005]: Shimizu TS, Delalez N, Pichler K, and Berg HC. 2005. Monitoring bacterial chemotaxis by using bioluminescence resonance energy transfer: absence of feedback from the flagellar motors. PNAS. [Available online](https://www.pnas.org/content/103/7/2093/)

[^Krembel2015]: Krembel A., Colin R., Sourijik V. 2015. Importance of multiple methylation sites in *Escherichia coli* chemotaxis. [Available online](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0145582)

[^Amin2010]: Amin DN, Hazelbauer GL. 2010. Chemoreceptors in signaling complexes: shifted conformation and asymmetric coupling. [Available online](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3010867/)

[^Terwilliger1986]: Terwilliger TC, Wang JY, Koshland DE. 1986. Kinetics of Receptor Modification - the multiply methlated aspartate receptors involved in bacterial chemotaxis. The Journal of Biolobical Chemistry. [Available online](https://www.jbc.org/content/261/23/10814)

[^Chylek2015]: Chylek LA, Harris LA, Tung CS, Faeder JR, Lopez CF, Hlavacek WS. 2015. Rule-based modeling: a computational approach for studying biomolecular site dynamics in cell signaling systems. Wiley Interdiscip Rev Syst Biol Med 6(1):13-36. [Available online](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3947470/)

[^Boyd1980]: Boyd A., and Simon MI. 1980. Multiple electrophoretic forms of methyl-accepting chemotaxis proteins generated by stimulus-elicited methylation in Escherichia coli. Journal of Bacteriology 143(2):809-815. [Available online](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC294367/pdf/jbacter00569-0269.pdf)

[^Lupas1989]: Lupas A., and Stock J. 1989. Phosphorylation of an N-terminal regulatory domain activates the CheB methylesterase in bacterial chemotaxis. J Bio Chem 264(29):17337-42. [Available online](https://pubmed.ncbi.nlm.nih.gov/2677005/)
