const playerScore1 = document.getElementById("player1Score");
const player2Score = document.getElementById("player2Score");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
let activePlayer;
function addScore() {
  if (activePlayer) {
    playerScore1.innerHTML++
  }
  else{
    player2Score.innerHTML++
  }
}

//tato funkce je nefunkční
function playerSwitch() {
  if (activePlayer) {
    !activePlayer;
  } else {
    activePlayer = true;
  }
}
