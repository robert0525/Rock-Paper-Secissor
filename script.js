let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s"); 

function getComputerChoice()    {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win (userChoice, computerChoice) {
    userScore++; 
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + " beats " + computerChoice + ". You WIN !!!";
}

function lose () {
    computerScore++; 
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = computerScore + " beats " + userScore + ". You lose !!!";
}

function draw () {
    console.log("DRAWW");
    result_p.innerHTML = computerScore + " beats " + userScore + ". It's a draw !!!";
}


function game(userChoice)   {
    const computerChoice = getComputerChoice();
    switch ( userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win();
        break;
        case "rp":
        case "ps":
        case "sr":
            lose();
        break;
        case "rr":
        case "pp":
        case "ss":
            draw();
        break;
    }
}
 


function main() { 
    rock_div.addEventListener('click' , function(){
    game("r");
    })

    paper_div.addEventListener('click' , function(){
        game("p");
    })

    scissor_div.addEventListener('click' , function(){
        game("s");
    })

}

main();