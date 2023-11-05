const startButton = document.getElementById("start-button");
const difficulty = document.getElementsByName("difficulty");
const startSection = document.getElementsByName("startSection")
const gameDesk = document.getElementsByName("gameBoard")
const gameBoard = document.getElementById("memory-game")
let pairs = 0;
let cards = 0
window.addEventListener("onload", function () {
  for (let i = 0; i < difficulty.length; i++) {
    difficulty[i].checked = false;
  }
});

function startGame() {
    startSection[0].style.display="none"
    gameDesk[0].style.display="block"
    pairsMatchDiff()
}
function pairsMatchDiff() {
  if (difficulty[0].checked) {
    pairs = 10;
    cards = 20; // 20 karet a 10 paru
    gameBoard.classList.add("gameboard9")

  } else if (difficulty[1].checked) {
    pairs = 18;
   cards = 36; // 36 karet a 18 paru
    gameBoard.classList.add("gameboard18")
  } else if (difficulty[2].checked) {
    pairs = 27;
    cards = 54; // 54 karet 27 paru
    gameBoard.classList.add("gameboard27")
  }
  createCards()
}




function createCards() {
   for (let i = 0; i < cards; i++) {
      let randomizer = Math.floor(Math.random()*10)
     var newCard = document.createElement("div");
    }
  }

  function shuffle() {
  newCard.classList.add("gameCard")
  gameBoard.appendChild(newCard)

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
