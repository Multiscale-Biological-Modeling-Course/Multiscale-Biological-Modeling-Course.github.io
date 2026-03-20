"""
Gray-Scott reaction-diffusion → hero video.
Based directly on tutorials/Gray-Scott.ipynb

Run with:  conda run python3 make_turing_video.py
Output:    turing_hero.mp4
"""

import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import numpy as np
from scipy import signal
import imageio

# _*_*_*_*_*_*_*_*_* GRID PROPERTIES *_*_*_*_*_*_*_*_*_*
grid_h    = 201   # Needs to be odd
grid_w    = 401   # ~2:1 aspect ratio to match widescreen hero
numIter   = 50000
seed_size = 11    # Needs to be an odd number

A = np.ones((grid_h, grid_w))
B = np.zeros((grid_h, grid_w))

# Seed the predators in the centre
cy, cx = grid_h // 2, grid_w // 2
half   = seed_size // 2
A[cy-half:cy+half+1, cx-half:cx+half+1] = 0.5 * np.ones((seed_size, seed_size))
B[cy-half:cy+half+1, cx-half:cx+half+1] = 0.25 * np.ones((seed_size, seed_size))

# _*_*_*_*_*_*_*_*_* SIMULATION VARIABLES *_*_*_*_*_*_*_*_*_*
f    = 0.034
k    = 0.095
dt   = 1.0
dA   = 0.2
dB   = 0.1
lapl = np.array([[0.05, 0.2, 0.05],
                 [0.2, -1.0, 0.2],
                 [0.05, 0.2, 0.05]])

plot_iter = 50   # save a frame every 50 iterations (matches original notebook)
FPS       = 20
OUTPUT    = "turing_hero.mp4"

# _*_*_*_*_*_*_*_*_* SIMULATE + RECORD *_*_*_*_*_*_*_*_*_*
print("Running simulation...")
images = []

for iter in range(numIter):
    A_new = A + (dA * signal.convolve2d(A, lapl, mode='same', boundary='fill', fillvalue=0)
                 - (A * B * B) + (f * (1 - A))) * dt
    B_new = B + (dB * signal.convolve2d(B, lapl, mode='same', boundary='fill', fillvalue=0)
                 + (A * B * B) - (k * B)) * dt
    A = np.copy(A_new)
    B = np.copy(B_new)

    if iter % plot_iter == 0:
        fig, ax = plt.subplots(figsize=(19.2, 9.6), dpi=100)
        fig.subplots_adjust(0, 0, 1, 1)
        ax.imshow(B / (A + B), cmap='Spectral', interpolation='bilinear')
        ax.axis('off')
        fig.canvas.draw()
        buf = np.frombuffer(fig.canvas.tostring_argb(), dtype=np.uint8)
        buf = buf.reshape(fig.canvas.get_width_height()[::-1] + (4,))
        buf = buf[:, :, [1, 2, 3]]  # ARGB → RGB
        images.append(buf)
        plt.close(fig)

        if iter % 500 == 0:
            print(f"  iter {iter}/{numIter}  ({len(images)} frames so far)")

print(f"\nSaving {len(images)} frames → {OUTPUT}")
imageio.mimsave(OUTPUT, images, fps=FPS, codec='libx264', quality=8,
                macro_block_size=1)
print(f"Done → {OUTPUT}")
print("Drop it in assets/images/ and tell Claude!")
