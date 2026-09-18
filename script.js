//console.log("Hello World")
// function to get computer choice for the game with the help of math.random

rock = "rock";
paper = "paper";
scissors = "scissors"; 

function getComputerChoice(){

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

//console.log(getComputerChoice())

// function to get human choice for the game
function getHumanChoice(){
    choice = prompt("Enter  rock,  paper or scissors");
    choice = choice.toLowerCase();
    if (choice === rock){
        return rock;
    } else if (choice === paper){
        return paper;
    } else if (choice === scissors)
        {
        return scissors;
    }
}

//console.log(getHumanChoice());

// Added the variable to store the scores for the players
// humanScore = 0;
// computerScore = 0;

// function playRound( humanChoice, computerChoice){
//     //humanChoice = humanChoice.toLowerCase();
//     if ( humanChoice === rock && computerChoice === paper){
//         computerScore = computerScore + 1;
//         return "You lose! Paper beats Rock";
//     }

//     if ( humanChoice === paper && computerChoice === scissors){
//         computerScore = computerScore + 1;
//         return "You lose! Scissors beats Paper";
//     }

//     if ( humanChoice === scissors && computerChoice === rock){
//         computerScore = computerScore + 1;
//         return "You lose! Rock beats scissors";
//     }

//     if ( humanChoice === paper && computerChoice === rock){
//         humanScore = humanScore + 1;
//         return "You win! Paper beats Rock";
//     }

//     if ( humanChoice === scissors && computerChoice === paper){
//         humanScore = humanScore + 1;
//         return "You win! Scissors beats Paper";
//     }

//     if ( humanChoice === rock && computerChoice === scissors){
//         humanScore = humanScore + 1;
//         return "You win! ROck beats scissors";
//     }

//     if ( humanChoice === rock && computerChoice === rock){
//         return "Draw";
//     }

//      if ( humanChoice === paper && computerChoice === paper){
//         return "Draw";
//     }

//      if ( humanChoice === scissors && computerChoice === scissors){
//         return "Draw";
//     }

// }

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// console.log(humanSelection);
// console.log(computerSelection);

//console.log(playRound(humanSelection, computerSelection));

function playGame(){
    humanScore = 0;
    computerScore = 0;
    rounds = 5;

    function playRound( humanChoice, computerChoice){
        //humanChoice = humanChoice.toLowerCase();
        if ( humanChoice === rock && computerChoice === paper){
            computerScore = computerScore + 1;
            return "You lose! Paper beats Rock";
        }

        if ( humanChoice === paper && computerChoice === scissors){
            computerScore = computerScore + 1;
            return "You lose! Scissors beats Paper";
        }

        if ( humanChoice === scissors && computerChoice === rock){
            computerScore = computerScore + 1;
            return "You lose! Rock beats scissors";
        }

        if ( humanChoice === paper && computerChoice === rock){
            humanScore = humanScore + 1;
            return "You win! Paper beats Rock";
        }

        if ( humanChoice === scissors && computerChoice === paper){
            humanScore = humanScore + 1;
            return "You win! Scissors beats Paper";
        }

        if ( humanChoice === rock && computerChoice === scissors){
            humanScore = humanScore + 1;
            return "You win! ROck beats scissors";
        }

        if ( humanChoice === rock && computerChoice === rock){
            return "Draw";
        }

        if ( humanChoice === paper && computerChoice === paper){
            return "Draw";
        }

        if ( humanChoice === scissors && computerChoice === scissors){
            return "Draw";
        }

    }

    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());

    return "humanScore:" + humanScore + " computerScore:" + computerScore;

}

console.log(playGame());