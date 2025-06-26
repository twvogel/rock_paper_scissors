
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


function getHumanChoice(){
    let resultH = prompt("ROCK, PAPER, OR SCISSORS?").toUpperCase();
    console.log(resultH);
    alert("Your choice is " + resultH);
    return resultH;
};



function playRound(){
     
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    let result;

    if(humanSelection === computerSelection){
        result = "Tie"
    }
    else if(humanSelection == "PAPER" && computerSelection == "ROCK"){
        result = "Human Wins";   
        console.log(result);
           alert(result);
           return result;
           
        }     
    else if(humanSelection == "PAPER" && computerSelection == "SCISSORS"){
        result = "Computer Wins";
        console.log(result);
           alert(result);   
        return result;
            
            }
    else if(humanSelection == "ROCK" && computerSelection == "SCISSORS"){
        result = "Human Wins";  
        console.log(result);
           alert(result);    
        return result;
           
        }
    else if(humanSelection == "ROCK" && computerSelection == "PAPER"){
        result ="Computer Wins";
        console.log(result);
           alert(result);    
        return result;
            
            }
    else if(humanSelection == "SCISSORS" && computerSelection == "ROCK"){
        result ="Computer Wins";
        console.log(result);
           alert(result);   
        return result;
            
            }
    else if(humanSelection == "SCISSORS" && computerSelection == "PAPER"){
        result = "Human Wins";  
        console.log(result);
           alert(result);    
        return result;
            
        }
    else {return result = "Invalid human Entry"
    };

    console.log(result);
    alert(result);

return result;
}; 



function playGame(){
    let humanScore=0;
    let computerScore=0;
    let roundsRemaining = 5;

    console.log(humanScore, computerScore);

    while(roundsRemaining){
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
}





playGame();
























