var question = document.querySelector("#question");
var choices = document.querySelectorAll(".answer-text");
var timer = document.querySelector("#timer-value");
var btn = document.querySelectorAll(".btn");

var currentQuestion= "";
var questionCounter = 0;
var availableQuestions = [];

var score = 0;

//Timer function - countdown from 75 seconds
timer.value = 75;

var count = timer.value;

var countDown = setInterval(function() {
    timer.textContent = count--;

    //if the timer runs out, you receive an alert and are redirected to the end, where you can save your score and enter your initials
    if (count < 0 ) {
        clearInterval(countDown);
        alert("Oops! You ran out of time.");

        return window.location.assign('/end.html');
    }
}, 1000);

// var questions = [
//     {
//         question: "Commonly used data types DO NOT include ___.",
//         firstChoice: "strings",
//         secondChoice: "booleans",
//         thirdChoice: "alerts",
//         fourthChoice: "numbers",
//         answer: 3,
//     },
//     {
//         question: "The condition in an if/else statement is enclosed with _____.",
//         firstChoice: "quotes",
//         secondChoice: "curly brackets",
//         thirdChoice: "parentheses",
//         fourthChoice: "square brackets",
//         answer: 2,
//     },
//     {
//         question: "Arrays in JavaScript can be used to store ____.",
//         firstChoice: "numbers and strings",
//         secondChoice: "other arrays",
//         thirdChoice: "booleans",
//         fourthChoice: "all of the above",
//         answer: 4,
//     },
//     {
//         question: "String values must be enclosed within ____ when being assigned to variables.",
//         firstChoice: "commas",
//         secondChoice: "curly brackets",
//         thirdChoice: "quotes",
//         fourthChoice: "parentheses",
//         answer: 3,
//     },
//     {
//         question: "A very useful tool using during development and debugging for printing content to the debugger is ____.",
//         firstChoice: "JavaScript",
//         secondChoice: "terminal / bash",
//         thirdChoice: "for loops",
//         fourthChoice: "console.log()",
//         answer: 4,
//     }
// ]

// var score = 20;
// var maxQuestions = 5;

// var startGame = function() {
// questionCounter = 0;
// score = 0;
// availableQuestions = [...questions];
// getNewQuestion()
// }

// getNewQuestion = function() {
//     if(availableQuestions.length === 0 || questionCounter > maxQuestions) {
//         localStorage.setItem('mostRecentScore', score)

//         //this might have to be different
//         return window.location.assign('/end.html')
//     }

//     questionCounter++;

//     var questionIndex = Math.floor(Math.random() * availableQuestions.length);
//     currentQuestion = availableQuestions[questionIndex];
//     question.innerText = currentQuestion.question;

//     choices.forEach(function(choice) {
//         var number = choice.dataset('number');
//         choice.innerText = currentQuestion['choice' + number];
//     });

//     availableQuestions.splice(questionIndex, 1);
// }

// choices.forEach(function(choice) {
//     choice.addEventListener('click', function(event) { 
//         var selectedChoice = event.target;
//         var selectedAnswer = selectedChoice.dataset['number'];

//         if (selectedAnswer == currentQuestion.answer) {
//             var message = document.querySelector(".hidden");
//             message.textContent = "Correct!";
//         } else {
//             message.textContent = "Wrong!";
//         }
//     });
// })