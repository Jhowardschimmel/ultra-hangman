document.write("Hello world!");
document.onkeyup = function(event) {
  startGame();
};

function startGame() {
  const displayDiv = document.getElementById("display-div");
  displayDiv.style.display = "block";
  

}
