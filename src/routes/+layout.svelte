<script>
	import '../app.css';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="app">
	<main>
		Welcome: {data.user.username}
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
