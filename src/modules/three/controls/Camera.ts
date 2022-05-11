import { PerspectiveCamera } from "three";

export const newCamera = () => {
	const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, .01, 1000)

	camera.position.z = 10
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()

	return camera
}
