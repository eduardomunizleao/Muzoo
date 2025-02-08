const quizData = [
  {
      question: "xxxxxxxx",
      options: ["xxxxxxxx", "xxxxxxxx", "xxxxxxxx", "xxxxxxxx"],
      correct: 1,
      image: ""
  },
  {
      question: "xxxxxxxx",
      options: ["xxxxxxxx", "xxxxxxxx", "xxxxxxxx", "xxxxxxxx"],
      correct: 1,
      image: ""
  },
  {
      question: "xxxxxxxx",
      options: ["xxxxxxxx", "xxxxxxxx", "xxxxxxxx", "xxxxxxxx"],
      correct: 1,
      image: ""
  },
  {
      question: "xxxxxxxx",
      options: ["xxxxxxxx", "xxxxxxxx", "xxxxxxxx", "xxxxxxxx"],
      correct: 2,
      image: ""
  },
  {
      question: "xxxxxxxx",
      options: ["xxxxxxxx", "xxxxxxxx", "xxxxxxxx", "xxxxxxxx"],
      correct: 2,
      image: ""
  },
  {
      question: "xxxxxxxx",
      options: ["xxxxxxxx", "xxxxxxxx", "xxxxxxxx", "xxxxxxxx"],
      correct: 0,
      image: ""
  },
  {
      question: "xxxxxxxx",
      options: ["xxxxxxxx", "xxxxxxxx", "xxxxxxxx", "xxxxxxxx"],
      correct: 2,
      image: ""
  },
  {
      question: "xxxxxxxx",
      options: ["xxxxxxxx", "xxxxxxxx", "xxxxxxxx", "xxxxxxxx"],
      correct: 1,
      image: ""
  },
  {
      question: "xxxxxxxx",
      options: ["xxxxxxxx", "xxxxxxxx", "xxxxxxxx", "xxxxxxxx"],
      correct: 3,
      image: ""
  },
  {
      question: "xxxxxxxx",
      options: ["xxxxxxxx", "xxxxxxxx", "xxxxxxxx", "xxxxxxxx"],
      correct: 0,
      image: ""
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
