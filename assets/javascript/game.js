document.write("Hello world!");
document.onkeyup = function(event) {
  startGame();
};

function startGame() {
  const displayDiv = document.createElement("div");
  displayDiv.innerText = "I'm the display div!";
  const body = document.getElementById("body");
  body.insertBefore(displayDiv, body.childNodes[0]);

}
