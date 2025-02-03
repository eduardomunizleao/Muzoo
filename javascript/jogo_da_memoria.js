const gameBoard = document.getElementById('game-board');
const difficultySelect = document.getElementById('difficulty');
const resultMessage = document.getElementById('result-message');
const playAgainButton = document.getElementById('play-again');
const timerDisplay = document.getElementById('timer');

let cardValues = [];
let flippedCards = [];
let matches = 0;
let isChecking = false;
let timer = 0;
let timerInterval;
let hasStarted = false; // Indica se o jogo já começou

function startGame() {
  const difficulty = difficultySelect.value;
  let pairs;
  let rows;
  let cols;

  // Configuração dos pares e dimensões da grade com base na dificuldade
  if (difficulty === "easy") {
    pairs = 6; // 6 pares = 12 cartas
    rows = 3;
    cols = 4;
  } else if (difficulty === "medium") {
    pairs = 9; // 9 pares = 18 cartas
    rows = 3;
    cols = 6;
  } else if (difficulty === "hard") {
    pairs = 12; // 12 pares = 24 cartas
    rows = 4;
    cols = 6;
  }

  matches = 0;
  flippedCards = [];
  isChecking = false;
  hasStarted = false; // Reinicia a flag de início do jogo
  gameBoard.innerHTML = '';
  resultMessage.textContent = 'Resolva o jogo para ver o resultado!';
  playAgainButton.style.display = 'none'; // Esconde o botão no início do jogo
  cardValues = generateCardValues(pairs);
  resetTimer();

  // Define o layout da grade
  gameBoard.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  gameBoard.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  // Cria as cartas
  cardValues.forEach((value) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.value = value;
    card.addEventListener('click', () => flipCard(card));
    gameBoard.appendChild(card);
  });
}

function generateCardValues(pairs) {
  const values = [];
  for (let i = 1; i <= pairs; i++) {
    values.push(i, i); // Adiciona um par de valores iguais
  }
  return values.sort(() => Math.random() - 0.5); // Embaralha os valores
}

function flipCard(card) {
  if (isChecking || card.classList.contains('flipped') || flippedCards.length === 2) return;

  // Inicia o timer na primeira carta virada
  if (!hasStarted) {
    hasStarted = true;
    startTimer();
  }

  card.classList.add('flipped');
  card.textContent = card.dataset.value;
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    isChecking = true;
    setTimeout(() => checkMatch(), 300); // Adiciona um pequeno delay para ver a segunda carta
  }
}

function checkMatch() {
  const [card1, card2] = flippedCards;
  if (card1.dataset.value === card2.dataset.value) {
    card1.classList.add('hidden');
    card2.classList.add('hidden');
    matches++;

    if (matches === cardValues.length / 2) {
      stopTimer();
      showResult();
    }
  } else {
    card1.classList.remove('flipped');
    card2.classList.remove('flipped');
    card1.textContent = '';
    card2.textContent = '';
  }

  flippedCards = [];
  isChecking = false;
}

function showResult() {
  resultMessage.textContent = `Você conseguiu resolver! Tempo: ${formatTime(timer)}`;
  playAgainButton.style.display = 'inline-block';
}

function startTimer() {
  timer = 0;
  timerDisplay.textContent = `Tempo: ${formatTime(timer)}`;
  timerInterval = setInterval(() => {
    timer++;
    timerDisplay.textContent = `Tempo: ${formatTime(timer)}`;
  }, 10); // Atualiza a cada 10ms (milissegundos)
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  stopTimer();
  timer = 0;
  timerDisplay.textContent = `Tempo: ${formatTime(timer)}`;
}

function formatTime(milliseconds) {
  const seconds = Math.floor(milliseconds / 100);
  const ms = milliseconds % 100;
  return `${seconds}.${ms < 10 ? '0' + ms : ms}s`; // Exibe milissegundos
}

// Inicia o jogo automaticamente no nível fácil
document.addEventListener('DOMContentLoaded', () => {
  startGame();
});

// Reinicia o jogo ao selecionar um nível
difficultySelect.addEventListener('change', startGame);
playAgainButton.addEventListener('click', startGame);