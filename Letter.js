// Constructor function for creating Letter objects
var Letter = function(underLetter) {
    this.underLetter = underLetter;
    this.guessed = false;
  
    // Checks whether the letter has been guessed correctly
    this.guessStatus = function() {
      if (this.guessed) {
          return this.underLetter;
      }
      else {
          return "_";
      }
    };
     
    // Checks whether the current character matches the under character
    this.checkLetter = function(currentLetter) {
        if (this.underLetter == currentLetter) {
            this.guessed = true;
        }
    };
};

// Exports Letter for the Word file
module.exports = Letter;