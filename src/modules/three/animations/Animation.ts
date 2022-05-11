import { spiralEnergies } from "../objects/Energy"
import { rotateOrbs } from "../objects/Orb"
import type { State } from "../state"

export const animate = (state: State) => {
	requestAnimationFrame(() => animate(state))

	const { renderer, scene, camera } = state
	renderer.render(scene, camera)

	const { orbGeometry, OrbWireframe, energies, } = state
	spiralEnergies(energies, 0.01, 0.05)
	rotateOrbs(orbGeometry, OrbWireframe, 0.01)

	console.log("called")
}

