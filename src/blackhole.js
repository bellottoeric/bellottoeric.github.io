import * as THREE from 'three'
import { blackholeVertex, blackholeFragment } from './shaders/blackholeShaders'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

let loadURL = "https://public-2e3.pages.dev/"
if (document.location.href.includes('/localhost'))
    loadURL = "https://public-2e3.pages.dev/"

const gltfLoader = new GLTFLoader()

const parameters = {
    count: 500000,
    radius: 160,
    branches: 4,
    randomness: 0.5,
    randomnessPower: 40,
    insideColor: "#FFFFFF",
    outsideColor: "#2d2e30"
}

const startBlackhole = async (textureLoader, scene, renderer) => {
    const sphere = (await gltfLoader.loadAsync(loadURL + 'blackhole/blackholeSphere.gltf')).scene.children[0]
    sphere.position.set(0, -1000, 0)
    sphere.rotation.set(105.25, 0, 0)
    sphere.scale.multiplyScalar(2.5)
    scene.add(sphere)

    let geometry = null
    let material = null
    let points = null

    const starTexture = textureLoader.load(loadURL + "blackhole/blackholeStar.png")

    if (points !== null) {
        geometry.dispose();
        material.dispose();
        scene.remove(points);
    }

    geometry = new THREE.BufferGeometry()

    const positions = new Float32Array(parameters.count * 3)
    const colors = new Float32Array(parameters.count * 3)
    const scales = new Float32Array(parameters.count)
    const randomness = new Float32Array(parameters.count * 3)
    const insideColor = new THREE.Color(parameters.insideColor)
    const outsideColor = new THREE.Color(parameters.outsideColor)

    for (let i = 0; i < parameters.count; i++) {
        const i3 = i * 3
        const radius = Math.random() * parameters.radius
        const branchAngle =
            ((i % parameters.branches) / parameters.branches) * Math.PI * 2

        const randomX =
            Math.pow(Math.random(), parameters.randomnessPower) *
            (Math.random() < 0.5 ? 1 : -1) *
            parameters.randomness *
            radius
        const randomY =
            Math.pow(Math.random(), parameters.randomnessPower) *
            (Math.random() < 0.5 ? 1 : -1) *
            parameters.randomness *
            radius
        const randomZ =
            Math.pow(Math.random(), parameters.randomnessPower) *
            (Math.random() < 0.5 ? 1 : -1) *
            parameters.randomness *
            radius

        positions[i3] = Math.cos(branchAngle) * radius
        positions[i3 + 1] = 0
        positions[i3 + 2] = Math.sin(branchAngle) * radius

        randomness[i3] = randomX
        randomness[i3 + 1] = randomY - 1000
        randomness[i3 + 2] = randomZ

        const mixedColor = insideColor.clone()
        mixedColor.lerp(outsideColor, radius / parameters.radius)

        colors[i3] = mixedColor.r
        colors[i3 + 1] = mixedColor.g
        colors[i3 + 2] = mixedColor.b

        scales[i] = Math.random()
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1))
    geometry.setAttribute("aRandomness", new THREE.BufferAttribute(randomness, 3))
    material = new THREE.ShaderMaterial({
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true,
        vertexShader: blackholeVertex(),
        fragmentShader: blackholeFragment(),
        transparent: true,
        uniforms: {
            uTime: { value: 0 },
            uSize: { value: 100 * renderer.getPixelRatio() },
            uHoleSize: { value: 40 },
            uTexture: { value: starTexture },
            size: { value: 15.0 }
        }
    })

    points = new THREE.Points(geometry, material)
    points.scale.multiplyScalar(15)
    points.rotation.set(0, 25.03, 0)
    scene.add(points)
    return ({ material: material, points: points, blackholeSphere: sphere })
}

export const generateBlackhole = startBlackhole