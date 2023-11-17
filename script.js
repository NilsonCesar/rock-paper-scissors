const OPTIONS = ["rock", "paper", "scissors"];
let userPoints = computerPoints = 0;
let divResult = document.querySelector('.game-result')

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

    if (playerWin(playerSelection, computerSelection)) {
        userPoints++;
        return `You win! ${format(playerSelection)} beats ${format(computerSelection)}`;
    }
    else if (playerSelection == computerSelection)
        return "It's a tie!";
    else {
        computerPoints++;
        return `You lose! ${format(computerSelection)} beats ${format(playerSelection)}`;
    }
}

function displayResult(result) {
    let pResult = document.createElement('p');
    pResult.textContent = result;
    divResult.appendChild(pResult);
}

function displayVictory() {
    let pMessage = document.createElement('p');
    pMessage.textContent = "Congratulations! You win the game! Restarting game...";
    divResult.appendChild(pMessage);
    restartGame();
}

function displayDefeat() {
    let pMessage = document.createElement('p');
    pMessage.textContent = "Unfortunately, you don't win the game. But, try again!";
    divResult.appendChild(pMessage);
    restartGame();
}

function restartGame() {
    setTimeout(() => {
        divResult.textContent = '';
        userPoints = computerPoints = 0;
     }, 3000);
}

let makeRound = (choice) => {
    displayResult(checkRound(choice, getComputerChoice()))

    if(userPoints == 5)
        displayVictory();
    if(computerPoints == 5)
        displayDefeat()
};

let rockButton = document.querySelector(".button-rock");
let paperButton = document.querySelector(".button-paper");
let scissorsButton = document.querySelector(".button-scissors");

rockButton.addEventListener("click", () => makeRound('rock'));
paperButton.addEventListener("click", () => makeRound('paper'));
scissorsButton.addEventListener("click", () => makeRound('scissors'));