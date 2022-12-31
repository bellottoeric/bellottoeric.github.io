import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'
import { frDescriptions, enDescriptions } from '../lang/planet'
import { sunVertex, sunFragment } from './shaders/sunShaders'
import { generateBlackhole } from './blackhole'
import { getRandomArbitrary } from './utils'

let loadURL = "https://public-2e3.pages.dev/"
if (document.location.href.includes('/localhost'))
    loadURL = ""

const scene = new THREE.Scene()
const scene2 = new THREE.Scene()
const renderer = new THREE.WebGL1Renderer({
    canvas: document.querySelector("#bg")
})
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 6000)
const fontLoader = new FontLoader()
const fbxLoader = new FBXLoader()
const svgLoader = new SVGLoader()
const textureLoader = new THREE.TextureLoader()
const objLoader = new OBJLoader()

const meshAroundMe = []
const listPlanetMesh = []
const aboutMeMesh = []
const pointLight = new THREE.PointLight("#ffffff", 1, 100000)
const controls = new OrbitControls(camera, renderer.domElement)
const raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2()

controls.minDistance = 50
controls.maxDistance = 2499
controls.enableDamping = true
controls.dampingFactor = 0.25
controls.touches = {
    ONE: THREE.TOUCH.ROTATE,
}

scene.add((new THREE.AmbientLight(0xffffff, 1)))
scene2.add((new THREE.AmbientLight(0xffffff, 0.3)))
pointLight.position.set(0, 0, 100)
scene2.add(pointLight)

renderer.render(scene, camera)
renderer.autoClear = false

export async function init() {
    return new Promise(async (resolve, reject) => {
        try {
            let blackhole = await generateBlackhole(textureLoader, scene, renderer)

            let index = 1
            let nbrObjects = 7
            let max = 42
            createMeshAroundMe("play.fbx", max / nbrObjects * index)
            index++
            createMeshAroundMe("music.fbx", max / nbrObjects * index)
            index++
            if (document.location.href.includes('/en')) {
                createMeshAroundMe("pallete.fbx", max / nbrObjects * index)
            } else {
                createMeshAroundMe("tea.fbx", max / nbrObjects * index)
            }
            index++
            createMeshAroundMe("/assets/me.png", max / nbrObjects * index, [5, 32], "circle")
            index++
            createMeshAroundMe("parcours.fbx", max / nbrObjects * index)
            index++
            createMeshAroundMe("projects.fbx", max / nbrObjects * index)
            index++
            createMeshAroundMe("contact.fbx", max / nbrObjects * index)
            index = 1

            createAboutMe("gym.fbx", 0.08, [-25, 50])
            createAboutMe("chess.fbx", 0.08, [0, 50])
            createAboutMe("eth.fbx", 0.08, [25, 50])

            createStars()
            createAsteroidsLine("1")
            createAsteroidsLine("2")
            createAsteroidsLine("3")
            createAsteroidsLine("4")

            let ring = createRing()
            scene.add(ring)
            listPlanetMesh.push(ring)

            let moon = createMoon()
            scene.add(moon)
            listPlanetMesh.push(moon)

            for (let i of listPlanetMesh)
                if (i.name === "earth" && i.orderTime !== -1)
                    i.add(moon)

            fontLoader.load('/fonts/nazalisation.json', function (font) {
                createConstellation(font)
                createGalaxies(font)
                if (document.location.href.includes('/en'))
                    createTextAroundMe(font, "Cinematic", max / nbrObjects * index)
                else
                    createTextAroundMe(font, "Cinématique", max / nbrObjects * index)
                index++

                if (!document.location.href.includes('/en')) {
                    createTextAroundMe(font, "Volume audio", max / nbrObjects * index)
                    index++
                    createTextAroundMe(font, "English version", max / nbrObjects * index)
                    index++
                    createTextAroundMe(font, "À propos", max / nbrObjects * index)
                } else {
                    createTextAroundMe(font, "Sound on/off", max / nbrObjects * index)
                    index++
                    createTextAroundMe(font, "Version française", max / nbrObjects * index)
                    index++
                    createTextAroundMe(font, "About me", max / nbrObjects * index)
                }
                index++
                createTextAroundMe(font, "parcours", max / nbrObjects * index)
                index++
                createTextAroundMe(font, "Projects", max / nbrObjects * index)
                index++
                createTextAroundMe(font, "Contact", max / nbrObjects * index)

                createPlanet("sun", 0, [0.75, 64, 32], font)
                createPlanet("mercury", 21, [12, 12, 12], font)
                createPlanet("venus", 42, [22, 22, 22], font)
                createPlanet("earth", 63, [30, 30, 30], font)
                createPlanet("mars", 84, [22, 22, 22], font)
                createPlanet("jupiter", 105, [100, 100, 100], font)
                createPlanet("saturn", 126, [90, 90, 90], font)
                createPlanet("uranus", 147, [62, 62, 62], font)
                createPlanet("neptune", 168, [60, 60, 60], font)
            })
            resolve([scene, scene2, renderer, camera, meshAroundMe, controls, raycaster, pointer, listPlanetMesh, aboutMeMesh, blackhole])
        } catch (e) {
            console.log('Error in function', e)
        }
    })
}

function createConstellation(font) {
    const allConstellations = ["aquarius", "aries", "cancer", "capricorn", "gemini", "leo", "libra", "pisces", "sagittarius", "scorpio", "taurus", "virgo",]
    const centerX = -300
    const centerY = -300
    const numPoints = 12
    const radius = 2000
    const points = []

    const angleStep = 2 * Math.PI / numPoints
    for (let angle = 0; angle < 2 * Math.PI; angle += angleStep) {
        const x = centerX + radius * Math.cos(angle)
        const z = centerY + radius * Math.sin(angle)
        const y = 3100
        const xText = (centerX + (radius - 750) * Math.cos(angle)) + 300
        const zText = (centerY + (radius - 750) * Math.sin(angle)) + 300
        points.push({ x, y, z, xText, zText })
    }

    let cc = 0

    function loadAndCreate(i, cc) {
        svgLoader.load(loadURL + 'constellations/' + i + '.svg',
            function (data) {
                const paths = data.paths
                const group = new THREE.Group()
                for (let i = 0; i < paths.length; i++) {
                    const path = paths[i]
                    const material = new THREE.MeshBasicMaterial({
                        color: path.color,
                        side: THREE.DoubleSide,
                        depthWrite: false
                    })
                    const shapes = SVGLoader.createShapes(path)
                    for (let j = 0; j < shapes.length; j++) {
                        const shape = shapes[j]
                        const geometry = new THREE.ShapeGeometry(shape)
                        const mesh = new THREE.Mesh(geometry, material)
                        mesh.name = "constellations"
                        group.add(mesh)
                    }
                }
                group.scale.multiplyScalar(6)
                group.rotation.set(1.60, 0, 0)
                group.position.set(points[cc].x, points[cc].y, points[cc].z)
                group.name = "constellations"

                const matLite = new THREE.MeshBasicMaterial({
                    color: "#ffffff",
                    transparent: false,
                    opacity: 1,
                    side: THREE.DoubleSide
                })
                let meshText
                let shapes = font.generateShapes(i, 75)
                let geometry = new THREE.ShapeGeometry(shapes)
                geometry.computeBoundingBox()
                let xMid = - 0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
                geometry.translate(xMid, 0, 0)
                meshText = new THREE.Mesh(geometry, matLite)
                meshText.position.x = points[cc].xText
                meshText.position.y = points[cc].y
                meshText.position.z = points[cc].zText
                meshText.rotation.set(1.60, 0, 0)
                meshText.lookAtMe = 1
                meshText.material.transparent = true
                meshText.visible = true
                meshText.name = "constellations"
                scene.add(group, meshText)
            },
            function (xhr) { },
            function (error) { }
        )
    }

    for (let i of allConstellations) {
        loadAndCreate(i, cc)
        cc++
    }
}

async function createAboutMe(name, size, position) {
    let mesh = await fbxLoader.loadAsync(loadURL + "aboutMeFBX/" + name)
    mesh.scale.multiplyScalar(size)
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
    mesh.rotation.x = 180
    mesh.position.x = position[0]
    mesh.position.z = position[1]
    mesh.position.y = 2890
    scene2.add(mesh)
    aboutMeMesh.push(mesh)
}

function createGalaxies(font) {
    let allGalaxies = [
        { name: 'spiral', pos: [2450, -1050, 0], rot: [0, -1.8, 0] },
        { name: 'irregular', pos: [-2450, -1050, 0], rot: [0, 1.8, 0] },
        //{ name: 'ellyptique', pos: [0, 3500, 0], rot: [1.8, 0, 0] },
        { name: 'activecor', pos: [0, -1050, 2450], rot: [0, 60, 0] },
        { name: 'lenticular', pos: [0, -1050, -2450], rot: [0, 0, 0] },
    ]
    const matLite = new THREE.MeshBasicMaterial({
        color: "#ffffff",
        transparent: false,
        opacity: 1,
        side: THREE.DoubleSide
    })

    for (let i of allGalaxies) {
        let geometry = new THREE.CircleGeometry(60 * 5, 320 * 5)
        let texture = new THREE.TextureLoader().load(loadURL + "galaxies/" + i.name + ".jpg",)
        let material = new THREE.MeshBasicMaterial({ map: texture })
        let mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(i.pos[0], i.pos[1], i.pos[2])
        mesh.rotation.set(i.rot[0], i.rot[1], i.rot[2])
        mesh.name = "galaxy-" + i

        let meshText
        let shapes = font.generateShapes(document.location.href.includes('/en') ? "Galaxy " + i.name : "Galaxie " + i.name, 50)
        geometry = new THREE.ShapeGeometry(shapes)
        geometry.computeBoundingBox()
        let xMid = - 0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)
        geometry.translate(xMid, 0, 0)
        meshText = new THREE.Mesh(geometry, matLite)
        meshText.position.x = i.pos[0]
        meshText.position.y = i.pos[1] - 500
        meshText.position.z = i.pos[2]
        meshText.lookAt(0, 0, 0,)
        meshText.lookAtMe = 1
        meshText.material.transparent = true
        meshText.visible = true
        meshText.name = "galaxy-" + i
        scene.add(mesh, meshText)
    }
}

function createMoon() {
    const meshTexture = new THREE.TextureLoader().load(loadURL + "planetTexture/moon.jpg")
    const s_Geometry = new THREE.SphereGeometry(12, 64, 32)
    const s_materials = new THREE.MeshStandardMaterial({ map: meshTexture })
    let moon = new THREE.Mesh(s_Geometry, s_materials)

    moon.name = "moon"
    moon.isDescription = -1
    moon.type = "planet"

    return (moon)
}

function createRing() {
    let loader = new THREE.TextureLoader()
    let ringTexture = loader.load(loadURL + "planetTexture/saturnRing.png")
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

async function createPlanet(name, orderTime, size, font) {
    const meshTexture = new THREE.TextureLoader().load(loadURL + "planetTexture/" + name + '.jpg')
    const s_Geometry = new THREE.SphereGeometry(size[0], size[1], size[2])
    let s_materials = new THREE.MeshStandardMaterial({ color: 0xffffff, map: meshTexture })

    let mesh = new THREE.Mesh(s_Geometry, s_materials)
    if (name === "sun") {
        let uniforms = {
            time: { type: "f", value: 1 },
            scale: { type: "f", value: 1.5 }
        }
        let oldTime = new Date().getTime()
        setInterval(() => {
            const time = new Date().getTime()
            const delta = 0.001 * (time - oldTime)
            oldTime = time
            uniforms.time.value += 0.175 * delta
        }, 1000 / 60)

        const neonMaterial = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: sunVertex(),
            fragmentShader: sunFragment()
        })
        mesh = new THREE.Mesh(s_Geometry, neonMaterial)
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
            mesh.scale.multiplyScalar(8)
        else
            mesh.scale.multiplyScalar(20)
    }

    mesh.orderTime = orderTime
    mesh.name = name
    mesh.type = "planet"

    let anglePlanets = []
    anglePlanets['sun'] = 0
    anglePlanets['mercury'] = 0
    anglePlanets['venus'] = 3.08923
    anglePlanets['earth'] = 0.408407
    anglePlanets['mars'] = 0.439823
    anglePlanets['jupiter'] = 0.0541052
    anglePlanets['saturn'] = 0.4660029
    anglePlanets['uranus'] = 1.706932
    anglePlanets['neptune'] = 0.4939282
    mesh.rotateX(anglePlanets[name])

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
    let shapes = font.generateShapes(name === "sun" ? " " : name, name === "sun" ? 5 : 25)
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
    let shapes2 = font.generateShapes(frDescriptions[name], /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 15 : 17)
    if (document.location.href.includes('/en'))
        shapes2 = font.generateShapes(enDescriptions[name], /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 15 : 17)
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

async function createTextAroundMe(font, text, orderTime, pos) {
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
    } else if (type === "circle") {
        mesh = new THREE.Mesh(
            new THREE.CircleGeometry(size[0], size[1]),
            new THREE.MeshBasicMaterial({ map: meshTexture })
        )
        mesh.material.side = THREE.DoubleSide
        mesh.dicons = 1
    } else {
        mesh = await fbxLoader.loadAsync(loadURL + "aroundMeFBX/" + name)
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

    mesh.name = name
    mesh.orderTime = orderTime
    if (name === "/assets/me.png") {
        scene2.add(mesh)
    }
    else
        scene.add(mesh)
    meshAroundMe.push(mesh)
}

function getNeonMaterial(name, cc) {
    let listColors = []
    listColors['play'] = [0x393E46]
    listColors['music'] = [0xf05924]
    listColors['contact'] = [0xf05924]
    listColors['parcours'] = [0x222831, 0xf05924]
    listColors['projects'] = [0x222831, 0xF1F1F1, 0xf05924, 0xf05924, 0x393E46]

    listColors['gym'] = [0x222831, 0xf05924, 0xf05924, 0xf05924, 0x393E46]
    listColors['chess'] = [0x222831, 0xf05924, 0xf05924, 0xf05924, 0x393E46]
    listColors['mobile'] = [0x222831, 0xf05924, 0xf05924, 0xf05924, 0x393E46]
    listColors['eth'] = [0x393E46, 0xf05924, 0xf05924, 0xf05924, 0xf05924]

    listColors['pallete'] = [0x393E46, 0xf05924, 0xf05924, 0xf05924, 0x393E46]
    listColors['tea'] = [0x393E46, 0xf05924, 0x393E46, 0x222831, 0x393E46]
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
        intensity = pow( c - dot(vNormal, vNormel), p ) + 0.5;

        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`

    let fragmentShader = `
    uniform vec3 glowColor;
    varying float intensity;
    void main()
    {
        vec3 glow = glowColor * intensity;
        gl_FragColor = vec4( glow, 1.2 );
    }`
    let neonMaterial = new THREE.ShaderMaterial({
        uniforms: {
            "c": { type: "f", value: 1.2 },
            "p": { type: "f", value: 1.2 },
            glowColor: { type: "c", value: new THREE.Color(selected) },
            viewVector: { type: "v3", value: camera.position }
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        side: THREE.FrontSide,
        blending: THREE.AdditiveBlending,
        transparent: false
    })
    return (neonMaterial)
}

async function createAsteroidsLine(name) {
    const [texture, asteroidMesh] = await Promise.all([
        textureLoader.loadAsync(loadURL + '/asteroids/' + name + '.jpg'),
        objLoader.loadAsync(loadURL + '/asteroids/' + name + '.obj'),
    ])
    asteroidMesh.traverse(function (child) {
        if (child.isMesh) {
            child.material.map = texture
            child.geometry.computeVertexNormals()
        }
    })
    if (name === "1")
        asteroidMesh.scale.multiplyScalar(0.1)
    if (name === "3" || name === "4")
        asteroidMesh.scale.multiplyScalar(4)

    let asteroidInstanced = new THREE.InstancedMesh(asteroidMesh.children[0].geometry, asteroidMesh.children[0].material, 100)
    scene.add(asteroidInstanced)

    for (let i = 0; i < asteroidInstanced.count; i++) {
        const angle = Math.random() * Math.PI * 2
        let randomSize = getRandomArbitrary(0.005, 0.02)
        asteroidMesh.scale.multiplyScalar(randomSize)
        asteroidMesh.rotation.y = getRandomArbitrary(1, 360)
        asteroidMesh.rotation.x = getRandomArbitrary(1, 360)
        asteroidMesh.position.z = Math.sin(angle) * getRandomArbitrary(800, 875)
        asteroidMesh.position.x = Math.cos(angle) * getRandomArbitrary(800, 875)
        asteroidMesh.position.y = (Math.cos(angle) * getRandomArbitrary(50, 150)) * 1.5
        asteroidMesh.updateMatrix()
        asteroidInstanced.setMatrixAt(i, asteroidMesh.matrix)
        asteroidMesh.scale.multiplyScalar(1 / randomSize)
    }
    asteroidInstanced.instanceMatrix.needsUpdate = true
}

async function createStars() {
    let geometry = new THREE.SphereGeometry(0.5, 32, 32)
    let material = new THREE.MeshBasicMaterial({ color: 0xffffff })
    let star = new THREE.Mesh(geometry, material, 250)
    let instancedStar = new THREE.InstancedMesh(geometry, material, 250)
    scene.add(instancedStar)
    for (let z = 0; z < instancedStar.count; z++) {

        star.position.x = getRandomArbitrary(-4000, 4000)
        star.position.y = getRandomArbitrary(-4000, 4000)
        star.position.z = getRandomArbitrary(-4000, 4000)
        star.scale.x = star.scale.y = getRandomArbitrary(8, 16)

        let dx = star.position.x - 0
        let dy = star.position.y - 0
        let dz = star.position.z - 0
        if (Math.sqrt(dx * dx + dy * dy + dz * dz) < 2500)
            continue
        star.updateMatrix()
        instancedStar.setMatrixAt(z, star.matrix)
    }
    instancedStar.instanceMatrix.needsUpdate = true
}
