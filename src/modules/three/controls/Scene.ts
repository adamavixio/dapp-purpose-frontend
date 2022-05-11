import { Color, Scene as ThreeScene } from "three";

export const newScene = () => {
	const scene = new ThreeScene()

	scene.background = new Color(0x120052)

	return scene
}
