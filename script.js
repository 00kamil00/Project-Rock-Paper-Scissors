function getComputerChoice() {
    let number = Math.random()

    if (number <= 0.333) {
        console.log("Rock")
    } else if (number <= 0.666) { 
        console.log("Paper")
    } else {
        console.log("Scissors")
    }
}

getComputerChoice()