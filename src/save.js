import * as THREE from 'three'

import '../css/style.css'
import { init } from './init'
import { utils } from './utils'
import { setupVideoPlayer } from './videoPlayer'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
const objLoader = new OBJLoader()
const textureLoader = new THREE.TextureLoader()
window.clicked = 0
let point = 0.075
let sign = 1
let soundClicked = 0
let blockPlanetMovement = 0
let movingCamera = 0

var [scene, scene2, renderer, camera, meshAroundMe, pointLight, controls, raycaster, pointer, listPlanetMesh, asteroids, asteroids2] = ""

start()


async function start(e) {
    return (new Promise(async (resolve, reject) => {
        try {
            [scene, scene2, renderer, camera, meshAroundMe, pointLight, controls, raycaster, pointer, listPlanetMesh, asteroids, asteroids2] = await init()
            utils(pointer, camera, renderer, scene, scene2, controls)
            //setupVideoPlayer()

            animate()
        } catch (e) {
            console.log('Error in function', e)
        }
    }))
}

setInterval(() => {
    if (soundClicked)
        soundClicked = 0
}, 200)

setInterval(() => {
    point = point + (0.00001 * sign)
    if (point > 0.5 || point < 0.02) {
        sign = sign * -1
    }
}, 1);


var mesh
var amount = 3
var count = Math.pow(amount, 3)
var dummy = new THREE.Object3D()

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min
}

async function initt() {
    const [texture, object1] = await Promise.all([
        textureLoader.loadAsync('asteroids/1.jpg'),
        objLoader.loadAsync('asteroids/1.obj'),
    ])
    object1.traverse(function (child) {
        if (child.isMesh) {
            child.material.map = texture
            child.geometry.computeVertexNormals()
        }
    })

    setTimeout(() => {
        mesh = new THREE.InstancedMesh(object1.children[0].geometry, object1.children[0].material, count);
        mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage); // will be updated every frame
        scene.add(mesh);





        //gsap.to(camera.position, { duration: 1, x: mesh.position.x, y: mesh.position.y, z: mesh.position.z })
    }, 1000 * 5)


}

function animate() {
    let time = performance.now() * 0.0005 - 20

    if (mesh) {
        var i = 0;
        var timee = Date.now() * 0.001;

        for (let i = 0; i < amount; i++) {
            const theta = i * point + Math.PI + (timee / 6)
            const y = - (i * 13) + 850
            /*
            let u = asteroids[i]
            u.position.setFromCylindricalCoords(y, theta, y)
            u.rotation.y += Math.random() * 0.002 - 0.005
            u.rotation.x += Math.random() * 0.002 - 0.005 */
            dummy.position.set(y, theta, y)
            dummy.scale.set(0.01, 0.01, 0.01)
            dummy.updateMatrix()
            mesh.setMatrixAt(i, dummy.matrix);
        }
        mesh.instanceMatrix.needsUpdate = true;
    } else {
        initt();

    }

    clickDetection()
    animateAroundMe(time)
    animatePlanet(time)
    animateAsteroids(time)

    controls.update()
    renderer.clear()
    renderer.render(scene, camera)
    renderer.render(scene2, camera)
    requestAnimationFrame(animate)
}

function clickDetection() {
    raycaster.setFromCamera(pointer, camera)
    const intersects = raycaster.intersectObjects(scene.children.concat(scene2.children))
    for (let i = 0; i < intersects.length; i++) {
        let name = intersects[i].object.name
        let type = intersects[i].object.type
        if (name.length && clicked && controls.enabled) {
            window.clicked = 0
            console.log(name)
            if (name === "/planetTexture/moon.jpg") {
                window.open("https://pomatobot.com")
            } else if (name === "/planetTexture/earth.jpg") {
                window.open("https://xpert-agro.fr")
            } else if (name === "play") {
                cinematic()
            } else if (name.includes("on/off") && !soundClicked) {
                soundClicked = 1
                if (window.player.isMuted())
                    window.player.unMute()
                else
                    window.player.mute()
            } else if (name.includes('linkedin') || name.includes('github') || name.includes('moon')) {
                openHTMLView(name)
            } else if (type === "planet") {
                planetInfo(name)
            }
        }
    }
}

async function planetInfo(name) {
    class Vector extends Array {
        add(other) {
            return this.map((e, i) => e + other[i]);
        }
    }

    for (let i of listPlanetMesh) {
        if (i.name === name) {
            blockPlanetMovement = 1
            let v = new Vector(0 + i.position.x, 0 + i.position.z);
            let vec = v.add(v)
            movingCamera = 1
            await gsap.to(camera.position, { duration: 1, x: vec[0] * 0.85, y: -400, z: vec[1] * 0.85 })
            movingCamera = 0
        }
    }
}

function animatePlanet(time) {
    let ring
    let moon

    for (let i of listPlanetMesh) {
        if (i.name === "ring")
            ring = i
        if (i.name === "moon")
            moon = i
    }
    for (let i of listPlanetMesh) {
        if (i.name === "ring" || i.name === "moon" || i.isText)
            continue
        let newTime = time
        if (i.orderTime)
            newTime = time + i.orderTime

        if (camera.position.x > 1000 || camera.position.x < -1000 || camera.position.z > 1000 || camera.position.z < -1000)
            blockPlanetMovement = 1
        else if (!movingCamera)
            blockPlanetMovement = 0
        if (!blockPlanetMovement) {
            i.position.z = Math.cos(newTime * 0.033) * 1000
            i.position.x = Math.sin(newTime * 0.033) * 1000
        }
        i.rotation.y += 0.005
        i.rotation.x += 0.005

        if (i.name === "saturn") {
            ring.position.x = i.position.x
            ring.position.y = i.position.y
            ring.position.z = i.position.z
            ring.rotation.z += 0.005
        }
        if (i.name === "earth") {
            moon.position.set(0, 0, 0)
            moon.position.y = 250
            moon.rotateY(0.01)
            moon.translateX(75)
            moon.rotation.x += 0.005
            moon.rotation.y += 0.005
        }

        if (i.name === "sun") {
            pointLight.position.y = i.position.y
            pointLight.position.x = i.position.x
            pointLight.position.z = i.position.z
            pointLight.rotation.y = i.rotation.y
            pointLight.rotation.x = i.rotation.x
        }
        // text above planet
        for (let j of listPlanetMesh) {
            if (j.name === i.name) {
                if (j.lookAtMe) {
                    j.lookAt(camera.position)
                    if (j.orderTime === -1) {
                        j.position.x = i.position.x
                        j.position.z = i.position.z
                        if (!j.isDescription)
                            j.position.y = i.position.y - 210
                        else
                            j.position.y = i.position.y - 230
                    }
                }
            }
        }
    }
    for (let j of listPlanetMesh) {
        if (j.lookAtMe) {
            if (j.orderTime === -1) {
                if (!j.isDescription) {
                    j.material.opacity = 1
                    j.material.transparent = false
                }
                if (j.isDescription && j.position.distanceTo(camera.position) > 850) {
                    j.material.transparent = true
                    j.material.opacity = 0
                } else if (j.isDescription && j.position.distanceTo(camera.position) < 850) {
                    j.material.opacity = 1
                    j.material.transparent = false
                }
            }
        }
    }
    // goHomeButton
    if (camera.position.distanceTo({ x: 0, y: 0, z: 0 }) > 200 && document.getElementById("goHome"))
        document.getElementById("goHome").classList.remove("hidden")
    else if (document.getElementById("goHome") && !document.getElementById("goHome").classList.toString().includes('hidden'))
        document.getElementById("goHome").classList.add("hidden")
}


function animateAroundMe(time) {
    for (let i of meshAroundMe) {
        let newTime = time
        if (i.orderTime)
            newTime = time + i.orderTime
        if (i.orderTime !== -1)
            i.position.x = Math.sin(newTime * 0.15) * 50
        if (i.lookAtMe) {
            i.lookAt(camera.position)
            if (i.orderTime !== -1)
                i.position.y = (Math.cos(newTime * 0.15) * 50) - 12
        } else {
            i.rotation.x += 5 / 1000
            i.rotation.y += 5 / 1000
            if (i.dicons)
                i.rotation.x = 0
            i.position.y = (Math.cos(newTime * 0.15) * 50)
        }
    }
}

function animateAsteroids(time) {
    let howMany = -3
    if (camera.position.z > 250)
        howMany = -5
    if (camera.position.z > 500)
        howMany = -7
    if (camera.position.z > 750)
        howMany = -9
    let hide = howMany
    for (let i = 0, l = asteroids.length; i < l; i++) {
        hide++
        const theta = i * point + Math.PI + (time / 6)
        const y = - (i * 13) + 850
        let u = asteroids[i]
        u.position.setFromCylindricalCoords(y, theta, y)
        u.rotation.y += Math.random() * 0.002 - 0.005
        u.rotation.x += Math.random() * 0.002 - 0.005
        if (hide || (u.position.y < 50 && u.position.y > -50))
            scene.remove(u)
        else
            scene.add(u)

        u = asteroids2[i]
        if (!u)
            continue
        u.position.setFromCylindricalCoords(y, -theta, y)
        u.rotation.y += Math.random() * 0.002 - 0.005
        u.rotation.x += Math.random() * 0.002 - 0.005
        if (hide || (u.position.y < 50 && u.position.y > -50))
            scene.remove(u)
        else
            scene.add(u)
        if (hide >= 1)
            hide = howMany
    }
}

function openHTMLView(name) {
    controls.enabled = false
    clicked = 0
    setTimeout(() => {
        document.getElementById("presentation").classList.remove("hidden")
        if (name.includes('parcours')) {
            document.getElementById("parcours").classList.remove("hidden")
        } else if (name.includes('github')) {
            document.getElementById("github").classList.remove("hidden")
            document.getElementById("buttonGithub").classList.remove("active")
            document.getElementById("titleGithub").classList.remove("active")
            document.getElementById("navGithub").classList.remove("active")
            setTimeout(() => {
                toggleGithub()
            }, 750)
        } else if (name.includes('neptune')) {
            document.getElementById("me").classList.remove("hidden")
        }
        controls.enabled = true
    }, 1000)
    controls.enabled = false
    controls.maxDistance = 3000
    gsap.to(camera.position, { duration: 3, y: 3000 })
}

window.cinematic = async function () {
    document.querySelector("body").requestFullscreen().then(function () { }).catch(function (error) { })
    controls.enabled = false

    let timeline = gsap.timeline()

    for (let i of meshAroundMe) {
        i.visible = false
    }

    for (let i of scene.children) {
        if (i.isText || i.name === "ring" || i.name === "moon") {
            i.visible = false
        }
    }

    let copySceneChildren = []
    for (let i of scene.children)
        copySceneChildren.push(i)

    let copyScene2Children = []
    for (let i of scene2.children)
        copyScene2Children.push(i)


    for (let i of scene.children) {
        scene.remove(i)
        if (i.material && !i.isText && !i.name === "ring" && !i.name === "moon") {
            i.material.transparent = true
            i.material.opacity = 0
        } else if (i.children.length) {
            i.children[0].material.opacity = 0
            i.children[0].material.transparent = true
        }
    }
    for (let i of scene2.children) {
        scene2.remove(i)
        if (i.material && !i.isText) {
            i.material.transparent = true
            i.material.opacity = 0
        } else if (i.children.length) {
            i.children[0].material.opacity = 0
            i.children[0].material.transparent = true
        }
    }

    let copy = listPlanetMesh.constructor()
    let index = 0
    for (let attr in listPlanetMesh) {
        if (!listPlanetMesh[attr].name === "ring" && !listPlanetMesh[attr].name === "moon" && !listPlanetMesh[attr].isText) {
            listPlanetMesh[attr].material.opacity = 0
            listPlanetMesh[attr].material.transparent = true
        }
        if (listPlanetMesh.hasOwnProperty(attr)) {
            if (listPlanetMesh[attr].name === "ring" || listPlanetMesh[attr].name === "moon" || listPlanetMesh[attr].isText)
                continue
            copy[index] = listPlanetMesh[attr]
            index++
        }
        scene.remove(listPlanetMesh[attr])
    }

    scene.add((new THREE.AmbientLight(0xffffff, 1)))

    let sunPos
    for (let i of copy) {
        if (i.name !== "sun") {
            TweenMax.to(i.material, 2, { opacity: 0 })
            scene2.remove(i)
        }
        else {

            i.visible = true
            i.material.opacity = 1
            i.material.transparent = false
            TweenMax.to(i.material, 2, { opacity: 1 })
            sunPos = i.position
            scene.add(i)
        }
    }

    // I don't know why this element is visible at this moment
    for (let i of scene2.children)
        if (i.name === "/assets/me2.jpg")
            scene2.remove(i)

    await timeline.to(camera.position, { duration: 2, x: (sunPos.x * -1) / 8, y: sunPos.y * -1, z: (sunPos.z * -1) / 8, ease: "none" })
    for (let i of copy) {
        for (let j of listPlanetMesh) {
            if (j.isText && j.name === i.name) {
                j.visible = true
                scene.add(j)
                TweenMax.to(j.material, 2, { opacity: 1 })
            }
        }
        if (i.name !== "sun")
            scene2.add(i)
        else
            scene.add(i)
        TweenMax.to(i.material, 2, { opacity: 1 })
        await timeline.to(camera.position, { duration: 1, x: (i.position.x * -1) / 8, y: i.position.y * -1, z: (i.position.z * -1) / 8, ease: "none" })
    }
    await timeline.to(camera.position, { duration: 2, x: (sunPos.x * -1) / 8, y: sunPos.y * -1, z: (sunPos.z * -1) / 8, ease: "none" })

    for (let i of meshAroundMe)
        i.visible = true

    scene.children = copySceneChildren
    scene2.children = copyScene2Children
    for (let i of scene.children) {
        if (i.isText) {
            i.visible = true
            i.material.color.setHex(0xffffff)
        }
    }
    await timeline.to(camera.position, { duration: 3, y: 0, z: 100, x: 0 })
    controls.enabled = true
    document.exitFullscreen().then(function () { }).catch(function (error) { })
}

