/* set up
 - create array holding our words to use in game
 - create array to hold letters guessed
 - create object with wins/losses


*/
var hangman = {
    chosenWord: "",
    poolOfWords: ["map", "pirate", "treasure", "parrot", "ship", "captain", "crew", "mutiny", "sail"],
    chooseWord: function () {
        this.chosenWord = this.poolOfWords[Math.floor(Math.random() * this.poolOfWords.length)];
    },


        wins: 0,
        losses: 0,


    checkGuess: function () {
        if (event.key === this.chosenWord.includes()) {

        }
    },

    partialAnswer: "",

    createPartialAnswer: function() {
        for (var i = 0; i < this.chosenWord.length; i++) {
            this.partialAnswer += "_";
 
         }
    },

    guessLetter: function(guessedLetter){
        for(var i = 0; i < answer.length; i++){
            if(guessedLetter == answer.charAt(i)){
                 hiddenWord[i] = guessedLetter;
            }
        }
        },

        startGame: function() {
            this.chooseWord();
            this.createPartialAnswer();
            console.log(this.chosenWord, this.PartialAnswer);
    
        },

}

console.log("it ran");
document.onkeyup(hangman.startGame());