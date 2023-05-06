const startBtn = document.getElementById('startBtn');
const quiz = document.getElementById('quiz');
const timer = document.getElementById('timer');
const timeLeft = document.getElementById('timeLeft');
const question = document.getElementById('question');
const options = document.getElementById('options');
const gameOver = document.getElementById('gameOver');
const initialsInput = document.getElementById('initials');
const saveScoreBtn = document.getElementById('saveScore');
const startScreen = document.getElementById('startScreen');
const questions = [
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["Number", "String", "Character", "Object"],
    correctIndex: 2
  },
  {
    question: "Which symbol is used for single line comments in JavaScript?",
    options: ["//", "/*", "#", "--"],
    correctIndex: 0
  },
  {
    question: "What method can be used to display a message in the browser's console?",
    options: ["console.log()", "alert()", "print()", "console.print()"],
    correctIndex: 0
  },
  {
    question: "Which of the following is NOT a valid way to declare a variable in JavaScript?",
    options: ["var x;", "int x;", "let x;", "const x;"],
    correctIndex: 1
  },
  {
    question: "What is the correct way to create a function in JavaScript?",
    options: [
      "function myFunction() {}",
      "def myFunction() {}",
      "function: myFunction() {}",
      "create function myFunction() {}"
    ],
    correctIndex: 0
  }
];
let currentIndex = 0;
let time = 60;
let timerInterval;

startBtn.addEventListener('click', startQuiz);

function startQuiz() {
  startScreen.classList.add('hidden');
  quiz.classList.remove('hidden');
  timerInterval = setInterval(updateTimer, 1000);
  displayQuestion();
}

function updateTimer() {
  time--;
  timeLeft.textContent = time;
  if (time <= 0) {
    endGame();
  }
}
function displayQuestion() {
  if (currentIndex >= questions.length) {
    endGame();
    return;
  }

  const currentQuestion = questions[currentIndex];
  question.textContent = currentQuestion.question;
  question.classList.add('question-text'); 
  options.innerHTML = '';
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.classList.add('option');
    button.addEventListener('click', () => selectOption(index));
    options.appendChild(button);
  });
}
function selectOption(selectedIndex) {
  if (questions[currentIndex].correctIndex !== selectedIndex) {
    time -= 10;
  }

  currentIndex++;
  displayQuestion();
}

function endGame() {
  clearInterval(timerInterval);
  quiz.classList.add('hidden');
  gameOver.classList.remove('hidden');
}

saveScoreBtn.addEventListener('click', saveScore);

function saveScore() {
  const initials = initialsInput.value.toUpperCase();
  if (!initials) return;

  let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
  const newScore = { initials, score: time };

  highScores.push(newScore);
  highScores.sort((a, b) => b.score - a.score);
  highScores = highScores.slice(0, 5);

  localStorage.setItem('highScores', JSON.stringify(highScores));
}








