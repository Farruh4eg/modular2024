let bulls = 0;
let cows = 0;
let number = '';

/** @type {HTMLFormElement} */
let form = document.getElementById('mainGame');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkGuess();
});

/** @type {HTMLInputElement} */
let hidden = document.getElementById('hidden');

/** @type {HTMLSpanElement} */
let bullsText = document.getElementById('bulls');
/** @type {HTMLSpanElement} */
let cowsText = document.getElementById('cows');

/** @type {HTMLInputElement} */
let userInput = document.getElementById('userInput');

/** @type {HTMLButtonElement} */
let newGameBtn = document.getElementById('newGame');
newGameBtn.addEventListener('click', () => {
  newGame();
});

function newGame() {
  bulls = 0;
  cows = 0;
  number = '';
  userInput.value = '';
  updateCounters();
  generateNumber();
}

function updateCounters() {
  bullsText.textContent = bulls;
  cowsText.textContent = cows;
  bulls = 0;
  cows = 0;
}

function generateNumber() {
  for (let i = 0; i < 6; ++i) {
    number += Math.floor(Math.random() * 10);
  }

  hidden.value = number;
}

function checkGuess() {
  for (let i = 0; i < 6; ++i) {
    if (number[i] === userInput.value[i]) {
      ++bulls;
    } else if (number.includes(userInput.value[i])) {
      ++cows;
    }
  }

  if (bulls === 6) {
    alert('Поздравляем. Вы отгадали число');
    newGame();
  }

  updateCounters();
}

newGame();