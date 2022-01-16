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
    this.isPlayer1Turn ? currentToken = this.player1.token : currentToken = this.player2.token;
    return currentToken;
  }

  checkForWins() {
    var currentPlayer = this.determineCurrentToken();
    for (var i = 0; i < this.winningCombos.length; i++) {
      if (
        this.board[this.winningCombos[i][0]] === currentPlayer && this.board[this.winningCombos[i][1]] === currentPlayer && this.board[this.winningCombos[i][2]] === currentPlayer
      ) {
        // currentPlayer.wins++;
        // this.gameOver = true;
        // this.notification = `${currentPlayer} wins!`;
        return true;
        // console.log("CPW", currentPlayer.wins);
      }
    }
  }

  checkForDraw() {

  }

  resetGame() {

  }
}
