export function setBackground(scene, backgroundImageWidth, backgroundImageHeight) {
    let windowSize = function (withScrollBar) {
        let wid = 0
        let hei = 0
        if (typeof window.innerWidth != "undefined") {
            wid = window.innerWidth
            hei = window.innerHeight
        }
        else {
            if (document.documentElement.clientWidth == 0) {
                wid = document.body.clientWidth
                hei = document.body.clientHeight
            }
            else {
                wid = document.documentElement.clientWidth
                hei = document.documentElement.clientHeight
            }
        }
        return { width: wid - (withScrollBar ? (wid - document.body.offsetWidth + 1) : 0), height: hei }
    }

    if (scene.background) {
        let size = windowSize(true)
        let factor = (backgroundImageWidth / backgroundImageHeight) / (size.width / size.height)

        scene.background.offset.x = factor > 1 ? (1 - 1 / factor) / 2 : 0
        scene.background.offset.y = factor > 1 ? 0 : (1 - factor) / 2

        scene.background.repeat.x = factor > 1 ? 1 / factor : 1
        scene.background.repeat.y = factor > 1 ? 1 : factor
    }
}