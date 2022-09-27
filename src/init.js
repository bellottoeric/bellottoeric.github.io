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
const meshAroundMe = []
const listPlanetMesh = []
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
const pointLight = new THREE.PointLight("#ffffff", 2, 1000)
const controls = new OrbitControls(camera, renderer.domElement)
const raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2()

scene.add((new THREE.AmbientLight(0xffffff, 1)))

export function init() {
    let img = new Image()
    img.onload = function () {
        scene.background = new THREE.TextureLoader().load(img.src)
        setBackground(scene, img.width, img.height)
    }
    //img.src = "space2.jpg"

    gsap.to(camera.position, { duration: 1.5, z: 75 })

    createPlanet("earth", 1000, [20, 20, 20])
    createPlanet("venus", 2000, [20, 20, 20])
    createPlanet("mars", 3000, [15, 15, 15])
    createPlanet("jupiter", 4000, [20, 20, 20])
    createPlanet("mercury", 5000, [20, 20, 20])
    createPlanet("saturn", 6000, [20, 20, 20])
    createPlanet("neptune", 7000, [20, 20, 20])
    createPlanet("uranus", 8000, [20, 20, 20])
    createPlanet("sun", 3500, [75, 75, 75])

    let ring = createRing()
    scene.add(ring)
    listPlanetMesh.push(ring)

    let moon = createMoon()
    scene.add(moon)
    listPlanetMesh.push(moon)

    for (let i of listPlanetMesh) {
        if (i.name === "earth")
            i.add(moon)
    }


    createMeshAroundMe("me.png", 0, [14, 15, 0])
    createMeshAroundMe("me2.jpg", 0, [14, 15, 0])

    fontLoader.load('a.json', function (font) {
        createText(font, "Le monde ne tourne pas autour de toi, ha si !", -1, [0, -15, 0])
        createText(font, "- Bellotto Eric", -1, [0, -18, 0])
        createText(font, "Cinematic", -1, [-25, 0, 0])
        createText(font, "Sound on/off", -1, [25, 0, 0])

        createMeshAroundMe("linkedin.png", 0, [8, 8, 8])
        createText(font, "Parcour", 0)
        createMeshAroundMe("github.png", 960, [3, 10, 10], "cone")
        createText(font, "Github", 960)
        createMeshAroundMe("/planetTexture/earth.jpg", 480, [6.5, 64, 32], "sphere")
        createText(font, "xpert-agro.fr", 480)
        createMeshAroundMe("/planetTexture/moon.jpg", 1440, [6.5, 64, 32], "sphere")
        createText(font, "pomatobot.com", 1440)
        createMeshAroundMe("/planetTexture/neptune.jpg", 1920, [8, 8, 5, 3], "cylindre")
        createText(font, "Contact", 1920)
    })

    for (let i = 0; i < 1000; i++) {
        const geometry = new THREE.SphereGeometry(0.08, 6, 6)
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
        const star = new THREE.Mesh(geometry, material)
        const [x, y, z] = Array(3).fill().map(() => (THREE.MathUtils.randFloatSpread(100)))

        star.position.set(x, y, z)
        scene.add(star)
    }

    let stars = []
    for (var z = -1000; z < 1000; z += 3) {
        var geometry = new THREE.SphereGeometry(0.5, 32, 32)
        var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        var sphere = new THREE.Mesh(geometry, material)
        sphere.position.x = Math.random() * 1000 - 500;
        sphere.position.y = Math.random() * 1000 - 500;
        sphere.position.z = z;
        sphere.scale.x = sphere.scale.y = 2;
        scene.add(sphere);
        stars.push(sphere);
    }
    return ([scene, scene2, renderer, camera, meshAroundMe, ambientLight, pointLight, controls, raycaster, pointer, listPlanetMesh])
}
function createMoon() {
    const meshTexture = new THREE.TextureLoader().load("/planetTexture/moon.jpg")
    const s_Geometry = new THREE.SphereGeometry(6.5, 64, 32)
    const s_materials = new THREE.MeshStandardMaterial({ map: meshTexture })
    let moon = new THREE.Mesh(s_Geometry, s_materials)

    moon.name = "moon"
    moon.orderTime = 0

    return (moon)
}
function createRing() {
    let loader = new THREE.TextureLoader();
    var ringTexture = loader.load("/planetTexture/saturnRIng.png");
    let saturnRadius = 0.98;
    var ringGeometry = new THREE.RingGeometry(30.4 * saturnRadius, 60.5 * saturnRadius, 60 * 32, 120, 0, Math.PI * 2);
    var ringMaterial = new THREE.MeshBasicMaterial({
        map: ringTexture,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7,
    });

    let ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.name = "ring"
    return (ring)
}

function createPlanet(name, orderTime, size) {
    const meshTexture = new THREE.TextureLoader().load("/planetTexture/" + name + '.jpg')
    const s_Geometry = new THREE.SphereGeometry(size[0], size[1], size[2])
    const s_materials = new THREE.MeshStandardMaterial({ color: 0xffffff, map: meshTexture })
    const mesh = new THREE.Mesh(s_Geometry, s_materials)

    mesh.orderTime = orderTime
    mesh.name = name
    if (name !== "sun")
        scene2.add(mesh)
    else
        scene.add(mesh)
    listPlanetMesh.push(mesh)
}

function createText(font, text, orderTime, pos) {
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
    meshText.lookAtMe = 1
    meshText.isText = 1
    meshText.orderTime = orderTime
    meshText.name = text
    if (pos) {
        meshText.position.x = pos[0]
        meshText.position.y = pos[1]
        meshText.position.z = pos[2]
    }
    meshAroundMe.push(meshText)
    scene.add(meshText)
}

function createMeshAroundMe(name, orderTime, size, type) {
    const meshTexture = new THREE.TextureLoader().load(name)
    let mesh
    if (type === "sphere") {
        mesh = new THREE.Mesh(
            new THREE.SphereGeometry(size[0], size[1], size[2]),
            new THREE.MeshBasicMaterial({ map: meshTexture, })
        )
    } else if (type === "cone") {
        mesh = new THREE.Mesh(
            new THREE.ConeGeometry(size[0], size[1], size[2]),
            new THREE.MeshBasicMaterial({ map: meshTexture, })
        )
    } else if (type === "cylindre") {
        mesh = new THREE.Mesh(
            new THREE.CylinderGeometry(size[0], size[1], size[2], size[3]),
            new THREE.MeshBasicMaterial({ map: meshTexture, })
        )
    } else {
        mesh = new THREE.Mesh(
            new THREE.BoxGeometry(size[0], size[1], size[2]),
            new THREE.MeshBasicMaterial({ map: meshTexture, })
        )
    }
    if (name !== "me.png" && name !== "me2.jpg") {
        mesh.rotation.x = getRandomArbitrary(1, 360)
        mesh.rotation.y = getRandomArbitrary(1, 360)
    }
    mesh.name = name
    mesh.orderTime = orderTime
    if (name === "me2.jpg")
        mesh.position.z = -0.05

    if (name === "me.png" || name === "me2.jpg")
        scene2.add(mesh)
    else {
        scene.add(mesh)
        meshAroundMe.push(mesh)
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}