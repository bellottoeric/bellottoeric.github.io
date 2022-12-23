import { setupVideoPlayer } from './videoPlayer'

export function utils(pointer, camera, renderer, controls) {
    document.getElementById("goHelp").addEventListener('click', async function (event) {
        Swal.fire(
            document.location.href.includes('/en') ? 'Tips' : 'Astuces',
            document.location.href.includes('/en') ? 'Click on the moon to return to the menu.<br>All elements are clickable' : 'Cliquez sur la lune pour revenir au menu.<br>Tous les éléments sont cliquables.',
            'info'
        )
    }, false)
    document.getElementById("goHome").addEventListener('click', async function (event) {
        window.selectedPlanet = ""
        document.getElementById("presentation").classList.add("hidden")
        document.getElementById("parcours").classList.add("hidden")
        document.getElementById("projects").classList.add("hidden")
        document.getElementById("me").classList.add("hidden")
        document.getElementById("aboutMe").classList.add("hidden")
        aboutMe = 0
        controls.enabled = false
        controls.maxDistance = 2499
        await gsap.to(camera.position, { duration: 3, y: 0, z: 150, x: 0 })
        controls.enabled = true
    }, false)

    window.addEventListener('resize', ev => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
            renderer.setSize(window.innerWidth / 4, window.innerHeight / 4)
        else
            renderer.setSize(window.innerWidth, window.innerHeight)
        camera.updateProjectionMatrix()
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

    // if it's Mobile
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.addEventListener('click', (event) => {
            pointer.x = (event.clientX / window.innerWidth) * 2 - 1
            pointer.y = - (event.clientY / window.innerHeight) * 2 + 1
            window.clicked = 1
            window.clickOne = 1
            window.clickTwo = 1
            setTimeout(() => {
                window.clicked = 0
                window.clickOne = 0
                window.clickTwo = 0
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
    })

    let loaded = 0
    setTimeout(() => {
        unfade(document.getElementById("launch3D"))
        Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('click', () => { document.getElementById("launch3D").click() })
            }
        }).fire({
            icon: 'success',
            title: document.location.href.includes('/en') ? "3D Experience is ready !" : "L'expérience en 3D est prête !"
        })
    }, 1000 * 8)
    setTimeout(() => {
        // document.getElementById("launch3D").click()
    }, 1000)

    document.getElementById("launch3D").addEventListener('click', async function (event) {
        if (document.getElementsByClassName("swal2-top-end") && document.getElementsByClassName("swal2-top-end")[0])
            fade(document.getElementsByClassName("swal2-top-end")[0])
        fade(document.getElementById("divCV"))
        document.getElementById("launch3D").style.display = "none"
        let saveMaxWidth = window.innerWidth
        let saveMaxHeight = window.innerHeight

        document.getElementsByTagName("h2")[0].style.opacity = '0'
        let stop = saveMaxHeight + saveMaxWidth
        let waitDuringCircleLoader = 10
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            waitDuringCircleLoader = 1.5
            stop = stop / 3
        }
        for (let i = 0; i < stop; i = i + waitDuringCircleLoader) {
            if ((i > saveMaxWidth && i > saveMaxHeight) || loaded)
                continue
            document.getElementById("inLoader").style.height = i + "px"
            document.getElementById("loader").style.height = i + "px"
            document.getElementById("inLoader").style.width = i + "px"
            document.getElementById("loader").style.width = i + "px"
            await (new Promise(res => setTimeout(res, 10)))
        }
        animate()
        removeLoader()
        gsap.to(camera.position, { duration: 1.5, z: 150, y: 0 })
    }, false)

    // PROJECTS
    document.getElementById("buttonProjects").addEventListener('click', function (event) {
        toggleProjects()
    }, false)

    // ABOUT ME
    const buttons = document.querySelectorAll(".card-buttons button")
    const sections = document.querySelectorAll(".card-section")
    const card = document.querySelector(".card")

    const handleButtonClick = (e) => {
        const targetSection = e.target.getAttribute("data-section");
        const section = document.querySelector(targetSection)
        targetSection !== "#about"
            ? card.classList.add("is-active")
            : card.classList.remove("is-active")
        card.setAttribute("data-state", targetSection)
        sections.forEach((s) => s.classList.remove("is-active"))
        buttons.forEach((b) => b.classList.remove("is-active"))
        e.target.classList.add("is-active")
        section.classList.add("is-active")
    }

    buttons.forEach((btn) => {
        btn.addEventListener("click", handleButtonClick)
    })
}

window.toggleProjects = function () {
    if (document.getElementById("buttonProjects").classList.toString().includes('active'))
        document.getElementById("buttonProjects").classList.remove("active")
    else
        document.getElementById("buttonProjects").classList.add("active")

    if (document.getElementById("titleProjects").classList.toString().includes('active'))
        document.getElementById("titleProjects").classList.remove("active")
    else
        document.getElementById("titleProjects").classList.add("active")

    if (document.getElementById("navProjects").classList.toString().includes('active'))
        document.getElementById("navProjects").classList.remove("active")
    else
        document.getElementById("navProjects").classList.add("active")
}

function removeLoader() {
    setupVideoPlayer()
    document.getElementById("lineLoader").style.display = "none"
    document.getElementById("lineLoader").classList.add("cinematicLineLoader")
    document.getElementById("lineLoader").classList.remove("lineLoader")
    document.getElementById("lineLoader").style.backgroundColor = "black";


    if (!cinematicOn) {
        document.getElementById("goHome").classList.remove("hidden")
        document.getElementById("goHelp").classList.remove("hidden")
    }
    document.getElementById("parentLoader").classList.add("hidden")
    document.getElementById("bg").classList.remove("hidden")
    if (!localStorage.getItem('cinematicated')) {
        localStorage.setItem('cinematicated', 1)
        cinematic()
    }

    // INACTIVITY
    inactivity = Math.floor((new Date()).getTime() / 1000) + 10
    setTimeout(() => {
        document.addEventListener('mousedown', viewEvent)
        document.addEventListener('mousemove', viewEvent)
        document.addEventListener('touchstart', viewEvent)
        document.addEventListener('scroll', viewEvent)
        document.addEventListener('DOMMouseScroll', viewEvent)
        document.addEventListener('mousewheel', viewEvent)
        document.addEventListener('keydown', viewEvent)
    }, 1000 * 10)

    function viewEvent(evt) {
        inactivity = Math.floor((new Date()).getTime() / 1000) + 10
    }
    setInterval(() => {
        if (Math.floor((new Date()).getTime() / 1000) - inactivity > 10)
            inactivity = Math.floor((new Date()).getTime() / 1000) - inactivity > 5
    }, 1000)
}

function fade(element) {
    let op = 1
    const timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer)
            element.style.display = 'none'
        }
        element.style.opacity = op
        element.style.filter = 'alpha(opacity=' + op * 100 + ")"
        op -= op * 0.1
    }, 50)
}

function unfade(element) {
    element.style.display = "block"
    let op = 0.1
    element.style.display = 'block'
    const timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer)
        }
        element.style.opacity = op
        element.style.filter = 'alpha(opacity=' + op * 100 + ")"
        op += op * 0.03
    }, 10)
}

/* DOWNLOAD CV BUTTON */
document.addEventListener("DOMContentLoaded", function () {
    document.getElementsByTagName("audio")[0].volume = 0.1
    document.getElementsByTagName("audio")[1].volume = 0.1
    this.addEventListener("click", e => {
        let tar = e.target
        if (tar.hasAttribute("data-dl")) {
            const element = document.createElement('a')
            if (document.location.href.includes('/en'))
                element.setAttribute('href', "/CV/EN.pdf")
            else
                element.setAttribute('href', "/CV/FR.pdf")
            element.setAttribute('download', "CV - Bellotto Eric - FULLSTACK JS DEVELOPER.pdf")

            element.style.display = 'none'
            document.body.appendChild(element)
            element.click()
            document.body.removeChild(element)
            let dlClass = "dl-working"
            if (!tar.classList.contains(dlClass)) {
                let lastSpan = tar.querySelector("span:last-child"),
                    lastSpanText = lastSpan.textContent,
                    timeout = getMSFromProperty("--dur", ":root")

                tar.classList.add(dlClass)
                lastSpan.textContent = "Downloading..."
                tar.disabled = true

                setTimeout(() => {
                    lastSpan.textContent = "Completed!"
                }, timeout * 0.9)

                setTimeout(() => {
                    tar.classList.remove(dlClass)
                    lastSpan.textContent = lastSpanText
                    tar.disabled = false
                }, timeout + 1e3)
            }
        }
    })
})

function getMSFromProperty(property, selector) {
    let cs = window.getComputedStyle(document.querySelector(selector)),
        transDur = cs.getPropertyValue(property),
        msLabelPos = transDur.indexOf("ms"),
        sLabelPos = transDur.indexOf("s")

    if (msLabelPos > -1)
        return transDur.substr(0, msLabelPos)
    else if (sLabelPos > -1)
        return transDur.substr(0, sLabelPos) * 1e3
}

export function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min
}
