////Come back to This for Timer////
// window.addEventListener('load', function() {

// });

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "cruly brackets"
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
        title: "A very useful tool used for during development and debugging for printing content to the debugger is:",
        choices: ["javascript", "terminal/bash", "for loops", "console log"],
        answer: "console log"
    },
    
  ];

window.addEventListener('load', renderQuestion);
var answers = document.querySelector("#answers");
var ansEval = document.querySelector("#evaluate-answer");
var timer = document.querySelector("#timer");
let runningQuestionIndex = 1;
let lastQuestionIndex = questions.length - 1;
let q = questions[runningQuestionIndex];
let score = 0;

function startTimer() {
    var timeLeft = 5;
    var timeInterval = setInterval(function() {
    timeLeft--;
    localStorage.setItem("timer", timeLeft);
    timer.textContent ="Time: " + timeLeft;
    if (timeLeft === 0) {
      timer.textContent = "Time's up!";
      clearInterval(timeInterval);
    }
  }, 1000);  
}

window.addEventListener('load', startTimer);


//Render the first question from array
function renderQuestion(){
    document.querySelector("#question-title").innerHTML = q.title;
    document.getElementById("0").innerHTML = "1 " + q.choices[0];
    document.getElementById("1").innerHTML = "2 " + q.choices[1];
    document.getElementById("2").innerHTML = "3 " + q.choices[2];
    document.getElementById("3").innerHTML = "4 " + q.choices[3];    
}

answers.addEventListener("click", function(event) {
    console.log("incrementing");
    if (runningQuestionIndex < lastQuestionIndex ) {
        runningQuestionIndex++;
        q = questions[runningQuestionIndex];
        renderQuestion();
    }
    
    console.log(runningQuestionIndex);
});

//Check the answer
function checkAnswer(event) {
    event.preventDefault();
    if(event.target.matches("button")) {
        var userAnswer = questions[runningQuestionIndex].choices[event.target.id];
        console.log(userAnswer);
        var correctAnswer = questions[runningQuestionIndex].answer;
        console.log(correctAnswer);
    }
    //move this once I figure out how advance to next question or use event targeting to print to id++
    if (userAnswer === correctAnswer) {
        //append these + separator to "asnwers" div in runningQuesitonIndex + 1
        ansEval.textContent = "Correct Answer!"
    } else {
        ansEval.textContent = "Wrong Answer!"
    }
}
answers.addEventListener("click", checkAnswer);





// answers.addEventListener("click", function(event) {
//     event.preventDefault();
//     if (runningQuestionIndex <= questions.length - 1) {
//     runningQuestionIndex++;
//     console.log(runningQuestionIndex++);
//     renderQuestion();
//     }
// });


// // ////Come back to This for Timer////


// function nextQuestion(){
//     if(Q1 == questions.length - 1){
//         Q1 = 0}
//     else{
//         Q1++;}
// }

// answers.addEventListener("click", nextQuestion);


    
