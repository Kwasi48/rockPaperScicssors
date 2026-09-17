console.log("Hello World")

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

function getHumanChoice(){
    choice = parseInt(prompt("Enter 0 for rock, 1 for paper and 2 for scissors"));
    if (choice === 0){
        return rock;
    } else if (choice === 1){
        return paper;
    } else if (choice === 2)
        {
        return scissors;
    }
}

console.log(getHumanChoice());