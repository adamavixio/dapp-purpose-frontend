import { writable } from "svelte/store";
import type { Mission } from "../clients/grpc/build/purpose_pb";
import { addPurpose, removePurpose, subscribePurpose } from "../clients/grpc/purpose_client";

const { subscribe, set, update } = writable([] as Mission[])

subscribePurpose(res => {
	const missions = res.getMissionsList()

	switch (res.getType()) {
		case "ALL":
			set(missions)
			return
		case "ADD":
			update(state => ([...state, ...missions]))
			return
		case "REMOVE":
			update(state => state.filter(mission => missions.some(removed => mission.getTitle() !== removed.getTitle())))
			return
	}
})

//
// State
// 

export const purposeState = { subscribe }

//
// Actions
//

export const add = async (title: string) => await addPurpose(title)
export const remove = async (title: string) => await removePurpose(title)
