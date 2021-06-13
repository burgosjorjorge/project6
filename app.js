// Variables declaration

const keyboard = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const reset = document.querySelector('.btn__reset');
let missed = 0;

// Array

const phrases = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

// reset button event listerner

reset.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// random phrase function

function getRandomPhraseAsArray(arr) {
    let random = arr[Math.floor(Math.random() * arr.length)].split("");
    return random;
}

getRandomPhraseAsArray(phrases);