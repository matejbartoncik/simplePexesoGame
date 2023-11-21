let allCards = document.getElementsByClassName("gameCard");
let allCardsActive = document.getElementsByClassName("gameCardActive");
let allCardsFront = document.getElementsByClassName("gameCardFront");
let activeCardsID = [];
let clicked = 0;
let PLAYER_ONE = true;
let playerOnePoints = 0;
let PLAYER_TWO = false;
let playerTwoPoints = 0;

function shufflePairs(totalPairs) {
  const pairs = [];
  for (let i = 1; i <= totalPairs; i++) {
    pairs.push(i, i);
  }

  for (let i = pairs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pairs[i], pairs[j]] = [pairs[j], pairs[i]];
  }
  generatePairs(pairs, rotateCards);
}
function generatePairs(pairs, callback) {
  for (let i = 0; i <= pairs.length; i++) {
    let newCard = document.createElement("div");
    let frontCard = document.createElement("div");
    let backCard = document.createElement("div");
    let newImg = document.createElement("img");
    /////////  CARD     //////////
    gameBoard.appendChild(newCard);
    newCard.classList.add("gameCard");
    newCard.dataset.id = pairs[i];
    ////////  FRONT     ///////////
    newCard.appendChild(frontCard);
    frontCard.classList.add("gameCardFront");
    frontCard.dataset.id = pairs[i];
    ////////  BACK    ///////////
    newCard.appendChild(backCard);
    backCard.classList.add("gameCardBack");
    backCard.appendChild(newImg);

    newImg.src = `/images/img${pairs[i]}.png`;
    if (difficulty[0].checked) {
      newImg.classList.add("img250");
    } else if (difficulty[1].checked) {
      newImg.classList.add("img175");
    } else if (difficulty[2].checked) {
      newImg.classList.add("img150");
    }
  }
  callback();
}

function rotateCards() {
  let allCardsArray = Array.from(allCards);

  allCardsArray.forEach((gameCard) =>
    gameCard.addEventListener("click", function () {
      let cardID;
      cardID = gameCard.getAttribute("data-id");
      if (cardID) {
        if (gameCard.classList.contains("gameCard")) {
          clicked++;
          activeCardsID.push(cardID);
          gameCard.classList.toggle("gameCardActive");
          gameCard.classList.add("unclickable");
          console.log(clicked);
        }
      }
      if (clicked === 2) {
        clickDisable(allCardsArray);
        pairsCheck(allCardsArray);
        clicked = 0;
        activeCardsID = [];
      }
    })
  );
}

function clickDisable(allCardsArray) {
  allCardsArray.forEach((gameCard) => gameCard.classList.add("unclickable"));
  setTimeout(() => {
    allCardsArray.forEach((gameCard) =>
      gameCard.classList.remove("unclickable")
    );
  }, 1000);
}

function pairsCheck() {
  if (activeCardsID[0] == activeCardsID[1]) {
    let allActiveCardsArray = Array.from(allCardsActive);
    allActiveCardsArray.forEach((gameCardActive) => {
      gameCardActive.classList.replace("gameCardActive", "gameCardFound");
    });
    if ((PLAYER_ONE = true)) {
      playerOnePoints += playerTwoPoints;
      playerSwitch();
    } else {
      playerTwoPoints += playerTwoPoints;
      playerSwitch();
    }
  } else {
    pairMismatch();
  }
}

function pairMismatch() {
  let allActiveCardsArray = Array.from(allCardsActive);
  setTimeout(function () {
    allActiveCardsArray.forEach((gameCardActive) => {
      gameCardActive.classList.toggle("gameCardActive");
    });
    console.log("par nenalezen");
    playerSwitch();
  }, 1000);
}


