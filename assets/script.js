var quizContentEl = document.querySelector("#startButton");

// Questions
var questionArray = [];
var questions = [{
    text: "Question 1",
    answer1: "a",
    answer2: "b",
    answer3: "c",
    solution: ""
},
{
    text: "Question 2",
    answer1: "d",
    answer2: "e",
    answer3: "f",
    solution: ""
},
{

    text: "Question 3",
    answer1: "g",
    answer2: "h",
    answer3: "i",
    solution: ""
},
{
    text: "Question 4",
    answer1: "j",
    answer2: "k",
    answer3: "l",
    solution: ""
},
{
    text: "Question 5",
    answer1: "m",
    answer2: "n",
    answer3: "o",
    solution: ""
}];
    

// List Questions
var listQuestions = function() {  
       var questionLister = document.getElementById("questionSlot").innerHTML = questions.text;    
}


// List Possible Answers
var listAnswers = function() { 

    
        
    var answerButtons = document.querySelectorAll("answerButton");    
    // for (i = 0; i < questions.length; i++){
    //     answerButtons[i].style.display = "block";
    // };

    for (i = 0; i < questions.length; i++) {
        
        var button1 = document.getElementById("answerButton1").innerHTML = questions[i].answer1;
            
        var button2 = document.getElementById("answerButton2").innerHTML = questions[i].answer2;
           
        var button3 = document.getElementById("answerButton3").innerHTML = questions[i].answer3;
        
    }  
        // buttonsEl.appendChild("");
            
    }



// Start Quiz
var beginQuiz = function(event) {

    // Changes Start Button At Quiz Start
    var changeStart = document.getElementById("startButton").innerHTML = "Restart";

    listQuestions();
    listAnswers();
    
};


// Event Listeners
quizContentEl.addEventListener("click", beginQuiz);

