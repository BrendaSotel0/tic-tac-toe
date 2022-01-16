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
    var currentPlayerToken = this.determineCurrentToken();
    for (var i = 0; i < this.winningCombos.length; i++) {
      if (
        this.board[this.winningCombos[i][0]] === currentPlayerToken && this.board[this.winningCombos[i][1]] === currentPlayerToken && this.board[this.winningCombos[i][2]] === currentPlayerToken
      ) {
        this.isPlayer1Turn ? this.player1.wins++ : this.player2.wins++;
        this.notification = `${currentPlayerToken} wins!`;
        return true;
      }
    }
  }

  checkForDraw() {
    for (var i = 0; i < this.board.length; i++) {
      if (!this.board.includes("")) {
        this.notification = `It's a tie!`;
        return true;
      }
    }
  }

  resetGame() {

  }
}
