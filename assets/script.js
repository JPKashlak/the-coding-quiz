var questionSlot = document.getElementById("question");
var timer = document.getElementById("timer");
var startBtn = document.getElementById("startBtn");
var questionSlot = document.getElementById("questions");
var choicesSlot = document.getElementById("choices");
var currentQuestion = 0;
var time = 10;
var score = 0;

// Questions
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




// function nextQuestion() {

//     var question = questionArray[currentQuestion];
//     questionSlot.innerText = question.text;
//     a1.innerHTML = question.answer1;
//     a2.innerHTML = question.answer2;
//     a3.innerHTML = question.answer3; 

//     if (time <= 0) {
//         return window.location.assign("highScore.html");
//     }
    
// }

// function correctIncorrect(choice) {
//     if (choice == questionArray[currentQuestion].correct){
//         score++;
//     }

// }

// function beginQuiz() {
//     setInterval(function() {
//       timer.innerHTML = time;
//         time--;
//     }, 
//     1000); 

//     nextQuestion();
// }


// beginQuiz()

startBtn.addEventListener("click", XXXXXXX);
