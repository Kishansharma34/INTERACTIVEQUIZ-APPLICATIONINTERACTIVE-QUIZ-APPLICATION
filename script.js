// Questions Array
const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
        correct: 0
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        correct: 2
    },
    {
        question: "Which is not a JavaScript Framework?",
        options: ["React", "Angular", "Vue", "Django"],
        correct: 3
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "<!-- -->", "#", "**"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

// Select Elements
const questionElement = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option-btn");
const nextButton = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score");

// Load Question
function loadQuestion() {
    const q = questions[currentQuestion];
    questionElement.innerText = q.question;

    optionButtons.forEach((btn, index) => {
        btn.innerText = q.options[index];
        btn.style.background = "";
        btn.disabled = false;
    });
}

// Check Answer
optionButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const correctIndex = questions[currentQuestion].correct;

        if (index === correctIndex) {
            button.style.background = "green";
            score++;
        } else {
            button.style.background = "red";
            optionButtons[correctIndex].style.background = "green";
        }

        optionButtons.forEach(btn => btn.disabled = true);
    });
});

// Next Question
nextButton.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

// Show Result
function showResult() {
    questionElement.innerText = "Quiz Completed!";
    document.querySelector(".options").style.display = "none";
    nextButton.style.display = "none";
    scoreDisplay.innerText = "Your Score: " + score + " / " + questions.length;
}

// Start Quiz
loadQuestion();
