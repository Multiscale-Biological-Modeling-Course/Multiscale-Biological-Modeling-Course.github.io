"""
Gray-Scott reaction-diffusion simulation → hero video.

Output: turing_hero.mp4  (drop into assets/images/)

Run with:  conda run python3 scripts/make_turing_video.py
"""

import numpy as np
import imageio
from matplotlib.colors import LinearSegmentedColormap

# ---------------------------------------------------------------------------
# Settings
# ---------------------------------------------------------------------------
W, H       = 400, 200      # simulation grid (2:1 matches hero banner)
F, k       = 0.038, 0.061  # stripe regime (f38_k61)
Du, Dv     = 0.2097, 0.105
dt         = 1.0

WARMUP_STEPS  = 8000   # simulation steps before recording starts
RECORD_STEPS  = 8      # simulation steps between each recorded frame
FPS           = 30
DURATION_SECS = 20     # video length; loops seamlessly
RENDER_W      = 1920   # output pixel width
RENDER_H      = 960    # output pixel height
OUTPUT        = "assets/images/turing_hero.mp4"

# ---------------------------------------------------------------------------
# Initialization: background noise + dense seeds
# ---------------------------------------------------------------------------
rng = np.random.default_rng(42)

u = np.ones((H, W))  + rng.uniform(-0.02, 0.02, (H, W))
v = np.zeros((H, W)) + rng.uniform(0, 0.01, (H, W))

# Nucleation sites
for _ in range(500):
    cx, cy = rng.integers(0, W), rng.integers(0, H)
    r = 4
    ys = np.arange(cy - r, cy + r + 1)[:, None] % H
    xs = np.arange(cx - r, cx + r + 1)[None, :] % W
    u[ys, xs] = 0.5 + rng.uniform(-0.1, 0.1, (2*r+1, 2*r+1))
    v[ys, xs] = 0.25 + rng.uniform(-0.1, 0.1, (2*r+1, 2*r+1))

np.clip(u, 0, 1, out=u)
np.clip(v, 0, 1, out=v)

# ---------------------------------------------------------------------------
# Simulation (fully vectorized with numpy)
# ---------------------------------------------------------------------------
def laplacian(Z):
    return (np.roll(Z, 1, axis=0) + np.roll(Z, -1, axis=0) +
            np.roll(Z, 1, axis=1) + np.roll(Z, -1, axis=1) - 4 * Z)

def step(u, v):
    uvv = u * v * v
    u += dt * (Du * laplacian(u) - uvv + F * (1 - u))
    v += dt * (Dv * laplacian(v) + uvv - (F + k) * v)
    np.clip(u, 0, 1, out=u)
    np.clip(v, 0, 1, out=v)
    return u, v

# Warm up
print(f"Warming up ({WARMUP_STEPS} steps)...")
for i in range(WARMUP_STEPS):
    u, v = step(u, v)
    if (i + 1) % 1000 == 0:
        print(f"  {i + 1}/{WARMUP_STEPS}")

# ---------------------------------------------------------------------------
# Colormap: dark brown → orange → amber  (matches existing site palette)
# ---------------------------------------------------------------------------
cmap = LinearSegmentedColormap.from_list("turing", [
    ( 15/255,   3/255,   0/255),   # near-black brown
    (160/255,  40/255,   0/255),   # deep orange
    (230/255, 140/255,   0/255),   # amber
    (255/255, 230/255, 150/255),   # pale cream
])

def v_to_rgb(v_grid):
    """Map v concentrations to uint8 RGB frame."""
    t = np.clip(v_grid * 5, 0, 1)   # stretch contrast
    rgba = cmap(t)                    # (H, W, 4) float32
    rgb  = (rgba[:, :, :3] * 255).astype(np.uint8)
    # Scale up to output resolution
    from PIL import Image
    img = Image.fromarray(rgb)
    img = img.resize((RENDER_W, RENDER_H), Image.BILINEAR)
    return np.array(img)

# ---------------------------------------------------------------------------
# Render frames
# ---------------------------------------------------------------------------
n_frames = FPS * DURATION_SECS
print(f"\nRendering {n_frames} frames at {FPS}fps ({DURATION_SECS}s)...")

with imageio.get_writer(OUTPUT, fps=FPS,
                        codec="libx264",
                        quality=8,
                        macro_block_size=1) as writer:
    for f_idx in range(n_frames):
        for _ in range(RECORD_STEPS):
            u, v = step(u, v)
        writer.append_data(v_to_rgb(v))
        if (f_idx + 1) % FPS == 0:
            print(f"  {f_idx + 1}/{n_frames} frames")

print(f"\nDone → {OUTPUT}")
print("Now add it to index.md hero — ask Claude to wire it up!")
