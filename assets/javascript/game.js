document.write("Hello world!");
document.onkeyup = function(event) {
  startGame();
};

function startGame() {
  const instructionsDiv = document.getElementById("instructions");
  const displayDiv = document.getElementById("display-div");
  instructionsDiv.style.display = "none";
  displayDiv.style.display = "block";
  

}
