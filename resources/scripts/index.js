

import { RockPaperScissors } from './rock_paper_scissors.js';

// Elements
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');
const startGameButton = document.getElementById('start-game-button');
const userName = document.getElementById('username');
const userSelection = document.getElementById('user-selection');
const goButton = document.getElementById('go-button');
const scoreParagraph = document.getElementById('score');
const gameHistoryParagraph = document.getElementById('game-history');
const resetGameButton = document.getElementById('reset-game-button');

// Instantiate the game object from the `RockPaperScissors` class.
var game;
var username;

// Hide game screen
gameScreen.classList.add('d-none');
resetGameButton.classList.add('d-none');

// Update score tally UI
function updateScoreTallyUI() {
  scoreParagraph.innerHTML = `${game.username}: ${game.score.user} v CPU: ${game.score.cpu}`;
}

// Update game history UI
function updateGameHistoryUI() {
  gameHistoryParagraph.innerHTML = game.gameHistoryLog.join('<br>');
}

// Start-game-button EventListener
startGameButton.addEventListener('click', function (e) {
  e.preventDefault(); 
  username = userName.value;
  game = new RockPaperScissors(username);

  welcomeScreen.classList.add('d-none');
  gameScreen.classList.remove('d-none');
  resetGameButton.classList.remove('d-none');
  updateScoreTallyUI();
  updateGameHistoryUI();
});

// Go-button EventListener
goButton.addEventListener('click', function (e) {
  e.preventDefault(); 
  const selectedOption = userSelection.value;
  game.play(selectedOption); 
  updateScoreTallyUI(); 
  updateGameHistoryUI();
});

// Reset-game-button
resetGameButton.addEventListener('click', function(e) { 
  e.preventDefault();
  userName.value = '';
  username = '';
  game = new RockPaperScissors(username);

  welcomeScreen.classList.remove('d-none');
  gameScreen.classList.add('d-none');
  resetGameButton.classList.add('d-none');
});

