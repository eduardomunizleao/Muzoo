const quizData = [
  {
      question: "1. Qual dessas aves tem um canto tão marcante que até inspirou uma música folclórica brasileira? 🎶🐦",
      options: ["Bem-te-vi", "Acauã", "Beija-flor-tesoura", "Sanhaço-cinzento"],
      correct: 1,
      image: "../../media/imagens/animal-especifico/aves/acaua/acaua-2.jpg"
  },
  {
      question: "2. Pequeno, ágil e um verdadeiro caçador! Qual dessas aves é um falcão especialista em capturar insetos e pequenos vertebrados? 🦅✨",
      options: ["Arara-canindé", "Quiriquiri", "Corrupião", "Maritaca"],
      correct: 1,
      image: "../../media/imagens/animal-especifico/aves/Falco sparverius/quiriquiri.jpg"
  },
  {
      question: "3. Qual desses mamíferos adora nadar e caça principalmente peixes? 🦦💦 ",
      options: ["Capivara", "Lontra", "Irara", "Quati"],
      correct: 1,
      image: "../../media/imagens/animal-especifico/mamiferos/Lontra longicaudis/Lontra longicaudis.jpg"
  },
  {
      question: "4. Quem é o gigante pacífico das águas? Esse roedor adora nadar e pode ser encontrado em grupos perto de rios e lagos. Quem é ele? 🌊🌊",
      options: ["Cervo-do-pantanal", "Paca", "Capivara", "Tamanduá-bandeira"],
      correct: 2,
      image: "../../media/imagens/animal-especifico/mamiferos/Hydrochoerus hydrochaeris/capivara.jpg"
  },
  {
      question: "5. Tem aparência assustadora, mas é inofensiva! Qual dessas cobras é confundida com uma serpente venenosa? 🐍⚠ ",
      options: [" Teiú-comum", "Urutu", "Cobra coral falsa", "Jacaré-do-papo-amarelo"],
      correct: 2,
      image: "../../media/imagens/animal-especifico/repteis/Erythrolamprus_aesculapii/Erythrolamprus aesculapii.jpeg"
  },
  {
      question: "6. Um dos símbolos do Cerrado brasileiro, esse mamífero tem pernas longas e um pelo avermelhado. Quem é ele? 🦊🔥",
      options: ["Lobo-guará", "Jaguatirica", "Cachorro-do-mato ", "Tamanduá-mirim"],
      correct: 0,
      image: "../../media/imagens/animal-especifico/mamiferos/Chrysocyon brachyurus/loboguaravidareal.jpg"
  },
  {
      question: "7. Essa ave adora ficar em áreas alagadas e tem penas brancas bem chamativas. Qual é ela? 🏞🦢",
      options: ["Seriema", "Rolinha", "Garça-boiadeira", "Coleirinho"],
      correct: 2,
      image: "../../media/imagens/animal-especifico/aves/Bubulcus ibis/garça-alimento.jpg"
  },
  {
      question: "8. Defesa fedorenta! Qual desses animais libera um cheiro forte para afastar predadores? 🤢💨",
      options: ["Furão-pequeno", "Jaratataca", "Gambá-de-orelha-branca", "Sagui-de-tufos-pretos"],
      correct: 1,
      image: "../../media/imagens/animal-especifico/mamiferos/Conepatus semistriatus/jarataca.jpg"
  },
  {
      question: "9. Esse animal é um verdadeiro aventureiro e sobe em árvores com facilidade. Quem é ele? 🌳🐾",
      options: ["Tatu-galinha", "Porquinho-da-índia", "Camundongo", "Quati"],
      correct: 3,
      image: "../../media/imagens/animal-especifico/mamiferos/Nasua nasua/quatividareal.jpg"
  },
  {
      question: "10. Qual dessas corujas é uma das maiores das Américas e tem um canto assustador? 🦉🌙 ",
      options: ["Jacurutu", "Coruja-buraqueira", "Suriri", "Pintassilgo-da-venezuela"],
      correct: 0,
      image: "../../media/imagens/animal-especifico/aves/Bubo virginianus/jacurutu-comendo.jpg"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const startBtn = document.getElementById("start-btn");
const quizContainer = document.querySelector(".quiz-container").style.display = "none";
const quizContainer1 = document.querySelector(".centro2");
const questionEl = document.getElementById("question");
const optionsEl = document.querySelectorAll(".option");
const questionImageEl = document.getElementById("question-image");
const nextBtn = document.getElementById("next-btn");


startBtn.addEventListener("click", () => {
  
  document.querySelector(".centro").style.display = "none";

  document.addEventListener('DOMContentLoaded', function () {
    var div1 = document.getElementById('.centro');
    div1.style.padding = "0 0px";
  });

  
  

  document.querySelector(".quiz-container").style.display = "block";
  quizContainer1.style.paddingTop = "160px";
  quizContainer1.style.paddingBottom = "160px";
  loadQuestion();
});

function loadQuestion() {
  resetState();
  
  const currentQuestion = quizData[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  questionImageEl.src = currentQuestion.image;

  optionsEl.forEach((button, index) => {
      button.textContent = currentQuestion.options[index];
      button.onclick = () => selectAnswer(index);
  });
}

function selectAnswer(index) {
  const correctIndex = quizData[currentQuestionIndex].correct;
  optionsEl.forEach((button, idx) => {
      button.disabled = true;
      if (idx === correctIndex) {
          button.classList.add("correct");
      } else if (idx === index) {
          button.classList.add("wrong");
      }
  });
  if (index === correctIndex) {
      score++;
  }
  nextBtn.style.display = "block";
}

function resetState() {
  optionsEl.forEach(button => {
      button.classList.remove("correct", "wrong");
      button.disabled = false;
  });
  nextBtn.style.display = "none";
}

nextBtn.onclick = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
      loadQuestion();
  } else {
      showResults();
  }
};

function showResults() {
  questionEl.textContent = `Você acertou ${score} de ${quizData.length} perguntas!`;
  questionImageEl.style.display = "none";
  document.querySelector(".options").style.display = "none";
  nextBtn.textContent = "Reiniciar";
  nextBtn.style.display = "block";
  nextBtn.onclick = () => location.reload();
}
