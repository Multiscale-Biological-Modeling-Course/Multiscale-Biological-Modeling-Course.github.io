/* ==========================================================================
   Glossary tooltip data — assets/js/glossary-data.js
   Keys are lowercase display terms; values are { def, anchor } objects.
   Longer / more specific terms must come BEFORE shorter sub-terms so the
   DOM walker (which sorts this object's keys longest-first) matches the
   full phrase before a substring.
   ========================================================================== */
var GLOSS_DATA = {

  /* A */
  "ab initio structure prediction": {
    def: "A computational approach to predicting a protein\u2019s 3D structure from its amino acid sequence alone, without a template, using force fields to evaluate candidate conformations.",
    anchor: "ab-initio-structure-prediction"
  },
  "accuracy": {
    def: "The fraction of data points a classifier correctly assigns to their true class; can be misleading when classes are imbalanced.",
    anchor: "accuracy"
  },
  "adaptation": {
    def: "The process by which <em>E.\u00a0coli</em> responds to relative changes in attractant concentration rather than absolute levels, returning to its baseline tumbling frequency when concentration stabilizes.",
    anchor: "adaptation"
  },
  "alpha helix": {
    def: "A common protein secondary structure in which nearby amino acids coil into a right-handed tube stabilized by hydrogen bonds.",
    anchor: "alpha-helix"
  },
  "amino acid": {
    def: "One of the 20 standard building blocks of proteins, each with a shared backbone and a variable side chain that determines its chemical character.",
    anchor: "amino-acid"
  },
  "anisotropic network model": {
    def: "An elastic network model that tracks both the magnitude and direction of residue fluctuations, revealing the preferred directions of protein domain motions.",
    anchor: "anisotropic-network-model-anm"
  },
  "attractant": {
    def: "A chemical signal that bacteria move toward; common attractants for <em>E.\u00a0coli</em> include glucose and other electron acceptors.",
    anchor: "attractant"
  },
  "autoregulation": {
    def: "A process in which a transcription factor binds to its own gene\u2019s regulatory region; negative autoregulation \u2014 where it represses its own production \u2014 is one of the most common network motifs.",
    anchor: "autoregulation"
  },

  /* B */
  "b-factor": {
    def: "A measure in X-ray crystallography structures reflecting uncertainty in each atom\u2019s position; regions with high B-factors are more flexible.",
    anchor: "b-factor-temperature-factor"
  },
  "beta sheet": {
    def: "A common protein secondary structure in which amino acids line up side-by-side in a flat, pleated sheet stabilized by hydrogen bonds.",
    anchor: "beta-sheet"
  },
  "brownian motion": {
    def: "The random movement of a small particle caused by collisions with surrounding molecules; the physical mechanism underlying diffusion.",
    anchor: "brownian-motion"
  },

  /* C */
  "central dogma of molecular biology": {
    def: "The principle that genetic information flows one way: DNA is transcribed into RNA, and RNA is translated into protein.",
    anchor: "central-dogma-of-molecular-biology"
  },
  "cellular automaton": {
    def: "A grid of cells where each cell\u2019s state updates at each time step based on fixed rules from its current state and its neighbors\u2019 states.",
    anchor: "cellular-automaton"
  },
  "coarse-grained model": {
    def: "A simplified model that replaces fine-grained detail with averaged quantities such as concentrations, sacrificing microscopic accuracy for computational tractability.",
    anchor: "coarse-grained-model"
  },
  "combinatorial explosion": {
    def: "The phenomenon where the number of possible molecular states grows so rapidly with the number of components that explicit enumeration becomes impractical.",
    anchor: "combinatorial-explosion"
  },
  "confusion matrix": {
    def: "A table that summarizes classifier performance by comparing the true class of each data point against the predicted class.",
    anchor: "confusion-matrix"
  },
  "contact map": {
    def: "A binary matrix for a protein where entry (i,\u00a0j) is 1 if residues i and j are within a threshold distance in the folded structure.",
    anchor: "contact-map"
  },
  "cross-correlation": {
    def: "A metric from \u22121 to 1 measuring how similarly two protein residues move: near 1 means they move together; near \u22121 means opposite directions.",
    anchor: "cross-correlation"
  },
  "cross-validation": {
    def: "A method for estimating classifier performance by repeatedly training on a subset and testing on a held-out fold, then averaging the results.",
    anchor: "cross-validation"
  },
  "cryo-electron microscopy": {
    def: "A protein structure technique where molecules are flash-frozen and imaged with an electron microscope, requiring no crystals and capturing multiple conformations.",
    anchor: "cryo-electron-microscopy-cryo-em"
  },
  "curse of dimensionality": {
    def: "Counterintuitive phenomena in high-dimensional spaces \u2014 such as near-equidistant random points \u2014 that make distance-based classifiers less effective.",
    anchor: "curse-of-dimensionality"
  },
  "chemotaxis": {
    def: "The directed movement of an organism in response to a chemical gradient \u2014 toward attractants and away from repellents.",
    anchor: "chemotaxis"
  },
  "circadian rhythm": {
    def: "A roughly 24-hour biological cycle maintained by genetic oscillator circuits in which transcription factors activate and repress each other cyclically.",
    anchor: "circadian-rhythm"
  },
  "codon": {
    def: "A triplet of RNA nucleotides that specifies a single amino acid according to the genetic code.",
    anchor: "codon"
  },
  "coronavirus": {
    def: "A family of viruses named for the crown-like spike proteins on their outer membrane, which are the mechanism of host cell infection.",
    anchor: "coronavirus"
  },

  /* D */
  "damped oscillation": {
    def: "A pattern in which a quantity oscillates above and below a steady state while the amplitude gradually decreases until the system settles.",
    anchor: "damped-oscillation"
  },
  "dephosphorylation": {
    def: "The removal of a phosphoryl group from a molecule; in chemotaxis, dephosphorylation of CheY by CheZ rapidly turns off the tumbling signal.",
    anchor: "dephosphorylation"
  },
  "diffusion": {
    def: "The net movement of particles from regions of high concentration to low concentration, driven by random molecular motion.",
    anchor: "diffusion"
  },

  /* E */
  "elastic network model": {
    def: "A simplified model of protein dynamics in which nearby alpha carbons are connected by virtual springs, capturing large-scale collective motions without simulating every atom.",
    anchor: "elastic-network-model-enm"
  },
  "electrostatic interactions": {
    def: "Forces between charged amino acid side chains \u2014 attraction between opposite charges and repulsion between like charges \u2014 that help determine protein conformation.",
    anchor: "electrostatic-interactions"
  },
  "emergent behavior": {
    def: "Complex, organized patterns that arise from systems governed by simple rules, often involving randomness.",
    anchor: "emergent-behavior"
  },
  "euclidean distance": {
    def: "The straight-line distance between two points in n-dimensional space; the standard distance metric used by k-nearest neighbors classifiers.",
    anchor: "euclidean-distance"
  },
  "exponential distribution": {
    def: "A probability distribution describing the wait time between events in a Poisson process; the Gillespie algorithm draws reaction times from it.",
    anchor: "exponential-distribution"
  },

  /* F */
  "feedforward loop": {
    def: "A network motif in which transcription factor X regulates both Y and Z, and Y also regulates Z, enabling noise filtering, pulse generation, and sign-sensitive delay.",
    anchor: "feedforward-loop-ffl"
  },
  "force field": {
    def: "A set of energy functions used in ab initio structure prediction to estimate the potential energy of a candidate protein conformation.",
    anchor: "force-field"
  },
  "fragment assembly": {
    def: "A homology modeling strategy that fills variable loop regions by selecting short peptide fragments from a library of known protein substructures.",
    anchor: "fragment-assembly"
  },

  /* G */
  "gaussian network model": {
    def: "An elastic network model where alpha carbons within a threshold distance are connected by springs and fluctuations are assumed Gaussian, predicting residue flexibility and correlated motions.",
    anchor: "gaussian-network-model-gnm"
  },
  "genetic code": {
    def: "The universal mapping from RNA codons to amino acids; redundant since most amino acids are specified by multiple codons.",
    anchor: "genetic-code"
  },
  "gillespie algorithm": {
    def: "A stochastic simulation algorithm that models chemical reactions by sampling the time until the next reaction from an exponential distribution and selecting which reaction fires by rate.",
    anchor: "gillespie-algorithm-ssa"
  },
  "glycan shield": {
    def: "A protective coating on a virus\u2019s outer surface made of glycans that physically blocks antibodies from reaching the underlying viral proteins.",
    anchor: "glycan-shield"
  },
  "glycan": {
    def: "A carbohydrate structure attached to proteins or lipids; on the coronavirus spike protein, glycans form a shield against antibody detection.",
    anchor: "glycan"
  },
  "gray-scott model": {
    def: "A cellular automaton simulating a coarse-grained reaction-diffusion system that generates a rich variety of Turing patterns depending on feed and kill rate parameters.",
    anchor: "gray-scott-model"
  },
  "genome": {
    def: "The complete set of DNA in a cell, encoding all of the organism\u2019s proteins.",
    anchor: "genome"
  },
  "granulocyte": {
    def: "A white blood cell family characterized by a multilobular nucleus; includes neutrophils, eosinophils, and basophils.",
    anchor: "granulocyte"
  },

  /* H */
  "homology modeling": {
    def: "A computational method for predicting a protein\u2019s 3D structure by using the known structure of a closely related protein as a template.",
    anchor: "homology-modeling"
  },
  "homotrimer": {
    def: "A protein complex formed from three identical chains; the coronavirus spike protein is a homotrimer.",
    anchor: "homotrimer"
  },

  /* I */
  "imbalanced classes": {
    def: "A dataset where classes have very different numbers of examples, making accuracy a misleading performance metric.",
    anchor: "imbalanced-classes"
  },

  /* K */
  "kabsch algorithm": {
    def: "An algorithm that finds the rotation minimizing RMSD between two sets of corresponding points, used to optimally align shapes before computing their distance.",
    anchor: "kabsch-algorithm"
  },
  "kill rate": {
    def: "In the Gray-Scott model, the rate at which the predator particle B is removed; together with feed rate it governs which Turing pattern is produced.",
    anchor: "kill-rate"
  },
  "k-nearest neighbors": {
    def: "A classification algorithm that assigns a point to the class most common among its k closest neighbors in feature space.",
    anchor: "k-nearest-neighbors-k-nn"
  },

  /* L */
  "levinthal's paradox": {
    def: "The observation that proteins fold reliably in milliseconds despite the astronomically large number of possible conformations.",
    anchor: "levinthals-paradox"
  },
  "ligand": {
    def: "A molecule that binds to a receptor protein; in chemotaxis, attractants and repellents are ligands that bind MCP receptors on <em>E.\u00a0coli</em>\u2019s surface.",
    anchor: "ligand"
  },
  "local minimum": {
    def: "A point in an optimization landscape lower than all nearby points but not necessarily the global minimum; a central hazard in ab initio structure prediction.",
    anchor: "local-minimum"
  },
  "lymphocyte": {
    def: "A white blood cell family with a small, rounded nucleus; includes B cells and T cells that play central roles in adaptive immunity.",
    anchor: "lymphocyte"
  },

  /* M */
  "mathematically controlled comparison": {
    def: "An experimental design where all parameters are held identical between two simulations except the one being tested.",
    anchor: "mathematically-controlled-comparison"
  },
  "methylation": {
    def: "The addition of a methyl group (\u2013CH\u2083) to a molecule; in <em>E.\u00a0coli</em> chemotaxis, MCP methylation serves as molecular memory enabling adaptation.",
    anchor: "methylation"
  },
  "molecular dynamics": {
    def: "A simulation technique that models all atomic movements in a protein over time using force fields, revealing how structure changes during function.",
    anchor: "molecular-dynamics-md"
  },
  "monocyte": {
    def: "A white blood cell family with a single irregularly shaped nucleus; the largest white blood cells, able to differentiate into macrophages.",
    anchor: "monocyte"
  },
  "morphogenesis": {
    def: "The biological process by which organisms develop their shape and form, including spatial patterns of pigmentation and organ placement.",
    anchor: "morphogenesis"
  },
  "multi-dimensional scaling": {
    def: "A family of methods that embed data points in a lower-dimensional space so that distances approximate the original pairwise distances.",
    anchor: "multi-dimensional-scaling-mds"
  },

  /* N */
  "negative autoregulation": {
    def: "A network motif in which a transcription factor represses its own gene, speeding response to stimuli and buffering against noise.",
    anchor: "negative-autoregulation"
  },
  "network motif": {
    def: "A subgraph pattern that appears far more often in a biological network than expected by chance, likely selected by evolution for its regulatory utility.",
    anchor: "network-motif"
  },
  "normal mode analysis": {
    def: "A method for decomposing protein collective motions into independent vibrational modes; the slowest modes correspond to the largest-scale, functionally relevant motions.",
    anchor: "normal-mode-analysis-nma"
  },

  /* P */
  "phosphorylation cascade": {
    def: "A sequence of phosphorylation and dephosphorylation events that transmits and amplifies a signal through a cell\u2019s interior.",
    anchor: "phosphorylation-cascade"
  },
  "phosphorylation": {
    def: "A chemical reaction that attaches a phosphoryl group to a protein, changing its shape and activity; a key mechanism for rapid intracellular signaling.",
    anchor: "phosphorylation"
  },
  "peptide bond": {
    def: "The strong covalent bond linking consecutive amino acids in a protein chain, formed between the carboxyl group of one and the amino group of the next.",
    anchor: "peptide-bond"
  },
  "poisson distribution": {
    def: "A probability distribution modeling the number of independent events in a fixed time interval; the foundation of the Gillespie algorithm.",
    anchor: "poisson-distribution"
  },
  "principal component analysis": {
    def: "A dimensionality reduction technique that finds the directions of maximum variance in a dataset and projects the data onto those directions.",
    anchor: "principal-component-analysis-pca"
  },
  "protein data bank": {
    def: "The primary public repository for experimentally determined protein structures, with over 160,000 entries from X-ray crystallography, cryo-EM, and NMR.",
    anchor: "protein-data-bank-pdb"
  },
  "protein structure prediction": {
    def: "The computational problem of determining a protein\u2019s 3D folded shape from its amino acid sequence; largely solved by AlphaFold in 2020.",
    anchor: "protein-structure-prediction"
  },
  "protein domain": {
    def: "A distinct structural and functional unit within a protein that folds independently and is responsible for a specific interaction.",
    anchor: "protein-domain"
  },

  /* Q */
  "q per residue": {
    def: "A 0\u20131 metric measuring structural similarity at a specific residue position between two proteins; near 1 means nearly identical local structure.",
    anchor: "q-per-residue-qres"
  },

  /* R */
  "reaction-diffusion system": {
    def: "A model in which particles both diffuse through space and react chemically when they collide, capable of spontaneously generating spatial patterns from uniform initial conditions.",
    anchor: "reaction-diffusion-system"
  },
  "receptor binding domain": {
    def: "The subdomain of the coronavirus spike protein that directly contacts the human ACE2 receptor during infection.",
    anchor: "receptor-binding-domain-rbd"
  },
  "random walk": {
    def: "A path generated by steps each taken in a randomly chosen direction; after n steps the expected distance from the origin is proportional to \u221an.",
    anchor: "random-walk"
  },
  "repressilator": {
    def: "A synthetic genetic oscillator built from three transcription factors in a mutual repression cycle (X represses Y, Y represses Z, Z represses X) that sustains oscillations.",
    anchor: "repressilator"
  },
  "response time": {
    def: "The time a system takes to reach steady state after receiving a stimulus; negative autoregulation accelerates this compared to an unregulated gene.",
    anchor: "response-time"
  },
  "robustness": {
    def: "The ability of a biological system to maintain its function despite perturbations such as parameter variations or molecular noise.",
    anchor: "robustness"
  },
  "root mean square deviation": {
    def: "A measure of the average distance between corresponding points in two structures after optimal alignment; widely used to compare predicted and known protein structures.",
    anchor: "root-mean-square-deviation-rmsd"
  },
  "rule-based modeling": {
    def: "A modeling approach that specifies large numbers of reactions compactly via a small set of rules from which all reactions are inferred automatically.",
    anchor: "rule-based-modeling"
  },
  "run and tumble": {
    def: "The two-mode locomotion of <em>E.\u00a0coli</em>: counterclockwise flagella rotation propels it forward (run); clockwise rotation reorients it randomly (tumble).",
    anchor: "run-and-tumble"
  },
  "recall": {
    def: "The fraction of true positives a classifier correctly identifies; low recall means dangerous false negatives in medical diagnostics.",
    anchor: "recall-sensitivity"
  },
  "repellent": {
    def: "A chemical signal that bacteria move away from; <em>E.\u00a0coli</em> increases its tumbling frequency to escape regions of high repellent concentration.",
    anchor: "repellent"
  },

  /* S */
  "signal transduction": {
    def: "The process by which a cell detects an external stimulus and converts it into an internal molecular response.",
    anchor: "signal-transduction"
  },
  "structural alignment": {
    def: "A comparison of two protein structures that identifies corresponding residues and quantifies local structural similarity at each position.",
    anchor: "structural-alignment"
  },
  "salt bridge": {
    def: "A non-covalent interaction between two nearby oppositely charged amino acids that contributes to protein stability.",
    anchor: "salt-bridge"
  },
  "shape space": {
    def: "A mathematical space where each cell nucleus shape is encoded as a point; distance in shape space corresponds to dissimilarity in shape.",
    anchor: "shape-space"
  },
  "spike protein": {
    def: "A surface protein on coronaviruses that binds to human ACE2 receptors to gain cell entry; the primary target of COVID-19 vaccines.",
    anchor: "spike-protein"
  },
  "steady state": {
    def: "The concentration at which production and degradation of a molecule are exactly balanced, so the concentration no longer changes over time.",
    anchor: "steady-state"
  },

  /* T */
  "transcription factor": {
    def: "A protein that binds to DNA near a gene and either activates or represses transcription; the master regulators of gene expression.",
    anchor: "transcription-factor"
  },
  "turing patterns": {
    def: "Striking spatial patterns \u2014 stripes, spots, and irregular textures \u2014 that arise spontaneously from reaction-diffusion systems, first predicted by Alan Turing in 1952.",
    anchor: "turing-patterns"
  },

  /* V */
  "van der waals interactions": {
    def: "Weak attractive and repulsive forces between atoms from temporary electron distribution fluctuations; significant in aggregate for protein stability.",
    anchor: "van-der-waals-interactions"
  },

  /* W */
  "well-mixed assumption": {
    def: "The simplifying assumption that all molecules are uniformly distributed throughout a volume, so concentrations alone fully describe the system\u2019s state.",
    anchor: "well-mixed-assumption"
  },
  "white blood cell": {
    def: "An immune system cell (leukocyte) that circulates in blood; the three major families \u2014 granulocytes, monocytes, lymphocytes \u2014 are distinguishable by nucleus shape.",
    anchor: "white-blood-cell-leukocyte"
  },

  /* X */
  "x-ray crystallography": {
    def: "A laboratory technique for determining protein structure by crystallizing many copies and analyzing the X-ray diffraction pattern to locate every atom.",
    anchor: "x-ray-crystallography"
  }

};
