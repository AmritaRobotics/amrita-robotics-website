<script lang="ts">
  import { onMount } from "svelte";
  export let currentPage = "";
  let menuOpen = false;
  let scrolled = false;

  const handleScroll = () => {
    scrolled = window.scrollY > 20; // adjust threshold
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<header class="nav glass {scrolled ? 'rounded' : ''}">
  <div class="brand">
    <img src="/images/AR.jpg" alt="logo" class="logo" />
    <span class="brand-title">Amrita Robotics</span>
  </div>

  <button class="nav-toggle" on:click={() => (menuOpen = !menuOpen)} aria-label="Toggle menu">
    <span class="hamburger"></span>
  </button>

  <nav class={`nav-links ${menuOpen ? "show" : ""}`}>
    <a href="/" class={currentPage === "home" ? "active" : ""}>Home</a>
    <a href="/team" class={currentPage === "team" ? "active" : ""}>Team</a>
    <a href="/about" class={currentPage === "about" ? "active" : ""}>About</a>
    <a href="/contact" class={currentPage === "contact" ? "active" : ""}>Contact</a>
  </nav>
</header>

<style>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;       /* default padding at top of page */
  margin: 0;
  border-radius: 0;          /* rectangular */
  backdrop-filter: blur(16px);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  transition: border-radius 0.3s ease, padding 0.3s ease, margin 0.3s ease;
}

/* rounded + floating effect on scroll */
.nav.rounded {
  border-radius: 999px;
  margin: 12px 16px 0 16px;  /* adds top space when scrolling */
  padding: 12px 24px;        /* optional: slightly smaller padding inside */
  transform: translateY(12px); /* visually moves navbar down */
}

/* rest of your navbar styles (links, brand, toggle, mobile) remain the same */
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}
.logo {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  object-fit: cover;
}
.brand-title {
  font-weight: 700;
  font-size: 1.2rem;
  color: white;
}
.nav-links {
  display: flex;
  gap: 16px;
  transition: max-height 0.3s ease;
}
.nav-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-weight: 600;
  padding: 8px 14px;
  border-radius: 12px;
  transition: 0.25s;
}
.nav-links a:hover,
.nav-links a.active {
  background: rgba(255, 255, 255, 0.08);
  color: white;
}
.nav-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
}
.hamburger {
  width: 22px;
  height: 2px;
  background: white;
  position: relative;
  display: block;
}
.hamburger::before,
.hamburger::after {
  content: "";
  position: absolute;
  left: 0;
  width: 22px;
  height: 2px;
  background: white;
}
.hamburger::before {
  top: -6px;
}
.hamburger::after {
  top: 6px;
}

/* MOBILE */
@media (max-width: 768px) {
  .nav-toggle {
    display: block;
  }
  .nav-links {
    flex-direction: column;
    max-height: 0;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    position: absolute;
    right: 12px;
    top: 64px;
    width: 200px;
    padding: 0;
  }
  .nav-links.show {
    max-height: 500px;
    padding: 12px;
  }
  .nav-links a {
    display: block;
    margin: 8px 0;
  }
}
</style>
