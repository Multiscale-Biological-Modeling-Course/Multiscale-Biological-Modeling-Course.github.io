---
permalink: /chemotaxis/walk
title: "E. coli Explores its World Via a Random Walk"
excerpt: "Module 2: Unpacking E. coli’s Genius Exploration Algorithm"
sidebar:
 nav: "chemotaxis"
toc: true
toc_sticky: true
header:
  overlay_image: "../assets/images/chemotaxis_traj_1.0_uniform.png"
  overlay_filter: 0.3
image: "../assets/images/chemotaxis_traj_1.0.png"
---

## Bacterial runs and tumbles

Every *E. coli* cell has between five and twelve flagella distributed on its surface[^Sim2017] that can rotate both clockwise and counter-clockwise. When all flagella are rotating counter-clockwise, they form a bundle and propel the cell forward at about 20 µm per second. This speed may seem insignificant, but it is about ten times the length of the cell per second, which is analogous to a car traveling at 160 kph. When a single flagellum rotates clockwise, the flagella become uncoordinated, and the bacterium stops and rotates.[^Baker2005]

When we examine the bacterium's movement under a microscope, we see it alternate between periods of "running" in a straight line and then "tumbling" in place (see figure below). Over time, the bacterium's **run and tumble** exploration amounts to a *random walk* through its environment, like the exploration approach used by the lost immortals in this module's [introduction](home).

[![image-center](../assets/images/600px/chemotaxis_intro_runtumble.png){: .align-center}](../assets/images/chemotaxis_intro_runtumble.png)
The run and tumble mechanism of bacterial movement produces a random walk (bottom left). Image courtesy: Sandy Parkinson.
{: style="font-size: medium;"}

**STOP:** Say that a bacterium travels 20 µm per second, and every second it chooses a random direction in which to travel.  After an hour, approximately how far do we expect it to be from its starting point? (Hint: recall the Random Walk Theorem from the [prologue](../prologue/random_walk).)
{: .notice--primary}


## Tumbling frequency is constant across species

Bacteria are amazingly diverse. They have evolved for over three billion years to thrive in practically every environment on the planet, including hazardous human-made environments. They manufacture compounds such as antibiotics that larger organisms like ourselves cannot make. Some eukaryotes are even completely dependent upon bacteria to perform some critical task for them, from digesting their food, to camouflaging them from predators, to helping them develop organs[^Yong2016].

And yet despite the diversity of the bacterial kingdom, variations in bacterial tumbling frequencies are relatively small. In the absence of an attractant or repellent, *E. coli* stops to tumble once every 1 to 1.5 seconds[^Weis1990][^Berg2000], which is similar to most other bacteria.[^Achouri2015][^Turner2016][^Gotz1987] It is as if some invisible force compels all these bacteria to tumble with the same frequency. Recalling Dobzhansky's quotation from our work in a [previous module](../motifs/nar) that "nothing in biology makes sense except in the light of evolution", we wonder why evolution might hold tumbling frequency constant across species.

This question is a fundamental one, and we will return to it at the close of this module after we have learned more about the biochemical basis of chemotaxis and how a bacterium can adjust its behavior in response to a chemical substance. In the process, we will see that despite bacteria being simple organisms, the mechanism that they use to implement chemotaxis is sophisticated and beautiful.

[Next lesson](signal){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

[^Pierucci1978]: Pierucci O. 1978. Dimensions of *Escherichia coli* at various growth rates: Model of envelope growth. Journal of Bacteriology 135(2):559-574. [Available online](https://jb.asm.org/content/jb/135/2/559.full.pdf)

[^Sim2017]: Sim M, Koirala S, Picton D, Strahl H, Hoskisson PA, Rao CV, Gillespie CS, Aldridge PD. 2017. Growth rate control of flagellar assembly in *Escherichia coli* strain RP437. Scientific Reports 7:41189. [Available online](https://www.nature.com/articles/srep41189.)

[^Baker2005]: Baker MD, Wolanin PM, Stock JB. 2005. Signal transduction in bacterial chemotaxis. BioEssays 28:9-22. [Available online](https://pubmed.ncbi.nlm.nih.gov/16369945/)

[^Weis1990]: Weis RM, Koshland DE. 1990. Chemotaxis in *Escherichia coli* proceeds efficiently from different initial tumble frequencies. Journal of Bacteriology 172:2. [Available online](https://jb.asm.org/content/jb/172/2/1099.full.pdf)

[^Berg2000]: Berg HC. 2000. Motile behavior of bacteria. Physics today 53(1):24. [Available online](https://physicstoday.scitation.org/doi/pdf/10.1063/1.882934)

[^Achouri2015]: Achouri S, Wright JA, Evans L, Macleod C, Fraser G, Cicuta P, Bryant CE. 2015. The frequency and duration of *Salmonella* macrophage adhesion events determines infection efficiency. Philosophical transactions B 370(1661). [Available online](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4275903/)

[^Turner2016]: Turner L, Ping L, Neubauer M, Berg HC. 2016. Visualizing flagella while tracking bacteria. Biophysical Journal 111(3):630--639.[Available online](https://pubmed.ncbi.nlm.nih.gov/27508446/)

[^Parkinson2015]: Parkinson JS, Hazelbauer, Falke JJ. 2015. Signaling and sensory adaptation in *Escherichia coli* chemoreceptors: 2015 update. [Available online](https://www.sciencedirect.com/science/article/abs/pii/S0966842X15000578)

[^Yang2019]: Yang W, Cassidy CK, Ames P, Diebolder CA, Schulten K, Luthey-Schulten Z, Parkinson JS, Briegel A. 2019. *In situ* confomraitonal changes of the *Escherichia coli* serine chemoreceptor in different signaling states. mBio. [Available online](https://mbio.asm.org/content/10/4/e00973-19/article-info)

[^Saragosti2001]: Saragosti J, Calvez V, Bournaveas, N, Perthame B, Buguin A, Silberzan P. 2001. Directional persistence of chemotactic bacteria in a traveling concentration wave. PNAS. [Available online](https://www.pnas.org/content/pnas/108/39/16235.full.pdf)

[^Gotz1987]: Gotz R and Schmitt R. 1987. *Rhizobium meliloti* swims by unidirectional, intermittent rotation of right-handed flagellar helices. J Bacteriol 169: 3146–3150. [Avaialbe online](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC212363/)

[^Lim2019]: Lim S, Guo XK, Boedicker JQ. 2019. Connecting single-cell properties to collective behavior in multiple wild isolates of the *Enterobacter cloacae* complex. PLoS ONE 14(4): e0214719. [Avaialbe online](https://doi.org/10.1371/journal.pone.0214719)

[^Rashid2019]: Rashid S, Long Z, Singh S, Kohram M, Vashistha H, Navlakha S, Salman H, Oltvai ZH, Bar-Joseph Z. 2019. Adjustment in tumbling rates improves bacterial chemotaxis on obstacle-laden terrains. PNAS 116(24):11770-11775. [Available online](https://www.pnas.org/content/116/24/11770)

[^Mitchell2005]: Mitchell JG, Kogure K. 2005. Bacterial motility: links to the environment and a driving force for microbial physics. FEMS Microbiol Ecol 55(2006):3–16. [Available online](https://academic.oup.com/femsec/article/55/1/3/554107)

[^Yong2016]: Ed Yong. *I Contain Multitudes: The Microbes Within Us and a Grander View of Life*.
