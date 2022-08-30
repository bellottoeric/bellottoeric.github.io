import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { setBackground } from './background'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()
const scene2 = new THREE.Scene()
const renderer = new THREE.WebGL1Renderer({
    canvas: document.querySelector("#bg")
})
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const fontLoader = new FontLoader()
const listMesh = []
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
const pointLight = new THREE.PointLight("#ffffff", 2, 1000)
const controls = new OrbitControls(camera, renderer.domElement)
const raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2()

export function init() {
    let img = new Image()
    img.onload = function () {
        scene.background = new THREE.TextureLoader().load(img.src)
        setBackground(scene, img.width, img.height)
    }
    img.src = "space.jpg"

    gsap.to(camera.position, { duration: 1.5, z: 75 })

    fontLoader.load('a.json', function (font) {
        createMesh("me", 0, [14, 15, 0])
        createMesh("linkedin", 1000, [8, 8, 8])
        createText(font, "Linkedin", 1000)
        createMesh("linkedin", 2000, [8, 8, 8])
        createText(font, "Linkedin", 2000)
        createMesh("linkedin", 3000, [8, 8, 8])
        createText(font, "Linkedin", 3000)
    })

    for (let i = 0; i < 250; i++) {
        const geometry = new THREE.SphereGeometry(0.25, 24, 24)
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
        const star = new THREE.Mesh(geometry, material)
        const [x, y, z] = Array(3).fill().map(() => (THREE.MathUtils.randFloatSpread(100)))

        star.position.set(x, y, z)
        scene.add(star)
    }
    return ([scene, scene2, renderer, camera, listMesh, ambientLight, pointLight, controls, raycaster, pointer])
}


function createText(font, text, orderTime) {
    const matLite = new THREE.MeshBasicMaterial({
        color: "#ffffff",
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide
    })

    let meshText
    const shapes = font.generateShapes(text, 3)
    const geometry = new THREE.ShapeGeometry(shapes)
    geometry.computeBoundingBox()
    const xMid = - 0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)
    meshText = new THREE.Mesh(geometry, matLite)
    meshText.position.x = 50
    meshText.position.y = -10
    meshText.position.z = 0
    meshText.orderTime = orderTime
    meshText.lookAtMe = 1
    scene.add(meshText)
    listMesh.push(meshText)
}

function createMesh(name, orderTime, size) {
    const meshTexture = new THREE.TextureLoader().load(name + '.png')
    const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(size[0], size[1], size[2]),
        new THREE.MeshStandardMaterial({
            map: meshTexture,
        })
    )
    if (name !== "me") {
        mesh.rotation.x = getRandomArbitrary(1, 360)
        mesh.rotation.y = getRandomArbitrary(1, 360)
    }
    mesh.name = name
    mesh.orderTime = orderTime
    if (name === "me")
        scene2.add(mesh)
    else
        scene.add(mesh)
    listMesh.push(mesh)
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}