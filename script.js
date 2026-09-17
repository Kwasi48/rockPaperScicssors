console.log("Hello World")
// function to get computer choice for the game with the help of math.random
function getComputerChoice(){
    rock = "rock";
    paper = "paper";
    scissors = "scissors"; 

    max  = 3;
    value = Math.floor(Math.random() * max);
    if (value === 0) {
        return rock;
    } else if (value === 1){
        return paper;
    } else {
        return scissors;
    }
}

console.log(getComputerChoice())

// function to get human choice for the game
function getHumanChoice(){
    choice = prompt("Enter  rock,  paper or scissors");
    if (choice === rock){
        return rock;
    } else if (choice === paper){
        return paper;
    } else if (choice === scissors)
        {
        return scissors;
    }
}

console.log(getHumanChoice());

// Added the variable to store the scores for the players
humanScore = 0;
computerScore = 0;

function playRound( humanChoice, computerChoice){

}