const gameBoard = document.getElementById('game-board');
const difficultySelect = document.getElementById('difficulty');
const resultMessage = document.getElementById('result-message');
const playAgainButton = document.getElementById('play-again');
const timerDisplay = document.getElementById('timer');

let cardImages = ['../../../media/imagens/animal-especifico/mamiferos/Hydrochoerus hydrochaeris/capivara.jpg', '../../../media/imagens/animal-especifico/repteis/Caiman latirostris/jacare-do-papo-amarelo.jpg', '../../../media/imagens/animal-especifico/aves/Bubo virginianus/jacurutu-vidareal.jpg', '../../../media/imagens/animal-especifico/mamiferos/Myrmecophaga tridactyla/tamanduabandeira.jpg', '../../../media/imagens/animal-especifico/aves/Ara ararauna/Ara ararauna.jpg', '../../../media/imagens/animal-especifico/aves/Ramphastos toco/tucano.jpg', '../../../media/imagens/animal-especifico/anfibios/Rhinella sp/sapo-cururu.jpeg', '../../../media/imagens/animal-especifico/peixes/Oreochromis niloticus/tilapia_do_nilo.jpg', '../../../media/imagens/animal-especifico/mamiferos/Euphractus sexcinctus/tatu-peba.jpg', '../../../media/imagens/animal-especifico/mamiferos/Dasypus novemcinctus/tatu-galinha.jpg', '../../../media/imagens/animal-especifico/mamiferos/Leopardus pardalis/jaguatirica.png', '../../../media/imagens/animal-especifico/mamiferos/Conepatus semistriatus/jarataca.jpg'];
let cardValues = [];
let flippedCards = [];
let matches = 0;
let isChecking = false;
let timer = 0;
let timerInterval;
let hasStarted = false;

function startGame() {
  const difficulty = difficultySelect.value;
  let pairs;
  let rows;
  let cols;

  if (difficulty === "easy") {
    pairs = 6;
    rows = 3;
    cols = 4;
  } else if (difficulty === "medium") {
    pairs = 9;
    rows = 3;
    cols = 6;
  } else if (difficulty === "hard") {
    pairs = 12;
    rows = 4;
    cols = 6;
  }

  matches = 0;
  flippedCards = [];
  isChecking = false;
  hasStarted = false;
  gameBoard.innerHTML = '';
  resultMessage.textContent = 'Resolva o jogo para ver o resultado!';
  playAgainButton.style.display = 'none';
  cardValues = generateCardValues(pairs);
  resetTimer();

  gameBoard.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  gameBoard.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

  cardValues.forEach((value) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.value = value;

    const img = document.createElement('img');
    img.src = `imagem/${value}`;
    card.appendChild(img);
    
    card.addEventListener('click', () => flipCard(card));
    gameBoard.appendChild(card);
  });
}

function generateCardValues(pairs) {
  let selectedImages = cardImages.slice(0, pairs);
  const values = selectedImages.concat(selectedImages);
  return values.sort(() => Math.random() - 0.5);
}

function flipCard(card) {
  if (isChecking || card.classList.contains('flipped') || flippedCards.length === 2) return;

  if (!hasStarted) {
    hasStarted = true;
    startTimer();
  }

  card.classList.add('flipped');
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    isChecking = true;
    setTimeout(() => checkMatch(), 300);
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
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  stopTimer();
  timer = 0;
  timerDisplay.textContent = `Tempo: ${formatTime(timer)}`;
}

function formatTime(seconds) {
  return `${seconds}s`;
}

document.addEventListener('DOMContentLoaded', () => {
  startGame();
});

difficultySelect.addEventListener('change', startGame);
playAgainButton.addEventListener('click', startGame);