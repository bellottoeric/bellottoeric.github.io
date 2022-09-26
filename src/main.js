import '../css/style.css'
import { init } from './init'
import { utils } from './utils'
import { setupVideoPlayer } from './videoPlayer'

window.clicked = 0
let direction = 1
const [scene, scene2, renderer, camera, meshAroundMe, ambientLight, pointLight, controls, raycaster, pointer, listPlanetMesh] = init()
utils(pointer, camera, renderer)
//setupVideoPlayer()

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerHeight, window.innerHeight)
renderer.render(scene, camera)
renderer.autoClear = false;

pointLight.position.set(0, 0, 100)
scene2.add(pointLight)

setInterval(() => {
  direction *= -1
}, 1000 * 15);

(function animate() {
  requestAnimationFrame(animate)
  let time = Date.now() * 0.0005

  let ring
  let moon
  for (let i of listPlanetMesh) {
    if (i.name === "ring")
      ring = i
    if (i.name === "moon")
      moon = i
  }
  for (let i of listPlanetMesh) {
    if (i.name === "ring" || i.name === "moon")
      continue
    let newTime = time
    if (i.orderTime)
      newTime = time + i.orderTime


    i.position.x = Math.cos(newTime * 10 / 100) * 50 * 3
    i.position.y = Math.cos(newTime * 7 / 100) * 30 * 3
    i.position.z = Math.cos(newTime * 8 / 100) * 40 * 3
    i.rotation.x += 0.0015
    i.rotation.y += 0.0015
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
  }

  for (let i of meshAroundMe) {
    let newTime = time
    if (i.orderTime)
      newTime = time + i.orderTime
    i.position.x = Math.sin(newTime * 0.5) * 25
    if (i.lookAtMe) {
      i.lookAt(camera.position)
      i.position.y = (Math.cos(newTime * 0.5) * 25) - 10
    } else {
      i.rotation.x += 5 / 1000 * direction
      i.rotation.y += 5 / 1000 * direction
      i.position.y = (Math.cos(newTime * 0.5) * 25)
    }
  }
  raycaster.setFromCamera(pointer, camera)
  const intersects = raycaster.intersectObjects(scene.children)
  for (let i = 0; i < intersects.length; i++) {
    let name = intersects[i].object.name
    console.log(name)
    if (name.length && clicked) {
      if (name !== "ring" && name !== "moon" && name !== "sun") {
        clicked = 0
        setTimeout(() => {
          document.getElementById("presentation").classList.remove("hidden")
          if (name.includes('linkedin')) {
            document.getElementById("parcour").classList.remove("hidden")
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
        }, 1000)
        gsap.to(camera.position, { duration: 1.5, z: 1000 })
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
})()

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var btn = document.querySelector('.js-message-btn');
var card = document.querySelector('.js-profile-card');
var closeBtn = document.querySelectorAll('.js-message-close');

btn.addEventListener('click', function (e) {
  e.preventDefault();
  card.classList.add('active');
});

closeBtn.forEach(function (element, index) {
  console.log(element);
  element.addEventListener('click', function (e) {
    e.preventDefault();
    card.classList.remove('active');
  });
});

document.getElementById("buttonGithub").addEventListener('click', function (event) {
  toggleGithub()
}, false)

function toggleGithub() {
  if (document.getElementById("buttonGithub").classList.toString().includes('active'))
    document.getElementById("buttonGithub").classList.remove("active")
  else
    document.getElementById("buttonGithub").classList.add("active")

  if (document.getElementById("titleGithub").classList.toString().includes('active'))
    document.getElementById("titleGithub").classList.remove("active")
  else
    document.getElementById("titleGithub").classList.add("active")

  if (document.getElementById("navGithub").classList.toString().includes('active'))
    document.getElementById("navGithub").classList.remove("active")
  else
    document.getElementById("navGithub").classList.add("active")
}