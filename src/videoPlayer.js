const music = document.getElementById("music")

export function setupVideoPlayer() {
    if (window.location.href.includes('localhost'))
        return
    let soundOn = setInterval(() => {
        music.volume = 0.1
        music.play().then(() => {
            clearInterval(soundOn)
        }).catch((e) => {
        })
    }, 1000)
}
