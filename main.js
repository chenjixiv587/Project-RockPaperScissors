const choices = ["rock", "paper", "scissors"];
const humanScore = 0;
const computerScore = 0;
function getComputerChoice(choices) {
    const choiceIndex = Math.floor(Math.random() * choices.length);
    return choices[choiceIndex];
}

console.log(getComputerChoice(choices));
function getHumanChoice() {
    const humanChoice = prompt("What do you choose: 'rock, paper, scissors'? ");
    return humanChoice;
}
// console.log(getHumanChoice());
