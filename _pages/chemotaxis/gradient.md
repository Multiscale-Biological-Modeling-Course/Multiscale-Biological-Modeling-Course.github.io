---
permalink: /chemotaxis/gradient
title: "Modeling a Bacterium's Response to an Attractant Gradient"
sidebar:
 nav: "chemotaxis"
toc: true
toc_sticky: true
image: "../assets/images/chemotaxis_traj_1.0.png"
---

## Traveling up an attractant gradient

In the [previous lesson](adaptation), we saw that *E. coli* is able to adapt its default tumbling frequency to the current background concentration of attractant. To model this behavior, we used the Gillespie algorithm and the rule-based language of BioNetGen to simulate an instantaneous increase in concentration from one stable concentration level to another.

Yet imagine a glucose cube in an aqueous solution. As the cube dissolves, a **gradient** will form, with a decreasing glucose concentration that radiates outward from the cube. How will the tumbling frequency of *E. coli* change if the bacterium finds itself in an environment of an attractant gradient?  Will the tumbling frequency decrease continuously as well, or will the methylation pathways mentioned in the previous lesson cause more complicated behavior? And once the cell reaches a region of high attractant concentration, will its default tumbling frequency stabilize to the same steady state?

In this lesson, we will modify our model from the previous lesson by increasing the concentration of the attractant ligand at an exponential rate and seeing how the concentration of phosphorylated CheY changes. This model will simulate a bacterium traveling up an attractant gradient toward an attractant. Moreover, we will examine how the concentration of phosphorylated CheY changes as we change the gradient's "steepness", or the rate at which attractant ligand is increasing. Visit the following tutorial if you're interested in following our adjustments for yourself.

[Visit tutorial](tutorial_gradient){: .btn .btn--info .btn--large}
{: style="font-size: 100%; text-align: center;"}

## Steady state tumbling frequency is robust

Recall that we used the expression [*L*] to denote the concentration of ligand *L* and *l*<sub>0</sub> to denote the initial concentration of the ligand. To model a ligand concentration that is increasing exponentially, we will use the function [*L*] = *l*<sub>0</sub> · *e*<sup>*k* · t</sup>, where *t* is the time and *k* is a parameter dictating exponential growth. The parameter *k* represents the steepness of the gradient, since the higher the value of *k*, the faster the growth in the ligand concentration.

For example, the following figure shows the concentration over time of phosphorylated CheY (shown in blue) when *l*<sub>0</sub> = 1000 and *k* = 0.1. The concentration of phosphorylated CheY, and therefore the tumbling frequency, still decreases sharply as the ligand concentration increases, but after all ligands become bound to receptors (shown by the plateau in the red curve), the methylation of receptors causes the concentration of phosphorylated CheY to return to its equilibrium. In other words, for these values of *l*<sub>0</sub> and *k*, the outcome is similar to when we provided an instantaneous increase in ligand, although the cell takes longer to reach its minimum concentration of phosphorylated CheY because the attractant concentration is increasing gradually.

[![image-center](../assets/images/600px/chemotaxis_tutorial_addition01.png){: .align-center}](../assets/images/chemotaxis_tutorial_addition01.png)
Plots of relevant molecule concentrations in our model when the concentration of ligand grows exponentially with *l*<sub>0</sub> = 1000 and *k* = 0.1. The concentration of bound ligand (shown in red) quickly hits saturation, which causes a minimum in phosphorylated CheY (and therefore a low tumbling frequency). To respond, the cell increases the methylation of receptors, which boosts the concentration of phosphorylated CheY back to equilibrium.
{: style="font-size: medium;"}

Our next question is what happens as we change *k*, the growth rate of the ligand concentration. The following figure shows the results of multiple simulations in which we vary the growth parameter *k* and plot the concentration of phosphorylated CheY over time. The larger the value of *k*, the faster the increase in receptor binding, and the steeper the drop in the concentration of phosphorylated CheY.

[![image-center](../assets/images/600px/chemotaxis_tutorial_addition03.png){: .align-center}](../assets/images/chemotaxis_tutorial_addition03.png)
Plots of phosphorylated CheY for different growth rates *k* of the concentration of ligand. The larger the value of *k*, the steeper the initial drop as the concentration of bound ligand becomes saturated, and the faster the concentration of phosphorylated CheY returns to equilibrium.
{: style="font-size: medium;"}

More importantly, the above figure further illustrates the *robustness* of bacterial chemotaxis to the rate of growth in ligand concentration. Whether the growth of the attractant is slow or fast, methylation will always bring the cell back to the same equilibrium concentration of phosphorylated CheY, and therefore the same background tumbling frequency.

## Reversing the attractant gradient

And what if a cell is moving away from an attractant, down a concentration gradient? We would hope that the cell would be able to *increase* its tumbling frequency (i.e., increase the concentration of phosphorylated CheY), and then restore the background tumbling frequency by removing methylation.

To simulate a decreasing gradient, we will model a cell in a high ligand concentration that is already at steady state, meaning that methylation is also elevated. In this case, the ligand concentration will *decay* exponentially, meaning that the ligand concentration is still given by the equation [*L*] = *l*<sub>0</sub> · *e*<sup>*k* · t</sup>, but *k* is negative.

**STOP:** If *k* is negative, how do you think that decreasing the value of *k* will affect the concentration of phosphorylated CheY over time?
{: .notice--primary}

You may like to modify the previous tutorial on your own to account for traveling down an attractant gradient. If not, we are still happy to provide a separate tutorial below.

[Visit tutorial](tutorial_removal){: .btn .btn--info .btn--large}
{: style="font-size: 100%; text-align: center;"}

## Steady state tumbling frequency remains robust when traveling down an attractant gradient

The following figure plots the concentrations of molecules in our model as the concentration of attractant ligand decreases exponentially with *l*<sub>0</sub> equal to 10<sup>7</sup> and *k* equal to -0.3. As the ligand concentration decreases, the concentration of bound ligands plummet as bound ligands dissociate and there are not enough free ligands to replace the dissociating ones. In the absence of ligand-receptor binding, CheY is free to phosphorylate, causing a spike in phosphorylated CheY. Demethylation of receptors then causes the concentration of phosphorylated CheY to steadily return back to its equilibrium.

[![image-center](../assets/images/600px/chemotaxis_tutorial_removal01.png){: .align-center}](../assets/images/chemotaxis_tutorial_removal01.png)
Simulating a bacterium traveling down an attractant gradient with *l*<sub>0</sub> = 10<sup>7</sup> and *k* equal to -0.3. Phosphorylated CheY follows the opposite pattern to traveling up an attractant gradient, with the concentration of phosphorylated CheY rising quickly only to slowly decrease to equilibrium due to demethylation.
{: style="font-size: medium;"}

To be thorough, we should also test the robustness of our model to see whether the CheY concentration will return to the same steady state for a variety of values of *k* when *k* is negative. As in the case of an increasing gradient, the figure below shows that the more sudden the change in the concentration of attractant (i.e., the more negative the value of *k*), the sharper the spike. And yet regardless of the value of *k*, methylation does its work to bring the concentration back to the same steady state, which has been confirmed by experimental observations.[^Krembel2015]

[![image-center](../assets/images/600px/chemotaxis_tutorial_removal02.png){: .align-center}](../assets/images/chemotaxis_tutorial_removal02.png)
Varying values of *k* in our exponential decrease in the concentration of attractant ligand produce the same equilibrium concentration of phosphorylated CheY. The smaller the value of *k*, the steeper the initial spike, and the faster the recovery to steady state.
{: style="font-size: medium;"}

## From changing tumbling frequencies to an exploration algorithm

We hope that you have gained an appreciation for the elegant mechanism of bacterial chemotaxis, as well as the power of rule-based modeling and the Gillespie algorithm for simulating a complex biochemical system with a huge number of reactions without the need to keep track of individual particles.

And yet we have missed an important part of the story. *E. coli* has evolved to ensure that if it detects a relative increase in concentration (i.e., an attractant gradient), then it can reduce its tumbling frequency in response. But what we have not explored is *why* this change in the bacterium's tumbling frequency would help it find food in the first place.

After all, according to the run and tumble model, the direction that a bacterium is moving at any point in time is random! So why would a decrease in tumbling frequency help *E. coli* move toward an attractant?

This question is biologically deep and has no immediate intuitive answer. However, in this module's conclusion, we will build a model to explain why *E. coli*'s run and tumble walk algorithm is an extremely clever way of locating resources in an unfamiliar land.

[Next lesson](conclusion){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

[^Krembel2015]: Krembel A., Colin R., Sourijik V. 2015. Importance of multiple methylation sites in *Escherichia coli* chemotaxis. [Available online](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0145582)