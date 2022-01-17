var board = document.querySelector('.game-board');
var square = document.querySelectorAll('.square');
var reset = document.querySelector('.game-reset');
var whoIsUp = document.querySelector('.who-is-up');
var player1Wins = document.querySelector('.p1Wins');
var player2Wins = document.querySelector('.p2Wins');

window.addEventListener("load", loadGame);
board.addEventListener("click", updateGame);
reset.addEventListener("click", displayReset);

var game;

function loadGame() {
  game = new Game();
}

function updateGame() {
  if (square[event.target.id].innerText === "" && game.gameOver === false) {
    var currentToken = game.determineCurrentToken();
    game.updateBoard(currentToken);
    square[event.target.id].innerText = currentToken;
    if (game.determineEndGame()) {
      displayEndGame();
      return;
    }
    game.switchPlayer();
    displayTurn();
  }
}

function displayTurn() {
  var playersTurn = game.isPlayer1Turn ? game.player1.token : game.player2.token;
  whoIsUp.innerText = `It's ${playersTurn}'s turn!`;
}

function displayEndGame() {
    player1Wins.innerText = game.player1.wins;
    player2Wins.innerText = game.player2.wins;
    whoIsUp.innerText = game.notification;
}

function displayReset() {
  game.resetGame();
  for (var i = 0; i < square.length; i++) {
    square[i].innerText = "";
  }
  whoIsUp.innerText = game.notification;
}
