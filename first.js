//give an array of choices, array score (to return 2 values as one from func)
let posChoice=["lizard", "scissors","rock","paper","spock"];
let score=[0,0];
let choices = document.querySelectorAll(".choice");
//PC chooses
function computerPlay(){
    let PCchoice= posChoice[Math.floor(Math.random()*(posChoice.length))];
    return PCchoice;
}
//function for 1 round
function round(playerChoice){

  let PCchoice=computerPlay();
document.getElementById("playerChoice").innerHTML=`<img  id="playerChoiceimg" src="img/${playerChoice}.png">`;
document.getElementById("PCChoice").innerHTML=`<img  id="pcChoiceimg" src="img/${PCchoice}.png">`;

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






//checking if the game is ended. If not - update score bar
function game(score){
    if (score[0]==5||score[1]==5){
        document.getElementById("player").textContent=score[0];
        document.getElementById("PC").textContent=score[1];
        choices.forEach(choice=>{
            choice.removeEventListener("click", play);}) 
    }
    if (score[0]==5){
        document.getElementById("result").textContent="You won the game. Again?";
    }
    if (score[1]==5){
        document.getElementById("result").textContent="You lose the game. Again?";
    }
    else{
        document.getElementById("player").textContent=score[0];
        document.getElementById("PC").textContent=score[1];
    }
}
//a function called by the button to start game. Sets everything to 0;
  function start(){ 
      score[0]=0;
      score[1]=0;
      document.getElementById("playerChoice").innerHTML="";
document.getElementById("PCChoice").innerHTML="";
      document.getElementById("player").textContent=score[0];
      document.getElementById("PC").textContent=score[1];
      document.getElementById("result").textContent="";

       choices.forEach(choice=>{
    choice.addEventListener("click", play);
       
   }) } 
   
   
   //I cannot pass parameters at event listener
   //so i had to make this function to look for choice.id
   //this func makes every function work together
   function play(e){
    game(round(e.currentTarget.id))
}   
document.getElementById("start").onclick= start;
     