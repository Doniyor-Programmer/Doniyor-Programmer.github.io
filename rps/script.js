const computerChoiceDisplay = document.querySelector("#computer-choice"),
      userChoiceDisplay = document.querySelector("#user-choice"),
      resultDisplay = document.querySelector("#result"),
      possibleChoices = document.querySelectorAll("button");

let userChoice, computerChoice, result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);

    switch (randomNumber) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = "scissors";
            break;
        case 2:
            computerChoice = "paper";
            break;
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!";
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = "You win!";
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = "You lost!";
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = "You win!";
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = "You lose!";
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = "You win!";
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = "You lose!";
    }
    resultDisplay.innerHTML = result;
}