<script>
	import Footer from '$lib/Footer.svelte';
</script>

<slot />

<Footer />

<style lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
