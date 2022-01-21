// Variable that selects the start button based on its id
var startBtn = document.getElementById("strt-btn");
var restartBtn = document.getElementById("rst-btn")

// Variable that focus on the container for the quiz
var quizBox = document.getElementById("question-container");

// Variables that target the question and answer elements
//first variable targets the question text
var quizQ = document.getElementById("question-txt");

// Next four target the answer choices within the choice buttons
var answerA = document.getElementById("A");
var answerB = document.getElementById("B");
var answerC = document.getElementById("C");
var answerD = document.getElementById("D");

// Variable that targets the timer element
var TimerEl = document.getElementById("timer");

// Variable that targets the intro box.
var Begin = document.getElementById("intro");


// Variables that target the initials and highscore elements
var Inits = document.getElementById("initials");
var HS = document.getElementById("highscore");


// counter variable for the current question by incrementing or decrementing said counter
// based on interactivity of buttons.
// var shuffle;
var current_Q = 0;
var currentQuestion;


// counter for score. For correct answers, the counter will be incremented. For incorrect answers
// score will be decremented.
var score = 0;

// counter for correct choices
var correct_Q = 0;

// default counters for timer function
let seconds;
// Array that will contain questions and answers. Starting with one question as base line.
// Potential total of 10-20 questions.

var questions = [
    {
        question: "What is the purpose of Javascript?",
        a: "To allow for greater interactivity of a website.",
        b: "To develop the software for computers.",
        c: "To make footlong xl sandwiches.",
        d: "To eat user data in form of chicken noodle soup.",
        correct: "To create the backbone of a website."
    },

    {
        question: "What format do you utilize to reference a js file in an HTML",
        a: "<a></a>",
        b: "<span></span>",
        c: "<src></src>",
        d: "<script></script>",
        correct: "<script></script>"
    },

    {
        question: "What is JSON?",
        a: "Javascript Oval Nuggets",
        b: "Javascript Object Notation",
        c: "Jumping sausage orca name",
        d: "Hyper Tacos Markup Language",
        correct: "Hypertext Markup Language"
    },

    {
        question: "How do you write a function in Javascript?",
        a: "people function{} ()",
        b: "ask for its number",
        c: "people {function()}",
        d: "function people() {}",
        correct: "function people() {}"
    },

    {
        question: "How do you create a prompt in JS?",
        a: "<h1>",
        b: "speak()",
        c: "prompt()",
        d: ":talk",
        correct: "prompt()"
    },

    {
        question: "What is the difference betweem '==' and '==='?",
        a: "both look at values",
        b: "== looks at values, === looks at values and types",
        c: "both look at types",
        d: "one looks at types, one looks at values",
        correct: "== looks at values, === looks at values and types"
    },

    {
        question: "What is the NaN property?",
        a: "Not-any-notes",
        b: "Not-a-Number",
        c: "Nuts-always-Near",
        d: "Nokia-and-Nike",
        correct: "Not-a-Number"
    },

    {
        question: "What does 'this' mean?",
        a: "this",
        b: "nothing",
        c: "something",
        d: "Refers to the object that the function is a property of",
        correct: "Refers to the object that the function is a property of"
    },

    {
        question: "What data types are included in JS?",
        a: "Numbers",
        b: "Booleans",
        c: "all of the above",
        d: "Object",
        correct: "all of the above"
    },

];

// event listers for start, reset, and option buttons
startBtn.addEventListener('click', beginQuiz);



function beginQuiz() {
    console.log("Game has begun");
    Begin.classList.add("hide");
    quizBox.classList.remove("hide");
    show_Q();
    time();
}


function show_Q() {
    currentQuestion = questions[current_Q];
    quizQ.textContent = currentQuestion.question;
    answerA.textContent = currentQuestion.a;
    answerB.textContent = currentQuestion.b;
    answerC.textContent = currentQuestion.c;
    answerD.textContent = currentQuestion.d;


    answerA.addEventListener('click', comparision);
    answerB.addEventListener('click', comparision);
    answerC.addEventListener('click', comparision);
    answerD.addEventListener('click', comparision);

}

function time() {
    seconds = 120;
    timerInterval = setInterval(function () {
        seconds--;
        TimerEl.innerText = "Timer: " + seconds;
        if (seconds < 0 || current_Q === questions[current_Q].length) {
            End();
        }
    }, 1000);
}

function End() {
    clearInterval(timerInterval);
    currentQuestion = 0;
    quizBox.classList.add("hide");
    highscore();
}

function comparision(event) {
    if (event.target.matches === currentQuestion.correct) {
        console.log("correct!");
        correct_Q++;
        score++;
        current_Q++;
        TimerEl.innerText = "Timer: " + seconds;
    } 
    
    if (event.target.matches !== currentQuestion.correct) {
        console.log("incorrect.");
        seconds -= 5;
        TimerEl.innerText = "Timer: " + seconds;
        current_Q++;
    }

    if (current_Q < questions.length) {
        show_Q();
    } else {
        End();
    }
}


function highscore() {
    Inits.classList.remove("hide");
    HS.classList.remove("hide");
    initial = prompt("Please enter your initials: ");
    Inits.innerText = initial;
    HS.innerText = "Highscore: " + score;
}
