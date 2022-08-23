import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()
function setBackground(scene, backgroundImageWidth, backgroundImageHeight) {
  var windowSize = function (withScrollBar) {
    var wid = 0;
    var hei = 0;
    if (typeof window.innerWidth != "undefined") {
      wid = window.innerWidth;
      hei = window.innerHeight;
    }
    else {
      if (document.documentElement.clientWidth == 0) {
        wid = document.body.clientWidth;
        hei = document.body.clientHeight;
      }
      else {
        wid = document.documentElement.clientWidth;
        hei = document.documentElement.clientHeight;
      }
    }
    return { width: wid - (withScrollBar ? (wid - document.body.offsetWidth + 1) : 0), height: hei };
  };

  if (scene.background) {

    var size = windowSize(true);
    var factor = (backgroundImageWidth / backgroundImageHeight) / (size.width / size.height);

    scene.background.offset.x = factor > 1 ? (1 - 1 / factor) / 2 : 0;
    scene.background.offset.y = factor > 1 ? 0 : (1 - factor) / 2;

    scene.background.repeat.x = factor > 1 ? 1 / factor : 1;
    scene.background.repeat.y = factor > 1 ? 1 : factor;
  }
}
var img = new Image();
img.onload = function () {
  scene.background = new THREE.TextureLoader().load(img.src);
  setBackground(scene, img.width, img.height);
};
img.src = "space.jpg";

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector("#bg")
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerHeight, window.innerHeight)
camera.position.setZ(50)

renderer.render(scene, camera)

const geometry = new THREE.TorusGeometry(2, 2, 200, 100)
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 })
const torus = new THREE.Mesh(geometry, material)
scene.add(torus)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(20, 20, 20)
const ambientLight = new THREE.AmbientLight(0xffffff)

const lightHelper = new THREE.PointLightHelper(pointLight)
const gridHelper = new THREE.GridHelper(200, 50)

scene.add(pointLight, ambientLight, lightHelper,)

const controls = new OrbitControls(camera, renderer.domElement)
controls.maxAzimuthAngle = Math.PI / 2

const moonTexture = new THREE.TextureLoader().load('moon.jpg')
const normalTexture = new THREE.TextureLoader().load('normal.jpg')
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture
  })
)
moon.name = "moon"

scene.add(moon)


const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

let click = ""


function animate() {
  requestAnimationFrame(animate)
  var time = Date.now() * 0.0005;
  //if (object) object.rotation.y -= 0.5 * delta;
  torus.position.x = Math.sin(time * 0.5) * 25;
  torus.position.y = Math.cos(time * 0.5) * 25;
  torus.position.z = Math.cos(time * 0) * 10;

  moon.position.z = torus.position.z

  moon.position.x = torus.position.x
  moon.position.y = torus.position.y - 3
  moon.lookAt(camera.position)
  //torus.rotation.x = torus.rotation.x + 0.01
  //torus.rotation.y += 0.005
  //torus.rotation.z += 0.11
  torus.rotation.x += 0.01
  torus.rotation.y += 0.01

  controls.update()
  renderer.render(scene, camera)


  raycaster.setFromCamera(pointer, camera);

  // calculate objects intersecting the picking ray
  const intersects = raycaster.intersectObjects(scene.children);

  for (let i = 0; i < intersects.length; i++) {

    //intersects[i].object.material.color.set(0xff0000);
    if (intersects[i].object.name.length) {
      click = intersects[i].object.name
    } else
      click = ""
  }

  renderer.render(scene, camera);
}

animate()

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24)
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
  const star = new THREE.Mesh(geometry, material)

  const [x, y, z] = Array(3).fill().map(() => (THREE.MathUtils.randFloatSpread(100)))
  star.position.set(x, y, z)
  scene.add(star)
}

Array(200).fill().forEach(addStar)






function moveCamera() {
  const t = document.body.getBoundingClientRect().top
  moon.rotation.x += 0.05
  moon.rotation.y += 0.075
  moon.rotation.z += 0.05

  camera.rotation.x = t * -0.01
  camera.rotation.y = t * -0.0002
  camera.rotation.z = t * -0.0002
}

document.body.onscroll = moveCamera

document.querySelector("#bg").addEventListener('wheel', function (event) {
  moveCamera()
  return false;
}, false);

window.addEventListener('resize', ev => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  setBackground(scene, img.width, img.height);

});



document.addEventListener('pointerdown', (event) => {
  if (click.length) {
    console.log("clicked on " + click)
  }
});


function onPointerMove(event) {

  // calculate pointer position in normalized device coordinates
  // (-1 to +1) for both components

  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

}

window.addEventListener('pointermove', onPointerMove);
