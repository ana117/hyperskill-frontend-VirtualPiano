const validKeys = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ'];
document.addEventListener('keypress', function(e) {
    if (validKeys.includes(e.code)) {
        console.log(`The '${e.code.substring(3)}' key is pressed`);
    }  else {
        console.log('Invalid key press!');
    }
});
