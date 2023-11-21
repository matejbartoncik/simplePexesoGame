function playerSwitch() {
  activeCardsID = [];
  if (PLAYER_ONE == true) {
    PLAYER_ONE = false;
    PLAYER_TWO = true;
  } else {
    PLAYER_ONE = true;
    PLAYER_TWO = false;
  }
}
