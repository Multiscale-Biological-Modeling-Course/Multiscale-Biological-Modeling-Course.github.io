---
permalink: /coronavirus/tutorial_GNM
title: "Software Tutorial: Analysis of Coronavirus Spike Proteins Using GNM"
sidebar:
 nav: "coronavirus"
toc: true
toc_sticky: true
image: "../assets/images/SARS_spike_proteins.jpg"
---

### Gaussian Network Model Calculations

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

Recall in the main text that we converted a protein into a network of nodes and springs, where two nodes are connected by an edge if the alpha carbons corresponding to these nodes are within some threshold distance. We can also represent this network with a matrix called the  **Kirchhoff matrix** $$ \Gamma $$ and constructed as follows:

$$ \Gamma_{ij} = \begin{cases} & -1 \text{ if $i \neq j$ and $R_{ij} \leq r_c$}\\ &  0 \text{ if $i \neq j$ and $R_{ij} > r_c$} \end{cases} $$

$$ \Gamma_{ii} = -\sum_j \Gamma_{ij} $$

Here, $$r_c$$ is the threshold distance between alpha carbons used to build our network. Simply put, if residue i and residue j are connected, then the value of position i,j in the matrix will be -1. If they are not connected, the the value will be 0. The values of the diagonals, i.e. position i,i, correspond to the total number of connections of residue i.

[![image-center](../assets/images/600px/kirchhoff_example.png){: .align-center}](../assets/images/kirchhoff_example.png)
Toy structure and the corresponding Kirchhoff matrix.
{: style="font-size: medium;"}


Now, we will instantiate a GNM instance and build the corresponding Kirchhoff matrix. You can pass parameters for the cutoff (threshold distance between atoms) and gamma (spring constant). The defaults are 10.0 Å and 1.0, respectively. Here, we will set the cutoff to be 20.0 Å.

~~~ python
In[#]: gnm = GNM('SARS-CoV-2 Spike (6vxx) Chain A Cutoff = 20.0 A')                 #This is the title that will appear on top of the plots
In[#]: gnm.buildKirchhoff(calphas, cutoff=20.0)
~~~~

For the creation of normal modes, the default is 20 non-zero modes. This value can be changed and zero modes can be kept if desired. e.g. `gnm.calcModes(50, zeros=True)`. We will use the default. In addition, we will create hinge sites for later use in the slow mode shape plot. These sites represent places in the protein where the fluctuations change in relative direction.
~~~ python
In[#]: gnm.calcModes()
In[#]: hinges = gnm.getHinges()
~~~~

(Optional) Information of the GNM and Kirchhoff matrix can be pulled with the following commands.
~~~ python
In[#]: gnm.getEigvals()
In[#]: gnm.getEigvecs()
In[#]: gnm.getCovariance()

#To get information specifically on the slowest mode (which is always indexed at 0):
In[#]: slowMode = gnm[0]
In[#]: slowMode.getEigval()
In[#]: slowMode.getEigvec()
~~~~

We have now successfully created the GNM calculations and can generate the maps plots. Make sure to save the visualization (if desired) and close the plot before creating another. We will discuss how to interpret these visualization back in the main text.

Contact Map:
~~~ python
In[#]: showContactMap(gnm);
~~~~

[![image-center](../assets/images/600px/SARS-CoV-2_ChainA_Contact_20A.png){: .align-center}](../assets/images/SARS-CoV-2_ChainA_Contact_20A.png)
{: style="font-size: medium;"}

Cross-correlations:
~~~ python
In[#]: showCrossCorr(gnm);
~~~~

[![image-center](../assets/images/600px/SARS-CoV-2_ChainA_CrossCorr_20A.png){: .align-center}](../assets/images/SARS-CoV-2_ChainA_CrossCorr_20A.png)
{: style="font-size: medium;"}

Slow Mode Shape:
~~~ python
In[#]: showMode(gnm[0], hinges=True)
In[#]: grid();
~~~~~

[![image-center](../assets/images/600px/SARS-CoV-2_ChainA_SlowMode_20A.png){: .align-center}](../assets/images/SARS-CoV-2_ChainA_SlowMode_20A.png)
{: style="font-size: medium;"}

Now, let's head back to the main text on how to read our visualizations and analyze our results.

[Return to main text](conclusion_part_2#molecular-dynamics-analyses-of-sars-cov-and-sars-cov-2-spike-proteins-using-gnm){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}
