import * as THREE from 'three'
import '../css/style.css'
import { init } from './init'
import { utils } from './utils'

window.cinematicOn = 0
window.clicked = 0
window.selectedPlanet = ""
window.clickOne = 0
window.clickTwo = ""
window.aboutMe = 0
window.inactivity = 0

let point = 0.075
let sign = 1
let blockPlanetMovement = 0
let movingCamera = 0

var scene3
var [scene, scene2, renderer, camera, meshAroundMe, controls, raycaster, pointer, listPlanetMesh, aboutMeMesh, blackhole] = ""

const blackHoleClock = new THREE.Clock()

start()

async function start() {
  return (new Promise(async (resolve, reject) => {
    try {
      [scene, scene2, renderer, camera, meshAroundMe, controls, raycaster, pointer, listPlanetMesh, aboutMeMesh, blackhole] = await init()
      utils(pointer, camera, renderer, controls)
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(window.innerWidth, window.innerHeight)
    } catch (e) {
      console.log('Error in function', e)
    }
  }))
}

setInterval(() => {
  point = point + (0.00001 * sign)
  if (point > 0.5 || point < 0.02) {
    sign = sign * -1
  }
}, 1)

window.animate = function () {
  requestAnimationFrame(animate)
  let time = performance.now() * 0.0005 + 22000

  clickDetection()
  animateAroundMe(time)
  animatePlanet(time)
  animateAboutMe(time)
  animateBlackhole()
  calcInactivity(time)

  controls.update()
  renderer.clear()
  renderer.render(scene, camera)
  renderer.render(scene2, camera)
  if (scene3)
    renderer.render(scene3, camera)
}

function animateBlackhole() {
  const elapsedTime = blackHoleClock.getElapsedTime() * 10
  if (blackhole.material)
    blackhole.material.uniforms.uTime.value = elapsedTime

  if (blackhole.points) {
    blackhole.points.rotation.set(0, 25.03, 0)
  }
  blackhole.blackholeSphere.rotation.z += 0.03
}

function calcInactivity(time) {
  if (inactivity === true && !cinematicOn && controls.maxDistance !== 3000) {
    let vec = new Vector(Math.cos(time * 0.1) * 250 + camera.position.z, Math.sin(time * 0.1) * 250 + camera.position.x, 0 + camera.position.y)
    vec = vec.map((e, i) => e + vec[i])

    camera.position.z -= vec[0] / 100
    camera.position.x -= vec[1] / 100
    camera.position.y -= vec[2] / 100
  }
}

function clickDetection() {
  raycaster.setFromCamera(pointer, camera)
  const intersects = raycaster.intersectObjects(scene.children.concat(scene2.children))
  if (!intersects.length) {
    clickOne = ""
    clickTwo = ""
    if (cinematicOn)
      document.getElementsByTagName("html")[0].style.cursor = "none"
    else
      document.getElementsByTagName("html")[0].style.cursor = "move"
  }
  for (let i = 0; i < intersects.length; i++) {
    let name = intersects[i].object.name
    let type = intersects[i].object.type

    if (name.length && controls.enabled && !name.includes('sphere') && !name.includes('asteroid'))
      document.getElementsByTagName("html")[0].style.cursor = "pointer"

    if (name.length && controls.enabled && clickOne) {
      clickOne = 1
    } else {
      clickOne = 0
    }

    if (name.length && controls.enabled && clickOne)
      clickTwo = name
    if (name.length && clicked && controls.enabled) {
      window.clicked = 0
      selectedPlanet = ""
      if (name === "play") {
        cinematic()
      } else if (name.includes("music")) {
        document.getElementsByTagName("audio")[0].style.opacity = '1'
        setTimeout(() => {
          document.getElementsByTagName("audio")[0].style.opacity = '0'
        }, 5000)
      } else if (name.includes('parcours') || name.includes('projects') || name.includes('contact') || name.includes('assets/me')) {
        openHTMLView(name)
      } else if (name.includes('tea')) {
        window.open("https://bellottoeric.fr/", "_self")
      } else if (name.includes('pallete')) {
        window.open("https://bellottoeric.fr/fr.html", "_self")
      } else if (type === "planet") {
        planetInfo(name)
      } else if (name.includes("Object_")) {
        gsap.to(camera.position, { duration: 2, x: 0, y: -1190, z: 0 })
      } else if (name === "constellations") {
        gsap.to(camera.position, { duration: 2, x: 0, y: -200, z: 0 })
      }
    }
  }
}

let direction = 1
let ccDirection = 0
let maxTime = 450
let speed = 0.04
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  speed = 0.05
  maxTime = 250
}
function animateAboutMe(time) {
  for (let i of aboutMeMesh) {
    if (aboutMe)
      i.visible = true
    else
      i.visible = false
    i.rotation.y += 0.01
    if (i.name === "gym")
      i.position.x += (speed * direction * -1)
    if (i.name === "eth")
      i.position.x += (speed * direction)
  }
  ccDirection++
  if (ccDirection > maxTime) {
    ccDirection = 0
    direction *= -1
  }
}

async function planetInfo(name) {
  if (name === "ring")
    name = "saturn"
  if (name === "moon")
    name = "earth"

  selectedPlanet = name
  for (let i of listPlanetMesh) {
    if (i.name === name) {
      let vec = new Vector(0 + i.position.x, 0 + i.position.z)
      vec = vec.map((e, i) => e + vec[i])
      if (movingCamera)
        continue
      movingCamera = 1
      controls.enabled = false
      let vectorMutiplier = 0.7
      if (i.position.distanceTo({ x: 0, y: 0, z: 0 }) < 301)
        vectorMutiplier = 1.6
      else if (i.position.distanceTo({ x: 0, y: 0, z: 0 }) < 451)
        vectorMutiplier = 1.2
      else if (i.position.distanceTo({ x: 0, y: 0, z: 0 }) < 601)
        vectorMutiplier = 1
      else if (i.position.distanceTo({ x: 0, y: 0, z: 0 }) < 1001)
        vectorMutiplier = 0.9
      else if (i.position.distanceTo({ x: 0, y: 0, z: 0 }) < 1351)
        vectorMutiplier = 0.8
      if (vec[0] === 0) // sun
        vec = [350, 350]
      let yFix = 400
      if (i.position.y > 100)
        yFix = 0

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        vectorMutiplier += 0.2

      if (distance(i.position.x, i.position.y, i.position.z, vec[0] * vectorMutiplier, i.position.y - yFix, vec[1] * vectorMutiplier) > 998)
        vectorMutiplier -= 0.15

      gsap.to(camera.position, { duration: 2, x: vec[0] * vectorMutiplier, y: i.position.y - yFix, z: vec[1] * vectorMutiplier })
      setTimeout(() => {
        movingCamera = 0
        controls.enabled = true
      }, 1000 * 2)
    }
  }
}

function distance(x1, y1, z1, x2, y2, z2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2);
}

function animatePlanet(time) {
  let ring
  let moon

  for (let i of listPlanetMesh) {
    if (i.name === "ring") {
      ring = i
    }
    if (i.name === "moon")
      moon = i
  }
  for (let i of listPlanetMesh) {
    if (i.name === "ring" || i.name === "moon" || i.isText)
      continue
    let newTime = time
    if (i.orderTime)
      newTime = time + i.orderTime

    if (movingCamera)
      blockPlanetMovement = 1
    if (!blockPlanetMovement) {
      let distancePlanet = []
      distancePlanet['sun'] = 0
      distancePlanet['mercury'] = 300
      distancePlanet['venus'] = 450
      distancePlanet['earth'] = 600
      distancePlanet['mars'] = 750
      distancePlanet['jupiter'] = 1000
      distancePlanet['saturn'] = 1300
      distancePlanet['uranus'] = 1600
      distancePlanet['neptune'] = 1700
      let speedPlanet = []
      speedPlanet['sun'] = 0
      speedPlanet['mercury'] = 0.08727
      speedPlanet['venus'] = 0.063636
      speedPlanet['earth'] = 0.05454
      speedPlanet['mars'] = 0.043636
      speedPlanet['jupiter'] = 0.02363
      speedPlanet['saturn'] = 0.01763
      speedPlanet['uranus'] = 0.01236
      speedPlanet['neptune'] = 0.01

      i.position.z = Math.cos(newTime * speedPlanet[i.name]) * distancePlanet[i.name]
      i.position.x = Math.sin(newTime * speedPlanet[i.name]) * distancePlanet[i.name]
      i.position.y = Math.cos(newTime * speedPlanet[i.name]) * distancePlanet[i.name] / 1.5
    }

    let rotateSpeedPlanet = []
    rotateSpeedPlanet['sun'] = 0.0006172839
    rotateSpeedPlanet['mercury'] = 0.0002873563
    rotateSpeedPlanet['venus'] = 0.0000685871
    rotateSpeedPlanet['earth'] = 0.0166666666
    rotateSpeedPlanet['mars'] = 0.016
    rotateSpeedPlanet['jupiter'] = 0.04
    rotateSpeedPlanet['saturn'] = 0.0363636363
    rotateSpeedPlanet['uranus'] = 0.0235294117
    rotateSpeedPlanet['neptune'] = 0.025
    i.rotation.y += rotateSpeedPlanet[i.name]

    if (i.name === "saturn") {
      if (!i.children.length)
        i.add(ring)
      ring.rotation.y -= rotateSpeedPlanet["saturn"]
      ring.rotation.x = 0
      ring.rotation.z += 0.005
    }
    if (i.name === "earth") {
      if (!i.children.length)
        i.add(moon)
      moon.position.set(0, 0, 0)
      moon.rotateY(0.001)
      moon.translateX(50)
      moon.rotation.x += 0.002
      moon.rotation.y += 0.002
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
              j.position.y = i.position.y - 150
            else
              j.position.y = i.position.y - 170
          }
        }
      }
    }
  }
  if (selectedPlanet.length)
    blockPlanetMovement = 1
  else
    blockPlanetMovement = 0

  // make title planet visible  
  for (let k of listPlanetMesh) {
    if (k.lookAtMe && k.orderTime === -1) {
      if (!k.isDescription) {
        k.material.opacity = 1
        k.material.transparent = false
        k.visible = true
      }
    }
  }
  if (!cinematicOn) {
    for (let j of listPlanetMesh) {
      if (j.lookAtMe) {
        if (j.orderTime === -1) {
          if (!j.isDescription) {
            j.material.opacity = 1
            j.material.transparent = false
          }
          if (selectedPlanet === j.name) {
            j.material.opacity = 1
            j.material.transparent = false
            j.visible = true
            if (j.position.distanceTo(camera.position) > 1000 && j.isDescription) {
              blockPlanetMovement = 0
              j.material.opacity = 0
              j.material.transparent = false
              j.visible = false
            } else
              blockPlanetMovement = 1

            // if close, remove title planets except targeted one
            if (j.position.distanceTo(camera.position) < 1000) {
              for (let k of listPlanetMesh) {
                if (k.lookAtMe && k.orderTime === -1) {
                  if (selectedPlanet !== k.name && !k.isDescription) {
                    k.material.opacity = 0
                    k.material.transparent = true
                    k.visible = false
                  }
                }
              }
            } else {
              // if far, display title planets except targeted one
              for (let k of listPlanetMesh) {
                if (k.lookAtMe && k.orderTime === -1) {
                  if (selectedPlanet !== k.name && !k.isDescription) {
                    k.material.opacity = 1
                    k.material.transparent = false
                    k.visible = true
                  }
                }
              }
            }
          } else if (j.isDescription) {
            j.material.transparent = true
            j.material.opacity = 0
            j.visible = false
          }

        }
      }
    }
  }

  // goHomeButton
  if (camera.position.distanceTo({ x: 0, y: 0, z: 0 }) > 170 && document.getElementById("goHome") && !cinematicOn)
    document.getElementById("goHome").classList.remove("hidden")
  else if (document.getElementById("goHome") && !document.getElementById("goHome").classList.toString().includes('hidden'))
    document.getElementById("goHome").classList.add("hidden")
  if (movingCamera)
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
      if (i.name === "/assets/me.png") {
        i.lookAt(camera.position)
        i.position.x = i.position.x + 0.1
      }
    }
  }
}

function openHTMLView(name) {
  if (name.includes('assets/me')) {
    aboutMe = 1
  }
  controls.enabled = false
  clicked = 0
  setTimeout(() => {
    document.getElementById("presentation").classList.remove("hidden")
    if (name.includes('parcours')) {
      document.getElementById("parcours").classList.remove("hidden")
    } else if (name.includes('projects')) {
      document.getElementById("projects").classList.remove("hidden")
      document.getElementById("buttonProjects").classList.remove("active")
      document.getElementById("titleProjects").classList.remove("active")
      document.getElementById("navProjects").classList.remove("active")
      setTimeout(() => {
        toggleProjects()
      }, 650)
    } else if (name.includes('contact')) {
      document.getElementById("me").classList.remove("hidden")
    }
    if (aboutMe) {
      document.getElementById("aboutMe").classList.remove("hidden")
    }
  }, 1000)
  controls.maxDistance = 3000
  gsap.to(camera.position, { duration: 3, y: 3000, x: 0, z: 0 })
}

window.cinematic = async function () {
  document.getElementById("lineLoader").style.display = "block"
  document.getElementById("goHelp").classList.add("hidden")
  if (!document.location.href.includes('/fr')) {
    document.getElementById('audioSource').src = "/audio/introen.mp3"
  } else {
    document.getElementById('audioSource').src = "/audio/introfr.mp3"
  }
  document.getElementById("intro").load()
  document.getElementById("intro").play()

  document.getElementsByTagName("html")[0].style.cursor = "none"
  cinematicOn = 1
  document.querySelector("body").requestFullscreen().then(function () { }).catch(function (error) { })
  controls.enabled = false
  scene.visible = false
  scene2.visible = false
  scene3 = new THREE.Scene()
  scene3.add((new THREE.AmbientLight(0xffffff, 1)))
  renderer.render(scene3, camera)

  let copy = listPlanetMesh.constructor()
  let index = 0
  for (let attr in listPlanetMesh) {
    if (listPlanetMesh.hasOwnProperty(attr)) {
      if (listPlanetMesh[attr].name === "ring" || listPlanetMesh[attr].name === "moon" || listPlanetMesh[attr].isText || listPlanetMesh[attr].name === "sun")
        continue
      copy[index] = listPlanetMesh[attr]
      index++
    }
  }

  const timeline = gsap.timeline()
  for (let i of copy) {
    await timeline.to(camera.position, { duration: 1, x: (i.position.x * -1) / 10, y: (i.position.y * -1) / 10, z: (i.position.z * -1) / 10 })
    for (let j of listPlanetMesh) {
      if (j.isText && j.name === i.name && !j.isDescription) {
        scene3.add(j)
      }
    }
    i.material.opacity = 0
    i.material.transparent = true
    i.visible = true
    if (i.name !== "sun")
      scene3.add(i)
    TweenMax.to(i.material, 2, { opacity: 1 })
    if (i.children.length) {
      i.children[0].material.opacity = 0
      i.children[0].material.transparent = true
      i.children[0].visible = true
      TweenMax.to(i.children[0].material, 2, { opacity: 1 })
    }
    await timeline.to(camera.position, { duration: 0.8, x: (i.position.x * -1) / 10, y: (i.position.y * -1) / 10, z: (i.position.z * -1) / 10, ease: "none" })
  }
  scene3 = null
  scene.visible = true
  scene2.visible = true
  for (let i of meshAroundMe)
    i.visible = true
  for (let i of listPlanetMesh) {
    if (i.material)
      TweenMax.to(i.material, 0.1, { opacity: 1 })
    i.visible = true
    scene.add(i)
  }
  for (let j of listPlanetMesh) {
    if (j.lookAtMe) {
      if (j.orderTime === -1) {
        if (j.isDescription) {
          j.material.opacity = 0
          j.material.transparent = false
          j.visible = false
        }
      }
    }
  }
  //await timeline.to(camera.position, { duration: 4.5, y: -1500, z: 0, x: 0, ease: "none" })
  //await timeline.to(camera.position, { duration: 4.5, y: 1000, z: 0, x: 0, ease: "none" })
  await timeline.to(camera.position, { duration: 3, y: 0, z: 150, x: 0, ease: "none" })

  controls.enabled = true
  document.exitFullscreen().then(function () { }).catch(function (error) { })
  cinematicOn = 0
  document.getElementById("lineLoader").style.display = "none"
  document.getElementById("goHelp").classList.remove("hidden")
}

class Vector extends Array {
  add(other) {
    return this.map((e, i) => e + other[i])
  }
}
