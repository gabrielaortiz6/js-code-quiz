var highScoresList = document.querySelector("#high-scores-list");
var highScores = JSON.parse(localStorage.getItem("highScores"));

//create <li> elements with the saved initials/name and score

var splitHighScores = Object.values(highScores);

var stringSplitHighScores = splitHighScores.toString();

var values = stringSplitHighScores.split(",", 2);

function renderHighScoresList() {
    var listEl = document.createElement("li");
    highScoresList.appendChild(listEl);
    listEl.innerText = values[0] + " - " + values[1];
}

renderHighScoresList();