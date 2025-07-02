const btn = document.querySelectorAll("button");
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
let humanScore=0;
let computerScore=0;
const resultdiv = document.getElementById("result");
const scorediv = document.getElementById("score");


function getComputerChoice(){

    let num = Math.round(100 * Math.random())
    let resultC
    console.log(num);

    switch (true) {
        case num <= 33:
        resultC = "ROCK";
        console.log(resultC)
        alert("The computer's choice is " + resultC);
        break;
    
        case num > 33 && num <= 66:
        resultC = "PAPER";
        console.log(resultC)
        alert("The computer's choice is " + resultC);
        break;

        case num > 66:
        resultC = "SCISSORS";
        console.log(resultC)
        alert("The computer's choice is " + resultC);
        break;
        };

    
return resultC;    
};


function getHumanChoice(choice){
    let resultH = choice;
        
    console.log(resultH);
    alert("Your choice is " + resultH);
    return resultH;
};



function playRound(humanSelection, computerSelection){
   let result;
   if (humanScore >=5 || computerScore >= 5)
        return;
    
    if(humanSelection === computerSelection){
        result = "Tie";
        console.log(result);
        alert(result);
        resultdiv.textContent = `It's a tie! You both chose ${humanSelection}.`;
    }
    else if(humanSelection == "PAPER" && computerSelection == "ROCK"){
        result = "Human Wins";   
        console.log(result);
        alert(result);
        humanScore += 1;
        resultdiv.textContent = `You win! ${humanSelection} beats ${computerSelection}.`;          
        }     
    else if(humanSelection == "PAPER" && computerSelection == "SCISSORS"){
        result = "Computer Wins";
        console.log(result);
        alert(result);
        computerScore += 1;
        resultdiv.textContent = `You lose! ${computerSelection} beats ${humanSelection}.`;   
    }
    else if(humanSelection == "ROCK" && computerSelection == "SCISSORS"){
        result = "Human Wins";
        console.log(result);
        alert(result);    
        humanScore += 1;
        resultdiv.textContent = `You win! ${humanSelection} beats ${computerSelection}.`; 
        }
    else if(humanSelection == "ROCK" && computerSelection == "PAPER"){
        result ="Computer Wins";
        console.log(result);
        alert(result);    
        computerScore += 1;
        resultdiv.textContent = `You lose! ${computerSelection} beats ${humanSelection}.`;  
        }      
    else if(humanSelection == "SCISSORS" && computerSelection == "ROCK"){
        result ="Computer Wins";
        console.log(result);
        alert(result);
        computerScore += 1; 
        resultdiv.textContent = `You lose! ${computerSelection} beats ${humanSelection}.`;    
        }
    else if(humanSelection == "SCISSORS" && computerSelection == "PAPER"){
        result = "Human Wins";  
        console.log(result);
        alert(result);    
        humanScore += 1;
        resultdiv.textContent = `You win! ${humanSelection} beats ${computerSelection}.`; 
        }

    scorediv.textContent = `Score -> You: ${humanScore}, Computer: ${computerScore}`;    

    if (humanScore ===5){
        console.log("Human Wins, Game Over");
        resultdiv.textContent = "Human Wins, Game Over";
    }
    else if (computerScore === 5){
        console.log("Computer Wins, Game Over");
        resultdiv.textContent = "Computer Wins, Game Over";
    };

    
};


function playGame(){
   
    console.log(humanScore, computerScore);

    while(humanScore <5 && computerScore <5){
        let roundResult = playRound();
                
        if (roundResult == "Human Wins"){
            humanScore += 1;
        }
        else if (roundResult == "Computer Wins"){
            computerScore += 1;
        }
        roundsRemaining -= 1;
        console.log("Score " + roundResult, "H " + humanScore, "C" + computerScore);
    }
};



btnRock.addEventListener('click', ()=>{ 
    const humanSelection = "ROCK";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)});



btnPaper.addEventListener('click', ()=>{ 
    const humanSelection = "PAPER";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)});


btnScissors.addEventListener('click', ()=>{ 
    const humanSelection = "SCISSORS";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)});
































