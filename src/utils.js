export function utils(pointer, camera, renderer, scene, scene2, controls) {
    document.getElementById("goHome").addEventListener('click', async function (event) {
        window.selectedPlanet = ""
        document.getElementById("presentation").classList.add("hidden")
        document.getElementById("parcours").classList.add("hidden")
        document.getElementById("github").classList.add("hidden")
        document.getElementById("me").classList.add("hidden")
        aboutMe = 0
        controls.enabled = false
        controls.maxDistance = 2500
        await gsap.to(camera.position, { duration: 3, y: 0, z: 125, x: 0 })
        controls.enabled = true
    }, false)

    window.addEventListener('resize', ev => {
        const width = window.innerWidth
        const height = window.innerHeight

        renderer.setSize(width, height)
        camera.aspect = width / height
        camera.updateProjectionMatrix()

    })

    // if it's mobile
    if (!(typeof screen.orientation !== 'undefined')) {
        window.addEventListener('click', (event) => {
            pointer.x = (event.clientX / window.innerWidth) * 2 - 1
            pointer.y = - (event.clientY / window.innerHeight) * 2 + 1
            window.clicked = 1
            setTimeout(() => {
                window.clicked = 0
            }, 100)
        })
    } else {
        window.addEventListener('mousedown', (event) => {
            window.clickOne = 1
            console.log(window.clickOne)
            console.log("2", window.clickTwo)
        })

        window.addEventListener('mouseup', (event) => {
            window.clickOne = 0
            if (!clickTwo.length)
                return

            pointer.x = (event.clientX / window.innerWidth) * 2 - 1
            pointer.y = - (event.clientY / window.innerHeight) * 2 + 1
            window.clicked = 1
            setTimeout(() => {
                window.clicked = 0
            }, 100)
        })
    }

    window.addEventListener('pointermove', (event) => {
        pointer.x = (event.clientX / window.innerWidth) * 2 - 1
        pointer.y = - (event.clientY / window.innerHeight) * 2 + 1
    })

    let waitLoad = 0
    removeLoader()
    setTimeout(() => {
        if (waitLoad) {
            removeLoader()
        } else
            waitLoad = 1
    }, 1000 * 3)
    window.addEventListener("load", function (event) {
        if (waitLoad) {
            removeLoader()
        } else
            waitLoad = 1
    })

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

function removeLoader() {
    if (!cinematicOn)
        document.getElementById("goHome").classList.remove("hidden")
    document.getElementById("parentLoader").classList.add("hidden")
    document.getElementById("bg").classList.remove("hidden")
    setTimeout(() => {
        if (!localStorage.getItem('cinematicated')) {
            localStorage.setItem('cinematicated', 1)
            cinematic()
        }
    }, 2000)
}