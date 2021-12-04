---
permalink: /coronavirus/tutorial_GNM
title: "Software Tutorial: Analyzing Coronavirus Spike Proteins Using GNM"
sidebar:
 nav: "coronavirus"
toc: true
toc_sticky: true
image: "../assets/images/SARS_spike_proteins.jpg"
---

In this tutorial, we will be performing GNM calculations on one of the chains in the SARS-CoV-2 spike protein (<a href="http://www.rcsb.org/structure/6VXX" target="_blank">6vxx</a>) and then visualizing the results using the plots that we discussed in the [main text](conclusion_part_2#an-introduction-to-gaussian-network-models).

First, follow the steps in <a href="prody">Setting up ProDy</a> to start up IPython and import the neccessary functions.

Next, we will parse in <a href="http://www.rcsb.org/structure/6VXX" target="_blank">6vxx.pdb</a> and set it as the variable `spike`.

~~~ python
In[#]: spike = parsePDB('6vxx.pdb')
~~~~~

For this GNM calculation, we will focus only on the alpha carbons of Chain A. We can access these atoms using the `spike.select` function as follows, storing the alpha carbons in a variable `calphas`.

~~~ python
In[#]: calphas = spike.select('calpha and chain A')
~~~~~

Recall in the main text that we converted a protein into a network of nodes and springs, where two nodes are connected by an edge if the alpha carbons corresponding to these nodes are within some threshold distance $$r_c$$. We can also represent this network with a matrix called the  **Kirchhoff matrix** $$ \Gamma $$ and constructed as follows:

$$ \Gamma_{ij} = \begin{cases} & -1 \text{ if $i \neq j$ and $R_{ij} \leq r_c$}\\ &  0 \text{ if $i \neq j$ and $R_{ij} > r_c$} \end{cases} $$

$$ \Gamma_{ii} = -\sum_j \Gamma_{ij} $$

In other words, if residue *i* and *j* are connected to each other in the network, then the value of the (*i*, *j*)-th entry in the matrix will be -1. If these two residues are not connected, the the entry will be 0. The (*i*, *j*)-th entry on the main diagonal of $$ \Gamma $$, is equal to the total number of connections of residue *i*. The figure below shows an example Kirchhoff matrix for a small network.

[![image-center](../assets/images/600px/kirchhoff_example.png){: .align-center}](../assets/images/kirchhoff_example.png)
An example network (left) with its the corresponding Kirchhoff matrix (right).
{: style="font-size: medium;"}

The Kirchhoff matrix is helpful because applying some matrix algebra to it (specifically, determining its eigenvector decomposition) allows us to estimate the inner products $$ \langle \Delta R_i, \Delta R_j \rangle $$ that power the GNM model.

Returning to our SARS-CoV-2 example, we are now ready to build the Kirchhoff matrix. You can pass parameters for the cutoff (threshold distance between atoms) and gamma (spring constant). The defaults are 10.0 angstroms (Å) and 1.0, respectively. Here, we will set the cutoff to be 20.0 Å.

~~~ python
In[#]: gnm = GNM('SARS-CoV-2 Spike (6vxx) Chain A Cutoff = 20.0 A')
In[#]: gnm.buildKirchhoff(calphas, cutoff=20.0)
~~~~

For normal mode analysis with ProDy, the default is 20 non-zero modes. In addition, we will create hinge sites for later use in the slow mode shape plot; these sites represent locations in the protein where fluctuations change in relative directions.

~~~ python
In[#]: gnm.calcModes()
In[#]: hinges = gnm.getHinges()
~~~~

For advanced users, information of the GNM and Kirchhoff matrix can be accessed with the following commands.
~~~ python
In[#]: gnm.getEigvals()
In[#]: gnm.getEigvecs()
In[#]: gnm.getCovariance()

#To get information specifically on the slowest mode (which is always indexed at 0):
In[#]: slowMode = gnm[0]
In[#]: slowMode.getEigval()
In[#]: slowMode.getEigvec()
~~~~

We have now successfully initialized our GNM model and are ready to generate our plots. In what follows, make sure to save your visualization (if desired) and close each plot before creating another. We will discuss how to interpret these plots back in the main text.

First, we produce a contact map, which we introduced [earlier](multiseq) in the module.

Contact Map:
~~~ python
In[#]: showContactMap(gnm);
~~~~

This command should produce the following plot.

[![image-center](../assets/images/600px/SARS-CoV-2_ChainA_Contact_20A.png){: .align-center}](../assets/images/SARS-CoV-2_ChainA_Contact_20A.png)
{: style="font-size: medium;"}

Next, we produce a cross-correlation plot with the following command.
~~~ python
In[#]: showCrossCorr(gnm);
~~~~

The plot is found below.

[![image-center](../assets/images/600px/SARS-CoV-2_ChainA_CrossCorr_20A.png){: .align-center}](../assets/images/SARS-CoV-2_ChainA_CrossCorr_20A.png)
{: style="font-size: medium;"}

Finally, we use the following command to produce a shape plot for the slowest mode identified by GNM.

~~~ python
In[#]: showMode(gnm[0], hinges=True)
In[#]: grid();
~~~~~

This mode shape plot is shown in the figure below.

[![image-center](../assets/images/600px/SARS-CoV-2_ChainA_SlowMode_20A.png){: .align-center}](../assets/images/SARS-CoV-2_ChainA_SlowMode_20A.png)
{: style="font-size: medium;"}

Now that we have produced our plots, we are ready to head back to the main text and analyze our results.

[Return to main text](conclusion_part_2#molecular-dynamics-analyses-of-sars-cov-and-sars-cov-2-spike-proteins-using-gnm){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}
