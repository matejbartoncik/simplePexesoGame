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

    newCard.classList.add("gameCard");
    frontCard.classList.add("gameCardFront");
    backCard.classList.add("gameCardBack");
    newImg.src = `/images/img${pairs[i]}.png`;
    if (difficulty[0].checked) {
      newImg.classList.add("img250");
    } else if (difficulty[1].checked) {
      newImg.classList.add("img175");
    } else if (difficulty[2].checked) {
      newImg.classList.add("img150");
    }

    gameBoard.appendChild(newCard);
    newCard.appendChild(frontCard);
    newCard.appendChild(backCard);
    backCard.appendChild(newImg);

  }

}
