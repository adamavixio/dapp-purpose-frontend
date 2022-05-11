import { PurposeClient } from "./build/PurposeServiceClientPb"
import { AddMissionRequest, Mission, MissionStreamRequest, MissionStreamResponse, RemoveMissionRequest } from "./build/purpose_pb"

const client = new PurposeClient("http://localhost:8081")

//
// Stream
//

const missionStreamRequest = new MissionStreamRequest()
const stream = client.missionStream(missionStreamRequest, {})
stream.on("data", res => publish(res))

//
// State
//

const subscribers = []

const publish = (res: MissionStreamResponse) => {
	subscribers.forEach(sub => sub(res))
}

//
// Actions
//

export const subscribePurpose = (cb: (MissionStreamRequest) => void) => {
	subscribers.push(cb)
}

export const addPurpose = async (title: string) => {
	const mission = new Mission().setTitle(title)
	await client.addMission(new AddMissionRequest().setMission(mission), null)
}

export const removePurpose = async (title: string) => {
	const mission = new Mission().setTitle(title)
	await client.removeMission(new RemoveMissionRequest().setMission(mission), null)
}