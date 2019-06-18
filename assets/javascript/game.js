document.addEventListener("keyup", function (event) {
    const instructionsDiv = document.getElementById("instructions");
    const displayDiv = document.getElementById("display-div");
    instructionsDiv.style.display = "none";
    displayDiv.style.display = "block";
    startGame();

},
    { once: true }
);

function startGame() {

    const instructionsDiv = document.getElementById("instructions");
    const displayDiv = document.getElementById("display-div");
    instructionsDiv.style.display = "none";
    displayDiv.style.display = "block";
    const wordsArray = ["bulbasaur", "ivysaur", "venusaur"];
    const computerGuess = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    const displayParagraph = document.getElementById("display-paragraph");
    const guessString = computerGuess.split("").map(element => "_").join(" ");
    displayParagraph.innerText = guessString;
    const guessArray = guessString.split(" ");
    document.onkeyup = function (event) {
        const userGuess = event.key;
        console.log(event.key);
        console.log(computerGuess);
        console.log(guessString.length)
        
        console.log(guessArray);
        
        for (let i = 0; i < computerGuess.length; i++) {
            if (userGuess === computerGuess[i]) {
                guessArray[i] = computerGuess[i];
                console.log(guessArray);
            }
            
        }
        console.log(guessArray) 
        
    }
}












