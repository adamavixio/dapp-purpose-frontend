<script lang="ts">
	import { onMount } from "svelte";
	import { initThree } from "../modules/three";

	export let id: string;

	onMount(() => initThree(id));
</script>

<section>
	<div {id} />
</section>

<style>
	div {
		position: fixed;
	}
</style>
