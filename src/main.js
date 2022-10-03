import '../css/style.css'
import { init } from './init'
import { utils } from './utils'
import { setupVideoPlayer } from './videoPlayer'

window.clicked = 0
let direction = 1
const [scene, scene2, renderer, camera, meshAroundMe, pointLight, controls, raycaster, pointer, listPlanetMesh, asteroids, asteroids2] = init()
utils(pointer, camera, renderer, scene, scene2, controls)
//setupVideoPlayer()

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerHeight, window.innerHeight)
renderer.render(scene, camera)
renderer.autoClear = false;

pointLight.position.set(0, 0, 100)
scene2.add(pointLight)

setInterval(() => {
  direction *= -1
}, 1000 * 15)
let soundClicked = 0
setInterval(() => {
  if (soundClicked)
    soundClicked = 0
}, 200);

let point = 0.075
let sign = 1
setInterval(() => {

  point = point + (0.00001 * sign)
  if (point > 0.5 || point < 0.02) {
    sign = sign * -1
  }
}, 1);

(function animate() {
  requestAnimationFrame(animate)
  let time = Date.now() * 0.0005
  let ring
  let moon
  for (let i = 0, l = asteroids.length; i < l; i++) {
    const theta = i * point + Math.PI + (time / 6)
    const y = - (i * 13) + 850;
    let u = asteroids[i]
    u.position.setFromCylindricalCoords(y, theta, y);
    if (u.position.y < 50 && u.position.y > -50)
      u.position.z = 3000
    u.rotation.y += Math.random() * 0.002 - 0.005
    u.rotation.x += Math.random() * 0.002 - 0.005

    u = asteroids2[i]
    if (!u)
      continue
    u.position.setFromCylindricalCoords(y, -theta, y);
    if (u.position.y < 50 && u.position.y > -50)
      u.position.z = 3000
    u.rotation.y += Math.random() * 0.002 - 0.005
    u.rotation.x += Math.random() * 0.002 - 0.005
  }

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

    /*i.position.x = Math.cos(newTime * 9 / 100) * 1000 + i.orderTime / 100
    i.position.y = Math.cos(newTime * 8 / 100) * 1000 + i.orderTime / 100
    i.position.z = Math.cos(newTime * 7 / 100) * 1000 + i.orderTime / 100
    i.rotation.x += 0.0015
    i.rotation.y += 0.0015*/
    i.position.z = Math.cos(newTime * 0.033) * 1000
    i.position.x = Math.sin(newTime * 0.033) * 1000
    if (i.name === "saturn") {
      ring.position.x = i.position.x
      ring.position.y = i.position.y
      ring.position.z = i.position.z
      ring.rotation.x += 0.005
      ring.rotation.y += 0.005
    }
    if (i.name === "earth") {
      moon.position.set(0, 0, 0);
      moon.rotateY(0.01)
      moon.translateX(50);
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
    for (var j of listPlanetMesh) {
      if (j.name === i.name) {
        if (j.lookAtMe) {
          j.lookAt(camera.position)
          if (j.orderTime === -1) {
            j.position.x = i.position.x
            j.position.z = i.position.z
            j.position.y = i.position.y - 250
          }
        }
      }
    }

  }

  for (let i of meshAroundMe) {
    let newTime = time
    if (i.orderTime)
      newTime = time + i.orderTime
    if (i.orderTime !== -1)
      i.position.x = Math.sin(newTime * 0.15) * 50
    if (i.lookAtMe) {
      i.lookAt(camera.position)
      if (i.orderTime !== -1)
        i.position.y = (Math.cos(newTime * 0.15) * 50) - 10
    } else {
      i.rotation.x += 5 / 1000 * direction
      i.rotation.y += 5 / 1000 * direction
      i.position.y = (Math.cos(newTime * 0.15) * 50)
    }
  }
  raycaster.setFromCamera(pointer, camera)
  const intersects = raycaster.intersectObjects(scene.children)
  for (let i = 0; i < intersects.length; i++) {
    let name = intersects[i].object.name
    if (name.length && clicked && controls.enabled) {
      if (name === "/planetTexture/moon.jpg") {
        window.open("https://pomatobot.com");
      } else if (name === "/planetTexture/earth.jpg") {
        window.open("https://xpert-agro.fr");
      } else if (name === "Cinematic") {
        cinematic()
      } else if (name.includes("on/off") && !soundClicked) {
        soundClicked = 1
        if (window.player.isMuted())
          window.player.unMute()
        else
          window.player.mute()
      } else if (name !== "ring" && name !== "moon" && name !== "sun" && !intersects[i].object.isText) {
        controls.enabled = false;
        clicked = 0
        setTimeout(() => {
          document.getElementById("presentation").classList.remove("hidden")
          if (name.includes('linkedin')) {
            document.getElementById("parcours").classList.remove("hidden")
          } else if (name.includes('github')) {
            document.getElementById("github").classList.remove("hidden")
            document.getElementById("buttonGithub").classList.remove("active")
            document.getElementById("titleGithub").classList.remove("active")
            document.getElementById("navGithub").classList.remove("active")
            setTimeout(() => {
              toggleGithub()
            }, 750)
          } else if (name.includes('moon')) {
            document.getElementById("moon").classList.remove("hidden")
          } else if (name.includes('neptune')) {
            document.getElementById("me").classList.remove("hidden")
          }
          controls.enabled = true;
        }, 1000)
        controls.enabled = false;
        controls.maxDistance = 3000
        gsap.to(camera.position, { duration: 3, y: 3000 })
      }
    }
  }
  camera.position.y += 0.015 * direction
  camera.position.x += 0.015 * direction
  camera.position.z -= 0.015 * direction
  pointLight.position.y += 0.455 * direction
  controls.update()

  renderer.clear();
  renderer.render(scene, camera)
  renderer.render(scene2, camera)
})();

window.cinematic = async function () {
  document.querySelector("body").requestFullscreen().then(function () { }).catch(function (error) { });
  controls.enabled = false;

  await gsap.timeline()

    .to(camera.position, { duration: 0.8, x: 50, y: 0, z: 0, ease: "none" })
    .to(camera.position, { duration: 0.8, x: 50, y: 0, z: -50, ease: "none" })
    .to(camera.position, { duration: 0.8, x: 0, y: 0, z: -50, ease: "none" })
    .to(camera.position, { duration: 0.8, x: -50, y: 0, z: -50, ease: "none" })
    .to(camera.position, { duration: 0.8, x: -50, y: 0, z: 0, ease: "none" })
    .to(camera.position, { duration: 0.8, x: -50, y: 0, z: 50, ease: "none" })
    .to(camera.position, { duration: 0.8, x: 0, y: 0, z: 50, ease: "none" })



    .to(camera.position, { duration: 0.8, x: 100, y: 10, z: 0, ease: "none" })
    .to(camera.position, { duration: 0.8, x: 100, y: 20, z: -100, ease: "none" })
    .to(camera.position, { duration: 0.8, x: 0, y: 30, z: -100, ease: "none" })
    .to(camera.position, { duration: 0.8, x: -100, y: 40, z: -100, ease: "none" })
    .to(camera.position, { duration: 0.8, x: -100, y: 50, z: 0, ease: "none" })
    .to(camera.position, { duration: 0.8, x: -100, y: 60, z: 100, ease: "none" })
    .to(camera.position, { duration: 0.8, x: 0, y: 70, z: 100, ease: "none" })



    .to(camera.position, { duration: 1.8, x: 200, y: 0, z: 0, ease: "none" })
    .to(camera.position, { duration: 1.8, x: 200, y: -100, z: -200, ease: "none" })
    .to(camera.position, { duration: 1.8, x: 0, y: 0, z: -200, ease: "none" })
    .to(camera.position, { duration: 1.8, x: -200, y: 100, z: -200, ease: "none" })
    .to(camera.position, { duration: 1.8, x: -200, y: 0, z: 0, ease: "none" })
    .to(camera.position, { duration: 1.8, x: -200, y: -100, z: 200, ease: "none" })
    .to(camera.position, { duration: 1.8, x: 0, y: 0, z: 200, ease: "none" })

    .to(camera.position, { duration: 2, x: 0, y: 0, z: 75, ease: "none" })

  controls.enabled = true;
  document.exitFullscreen().then(function () { }).catch(function (error) { });
}
