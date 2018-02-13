
var hangman = {
    // initializing all properties
    chosenWord: "",
    poolOfWords: ["map", "pirate", "treasure", "parrot", "ship", "captain", "crew", "mutiny", "sail"],
    gameRunning: false,
    wins: 0,
    losses: 0,
    correctCharacters: [],
    badGuesses: [],
    livesRemaining: 10,
    wordBeingGuessedElement: document.getElementById('wordBeingGuessed'),
    //initializing all my methods
    /* randomly chooses a word from my array of words*/
    chooseWord: function () {
        this.chosenWord = this.poolOfWords[Math.floor(Math.random() * this.poolOfWords.length)];
    },




    createCorrectCharacters: function () {
        for (var i = 0; i < this.chosenWord.length; i++) {
            this.correctCharacters.push(false);
        }
    },

    /* logic for guessing letters.*/
    guessLetter: function (letter) {
        if (this.isAlreadyGuessed(letter)) {
            return;
        }
        if (this.isCorrectGuess(letter)) {
            return;
        }
        this.badGuesses.push(letter);
        this.madeBadGuess();
    },

    isAlreadyGuessed: function (letter) {
        return this.badGuesses.find((item) => {
            return guessedLetter == item;
        });
    },

    isCorrectGuess: function (letter) {
        var isCorrectGuess = false;
        for (var index = 0; index < this.chosenWord.length; index++) {
            if (letter == this.chosenWord.charAt(index)) {
                isCorrectGuess = true;
                this.correctCharacters[index] = true;
            }
        }
        return isCorrectGuess;
    },

    print: function () {
        var value = "";
        for (var i = 0; i < this.correctCharacters.length; i++) {
            if (!this.correctCharacters[i]) {
                value += "_";
            }
            else {
                value += this.chosenWord[i];
            }
            value += " ";
        }
        this.wordBeingGuessedElement.innerText=value;
    },

    /* starts the game when called*/

    startGame: function () {
        this.gameRunning = true,
            this.chooseWord();
        this.createCorrectCharacters();
        this.madeBadGuess();
        this.print();;
    },


    /* lowers lives remaining every time an incorrect guess is made (this is checked by looking at the  value of the badGuesses array*/
    madeBadGuess: function () {

        if (this.badGuesses.length < this.livesRemaining) {
            for (i = 0; i < this.badGuesses.length; i++) {
                this.livesRemaining = this.livesRemaining - 1;
            }
        }

        else if (this.badGuesses >= this.livesRemaining) {
            console.log("GAME OVER");

        }

        console.log(this.livesRemaining);



    },



}

console.log("it ran");
document.onkeyup = function (event) {
    if (!hangman.gameRunning) {
        hangman.startGame();
        console.log(hangman.chosenWord);
        return;
    }
    hangman.guessLetter(event.key);
    hangman.print();
}