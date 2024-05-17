const CHOICES = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
function getComputerChoice(choices) {
    const choiceIndex = Math.floor(Math.random() * choices.length);
    return choices[choiceIndex];
}

// console.log(getComputerChoice(choices));
function getHumanChoice() {
    let humanChoice = prompt("What do you choose: 'rock, paper, scissors'? ");
    while (!CHOICES.includes(humanChoice)) {
        alert("Have to give the right choice");
        humanChoice = prompt("What do you choose: 'rock, paper, scissors'? ");
    }
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
        computerScore++;
        return `${res}! ${computerSelection} beats ${humanSelection}`
    } else if (res === "You win") {
        humanScore++;
        return `${res}! ${humanSelection} beats ${computerSelection}`
    } else {
        return res;
    }

}


function playGame() {


    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(CHOICES);
        // playRound(humanSelection, computerSelection, computerScore, humanScore);
        playRound(humanSelection, computerSelection);
        // console.log(humanScore, computerScore);
    }
    if (humanScore > computerScore) {
        return "You win";
    }
    else if (humanScore === computerScore) {
        return "Equal";
    }
    else if (humanScore < computerScore) {
        return "Computer win";
    }
}

console.log(playGame());