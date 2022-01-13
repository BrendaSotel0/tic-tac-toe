var board = document.querySelector('.game-board');
var square = document.querySelectorAll('.square');
var reset = document.querySelector('.game-reset');
var whoIsUp = document.querySelector('.who-is-up');
var player1Wins = document.querySelector('.p1Wins');
var player2Wins = document.querySelector('.p2Wins');

window.addEventListener("load", loadGame);
board.addEventListener("click", displayMove);

var game;

function loadGame() {
  game = new Game();
}

function displayMove() {
  if (square[event.target.id].innerText === "" && game.gameOver === false) {
    var currentToken = game.determineCurrentToken()
    game.board[event.target.id] = currentToken;
    square[event.target.id].innerText = currentToken;
  }
  return currentToken;
}
