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

    chooseWord: function () {
        this.chosenWord = this.poolOfWords[Math.floor(Math.random() * this.poolOfWords.length)];
    },




    checkGuess: function () {
        if (event.key === this.chosenWord.includes()) {

        }
    },



    createCorrectCharacters: function () {
        for (var i = 0; i < this.chosenWord.length; i++) {
            this.correctCharacters.push(false);
        }
    },

    guessLetter: function (guessedLetter) {
        for (var index = 0; index < this.chosenWord.length; index++) {
            if (guessedLetter == this.chosenWord.charAt(index)) {
                this.correctCharacters[index] = true;
            }
        }
    },

    startGame: function () {
        this.gameRunning = true,
        this.chooseWord();
        this.createCorrectCharacters();
        console.log(this.chosenWord, this.PartialAnswer);

    },



}

console.log("it ran");
document.onkeyup = function (event) {
    if (!hangman.gameRunning) {
        hangman.startGame();
        return;
    }
    hangman.guessLetter(event.key);
    console.log(hangman.correctCharacters);
}