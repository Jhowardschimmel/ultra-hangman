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
    const fromguessArray = Array.from(computerGuess, element => "_");
    console.log(fromguessArray);
    const mapguessArray = computerGuess.split("").map(element => "_")
    console.log(mapguessArray)



    displayParagraph.innerText = computerGuess;
}




document.onkeyup = function (event) {
    console.log(event.key)
}







