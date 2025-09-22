<script lang="ts">
  import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';
</script>

<Navbar currentPage="about" />

<main class="section container glass about-section">
  <h1>About Amrita Robotics</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
  <p>RoboCon achievements and lab info...</p>
  <p><strong>Past RoboCon:</strong> Add achievements here.</p>
</main>

<Footer />

<style>
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
