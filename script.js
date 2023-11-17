const OPTIONS = ["rock", "paper", "scissors"];

let getComputerChoice = () => OPTIONS[Math.floor(Math.random() * 3)];

function playerWin(playerSelection, computerSelection) {
    return playerSelection == "scissors" && computerSelection == "paper" || 
           playerSelection == "paper" && computerSelection == "rock" ||
           playerSelection == "rock" && computerSelection == "scissors" ||
           false;
}

let format = (str) => str[0].toUpperCase() + str.slice(1);

function checkRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerWin(playerSelection, computerSelection))
        return `You win! ${format(playerSelection)} beats ${format(computerSelection)}`;
    else if (playerSelection == computerSelection)
        return "It's a tie!";
    else
        return `You lose! ${format(computerSelection)} beats ${format(playerSelection)}`;
}

let rockButton = document.querySelector(".button-rock");
let paperButton = document.querySelector(".button-paper");
let scissorsButton = document.querySelector(".button-scissors");

rockButton.addEventListener("click", () => checkRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => checkRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => checkRound("scissors", getComputerChoice()));

function game() {
    // let n = 5;
    // for(let i = 0; i < n; i++) {
    //     playerChoice = prompt("Enter with one of these three options: rock, paper, scissors.");
    //     console.log(checkRound(playerChoice, getComputerChoice())); 
    // }  
}

game();