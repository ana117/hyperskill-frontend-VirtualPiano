const validKeys = [
    'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ',
    'KeyW', 'KeyE', 'KeyT', 'KeyY', 'KeyU',
];

function playSound(key) {
    let audio = new Audio(`media/${key.substring(3)}.mp3`);
    audio.play();
}

function getKeyId(key) {
    return `${key.substring(0,3).toLowerCase()}-${key.substring(3).toLowerCase()}`;
}

document.addEventListener('keydown', function(e) {
    if (e.repeat) return;
    if (validKeys.includes(e.code)) {
        console.log(`The '${e.code}' key is pressed`);
        playSound(e.code);

        document.getElementById(getKeyId(e.code))
            .classList.add('pressed');

    }  else {
        console.log('Invalid key press!');
    }
});

document.addEventListener('keyup', function(e) {
    if (e.repeat) return;
    if (validKeys.includes(e.code)) {
        document.getElementById(getKeyId(e.code))
            .classList.remove('pressed');
    }
});
