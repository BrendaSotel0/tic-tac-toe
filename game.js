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
    return this.isPlayer1Turn ? this.player1.token : this.player2.token;
  }

  updateBoard(token) {
    this.board[event.target.id] = token;
  }

  switchPlayer() {
    this.isPlayer1Turn = !this.isPlayer1Turn;
    this.notification = `It's ${this.determineCurrentToken()}'s turn!`;
  }

  checkForWins() {
    var currentPlayerToken = this.determineCurrentToken();
    for (var i = 0; i < this.winningCombos.length; i++) {
      if (
        this.board[this.winningCombos[i][0]] === currentPlayerToken && this.board[this.winningCombos[i][1]] === currentPlayerToken && this.board[this.winningCombos[i][2]] === currentPlayerToken
      ) {
        this.gameOver = true;
        this.awardWin(currentPlayerToken);
        setTimeout(displayReset, 2000);
        return true;
      }
    }
  }

  awardWin(token) {
    this.isPlayer1Turn ? this.player1.wins++ : this.player2.wins++;
    this.notification = `${token} wins!`;
  }

  checkForDraw() {
    for (var i = 0; i < this.board.length; i++) {
      if (!this.board.includes("")) {
        this.notification = `It's a tie!`;
        setTimeout(displayReset, 2000);
        return true;
      }
    }
  }

  determineEndGame() {
    if (this.checkForWins() || this.checkForDraw()) {
      return true;
    }
  }

  resetGame() {
    for (var i = 0; i < this.board.length; i++) {
      this.board[i] = "";
    }
    this.switchPlayer();
    this.notification = `It's ${this.determineCurrentToken()}'s turn!`;
    this.gameOver = false;
  }
}
