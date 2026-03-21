---
permalink: /contact/
title: "Contact Us"
image: "assets/images/f38_k61_compressed.jpg"
description: "Questions or feedback? Reach out to the Biological Modeling team by email or social media, and we'll get back to you promptly."
comments: false
share: false
exclude_book_buttons: true
classes: wide
header:
  overlay_color: "#000"
  overlay_filter: "0.6"
  overlay_image: /assets/images/f38_k61_compressed.webp
  image_alt: "Turing pattern stripes produced by the Gray-Scott model, a coarse-grained predator-prey reaction-diffusion system."
---

<div class="contact-page">

  <div class="contact-reasons">

    <div class="contact-reason">
      <span class="contact-reason__num">01</span>
      <h3 class="contact-reason__title">Share Your Story</h3>
      <p class="contact-reason__text">Have you used this course as a learner? We would love to hear how it has shaped your understanding of biological modeling — your testimonial helps others discover it.</p>
    </div>

    <div class="contact-reason">
      <span class="contact-reason__num">02</span>
      <h3 class="contact-reason__title">Adopt the Course</h3>
      <p class="contact-reason__text">Are you an instructor considering this material for your class? We are building a network of educators and would be glad to welcome you.</p>
    </div>

    <div class="contact-reason">
      <span class="contact-reason__num">03</span>
      <h3 class="contact-reason__title">Anything Else</h3>
      <p class="contact-reason__text">Questions, corrections, collaboration ideas, or just a note — we read every message and look forward to hearing from you.</p>
    </div>

  </div>

  <div class="contact-form-wrap">
    <p class="contact-form__eyebrow">Send a Message</p>
    <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/mwkrayyn" method="post" class="contact-form">

      <div class="contact-form__row contact-form__row--split">
        <div class="contact-form__field">
          <label class="contact-form__label" for="first-name">First Name <span class="contact-form__optional">(optional)</span></label>
          <input class="contact-form__input" type="text" name="first_name" id="first-name" placeholder="Ada">
        </div>
        <div class="contact-form__field">
          <label class="contact-form__label" for="last-name">Last Name <span class="contact-form__optional">(optional)</span></label>
          <input class="contact-form__input" type="text" name="last_name" id="last-name" placeholder="Lovelace">
        </div>
      </div>

      <div class="contact-form__row">
        <div class="contact-form__field">
          <label class="contact-form__label" for="email-address">Email Address <span class="contact-form__required">*</span></label>
          <input class="contact-form__input" type="email" name="_replyto" id="email-address" placeholder="you@example.com" required>
        </div>
      </div>

      <div class="contact-form__row">
        <div class="contact-form__field">
          <label class="contact-form__label" for="contact-reason">I am reaching out as… <span class="contact-form__optional">(optional)</span></label>
          <select class="contact-form__input contact-form__select" name="reason" id="contact-reason">
            <option value="" disabled selected>Choose one…</option>
            <option value="learner">A learner with a testimonial</option>
            <option value="instructor">An instructor interested in adopting the course</option>
            <option value="other">Something else</option>
          </select>
        </div>
      </div>

      <div class="contact-form__row">
        <div class="contact-form__field">
          <label class="contact-form__label" for="message">Message <span class="contact-form__optional">(optional)</span></label>
          <textarea class="contact-form__input contact-form__textarea" rows="6" name="message" id="message" placeholder="Tell us what's on your mind…"></textarea>
        </div>
      </div>

      <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">

      <div class="contact-form__row contact-form__row--submit">
        <button type="submit" class="contact-form__submit">Send Message <span class="contact-form__arrow" aria-hidden="true">→</span></button>
      </div>

    </form>
  </div>

</div>
