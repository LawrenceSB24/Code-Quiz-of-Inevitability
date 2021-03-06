// Variable that selects the start button based on its id
var startBtn = document.getElementById("strt-btn");
// var restartBtn = document.getElementById("rst-btn")

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

// Variable that targets the high score element
var scoring = document.getElementById("highscore");

// Variable that targets the timer element
var TimerEl = document.getElementById("timer");

// Variable that targets the intro box.
var Begin = document.getElementById("intro");


//  Event listerners for the answer buttons
answerA.addEventListener('click', comparision);
answerB.addEventListener('click', comparision);
answerC.addEventListener('click', comparision);
answerD.addEventListener('click', comparision);

// counter variable for the current question by incrementing or decrementing said counter
// based on interactivity of buttons.
// var shuffle;
var current_Q = 0;

// counter for score. For correct answers, the counter will be incremented. For incorrect answers
// score will be decremented.
var score;

// Highscore variable to store the final score.
var HighS;

// counter for correct choices
var correct_Q;

// default counters for timer function
var seconds;

// Array that will contain questions and answers. Starting with one question as base line.
var questions = [
    {
        question: "What is the purpose of Javascript?",
        a: "To allow for greater interactivity of a website.",
        b: "To develop the software for computers.",
        c: "To make footlong xl sandwiches.",
        d: "To eat user data in form of chicken noodle soup.",
        correct: "A"
    },

    {
        question: "What format do you utilize to reference a js file in an HTML",
        a: "<a></a>",
        b: "<span></span>",
        c: "<src></src>",
        d: "<script></script>",
        correct: "D"
    },

    {
        question: "What is JSON?",
        a: "Javascript Oval Nuggets",
        b: "Javascript Object Notation",
        c: "Jumping sausage orca name",
        d: "Hyper Tacos Markup Language",
        correct: "B"
    },

    {
        question: "How do you write a function in Javascript?",
        a: "people function{} ()",
        b: "ask for its number",
        c: "people {function()}",
        d: "function people() {}",
        correct: "D"
    },

    {
        question: "How do you create a prompt in JS?",
        a: "<h1>",
        b: "speak()",
        c: "prompt()",
        d: ":talk",
        correct: "C"
    },

    {
        question: "What is the difference betweem '==' and '==='?",
        a: "both look at values",
        b: "== looks at values, === looks at values and types",
        c: "both look at types",
        d: "one looks at types, one looks at values",
        correct: "B"
    },

    {
        question: "What is the NaN property?",
        a: "Not-any-notes",
        b: "Not-a-Number",
        c: "Nuts-always-Near",
        d: "Nokia-and-Nike",
        correct: "B"
    },

    {
        question: "What does 'this' mean?",
        a: "this",
        b: "nothing",
        c: "something",
        d: "Refers to the object that the function is a property of",
        correct: "D"
    },

    {
        question: "What data types are included in JS?",
        a: "Numbers",
        b: "Booleans",
        c: "all of the above",
        d: "Object",
        correct: "C"
    },

];

// event lister for start button that begins the quiz
startBtn.addEventListener('click', beginQuiz);


// Function below that allows the user to begin the quiz

function beginQuiz() {
    console.log("Game has begun");
    Begin.classList.add("hide"); // When hit, the intro text and start button are removed
    quizBox.classList.remove("hide"); // First question is displayed after intro dissapears
    score = 0; // Initial starting score
    HighS = []; // Array that will contain the final score (maybe be removed later)
    current_Q= 0;
    show_Q();
    time();
}

// Function that allows the population of the quiz and answer button text
function show_Q() {
    quizQ.textContent = questions[current_Q].question;
    answerA.textContent = questions[current_Q].a;
    answerB.textContent = questions[current_Q].b;
    answerC.textContent = questions[current_Q].c;
    answerD.textContent = questions[current_Q].d;
    scoring.innerText = score;
}


// Function that governs the behavior of the timer
function time() {
    seconds = 120;
    timerInterval = setInterval(function () {
        seconds--;
        TimerEl.innerText = "Timer: " + seconds;
        if (seconds === 0) {
            clearInterval(timerInterval);
            End();
        }
    }, 1000);

    console.log(End)
}

// Quiz end funtion that removes the quiz and displays the score (In a perfect world)
function End() {
    quizBox.classList.add("hide");
    TimerEl.classList.add("hide");
    clearInterval(timerInterval);
    highscore();
}

// Comparison function to govern if choice selected by the user is correct or incorrect
function comparision(event) {
    if (event) {
        console.log(event.target);
        console.log(event.target.id);
    }

    // If user chooses the correct answer, the timer remains normal and the next question pops up
    if (event.target.id === questions[current_Q].correct) {
        console.log("correct!");
        score++;
        TimerEl.innerText = "Timer: " + seconds;
        console.log(score);

        // When user selects the wrong answer, time is subtracted and next question pops up
    } else {
        console.log("incorrect.");
        seconds -= 5;
        TimerEl.innerText = "Timer: " + seconds;
        TimerC();
    }

    // Final question that ends the quiz when answered.
    if (questions[current_Q].question == "What data types are included in JS?") {
        End();
    } else {
        current_Q++;
        show_Q();
    }
}

// Function that generates the highscore and the user's initials
function highscore() {
    scoring.classList.remove("hide")
    scoring.innerText = score
    initial = window.prompt("Please enter your initials: ");
    HighS = {
        Init: initial,
        Score: score
    }

    localStorage.setItem("high score". JSON.stringify(HighS));
}

// Function that checks when the timer hits 0 to end the game.
function TimerC() {
    if (seconds <= 0) {
        clearInterval(seconds);
        End();
    }
}