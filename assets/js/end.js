var initials = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit-btn");
var scoreText = document.querySelector("#score");

//retrieves the mostRecentScore we saved on script.js and displays it
mostRecentScore = localStorage.getItem("mostRecentScore") || [];

scoreText.textContent = mostRecentScore;

var highScores = JSON.parse(localStorage.getItem("highScores"))

submitBtn.addEventListener("click", saveHighScore);

//saves initials and score
function saveHighScore(event) {
    var score = {
        name: initials.value,
        score: mostRecentScore,
    }

    localStorage.setItem("highScores", JSON.stringify(score));
}

console.log(highScores);