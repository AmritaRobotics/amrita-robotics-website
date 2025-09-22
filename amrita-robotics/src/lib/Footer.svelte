<script lang="ts">
  export let year: number = new Date().getFullYear();
</script>

<footer class="footer glass">
  <p>© {year} Amrita Robotics</p>
</footer>

<style>
.footer {
	text-align: center;
	padding: 20px;
	color: rgba(255, 255, 255, 0.732);
	margin-top: 40px;
	border-radius: 20px;
}
</style>