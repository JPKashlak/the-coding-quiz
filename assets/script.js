var quizContentEl = document.querySelector("#quiz");

// Questions
var questionArray = [
    "What event listener did I just use to start this quiz?",
    "Why?",
    "How?",
    "q4",
    "q5",
    "q6",
    "q7",
    "q8",
    "q9",
    "q10"
];

var answerArray = [
    ["Hi", "Hello", "Yep", "Indeed"],
    ["1", "2", "3", "4"],
    ["3"],
    ["4"],
    ["5"],
    ["6"],
    ["7"],
    ["8"],
    ["9"],
    ["10"]
];

var listQuestions = function(event) {
    document.getElementById("questionSlot").innerHTML = questionArray[0];
}

var listAnswers = function(event) {
    var listAnswers = document.createElement("button");   
    document.getElementById("answers").innerHTML = answerArray[0];
}

var beginQuiz = function(event) {

    // Deletes Start Button At Quiz Start
    var removeStart = document.getElementById("startButton");
        removeStart.remove();
    
    listAnswers();
    listQuestions();
};


// Event Listeners
quizContentEl.addEventListener("click", beginQuiz);