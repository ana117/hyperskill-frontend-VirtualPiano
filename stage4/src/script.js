const validKeys = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ'];
function playSound(key) {
    let audio = new Audio(`media/${key}.mp3`);
    audio.play();
}

document.addEventListener('keypress', function(e) {
    if (validKeys.includes(e.code)) {
        console.log(`The '${e.code.substring(3)}' key is pressed`);
        playSound(e.code.substring(3));

    }  else {
        console.log('Invalid key press!');
    }
});