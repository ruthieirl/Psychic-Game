//Set up an array with all 26 letters in it.
var chosenLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Set up variables to hold wins, losses, and guesses.
var wins = 0;
var losses = 0;
var guesses = 9;
//Set up an empty array to keep track of guesses.
var soFar = [];
//Set up variable to hold user guess.
var userGuess = null;
//Computer will choose a random letter from the array.
var computerGuess = chosenLetter[Math.floor(Math.random() * chosenLetter.length)];

//The key press will set off function
document.onkeyup = function(event) {

	//makes sure user picks a letter
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	if (soFar.indexOf(userGuess) < 0 && chosenLetter.indexOf(userGuess) >= 0) {
		soFar[soFar.length]=userGuess;
		//decrease guesses by 1
		guesses--;
	}
	//if both guesses match, wins increase, soFar empties, computer chooses new letter
	if (computerGuess == userGuess) {
		wins++;
		alert("You won!");
		guesses = 9;
		soFar.length = 0;
		computerGuess = chosenLetter[Math.floor(Math.random() * chosenLetter.length)];
	}
	//if user goes through all 9 guesses and does not match computer's choice, losses increas, soFar empties, and computer chooses new letter
	if (guesses == 0) {
		losses++;
		alert("You lost!");
		guesses = 9;
		soFar.length = 0;
		computerGuess = chosenLetter[Math.floor(Math.random() * chosenLetter.length)];
	}

	//HTML to replace the display on the page
	var html = "<h1>The Psychic Game</h1>" + 
				"<p>Guess what letter I\'m thinking of</p>" + 
				"<p>Wins: " + wins + "</p>" + 
				"<p>Losses: " + losses + "</p>" + 
				"<p>Guesses Left: " + guesses + "</p>" + 
				"<p>Your guesses so far: " + soFar + "</p>";

	//This will put the above HTML code into the #game div
	document.querySelector("#game").innerHTML = html;

};