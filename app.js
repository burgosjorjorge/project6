// Variables declaration

const keyboard = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const reset = document.querySelector('.btn__reset');
const tries = document.querySelector('.tries');
const key = document.querySelector('.keyrow');

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

// add to display function

function addPhaseToDisplay(arr) {
     for (let i = 0; i < arr.length; i ++ ) {
        let list = document.createElement('li');
         list.textContent = arr[i];
         phrase.appendChild(list);
         if (list) {
             list.className = 'letter';
         } else {
             list.className = 'space';
         }
         
     }
     
}

const phaseArray = getRandomPhraseAsArray(phrases);
addPhaseToDisplay(phaseArray);

function checkLetter(myKey) {
    const checkList = list;
    let value = '';
    for (let i = 0; i < list.length; i ++) {
        if(myKey === value) {
            list.className = 'show';
            value.textContent = checkList;
        }
    }
    return value;
}

keyboard.addEventListener('click', (e) => {
    if (key.disable) {
        key.className = 'chosen';
    }else {
        key.className = '';
    }
});