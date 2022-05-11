import { Mesh, MeshStandardMaterial, QuadraticBezierCurve3, SphereGeometry, Vector3 } from "three";

//
// Types
//

export type Energies = ReturnType<typeof newEnergies>

//
// Models
//

let theta = 0
let elevation = 0

export const newEnergies = (m: number, n: number) => {
	const energies: Mesh<SphereGeometry, MeshStandardMaterial>[][] = []

	for (let i = 0; i < m; i++) {
		energies.push([])
		for (let j = 0; j < n; j++) {
			const energyGeometry = new SphereGeometry(.1);
			const energyMesh = new MeshStandardMaterial({ color: 0x3cb9fc });
			const energy = new Mesh(energyGeometry, energyMesh);
			energies[i].push(energy)
		}
	}

	return energies
}

//
// Actions
//

export const spiralEnergies = (energies: Energies, spin: number, speed: number) => {
	const m = energies.length
	const n = energies[0].length

	for (let i = 0; i < m; i++) {
		const thetaStart = theta + i * 2 * Math.PI / m
		const thetaMiddle = theta + (i + 4) * 2 * Math.PI / m
		const thetaEnd = theta + (i + 8) * 2 * Math.PI / m

		const start = new Vector3().setFromCylindricalCoords(20, thetaStart, -15)
		const middle = new Vector3().setFromCylindricalCoords(2, thetaMiddle, -6)
		const last = new Vector3().setFromCylindricalCoords(0, thetaEnd, 0)

		const curve = new QuadraticBezierCurve3(start, middle, last)

		for (let j = 0; j < n; j++) {
			const dh = ((j + elevation) % n / n)
			curve.getPoint(dh, energies[i][j].position)
		}
	}

	theta += spin
	elevation += speed
}
