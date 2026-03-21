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
  max-width: 680px;
  margin: 2rem 0 3rem;
  line-height: 1.7;
}

.gloss-toc {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.5rem;
  margin-bottom: 3.5rem;
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
  max-width: 680px;
}

.gloss-entries {
  max-width: 680px;
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

<p class="gloss-intro">Definitions of key concepts used throughout the course, organized alphabetically. Each entry links to the lesson where the term is introduced.</p>

<nav class="gloss-toc" aria-label="Jump to letter">
  <a class="gloss-toc__link" href="#a">A</a>
  <a class="gloss-toc__link" href="#b">B</a>
  <a class="gloss-toc__link" href="#c">C</a>
  <a class="gloss-toc__link" href="#d">D</a>
  <a class="gloss-toc__link" href="#e">E</a>
  <a class="gloss-toc__link" href="#f">F</a>
  <a class="gloss-toc__link" href="#g">G</a>
  <a class="gloss-toc__link" href="#h">H</a>
  <a class="gloss-toc__link" href="#k">K</a>
  <a class="gloss-toc__link" href="#l">L</a>
  <a class="gloss-toc__link" href="#m">M</a>
  <a class="gloss-toc__link" href="#n">N</a>
  <a class="gloss-toc__link" href="#p">P</a>
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
  <p class="gloss-entry__term">Adaptation</p>
  <p class="gloss-entry__def">The process by which <em>E. coli</em> responds to relative changes in attractant concentration rather than absolute levels. If the concentration stays constant, the bacterium returns to its baseline tumbling frequency — a reset that allows it to respond to the next change.</p>
  <a class="gloss-entry__link" href="/chemotaxis/adaptation">Module 2: Chemotaxis →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Amino acid</p>
  <p class="gloss-entry__def">The building blocks of proteins. Each amino acid shares a common backbone — an alpha carbon bonded to a hydrogen, a carboxyl group, and an amino group — plus a variable side chain that determines its chemical character.</p>
  <a class="gloss-entry__link" href="/coronavirus/structure_intro">Module 3: Spike Proteins →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Attractant</p>
  <p class="gloss-entry__def">A chemical signal that bacteria like <em>E. coli</em> move toward. Common attractants include glucose and other electron acceptors that serve as food sources.</p>
  <a class="gloss-entry__link" href="/chemotaxis/home">Module 2: Chemotaxis →</a>
</div>

<h2 class="gloss-letter" id="b">B</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Brownian motion</p>
  <p class="gloss-entry__def">The random movement of a small particle — such as a glucose molecule in solution — caused by countless collisions with surrounding water molecules. Brownian motion is the microscopic mechanism underlying diffusion.</p>
  <a class="gloss-entry__link" href="/prologue/random_walk">Prologue: Random Walks →</a>
</div>

<h2 class="gloss-letter" id="c">C</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Central dogma of molecular biology</p>
  <p class="gloss-entry__def">The principle that genetic information flows in one direction: DNA is transcribed into RNA, and RNA is translated into protein. This flow underlies nearly all cellular function.</p>
  <a class="gloss-entry__link" href="/motifs/transcription">Module 1: Transcription →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">ChIP-seq (chromatin immunoprecipitation sequencing)</p>
  <p class="gloss-entry__def">An experimental technique that identifies which genes a transcription factor binds to by combining cellular DNA with the protein of interest, then using antibodies to isolate and sequence the bound DNA fragments.</p>
  <a class="gloss-entry__link" href="/motifs/transcription">Module 1: Transcription →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Chemotaxis</p>
  <p class="gloss-entry__def">The directed movement of an organism in response to a chemical gradient — toward attractants and away from repellents. <em>E. coli</em>'s chemotaxis system is a remarkable example of biological computation at the molecular scale.</p>
  <a class="gloss-entry__link" href="/chemotaxis/home">Module 2: Chemotaxis →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Circadian rhythm</p>
  <p class="gloss-entry__def">A roughly 24-hour biological cycle of sleep and wakefulness present in most living organisms. At the molecular level, circadian rhythms are maintained by genetic oscillator circuits.</p>
  <a class="gloss-entry__link" href="/motifs/oscillators">Module 1: Oscillators →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Codon</p>
  <p class="gloss-entry__def">A triplet of RNA nucleotides that specifies a single amino acid according to the genetic code. The sequence of codons in an mRNA molecule determines the sequence of amino acids in the resulting protein.</p>
  <a class="gloss-entry__link" href="/motifs/transcription">Module 1: Transcription →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Combinatorial explosion</p>
  <p class="gloss-entry__def">A phenomenon in which the number of possible states — and therefore reactions — in a model grows so rapidly with the number of components that writing them out explicitly becomes impractical. Rule-based modeling is one response to this challenge.</p>
  <a class="gloss-entry__link" href="/chemotaxis/adaptation">Module 2: Adaptation →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Coronavirus</p>
  <p class="gloss-entry__def">A family of viruses named for the crown-like ring of spike proteins on their outer membrane. The spike proteins are the key to how coronaviruses infect host cells, making them a central target of vaccine development.</p>
  <a class="gloss-entry__link" href="/coronavirus/home">Module 3: Coronavirus →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Cryo-electron microscopy (cryo-EM)</p>
  <p class="gloss-entry__def">A method for determining protein structure in which thousands of copies of a protein are flash-frozen in non-crystalline ice and imaged with an electron microscope. It can capture proteins in multiple conformations and does not require crystallization.</p>
  <a class="gloss-entry__link" href="/coronavirus/structure_intro">Module 3: Protein Structure →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Curse of dimensionality</p>
  <p class="gloss-entry__def">A set of counterintuitive phenomena that arise in high-dimensional spaces — for instance, that randomly sampled points in high dimensions tend to be nearly equidistant from each other. This makes clustering and classification much harder in many dimensions than in two or three.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/pca">Module 4: PCA →</a>
</div>

<h2 class="gloss-letter" id="d">D</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Damped oscillation</p>
  <p class="gloss-entry__def">A pattern in which a quantity oscillates above and below a steady state while the amplitude of each swing gradually decreases. Some feedforward loop circuits produce damped oscillations in transcription factor concentrations before settling at equilibrium.</p>
  <a class="gloss-entry__link" href="/motifs/feedforward">Module 1: Feedforward Loops →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Diffusion</p>
  <p class="gloss-entry__def">The net movement of particles from regions of high concentration to regions of low concentration, driven by random molecular motion. At the microscopic level, diffusion emerges from many individual random walks taken by individual particles.</p>
  <a class="gloss-entry__link" href="/prologue/random_walk">Prologue: Random Walks →</a>
</div>

<h2 class="gloss-letter" id="e">E</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Emergent behavior</p>
  <p class="gloss-entry__def">Complex, organized patterns that arise from systems built on simple rules — often involving randomness. Turing patterns, flocking behavior, and the chemotaxis algorithm are all examples of emergence in biological systems.</p>
  <a class="gloss-entry__link" href="/prologue/">Prologue →</a>
</div>

<h2 class="gloss-letter" id="f">F</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Feedforward loop (FFL)</p>
  <p class="gloss-entry__def">A recurring network motif in which transcription factor X regulates both Y and Z, and Y also regulates Z. This structure allows a signal to reach Z through two paths simultaneously, enabling sophisticated regulatory behaviors such as noise filtering and pulse generation.</p>
  <a class="gloss-entry__link" href="/motifs/feedforward">Module 1: Feedforward Loops →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Feed rate</p>
  <p class="gloss-entry__def">In the Gray-Scott reaction-diffusion model, the constant rate at which the prey particle A is replenished into the system. Along with the kill rate, it is one of the two main parameters that determine which Turing pattern emerges.</p>
  <a class="gloss-entry__link" href="/prologue/reaction-diffusion">Prologue: Reaction-Diffusion →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Fragment assembly</p>
  <p class="gloss-entry__def">A homology modeling strategy that assumes conserved regions between related proteins share essentially identical three-dimensional structures, and fills in the remaining variable regions by selecting matching fragments from a library of known protein substructures.</p>
  <a class="gloss-entry__link" href="/coronavirus/homology">Module 3: Homology Modeling →</a>
</div>

<h2 class="gloss-letter" id="g">G</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Genetic code</p>
  <p class="gloss-entry__def">The universal mapping from RNA codons to amino acids. With four possible nucleotides and codons of length three, there are 64 possible codons encoding 20 amino acids plus stop signals.</p>
  <a class="gloss-entry__link" href="/motifs/transcription">Module 1: Transcription →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Genome</p>
  <p class="gloss-entry__def">The complete set of DNA in a cell, encoding all of the cell's proteins. Most of the genome is not actively transcribed at any given time; which genes are active depends on the cell type and current conditions.</p>
  <a class="gloss-entry__link" href="/motifs/transcription">Module 1: Transcription →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Gray-Scott model</p>
  <p class="gloss-entry__def">A cellular automaton that simulates a coarse-grained reaction-diffusion system. Two particle types — a prey A and a predator B — diffuse and react according to simple rules. Despite this simplicity, the model generates a rich variety of Turing patterns depending on the feed and kill rate parameters.</p>
  <a class="gloss-entry__link" href="/prologue/gray-scott">Prologue: Gray-Scott →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Granulocyte</p>
  <p class="gloss-entry__def">A family of white blood cells identifiable by their multilobular nucleus — several lobes of nuclear material linked by thin strands. Granulocytes include neutrophils, eosinophils, and basophils.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/home">Module 4: White Blood Cells →</a>
</div>

<h2 class="gloss-letter" id="h">H</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Homology modeling</p>
  <p class="gloss-entry__def">A computational approach to protein structure prediction that uses the known three-dimensional structure of a related protein as a template. The more similar the sequences, the more reliable the predicted structure.</p>
  <a class="gloss-entry__link" href="/coronavirus/homology">Module 3: Homology Modeling →</a>
</div>

<h2 class="gloss-letter" id="k">K</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Kabsch algorithm</p>
  <p class="gloss-entry__def">An algorithm that finds the optimal rotation aligning one shape to another by minimizing the root mean square deviation (RMSD) between corresponding points. Used in Module 4 to compare white blood cell nucleus shapes.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/shape_space">Module 4: Shape Space →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Kill rate</p>
  <p class="gloss-entry__def">In the Gray-Scott model, the rate at which the predator particle B is removed from the system. Together with the feed rate, it determines which Turing pattern the simulation produces.</p>
  <a class="gloss-entry__link" href="/prologue/reaction-diffusion">Prologue: Reaction-Diffusion →</a>
</div>

<h2 class="gloss-letter" id="l">L</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Levinthal's paradox</p>
  <p class="gloss-entry__def">The apparent contradiction that proteins fold reliably into a single stable conformation, even though the number of possible configurations is astronomically large. If a protein sampled conformations randomly, folding would take longer than the age of the universe.</p>
  <a class="gloss-entry__link" href="/coronavirus/structure_intro">Module 3: Protein Structure →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Ligand</p>
  <p class="gloss-entry__def">A molecule that binds to a receptor protein. In chemotaxis, attractant and repellent molecules are ligands that bind to methyl-accepting chemotaxis proteins (MCPs) on <em>E. coli</em>'s surface, triggering the signal transduction cascade.</p>
  <a class="gloss-entry__link" href="/chemotaxis/signal">Module 2: Signal Transduction →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Lymphocyte</p>
  <p class="gloss-entry__def">A family of white blood cells with a small, rounded nucleus that occupies a large fraction of the cell's volume. Lymphocytes include B cells and T cells, which play central roles in the adaptive immune response.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/home">Module 4: White Blood Cells →</a>
</div>

<h2 class="gloss-letter" id="m">M</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Mathematically controlled comparison</p>
  <p class="gloss-entry__def">An experimental design principle that holds all parameters constant between two simulations except for the one being tested. This isolates the effect of a single variable and avoids confounding conclusions.</p>
  <a class="gloss-entry__link" href="/motifs/nar">Module 1: Negative Autoregulation →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Methylation</p>
  <p class="gloss-entry__def">The addition of a methyl group (–CH₃) to a molecule. In <em>E. coli</em> chemotaxis, the methylation state of receptor proteins is the molecular memory that enables adaptation to sustained attractant concentrations.</p>
  <a class="gloss-entry__link" href="/chemotaxis/adaptation">Module 2: Adaptation →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Monocyte</p>
  <p class="gloss-entry__def">A family of white blood cells with a single, irregularly shaped nucleus. Monocytes are the largest type of white blood cell and play key roles in immune defense and tissue repair.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/home">Module 4: White Blood Cells →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Morphogenesis</p>
  <p class="gloss-entry__def">The biological process by which organisms develop their shape and form — including the spatial patterns of skin color, organ positioning, and tissue structure. Turing's 1952 paper proposed a reaction-diffusion mechanism as a mathematical basis for morphogenesis.</p>
  <a class="gloss-entry__link" href="/prologue/">Prologue →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Multi-dimensional scaling</p>
  <p class="gloss-entry__def">A family of statistical methods that assign data points to a lower-dimensional space such that the distances between points in that space approximate the true distances in the original high-dimensional space. Used to visualize white blood cell shape data.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/shape_space">Module 4: Shape Space →</a>
</div>

<h2 class="gloss-letter" id="n">N</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Negative autoregulation</p>
  <p class="gloss-entry__def">A network motif in which a transcription factor represses its own gene. This self-limiting feedback accelerates the response to a stimulus and buffers against random fluctuations in protein concentration.</p>
  <a class="gloss-entry__link" href="/motifs/autoregulation">Module 1: Autoregulation →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Network motif</p>
  <p class="gloss-entry__def">A subgraph pattern that appears far more often in a biological network than would be expected by chance. Motifs like negative autoregulation, feedforward loops, and the repressilator are thought to have been selected by evolution because they confer useful regulatory properties.</p>
  <a class="gloss-entry__link" href="/motifs/home">Module 1: Motifs →</a>
</div>

<h2 class="gloss-letter" id="p">P</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Parameter</p>
  <p class="gloss-entry__def">A numerical quantity that serves as an input to a model — a dial that can be tuned to change the system's behavior. In the Gray-Scott model, for example, the feed rate and kill rate are the two key parameters that determine which Turing pattern emerges.</p>
  <a class="gloss-entry__link" href="/prologue/reaction-diffusion">Prologue: Reaction-Diffusion →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Peptide bond</p>
  <p class="gloss-entry__def">The strong covalent bond that links one amino acid to the next in a protein chain, formed between the carboxyl group of one amino acid and the amino group of the next. A protein's backbone is a chain of peptide bonds.</p>
  <a class="gloss-entry__link" href="/coronavirus/structure_intro">Module 3: Protein Structure →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Principal component analysis (PCA)</p>
  <p class="gloss-entry__def">A dimensionality reduction technique that finds the directions in a high-dimensional dataset along which the data varies most. Projecting data onto the top principal components retains as much information as possible in fewer dimensions.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/pca">Module 4: PCA →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Protein Data Bank (PDB)</p>
  <p class="gloss-entry__def">The primary public repository of experimentally determined protein structures, containing over 160,000 entries. Every structure in the course — including the SARS and SARS-CoV-2 spike proteins — comes from the PDB.</p>
  <a class="gloss-entry__link" href="/coronavirus/structure_intro">Module 3: Protein Structure →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Protein structure prediction</p>
  <p class="gloss-entry__def">The computational problem of determining the three-dimensional folded shape of a protein from its amino acid sequence alone. Long considered one of biology's hardest open problems, it was largely solved by AlphaFold in 2020.</p>
  <a class="gloss-entry__link" href="/coronavirus/home">Module 3: Coronavirus →</a>
</div>

<h2 class="gloss-letter" id="r">R</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Random walk</p>
  <p class="gloss-entry__def">A path generated by a sequence of steps, each taken in a randomly chosen direction. The random walk is the microscopic model underlying diffusion; by the random walk theorem, after <em>n</em> steps a particle will on average be a distance proportional to √<em>n</em> from its starting point.</p>
  <a class="gloss-entry__link" href="/prologue/random_walk">Prologue: Random Walks →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Reaction-diffusion system</p>
  <p class="gloss-entry__def">A model in which particles both diffuse through space and react chemically when they collide. Turing showed in 1952 that a simple two-species reaction-diffusion system can spontaneously generate spatial patterns from a uniform initial state.</p>
  <a class="gloss-entry__link" href="/prologue/reaction-diffusion">Prologue: Reaction-Diffusion →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Repellent</p>
  <p class="gloss-entry__def">A chemical signal that bacteria move away from. <em>E. coli</em> treats certain ions such as Ni²⁺ and Co²⁺ as repellents, increasing its tumbling frequency to escape regions of high repellent concentration.</p>
  <a class="gloss-entry__link" href="/chemotaxis/home">Module 2: Chemotaxis →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Repressilator</p>
  <p class="gloss-entry__def">A synthetic genetic oscillator built from three transcription factors arranged in a cycle: X represses Y, Y represses Z, and Z represses X. This three-node negative feedback loop can produce sustained oscillations in protein concentrations.</p>
  <a class="gloss-entry__link" href="/motifs/oscillators">Module 1: Oscillators →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Response time</p>
  <p class="gloss-entry__def">The time a system takes to reach its steady-state concentration after receiving a stimulus. Negative autoregulation speeds up the response time compared to an unregulated gene, allowing cells to react more quickly to changing conditions.</p>
  <a class="gloss-entry__link" href="/motifs/nar">Module 1: Negative Autoregulation →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Root mean square deviation (RMSD)</p>
  <p class="gloss-entry__def">A measure of the average distance between corresponding points in two structures or shapes. In Module 4, RMSD is used to quantify how different two white blood cell nucleus shapes are from each other after optimal alignment.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/shape_space">Module 4: Shape Space →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Rule-based modeling</p>
  <p class="gloss-entry__def">A modeling paradigm in which a potentially huge number of chemical reactions are specified compactly through a small set of rules. This is especially important for systems like chemotaxis signaling, where the combinatorial explosion of receptor states makes explicit enumeration of reactions infeasible.</p>
  <a class="gloss-entry__link" href="/chemotaxis/adaptation">Module 2: Adaptation →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Run and tumble</p>
  <p class="gloss-entry__def">The two-mode locomotion strategy of <em>E. coli</em>. During a run, the bacterium's flagella rotate in concert and propel it forward. During a tumble, the flagella rotate independently and the bacterium reorients in a random direction. By modulating the ratio of runs to tumbles, the bacterium performs a biased random walk toward attractants.</p>
  <a class="gloss-entry__link" href="/chemotaxis/walk">Module 2: Bacterial Walk →</a>
</div>

<h2 class="gloss-letter" id="s">S</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Shape space</p>
  <p class="gloss-entry__def">A mathematical representation in which each cell nucleus shape is encoded as a point in high-dimensional space, with coordinates derived by sampling points along the nucleus boundary. Distance in shape space corresponds to dissimilarity in shape.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/shape_space">Module 4: Shape Space →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Signal transduction</p>
  <p class="gloss-entry__def">The process by which a cell detects an external stimulus and converts it into an internal molecular response. In chemotaxis, receptor proteins on the cell surface bind attractant molecules and trigger a cascade of protein modifications that ultimately change the bacterium's flagellar rotation.</p>
  <a class="gloss-entry__link" href="/chemotaxis/signal">Module 2: Signal Transduction →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Spike protein</p>
  <p class="gloss-entry__def">A surface protein on the outer membrane of coronaviruses that binds to ACE2 receptors on human cells to gain entry. Differences in the spike protein between SARS-CoV and SARS-CoV-2 help explain why the latter spread so much more effectively.</p>
  <a class="gloss-entry__link" href="/coronavirus/home">Module 3: Coronavirus →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Steady state</p>
  <p class="gloss-entry__def">The concentration at which the rate of production of a molecule exactly balances its rate of degradation, so the concentration no longer changes over time. Many biological regulatory circuits are analyzed in terms of their steady states and how quickly they reach them.</p>
  <a class="gloss-entry__link" href="/motifs/nar">Module 1: Negative Autoregulation →</a>
</div>

<h2 class="gloss-letter" id="t">T</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Transcription factor</p>
  <p class="gloss-entry__def">A protein that binds to DNA near a gene and either activates or represses that gene's transcription. Transcription factors are the master regulators of gene expression, and their interactions form the transcription factor networks studied in Module 1.</p>
  <a class="gloss-entry__link" href="/motifs/transcription">Module 1: Transcription →</a>
</div>

<div class="gloss-entry">
  <p class="gloss-entry__term">Turing patterns</p>
  <p class="gloss-entry__def">Striking spatial patterns — stripes, spots, and mottled textures — that arise spontaneously from reaction-diffusion systems. First predicted mathematically by Alan Turing in 1952, they have since been observed in animal pigmentation, seashell patterns, and even the spacing of fingers on a developing limb.</p>
  <a class="gloss-entry__link" href="/prologue/">Prologue →</a>
</div>

<h2 class="gloss-letter" id="v">V</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">Variable and conserved regions</p>
  <p class="gloss-entry__def">In a comparison of related protein sequences, conserved regions are stretches where the amino acid sequence is nearly identical across species or strains — reflecting functional or structural constraints. Variable regions differ more freely and often evolve faster.</p>
  <a class="gloss-entry__link" href="/coronavirus/homology">Module 3: Homology Modeling →</a>
</div>

<h2 class="gloss-letter" id="w">W</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">White blood cell (leukocyte)</p>
  <p class="gloss-entry__def">A cell of the immune system that circulates in the blood and helps identify and destroy foreign pathogens. The three major families — granulocytes, monocytes, and lymphocytes — are distinguishable by the shape of their nucleus, which is the basis for the classification task in Module 4.</p>
  <a class="gloss-entry__link" href="/white_blood_cells/home">Module 4: White Blood Cells →</a>
</div>

<h2 class="gloss-letter" id="x">X</h2>

<div class="gloss-entry">
  <p class="gloss-entry__term">X-ray crystallography</p>
  <p class="gloss-entry__def">A laboratory technique for determining protein structure in which many copies of a protein are crystallized and bombarded with X-rays. The diffraction pattern reveals the position of every atom. X-ray crystallography produced many of the structures in the Protein Data Bank.</p>
  <a class="gloss-entry__link" href="/coronavirus/structure_intro">Module 3: Protein Structure →</a>
</div>

</div>
