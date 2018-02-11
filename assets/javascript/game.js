/* set up
 - create array holding our words to use in game
 - create array to hold letters guessed
 - create object with wins/losses


*/
var hangman = {

    poolOfWords: ["map", "pirate", "treasure", "parrot", "ship", "captain", "crew", "mutiny", "sail"],
    chosenWord: "",
    chooseWord: function () {
        chosenWord = poolOfWords[Math.floor(Math.random() * poolOfWords.length)];
        console.log(chosenWord)
    },

    makeSpaces: function () {
        var blank = " ";
        for (var i = 0; i < chosenWord.length; i++) {
            blank += "_ ";

        }
        console.log(blank.slice(0, -1));
    },
    winLossCounter: {
        wins: 0,
        losses: 0,
    },


    checkGuess: function () {
        if (event.key === chosenWord.includes()) {

        }
    },

}