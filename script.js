var startButtonEl = document.querySelector("#start-quiz-button");
var count = 0;
var currentQuestionIndex = 0;
// var time = questions.length * 15;
var choicesEl = document.getElementById("choices");

//questions[0].title = this is how you refer to the various questions and answers. Brings value and property titles in the object "questions"
var questions = [{
    title: "1. Javascript is an __ language?", // key value pairs
    choices: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
    answer: "Object-Oriented", 
}, 
//change to reflect the values of each question. This would be the questions[1].title object
{
    title: "1. Javascript is an __ language?", // key value pairs
    choices: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
    answer: "Object-Oriented", 
},

{
    title: "1. Javascript is an __ language?", // key value pairs
    choices: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
    answer: "Object-Oriented", 
},

{
    title: "1. Javascript is an __ language?", // key value pairs
    choices: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
    answer: "Object-Oriented", 
}

];

function startQuiz() {
    //hide start screen 
    // unhide question section 

    //start timer & display timer 
    // a function to serve the questions 
    getQuestion()
    console.log("hello")

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

function questionClick(event) {
    console.log(event)
    var buttonEl = event.target
    if (buttonEl.value !== questions[currentQuestionIndex].answer)
    {
        //subtract time 

        // move to next quesiton 
        currentQuestionIndex++
    }
}

startButtonEl.addEventListener('click', startQuiz)
// startButtonEl.onClick = startQuiz




