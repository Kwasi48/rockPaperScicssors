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