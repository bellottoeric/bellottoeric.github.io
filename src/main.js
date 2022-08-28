import '../style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { setBackground } from './background'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
const fontLoader = new FontLoader()
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
fontLoader.load(
  'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
  (font) => {
    console.log('loaded')
  }
)
const scene = new THREE.Scene()

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
gsap.to(camera.position, {
  duration: 1.5,
  z: 75,
  onComplete: function () {
    camera.lookAt(0, 0, 0)
  }
});

renderer.render(scene, camera)

const geometry = new THREE.TorusGeometry(2, 2, 200, 100)
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 })
const torus = new THREE.Mesh(geometry, material)
//scene.add(torus)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(20, 20, 20)
const ambientLight = new THREE.AmbientLight(0xffffff)
var text;
fontLoader.load('a.json', function (font) {

  const matLite = new THREE.MeshBasicMaterial(
    {
      color: "#ffffff",
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide
    });

  const message = "Linkedin";

  const shapes = font.generateShapes(message, 3);

  const geometry = new THREE.ShapeGeometry(shapes);
  geometry.computeBoundingBox();

  const xMid = - 0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);
  geometry.translate(xMid, 0, 0);

  text = new THREE.Mesh(geometry, matLite);
  text.position.z = - 150;
  text.renderOrder = -9
  scene.add(text);

  camera.lookAt(new THREE.Vector3(text.position.x, 0, text.position.z));

});


scene.add(ambientLight)

const controls = new OrbitControls(camera, renderer.domElement)
controls.maxAzimuthAngle = Math.PI / 2

const moonTexture = new THREE.TextureLoader().load('linkedin.png')
const moon = new THREE.Mesh(
  new THREE.BoxGeometry(8, 8, 8),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
  })
)
moon.name = "moon"

scene.add(moon)


const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

let hasClicked = 0



function animate() {
  requestAnimationFrame(animate)
  var time = Date.now() * 0.0005;
  //if (object) object.rotation.y -= 0.5 * delta;
  moon.position.x = Math.sin(time * 0.5) * 25;
  moon.position.y = Math.cos(time * 0.5) * 25;
  moon.position.z = Math.cos(time * 0) * 10;
  moon.rotation.x += 0.01
  moon.rotation.y += 0.01

  //moon.position.x = torus.position.x
  //moon.position.y = torus.position.y - 3
  //moon.lookAt(camera.position)
  //torus.rotation.x = torus.rotation.x + 0.01
  //torus.rotation.y += 0.005
  //torus.rotation.z += 0.11


  if (text) {
    text.position.x = Math.sin(time * 0.5) * 25;
    text.position.y = (Math.cos(time * 0.5) * 25) - 10;
    text.position.z = Math.cos(time * 0) * 10;
    text.lookAt(camera.position);
  }






  raycaster.setFromCamera(pointer, camera);

  const intersects = raycaster.intersectObjects(scene.children);

  for (let i = 0; i < intersects.length; i++) {

    if (intersects[i].object.name.length && hasClicked) {
      hasClicked = 0
      setTimeout(() => {
        document.getElementById("twitchIframe").classList.remove("hidden")
        document.getElementById("goHome").classList.remove("hidden")
      }, 1000 * 1.5)
      gsap.to(camera.position, {
        duration: 3,
        z: 1000,
        onComplete: function () {
          camera.lookAt(0, 0, 0)
        }
      });
    }
  }

  controls.update()

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



document.getElementById("goHome").addEventListener('click', function (event) {
  document.getElementById("twitchIframe").classList.add("hidden")
  document.getElementById("goHome").classList.add("hidden")
  gsap.to(camera.position, {
    duration: 3,
    z: 50,
    onComplete: function () {
      camera.lookAt(0, 0, 0)
    }
  });
}, false);

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

window.addEventListener('pointerdown', (event) => {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;
  hasClicked = 1
  setTimeout(() => {
    hasClicked = 0
  }, 100)
});


function onPointerMove(event) {

  // calculate pointer position in normalized device coordinates
  // (-1 to +1) for both components

  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;

}

window.addEventListener('pointermove', onPointerMove);
