var startBtn = document.querySelector("#startQuiz");
var startContainer = document.querySelector("#start-container");
var questionContainer = document.querySelector("#question-container");
var scoreContainer = document.querySelector("#score-container");
var finalScore = document.querySelector("#final-score");
var finalAnswer = document.querySelector("#answers");
var enterInitials = document.querySelector("#enter-initials");
var submitInitials = document.querySelector("#submit-initials");
var answers = document.querySelector("#answers");
var ansEval = document.querySelector("#evaluate-answer");
var ansEvalFinal = document.querySelector("#evaluate-answer-final");
var timer = document.querySelector("#timer");

var bell = new Audio();
bell.src = "./assets/Ting-Popup_Pixels-349896185.mp3";
var buzzer = new Audio();
buzzer.src = "./assets/Buzzer-SoundBible.com-188422102.mp3";

var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "curly brackets"
  },
  {
    title: "Arrays in javascript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above"
    ],
    answer: "all of the above"
  },
  {
    title:
      "String values must be enclosed with ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["javascript", "terminal/bash", "for loops", "console log"],
    answer: "console log"
  }
];
let currentQuestionIndex = 0;
let q = questions[currentQuestionIndex];
let score = 0;
var timeLeft = 75;
var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

//EVENTS

window.addEventListener("load", renderQuestion);

startBtn.addEventListener("click", Start);

answers.addEventListener("click", checkAnswer);

finalAnswer.addEventListener("click", finalScorePage);

submitInitials.addEventListener("click", function(event) {
  event.preventDefault();
  var initials = enterInitials.value;
  var newScores = {
    initials,
    score
  };
  highscores.push(newScores);
  localStorage.setItem("highscores", JSON.stringify(highscores));

  console.log(initials, score);

  window.location.href = "HighScores.html";
});

//FUNCTIONS

function Start() {
  currentQuestionIndex = 0;
  console.log(highscores);

  startContainer.setAttribute("style", "display: none");
  questionContainer.setAttribute("style", "display: block");
  startTimer();
}
//Time interval starts at 75, decreases by 15 if question answered incorrectly,
//clears at 0 and when last question answered
function startTimer() {
  var timeInterval = setInterval(function() {
    timeLeft--;
    localStorage.setItem("timer", timeLeft);
    timer.innerHTML = "|  Time: " + timeLeft;
    var icon = document.createElement("i");
    icon.setAttribute("class", "fas fa-hourglass-start fa-spin");
    timer.prepend(icon);
    if (timeLeft === 0) {
      timer.textContent = "|  Time's up!";
      timer.style.backgroundColor = "red";
      timer.style.borderColor = "red";
      timer.style.color = "#ffffff";
      icon.setAttribute("class", "fas fa-hourglass-end");
      timer.prepend(icon);
      clearInterval(timeInterval);
    }
    if (currentQuestionIndex === 5) {
      timer.textContent = "|  Great work!";
      timer.style.backgroundColor = "green";
      timer.style.borderColor = "green";
      timer.style.color = "#ffffff";
      icon.setAttribute("class", "fas fa-hourglass-end");
      timer.prepend(icon);
      timer.setAttribute("class", "timer");
      clearInterval(timeInterval);
    }
    if (score <= 0 && currentQuestionIndex === 5) {
      timer.textContent = "|  Try again to rank higher!";
      timer.style.backgroundColor = "red";
      timer.style.borderColor = "red";
      timer.style.color = "#ffffff";
      icon.setAttribute("class", "fas fa-hourglass-end");
      timer.prepend(icon);
      timer.setAttribute("class", "timer");
      clearInterval(timeInterval);
    }
  }, 1000);
}

//Render the first question from array
function renderQuestion() {
  document.querySelector("#question-title").innerHTML = q.title;
  document.getElementById("0").innerHTML = "1. " + q.choices[0];
  document.getElementById("1").innerHTML = "2. " + q.choices[1];
  document.getElementById("2").innerHTML = "3. " + q.choices[2];
  document.getElementById("3").innerHTML = "4. " + q.choices[3];
}

//Check the index of the choice linked to button against answer in array
function checkAnswer(event) {
  q = questions[currentQuestionIndex];
  event.preventDefault();
  if (event.target.matches("button")) {
    var userAnswer = questions[currentQuestionIndex].choices[event.target.id];
    console.log(userAnswer);
    var correctAnswer = questions[currentQuestionIndex].answer;
    console.log(correctAnswer);
  }
  if (userAnswer === correctAnswer) {
    score += 10;
    console.log(score);
  } else timeLeft -= 15;
  if (userAnswer === correctAnswer) {
    ansEval.textContent = "Correct Answer!";
    setTimeout(function() {
      ansEval.textContent = "";
    }, 3000);
    console.log("Correct", ansEval);
    bell.play();
  } else {
    ansEval.textContent = "Wrong Answer!";
    console.log("Wrong", ansEval);
    setTimeout(function() {
      ansEval.textContent = "";
    }, 3000);
    buzzer.play();
  }
  if (userAnswer === correctAnswer && currentQuestionIndex === 4) {
    ansEvalFinal.textContent = "Correct Answer!";
    console.log("Correct", ansEvalFinal);
    setTimeout(function() {
      ansEvalFinal.textContent = "";
    }, 3000);
  } else {
    ansEvalFinal.textContent = "Wrong Answer!";
    console.log("Wrong", ansEvalFinal);
    setTimeout(function() {
      ansEvalFinal.textContent = "";
    }, 3000);
  }

  nextQuestion();
}

//has to be after check answer
function nextQuestion() {
  console.log("incrementing");
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    q = questions[currentQuestionIndex];
    renderQuestion();
  }

  console.log(currentQuestionIndex);
}

//displays final score page wih final score
function finalScorePage(event) {
  q = questions[currentQuestionIndex];
  if (event.target.matches("button") && currentQuestionIndex === 5) {
    questionContainer.setAttribute("style", "display: none");
    scoreContainer.setAttribute("style", "display: block");
    finalScore.textContent =
      "Your final score is " + (score += timeLeft) + " !";
    finalScore.setAttribute("class", "score");
  }
  console.log("finalscorepage");
}
