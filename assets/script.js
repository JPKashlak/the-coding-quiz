var questionSlot = document.getElementById("question");
var a1 = document.getElementById("answer1");
var a2 = document.getElementById("answer2");
var a3 = document.getElementById("answer3");
var timer = document.getElementById("timer");

// Questions
var questionArray = [
{
    text: "Which of the following is NOT a JavaScript data type?",
    answer1: "Boolean",
    answer2: "Array",
    answer3: "String",
    solution: 2
},
{
    text: "Which company developed JavaScript?",
    answer1: "Oracle",
    answer2: "Google",
    answer3: "Netscape",
    solution: 3
},
{

    text: "Is JavaScript a front-end, back-end, or full-stack language?",
    answer1: "Front",
    answer2: "Back",
    answer3: "Full",
    solution: 3
},
{
    text: "What year did Brandan Eich develop Javascript?",
    answer1: "1975",
    answer2: "1985",
    answer3: "1995",
    solution: 2
},
{
    text: "What name was JavaScript developed under?",
    answer1: "Cortado",
    answer2: "Espresso",
    answer3: "Mocha",
    solution: 3
}
];

let currentQuestion = 0;
let time = 60;

function quiz() {
    var question = questionArray[currentQuestion];
    questionSlot.innerText = question.text;
    a1.innerHTML = question.answer1;
    a2.innerHTML = question.answer2;
    a3.innerHTML = question.answer3; 
}


function beginQuiz(){
    setInterval(function() {
      timer.innerHTML= time;
        time--;
    }, 
    1000); 

    quiz();
}


beginQuiz()
