import { IcosahedronGeometry, Mesh, MeshStandardMaterial } from "three";

//
// Types
//

export type OrbGeometry = ReturnType<typeof newOrbGeometry>
export type OrbWireframe = ReturnType<typeof newOrbWireframe>

//
// Models
//

export const newOrbGeometry = () => {
	const geometry = new IcosahedronGeometry(1, 3);
	const mesh = new MeshStandardMaterial({ color: 0xb537f2 });
	const orb = new Mesh(geometry, mesh);

	return orb
}

export const newOrbWireframe = () => {
	const geometry = new IcosahedronGeometry(1.02, 3);
	const mesh = new MeshStandardMaterial({ color: 0xffffff, wireframe: true });
	const wireframe = new Mesh(geometry, mesh);

	return wireframe
}

//
// Actions
//

export const rotateOrbs = (geometry: OrbGeometry, wireframe: OrbWireframe, speed: number) => {
	for (let mesh of [geometry, wireframe]) {
		mesh.rotateX(speed)
		mesh.rotateY(speed)
		mesh.rotateZ(speed)
	}
}