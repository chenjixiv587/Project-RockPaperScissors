const CHOICES = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
function getComputerChoice(choices) {
    const choiceIndex = Math.floor(Math.random() * choices.length);
    return choices[choiceIndex];
}

function choiceToValue(choice) {
    let value = 0;
    if (choice === "scissors") {
        value = 1;
    } else if (choice === "rock") {
        value = 2;
    } else if (choice === "paper") {
        value = 3;
    }
    return value;
}
function winOrLose(value1, value2) {
    const result = value1 - value2;
    if (result === 0) {
        return "Equal";
    }
    else if (result === -2 || result === 1) {
        return "Computer win";
    }
    else if (result === -1 || result === 2) {
        return "You win";
    }
}
function playRound(humanSelection, computerSelection) {
    let res = winOrLose(choiceToValue(computerSelection), choiceToValue(humanSelection));
    if (res === "Computer win") {
        computerScore++;
        return `${res}! ${computerSelection} beats ${humanSelection}`
    } else if (res === "You win") {
        humanScore++;
        return `${res}! ${humanSelection} beats ${computerSelection}`
    } else {
        return res;
    }
}

const userChoices = document.querySelector(".choices");
const showResult = document.querySelector(".showResult");
const controller = new AbortController();
userChoices.addEventListener("click", (e) => {
    let humanSelection = e.target.textContent.toLowerCase();
    let computerSelection = getComputerChoice(CHOICES);
    let result = playRound(humanSelection, computerSelection);
    showResult.textContent = `${result}, Human Now Score: ${humanScore}, Computer Now Score: ${computerScore}`;
    if (humanScore >= 5) {
        showResult.textContent = "You win!"
        controller.abort();
    } else if (computerScore >= 5) {
        showResult.textContent = "Computer win!"
        controller.abort();
    }
}, { signal: controller.signal });