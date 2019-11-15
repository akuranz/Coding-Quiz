var startBtn = document.querySelector("#startQuiz");
var startContainer = document.querySelector("#start-container");
var questionContainer = document.querySelector("#question-container");
var scoreContainer = document.querySelector("#score-container");
var finalScore = document.querySelector("#final-score");
var finalAnswer = document.querySelector("#answers");
var enterInitials = document.querySelector("#enter-initials");
var submitInitials = document.querySelector("#submit-initials");

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
      choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
      answer: "all of the above"
  },
  {
      title: "String values must be enclosed with ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
  },
  {
      title: "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["javascript", "terminal/bash", "for loops", "console log"],
      answer: "console log"
  },
  
];


window.addEventListener('load', renderQuestion);
var answers = document.querySelector("#answers");
var ansEval = document.querySelector("#evaluate-answer");
var timer = document.querySelector("#timer");
let currentQuestionIndex = 0;
let q = questions[currentQuestionIndex];
let score = 0;
var timeLeft = 75;

//Time interval starts at 75, decreases by 15 if question answered incorrectly, 
//clears at 0 and when last question answered
function startTimer() {
  var timeInterval = setInterval(function() {
  timeLeft--;
  localStorage.setItem("timer", timeLeft);
  timer.textContent ="Time: " + timeLeft;
  if (timeLeft === 0) {
    timer.textContent = "Time's up!";
    clearInterval(timeInterval);
  }
  if (currentQuestionIndex === 5) {
    timer.textContent = "Great work!";
    clearInterval(timeInterval);
  }

}, 1000);  
}

startBtn.addEventListener("click", startTimer);

function nextContainer(event) {
  startContainer.setAttribute("style", "display: none");
  questionContainer.setAttribute("style", "display: block");
}
startBtn.addEventListener("click", nextContainer)

//Render the first question from array
function renderQuestion(){
  document.querySelector("#question-title").innerHTML = q.title;
  document.getElementById("0").innerHTML = "1 " + q.choices[0];
  document.getElementById("1").innerHTML = "2 " + q.choices[1];
  document.getElementById("2").innerHTML = "3 " + q.choices[2];
  document.getElementById("3").innerHTML = "4 " + q.choices[3];    
}

//Check the index of the choice linked to button against answer in array
function checkAnswer(event) {
  q = questions[currentQuestionIndex];
  event.preventDefault();
  if(event.target.matches("button")) {
      var userAnswer = questions[currentQuestionIndex].choices[event.target.id];
      console.log(userAnswer);
      var correctAnswer = questions[currentQuestionIndex].answer;
      console.log(correctAnswer);
  }
  if (userAnswer === correctAnswer) {
    score += 10;
    console.log(score);
  }  else 
    timeLeft -= 15;
  if (userAnswer === correctAnswer) {
          ansEval.textContent = "Correct Answer!"
    
      } else {
          ansEval.textContent = "Wrong Answer!"
      }
  }
answers.addEventListener("click", checkAnswer);

//has to be after check answer
function nextQuestion (event) {
  console.log("incrementing");
  if (currentQuestionIndex < questions.length ) {
      currentQuestionIndex++;
      q = questions[currentQuestionIndex];
      renderQuestion();
  }
  
  console.log(currentQuestionIndex);
}
answers.addEventListener("click", nextQuestion);

//displays final score page wih final score 
function finalScorePage(event) {
  q = questions[currentQuestionIndex];
  if(event.target.matches("button") && currentQuestionIndex === 5) {
    questionContainer.setAttribute("style", "display: none");
    scoreContainer.setAttribute("style", "display: block");
    finalScore.textContent = "Your final score is " + (score += timeLeft);
}
console.log("finalscorepage");
}
finalAnswer.addEventListener("click", finalScorePage);

//None of this seems to work correctly
var initials = enterInitials.value;


var highScores = [{
    initials: initials,
    score: score
}];

function pushToHighscoreArr(event) {
  event.preventDefault();
  var initials = enterInitials.value;
  highScores.push(initials);
  highScores.push(score);
  console.log("highscore array", highScores);
}

submitInitials.addEventListener("click", pushToHighscoreArr);

function logInitials () {
  var highscoresStringified = JSON.stringify(highScores);
  localStorage.setItem("Highscores", highscoresStringified);
}
submitInitials.addEventListener("click", logInitials);

submitInitials.addEventListener("click", function() {
  window.location.href = "HighScores.html";
})


// //HighScores Page
// var clearHistory = document.querySelector("#clear");
// var goBack = document.querySelector("#goBack");
// var loggedHighScores = localStorage.getItem("Initials");
// var highScores = document.querySelector("#high-scores");

// window.addEventListener('load', function () {
//   highScores.textContent = loggedHighScores;
// });

// clearHistory.addEventListener("click", localStorage.clear);

// goBack.addEventListener("click", function(event) {
//     window.location.href = "startQuiz.html";
//   })
