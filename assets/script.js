var questionSlot = document.getElementById("question");
var a1 = document.getElementById("answer1");
var a2 = document.getElementById("answer2");
var a3 = document.getElementById("answer3");

// Questions
var questionArray = [
{
    text: "Question 1",
    answer1: "a",
    answer2: "b",
    answer3: "c",
    solution: 1
},
{
    text: "Question 2",
    answer1: "d",
    answer2: "e",
    answer3: "f",
    solution: 3
},
{

    text: "Question 3",
    answer1: "g",
    answer2: "h",
    answer3: "i",
    solution: 3
},
{
    text: "Question 4",
    answer1: "j",
    answer2: "k",
    answer3: "l",
    solution: 2
},
{
    text: "Question 5",
    answer1: "m",
    answer2: "n",
    answer3: "o",
    solution: 3
}
];

let currentQuestion = 0;

function quiz() {
    var question = questionArray[currentQuestion];
    questionSlot.innerText = question.text;
    a1.innerHTML = question.answer1;
    a2.innerHTML = question.answer2;
    a3.innerHTML = question.answer3; 
}

quiz()
