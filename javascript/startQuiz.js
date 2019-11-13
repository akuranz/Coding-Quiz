var startBtn = document.querySelector("#startQuiz");
var startContainer = document.querySelector("#start-container");
var questionContainer = document.querySelector("#question-container");


function nextContainer(event) {
  startContainer.setAttribute("style", "display: none");
  questionContainer.setAttribute("style", "display: block");
  
}

startBtn.addEventListener("click", nextContainer)



// firstQuestion.addEventListener("click", function(event) {
//   window.location.href = "questions.html";
// })





//Timer starts at 75 and decrements every second
//Timer decrements 15 seconds when wrong answer is clicked on any of the buttons




// var timer = document.querySelector("#timer");
// var storedTimer = localStorage.getItem("timer");
// var timertest = document.querySelector("#timertest");


//https://stackoverflow.com/questions/14028959/why-does-jquery-or-a-dom-method-such-as-getelementbyid-not-find-the-element



// function startTimer() {
//     var timeLeft = 5;
//     var timeInterval = setInterval(function() {
//     timeLeft--;
//     localStorage.setItem("timer", timeLeft);
//     timer.textContent ="Time: " + timeLeft;
//     if (timeLeft === 0) {
//       timer.textContent = "Time's up!";
//       clearInterval(timeInterval);
//     }
//   }, 1000);  
// }

// startBtn.addEventListener("click", startTimer);


// function startTimer() {
//     var timeLeft = 75;
//     var timeInterval = setInterval(function() {
//     timer.textContent ="Time: " + timeLeft;
//     timeLeft--;
//     if (timeLeft === 0) {
//       timer.textContent = "Time's up!";
//       clearInterval(timeInterval);
//     }
//   }, 1000);

//   localStorage.setItem("timer", timeLeft);
// }

// startBtn.addEventListener("click", startTimer);




// function startTimer() {
//     var timeLeft = 75;
//     var timeInterval = setInterval(function() {
//     timer.textContent ="Time: " + timeLeft;
//     timeLeft--;
//     if (timeLeft === 0) {
//       timer.textContent = "Time's up!";
//       clearInterval(timeInterval);
//     }
//   }, 1000);
////Ask About This////
// //   timer.setAttribute("style", "font-size: 34px; font-weight: bolder; padding: 15px;")
// }