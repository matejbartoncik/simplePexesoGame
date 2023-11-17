let allCards = document.getElementsByClassName("gameCard");
let allCardsActive = document.getElementsByClassName("gameCardActive");
let allCardsFront = document.getElementsByClassName("gameCardFront");
let cardID;
let activeCardsID = [];
let clicked = 0;
const playerOne = true;
let playerOnePoints = 0;
const playerTwo = false; 
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
      cardID = gameCard.getAttribute("data-id");
      if (cardID) {
        if (gameCard.classList.contains("gameCard")) {
          clicked++;
          activeCardsID.push(cardID)
          gameCard.classList.replace("gameCard", "gameCardActive");
          console.log(clicked);
        }
      } else {
        console.log("Atribut 'data-id' není definován pro tuto kartu.");
      }
      if (clicked===2) {
        pairsCheck()
        clicked=0
        activeCardsID = []
      }
    
    })
  );
}
//kontrola páru
function pairsCheck() {
  if (activeCardsID[0]==activeCardsID[1]) {
      if (playerOne == true && playerTwo == false) {
        playerOnePoints +=playerOnePoints
        playerOne = false;
        playerTwo = true;
      }else if (playerOne == false&&playerTwo==true) {
        playerTwoPoints +=playerOnePoints
        playerOne = true;
        playerTwo = false;
      }
  }else{
    console.log("par nenalezen")

  }
}