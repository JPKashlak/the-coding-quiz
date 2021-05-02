var questionSlot = document.getElementById("question");
var timer = document.getElementById("timer");
var startBtn = document.getElementById("startBtn");
var scoreBtn = document.getElementById("scoreBtn");
var questionSlot = document.getElementById("questions");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var currentQuestion = 0;
var time = 10;
var score = 0;
var count = 0

// Quiz Questions
var questions = [
    {
        text: "Which of the following is NOT a JavaScript data type?",
        choices: ["Boolean", "Array", "String"],
        solution: "Array"
    },
    {
        text: "Which company developed JavaScript?",
        choices: ["Oracle", "Google", "Netscape"],
        solution: "Netscape"
    },
    {

        text: "Is JavaScript a front-end, back-end, or full-stack language?",
        choices: ["Front", "Back", "Full"],
        solution: "Full"
    },
    {
        text: "In what year did Brandan Eich develop Javascript?",
        choices: ["1975", "1985", "1995"],
        solution: "1985"
    },
    {
        text: "Under what name was JavaScript developed?",
        choices: ["Cortado", "Espresso", "Mocha"],
        solution: "Mocha"
    }
];

// Default state and start quiz --------------------------------
answer1.style.visibility = "hidden"
answer2.style.visibility = "hidden"
answer3.style.visibility = "hidden"

var startQuiz = function () {
    console.log("Quiz Start")
    answer1.style.visibility = "visible"
    answer2.style.visibility = "visible"
    answer3.style.visibility = "visible"
    questionSlot.textContent = questions[count].text
    answer1.textContent = questions[count].choices[0]
    answer2.textContent = questions[count].choices[1]
    answer3.textContent = questions[count].choices[2]
    count = count + 1
    startBtn.style.visibility = "hidden"
    scoreBtn.style.visibility = "hidden"
}

startBtn.addEventListener("click", startQuiz);
// End of quiz beginning ----------------------------------------

