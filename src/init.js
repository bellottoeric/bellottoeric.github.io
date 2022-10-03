import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { setBackground } from './background'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'

const scene = new THREE.Scene()
const scene2 = new THREE.Scene()
const renderer = new THREE.WebGL1Renderer({
    canvas: document.querySelector("#bg")
})
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3500)
const fontLoader = new FontLoader()
const meshAroundMe = []
const listPlanetMesh = []
const pointLight = new THREE.PointLight("#ffffff", 2, 100000)
const controls = new OrbitControls(camera, renderer.domElement)
const raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2()

controls.minDistance = 50
controls.maxDistance = 1000
controls.enableDamping = true;
controls.dampingFactor = 0.25;

scene.add((new THREE.AmbientLight(0xffffff, 1)))
scene2.add((new THREE.AmbientLight(0xffffff, 0.3)))

export function init() {
    gsap.to(camera.position, { duration: 1.5, z: 75 })


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


    let asteroids = [];
    let asteroids2 = [];


    createLineAsteroids(scene, asteroids, asteroids2)


    /*

   

    const fbxLoader = new FBXLoader()
    fbxLoader.load(
        '/3.fbx',
        (object) => {
            object.scale.multiplyScalar(0.1);
            object.traverse(function (c) {
                if (c.material) {
                    for (var i of c.material) {
                        i.color.setHex(0xff0000)
                    }
}
            });
scene.add(object)
        },
(xhr) => {
    //console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
},
    (error) => {
        console.log(error)
    }
    );
    */

    createMeshAroundMe("me.png", 0, [20, 22, 0])
    createMeshAroundMe("me2.jpg", 0, [20, 22, 0])

    fontLoader.load('nazalisation.json', function (font) {
        createTextAroundMe(font, "Cinematic", -1, [-25, 0, 0])
        createTextAroundMe(font, "Sound on/off", -1, [25, 0, 0])

        createMeshAroundMe("linkedin.png", 0, [8, 8, 8])
        createTextAroundMe(font, "parcours", 0)
        createMeshAroundMe("assets/github.png", 960, [3, 10, 10], "cone")
        createTextAroundMe(font, "Github", 960)
        createMeshAroundMe("/planetTexture/earth.jpg", 480, [6.5, 64, 32], "sphere")
        createTextAroundMe(font, "xpert-agro.fr", 480)
        createMeshAroundMe("/planetTexture/moon.jpg", 1440, [6.5, 64, 32], "sphere")
        createTextAroundMe(font, "pomatobot.com", 1440)
        createMeshAroundMe("/planetTexture/neptune.jpg", 1920, [8, 8, 5, 3], "cylindre")
        createTextAroundMe(font, "Contact", 1920)



        createPlanet("sun", 0, [150, 150, 150], font)
        createPlanet("mercury", 20, [12, 12, 12], font)
        createPlanet("venus", 40, [22, 22, 22], font)
        createPlanet("earth", 60, [30, 30, 30], font)
        createPlanet("mars", 80, [22, 22, 22], font)
        createPlanet("jupiter", 100, [100, 100, 100], font)
        createPlanet("saturn", 120, [90, 90, 90], font)
        createPlanet("uranus", 140, [62, 62, 62], font)
        createPlanet("neptune", 160, [60, 60, 60], font)
    })

    createStars(scene)

    return ([scene, scene2, renderer, camera, meshAroundMe, pointLight, controls, raycaster, pointer, listPlanetMesh, asteroids, asteroids2])
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
    ring.scale.multiplyScalar(4);
    ring.name = "ring"
    return (ring)
}

function createPlanet(name, orderTime, size, font) {
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

    const matLite = new THREE.MeshBasicMaterial({
        color: "#ffffff",
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide
    })

    let meshText
    const shapes = font.generateShapes(name, 20)
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
    meshText.orderTime = -1
    meshText.name = name
    listPlanetMesh.push(meshText)
    scene.add(meshText)
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

async function createLineAsteroids(scene, asteroids, asteroids2) {
    const textureLoader = new THREE.TextureLoader();
    const objLoader = new OBJLoader();
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
            child.material.map = texture;
            child.geometry.computeVertexNormals();
        }
    });
    object1.scale.multiplyScalar(0.1);
    object2.traverse(function (child) {
        if (child.isMesh) {
            child.material.map = texture2;
            child.geometry.computeVertexNormals();
        }
    })
    object3.traverse(function (child) {
        if (child.isMesh) {
            child.material.map = texture3;
            child.geometry.computeVertexNormals();

        }
    })

    for (var z = -200; z < 200; z += 3) {
        let ast
        let randomAst = Math.floor(getRandomArbitrary(1, 4))
        if (randomAst === 1) {
            ast = object1.clone()
        } else if (randomAst === 2) {
            ast = object2.clone()
        } else {
            ast = object3.clone()
        }
        ast.scale.multiplyScalar(getRandomArbitrary(0.02, 0.05))
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
        ast2.scale.multiplyScalar(getRandomArbitrary(0.02, 0.05))
        ast2.rotation.y = getRandomArbitrary(1, 360)
        ast2.rotation.x = getRandomArbitrary(1, 360)
        asteroids2.push(ast2)
        scene.add(ast2)
    }
}

function createStars(scene) {
    let stars = []
    for (var z = -3100; z < 3100; z += 3) {
        var geometry = new THREE.SphereGeometry(0.5, 32, 32)
        var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        var sphere = new THREE.Mesh(geometry, material)
        sphere.position.x = getRandomArbitrary(-1000, 1000)
        sphere.position.y = getRandomArbitrary(-1000, 1000)
        sphere.position.z = getRandomArbitrary(-1000, 1000)
        sphere.scale.x = sphere.scale.y = 2;

        scene.add(sphere);
        stars.push(sphere);
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}