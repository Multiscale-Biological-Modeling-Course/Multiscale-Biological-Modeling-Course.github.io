---
permalink: /glossary/
title: "Glossary"
description: "Key terms in biological modeling, from reaction-diffusion systems and network motifs to protein structure and machine learning."
comments: false
share: false
exclude_book_buttons: true
classes:
  - wide
header:
  overlay_color: "#000"
  overlay_filter: "0.6"
  overlay_image: /assets/images/f38_k61_compressed.webp
  image_alt: "Turing pattern stripes produced by the Gray-Scott model."
---

<style>
article.page {
  float: none !important;
  width: 100% !important;
  padding-right: 0 !important;
}
div.sidebar.sticky,
aside.sidebar__right.sticky {
  display: none !important;
}

.gloss-intro {
  font-family: 'Source Serif 4', Georgia, serif;
  font-size: 1.05rem;
  color: #444;
  max-width: 900px;
  margin: 2rem 0 3rem;
  line-height: 1.7;
}

.gloss-toc {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.5rem;
  margin-bottom: 3.5rem;
  max-width: 900px;
}
.gloss-toc__link {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #1d3557;
  text-decoration: none;
  padding: 0.2rem 0.55rem;
  border: 1.5px solid #1d3557;
  border-radius: 3px;
  transition: background 0.15s, color 0.15s;
}
.gloss-toc__link:hover {
  background: #1d3557;
  color: #fff;
  text-decoration: none;
}

.gloss-letter {
  margin: 3rem 0 1.25rem;
  font-family: 'Outfit', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1d3557;
  border-bottom: 2px solid #c10814;
  padding-bottom: 0.3rem;
  max-width: 900px;
}

.gloss-entries {
  max-width: 900px;
}

.gloss-entry {
  margin-bottom: 1.75rem;
}
.gloss-entry__term {
  font-family: 'Outfit', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #1d3557;
  margin: 0 0 0.25rem;
}
.gloss-entry__def {
  font-family: 'Source Serif 4', Georgia, serif;
  font-size: 0.97rem;
  color: #333;
  line-height: 1.65;
  margin: 0 0 0.3rem;
}
.gloss-entry__link {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #c10814;
  text-decoration: none;
}
.gloss-entry__link:hover {
  text-decoration: underline;
}
</style>

<p class="gloss-intro">Definitions of key concepts used throughout the course, organized alphabetically. Each entry links to the lesson where the term is introduced in depth.</p>

<nav class="gloss-toc" aria-label="Jump to letter">
  <a class="gloss-toc__link" href="#a">A</a>
  <a class="gloss-toc__link" href="#b">B</a>
  <a class="gloss-toc__link" href="#c">C</a>
  <a class="gloss-toc__link" href="#d">D</a>
  <a class="gloss-toc__link" href="#e">E</a>
  <a class="gloss-toc__link" href="#f">F</a>
  <a class="gloss-toc__link" href="#g">G</a>
  <a class="gloss-toc__link" href="#h">H</a>
  <a class="gloss-toc__link" href="#i">I</a>
  <a class="gloss-toc__link" href="#k">K</a>
  <a class="gloss-toc__link" href="#l">L</a>
  <a class="gloss-toc__link" href="#m">M</a>
  <a class="gloss-toc__link" href="#n">N</a>
  <a class="gloss-toc__link" href="#p">P</a>
  <a class="gloss-toc__link" href="#q">Q</a>
  <a class="gloss-toc__link" href="#r">R</a>
  <a class="gloss-toc__link" href="#s">S</a>
  <a class="gloss-toc__link" href="#t">T</a>
  <a class="gloss-toc__link" href="#v">V</a>
  <a class="gloss-toc__link" href="#w">W</a>
  <a class="gloss-toc__link" href="#x">X</a>
</nav>

<div class="gloss-entries">

<h2 class="gloss-letter" id="a">A</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Ab initio structure prediction</p>
  <p class="gloss-entry__def">A computational approach to predicting a protein's three-dimensional structure using only its amino acid sequence, without reference to any known template structure. It relies on force fields to evaluate the energy of candidate conformations and search algorithms to find low-energy structures.</p>
  <a class="gloss-entry__link" href="/coronavirus/ab_initio">Module 3: Ab Initio Modeling →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Accuracy</p>
  <p class="gloss-entry__def">The fraction of data points that a classifier correctly assigns to their true class. Accuracy can be misleading when classes are imbalanced, since a classifier can achieve high accuracy by simply always predicting the majority class.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/training">Module 4: Training a Classifier →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Adaptation</p>
  <p class="gloss-entry__def">The process by which <em>E. coli</em> responds to relative changes in attractant concentration rather than absolute levels. If the concentration stays constant, the bacterium returns to its baseline tumbling frequency — a reset that allows it to detect the next change.</p>
  <a class="gloss-entry__link" href="/chemotaxis/adaptation">Module 2: Adaptation →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Alpha helix</p>
  <p class="gloss-entry__def">A common secondary structure in proteins in which nearby amino acids coil around each other to form a right-handed tube. Alpha helices are stabilized by hydrogen bonds between amino acids four positions apart in the sequence.</p>
  <a class="gloss-entry__link" href="/coronavirus/biochemistry">Module 3: Protein Biochemistry →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Amino acid</p>
  <p class="gloss-entry__def">The building blocks of proteins, of which there are 20 standard types. Each shares a common backbone — an alpha carbon bonded to a hydrogen atom, a carboxyl group, and an amino group — plus a variable side chain (R group) that determines its chemical character.</p>
  <a class="gloss-entry__link" href="/coronavirus/structure_intro">Module 3: Protein Structure →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Anisotropic network model (ANM)</p>
  <p class="gloss-entry__def">A generalization of the Gaussian network model that tracks not only the magnitude of fluctuations at each residue but also their direction. ANM reveals the preferred directions of motion of protein domains, providing insight into how a protein's dynamics relate to its function.</p>
  <a class="gloss-entry__link" href="/coronavirus/anm">Module 3: ANM →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Attractant</p>
  <p class="gloss-entry__def">A chemical signal that bacteria move toward. Common attractants for <em>E. coli</em> include glucose and other electron acceptors that serve as nutrients.</p>
  <a class="gloss-entry__link" href="/chemotaxis/home">Module 2: Chemotaxis →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Autoregulation</p>
  <p class="gloss-entry__def">A process in which a transcription factor binds to the regulatory region of its own gene, creating a feedback loop. Negative autoregulation — where the factor represses its own production — is one of the most common network motifs in biology.</p>
  <a class="gloss-entry__link" href="/motifs/autoregulation">Module 1: Autoregulation →</a>
</div>

<h2 class="gloss-letter" id="b">B</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">B-factor (temperature factor)</p>
  <p class="gloss-entry__def">A measure reported in X-ray crystallography structures that reflects the uncertainty in each atom's position, arising partly from thermal motion. Regions with high B-factors are more flexible; the GNM predicts B-factors from the protein's network topology.</p>
  <a class="gloss-entry__link" href="/coronavirus/gnm">Module 3: GNM →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Beta sheet</p>
  <p class="gloss-entry__def">A common secondary structure in proteins in which nearby amino acids in the sequence line up side by side, forming a flat, pleated sheet stabilized by hydrogen bonds running perpendicular to the chain direction.</p>
  <a class="gloss-entry__link" href="/coronavirus/biochemistry">Module 3: Protein Biochemistry →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Brownian motion</p>
  <p class="gloss-entry__def">The random movement of a small particle — such as a glucose molecule in solution — caused by countless collisions with surrounding molecules. Brownian motion is the physical mechanism underlying diffusion.</p>
  <a class="gloss-entry__link" href="/prologue/random_walk">Prologue: Random Walks →</a>
</div>

<h2 class="gloss-letter" id="c">C</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Cellular automaton</p>
  <p class="gloss-entry__def">A grid of cells in which each cell's state is updated at each time step according to fixed rules based on its current state and the states of its neighbors. Cellular automata can model diffusion, reaction-diffusion systems, and many other spatial processes.</p>
  <a class="gloss-entry__link" href="/prologue/diffusion_automaton">Prologue: Diffusion Automaton →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Central dogma of molecular biology</p>
  <p class="gloss-entry__def">The principle that genetic information flows in one direction: DNA is transcribed into RNA, and RNA is translated into protein. This flow underlies virtually all cellular function.</p>
  <a class="gloss-entry__link" href="/motifs/transcription">Module 1: Transcription →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">ChIP-seq (chromatin immunoprecipitation sequencing)</p>
  <p class="gloss-entry__def">An experimental technique that identifies which genes a transcription factor binds to by cross-linking the protein to DNA, fragmenting the DNA, and using antibodies to pull down and sequence only the fragments that were bound to the protein of interest.</p>
  <a class="gloss-entry__link" href="/motifs/transcription">Module 1: Transcription →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">CheA</p>
  <p class="gloss-entry__def">A chemotaxis protein that autophosphorylates when MCPs are not bound to attractant and then passes its phosphoryl group to CheY. The rate of CheA phosphorylation reflects how much attractant the bacterium is currently sensing.</p>
  <a class="gloss-entry__link" href="/chemotaxis/biochemistry">Module 2: Biochemistry →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">CheY</p>
  <p class="gloss-entry__def">A chemotaxis signaling protein that, when phosphorylated by CheA, diffuses to the flagellar motor and induces clockwise rotation, causing the bacterium to tumble. Dephosphorylated CheY does not interact with the motor, allowing runs to continue.</p>
  <a class="gloss-entry__link" href="/chemotaxis/biochemistry">Module 2: Biochemistry →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">CheZ</p>
  <p class="gloss-entry__def">An enzyme that dephosphorylates CheY, rapidly decreasing the concentration of phosphorylated CheY when attractant is detected. CheZ acts as a fast off-switch, allowing the bacterium to quickly resume running when conditions improve.</p>
  <a class="gloss-entry__link" href="/chemotaxis/biochemistry">Module 2: Biochemistry →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Chemotaxis</p>
  <p class="gloss-entry__def">The directed movement of an organism in response to a chemical gradient — toward attractants and away from repellents. <em>E. coli</em>'s chemotaxis system is a striking example of biological computation implemented entirely at the molecular scale.</p>
  <a class="gloss-entry__link" href="/chemotaxis/home">Module 2: Chemotaxis →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Circadian rhythm</p>
  <p class="gloss-entry__def">A roughly 24-hour biological cycle of sleep and wakefulness found in most living organisms. At the molecular level, circadian rhythms are maintained by genetic oscillator circuits — networks of transcription factors that activate and repress each other in a cycle.</p>
  <a class="gloss-entry__link" href="/motifs/oscillators">Module 1: Oscillators →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Coarse-grained model</p>
  <p class="gloss-entry__def">A simplified model that replaces fine-grained detail — such as the positions of individual molecules — with averaged quantities such as concentrations in grid cells. Coarse-grained models sacrifice microscopic accuracy for computational tractability.</p>
  <a class="gloss-entry__link" href="/prologue/diffusion_automaton">Prologue: Diffusion Automaton →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Codon</p>
  <p class="gloss-entry__def">A triplet of RNA nucleotides that specifies a single amino acid according to the genetic code. With four nucleotides and codons of length three, there are 64 possible codons encoding 20 amino acids plus stop signals.</p>
  <a class="gloss-entry__link" href="/motifs/transcription">Module 1: Transcription →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Combinatorial explosion</p>
  <p class="gloss-entry__def">A phenomenon in which the number of possible molecular states — and therefore reactions needed to model a system — grows so rapidly with the number of components that explicit enumeration becomes impractical. Rule-based modeling is one approach to managing this complexity.</p>
  <a class="gloss-entry__link" href="/chemotaxis/adaptation">Module 2: Adaptation →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Confusion matrix</p>
  <p class="gloss-entry__def">A table that summarizes the performance of a classifier by comparing the true class of each data point (rows) against the class the classifier predicted (columns). It reveals not just overall accuracy but which specific types of errors the classifier makes.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/training">Module 4: Training a Classifier →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Contact map</p>
  <p class="gloss-entry__def">A binary matrix for a protein structure in which entry (i, j) is 1 if the alpha carbons of residues i and j are within a threshold distance of each other in the folded structure, and 0 otherwise. Contact maps capture the overall topology of a protein fold in a compact form.</p>
  <a class="gloss-entry__link" href="/coronavirus/multiseq">Module 3: Structural Differences →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Coronavirus</p>
  <p class="gloss-entry__def">A family of viruses named for the crown-like ring of spike proteins on their outer membrane. The spike proteins are the mechanism by which coronaviruses infect host cells, making them a primary target of vaccine and therapeutic development.</p>
  <a class="gloss-entry__link" href="/coronavirus/home">Module 3: Coronavirus →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Cross-correlation</p>
  <p class="gloss-entry__def">A normalized metric ranging from −1 to 1 that measures how similarly two residues in a protein move. A value near 1 means the two residues tend to move together; near −1 means they move in opposite directions; near 0 means their motions are uncorrelated.</p>
  <a class="gloss-entry__link" href="/coronavirus/gnm">Module 3: GNM →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Cross-validation</p>
  <p class="gloss-entry__def">A method for estimating a classifier's performance on unseen data by dividing the dataset into <em>k</em> folds, then training on <em>k−1</em> folds and testing on the held-out fold, repeated so each fold serves as the test set once. Averaging the results gives a more reliable accuracy estimate than a single train/test split.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/training">Module 4: Training a Classifier →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Cryo-electron microscopy (cryo-EM)</p>
  <p class="gloss-entry__def">A technique for determining protein structure in which thousands of copies of a protein are flash-frozen in non-crystalline ice and imaged with an electron microscope. Unlike X-ray crystallography, cryo-EM does not require crystals and can capture proteins in multiple conformations.</p>
  <a class="gloss-entry__link" href="/coronavirus/structure_intro">Module 3: Protein Structure →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Curse of dimensionality</p>
  <p class="gloss-entry__def">A set of counterintuitive phenomena that arise in high-dimensional spaces — for example, randomly sampled points in high dimensions tend to be nearly equidistant from each other, making distance-based classifiers less effective. PCA is one strategy for combating it.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/pca">Module 4: PCA →</a>
</div>

<h2 class="gloss-letter" id="d">D</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Damped oscillation</p>
  <p class="gloss-entry__def">A pattern in which a quantity oscillates above and below a steady state while the amplitude of each swing gradually decreases until the system settles. Some feedforward loop circuits produce damped oscillations in transcription factor concentrations before reaching equilibrium.</p>
  <a class="gloss-entry__link" href="/motifs/feedforward">Module 1: Feedforward Loops →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Dephosphorylation</p>
  <p class="gloss-entry__def">The removal of a phosphoryl group from a molecule, often passing it to another molecule. In chemotaxis signaling, dephosphorylation of CheY (by CheZ) rapidly turns off the tumbling signal, allowing the bacterium to resume running.</p>
  <a class="gloss-entry__link" href="/chemotaxis/biochemistry">Module 2: Biochemistry →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Diffusion</p>
  <p class="gloss-entry__def">The net movement of particles from regions of high concentration to regions of low concentration, driven by random molecular motion. At the microscopic level, diffusion emerges from the individual random walks of many particles.</p>
  <a class="gloss-entry__link" href="/prologue/random_walk">Prologue: Random Walks →</a>
</div>

<h2 class="gloss-letter" id="e">E</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Elastic network model (ENM)</p>
  <p class="gloss-entry__def">A simplified model of protein dynamics in which nearby alpha carbons are connected by virtual springs with uniform spring constants. ENMs capture the large-scale collective motions of proteins without simulating every atom explicitly.</p>
  <a class="gloss-entry__link" href="/coronavirus/gnm">Module 3: GNM →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Electrostatic interactions</p>
  <p class="gloss-entry__def">Forces between pairs of charged amino acid side chains — attraction between opposite charges and repulsion between like charges. Electrostatic interactions contribute to non-bonded energy and play a major role in determining a protein's stable conformation.</p>
  <a class="gloss-entry__link" href="/coronavirus/biochemistry">Module 3: Protein Biochemistry →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Emergent behavior</p>
  <p class="gloss-entry__def">Complex, organized patterns that arise from systems governed by simple rules — often involving randomness. Turing patterns, oscillating gene circuits, and <em>E. coli</em>'s chemotaxis algorithm are all examples of emergence in biological systems.</p>
  <a class="gloss-entry__link" href="/prologue/">Prologue →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Euclidean distance</p>
  <p class="gloss-entry__def">The straight-line distance between two points in <em>n</em>-dimensional space, computed as the square root of the sum of squared differences in each coordinate. It is the standard distance metric used by k-nearest neighbors classifiers.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/classification">Module 4: Classification →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Exponential distribution</p>
  <p class="gloss-entry__def">A probability distribution describing the wait time between events in a Poisson process. The Gillespie algorithm draws reaction times from exponential distributions, with faster reactions having shorter expected wait times.</p>
  <a class="gloss-entry__link" href="/chemotaxis/gillespie">Module 2: Gillespie Algorithm →</a>
</div>

<h2 class="gloss-letter" id="f">F</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Feature</p>
  <p class="gloss-entry__def">A measurable attribute of a data point used as input to a classifier. In Module 4, features include measurements of white blood cell nucleus shape derived from PCA of the image shape space.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/classification">Module 4: Classification →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Feedforward loop (FFL)</p>
  <p class="gloss-entry__def">A recurring network motif in which transcription factor X regulates both Y and Z, and Y also regulates Z. The signal reaches Z through two paths simultaneously, enabling behaviors such as noise filtering, pulse generation, and sign-sensitive delay.</p>
  <a class="gloss-entry__link" href="/motifs/feedforward">Module 1: Feedforward Loops →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Feed rate</p>
  <p class="gloss-entry__def">In the Gray-Scott reaction-diffusion model, the constant rate at which the prey particle A is replenished into the system. Along with the kill rate, it is one of the two main parameters that determine which Turing pattern the simulation produces.</p>
  <a class="gloss-entry__link" href="/prologue/reaction-diffusion">Prologue: Reaction-Diffusion →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Force field</p>
  <p class="gloss-entry__def">A set of functions used in ab initio protein structure prediction to estimate the potential energy of a candidate protein conformation. A good force field assigns lower energy to native-like structures, guiding the search toward the true folded state.</p>
  <a class="gloss-entry__link" href="/coronavirus/ab_initio">Module 3: Ab Initio Modeling →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Fragment assembly</p>
  <p class="gloss-entry__def">A homology modeling strategy in which conserved regions are modeled using the template structure and variable regions are filled in by selecting short peptide fragments from a library of known protein substructures with similar local sequences.</p>
  <a class="gloss-entry__link" href="/coronavirus/homology">Module 3: Homology Modeling →</a>
</div>

<h2 class="gloss-letter" id="g">G</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Gaussian network model (GNM)</p>
  <p class="gloss-entry__def">An elastic network model for protein dynamics in which alpha carbons within a threshold distance are connected by springs, and fluctuations away from equilibrium are assumed to follow a Gaussian distribution. GNM predicts which residues are most flexible and how pairs of residues move together.</p>
  <a class="gloss-entry__link" href="/coronavirus/gnm">Module 3: GNM →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Genetic code</p>
  <p class="gloss-entry__def">The universal mapping from RNA codons to amino acids. With 64 possible codons encoding 20 amino acids plus stop signals, the code is redundant — most amino acids are specified by multiple codons.</p>
  <a class="gloss-entry__link" href="/motifs/transcription">Module 1: Transcription →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Genome</p>
  <p class="gloss-entry__def">The complete set of DNA in a cell, encoding all of the organism's proteins. Most of the genome is not actively transcribed at any given moment; which genes are active depends on the cell type and current conditions, regulated by transcription factors.</p>
  <a class="gloss-entry__link" href="/motifs/transcription">Module 1: Transcription →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Gillespie algorithm (SSA)</p>
  <p class="gloss-entry__def">A stochastic simulation algorithm that models chemical reactions in a well-mixed system by sampling the time until the next reaction from an exponential distribution and then randomly selecting which reaction fires, weighted by each reaction's rate. It produces exact realizations of the chemical master equation.</p>
  <a class="gloss-entry__link" href="/chemotaxis/gillespie">Module 2: Gillespie Algorithm →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Glycan</p>
  <p class="gloss-entry__def">A carbohydrate structure consisting of monosaccharides linked by glycosidic bonds, attached to the surface of proteins and lipids. On the coronavirus spike protein, a dense layer of glycans forms a shield that conceals the protein from antibody detection.</p>
  <a class="gloss-entry__link" href="/coronavirus/glycans">Module 3: Glycans →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Glycan shield</p>
  <p class="gloss-entry__def">A protective coating on a virus's outer surface made up of glycans that physically blocks antibodies from reaching and neutralizing the underlying viral proteins. SARS-CoV-2 uses a particularly dense glycan shield to evade immune detection.</p>
  <a class="gloss-entry__link" href="/coronavirus/glycans">Module 3: Glycans →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Gray-Scott model</p>
  <p class="gloss-entry__def">A cellular automaton that simulates a coarse-grained reaction-diffusion system with two particle types — a prey A and a predator B — that diffuse and react according to simple rules. Despite its simplicity, the model generates a rich variety of Turing patterns depending on the feed and kill rate parameters.</p>
  <a class="gloss-entry__link" href="/prologue/gray-scott">Prologue: Gray-Scott →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Granulocyte</p>
  <p class="gloss-entry__def">A family of white blood cells characterized by a multilobular nucleus — several lobes of nuclear material connected by thin strands. Granulocytes include neutrophils, eosinophils, and basophils, and are the most abundant white blood cells in human blood.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/home">Module 4: White Blood Cells →</a>
</div>

<h2 class="gloss-letter" id="h">H</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Homology modeling</p>
  <p class="gloss-entry__def">A computational method for predicting a protein's three-dimensional structure by using the known structure of a closely related protein as a template. The more similar the two sequences, the more reliable the predicted structure.</p>
  <a class="gloss-entry__link" href="/coronavirus/homology">Module 3: Homology Modeling →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Homotrimer</p>
  <p class="gloss-entry__def">A protein complex formed from three identical (or near-identical) chains. The coronavirus spike protein is a homotrimer — three chains that assemble together to form the functional unit that binds ACE2.</p>
  <a class="gloss-entry__link" href="/coronavirus/biochemistry">Module 3: Protein Biochemistry →</a>
</div>

<h2 class="gloss-letter" id="i">I</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Imbalanced classes</p>
  <p class="gloss-entry__def">A dataset in which the classes to be predicted have very different numbers of examples. Imbalanced classes can make accuracy a misleading metric, since a classifier can achieve high accuracy by always predicting the majority class while never correctly identifying the minority class.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/training">Module 4: Training a Classifier →</a>
</div>

<h2 class="gloss-letter" id="k">K</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Kabsch algorithm</p>
  <p class="gloss-entry__def">An algorithm that finds the rotation that best aligns one set of points to another by minimizing the root mean square deviation (RMSD) between corresponding points. In Module 4, it is used to optimally align white blood cell nucleus shapes before computing their distance.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/shape_space">Module 4: Shape Space →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Kill rate</p>
  <p class="gloss-entry__def">In the Gray-Scott model, the rate at which the predator particle B is removed from the system. Together with the feed rate, it is one of the two parameters that govern which Turing pattern the simulation produces.</p>
  <a class="gloss-entry__link" href="/prologue/reaction-diffusion">Prologue: Reaction-Diffusion →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">k-Nearest neighbors (k-NN)</p>
  <p class="gloss-entry__def">A classification algorithm that assigns an unlabeled data point to the class that appears most often among its <em>k</em> closest neighbors in feature space. It is intuitive and requires no training phase, but can be slow at prediction time and sensitive to the curse of dimensionality.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/classification">Module 4: Classification →</a>
</div>

<h2 class="gloss-letter" id="l">L</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Levinthal's paradox</p>
  <p class="gloss-entry__def">The apparent contradiction that proteins fold reliably and quickly into a single stable conformation, even though the number of possible configurations is astronomically large. If a protein sampled conformations at random, folding would take longer than the age of the universe — yet in practice it takes milliseconds.</p>
  <a class="gloss-entry__link" href="/coronavirus/structure_intro">Module 3: Protein Structure →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Ligand</p>
  <p class="gloss-entry__def">A molecule that binds to a receptor protein. In chemotaxis, attractant and repellent molecules are ligands that bind to MCP receptors on <em>E. coli</em>'s surface, triggering the signal transduction cascade that modulates flagellar rotation.</p>
  <a class="gloss-entry__link" href="/chemotaxis/signal">Module 2: Signal Transduction →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Local minimum</p>
  <p class="gloss-entry__def">A point in an optimization landscape that has a lower value than all nearby points, but is not necessarily the lowest point overall. Local search algorithms risk getting trapped in local minima and missing the global minimum — a central challenge in ab initio protein structure prediction.</p>
  <a class="gloss-entry__link" href="/coronavirus/ab_initio">Module 3: Ab Initio Modeling →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Lymphocyte</p>
  <p class="gloss-entry__def">A family of white blood cells with a small, rounded nucleus that occupies a large fraction of the cell's volume. Lymphocytes include B cells and T cells and play central roles in the adaptive immune response.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/home">Module 4: White Blood Cells →</a>
</div>

<h2 class="gloss-letter" id="m">M</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Mathematically controlled comparison</p>
  <p class="gloss-entry__def">An experimental design principle in which all parameters are held identical between two simulations except the one being tested. This isolates the causal effect of a single variable and is essential for drawing valid conclusions from computational experiments.</p>
  <a class="gloss-entry__link" href="/motifs/nar">Module 1: Negative Autoregulation →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">MCP (methyl-accepting chemotaxis protein)</p>
  <p class="gloss-entry__def">A receptor protein that spans the cell membrane of <em>E. coli</em>, binding attractant ligands on the outside and interacting with CheA and CheW on the inside. MCPs transmit the signal from the environment into the intracellular phosphorylation cascade.</p>
  <a class="gloss-entry__link" href="/chemotaxis/biochemistry">Module 2: Biochemistry →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Methylation</p>
  <p class="gloss-entry__def">The addition of a methyl group (–CH₃) to a molecule. In <em>E. coli</em> chemotaxis, MCPs are methylated by CheR when they detect attractant, raising their activity level and serving as the molecular memory that enables adaptation.</p>
  <a class="gloss-entry__link" href="/chemotaxis/adaptation">Module 2: Adaptation →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Molecular dynamics (MD)</p>
  <p class="gloss-entry__def">A simulation technique that models the movement of all atoms in a protein (and surrounding solvent) over time, using force fields to compute inter-atomic forces at each time step. MD can reveal how protein structure changes during biological function, but is computationally intensive.</p>
  <a class="gloss-entry__link" href="/coronavirus/structural_diff">Module 3: Structural Differences →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Monocyte</p>
  <p class="gloss-entry__def">A family of white blood cells with a single, irregularly shaped nucleus. Monocytes are the largest white blood cells, patrolling the bloodstream and differentiating into macrophages or dendritic cells when they migrate into tissues.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/home">Module 4: White Blood Cells →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Morphogenesis</p>
  <p class="gloss-entry__def">The biological process by which organisms develop their shape and form — including the spatial patterns of pigmentation, organ placement, and tissue architecture. Turing's 1952 paper proposed a reaction-diffusion mechanism as a mathematical explanation for morphogenesis.</p>
  <a class="gloss-entry__link" href="/prologue/">Prologue →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Multi-dimensional scaling (MDS)</p>
  <p class="gloss-entry__def">A family of statistical methods that embed data points in a lower-dimensional space such that the distances between points in that space approximate the original pairwise distances. In Module 4, MDS is used to visualize the white blood cell shape space.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/shape_space">Module 4: Shape Space →</a>
</div>

<h2 class="gloss-letter" id="n">N</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Negative autoregulation</p>
  <p class="gloss-entry__def">A network motif in which a transcription factor represses its own gene. This self-limiting feedback speeds up the response to a stimulus and buffers against random fluctuations in protein concentration, making the steady state more robust.</p>
  <a class="gloss-entry__link" href="/motifs/autoregulation">Module 1: Autoregulation →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Network motif</p>
  <p class="gloss-entry__def">A subgraph pattern that appears far more often in a biological network than expected by chance. Motifs such as negative autoregulation, feedforward loops, and the repressilator are thought to have been selected by evolution because they confer useful regulatory properties.</p>
  <a class="gloss-entry__link" href="/motifs/home">Module 1: Network Motifs →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Normal mode analysis (NMA)</p>
  <p class="gloss-entry__def">A method for decomposing the collective motions of a protein into a set of independent vibrational modes, each with its own frequency and shape. The slowest modes — those with the lowest frequencies — correspond to the largest-scale, most functionally relevant motions.</p>
  <a class="gloss-entry__link" href="/coronavirus/gnm">Module 3: GNM →</a>
</div>

<h2 class="gloss-letter" id="p">P</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Parameter</p>
  <p class="gloss-entry__def">A numerical quantity that serves as an adjustable input to a model. Changing parameters changes the model's behavior; exploring parameter space is a central activity of biological modeling, as illustrated by the rich variety of patterns produced by different feed and kill rates in the Gray-Scott model.</p>
  <a class="gloss-entry__link" href="/prologue/reaction-diffusion">Prologue: Reaction-Diffusion →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Peptide bond</p>
  <p class="gloss-entry__def">The strong covalent bond linking consecutive amino acids in a protein chain, formed between the carboxyl group of one amino acid and the amino group of the next with the release of a water molecule. A protein's backbone is a chain of peptide bonds.</p>
  <a class="gloss-entry__link" href="/coronavirus/structure_intro">Module 3: Protein Structure →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Phosphorylation</p>
  <p class="gloss-entry__def">A chemical reaction that attaches a phosphoryl group (PO₃⁻) to an organic molecule, typically from ATP. Phosphorylation changes a protein's shape and activity, making it a key mechanism for rapid intracellular signaling — including the chemotaxis cascade in <em>E. coli</em>.</p>
  <a class="gloss-entry__link" href="/chemotaxis/biochemistry">Module 2: Biochemistry →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Phosphorylation cascade</p>
  <p class="gloss-entry__def">A sequence of phosphorylation and dephosphorylation events that transmits and amplifies a signal through the interior of a cell. In chemotaxis, the cascade runs from MCPs to CheA to CheY, ultimately changing flagellar rotation.</p>
  <a class="gloss-entry__link" href="/chemotaxis/biochemistry">Module 2: Biochemistry →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Poisson distribution</p>
  <p class="gloss-entry__def">A probability distribution that models the number of independent events occurring in a fixed time interval given a known average rate. It is the foundation of the Gillespie algorithm's approach to modeling stochastic chemical reactions.</p>
  <a class="gloss-entry__link" href="/chemotaxis/gillespie">Module 2: Gillespie Algorithm →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Principal component analysis (PCA)</p>
  <p class="gloss-entry__def">A dimensionality reduction technique that finds the directions in a dataset along which the data varies most, then projects the data onto those directions. The first principal component captures the most variance, the second the most remaining variance, and so on.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/pca">Module 4: PCA →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Protein Data Bank (PDB)</p>
  <p class="gloss-entry__def">The primary public repository for experimentally determined protein structures, containing over 160,000 entries from X-ray crystallography, cryo-EM, and NMR experiments. Every protein structure used in the course comes from the PDB.</p>
  <a class="gloss-entry__link" href="/coronavirus/structure_intro">Module 3: Protein Structure →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Protein domain</p>
  <p class="gloss-entry__def">A distinct structural and functional unit within a protein that folds independently and is typically responsible for a specific interaction. The spike protein's receptor binding domain (RBD), for example, is the domain that contacts the human ACE2 receptor.</p>
  <a class="gloss-entry__link" href="/coronavirus/biochemistry">Module 3: Protein Biochemistry →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Protein structure levels</p>
  <p class="gloss-entry__def">Protein structure is described at four levels of organization. <em>Primary</em> structure is the amino acid sequence. <em>Secondary</em> structure refers to local regular substructures such as alpha helices and beta sheets. <em>Tertiary</em> structure is the complete three-dimensional fold of a single chain. <em>Quaternary</em> structure describes how multiple chains assemble into a functional complex.</p>
  <a class="gloss-entry__link" href="/coronavirus/biochemistry">Module 3: Protein Biochemistry →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Protein structure prediction</p>
  <p class="gloss-entry__def">The computational problem of determining a protein's three-dimensional folded shape from its amino acid sequence alone. Long considered one of biology's hardest open problems, it was largely solved by AlphaFold in 2020.</p>
  <a class="gloss-entry__link" href="/coronavirus/home">Module 3: Coronavirus →</a>
</div>

<h2 class="gloss-letter" id="q">Q</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Q per residue (Qres)</p>
  <p class="gloss-entry__def">A metric ranging from 0 to 1 that measures the structural similarity of two protein structures at a specific residue position. A Qres value near 1 means the local structure around that residue is nearly identical in the two proteins; near 0 means the structures diverge significantly there.</p>
  <a class="gloss-entry__link" href="/coronavirus/multiseq">Module 3: Structural Differences →</a>
</div>

<h2 class="gloss-letter" id="r">R</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Random walk</p>
  <p class="gloss-entry__def">A path generated by a sequence of steps each taken in a randomly chosen direction. The random walk is the microscopic model underlying diffusion; by the random walk theorem, after <em>n</em> steps a particle will on average be a distance proportional to √<em>n</em> from its starting point.</p>
  <a class="gloss-entry__link" href="/prologue/random_walk">Prologue: Random Walks →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Reaction-diffusion system</p>
  <p class="gloss-entry__def">A model in which particles both diffuse through space and react chemically when they collide. Turing showed in 1952 that a simple two-species reaction-diffusion system can spontaneously generate striking spatial patterns from a uniform initial state.</p>
  <a class="gloss-entry__link" href="/prologue/reaction-diffusion">Prologue: Reaction-Diffusion →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Receptor binding domain (RBD)</p>
  <p class="gloss-entry__def">The subdomain of the coronavirus spike protein that directly contacts the human ACE2 receptor during infection. Structural differences in the RBD between SARS-CoV and SARS-CoV-2 contribute to the latter's greater infectiousness.</p>
  <a class="gloss-entry__link" href="/coronavirus/biochemistry">Module 3: Protein Biochemistry →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Recall (sensitivity)</p>
  <p class="gloss-entry__def">The fraction of true positives that a classifier correctly identifies, calculated as true positives divided by the sum of true positives and false negatives. A classifier with low recall misses many real cases; in medical diagnostics, low recall means dangerous false negatives.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/training">Module 4: Training a Classifier →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Repellent</p>
  <p class="gloss-entry__def">A chemical signal that bacteria move away from. <em>E. coli</em> treats certain ions as repellents, increasing its tumbling frequency to escape regions of high repellent concentration.</p>
  <a class="gloss-entry__link" href="/chemotaxis/home">Module 2: Chemotaxis →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Repressilator</p>
  <p class="gloss-entry__def">A synthetic genetic oscillator built from three transcription factors in a cycle: X represses Y, Y represses Z, and Z represses X. This three-node negative feedback loop can sustain oscillations in protein concentrations and was one of the first synthetic biological circuits constructed in the laboratory.</p>
  <a class="gloss-entry__link" href="/motifs/oscillators">Module 1: Oscillators →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Response time</p>
  <p class="gloss-entry__def">The time a system takes to reach its steady-state concentration after receiving a stimulus. Negative autoregulation accelerates response time compared to an unregulated gene, allowing cells to react more quickly to environmental changes.</p>
  <a class="gloss-entry__link" href="/motifs/nar">Module 1: Negative Autoregulation →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Robustness</p>
  <p class="gloss-entry__def">The ability of a biological system to maintain its function despite perturbations — variations in parameter values, molecular noise, or environmental conditions. <em>E. coli</em>'s chemotaxis adaptation is robust: the bacterium returns to the same tumbling frequency regardless of the absolute attractant concentration.</p>
  <a class="gloss-entry__link" href="/chemotaxis/conclusion">Module 2: Conclusion →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Root mean square deviation (RMSD)</p>
  <p class="gloss-entry__def">A measure of the average distance between corresponding points in two structures after optimal alignment. RMSD is widely used in structural biology to compare a predicted protein structure against the experimentally determined structure, and in Module 4 to compare cell nucleus shapes.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/shape_space">Module 4: Shape Space →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Rule-based modeling</p>
  <p class="gloss-entry__def">A modeling approach in which potentially enormous numbers of chemical reactions are specified compactly by a small set of rules from which all reactions can be inferred automatically. BioNetGen, used in Module 2, is a rule-based modeling language designed for complex signaling systems.</p>
  <a class="gloss-entry__link" href="/chemotaxis/adaptation">Module 2: Adaptation →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Run and tumble</p>
  <p class="gloss-entry__def">The two-mode locomotion strategy of <em>E. coli</em>. During a run, flagella rotate counterclockwise in concert, propelling the bacterium forward. During a tumble, flagella rotate clockwise independently, reorienting the bacterium in a random direction. By biasing the ratio of run time to tumble time, the bacterium performs a directed random walk toward attractants.</p>
  <a class="gloss-entry__link" href="/chemotaxis/walk">Module 2: Bacterial Walk →</a>
</div>

<h2 class="gloss-letter" id="s">S</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Salt bridge</p>
  <p class="gloss-entry__def">A non-covalent interaction formed between two nearby amino acids of opposite charge. Salt bridges contribute to protein stability and, in Module 3, differences in salt bridges between the SARS-CoV and SARS-CoV-2 spike proteins help explain why SARS-CoV-2 binds ACE2 more tightly.</p>
  <a class="gloss-entry__link" href="/coronavirus/biochemistry">Module 3: Protein Biochemistry →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Shape space</p>
  <p class="gloss-entry__def">A mathematical representation in which each cell nucleus shape is encoded as a point in high-dimensional space, with coordinates derived by sampling points along the nucleus boundary. Distance in shape space corresponds to dissimilarity in shape, enabling quantitative comparison across thousands of cells.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/shape_space">Module 4: Shape Space →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Signal transduction</p>
  <p class="gloss-entry__def">The process by which a cell detects an external stimulus and converts it into an internal molecular response. In chemotaxis, receptor proteins on the cell surface detect attractant molecules and trigger a cascade of protein modifications that ultimately change flagellar rotation.</p>
  <a class="gloss-entry__link" href="/chemotaxis/signal">Module 2: Signal Transduction →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Spike protein</p>
  <p class="gloss-entry__def">A surface protein on the outer membrane of coronaviruses that binds to ACE2 receptors on human cells to gain entry. The spike protein is the primary target of COVID-19 vaccines and a key factor distinguishing SARS-CoV-2's infectiousness from that of earlier coronaviruses.</p>
  <a class="gloss-entry__link" href="/coronavirus/home">Module 3: Coronavirus →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Steady state</p>
  <p class="gloss-entry__def">The concentration at which the production and degradation rates of a molecule are exactly balanced, so the concentration no longer changes over time. Many regulatory circuits are understood by analyzing which steady states exist and how quickly the system reaches them.</p>
  <a class="gloss-entry__link" href="/motifs/nar">Module 1: Negative Autoregulation →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Structural alignment</p>
  <p class="gloss-entry__def">A comparison of two protein structures that identifies which residues correspond to each other and quantifies how similar the local structures are at each position. Used in Module 3 to pinpoint the specific residues where SARS-CoV and SARS-CoV-2 differ most in their interaction with ACE2.</p>
  <a class="gloss-entry__link" href="/coronavirus/multiseq">Module 3: Structural Differences →</a>
</div>

<h2 class="gloss-letter" id="t">T</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Transcription factor</p>
  <p class="gloss-entry__def">A protein that binds to DNA near a gene and either activates or represses that gene's transcription. Transcription factors are the master regulators of gene expression, and their interactions with each other form the transcription factor networks studied in Module 1.</p>
  <a class="gloss-entry__link" href="/motifs/transcription">Module 1: Transcription →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Turing patterns</p>
  <p class="gloss-entry__def">Striking spatial patterns — stripes, spots, and irregular textures — that arise spontaneously from reaction-diffusion systems. First predicted mathematically by Alan Turing in 1952, they have since been observed in animal pigmentation, seashell markings, and the spacing of fingers on developing limbs.</p>
  <a class="gloss-entry__link" href="/prologue/">Prologue →</a>
</div>

<h2 class="gloss-letter" id="v">V</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Van der Waals interactions</p>
  <p class="gloss-entry__def">Weak attractive and repulsive forces between atoms caused by temporary fluctuations in electron distribution. Although individually tiny, van der Waals interactions across hundreds of closely packed atoms contribute significantly to protein stability and binding affinity.</p>
  <a class="gloss-entry__link" href="/coronavirus/biochemistry">Module 3: Protein Biochemistry →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Variable and conserved regions</p>
  <p class="gloss-entry__def">In a comparison of related protein sequences, conserved regions are stretches where the amino acid sequence is nearly identical across strains or species — reflecting structural or functional constraints. Variable regions evolve more freely and often determine differences in function or antigenicity.</p>
  <a class="gloss-entry__link" href="/coronavirus/homology">Module 3: Homology Modeling →</a>
</div>

<h2 class="gloss-letter" id="w">W</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Well-mixed assumption</p>
  <p class="gloss-entry__def">The simplifying assumption that all molecules in a reaction system are uniformly distributed throughout the volume, so that their concentrations (not positions) fully describe the system's state. This assumption underlies the Gillespie algorithm and many ODE models of cellular signaling.</p>
  <a class="gloss-entry__link" href="/chemotaxis/gillespie">Module 2: Gillespie Algorithm →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">White blood cell (leukocyte)</p>
  <p class="gloss-entry__def">A cell of the immune system that circulates in the blood and helps identify and destroy foreign pathogens. The three major families — granulocytes, monocytes, and lymphocytes — are distinguishable by the shape of their nucleus, which is the basis for the classification pipeline in Module 4.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/home">Module 4: White Blood Cells →</a>
</div>

<h2 class="gloss-letter" id="x">X</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">X-ray crystallography</p>
  <p class="gloss-entry__def">A laboratory technique for determining protein structure in which many copies of a protein are crystallized and bombarded with an intense X-ray beam. The diffraction pattern reveals the position of every atom in the crystal. X-ray crystallography produced the majority of structures in the Protein Data Bank.</p>
  <a class="gloss-entry__link" href="/coronavirus/structure_intro">Module 3: Protein Structure →</a>
</div>

</div>
