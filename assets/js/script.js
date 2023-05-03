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









