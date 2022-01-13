class Game {
  constructor() {
    this.player1 = new Player(1, "❌");
    this.player2 = new Player(2, "〇");
    this.board = [
      "", "", "",
      "", "", "",
      "", "", ""
    ];
    this.isPlayer1Turn = true;
    this.gameOver = false;
    this.notification = "";
    this.winningCombos = [
      ["0", "1", "2"],
      ["0", "3", "6"],
      ["0", "4", "8"],
      ["1", "4", "7"],
      ["2", "5", "8"],
      ["2", "4", "6"],
      ["3", "4", "5"],
      ["6", "7", "8"]
    ];
  }

  determineCurrentToken() {
    var currentToken;
    this.isPlayer1Turn === true ? currentToken = this.player1.token : currentToken = this.player2.token;
    return currentToken;
    console.log("####", currentToken);
  }

  addMove() {
    console.log("%%%", square.innerText);
    if (square[event.target.id].innerText === "" && this.gameOver === false) {
      var currentToken = this.determineCurrentToken()
      this.board[event.target.id] = currentToken;
      square[event.target.id] = currentToken;
    }
    return currentToken;
    console.log("$$$", addMove);
    console.log("@@@@", currentToken);
    console.log("!!!", determineCurrentToken);
  }

  checkForWins() {

  }

  checkForDraw() {

  }

  resetGame() {

  }
}
