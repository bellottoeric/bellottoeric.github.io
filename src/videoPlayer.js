const music = document.getElementById("music")

export function setupVideoPlayer() {
    let soundOn = setInterval(() => {
        music.volume = 0.1
        music.play().then(() => {
            clearInterval(soundOn)
        }).catch((e) => {
        })
    }, 1000)
}
