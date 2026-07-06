const buttons = document.querySelectorAll("button")
const resultsDiv = document.querySelector("#results")


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const roundResult = playRound(button.textContent, getComputerChoice())
        resultsDiv.textContent = `${roundResult} | Player: ${humanScore} - Computer: ${computerScore}`
        
        if (humanScore === 5) {
            resultsDiv.textContent = "🏆 Congratulations! You won the game!"
        } else if (computerScore === 5) {
            resultsDiv.textContent = "🤖 Game Over! You lose the game!"
        }
    })
})


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


function finalResults() { 
    if (humanScore > computerScore) {
        console.log("You won the game!")
    } else if (computerScore > humanScore) {
        console.log("You lost the game!")
    } else {
        console.log("The final result is a draw!")
    }
}