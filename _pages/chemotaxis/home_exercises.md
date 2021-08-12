---
permalink: /chemotaxis/home_exercise
title: "Exercises"
sidebar:
 nav: "chemotaxis"
toc: true
toc_sticky: true
image: "../assets/images/chemotaxis_traj_1.0.png"
---

## How does *E. coli* respond to repellents?

Just as *E. coli* has receptors that bond to attractant ligands, it has other receptors that can bond to **repellent** ligands.

**Exercise:** Based on what we have learned in this module about how *E. coli* and other bacteria act in the presence of an attractant, what do you think that the chemotaxis response is in the presence of a repellent? How do you think that the bacterium adjusts to relative changes of the repellent?
{: .notice--info}

In the [phosphorylation tutorial](tutorial_phos), we defined the rate constant for free CheA autophosphorylation `k_T_phos`, and specified that when the receptor complex is bound to an attractant molecule, the autophosphorylation rate constant decreases to `0.2 · k_T_phos`. To model a receptor complex bound to a repellent molecule, we will need to change the autophosphorylation rate so that it is greater than `k_T_phos`.

**Exercise:** Adapt the BioNetGen model so that the autophosphorylation rate constant is `5 · k_T_phos`. then run your simulation for 3 seconds with `L0 = 5000` and `L0 = 1e5` repellent ligand molecules added at the beginning of the simulation. How does the concentration of phosphorylated CheY change? What do you conclude?
{: .notice--info}

## What if *E. coli* has multiple attractant sources?

Not only can *E. coli* sense both repellents and attractants, but it can detect *more than one* attractant gradient at the same time.  This function has a clear evolutionary purpose in a bacterial environment of multiple sparsely populated food sources. In this section, we will explore whether the chemotaxis mechanism allows cells to navigate through heterogeneous nutrient distributions.

**Exercise:** Modify our model from the [adaptation tutorial](tutorial_adaptation) to reflect two types of receptor, each specific to its own ligand (call them *A* and *B*). Assume that we have 3500 receptor molecules of each type. (**Hint:** you will not need to have additional molecules in addition to `L` and `T`. Instead, specify additional states for the two molecules that we already have; for example `L(t,Lig~A)` should only bind with `T(l,Lig~A)`. Don't forget to update `seed species` as well!)
{: .notice--info}

In the previous exercise, the cell adapts to the presence of two different attractants at the same time. We now consider what will happen if we only add *B* molecules of *B* once the cell has already adapted to *A* molecules.

**Exercise:** Change your model by assuming that after the cell adapts to `1e6` molecules of *A*, `1e6` molecules of *B* are added. Observe the concentration of phosphorylated CheY. Is the cell able to respond to *B* after adapting to the concentration of ligand *A*? Why do you think that the change in CheY phosphorylation different from the scenario in which we release the two different ligands concurrently? (The hint for the previous exercise also applies to this exercise.)
{: .notice--info}

In the [chemotactic walk tutorial](tutorial_walk), we used a concentration gradient that grew exponentially toward a single goal. Specifically, if *L*(*x*, *y*) was the concentration of ligand at (*x*, *y*), we set *L*(*x*,*y*) = 100 · 10<sup>8 · (1-*d*/*D*)</sup>, where *d* is the distance from (*x*, *y*) to the goal, and *D* is the distance from the origin to the goal (we used a goal of (1500, 1500)).

To simulate an environment with more than one food source, we will include another goal at (-1500, 1500). The new ligand concentration formula will be *L*(*x*, *y*) = 100 · 10<sup>8 · (1-*d*<sub>1</sub>/*D*<sub>1</sub>)</sup> + 100 · 10<sup>8 · (1-*d*<sub>2</sub>/*D*<sub>2</sub>)</sup>, where *d*<sub>1</sub> is the distance from (*x*, *y*) to the goal at (1500, 1500), *d*<sub>2</sub> is the distance from (*x*, *y*) to the goal at (-1500, 1500), and *D*<sub>1</sub> and *D*<sub>2</sub> are the distances from the origin to the two respective goals.

**Exercise:** Change the chemotactic walk simulation so that it includes the two goals, and visualize the trajectories of several cells using a background tumbling frequency of once every second. Are the cells able to find one of the goals? How long does it take them?
{: .notice--info}

**Exercise:** Vary the tumbling frequency according to the parameters given in the [chemotactic walk tutorial](tutorial_walk) to see how tumbling frequency influences the average distance of a cell to the closer of the two goals. As in the tutorial, run your simulation for 500 cells.
{: .notice--info}

## Is *E. coli* even smarter than we think?

Earlier in this module, we said that when *E. coli* tumbles, the degree of reorientation is actually not uniformly random from 0° to 360°. With background ligand concentration, the degree of reorientation approximately follows a normal distribution with mean of 68° (or equivalently, 1.19π) and standard deviation of 36° (equivalently, 0.63π). Recent research suggests that when the cell is moving up the gradient, the degree of reorientation is smaller [^Saragosti2011]. Although currently we don't have definitive measurements for the smaller angle of reorientation when moving up the gradient, let's specify it is 0.1 π smaller. Before actually implementing, what do you predict this reorientation strategy would change the chemotaxis responses? Do you think it brings some evolutionary advantages?

**Exercise:** Please modify your model from [chemotactic walk tutorial](tutorial_walk) to change the random uniform sampling to this "smarter" sampling. Please quantitatively compare the performance for the chemotactic walk strategy, and this smarter strategy by calculating the mean and standard deviation of each cell's distance to the goal for 500 cells with `time_exp = [0.2, 0.5, 1.0, 2.0, 5.0]`. How much faster can the cells find the goal? Why faster?
{: .notice--info}

## Can't get enough BioNetGen?

As we have seen in this module, BioNetGen is very good at simulating systems that involve a large number of species and particles but can be summarized with a small set of rules. Polymerization reactions offer another good example of such a system.

**Exercise:** Imagine you were to implement a BioNetGen simulation for a hypothetical reaction system. What do you need to know about the system before implementing? What do you need to define in your program?
{: .notice--info}

**Polymerization** is the process by which **monomer** molecules combine into chains called **polymers**. Biological polymers are everywhere, from DNA (formed of monomer nucleotides) to proteins (formed of monomer amino acids) to lipids (formed of monomer fatty acids). For another example, polyvinyl chloride (PVC) is formed from many vinyl monomers.

We would like to simulate the polymerization of copies of a monomer *A* to form polymer *AAAAAA*..., where the length of the polymer is allowed to vary. To do so, we will write our reaction as *A*<sub><em>m</em></sub> + *A*<sub><em>n</em></sub> -> *A*<sub><em>m</em>+<em>n</em></sub>, where here *A*<sub>m</sub> denotes a polymer consisting of *m* copies of *A*. Using classical reaction rules, this would require an infinite number of reactions; will BioNetGen come to our rescue?

There are two sites on the monomer *A* that are involved in a polymerization reaction: the "head" and the "tail". We need the head on one monomer and the tail on another to be free for these two monomers to bind. The following BioNetGen model is inspired by the [BLBR model in official BioNetGen tutorials](https://github.com/RuleWorld/BNGTutorial/blob/master/CBNGL/BLBR.bngl).

Open a new `.bngl` file and save it as `polymers.bngl`. We will have only one molecule type: `A(h,t)`; the `h` and `t` indicating the "head" and "tail" binding sites, respectively. We will need to represent four reaction rules:

1. initializing the series of polymerization reactions: two unbound `A` forms an initial **dimer**, or two monomers joined together;
2. adding an unbound `A` to the "tail" of an existing polymer;
3. adding an existing polymer to the "tail" of an unbound `A`; and
4. adding an existing polymer to the "tail" of another polymer.

To select any species that is bound at a component, use the notation `!+`; for example, `A(h!+,t)` will select any `A` bound at "head", whether it is bound in a chain of one or one million monomers.

We will assume that all forward and reverse rates for each reaction occur at the same rate. For simplicity, we will set all forward and reverse reaction rates to be equal to 0.01.

What will our distribution of polymer lengths be? We will initialize our simulation with 1000 unbound *A* monomers and observe the formation of polymer chains of a few different lengths (1, 2, 3, 5, 10, and 20).  To do so, we select the pattern of containing *n* copies of *A* with the notation `A == x`. `Species` instead of `Molecules` is required for selecting polymer patterns.

~~~ ruby

begin seed species
	A(h,t) 1000
end seed species

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

For this model, we will try an alternative to the Gillespie (SSA) algorithm called **network-free simulation**. This approach is similar to the Gillespie algorithm, but instead of simulating transitions between states of the whole *system*, it tracks individual *particles*. In this polymerization model, the possible number of reactions is much higher than we had in chemotaxis models - we can have two polymers of any length reacting at any step, which slows down the Gillespie algorithm. In this case, we actually do not have very many particles compared to the (infinite) number of possible reactions, and so tracking each particle will be much faster for this model.

After building the model, run your simulation with the following command (note that we do not need the `generate_network()` command):

~~~ ruby
simulate({method=>"nf", t_end=>100, n_steps=>1000})
~~~

**Exercise:**What happens to the concentration of shorter polymers? What about the longer polymers? Try adjusting the lengths of the polymers that we are interested in. What happens if we also tweak the reaction rates so that bonding is a little more likely than dissociation? What if dissociation is more likely? Does this reflect what you would guess?
{: .notice--info}


[^Saragosti2011]: Saragosti J, Calvez V, Bournaveas, N, Perthame B, Buguin A, Silberzan P. 2011. Directional persistence of chemotactic bacteria in a traveling concentration wave. PNAS. [Available online](https://www.pnas.org/content/pnas/108/39/16235.full.pdf)

[^Saragosti2012]: Saragosti J., Siberzan P., Buguin A. 2012. Modeling *E. coli* tumbles by rotational diffusion. Implications for chemotaxis. PLoS One 7(4):e35412. [available online](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3329434/).

[^Berg1972]: Berg HC, Brown DA. 1972. Chemotaxis in Escherichia coli analysed by three-dimensional tracking. Nature. [Available online](https://www.nature.com/articles/239500a0)

[^Baker2005]: Baker MD, Wolanin PM, Stock JB. 2005. Signal transduction in bacterial chemotaxis. BioEssays 28:9-22. [Available online](https://pubmed.ncbi.nlm.nih.gov/16369945/)


[Next module](../coronavirus/home){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}
