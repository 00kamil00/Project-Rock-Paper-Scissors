// function getComputerChoice() {
//     let number = Math.random()

//     if (number <= 0.333) {
//         console.log("Rock")
//     } else if (number <= 0.666) { 
//         console.log("Paper")
//     } else {
//         console.log("Scissors")
//     }
// }

function getHumanChoice() {
    let option = prompt("Choose rock, paper or scissors!")
    if (option === "rock") {
        return "rock"
    } else if (option === "paper") {
        return "paper"
    } else if (option === "scissors") {
        return "scissors"
    } else {
        return "You choose the wrong option!"
    }
}

getHumanChoice()