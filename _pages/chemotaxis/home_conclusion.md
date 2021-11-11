---
permalink: /chemotaxis/home_conclusion
title: "Conclusion: The Beauty of *E. coli*'s Robust Randomized Exploration Algorithm"
sidebar:
 nav: "chemotaxis"
toc: true
toc_sticky: true
image: "../assets/images/chemotaxis_traj_1.0.png"
---

## Two randomized exploration strategies

In this final lesson of the module, we will use what we have learned about chemotaxis to build a random walk model emulating the behavior of *E. coli* within a background containing a variable concentration of attractant. The bacterium will reorient itself randomly, but it will be able to change its tumbling frequency based on the relative concentration of attractant at its current location.

We will then compare this realistic algorithm of bacterial movement against a baseline simplistic algorithm in which the bacterium walks for a fixed distance and then reorients itself in a random direction. Does the more realistic exploration algorithm allow the bacterium to find attractant faster?

We will represent a bacterium as a point in two-dimensional space. Units in our space will be measured in µm, so that moving from (0, 0) to (0, 20) is 20µm, a distance that we know from the introduction can be covered by the bacterium in 1 second during an uninterrupted run. The bacterium will start at the **origin** (0, 0), which we will establish to have a ligand concentration of 100 molecules/µm<sup>3</sup>.

At any point (*x*, *y*), there is some concentration *L*(*x*, *y*) of ligand; furthermore, we simulate an attractant gradient by ensuring that there is a point (called the **goal**) at which *L*(*x*, *y*) is maximized, with the concentration of attractant diminishing as the distance from this point increases. The goal contains a maximum concentration of 10<sup>8</sup> molecules/µm<sup>3</sup>, and we will place the goal at (1500, 1500), so that the bacterium must travel a significant distance to locate the attractant.

The concentration of ligands *L*(*x*, *y*) is maximized at the goal and decreases exponentially the farther we travel from it. To represent this, we set *L*(*x*, *y*) = 100 · 10<sup>6 · (1-*d*/*D*)</sup>, where *d* is the distance from (*x*, *y*) to the goal, and *D* is the distance from the origin to the goal, which in this case is 1500√2 ≈ 2121 µm.

**STOP:** How can we quantify how well a bacterium has done at finding the attractant?
{: .notice--primary}

For each of our two strategies, we will simulate many random walks of a given bacterium throughout this space, where each each simulation lasts some fixed time. (The total time needed by our simulation should be large enough to allow the bacterium to have enough time to reach the goal.) To compare the two strategies, we will then measure how far *on average* a bacterium with each strategy is from the goal at the end of the simulation.

Now that we have established how we will model a bacterum searching for attractant, we will specify how we will implement each of the two specific strategies that we wish to model.

### Strategy 1: Standard random walk

To model our "unintelligent" random walk strategy, we first select a random direction of movement along with a duration of our tumble. The degree of reorientation follows a uniform distribution from 0° to 360°. The duration of each tumble follows an exponential distribution with mean 0.1s[^Saragosti2012]. As the result of a tumble, the cell only changes its orientation, not its position.

We then select a random duration to run and let the bacterium run in that direction for the specified amount of time. The duration of each run follows an exponential distribution with mean equal to the experimentally verified value of 1 second.

We then iterate these two steps of tumbling and running until the total time used is equal to the time devoted to the simulation.

In the following tutorial, we simulate this naive strategy using a Jupyter notebook that will also help us visualize the results of the simulation.

[Visit standard random walk tutorial](tutorial_purerandom){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}


### Strategy 2: Chemotactic random walk

In our second strategy, we attempt to mimic the real response of *E. coli* to its environment based on what we have learned about chemotaxis throughout this module. Specifically, the bacterium will still follow a run and tumble model, but the duration of its runs (which is a function of its tumbling frequency) will depend on the relative change in attractant concentration that it detects.

To ensure a mathematically controlled comparison, we will use the same approach for determining the duration of a tumble and the resulting direction of a run as in strategy 1.

Say that the "response time" of a bacterium, *t*<sub>response</sub>, is the time in seconds that it takes for the bacterium to change its internal behavior in response to its change in environment. (We saw earlier in this module that the response time for *E. coli* in chemotaxis is about half a second.) To model chemotaxis, we will check the attractant concentration at a simulated bacterium's current location every *t*<sub>response</sub> seconds.

We will then measure the percentage difference between the attractant concentration *L*(*x*, *y*) at the cell's current point and the attractant concentration at the cell's previous point; we denote this difference as Δ[*L*]. If Δ[*L*] is equal to zero, then the probability of a tumble in the next *t*<sub>response</sub> should be the same as the likelihood of a tumble in strategy 1 over the same time period. If Δ[*L*] is positive, then the probability of a tumble should be greater than it was in strategy 1; if Δ[*L*] is negative, then the probability of a tumble should be less than it was in strategy 1.

To model the change in likelihood of a tumble depending on the value of Δ[*L*], we will let *t*<sub>0</sub> denote the mean background run duration, which in the first strategy was equal to 1 second. We would like to choose a simple formula for the expected run duration like *t*<sub>0</sub> * (1 + 10 · Δ[*L*]).

Unfortunately, there are two issues with this formula. First, if Δ[*L*] is less than -0.1, then the run duration could be negative. Second, if Δ[*L*] is large, then the bacterium will run for so long that it may simply bypass the goal.

To prevent the run duration from being negative, we will first take the maximum of *t*<sub>0</sub> * (1 + 10 · Δ[*L*]) and some small positive number (we will use 0.000001). We will then take the minimum of the resulting value and 4 · *t*<sub>0</sub> to prevent the run length from being too large. This resulting value becomes the mean run length of a bacterium based on the recent relative change in concentration given its previous two points.

**STOP:** What is the mean run duration when Δ[*L*] is equal to zero? Is this what we would hope? You may assume that *t*<sub>0</sub> is much larger than 0.000001.
{: .notice--primary}

As with the first strategy, our simulated cell will alternate between tumbling and running until the total time devoted to the simulation has been consumed. The only difference is that we will measure the percentage change in concentration Δ[*L*] between a cell's current point and its previous point every *t*<sub>response</sub> seconds. After determining a mean run time *t*(Δ[*L*]), we will sample a random number *p* from an exponential distribution with this mean run time, and the cell will tumble after *p* seconds only if *p* is smaller than *t*<sub>response</sub>.

In the following tutorial, we will adapt the Jupyter notebook that we built in the previous tutorial to simulate this second strategy. We then will compare the two strategies by running many trials of simulated bacteria and taking the average of the simulated bacteria's distance to the goal for each of the two strategies.

[Visit chemotactic walk tutorial](tutorial_walk){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

## Comparing the effectiveness of our two random walk strategies

The following figure visualizes the trajectories of three cells using strategy 1 (left) and strategy 2 (right). After 500 seconds, cells using strategy 1 have traveled away from the origin, and some of them are found in locations with higher concentrations. The cells using strategy 2, however, quickly hone in on the goal and remain near it.

[![image-center](../assets/images/600px/chemotaxis_traj_compare_uniform.png){: .align-center}](../assets/images/chemotaxis_traj_compare_uniform.png)
Sample trajectories for the two strategies. The standard random walk strategy is shown on the left, and the chemotactic random walk is shown on the right. Regions that are more heavily colored red correspond to higher concentrations of ligand, with a goal having maximum concentration at the point (1500, 1500), which is highlighted using a blue square. A single cell's walk is colored from darker to lighter colors across the time frame of the trajectory.
{: style="font-size: medium;"}

Of course, we should be wary of our small sample size. To confirm that what we observed in these trajectories is true on average, we will compare the two strategies for many simulations. The following figure plots the cell's average distance to the goal over 500 simulations for both strategies.

[![image-center](../assets/images/600px/chemotaxis_performance_compare_uniform.png){: .align-center}](../assets/images/chemotaxis_performance_compare_uniform.png)
Average distance to the goal plotted over time for 500 cellular simulations following each of the two strategies; the standard random walk is shown in red, and the chemotactic random walk is shown in blue. The shaded area for each strategy represents one standard deviation from the average.
{: style="font-size: medium;"}

Using strategy 1, cells have some chance of reaching the goal because they tend to spread out over time, but there is no aspect of the strategy that would keep the cells at the goal, and so the average distance to the goal does not decrease. With strategy 2, the cells are able to get closer to the goal and remain there due to the small standard deviation in their distance to the goal.

Strategy 2 corresponds to a very slight change in strategy 1 in which we allow the cell to run for a greater distance if it senses an increase in the attractant concentration. But the direction of travel is still *random*. So why would this strategy be so much better than a pure random walk?

The attractant detection serves as a sort of "rubber band". If the bacterium is traveling down an attractant gradient (i.e., away from an attractant), then it is not allowed to travel very far in a single step. If an increase of attractant is detected, then the cell can travel farther before tumbling. On average, then, this effect helps to pull the bacterium in the direction of increasing attractant, even though each of its steps is taken in a random direction.

We have shown that a very slight change to a simple randomized algorithm can produce an elegant approach for exploring an unknown environment. But we left one more question unanswered. Why is it that a default tumbling frequency of one tumble per second appears to be evolutionarily stable across a wide range of bacteria?

To address this question, we will make changes to *t*<sub>0</sub>, the default time for a run step, and see how this affects the ability of a simulated bacterium following the chemotactic strategy to locate the goal. You may like to adjust the value of *t*<sub>0</sub> in the [chemotactic walk tutorial](tutorial_walk) before continuing on.

[Visit tutorial](tutorial_tumbling_frequencies){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}

## Why is bacterial background tumbling frequency constant across species?

The following figures show three trajectories for a few different values of *t*<sub>0</sub> and a simulation that lasts for 800 seconds. First, we set *t*<sub>0</sub> equal to 0.2 seconds and see that the bacteria are not able to walk far enough in a single step. That is, the "rubber band" effect is too rigid.

[![image-center](../assets/images/600px/chemotaxis_traj_0.2_uniform.png){: .align-center}](../assets/images/chemotaxis_traj_0.2_uniform.png)
Three sample trajectories of a simulated cell following the chemotactic random walk strategy with a tumble every 0.2 seconds on average.
{: style="font-size: medium;"}

If we increase *t*<sub>0</sub> to 5.0 seconds, then the rubber band becomes too flexible, meaning that cells can run past the goal without being able to put on the brakes by tumbling.

[![image-center](../assets/images/600px/chemotaxis_traj_5.0_uniform.png){: .align-center}](../assets/images/chemotaxis_traj_5.0_uniform.png)
Three sample trajectories of a simulated cell following the chemotactic random walk strategy with a tumble every 5 seconds on average.
{: style="font-size: medium;"}

When we set *t*<sub>0</sub> equal to 1.0, we see a "Goldilocks" effect in which the rubber band effect is just right. The simulated bacterium can run for long enough at a time to head quickly toward the goal, and it tumbles frequently enough to keep it there.

[![image-center](../assets/images/600px/chemotaxis_traj_1.0_uniform.png){: .align-center}](../assets/images/chemotaxis_traj_1.0_uniform.png)
Three sample trajectories of a simulated cell following the chemotactic random walk strategy with a tumble on average of once every second.
{: style="font-size: medium;" }

To make this analysis more concrete, the figure below shows a plot of average distance to the goal over time for 500 simulated cells following the chemotactic strategy for a variety of choices of *t*<sub>0</sub>.

[![image-center](../assets/images/600px/chemotaxis_performance_uniform.png){: .align-center}](../assets/images/chemotaxis_performance_uniform.png)
Average distance to the goal over time for 500 cells. Each colored line indicates the average distance to the goal over time a different value of *t*<sub>0</sub>; the shaded area represents one standard deviation.
{: style="font-size: medium;"}

This figure illustrates the a tradeoff between reaching the target quickly and being able to stay there. For large values of *t*<sub>0</sub> (10.0, 5.0, 2.0), distances to the goal decrease very quickly at the beginning of the simulation, but the cells don't stay there effectively. For small values of *t*<sub>0</sub> (0.1, 0.2, 0.5), the cells fail to move to the ligand efficiently. When *t*<sub>0</sub> is equal to 0.5 seconds, the cell is able to remain around the goal, but it takes about 400 seconds longer to reach the goal than when *t*<sub>0</sub> is equal to 1.0 seconds.

Recall the video of *E. coli* moving towards the sugar crystal that we showed at the beginning of this module, which we reproduce below. The video shows that the behavior of real *E. coli* is reflected by our simulated bacteria. Bacteria generally move towards the crystal and then remain close to it; some bacteria run by the crystal, but they then turn around to move toward the crystal again.
<iframe width="640" height="360" src="https://www.youtube.com/embed/F6QMU3KD7zw" frameborder="0" allowfullscreen></iframe>

## Bacteria are even smarter than we thought

If you closely examine the video above, then you may be curious about the way that bacteria turn around and head back toward the attractant. When they reorient, their behavior appears more intelligent than simply walking in a random direction. The reason for this behavior of the bacteria is that like most things in biology, the reality turns out to be more complex than we might at first imagine.

Specifically, researchers first showed that the direction of reorientation rather follows a normal distribution with mean of 68° and standard deviation of 36°[^Berg1972]. That is, the bacterium typically does not tend to make as drastic of a change to its orientation as it would in a pure random walk, which would on average have a change in orientation of 90°.

Yet recent research has shown that the direction of the bacterium's reorientation depends on whether the cell is traveling in the correct direction.[^Saragosti2011] If moving up an attractant gradient, then the cell makes much smaller changes in its reorientation angle. This allows the cell to retain its orientation if it is moving in the correct direction while also to turn around quickly if it starts heading in the wrong direction. We can even see this behavior in the video above, in which bacteria traveling toward the attractant make only very slight changes in their direction of travel, but reorient themselves more drastically if they overshoot the target.

In this module, we have witnessed the emergence of an apparently intelligent algorithm from a simple collection of reactions that drive an organism's biochemistry. What look like decisions made by the bacterium are in fact robust actions taken as the direct result of chemical reactions.

Bacterial chemotaxis is probably the best understood biological system from the perspective of understanding how low-level chemical actions cause emergent behavior. But that is not to say that it is the only such system. As we pointed out in the prologue, this thread connecting chemical reactions to the behavior that we experience as life is for the most part still invisible. Although a simple system like bacterial chemotaxis can be understood concretely, a rationale for how microscopic processes drive macroscopic action is a mystery that may be unresolved for a very long time.

[^Saragosti2011]: Saragosti J, Calvez V, Bournaveas, N, Perthame B, Buguin A, Silberzan P. 2011. Directional persistence of chemotactic bacteria in a traveling concentration wave. PNAS. [Available online](https://www.pnas.org/content/pnas/108/39/16235.full.pdf)

[^Saragosti2012]: Saragosti J., Siberzan P., Buguin A. 2012. Modeling *E. coli* tumbles by rotational diffusion. Implications for chemotaxis. PLoS One 7(4):e35412. [available online](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3329434/).

[^Berg1972]: Berg HC, Brown DA. 1972. Chemotaxis in Escherichia coli analysed by three-dimensional tracking. Nature. [Available online](https://www.nature.com/articles/239500a0)

[^Baker2005]: Baker MD, Wolanin PM, Stock JB. 2005. Signal transduction in bacterial chemotaxis. BioEssays 28:9-22. [Available online](https://pubmed.ncbi.nlm.nih.gov/16369945/)


[Visit exercises](home_exercise){: .btn .btn--primary .btn--large}
{: style="font-size: 100%; text-align: center;"}
