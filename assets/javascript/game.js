/* set up
 - create array holding our words to use in game
 - create array to hold letters guessed
 - create object with wins/losses


*/
var hangman = {
    "chosenWord": "",
    poolOfWords: ["map", "pirate", "treasure", "parrot", "ship", "captain", "crew", "mutiny", "sail"],
    chooseWord: function () {
        return this.poolOfWords[Math.floor(Math.random() * this.poolOfWords.length)];
    },


    makeSpaces: function () {
        var blank = " ";
        for (var i = 0; i < chosenWord.length; i++) {
           blank += "_ ";

        }
        return (blank.slice(0, -1));
    },


        wins: 0,
        losses: 0,


    checkGuess: function () {
        if (event.key === chosenWord.includes()) {

        }
    },

    startGame: function() {
        this.chooseWord();
        this.makeSpaces();

    },

    guessLetter: function(guessedLetter){
        for(var i = 0; i < answer.length; i++){
            if(guessedLetter == answer.charAt(i)){
                 hiddenWord[i] = guessedLetter;
            }
        }
        }

}

console.log("it ran");
document.onkeyup(hangman.startGame());