var quizContentEl = document.querySelector("#quiz");

// Questions
var questionArray = [{
    number: 1,
    text: "What event listener did I just use to start this quiz?",
    answers: ["Click", "Drag", "Hover", "Sing"],
    solution: [true, false, false, false],
},

];


var beginQuiz = function(event) {
    console.log(event);
    var listQuestionEl = document.createElement("h2");

};

quizContentEl.addEventListener("click", beginQuiz);