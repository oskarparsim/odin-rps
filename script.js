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

function getHumanChoice(choice = prompt("Your choice:")) {
    choice = choice.toLowerCase();
    if (choice != "rock" && choice != "paper" && choice != "scissors") {
        console.log("Enter a valid choice")
        return getHumanChoice();
    } else {
        return choice;
    }
}

let humanScore = computerScore = 0;

function playGame() {
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        
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
    let i = 0;
    while(i < 5){
        i++;
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Your score: " + humanScore + "\nComputer score: " + computerScore);
    }
}

playGame();

if (humanScore > computerScore) {
    console.log("You win!")
} else if (humanScore === computerScore) {
    console.log("It's a draw!")
} else {
    console.log("You lose!")
}
console.log("Your final score: " + humanScore + "\nComputer final score: " + computerScore);