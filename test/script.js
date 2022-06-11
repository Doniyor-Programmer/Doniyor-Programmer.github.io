const startButton = document.getElementById("start-btn"),
    nextButton = document.getElementById("next-btn"),
    questionContainerElement = document.getElementById("question-container"),
    questionElement = document.getElementById("question"),
    answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;
let counter = 0;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.append(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.firstChild.remove();
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        counter++;
    }
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
    } else {
        startButton.innerText = `${counter} / ${shuffledQuestions.length} Restart`;
        startButton.classList.remove("hide");
        counter = 0;
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

const questions = [{
        question: "What is 4 * 2 ?",
        answers: [{
                text: "6",
                correct: false
            },
            {
                text: "8",
                correct: true
            }
        ]
    },
    {
        question: "What is 2 + 2 ?",
        answers: [{
                text: "4",
                correct: true
            },
            {
                text: "22",
                correct: false
            }
        ]
    },
    {
        question: "Who is best YouTuber ?",
        answers: [{
                text: "Web Dev Simplified",
                correct: true
            },
            {
                text: "Doniyor Davronov",
                correct: true
            },
            {
                text: "Ivan Petrychenko",
                correct: true
            },
            {
                text: "Mike Dane",
                correct: true
            }
        ]
    }
];