var clearHistory = document.querySelector("#clear")
var goBack = document.querySelector("#goBack")

clearHistory.addEventListener("click", localStorage.clear);

goBack.addEventListener("click", function(event) {
    window.location.href = "startQuiz.html";
  })

    
