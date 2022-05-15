---
permalink: /chemotaxis/biochemistry
title: "A Biochemically Accurate Model of Bacterial Chemotaxis"
sidebar:
 nav: "chemotaxis"
toc: true
toc_sticky: true
image: "../assets/images/chemotaxis_traj_1.0.png"
---

## Transducing an extracellular signal to a cell's interior

We now turn to the question of how the cell conveys the extracellular signal it has detected via the process of signal transduction to the cell's interior and produces an action. When *E. coli* senses an increase in the concentration of glucose, meaning that more ligand-receptor binding is taking place at the receptor that recognizes glucose, how does the bacterium change its behavior?

The engine of signal transduction is **phosphorylation**, a chemical reaction that attaches a phosphoryl group (PO<sub>3</sub><sup>-</sup>) to an organic molecule.  Phosphoryl modifications serve as an information exchange of sorts because, as we will see, they activate or deactivate certain enzymes.

A phosphoryl group usually comes from one of two sources. First, the phosphoryl can be broken off of an **adenosine triphosphate (ATP)** molecule, the "energy currency" of the cell, producing **adenosine diphosphate (ADP)**. Second, the phosphoryl can be exchanged from a phosphorylated molecule that loses its phosphoryl group in a **dephosphorylation** reaction.

For many cellular responses, including bacterial chemotaxis, a sequence of phosphorylation and dephosphorylation events called a **phosphorylation cascade** serves to transmit information within the cell about the amount of ligand binding being detected on the cell's exterior. In this lesson, we discuss how this cascade of chemical reactions leads to a change in bacterial movement.

A high-level view of the transduction pathway for chemotaxis is shown in the figure below. The cell membrane receptors that we have been working with are called **methyl-accepting chemotaxis proteins (MCPs)**, and they bridge the cellular membrane, binding both to ligand stimuli in the cell exterior and to other proteins on the inside of the cell. The pathway includes a number of additional proteins, which all start with the prefix "Che" (short for "chemotaxis").

[![image-center](../assets/images/600px/chemotaxisphosnew.png){: .align-center}](../assets/images/chemotaxisphosnew.png)
A summary of the chemotaxis transduction pathway. A ligand binding signal is propagated through CheA and CheY phosphorylation, which leads to a response of clockwise flagellar rotation. The blue curved arrow denotes phosphorylation, the grey curved arrow denotes dephosphorylation, and the blue dashed arrow denotes a chemical interaction. Our figure is a simplified view of <a href="http://chemotaxis.biology.utah.edu/Parkinson_Lab/projects/ecolichemotaxis/ecolichemotaxis.html">Parkinson Lab</a> illustrations.
{: style="font-size: medium;"}

On the interior of the cellular membrane, MCPs form complexes with two proteins called **CheW** and **CheA**. In the absence of MCP-ligand binding, this complex is more stable, and the CheA molecule **autophosphorylates**, meaning that it adds a phosphoryl group taken from ATP to *itself* --- a concept that might seem mystical if you have not already followed our discussion of autoregulation in the [previous module](../motifs/autoregulation).

Phosphorylated CheA can pass on its phosphoryl group to a molecule called **CheY**, which interacts with the flagellum in the following way. Each flagellum has a protein complex called the **flagellar motor switch** that is responsible for controlling the direction of flagellar rotation. The interaction of this protein complex with phosphorylated CheY induces a change of flagellar rotation from counter-clockwise to clockwise. As we discussed earlier in the module, this change in flagellar rotation causes the bacterium to tumble, which in the absence of an increase in attractant occurs every 1 to 1.5 seconds.

Yet when a ligand binds to the MCP, the MCP undergoes conformation changes, which reduce the stability of the complex with CheW and CheA. As a result, CheA is less readily able to autophosphorylate, which means that it does not phosphorylate CheY, which cannot change the flagellar rotation to clockwise, and so the bacterium is less likely to tumble.

In short, attractant ligand binding *causes* more phosphorylated CheA and CheY, which means that it *causes* fewer flagellar interactions and therefore less tumbling, so that the bacterium will run for a longer period of time.

**Note:** A critical part of this process is that if a ligand is detected, and the cell has a high concentration of CheY, then it needs to decrease the CheY concentration quickly. Otherwise, the cell will not be able to change its tumbling frequency. To this end, the cell is able to dephosphorylate CheY using an enzyme called **CheZ**.
{: .notice--info}

## Adding phosphorylation events to our model of chemotaxis

We would like to use the Gillespie algorithm that we introduced in the [previous lesson](gillespie) to simulate the reactions driving chemotaxis signal transduction and see what happens if the bacterium "senses an attractant", meaning that the attractant ligand's concentration increases and leads to more receptor-ligand binding.

This model will be more complicated than any we have introduced thus far. We will need to account for both bound and unbound MCP molecules, as well as phosphorylated and unphosphorylated CheA and CheY enzymes. We will also need to model phosphorylation reactions of CheA, which depend on the current concentrations of bound and unbound MCP molecules. We will at least make the simplifying assumption that the MCP receptor is permanently bound to CheA and CheW, so that we do not need to represent these molecules individually. In other words, rather than thinking about CheA autophosphorylating, we will think about the receptor that includes CheA autophosphorylating.


In the previous lesson, we very briefly introduced BioNetGen as a way to convert reactions into a software package applying the Gillespie algorithm. However, BioNetGen is useful not only for running particle-free simulations, but also because it implements its own language for **rule-based modeling**.

Say that we wanted to specify all particles and the reactions involving them in the manner used up to this point in the book. We would need one particle type to represent MCP molecules, another particle type to represent ligands, and a third to represent bound complexes. A bound complex molecule binds with CheA and CheW and can be either phosphorylated or unphosphorylated, necessitating two different molecule types. In turn, CheY can be phosphorylated or unphosphorylated as well, requiring two more particles.

Instead, the BioNetGen language will allow us to conceptualize this system much more concisely using rules that apply to particles that are in a variety of states. The BioNetGen representation of the four particles in our model is shown below. The notation `Phos~U~P` indicates that a given molecule type can be either phosphorylated or unphosphorylated, so that we do not need multiple different expressions to represent the molecule.

~~~ ruby
L(t)             #ligand molecule
T(l,Phos~U~P)    #receptor complex
CheY(Phos~U~P)
CheZ()
~~~

The conciseness of BioNetGen's molecule representation helps us represent our reactions concisely as well. We first reproduce the reversible binding and dissociation reaction from the previous lesson.

~~~ ruby
LR: L(t) + T(l) <-> L(t!1).T(l!1) k_lr_bind, k_lr_dis
~~~

Next, we represent the phosphorylation of the MCP complex. Recall that the phosphorylation of CheA can occur at different rates depending on whether the MCP is bound, and so we will need two different reactions to model these different rates. In our model, the phosphorylation of the MCP will occur at one fifth the rate when it is bound to the attractant ligand.

~~~ ruby
FreeTP: T(l,Phos~U) -> T(l,Phos~P) k_T_phos
BoundTP: L(t!1).T(l!1,Phos~U) -> L(t!1).T(l!1,Phos~P) k_T_phos*0.2
~~~

Finally, we represent the phosphorylation and dephosphorylation of CheY. The former requires a phosphorylated MCP receptor, while the latter is done with the help of a CheZ molecule that can be in any state.

~~~ ruby
YP: T(Phos~P) + CheY(Phos~U) -> T(Phos~U) + CheY(Phos~P) k_Y_phos
YDep: CheZ() + CheY(Phos~P) -> CheZ() + CheY(Phos~U) k_Y_dephos
~~~

Now that we have converted the reactions from the chemotaxis signal transduction pathway into BioNetGen's rule-based language, we would like to see what happens when we *change* the concentrations of the ligand. Ideally, the bacterium should be able to distinguish different ligand concentrations. That is, the higher the concentration of an attractant ligand, the lower the concentration of phosphorylated CheY, and the lower the tumbling frequency of the bacterium.

But does higher attractant concentration in our model really lead to a lower concentration of CheY? Let's find out by incorporating the phosphorylation pathway into our ligand-receptor model in the following tutorial.

[Visit tutorial](tutorial_phos){: .btn .btn--warning .btn--large}
{: style="font-size: 100%; text-align: center;"}

## Changing ligand concentrations leads to a change in internal molecular concentrations

The following figure shows the concentrations of phosphorylated CheA and CheY in a system at equilibrium in the absence of ligand. As we might expect, these concentrations remain at steady state (with some healthy noise), and so the cell stays at its background tumbling frequency.

[![image-center](../assets/images/600px/chemotaxis_tutorial5.png){: .align-center}](../assets/images/chemotaxis_tutorial5.png)
Molecular concentrations (in number of molecules in the cell) over time (in seconds) in a BioNetGen chemotaxis simulation in which no ligand is present.
{: style="font-size: medium;"}

The sudden addition of 5,000 attractant ligand molecules increases the concentration of bound receptors, therefore leading to less CheA autophosphorylation, and less phosphorylated CheY.

[![image-center](../assets/images/600px/chemotaxis_tutorial6.png){: .align-center}](../assets/images/chemotaxis_tutorial6.png)
Molecular concentrations (in number of molecules in the cell) over time (in seconds) in a BioNetGen chemotaxis simulation with 5,000 initial attractant ligand particles.
{: style="font-size: medium;"}

If we instead add 100,000 attractant molecules, then we see an even more drastic decrease in phosphorylated CheA and CheY.

[![image-center](../assets/images/600px/chemotaxis_tutorial7.png){: .align-center}](../assets/images/chemotaxis_tutorial7.png)
Molecular concentrations (in number of molecules in the cell) over time (in seconds) in a BioNetGen chemotaxis simulation with 100,000 initial attractant ligand particles.
{: style="font-size: medium;"}

This Gillespie model confirms the biological observations that an increase in attractant reduces the concentration of phosphorylated CheY. This reduction takes place remarkably quickly, with the cell attaining a new equilibrium in a fraction of a second.

And yet you may remain skeptical of our model. After all, the biochemistry powering chemotaxis may be elegant, but it is also simple, and perhaps you are not surprised that the model's particle concentrations reproduced the response of *E. coli* to an attractant ligand.

But what we have shown in this lesson is just part of the story. In the next lesson, we will see that the biochemical realities of chemotaxis are even more complicated, and for good reason --- this added complexity will allow *E. coli*, and our model of it, to react to a dynamic world with surprising sophistication.

[^Munroe]: Randall Munroe. What If? [Available online](https://what-if.xkcd.com/)

[^Pierucci1978]: Pierucci O. 1978. Dimensions of *Escherichia coli* at various growth rates: Model of envelope growth. Journal of Bacteriology 135(2):559-574. [Available online](https://jb.asm.org/content/jb/135/2/559.full.pdf)

[^Sim2017]: Sim M, Koirala S, Picton D, Strahl H, Hoskisson PA, Rao CV, Gillespie CS, Aldridge PD. 2017. Growth rate control of flagellar assembly in *Escherichia coli* strain RP437. Scientific Reports 7:41189. [Available online](https://www.nature.com/articles/srep41189#:~:text=Escherichia%20coli%20is%20a%20prominent,distributed%20across%20the%20cell%20surface)

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

[^ParkinsonLab]: Parkinson Lab website. [website](http://chemotaxis.biology.utah.edu/Parkinson_Lab/projects/ecolichemotaxis/ecolichemotaxis.html)

[^Bertoli2013]: Bertoli C, Skotheim JM, de Bruin RAM. 2013. Control of cell cycle transcription during G1 and S phase. Nature Reviews Molecular Cell Biology 14:518-528. [Available online](https://www.nature.com/articles/nrm3629).

[^Li2004]: Li M, Hazelbauer GL. 2004. Cellular stoichimetry of the components of the chemotaxis signaling complex. Journal of Bacteriology. [Available online](https://jb.asm.org/content/186/12/3687)

[^Stock1991]: Stock J, Lukat GS. 1991. Intracellular signal transduction networks. Annual Review of Biophysics and Biophysical Chemistry. [Available online](https://www.annualreviews.org/doi/abs/10.1146/annurev.bb.20.060191.000545)

[^Spiro1997]: Spiro PA, Parkinson JS, and Othmer H. 1997. A model of excitation and adaptation in bacterial chemotaxis. Biochemistry 94:7263-7268. [Available online](https://www.pnas.org/content/94/14/7263).

[Next lesson](adaptation){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}
