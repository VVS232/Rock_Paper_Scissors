let posChoice=["lizard", "scissors","rock","paper","spock"];
let score=[0,0];

function computerPlay(){
    let PCchoice= posChoice[Math.floor(Math.random()*(posChoice.length))];
    return PCchoice;
}
function round(playerChoice){

  let PCchoice=computerPlay();
document.getElementById("playerChoice").innerHTML=`<img class="choice" src="img/${playerChoice}.png">`;
document.getElementById("PCChoice").innerHTML=`<img class="choice" src="img/${PCchoice}.png">`;

    switch(playerChoice){
        case "scissors": 
        if (PCchoice=="paper"||PCchoice=="lizard"){
            score[0]++;
            return score;
        }
        else if(playerChoice==PCchoice){           

            return score;

        }
        else{            
            score[1]++;
            return score;
        }
    
        case "spock": 
        if (PCchoice=="scissors"||PCchoice=="rock"){
            score[0]++;

            return score;
        }
        else if(playerChoice==PCchoice){
           

            return score;

        }
        else{             
            score[1]++;

            return score;
        }
    
        case "rock": 
        if (PCchoice=="lizard"||PCchoice=="scissors"){
            score[0]++;
 
            return score;
        }
        else if(playerChoice==PCchoice){
            return score;

        }
        else{ 
            score[1]++;

            return score;
        }
    
        case "paper": 
        if (PCchoice=="rock"||PCchoice=="spock"){
            score[0]++;

            return score;
        }
        else if(playerChoice==PCchoice){
            return score;

        }
        else{ 
            score[1]++;

            return score;
        }
    
        case "lizard": 
        if (PCchoice=="spock"||PCchoice=="paper"){
            score[0]++;

            return score;
        }
        else if(playerChoice==PCchoice){
            return score;

        }
        else{ 
            score[1]++;

            return score;
        }
    

}
}


function game(score){
    if (score[0]==5||score[1]==5){
        console.log(score);
        console.log("game over");
        score[0]=0;
        score[1]=0;
        document.getElementById("player").textContent=0;
        document.getElementById("PC").textContent=0;
    }
    else{
        document.getElementById("player").textContent=score[0];
        document.getElementById("PC").textContent=score[1];
    }
}
        let choices = document.querySelectorAll(".choice");
        choices.forEach(choice=>{
            choice.addEventListener("click", function (){ game(round(choice.id))});
        })
