---
permalink: /chemotaxis/tutorial_lr
title: "Software Tutorial: Getting Started with BioNetGen and Modeling Ligand-Receptor Dynamics"
description: "Hands-on introduction to BioNetGen: build and simulate ligand-receptor binding dynamics to kick off chemotaxis modeling."
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

This collection of tutorials will gradually build up from scratch a chemotaxis simulation using [BioNetGen](http://bionetgen.org).

In this tutorial, we will:
 - set up BioNetGen;
 - explore several key aspects of BioNetGen modeling: rules, species, simulation method, and parameters
 - use BioNetGen to model ligand-receptor dynamics and compute a steady state concentration of ligands and receptors.

## What is BioNetGen?

In past modules, we have worked with chemical reactions that can be thought of as rules (e.g., "whenever an *X* particle and a *Y* particle collide, replace them with a single *X* particle"). The chemotaxis pathway also can be thought of as a set of biochemical rules specifying a set of mathematical equations dictating molecule concentrations. Our larger goal is to use BioNetGen to translate these rules into a reasonable chemotaxis simulation, then visualize and interpret the results.

In this tutorial, we will focus only on modeling ligand-receptor dynamics, which we will use as a starting point for more advanced modeling later.

## Installation and setup

BioNetGen features a convenient interface via the Microsoft Visual Studio Code editor. To see how to set up and install the necessary software, please visit their [setup and installation page](http://bionetgen.org/install).

<!-- Old Paragraph -->
<!-- [RuleBender](https://github.com/RuleWorld/rulebender/releases/tag/RuleBender-2.3.2) is the graphical interface for BioNetGen. Please [download](https://github.com/RuleWorld/rulebender/releases/tag/RuleBender-2.3.2) the version corresponding to your operating system. Here is a step-by-step [installation guide](https://github.com/RuleWorld/rulebender/blob/master/docs/RuleBender-installation-guide.pdf). -->

## Starting with Ligand-Receptor Dynamics

In this tutorial, we will build our model from scratch. If you like instead, you can download the completed simulation file here:
<a href="../downloads/downloadable/ligand_receptor.bngl" download="ligand_receptor.bngl">ligand_receptor.bngl</a>

In our system, there are only two types of molecules: the ligand (`L`), and the receptor (`T`). (The receptor is in fact a receptor complex because it is attached to additional molecules, which we will elaborate on later). The ligand can bind to the receptor, forming an intermediate, and the complex can also dissociate. We write this reaction as `L + T <-> L.T`, where the formation of the intermediate is called the **forward reaction**, and the dissociation is called the **reverse reaction**.

In our system, which starts with a quantity of free ligands and receptors, the numbers of these free molecules should drop quickly, because free ligands and free receptors are readily to meet each other. After a while, there will be more `L.T` in the system and therefore more dissociation; at the same time, because free `L` and `T` are less abundant, less binding happens. The system will gradually reach a steady state where the rate of `L` and `T` binding equilibrates with `L.T` dissociation.

We will simulate reaching this steady state, which means that we will need to know the following two parameters:

1. The rate of the forward reaction: `k_lr_bind [L][T]`, where `k_lr_bind` is the rate constant.
2. The rate of the reverse reaction:  `k_lr_dis[L.T]`, where `k_lr_dis` is the rate constant.

Equilibrium is reached when `k_lr_bind [L][T]` = `k_lr_dis[L.T]`. Our goal in this tutorial is to use BioNetGen to determine this equilibrium in molecule concentrations as a proof of concept.

To use BioNetGen, first create a folder called `EColiSimulations` in an appropriate location on your computer. Next, open VSCode, and select `File > Open Folder`, and open the folder you just created.

[![Initial BioNetGen file created in VS Code](../assets/images/600px/chemotaxis_tutorial1_VSCode.png){: .align-center loading="lazy"}](../assets/images/chemotaxis_tutorial1_VSCode.png)

In this directory, create a new file by selecting the `File > New Text File`. Save the file as  `ligand_receptor.bngl`. Now you should be able to start building our model in this file using the code that follows in this tutorial.

[![Expanded model shown in Visual Studio Code](../assets/images/600px/chemotaxis_tutorial2_VSCode.png){: .align-center loading="lazy"}](../assets/images/chemotaxis_tutorial2_VSCode.png)

<!-- Old Instructions -->
<!-- First, open RuleBender and select `File > New BioNetGen Project`.

[![Simulation results for first ligand-receptor binding](../assets/images/600px/chemotaxis_tutorial1.png){: .align-center loading="lazy"}](../assets/images/chemotaxis_tutorial1.png)

Save your file as `ligand_receptor.BioNetGenl`. Now you should be able to start coding on line 1.

[![System state after ligand binding event](../assets/images/600px/chemotaxis_tutorial2.png){: .align-center loading="lazy"}](../assets/images/chemotaxis_tutorial2.png) -->

## Specifying molecule types

We will specify everything needed for this tutorial, but if you are interested, reference BioNetGen documentation can be found [here](http://comet.lehman.cuny.edu/griffeth/BioNetGenTutorialFromBioNetWiki.pdf).

To specify our model, add `begin model` and `end model`. Everything below regarding the specification of the model will go between these two lines.

We will have two molecules corresponding to the ligand and receptor *L* and *T* that we denote `L(t)` and `T(l)`, respectively. The `(t)` specifies that molecule `L` contains a binding site with `T`, and the `(l)` specifies a component binding to `L`. We will use these components later when specifying reactions.

We will add the ligand and receptor molecules to our model under a `molecule types` section.

~~~ ruby
begin model

begin molecule types
	L(t)
	T(l)
end molecule types

end model
~~~

## Specifying reaction rules and observables

As discussed in the [main text](gillespie), the ligand-receptor simulation will only need to apply a single bi-directional reaction. To represent the bi-directional reaction *A* + *B* ↔ *C* with forward rate *k*<sub>1</sub> and reverse rate *k*<sub>2</sub>, we would write `A + B <-> C k1, k2`.

Our model consists of one bidirectional reaction and will have a single rule. The left side of this rule will be `L(t) + T(l)`; by specifying `L(t)` and `T(l)`, we indicate to BioNetGen that we are only interested in *unbound* ligand and receptor molecules. If we had wanted to select any ligand molecule, then we would have used `L + T`.

On the right side of the rule, we will have `L(t!1).T(l!1)`, which indicates the formation of the complex. In BioNetGen, the symbol `!` indicates formation of a bond, and a unique character specifies the possible location of this bond. In our case, we use the character `1`, so that the bond is represented by `!1`. The symbol `.` is used to indicate that the two molecules are joined into a complex.

Since the reaction is bidirectional, we will use `k_lr_bind` and `k_lr_dis` to denote the rates of the forward and reverse reactions, respectively. (We will specify values for these parameters later.)

As a result, this reaction is shown below. We name our rule specifying the ligand-receptor reaction `LR`.

~~~ ruby
LR: L(t) + T(l) <-> L(t!1).T(l!1) k_lr_bind, k_lr_dis

~~~ ruby
begin reaction rules
	LR: L(t) + T(l) <-> L(t!1).T(l!1) k_lr_bind, k_lr_dis
end reaction rules
~~~

Once we have specified reactions, we can define the molecules whose concentrations we are interested in tracking. These molecules are added to an  `observables` section.

~~~ ruby
begin observables
  Molecules free_ligand L(t)
  Molecules bound_ligand L(t!l).T(l!l)
  Molecules free_receptor T(l)
end observables
~~~

## Initializing unbound molecule counts

Next, we need to specify a variable indicating the number of molecules with which we would like to initialize our simulation. We place these molecules within a `species` section. We are putting `L0` unbound `L` molecules, and `T0` unbound `T` molecules at the beginning; we will set these parameters later.

Note that we do not specify an initial number of bound `L.T` complexes, meaning that the initial concentration of these complexes will be equal to zero.

~~~ ruby
begin species
	L(t) L0
	T(l) T0
end species
~~~

## Specifying parameters

Now we will declare all the parameters we introduced in the above sections. We will start with setting `L0`, the initial concentration of ligand, to 10,000, and `T0`, the initial concentration of receptors, to 7000. It remains to set the reaction rates for the forward and reverse reactions.

BioNetGen is unitless, but for simplicity, we will assume that all concentrations are measured in the number of molecules per cell. The reaction rates are conventionally thought of in the units of mole (M) per second, where 1 M denotes Avogrado's number, which is approximately 6.02 · 10<sup>23</sup>.

Because of the differing units of molecules per cell and mole per second, we need to do some unit conversion here. The volume of an *E. coli* cell is approximately 1µm<sup>3</sup>, and so 1 mole per liter will correspond to 1 mole per 10<sup>15</sup> µm<sup>3</sup>, or 6.02 · 10<sup>8</sup> molecules per cell.

For bimolecular reactions, the rate constant should have unit M<sup>-1</sup>s<sup>-1</sup>, and we divide with NaV to convert to (molecules/µm<sup>3</sup>)<sup>-1</sup>)s<sup>-1</sup>. For monomolecular reactions, the rate constant have unit s<sup>-1</sup>, so no unit conversion is required.

Although the specific numbers of cellular components vary among each bacterium, the components in chemotaxis pathway follows a relatively constant ratio. For all the simulations in this tutorial, we assign the initial number for each molecule and reaction rate by first deciding a reasonable range based on *in vivo* quantities [^Li2004][^Spiro1997][^Stock1991]. Our parameters are summarized below.

~~~ ruby
begin parameters
	NaV 6.02e8    #Unit conversion M -> #/µm^3
	L0 1e4        #number of ligand molecules
	T0 7000       #number of receptor complexes
	k_lr_bind 8.8e6/NaV   #ligand-receptor binding
	k_lr_dis 35           #ligand-receptor dissociation
end parameters
~~~

**Note:** The `parameters` section has to appear before the `reaction rules` section.
{: .notice--info}

If you save your file, then you should see a "contact map" in the upper right corner of the window indicating the potential binding of `L` and `T`. This contact map is currently very simplistic, but for more complicated simulations it can help visualize the interaction of species in the system.

[![Complete output after CheY phosphorylation reaction](../assets/images/600px/chemotaxis_tutorial3.png){: .align-center loading="lazy"}](../assets/images/chemotaxis_tutorial3.png)

## Specifying simulation commands

We are now ready to run our simulation. At the bottom of the model specification (i.e., after `end model`), we will add a `generate_network` and `simulate` command. The `simulate` command will take three parameters, which we specify below.

**Method**. We will use `method=>"ssa"` throughout these tutorials, which indicate that we are using the SSA (Gillespie) algorithm that was described in the main text. BioNetGen also includes the parameters `method=>"nf"` (network-free) and `method=>"ode"`(ordinary differential equations) that you can try. See the following article for more details if you are interested in these two approaches: <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5079481">https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5079481</a>.

**Time span**.`t_end`, the simulation duration. BioNetGen simulation time is unitless; for simplicity, we assume our time unit is the second.

**Number of Steps**. `n_steps` tells the program how many time points to break the simulation into when measuring the concentrations of our observables.

~~~ ruby
	generate_network({overwrite=>1})
	simulate({method=>"ssa", t_end=>1, n_steps=>100})
~~~

The following code contains our complete simulation, which you can also download here:
<a href="../downloads/downloadable/ligand_receptor.bngl" download="ligand_receptor.bngl">ligand_receptor.bngl</a>.

~~~ ruby
begin model

begin molecule types
	L(t)
	T(l)
end molecule types

begin observables
	Molecules free_ligand L(t)
	Molecules bound_ligand L(t!l).T(l!l)
	Molecules free_receptor T(l)
end observables

begin parameters
	NaV2 6.02e8   #Unit conversion to cellular concentration M/L -> #/um^3
	L0 1e4        #number of ligand molecules
	T0 7000       #number of receptor complexes
	k_lr_bind 8.8e6/NaV2   #ligand-receptor binding
	k_lr_dis 35            #ligand-receptor dissociation
end parameters

begin reaction rules
	LR: L(t) + T(l) <-> L(t!1).T(l!1) k_lr_bind, k_lr_dis
end reaction rules

begin species
	L(t) L0
	T(l) T0
end species

end model

generate_network({overwrite=>1})
simulate({method=>"ssa", t_end=>1, n_steps=>100})
~~~

**STOP:** Based on our results from calculating steady state concentration by hand in the main text, predict how the concentrations will change and what the equilibrium concentrations will be.
{: .notice--primary}

## Running our simulation

We are now ready to run our simulation. To do so, click the `Run BNG` button on the top right of your VS Code window (see screenshot below). You should see a terminal appear on the bottom of the window, which will show you the progress of the simulation. The output of the program is stored in a folder located in the working directory, named `ligand_receptor`.

[![Updated phosphorylation model in Visual Studio Code step 2.1](../assets/images/600px/chemotaxis_tutorial2.1_VSCode.png){: .align-center loading="lazy"}](../assets/images/chemotaxis_tutorial2.1_VSCode.png)

To visualize the results, open the file `ligand_receptor.gdat` stored inside the folder. With this file open, click on the `CLI Plotting` button on the top right corner of the VS Code window.

[![Updated phosphorylation model step 2.2](../assets/images/600px/chemotaxis_tutorial2.2_VSCode.png){: .align-center loading="lazy"}](../assets/images/chemotaxis_tutorial2.2_VSCode.png)

<!-- Old Instructions -->
<!-- We are now ready to run our simulation. To do so, visit `Simulation` at the right side of the contact map and click `Run`. You can then visualize the results of the simulation, showing changes in concentration over time. These results are also stored as a .gdat file in the folder `result/your time of simulation`. -->

It is also possible to create an interactive plot from the results. Open the file `ligand_receptor.gdat`, and click on the "built-in plotting" botton located next to the "CLI Plotting" button you used to create the figure. The following interactive plot will be created:

[![Updated phosphorylation model step 2.3](../assets/images/600px/chemotaxis_tutorial2.3_VSCode.png){: .align-center loading="lazy"}](../assets/images/chemotaxis_tutorial2.3_VSCode.png)

Is the result you obtain what you expected? In the main text, we will return to this question and then learn more about the details of bacterial chemotaxis in order to expand our BioNetGen model into one that fully reflects these details.

[^Li2004]: Li M, Hazelbauer GL. 2004. Cellular stoichiometry of the components of the chemotaxis signaling complex. Journal of Bacteriology. [Available online](https://jb.asm.org/content/186/12/3687)

[^Stock1991]: Stock J, Lukat GS. 1991. Intracellular signal transduction networks. Annual Review of Biophysics and Biophysical Chemistry. [Available online](https://www.annualreviews.org/doi/abs/10.1146/annurev.bb.20.060191.000545)

[^Spiro1997]: Spiro PA, Parkinson JS, and Othmer H. 1997. A model of excitation and adaptation in bacterial chemotaxis. Biochemistry 94:7263-7268. [Available online](https://www.pnas.org/content/94/14/7263).

[^Schwartz14]: Schwartz R. Biological Modeling and Simulaton: A Survey of Practical Models, Algorithms, and Numerical Methods. Chapter 14.1.

[^Schwartz17]: Schwartz R. Biological Modeling and Simulaton: A Survey of Practical Models, Algorithms, and Numerical Methods. Chapter 17.2.


[Return to main text](gillespie#does-the-gillespie-algorithm-confirm-our-steady-state-calculations){: .btn .btn--warning .btn--large}
{: style="font-size: 100%; text-align: center;"}
