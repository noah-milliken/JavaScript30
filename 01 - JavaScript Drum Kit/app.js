window.addEventListener('keydown', function (KeyboardEvent) {
    //console.log(KeyboardEvent.code)

    const audio = document.querySelector(`audio[data-key=${KeyboardEvent.code}]`)
    const key = document.querySelector(`.key[data-key=${KeyboardEvent.code}]`)
    if (!audio) return;
    audio.currentTime = 0
    audio.play()
    key.classList.add('playing')
});
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))