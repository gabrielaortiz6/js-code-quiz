var highScoresList = document.querySelector("#high-scores-list");
var highScores = JSON.parse(localStorage.getItem("highScores"));

console.log(highScores);

//create <li> elements with the saved initials/name and score
// var highScoreListElement = highScoresList.createElement("li");
// highScoreListElement.textContent = highScores;