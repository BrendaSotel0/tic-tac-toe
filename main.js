var board = document.querySelector('.game-board');
var square = document.querySelectorAll('.square');
var reset = document.querySelector('.game-reset');
var whoIsUp = document.querySelector('.who-is-up');
var player1Wins = document.querySelector('.p1Wins');
var player2Wins = document.querySelector('.p2Wins');

window.addEventListener("load", loadGame);
board.addEventListener("click", displayMove);
reset.addEventListener("click", displayReset);

var game;

function loadGame() {
  game = new Game();
}

function displayMove() {
  if (square[event.target.id].innerText === "" && game.gameOver === false) {
    var currentToken = game.determineCurrentToken();
    game.board[event.target.id] = currentToken;
    square[event.target.id].innerText = currentToken;
    whoIsUp.innerText = `It's ${currentToken}'s turn!`;
    if (game.checkForWins() || game.checkForDraw()) {
      whoIsUp.innerText = game.notification;
      return game.gameOver = true;
    }
    game.isPlayer1Turn = !game.isPlayer1Turn;
  }
  // return currentToken;
}

function displayReset() {
  game.resetGame();
  for (var i = 0; i < square.length; i++) {
    square[i].innerText = "";
  }
  whoIsUp.innerText = game.notification;
  // this.gameOver = false;
}
