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
var current_Q = 0;
var currentQuestion;

// counter for score. For correct answers, the counter will be incremented. For incorrect answers
// score will be decremented.
var score = 0;

// counter for correct choices
var correct = 0;

// default counters for timer function
var seconds;
// Array that will contain questions and answers. Starting with one question as base line.
// Potential total of 10-20 questions.

var questions = [
    // {
    //     question: "What is the purpose of HTML?",
    //     answers: [
    //         "a: To create the backbone of a website.",
    //         "b: To develop the software for computers.",
    //         "c: To make footlong xl sandwiches.",
    //         "d: To eat user data in form of chicken noodle soup."
    //     ],
    //     correct: "a"
    // },

    {
        question: "What is JS an abbreviation for?",
        answers: [
            "a: Javascript",
            "b: Jellybean Soup",
            "c: Jackrabbit speedster",
            "d: Jealous Snake"
        ],
        correct: "a"
    },

    {
        question: "What is HTML?",
        answers: [
            "a: Hot Tomato Market Language",
            "b: Hypertext Markup Language",
            "c: Henious To Most Luggage",
            "d: Hyper Tacos Markup Language"
        ],
        correct: "b"
    },

    {
        question: "How do you write a function in Javascript?",
        answers: [
            "a: people function{} ()",
            "b: ask for its number",
            "c: people {function()}",
            "d: function people() {}"
        ],
        correct: "d"
    },

    {
        question: "What is the proper syntax for an HTML file?",
        answers: [
            "a: <html>, <head>, <body>, <h1>, <p>",
            "b: <head>, <html>, <h1>, <body>, <p>",
            "c: <h1>, <html>, <p>, <head>, <body>",
            "d: <p>, <h1>, <body>, <head>, <html>"
        ],
        correct: "a"
    }
];

// event listers for start, reset, and option buttons
startBtn.addEventListener('click', beginQuiz);
answerA.addEventListener('click', comparision);
answerB.addEventListener('click', comparision)
answerC.addEventListener('click', comparision)
answerD.addEventListener('click', comparision)

// answerA.addEventListener("click");
// answerB.addEventListener("click");
// answerC.addEventListener("click");
// answerD.addEventListener("click");

function beginQuiz() {
    console.log("Game has begun");
    current_Q = 0;
    Begin.classList.add("hide");
    quizBox.classList.remove("hide");
    show_Q();
    time();
}


function show_Q() {
    currentQuestion = questions[current_Q];
    quizQ.textContent = currentQuestion.question;
    answerA.textContent = currentQuestion.answers[0];
    answerB.textContent = currentQuestion.answers[1];
    answerC.textContent = currentQuestion.answers[2];
    answerD.textContent = currentQuestion.answers[3];

}

function time() {
    seconds = 120;
    timerInterval = setInterval(function () {
        seconds--;
        TimerEl.innerText = "Timer: " + seconds;
        if (seconds < 0 || current_Q === questions.length) {
            End();
        }
    }, 1000);
}

function End() {
    clearInterval(timerInterval);
    currentQuestion = 0;
    quizBox.classList.add("hide");
    Inits.classList.remove("hide");
    HS.classList.remove("hide")
}

function comparision(e) {
    if (e.target.id === questions.correct) {
        console.log("correct!");
        score++;

        // currentQuestion++;
        
    } else {
        console.log("incorrect.");
        seconds = seconds - 5;
        TimerEl.innerText = "Timer: " + seconds;
        // currentQuestion++;
    }
    if (currentQuestion < questions.length) {
        
    }
}

function highscore() {
    Inits.innerText = InputEvent;
    HS.innerText = score;
}
