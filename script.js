function getComputerChoice() {
    let number = Math.random()
    if (number <= 0.333) {
        return "rock"
    } else if (number <= 0.666) { 
        return "paper"
    } else {
        return "scissors"
    }
}

getComputerChoice()


function getHumanChoice() {
    let option = prompt("Choose rock, paper or scissors!")
    if (option === null) {
        console.log("You cancelled the game!")
        return null
    }

    option = option.toLowerCase()

    if (option === "rock") {
        return "rock"
    } else if (option === "paper") {
        return "paper"
    } else if (option === "scissors") {
        return "scissors"
    } else {
        console.log("You chose the wrong option!")
        return null
    }
}


let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "draw"
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore ++ 
        return "you won this round!"
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore ++
        return "you won this round!"
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore ++ 
        return "you won this round!"
    } else {
        computerScore ++ 
        return "you lose this round!"
    }
}


function playGame() {
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()
    console.log(playRound(humanSelection, computerSelection))
    console.log(humanScore)
    console.log(computerScore)
}




function finalResults() { 
    playGame()
    playGame()
    playGame()
    playGame()
    playGame()
    if (humanScore > computerScore) {
        console.log("You won the game!")
    } else if (computerScore > humanScore) {
        console.log("You lost the game!")
    } else {
        console.log("The final result is a draw!")
    }
}

finalResults()