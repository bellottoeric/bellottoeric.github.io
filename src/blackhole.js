import * as THREE from 'three'

const parameters = {
    count: 550000,
    radius: 100,
    branches: 5,
    spin: 1,
    randomness: 1.8,
    randomnessPower: 8,
    insideColor: "#ec5300",
    outsideColor: "#2fb4fc"
};


let geometry = null;
let material = null;
let points = null;

const generateGalaxyF = (textureLoader, scene, renderer) => {
    const starTexture = textureLoader.load(
        "/star.png"
    );


    if (points !== null) {
        console.log("dispose")
        geometry.dispose();
        material.dispose();
        scene.remove(points);
    }

    /**
     * Geometry
     */
    geometry = new THREE.BufferGeometry();

    const positions = new Float32Array(parameters.count * 3);
    const colors = new Float32Array(parameters.count * 3);
    const scales = new Float32Array(parameters.count);
    const randomness = new Float32Array(parameters.count * 3);
    const insideColor = new THREE.Color(parameters.insideColor);
    const outsideColor = new THREE.Color(parameters.outsideColor);

    for (let i = 0; i < parameters.count; i++) {
        const i3 = i * 3;

        // Position
        const radius = Math.random() * parameters.radius;

        const branchAngle =
            ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

        const randomX =
            Math.pow(Math.random(), parameters.randomnessPower) *
            (Math.random() < 0.5 ? 1 : -1) *
            parameters.randomness *
            radius;
        const randomY =
            Math.pow(Math.random(), parameters.randomnessPower) *
            (Math.random() < 0.5 ? 1 : -1) *
            parameters.randomness *
            radius;
        const randomZ =
            Math.pow(Math.random(), parameters.randomnessPower) *
            (Math.random() < 0.5 ? 1 : -1) *
            parameters.randomness *
            radius;

        positions[i3] = Math.cos(branchAngle) * radius;
        positions[i3 + 1] = 0;
        positions[i3 + 2] = Math.sin(branchAngle) * radius;

        // Randomness
        randomness[i3] = randomX;
        randomness[i3 + 1] = randomY - 250;
        randomness[i3 + 2] = randomZ;

        // Color
        const mixedColor = insideColor.clone();
        mixedColor.lerp(outsideColor, radius / parameters.radius);

        colors[i3] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;

        // Scales
        scales[i] = Math.random();
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    geometry.setAttribute(
        "aRandomness",
        new THREE.BufferAttribute(randomness, 3)
    );

    material = new THREE.ShaderMaterial({
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true,
        vertexShader: document.getElementById("vertexShader").textContent,
        fragmentShader: document.getElementById("fragmentShader").textContent,
        transparent: true,
        uniforms: {
            uTime: { value: 0 },
            uSize: { value: 100 * renderer.getPixelRatio() },
            uHoleSize: { value: 5.15 },
            uTexture: { value: starTexture },
            size: { value: 6.0 }
        }
    });

    points = new THREE.Points(geometry, material);
    points.scale.multiplyScalar(5)
    scene.add(points);
};

const clock = new THREE.Clock();

const tick = () => {
    const elapsedTime = clock.getElapsedTime() * 100
    if (material) {
        material.uniforms.uTime.value = elapsedTime;
    }
    window.requestAnimationFrame(tick);
};

tick();

export const generateGalaxy = generateGalaxyF
