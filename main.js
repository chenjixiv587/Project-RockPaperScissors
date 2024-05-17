const choices = ["rock", "paper", "scissors"];
const humanScore = 0;
const computerScore = 0;
function getComputerChoice(choices) {
    const choiceIndex = Math.floor(Math.random() * choices.length);
    return choices[choiceIndex];
}

// console.log(getComputerChoice(choices));
function getHumanChoice() {
    const humanChoice = prompt("What do you choose: 'rock, paper, scissors'? ");
    return humanChoice.toLowerCase();
}
// console.log(getHumanChoice());
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
        return `${res}! ${computerSelection} beats ${humanSelection}`
    } else if (res === "You win") {
        return `${res}! ${humanSelection} beats ${computerSelection}`
    } else {
        return res;
    }

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(choices);

const playedResult = playRound(humanSelection, computerSelection);
console.log(playedResult);