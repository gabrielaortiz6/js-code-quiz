var initials = document.querySelector("#initials");
var submitBtn = document.querySelector("#save-score-btn");
var scoreText = document.querySelector("#score");

//retrieves the mostRecentScore we saved on script.js and displays it
var mostRecentScore = localStorage.getItem("mostRecentScore");

console.log(mostRecentScore);

scoreText.textContent = mostRecentScore;

//saves initials and score

var maxAmountOfScores = 5;

var highScores = JSON.parse(localStorage.getItem("highScores"))

var saveHighScore = function(event) {
    event.preventDefault();

    var score = {
        score: mostRecentScore,
        name: initials.value,
    }

    highScores.push(score);

    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("/");
}

submitBtn.addEventListener("click", saveHighScore());