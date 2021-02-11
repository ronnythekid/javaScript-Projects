'use strict';

//Create a function to refactoring some code

const hiddePopUp = () => {
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
};

//Detect when the user has made a click on any button.

document.querySelectorAll('.show-modal').forEach(modal => {
  modal.onclick = function () {
    const val = document.querySelectorAll('.hidden');
    val.forEach(element => {
      if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
      }
    });
  };
});

//Get rid of the pop up when the user clicks on the close icon
document.querySelector('.close-modal').onclick = () => hiddePopUp();

//Get rid of the pop up when the user clicks on the overlay.
document.querySelector('.overlay').onclick = () => hiddePopUp();

//Handle when the pop up is shown and the user press the ESC key in order to close the pop up
document.onkeyup = function (e) {
  if (e.key === 'Escape') {
    if (!document.querySelector('.modal').classList.contains('hidden')) {
      hiddePopUp();
    }
  }
};
