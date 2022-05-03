import { writable } from "svelte/store";

const createMissions = () => {
	const { subscribe, set, update } = writable([])

	const init = (missions) => {
		console.log("init", missions)
		set(missions)
	}

	const add = (missions) => {
		console.log("add", missions)
		update(state => ([...state, ...missions]))
	}

	const remove = (missions) => {
		update(state => state.filter(mission => missions.some(removed => mission === removed)))
	}

	return {
		subscribe,
		init,
		add,
		remove,
	}
}

export const missionsState = createMissions()
