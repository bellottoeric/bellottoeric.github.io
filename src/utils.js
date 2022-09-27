import { setBackground } from './background'

export function utils(pointer, camera, renderer, scene, scene2, controls) {
    document.getElementById("goHome").addEventListener('click', function (event) {
        document.getElementById("presentation").classList.add("hidden")
        document.getElementById("parcour").classList.add("hidden")
        document.getElementById("github").classList.add("hidden")
        document.getElementById("moon").classList.add("hidden")
        document.getElementById("me").classList.add("hidden")
        controls.enabled = false;
        setTimeout(() => {
            controls.enabled = true;
        }, 1500)
        gsap.to(camera.position, { duration: 1.5, z: 75 })
    }, false)

    window.addEventListener('resize', ev => {
        const width = window.innerWidth
        const height = window.innerHeight

        renderer.setSize(width, height)
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        setBackground(scene, img.width, img.height)
        setBackground(scene2, img.width, img.height)
    })

    window.addEventListener('pointerdown', (event) => {
        pointer.x = (event.clientX / window.innerWidth) * 2 - 1
        pointer.y = - (event.clientY / window.innerHeight) * 2 + 1
        window.clicked = 1
        setTimeout(() => {
            window.clicked = 0
        }, 100)
    })

    window.addEventListener('pointermove', (event) => {
        pointer.x = (event.clientX / window.innerWidth) * 2 - 1
        pointer.y = - (event.clientY / window.innerHeight) * 2 + 1
    })


    let waitLoad = 0
    document.getElementById("parentLoader").classList.add("hidden")
    document.getElementById("bg").classList.remove("hidden")
    setTimeout(() => {
        if (waitLoad) {
            document.getElementById("parentLoader").classList.add("hidden")
            document.getElementById("bg").classList.remove("hidden")
        } else
            waitLoad = 1
    }, 1000 * 0.02)
    window.addEventListener("load", function (event) {
        if (waitLoad) {
            document.getElementById("parentLoader").classList.add("hidden")
            document.getElementById("bg").classList.remove("hidden")
        } else
            waitLoad = 1
    })


    ////// GITHUB 
    document.getElementById("buttonGithub").addEventListener('click', function (event) {
        toggleGithub()
    }, false)
}

window.toggleGithub = function () {
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