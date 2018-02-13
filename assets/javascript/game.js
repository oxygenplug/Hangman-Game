document.getElementById('toggleGameOver').classList.add('hideGameOver');
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
    badGuessesElement: document.getElementById('badGuessList'),
    showLivesLeftElement: document.getElementById('showLivesLeft'),
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

        this.madeBadGuess(letter);
    },

    isAlreadyGuessed: function (letter) {
        return this.badGuesses.find((item) => {
            return letter == item;
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
        this.wordBeingGuessedElement.innerText = value;
    },

    printBadGuess: function () {

        this.badGuessesElement.innerText = this.badGuesses;


        this.showLivesLeftElement.innerText = this.livesRemaining;

    },

    /* starts the game when called*/

    startGame: function () {
        this.gameRunning = true,
            this.chooseWord();
        this.createCorrectCharacters();
        this.print();
        this.winGame();
    },


    /* lowers lives remaining every time an incorrect guess is made (this is checked by looking at the  value of the badGuesses array*/
    madeBadGuess: function (letter) {
        this.badGuesses.push(letter);

        this.livesRemaining--;



        this.printBadGuess();
        console.log(this.livesRemaining);

        if (this.livesRemaining == 0) {
            this.endGame();

        }

    },
    //ends the game
    endGame: function () {

        alert('You lost!');
        this.gameRunning = false;
        document.getElementById('toggleGameOver').classList.add('displayGameOver');

    },
    // when the number of correct characters matches the amount of characters in the chosen word, the user wins. currently not working :(
    /*
    winGame: function () {
        if (this.chosenWord.length > 2) {
            if (this.chosenWord.length == this.correctCharacters.length){
                alert('Congrats! You won!');
            }
           
        }
    }, */

};

console.log("it ran");
document.onkeyup = function (event) {
    if (!hangman.gameRunning) {
        hangman.startGame();
        console.log(hangman.chosenWord);
        return;
    }
    hangman.guessLetter(event.key);
    hangman.print();
};


var reloadPage = function () {
    location.reload();
};