import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { descriptions } from '../lang/planet'

const scene = new THREE.Scene()
const scene2 = new THREE.Scene()
const renderer = new THREE.WebGL1Renderer({
    canvas: document.querySelector("#bg")
})
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000)
const fontLoader = new FontLoader()
const fbxLoader = new FBXLoader()
const textureLoader = new THREE.TextureLoader()
const objLoader = new OBJLoader()

const meshAroundMe = []
const listPlanetMesh = []
const pointLight = new THREE.PointLight("#ffffff", 1, 100000)
const controls = new OrbitControls(camera, renderer.domElement)
const raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2()

controls.minDistance = 50
controls.maxDistance = 1850
controls.enableDamping = true
controls.dampingFactor = 0.25
controls.touches = {
    ONE: THREE.TOUCH.ROTATE,
}

scene.add((new THREE.AmbientLight(0xffffff, 1)))
scene2.add((new THREE.AmbientLight(0xffffff, 0.3)))

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerHeight, window.innerHeight)
renderer.render(scene, camera)
renderer.autoClear = false

export async function init() {
    return new Promise(async (resolve, reject) => {
        try {
            gsap.to(camera.position, { duration: 1.5, z: 100, y: 0 })
            let asteroids = []
            let asteroids2 = []

            createMeshAroundMe("/assets/me2.jpg", 0, [20, 20, 0], "box")
            createMeshAroundMe("/assets/me.png", 0, [20, 20, 0], "box")

            fontLoader.load('/fonts/nazalisation.json', function (font) {
                createMeshAroundMe("play.fbx", 0)
                createTextAroundMe(font, "Cinematic", 0)
                createMeshAroundMe("music.fbx", 4)
                createTextAroundMe(font, "Sound on/off", 4)

                createMeshAroundMe("parcours.fbx", 12)
                createTextAroundMe(font, "parcours", 12)
                createMeshAroundMe("github.fbx", 16)
                createTextAroundMe(font, "Github", 16)
                createMeshAroundMe("contact.fbx", 20)
                createTextAroundMe(font, "Contact", 20)


                createMeshAroundMe("/planetTexture/earth.jpg", 28, [6.5, 64, 32], "sphere")
                createTextAroundMe(font, "xpert-agro.fr", 28)
                createMeshAroundMe("/planetTexture/moon.jpg", 32, [6.5, 64, 32], "sphere")
                createTextAroundMe(font, "pomatobot.com", 32)

                createPlanet("sun", 0, [150, 150, 150], font)
                createPlanet("mercury", 21, [12, 12, 12], font)
                createPlanet("venus", 42, [22, 22, 22], font)
                createPlanet("earth", 63, [30, 30, 30], font)
                createPlanet("mars", 84, [22, 22, 22], font)
                createPlanet("jupiter", 105, [100, 100, 100], font)
                createPlanet("saturn", 126, [90, 90, 90], font)
                createPlanet("uranus", 147, [62, 62, 62], font)
                createPlanet("neptune", 168, [60, 60, 60], font)

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
            })

            createStars(scene)
            createAsteroidsLine(scene, asteroids, asteroids2)

            pointLight.position.set(0, 0, 100)
            scene2.add(pointLight)
            resolve([scene, scene2, renderer, camera, meshAroundMe, pointLight, controls, raycaster, pointer, listPlanetMesh, asteroids, asteroids2])
        } catch (e) {
            console.log("????")
            console.log('Error in function', e)
        }
    })
}
function createMoon() {
    const meshTexture = new THREE.TextureLoader().load("/planetTexture/moon.jpg")
    const s_Geometry = new THREE.SphereGeometry(12, 64, 32)
    const s_materials = new THREE.MeshStandardMaterial({ map: meshTexture })
    let moon = new THREE.Mesh(s_Geometry, s_materials)

    moon.name = "moon"
    moon.orderTime = 0
    moon.type = "planet"

    return (moon)
}
function createRing() {
    let loader = new THREE.TextureLoader()
    let ringTexture = loader.load("/planetTexture/saturnRing.png")
    let saturnRadius = 0.98
    let ringGeometry = new THREE.RingGeometry(45 * saturnRadius, 90 * saturnRadius, 60 * 32, 80, 0, Math.PI * 2)
    let ringMaterial = new THREE.MeshBasicMaterial({
        map: ringTexture,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7,
    })

    let ring = new THREE.Mesh(ringGeometry, ringMaterial)
    ring.scale.multiplyScalar(2.5)
    ring.name = "ring"
    ring.type = "planet"
    ring.rotation.x = -180

    return (ring)
}

function createPlanet(name, orderTime, size, font) {
    const meshTexture = new THREE.TextureLoader().load("/planetTexture/" + name + '.jpg')
    const s_Geometry = new THREE.SphereGeometry(size[0], size[1], size[2])
    const s_materials = new THREE.MeshStandardMaterial({ color: 0xffffff, map: meshTexture })
    const mesh = new THREE.Mesh(s_Geometry, s_materials)

    mesh.orderTime = orderTime
    mesh.name = name
    mesh.type = "planet"
    if (name !== "sun")
        scene2.add(mesh)
    else
        scene.add(mesh)
    listPlanetMesh.push(mesh)

    const matLite = new THREE.MeshBasicMaterial({
        color: "#ffffff",
        transparent: false,
        opacity: 1,
        side: THREE.DoubleSide
    })

    let meshText
    let shapes = font.generateShapes(name, 25)
    let geometry = new THREE.ShapeGeometry(shapes)
    geometry.computeBoundingBox()
    let xMid = - 0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)
    meshText = new THREE.Mesh(geometry, matLite)
    meshText.position.x = 50
    meshText.position.y = -10
    meshText.position.z = 0
    meshText.lookAtMe = 1
    meshText.isText = 1
    meshText.orderTime = -1
    meshText.name = name
    meshText.type = "planet"
    meshText.isDescription = -1
    meshText.material.opacity = 1
    meshText.material.transparent = true
    meshText.visible = true
    meshText.isDescription = 0

    listPlanetMesh.push(meshText)
    scene.add(meshText)

    const matLite2 = new THREE.MeshBasicMaterial({
        color: "#ffffff",
        transparent: false,
        opacity: 1,
        side: THREE.DoubleSide
    })

    let meshDescription
    const shapes2 = font.generateShapes(descriptions[name], 18)
    const geometry2 = new THREE.ShapeGeometry(shapes2)
    geometry2.computeBoundingBox()
    const xMid2 = - 0.5 * (geometry2.boundingBox.max.x - geometry2.boundingBox.min.x)
    geometry2.translate(xMid2, 0, 0)
    meshDescription = new THREE.Mesh(geometry2, matLite2)
    meshDescription.position.x = 50
    meshDescription.position.y = -10
    meshDescription.position.z = 0
    meshDescription.lookAtMe = 1
    meshDescription.isText = 1
    meshDescription.orderTime = -1
    meshDescription.name = name
    meshDescription.type = "planet"
    meshDescription.isDescription = 1

    listPlanetMesh.push(meshDescription)
    scene.add(meshDescription)
}

function createTextAroundMe(font, text, orderTime, pos) {
    const matLite = new THREE.MeshBasicMaterial({
        color: "#ffffff",
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide
    })

    let meshText
    const shapes = font.generateShapes(text, 2)
    const geometry = new THREE.ShapeGeometry(shapes)
    geometry.computeBoundingBox()
    const xMid = - 0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
    geometry.translate(xMid, 0, 0)
    meshText = new THREE.Mesh(geometry, matLite)
    meshText.position.x = 50
    meshText.position.y = -150
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

async function createMeshAroundMe(name, orderTime, size, type) {
    const meshTexture = new THREE.TextureLoader().load(name)
    let mesh
    if (type === "sphere") {
        mesh = new THREE.Mesh(
            new THREE.SphereGeometry(size[0], size[1], size[2]),
            new THREE.MeshBasicMaterial({ map: meshTexture, })
        )
    } else if (type === "box") {
        mesh = new THREE.Mesh(
            new THREE.BoxGeometry(size[0], size[1], size[2]),
            new THREE.MeshBasicMaterial({ map: meshTexture })
        )
    } else {
        mesh = await fbxLoader.loadAsync("/" + name)
        mesh.scale.multiplyScalar(0.085)
        mesh.dicons = 1
        name = name.replace('.fbx', "")
        let cc = 0
        mesh.traverse(function (c) {
            c.name = name
            if (c.material && c.material.length) {
                for (let i in c.material) {
                    c.material[i] = getNeonMaterial(name, cc)
                    cc++
                }
            } else if (c.material) {
                c.material = getNeonMaterial(name, cc)
            }
        })
    }
    if (name !== "/assets/me.png" && name !== "/assets/me2.jpg") {
        mesh.rotation.x = getRandomArbitrary(1, 360)
        mesh.rotation.y = getRandomArbitrary(1, 360)
    }
    mesh.name = name
    mesh.orderTime = orderTime
    if (name === "/assets/me2.jpg")
        mesh.position.z = -0.1
    if (name === "/assets/me.png" || name === "/assets/me2.jpg") {
        scene2.add(mesh)
    } else {
        scene.add(mesh)
        meshAroundMe.push(mesh)
    }
}

function getNeonMaterial(name, cc) {
    let listColors = []
    listColors['play'] = [0xF1F1F1]
    listColors['music'] = [0xFDB827]
    listColors['contact'] = [0x21209C]
    listColors['parcours'] = [0x222831, 0xFDB827]
    listColors['github'] = [0x222831, 0xF1F1F1, 0x21209C, 0xFDB827, 0x393E46]
    let selected = listColors[name][cc]

    let vertexShader = `
    uniform vec3 viewVector;
    uniform float c;
    uniform float p;
    varying float intensity;
    void main()
    {
        vec3 vNormal = normalize( normalMatrix * normal );
        vec3 vNormel = normalize( normalMatrix * viewVector );
        intensity = pow( c - dot(vNormal, vNormel), p );

        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`

    let fragmentShader = `
    uniform vec3 glowColor;
    varying float intensity;
    void main()
    {
        vec3 glow = glowColor * intensity;
        gl_FragColor = vec4( glow, 1.0 );
    }`
    var neonMaterial = new THREE.ShaderMaterial({
        uniforms: {
            "c": { type: "f", value: 1.0 },
            "p": { type: "f", value: 1.4 },
            glowColor: { type: "c", value: new THREE.Color(selected) },
            viewVector: { type: "v3", value: camera.position }
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        side: THREE.FrontSide,
        blending: THREE.AdditiveBlending,
        transparent: false
    });
    return (neonMaterial)
}

async function createAsteroidsLine(scene, asteroids, asteroids2) {
    const [texture, object1, texture2, object2, texture3, object3] = await Promise.all([
        textureLoader.loadAsync('asteroids/1.jpg'),
        objLoader.loadAsync('asteroids/1.obj'),
        textureLoader.loadAsync('asteroids/2.jpg'),
        objLoader.loadAsync('asteroids/2.obj'),
        textureLoader.loadAsync('asteroids/3.jpg'),
        objLoader.loadAsync('asteroids/3.obj'),
    ])
    object1.traverse(function (child) {
        if (child.isMesh) {
            child.material.map = texture
            child.geometry.computeVertexNormals()
        }
    })
    object1.scale.multiplyScalar(0.1)
    object2.traverse(function (child) {
        if (child.isMesh) {
            child.material.map = texture2
            child.geometry.computeVertexNormals()
        }
    })
    object3.traverse(function (child) {
        if (child.isMesh) {
            child.material.map = texture3
            child.geometry.computeVertexNormals()
        }
    })

    for (let z = 0; z < 50; z++) {
        let ast
        let randomAst = Math.floor(getRandomArbitrary(1, 4))
        if (randomAst === 1) {
            ast = object1.clone()
        } else if (randomAst === 2) {
            ast = object2.clone()
        } else {
            ast = object3.clone()
        }
        ast.scale.multiplyScalar(getRandomArbitrary(0.02, 0.03))
        ast.rotation.y = getRandomArbitrary(1, 360)
        ast.rotation.x = getRandomArbitrary(1, 360)
        asteroids.push(ast)
        scene.add(ast)

        let ast2
        if (randomAst === 1) {
            ast2 = object1.clone()
        } else if (randomAst === 2) {
            ast2 = object2.clone()
        } else {
            ast2 = object3.clone()
        }
        ast2.scale.multiplyScalar(getRandomArbitrary(0.02, 0.03))
        ast2.rotation.y = getRandomArbitrary(1, 360)
        ast2.rotation.x = getRandomArbitrary(1, 360)
        asteroids2.push(ast2)
        scene.add(ast2)
    }
}

function createStars(scene) {
    let stars = []
    for (let z = 0; z < 2000; z++) {
        let geometry = new THREE.SphereGeometry(0.5, 32, 32)
        let material = new THREE.MeshBasicMaterial({ color: 0xffffff })
        let sphere = new THREE.Mesh(geometry, material)
        sphere.position.x = getRandomArbitrary(-3000, 4000)
        sphere.position.y = getRandomArbitrary(-3000, 4000)
        sphere.position.z = getRandomArbitrary(-3000, 4000)
        sphere.scale.x = sphere.scale.y = 2

        let dx = sphere.position.x - 0
        let dy = sphere.position.y - 0
        let dz = sphere.position.z - 0
        if (Math.sqrt(dx * dx + dy * dy + dz * dz) < 1000)
            continue
        scene.add(sphere)
        stars.push(sphere)
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min
}

