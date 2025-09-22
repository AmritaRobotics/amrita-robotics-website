<script lang="ts">
  import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';
  import { onMount, afterUpdate } from 'svelte';

  let scrolled = false;
  let menuOpen = false;

  const handleScroll = () => {
    scrolled = window.scrollY > 20; // adjust threshold
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  // add/remove "scrolled" class on body to trigger color changes
  afterUpdate(() => {
    if (scrolled) document.body.classList.add("scrolled");
    else document.body.classList.remove("scrolled");
  });
</script>

<Navbar currentPage="home" />

<!-- HERO -->
<section class="hero">
  <video autoplay loop muted playsinline class="hero-video">
    <source src="/videos/Robot_Metal_Zoom_Out.mp4" type="video/mp4" />
  </video>

  <div class="hero-overlay glass">
    <h1 class="hero-title">Amrita Robotics</h1>
    <p class="hero-sub">Innovating for <strong>ABU Robocon 2026</strong></p>

    <div class="hero-cta">
      <a href="/team" class="btn primary">Meet the Team</a>
      <a href="/about" class="btn secondary">Our Story</a>
    </div>
  </div>
</section>

<!-- CONTENT -->
<section class="section container">
  <h2 class="section-title">Our Work</h2>
  <p class="section-lead">
    We design, build, and compete with state-of-the-art robots.
  </p>

  <div class="photo-grid">
    <img src="/images/photo1.jpg" alt="robot 1" />
    <img src="/images/photo2.jpg" alt="robot 2" />
    <img src="/images/photo3.jpg" alt="robot 3" />
    <img src="/images/photo4.jpg" alt="robot 4" />
  </div>
</section>

<Footer />

<style>
  :global(:root) {
    --bg-dark: linear-gradient(135deg, #1a237e, #4a148c);
    --bg-light: #fff;
    --accent: #ff6f61;
    --accent2: #ff9800;
    --glass-bg: rgba(255, 255, 255, 0.08);
    --text-muted-dark: rgba(255, 255, 255, 0.7);
    --text-muted-light: rgba(0,0,0,0.7);
    --radius: 20px;
  }

  body {
    background: var(--bg-dark);
    font-family: "Roboto", system-ui, sans-serif;
    color: #fff;
    margin: 0;
    transition: background 0.5s ease, color 0.5s ease;
  }

  body.scrolled {
    background: var(--bg-light);
    color: #000;
  }

  /* HERO */
  .hero {
    position: relative;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .hero-video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.45) contrast(1.1);
  }

  .hero-overlay {
    position: relative;
    padding: 40px;
    text-align: center;
    border-radius: var(--radius);
    transition: background 0.5s ease, color 0.5s ease;
  }

  body.scrolled .hero-overlay {
    background: rgba(255, 152, 0, 0.08);
    color: #000;
  }

  .hero-title {
    font-size: clamp(2rem, 6vw, 3.5rem);
    font-weight: 800;
    margin-bottom: 0.6rem;
  }

  .hero-sub {
    color: var(--text-muted-dark);
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
  }

  body.scrolled .hero-sub {
    color: var(--text-muted-light);
  }

  /* BUTTONS */
  .btn {
    padding: 12px 20px;
    border-radius: 999px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.3s;
  }

  .btn.primary {
    background: var(--accent);
    color: #fff;
    box-shadow: 0 4px 12px rgba(255, 111, 97, 0.4);
  }

  .btn.secondary {
    background: var(--glass-bg);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  /* SECTIONS */
  .section {
    padding: 64px 0;
  }

  .container {
    width: min(1200px, 90%);
    margin: auto;
  }

  .section-title {
    font-size: 1.8rem;
    margin-bottom: 8px;
  }

  .section-lead {
    margin-bottom: 20px;
    color: var(--text-muted-dark);
  }

  body.scrolled .section-lead {
    color: var(--text-muted-light);
  }

  /* PHOTO GRID */
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 18px;
  }

  .photo-grid img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: var(--radius);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s, filter 0.5s ease;
  }

  body.scrolled .photo-grid img {
    filter: brightness(1.1) contrast(1.05);
  }

  /* FOOTER */
  .footer {
    text-align: center;
    padding: 20px;
    margin-top: 40px;
    border-radius: var(--radius);
    color: var(--text-muted-dark);
    transition: color 0.5s ease;
  }

  body.scrolled .footer {
    color: var(--text-muted-light);
  }
</style>
