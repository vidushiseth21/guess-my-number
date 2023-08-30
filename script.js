'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct answer!!';
document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '10';
document.querySelector('.guess').textContent = '23';
console.log(document.querySelector('.guess').textContent);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage('no number!!🚫');
    //  document.querySelector('.message').textContent = 'no number!!🚫';
  } else if (guess === secretNumber) {
    displayMessage('hURRAH!!!!!!!!!!!!correct✌');
    // document.querySelector('.message').textContent =
    // 'hURRAH!!!!!!!!!!!!correct✌';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#065757';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } /*else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } */ else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'too high!!!😒' : 'too low!!!😒');
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'too high!!!😒' : 'too low!!!😒';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost the game😢');
      document.querySelector('.message').textContent = 'you lost the game😢';
      document.querySelector('.score').textContent = 0;
    }
  }
}); /*else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low!!!😒';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game😢';
      document.querySelector('.score').textContent = 0;
    }
  }*/
//});
document.querySelector('.again').addEventListener('click', function () {
  const secretNumber = Math.trunc(Math.random() * 20) + 1;

  let score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start Guessing....');
  //document.querySelector('.message').textContent = 'Start Guessing....';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = ' ';
});
