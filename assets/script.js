var quizContentEl = document.querySelector("#startButton");

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
    

// List Questions
var listQuestions = function() {
  
    for (i = 0; i < questionArray.length; i++) {
        document.getElementById("questionSlot").innerHTML = questionArray[i].text; 
        listQuestions

    
    }
    
}


// List Possible Answers
var listAnswers = function() { 

    for (i = 0; i < questionArray.length; i++) {
        if (i < questionArray.length){
        var button1 = document.getElementById("answerButton1").innerHTML = questionArray[i].answers[0];
            
        var button2 = document.getElementById("answerButton2").innerHTML = questionArray[i].answers[1];
           
        var button3 = document.getElementById("answerButton3").innerHTML = questionArray[i].answers[2];
        }
        else {
            
        }
        
        // var buttonsEl = getElementById("answerButton1");
        //     buttonsEl.appendChild("answer1");
            
    }
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