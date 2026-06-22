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
        console.log("You choose the wrong option!")
        return null
    }
}


let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
        return 'draw'
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore ++
        return 'you lose! paper beats rock!'    
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore ++
        return 'you won! rock beats scissors!'
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        return 'draw'
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore ++
        return 'you won! paper beats rock!'
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore ++
        return 'you lose! scissors beats paper!'
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        return 'draw'
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore ++
        return 'you lose! rock beats scissors!'
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore ++
        return 'you won! scissors beats paper!'
    }
}


function playGame() {
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()
    console.log(playRound(humanSelection, computerSelection))
    console.log(humanScore)
    console.log(computerScore)
}

playGame()
playGame()
playGame()
playGame()
playGame()