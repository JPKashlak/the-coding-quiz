var timer = document.getElementById("timer");
var startBtn = document.getElementById("startBtn");
var scoreBtn = document.getElementById("scoreBtn");
var questionSlot = document.getElementById("questions");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var correctIncorrect = document.getElementById("correct-incorrect")

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
    startBtn.style.visibility = "hidden"
    scoreBtn.style.visibility = "hidden"
}

startBtn.addEventListener("click", startQuiz);


// Check if answers are correct ---------------------------------
var checkAnswer1 = function () {
    if (questions[count].choices[0] === questions[count].solution) {
        correctIncorrect.innerHTML = "Correct!"
    }
    else {
        correctIncorrect.innerHTML = "Incorrect!"
    }
    nextQuestion();
}
var checkAnswer2 = function () {
    if (questions[count].choices[1] === questions[count].solution) {
        correctIncorrect.innerHTML = "Correct!"
    }
    else {
        correctIncorrect.innerHTML = "Incorrect!"
    }
    nextQuestion();
}
var checkAnswer3 = function () {
    if (questions[count].choices[2] === questions[count].solution) {
        correctIncorrect.innerHTML = "Correct!"
    }
    else {
        correctIncorrect.innerHTML = "Incorrect!"
    }
    nextQuestion();
}

answer1.addEventListener("click", checkAnswer1);
answer2.addEventListener("click", checkAnswer2);
answer3.addEventListener("click", checkAnswer3);

// Move to next question -----------------------------

var nextQuestion = function() {
    count++
    console.log(count)
    questionSlot.textContent = questions[count].text
    answer1.textContent = questions[count].choices[0]
    answer2.textContent = questions[count].choices[1]
    answer3.textContent = questions[count].choices[2] 
}


