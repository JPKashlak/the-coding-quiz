var timer = document.getElementById("timer");
var startBtn = document.getElementById("startBtn");
var questionSlot = document.getElementById("questions");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var correctIncorrect = document.getElementById("correct-incorrect")
var input = document.getElementById("input")
var initialSLot = document.getElementById("initialSlot")
var saveBtn = document.getElementById("saveBtn")
var scoreMessage = document.getElementById("scoreMessage")
var scores = document.getElementById("scores")

var currentQuestion = 0;
var time = 99999;
if (time < 0) {
    time = 0
}
var count = 0
var countdown

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

// Timer Functionality -----------------------------------------
function updateClock() {
    countdown = setInterval(function() {
        if (time > 0) {
            time = time - 1
            timer.textContent = time
        }
        else {
            gameOver();
        }
    }, 1000);
}

// Default state and start quiz --------------------------------
answer1.style.visibility = "hidden"
answer2.style.visibility = "hidden"
answer3.style.visibility = "hidden"
input.style.visibility = "hidden"
scoreMessage.style.visibility = "hidden"

var startQuiz = function () {
    time = 60;
    timer.textContent = time
    count = 0;
    results.textContent = ""
    timer.style.visibility = "visible"
    answer1.style.visibility = "visible"
    answer2.style.visibility = "visible"
    answer3.style.visibility = "visible"
    input.style.visibility = "hidden"
    scoreMessage.style.visibility = "hidden"
    questionSlot.textContent = questions[count].text
    answer1.textContent = questions[count].choices[0]
    answer2.textContent = questions[count].choices[1]
    answer3.textContent = questions[count].choices[2]
    startBtn.style.visibility = "hidden"
    updateClock();
}

startBtn.addEventListener("click", startQuiz);


// Check if answers are correct ---------------------------------
var checkAnswer1 = function () {
    if (questions[count].choices[0] === questions[count].solution) {
        correctIncorrect.innerHTML = "Correct!"
    }
    else {
        correctIncorrect.innerHTML = "Incorrect!"
        time = time - 10
        timer.textContent = time
    }
    nextQuestion();
}
var checkAnswer2 = function () {
    if (questions[count].choices[1] === questions[count].solution) {
        correctIncorrect.innerHTML = "Correct!"
    }
    else {
        correctIncorrect.innerHTML = "Incorrect!"
        time = time - 10
        timer.textContent = time
    }
    nextQuestion();
}
var checkAnswer3 = function () {
    if (questions[count].choices[2] === questions[count].solution) {
        correctIncorrect.innerHTML = "Correct!"
    }
    else {
        correctIncorrect.innerHTML = "Incorrect!"
        time = time - 10
        timer.textContent = time
    }
    nextQuestion();
}

answer1.addEventListener("click", checkAnswer1);
answer2.addEventListener("click", checkAnswer2);
answer3.addEventListener("click", checkAnswer3);

// Move to next question -----------------------------
var nextQuestion = function() {
    count++
    if (count === 5) {
        gameOver();
    }
    else {
        questionSlot.textContent = questions[count].text
        answer1.textContent = questions[count].choices[0]
        answer2.textContent = questions[count].choices[1]
        answer3.textContent = questions[count].choices[2] 
    }
}

// Endgame and Score -------------------------------------------
var gameOver = function() {
    clearInterval(countdown)
    answer1.style.visibility = "hidden"
    answer2.style.visibility = "hidden"
    answer3.style.visibility = "hidden"
    timer.style.visibility = "hidden"
    questionSlot.textContent = "Quiz Complete!!"
    startBtn.style.visibility = "visible"
    startBtn.textContent = "Play Again?"
    scoreBoard()
}

var scoreBoard = function() {
    input.style.visibility = "visible"
    correctIncorrect.innerHTML = ""
    alert("You earned " + time + " points! Leave your initials for the scoreboard!")
}

var saveScore = function() {
    input.style.visibility = "hidden"
    scoreMessage.style.visibility = "visible"
    console.log(initialSLot.value)

    var score = document.createElement("li")
    score.textContent = initialSLot.value + ": " + time
    scores.appendChild(score);
}

saveBtn.addEventListener("click", saveScore);



