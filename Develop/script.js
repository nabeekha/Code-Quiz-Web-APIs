var startButtonEl = document.querySelector("#start-quiz-button");
var count = 0;
var currentQuestionIndex = 0;
//var time = questions.length * 15;
var timeRemaining = 100;
var timeEl = document.getElementById("countdown");
var choicesEl = document.getElementById("choices");
//var score = document.getElementById("playerScore")
var score = 0;
var questionGameCount = 1;

//questions[0].title = this is how you refer to the various questions and answers. Brings value and property titles in the object "questions"
var questions = [{
    title: "1. Javascript is an __ language?", // key value pairs
    choices: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
    answer: "Object-Oriented", 
}, 
//change to reflect the values of each question. This would be the questions[1].title object
{
    title: "2. Which of the following keywords is used to define a variable in Javascript?", // key value pairs
    choices: ["var", "let", "Both A and B", "None of the above"],
    answer: "Both A and B", 
},

{
    title: "3. Upon encountering empty statements, what does the Javascript Interpreter do?", // key value pairs
    choices: ["Throws an error", "Ignores the statements", "Gives a warning", "None of the above"],
    answer: "Ignores the statements", 
},

{
    title: "4. Which of the following methods can be used to display data in some form using Javascript?", // key value pairs
    choices: ["document.write()", "console.log()", "window.alert()", "All of the above"],
    answer: "All of the above", 
}

];

function startQuiz() {
    //hide start screen 
    startButtonEl.style.display = "none";

    // unhide question section

    // a function to serve the questions 
    getQuestion()
    console.log("hello")

}

function countdownTimer() {
    var time = setInterval(function() {
        if (timeRemaining > -1){
            timeEl.textContent = timeRemaining;
            timeRemaining--;
        } else {
            clearInterval(time);
        }
    } ,1000);
}

function getQuestion() {
    //get currentQUestion object from the array
    var currentQuestion = questions[currentQuestionIndex]

    //update title of the question
    var titleEl = document.getElementById("question-title")
    titleEl.textContent = currentQuestion.title 

    //clear out the old question choices 
    choicesEl.innerHTML = ""

    //loop over choices 
    for (i = 0; i < currentQuestion.choices.length; i++) {
        var choice = currentQuestion.choices[i]
        var choiceButton = document.createElement("button")
        choiceButton.setAttribute("value", choice)
        choiceButton.textContent = choice;
        // display on the page
        choicesEl.appendChild(choiceButton)
    }
}

startButtonEl.addEventListener('click', startQuiz);
startButtonEl.addEventListener('click', countdownTimer);

//function to keep score as person clicks through questions
choicesEl.addEventListener('click', function(event){
    if (questionGameCount === 5) {
        answers.textContent = "Game over, you reached the end of the quiz!"
        score.textContent = score;
    } else if (event.target.textContent !== questions[currentQuestionIndex - 1].answer[0]) {
        answer.textContent = "wrong answer";
        timeRemaining -= 10;
    } else {
        answer.textContent = "right answer";
        score++;
        currentQuestionIndex++
    }
})

// function questionClick(event) {
//     console.log(event)
//     var buttonEl = event.target
//     if (buttonEl.value !== questions[currentQuestionIndex].answer)
//     {
//         //subtract time 
//         console.log(timeRemaining - 15);
//         timeEl.textContent = (timeRemaining - 15);

//         //add to score
//         score.textContent = 0;

//         // move to next quesiton 
//         currentQuestionIndex++
//     }
// }


console.log(timeRemaining);
console.log(score);
// startButtonEl.onClick = startQuiz




