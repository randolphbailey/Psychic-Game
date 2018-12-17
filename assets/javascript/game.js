//Init variables
var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var lettersSoFar = [];  //holds previous guesses in array
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var list = "";  //used to list out previous guesses as string

//Computer's Random Guess
var compGuess = getRndInteger(0, 25); //initialize computer's first guess on page load.
console.log(compGuess);
document.getElementById("compGuessHidden").innerText = alphabet[compGuess].toUpperCase();

//Functions
document.onkeydown = function gamePlay () {
    guessesRemaining--;
    document.getElementById("guessesLeft").innerHTML = guessesRemaining;  //decrese guesses remaining on page
       var playerKey = alphabet.indexOf(event.key);  //converts player key stroke into array index number, probably not necessary but improves readability
        if (guessesRemaining == 0) { //run this if player runs out of guesses
            lose();
        }
        else if (playerKey == compGuess) {  //run this if player guesses correctly
            win();
        }
        else {
            newTurn();
        }

    }
function getRndInteger (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function win () {
    wins++;
    document.getElementById("winCounter").innerHTML = wins;
    newGame();
}
function lose () {
    losses++;
    document.getElementById("lossCounter").innerHTML = losses;
    newGame();
}
function newTurn () {
    lettersSoFar.push(event.key);
    for (let i = 0; i < lettersSoFar.length; i++) {  //print all current array elements to string
        list = list.concat(lettersSoFar[i], " ");
    }
    console.log(list);
    document.getElementById("guesses").innerHTML = list;
    list = "";  //rest list for next loop
}
function newGame () {  //reset values and HTML for new game
    list = "";
    compGuess = getRndInteger(0, 25);
    guessesRemaining = 9;
    lettersSoFar = [];
    document.getElementById("guesses").innerHTML = list;
    document.getElementById("guessesLeft").innerHTML = guessesRemaining;
    document.getElementById("compGuessHidden").innerText = alphabet[compGuess].toUpperCase();
    console.log(compGuess);
}

function reset () {
    var wins = 0;
    var losses = 0;
    document.getElementById("winCounter").innerHTML = wins;
    document.getElementById("lossCounter").innerHTML = losses;
}
