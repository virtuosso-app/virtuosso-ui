<script>
	import '../app.css';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="app">
	<slot />
</div>

<style>
	.app {
		position: absolute;
		width: 100%;
		height: 100%;
	}
</style>
