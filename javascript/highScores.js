//HighScores Page
var clearHistory = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

clearHistory.addEventListener("click", localStorage.clear());

goBack.addEventListener("click", function(event) {
    window.location.href = "startQuiz.html";
  })

var highScoreRecord = localStorage.getItem("highScores");
var highScoreRecordPrint = JSON.parse(highScoreRecord);

var highScoresList = document.querySelector("#high-scores-list");

window.addEventListener('load', renderHighScores);

function renderHighScores () {
  var li = document.createElement("li");
  li.innerHTML = highScoreRecordPrint;
  highScoresList.append(li); 
}
    
