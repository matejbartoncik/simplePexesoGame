const startButton = document.getElementById("start-button");
const difficulty = document.getElementsByName("difficulty");
const startSection = document.getElementsByName("startSection");
const gameDesk = document.getElementsByName("gameBoard");
const gameBoard = document.getElementById("memory-game");
const navBar = document.getElementById("navbar")

window.addEventListener("onload", function () {
  for (let i = 0; i < difficulty.length; i++) {
    difficulty[i].checked = false;
  }
});

function startGame() {
  startSection[0].style.display = "none";
  navBar.style.display="none";
  gameDesk[0].style.display = "block";
  pairsMatchDiff();
  playerSwitch()
}
function pairsMatchDiff() {
  //tato funkce se spustí po kliknuti na tlacitko start
  let cards = 0;
  let totalPairs = 0;
  if (difficulty[0].checked) {
    totalPairs = 10;
    cards = 20;
    gameBoard.classList.add("gameboard9");
  } else if (difficulty[1].checked) {
    totalPairs = 18;
    cards = 36;
    gameBoard.classList.add("gameboard18");
  } else if (difficulty[2].checked) {
    totalPairs = 27;
    cards = 54;
    gameBoard.classList.add("gameboard27");
  }
  
  shufflePairs(totalPairs);
}

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


