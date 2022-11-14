const x = document.getElementById("myAudio")

export function setupVideoPlayer() {
    function ttt() {
        console.log("click")
    }
    let soundOn = setInterval(() => {
        x.play().then(() => {
            clearInterval(soundOn)
            console.log("OK")
            x.volume = 0.2;
        }).catch((e) => {
            //console.log("--->", e)
        })
    }, 1000)
}
