<script lang="ts">
  import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';

  let name = "";
  let email = "";
  let message = "";
  let success = false;

  function handleSubmit() {
    // For now, just simulate success
    success = true;
    name = "";
    email = "";
    message = "";
  }
</script>

<Navbar currentPage="contact" />

<main class="section container glass contact-section">
  <h1 class="section-title">Contact Us</h1>
  <p class="section-lead">Get in touch with Amrita Robotics — we’d love to hear from you!</p>

  {#if success}
    <p class="success-message">Thank you! Your message has been sent.</p>
  {/if}

  <form on:submit|preventDefault={handleSubmit} class="contact-form">
    <input type="text" placeholder="Your Name" bind:value={name} required />
    <input type="email" placeholder="Your Email" bind:value={email} required />
    <textarea placeholder="Your Message" bind:value={message} rows="5" required></textarea>
    <button type="submit" class="btn primary">Send Message</button>
  </form>
</main>

<Footer />

<style>
.contact-section {
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 60px 20px;
  text-align: center;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.contact-form input,
.contact-form textarea {
  padding: 12px;
  border-radius: 12px;
  border: none;
  background: rgba(255,255,255,0.08);
  color: white;
  font-size: 1rem;
  resize: none;
}
.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: rgba(255,255,255,0.6);
}
.contact-form button {
  padding: 12px 20px;
  border-radius: 999px;
  font-weight: 700;
  background: #4cc9f0;
  color: #fff;
  cursor: pointer;
  border: none;
  transition: 0.3s;
}
.contact-form button:hover { background: #4895ef; transform: translateY(-2px); }
.success-message {
  color: #4cc9f0;
  font-weight: 600;
  margin-bottom: 16px;
}
</style>
