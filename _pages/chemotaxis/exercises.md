---
permalink: /chemotaxis/exercises
title: "Exercises"
description: "Hands-on exercises in chemotaxis, stochastic modeling, and biochemical networks to reinforce scientific and computational skills."
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

## How does *E. coli* respond to repellents?

Just as *E. coli* has receptors that bind to attractant ligands, it has other receptors that bind to **repellent** ligands. Attractant-ligand binding causes an increase in the autophosphorylation of CheA, but repellent-ligand binding causes a decrease in the autophosphorylation of CheA.

**Exercise:** Based on what we have learned in this module about how *E. coli* and other bacteria act in the presence of an attractant, how do you think that bacteria respond in the presence of a repellent, and how do you think that the bacterium adjusts to relative changes of the repellent?
{: .notice--success}

We learned that *E. coli* is likely to run for longer when traveling up an attractant gradient, which in the long run means that it is able to find attractant sources despite running in random directions. For the same reason, *E. coli* is likely to run for longer when traveling *down* a repellent gradient.

**Exercise:** Adapt the "chemotactic" random walk strategy that we implemented in a [tutorial](tutorial_walk) to handle the fact that bacteria sensing a relative decrease in repellent concentration will have longer runs before tumbling. Simulate this strategy for a collection of particles placed near a "goal" representing a repellent source. What is the average distance of the particles from the goal? How does it compare to the average distance to the goal for a collection of particles following a pure random walk?
{: .notice--success}

## Traveling down an attractant gradient.

A related question to how a bacterium responds to a repellent is how it behaves when traveling *away* from an attractant, i.e., down an attractant gradient. To model this situation, we will still use the function \[*L*\] = $$l_o \cdot e^{k \cdot t}$$ from our [tutorial](tutorial_gradient) modeling a bacterium traveling up an attractant gradient, but we will now assume that *k* is negative so that the concentration is decaying exponentially.

**Exercise:** Adapt [the gradient simulation](tutorial_gradient) to model the concentration of phosphorylated CheY over time for an exponentially decaying attractant concentration. How does the plot of phosphorylated CheY change as *k* gets more negative?
{: .notice--success}

## What if *E. coli* has multiple attractant sources?

Not only can *E. coli* sense both repellents and attractants, but it can detect *more than one* attractant gradient at the same time.  This function has a clear evolutionary purpose in a bacterial environment containing multiple dispersed food sources. We will now explore whether the chemotaxis mechanism allows cells to navigate through heterogeneous nutrient distributions.

**Exercise:** Modify our model from the [adaptation tutorial](tutorial_adaptation) to reflect two types of receptor, each specific to its own ligand (call them *A* and *B*). Assume that we have 3500 receptor molecules of each type. (**Hint:** you will not need to have additional molecules in addition to `L` and `T`. Instead, specify additional states for the two molecules that we already have; for example `L(t,Lig~A)` should only bind with `T(l,Lig~A)`. Don't forget to update `species` as well!)
{: .notice--success}

In the previous exercise, the cell adapts to the presence of two different attractants at the same time. We now consider what will happen if we only add *B* molecules once the cell has already adapted to *A* molecules.

**Exercise:** Change your model by assuming that after the cell adapts to 1,000,000 molecules of *A*, 1,000,000 molecules of *B* are added. Observe the concentration of phosphorylated CheY. Is the cell able to respond to the influx of *B* after adapting to the concentration of ligand *A*? Why do you think that the change in CheY phosphorylation is different from the scenario in which we release the two different ligands concurrently? (The hint for the previous exercise also applies to this exercise.)
{: .notice--success}

In the [chemotactic walk tutorial](tutorial_walk), we used a concentration gradient that grew exponentially toward a single goal. Specifically, if *L*(*x*, *y*) was the concentration of ligand at (*x*, *y*), then we set *L*(*x*,*y*) = 100 · 10<sup>6 · (1-*d*/*D*)</sup>, where *d* is the distance from (*x*, *y*) to the goal, and *D* is the distance from the origin to the goal (we used a goal of (1500, 1500)).

To generalize this simulation to an environment with more than one attractant source, we will include another goal at (-1500, 1500). The new ligand concentration formula will be *L*(*x*, *y*) = 100 · 10<sup>6 · (1-*d*<sub>1</sub>/*D*<sub>1</sub>)</sup> + 100 · 10<sup>6 · (1-*d*<sub>2</sub>/*D*<sub>2</sub>)</sup>, where *d*<sub>1</sub> is the distance from (*x*, *y*) to the goal at (1500, 1500), *d*<sub>2</sub> is the distance from (*x*, *y*) to the goal at (-1500, 1500), and *D*<sub>1</sub> and *D*<sub>2</sub> are the distances from the origin to the two respective goals.

**Exercise:** Change the chemotactic walk simulation so that it includes the two goals, and visualize the trajectories of several particles using a background time between tumbles (*t*<sub>0</sub>) equal to one second. Are the particles able to find one of the goals? How long does it take them, and how does the result compare against the case of a single goal?
{: .notice--success}

**Exercise:** Vary the tumbling frequency according to the parameters given in the [chemotactic walk tutorial](tutorial_walk) to see how tumbling frequency influences the average distance of a cell to the closer of the two goals. As in the tutorial, run your simulation for 500 particles with the default time between tumbles (*t*<sub>0</sub>) equal to each of 0.2, 0.5, 1.0, 2.0 and 5.0 seconds.
{: .notice--success}

## Changing the reorientation angle of *E. coli*

In the [conclusion](conclusion), we mentioned that when *E. coli* tumbles, the degree of reorientation is not uniformly random from 0° to 360°. Rather, research has shown that it follows a normal distribution with mean of 68° (1.19 radians) and standard deviation of 36° (0.63 radians).

**Exercise:** Modify your model from the [chemotactic walk tutorial](tutorial_walk) to change the random uniform sampling to this "smarter" sampling. Compare the chemotactic walk strategy and this smarter strategy by calculating the mean and standard deviation of each cell's distance to the goal for 500 simulated cells with the default time between tumbles (*t*<sub>0</sub>) equal to each of 0.2, 0.5, 1.0, 2.0, and 5.0. Do these simulated cells do a better job of finding the goal compared to those of the original chemotactic strategy?
{: .notice--success}

More recent research suggests that when a bacterium is moving up an attractant gradient, the degree of reorientation may be even smaller[^Saragosti2011]. Do you think that such a reorientation strategy would improve a cell's chemotaxis response?

**Exercise:** Modify your model from the previous exercise so that if the cell has just made a move of increasing ligand concentration, then its mean reorientation angle is 0.1 radians smaller. Calculate the mean and standard deviation of each cell's distance to the goal for 500 cells with the default time between tumbles (*t*<sub>0</sub>) equal to each of 0.2, 0.5, 1.0, 2.0, and 5.0. Do the cells find the goal faster than they did in the preceding exercise?
{: .notice--success}


## Can't get enough BioNetGen?

As we have seen in this module, rule-based modeling is successful at simulating systems that involve a large number of species and particles but can be summarized with a small set of rules.

**Polymerization** reactions offer another example of such a system. Polymerization is the process by which solitary **monomer** molecules combine into chains called **polymers**. Biological polymers are everywhere, from DNA (formed of monomer nucleotides) to proteins (formed of monomer amino acids) to lipids (formed of monomer fatty acids). For a nonbiological example, polyvinyl chloride (which lends its name to "PVC pipe") is a polymer comprising many vinyl molymers.

We would like to simulate the polymerization of copies of a monomer *A* to form a polymer *AAAAAA*..., where the length of the polymer is allowed to vary. When we simulate this process, we are curious what the distribution of the polymer lengths will be.

We will write our polymer reaction as *A*<sub><em>m</em></sub> + *A*<sub><em>n</em></sub> -> *A*<sub><em>m</em>+<em>n</em></sub>, where *A*<sub>m</sub> denotes a polymer consisting of *m* copies of *A*. Using classical reactions, this single rule would require an infinite number of reactions; will rule-based modeling and BioNetGen come to our rescue?

There are two sites on the monomer *A* that are involved in a polymerization reaction: the "head" and the "tail". For two monomers to bind, we need the head on one monomer and the tail on another to both be free. The following BioNetGen model is taken from the [BioNetGen tutorials](https://github.com/RuleWorld/BNGTutorial/blob/master/CBNGL/BLBR.bngl).

Create a new BioNetGen file and save it as `polymers.bngl`. We will have only one molecule type: `A(h,t)`; the `h` and `t` labels indicate the "head" and "tail" binding sites, respectively. To model polymerization, we will need to represent four reaction rules:

1. initializing the series of polymerization reactions: two unbound copies of `A` form an initial **dimer**, or a polymer with just two monomers;
2. adding an unbound `A` to the "tail" of an existing polymer;
3. adding an existing polymer to the "tail" of an unbound `A`; and
4. adding an existing polymer to the "tail" of another polymer.

To select any species that is bound at a component, we use the notation `!+`; for example, `A(h!+,t)` will select any `A` whose "head" is bound, whether it belongs to a chain of one or one million monomers.

We will assume that the forward and reverse rates for each reaction occur at the same rate. For simplicity, we will set all forward and reverse reaction rates to be equal to 0.01.

We will initialize our simulation with 1000 unbound *A* monomers and observe the formation of polymer chains of a few different lengths (1, 2, 3, 5, 10, and 20).  To do so, we can use an "observable" `A == n` to denote that a polymer contains *n* copies of `A`. We need to use `Species` instead of `Molecules` to select polymer patterns.

~~~ ruby

begin species
	A(h,t) 1000
end species

begin observables
	Species A1 A==1
	Species A2 A==2
	Species A3 A==3
	Species A5 A==5
	Species A10 A==10
	Species A20 A==20
	Species ALong A>=30
end observables
~~~

For this model, the infinite number of possible interactions will slow down the Gillespie algorithm. For that reason, we will use an alternative to the Gillespie algorithm called **network-free simulation**, which tracks individual particles.

After building the model, we can run our simulation with the following command (note that we do not need the `generate_network()` command):

~~~ ruby
simulate({method=>"nf", t_end=>100, n_steps=>1000})
~~~

**Exercise:** Run the simulation. How do the concentrations of polymers vary according to the lengths of the polymers?
{: .notice--success}

**Exercise:** What happens to polymer concentrations as we change the polymer binding and dissociation rates? Does your observation reflect what you might expect?
{: .notice--success}

[^Saragosti2011]: Saragosti J, Calvez V, Bournaveas, N, Perthame B, Buguin A, Silberzan P. 2011. Directional persistence of chemotactic bacteria in a traveling concentration wave. PNAS. [Available online](https://www.pnas.org/content/pnas/108/39/16235.full.pdf)

[^Saragosti2012]: Saragosti J., Siberzan P., Buguin A. 2012. Modeling *E. coli* tumbles by rotational diffusion. Implications for chemotaxis. PLoS One 7(4):e35412. [available online](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3329434/).

[^Berg1972]: Berg HC, Brown DA. 1972. Chemotaxis in Escherichia coli analysed by three-dimensional tracking. Nature. [Available online](https://www.nature.com/articles/239500a0)

[^Baker2005]: Baker MD, Wolanin PM, Stock JB. 2005. Signal transduction in bacterial chemotaxis. BioEssays 28:9-22. [Available online](https://pubmed.ncbi.nlm.nih.gov/16369945/)


[Next module](../coronavirus/home){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}
