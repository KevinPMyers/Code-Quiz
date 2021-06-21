var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var startButton = document.getElementById('startbtn');
var quizEl = document.getElementById('questions');
var startQuizCon = document.getElementById("start-quiz");
var timer = document.getElementById("timer");
var buttonA = document.getElementById("a-btn");
var buttonB = document.getElementById("b-btn");
var buttonC = document.getElementById("c-btn");
var buttonD = document.getElementById("d-btn");











/* Quiz questions object array */
var codeQuestions = [
    {
    question: "Which language makes a website 'do things'?",
    chooseA: "CSS",
    chooseB: "HTML",
    chooseC: "JavaScript",
    chooseD: "Spanish",
    rightAnswer: "C" },
    {
        question: "Where in the html would you link the CSS page?",
        chooseA: "At the top of the page",
        chooseB: "At the bottom of the head element",
        chooseC: "The main section",
        chooseD: "At the bottom of the body",
        rightAnswer: "B",
    },
    {
        question: "What is an example of a third party API?",
        chooseA: "JQuery",
        chooseB: "JavaScript",
        chooseC: "Python",
        chooseD: "A Pizza Interaction",
        rightAnswer: "A",
    },
    {
        question: "Which of these are primitive values?",
        chooseA: "String",
        chooseB: "Boolean",
        chooseC: "Null",
        chooseD: "All of these",
        rightAnswer: "D",
    },

];
var lastQuestion = codeQuestions.length
var currentQuestionArray = 0;
var score = 0;
console.log(score);
timeRemain = 100;
var correct;


function makeQuiz() {
    
    if (currentQuestionArray === lastQuestion){
        return newScore();
    }
    var currentQuestion = codeQuestions[currentQuestionArray];

    quizEl.innerHTML = "<p>" + currentQuestion.question + "</p>";

    buttonA.innerHTML = currentQuestion.chooseA;
    buttonB.innerHTML = currentQuestion.chooseB;
    buttonC.innerHTML = currentQuestion.chooseC;
    buttonD.innerHTML = currentQuestion.chooseD;
    
    
};

function startQuiz(){
startQuizCon.style.display = "none";
makeQuiz();

timeSet = setInterval(function() {
    timeRemain--;
    timer.textContent = "Time Remaining " + timeRemain;

    if(timeRemain === 0){
        clearInterval(timeSet);

    }
}, 1000);

};

// function newScore(){

// }


function checkRight(rightAnswer){
    correct = codeQuestions[currentQuestionArray].rightAnswer;

    if (rightAnswer === correct && currentQuestionArray ){
        score++;
        alert("You got it right!");
        currentQuestionArray++;
        makeQuiz();
    }

    else if (rightAnswer !== correct && currentQuestionArray ){
        alert("Nope nope nope!")
        currentQuestionArray++;
        makeQuiz();
    }
    console.log(checkRight);
}
makeQuiz();

buttonA.addEventListener("click", checkRight);
buttonB.addEventListener("click", checkRight);
buttonC.addEventListener("click", checkRight);
buttonD.addEventListener("click", checkRight);

startButton.addEventListener("click", startQuiz);
