var randomNumber1 =  Math.floor(Math.random()*6 +1);
var randomNumber2 =  Math.floor(Math.random()*6 +1);
var imgTag = document.getElementsByTagName("img");
var h1 = document.querySelector('h1');
var p1 = prompt("Player 1: Enter your name");
var p2 = prompt("Player 2: Enter your name");
var pNames = document.getElementsByTagName("p");

pNames[0].innerHTML = p1;
pNames[1].innerHTML = p2;

//The random number between 1-6, so we don't need index zero or we could change the images name but that is easier.
var pics = [{ src: "" }, { src: 'images/dice1.png' },
{ src: 'images/dice2.png' },
{ src: 'images/dice3.png' },
{ src: 'images/dice4.png' },
{ src: 'images/dice5.png' },
{ src: 'images/dice6.png' }];


function setImages() {
    // Assign dice image based on the "random" number
    imgTag[0].setAttribute('src', pics[randomNumber1].src);
    imgTag[1].setAttribute('src', pics[randomNumber2].src);
    dice();
}

// Change the h1 to the higher number between Player 1 and Player 2 or if it a draw

function dice() {


    if (randomNumber1 > randomNumber2) {

        h1.innerHTML = p1 + ' wins '
    }
    else if (randomNumber1 < randomNumber2) {
        h1.innerHTML = p2 + ' wins'
    }
    else {
        h1.innerHTML = "The game is a draw refresh to play again"
    }
}


