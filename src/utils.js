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


    function clickFunc(e) {
        if (e.touches) {
            e.preventDefault(); //Try to comment it out: double triggers on short tap
            window.removeEventListener("touchend", clickFunc);
            console.log('tapped!');
        }
        //
        //Your code here
    }
    function touchFunc() {
        window.addEventListener("touchend", clickFunc);
    }
    window.onload = function () {
        window.addEventListener("touchstart", touchFunc);
    }


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
    });

    (async () => {
        let saveMaxWidth = window.innerWidth
        let saveMaxHeight = window.innerHeight
        for (let i = 250; i < saveMaxHeight + saveMaxWidth; i = i + 10) {
            if (i > saveMaxWidth && i > saveMaxHeight)
                continue
            document.getElementById("inLoader").style.height = i + "px"
            document.getElementById("loader").style.height = i + "px"
            document.getElementById("inLoader").style.width = i + "px"
            document.getElementById("loader").style.width = i + "px"
            await (new Promise(res => setTimeout(res, 1)))
        }
        removeLoader()
    })()

    let waitLoad = 0


    /*setTimeout(() => {
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
    })*/

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