var question = document.querySelector("#question");
var choices = Array.from(document.querySelectorAll(".answer-text"));
var timer = document.querySelector("#timer-value");
var choiceBtn = document.querySelectorAll(".btn");
var scoreText = document.querySelector("#score");

var currentQuestion= {};
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

        return window.location.assign('./end.html');
    }
}, 1000);

//creating an array of objects so I can replace filler text of questions and choices, as well as the correct choice/answer
 var questions = [
     {
         question: "Commonly used data types do not include ___.",
         choice1: "strings",
         choice2: "booleans",
         choice3: "alerts",
         choice4: "numbers",
         answer: 3,
     },
     {
        question: "The condition in an if/else statement is enclosed with _____.",
         choice1: "quotes",
         choice2: "curly brackets",
         choice3: "parentheses",
         choice4: "square brackets",
         answer: 2,
     },
     {
         question: "Arrays in JavaScript can be used to store ____.",
         choice1: "numbers and strings",
         choice2: "other arrays",
         choice3: "booleans",
         choice4: "all of the above",
         answer: 4,
     },
     {
         question: "String values must be enclosed within ____ when being assigned to variables.",
         choice1: "commas",
         choice2: "curly brackets",
         choice3: "quotes",
         choice4: "parentheses",
         answer: 3,
     },
     {
         question: "A very useful tool using during development and debugging for printing content to the debugger is ____.",
         choice1: "JavaScript",
         choice2: "terminal / bash",
         choice3: "for loops",
         choice4: "console.log()",
         answer: 4,
     }
 ]

 var maxQuestions = 5;

 var startGame = function() {
 questionCounter = 0;
 scorePoints = 0;
 availableQuestions = [...questions];
 getNewQuestion();
 };

 //if the amount of available questions array is 0, or the question counter is larger than the amount of questions available (5), then store the score to the local Storage as mostRecentScore and redirect to the end.html
var getNewQuestion = function() {
     if(availableQuestions.length === 0 || questionCounter > maxQuestions) {
         var mostRecentScore = localStorage.setItem('mostRecentScore', score);

         return window.location.href = "./end.html";
         //window.location.assign("./html/end.html");
     };

     //increment question counter and randomize questions, replacing filler text with questions array
     questionCounter++;

     var questionIndex = Math.floor(Math.random() * availableQuestions.length);
     currentQuestion = availableQuestions[questionIndex];
     question.innerText = currentQuestion.question;

     choices.forEach(function(choice) {
         var number = choice.dataset['number'];
         choice.innerText = currentQuestion['choice' + number];
     });

    availableQuestions.splice(questionIndex, 1);
 };

 
//event listener for click
 choices.forEach(function(choice) {
     choice.addEventListener('click', function(event) { 
         var selectedChoice = event.target;
         var selectedAnswer = selectedChoice.dataset['number'];
        
         //checking to see if user selection is the correct answer. if it is correct, it will create a "correct!" message that disappears
         if (selectedAnswer == currentQuestion.answer) {
            score += 20;
            var correctMessage = document.getElementById("correct");
            correctMessage.setAttribute("style", "display: block");
            setTimeout(() => {
                correctMessage.setAttribute("style", "display: none");
                getNewQuestion();
             }, 1000); 
         //if the answer is incorrect, a "wrong!" message will appear and then disappear and time will be detracted
         } else if (selectedAnswer) {
            var wrongMessage = document.getElementById("wrong");
            wrongMessage.setAttribute("style", "display: block");
            setTimeout(() => {
                wrongMessage.setAttribute("style", "display: none");
                getNewQuestion();
             }, 1000); 
             count -= 10;
             timer.innerHTML= count;
         }

         setTimeout(() => {
            wrongMessage.setAttribute("style", "display: none");
            correctMessage.setAttribute("style", "display: none");
         }, 1000); 
    });
 });

startGame();