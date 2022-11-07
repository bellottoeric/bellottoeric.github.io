export function utils(pointer, camera, renderer, scene, scene2, controls) {
    document.getElementById("goHome").addEventListener('click', async function (event) {
        window.selectedPlanet = ""
        document.getElementById("presentation").classList.add("hidden")
        document.getElementById("parcours").classList.add("hidden")
        document.getElementById("projects").classList.add("hidden")
        document.getElementById("me").classList.add("hidden")
        document.getElementById("aboutMe").classList.add("hidden")
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

    let saveMaxWidth = window.innerWidth
    let saveMaxHeight = window.innerHeight

    let ready = 0
    let loaded = 0
    window.addEventListener("load", async function (event) {
        animate()
        await (new Promise(res => setTimeout(res, 500)))
        ready = 1
    });
    //removeLoader();

    (async () => {
        for (let i = 250; i < (saveMaxHeight + saveMaxWidth); i = i + 10) {
            if ((i > saveMaxWidth && i > saveMaxHeight) || loaded)
                continue
            document.getElementById("inLoader").style.height = i + "px"
            document.getElementById("loader").style.height = i + "px"
            document.getElementById("inLoader").style.width = i + "px"
            document.getElementById("loader").style.width = i + "px"
            await (new Promise(res => setTimeout(res, 1)))
        }
        loaded = 1
    })();
    let checkReadyloaded = setInterval(() => {
        if (ready && loaded) {
            console.log("Launch loader")
            removeLoader()
            clearInterval(checkReadyloaded)
        }
    }, 100)

    // PROJECTS
    document.getElementById("buttonProjects").addEventListener('click', function (event) {
        toggleProjects()
    }, false)

    // ABOUT ME
    const buttons = document.querySelectorAll(".card-buttons button");
    const sections = document.querySelectorAll(".card-section");
    const card = document.querySelector(".card");

    const handleButtonClick = (e) => {
        const targetSection = e.target.getAttribute("data-section");
        const section = document.querySelector(targetSection);
        targetSection !== "#about"
            ? card.classList.add("is-active")
            : card.classList.remove("is-active");
        card.setAttribute("data-state", targetSection);
        sections.forEach((s) => s.classList.remove("is-active"));
        buttons.forEach((b) => b.classList.remove("is-active"));
        e.target.classList.add("is-active");
        section.classList.add("is-active");
    };

    buttons.forEach((btn) => {
        btn.addEventListener("click", handleButtonClick);
    });
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
    if (!cinematicOn)
        document.getElementById("goHome").classList.remove("hidden")
    document.getElementById("parentLoader").classList.add("hidden")
    document.getElementById("bg").classList.remove("hidden")
    if (!localStorage.getItem('cinematicated')) {
        localStorage.setItem('cinematicated', 1)
        cinematic()
    }
}

