---
permalink: /prologue/reaction-diffusion
title: "A Reaction-Diffusion Model Generating Turing Patterns"
sidebar:
 nav: "prologue"
toc: true
toc_sticky: true
image: "../assets/images/gray_scott_jupyter_high-res.png"
gallery:
  - url: ../assets/images/reaction-diffusion_three_reactions_before.png
    image_path: ../assets/images/600px/reaction-diffusion_three_reactions_before.png
    alt: "Before picture of reaction-diffusion system"
    title: "A collection of particles in our reaction-diffusion system."
  - url: ../assets/images/reaction-diffusion_three_reactions_after.png
    image_path: ../assets/images/600px/reaction-diffusion_three_reactions_after.png
    alt: "After picture of reaction-diffusion system"
    title: "The system after some A particles are fed into the system, some B particles are killed, and the collision of an A particle and two B particles produces a third B particle."
---

## From random walks to reaction-diffusion

In the [previous lesson](random_walk), we introduced the model of a particle randomly walking through a medium. But what exactly do random walks have to do with Alan Turing and zebras?

Turing's insight was that remarkable high-level patterns could arise if we combine particle diffusion with a chemical reaction in which colliding particles interact with each other. Such a model is called a **reaction-diffusion system**, and the emergent patterns are called **Turing patterns** in Turing's honor.

We will consider a reaction-diffusion system having two types of particles, *A* and *B*. The system is not explicitly a predator-prey relationship, but you may like to think of the *A* particles as prey and the *B* particles as predators for reasons that will become clear soon.

Both types of particles diffuse randomly through the plane, but the *A* particles diffuse more quickly than the *B* particles.  In the simulation that follows, we will assume that *A* particles diffuse twice as quickly as *B* particles. In terms of our random walk model, this faster rate of diffusion means that in a single "step", an *A* particle moves twice as far as a *B* particle.

**STOP**: Say that we release one *A* particle and one *B* particle at the same location. If the two particles move via random walks, and the rate of diffusion of *A* is twice as fast, then on average how much farther from the origin will *A* be than *B* after *n* steps?
{: .notice--primary}

We now will add some reactions to our system. The *A* particles are added into the system at some constant **feed rate** *f*. As a result of the feed reaction, the concentration of the *A* particles increases by a constant number in each time step.

**Note:** We will work with a two-dimensional simulation, but in a three-dimensional system, the units of *f* would be in mol/L/s, which means that every second, there are *f* moles of particles added to the system for every liter of volume. (Recall from your chemistry class long ago that one mole is 6.02214076 · 10<sup>23</sup> particles, called Avogadro's number.)
{: .notice--warning}

There is also a **kill rate** constant *k* dictating the rate of removal of *B* particles. As a result of the kill reaction, the number of *B* particles in the system will decrease by a factor of *k* in a given time step. That is, the more *B* particles that are present, the more *B* particles will be removed.

Finally, our reaction-diffusion system includes the following reaction involving both particle types. The particles on the left side of this reaction are called **reactants** and the particles on the right side are called **products**.

<p><center><em>A</em> + 2<em>B</em> → 3<em>B</em></center></p>

To simulate this reaction on a particle level, if an *A* particle and two *B* particles collide with each other, then the *A* particle has some fixed probability of being replaced by a third *B* particle. This probability dictates the *rate* at which this reaction occurs, denoted *r*.

This third reaction is why we compared *A* to prey and *B* to predators, since we may like to conceptualize the reaction as two *B* particles consuming an *A* particle and producing an offspring *B* particle.

The three reactions defining our system are summarized by the figure below.

{% include gallery caption="Visualization of our reaction-diffusion system. (Left) The system contains both types of particles and two collisions. (Right) Two of the A particles are fed into the system, two of the B particles die out, and a B particle replaces an A particle after the collision of three particles." %}

Before continuing, we call your attention to a slight difference between the feed and kill reactions. In the former, the number of *A* particles increases by a constant number in each time step. In the latter, the number of *B* particles decreases by a constant factor multiplied by the current number of *B* particles. If we were using calculus to model this system, then letting [*A*] and [*B*] denote the concentrations of the two particle types, we can write

<p><center>
<em>d</em>[<em>A</em>]/<em>dt</em> = <em>f</em>
</center></p>

and

<p><center>
<em>d</em>[<em>B</em>]/<em>dt</em> = -<em>k</em> · [<em>B</em>].
</center></p>

## Parameters are omnipresent in biological modeling

Before building a simulation corresponding to our reaction-diffusion model, we point out that the results of the simulation can vary depending upon a few things.

A **parameter** is a variable quantity used as input to a model. Parameters are inevitable in biological modeling (and data science in general), and as we will see, changing parameters can cause major changes in the behavior of a system.

Four parameters are relevant to our reaction-diffusion system. Three of these parameters are the feed rate (*f*) of *A* particles, the kill rate of the *B* particles (*k*), and the rate of the predator-prey reaction (*r*). The final parameter of interest corresponds to the diffusion rate (i.e., speeds) of the the *B* particles. Once this diffusion rate is set, the diffusion rate of *A* particles must be twice that of the *B* particles.

We think of all these parameters as dials that we can turn, observing how the system changes as a result. For example, if we raise the diffusion rate, then the particles will be moving around and bouncing into each other more, which means that we will see more of the reaction *A* + 2*B* → 3*B*.

**STOP:** What will happen as we increase or decrease the feed rate *f*? What about the kill rate *k*?
{: .notice--primary}

A reaction like *A* + 2*B* → 3*B* is typically thought of as occurring at a **bulk reaction rate**, which is the total number of reactions occurring as a function of the concentration of reactants. In the following tutorial, CellBlender uses the MCell software to simulate our reaction-diffusion model; MCell is built upon some advanced probabilistic methods that allow it to use the bulk reaction rate to determine the probability that a reaction will happen if the particles needed as reactants collide.

The same goes for the feed and kill reactions; new *A* particles are formed, and old *B* particles are destroyed, via probabilities that are computed from reaction rates. For now, you can think of the rate of a reaction as directly related to its probability of occurring.

In the following tutorial, we will initiate our reaction-diffusion system with a uniform concentration of *A* particles spread across the grid and a tightly packed collection of *B* particles in the center of the grid. When we return from this tutorial, we will see what patterns form, if any.

[Visit tutorial](turing-cellblender){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

## Tuning reaction-diffusion parameters produces different Turing patterns

For some parameter values, our reaction-diffusion system is not particularly interesting.  For example, the following animation is produced when using parameter rates in CellBlender of *f* = 1000 and *k* = 500,000. It shows that if the kill rate is too high, then the *B* particles will die out more quickly than they can be replenished by the reaction with *A* particles, and so only *A* particles will be left. In this animation, *A* particles have been colored green, and *B* particles have been colored red.

**Note:** Some of the videos in this lesson are short because we can find the end result behavior of the system with only a short simulation, and the videos are very computationally intensive to generate due to the number of particles simulated.
{: .notice--warning}

{% include video id="MOO0fmwoz7E" provider="youtube" %}

On the other hand, if *f* is too high, then there will be an increase in the concentration of *A* particles. However, there will also be more interactions between *A* particles and pairs of *B* particles, and so we will see an explosion in the number of predators. The following simulation has the parameters *f* = 1,000,000 and *k* = 100,000.

{% include video id="ayvWHWBCg70" provider="youtube" %}

The interesting behavior in this system lies in a sweet spot of the parameters *f* and *k*. For example, consider the following visualization when *f* is equal to 100,000 and *k* is equal to 200,000. We see a very clear stripe of predators expanding outward against a background of prey, with subsequent stripes appearing at locations where there is a critical mass of predators to interact with each other.

{% include video id="W_eCGTlgi4k" provider="youtube" %}

When we hold *k* fixed and increase *f* to 140,000, the higher feed rate increases the likelihood of *B* particles encountering *A* particles, and so we see even more waves of *A* cascades.  Note the clear red-green stripes that have appeared by the end of the movie.

{% include video id="I5wyKpIWgrE" provider="youtube" %}

As *f* approaches *k*, the stripe structure becomes chaotic and breaks down because there are so many pockets of *B* particles that these particles constantly collide and mix with each other. The following animation shows the result of raising *f* to 175,000.

{% include video id="CM0JUzRn4X8" provider="youtube" %}

Once *f* and *k* are equal, the stripes will disappear. We might expect this to mean that the *B* particles will be uniformly distributed across a background of *A* particles. But what we see is that after an initial outward explosion of *B* particles, the system produces a mottled background, with pockets having higher or lower concentration of *B*. Pay attention to the following video at a point late in the animation. Although the concentrations of the particles are still changing, there is much less large-scale change than in earlier videos. If we freeze the video, our eye cannot help but see patterns of red and green clusters that resemble spots (a more appropriate term would be mottling).

{% include video id="Pva4e0w7i24" provider="youtube" %}

You may still be skeptical, since the patterns above do not have the concrete boundaries that we would expect of animal stripes and spots. Yet when we zoom into the skin of an animal like the zebrafish, we see that the patterns we infer on a higher level are in fact the net result of many individual points, and that the colors of these points show a great deal of variety. The figure below shows an example of this effect for zebrafish skin.

[![image-center](../assets/images/600px/zebrafish_zoom.jpg){: .align-center}](../assets/images/zebrafish_zoom.jpg)
Zooming in on the striped skin of a zebrafish shows that each stripe is formed of thousands of differently colored cells, and that the boundaries of the stripes are more variable than they seem at lower resolution. Courtesy: JenniferOwen, Wikimedia Commons (adapted by Kit Yates).
{: style="font-size: medium;"}


## Turing's patterns and Klüver's hallucinations

When you look at the simulations above, an adjective that may have come to mind is  "trippy". This is no accident. Research dating all the way back to the 1920s has studied the patterns that we see during visual hallucinations, which Heinrich Klüver named **form constants** after studying patients who had taken mescaline.[^kluver] Form constants, which include cobwebs, tunnels, and spirals, occur across many individuals regardless of the cause of the hallucinations.

Over five decades after Klüver's work, researchers would determine that form constants having different shapes originate from simpler *linear* stripes of cellular activation patterns in the retina. The retina is circular, but the brain needs to convert this cellular image into a rectangular field of view; as a result, when the linear patterns are passed to the visual cortex, the hallucinating brain contorts them into the spirals and whirls that we see.[^cowan]

Yet this research had essentially replaced one question with another: why does hallucination cause *patterns* of cellular activation in the retina? This question is still unresolved, but some researchers[^quanta] believe that the linear patterns produced by hallucinations in the retina are in fact Turing patterns and can be explained by a reaction-diffusion model of firing neurons.

## Streamlining our simulations

Despite using advanced modeling and rendering software that has undergone years of development and optimization, each of the visualizations in this lesson took several hours to render. These simulations are computationally intensive because they require us to track the movement of tens of thousands of particles over thousands of generations.

We wonder if it is possible to build a model of Turing patterns that does not require so much computational overhead. In other words, is there a simplification that we can make to our model that will run faster but still produce Turing patterns? We will turn our attention to this question in the next section.

[Next lesson](gray-scott){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

[^cowan]: G.B. Ermentrout and J.D. Cowan. "A Mathematical Theory of Visual Hallucination Patterns". *Biol. Cybernetics* 34, 137-150 (1979).

[^kluver]: H. Klüver. *Mescal and Mechanisms of Hallucinations*. University of Chicago Press, 1966.

[^quanta]: J. Ouellette. "A Math Theory for Why People Hallucinate". *Quanta Magazine*, July 30, 2018. https://www.quantamagazine.org/a-math-theory-for-why-people-hallucinate-20180730/