document.addEventListener("keyup", function (event) {
    startGame();
},
    { once: true }
);

document.onkeyup = function (event) {
     const displayParagraph = document.getElementById("display-div");displayParagraph.innerText = "I HAVE CHANGED!"
}



function startGame() {
    const instructionsDiv = document.getElementById("instructions");
    const displayDiv = document.getElementById("display-div");
    instructionsDiv.style.display = "none";
    displayDiv.style.display = "block";
}
