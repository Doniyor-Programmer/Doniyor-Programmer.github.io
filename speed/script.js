const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random',
    quoteDisplayElement = document.getElementById("quoteDisplay"),
    quoteInputElement = document.getElementById("quoteInput"),
    timerElement = document.getElementById("timer");

quoteInputElement.addEventListener("input", function () {
    const arrayQuote = quoteDisplayElement.querySelectorAll("span");
    const arrayValue = this.value.split("");

    let correct = true;
    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index];
        if (character == null) {
            characterSpan.classList.remove("correct");
            characterSpan.classList.remove("incorrect");
            correct = false;
        } else if (character === characterSpan.innerText) {
            characterSpan.classList.add("correct");
            characterSpan.classList.remove("incorrect");
        } else {
            characterSpan.classList.remove("correct");
            characterSpan.classList.add("incorrect");
            correct = false
        }
    });

    if (correct) {
        renderNewQuote();
    }
});

function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content);
}

async function renderNewQuote() {
    const quote = await getRandomQuote();
    quoteDisplayElement.innerText = "";
    quote.split("").forEach(character => {
        const characterSpan = document.createElement("span");
        characterSpan.innerText = character;
        quoteDisplayElement.append(characterSpan);
    });
    quoteInputElement.value = null;
    startTimer();
}

let startTime;
function startTimer() {
    timerElement.innerText = 0;
    startTime = new Date();
    setInterval(() => {
        timerElement.innerText = getTimerTime();
    }, 1000);
}

function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000);
}

renderNewQuote();