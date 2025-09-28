<script lang="ts">
  import { onMount } from "svelte";
  import { theme } from '$lib/stores/theme';
  import { base } from '$app/paths';

  export let currentPage = "";

  let menuOpen = false;
  let currentTheme: "dark" | "light" = "light";

  // Update theme slider and HTML class safely
  onMount(() => {
    const unsubscribe = theme.subscribe(t => {
      currentTheme = t;
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle("dark", t === "dark");
      }
    });

    return () => unsubscribe();
  });

  const toggleTheme = () => {
    theme.set(currentTheme === "dark" ? "light" : "dark");
  };
</script>

<header class="nav glass">
  <!-- Brand -->
  <div class="brand" on:click={() => window.location.href = '/'}>
    <img src="{base}/images/AR.jpg" alt="logo" class="logo" />
    <span class="brand-title">Amrita Robotics</span>
  </div>

  <!-- Navigation Links -->
  <nav class={`nav-links ${menuOpen ? "show" : ""}`}>
    <a href="/" class={currentPage === "home" ? "active" : ""}>Home</a>
    <a href="/team" class={currentPage === "team" ? "active" : ""}>Team</a>
    <a href="/about" class={currentPage === "about" ? "active" : ""}>About</a>
    <a href="/contact" class={currentPage === "contact" ? "active" : ""}>Contact</a>
  </nav>

  <!-- Theme toggle -->
  <div class="theme-toggle" on:click={toggleTheme} aria-label="Toggle theme">
    <div class="slider" class:dark={currentTheme === 'dark'} class:light={currentTheme === 'light'}></div>
  </div>

  <!-- Hamburger for mobile -->
  <button class="nav-toggle" on:click={() => menuOpen = !menuOpen} aria-label="Toggle menu">
    <span class="hamburger"></span>
  </button>
</header>

<style>
/* Navbar base */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  background: transparent;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0;
  transition: border-radius 0.3s ease, padding 0.3s ease;
}

/* Brand */
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
}
.brand img {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  object-fit: cover;
}

/* Nav Links */
.nav-links {
  display: flex;
  gap: 16px;
  transition: max-height 0.3s ease;
}
.nav-links a {
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  font-weight: 600;
  padding: 8px 14px;
  border-radius: 12px;
  transition: 0.25s;
}
.nav-links a.active,
.nav-links a:hover {
  background: rgba(255,255,255,0.08);
  color: white;
}

/* Theme toggle slider */
.theme-toggle {
  width: 50px;
  height: 24px;
  background: rgba(255,255,255,0.2);
  border-radius: 999px;
  padding: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.theme-toggle .slider {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: transform 0.3s ease, background 0.3s ease;
}
.theme-toggle .slider.dark {
  transform: translateX(0);
  background: #1a1a1a;
}
.theme-toggle .slider.light {
  transform: translateX(26px);
  background: #fff;
}

/* Hamburger */
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
.hamburger::before { top: -6px; }
.hamburger::after { top: 6px; }

/* Mobile */
@media (max-width:768px) {
  .nav-toggle { display: block; }
  .nav-links {
    flex-direction: column;
    max-height: 0;
    overflow: hidden;
    background: rgba(255,255,255,0.08);
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
  .theme-toggle {
    margin-top: 8px;
  }
}
</style>
