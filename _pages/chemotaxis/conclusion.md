---
permalink: /chemotaxis/conclusion
title: "Conclusion: The Beauty of *E. coli*'s Robust Randomized Exploration Algorithm"
sidebar:
 nav: "chemotaxis"
toc: true
toc_sticky: true
image: "../assets/images/chemotaxis_traj_1.0.png"
---

## Two randomized exploration strategies

In the [prologue](../prologue/random_walk), we saw that a particle taking a collection of *n* unit steps in random directions will wind up on average $$\sqrt{n}$$ distance away from its starting position. We now would like to compare this random walk against a modified version of the walk that emulates the behavior of *E. coli* that we have learned about in this module.

Specifically, we will place a particle against a background containing a variable concentration of attractant. The bacterium will reorient itself randomly, but it will be able to change its tumbling frequency based on the relative concentration of attractant at its current location. Does this realistic exploration algorithm allow the bacterium to find attractant faster than a pure random walk strategy?

We will represent a bacterium as a point in two-dimensional space. Units in our space will be measured in µm, so that moving from (0, 0) to (0, 20) is 20µm, a distance that we know from the introduction can be covered by the bacterium in 1 second during an uninterrupted run. The bacterium will start at the **origin** (0, 0), which we will establish to have a ligand concentration of 100 molecules/µm<sup>3</sup>.

We will use *L*(*x*, *y*) to denote the ligand concentration at (*x*, *y*); furthermore, we simulate an attractant gradient by ensuring that there is a point (called the **goal**) at which *L*(*x*, *y*) is maximized. We will set the concentration at the goal equal to 10<sup>8</sup> molecules/µm<sup>3</sup>, and we will place the goal at (1500, 1500), so that the bacterium must travel a significant distance to find the attractant.

We would like the ligand concentration *L*(*x*, *y*) to decrease exponentially the farther we travel from the goal. We therefore set *L*(*x*, *y*) = 100 · 10<sup>6 · (1-*d*/*D*)</sup>, where *d* is the distance from (*x*, *y*) to the goal, and *D* is the distance from the origin to the goal, which in this case is 1500√2 ≈ 2121 µm.

**STOP:** How can we quantify how well a bacterium has done at finding the attractant?
{: .notice--primary}

For each of our two strategies, we will simulate many random walks of a given bacterium throughout this space for a fixed time. (The total time needed by our simulation should be large enough to allow the bacterium to have enough time to reach the goal.) To compare the two strategies, we will then measure how far *on average* a bacterium with each strategy is from the goal at the end of the simulation.

We will now implement each of the two exploration strategies that we wish to model.

### Strategy 1: Standard random walk

To model our "unintelligent" random walk strategy, we first select a random direction of movement along with a duration of tumble. The degree of reorientation follows a uniform distribution from 0° to 360°. The duration of each tumble follows an exponential distribution with mean 0.1s[^Saragosti2012]. As the result of a tumble, the cell only changes its orientation, not its position.

We then select a random duration to run and let the bacterium run in that direction for the specified amount of time. The duration of each run follows an exponential distribution with mean equal to the experimentally verified value of 1 second.

We then iterate these two steps of tumbling and running until the total time has elapsed.

In the following tutorial, we simulate this naive strategy using a Jupyter notebook that will also help us visualize the results of the simulation.

[Visit tutorial](tutorial_purerandom){: .btn .btn--info .btn--large}
{: style="font-size: 100%; text-align: center;"}

### Strategy 2: Chemotactic random walk

In our second strategy, we mimic the real response of *E. coli* to its environment based on what we have learned about chemotaxis throughout this module. The simulated bacterium will still follow a run and tumble model, but the duration of each run (which is a function of its tumbling frequency) will depend on the relative change in attractant concentration that it detects.

To ensure a mathematically controlled comparison, we will use the same approach for determining the duration of a tumble and the resulting direction of a run as in the first strategy.

Say that the "response time" of a bacterium, *t*<sub>response</sub>, is the time in seconds that it takes for the bacterium to change its internal behavior in response to its change in environment. (We saw earlier in this module that the response time for *E. coli* in chemotaxis is about half a second.) To model chemotaxis, we will check the attractant concentration at a simulated bacterium's current location every *t*<sub>response</sub> seconds.

We will then measure the percentage difference between the attractant concentration *L*(*x*, *y*) at the cell's current point and the attractant concentration at the cell's previous point; we denote this difference as Δ[*L*]. If Δ[*L*] is equal to zero, then the probability of a tumble in the next *t*<sub>response</sub> should be the same as the likelihood of a tumble in strategy 1 over the same time period. If Δ[*L*] is positive, then the probability of a tumble should be greater than it was in strategy 1; if Δ[*L*] is negative, then the probability of a tumble should be less than it was in strategy 1.

To model the change in likelihood of a tumble depending on the value of Δ[*L*], we will let *t*<sub>0</sub> denote the mean background run duration, which in the first strategy was equal to one second. We would like to use a simple formula for the expected run duration like *t*<sub>0</sub> * (1 + 10 · Δ[*L*]).

Unfortunately, there are two issues with this formula. First, if Δ[*L*] is less than -0.1, then the run duration could be negative. Second, if Δ[*L*] is large, then the bacterium will run for so long that it may run past the goal.

To prevent the run duration from being negative, we will first take the maximum of *t*<sub>0</sub> * (1 + 10 · Δ[*L*]) and some small positive number (we will use 0.000001). To prevent the run length from being too large, we will then take the minimum of the resulting value and 4 · *t*<sub>0</sub>. This resulting value,

min(max(*t*<sub>0</sub> * (1 + 10 · Δ[*L*]), 0.000001), 4 · *t*<sub>0</sub>),

becomes the mean run length of a bacterium based on the recent relative change in concentration given its previous two points.

**STOP:** What is the mean run duration when Δ[*L*] is equal to zero? Is this what we would hope? You may assume that *t*<sub>0</sub> is much larger than 0.000001.
{: .notice--primary}

As with the first strategy, our simulated cell will alternate between tumbling and running until the total time devoted to the simulation has elapsed. The only difference is that we will measure the percentage change in concentration Δ[*L*] between a cell's current point and its previous point every *t*<sub>response</sub> seconds. After determining a mean run time *t*(Δ[*L*]), we will sample a random number *p* from an exponential distribution with this mean run time, and the cell will tumble after *p* seconds if *p* is smaller than *t*<sub>response</sub>.

In the following tutorial, we will adapt the Jupyter notebook that we built in the previous tutorial to simulate this second strategy and run it many times, taking the average of the simulated bacteria's distance to the goal.

[Visit tutorial](tutorial_walk){: .btn .btn--info .btn--large}
{: style="font-size: 100%; text-align: center;"}

## Comparing the effectiveness of our two random walk strategies

The following figure visualizes the trajectories of three cells using each of the two strategies. After 500 seconds, cells using strategy 1 have traveled away from the origin, and some of them are found in locations with higher concentrations. The cells using strategy 2, however, quickly hone in on the goal and remain near it.

[![image-center](../assets/images/600px/chemotaxis_traj_compare_uniform.png){: .align-center}](../assets/images/chemotaxis_traj_compare_uniform.png)
Three sample trajectories for each of the two exploration strategies. The standard random walk strategy is shown on the left, and the chemotactic random walk is shown on the right. Regions that are more heavily colored red correspond to higher concentrations of ligand, with a goal having maximum concentration at the point (1500, 1500), which is highlighted using a blue square. A single cell's walk is colored from darker to lighter colors across the time frame of the trajectory.
{: style="font-size: medium;"}

Of course, we should be wary of such a small sample size. To confirm that what we observed in these trajectories is true in general, we will compare the two strategies over many simulations. The following figure plots the cell's average final distance to the goal over 500 simulations for both strategies.

[![image-center](../assets/images/600px/chemotaxis_performance_compare_uniform.png){: .align-center}](../assets/images/chemotaxis_performance_compare_uniform.png)
Average distance to the goal plotted over time for 500 cellular simulations following each of the two strategies; the standard random walk is shown in red, and the chemotactic random walk is shown in blue. The shaded area around each strategy's plot represents one standard deviation from the average.
{: style="font-size: medium;"}

Using strategy 1, cells have some chance of reaching the goal because they tend to spread out over time, but nothing about this strategy keeps cells at the goal, and so the average distance to the goal does not decrease. In fact, as cells drift away due to random noise, they will on average get farther from the goal. With strategy 2, the cells approach the goal and remain there.

Strategy 2 amounts to a very slight change in strategy 1 in which we allow the cell to run for a greater distance if it senses an increase in the attractant concentration. After all, the direction of travel is still *random*. So why would this strategy be so much better than a pure random walk?

The answer to this quandary is that the attractant detection provides a "rubber band" effect. If the bacterium is traveling down an attractant gradient (i.e., away from an attractant), then it is not allowed to travel very far in a single step before it is forced to tumble. If an increase of attractant is detected, however, then the cell can travel farther before tumbling. On average, then, this effect helps to pull the bacterium in the direction of increasing attractant, even though each of its steps is taken in a random direction.

A very small change to a simple, unsuccessful randomized algorithm can produce an elegant approach for exploring an unknown environment. But we left one question unanswered. Why is it that a default tumbling frequency of one tumble per second appears to be stable across a wide range of bacteria?

To address this question, we will see how changing *t*<sub>0</sub>, the default time for a run step, affects the ability of a simulated bacterium following strategy 2 to locate the goal. You may like to adjust the value of *t*<sub>0</sub> in the [previous tutorial](tutorial_walk) yourself, or follow the tutorial below.

[Visit tutorial](tutorial_tumbling_frequencies){: .btn .btn--info .btn--large}
{: style="font-size: 100%; text-align: center;"}

## Why is background tumbling frequency constant across bacterial species?

The following figures show three trajectories for a few different values of *t*<sub>0</sub> and a simulation that lasts for 800 seconds. First, we set *t*<sub>0</sub> equal to 0.2 seconds and see that the bacteria are not able to walk far enough in a single step to head toward the goal.

[![image-center](../assets/images/600px/chemotaxis_traj_0.2_uniform.png){: .align-center}](../assets/images/chemotaxis_traj_0.2_uniform.png)
Three sample trajectories of a simulated cell following the chemotactic random walk strategy with an average default tumbling frequency of 0.2 seconds.
{: style="font-size: medium;"}

If we increase *t*<sub>0</sub> to 5.0 seconds, then cells can run for so long that they may carry on past the goal without being able to apply the brakes by tumbling.

[![image-center](../assets/images/600px/chemotaxis_traj_5.0_uniform.png){: .align-center}](../assets/images/chemotaxis_traj_5.0_uniform.png)
Three sample trajectories of a simulated cell following the chemotactic random walk strategy with an average default tumbling frequency of 5.0 seconds.
{: style="font-size: medium;"}

When we set *t*<sub>0</sub> equal to 1.0, then the figure below shows a "Goldilocks" effect in which the default tumbling time is just right. The simulated bacterium can run for long enough at a time to head quickly toward the goal, and it tumbles frequently enough to keep it there.

[![image-center](../assets/images/600px/chemotaxis_traj_1.0_uniform.png){: .align-center}](../assets/images/chemotaxis_traj_1.0_uniform.png)
Three sample trajectories of a simulated cell following the chemotactic random walk strategy with an average default tumbling frequency of 1.0 seconds.
{: style="font-size: medium;" }

The figure below shows a plot of average distance to the goal over time for 500 simulated cells following the chemotactic strategy for a variety of choices of *t*<sub>0</sub>, and confirms that a *t*<sub>0</sub> value of approximately one second is ideal for finding an attractant.

[![image-center](../assets/images/600px/chemotaxis_performance_uniform.png){: .align-center}](../assets/images/chemotaxis_performance_uniform.png)
Average distance to the goal over time for 500 cells. Each colored line indicates the average distance to the goal over time for a different value of *t*<sub>0</sub>; the shaded area represents one standard deviation.
{: style="font-size: medium;"}

Below, we reproduce the video from earlier in this module showing *E. coli* moving towards a sugar crystal. This video shows that the behavior of real *E. coli* is similar to that of our simulated bacteria. Bacteria generally move towards the crystal and then remain close to it; some bacteria run by the crystal, but they turn around to move toward the crystal again.

{% include video id="F6QMU3KD7zw" provider="youtube" %}

## Bacteria are even smarter than we thought

If you closely examine the video above, then you may be curious about the way that bacteria turn around and head back toward the attractant. When they reorient, their behavior appears more intelligent than simply walking in a random direction. The reason for this behavior of the bacteria is that like most things in biology, the reality of the system that we are studying turns out to be more complex than we might imagine.

Researchers have showed that the direction of bacterial reorientation is not completely random, but rather follows a normal distribution with mean of 68° and standard deviation of 36°[^Berg1972]. That is, the bacterium typically does not tend to make as drastic of a change to its orientation as it would in a pure random walk, which would on average have a change in orientation of 90°.

Yet recent research has shown that the direction of the bacterium's reorientation also depends on whether the cell is traveling in the correct direction.[^Saragosti2011] If the bacterium is moving up an attractant gradient, then it makes much smaller changes in its reorientation angle. This allows the cell to stay straight if it is moving in the correct direction but also turn around quickly if it starts heading in the wrong direction. We can even see this behavior in the video above, in which bacteria traveling toward the attractant make only very slight changes in their direction of travel, but reorient themselves more drastically if they overshoot the target.

Bacterial chemotaxis is probably the most studied biological system from the perspective of connecting chemical reactions to the emergent behavior that these reactions cause. Yet for many other systems, this thread connecting a reductionist view of a system to its holistic behavior is still a mystery that will continue inspiring the work of biological modelers for a very long time.

[^Saragosti2011]: Saragosti J, Calvez V, Bournaveas, N, Perthame B, Buguin A, Silberzan P. 2011. Directional persistence of chemotactic bacteria in a traveling concentration wave. PNAS. [Available online](https://www.pnas.org/content/pnas/108/39/16235.full.pdf)

[^Saragosti2012]: Saragosti J., Siberzan P., Buguin A. 2012. Modeling *E. coli* tumbles by rotational diffusion. Implications for chemotaxis. PLoS One 7(4):e35412. [available online](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3329434/).

[^Berg1972]: Berg HC, Brown DA. 1972. Chemotaxis in Escherichia coli analysed by three-dimensional tracking. Nature. [Available online](https://www.nature.com/articles/239500a0)

[^Baker2005]: Baker MD, Wolanin PM, Stock JB. 2005. Signal transduction in bacterial chemotaxis. BioEssays 28:9-22. [Available online](https://pubmed.ncbi.nlm.nih.gov/16369945/)


[Visit exercises](exercise){: .btn .btn--success .btn--large}
{: style="font-size: 100%; text-align: center;"}
