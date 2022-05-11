import { animate } from "./animations/Animation"
import { newState, type State } from "./state"

export const initThree = (domElementID: string) => {
	const state = newState()

	render(state, domElementID)
	register(state)

	animate(state)
}

const render = ({ renderer }: State, domElementID: string) => {
	const root = document.querySelector(`#${domElementID}`)
	root.appendChild(renderer.domElement)
}

const register = ({ renderer, camera }: State) => {
	window.addEventListener("resize", () => {
		renderer.setSize(window.innerWidth, window.innerHeight)
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
	})
}