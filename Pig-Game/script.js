'use strict';

//Create Variables
let randomNum;
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#current--0');
const score1 = document.querySelector('#current--1');
const global0 = document.querySelector('#score--0');
const global1 = document.querySelector('#score--1');
const diceImg = document.querySelector('.dice');

//Starting conditions
let current0 = 0;
let current1 = 0;
let total0 = 0;
let total1 = 0;
let winner = false;
diceImg.classList.add('hidden');

//Functions

const switchPlayer0 = () => {
  player0.classList.remove('player--active');
  player1.classList.add('player--active');
  current0 = 0;
  score0.textContent = current0;
};

const switchPlayer1 = () => {
  player1.classList.remove('player--active');
  player0.classList.add('player--active');
  current1 = 0;
  score1.textContent = current1;
};

const disableButtons = bool => {
  document.querySelector('.btn--roll').disabled = bool;
  document.querySelector('.btn--hold').disabled = bool;
  winner = bool;
};

const updateCurrentValue = player => {
  if (player === 0) {
    current0 = Number(score0.textContent);
    current0 += randomNum;
    score0.textContent = current0;
    score0 = random;
  }
};

//Detect when the user has clicked on the roll dice button
//Generate random dice roll
//Display dice roll

document.querySelector('.btn--roll').addEventListener('click', function () {
  diceImg.classList.remove('hidden');
  randomNum = Math.trunc(Math.random() * 6 + 1);
  document.querySelector('.dice').src = `dice-${randomNum}.png`;

  if (randomNum === 1) {
    player0.classList.contains('player--active')
      ? switchPlayer0()
      : switchPlayer1();
  } else {
    if (player0.classList.contains('player--active')) {
      current0 = Number(score0.textContent);
      current0 += randomNum;
      score0.textContent = current0;
    } else {
      current1 = Number(score1.textContent);
      current1 += randomNum;
      score1.textContent = current1;
    }
  }
});

//User holds the score

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (player0.classList.contains('player--active')) {
    total0 = Number(global0.textContent);
    total0 += current0;
    global0.textContent = total0;
    current0 = 0;
    score0.textContent = current0;
    if (total0 >= 20) {
      player0.classList.add('player--winner');
      disableButtons(true);
    } else switchPlayer0();
  } else {
    total1 = Number(global1.textContent);
    total1 += current1;
    global1.textContent = total1;
    current1 = 0;
    score1.textContent = current1;
    if (total1 >= 20) {
      player1.classList.add('player--winner');
      disableButtons(true);
    } else switchPlayer1();
  }
});

//User Resets the game
document.querySelector('.btn--new').addEventListener('click', function () {
  score0.textContent = 0;
  score1.textContent = 0;
  global0.textContent = 0;
  global1.textContent = 0;
  diceImg.classList.add('hidden');
  if (winner)
    document
      .querySelector('.player--winner')
      .classList.remove('player--winner');

  if (!player0.classList.contains('player--active')) switchPlayer1();
  disableButtons(false);
});
