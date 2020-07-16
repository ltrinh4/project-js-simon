var clicks = 0;

let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function() {
  _playMusic();
  clickIncrement();
  if (color === 4) {
		randomGenerator();

  } else {
    alert('You suck! Game over!');
    location.reload();
  }
});

let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('click', function() {
  _playMusic();
  clickIncrement();
  if (color === 1) {
    randomGenerator();
  } else {
    alert('You suck! Game over!');
    location.reload();
  }
});

let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('click', function() {
  _playMusic();
  clickIncrement();
  if (color === 3) {
    randomGenerator();
  } else {
    alert('You suck! Game over!');
    location.reload();
  }
});

let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('click', function() {
  _playMusic();
  clickIncrement();
  if (color === 2) {
    randomGenerator();
  } else {
    alert('You suck! Game over!');
    location.reload();
  }
});

let playButton = document.querySelector('#play');
playButton.addEventListener('click', function() {
  randomGenerator();
});

function _playMusic() {
  var myMusic = document.getElementById('music');
  myMusic.play();
}

function clickIncrement() {
  clicks += 1;
  document.getElementById('clicks').innerHTML = clicks;
}
var color = 0;
function randomGenerator() {
  var randomNumber = Math.floor(Math.random() * 4) + 1; // generate random number between 1 and 4 inclusive

  switch (randomNumber) {
    case 1:
      document.getElementById('play').innerHTML = 'Click Red';
      color = 1;
      break;

    case 2:
      document.getElementById('play').innerHTML = 'Click Blue';
      color = 2;
      break;

    case 3:
      document.getElementById('play').innerHTML = 'Click Yellow';
      color = 3;
      break;

    case 4:
      document.getElementById('play').innerHTML = 'Click Green';
      color = 4;
      break;
  }
}
// setTimeout(function(){
//	let playButton = document.querySelector('#play');
//	playButton.style.opacity = 0;
// }, 3000);
