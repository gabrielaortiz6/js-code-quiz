var highScoresList = document.querySelector("#high-scores-list");
var highScores = JSON.parse(localStorage.getItem("highScores"));

//create <li> elements with the saved initials/name and score

var splitHighScores = Object.values(highScores);

function renderHighScoresList() {
    var listEl = document.createElement("li");
    highScoresList.appendChild(listEl);
    listEl.innerText = splitHighScores;
}

renderHighScoresList();