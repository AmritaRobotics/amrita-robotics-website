<script lang="ts">
  import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';
</script>

<Navbar currentPage="about" />

<div class="main-content">
<main class="section container glass about-section">
  <h1>About Amrita Robotics</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
  <p>RoboCon achievements and lab info...</p>
  <p><strong>Past RoboCon:</strong> Add achievements here.</p>
</main>
</div>

<Footer />

<style>
.main-content {
  flex: 1; /* allows main content to grow and fill space */
  display: flex;
  flex-direction: column;
  padding-top: 120px;
}
.about-section {
	padding: 80px 20px;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	text-align: center;
	max-width: 900px;
	margin: auto;
}
</style>
