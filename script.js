const startButton = document.getElementById("start-button");
const difficulty = document.getElementsByName("difficulty");
const startSection = document.getElementsByName("startSection")
const gameBoard = document.getElementsByName("gameBoard")
let pairs = 0;
window.addEventListener("onload", function () {
  for (let i = 0; i < difficulty.length; i++) {
    difficulty[i].checked = false;
  }
});

function startGame() {
    startSection[0].style.display="none"
    gameBoard[0].style.display="block"
    pairsMatchDiff()
}
function pairsMatchDiff() {
  if (difficulty[0].checked) {
    pairs = 8;
  } else if (difficulty[1].checked) {
    pairs = 16;
  } else if (difficulty[2].checked) {
    pairs = 24;
  }
}
function shuffle() {}
//haah
function changeBackground() {
  const label = document.getElementsByName("label");

  for (let i = 0; i < label.length; i++) {
    const isChecked = difficulty[i].checked;

    if (isChecked) {
        label[i].classList.add("label-checked");
        label[i].classList.remove("label-style");
    } else {
      label[i].classList.remove("label-checked");
      label[i].classList.add("label-style");
    }
  }
}
