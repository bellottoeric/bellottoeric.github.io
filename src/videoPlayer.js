export function setupVideoPlayer() {
    window.player = undefined
    const tag = document.createElement('script');
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    tag.src = "https://www.youtube.com/iframe_api";
    tag.onload = function () {
        setTimeout(() => {
            window.player = new YT.Player('player', {
                height: '390',
                width: '640',
                videoId: 'Qt0-9mO-ZXY',
                playerVars: {
                    'playsinline': 1
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }, 1000)
    };

    let done = false;
    function onPlayerStateChange(event) {
        //window.player.playVideo();
        /*if (event.data == YT.PlayerState.PLAYING && !done) {
            setTimeout(stopVideo, 1000);
            setTimeout(stopVideo, 2000);
            setTimeout(stopVideo, 5000);
            done = true;
        }*/
    }
    function onPlayerReady(event) {
        console.log("Player ready")
        //event.target.playVideo();
        window.player.playVideo();
    }
    function stopVideo() {
        window.player.playVideo();
    }
}