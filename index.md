---
title: "Biological Modeling"
subtitle: "A Free Online Course in Computational Biology"
layout: splash
description: "Power up your computational and machine learning skills with our free course on modeling biological systems."
excerpt: "Explore biological systems at multiple scales with our free computational biology course."

header:
  overlay_color: "#000"
  overlay_filter: "0.6"
  overlay_image: /assets/images/f38_k61_compressed.webp
  image_alt: "Turing pattern stripes produced by the Gray-Scott model, a coarse-grained predator-prey reaction-diffusion system."
  actions:
    - label: "Start learning!"
      url: "/prologue/"

prologue:
  - image_path: /assets/images/gray_scott_jupyter_high-res_banner.png
    title: "Prologue: Random walks and Turing patterns"
    excerpt: "Have you ever wondered why zebras have stripes? In the course prologue, we’ll explore how simple predator-prey interactions at the microscopic level can give rise to reaction-diffusion systems, where beautiful and complex stripes and spots spontaneously emerge from random motion."
    url: "/prologue/"
    btn_label: "Read More"
    btn_class: "btn--primary"
chapter_1:
  - image_path: /assets/images/repressilator_chart.png
    title: "Module 1: Finding motifs in transcription factor networks"
    excerpt: "Transcription factors are proteins serving as master gene regulators in the cell. When we study how transcription factors interact, we uncover remarkable patterns like oscillations that arise from simple behavior. In this module, we will build models to explain why these regulatory patterns have evolved."
    url: "/motifs/home"
    btn_label: "Read More"
    btn_class: "btn--primary"
chapter_2:
  - image_path: /assets/images/ecoli_glucose_banner.png
    title: "Module 2: Unpacking E. coli’s genius exploration algorithm"
    excerpt: "In bacteria, a single-celled organism explores its environment using an approach that seems intelligent, and yet it can be broken down into a series of chemical reactions. When a bacterium senses a change, it propagates that information through a sequence of internal reactions that adjust its behavior. In this module, we’ll model these processes and see how even when we perturb them, the bacterium still manages to return to its original exploration strategy."
    url: "/chemotaxis/home"
    btn_label: "Read More"
    btn_class: "btn--primary"
chapter_3:
  - image_path: /assets/images/SARS_spike_proteins_banner.jpg
    title: "Module 3: Analyzing the coronavirus spike protein"
    excerpt: "Why did the original SARS coronavirus fizzle out but SARS-CoV-2 spread like wildfire around the planet? Much of the answer lies in how effectively the virus can infect human cells by binding its spike protein to an enzyme on their surface. Can we predict a protein’s structure, and therefore its function, without performing any experiments? And how can we compare proteins (say,  spike proteins across related coronaviruses) to determine why one virus infects humans more efficiently than another?"
    url: "/coronavirus/home"
    btn_label: "Read More"
    btn_class: "btn--primary"
chapter_4:
  - image_path: /assets/images/normal_adult_blood_smear_banner.JPG
    title: "Module 4: Training a computer to classify white blood cells"
    excerpt: "How can algorithms be trained to see as well as a human? By tackling the real-world challenge of classifying white blood cells into categories, a common task in medicine, we will see how computers can make automated decisions. We’ll start by segmenting images to isolate the white blood cells. Then, we will apply classic machine learning algorithms to cluster them based on shape, ultimately allowing us to classify them into distinct types."
    url: "/white_blood_cells/home"
    btn_label: "Read More"
    btn_class: "btn--primary"
---

{% include feature_row id="prologue" type="left" %}

{% include feature_row id="chapter_1" type="right" %}

{% include feature_row id="chapter_2" type="left" %}

{% include feature_row id="chapter_3" type="right" %}

{% include feature_row id="chapter_4" type="left" %}

<div class="email-signup">
  <h2>Stay connected</h2>
  <p>Join thousands of Philomath learners across our courses.</p>
  <a href="http://eepurl.com/iC9DSg" class="email-signup__btn" target="_blank" rel="noopener">Join our mailing list</a>
  <p class="email-signup__note">No spam. Unsubscribe any time.</p>
</div>

<script>
/* Live Gray-Scott Turing pattern canvas in hero */
(function () {
  function init() {
    var hero = document.querySelector('.page__hero--overlay');
    if (!hero) return;

    var canvas = document.createElement('canvas');
    canvas.style.cssText = [
      'position:absolute', 'top:0', 'left:0',
      'width:100%', 'height:100%',
      'z-index:-1',
      'opacity:0',
      'transition:opacity 2s ease'
    ].join(';');
    hero.style.position = 'relative';
    hero.style.overflow = 'hidden';
    hero.insertBefore(canvas, hero.firstChild);

    canvas.width  = hero.offsetWidth  || 1200;
    canvas.height = hero.offsetHeight || 500;

    /* Simulation grid sized to hero aspect ratio */
    var SW = 200, SH = Math.max(60, Math.round(200 * canvas.height / canvas.width));
    var N  = SW * SH;
    var u  = new Float32Array(N).fill(1), v  = new Float32Array(N),
        nu = new Float32Array(N),         nv = new Float32Array(N);

    /* Seed entire grid with low noise so stripes emerge quickly everywhere */
    for (var i = 0; i < N; i++) {
      u[i] = 1.0 - Math.random() * 0.05;
      v[i] = Math.random() * 0.02;
    }
    /* Dense concentrated seeds to nucleate stripe formation */
    for (var s = 0; s < 400; s++) {
      var cx = (Math.random() * SW) | 0, cy = (Math.random() * SH) | 0;
      for (var dy = -3; dy <= 3; dy++) for (var dx = -3; dx <= 3; dx++) {
        var pi = ((cy+dy+SH)%SH)*SW + (cx+dx+SW)%SW;
        u[pi] = 0.5 + (Math.random() - 0.5) * 0.2;
        v[pi] = 0.25 + (Math.random() - 0.5) * 0.2;
      }
    }

    /* Gray-Scott parameters: f38_k61 stripe regime */
    var F = 0.038, k = 0.061, Du = 0.2097, Dv = 0.105;

    function step() {
      var tmp;
      for (var y = 0; y < SH; y++) {
        var yp = ((y-1+SH)%SH)*SW, yn = ((y+1)%SH)*SW, yc = y*SW;
        for (var x = 0; x < SW; x++) {
          var i = yc+x, ui = u[i], vi = v[i];
          var lu = u[yp+x]+u[yn+x]+u[yc+(x-1+SW)%SW]+u[yc+(x+1)%SW]-4*ui;
          var lv = v[yp+x]+v[yn+x]+v[yc+(x-1+SW)%SW]+v[yc+(x+1)%SW]-4*vi;
          var uvv = ui*vi*vi;
          nu[i] = ui + Du*lu - uvv + F*(1-ui);
          nv[i] = vi + Dv*lv + uvv - (F+k)*vi;
        }
      }
      tmp=u; u=nu; nu=tmp; tmp=v; v=nv; nv=tmp;
    }

    /* Offscreen canvas for the sim pixels */
    var off = document.createElement('canvas');
    off.width = SW; off.height = SH;
    var oCtx = off.getContext('2d');
    var img  = oCtx.createImageData(SW, SH);
    var pix  = img.data;
    var ctx  = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    /* Colormap: dark brown → orange → amber (matching the site's existing image) */
    function render() {
      for (var i = 0; i < N; i++) {
        var t = Math.max(0, Math.min(1, v[i] * 5));
        var r, g, b, p = i << 2;
        if (t < 0.4) {
          var s = t / 0.4;
          r = (15 + 145*s)|0; g = (3 + 37*s)|0; b = 0;
        } else if (t < 0.75) {
          var s = (t - 0.4) / 0.35;
          r = (160 + 70*s)|0; g = (40 + 100*s)|0; b = 0;
        } else {
          var s = (t - 0.75) / 0.25;
          r = (230 + 25*s)|0; g = (140 + 90*s)|0; b = (150*s)|0;
        }
        pix[p]=r; pix[p+1]=g; pix[p+2]=b; pix[p+3]=255;
      }
      oCtx.putImageData(img, 0, 0);
      ctx.drawImage(off, 0, 0, canvas.width, canvas.height);
    }

    var frame = 0, active = true;
    function animate() {
      if (!active) return;
      /* Burn in fast, then cruise */
      var steps = frame < 500 ? 20 : 4;
      for (var i = 0; i < steps; i++) step();
      render();
      if (frame === 500) canvas.style.opacity = '1';
      frame++;
      requestAnimationFrame(animate);
    }

    document.addEventListener('visibilitychange', function () {
      active = !document.hidden;
      if (active) animate();
    });

    animate();
  }

  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', init);
  else
    init();
})();
</script>

