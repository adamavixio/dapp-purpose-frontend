import { writable } from "svelte/store";
import type { Mission } from "../grpc/build/purpose_pb";

const createMissions = () => {
	const { subscribe, set, update } = writable([] as Mission[])

	const init = (missions: Mission[]) => {
		set(missions)
	}

	const add = (missions: Mission[]) => {
		update(state => ([...state, ...missions]))
	}

	const remove = (missions: Mission[]) => {
		update(state => state.filter(mission => missions.some(removed => mission.getTitle() !== removed.getTitle())))
	}

	return {
		subscribe,
		init,
		add,
		remove,
	}
}

export const missionsState = createMissions()
