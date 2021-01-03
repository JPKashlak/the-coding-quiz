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
    // answers: ["Click", "Drag", "Hover", "Sing"],
    // solution: [true, false, false, false],

];


var beginQuiz = function(event) {
    console.log(event);

    // Deletes Start Button At Quiz Start
    var removeStart = document.getElementById("startButton");
        removeStart.remove();

    document.getElementById("questionSlot").innerHTML = questionArray[0];
    


};

quizContentEl.addEventListener("click", beginQuiz);