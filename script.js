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

function displayResult(result) {
    let pResult = document.createElement('p');
    pResult.textContent = result;

    let divToResult = document.querySelector('.game-result');
    divToResult.appendChild(pResult);
}

let makeRound = (choice) => displayResult(checkRound(choice, getComputerChoice()));

let rockButton = document.querySelector(".button-rock");
let paperButton = document.querySelector(".button-paper");
let scissorsButton = document.querySelector(".button-scissors");

rockButton.addEventListener("click", () => makeRound('rock'));
paperButton.addEventListener("click", () => makeRound('paper'));
scissorsButton.addEventListener("click", () => makeRound('scissors'));