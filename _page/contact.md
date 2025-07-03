---
layout: page
title: Kontak Saya
permalink: /contact/
---

<div class="contact-form-container">
  <p>Punya pertanyaan atau ingin menyapa? Gunakan formulir di bawah ini!</p>

  <form action="https://formspree.io/f/your_form_id" method="POST">
    <label for="name">Nama:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="_replyto" required>

    <label for="message">Pesan:</label>
    <textarea id="message" name="message" rows="5" required></textarea>

    <input type="text" name="_gotcha" style="display:none">

    <button type="submit">Kirim Pesan</button>
  </form>

  <p>Kami akan berusaha membalas secepatnya.</p>
</div>