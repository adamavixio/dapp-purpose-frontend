<script lang="ts">
	import { onMount } from "svelte";
	import {
		addMission,
		connectMissions,
		removeMission,
	} from "./grpc/purpose_client";
	import { missionsState } from "./store/purpose";

	let addMissionTitle;
	const onSubmitAddMission = async () => {
		if (addMissionTitle && addMissionTitle !== "") {
			await addMission(addMissionTitle);
			addMissionTitle = "";
		}
	};

	let removeMissionTitle;
	const onSubmitRemoveMission = async () => {
		if (removeMissionTitle && removeMissionTitle !== "") {
			await removeMission(removeMissionTitle);
			removeMissionTitle = "";
		}
	};

	onMount(async () => connectMissions());
</script>

<div>
	<h1>Add or Remove Mission</h1>
</div>

<form on:submit|preventDefault={onSubmitAddMission}>
	<input bind:value={addMissionTitle} type="text" />
	<button type="submit">Add Mission</button>
</form>

<form on:submit|preventDefault={onSubmitRemoveMission}>
	<input bind:value={removeMissionTitle} type="text" />
	<button type="submit">Remove Mission</button>
</form>

<div>
	<h1>Missions</h1>
	{#each $missionsState as mission}
		<h3>{mission.getTitle()}</h3>
	{/each}
</div>

<style>
</style>
