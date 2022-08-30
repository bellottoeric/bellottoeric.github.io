import { setBackground } from './background'

export function utils(pointer, camera) {
    document.getElementById("goHome").addEventListener('click', function (event) {
        document.getElementById("twitchIframe").classList.add("hidden")
        document.getElementById("goHome").classList.add("hidden")
        gsap.to(camera.position, { duration: 1.5, z: 75 })
    }, false)

    window.addEventListener('resize', ev => {
        const width = window.innerWidth
        const height = window.innerHeight

        renderer.setSize(width, height)
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        setBackground(scene, img.width, img.height)
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
}