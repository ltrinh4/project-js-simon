var clicks = 0;

let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function() {
 _playMusic();
clickIncrement();
randomGenerator();
});

let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('click', function() {
  _playMusic();
 clickIncrement();
  randomGenerator();
});

let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('click', function() {
  _playMusic();
 clickIncrement();
  randomGenerator();

});

let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('click', function() {
  _playMusic();
  clickIncrement();
  randomGenerator();
});

let playButton = document.querySelector('#play');
playButton.addEventListener('click', function() {
randomGenerator();

});


function _playMusic(){
  var myMusic = document.getElementById('music');
  myMusic.play();
}

function clickIncrement(){
 clicks += 1;
 document.getElementById('clicks').innerHTML = clicks;
}
function randomGenerator(){
	var randomNumber = Math.floor(Math.random() * 4) + 1;
	console.log(randomNumber);
	
	switch(randomNumber){
		case 1:
		document.getElementById('play').innerHTML = 'Click Red';
		break;
		
		case 2:
		document.getElementById('play').innerHTML = 'Click 	Blue';
		break;
		
		case 3:
		document.getElementById('play').innerHTML = 'Click Yellow';
		break;
		
		case 4:
		document.getElementById('play').innerHTML = 'Click Green';
		break;
			
	}
}


