var question = document.querySelector("#question");
var choices = document.querySelectorAll(".answer-text");
var timer = document.querySelector("#timer-value");

var currentQuestion= "";
var questionCounter = 0;
var availableQuestions = [];

var score = 0;

var questions = [
    {
        question: "Commonly used data types DO NOT include ___.",
        firstChoice: "strings",
        secondChoice: "booleans",
        thirdChoice: "alerts",
        fourthChoice: "numbers",
        answer: 3,
    },
    {
        question: "The condition in an if/else statement is enclosed with _____.",
        firstChoice: "quotes",
        secondChoice: "curly brackets",
        thirdChoice: "parentheses",
        fourthChoice: "square brackets",
        answer: 2,
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        firstChoice: "numbers and strings",
        secondChoice: "other arrays",
        thirdChoice: "booleans",
        fourthChoice: "all of the above",
        answer: 4,
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        firstChoice: "commas",
        secondChoice: "curly brackets",
        thirdChoice: "quotes",
        fourthChoice: "parentheses",
        answer: 3,
    },
    {
        question: "A very useful tool using during development and debugging for printing content to the debugger is ____.",
        firstChoice: "JavaScript",
        secondChoice: "terminal / bash",
        thirdChoice: "for loops",
        fourthChoice: "console.log()",
        answer: 4,
    }
]

var score = 100;
var maxQuestions = 5;

var startGame = function() {
questionCounter = 0;
score = 0;
availableQuestions = questions.values();

}

console.log(availableQuestions);