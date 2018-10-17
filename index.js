// inquirer is used to query the user
var inquirer = require("inquirer");

// Word.js contains the Word constructor
var Word = require("./Word.js");

// A new word is created and a random movied name is stored in it
var newWord = new Word();
var words = ["the godfather", "star wars", "indiana jones", "rocky", "the good the bad and the ugly", "jaws", "ghostbusters", "mission impossible", "back to the future", "superman"];
var randomNumber = Math.floor(Math.random() * 10);  
var currentWord = words[randomNumber];
newWord.storeWord(currentWord);

// count is used to count down the number of quesses remaianing
var count = 15;

// usCount is the number of underscores in the display word
var usCount = 0;

// gameOn is a boolean that gets set to false when usCount is determined to be 0
var gameOn = true;

// getLetter gets the requests, retrieves, and processes letters from the user
// It is called recursively
var getLetter = function() {

    // If statement to insure that code is only executed when user has guesses remaining and has not correctly completed the word
    if (count > 0 && gameOn) {
      
      // Prompt the user for a letter
      inquirer.prompt([
        {
          name: "currentLetter",
          message: "Guess a letter?"
        }
      ]).then(function(answers) {
        
        // Check to see if the user's letter matches any letters in the current word and displays an updated word to the uesr 
        newWord.checkWord(answers.currentLetter);
        console.log("\n" + newWord.catWord() + "\n");

        // subtract one from count to decrement our recursive loop by one and display the remaining guesses to the user
        count--;
        console.log(count + " guesses remaining\n");

        // Check to see if all of the letters have been correctly guessed and end game if so
        usCount = newWord.getUsCount();
        if (usCount == 0) {
            gameOn = false;
        }
        else {
            usCount = 0;
        }
        
        // Run the getLetter function again so as to either end the loop or ask the question again
        getLetter();
      });
      
    }
    else {

      // GAME OVER
      console.log("Game Over");
    }
  }

// Display the current word and call getLetter to run our code
console.log("\n" + newWord.catWord() + "\n");
getLetter();