/* set up
 - create array holding our words to use in game
 - create array to hold letters guessed
 - create object with wins/losses


*/
var hangman = {

    chosenWord: "",
    poolOfWords: ["map", "pirate", "treasure", "parrot", "ship", "captain", "crew", "mutiny", "sail"],
    gameRunning: false,
    wins: 0,
    losses: 0,
    correctCharacters: [],
    badGuesses: [],

    chooseWord: function () {
        this.chosenWord = this.poolOfWords[Math.floor(Math.random() * this.poolOfWords.length)];
    },




    createCorrectCharacters: function () {
        for (var i = 0; i < this.chosenWord.length; i++) {
            this.correctCharacters.push(false);
        }
    },

    guessLetter: function (guessedLetter) {
        var isAlreadyGuessed = this.badGuesses.find((item) => {
            return guessedLetter == true;
        });


        if (!isCorrectGuess) {
            if (guessedLetter = this.badGuesses.filter(guessedLetter)) {
                return;
            }
            this.badGuesses.push(guessedLetter);
        }

        for (var index = 0; index < this.chosenWord.length; index++) {
            if (guessedLetter == this.chosenWord.charAt(index)) {
                this.correctCharacters[index] = true;
            }
        }


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
        console.log(value);
    },



    startGame: function () {
        this.gameRunning = true,
            this.chooseWord();
        this.createCorrectCharacters();
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

v