import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { newCamera } from "./controls/Camera"
import { newRenderer } from "./controls/Renderer"
import { newScene } from "./controls/Scene"
import { newAmbientLight } from "./lights/SpotLight"
import { newEnergies } from "./objects/Energy"
import { newOrbGeometry, newOrbWireframe } from "./objects/Orb"

export type State = ReturnType<typeof newState>

export const newState = () => {
	const scene = newScene()
	const camera = newCamera()
	const renderer = newRenderer()
	const controls = new OrbitControls(camera, renderer.domElement)

	const light = newAmbientLight()
	const orbGeometry = newOrbGeometry()
	const OrbWireframe = newOrbWireframe()
	const energies = newEnergies(12, 20)
	energies.forEach(row => row.forEach(energy => scene.add(energy)))

	scene.add(camera)
	scene.add(light)
	scene.add(orbGeometry)
	scene.add(OrbWireframe)

	return {
		scene,
		camera,
		renderer,
		controls,
		light,
		orbGeometry,
		OrbWireframe,
		energies,
	}
}