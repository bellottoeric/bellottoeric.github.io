import '../style.css'
import * as THREE from 'three'
import { init } from './init'
import { utils } from './utils'

window.clicked = 0
let direction = 1
const [scene, scene2, renderer, camera, listMesh, ambientLight, pointLight, controls, raycaster, pointer] = init()
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



const sunLight = new THREE.AmbientLight(0xffffff, 1)
scene2.add(sunLight)

const s_Geometry = new THREE.SphereGeometry(50, 50, 50);
const s_texture = new THREE.TextureLoader().load('https://raw.githubusercontent.com/uemura5683/threejs_plactice/master/earth_vol2/img/sun.jpg');
const s_materials = new THREE.MeshStandardMaterial({ color: 0xffffff, map: s_texture });
const sunMesh = new THREE.Mesh(s_Geometry, s_materials);

scene2.add(sunMesh);


(function animate() {
  requestAnimationFrame(animate)
  let time = Date.now() * 0.0005

  for (let i of listMesh) {
    if (i.name === "me") {
      pointLight.position.x = Math.cos(time * 10 / 50) * 50 * 4;
      pointLight.position.y = Math.cos(time * 7 / 50) * 30 * 4;
      pointLight.position.z = Math.cos(time * 8 / 50) * 40 * 4;
      pointLight.rotation.x += 0.005
      pointLight.rotation.y += 0.005
      continue
    }
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
  sunMesh.position.y = pointLight.position.y
  sunMesh.position.x = pointLight.position.x
  sunMesh.position.z = pointLight.position.z
  sunMesh.rotation.y = pointLight.rotation.y
  renderer.clear();
  renderer.render(scene, camera)
  renderer.render(scene2, camera)
})()

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}