import { missionsState } from "../store/purpose";
import { PurposeClient } from "./build/PurposeServiceClientPb";
import { AddMissionRequest, Mission, MissionStreamRequest, RemoveMissionRequest } from "./build/purpose_pb";

const client = new PurposeClient("http://localhost:8081")

export const connectMissions = async () => {
	const missionStreamRequest = new MissionStreamRequest()
	const stream = client.missionStream(missionStreamRequest, {})

	stream.on("data", res => {
		switch (res.getType()) {
			case "ALL":
				missionsState.init(res.getMissionsList())
				return
			case "ADD":
				missionsState.add(res.getMissionsList())
				return
			case "REMOVE":
				missionsState.remove(res.getMissionsList())
				return
		}
	})

	stream.on('end', () => {
		console.log("ENDED")
	});
}

export const addMission = async (title: string) => {
	const mission = new Mission().setTitle(title)
	await client.addMission(new AddMissionRequest().setMission(mission), null)
}

export const removeMission = async (title: string) => {
	const mission = new Mission().setTitle(title)
	await client.removeMission(new RemoveMissionRequest().setMission(mission), null)
}