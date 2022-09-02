import '../style.css'
import { init } from './init'
import { utils } from './utils'

window.clicked = 0
let direction = 1
const [scene, scene2, renderer, camera, listMesh, ambientLight, pointLight, controls, raycaster, pointer, listPlanetMesh] = init()
utils(pointer, camera)

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerHeight, window.innerHeight)
renderer.render(scene, camera)
renderer.autoClear = false;

pointLight.position.set(0, 0, 100)
scene.add(pointLight, ambientLight)

setInterval(() => {
  direction *= -1
}, 1000 * 15);

(function animate() {
  requestAnimationFrame(animate)
  let time = Date.now() * 0.0005



  for (let i of listPlanetMesh) {
    let newTime = time
    if (i.orderTime)
      newTime = time + i.orderTime

    i.position.x = Math.cos(newTime * 10 / 100) * 50 * 4
    i.position.y = Math.cos(newTime * 7 / 100) * 30 * 4
    i.position.z = Math.cos(newTime * 8 / 100) * 40 * 4
    i.rotation.x += 0.0015
    i.rotation.y += 0.0015
    if (i.name === "sun") {
      pointLight.position.y = i.position.y
      pointLight.position.x = i.position.x
      pointLight.position.z = i.position.z
      pointLight.rotation.y = i.rotation.y
      pointLight.rotation.x = i.rotation.x
    }
  }

  for (let i of listMesh) {
    let newTime = time
    if (i.orderTime)
      newTime = time + i.orderTime
    i.position.x = Math.sin(newTime * 0.5) * 25
    if (i.lookAtMe) {
      i.lookAt(camera.position)
      i.position.y = (Math.cos(newTime * 0.5) * 25) - 10
    } else {
      i.rotation.x += getRandomArbitrary(1, 10) / 1000 * direction
      i.rotation.y += getRandomArbitrary(1, 10) / 1000 * direction
      i.position.y = (Math.cos(newTime * 0.5) * 25)
    }
  }
  raycaster.setFromCamera(pointer, camera)
  const intersects = raycaster.intersectObjects(scene.children)
  for (let i = 0; i < intersects.length; i++) {
    if (intersects[i].object.name.length && clicked) {
      clicked = 0
      setTimeout(() => {
        document.getElementById("twitchIframe").classList.remove("hidden")
        document.getElementById("goHome").classList.remove("hidden")
      }, 1000)
      gsap.to(camera.position, { duration: 1.5, z: 1000 })
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
})()

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}