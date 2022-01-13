var board = document.querySelector('.game-board');
var square = document.querySelector('.square');

window.addEventListener("load", loadGame);
board.addEventListener("click", displayMove);

var game;

function loadGame() {
  game = new Game();
}

function displayMove() {
  game.addMove();
  var currentPlayer;
}
