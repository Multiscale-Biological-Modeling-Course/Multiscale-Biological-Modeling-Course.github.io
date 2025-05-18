---
permalink: /chemotaxis/tutorial_walk
title: "Chemotactic random walk"
description: "Program a chemotactic random walk that biases runs toward higher attractant by integrating sensor history with movement choices."
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

In a [previous tutorial](tutorial_purerandom), we simulated the movement of a cell moving randomly throughout two-dimensional space in a sequence of steps. At each step, the next direction of the cell's movement is chosen completely randomly. We called this simple algorithm "strategy 1" in the [main text](conclusion).

In this tutorial, we will adapt this simulation into one that attempts to more closely mimic the real behavior of *E. coli* chemotaxis, based on what we have learned in this module. We will then be able to compare the results of these two algorithms.

Make sure that the following dependencies are installed:

| Installation Link | Version | Check install/version |
|:------|:-----:|------:|
| [Python3](https://www.python.org/downloads/)  |3.6+ |`python --version` |
| [Jupyter Notebook](https://jupyter.org/index.html) | 4.4.0+ | `jupyter --version` |
| [Numpy](https://numpy.org/install/) | 1.14.5+ | `pip list | grep numpy` |
| [Matplotlib](https://matplotlib.org/users/installing.html) | 3.0+ | `pip list | grep matplotlib` |
| [Colorspace](https://python-colorspace.readthedocs.io/en/latest/installation.html) or with [pip](https://pypi.org/project/colorspace/)| any | `pip list | grep colorspace`|

## The chemotactic walk reassesses run length based on relative attractant concentration

We will use the run-and-tumble model introduced in the [random walk tutorial](tutorial_purerandom) as a basis for building a more realistic model of bacterial movement. Recall that this previous simulation involved the following components.

 1. **Run.** The duration of a cell's run follows an exponential distribution with mean equal to the background run duration `run_time_expected`.
 2. **Tumble.** The duration of a cell's tumble follows an exponential distribution with mean 0.1s[^Saragosti2012]. When it tumbles, we assume that the cell changes its orientation but does not change its position. The degree of reorientation is a random number sampled uniformly between 0° and 360°.
 3. **Gradient.** We model an exponential gradient with a goal (1500, 1500) having a concentration of 10<sup>8</sup>. All cells start at the origin (0, 0), which has a concentration of 10<sup>2</sup>. The ligand concentration at the point (*x*, *y*) is given by *L*(*x*, *y*) = 100 · 10<sup>8 · (1-*d*/*D*)</sup>, where *d* is the distance from (*x*, *y*) to the goal, and *D* is the distance from the origin to the goal; in this case, *D* is 1500√2 ≈ 2121 µm.

In this tutorial, we will modify this simulation so that the duration of a run is based on the *relative* change of concentration of attractant at the cell's current point compared to its previous point.

In the main text, we stated that we would model a chemotactic strategy by sampling from an exponential distribution every *t*<sub>response</sub> seconds (*t*<sub>response</sub> is called the response time), where the mean of the exponential distribution changes based on the relative change in concentration. Specifically, we let *t*<sub>0</sub> denote the mean background run duration and Δ[*L*] denote the percentage difference between the ligand concentration *L*(*x*, *y*) at the cell's current point and the ligand concentration at the cell's previous point.

Then, to determine whether the cell will tumble, we perform the following steps.

1. We take the maximum of 0.000001 and *t*<sub>0</sub> * (1 + 10 · Δ[*L*]).
2. We take the minimum of the resulting value and 4 · *t*<sub>0</sub>.
3. We set the resulting value as the mean of an exponential distribution and sample a run time *p* from this distribution.
4. If *p* is smaller than *t*<sub>response</sub>, then the cell will tumble after *p* seconds. Otherwise, it continues in its current direction for *t*<sub>response</sub> seconds, at which time it will repeat steps 1-4.

We continue this process of running and tumbling for the total duration of the simulation, where every *t*<sub>response</sub> seconds, we use the above steps to assess whether or not to tumble in the next time interval.

This algorithm is summarized by the following Python code, which calls a function `run_duration()` to determine the length of a single run. This algorithm uses a value of `response_time` of 0.5 seconds, since this is the approximate time that we have observed that it takes *E. coli* to change its behavior in response to an attractant. The total time of the simulation is given as a parameter `duration` in seconds.

~~~ python
 # This function performs simulation
 # Input: number of cells to simulate (int), how many seconds (int), the expected run time before tumble (float)
 # Return: the simulated trajectories paths: array of shape (num_cells, duration+1, 2)
 def simulate_chemotaxis(num_cells, duration, run_time_expected):

     #Takes the shape (num_cells, duration+1, 2)
     #any point [x,y] on the simulated trajectories can be accessed via paths[cell, time]
     paths = np.zeros((num_cells, duration + 1, 2))

     for rep in range(num_cells):
         # Initialize simulation
         t = 0 #record the time elapse
         curr_position = np.array(start) #start at [0, 0]
         past_conc = calc_concentration(start) #Initialize concentration
         projection_h, projection_v, tumble_time = tumble_move() #Initialize direction randomly

         while t < duration:
             curr_conc = calc_concentration(curr_position)

             curr_run_time = run_duration(curr_conc, past_conc, curr_position, run_time_expected) #get run duration, float

             # if run time (r) is within the step (s), run for r second and then tumble
             if curr_run_time < response_time:
                 #displacement on either direction is calculated as the projection * speed * time
                 #update current position by summing old position and displacement
                 curr_position = curr_position + np.array([projection_h, projection_v]) * speed * curr_run_time
                 projection_h, projection_v, tumble_time = tumble_move() #tumble
                 t += (curr_run_time + tumble_time) #increment time

             # if r > s, run for r; then it will be in the next iteration
             else:
                 #displacement on either direction is calculated as the projection * speed * time
                 #update current position by summing old position and displacement
                 curr_position = curr_position + np.array([projection_h, projection_v]) * speed * response_time
                 t += response_time #no tumble here

             #record position approximate for integer number of second
             curr_sec = int(t)
             if curr_sec <= duration:
                 #fill values from last time point to current time point
                 paths[rep, curr_sec] = curr_position.copy()
                 past_conc = curr_conc

     return paths
~~~

We now provide code for the function `run_duration`. This function samples a random number from an exponential distribution whose mean is equal to min(4 · *t*<sub>0</sub>, max(0.000001, *t*<sub>0</sub> · (1 + 10 · Δ[*L*]))). Note that before we compute this formula, we ensure that the current concentration is not greater than some maximum concentration `saturation_conc` at which the concentration of attractant is saturated.

~~~ python
# Calculate the wait time for next tumbling event
# Input: current concentration (float), past concentration (float), position (array [x, y]), expected run time (float)
# Return: duration of current run (float)
def run_duration(curr_conc, past_conc, position, run_time_expected):

  curr_conc = min(curr_conc, saturation_conc) #Can't detect higher concentration if receptors saturates
  past_conc = min(past_conc, saturation_conc)
  change = (curr_conc - past_conc) / past_conc #proportion change in concentration, float
  run_time_expected_adj_conc = run_time_expected * (1 + 10 * change) #adjust based on concentration change, float

  if run_time_expected_adj_conc < 0.000001:
      run_time_expected_adj_conc = 0.000001 #positive wait times
  elif run_time_expected_adj_conc > 4 * run_time_expected:
      run_time_expected_adj_conc = 4 * run_time_expected     #the decrease to tumbling frequency is only to a certain extent
  #Sample the duration of current run from exponential distribution, mean=run_time_expected_adj_conc
  curr_run_time = np.random.exponential(run_time_expected_adj_conc)

  return curr_run_time
~~~

## Comparing the performance of the two strategies

Now that we have modified our random walk simulation to be more biologically accurate, we will compare the performance of these cells against those following the original random walk. How much better do the cells following the biologically accurate strategy fare?

To do so, we will provide a Jupyter notebook here: <a href="../downloads/downloadable/chemotaxis_compare.ipynb" download="chemotaxis_compare.ipynb">chemotaxis_compare.ipynb</a>.

### Qualitative comparison

We will first visualize the trajectories of three cells following each of our two strategies. To do so, first initialize the model by running the code for `Part 1: Model specification`.

The following code simulates three cells for 800 seconds for each of the two strategies.

~~~ python
#Run simulation for 3 cells for each strategy, plot paths
duration = 800   #seconds, duration of the simulation
num_cells = 3
origin_to_center = distance(start, ligand_center) #Update the global constant
run_time_expected = 1.0

paths_rand = simulate_std_random(num_cells, duration, run_time_expected)
paths_che = simulate_chemotaxis(num_cells, duration, run_time_expected)
paths = np.array([paths_rand, paths_che])
~~~

Now that we have simulated the cells, we will visualize the results of their walks. The plotting is similar as in the [random walk tutorial](tutorial_purerandom), except that this time, we will have two subplots, one for the pure random walk strategy, and the other for the chemotactic random walk. (These subplots are initialized using `plt.subplots(1, 2)`.)

~~~ python
#Below are all for plotting purposes
methods = ["Pure random walk", "Chemotactic random walk"]
fig, ax = plt.subplots(1, 2, figsize = (16, 8)) #1*2 subplots, size 16*8

#First set color map
mycolor = [[256, 256, 256], [256, 255, 254], [256, 253, 250], [256, 250, 240], [255, 236, 209], [255, 218, 185], [251, 196, 171], [248, 173, 157], [244, 151, 142], [240, 128, 128]] #from coolors：）
for i in mycolor:
    for j in range(len(i)):
        i[j] *= (1/256)
cmap_color = colors.LinearSegmentedColormap.from_list('my_list', mycolor) #Linearly segment these colors to create a continuous color map

#Store the concentrations for each integer position in a matrix
conc_matrix = np.zeros((4000, 4000)) #we will display from [-1000, -1000] to [3000, 3000]
for i in range(4000):
    for j in range(4000):
        conc_matrix[i][j] = math.log(calc_concentration([i - 1000, j - 1000]))

#Repeat for the two strategies
for m in range(2):
    #Simulate the gradient distribution, plot as a heatmap
    ax[m].imshow(conc_matrix.T, cmap=cmap_color, interpolation='nearest', extent = [-1000, 3000, -1000, 3000], origin = 'lower')

    #Plot simulation results
    time_frac = 1.0 / duration
    #Plot the trajectories. Time progress: dark -> colorful
    for t in range(duration):
        ax[m].plot(paths[m,0,t,0], paths[m,0,t,1], 'o', markersize = 1, color = (0.2 * time_frac * t, 0.85 * time_frac * t, 0.8 * time_frac * t))
        ax[m].plot(paths[m,1,t,0], paths[m,1,t,1], 'o', markersize = 1, color = (0.85 * time_frac * t, 0.2 * time_frac * t, 0.9 * time_frac * t))
        ax[m].plot(paths[m,2,t,0], paths[m,2,t,1], 'o', markersize = 1, color = (0.4 * time_frac * t, 0.85 * time_frac * t, 0.1 * time_frac * t))
    ax[m].plot(start[0], start[1], 'ko', markersize = 8) #Mark the starting point [0, 0]
    for i in range(num_cells):
        ax[m].plot(paths[m,i,-1,0], paths[m,i,-1,1], 'ro', markersize = 8) #Mark the terminal points for each cell
    ax[m].plot(1500, 1500, 'bX', markersize = 8) #Mark the highest concentration point [1500, 1500]

    ax[m].set_title("{}\n Average tumble every 1 s".format(methods[m]), x = 0.5, y = 0.87)
    ax[m].set_xlim(-1000, 3000)
    ax[m].set_ylim(-1000, 3000)
    ax[m].set_xlabel("position in μm")
    ax[m].set_ylabel("position in μm")

fig.tight_layout()

plt.show()
~~~

You are now ready to run the code for `Part 2: Visualizing trajectories`. Do you notice a difference in the two strategies in helping the cell travel toward the goal?

### Quantitative comparison

If you performed the plotting in the previous section, then you may have formed a hypothesis about the effectiveness of the chemotactic strategy compared to the pure random walk. However, because of the variations due to randomness, we should be careful about using only three cells as our sample size. To more rigorously compare the two strategies, we will simulate 500 cells for 1500 seconds for each strategy and consider how close, on average, the cell is to the goal at the end for each strategy.

As in the previous section, we first simulate each of the two strategies for the desired number of cells, and store the results of the walk for each cell. We also compute the average and standard deviation of the distance from a cell to the goal for each of the two strategies.

~~~ python
#Run simulation for 3 cells with different background tumbling frequencies, Plot paths

duration = 1500   #seconds, duration of the simulation
num_cells = 500
origin_to_center = distance(start, ligand_center) #Update the global constant
run_time_expected = 1.0

paths_rand = simulate_std_random(num_cells, duration, run_time_expected)
paths_che = simulate_chemotaxis(num_cells, duration, run_time_expected)
paths = np.array([paths_rand, paths_che])

all_distance = np.zeros((2, num_cells, duration)) #Initialize to store results: methods, number, duration

for m in range(2): #two methods
    for c in range(num_cells): #each cell
        for t in range(duration): #every time point
            pos = paths[m, c, t]
            dist = distance(ligand_center, pos)
            all_distance[m, c, t] = dist

all_dist_avg = np.mean(all_distance, axis = 1) #Calculate average over cells, array of shape (2,duration,)
all_dist_std = np.std(all_distance, axis = 1) #Calculate the standard deviation, array of shape (2,duration,)
~~~

Then, for each of the two strategies, we plot the average distance to the goal as a function of time, as we did in the [random walk tutorial](tutorial_purerandom). Recall that the shaded area corresponds to one standard deviation from the mean.

~~~ python
#Below are all for plotting purposes
#Define the colors to use
colors1 = colorspace.qualitative_hcl(h=[0, 200.], c = 60, l = 70, pallete = "dynamic")(2)

xs = np.arange(0, duration) #Set the x-axis for plot: time points. Array of integers of shape (duration,)

fig, ax = plt.subplots(1, figsize = (10, 8)) #Initialize the plot with 1*1 subplot of size 10*8

for m in range(2):
    #Get the result for this strategy
    mu, sig = all_dist_avg[m], all_dist_std[m]
    #Plot average distance vs. time
    ax.plot(xs, mu, lw=2, label="{}".format(methods[m]), color=colors1[m])
    #Fill in average +/- one standard deviation vs. time
    ax.fill_between(xs, mu + sig, mu - sig, color = colors1[m], alpha=0.15)

ax.set_title("Average distance to highest concentration")
ax.set_xlabel('time (s)')
ax.set_ylabel('distance to center (µm)')
ax.hlines(0, 0, duration, colors='gray', linestyles='dashed', label='concentration 10^8')
ax.legend(loc='upper right', ncol = 2, fontsize = 15)

ax.grid()
~~~

You are now ready to run the code in `Part 3: Comparing performances`. Consider whether you feel confident in your hypothesis about the performance of the two cellular strategies before we discuss our analysis back in the main text.

[Return to main text](conclusion#comparing-the-effectiveness-of-our-two-random-walk-strategies){: .btn .btn--warning .btn--large}
{: style="font-size: 100%; text-align: center;"}



[^Saragosti2012]: Saragosti J., Siberzan P., Buguin A. 2012. Modeling *E. coli* tumbles by rotational diffusion. Implications for chemotaxis. PLoS One 7(4):e35412. [available online](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3329434/).

[^Berg1972]: Berg HC, Brown DA. 1972. Chemotaxis in Escherichia coli analysed by three-dimensional tracking. Nature. [Available online](https://www.nature.com/articles/239500a0)

[^Baker2005]: Baker MD, Wolanin PM, Stock JB. 2005. Signal transduction in bacterial chemotaxis. BioEssays 28:9-22. [Available online](https://pubmed.ncbi.nlm.nih.gov/16369945/)
