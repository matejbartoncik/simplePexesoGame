let allCards = document.getElementsByClassName("gameCard");
let allCardsFront = document.getElementsByClassName("gameCardFront");
let cardID;

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
    newCard.dataset.id = i;

    ////////  FRONT     ///////////
    newCard.appendChild(frontCard);
    frontCard.classList.add("gameCardFront");
    frontCard.dataset.id = i;

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
  rotateCards()
}

function Atributes() {
  Array.from(allCards).forEach((gameCard) =>
    gameCard.addEventListener("click", function () {
      cardID = gameCard.getAttribute("data-id");
      if (cardID) {
        console.log(cardID);
      } else {
        console.log("Atribut 'data-id' není definován pro tuto kartu.");
      }
    })
  );
}
function rotateCards () {
  Array.from(allCards).forEach((gameCard) =>
    gameCard.addEventListener("click", function () {
      cardID = gameCard.getAttribute("data-id");
      if (cardID) {
        if (gameCard.classList.contains("gameCard")) {
          gameCard.classList.replace("gameCard","gameCardActive")
        }
      } else {
        console.log("Atribut 'data-id' není definován pro tuto kartu.");
      }
    })
  );
}