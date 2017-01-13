/**
 * Created by Adrian2 on 1/13/2017.
 */
var Diaporama = require('diaporama');

var slideshow = require('./diaporama_simplified.json');
var transitions = require('glsl-transitions');
slideshow.transitions=transitions;

var audio = document.getElementById('audio');

window.diaporama = null;
var div = document.getElementById("diaporama");

var diaporama = Diaporama(div, {
    data: slideshow,
    autoplay: false,
    loop: false,
    width: 800,
    height: 600
});

document.body.addEventListener("keydown", function (e) {
    switch (e.which) {
        case 38: // Up
            diaporama.playbackRate *= 1.5;
            break;
        case 40: // Down
            diaporama.playbackRate /= 1.5;
            break;
        case 37: // Left
            diaporama.prev();
            break;
        case 39: // Right
            diaporama.next();
            break;
        case 32: // Space
            diaporama.paused = !diaporama.paused;
            if (!audio.paused) {
                audio.pause();
            } else {
                audio.play();
            }
            break;
    }
});
window.diaporama = diaporama;

window.diaporama.on('ended', function () {
    audio.pause();
});

window.diaporama.on('transition', replayAudio);
window.diaporama.on('transitionEnd', replayAudio);
window.diaporama.on('slide', replayAudio);
window.diaporama.on('slideEnd', replayAudio);

function replayAudio() {
    if (diaporama.paused) {
        return;
    }
    if (audio.paused) {
        audio.play();
    }
}
