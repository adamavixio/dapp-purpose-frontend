<script lang="ts">
	import { add, purposeState, remove } from "../state/purpose";

	let addPurposeTitle: string;
	const onSubmitAddPurpose = async () => {
		if (addPurposeTitle && addPurposeTitle !== "") {
			await add(addPurposeTitle);
			addPurposeTitle = "";
		}
	};

	let removePurposeTitle: string;
	const onSubmitRemovePurpose = async () => {
		if (removePurposeTitle && removePurposeTitle !== "") {
			await remove(removePurposeTitle);
			removePurposeTitle = "";
		}
	};
</script>

<section id="form-purpose">
	<div>
		<h1>Add or Remove Purpose</h1>
	</div>

	<form on:submit|preventDefault={onSubmitAddPurpose}>
		<input bind:value={addPurposeTitle} type="text" />
		<button type="submit">Add Purpose</button>
	</form>

	<form on:submit|preventDefault={onSubmitRemovePurpose}>
		<input bind:value={removePurposeTitle} type="text" />
		<button type="submit">Remove Purpose</button>
	</form>

	<div>
		<h1>Purposes</h1>
		{#each $purposeState as mission}
			<h3>{mission.getTitle()}</h3>
		{/each}
	</div>
</section>

<style>
	section {
		position: fixed;
		height: 100vh;
		width: 100vw;
		z-index: 1;
	}

	h1 {
		color: azure;
	}
</style>
