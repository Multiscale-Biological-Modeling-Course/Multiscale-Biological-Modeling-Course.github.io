---
permalink: /chemotaxis/home
title: "Module 2: Unpacking E. coli’s Genius Exploration Algorithm"
description: "Start Module 2: explore E. coli chemotaxis, from signaling to movement, with interactive models and tutorials that reveal its exploration algorithm."
sidebar:
 nav: "chemotaxis"
image: "../assets/images/ecoli_glucose.png"
excerpt: "by Shuanger Li and Phillip Compeau"
header:
  overlay_image: "../assets/images/ecoli_glucose.png"
  overlay_filter: 0.3
author_profile: true # add author to page
---

## The lost immortals

The book <a href="https://what-if.xkcd.com/" target="_blank"><em>What If?</em></a>[^Munroe], by Randall Munroe, compiles a collection of crazy scientific hypotheticals, paired with thorough discussions of what might happen if these situations occurred. One such hypothetical, called “Lost Immortals”, ponders how two immortal humans might find each other if they were stranded in different locations of an uninhabited planet.

We could imagine many ideas for how the immortals could reunite. For example, they could avoid the interiors of continents by moving to the coastlines. If they are allowed to discuss how to find each other in advance, then they could agree to meet at the planet's North Pole --- assuming that the planet lacks polar bears.

But Munroe provides a solution that is both sophisticated and elegant. He argues that without additional information, the immortals should walk randomly, leaving markers in their wake pointing in the direction that they travel, and resting frequently. If one immortal finds the other's trail, then they should follow it, resting less and traveling faster, until some time has expired or they lose the trail.

In the previous two modules, we have harnessed the power of randomness to answer to practical questions. Munroe's approach exemplifies a **randomized algorithm**, or a method that uses randomness to solve a problem.

In fact, Munroe's randomized algorithm is inspired by nature; he calls his approach "be an ant" because it mimics how ants explore their environment for resources.  However, in this module, we will see that the lost immortals' algorithm is also similar to the method of exploration taken by a much smaller organism: our old friend *E. coli*.

Like other prokaryotes, *E. coli* is tiny, with a rod-shaped body that is 2µm long and 0.25 to 1µm wide.[^Pierucci1978] In exploring a vast world with sparse resources, *E. coli* finds itself in a situation comparable to that of the lost immortals.

The video below shows a collection of *E. coli* surrounding a sugar crystal. Think of this video the next time you leave a slice of cake out overnight on the kitchen counter!

{% include video id="F6QMU3KD7zw" provider="youtube" %}

The movement of organisms like the bacteria in the above video in response to a chemical stimulus is called **chemotaxis**. *E. coli* and other bacteria have evolved to move toward **attractants** like glucose and electron acceptors and move away from **repellents** like Ni<sup>2+</sup> and Co<sup>2+</sup>.

In this module, we will delve into chemotaxis and ask a number of questions. How does a simple organism like *E. coli* sense an attractant or repellent in its environment? How does the bacterium change its internal state accordingly? How can we model the bacterium's response? And how does the bacterium's behavior translate into an "algorithm" that it uses to explore its environment?

[Next lesson](walk){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

[^Munroe]: Randall Munroe. What If? [Available online](https://what-if.xkcd.com/)

[^Pierucci1978]: Pierucci O. 1978. Dimensions of *Escherichia coli* at various growth rates: Model of envelope growth. Journal of Bacteriology 135(2):559-574. [Available online](https://jb.asm.org/content/jb/135/2/559.full.pdf)

[^Sim2017]: Sim M, Koirala S, Picton D, Strahl H, Hoskisson PA, Rao CV, Gillespie CS, Aldridge PD. 2017. Growth rate control of flagellar assembly in *Escherichia coli* strain RP437. Scientific Reports 7:41189. [Available online](https://www.nature.com/articles/srep41189#:~:text=Escherichia%20coli%20is%20a%20prominent,distributed%20across%20the%20cell%20surface.)

[^Baker2005]: Baker MD, Wolanin PM, Stock JB. 2005. Signal transduction in bacterial chemotaxis. BioEssays 28:9-22. [Available online](https://pubmed.ncbi.nlm.nih.gov/16369945/)

[^Weis1990]: Weis RM, Koshland DE. 1990. Chemotaxis in *Escherichia coli* proceeds efficiently from different initial tumble frequencies. Journal of Bacteriology 172:2. [Available online](https://jb.asm.org/content/jb/172/2/1099.full.pdf)

[^Berg2000]: Berg HC. 2000. Motile behavior of bacteria. Physics today 53(1):24. [Available online](https://physicstoday.scitation.org/doi/pdf/10.1063/1.882934)

[^Achouri2015]: Achouri S, Wright JA, Evans L, Macleod C, Fraser G, Cicuta P, Bryant CE. 2015. The frequency and duration of *Salmonella* macrophage adhesion events determines infection efficiency. Philosophical transactions B 370(1661). [Available online](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4275903/)

[^Turner2016]: Turner L, Ping L, Neubauer M, Berg HC. 2016. Visualizing flagella while tracking bacteria. Biophysical Journal 111(3):630--639.[Available online](https://pubmed.ncbi.nlm.nih.gov/27508446/)

[^Parkinson2015]: Parkinson JS, Hazelbauer, Falke JJ. 2015. Signaling and sensory adaptation in *Escherichia coli* chemoreceptors: 2015 update. [Available online](https://www.sciencedirect.com/science/article/abs/pii/S0966842X15000578)

[^Yang2019]: Yang W, Cassidy CK, Ames P, Diebolder CA, Schulten K, Luthey-Schulten Z, Parkinson JS, Briegel A. 2019. *In situ* confomraitonal changes of the *Escherichia coli* serine chemoreceptor in different signaling states. mBio. [Available online](https://mbio.asm.org/content/10/4/e00973-19/article-info)

[^Saragosti2001]: Saragosti J, Calvez V, Bournaveas, N, Perthame B, Buguin A, Silberzan P. 2001. Directional persistence of chemotactic bacteria in a traveling concentration wave. PNAS. [Available online](https://www.pnas.org/content/pnas/108/39/16235.full.pdf)
