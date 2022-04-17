---
permalink: /prologue/conclusion
title: "Conclusion: Turing Patterns are Fine-Tuned"
sidebar:
 nav: "prologue"
 toc: true
 toc_sticky: true
image: "../assets/images/gray_scott_jupyter_high-res.png"
gallery:
  - url: ../assets/images/Juvenile_Mbu_pufferfish.jpg
    image_path: ../assets/images/600px/Juvenile_Mbu_pufferfish.jpg
    alt: "Juvenile Mbu pufferfish"
    title: "A juvenile Mbu pufferfish with a very familiar pattern."
  - url: ../assets/images/Giant_Puffer_fish_skin_pattern.jpg
    image_path: ../assets/images/600px/Giant_Puffer_fish_skin_pattern.jpg
    alt: "Adult Mbu pufferfish"
    title: "An adult Mbu Pufferfish exhibiting another familiar pattern."
---

In both the particle-based and automaton model for Turing patterns, we observed that the model is **fine-tuned**, meaning that very slight changes in parameter values can lead to significant changes in the system. These changes could convert spots to stripes, or they could influence how clearly defined the boundaries of the Turing patterns are.

The figure below shows how the Turing patterns produced by the Gray-Scott model change as the kill and feed rates vary. The kill rate increases along the x-axis, and the feed rate increases along the y-axis. Notice how much the patterns change! You may like to tweak the parameters of the Gray-Scott simulation from the [previous lesson](gray-scott) to see if you can reproduce these differing patterns.

[![image-center](../assets/images/600px/xmorphia-parameter-map.jpg){: .align-center width="400px"}](../assets/images/xmorphia-parameter-map.jpg)
Changing kill (x-axis) and feed (y-axis) parameters greatly affects the Turing patterns produced in the Gray-Scott model. Note that Turing patterns are only produced in a narrow "sweet spot" band of parameter choices. Image courtesy: Robert Munafo.[^robert]
{: style="font-size: medium;"}

Later in this course, we will see an example of a biological system that is the opposite of fine-tuned. In a **robust** system, perturbations such as variations in parameters do not lead to substantive changes in the ultimate behavior of the system.  Robustness is vital for processes, like your heartbeat, that must be resilient to small environmental changes.

It turns out that although Turing's work offers a compelling argument for how zebras might have gotten their stripes, the exact mechanism causing these stripes to form is still an unresolved question. However, researchers have shown that the skin of *zebrafish* does exhibit Turing patterns because two types of pigment cells serve as "particles" following a reaction-diffusion model much like the one we presented in this prologue.[^zebrafish]

Finally, take a look at the following two photos of giant pufferfish.[^youngfish][^pufferfish] Genetically, these fish are practically identical, but their skin patterns are very different. What may seem like a drastic change from spots to stripes is likely attributable to a small change of parameters in a fine-tuned biological system that, like much of life, is powered by randomness.

{% include gallery caption="Two similar pufferfish with very different skin patterns. (Left) A juvenile Mbu pufferfish with a very familiar pattern. (Right) An adult Mbu pufferfish exhibiting another familiar pattern." %}

## A final note

Thank you for making it this far! We hope that you are enjoying the course. You can join the next module of the course by clicking on the "next module" button below. In the meantime, we ask that you complete the <a href="https://forms.gle/egmmBxGtBciDPYNS8" target="_blank">course survey</a> if you have not done so already.

[Next module](../motifs/home){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

[^robert]: "Reaction-Diffusion by the Gray-Scott Model: Pearson's Parametrization" © 1996-2020 Robert P. Munafo https://mrob.com/pub/comp/xmorphia/index.html

[^zebrafish]: Nakamasu, A., Takahashi, G., Kanbe, A., & Kondo, S. (2009). Interactions between zebrafish pigment cells responsible for the generation of Turing patterns. Proceedings of the National Academy of Sciences of the United States of America, 106(21), 8429–8434. https://doi.org/10.1073/pnas.0808622106

[^youngfish]: NSG Coghlan, 2006 [Creative Commons Attribution-Share Alike 3.0 Unported](https://creativecommons.org/licenses/by-sa/3.0/deed.en)

[^pufferfish]: Chiswick Chap, 20 February 2012, [Creative Commons Attribution-Share Alike 3.0 Unported](https://creativecommons.org/licenses/by-sa/3.0/deed.en)
