const choices = ["rock", "paper", "scissors"];
function getComputerChoice(choices) {
    const choiceIndex = Math.floor(Math.random() * choices.length);
    return choices[choiceIndex];
}

// console.log(getComputerChoice(choices));