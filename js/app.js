var blenderstate = 'off';
let blender = document.getElementById('blender');
let blendersound = document.getElementById('blender-sound');
let blenderbutton = document.getElementById('blender-button-sound');


function blenderControl () {
    if (blenderstate == 'off'){
        blenderstate = 'on';
        soundon();
        blender.classList.add('active');
    } else {
        blenderstate = 'off';
        soundon();
        blender.classList.remove('active');
    }
}

function soundon () {
    if (blendersound.paused){
        blenderbutton.play();
        blendersound.play();
    } else {
        blenderbutton.play();
        blendersound.pause();
        blendersound.currentTime = 0;
    }
}