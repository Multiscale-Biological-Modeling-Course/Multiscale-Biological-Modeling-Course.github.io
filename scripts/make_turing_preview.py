"""
Quick preview: 500 iterations, small grid, saves preview.mp4
Run with: conda run python3 make_turing_preview.py
"""

import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import numpy as np
from scipy import signal
import imageio

grid_h, grid_w = 31, 61
numIter        = 3000
seed_size      = 5

A = np.ones((grid_h, grid_w))
B = np.zeros((grid_h, grid_w))
cy, cx = grid_h // 2, grid_w // 2
half = seed_size // 2
A[cy-half:cy+half+1, cx-half:cx+half+1] = 0.5
B[cy-half:cy+half+1, cx-half:cx+half+1] = 0.25

f, k, dt, dA, dB = 0.034, 0.095, 1.0, 0.2, 0.1
lapl = np.array([[0.05, 0.2, 0.05],
                 [0.2, -1.0, 0.2],
                 [0.05, 0.2, 0.05]])

images = []
for i in range(numIter):
    A_new = A + (dA * signal.convolve2d(A, lapl, mode='same', boundary='fill', fillvalue=0)
                 - (A * B * B) + (f * (1 - A))) * dt
    B_new = B + (dB * signal.convolve2d(B, lapl, mode='same', boundary='fill', fillvalue=0)
                 + (A * B * B) - (k * B)) * dt
    A, B = A_new, B_new

    if i % 20 == 0:
        fig, ax = plt.subplots(figsize=(8, 4), dpi=80)
        fig.subplots_adjust(0, 0, 1, 1)
        ax.imshow(B / (A + B), cmap='Spectral', interpolation='bilinear')
        ax.axis('off')
        fig.canvas.draw()
        buf = np.frombuffer(fig.canvas.tostring_argb(), dtype=np.uint8)
        buf = buf.reshape(fig.canvas.get_width_height()[::-1] + (4,))
        images.append(buf[:, :, [1, 2, 3]])
        plt.close(fig)

imageio.mimsave('preview.mp4', images, fps=20, codec='libx264', quality=8, macro_block_size=1)
print(f"Done — {len(images)} frames → preview.mp4")
