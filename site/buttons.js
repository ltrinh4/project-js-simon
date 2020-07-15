var clicks = 0;

let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function() {
  var myMusic = document.getElementById('music');
  myMusic.play();
clicks += 1;
document.getElementById('clicks').innerHTML = clicks;
if (clicks === 1){
 document.getElementById('play').innerHTML = 'Click Blue';
} else {
 alert("You Suck!");
 location.reload();
}
});

let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('click', function() {
  var myMusic = document.getElementById('music');
  myMusic.play();
  clicks += 1;
  document.getElementById('clicks').innerHTML = clicks;
   if (clicks === 3){
 document.getElementById('play').innerHTML = 'Click Yellow';
} else {
 alert("You Suck!");
 location.reload();
}

});

let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('click', function() {
  var myMusic = document.getElementById('music');
  myMusic.play();
  clicks += 1;
  document.getElementById('clicks').innerHTML = clicks;
  if (clicks === 4){
 document.getElementById('play').innerHTML = 'The End';
 alert('The End!');
 location.reload();
} else {
 alert("You Suck!");
location.reload();
}

});

let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('click', function() {
  var myMusic = document.getElementById('music');
  myMusic.play();
  clicks += 1;
  document.getElementById('clicks').innerHTML = clicks;
  if (clicks === 2){
 document.getElementById('play').innerHTML = 'Click Red';
} else {
 alert("You Suck!");
 location.reload();
}
});

let playButton = document.querySelector('#play');
playButton.addEventListener('click', function() {
    document.getElementById('play').innerHTML = 'Click Green';

});
