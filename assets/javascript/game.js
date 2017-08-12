//Create an array that lists all of the options. (26 letters of the alphabet, 0-25 array length)
var chosenLetter = ["a ", "b", "c", "d", "e", "f", "g", "h", "i,", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Creating variables to hold wins, losses, and number of guesses.
var wins = 0;
var losses = 0;
var guesses = 9;
var soFar = [];
//Computer randomly chooses a choice from the array options
var computerChoice = chosenLetter[Math.floor(Math.random() * chosenLetter.length)];
	console.log(computerChoice);

//This happens when a user presses a key
document.onkeyup = function(event) {
	//Determines which key was pressed
	var userGuess = event.key.toLowerCase();
	console.log(userGuess);
	//Makes sure that the userGuess is a letter key.
	if (userGuess == "a" || userGuess == "b" || userGuess == "c" || userGuess == "d" || userGuess == "e" || userGuess == "f" || userGuess == "g" || userGuess == "h" || userGuess == "i" || userGuess == "j" || userGuess == "k" || userGuess == "l" || userGuess == "m" || userGuess == "n" || userGuess == "o" || userGuess == "p" || userGuess == "q" || userGuess == "r" || userGuess == "s" || userGuess == "t" || userGuess == "u" || userGuess == "v" || userGuess == "w" || userGuess == "x" || userGuess == "y" || userGuess == "z") {
		//The number of guesses decreases with each incorrect guess.
		guesses--;
		//Takes the userGuess and puts it in an array so the user can keep track of choices.
		soFar.push(userGuess);
		console.log(soFar);

		//If the user chooses the computer's letter, wins increase, guesses are reset.
		if (userGuess === computerChoice) {
			wins++;
			guesses = 9;
			soFar.length = 0;
			alert("You win!");
			console.log("wins");
			//computer picks new letter
		}
		//If the user does not pick the computer's letter, losses increases. 
		if (userGuess != computerChoice) {
			//losses++;
			console.log("losses");
		}
		if (guesses == 0) {
			soFar.length = 0;
			losses++;
			guesses = 9;
			console.log(computerChoice);
			//computer picks a new letter
		}

		var html = 
			"<h1>The Psychic Game</h1>" +
			"<p>Guess what letter I'm thinking of...</p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + guesses + "</p>" +
			"<p>Your Guesses So Far: " +  soFar + "</p>";

		document.querySelector("#game").innerHTML = html;


	//If the user guesses other than a letter, alert will appear.
	} else {
		alert("Please make sure you chose a letter.")
	};
};