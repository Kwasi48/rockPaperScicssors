//console.log("Hello World")
// function to get computer choice for the game with the help of math.random

const master = document.querySelector("#soki");
const result = document.querySelector("#soky");
const final_r = document.querySelector("#soke");

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
function getHumanChoice(choice){
    //choice = prompt("Enter  rock,  paper or scissors");
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

const btn_r = document.createElement("button");
btn_r.classList.add("btn_r")
const btn_p = document.createElement("button");
btn_p.classList.add("btn_p")
const btn_s = document.createElement("button");
btn_s.classList.add("btn_s")

 

btn_r.textContent = rock;
btn_p.textContent = paper;
btn_s.textContent = scissors;

btn_r.value = rock;
btn_p.value= paper;
btn_s.value = scissors;

//console.log(getHumanChoice());

//Added the variable to store the scores for the players
humanScore = 0;
computerScore = 0;

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

// function playGame(){
//     humanScore = 0;
//     computerScore = 0;
//     //Todo: Change the repitive functions to a loop
//     //rounds = 5;

//     function playRound( humanChoice, computerChoice){
//         //humanChoice = humanChoice.toLowerCase();
//         if ( humanChoice === rock && computerChoice === paper){
//             computerScore = computerScore + 1;
//             return "You lose! Paper beats Rock";
//         }

//         if ( humanChoice === paper && computerChoice === scissors){
//             computerScore = computerScore + 1;
//             return "You lose! Scissors beats Paper";
//         }

//         if ( humanChoice === scissors && computerChoice === rock){
//             computerScore = computerScore + 1;
//             return "You lose! Rock beats scissors";
//         }

//         if ( humanChoice === paper && computerChoice === rock){
//             humanScore = humanScore + 1;
//             return "You win! Paper beats Rock";
//         }

//         if ( humanChoice === scissors && computerChoice === paper){
//             humanScore = humanScore + 1;
//             return "You win! Scissors beats Paper";
//         }

//         if ( humanChoice === rock && computerChoice === scissors){
//             humanScore = humanScore + 1;
//             return "You win! ROck beats scissors";
//         }

//         if ( humanChoice === rock && computerChoice === rock){
//             return "Draw";
//         }

//         if ( humanChoice === paper && computerChoice === paper){
//             return "Draw";
//         }

//         if ( humanChoice === scissors && computerChoice === scissors){
//             return "Draw";
//         }

//     }

//     // playRound(getComputerChoice(), getHumanChoice());
//     // playRound(getComputerChoice(), getHumanChoice());
//     // playRound(getComputerChoice(), getHumanChoice());
//     // playRound(getComputerChoice(), getHumanChoice());
//     // playRound(getComputerChoice(), getHumanChoice());

//     return "humanScore:" + humanScore + " computerScore:" + computerScore;

// }

//console.log(playGame());

function playRound( humanChoice, computerChoice){
        //humanChoice = humanChoice.toLowerCase();
        if ( humanChoice === rock && computerChoice === paper){
            computerScore = computerScore + 1;
            
        }

        if ( humanChoice === paper && computerChoice === scissors){
            computerScore = computerScore + 1;
        
        }

        if ( humanChoice === scissors && computerChoice === rock){
            computerScore = computerScore + 1;
        }

        if ( humanChoice === paper && computerChoice === rock){
            humanScore = humanScore + 1;
        }

        if ( humanChoice === scissors && computerChoice === paper){
            humanScore = humanScore + 1;
        }

        if ( humanChoice === rock && computerChoice === scissors){
            humanScore = humanScore + 1;
        }

        if ( humanChoice === rock && computerChoice === rock){
            humanScore = humanScore;
            computerScore = computerScore;
        }

        if ( humanChoice === paper && computerChoice === paper){
            humanScore = humanScore;
            computerScore = computerScore;
        }

        if ( humanChoice === scissors && computerChoice === scissors){
            humanScore = humanScore;
            computerScore = computerScore;
        }

        

    }


function resetScore (){
    humanScore = 0;
    computerScore = 0;
}
function resetWin(){
    if ( humanScore === 1 || computerScore === 1){
    final_r.textContent = "";
    }
}

function finalScore(){
    if (humanScore === 5){
        final_r.textContent =  "you win!";
        resetScore();
         
        } 
    else if (computerScore === 5) {
        final_r.textContent = "machine wins!"
        resetScore();
       
        }
        
}



btn_r.addEventListener("click", ()=>{
    playRound(getHumanChoice(rock),getComputerChoice());
    result.textContent = "humanScore:" + humanScore + "     computerScore:" + computerScore;
    finalScore();
    resetWin()
    

})
btn_p.addEventListener("click", () => {
    playRound(getHumanChoice(paper), getComputerChoice());
    result.textContent = "humanScore:" + humanScore + "     computerScore:" + computerScore;
    finalScore();
    resetWin()
})
btn_s.addEventListener("click", () => {
    playRound(getHumanChoice(scissors), getComputerChoice());
    result.textContent = "humanScore:" + humanScore + "     computerScore:" + computerScore;
    finalScore()
    resetWin()
})

master.appendChild(btn_r);
master.appendChild(btn_p);
master.appendChild(btn_s);





// if (humanScore === 5){
//     final_r.textContent =  "you win!";
// } else if (computerScore === 5) {
//     final_r.textContent = "machine wins!"
// }

