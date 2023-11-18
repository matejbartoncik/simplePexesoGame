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
  generatePairs(pairs);
}
function generatePairs(pairs) {
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
  rotateCards();
}

function rotateCards() {
  Array.from(allCards).forEach((gameCard) =>
    gameCard.addEventListener("click", function () {
      let cardID;
      cardID = gameCard.getAttribute("data-id");
      if (cardID) {
        if (gameCard.classList.contains("gameCard")) {
          clicked++;
          activeCardsID.push(cardID);
          gameCard.classList.replace("gameCard", "gameCardActive");
          console.log(clicked);
        }
      } else {
        console.log("Atribut 'data-id' není definován pro tuto kartu.");
      }
      if (clicked === 2) {
        pairsCheck(cardID);
        clicked = 0;
        activeCardsID = [];
      }
    })
  );
}
//kontrola páru
function pairsCheck(cardID) {
  if (activeCardsID[0] == activeCardsID[1]) {
    activeCardsID = [];
    if (PLAYER_ONE == true && PLAYER_TWO == false) {
      playerOnePoints += playerOnePoints;
      PLAYER_ONE = false;
      PLAYER_TWO = true;
    } else if (PLAYER_ONE == false && PLAYER_TWO == true) {
      playerTwoPoints += playerOnePoints;
      PLAYER_ONE = true;
      PLAYER_TWO = false;
    }
  } else if(activeCardsID[0] != activeCardsID[1]) { //todo pridat funkci na prohazovani hracu a nedelat to v kontrole paru
    PLAYER_ONE = false;
      PLAYER_TWO = true;
    setTimeout(function () {
      Array.from(allCardsActive).forEach((gameCardActive) => {
        gameCardActive.classList.replace("gameCardActive", "gameCard");
      });
      console.log("par nenalezen");
    }, 1000);
  }
}

//TODO pridat neco aby par pokud bude nalezeny zustal otoceny obrazkem nahoru
//aktualni stav dela to ze obrazek zustane ale po tom co hraje dalsi hrac se vsechny obrazky vrati zpet
