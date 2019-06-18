document.write("Hello world!");
document.addEventListener("keyup", function (event) {
    startGame();
},
    { once: true }
);

function startGame() {
    const instructionsDiv = document.getElementById("instructions");
    const displayDiv = document.getElementById("display-div");
    instructionsDiv.style.display = "none";
    displayDiv.style.display = "block";
    console.log("clicked!")


}
