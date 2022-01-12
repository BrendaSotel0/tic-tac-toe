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
}
