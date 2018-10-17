// Letter.js contains the Letter constructor
var Letter = require("./Letter.js");

// Constructor function for creating Word objects
var Word = function(){

    // Array that contains the letters for the current word
    this.letters = [];

    // Creates the display word with correct guesses and underscores
    this.catWord = function(){
        var displayWord = "";
        for (var i = 0; i < this.letters.length - 1; i++){
            displayWord = displayWord + this.letters[i].guessStatus() + " ";
        }
        displayWord = displayWord + this.letters[this.letters.length - 1].guessStatus();
        return displayWord;
    };

    // Determines whether the current letter matches any letter in the current word
    this.checkWord = function(currentLetter) {
        for (var i = 0; i < this.letters.length; i++){
            this.letters[i].checkLetter(currentLetter);
        }
    };

    // Stores the current word in the letters array
    this.storeWord = function(currentWord) {
        this.letters = [];
        for (var i = 0; i < currentWord.length; i++){
            this.letters.push(new Letter(currentWord.charAt(i)));
            if (currentWord.charAt(i) == " ") {
                this.letters[i].guessed = true;
            }
        }
    };

    // Determines whether the entire word has been guessed correctly; are there any underscores in the display word
    this.getUsCount = function() {
        var usCount = 0;
        for (var i = 0; i < this.letters.length; i++){
            if (this.letters[i].guessed == false) {
                usCount++;
            }
        }
        return usCount;
    };
};

// Exports Word for the index file
module.exports = Word;