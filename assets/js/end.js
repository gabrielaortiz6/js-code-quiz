var scoreText = document.querySelector("score");
var submitBtn = document.querySelector("#save-score-btn");

var highScores = JSON.parse(localStorage.getItem('highScores'));

var maxAmount

finalScore.innerText = mostRecentScore;

submitBtn.addEventListener("click", saveHighScore);

var saveHighScore = function(event) {
event.preventDefault();

var score = {
    score: mostRecentScore,
    name: 
}
}