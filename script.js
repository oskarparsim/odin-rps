function getComputerChoice() {
    let nr = Math.random() * 100;
    if (nr <= 33.3) {
        return "rock"
    } else if (nr <= 66.6) {
        return "paper"
    } else {
        return "scissors"
    }
}

let humanScore = computerScore = 0;
let humanChoice = computerChoice = "";

const yourChoice = document.createElement("p");
yourChoice.textContent = `Your choice: ${humanChoice}`

const theirChoice = document.createElement("p");
theirChoice.textContent = `Computer choice: ${computerChoice}`;

function playRound(humanChoice) {
    // humanChoice = humanChoice.toLowerCase();
    computerChoice = getComputerChoice().toLowerCase();
    
    yourChoice.textContent = `Your choice: ${humanChoice}`;  
    theirChoice.textContent = `Computer choice: ${computerChoice}`;

    if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        console.log("You lose! Paper beats rock");
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        console.log("You win! Rock beats scissors");
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        console.log("You win! Paper beats rock");
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        console.log("You lose! Scissors beat paper");
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        console.log("You lose! Rock beats scissors");
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log("You win! Scissors beat paper");
    } else if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    }
}

const humanCounter = document.createElement("p");
humanCounter.textContent = `Human score: ${humanScore}`

const computerCounter = document.createElement("p");
computerCounter.textContent = `Computer score: ${computerScore}`

const results = document.querySelector(".results");
results.appendChild(humanCounter);
results.appendChild(computerCounter);

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");



const buttons = document.querySelector(".buttons");
buttons.addEventListener('click', (e) => {
    let event = e.target;
    let humanChoice = event.id;
    switch(humanChoice) {
        case 'rock':
            playRound('rock');
            break;
        case 'paper':
            playRound('paper');
            break;
        case 'scissors':
            playRound('scissors');
            break;
    }
    humanCounter.textContent = `Human score: ${humanScore}`;
    computerCounter.textContent = `Computer score: ${computerScore}`;
    if (humanScore == 5) {
        alert("Human won!");
    } else if (computerScore == 5) {
        alert("Computer won!");
    };

});

const choices = document.querySelector(".choices");
choices.appendChild(yourChoice);
choices.appendChild(theirChoice);