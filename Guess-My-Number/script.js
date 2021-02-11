'use strict';

//Generate a random Number between 1 and 10
//Math.trunc() remove ant decimal digit that is along int part.
let randomNum = Math.trunc(Math.random() * 20) + 1;
console.log(randomNum);

//Define a variable to catch the score
let val = Number(document.querySelector('.score').innerHTML);

//Create a boolean to detect if the user has guessed the number.
let guessNumber = false;

//Do something just when the user enters a value.
document.querySelector('.guess').addEventListener('keyup', event => {
  console.log(document.querySelector('.guess').value);

  document.querySelector('.check').onclick = function userValue() {
    //Get  the number that the user has written down
    const num = Number(document.querySelector('.guess').value);
    console.log(typeof num);

    if (num !== '' && !guessNumber) {
      //When the guess num es out of range or the score(val) is zero
      if (num < 1 || num > 20 || val === 0) {
        //   alert('Wrong number. Please enter a number Between 1 and 20');
        document.querySelector('body').style = 'background-color: red;';
        //If the score is 0 then the game is over.
        if (val === 0) {
          document.querySelector('.message').innerHTML = 'Game Over';
          document.querySelector('.guess').readOnly = true;
        } else {
          document.querySelector('.message').innerHTML =
            'Wrong,enter a valid number';
        }
        document.querySelector('.check').disabled = true;
      } else {
        if (num !== randomNum) {
          document.querySelector('.message').innerHTML =
            num > randomNum ? 'Too high' : 'Too low';
          val--;
          document.querySelector('.score').innerHTML = `${val}`;
        } else {
          //We will enter here when the use will be able to guess the number
          document.querySelector('.number').innerHTML = `${randomNum}`;
          document.querySelector('.message').innerHTML = 'You guessed it!';
          //Another way of doing what's below
          //document.querySelector('body').style.backgroundColor: #60b347';
          document.querySelector('body').style = 'background-color: #60b347;';

          //Make the width of the random number a bit widther
          document.querySelector('.number').style.width = '30rem';
          let maxVal = Number(document.querySelector('.highscore').innerHTML);
          if (maxVal < val) {
            maxVal = val;
            document.querySelector('.highscore').innerHTML = `${maxVal}`;
          }
          guessNumber = true;
          changeBehaivour(true);
        }
      }
    }
  };
});

//Function to allow or dont allow the user to insert a number in the input field
//or try to send a value using the guess button

function changeBehaivour(bool) {
  document.querySelector('.check').disabled = bool;
  document.querySelector('.guess').readOnly = bool;
}

//Handle when the user pressed the again button

document.querySelector('.again').onclick = function () {
  document.querySelector('body').style = 'background-color: #222;';
  document.querySelector('.number').innerHTML = '?';
  //Make the width of the random number go back to the begining
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').innerHTML = 'Start guessing...';
  document.querySelector('.guess').value = '';
  randomNum = Math.round(Math.random() * 20) + 1;
  console.log(randomNum);
  val = 20;
  document.querySelector('.score').innerHTML = `${val}`;
  guessNumber = false;
  changeBehaivour(false);
};
