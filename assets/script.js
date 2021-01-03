var quizContentEl = document.querySelector("#quiz");

// Questions
var questionArray = [{
    text: "Question 1",
    answers: ["a","b","c"]
},
{
    text: "Question 2",
    answers: ["d","e","f"]
},
{

    text: "Question 3",
    answers: ["g","h","i"]
},
{
    text: "Question 4",
    answers: ["j","k","l"]
},
{
    text: "Question 5",
    answers: ["m","n","o"]
}];
    

// Questions
var listQuestions = function() {

    
    for (i = 0; i < questionArray.length; i++)

    if (i < questionArray.length) {

        document.getElementById("questionSlot").innerHTML = questionArray[i].text;
    };
    
};


// Answers
var listAnswers = function() { 

   
    for (i = 0; i < questionArray.length; i++) {
    document.getElementById("answers").innerHTML = questionArray[i].answers;
    }
}


// Start Quiz
var beginQuiz = function(event) {

    // Deletes Start Button At Quiz Start
    var removeStart = document.getElementById("startButton");
        removeStart.remove();

    listQuestions();
    listAnswers();
    
};


// Event Listeners
quizContentEl.addEventListener("click", beginQuiz);