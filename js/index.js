
let currentQuestionIndex = 0;
let score = 0;
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "What is 6 + 2?",
        options: ["3", "8", "5", "6"],
        correctAnswer: "8"
    }, {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "What is 200 * 2?",
        options: ["350", "400", "500", "600"],
        correctAnswer: "400"
    }, {
        question: "the monkey eat?",
        options: ["banana", "apple", "peach",],
        correctAnswer: "banana"
    },
    {
        question: "What is 3 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5"
    },

];

function startQuiz() {
    const name = document.getElementById("name").value;
    if (!name) {
        alert("Please enter your name.");
        return;
    }

    document.getElementById("screen-one").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionData = questions[currentQuestionIndex];
        document.getElementById("question").innerText = questionData.question;

        const answerButtons = document.getElementsByClassName("answer-btn");
        for (let i = 0; i < answerButtons.length; i++) {
            answerButtons[i].innerText = questionData.options[i];
        }
    } else {
        showResult();
    }
}

function checkAnswer(selectedIndex) {
    const questionData = questions[currentQuestionIndex];
    const selectedAnswer = questionData.options[selectedIndex];
    const correctAnswer = questionData.correctAnswer;

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    updateProgressBar();
    setTimeout(loadQuestion, 100);
}

function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar").firstElementChild;
    const percentage = (currentQuestionIndex / questions.length) * 100;
    progressBar.style.width = percentage + "%";
}



function showResult() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("result").innerText = `Name: ${document.getElementById("name").value}\nScore: ${score}`;
}


function showDashboard() {
    document.getElementById("result-container").style.display = "none";
    document.getElementById("history-container").style.display = "block";

    const userScores = document.getElementById("user-scores");
    userScores.innerHTML = "";


    const users = [
        {name:document.getElementById("name").value,score:score},
        {name: "ahmed", score: 8 },
        { name: "karim", score: 5 },
        { name: "jana", score: 4 },
        { name: "mohamed", score: 7 },
        { name: "omda", score: 5 },
        { name: "shams", score: 6 },


    ];

    users.sort((a, b) => b.score - a.score);

    for (const user of users) {
        const userScoreElement = document.createElement("div");
        userScoreElement.className = "user-score";
        userScoreElement.innerText = `${user.name}: ${user.score}`;
        userScores.appendChild(userScoreElement);
    }
}

